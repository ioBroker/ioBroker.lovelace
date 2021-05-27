
exports.processMotion = function (id, control, name, room, func, _obj, /*objects*/) {
    const entity = this._processCommon(name, room, func, _obj, 'binary_sensor');

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

exports.processDoor = function (id, control, name, room, func, _obj, /*objects*/) {
    const entity = this._processCommon(name, room, func, _obj, 'binary_sensor');

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

exports.processWindow = function (id, control, name, room, func, _obj, /*objects*/) {
    const entity = this._processCommon(name, room, func, _obj, 'binary_sensor');

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

exports.processBattery = function (control, name, room, func, objects) {
    const state = control.states.find(s => s.id && s.name === 'LOWBAT');
    if (state && state.id) {
        const entity = utils.processCommon(name, room, func, objects[state.id], 'binary_sensor');
        entity.context.STATE = {getId: state.id};
        entity.context.iobType = 'LOWBAT';
        entity.attributes.device_class = 'battery';
        utils.addID2entity(state.id, entity);
        return entity;
    } else {
        return null;
    }
};
