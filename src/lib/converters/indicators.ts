import type { ioBrokerEntity, ConverterParameters } from './converter';
import { processCommon } from '../../../lib/entities/utils';

/**
 * Invert an entity's state so that an ioBroker "offline/unreach" indicator
 * becomes a Home Assistant "connectivity" sensor (online = on).
 *
 * @param entity unreach entity to modify in-place
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
 * Create a battery warning binary_sensor entity from a LOWBAT indicator state.
 * Searches controls.states for a state named 'LOWBAT'.
 * Returns null if none is found.
 *
 * @param parameters - conversion parameters
 */
export function processBattery(parameters: ConverterParameters): ioBrokerEntity | null {
    const state = parameters.controls.states.find(s => s.id && s.name === 'LOWBAT');
    if (state?.id) {
        const entity = processCommon(
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
        return entity;
    }
    return null;
}

/**
 * Create a connectivity binary_sensor entity from an UNREACH, OFFLINE, or CONNECTED state.
 * UNREACH/OFFLINE are inverted (offline ioBroker state → connectivity off in HA).
 * Returns null if no matching state is found.
 *
 * @param parameters - conversion parameters
 */
export function connectivityIndicator(parameters: ConverterParameters): ioBrokerEntity | null {
    const offlineState = parameters.controls.states.find(s => s.id && (s.name === 'UNREACH' || s.name === 'OFFLINE'));
    if (offlineState?.id) {
        const entity = processCommon(
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
        return entity;
    }

    const connectedState = parameters.controls.states.find(s => s.id && s.name === 'CONNECTED');
    if (connectedState?.id) {
        const entity = processCommon(
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
        return entity;
    }
    return null;
}

/**
 * Create an error binary_sensor entity from an ERROR indicator state.
 * Returns null if no ERROR state is found.
 *
 * @param parameters - conversion parameters
 */
export function processError(parameters: ConverterParameters): ioBrokerEntity | null {
    const state = parameters.controls.states.find(s => s.id && s.name === 'ERROR');
    if (state?.id) {
        const entity = processCommon(
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
 * Returns null if no MAINTAIN state is found.
 *
 * @param parameters - conversion parameters
 */
export function processMaintenance(parameters: ConverterParameters): ioBrokerEntity | null {
    const state = parameters.controls.states.find(s => s.id && s.name === 'MAINTAIN');
    if (state?.id) {
        const entity = processCommon(
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
 * Returns null if no WORKING state is found.
 *
 * @param parameters - conversion parameters
 */
export function processWorking(parameters: ConverterParameters): ioBrokerEntity | null {
    const state = parameters.controls.states.find(s => s.id && s.name === 'WORKING');
    if (state?.id) {
        const entity = processCommon(
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
