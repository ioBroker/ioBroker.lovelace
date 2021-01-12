const processSensors = require('./sensor');

exports.processLock = function (id, control, name, room, func, _obj, objects) {
    const entity = this._processCommon(name, room, func, _obj, 'lock');

    let state = control.states.find(s => s.id && s.name === 'SET');
    entity.context.STATE = {setId: null, getId: null};
    if (state && state.id) {
        entity.context.STATE.setId = state.id;
        entity.context.STATE.getId = state.id; //fallback if no getId.
        this._addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'ACTUAL');
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        this._addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'OPEN');
    if (state && state.id) {
        entity.attributes.supported_features = 1;
        entity.context.COMMANDS = [{
            service: 'open',
            setId: state.id,
            parseCommand: (entity, command, data, user) => {
                return new Promise((resolve, reject) => {
                    this.adapter.setForeignState(command.setId, true, false,
                        {user}, err => err ? reject(err) : resolve());
                });
            }
        }];
    }
    return [entity, processSensors.processBattery.call(this, control, name, room, func, objects)];
};
