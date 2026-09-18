import { Types } from '@iobroker/type-detector';
import { generateMeasurementSensors, type Measurement } from './indicators';
import { getEntityId } from '../entities/entity_id';
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

/** The air quality values Home Assistant knows a device class for (plus the ones it does not). */
const AIR_QUALITY: Measurement[] = [
    { state: 'AQI', suffix: 'aqi', label: 'Air quality index', deviceClass: 'aqi', unit: '' },
    { state: 'CO2', suffix: 'co2', label: 'CO2', deviceClass: 'carbon_dioxide', unit: 'ppm' },
    { state: 'CO', suffix: 'co', label: 'CO', deviceClass: 'carbon_monoxide', unit: 'ppm' },
    { state: 'TVOC', suffix: 'tvoc', label: 'VOC', deviceClass: 'volatile_organic_compounds', unit: 'µg/m³' },
    { state: 'PM1', suffix: 'pm1', label: 'PM1', deviceClass: 'pm1', unit: 'µg/m³' },
    { state: 'PM25', suffix: 'pm25', label: 'PM2.5', deviceClass: 'pm25', unit: 'µg/m³' },
    { state: 'PM10', suffix: 'pm10', label: 'PM10', deviceClass: 'pm10', unit: 'µg/m³' },
    { state: 'NO2', suffix: 'no2', label: 'NO2', deviceClass: 'nitrogen_dioxide', unit: 'µg/m³' },
    { state: 'SO2', suffix: 'so2', label: 'SO2', deviceClass: 'sulphur_dioxide', unit: 'µg/m³' },
    { state: 'O3', suffix: 'o3', label: 'Ozone', deviceClass: 'ozone', unit: 'µg/m³' },
    // Formaldehyde and radon have no device class in Home Assistant; they are still worth a sensor.
    { state: 'CH2O', suffix: 'ch2o', label: 'Formaldehyde', deviceClass: '', unit: 'µg/m³' },
    { state: 'RN', suffix: 'radon', label: 'Radon', deviceClass: '', unit: 'Bq/m³' },
    { state: 'PRESSURE', suffix: 'pressure', label: 'Pressure', deviceClass: 'pressure', unit: 'hPa' },
    { state: 'ACTUAL', suffix: 'temperature', label: 'Temperature', deviceClass: 'temperature', unit: '°C' },
    { state: 'HUMIDITY', suffix: 'humidity', label: 'Humidity', deviceClass: 'humidity', unit: '%' },
];

/** The single value a pressure or flow sensor reports. */
const PRESSURE: Measurement = {
    state: 'PRESSURE',
    suffix: 'pressure',
    label: 'Pressure',
    deviceClass: 'pressure',
    unit: 'hPa',
};
const FLOW: Measurement = {
    state: 'FLOW',
    suffix: 'flow',
    label: 'Flow',
    deviceClass: 'volume_flow_rate',
    unit: 'm³/h',
};

/**
 * Name part the sensors of one device share, so they stay together in the entity list.
 *
 * @param params - converter parameters
 */
export function sensorBaseName(params: ConverterParameters): string {
    return (
        params.forcedEntityId ||
        getEntityId('sensor', null, params.objects?.[params.id], params.room?._id, params.func?._id)
    ).split('.')[1];
}

/** Converter for temperature, humidity, and window-tilt sensor device types. */
export class SensorConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        const { controls, objects, forcedEntityId, friendlyName, room, func } = params;

        if (controls.type === Types.windowTilt) {
            return [SensorEntity.windowTilt(params)];
        }

        // type-detector 6 added device types that are a set of measurements: Home Assistant has no
        // entity for such a device as a whole, every value becomes a sensor of its own.
        if (controls.type === Types.airQuality) {
            return generateMeasurementSensors(params, AIR_QUALITY, sensorBaseName(params));
        }

        if (controls.type === Types.pressure || controls.type === Types.flow) {
            return generateMeasurementSensors(
                params,
                [controls.type === Types.flow ? FLOW : PRESSURE],
                sensorBaseName(params),
            );
        }

        if (controls.type === Types.electricity) {
            // A device that only measures electricity: those sensors are added to every device
            // anyway (see Converter._processEntities), so there is nothing of its own to build.
            return [];
        }

        if (controls.type === Types.humidity) {
            const state = controls.states.find(s => s.id && s.name === 'ACTUAL');
            if (state?.id) {
                return [SensorEntity.humidity(state.id, friendlyName, room, func, objects[params.id], forcedEntityId)];
            }
            return [];
        }

        if (controls.type === Types.illuminance) {
            const state = controls.states.find(s => s.id && s.name === 'ACTUAL');
            if (state?.id) {
                return [
                    SensorEntity.illuminance(state.id, friendlyName, room, func, objects[params.id], forcedEntityId),
                ];
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
Converter.converters[Types.illuminance] = SensorConverter;
Converter.converters[Types.airQuality] = SensorConverter;
Converter.converters[Types.pressure] = SensorConverter;
Converter.converters[Types.flow] = SensorConverter;
Converter.converters[Types.electricity] = SensorConverter;
