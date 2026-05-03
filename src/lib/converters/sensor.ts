import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { SensorEntity } from '../entities/sensorEntity';

/**
 * Backward-compatible factory for a humidity sensor entity.
 * Exposed because climate / weather converters re-use it.
 *
 * @param stateId - ioBroker state id to read humidity from
 * @param name - friendly name
 * @param room - room enum object
 * @param func - function enum object
 * @param obj - ioBroker object for the state
 * @param forcedEntityId - optional entity_id override
 */
export function createHumiditySensor(
    stateId: string,
    name: string | undefined,
    room: ioBroker.EnumObject | undefined,
    func: ioBroker.EnumObject | undefined,
    obj: ioBroker.Object | undefined,
    forcedEntityId?: string,
): ioBrokerEntity {
    return SensorEntity.humidity(stateId, name, room, func, obj, forcedEntityId);
}

/**
 * Backward-compatible factory for a temperature sensor entity.
 * Exposed because climate / weather converters re-use it.
 *
 * @param stateId - ioBroker state id to read temperature from
 * @param name - friendly name
 * @param room - room enum object
 * @param func - function enum object
 * @param obj - ioBroker object for the state
 * @param forcedEntityId - optional entity_id override
 */
export function createTemperatureSensor(
    stateId: string,
    name: string | undefined,
    room: ioBroker.EnumObject | undefined,
    func: ioBroker.EnumObject | undefined,
    obj: ioBroker.Object | undefined,
    forcedEntityId?: string,
): ioBrokerEntity {
    return SensorEntity.temperature(stateId, name, room, func, obj, forcedEntityId);
}

/** Converter for temperature, humidity, and window-tilt sensor device types. */
export class SensorConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        const { controls, objects, forcedEntityId, friendlyName, room, func } = params;

        if (controls.type === Types.windowTilt) {
            return [SensorEntity.windowTilt(params)];
        }

        if (controls.type === Types.humidity) {
            const state = controls.states.find(s => s.id && s.name === 'ACTUAL');
            if (state?.id) {
                return [SensorEntity.humidity(state.id, friendlyName, room, func, objects[params.id], forcedEntityId)];
            }
            return [];
        }

        // Types.temperature
        const entities: ioBrokerEntity[] = [];

        let state = controls.states.find(s => s.id && s.name === 'ACTUAL');
        let tempEntity: ioBrokerEntity | undefined;
        if (state?.id) {
            tempEntity = SensorEntity.temperature(
                state.id,
                friendlyName,
                room,
                func,
                objects[params.id],
                forcedEntityId,
            );
            entities.push(tempEntity);
        }

        state = controls.states.find(s => s.id && s.name === 'SECOND');
        if (state?.id) {
            const humForcedId = tempEntity ? `${tempEntity.entity_id}_Humidity` : undefined;
            entities.push(SensorEntity.humidity(state.id, friendlyName, room, func, objects[params.id], humForcedId));
        }

        return entities;
    }
}

/**
 * Apply manual entity configuration to a pre-created sensor entity.
 *
 * @param _id - ioBroker object id (unused)
 * @param _obj - ioBroker object (unused)
 * @param entity - pre-created entity to configure
 * @param _objects - ioBroker objects cache (unused)
 * @param custom - custom lovelace settings from the ioBroker object
 */
export function processManualEntity(
    _id: string,
    _obj: ioBroker.Object,
    entity: ioBrokerEntity,
    _objects: Record<string, ioBroker.Object>,
    custom: Record<string, unknown>,
): ioBrokerEntity[] {
    entity.attributes.device_class = custom.attr_device_class as string;
    entity.attributes.unit_of_measurement =
        (custom.attr_unit_of_measurement as string) || entity.attributes.unit_of_measurement;
    return [entity];
}

Converter.converters[Types.windowTilt] = SensorConverter;
Converter.converters[Types.temperature] = SensorConverter;
Converter.converters[Types.humidity] = SensorConverter;
