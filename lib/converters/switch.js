const utils = require('./../entities/utils');
const { Types } = require('iobroker.type-detector');
const adapterData = require('./../dataSingleton');

exports.processSocket = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'switch', forcedEntityId);

    let state = control.states.find(s => s.id && s.name === 'SET');
    entity.context.STATE = { setId: null, getId: null };
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
        if (
            !state.id.startsWith('zigbee.') ||
            !state.id.endsWith('.available') ||
            !state.id.endsWith('.device_query')
        ) {
            entity.context.STATE.getId = state.id;
            utils.addID2entity(state.id, entity);
        }
    }

    return [entity];
};

/**
 * Create manual switch entity.
 *
 * @param id - id of "main" object, i.e. state.
 * @param obj - iobroker object of id param
 * @param entity - already created entity
 * @param objects - id object cache
 * @param custom - custom part of object
 * @returns {Promise<[entity]>} - created entity in array.
 */
exports.processManualEntity = async function (id, obj, entity, objects, custom) {
    entity.attributes.assumed_state =
        custom.attr_assumed_state || custom.assumed_state || (obj.common && !obj.common.read);

    return [entity];
};

function augmentServices(services) {
    services.switch = {
        turn_off: {
            name: 'Turn off',
            description: 'Turns a switch off.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['switch'],
                    },
                ],
            },
        },
        turn_on: {
            name: 'Turn on',
            description: 'Turns a switch on.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['switch'],
                    },
                ],
            },
        },
        toggle: {
            name: 'Toggle',
            description: 'Toggles a switch on/off.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['switch'],
                    },
                ],
            },
        },
    };
}
augmentServices(adapterData.services);
