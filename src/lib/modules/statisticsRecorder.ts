// eslint-disable-next-line @typescript-eslint/no-require-imports
const { getHistoryGated } = require('../historyGate') as {
    getHistoryGated: (
        adapter: { sendToAsync(instance: string, command: string, message: unknown): Promise<unknown> },
        instance: string,
        message: unknown,
    ) => Promise<unknown>;
};

interface EntityData {
    entities: EntityLike[];
    entityId2Entity: Record<string, EntityLike>;
}

interface EntityLike {
    entity_id?: string;
    context: {
        STATE: {
            getId?: string;
            setId?: string;
        };
    };
    attributes: {
        unit_of_measurement?: string;
        device_class?: string;
    };
}

/**
 * Map an ioBroker/HA device_class to a statistics unit_class (used for unit grouping/conversion in
 * the energy dashboard). Energy/volume classes are "sum" statistics; everything else has no class.
 *
 * @param deviceClass - HA device_class (e.g. 'energy', 'power')
 * @returns the unit_class or null
 */
function unitClassForDeviceClass(deviceClass: string | undefined): string | null {
    switch (deviceClass) {
        case 'energy':
        case 'energy_storage':
            return 'energy';
        case 'power':
            return 'power';
        case 'gas':
        case 'water':
        case 'volume':
        case 'volume_storage':
            return 'volume';
        default:
            return null;
    }
}

/**
 * How much of the base unit one of these units is. The frontend asks for its statistics in a unit of
 * its choice (the energy dashboard wants kWh and kW) and expects the backend to convert - Home
 * Assistant's recorder does that from the statistic's own unit. Without it a meter in Wh is drawn as
 * if it counted kWh (#741).
 */
const UNIT_FACTORS: Record<string, Record<string, number>> = {
    // base: Wh
    energy: {
        Wh: 1,
        kWh: 1000,
        MWh: 1e6,
        GWh: 1e9,
        TWh: 1e12,
        mWh: 0.001,
        J: 1 / 3600,
        kJ: 1000 / 3600,
        MJ: 1e6 / 3600,
        GJ: 1e9 / 3600,
        cal: 4.184 / 3600,
        kcal: 4184 / 3600,
        Mcal: 4.184e6 / 3600,
        Gcal: 4.184e9 / 3600,
    },
    // base: W
    power: { mW: 0.001, W: 1, kW: 1000, MW: 1e6, GW: 1e9, TW: 1e12 },
    // base: L
    volume: {
        mL: 0.001,
        L: 1,
        'm³': 1000,
        'ft³': 28.316846592,
        CCF: 2831.6846592,
        gal: 3.785411784,
        'fl. oz.': 0.0295735295625,
    },
};

/**
 * Factor to get from one unit into another, or null when the pair is unknown (then nothing is
 * converted - a wrong factor would be worse than an unconverted value).
 *
 * @param unitClass - the unit class both units belong to
 * @param from - the unit of the statistic
 * @param to - the unit the frontend asked for
 */
function conversionFactor(unitClass: string | null, from: string | undefined, to: string | undefined): number | null {
    if (!unitClass || !from || !to || from === to) {
        return null;
    }
    const factors = UNIT_FACTORS[unitClass];
    const fromFactor = factors?.[from];
    const toFactor = factors?.[to];
    if (!fromFactor || !toFactor) {
        return null;
    }
    return fromFactor / toFactor;
}

/** A single statistics bucket in the shape Home Assistant's recorder/statistics_during_period returns. */
interface StatValue {
    start: number;
    end: number;
    [field: string]: number | null;
}

interface ServerWithSendResponse {
    _sendResponse(ws: unknown, id: unknown, result?: unknown): void;
}

interface PersonModuleInterface {
    getUserIDFromName(name: string | undefined): string;
}

/** How a cost statistic is calculated, as the energy module describes it. */
interface CostStatistic {
    sourceStatisticId: string;
    price?: number;
    priceEntityId?: string;
}

/**
 * Create statistics in the backend and send them to the frontend.
 */
class StatisticsRecorder {
    private server: ServerWithSendResponse;
    private adapter: ioBroker.Adapter & { config: Record<string, unknown> };
    private log: ioBroker.Logger;
    private personModule: PersonModuleInterface;
    private dataSingleton: EntityData;
    private getCostStatistic: (statisticId: string) => CostStatistic | undefined;
    private getCurrency: () => string;

    /**
     * Constructor
     *
     * @param options - options
     * @param options.server - server for sending responses to clients
     * @param options.adapter - ioBroker adapter instance
     * @param options.log - ioBroker logger
     * @param options.personModule - person module for user id resolution
     * @param options.dataSingleton - shared entity data singleton
     * @param options.getCostStatistic - describes a cost statistic of the energy dashboard
     * @param options.getCurrency - the currency of the ioBroker installation
     */
    constructor(options: {
        server: ServerWithSendResponse;
        adapter: ioBroker.Adapter & { config: Record<string, unknown> };
        log: ioBroker.Logger;
        personModule: PersonModuleInterface;
        dataSingleton: EntityData;
        getCostStatistic?: (statisticId: string) => CostStatistic | undefined;
        getCurrency?: () => string;
    }) {
        this.server = options.server;
        this.adapter = options.adapter;
        this.log = options.log;
        this.personModule = options.personModule;
        this.dataSingleton = options.dataSingleton;
        this.getCostStatistic = options.getCostStatistic || ((): undefined => undefined);
        this.getCurrency = options.getCurrency || ((): string => 'EUR');
    }

    /**
     * Get history for entity.
     *
     * @param id - ioBroker state id to get history for
     * @param start - start timestamp in milliseconds
     * @param end - end timestamp in milliseconds
     * @param step - aggregation step size in milliseconds
     * @param aggregate - aggregation function (min, max, average, total, onchange)
     * @param user - ioBroker user id for access control
     */
    async getHistory(
        id: string,
        start: number,
        end: number,
        step: number,
        aggregate: string | undefined,
        user: string,
    ): Promise<unknown[]> {
        if (!this.adapter.config.history) {
            this.log.warn(`History instance is not selected in the settings`);
            return [];
        }
        if (!id) {
            return [];
        }
        const history = this.adapter.config.history as string;

        // Fetch one page [pageStart, pageEnd] of history.
        const fetchPage = async (pageStart: number, pageEnd: number): Promise<unknown[]> => {
            const count = Math.max(1, Math.ceil((pageEnd - pageStart) / step));
            const result = (await getHistoryGated(this.adapter, history, {
                id,
                options: { start: pageStart, end: pageEnd, step, count, aggregate, user },
            })) as Record<string, unknown> | undefined;
            if (result?.error) {
                const errText = typeof result.error === 'string' ? result.error : JSON.stringify(result.error);
                this.log.error(`Error getting history for ${id}: ${errText}`);
            }
            return (result?.result as unknown[]) || [];
        };

        // Page the request by time so a single getHistory response can never grow large enough to
        // blow the redis output buffer (ioBroker transfers a big sendTo reply via a state read with
        // GET; a multi-hundred-MB reply makes redis close the states connection -> "write ECONNRESET").
        const MAX_BUCKETS_PER_PAGE = 1000;
        const totalBuckets = Math.max(1, Math.ceil((end - start) / step));
        if (totalBuckets <= MAX_BUCKETS_PER_PAGE) {
            return fetchPage(start, end);
        }
        const out: unknown[] = [];
        const pageSpan = MAX_BUCKETS_PER_PAGE * step;
        for (let pageStart = start; pageStart < end; pageStart += pageSpan) {
            out.push(...(await fetchPage(pageStart, Math.min(end, pageStart + pageSpan))));
        }
        return out;
    }

    /**
     * Process message from the frontend.
     *
     * @param ws - websocket connection to the client
     * @param message - the message from the frontend
     */
    /**
     * Build the statistics of a cost that Home Assistant would record with a cost sensor: the energy
     * consumed in each bucket, multiplied by the price of that bucket.
     *
     * @param cost - what the cost follows and at which price
     * @param start - start of the requested range in milliseconds
     * @param end - end of the requested range in milliseconds
     * @param step - bucket size in milliseconds
     * @param user - ioBroker user id for access control
     * @param types - the fields the frontend asked for
     * @returns the buckets, empty when the energy meter has no history
     */
    private async _costStatistics(
        cost: CostStatistic,
        start: number,
        end: number,
        step: number,
        user: string,
        types: string[] | undefined,
    ): Promise<StatValue[]> {
        const source = this.dataSingleton.entityId2Entity[cost.sourceStatisticId];
        const sourceId = source?.context.STATE.getId || source?.context.STATE.setId || '';
        if (!sourceId) {
            this.log.warn(`Cannot calculate the costs of ${cost.sourceStatisticId}: the entity has no state to read.`);
            return [];
        }

        // Prices per bucket: either the fixed one, or what the price entity averaged in that bucket.
        const prices = new Map<number, number>();
        if (cost.priceEntityId) {
            const priceEntity = this.dataSingleton.entityId2Entity[cost.priceEntityId];
            const priceId = priceEntity?.context.STATE.getId || priceEntity?.context.STATE.setId || '';
            if (!priceId) {
                this.log.warn(`Cannot calculate costs: the price entity ${cost.priceEntityId} has no state to read.`);
                return [];
            }
            const priceSeries = (await this.getHistory(priceId, start, end, step, 'average', user)) as {
                ts: number;
                val: unknown;
            }[];
            for (const point of priceSeries) {
                const value = Number(point.val);
                if (point.val != null && !isNaN(value)) {
                    prices.set(point.ts, value);
                }
            }
        }

        // The counter value per bucket, one bucket before the range so the first one gets a delta too.
        const series = (await this.getHistory(sourceId, start - step, end, step, 'max', user)) as {
            ts: number;
            val: unknown;
        }[];

        const wantState = types?.includes('state');
        const wantSum = types?.includes('sum');
        const wantChange = types?.includes('change');
        const buckets: StatValue[] = [];
        let previous: number | undefined;
        let lastPrice = cost.price;
        let total = 0;
        for (let i = 0; i < series.length; i++) {
            const value = Number(series[i].val);
            if (series[i].val == null || isNaN(value)) {
                continue; // gap: keep the previous reading so the next one still gets a delta
            }
            if (series[i].ts >= start && series[i].ts <= end) {
                // A price entity without a value in this bucket keeps the last known price, the way
                // a cost sensor would: it only changes when the price entity changes.
                const price = cost.priceEntityId ? (prices.get(series[i].ts) ?? lastPrice) : cost.price;
                if (price !== undefined) {
                    lastPrice = price;
                }
                const bucket: StatValue = { start: series[i].ts, end: Math.min(series[i + 1]?.ts ?? end, end) };
                const consumed = previous !== undefined && value >= previous ? value - previous : null;
                const change = consumed !== null && price !== undefined ? consumed * price : null;
                if (change !== null) {
                    total += change;
                }
                if (wantChange) {
                    bucket.change = change;
                }
                if (wantSum) {
                    bucket.sum = total;
                }
                if (wantState) {
                    bucket.state = total;
                }
                buckets.push(bucket);
            }
            previous = value;
        }
        return buckets;
    }

    async processMessage(ws: unknown, message: Record<string, unknown>): Promise<boolean | undefined> {
        const msgType = message.type as string | undefined;
        if (msgType?.startsWith('recorder/')) {
            if (msgType === 'recorder/info') {
                const result = {
                    backlog: 0,
                    db_in_default_location: true,
                    max_backlog: 65000,
                    migration_in_progress: false,
                    migration_is_live: false,
                    recording: true,
                    thread_running: true,
                };
                this.server._sendResponse(ws, message.id, result);
                return true;
            } else if (msgType === 'recorder/get_statistics_metadata') {
                const result = [];
                for (const entityId of message.statistic_ids as string[]) {
                    if (this.getCostStatistic(entityId)) {
                        // Money: a sum without a unit class, so nothing tries to convert it.
                        const currency = this.getCurrency();
                        result.push({
                            statistic_id: entityId,
                            display_unit_of_measurement: currency,
                            has_mean: false,
                            has_sum: true,
                            name: null,
                            source: 'recorder',
                            statistics_unit_of_measurement: currency,
                            unit_class: null,
                        });
                        continue;
                    }
                    const entity = this.dataSingleton.entityId2Entity[entityId];
                    if (!entity) {
                        this.log.warn(`Entity ${entityId} not found`);
                        continue;
                    }
                    this.log.debug(`Getting metadata for ${entityId}`);
                    const unitClass = unitClassForDeviceClass(entity.attributes.device_class);
                    const isSum = unitClass === 'energy' || unitClass === 'volume';
                    result.push({
                        statistic_id: entityId,
                        display_unit_of_measurement: entity.attributes.unit_of_measurement,
                        has_mean: !isSum,
                        has_sum: isSum,
                        name: null,
                        source: 'recorder',
                        statistics_unit_of_measurement: entity.attributes.unit_of_measurement,
                        unit_class: unitClass,
                    });
                }
                this.server._sendResponse(ws, message.id, result);
                return true;
            } else if (msgType === 'recorder/list_statistic_ids') {
                // List the statistics the frontend can pick from (used e.g. by the energy dashboard).
                // Every entity that has a unit is offered; energy/volume device classes are reported as
                // "sum" statistics, everything else as arithmetic-mean statistics.
                const filter = message.statistic_type as string | undefined; // 'sum' | 'mean' | undefined
                const result = [];
                for (const entity of this.dataSingleton.entities) {
                    const unit = entity.attributes?.unit_of_measurement;
                    if (!unit) {
                        continue;
                    }
                    const unitClass = unitClassForDeviceClass(entity.attributes?.device_class);
                    const isSum = unitClass === 'energy' || unitClass === 'volume';
                    if (filter === 'sum' && !isSum) {
                        continue;
                    }
                    if (filter === 'mean' && isSum) {
                        continue;
                    }
                    result.push({
                        statistic_id: entity.entity_id,
                        display_unit_of_measurement: unit,
                        has_sum: isSum,
                        mean_type: isSum ? 0 : 1, // StatisticMeanType: NONE / ARITHMETIC
                        name: null,
                        source: 'recorder',
                        statistics_unit_of_measurement: unit,
                        unit_class: unitClass,
                    });
                }
                this.server._sendResponse(ws, message.id, result);
                return true;
            } else if (msgType === 'recorder/statistics_during_period') {
                this.log.debug(`Getting statistics for period ${JSON.stringify(message)}`);
                const result: Record<string, StatValue[]> = {};
                const wsWithAuth = ws as { __auth?: { username?: string } };
                const user = this.personModule.getUserIDFromName(wsWithAuth.__auth?.username);
                const start = new Date(message.start_time as string).getTime();
                // Clamp the end to "now". The energy dashboard requests the end of the current period
                // (the rest of today, i.e. the future). Some history backends (e.g. InfluxDB with
                // carry-forward / "still record the same values" fill) then return the last value for
                // buckets past now, which the frontend draws as a phantom line running into the future.
                // Never build buckets beyond the present.
                const requestedEnd = message.end_time ? new Date(message.end_time as string).getTime() : Date.now();
                const end = Math.min(requestedEnd, Date.now());
                let step: number;
                switch (message.period as string) {
                    case '5minute':
                        step = 300000;
                        break;
                    case 'hour':
                        step = 3600000;
                        break;
                    case 'day':
                        step = 86400000;
                        break;
                    case 'week':
                        step = 604800000;
                        break;
                    case 'month':
                        step = 2628000000;
                        break;
                    default:
                        this.log.warn(`Unknown period ${String(message.period)}, default to hour`);
                        step = 3600000;
                        break;
                }
                const types = message.types as string[] | undefined;
                const wantMean = types?.includes('mean');
                const wantMin = types?.includes('min');
                const wantMax = types?.includes('max');
                const wantState = types?.includes('state');
                const wantSum = types?.includes('sum');
                const wantChange = types?.includes('change');

                for (const entityId of message.statistic_ids as string[]) {
                    // The energy dashboard asks for cost statistics that no entity stands behind:
                    // they follow an energy meter at the price configured for it.
                    const cost = this.getCostStatistic(entityId);
                    if (cost) {
                        result[entityId] = await this._costStatistics(cost, start, end, step, user, types);
                        continue;
                    }
                    const entity = this.dataSingleton.entityId2Entity[entityId];
                    if (!entity) {
                        this.log.warn(`Entity ${entityId} not found`);
                        continue;
                    }
                    const id = entity.context.STATE.getId || entity.context.STATE.setId || '';
                    if (!id) {
                        continue;
                    }
                    // The frontend asks for a unit (the energy dashboard wants kWh and kW) and
                    // expects the values in it.
                    const units = message.units as Record<string, string> | undefined;
                    const unitClass = unitClassForDeviceClass(entity.attributes.device_class);
                    const factor = conversionFactor(
                        unitClass,
                        entity.attributes.unit_of_measurement,
                        unitClass ? units?.[unitClass] : undefined,
                    );
                    this.log.debug(`Getting statistics for ${entityId}`);

                    const buckets = new Map<number, StatValue>();
                    const bucketAt = (bucketStart: number, bucketEnd: number): StatValue => {
                        let bucket = buckets.get(bucketStart);
                        if (!bucket) {
                            bucket = { start: bucketStart, end: bucketEnd };
                            buckets.set(bucketStart, bucket);
                        }
                        return bucket;
                    };

                    // mean / min / max: direct ioBroker aggregations per bucket -> the matching HA field.
                    const meanLike: [boolean | undefined, string, string][] = [
                        [wantMean, 'average', 'mean'],
                        [wantMin, 'min', 'min'],
                        [wantMax, 'max', 'max'],
                    ];
                    for (const [wanted, iobAggregate, field] of meanLike) {
                        if (!wanted) {
                            continue;
                        }
                        const series = (await this.getHistory(id, start, end, step, iobAggregate, user)) as {
                            ts: number;
                            val: unknown;
                        }[];
                        for (let i = 0; i < series.length; i++) {
                            // Skip empty buckets (ioBroker returns null for an hour without data). A
                            // null field would crash the frontend's statistics-to-history converter,
                            // which does `(value.mean ?? value.state).toString()`.
                            if (series[i].val == null) {
                                continue;
                            }
                            const value = Number(series[i].val);
                            // Ignore points past the (clamped) end so a backend that carries the last
                            // value forward cannot create a future-dated bucket.
                            if (!isNaN(value) && series[i].ts <= end) {
                                bucketAt(series[i].ts, Math.min(series[i + 1]?.ts ?? end, end))[field] = value;
                            }
                        }
                    }

                    // sum / state / change: the energy dashboard requests `change` (energy consumed per
                    // bucket). Derive it from the per-bucket counter value (max-in-bucket ~ value at the
                    // end of the bucket); change = delta vs. the previous bucket. We fetch one extra
                    // bucket before `start` so the first in-range bucket also gets a delta.
                    if (wantSum || wantState || wantChange) {
                        const series = (await this.getHistory(id, start - step, end, step, 'max', user)) as {
                            ts: number;
                            val: unknown;
                        }[];
                        let previous: number | undefined;
                        for (let i = 0; i < series.length; i++) {
                            if (series[i].val == null) {
                                continue; // gap: keep previous so the next real reading still gets a delta
                            }
                            const value = Number(series[i].val);
                            if (series[i].ts >= start && series[i].ts <= end && !isNaN(value)) {
                                const bucket = bucketAt(series[i].ts, Math.min(series[i + 1]?.ts ?? end, end));
                                if (wantSum) {
                                    bucket.sum = value;
                                }
                                if (wantState) {
                                    bucket.state = value;
                                }
                                if (wantChange) {
                                    // null on the first bucket / a counter reset -> the dashboard skips nulls.
                                    bucket.change =
                                        previous !== undefined && value >= previous ? value - previous : null;
                                }
                            }
                            if (!isNaN(value)) {
                                previous = value;
                            }
                        }
                    }

                    const values = [...buckets.values()].sort((a, b) => a.start - b.start);
                    if (factor !== null) {
                        this.log.debug(
                            `Converting ${entityId} from ${entity.attributes.unit_of_measurement} to ${
                                units?.[unitClass!]
                            }`,
                        );
                        for (const bucket of values) {
                            for (const field of ['mean', 'min', 'max', 'state', 'sum', 'change']) {
                                const value = bucket[field];
                                if (typeof value === 'number') {
                                    bucket[field] = value * factor;
                                }
                            }
                        }
                    }
                    result[entityId] = values;
                    if (result[entityId].length === 0) {
                        this.log.info(
                            `No history for statistic ${entityId} (state ${id}). The energy/statistics graphs stay empty - make sure a history/SQL/InfluxDB instance is selected in the adapter settings AND logging is enabled for that state.`,
                        );
                    }
                }
                this.server._sendResponse(ws, message.id, result);
                return true;
            }
        }
        return undefined;
    }
}

export = StatisticsRecorder;
