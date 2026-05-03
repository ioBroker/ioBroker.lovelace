import { Types } from '@iobroker/type-detector';
import { Converter } from './converter';
import type { ConverterParameters, ioBrokerEntity } from './converter';
import { BinarySensorEntity } from '../entities/binarySensorEntity';

// Re-export indicator functions so callers importing from binary_sensor still work.
export { processBattery, connectivityIndicator, processError, processMaintenance, processWorking } from './indicators';

/**
 * Create a motion binary_sensor entity.
 *
 * @param parameters - conversion parameters
 */
export function processMotion(parameters: ConverterParameters): ioBrokerEntity[] {
    return [new BinarySensorEntity(parameters, { deviceClass: 'motion', icon: 'mdi:motion-sensor' })];
}

/**
 * Create a door binary_sensor entity.
 *
 * @param parameters - conversion parameters
 */
export function processDoor(parameters: ConverterParameters): ioBrokerEntity[] {
    return [new BinarySensorEntity(parameters, { deviceClass: 'door', icon: 'mdi:door' })];
}

/**
 * Create a window binary_sensor entity.
 *
 * @param parameters - conversion parameters
 */
export function processWindow(parameters: ConverterParameters): ioBrokerEntity[] {
    return [new BinarySensorEntity(parameters, { deviceClass: 'window', icon: 'mdi:window-maximize' })];
}

/**
 * Create a fire alarm (smoke) binary_sensor entity.
 *
 * @param parameters - conversion parameters
 */
export function processFireAlarm(parameters: ConverterParameters): ioBrokerEntity[] {
    return [new BinarySensorEntity(parameters, { deviceClass: 'smoke' })];
}

/**
 * Apply manual entity configuration to a pre-created binary_sensor entity.
 * Called from server.js for user-configured (non-auto-detected) entities.
 *
 * @param _id - ioBroker object id (unused)
 * @param obj - ioBroker object
 * @param entity - already created entity to configure
 * @param _objects - ioBroker objects cache (unused here)
 * @param custom - custom lovelace settings from the ioBroker object
 */
export function processManualEntity(
    _id: string,
    obj: ioBroker.Object,
    entity: ioBrokerEntity,
    _objects: Record<string, ioBroker.Object>,
    custom: Record<string, unknown>,
): ioBrokerEntity[] {
    entity.attributes.device_class = custom.attr_device_class as string | undefined;
    if (
        custom.attr_device_class === 'connectivity' &&
        (obj as ioBroker.StateObject).common?.role === 'indicator.unreach'
    ) {
        // entity is already a BaseEntity from server.js processCommon; reuse the inversion logic.
        entity.attributes.device_class = 'connectivity';
        entity.context.STATE.getParser = (e, _attr, state): void => {
            e.state = state?.val ? 'off' : 'on';
        };
        entity.context.STATE.historyParser = (_iobId: string, state: ioBroker.State): string => {
            return state?.val ? 'off' : 'on';
        };
    }
    return [entity];
}

/**
 * Converter subclass for binary sensor device types:
 * motion, door, window, and fire alarm.
 */
export class BinarySensorConverter extends Converter {
    static override convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        switch (params.controls.type) {
            case Types.motion:
                return processMotion(params);
            case Types.door:
                return processDoor(params);
            case Types.window:
                return processWindow(params);
            case Types.fireAlarm:
                return processFireAlarm(params);
            default:
                return [];
        }
    }
}

Converter.converters[Types.motion] = BinarySensorConverter;
Converter.converters[Types.door] = BinarySensorConverter;
Converter.converters[Types.window] = BinarySensorConverter;
Converter.converters[Types.fireAlarm] = BinarySensorConverter;

export default {
    processMotion,
    processDoor,
    processWindow,
    processFireAlarm,
    processManualEntity,
    BinarySensorConverter,
};
