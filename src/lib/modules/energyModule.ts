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

interface EnergySource {
    type: string;
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
                    energy_sources:
                        (message.energy_sources as EnergySource[] | undefined) ?? this._prefs.energy_sources,
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
