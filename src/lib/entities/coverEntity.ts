import type { PatternControl } from '@iobroker/type-detector/types';
import { BaseEntity, type EntityCommand } from './baseEntity';
import type { ConverterParameters } from '../converters/converter';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    adapter: ioBroker.Adapter & { config: Record<string, unknown> };
    log: ioBroker.Logger;
};

/**
 * Companion slider entity for the cover. Exposed as a separate `input_number` so
 * dashboards can drive cover position without a tilt/position widget.
 */
class CoverSliderEntity extends BaseEntity {
    constructor(
        name: string | undefined,
        room: ioBroker.EnumObject | undefined,
        func: ioBroker.EnumObject | undefined,
        obj: ioBroker.Object | undefined,
        forcedEntityId: string | undefined,
        stateId: string,
        common: Record<string, unknown>,
    ) {
        super(name, room, func, obj, 'input_number', forcedEntityId);
        this.context.STATE.setId = stateId;
        this.context.STATE.getId = stateId;
        this.attributes.icon = 'mdi:window-shutter';
        this.attributes.mode = 'slider';
        this.attributes.min = (common.min as number | undefined) ?? 0;
        this.attributes.max = (common.max as number | undefined) ?? 100;
        this.attributes.step = (common.step as number | undefined) ?? 1;
        this.addID2entity(stateId);
    }
}

/**
 * Handler for set_cover_position / set_cover_tilt_position service calls.
 *
 * @param entity - the cover entity
 * @param command - matched command (provides setId)
 * @param data - HA service call data
 * @param data.service_data - the HA service-call payload
 * @param user - ioBroker user id
 */
function handleSetAndTiltCommand(
    entity: BaseEntity,
    command: EntityCommand,
    data: { service_data: Record<string, number> },
    user: string,
): Promise<void> {
    return new Promise((resolve, reject) => {
        if (data.service_data.position >= 0) {
            let value = (data.service_data.position / 100) * entity.context.STATE.max! + entity.context.STATE.min!;
            if (entity.context.STATE.invert) {
                value =
                    ((100 - data.service_data.position) / 100) * entity.context.STATE.max! + entity.context.STATE.min!;
            }
            adapterData.adapter.setForeignState(command.setId!, value, false, { user }, err =>
                err ? reject(err) : resolve(),
            );
        } else if (data.service_data.tilt_position >= 0) {
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'tilt');
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
 *
 * @param entity - the cover entity
 * @param control - the type-detector PatternControl
 * @param stateName - ioBroker state name to look for (e.g. 'OPEN', 'CLOSE')
 * @param serviceName - HA service name (e.g. 'open_cover', 'close_cover')
 * @param featureBit - supported_features bit to set when the state is found
 * @param onWrite - optional side-effect to run before writing (e.g. update entity.state)
 * @returns true when the named state was found and a command was registered
 */
function addCommand(
    entity: BaseEntity,
    control: PatternControl,
    stateName: string,
    serviceName: string,
    featureBit: number,
    onWrite?: (entity: BaseEntity) => void,
): boolean {
    const state = control.states.find(s => s.id && s.name === stateName);
    if (!state?.id) {
        return false;
    }
    const stateId = state.id;
    entity.context.COMMANDS.push({
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
 * Add a SET/ACTUAL level state to the cover entity and create the companion slider.
 *
 * @param entities - entity array; entities[0] is the cover (slider is appended)
 * @param control - type-detector PatternControl
 * @param objects - ioBroker objects cache
 * @param setStateName - name of the SET state (e.g. 'SET')
 * @param room - room enum (for slider)
 * @param func - function enum (for slider)
 * @param obj - ioBroker object for the device
 * @param forcedEntityId - optional forced entity_id for the slider
 * @returns true when the named state was found
 */
function addBlindLevel(
    entities: BaseEntity[],
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
    const common = (objects[stateId]?.common ?? {}) as Record<string, unknown>;

    const slider = new CoverSliderEntity(
        entity.attributes.friendly_name,
        room,
        func,
        obj,
        forcedEntityId,
        stateId,
        common,
    );
    entities.push(slider);

    entity.context.STATE.setId = stateId;
    entity.context.STATE.getId = stateId;
    entity.addID2entity(stateId);
    entity.context.STATE.max = (common.max as number | undefined) ?? 100;
    entity.context.STATE.min = (common.min as number | undefined) ?? 0;

    entity.context.STATE.getParser = (ent, _attr, iobState): void => {
        if (!iobState) {
            return;
        }
        const val = iobState.val as number | null;
        if (val != null) {
            const stMin = ent.context.STATE.min!;
            const stMax = ent.context.STATE.max!;
            let position = ((val - stMin) / stMax) * 100.0;
            let isClosed = val === stMin;
            let isOpened = val === stMax;
            if (ent.context.STATE.invert) {
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

    entity.context.COMMANDS.push({
        service: 'set_cover_tilt_position',
        setId: stateId,
        parseCommand: handleSetAndTiltCommand as EntityCommand['parseCommand'],
    });
    entity.context.COMMANDS.push({
        service: 'set_cover_position',
        setId: stateId,
        parseCommand: handleSetAndTiltCommand as EntityCommand['parseCommand'],
    });

    entity.context.COMMANDS.push({
        service: 'toggle',
        setId: stateId,
        parseCommand: (ent, command, _data, user): Promise<void> =>
            new Promise((resolve, reject) => {
                const upCmd = ent.context.COMMANDS.find(a => a.service === 'open_cover');
                const downCmd = ent.context.COMMANDS.find(a => a.service === 'close_cover');
                if (ent.state === 'open' || ent.state === 'opening') {
                    const setId = downCmd?.setId ?? command.setId!;
                    const val: boolean | number = downCmd
                        ? true
                        : ent.context.STATE.invert
                          ? (ent.context.STATE.min ?? 0)
                          : (ent.context.STATE.max ?? 100);
                    adapterData.adapter.setForeignState(setId, val, false, { user }, err =>
                        err ? reject(err) : resolve(),
                    );
                } else {
                    const setId = upCmd?.setId ?? command.setId!;
                    const val: boolean | number = upCmd
                        ? true
                        : ent.context.STATE.invert
                          ? (ent.context.STATE.max ?? 100)
                          : (ent.context.STATE.min ?? 0);
                    adapterData.adapter.setForeignState(setId, val, false, { user }, err =>
                        err ? reject(err) : resolve(),
                    );
                }
            }),
    });

    const getState = control.states.find(s => s.id && s.name === setStateName.replace('SET', 'ACTUAL'));
    if (getState?.id) {
        entity.context.STATE.getId = getState.id;
        entity.addID2entity(getState.id);
        slider.context.STATE.getId = getState.id;
        slider.addID2entity(getState.id);
    }

    return true;
}

/**
 * Add a tilt level state (TILT_SET / TILT_ACTUAL) to the cover entity.
 *
 * @param entity - the cover entity
 * @param control - type-detector PatternControl
 * @param objects - ioBroker objects cache
 * @param setStateName - name of the tilt SET state (e.g. 'TILT_SET')
 * @returns true when the named state was found
 */
function addTiltLevel(
    entity: BaseEntity,
    control: PatternControl,
    objects: Record<string, ioBroker.Object>,
    setStateName: string,
): boolean {
    const state = control.states.find(s => s.id && s.name === setStateName);
    if (!state?.id) {
        return false;
    }
    const stateId = state.id;
    const common = (objects[stateId]?.common ?? {}) as Record<string, unknown>;

    entity.context.ATTRIBUTES = [
        {
            attribute: 'tilt',
            getId: stateId,
            setId: stateId,
            min: (common.min as number | undefined) ?? 0,
            max: (common.max as number | undefined) ?? 100,
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
    entity.addID2entity(stateId);
    (entity.attributes as Record<string, number>).supported_features |= 128;

    const getState = control.states.find(s => s.id && s.name === setStateName.replace('SET', 'ACTUAL'));
    if (getState?.id) {
        entity.context.ATTRIBUTES[0].getId = getState.id;
        entity.addID2entity(getState.id);
    }

    return true;
}

/**
 * CoverEntity — single class for the Home Assistant `cover` domain (blinds).
 *
 * Returns itself plus a companion `input_number` slider when a SET state is found.
 * Use the static factory `CoverEntity.build(params)` for the (entity + slider) tuple.
 */
export class CoverEntity extends BaseEntity {
    /**
     * Build a cover and (optionally) a companion slider for the given params.
     *
     * @param params - converter parameters
     * @returns [coverEntity, sliderEntity?] — slider only when a SET state was found.
     */
    static build(params: ConverterParameters): BaseEntity[] {
        const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
        const entity = new CoverEntity(friendlyName, room, func, objects[id], forcedEntityId);

        adapterData.log.debug(`Creating blind of type ${controls.type} for ${params.id}`);

        const entities: BaseEntity[] = [entity];

        if (addBlindLevel(entities, controls, objects, 'SET', room, func, objects[params.id], forcedEntityId)) {
            entity.context.STATE.invert = !!(adapterData.adapter.config as Record<string, unknown>).blindsInvert;
        }

        if (addTiltLevel(entity, controls, objects, 'TILT_SET')) {
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'tilt');
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

        if (!haveOpen) {
            entity.context.COMMANDS.push({
                service: 'open_cover',
                setId: entity.context.STATE.setId,
                parseCommand: (ent, command, _data, user): Promise<void> =>
                    new Promise((resolve, reject) => {
                        ent.state = 'opening';
                        adapterData.adapter.setForeignState(
                            command.setId!,
                            ent.context.STATE.invert ? (ent.context.STATE.min ?? 0) : (ent.context.STATE.max ?? 100),
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
                            ent.context.STATE.invert ? (ent.context.STATE.max ?? 100) : (ent.context.STATE.min ?? 0),
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

    private constructor(
        name: string | null | undefined,
        room: ioBroker.EnumObject | null | undefined,
        func: ioBroker.EnumObject | null | undefined,
        obj: ioBroker.Object | undefined,
        forcedEntityId?: string,
    ) {
        super(name, room, func, obj, 'cover', forcedEntityId);
        this.attributes.device_class = 'blind';
        this.context.STATE.setId = null;
        this.context.STATE.getId = null;
        this.attributes.supported_features = 0;
        this.attributes.icon = 'mdi:window-shutter';
    }
}
