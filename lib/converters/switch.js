const utils       = require('./utils');
const {Types}     = require('iobroker.type-detector');


exports.processSocket = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'switch', forcedEntityId);

    let state = control.states.find(s => s.id && s.name === 'SET');
    entity.context.STATE = {setId: null, getId: null};
    if (state && state.id) {
        entity.context.STATE.setId = state.id;
        entity.context.STATE.getId = state.id;
        if (control.type === Types.socket) {
            entity.attributes.icon = 'mdi:power-socket-eu';
            entity.attributes.device_class = 'outlet';
        } else {
            entity.attributes.device_class = 'switch';
        }
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'ACTUAL');
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }

    return [entity];
};

/**
 * Create manual switch entity.
 * @param id - id of "main" object, i.e. state.
 * @param obj - iobroker object of id param
 * @param entity - already created entity
 * @param objects - id object cache
 * @param custom - custom part of object
 * @returns {Promise<[entity]>}
 */
exports.processManualEntity = async function(id, obj, entity, objects, custom) {
    const states = custom.states || {
        state: id
    };

    entity.attributes.assumed_state = custom.attr_assumed_state || custom.assumed_state || (obj.common && !obj.common.read);
    entity.context.STATE = {setId: states.id, getId: states.id};
    utils.addID2entity(states.id, entity);
    if (states.stateRead) {
        entity.context.STATE.getId = states.stateRead;
        utils.addID2entity(states.stateRead, entity);
    }

    return [entity];
};
