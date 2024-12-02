const utils = require('./../entities/utils');
const adapterData = require('./../dataSingleton');

async function fillEntityFromStates(states, objects, entity) {
    //'old' fan:
    // "modes": {
    //       "0": "off",
    //       "1": "low",
    //       "2": "medium",
    //       "3": "high"
    //     }
    // -> use either states or this as default.
    // 'new' fan:
    // preset_mode instead of speed. Can support more modes...
    // preset_mode -> will call set_preset_mode.
    // support both, we don't care.

    utils.fillEntityFromStates(states, entity); //already prefills attributes.

    //preset_mode is important:
    if (states.preset_mode) {
        const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'preset_mode');

        const obj = objects[states.preset_mode] || { common: { type: 'number' } };
        if (!obj.common) {
            obj.common = { type: 'number', states: { 0: 'off', 1: 'low', 2: 'medium', 3: 'high' } };
        }
        if (!obj.common.type) {
            obj.common.type = 'number';
        }
        if (!obj.common.states) {
            obj.common.states = { 0: 'off', 1: 'low', 2: 'medium', 3: 'high' };
        }

        if (obj.common.states) {
            if (obj.common.states instanceof Array) {
                attr.isStringArray = true;
                entity.attributes.preset_modes = obj.common.states;
            } else {
                if (typeof obj.common.states === 'string') {
                    adapterData.log.warn(
                        `${
                            obj._id
                        }: states is of type string. Problems might occur. Please fix states to be of type object.`,
                    );
                    attr.map2lovelace = {};
                    for (const kv of obj.common.states.split(';')) {
                        const [key, value] = kv.split(':');
                        attr.map2lovelace[key] = value;
                    }
                } else {
                    attr.map2lovelace = obj.common.states;
                }
                attr.isNumber = obj.common.type && obj.common.type.toLowerCase() === 'number';
                attr.map2iob = {};
                entity.attributes.preset_modes = [];
                Object.keys(attr.map2lovelace).forEach(k => {
                    attr.map2iob[attr.map2lovelace[k]] = k;
                    entity.attributes.preset_modes.push(attr.map2lovelace[k]);
                });
            }
        }

        attr.getParser = (entity, attr, state) => {
            state = state || { val: null };
            entity.attributes.speed = state.val || 'unknown';
            if (attr.map2lovelace) {
                entity.attributes.speed = attr.map2lovelace[state.val] || state.val || 'unknown';
            }
            entity.attributes.preset_mode = entity.attributes.speed;
            entity.state = entity.attributes.speed !== 'off' ? 'on' : 'off';
        };

        if (!entity.context.COMMANDS) {
            entity.context.COMMANDS = [];
        }
        const parseCommand = async (entity, command, data, user) => {
            let target = data.service_data.speed || data.service_data.preset_mode;
            if (!attr.isStringArray) {
                if (attr.map2iob) {
                    target = attr.map2iob[target];
                }
                if (attr.isNumber) {
                    target = Number(target);
                }
            }
            if (!target && target !== 0) {
                target = data.service_data.speed || data.service_data.preset_mode; //fallback
            }

            return adapterData.adapter.setForeignStateAsync(command.setId, target, false, { user });
        };

        entity.context.COMMANDS.push({
            service: 'set_speed',
            setId: states.preset_mode,
            parseCommand,
        });
        entity.context.COMMANDS.push({
            service: 'set_preset_mode',
            setId: states.preset_mode,
            parseCommand,
        });
        entity.context.COMMANDS.push({
            service: 'turn_off',
            setId: states.preset_mode,
            parseCommand: async (entity, command, data, user) => {
                await parseCommand(entity, command, { service_data: { preset_mode: 'off' } }, user);
                if (states.state) {
                    await adapterData.adapter.setForeignStateAsync(states.state, false, false, { user });
                }
            },
        });
    }

    return [entity];
}

/**
 * Create manual input_select entity.
 *
 * @param id - id of "main" object, i.e. state.
 * @param obj - iobroker object of id param
 * @param entity - already created entity
 * @param objects - id object cache
 * @param custom - custom part of object
 * @returns {Promise<[entity]>} - array with created entity
 */
exports.processManualEntity = async function (id, obj, entity, objects, custom) {
    const states = custom.states || {
        preset_mode: id,
    };
    if (!states.preset_mode) {
        states.speed = states.speed || id;
    }
    delete states.speed; //want only one attribute.

    return fillEntityFromStates(states, objects, entity);
};

function augmentServices(services) {
    services.fan = {
        set_speed: {
            name: 'Set speed',
            description: 'Set the speed of the fan.',
            fields: {
                speed: {
                    description: 'The speed to set as number.',
                    required: true,
                    selector: {
                        number: null,
                    },
                },
            },
            target: {
                entity: [
                    {
                        domain: ['fan'],
                    },
                ],
            },
        },
        set_preset_mode: {
            name: 'Set preset mode',
            description: 'Set the preset mode of the fan.',
            fields: {
                preset_mode: {
                    description: 'The preset mode to set.',
                    example: 'low',
                    selector: {
                        type: 'select',
                        options: ['low', 'medium', 'high', 'off'],
                    },
                },
            },
            target: {
                entity: [
                    {
                        domain: ['fan'],
                    },
                ],
            },
        },
        turn_off: {
            name: 'Turn off',
            description: 'Turns a fan off.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['fan'],
                    },
                ],
            },
        },
    };
}
augmentServices(adapterData.services);
