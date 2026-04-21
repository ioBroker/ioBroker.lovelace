import { Types } from '@iobroker/type-detector';
import type { PatternControl } from '@iobroker/type-detector/types';
import Converter, { type ConverterParameters, type ioBrokerEntity, type EntityCommand } from './converter';
import { processCommon, addID2entity } from '../entities/utils';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    adapter: ioBroker.Adapter;
    log: ioBroker.Logger;
    services: Record<string, unknown>;
};

/**
 * Handle a set_cover_position / set_cover_tilt_position service call.
 * Reads position or tilt_position from service_data and writes the
 * scaled ioBroker value to the appropriate state.
 *
 * @param entity - the cover entity
 * @param command - the matched command (provides setId)
 * @param data - the HA service call data
 * @param data.service_data - the HA Service data
 * @param user - the ioBroker user id for interactions with object database.
 */
function handleSetAndTiltCommand(
    entity: ioBrokerEntity,
    command: EntityCommand,
    data: { service_data: Record<string, number> },
    user: string,
): Promise<void> {
    return new Promise((resolve, reject) => {
        if (data.service_data.position >= 0) {
            let value = (data.service_data.position / 100) * entity.context.STATE!.max! + entity.context.STATE!.min!;
            if (entity.context.STATE!.invert) {
                value =
                    ((100 - data.service_data.position) / 100) * entity.context.STATE!.max! +
                    entity.context.STATE!.min!;
            }
            adapterData.adapter.setForeignState(command.setId!, value, false, { user }, err =>
                err ? reject(err) : resolve(),
            );
        } else if (data.service_data.tilt_position >= 0) {
            const attr = entity.context.ATTRIBUTES?.find(a => a.attribute === 'tilt');
            if (attr?.setId) {
                let value = (data.service_data.tilt_position / 100) * attr.max! + attr.min!;
                if (attr.invert) {
                    value = ((100 - data.service_data.tilt_position) / 100) * attr.max! + attr.min!;
                }
                adapterData.adapter.setForeignState(attr.setId, value, false, { user }, err =>
                    err ? reject(err) : resolve(),
                );
            } else {
                reject(new Error('No setId for tilt cover.'));
            }
        } else {
            reject(new Error('No matching service data in set_cover_position.'));
        }
    });
}

/**
 * Register a simple boolean-write cover command (open, close, stop, tilt variants).
 * Returns true if the named state was found and the command was registered.
 *
 * @param entity - the cover entity
 * @param control - the type-detector PatternControl
 * @param stateName - ioBroker state name to look for (e.g. 'OPEN', 'CLOSE', 'STOP')
 * @param serviceName - HA service name (e.g. 'open_cover', 'close_cover')
 * @param featureBit - supported_features bit to set when the state is found
 * @param onWrite - optional side-effect to run before writing (e.g. update entity.state)
 */
function addCommand(
    entity: ioBrokerEntity,
    control: PatternControl,
    stateName: string,
    serviceName: string,
    featureBit: number,
    onWrite?: (entity: ioBrokerEntity) => void,
): boolean {
    const state = control.states.find(s => s.id && s.name === stateName);
    if (!state?.id) {
        return false;
    }
    const stateId = state.id;
    entity.context.COMMANDS!.push({
        service: serviceName,
        setId: stateId,
        parseCommand: (ent, command, _data, user) =>
            new Promise<void>((resolve, reject) => {
                if (typeof onWrite === 'function') {
                    onWrite(ent);
                }
                adapterData.adapter.setForeignState(command.setId!, true, false, { user }, err =>
                    err ? reject(err) : resolve(),
                );
            }),
    });
    (entity.attributes as Record<string, number>).supported_features |= featureBit;
    return true;
}

/**
 * Add a SET/ACTUAL level state to the cover entity and create a companion
 * input_number slider entity.  Returns true if the state was found.
 *
 * @param entities - entity array to push the slider into (entities[0] is the main cover)
 * @param control - type-detector PatternControl
 * @param objects - ioBroker objects cache
 * @param setStateName - name of the SET state (e.g. 'SET')
 * @param room - room enum for the slider entity
 * @param func - function enum for the slider entity
 * @param obj - ioBroker object for the device id
 * @param forcedEntityId - optional forced entity_id for the slider
 */
function addBlindLevel(
    entities: ioBrokerEntity[],
    control: PatternControl,
    objects: Record<string, ioBroker.Object>,
    setStateName: string,
    room: ioBroker.EnumObject | undefined,
    func: ioBroker.EnumObject | undefined,
    obj: ioBroker.Object | undefined,
    forcedEntityId: string | undefined,
): boolean {
    const state = control.states.find(s => s.id && s.name === setStateName);
    if (!state?.id) {
        return false;
    }
    const stateId = state.id;
    const entity = entities[0];
    const common = objects[stateId]?.common ?? {};

    // Companion input_number slider for backwards compatibility
    const entitySlider = processCommon(
        entity.attributes.friendly_name,
        room,
        func,
        obj,
        'input_number',
        forcedEntityId,
    );
    entities.push(entitySlider);
    entitySlider.context.STATE = { setId: stateId, getId: stateId };
    entitySlider.attributes.icon = 'mdi:window-shutter';
    entitySlider.attributes.mode = 'slider';
    entitySlider.attributes.min =
        (common as Record<string, unknown>).min !== undefined ? (common as Record<string, number>).min : 0;
    entitySlider.attributes.max =
        (common as Record<string, unknown>).max !== undefined ? (common as Record<string, number>).max : 100;
    entitySlider.attributes.step = (common as Record<string, unknown>).step || 1;
    addID2entity(stateId, entitySlider);

    // Main cover entity: fill in SET state for position control
    entity.context.STATE!.setId = stateId;
    entity.context.STATE!.getId = stateId;
    addID2entity(stateId, entity);
    entity.context.STATE!.max = (common as Record<string, number>).max || 100;
    entity.context.STATE!.min = (common as Record<string, number>).min || 0;

    entity.context.STATE!.getParser = (ent, _attr, iobState): void => {
        if (!iobState) {
            return;
        }
        const val = iobState.val as number | null;
        if (val != null) {
            const stMin = ent.context.STATE!.min!;
            const stMax = ent.context.STATE!.max!;
            let position = ((val - stMin) / stMax) * 100.0;
            let isClosed = val === stMin;
            let isOpened = val === stMax;
            if (ent.context.STATE!.invert) {
                position = 100 - position;
                isClosed = val === stMax;
                isOpened = val === stMin;
            }
            ent.attributes.current_position = position;
            if (isClosed) {
                ent.state = 'closed';
            } else if (isOpened) {
                ent.state = 'open';
            } else {
                ent.state = String(position);
            }
        }
    };

    (entity.attributes as Record<string, number>).supported_features |= 4;

    entity.context.COMMANDS!.push({
        service: 'set_cover_tilt_position',
        setId: stateId,
        parseCommand: handleSetAndTiltCommand as EntityCommand['parseCommand'],
    });
    entity.context.COMMANDS!.push({
        service: 'set_cover_position',
        setId: stateId,
        parseCommand: handleSetAndTiltCommand as EntityCommand['parseCommand'],
    });

    // Toggle: if entity is open/opening → close, otherwise → open
    entity.context.COMMANDS!.push({
        service: 'toggle',
        setId: stateId,
        parseCommand: (ent, command, _data, user): Promise<void> =>
            new Promise((resolve, reject) => {
                const upCmd = ent.context.COMMANDS!.find(a => a.service === 'open_cover');
                const downCmd = ent.context.COMMANDS!.find(a => a.service === 'close_cover');
                if (ent.state === 'open' || ent.state === 'opening') {
                    const setId = downCmd?.setId ?? command.setId!;
                    const val: boolean | number = downCmd
                        ? true
                        : ent.context.STATE!.invert
                          ? (ent.context.STATE!.min ?? 0)
                          : (ent.context.STATE!.max ?? 100);
                    adapterData.adapter.setForeignState(setId, val, false, { user }, err =>
                        err ? reject(err) : resolve(),
                    );
                } else {
                    const setId = upCmd?.setId ?? command.setId!;
                    const val: boolean | number = upCmd
                        ? true
                        : ent.context.STATE!.invert
                          ? (ent.context.STATE!.max ?? 100)
                          : (ent.context.STATE!.min ?? 0);
                    adapterData.adapter.setForeignState(setId, val, false, { user }, err =>
                        err ? reject(err) : resolve(),
                    );
                }
            }),
    });

    // Support separate read state (ACTUAL vs SET)
    const getState = control.states.find(s => s.id && s.name === setStateName.replace('SET', 'ACTUAL'));
    if (getState?.id) {
        entity.context.STATE!.getId = getState.id;
        addID2entity(getState.id, entity);
        entitySlider.context.STATE.getId = getState.id;
        addID2entity(getState.id, entitySlider);
    }

    return true;
}

/**
 * Add a tilt level state (TILT_SET / TILT_ACTUAL) to the cover entity.
 * Returns true if the state was found.
 *
 * @param entity - the cover entity
 * @param control - type-detector PatternControl
 * @param objects - ioBroker objects cache
 * @param setStateName - name of the tilt SET state (e.g. 'TILT_SET')
 */
function addTiltLevel(
    entity: ioBrokerEntity,
    control: PatternControl,
    objects: Record<string, ioBroker.Object>,
    setStateName: string,
): boolean {
    const state = control.states.find(s => s.id && s.name === setStateName);
    if (!state?.id) {
        return false;
    }
    const stateId = state.id;
    const common = objects[stateId]?.common ?? {};

    entity.context.ATTRIBUTES = [
        {
            attribute: 'tilt',
            getId: stateId,
            setId: stateId,
            min: (common as Record<string, number>).min || 0,
            max: (common as Record<string, number>).max || 100,
            getParser: (ent, attr, iobState): void => {
                if (!iobState) {
                    return;
                }
                const val = iobState.val as number | null;
                if (val != null) {
                    let position = ((val - attr.min!) / attr.max!) * 100.0;
                    if (attr.invert) {
                        position = 100 - position;
                    }
                    ent.attributes.current_tilt_position = position;
                }
            },
        },
    ];
    addID2entity(stateId, entity);
    (entity.attributes as Record<string, number>).supported_features |= 128;

    const getState = control.states.find(s => s.id && s.name === setStateName.replace('SET', 'ACTUAL'));
    if (getState?.id) {
        entity.context.ATTRIBUTES[0].getId = getState.id;
        addID2entity(getState.id, entity);
    }

    return true;
}

/** Converter for blind and blindButtons device types (cover entity + input_number slider). */
export class CoverConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        const { controls, objects, forcedEntityId, friendlyName, room, func } = params;
        const entity = processCommon(friendlyName, room, func, objects[params.id], 'cover', forcedEntityId);

        entity.context.COMMANDS = [];
        entity.attributes.device_class = 'blind';
        entity.context.STATE = { setId: null, getId: null };
        entity.attributes.supported_features = 0;
        entity.attributes.icon = 'mdi:window-shutter';
        adapterData.log.debug(`Creating blind of type ${controls.type} for ${params.id}`);

        const entities: ioBrokerEntity[] = [entity];

        if (addBlindLevel(entities, controls, objects, 'SET', room, func, objects[params.id], forcedEntityId)) {
            entity.context.STATE.invert = !!(adapterData.adapter.config as Record<string, unknown>).blindsInvert;
        }

        if (addTiltLevel(entity, controls, objects, 'TILT_SET')) {
            const attr = entity.context.ATTRIBUTES!.find(a => a.attribute === 'tilt');
            if (attr) {
                attr.invert = !!(adapterData.adapter.config as Record<string, unknown>).blindsInvert;
            }
        }

        addCommand(entity, controls, 'STOP', 'stop_cover', 8);
        const haveOpen = addCommand(entity, controls, 'OPEN', 'open_cover', 1, ent => {
            ent.state = 'opening';
        });
        const haveClose = addCommand(entity, controls, 'CLOSE', 'close_cover', 2, ent => {
            ent.state = 'closing';
        });
        addCommand(entity, controls, 'TILT_OPEN', 'open_cover_tilt', 16);
        addCommand(entity, controls, 'TILT_CLOSE', 'close_cover_tilt', 32);
        addCommand(entity, controls, 'TILT_STOP', 'stop_cover_tilt', 64);

        // Fallback open/close via position if no dedicated buttons found
        if (!haveOpen) {
            entity.context.COMMANDS.push({
                service: 'open_cover',
                setId: entity.context.STATE.setId,
                parseCommand: (ent, command, _data, user): Promise<void> =>
                    new Promise((resolve, reject) => {
                        ent.state = 'opening';
                        adapterData.adapter.setForeignState(
                            command.setId!,
                            ent.context.STATE!.invert ? (ent.context.STATE!.min ?? 0) : (ent.context.STATE!.max ?? 100),
                            false,
                            { user },
                            err => (err ? reject(err) : resolve()),
                        );
                    }),
            });
            (entity.attributes as Record<string, number>).supported_features |= 1;
        }

        if (!haveClose) {
            entity.context.COMMANDS.push({
                service: 'close_cover',
                setId: entity.context.STATE.setId,
                parseCommand: (ent, command, _data, user): Promise<void> =>
                    new Promise((resolve, reject) => {
                        ent.state = 'closing';
                        adapterData.adapter.setForeignState(
                            command.setId!,
                            ent.context.STATE!.invert ? (ent.context.STATE!.max ?? 100) : (ent.context.STATE!.min ?? 0),
                            false,
                            { user },
                            err => (err ? reject(err) : resolve()),
                        );
                    }),
            });
            (entity.attributes as Record<string, number>).supported_features |= 2;
        }

        return entities;
    }
}

Converter.converters[Types.blind] = CoverConverter;
Converter.converters[Types.blindButtons] = CoverConverter;

adapterData.services.cover = {
    set_cover_tilt_position: {
        name: 'Set tilt position',
        description: 'Sets the tilt position of a cover entity.',
        fields: {
            tilt_position: {
                required: true,
                selector: { number: null },
                name: 'Tilt position',
                description: 'The target tilt position to set.',
            },
        },
        target: { entity: [{ domain: ['cover'] }] },
    },
    set_cover_position: {
        name: 'Set position',
        description: 'Sets the position of a cover entity.',
        fields: {
            position: {
                required: true,
                selector: { number: null },
                name: 'Position',
                description: 'The target position to set.',
            },
        },
        target: { entity: [{ domain: ['cover'] }] },
    },
    toggle: {
        name: 'Toggle cover status',
        description: 'Toggles the status of a cover entity.',
        fields: {},
        target: { entity: [{ domain: ['cover'] }] },
    },
    open_cover: {
        name: 'Open cover',
        description: 'Opens a cover entity.',
        fields: {},
        target: { entity: [{ domain: ['cover'] }] },
    },
    close_cover: {
        name: 'Close cover',
        description: 'Closes a cover entity.',
        fields: {},
        target: { entity: [{ domain: ['cover'] }] },
    },
    stop_cover: {
        name: 'Stop cover',
        description: 'Stops a cover entity.',
        fields: {},
        target: { entity: [{ domain: ['cover'] }] },
    },
    open_cover_tilt: {
        name: 'Open tilt',
        description: 'Opens the tilt of a cover entity.',
        fields: {},
        target: { entity: [{ domain: ['cover'] }] },
    },
    close_cover_tilt: {
        name: 'Close tilt',
        description: 'Closes the tilt of a cover entity.',
        fields: {},
        target: { entity: [{ domain: ['cover'] }] },
    },
    stop_cover_tilt: {
        name: 'Stop tilt',
        description: 'Stops the tilt of a cover entity.',
        fields: {},
        target: { entity: [{ domain: ['cover'] }] },
    },
};
