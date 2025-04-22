const utils = require('./../entities/utils');

/**
 * Create binary_sensor entity.
 *
 * @param control {object} - type-detector controls result
 * @param name {string} - name of the entity
 * @param room {undefined|object} - room of the object
 * @param func {undefined|object} - function of the object
 * @param _obj {ioBroker.Object} - ioBroker object of id param
 * @param forcedEntityId {string|undefined} - force entity_id
 * @param stateName {string} - control to search for in type-detector results.
 * @returns {object} - created entity.
 */
function createSensorEntity(control, name, room, func, _obj, forcedEntityId, stateName = 'ACTUAL') {
    const entity = utils.processCommon(name, room, func, _obj, 'binary_sensor', forcedEntityId);

    entity.context.STATE = { getId: null };
    const state = control.states.find(s => s.id && s.name === stateName);
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }
    return entity;
}

/**
 * Create motion binary_sensor entity.
 *
 * @param id {string} - id of "main" object, i.e. state.
 * @param control {object} - type-detector controls result
 * @param name {string} - name of the entity
 * @param room {undefined|object} - room of the object
 * @param func {undefined|object} - function of the object
 * @param _obj {ioBroker.Object} - ioBroker object of id param
 * @param objects {Record<string,ioBroker.Object>} - id object cache
 * @param [forcedEntityId] {string} - force entity_id
 * @returns {[{context: {id: string, type: string}, attributes: {friendly_name: string}, entity_id: string}]} - created entity in array.
 */
exports.processMotion = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'binary_sensor', forcedEntityId);

    const state = control.states.find(s => s.id && s.name === 'ACTUAL');
    entity.context.STATE = { getId: null };
    //entity.attributes.icon = 'mdi:motion-sensor';
    entity.attributes.device_class = 'motion';
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }

    return [entity];
};

/**
 * Create door binary_sensor entity.
 *
 * @param id {string} - id of "main" object, i.e. state.
 * @param control {object} - type-detector controls result
 * @param name {string} - name of the entity
 * @param room {undefined|object} - room of the object
 * @param func {undefined|object} - function of the object
 * @param _obj {ioBroker.Object} - ioBroker object of id param
 * @param objects {Record<string,ioBroker.Object>} - id object cache
 * @param [forcedEntityId] {string} - force entity_id
 * @returns {[{context: {id: string, type: string}, attributes: {friendly_name: string}, entity_id: string}]} - created entity in array.
 */
exports.processDoor = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'binary_sensor', forcedEntityId);

    const state = control.states.find(s => s.id && s.name === 'ACTUAL');
    entity.context.STATE = { getId: null };
    //entity.attributes.icon = 'mdi:door';
    entity.attributes.device_class = 'door';
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }

    return [entity];
};

/**
 * Create window binary_sensor entity.
 *
 * @param id {string} - id of "main" object, i.e. state.
 * @param control {object} - type-detector controls result
 * @param name {string} - name of the entity
 * @param room {undefined|object} - room of the object
 * @param func {undefined|object} - function of the object
 * @param _obj {ioBroker.Object} - ioBroker object of id param
 * @param objects {Record<string,ioBroker.Object>} - id object cache
 * @param [forcedEntityId] {string} - force entity_id
 * @returns {[{context: {id: string, type: string}, attributes: {friendly_name: string}, entity_id: string}]} - created entity in array.
 */
exports.processWindow = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'binary_sensor', forcedEntityId);

    const state = control.states.find(s => s.id && s.name === 'ACTUAL');
    entity.context.STATE = { getId: null };
    //entity.attributes.icon = 'mdi:window-maximize';
    entity.attributes.device_class = 'window';
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }

    return [entity];
};

/**
 * Create battery alarm binary_sensor entity.
 *
 * @param control {object} - type-detector controls result
 * @param name {string} - name of the entity
 * @param room {undefined|object} - room of the object
 * @param func {undefined|object} - function of the object
 * @param objects {Record<string,ioBroker.Object>} - id object cache
 * @param [forcedEntityId] {string} - force entity_id
 * @returns {object|null} - created entity or null.
 */
exports.processBattery = function (control, name, room, func, objects, forcedEntityId) {
    const state = control.states.find(s => s.id && s.name === 'LOWBAT');
    if (state && state.id) {
        const entity = utils.processCommon(name, room, func, objects[state.id], 'binary_sensor', forcedEntityId);
        entity.context.STATE = { getId: state.id };
        entity.context.iobType = 'LOWBAT';
        entity.attributes.device_class = 'battery';
        utils.addID2entity(state.id, entity);
        return entity;
    } else {
        return null;
    }
};

/**
 * Create online indicator from offline indicator.
 *
 * @param entity {object} - entity to modify
 */
function createOnlineIndicatorFromOfflineIndicator(entity) {
    entity.attributes.device_class = 'connectivity';
    //need to invert state from offline to online in HASS:
    entity.context.STATE.getParser = (entity, attr, state) => {
        state = state || { val: null };
        entity.state = state.val ? 'off' : 'on';
    };
    entity.context.STATE.historyParser = (id, val) => {
        return val ? 'off' : 'on';
    };
}

/**
 * Create connectivity binary_sensor entity.
 *
 * @param control {object} - type-detector controls result
 * @param name {string} - name of the entity
 * @param room {undefined|object} - room of the object
 * @param func {undefined|object} - function of the object
 * @param objects {Record<string,ioBroker.Object>} - id object cache
 * @param [forcedEntityId] {string} - force entity_id
 * @returns {object|null} - created entity or null.
 */
exports.connectivityIndicator = function (control, name, room, func, objects, forcedEntityId) {
    let state = control.states.find(s => s.id && (s.name === 'UNREACH' || s.name === 'OFFLINE'));
    if (state && state.id) {
        const entity = utils.processCommon(name, room, func, objects[state.id], 'binary_sensor', forcedEntityId);
        entity.context.STATE = { getId: state.id };
        entity.context.iobType = 'OFFLINE';
        createOnlineIndicatorFromOfflineIndicator(entity);
        utils.addID2entity(state.id, entity);
        return entity;
    }

    state = control.states.find(s => s.id && s.name === 'CONNECTED');
    if (state && state.id) {
        const entity = utils.processCommon(name, room, func, objects[state.id], 'binary_sensor', forcedEntityId);
        entity.context.STATE = { getId: state.id };
        entity.context.iobType = 'CONNECTED';
        entity.attributes.device_class = 'connectivity';
        utils.addID2entity(state.id, entity);
        return entity;
    }
    return null;
};

/**
 * Create error binary_sensor entity.
 *
 * @param control {object} - type-detector controls result
 * @param name {string} - name of the entity
 * @param room {undefined|object} - room of the object
 * @param func {undefined|object} - function of the object
 * @param objects {Record<string,ioBroker.Object>} - id object cache
 * @param [forcedEntityId] {string} - force entity_id
 * @returns {object|null} - created entity or null.
 */
exports.processError = function (control, name, room, func, objects, forcedEntityId) {
    const state = control.states.find(s => s.id && s.name === 'ERROR');
    if (state && state.id) {
        const entity = utils.processCommon(name, room, func, objects[state.id], 'binary_sensor', forcedEntityId);
        entity.context.STATE = { getId: state.id };
        entity.context.iobType = 'ERROR';
        entity.attributes.device_class = 'problem';
        return entity;
    }
    return null;
};

/**
 * Create maintenance binary_sensor entity.
 *
 * @param control {object} - type-detector controls result
 * @param name {string} - name of the entity
 * @param room {undefined|object} - room of the object
 * @param func {undefined|object} - function of the object
 * @param objects {Record<string,ioBroker.Object>} - id object cache
 * @param [forcedEntityId] {string} - force entity_id
 * @returns {object|null} - created entity or null.
 */
exports.processMaintenance = function (control, name, room, func, objects, forcedEntityId) {
    const state = control.states.find(s => s.id && s.name === 'MAINTAIN');
    if (state && state.id) {
        const entity = utils.processCommon(name, room, func, objects[state.id], 'binary_sensor', forcedEntityId);
        entity.context.STATE = { getId: state.id };
        entity.context.iobType = 'MAINTAIN';
        entity.attributes.device_class = 'update';
        return entity;
    }
    return null;
};

/**
 * Create 'working' binary_sensor entity.
 *
 * @param control {object} - type-detector controls result
 * @param name {string} - name of the entity
 * @param room {undefined|object} - room of the object
 * @param func {undefined|object} - function of the object
 * @param objects {Record<string,ioBroker.Object>} - id object cache
 * @param [forcedEntityId] {string} - force entity_id
 * @returns {object|null} - created entity or null.
 */
exports.processWorking = function (control, name, room, func, objects, forcedEntityId) {
    const state = control.states.find(s => s.id && s.name === 'WORKING');
    if (state && state.id) {
        const entity = utils.processCommon(name, room, func, objects[state.id], 'binary_sensor', forcedEntityId);
        entity.context.STATE = { getId: state.id };
        entity.context.iobType = 'WORKING';
        entity.attributes.device_class = 'running';
        return entity;
    }
    return null;
};

/**
 * Create fire alarm binary_sensor entity.
 *
 * @param id {string} - id of "main" object, i.e. state.
 * @param control {object} - type-detector controls result
 * @param name {string} - name of the entity
 * @param room {undefined|object} - room of the object
 * @param func {undefined|object} - function of the object
 * @param _obj {ioBroker.Object} - ioBroker object of id param
 * @param objects {Record<string,ioBroker.Object>} - id object cache
 * @param [forcedEntityId] {string} - force entity_id
 * @returns {[{context: {id: string, type: string}, attributes: {friendly_name: string}, entity_id: string}]} - created entity in array.
 */
exports.processFireAlarm = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = createSensorEntity(control, name, room, func, _obj, forcedEntityId);
    entity.attributes.device_class = 'smoke';
    return [entity];
};

/**
 * Create manual binary_sensor entity.
 *
 * @param id {string} - id of "main" object, i.e. state.
 * @param obj {ioBroker.Object} - ioBroker object of id param
 * @param entity {object} - already created entity
 * @param objects {Record<string, ioBroker.Object>} - id object cache
 * @param custom {object} - custom part of object
 * @returns {Promise<[entity]>} - created entity in array.
 */
exports.processManualEntity = async function (id, obj, entity, objects, custom) {
    entity.attributes.device_class = custom.attr_device_class;
    if (custom.attr_device_class === 'connectivity' && obj.common.role === 'indicator.unreach') {
        createOnlineIndicatorFromOfflineIndicator(entity);
    }
    return [entity];
};
