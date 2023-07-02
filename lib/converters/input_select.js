const utils       = require('./../entities/utils');
const adapterData = require('./../dataSingleton');

async function fillEntityFromStates(states, objects, entity) {
    //have 4 possibilities:
    // 1. type number + states object
    // 2. type number + states string (not 100% right)
    // 3. type string + states object (not 100% right)
    // 4. type string + states array  (new version)

    //make sure invalid objects won't crash us.
    const obj = objects[states.state] || {common: {type: 'string', states: []}};
    if (!obj.common) {
        obj.common = {type: 'string', states: []};
    }
    if (!obj.common.type) {
        obj.common.type = 'string';
    }

    entity.context.STATE.isNumber = obj.common.type.toLowerCase() === 'number';

    if (obj.common.states) {
        if (obj.common.states instanceof Array) {
            entity.context.STATE.isStringArray = true;
            entity.attributes.options = obj.common.states;
        } else {
            if (typeof obj.common.states === 'string') {
                adapterData.log.warn(obj._id + ': states is of type string. Problems might occur. Please fix states to be of type object.');
                entity.context.STATE.map2lovelace = {};
                for (const kv of obj.common.states.split(';')) {
                    const [key, value] = kv.split(':');
                    entity.context.STATE.map2lovelace[key] = value;
                }
            } else {
                entity.context.STATE.map2lovelace = obj.common.states;
            }
            entity.context.STATE.isNumber = obj.common.type && obj.common.type.toLowerCase() === 'number';
            entity.attributes.options = Object.values(entity.context.STATE.map2lovelace);
        }
    } else {
        adapterData.log.warn(`${entity.entity_id} has no common.states. Options will be empty and issues will occur.`);
    }

    const state = await adapterData.adapter.getForeignStateAsync(states.state);
    if (state) {
        entity.attributes.initial = state.val;
        if (entity.context.STATE.map2lovelace && entity.context.STATE.map2lovelace[state.val] !== undefined) {
            entity.attributes.initial = entity.context.STATE.map2lovelace[state.val];
        }
    }

    entity.context.STATE.getParser = (entity, attr, state) => {
        state = state || {val: null};
        entity.attributes.initial = state.val || 'unknown';
        if (entity.context.STATE.map2lovelace) {
            entity.attributes.initial = (entity.context.STATE.map2lovelace[state.val]) || (state.val) || 'unknown';
        }
        entity.state = entity.attributes.initial;
    };

    if (!entity.context.COMMANDS) {
        entity.context.COMMANDS = [];
    }
    entity.context.COMMANDS.push({
        service: 'select_option',
        setId: entity.context.STATE.setId,
        parseCommand: async (entity, command, data, user) => {
            let target = data.service_data.option;
            if (!entity.context.STATE.isStringArray) {
                if (entity.context.STATE.map2lovelace) {
                    target = Object.keys(entity.context.STATE.map2lovelace).find(key => entity.context.STATE.map2lovelace[key] === target);
                }
                if (!target && target !== 0) {
                    target = data.service_data.option;
                }
                if (entity.context.STATE.isNumber) {
                    target = Number(target);
                }
            }
            if (!target && target !== 0) {
                target = data.service_data.option; //fallback
            }

            return adapterData.adapter.setForeignStateAsync(command.setId, target, false, {user});
        }
    });
    utils.addID2entity(states.state, entity);

    return [entity];
}

/**
 * Create manual input_select entity.
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

    return fillEntityFromStates(states, objects, entity);
};
