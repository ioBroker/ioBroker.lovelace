import { Types } from '@iobroker/type-detector';
import { BaseEntity, type ServiceCallData } from './baseEntity';
import type { ConverterParameters } from '../converters/converter';
import { SensorEntity } from './sensorEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    adapter: ioBroker.Adapter;
    log: ioBroker.Logger;
};

// Supported-features bitmask flags (match HA climate platform constants)
const CLIMATE_SUPPORT_TARGET_TEMPERATURE = 1;
const CLIMATE_SUPPORT_FAN_MODE = 8;
const CLIMATE_SUPPORT_PRESET_MODE = 16;
const CLIMATE_SUPPORT_SWING_MODE = 32;

/** Exported for integration tests that compare against the bitmask. */
export const supportedFlags = {
    CLIMATE_SUPPORT_TARGET_TEMPERATURE,
    CLIMATE_SUPPORT_FAN_MODE,
    CLIMATE_SUPPORT_PRESET_MODE,
    CLIMATE_SUPPORT_SWING_MODE,
};

/**
 * Normalise an ioBroker hvac mode name to the HA expected name.
 *
 * @param modeNameIn - raw mode name from ioBroker common.states
 * @returns normalised HA hvac_mode string
 */
function translateModeNameForLovelace(modeNameIn: string): string {
    const lower = modeNameIn.toLowerCase();
    switch (lower) {
        case 'dehumid':
            return 'dry';
        case 'fan':
            return 'fan_only';
        case 'cold':
            return 'cool';
        case 'hot':
            return 'heat';
        default:
            return lower;
    }
}

/**
 * Apply climate-specific state and command wiring on top of a base fillFromStates() call.
 * Shared between auto-detected ClimateEntity construction and manual entity decoration.
 *
 * @param states - state-id map produced by ClimateEntity.collectStates
 * @param objects - ioBroker objects cache
 * @param entity - entity to mutate in-place
 * @param iobType - type-detector device type (thermostat vs airCondition); affects defaults
 */
export function applyClimateStates(
    states: Record<string, string>,
    objects: Record<string, ioBroker.Object>,
    entity: BaseEntity,
    iobType?: string,
): void {
    entity.fillFromStates(states, objects);

    entity.attributes.supported_features = CLIMATE_SUPPORT_TARGET_TEMPERATURE;
    entity.context.COMMANDS = [];

    if (states.state || states.hvac_mode) {
        entity.context.COMMANDS.push({
            service: 'set_hvac_mode',
            setId: states.hvac_mode ?? states.state,
            parseCommand: async (ent, _command, data: ServiceCallData, user): Promise<unknown> => {
                const hvac_attr = ent.context.ATTRIBUTES.find(a => a.attribute === 'hvac_mode');
                const value = (data.service_data as Record<string, string>).hvac_mode;
                if (ent.context.STATE.setId) {
                    await adapterData.adapter.setForeignStateAsync(ent.context.STATE.setId, value !== 'off', false, {
                        user,
                    });
                }
                if (hvac_attr) {
                    const target = hvac_attr.lovelaceToIob?.[value];
                    if (target !== undefined) {
                        await adapterData.adapter.setForeignStateAsync(
                            hvac_attr.setId!,
                            target as ioBroker.StateValue,
                            false,
                            { user },
                        );
                    }
                }
                ent.attributes.hvac_action = undefined;
                return undefined;
            },
        });
    }

    if (states.state || states.stateRead) {
        if (!entity.attributes.hvac_modes) {
            entity.attributes.hvac_modes = [];
        }
        (entity.attributes.hvac_modes as string[]).push('off');
        if (!states.hvac_mode) {
            (entity.attributes.hvac_modes as string[]).push(iobType === Types.airCondition ? 'cool' : 'heat');
        }
        entity.context.STATE.getParser = (ent, _attrName, state): void => {
            const s = state ?? ({ val: null } as ioBroker.State);
            ent.context.iobPower = s.val;
            const target = s.val ? (iobType === Types.airCondition ? 'cool' : 'heat') : 'off';
            const hvac_attr = ent.context.ATTRIBUTES.find(a => a.attribute === 'hvac_mode');
            if (hvac_attr) {
                if (!s.val) {
                    ent.attributes.hvac_mode = 'off';
                } else if (ent.context.iobMode !== undefined) {
                    ent.attributes.hvac_mode =
                        hvac_attr.iobToLovelace?.[ent.context.iobMode as string | number] ??
                        String(ent.context.iobMode as string | number);
                } else {
                    adapterData.log.warn(
                        `No mode for ${ent.entity_id} received, yet. Asking database. Will delay update.`,
                    );
                    adapterData.adapter
                        .getForeignStateAsync(hvac_attr.getId!)
                        .then(stateVal => {
                            const val = stateVal ? stateVal.val : null;
                            if (ent.context.iobMode === undefined) {
                                ent.context.iobMode = val;
                                const resolved =
                                    hvac_attr.iobToLovelace?.[val as string | number] ??
                                    (iobType === Types.airCondition ? 'cool' : 'heat');
                                ent.state = resolved;
                                ent.attributes.hvac_mode = resolved;
                            }
                        })
                        .catch(e => {
                            adapterData.log.error(
                                `Error fetching HVAC mode for ${ent.entity_id} during power state update: ${e}`,
                            );
                        });
                }
            } else {
                ent.attributes.hvac_mode = target;
            }
            ent.state = ent.attributes.hvac_mode as string;
            ent.attributes.hvac_action = undefined;
        };
        entity.context.STATE.historyParser = (_id, val) =>
            val ? (iobType === Types.airCondition ? 'cool' : 'heat') : 'off';
    }

    if (states.hvac_mode) {
        const hvac_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'hvac_mode');
        if (hvac_attr) {
            hvac_attr.setId = states.hvac_mode;
            const obj = objects[hvac_attr.getId!];
            if (obj?.common?.states) {
                entity.attributes.hvac_modes = entity.attributes.hvac_modes ?? [];
                const rawStates = obj.common.states as Record<string | number, string>;
                hvac_attr.iobToLovelace = { ...rawStates };
                hvac_attr.lovelaceToIob = {};
                for (const key of Object.keys(rawStates)) {
                    const mode = rawStates[key];
                    const modeName = translateModeNameForLovelace(mode);
                    (entity.attributes.hvac_modes as string[]).push(modeName);
                    hvac_attr.lovelaceToIob[modeName] = parseInt(key, 10);
                    hvac_attr.iobToLovelace[key] = modeName;
                }
            } else {
                hvac_attr.lovelaceToIob = { auto: 1, heat_cool: 2, heat: 3, cool: 4, dry: 5, fan_only: 6, off: 7 };
                hvac_attr.iobToLovelace = {
                    1: 'auto',
                    2: 'heat_cool',
                    3: 'heat',
                    4: 'cool',
                    5: 'dry',
                    6: 'fan_only',
                    7: 'off',
                };
                entity.attributes.hvac_modes = ['auto', 'heat_cool', 'heat', 'cool', 'dry', 'fan_only', 'off'];
            }
            if ((states.state || states.stateRead) && !(entity.attributes.hvac_modes as string[]).includes('off')) {
                (entity.attributes.hvac_modes as string[]).push('off');
            }
            hvac_attr.getParser = (ent, attr, state): void => {
                const s = state ?? ({ val: null } as ioBroker.State);
                ent.context.iobMode = s.val;
                ent.attributes.hvac_mode = attr.iobToLovelace?.[s.val as string | number] ?? String(s.val);
                if (!ent.context.iobPower && (states.state || states.stateRead) && ent.state === 'off') {
                    ent.attributes.hvac_mode = ent.state;
                } else {
                    ent.state = ent.attributes.hvac_mode as string;
                }
                ent.attributes.hvac_action = undefined;
            };
            hvac_attr.historyParser = (_id, val) => hvac_attr.iobToLovelace?.[val as string | number] ?? String(val);
        }
    }

    if (states.preset_mode) {
        entity.attributes.supported_features = entity.attributes.supported_features | CLIMATE_SUPPORT_PRESET_MODE;
        entity.attributes.preset_mode = 'none';
        entity.attributes.preset_modes = ['none'];

        const boost_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'boost');
        if (boost_attr) {
            (entity.attributes.preset_modes as string[]).push('boost');
            boost_attr.getParser = (ent, _attr, state): void => {
                const val = state ? state.val : null;
                ent.attributes.boost = val ? 'on' : 'off';
                ent.attributes.preset_mode = val ? 'boost' : ent.attributes.party === 'on' ? 'party' : 'none';
            };
            boost_attr.historyParser = (_id, val) => (val ? 'boost' : 'none');
        }

        const party_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'party');
        if (party_attr) {
            (entity.attributes.preset_modes as string[]).push('party');
            party_attr.getParser = (ent, _attr, state): void => {
                const val = state ? state.val : null;
                ent.attributes.party = val ? 'on' : 'off';
                ent.attributes.preset_mode = val ? 'party' : ent.attributes.boost === 'on' ? 'boost' : 'none';
            };
            party_attr.historyParser = (_id, val) => (val ? 'party' : 'none');
        }

        const preset_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'preset_mode');
        if (preset_attr) {
            delete preset_attr.getId;
        }

        entity.context.COMMANDS.push({
            service: 'set_preset_mode',
            parseCommand: async (_ent, _command, data: ServiceCallData, user): Promise<unknown> => {
                const preset = (data.service_data as Record<string, string>).preset_mode;
                const boostVal = preset === 'boost';
                const partyVal = preset === 'party';
                const promises: Promise<unknown>[] = [];
                if (party_attr?.getId) {
                    promises.push(
                        adapterData.adapter.setForeignStateAsync(party_attr.getId, partyVal, false, { user }),
                    );
                }
                if (boost_attr?.getId) {
                    promises.push(
                        adapterData.adapter.setForeignStateAsync(boost_attr.getId, boostVal, false, { user }),
                    );
                }
                return Promise.all(promises);
            },
        });
    }

    if (states.swing_mode) {
        entity.attributes.supported_features = entity.attributes.supported_features | CLIMATE_SUPPORT_SWING_MODE;
        const swing_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'swing_mode');
        if (swing_attr) {
            const swing_obj = objects[swing_attr.getId!];
            const swingCommon = (swing_obj?.common ?? {}) as Record<string, unknown>;
            if (swingCommon.type === 'boolean') {
                swing_attr.isBoolean = true;
                swing_attr.states = { false: 'off', true: 'on' };
                entity.attributes.swing_modes = ['off', 'on'];
            } else if (swing_obj?.common?.states) {
                swing_attr.states = swing_obj.common.states as Record<string | number, unknown>;
                entity.attributes.swing_modes = Object.values(swing_attr.states);
            } else {
                swing_attr.states = {};
                entity.attributes.swing_modes = [0, 1, 2, 3, 4, 5, 6, 7];
            }
            swing_attr.getParser = (ent, attr, state): void => {
                const val = state ? state.val : null;
                ent.attributes.swing_mode =
                    attr.states && attr.states[val as string | number] !== undefined
                        ? attr.states[val as string | number]
                        : val;
            };
            swing_attr.historyParser = (_id, val) =>
                String(
                    swing_attr.states && swing_attr.states[val as string | number] !== undefined
                        ? swing_attr.states[val as string | number]
                        : val,
                );
            entity.context.COMMANDS.push({
                service: 'set_swing_mode',
                parseCommand: async (ent, _command, data: ServiceCallData, user): Promise<unknown> => {
                    const mode = (data.service_data as Record<string, string>).swing_mode;
                    const swingAttr = ent.context.ATTRIBUTES.find(a => a.attribute === 'swing_mode');
                    let val: ioBroker.StateValue;
                    if (swingAttr && swingAttr.getId) {
                        if (swingAttr?.isBoolean) {
                            val = mode === 'on';
                        } else {
                            val = parseInt(mode, 10);
                            if (swingAttr.states) {
                                for (const key of Object.keys(swingAttr.states)) {
                                    if (swingAttr.states[key] === mode) {
                                        val = parseInt(key, 10);
                                    }
                                }
                            }
                        }
                        return adapterData.adapter.setForeignStateAsync(swingAttr.getId, val, false, { user });
                    }
                },
            });
        }
    }

    if (states.fan_mode) {
        entity.attributes.supported_features = entity.attributes.supported_features | CLIMATE_SUPPORT_FAN_MODE;
        const fan_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'fan_mode');
        if (fan_attr) {
            const fan_obj = objects[fan_attr.getId!];
            if (fan_obj?.common?.states) {
                fan_attr.states = fan_obj.common.states as Record<string | number, unknown>;
                entity.attributes.fan_modes = Object.values(fan_attr.states);
            } else {
                fan_attr.states = {};
                entity.attributes.fan_modes = [0, 1, 2, 3, 4, 5, 6, 7];
            }
            fan_attr.getParser = (ent, attr, state): void => {
                const val = state ? state.val : null;
                ent.attributes.fan_mode =
                    attr.states && attr.states[val as string | number] !== undefined
                        ? attr.states[val as string | number]
                        : val;
            };
            fan_attr.historyParser = (_id, val) =>
                String(
                    fan_attr.states && fan_attr.states[val as string | number] !== undefined
                        ? fan_attr.states[val as string | number]
                        : val,
                );
            entity.context.COMMANDS.push({
                service: 'set_fan_mode',
                parseCommand: async (ent, _command, data: ServiceCallData, user): Promise<unknown> => {
                    const mode = (data.service_data as Record<string, string>).fan_mode;
                    const fanAttr = ent.context.ATTRIBUTES.find(a => a.attribute === 'fan_mode');
                    let val = parseInt(mode, 10);
                    if (fanAttr && fanAttr.getId) {
                        if (fanAttr.states) {
                            for (const key of Object.keys(fanAttr.states)) {
                                if (fanAttr.states[key] === mode) {
                                    val = parseInt(key, 10);
                                }
                            }
                        }
                        return adapterData.adapter.setForeignStateAsync(fanAttr.getId, val, false, { user });
                    }
                },
            });
        }
    }

    if (states.hvac_action) {
        const actionObj = objects[states.hvac_action];
        const actionAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'hvac_action');
        if (actionAttr) {
            const actionCommon = (actionObj?.common ?? {}) as Record<string, unknown>;
            const type = (actionCommon.type as string | undefined) ?? 'string';
            if (type === 'number' && actionCommon.states) {
                actionAttr.states = actionCommon.states as Record<string | number, unknown>;
            }
            actionAttr.getParser = (ent, attr, state): void => {
                const val = state ? state.val : null;
                if (type === 'number' && attr.states) {
                    ent.attributes.hvac_action = attr.historyParser
                        ? attr.historyParser(attr.getId!, val)
                        : String(val);
                } else if (type === 'string') {
                    ent.attributes.hvac_action = translateModeNameForLovelace(String(val));
                } else {
                    ent.attributes.hvac_action = val ? (iobType === Types.thermostat ? 'heating' : 'cooling') : 'idle';
                }
            };
            actionAttr.historyParser = (_id, val) =>
                translateModeNameForLovelace(
                    String(
                        actionAttr.states && actionAttr.states[val as string | number] !== undefined
                            ? actionAttr.states[val as string | number]
                            : val,
                    ),
                );
        }
    }

    if (!entity.attributes.hvac_modes) {
        entity.attributes.hvac_modes = [iobType === Types.airCondition ? 'cool' : 'heat'];
    }

    entity.attributes.min_temp = 7;
    entity.attributes.max_temp = 35;
    entity.attributes.target_temp_step = 1;
    entity.attributes.min_humidity = 30;
    entity.attributes.max_humidity = 99;

    if (states.temperature) {
        entity.context.COMMANDS.push({
            service: 'set_temperature',
            setId: states.temperature,
            parseCommand: async (_ent, command, data: ServiceCallData, user): Promise<unknown> => {
                const sd = data.service_data;
                if (sd.temperature === undefined) {
                    adapterData.log.warn(
                        `No temperature in service call for ${_ent.entity_id}. Range not yet supported.`,
                    );
                }
                return adapterData.adapter.setForeignStateAsync(
                    command.setId!,
                    sd.temperature as ioBroker.StateValue,
                    false,
                    { user },
                );
            },
        });

        const tempCommon = (objects[states.temperature]?.common ?? {}) as Record<string, unknown>;
        entity.attributes.min_temp = (tempCommon.min as number | undefined) ?? 7;
        entity.attributes.max_temp = (tempCommon.max as number | undefined) ?? 35;
        entity.attributes.target_temp_step = (tempCommon.step as number | undefined) ?? 1;
    }
}

/**
 * ClimateEntity — single class for the Home Assistant `climate` domain
 * (thermostat and air conditioning device types).
 *
 * The `build()` factory returns the climate entity plus optional companion
 * temperature / humidity sensor entities for the ACTUAL / HUMIDITY states.
 */
export class ClimateEntity extends BaseEntity {
    /**
     * Build a climate entity (and optional companion temperature/humidity sensors).
     *
     * @param params - converter parameters
     * @returns array starting with the climate entity, followed by 0..2 companion sensors.
     */
    static build(params: ConverterParameters): BaseEntity[] {
        const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
        const entity = new ClimateEntity(friendlyName, room, func, objects[id], forcedEntityId);

        const states: Record<string, string> = {};
        let entityTemp: BaseEntity | undefined;
        let entityHum: BaseEntity | undefined;
        const baseName = entity.entity_id.split('.')[1];
        const tempId = `sensor.${baseName}_Temperature`;
        const humId = `sensor.${baseName}_Humidity`;

        for (const state of controls.states) {
            if (state?.id) {
                switch (state.name) {
                    case 'SET':
                        states.temperature = state.id;
                        break;
                    case 'MODE':
                        states.hvac_mode = state.id;
                        break;
                    case 'POWER':
                        states.state = state.id;
                        break;
                    case 'HUMIDITY':
                        states.current_humidity = state.id;
                        entityHum = SensorEntity.humidity(state.id, friendlyName, room, func, objects[id], humId);
                        break;
                    case 'ACTUAL':
                        states.current_temperature = state.id;
                        entityTemp = SensorEntity.temperature(state.id, friendlyName, room, func, objects[id], tempId);
                        break;
                    case 'BOOST':
                        states.preset_mode = state.id;
                        states.boost = state.id;
                        break;
                    case 'PARTY':
                        states.preset_mode = state.id;
                        states.party = state.id;
                        break;
                    case 'SPEED':
                        states.fan_mode = state.id;
                        break;
                    case 'SWING':
                        states.swing_mode = state.id;
                        break;
                    default:
                        if (!['WORKING', 'UNREACH', 'LOWBAT', 'MAINTAIN', 'ERROR'].includes(state.name ?? '')) {
                            adapterData.log.info(
                                `Unknown state ${state.name} while creating climate entity for ${id}. Please report.`,
                            );
                        }
                }
            }
        }

        applyClimateStates(states, objects, entity, controls.type);

        const result: BaseEntity[] = [entity];
        if (entityHum) {
            result.push(entityHum);
        }
        if (entityTemp) {
            result.push(entityTemp);
        }
        return result;
    }

    private constructor(
        name: string | null | undefined,
        room: ioBroker.EnumObject | null | undefined,
        func: ioBroker.EnumObject | null | undefined,
        obj: ioBroker.Object | undefined,
        forcedEntityId?: string,
    ) {
        super(name, room, func, obj, 'climate', forcedEntityId);
    }
}
