import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { SensorEntity } from '../entities/sensorEntity';
import { BinarySensorEntity } from '../entities/binarySensorEntity';
import { SwitchEntity } from '../entities/switchEntity';
import { getEntityId } from '../entities/entity_id';
import { BaseEntity } from '../entities/baseEntity';
import { processManualEntity as buildFan } from './fan';

/**
 * Converters for the device types type-detector 6 added.
 *
 * Without them a device of one of these types is only logged as "not yet supported" and disappears
 * from the frontend - including devices that used to be detected as something else (a fan was a
 * dimmer, a pump a socket, ...). Home Assistant has no entity for a measuring device as a whole, so
 * each measurement becomes a sensor of its own, which is how HA represents them too.
 */

/** device_class and default unit of one measured value. */
interface Measurement {
    /** state name in the detected device */
    state: string;
    /** suffix of the entity id and of the friendly name */
    suffix: string;
    label: string;
    deviceClass: string;
    unit: string;
    /** `measurement` for a momentary value, `total_increasing` for a counter */
    stateClass?: string;
}

/** The air quality values Home Assistant knows a device class for. */
const AIR_QUALITY: Measurement[] = [
    { state: 'AQI', suffix: 'aqi', label: 'Air quality index', deviceClass: 'aqi', unit: '' },
    { state: 'CO2', suffix: 'co2', label: 'CO2', deviceClass: 'carbon_dioxide', unit: 'ppm' },
    { state: 'CO', suffix: 'co', label: 'CO', deviceClass: 'carbon_monoxide', unit: 'ppm' },
    {
        state: 'TVOC',
        suffix: 'tvoc',
        label: 'VOC',
        deviceClass: 'volatile_organic_compounds',
        unit: 'µg/m³',
    },
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

/** What a pump measures besides being on or off. */
const PUMP_MEASUREMENTS: Measurement[] = [
    { state: 'PRESSURE', suffix: 'pressure', label: 'Pressure', deviceClass: 'pressure', unit: 'hPa' },
    { state: 'FLOW', suffix: 'flow', label: 'Flow', deviceClass: 'volume_flow_rate', unit: 'm³/h' },
    { state: 'TEMPERATURE', suffix: 'temperature', label: 'Temperature', deviceClass: 'temperature', unit: '°C' },
];

/**
 * Build one sensor per measured value the device actually has.
 *
 * @param params - converter parameters
 * @param measurements - the values to look for
 * @returns one entity per value found, in the order of `measurements`
 */
function buildSensors(params: ConverterParameters, measurements: Measurement[]): ioBrokerEntity[] {
    const entities: ioBrokerEntity[] = [];
    // The entity ids of the single sensors are derived from the device, so they stay together.
    const baseName = (
        params.forcedEntityId ||
        getEntityId('sensor', null, params.objects?.[params.id], params.room?._id, params.func?._id)
    ).split('.')[1];
    for (const measurement of measurements) {
        const state = params.controls.states.find(s => s.id && s.name === measurement.state);
        if (!state?.id) {
            continue;
        }
        entities.push(
            SensorEntity.electricity(
                state.id,
                `${params.friendlyName || baseName} ${measurement.label}`,
                params.room,
                params.func,
                params.objects?.[state.id],
                `sensor.${baseName}_${measurement.suffix}`,
                measurement.deviceClass,
                measurement.unit,
                measurement.stateClass || 'measurement',
            ),
        );
    }
    return entities;
}

/** Air quality monitors: one sensor per measured value, as Home Assistant represents them. */
export class AirQualityConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        return buildSensors(params, AIR_QUALITY);
    }
}

/**
 * Devices that only measure electricity. The sensors themselves are the ones every device type gets
 * for its optional electricity states, so this type needs nothing of its own.
 */
export class ElectricityConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(): ioBrokerEntity[] {
        return [];
    }
}

/** Single-value measuring devices (pressure, flow). */
export class MeasurementConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        if (params.controls.type === Types.flow) {
            return buildSensors(params, [
                { state: 'FLOW', suffix: 'flow', label: 'Flow', deviceClass: 'volume_flow_rate', unit: 'm³/h' },
            ]);
        }
        return buildSensors(params, [
            { state: 'PRESSURE', suffix: 'pressure', label: 'Pressure', deviceClass: 'pressure', unit: 'hPa' },
        ]);
    }
}

/**
 * Fans and air purifiers. Home Assistant has one `fan` entity for both; the fan logic of a manually
 * configured fan is reused, the detected states only have to be named the way it expects them.
 */
export class FanConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        const { objects, id, forcedEntityId, friendlyName, room, func, controls } = params;
        const stateId = (name: string): string | undefined => controls.states.find(s => s.id && s.name === name)?.id;

        const speed = stateId('SPEED') || stateId('SPEED_LEVEL');
        const power = stateId('POWER');
        if (!speed && !power) {
            return [];
        }

        const entity = new BaseEntity(friendlyName, room, func, objects[id], 'fan', forcedEntityId);
        return buildFan(speed || power || id, objects[id], entity, objects, {
            state_SET: power,
            state_SPEED: speed,
            state_OSCILLATION: stateId('SWING'),
            state_DIRECTION: stateId('AIRFLOW_DIRECTION'),
        });
    }
}

/**
 * Pumps: on and off like a switch, plus a sensor for each value the pump measures. The detected
 * `POWER` state is what `switch` reads as `SET`.
 */
export class PumpConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        const power = params.controls.states.find(s => s.id && s.name === 'POWER');
        const entities: ioBrokerEntity[] = [];
        if (power?.id) {
            const withSet = {
                ...params,
                controls: {
                    ...params.controls,
                    states: params.controls.states.map(s => (s.name === 'POWER' ? { ...s, name: 'SET' } : s)),
                },
            };
            entities.push(new SwitchEntity(withSet));
        }
        entities.push(...buildSensors(params, PUMP_MEASUREMENTS));
        return entities;
    }
}

/** Contact sensors and carbon monoxide alarms - both a plain on/off with a device class. */
export class ContactConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        const deviceClass = params.controls.type === Types.coAlarm ? 'carbon_monoxide' : 'opening';
        return [new BinarySensorEntity(params, { deviceClass })];
    }
}

Converter.converters[Types.airQuality] = AirQualityConverter;
Converter.converters[Types.electricity] = ElectricityConverter;
Converter.converters[Types.pressure] = MeasurementConverter;
Converter.converters[Types.flow] = MeasurementConverter;
Converter.converters[Types.contact] = ContactConverter;
Converter.converters[Types.coAlarm] = ContactConverter;
Converter.converters[Types.fan] = FanConverter;
Converter.converters[Types.airPurifier] = FanConverter;
Converter.converters[Types.pump] = PumpConverter;

export default {
    AirQualityConverter,
    ElectricityConverter,
    MeasurementConverter,
    ContactConverter,
    FanConverter,
    PumpConverter,
};
