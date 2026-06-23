import { BaseEntity, type EntityAttribute } from './baseEntity';
import type { ConverterParameters, ServiceCallData } from '../converters/converter';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    adapter: ioBroker.Adapter;
};

/** Home Assistant VacuumEntityFeature bits (only the ones we can map from ioBroker). */
const FEATURE = {
    PAUSE: 4,
    STOP: 8,
    FAN_SPEED: 32,
    BATTERY: 64,
    STATE: 4096,
    START: 8192,
} as const;

/**
 * Map an ioBroker vacuum state value to one of Home Assistant's vacuum states
 * (cleaning / docked / paused / idle / returning / error).
 *
 * @param val - the raw ioBroker state value
 * @param statesMap - optional common.states map for numeric states
 */
export function mapVacuumState(val: unknown, statesMap?: Record<string | number, string>): string {
    let raw: unknown = val;
    if (typeof val === 'number' && statesMap && statesMap[val] !== undefined) {
        raw = statesMap[val];
    }
    const str = (typeof raw === 'number' ? String(raw) : typeof raw === 'string' ? raw : '').toLowerCase();
    if (/clean/.test(str)) {
        return 'cleaning';
    }
    if (/dock|charg/.test(str)) {
        return 'docked';
    }
    if (/paus/.test(str)) {
        return 'paused';
    }
    if (/return|home|back/.test(str)) {
        return 'returning';
    }
    if (/error|fault|fail/.test(str)) {
        return 'error';
    }
    return 'idle';
}

/**
 * VacuumEntity — Home Assistant `vacuum` domain.
 *
 * Reads from controls.states: STATE (status), POWER (start/stop), PAUSE, BATTERY (battery_level),
 * WORK_MODE (fan_speed). Builds the matching commands and supported_features.
 */
export class VacuumEntity extends BaseEntity {
    /** @param params - converter parameters */
    constructor(params: ConverterParameters) {
        const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
        super(friendlyName, room, func, objects[id], 'vacuum', forcedEntityId);

        this.context.STATE.setId = null;
        this.context.STATE.getId = null;
        this.context.COMMANDS = [];
        this.context.ATTRIBUTES = this.context.ATTRIBUTES ?? [];
        let features: number = FEATURE.STATE;

        const find = (name: string): { id?: string } | undefined => controls.states.find(s => s.id && s.name === name);
        const power = find('POWER');
        const pause = find('PAUSE');
        const stateS = find('STATE');
        const battery = find('BATTERY');
        const work = find('WORK_MODE');
        const mapUrl = find('MAP') ?? find('MAP_URL');
        const mapB64 = find('MAP_BASE64');

        // ----- main state -----
        const mainStateId = stateS?.id ?? power?.id;
        if (mainStateId) {
            this.context.STATE.getId = mainStateId;
            this.addID2entity(mainStateId);
            const statesMap =
                stateS?.id && objects[stateS.id]
                    ? ((objects[stateS.id].common as { states?: Record<string | number, string> }).states ?? undefined)
                    : undefined;
            const haveStateValue = !!stateS?.id;
            this.context.STATE.getParser = (ent: BaseEntity, _a: string, st: ioBroker.State): void => {
                ent.state = haveStateValue ? mapVacuumState(st?.val, statesMap) : st?.val ? 'cleaning' : 'docked';
            };
        } else {
            this.state = 'idle';
        }

        // ----- power -> start / stop -----
        if (power?.id) {
            features |= FEATURE.START | FEATURE.STOP;
            const pid = power.id;
            this.addID2entity(pid);
            this.context.COMMANDS.push({
                service: 'start',
                setId: pid,
                parseCommand: (_e, c, _d, u): Promise<unknown> =>
                    adapterData.adapter.setForeignStateAsync(c.setId!, true, false, { user: u }),
            });
            this.context.COMMANDS.push({
                service: 'stop',
                setId: pid,
                parseCommand: (_e, c, _d, u): Promise<unknown> =>
                    adapterData.adapter.setForeignStateAsync(c.setId!, false, false, { user: u }),
            });
        }

        // ----- pause -----
        if (pause?.id) {
            features |= FEATURE.PAUSE;
            const paId = pause.id;
            this.addID2entity(paId);
            this.context.COMMANDS.push({
                service: 'pause',
                setId: paId,
                parseCommand: (_e, c, _d, u): Promise<unknown> =>
                    adapterData.adapter.setForeignStateAsync(c.setId!, true, false, { user: u }),
            });
        }

        // ----- battery_level -----
        if (battery?.id) {
            features |= FEATURE.BATTERY;
            this.addID2entity(battery.id);
            this.context.ATTRIBUTES.push({ attribute: 'battery_level', getId: battery.id });
        }

        // ----- fan_speed (work mode) -----
        if (work?.id) {
            features |= FEATURE.FAN_SPEED;
            const wid = work.id;
            this.addID2entity(wid);
            const common = (objects[wid]?.common ?? {}) as { type?: string; states?: Record<string | number, string> };
            const statesMap = common.states;
            const attr: EntityAttribute = { attribute: 'fan_speed', getId: wid };
            if (statesMap && !Array.isArray(statesMap) && typeof statesMap === 'object') {
                attr.map2lovelace = statesMap;
                attr.map2iob = {};
                attr.isNumber = (common.type ?? '').toLowerCase() === 'number';
                this.attributes.fan_speed_list = [];
                for (const k of Object.keys(statesMap)) {
                    attr.map2iob[String(statesMap[k])] = k;
                    (this.attributes.fan_speed_list as string[]).push(String(statesMap[k]));
                }
            }
            attr.getParser = (ent: BaseEntity, a: EntityAttribute, st: ioBroker.State): void => {
                ent.attributes.fan_speed = a.map2lovelace
                    ? (a.map2lovelace[st?.val as string | number] ?? st?.val)
                    : st?.val;
            };
            this.context.ATTRIBUTES.push(attr);
            this.context.COMMANDS.push({
                service: 'set_fan_speed',
                setId: wid,
                parseCommand: (_e, c, d: ServiceCallData, u): Promise<unknown> => {
                    let target: unknown = d.service_data.fan_speed;
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

        // ----- map image -----
        // HA vacuum has no dedicated map attribute; expose the map as the entity_picture so it shows
        // on the card / more-info. A plain URL is used as-is; a base64 value is wrapped as a data URL.
        if (mapUrl?.id) {
            this.addID2entity(mapUrl.id);
            this.context.ATTRIBUTES.push({ attribute: 'entity_picture', getId: mapUrl.id });
        } else if (mapB64?.id) {
            this.addID2entity(mapB64.id);
            this.context.ATTRIBUTES.push({
                attribute: 'entity_picture',
                getId: mapB64.id,
                getParser: (ent: BaseEntity, _a: EntityAttribute, st: ioBroker.State): void => {
                    const v = st?.val;
                    ent.attributes.entity_picture =
                        typeof v === 'string' && v && !v.startsWith('data:') && !v.startsWith('http')
                            ? `data:image/png;base64,${v}`
                            : (v as string | undefined);
                },
            });
        }

        this.attributes.supported_features = features;
    }
}
