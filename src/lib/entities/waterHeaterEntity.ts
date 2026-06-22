import { BaseEntity } from './baseEntity';
import type { ConverterParameters, ServiceCallData } from '../converters/converter';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    adapter: ioBroker.Adapter;
};

/** Home Assistant WaterHeaterEntityFeature bits. */
const FEATURE = {
    TARGET_TEMPERATURE: 1,
    OPERATION_MODE: 2,
    ON_OFF: 8,
} as const;

/**
 * WaterHeaterEntity — Home Assistant `water_heater` domain (manual-only; type-detector has no
 * matching type yet). Reads from controls.states: SET (target temperature), ACTUAL (current
 * temperature), POWER (on/off), MODE (operation mode).
 */
export class WaterHeaterEntity extends BaseEntity {
    /** @param params - converter parameters */
    constructor(params: ConverterParameters) {
        const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
        super(friendlyName, room, func, objects[id], 'water_heater', forcedEntityId);

        this.context.STATE.setId = null;
        this.context.STATE.getId = null;
        this.context.COMMANDS = [];
        this.context.ATTRIBUTES = this.context.ATTRIBUTES ?? [];
        let features = 0;

        const find = (name: string): { id?: string } | undefined => controls.states.find(s => s.id && s.name === name);
        const set = find('SET');
        const actual = find('ACTUAL');
        const power = find('POWER');
        const mode = find('MODE');

        // target temperature
        if (set?.id) {
            features |= FEATURE.TARGET_TEMPERATURE;
            const sid = set.id;
            this.addID2entity(sid);
            const common = (objects[sid]?.common ?? {}) as { min?: number; max?: number };
            this.attributes.min_temp = common.min ?? 30;
            this.attributes.max_temp = common.max ?? 80;
            this.context.ATTRIBUTES.push({ attribute: 'temperature', getId: sid, setId: sid });
            this.context.COMMANDS.push({
                service: 'set_temperature',
                setId: sid,
                parseCommand: (_e, c, d: ServiceCallData, u): Promise<unknown> =>
                    adapterData.adapter.setForeignStateAsync(c.setId!, Number(d.service_data.temperature), false, {
                        user: u,
                    }),
            });
        }

        // current temperature
        if (actual?.id) {
            this.addID2entity(actual.id);
            this.context.ATTRIBUTES.push({ attribute: 'current_temperature', getId: actual.id });
        }

        // operation mode: prefer a dedicated MODE state, else derive on/off from POWER
        if (mode?.id) {
            features |= FEATURE.OPERATION_MODE;
            const mid = mode.id;
            this.context.STATE.getId = mid;
            this.context.STATE.setId = mid;
            this.addID2entity(mid);
            const common = (objects[mid]?.common ?? {}) as { type?: string; states?: Record<string | number, string> };
            const statesMap = common.states;
            const map2lovelace =
                statesMap && typeof statesMap === 'object' && !Array.isArray(statesMap) ? statesMap : undefined;
            const map2iob: Record<string, string> = {};
            if (map2lovelace) {
                this.attributes.operation_list = [];
                for (const k of Object.keys(map2lovelace)) {
                    map2iob[String(map2lovelace[k])] = k;
                    (this.attributes.operation_list as string[]).push(String(map2lovelace[k]));
                }
            }
            const isNumber = (common.type ?? '').toLowerCase() === 'number';
            this.context.STATE.getParser = (ent: BaseEntity, _a: string, st: ioBroker.State): void => {
                const v = map2lovelace ? (map2lovelace[st?.val as string | number] ?? st?.val) : st?.val;
                ent.state = String(v ?? 'off');
                ent.attributes.current_operation = ent.state;
            };
            this.context.COMMANDS.push({
                service: 'set_operation_mode',
                setId: mid,
                parseCommand: (_e, c, d: ServiceCallData, u): Promise<unknown> => {
                    let target: unknown = d.service_data.operation_mode;
                    if (map2iob[String(target)] !== undefined) {
                        target = map2iob[String(target)];
                    }
                    if (isNumber) {
                        target = Number(target);
                    }
                    return adapterData.adapter.setForeignStateAsync(c.setId!, target as ioBroker.StateValue, false, {
                        user: u,
                    });
                },
            });
        } else if (power?.id) {
            this.attributes.operation_list = ['off', 'on'];
            this.context.STATE.getId = power.id;
            this.context.STATE.getParser = (ent: BaseEntity, _a: string, st: ioBroker.State): void => {
                ent.state = st?.val ? 'on' : 'off';
                ent.attributes.current_operation = ent.state;
            };
        }

        // on/off
        if (power?.id) {
            features |= FEATURE.ON_OFF;
            const pid = power.id;
            this.addID2entity(pid);
            this.context.COMMANDS.push({
                service: 'turn_on',
                setId: pid,
                parseCommand: (_e, c, _d, u): Promise<unknown> =>
                    adapterData.adapter.setForeignStateAsync(c.setId!, true, false, { user: u }),
            });
            this.context.COMMANDS.push({
                service: 'turn_off',
                setId: pid,
                parseCommand: (_e, c, _d, u): Promise<unknown> =>
                    adapterData.adapter.setForeignStateAsync(c.setId!, false, false, { user: u }),
            });
        }

        this.attributes.supported_features = features;
    }
}
