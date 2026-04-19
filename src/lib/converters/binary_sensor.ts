import { Types } from '@iobroker/type-detector';
import { Converter } from './converter';
import type { ioBrokerEntity, ConverterParameters } from './converter';
import { processCommon } from '../entities/utils';

// Re-export indicator functions so callers importing from binary_sensor still work.
export { processBattery, connectivityIndicator, processError, processMaintenance, processWorking } from './indicators';

//TODO: rework processCommon parameters, when method is eventually changed.

/**
 * Create a bare binary_sensor entity from ConverterParameters.
 * Uses controls.states to look up the given state name (default: 'ACTUAL').
 *
 * @param parameters - converter parameters
 * @param stateName - name of the state to look up in controls.states
 */
function createSensorEntity(parameters: ConverterParameters, stateName = 'ACTUAL'): ioBrokerEntity {
    const { friendlyName, room, func, objects, id, forcedEntityId, controls } = parameters;
    const entity = processCommon(friendlyName, room, func, objects[id], 'binary_sensor', forcedEntityId);

    entity.context.STATE = { getId: '' };
    const state = controls.states.find((s: { id: string; name: string }) => s.id && s.name === stateName);
    if (state?.id) {
        entity.context.STATE.getId = state.id;
    }
    return entity;
}

/**
 * Create a motion binary_sensor entity.
 *
 * @param parameters - conversion parameters
 */
export function processMotion(parameters: ConverterParameters): ioBrokerEntity[] {
    const entity = createSensorEntity(parameters);
    entity.attributes.icon = 'mdi:motion-sensor';
    entity.attributes.device_class = 'motion';
    return [entity];
}

/**
 * Create a door binary_sensor entity.
 *
 * @param parameters - conversion parameters
 */
export function processDoor(parameters: ConverterParameters): ioBrokerEntity[] {
    const entity = createSensorEntity(parameters);
    entity.attributes.icon = 'mdi:door';
    entity.attributes.device_class = 'door';
    return [entity];
}

/**
 * Create a window binary_sensor entity.
 *
 * @param parameters - conversion parameters
 */
export function processWindow(parameters: ConverterParameters): ioBrokerEntity[] {
    const entity = createSensorEntity(parameters);
    entity.attributes.icon = 'mdi:window-maximize';
    entity.attributes.device_class = 'window';
    return [entity];
}

/**
 * Create a fire alarm (smoke) binary_sensor entity.
 *
 * @param parameters - conversion parameters
 */
export function processFireAlarm(parameters: ConverterParameters): ioBrokerEntity[] {
    const entity = createSensorEntity(parameters);
    entity.attributes.device_class = 'smoke';
    return [entity];
}

/**
 * Invert an entity's state so that an ioBroker "offline/unreach" indicator
 * becomes a Home Assistant "connectivity" sensor (online = on).
 *
 * @param entity - unreach entity to configure in-place
 */
function createOnlineIndicatorFromOfflineIndicator(entity: ioBrokerEntity): void {
    entity.attributes.device_class = 'connectivity';
    entity.context.STATE!.getParser = (_entity: ioBrokerEntity, _attr: string, state: ioBroker.State): void => {
        _entity.state = state?.val ? 'off' : 'on';
    };
    entity.context.STATE!.historyParser = (_iobId: string, state: ioBroker.State): string => {
        return state?.val ? 'off' : 'on';
    };
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
        createOnlineIndicatorFromOfflineIndicator(entity);
    }
    return [entity];
}

/**
 * Converter subclass for binary sensor device types:
 * motion, door, window, and fire alarm.
 *
 * Registered at the bottom of this file for Types.motion, .door, .window, .fireAlarm.
 * The convert() orchestration (indicator entities, duplicate handling) is inherited from
 * the Converter base class.
 */
export class BinarySensorConverter extends Converter {
    /**
     * Return entities for the detected binary sensor type.
     * Called by the inherited Converter.convert() template method.
     *
     * @param params - conversion parameters
     */
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

// Register this converter for the binary sensor types it handles.
// This runs when server.js first loads this module (after converter.ts is already
// loaded), so Converter.converters is available and Converter is fully initialised.
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
