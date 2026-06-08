import type { ioBrokerEntity, ConverterParameters } from './converter';
import { BinarySensorEntity } from '../entities/binarySensorEntity';
import { SensorEntity } from '../entities/sensorEntity';

/** Optional electricity states a device may expose (type-detector ElectricityPatterns) -> sensor specs. */
const ELECTRICITY_SPECS: {
    name: string;
    suffix: string;
    deviceClass: string;
    unit: string;
    stateClass: string;
    label: string;
}[] = [
    {
        name: 'ELECTRIC_POWER',
        suffix: 'power',
        deviceClass: 'power',
        unit: 'W',
        stateClass: 'measurement',
        label: 'Power',
    },
    {
        name: 'CURRENT',
        suffix: 'current',
        deviceClass: 'current',
        unit: 'A',
        stateClass: 'measurement',
        label: 'Current',
    },
    {
        name: 'VOLTAGE',
        suffix: 'voltage',
        deviceClass: 'voltage',
        unit: 'V',
        stateClass: 'measurement',
        label: 'Voltage',
    },
    // value.power.consumption is an accumulating energy meter -> usable by the energy dashboard.
    {
        name: 'CONSUMPTION',
        suffix: 'energy',
        deviceClass: 'energy',
        unit: 'kWh',
        stateClass: 'total_increasing',
        label: 'Energy',
    },
    {
        name: 'FREQUENCY',
        suffix: 'frequency',
        deviceClass: 'frequency',
        unit: 'Hz',
        stateClass: 'measurement',
        label: 'Frequency',
    },
];

/**
 * Build sensor entities for a device's optional electricity states (power, current, voltage,
 * consumption/energy, frequency). The state's own unit is used when set, otherwise a default.
 *
 * @param parameters - converter parameters (controls.states is searched for the electricity states)
 * @param baseName - the local part of the main entity's entity_id (used for the sensor ids/names)
 * @returns the created electricity sensor entities (possibly empty)
 */
export function generateElectricitySensors(parameters: ConverterParameters, baseName: string): SensorEntity[] {
    const entities: SensorEntity[] = [];
    for (const spec of ELECTRICITY_SPECS) {
        const state = parameters.controls.states.find(s => s.id && s.name === spec.name);
        if (!state?.id) {
            continue;
        }
        const name = `${parameters.friendlyName || baseName} ${spec.label}`;
        entities.push(
            SensorEntity.electricity(
                state.id,
                name,
                parameters.room,
                parameters.func,
                parameters.objects?.[state.id],
                `sensor.${baseName}_${spec.suffix}`,
                spec.deviceClass,
                spec.unit,
                spec.stateClass,
            ),
        );
    }
    return entities;
}

/**
 * Build a binary_sensor indicator entity from a state name in controls.states.
 * Returns null when no matching state is found.
 *
 * @param parameters - converter parameters (controls.states is searched for `stateName`)
 * @param stateName - name of the indicator state (e.g. 'LOWBAT', 'ERROR')
 * @param iobType - tag stored on context.iobType (mirrors the state name in most cases)
 * @param deviceClass - HA binary_sensor device_class to assign
 * @param inverted - if true, applies offline-inversion (UNREACH/OFFLINE → connectivity 'on')
 */
function makeIndicator(
    parameters: ConverterParameters,
    stateName: string,
    iobType: string,
    deviceClass: string,
    inverted = false,
): BinarySensorEntity | null {
    const state = parameters.controls.states.find(s => s.id && s.name === stateName);
    if (!state?.id) {
        return null;
    }
    return new BinarySensorEntity(parameters, {
        stateId: state.id,
        sourceObj: parameters.objects[state.id],
        deviceClass,
        iobType,
        inverted,
    });
}

/**
 * Create a battery warning binary_sensor entity from a LOWBAT indicator state.
 *
 * @param parameters - conversion parameters
 */
export function processBattery(parameters: ConverterParameters): ioBrokerEntity | null {
    return makeIndicator(parameters, 'LOWBAT', 'LOWBAT', 'battery');
}

/**
 * Create a connectivity binary_sensor entity from an UNREACH, OFFLINE, or CONNECTED state.
 * UNREACH/OFFLINE are inverted (offline ioBroker state → connectivity off in HA).
 *
 * @param parameters - conversion parameters
 */
export function connectivityIndicator(parameters: ConverterParameters): ioBrokerEntity | null {
    const offlineState = parameters.controls.states.find(s => s.id && (s.name === 'UNREACH' || s.name === 'OFFLINE'));
    if (offlineState?.id) {
        return new BinarySensorEntity(parameters, {
            stateId: offlineState.id,
            sourceObj: parameters.objects[offlineState.id],
            iobType: 'OFFLINE',
            inverted: true,
        });
    }
    return makeIndicator(parameters, 'CONNECTED', 'CONNECTED', 'connectivity');
}

/**
 * Create an error binary_sensor entity from an ERROR indicator state.
 *
 * @param parameters - conversion parameters
 */
export function processError(parameters: ConverterParameters): ioBrokerEntity | null {
    return makeIndicator(parameters, 'ERROR', 'ERROR', 'problem');
}

/**
 * Create a maintenance binary_sensor entity from a MAINTAIN indicator state.
 *
 * @param parameters - conversion parameters
 */
export function processMaintenance(parameters: ConverterParameters): ioBrokerEntity | null {
    return makeIndicator(parameters, 'MAINTAIN', 'MAINTAIN', 'update');
}

/**
 * Create a working binary_sensor entity from a WORKING indicator state.
 *
 * @param parameters - conversion parameters
 */
export function processWorking(parameters: ConverterParameters): ioBrokerEntity | null {
    return makeIndicator(parameters, 'WORKING', 'WORKING', 'running');
}
