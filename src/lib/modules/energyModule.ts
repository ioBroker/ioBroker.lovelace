import { STORAGE_PREFIX } from './storage';
/**
 * Energy dashboard module.
 *
 * Persists energy preferences (which ioBroker sensor entities cover grid import/export,
 * solar production, battery, gas, water, device consumption) and serves the HA energy
 * WebSocket API so the Energy panel works.
 *
 * Users configure preferences via Settings > Energy in the Lovelace UI.
 * The sensor entity_ids shown in that picker come from the adapter's normal entity list.
 * Historical data is served by StatisticsRecorderModule (recorder/statistics_during_period).
 */

type SendResponseFn = (ws: unknown, id: unknown, result: unknown) => void;

/**
 * How the user picked the power ("rate") sensor for a grid/battery source in the energy dialog.
 * Exactly one of the three variants is set (enforced by the frontend).
 */
interface PowerConfig {
    /** Standard single sensor (positive = consumption / discharge). */
    stat_rate?: string;
    /** Single sensor with inverted sign. */
    stat_rate_inverted?: string;
    /** Two-sensor setup: grid consumption / battery discharge. */
    stat_rate_from?: string;
    /** Two-sensor setup: grid return / battery charge. */
    stat_rate_to?: string;
}

interface EnergySource {
    type: string;
    /** Statistic id of the power sensor. Derived from power_config, see _processEnergySources(). */
    stat_rate?: string;
    power_config?: PowerConfig;
    [key: string]: unknown;
}

interface DeviceConsumption {
    stat_consumption: string;
    [key: string]: unknown;
}

interface EnergyPreferences {
    energy_sources: EnergySource[];
    device_consumption: DeviceConsumption[];
    device_consumption_water: DeviceConsumption[];
}

const EMPTY_PREFS: EnergyPreferences = {
    energy_sources: [],
    device_consumption: [],
    device_consumption_water: [],
};

class EnergyModule {
    private adapter: ioBroker.Adapter;
    private sendResponse: SendResponseFn;
    private _prefs: EnergyPreferences = {
        ...EMPTY_PREFS,
        energy_sources: [],
        device_consumption: [],
        device_consumption_water: [],
    };

    constructor(options: { adapter: ioBroker.Adapter; sendResponse: SendResponseFn }) {
        this.adapter = options.adapter;
        this.sendResponse = options.sendResponse;
    }

    async init(): Promise<void> {
        const storage = await this.adapter.getObjectAsync(`${STORAGE_PREFIX}energyPrefs`);
        const native = (storage as ioBroker.Object & { native: Record<string, unknown> })?.native;
        this._prefs = (native?.prefs as EnergyPreferences) || {
            ...EMPTY_PREFS,
            energy_sources: [],
            device_consumption: [],
            device_consumption_water: [],
        };
        // Also derive on load, not just on save: preferences stored by an older adapter version
        // (which never derived it) would otherwise keep their power graphs empty until the user
        // opens and re-saves the energy settings dialog.
        this._prefs.energy_sources = this._processEnergySources(this._prefs.energy_sources || []);
        this.adapter.log.debug('modules/energyModule: init done.');
    }

    private async _save(): Promise<void> {
        const storage = (await this.adapter.getObjectAsync(`${STORAGE_PREFIX}energyPrefs`)) as ioBroker.AnyObject & {
            native: Record<string, unknown>;
        };
        if (!storage?.native) {
            return;
        }
        storage.native.prefs = this._prefs;
        await this.adapter.setObject(`${STORAGE_PREFIX}energyPrefs`, storage);
    }

    /**
     * Derive the top-level `stat_rate` of grid/battery sources from their `power_config`.
     *
     * The energy settings dialog only ever saves `power_config`; the top-level `stat_rate` is added
     * by the backend (Home Assistant does this in EnergyManager.async_update). Every power card -
     * the "Stromquellen"/power-sources graph on the summary tab and the power flow on the "Jetzt"
     * tab - reads *only* `stat_rate`, never `power_config`. Without this derivation those cards are
     * rendered (the strategy shows them because `power_config` exists) but stay empty and print
     * "no data", while all other cards work, because they use `stat_energy_from` or the entity
     * directly.
     *
     * Mirrors HA's logic: a standard single sensor is copied through; the inverted and two-sensor
     * variants refer to a generated helper entity that computes the transform, which this adapter
     * does not provide (yet) - those are skipped with a warning instead of pointing at a
     * non-existent statistic.
     *
     * @param sources - the energy sources to process (not modified in place)
     * @returns the sources with `stat_rate` filled in where it can be derived
     */
    private _processEnergySources(sources: EnergySource[]): EnergySource[] {
        return sources.map(source => {
            if ((source.type !== 'grid' && source.type !== 'battery') || !source.power_config) {
                return source;
            }
            const config = source.power_config;
            // A plain sensor is used as-is; power_config takes precedence over any stored stat_rate.
            if (config.stat_rate) {
                return { ...source, stat_rate: config.stat_rate };
            }
            const variant = config.stat_rate_inverted
                ? 'an inverted power sensor'
                : 'two separate power sensors (from/to)';
            this.adapter.log.warn(
                `Energy source "${source.type}" is configured with ${variant}, which needs a calculated helper entity this adapter does not create. The power graphs stay empty for it - please pick a single, non-inverted power sensor instead.`,
            );
            return source;
        });
    }

    /** Derive cost_sensors map from stored prefs: stat_energy_from → stat_cost */
    private _getCostSensors(): Record<string, string> {
        const costSensors: Record<string, string> = {};
        for (const source of this._prefs.energy_sources) {
            const from = source.stat_energy_from as string | null | undefined;
            const cost = source.stat_cost as string | null | undefined;
            if (from && cost) {
                costSensors[from] = cost;
            }
            const comp = source.stat_compensation as string | null | undefined;
            const to = source.stat_energy_to as string | null | undefined;
            if (to && comp) {
                costSensors[to] = comp;
            }
        }
        return costSensors;
    }

    /** Build an empty validation result (no issues) for the current prefs */
    private _emptyValidation(): {
        energy_sources: unknown[][];
        device_consumption: unknown[][];
        device_consumption_water: unknown[][];
    } {
        return {
            energy_sources: this._prefs.energy_sources.map(() => []),
            device_consumption: this._prefs.device_consumption.map(() => []),
            device_consumption_water: this._prefs.device_consumption_water.map(() => []),
        };
    }

    processMessage(ws: unknown, message: Record<string, unknown>): boolean {
        if (!String(message.type).startsWith('energy/')) {
            return false;
        }

        switch (message.type) {
            case 'energy/info':
                this.sendResponse(ws, message.id, {
                    cost_sensors: this._getCostSensors(),
                    solar_forecast_domains: [],
                });
                break;

            case 'energy/get_prefs':
                this.sendResponse(ws, message.id, this._prefs);
                break;

            case 'energy/save_prefs': {
                // message spreads Partial<EnergyPreferences> directly into the WS message
                const updated: EnergyPreferences = {
                    energy_sources: this._processEnergySources(
                        (message.energy_sources as EnergySource[] | undefined) ?? this._prefs.energy_sources,
                    ),
                    device_consumption:
                        (message.device_consumption as DeviceConsumption[] | undefined) ??
                        this._prefs.device_consumption,
                    device_consumption_water:
                        (message.device_consumption_water as DeviceConsumption[] | undefined) ??
                        this._prefs.device_consumption_water,
                };
                this._prefs = updated;
                void this._save();
                this.sendResponse(ws, message.id, this._prefs);
                break;
            }

            case 'energy/validate':
                this.sendResponse(ws, message.id, this._emptyValidation());
                break;

            case 'energy/fossil_energy_consumption':
                // Would need external CO2 signal data — return empty
                this.sendResponse(ws, message.id, {});
                break;

            case 'energy/solar_forecast':
                // Would need forecast provider integration — return empty
                this.sendResponse(ws, message.id, {});
                break;

            default:
                return false;
        }
        return true;
    }
}

export = EnergyModule;
