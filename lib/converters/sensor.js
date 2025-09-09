const utils = require('./../entities/utils');
const adapterData = require('./../dataSingleton');

exports.processWindowTilt = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'sensor', forcedEntityId);

    const state = control.states.find(s => s.id && s.name === 'ACTUAL');
    entity.context.STATE = { getId: null };
    entity.attributes.icon = 'mdi:window-maximize';
    entity.attributes.device_class = 'window';
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        entity.context.STATE.states =
            objects[state.id] && objects[state.id].common ? objects[state.id].common.states || null : null;
        entity.context.STATE.getParser = function (entity, attr, state) {
            state = state || { val: null };
            entity.state = entity.context.STATE.historyParser(id, state.val);
        };
        entity.context.STATE.historyParser = function (id, val) {
            let str;
            if (entity.context.STATE.states) {
                str = entity.context.STATE.states[val] ? entity.context.STATE.states[val].toLowerCase() : 'error';
            } else {
                //use 0 = closed, 1 = tilted, 2 = open as default from ioBroker-roles documentation, if no common.states
                str = val === 0 ? 'closed' : val === 1 ? 'tilted' : 'open';
            }
            //try to translate -> will work for open, closed, tilted.
            return adapterData.words[str] ? adapterData.words[str][adapterData.lang] || adapterData.words[str].en : str;
        }.bind(this);
        utils.addID2entity(state.id, entity);
    }

    return [entity];
};

//used for humidity-sensors that are detected as part of temperature or thermostat.
exports.createHumiditySensor = function (id, name, room, func, _obj, objects, forcedEntityId) {
    const entityHum = utils.processCommon(name, room, func, _obj || objects[id], 'sensor', forcedEntityId);
    entityHum.context.STATE = { getId: id };
    entityHum.attributes.device_class = 'humidity';
    entityHum.attributes.unit_of_measurement = entityHum.attributes.unit_of_measurement || '%';
    utils.addID2entity(id, entityHum);
    return entityHum;
};

exports.processHumidity = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const state = control.states.find(s => s.id && s.name === 'ACTUAL');
    if (state && state.id) {
        const entity = exports.createHumiditySensor(state.id, name, room, func, _obj, objects, forcedEntityId);
        return [entity];
    }
    return [];
};

exports.createTemperatureSensor = function (id, name, room, func, _obj, objects, forcedEntityId) {
    const entityTemp = utils.processCommon(name, room, func, _obj || objects[id], 'sensor', forcedEntityId);
    entityTemp.context.STATE = { getId: id };
    entityTemp.attributes.device_class = 'temperature';
    entityTemp.attributes.unit_of_measurement = entityTemp.attributes.unit_of_measurement || '°C';
    utils.addID2entity(id, entityTemp);
    return entityTemp;
};

exports.processTemperature = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    let entity;
    let state = control.states.find(s => s.id && s.name === 'ACTUAL'); // temperature
    if (state && state.id) {
        entity = exports.createTemperatureSensor(state.id, name, room, func, _obj, objects, forcedEntityId);
    }

    state = control.states.find(s => s.id && s.name === 'SECOND'); // humidity
    let entityHum;
    if (state && state.id) {
        let humId;
        if (entity) {
            humId = `${entity.entity_id}_Humidity`;
        }
        entityHum = exports.createHumiditySensor(state.id, name, room, func, _obj, objects, humId);
    }

    return [entity, entityHum];
};

/**
 * Create manual sensor entity.
 *
 * @param id - id of "main" object, i.e. state.
 * @param obj - iobroker object of id param
 * @param entity - already created entity
 * @param objects - id object cache
 * @param custom - custom part of object
 * @returns {Promise<[entity]>} - created entity in array.
 */
exports.processManualEntity = async function (id, obj, entity, objects, custom) {
    entity.attributes.device_class = custom.attr_device_class;
    entity.attributes.unit_of_measurement = custom.attr_unit_of_measurement || entity.attributes.unit_of_measurement;

    return [entity];
};
