import type { ioBrokerEntity, ConverterParameters } from './converter';
import { BinarySensorEntity } from '../entities/binarySensorEntity';
import { SensorEntity } from '../entities/sensorEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    lang: string;
    words: Record<string, Record<string, string>> | undefined;
};

/**
 * Translate a label of an extra entity ('Battery warning', 'Power', ...) into the admin language.
 * Unknown words stay English - the labels double as the English text in `admin/words.js`.
 *
 * @param label - the English label
 */
function translateLabel(label: string): string {
    const entry = adapterData.words?.[label];
    return (entry && (entry[adapterData.lang] || entry.en)) || label;
}

/**
 * Words adapters use when they name a state after what it is instead of giving it a name of its
 * own. The last word of the name decides, because adapters prefix the device: ioBroker.devices
 * writes "UNREACH", hm-rpc writes "FireAlarm - HomeMatic.LOWBAT", others "Motion With Battery
 * batteryWarning". A name whose last word is none of these is the user's own wording and is kept.
 */
const GENERATED_NAME_TAIL =
    /^(unreach|unreachable|offline|online|connected|connection|connectivity|reachable|alive|lowbat|lowbattery|batterywarning|battery|bat|warning|error|fault|maintain|maintenance|working|busy|state|value|actual|power|current|voltage|energy|consumption|frequency|level)$/i;

/**
 * Whether a name looks like the one an adapter generates for a state, as opposed to a name the user
 * wrote. Only the last word is looked at, so "Fridge UNREACH" counts as generated while a
 * hand-written "Kühlschrank Verbindung" does not.
 *
 * @param name - the `common.name` of the state
 */
function isGeneratedName(name: string): boolean {
    const words = name.split(/[\s._:\-/]+/).filter(w => w);
    const tail = words[words.length - 1];
    return !tail || GENERATED_NAME_TAIL.test(tail);
}

/**
 * Compare two names while ignoring case and punctuation, so "FireAlarm - HomeMatic" and
 * "FireAlarm HomeMatic" count as the same name.
 *
 * @param name - the name to simplify
 */
function simplifyName(name: string): string {
    return name.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
}

/**
 * Name an extra entity of a device after the device it belongs to: "Kitchen lamp Connectivity"
 * instead of the name the state carries, which is "UNREACH" with most adapters and not friendly at
 * all. Returns undefined when the state has a name of its own that the user wrote - a smart name,
 * or a `common.name` that is not one an adapter generates - so the usual name resolution keeps it.
 *
 * @param deviceName - the name of the device the entity belongs to
 * @param stateObj - the ioBroker object of the state behind the entity
 * @param label - what the entity is, e.g. 'Connectivity'
 */
function derivedName(
    deviceName: string | undefined,
    stateObj: ioBroker.Object | undefined,
    label?: string,
): string | undefined {
    if (!label || !deviceName) {
        return deviceName;
    }
    const common = stateObj?.common as { smartName?: unknown; name?: ioBroker.StringOrTranslated } | undefined;
    if (common?.smartName) {
        return undefined;
    }
    const raw = common?.name;
    const own =
        typeof raw === 'object' && raw
            ? (raw as Record<string, string>)[adapterData.lang] || (raw as Record<string, string>).en
            : raw;
    // A state named exactly like its device (ioBroker.devices does that) says nothing about what
    // the state is, so it gets the label as well.
    if (own && !isGeneratedName(own) && simplifyName(own) !== simplifyName(deviceName)) {
        return undefined;
    }
    return `${deviceName} ${translateLabel(label)}`;
}

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

/** One measured value of a device that becomes a sensor entity of its own. */
export interface Measurement {
    /** name of the state in the detected device */
    state: string;
    /** suffix of the entity id and of the friendly name */
    suffix: string;
    /** what the sensor is called */
    label: string;
    /** Home Assistant device class, empty when HA has none for this value */
    deviceClass: string;
    /** unit to use when the ioBroker object carries none */
    unit: string;
    /** `measurement` (a momentary value) by default */
    stateClass?: string;
}

/**
 * Build one sensor entity per measured value a device actually has.
 *
 * Home Assistant has no entity for a measuring device as a whole - an air quality monitor is a set
 * of sensors there, and so is everything a pump reports besides being on.
 *
 * @param parameters - converter parameters
 * @param measurements - the values to look for, in the order the sensors should be created
 * @param baseName - name part of the entity ids, so the sensors of one device stay together
 * @returns one entity per value found
 */
export function generateMeasurementSensors(
    parameters: ConverterParameters,
    measurements: Measurement[],
    baseName: string,
): SensorEntity[] {
    const entities: SensorEntity[] = [];
    for (const measurement of measurements) {
        const state = parameters.controls.states.find(s => s.id && s.name === measurement.state);
        if (!state?.id) {
            continue;
        }
        const sourceObj = parameters.objects?.[state.id];
        entities.push(
            SensorEntity.electricity(
                state.id,
                derivedName(parameters.friendlyName || baseName, sourceObj, measurement.label),
                parameters.room,
                parameters.func,
                parameters.objects?.[state.id],
                `sensor.${baseName}_${measurement.suffix}`,
                measurement.deviceClass,
                measurement.unit,
                measurement.stateClass || 'measurement',
            ),
        );
    }
    return entities;
}

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
        const name = derivedName(parameters.friendlyName || baseName, parameters.objects?.[state.id], spec.label);
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
 * Build a sensor entity for a device's optional BATTERY state (type-detector SharedPatterns.battery,
 * role `value.battery`) - the numeric charge level in percent, which ~35 device types can expose.
 *
 * This is the counterpart to the LOWBAT indicator (a boolean warning -> binary_sensor): the level
 * itself needs a real sensor so it is visible and can be graphed. Some types additionally consume
 * BATTERY as an entity attribute (vacuum `battery_level`, device_tracker `battery_level`); the extra
 * sensor is intentional and matches Home Assistant, where the attribute is legacy and the dedicated
 * battery sensor is the modern representation.
 *
 * @param parameters - converter parameters (controls.states is searched for the BATTERY state)
 * @param baseName - the local part of the main entity's entity_id (used for the sensor id/name)
 * @returns the created battery sensor, or null when the device has no BATTERY state
 */
export function generateBatterySensor(parameters: ConverterParameters, baseName: string): SensorEntity | null {
    const state = parameters.controls.states.find(s => s.id && s.name === 'BATTERY');
    if (!state?.id) {
        return null;
    }
    return SensorEntity.electricity(
        state.id,
        derivedName(parameters.friendlyName || baseName, parameters.objects?.[state.id], 'Battery'),
        parameters.room,
        parameters.func,
        parameters.objects?.[state.id],
        `sensor.${baseName}_battery`,
        'battery',
        '%',
        'measurement',
    );
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
 * @param label - what the indicator is, appended to the device's name (see `derivedName`)
 */
function makeIndicator(
    parameters: ConverterParameters,
    stateName: string,
    iobType: string,
    deviceClass: string,
    inverted = false,
    label?: string,
): BinarySensorEntity | null {
    const state = parameters.controls.states.find(s => s.id && s.name === stateName);
    if (!state?.id) {
        return null;
    }
    const sourceObj = parameters.objects[state.id];
    return new BinarySensorEntity(
        { ...parameters, friendlyName: derivedName(parameters.friendlyName, sourceObj, label) },
        {
            stateId: state.id,
            sourceObj,
            deviceClass,
            iobType,
            inverted,
        },
    );
}

/**
 * Create a battery warning binary_sensor entity from a LOWBAT indicator state.
 *
 * @param parameters - conversion parameters
 * @param label - what to append to the device's name
 */
export function processBattery(parameters: ConverterParameters, label?: string): ioBrokerEntity | null {
    return makeIndicator(parameters, 'LOWBAT', 'LOWBAT', 'battery', false, label);
}

/**
 * Create a connectivity binary_sensor entity from an UNREACH, OFFLINE, or CONNECTED state.
 * UNREACH/OFFLINE are inverted (offline ioBroker state → connectivity off in HA).
 *
 * @param parameters - conversion parameters
 * @param label - what to append to the device's name
 */
export function connectivityIndicator(parameters: ConverterParameters, label?: string): ioBrokerEntity | null {
    const offlineState = parameters.controls.states.find(s => s.id && (s.name === 'UNREACH' || s.name === 'OFFLINE'));
    if (offlineState?.id) {
        const sourceObj = parameters.objects[offlineState.id];
        return new BinarySensorEntity(
            { ...parameters, friendlyName: derivedName(parameters.friendlyName, sourceObj, label) },
            {
                stateId: offlineState.id,
                sourceObj,
                iobType: 'OFFLINE',
                inverted: true,
            },
        );
    }
    return makeIndicator(parameters, 'CONNECTED', 'CONNECTED', 'connectivity', false, label);
}

/**
 * Create an error binary_sensor entity from an ERROR indicator state.
 *
 * @param parameters - conversion parameters
 * @param label - what to append to the device's name
 */
export function processError(parameters: ConverterParameters, label?: string): ioBrokerEntity | null {
    return makeIndicator(parameters, 'ERROR', 'ERROR', 'problem', false, label);
}

/**
 * Create a maintenance binary_sensor entity from a MAINTAIN indicator state.
 *
 * @param parameters - conversion parameters
 * @param label - what to append to the device's name
 */
export function processMaintenance(parameters: ConverterParameters, label?: string): ioBrokerEntity | null {
    return makeIndicator(parameters, 'MAINTAIN', 'MAINTAIN', 'update', false, label);
}

/**
 * Create a working binary_sensor entity from a WORKING indicator state.
 *
 * @param parameters - conversion parameters
 * @param label - what to append to the device's name
 */
export function processWorking(parameters: ConverterParameters, label?: string): ioBrokerEntity | null {
    return makeIndicator(parameters, 'WORKING', 'WORKING', 'running', false, label);
}
