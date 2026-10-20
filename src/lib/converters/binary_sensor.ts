import { Types } from '@iobroker/type-detector';
import { Converter } from './converter';
import type { ConverterParameters, ioBrokerEntity } from './converter';
import { BinarySensorEntity, invertBinaryState } from '../entities/binarySensorEntity';

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
 * Create a flood alarm (moisture) binary_sensor entity.
 *
 * @param parameters - conversion parameters
 */
export function processFloodAlarm(parameters: ConverterParameters): ioBrokerEntity[] {
    return [new BinarySensorEntity(parameters, { deviceClass: 'moisture' })];
}

/**
 * Create a contact binary_sensor entity (type-detector 6: a generic contact sensor).
 *
 * @param parameters - conversion parameters
 */
export function processContact(parameters: ConverterParameters): ioBrokerEntity[] {
    return [new BinarySensorEntity(parameters, { deviceClass: 'opening' })];
}

/**
 * Create a carbon monoxide alarm binary_sensor entity (type-detector 6).
 *
 * @param parameters - conversion parameters
 */
export function processCoAlarm(parameters: ConverterParameters): ioBrokerEntity[] {
    return [new BinarySensorEntity(parameters, { deviceClass: 'carbon_monoxide' })];
}

/**
 * Create a button sensor binary_sensor entity.
 *
 * @param parameters - conversion parameters
 */
export function processButtonSensor(parameters: ConverterParameters): ioBrokerEntity[] {
    return [new BinarySensorEntity(parameters, { deviceClass: 'button' })];
}

/**
 * Whether a role marks a state that is true when the device is NOT reachable. ioBroker moved the
 * role from `indicator.unreach` to `indicator.maintenance.unreach`, and adapters use their own
 * prefixes as well, so the suffix decides. `.online` and friends must not match - those are true
 * when the device IS there.
 *
 * @param role - the ioBroker role of the state
 */
function isUnreachRole(role: unknown): boolean {
    return typeof role === 'string' && /\.unreach$/i.test(role);
}

/**
 * Apply manual entity configuration to a pre-created binary_sensor entity.
 * Called from server.js for user-configured (non-auto-detected) entities.
 *
 * @param _id - ioBroker object id (unused)
 * @param obj - ioBroker object
 * @param entity - already created entity to configure
 * @param _objects - ioBroker objects cache (unused here)
 * @param custom - custom lovelace settings from the ioBroker object (`invert_state` flips the state)
 */
export function processManualEntity(
    _id: string,
    obj: ioBroker.Object,
    entity: ioBrokerEntity,
    _objects: Record<string, ioBroker.Object>,
    custom: Record<string, unknown>,
): ioBrokerEntity[] {
    entity.attributes.device_class = custom.attr_device_class as string | undefined;
    // The "invert" checkbox decides, once it has been touched. Configurations that predate it keep
    // the old automatic behaviour: a connectivity sensor on an unreach state, which is true when
    // the device is NOT connected.
    const invert =
        custom.invert_state === undefined || custom.invert_state === null
            ? custom.attr_device_class === 'connectivity' && isUnreachRole((obj as ioBroker.StateObject).common?.role)
            : !!custom.invert_state;
    if (invert) {
        // The entity is a plain BaseEntity built by the server, so invert it with the same helper
        // the auto-detected connectivity indicator uses.
        invertBinaryState(entity);
    }
    return [entity];
}

/**
 * Converter subclass for binary sensor device types:
 * motion, door, window, and fire alarm.
 */
export class BinarySensorConverter extends Converter {
    /** @param params - converter parameters */
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
            case Types.floodAlarm:
                return processFloodAlarm(params);
            case Types.buttonSensor:
                return processButtonSensor(params);
            case Types.contact:
                return processContact(params);
            case Types.coAlarm:
                return processCoAlarm(params);
            default:
                return [];
        }
    }
}

Converter.converters[Types.motion] = BinarySensorConverter;
Converter.converters[Types.door] = BinarySensorConverter;
Converter.converters[Types.window] = BinarySensorConverter;
Converter.converters[Types.fireAlarm] = BinarySensorConverter;
Converter.converters[Types.floodAlarm] = BinarySensorConverter;
Converter.converters[Types.buttonSensor] = BinarySensorConverter;
Converter.converters[Types.contact] = BinarySensorConverter;
Converter.converters[Types.coAlarm] = BinarySensorConverter;

export default {
    processMotion,
    processDoor,
    processWindow,
    processFireAlarm,
    processFloodAlarm,
    processButtonSensor,
    processContact,
    processCoAlarm,
    processManualEntity,
    BinarySensorConverter,
};
