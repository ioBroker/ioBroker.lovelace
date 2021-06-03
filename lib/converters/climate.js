const processSensors = require('./sensor');
const utils          = require('./utils');
const adapterData    = require('./../dataSingleton');

exports.processThermostat = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    // - climate => STATE on/off, attributes: [current_temperature, operation_mode, operation_list, target_temp_step, target_temp_low, target_temp_high, min_temp, max_temp, temperature], commands:
    const entity = utils.processCommon(name, room, func, _obj, 'climate', forcedEntityId);

    let state = control.states.find(s => s.id && s.name === 'POWER');
    entity.context.STATE = {setId: null, getId: null};
    entity.attributes.icon = 'mdi:thermostat';

    if (state && state.id) {
        entity.context.STATE.setId = state.id;
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }

    // actual temperature
    state = control.states.find(s => s.id && s.name === 'ACTUAL');
    if (state && state.id) {
        entity.context.ATTRIBUTES = entity.context.ATTRIBUTES || [];
        entity.context.ATTRIBUTES.push({attribute: 'current_temperature', getId: state.id});
        utils.addID2entity(state.id, entity);
        if (objects[state.id].common && objects[state.id].common.unit) {
            entity.attributes.unit_of_measurement = objects[state.id].common.unit;
        }
    }

    state = control.states.find(s => s.id && s.name === 'SET');
    if (state && state.id) {
        entity.context.ATTRIBUTES = entity.context.ATTRIBUTES || [];
        entity.context.ATTRIBUTES.push({attribute: 'temperature', getId: state.id});
        entity.context.COMMANDS = [{
            service: 'set_temperature',
            setId: state.id,
            parseCommand: (entity, command, data, user) =>
                new Promise((resolve, reject) =>
                    adapterData.adapter.setForeignState(command.setId, data.service_data.temperature, false, {user}, err =>
                        err ? reject(err) : resolve()))
        }];

        if (objects[state.id].common) {
            if (!entity.attributes.unit_of_measurement && objects[state.id].common.unit) {
                entity.attributes.unit_of_measurement = objects[state.id].common.unit;
            }
            if (objects[state.id].common.min) {
                entity.attributes.min_temp = objects[state.id].common.min;
            }
            if (objects[state.id].common.max) {
                entity.attributes.max_temp = objects[state.id].common.max;
            }
            if (objects[state.id].common.step) {
                entity.attributes.target_temp_step = objects[state.id].common.step;
            }
        }
        utils.addID2entity(state.id, entity);
    }

    // detect second entity => humidity
    let entryHum;
    state = control.states.find(s => s.id && s.name === 'HUMIDITY');
    if (state && state.id) {
        let humId;
        if (entity) {
            humId = 'sensor.' + entity.entity_id.split('.')[1] + '_Humidity';
        }
        entryHum = processSensors.createHumiditySensor(state, name, func, room, _obj,objects, humId);
        utils.addID2entity(state.id, entryHum);
    }
    return [entity, entryHum];
};

