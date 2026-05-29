interface EntityData {
    entityId2Entity: Record<string, EntityLike>;
}

interface EntityLike {
    context: {
        STATE: {
            getId?: string;
            setId?: string;
        };
    };
    attributes: {
        unit_of_measurement?: string;
    };
}

interface ServerWithSendResponse {
    _sendResponse(ws: unknown, id: unknown, result?: unknown): void;
}

interface PersonModuleInterface {
    getUserIDFromName(name: string | undefined): string;
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

    /**
     * Constructor
     *
     * @param options - options
     * @param options.server - server for sending responses to clients
     * @param options.adapter - ioBroker adapter instance
     * @param options.log - ioBroker logger
     * @param options.personModule - person module for user id resolution
     * @param options.dataSingleton - shared entity data singleton
     */
    constructor(options: {
        server: ServerWithSendResponse;
        adapter: ioBroker.Adapter & { config: Record<string, unknown> };
        log: ioBroker.Logger;
        personModule: PersonModuleInterface;
        dataSingleton: EntityData;
    }) {
        this.server = options.server;
        this.adapter = options.adapter;
        this.log = options.log;
        this.personModule = options.personModule;
        this.dataSingleton = options.dataSingleton;
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
        } else {
            const history = this.adapter.config.history;
            const count = (end - start) / step;
            const options = { start, end, step, count, aggregate, user };
            if (id) {
                const result = await this.adapter.sendToAsync(history as string, 'getHistory', {
                    id,
                    options,
                });
                if ((result as unknown as Record<string, unknown>)?.error) {
                    this.log.error(
                        `Error getting history for ${id}: ${String((result as unknown as Record<string, unknown>).error)}`,
                    );
                }
                if (result && (result as unknown as Record<string, unknown>).result) {
                    return (result as unknown as Record<string, unknown>).result as unknown[];
                } else {
                    return [];
                }
            } else {
                return [];
            }
        }
    }

    /**
     * Process message from the frontend.
     *
     * @param ws - websocket connection to the client
     * @param message - the message from the frontend
     */
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
                    const entity = this.dataSingleton.entityId2Entity[entityId];
                    if (!entity) {
                        this.log.warn(`Entity ${entityId} not found`);
                        continue;
                    }
                    this.log.debug(`Getting metadata for ${entityId}`);
                    result.push({
                        statistic_id: entityId,
                        display_unit_of_measurement: entity.attributes.unit_of_measurement,
                        has_mean: true,
                        has_sum: true,
                        name: null,
                        source: 'recorder',
                        statistics_unit_of_measurement: entity.attributes.unit_of_measurement,
                        unit_class: 'temperature',
                    });
                }
                this.server._sendResponse(ws, message.id, result);
                return true;
            } else if (msgType === 'recorder/statistics_during_period') {
                this.log.debug(`Getting statistics for period ${JSON.stringify(message)}`);
                const result: Record<string, unknown> = {};
                const wsWithAuth = ws as { __auth?: { username?: string } };
                const user = this.personModule.getUserIDFromName(wsWithAuth.__auth?.username);
                const start = new Date(message.start_time as string).getTime();
                const end = message.end_time ? new Date(message.end_time as string).getTime() : Date.now();
                let step: number;
                switch (message.period as string) {
                    case '5minute':
                        step = 30000;
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
                const aggregates: (string | undefined)[] = [];
                const types = message.types as string[] | undefined;
                if (types?.includes('state')) {
                    aggregates.push(undefined);
                }
                if (types?.includes('min')) {
                    aggregates.push('min');
                }
                if (types?.includes('max')) {
                    aggregates.push('max');
                }
                if (types?.includes('mean')) {
                    aggregates.push('average');
                }
                if (types?.includes('sum')) {
                    aggregates.push('total');
                }
                if (types?.includes('change')) {
                    aggregates.push('onchange');
                }

                for (const entityId of message.statistic_ids as string[]) {
                    const entity = this.dataSingleton.entityId2Entity[entityId];
                    if (!entity) {
                        this.log.warn(`Entity ${entityId} not found`);
                        continue;
                    }
                    this.log.debug(`Getting statistics for ${entityId}`);
                    const id = entity.context.STATE.getId || entity.context.STATE.setId || '';
                    const entityResult: Record<string, unknown>[] = [];
                    for (const aggregate of aggregates) {
                        const currentResults = (await this.getHistory(id, start, end, step, aggregate, user)) as {
                            ts: number;
                            value: unknown;
                        }[];
                        for (let i = 0; i < currentResults.length; i++) {
                            if (!entityResult[i]) {
                                const entry: Record<string, unknown> = {
                                    start: currentResults[i].ts,
                                    end: currentResults[i + 1]?.ts || end,
                                };
                                if (aggregate) {
                                    entry[aggregate] = currentResults[i].value;
                                } else {
                                    entry.state = currentResults[i].value;
                                }
                                entityResult.push(entry);
                            } else {
                                if (aggregate) {
                                    entityResult[i][aggregate] = currentResults[i].value;
                                } else {
                                    entityResult[i].state = currentResults[i].value;
                                }
                            }
                        }
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
