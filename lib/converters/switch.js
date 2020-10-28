const {Types} = require('iobroker.type-detector');

exports.processSocket = function (id, control, name, room, func, _obj) {
    const entity = this._processCommon(name, room, func, _obj, 'switch');

    let state = control.states.find(s => s.id && s.name === 'SET');
    entity.context.STATE = {setId: null, getId: null};
    if (state && state.id) {
        entity.context.STATE.setId = state.id;
        entity.context.STATE.getId = state.id;
        if (control.type === Types.socket) {
            entity.attributes.icon = 'mdi:power-socket-eu';
        }
        this._addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'ACTUAL');
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        this._addID2entity(state.id, entity);
    }

    return [entity];
};
