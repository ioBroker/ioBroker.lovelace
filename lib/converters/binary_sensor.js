const utils       = require('./utils');

function createSensorEntity(control, name, room, func, _obj, forcedEntityId, stateName = 'ACTUAL') {
    const entity = utils.processCommon(name, room, func, _obj, 'binary_sensor', forcedEntityId);

    entity.context.STATE = {getId: null};
    const state = control.states.find(s => s.id && s.name === stateName);
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }
    return entity;
}

exports.processMotion = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'binary_sensor', forcedEntityId);

    const state = control.states.find(s => s.id && s.name === 'ACTUAL');
    entity.context.STATE = {getId: null};
    entity.attributes.icon = 'mdi:motion-sensor';
    entity.attributes.device_class = 'motion';
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }

    return [entity];
};

exports.processDoor = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'binary_sensor', forcedEntityId);

    const state = control.states.find(s => s.id && s.name === 'ACTUAL');
    entity.context.STATE = {getId: null};
    entity.attributes.icon = 'mdi:door';
    entity.attributes.device_class = 'door';
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }

    return [entity];
};

exports.processWindow = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'binary_sensor', forcedEntityId);

    const state = control.states.find(s => s.id && s.name === 'ACTUAL');
    entity.context.STATE = {getId: null};
    entity.attributes.icon = 'mdi:window-maximize';
    entity.attributes.device_class = 'window';
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }

    return [entity];
};

exports.processBattery = function (control, name, room, func, objects, forcedEntityId) {
    const state = control.states.find(s => s.id && s.name === 'LOWBAT');
    if (state && state.id) {
        const entity = utils.processCommon(name, room, func, objects[state.id], 'binary_sensor', forcedEntityId);
        entity.context.STATE = {getId: state.id};
        entity.context.iobType = 'LOWBAT';
        entity.attributes.device_class = 'battery';
        utils.addID2entity(state.id, entity);
        return entity;
    } else {
        return null;
    }
};

exports.processFireAlarm = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = createSensorEntity(control, name, room, func, _obj, forcedEntityId);
    entity.attributes.device_class = 'smoke';
    return [entity];
};

/**
 * Create manual binary_sensor entity.
 * @param id - id of "main" object, i.e. state.
 * @param obj - iobroker object of id param
 * @param entity - already created entity
 * @param objects - id object cache
 * @param custom - custom part of object
 * @returns {Promise<[entity]>}
 */
exports.processManualEntity = async function(id, obj, entity, objects, custom) {
    entity.attributes.device_class = custom.attr_device_class;
    return [entity];
};
