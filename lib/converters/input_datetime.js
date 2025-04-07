const utils = require('./../entities/utils');
const adapterData = require('./../dataSingleton');

function pad0(number) {
    if (number < 10) {
        return `0${number}`;
    } else {
        return `${number}`;
    }
}

function stateFromAttributes(entity) {
    entity.state = 'unknown';
    if (entity.attributes.has_date) {
        entity.state = `${entity.attributes.year}-${pad0(entity.attributes.month)}-${pad0(entity.attributes.day)}`;
    }
    if (entity.attributes.has_time) {
        if (!entity.attributes.has_date) {
            entity.state = '';
        } else {
            entity.state += ' ';
        }
        entity.state += `${entity.attributes.hour}:${entity.attributes.minute}:${entity.attributes.second}`;
    }
}

function timeToAttributes(entity, date) {
    //entity.state = date.getTime(); //state is timestamp? Hopyfully?? Pretty please?? -> but seems to be ignored by lovelace anyway, only not allowed to be "unknown".
    if (entity.attributes.has_date) {
        entity.attributes.year = date.getFullYear();
        entity.attributes.month = date.getMonth() + 1; //expects 1-12 it seems
        entity.attributes.day = date.getDate();
    }
    if (entity.attributes.has_time) {
        entity.attributes.hour = pad0(date.getHours());
        entity.attributes.minute = pad0(date.getMinutes());
        entity.attributes.second = pad0(date.getSeconds());
        if (!entity.attributes.has_date) {
            entity.state = '';
        } else {
            entity.state += ' ';
        }
    }
    stateFromAttributes(entity);
}

function fillEntityFromStates(states, objects, entity) {
    let isString = false;
    if (states.state && objects[states.state] && objects[states.state].common) {
        isString = objects[states.state].common.type === 'string';
    }

    if (!entity.context.COMMANDS) {
        entity.context.COMMANDS = [];
    }
    entity.context.COMMANDS.push({
        service: 'set_datetime',
        isString: isString,
        setId: entity.context.STATE.setId,
        parseCommand: async (entity, command, data, user) => {
            //service_data contains entity_id, date and time (both optional)
            data = data.service_data;
            let targetData;
            let date = new Date(); //if no date is set, use today.
            if (entity.attributes.has_date) {
                if (data.date) {
                    date = new Date(data.date);
                } else {
                    date = new Date(entity.attributes.year, entity.attributes.month - 1, entity.attributes.day);
                }
            }
            if (entity.attributes.has_time && data.time) {
                const parts = data.time.split(':');
                date.setHours(parseInt(parts[0], 10));
                date.setMinutes(parseInt(parts[1], 10));
                date.setSeconds(parts[2] ? parseInt(parts[2], 10) : 0);
                date.setMilliseconds(0);
            }
            timeToAttributes(entity, date);

            if (command.isString) {
                targetData = entity.state;
            } else {
                targetData = date.getTime();
            }
            return adapterData.adapter.setForeignStateAsync(command.setId, targetData, false, { user });
        },
    });
    entity.context.STATE.getParser = function (entity, attr, state) {
        state = state || { val: null };
        if (typeof state.val === 'number') {
            const date = new Date(state.val);
            if (date.getTime() >= 0) {
                //is valid date?
                timeToAttributes(entity, date);
            } else {
                adapterData.log.warn(`${state.val} is not a valid date. Error in ${entity.entity_id}`);
                entity.state = state.val || 'unknown';
            }
        } else if (typeof state.val === 'string') {
            let timeStr;
            let dateStr;
            if (/\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{1,2}(:\d{1,2})?/.test(state.val)) {
                [dateStr, timeStr] = state.val.split(' ');
            } else if (/\d{2,4}-\d{1,2}-\d{1,2}/.test(state.val)) {
                dateStr = state.val;
            } else if (/\d{1,2}:\d{1,2}(:\d{1,2})?/.test(state.val)) {
                timeStr = state.val;
            }

            if (dateStr) {
                const parts = dateStr.split('-');
                entity.attributes.year = Number(parts[0]) || 1970;
                entity.attributes.month = Number(parts[1]) || 1;
                entity.attributes.day = Number(parts[2]) || 1;
            }
            if (timeStr) {
                const parts = timeStr.split(':');
                entity.attributes.hour = Number(parts[0]) || 0;
                entity.attributes.minute = Number(parts[1]) || 0;
                entity.attributes.second = parts[2] ? Number(parts[2]) : 0;
            }
            stateFromAttributes(entity);
        } else {
            adapterData.log.warn(`${state.val} is not a valid date. Error in ${entity.entity_id}`);
            entity.state = '2022-04-10 20:23'; //set dummy time & date so UI does not run into error.
        }
    };
    utils.addID2entity(states.state, entity);
    entity.context.capabilities = { has_data: entity.attributes.has_date, has_time: entity.attributes.has_time };

    return [entity];
}

/**
 * Create manual input_datetime entity.
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
        state: id,
    };

    entity.attributes.has_time = custom.attr_has_time || false;
    if (custom.attr_has_time === undefined) {
        entity.attributes.has_time = custom.has_time || false;
    }
    entity.attributes.has_date = custom.attr_has_date;
    if (custom.attr_has_date === undefined) {
        entity.attributes.has_date = custom.has_date === undefined ? true : custom.has_date; //date on by default.
    }
    return fillEntityFromStates(states, objects, entity);
};

function augmentServices(services) {
    services.input_datetime = {
        set_datetime: {
            name: 'Set',
            description: 'Sets the date and/or time.',
            fields: {
                date: {
                    example: '"2019-04-20"',
                    selector: {
                        text: null,
                    },
                    name: 'Date',
                    description: 'The target date.',
                },
                time: {
                    example: '"05:04:20"',
                    selector: {
                        time: null,
                    },
                    name: 'Time',
                    description: 'The target time.',
                },
                datetime: {
                    example: '"2019-04-20 05:04:20"',
                    selector: {
                        text: null,
                    },
                    name: 'Date & time',
                    description: 'The target date & time.',
                },
                timestamp: {
                    selector: {
                        number: {
                            min: 0,
                            // eslint-disable-next-line no-loss-of-precision
                            max: 9223372036854775807,
                            mode: 'box',
                        },
                    },
                    name: 'Timestamp',
                    description: 'The target date & time, expressed by a UNIX timestamp.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['input_datetime'],
                    },
                ],
            },
        },
    };
}
augmentServices(adapterData.services);
