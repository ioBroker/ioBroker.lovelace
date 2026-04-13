import type { ioBrokerEntity, ConverterParameters } from './Converter';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const utils = require('../../../lib/entities/utils');

/**
 * Create a bare binary_sensor entity from ConverterParameters.
 * Uses controls to look up the given state name (default: 'ACTUAL').
 *
 * @param parameters - converter parameters; controls is the detected type control.
 * @param stateName - name of the state to look up in the control.
 * @returns created entity.
 */
function createSensorEntity(parameters: ConverterParameters, stateName = 'ACTUAL'): ioBrokerEntity {
    const { friendlyName, room, func, objects, id, forcedEntityId, controls } = parameters;
    const entity = utils.processCommon(
        friendlyName,
        room,
        func,
        objects[id],
        'binary_sensor',
        forcedEntityId,
    ) as ioBrokerEntity;

    entity.context.STATE = { getId: '' };
    const state = controls.states.find((s: { id: string; name: string }) => s.id && s.name === stateName);
    if (state?.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }
    return entity;
}

/**
 * Invert an entity's state so that an ioBroker "offline/unreach" indicator
 * becomes a Home Assistant "connectivity" sensor (online = on).
 *
 * @param entity unreach entity to modify
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
 * Create a motion binary_sensor entity.
 * Called by Converter with controls: [motionControl].
 *
 * @param parameters parameters, including type-detector result.
 */
export function processMotion(parameters: ConverterParameters): ioBrokerEntity[] {
    const entity = createSensorEntity(parameters);
    entity.attributes.icon = 'mdi:motion-sensor';
    entity.attributes.device_class = 'motion';
    return [entity];
}

/**
 * Create a door binary_sensor entity.
 * Called by Converter with controls: [doorControl].
 *
 * @param parameters parameters, including type-detector result.
 */
export function processDoor(parameters: ConverterParameters): ioBrokerEntity[] {
    const entity = createSensorEntity(parameters);
    entity.attributes.icon = 'mdi:door';
    entity.attributes.device_class = 'door';
    return [entity];
}

/**
 * Create a window binary_sensor entity.
 * Called by Converter with controls: [windowControl].
 *
 * @param parameters parameters, including type-detector result.
 */
export function processWindow(parameters: ConverterParameters): ioBrokerEntity[] {
    const entity = createSensorEntity(parameters);
    entity.attributes.icon = 'mdi:window-maximize';
    entity.attributes.device_class = 'window';
    return [entity];
}

/**
 * Create a fire alarm (smoke) binary_sensor entity.
 * Called by Converter with controls: [fireAlarmControl].
 *
 * @param parameters parameters, including type-detector result.
 */
export function processFireAlarm(parameters: ConverterParameters): ioBrokerEntity[] {
    const entity = createSensorEntity(parameters);
    entity.attributes.device_class = 'smoke';
    return [entity];
}

/**
 * Create a battery warning binary_sensor entity from a LOWBAT indicator state.
 * Searches all controls for a state named 'LOWBAT'.
 * Returns null if no LOWBAT state is found.
 *
 * @param parameters parameters, including type-detector result.
 */
export function processBattery(parameters: ConverterParameters): ioBrokerEntity | null {
    const state = parameters.controls.states.find(s => s.id && s.name === 'LOWBAT');
    const state = parameters.controls.states.find(s => s.id && s.name === 'LOWBAT');
    if (state?.id) {
        const entity = utils.processCommon(
            parameters.friendlyName,
            parameters.room,
            parameters.func,
            parameters.objects[state.id],
            'binary_sensor',
            parameters.forcedEntityId,
        ) as ioBrokerEntity;
        entity.context.STATE = { getId: state.id };
        entity.context.iobType = 'LOWBAT';
        entity.attributes.device_class = 'battery';
        utils.addID2entity(state.id, entity);
        return entity;
    }
    return null;
}

/**
 * Create a connectivity binary_sensor entity from an UNREACH, OFFLINE, or CONNECTED indicator state.
 * Searches all controls. UNREACH/OFFLINE are inverted (offline → connectivity off).
 * Returns null if no matching state is found.
 *
 * @param parameters parameters, including type-detector result.
 */
export function connectivityIndicator(parameters: ConverterParameters): ioBrokerEntity | null {
    const offlineState = parameters.controls.states.find(s => s.id && (s.name === 'UNREACH' || s.name === 'OFFLINE'));
    if (offlineState?.id) {
        const entity = utils.processCommon(
            parameters.friendlyName,
            parameters.room,
            parameters.func,
            parameters.objects[offlineState.id],
            'binary_sensor',
            parameters.forcedEntityId,
        ) as ioBrokerEntity;
        entity.context.STATE = { getId: offlineState.id };
        entity.context.iobType = 'OFFLINE';
        createOnlineIndicatorFromOfflineIndicator(entity);
        utils.addID2entity(offlineState.id, entity);
        return entity;
    }

    const connectedState = parameters.controls.states.find(s => s.id && s.name === 'CONNECTED');
    if (connectedState?.id) {
        const entity = utils.processCommon(
            parameters.friendlyName,
            parameters.room,
            parameters.func,
            parameters.objects[connectedState.id],
            'binary_sensor',
            parameters.forcedEntityId,
        ) as ioBrokerEntity;
        entity.context.STATE = { getId: connectedState.id };
        entity.context.iobType = 'CONNECTED';
        entity.attributes.device_class = 'connectivity';
        utils.addID2entity(connectedState.id, entity);
        return entity;
    }
    return null;
}

/**
 * Create an error binary_sensor entity from an ERROR indicator state.
 * Searches all controls. Returns null if no ERROR state is found.
 *
 * @param parameters parameters, including type-detector result.
 */
export function processError(parameters: ConverterParameters): ioBrokerEntity | null {
    const state = parameters.controls.states.find(s => s.id && s.name === 'ERROR');
    if (state?.id) {
        const entity = utils.processCommon(
            parameters.friendlyName,
            parameters.room,
            parameters.func,
            parameters.objects[state.id],
            'binary_sensor',
            parameters.forcedEntityId,
        ) as ioBrokerEntity;
        entity.context.STATE = { getId: state.id };
        entity.context.iobType = 'ERROR';
        entity.attributes.device_class = 'problem';
        return entity;
    }
    return null;
}

/**
 * Create a maintenance binary_sensor entity from a MAINTAIN indicator state.
 * Searches all controls. Returns null if no MAINTAIN state is found.
 *
 * @param parameters parameters, including type-detector result.
 */
export function processMaintenance(parameters: ConverterParameters): ioBrokerEntity | null {
    const state = parameters.controls.states.find(s => s.id && s.name === 'MAINTAIN');
    if (state?.id) {
        const entity = utils.processCommon(
            parameters.friendlyName,
            parameters.room,
            parameters.func,
            parameters.objects[state.id],
            'binary_sensor',
            parameters.forcedEntityId,
        ) as ioBrokerEntity;
        entity.context.STATE = { getId: state.id };
        entity.context.iobType = 'MAINTAIN';
        entity.attributes.device_class = 'update';
        return entity;
    }
    return null;
}

/**
 * Create a working binary_sensor entity from a WORKING indicator state.
 * Searches all controls. Returns null if no WORKING state is found.
 *
 * @param parameters parameters, including type-detector result.
 */
export function processWorking(parameters: ConverterParameters): ioBrokerEntity | null {
    const state = parameters.controls.states.find(s => s.id && s.name === 'WORKING');
    if (state?.id) {
        const entity = utils.processCommon(
            parameters.friendlyName,
            parameters.room,
            parameters.func,
            parameters.objects[state.id],
            'binary_sensor',
            parameters.forcedEntityId,
        ) as ioBrokerEntity;
        entity.context.STATE = { getId: state.id };
        entity.context.iobType = 'WORKING';
        entity.attributes.device_class = 'running';
        return entity;
    }
    return null;
}

/**
 * Apply manual entity configuration to a pre-created binary_sensor entity.
 *
 * @param _id - ioBroker object id (unused, kept for consistent manual-entity signature)
 * @param obj - ioBroker object
 * @param entity - already created entity to configure
 * @param _objects - ioBroker objects cache (unused here)
 * @param custom - custom lovelace settings from the ioBroker object
 * @returns the configured entity wrapped in an array.
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

export default {
    processMotion,
    processDoor,
    processWindow,
    processFireAlarm,
    processBattery,
    connectivityIndicator,
    processError,
    processMaintenance,
    processWorking,
    processManualEntity,
};
