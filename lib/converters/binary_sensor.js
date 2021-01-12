const sensor = require('./sensor.js');


exports.processMotion = function (id, control, name, room, func, _obj, objects) {
    const entity = this._processCommon(name, room, func, _obj, 'binary_sensor');

    const state = control.states.find(s => s.id && s.name === 'ACTUAL');
    entity.context.STATE = {getId: null};
    entity.attributes.icon = 'mdi:motion-sensor';
    entity.attributes.device_class = 'motion';
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        this._addID2entity(state.id, entity);
    }

    return [entity, sensor.processBattery.call(this, control, name, room, func, objects)];
};

exports.processDoor = function (id, control, name, room, func, _obj, objects) {
    const entity = this._processCommon(name, room, func, _obj, 'binary_sensor');

    const state = control.states.find(s => s.id && s.name === 'ACTUAL');
    entity.context.STATE = {getId: null};
    entity.attributes.icon = 'mdi:door';
    entity.attributes.device_class = 'door';
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        this._addID2entity(state.id, entity);
    }

    return [entity, sensor.processBattery.call(this, control, name, room, func, objects)];
};

exports.processWindow = function (id, control, name, room, func, _obj, objects) {
    const entity = this._processCommon(name, room, func, _obj, 'binary_sensor');

    const state = control.states.find(s => s.id && s.name === 'ACTUAL');
    entity.context.STATE = {getId: null};
    entity.attributes.icon = 'mdi:window-maximize';
    entity.attributes.device_class = 'window';
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        this._addID2entity(state.id, entity);
    }

    return [entity, sensor.processBattery.call(this, control, name, room, func, objects)];
};
