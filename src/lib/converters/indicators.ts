import type { ioBrokerEntity, ConverterParameters } from './converter';
import { BinarySensorEntity } from '../entities/binarySensorEntity';

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
