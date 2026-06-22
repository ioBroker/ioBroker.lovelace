import { BaseEntity, type EntityAttribute } from './baseEntity';
import type { ConverterParameters, ServiceCallData } from '../converters/converter';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    adapter: ioBroker.Adapter;
};

/**
 * HumidifierEntity — Home Assistant `humidifier` domain (manual-only; type-detector has no matching
 * type yet). Reads from controls.states: POWER (on/off), SET (target humidity), ACTUAL (current
 * humidity), MODE (operation mode).
 */
export class HumidifierEntity extends BaseEntity {
    /** @param params - converter parameters */
    constructor(params: ConverterParameters) {
        const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
        super(friendlyName, room, func, objects[id], 'humidifier', forcedEntityId);

        this.context.STATE.setId = null;
        this.context.STATE.getId = null;
        this.context.COMMANDS = [];
        this.context.ATTRIBUTES = this.context.ATTRIBUTES ?? [];
        let features = 0;

        const find = (name: string): { id?: string } | undefined => controls.states.find(s => s.id && s.name === name);
        const power = find('POWER');
        const set = find('SET');
        const actual = find('ACTUAL');
        const mode = find('MODE');

        this.attributes.min_humidity = 0;
        this.attributes.max_humidity = 100;

        // power / on-off state
        if (power?.id) {
            const pid = power.id;
            this.context.STATE.setId = pid;
            this.context.STATE.getId = pid;
            this.addID2entity(pid);
            this.context.STATE.getParser = (ent: BaseEntity, _a: string, st: ioBroker.State): void => {
                ent.state = st?.val ? 'on' : 'off';
            };
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
        } else {
            this.state = 'on';
        }

        // target humidity
        if (set?.id) {
            const sid = set.id;
            this.addID2entity(sid);
            this.context.ATTRIBUTES.push({ attribute: 'humidity', getId: sid, setId: sid });
            this.context.COMMANDS.push({
                service: 'set_humidity',
                setId: sid,
                parseCommand: (_e, c, d: ServiceCallData, u): Promise<unknown> =>
                    adapterData.adapter.setForeignStateAsync(c.setId!, Number(d.service_data.humidity), false, {
                        user: u,
                    }),
            });
        }

        // current humidity
        if (actual?.id) {
            this.addID2entity(actual.id);
            this.context.ATTRIBUTES.push({ attribute: 'current_humidity', getId: actual.id });
        }

        // mode
        if (mode?.id) {
            features |= 1; // HumidifierEntityFeature.MODES
            const mid = mode.id;
            this.addID2entity(mid);
            const common = (objects[mid]?.common ?? {}) as { type?: string; states?: Record<string | number, string> };
            const attr: EntityAttribute = { attribute: 'mode', getId: mid, setId: mid };
            const statesMap = common.states;
            if (statesMap && typeof statesMap === 'object' && !Array.isArray(statesMap)) {
                attr.map2lovelace = statesMap;
                attr.map2iob = {};
                attr.isNumber = (common.type ?? '').toLowerCase() === 'number';
                this.attributes.available_modes = [];
                for (const k of Object.keys(statesMap)) {
                    attr.map2iob[String(statesMap[k])] = k;
                    (this.attributes.available_modes as string[]).push(String(statesMap[k]));
                }
            }
            attr.getParser = (ent: BaseEntity, a: EntityAttribute, st: ioBroker.State): void => {
                ent.attributes.mode = a.map2lovelace
                    ? (a.map2lovelace[st?.val as string | number] ?? st?.val)
                    : st?.val;
            };
            this.context.ATTRIBUTES.push(attr);
            this.context.COMMANDS.push({
                service: 'set_mode',
                setId: mid,
                parseCommand: (_e, c, d: ServiceCallData, u): Promise<unknown> => {
                    let target: unknown = d.service_data.mode;
                    if (attr.map2iob && attr.map2iob[String(target)] !== undefined) {
                        target = attr.map2iob[String(target)];
                    }
                    if (attr.isNumber) {
                        target = Number(target);
                    }
                    return adapterData.adapter.setForeignStateAsync(c.setId!, target as ioBroker.StateValue, false, {
                        user: u,
                    });
                },
            });
        }

        this.attributes.supported_features = features;
    }
}
