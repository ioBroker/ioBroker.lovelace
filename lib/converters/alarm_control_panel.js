const utils       = require('./../entities/utils');
const adapterData = require('./../dataSingleton');

/**
 * Create manual alarm_control_panel entity.
 * @param id - id of "main" object, i.e. state.
 * @param obj - iobroker object of id param
 * @param entity - already created entity
 * @param objects - id object cache
 * @param custom - custom part of object.
 * @returns {Promise<[entity]>}
 */
exports.processManualEntity = async function(id, obj, entity, objects, custom) {
    const states = custom.states || {
        state: id
    };

    objects[id] = obj; //keep hack for 'our' alarm object.
    return fillEntityFromStates.call(this, states, objects, entity);
};


function fillEntityFromStates(states, objects, entity) {
    // - alarm_control_panel =>
    // STATE disarmed/armed/armed_home/armed_away/armed_night/armed_custom_bypass/pending/arming/disarming/triggered
    // attributes: [code_format]
    // commands: alarm_arm_away, alarm_arm_home, alarm_arm_night, alarm_arm_custom_bypass, alarm_disarm (code will be sent)
    // we support only armed/disarmed
    // the code must be in the object in native as alarm_code

    entity.attributes.code_format = 'number';
    if (states.state) {
        const obj = objects[states.state];
        if (obj && obj.common) {
            if (obj.common.custom && obj.common.custom[adapterData.adapter.namespace]) {
                entity.attributes.code_format = obj.common.custom[adapterData.adapter.namespace].code_format || 'number';
            }
            //boolean -> just true/false. Otherwise enter string.
            entity.context.STATE.isBoolean = obj.common.type === 'boolean';
            entity.context.STATE.map = obj.common.states;
        }
        entity.context.STATE.setId = states.state;
        entity.context.STATE.getId = states.state;
        utils.addID2entity(states.state, entity);
    }

    const getParser = (entity, attr, state) => {
        if (!state) {
            entity.state = 'unknown';
            return;
        }
        if (state.val === true) {
            entity.state = 'armed';
        } else if (state.val === false) {
            entity.state = 'disarmed';
        } else {
            if (attr.map && attr.map[state.val]) {
                entity.state = attr.map[state.val]; //translate state using states map.
            } else if (entity.context.STATE.map && entity.context.STATE.map[state.val]) {
                entity.state = entity.context.STATE.map[state.val];
            } else {
                entity.state = state.val;
            }
        }
    };

    if (states.arm_state) {
        const id = states.arm_state;
        const obj = objects[id];
        entity.context.ATTRIBUTES = [{
            attribute: 'arm_state',
            getId: id,
            setId: id,
            getParser,
            map: obj ? obj.common ? obj.common.states : undefined : undefined
        }];
        utils.addID2entity(id, entity);
    }
    entity.context.STATE.getParser = getParser;

    const processCommand = async (entity, command, data, user) => {
        const targetState = data.service.replace('alarm_', '').replace('arm', 'armed');
        //  alarm_arm_away, alarm_arm_home, alarm_arm_night, alarm_arm_custom_bypass, alarm_arm_vacation, alarm_disarm (code will be sent)
        const id = entity.context.STATE.setId;
        adapterData.log.debug(data.service + ': ' + id + ' = ' + data.service_data.code ? 'XXX' : 'none');

        //require code to disarm.
        if (!adapterData.adapter.config.alarmCheckCodeOnDisarmOnly || targetState.includes('disarm')) {
            if ((data.service_data == null || data.service_data.code == null)) {
                throw new Error('code is empty');
            }

            const obj = await adapterData.adapter.getForeignObjectAsync(id);
            if (!obj.native.alarm_code) {
                adapterData.log.warn(`No code is defined! To provide the code add to object ${id} native.alarm_code with desired code`);
                throw new Error('iobroker misconfigured.');
            } else if (obj.native.alarm_code.toString() !== data.service_data.code.toString()) {
                throw new Error('invalid code');
            }
        }

        //ok, now set some objects:
        if (entity.context.STATE.isBoolean) {
            await adapterData.adapter.setForeignStateAsync(entity.context.STATE.setId, !targetState.includes('disarm'), false, {user});
        } else {
            let valToSet = targetState;
            if (entity.context.STATE.map) {
                valToSet = Number(Object.keys(entity.context.STATE.map).find(key => entity.context.STATE.map[key] === targetState));
                if (isNaN(valToSet) || valToSet === null || valToSet === undefined) {
                    valToSet = targetState;
                }
            }
            await adapterData.adapter.setForeignStateAsync(entity.context.STATE.setId, valToSet, false, {user});
        }
        if (entity.context.ATTRIBUTES) {
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'arm_state');
            if (attr) {
                let valToSet = targetState;
                if (attr.map) {
                    valToSet = Number(Object.keys(attr.map).find(key => attr.map[key] === targetState));
                    if (isNaN(valToSet) || valToSet === null || valToSet === undefined) {
                        valToSet = targetState;
                    }
                }
                await adapterData.adapter.setForeignStateAsync(attr.setId, valToSet, false, {user});
            }
        }
    };

    if (!entity.context.COMMANDS) {
        entity.context.COMMANDS = [];
    }
    entity.context.COMMANDS.push({
        service: 'alarm_arm_away',
        parseCommand: processCommand
    });
    entity.context.COMMANDS.push({
        service: 'alarm_arm_home',
        parseCommand: processCommand
    });
    entity.context.COMMANDS.push({
        service: 'alarm_arm_night',
        parseCommand: processCommand
    });
    entity.context.COMMANDS.push({
        service: 'alarm_arm_vacation',
        parseCommand: processCommand
    });
    entity.context.COMMANDS.push({
        service: 'alarm_arm_custom_bypass',
        parseCommand: processCommand
    });
    entity.context.COMMANDS.push({
        service: 'alarm_disarm',
        parseCommand: processCommand
    });

    return [entity];
}

function augmentServices(services) {
    services.alarm_control_panel = {
        alarm_arm_away: {
            name: 'Arm away',
            description: 'Arms the alarm in away mode.',
            fields: {
                code: {
                    selector: {
                        number: null
                    },
                    name: 'Code',
                    description: 'The code to arm the alarm.'
                }
            },
            target: {
                entity: [
                    {
                        domain: [
                            'alarm_control_panel'
                        ]
                    }
                ]
            }
        },
        alarm_arm_home: {
            name: 'Arm home',
            description: 'Arms the alarm in home mode.',
            fields: {
                code: {
                    selector: {
                        number: null
                    },
                    name: 'Code',
                    description: 'The code to arm the alarm.'
                }
            },
            target: {
                entity: [
                    {
                        domain: [
                            'alarm_control_panel'
                        ]
                    }
                ]
            }
        },
        alarm_arm_night: {
            name: 'Arm night',
            description: 'Arms the alarm in night mode.',
            fields: {
                code: {
                    selector: {
                        number: null
                    },
                    name: 'Code',
                    description: 'The code to arm the alarm.'
                }
            },
            target: {
                entity: [
                    {
                        domain: [
                            'alarm_control_panel'
                        ]
                    }
                ]
            }
        },
        alarm_arm_vacation: {
            name: 'Arm vacation',
            description: 'Arms the alarm in vacation mode.',
            fields: {
                code: {
                    selector: {
                        number: null
                    },
                    name: 'Code',
                    description: 'The code to arm the alarm.'
                }
            },
            target: {
                entity: [
                    {
                        domain: [
                            'alarm_control_panel'
                        ]
                    }
                ]
            }
        },
        alarm_arm_custom_bypass: {
            name: 'Arm custom',
            description: 'Arms the alarm in custom mode.',
            fields: {
                code: {
                    selector: {
                        number: null
                    },
                    name: 'Code',
                    description: 'The code to arm the alarm.'
                }
            },
            target: {
                entity: [
                    {
                        domain: [
                            'alarm_control_panel'
                        ]
                    }
                ]
            }
        },
        alarm_disarm: {
            name: 'Disarm',
            description: 'Disarms the alarm.',
            fields: {
                code: {
                    required: true,
                    selector: {
                        number: null
                    },
                    name: 'Code',
                    description: 'The code to disarm the alarm.'
                }
            },
            target: {
                entity: [
                    {
                        domain: [
                            'alarm_control_panel'
                        ]
                    }
                ]
            }
        }
    };
}
augmentServices(adapterData.services);
