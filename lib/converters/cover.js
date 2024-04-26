const utils       = require('./../entities/utils');
const adapterData = require('./../dataSingleton');

function addCommand(entity, control, searchString, serviceName, featureNumber, additionalParsing) {
    const state = control.states.find(s => s.id && s.name === searchString);
    if (state && state.id) {
        const command = {
            service: serviceName,
            setId: state.id,
            parseCommand: (entity, command, params, user) => new Promise((resolve, reject) => {
                if (typeof additionalParsing === 'function') {
                    additionalParsing(entity, command, params, user);
                }
                adapterData.adapter.setForeignState(command.setId, true, false, {user}, err =>
                    err ? reject(err) : resolve());
            })
        };
        entity.context.COMMANDS.push(command);
        entity.attributes.supported_features |= featureNumber;
        return true;
    }
    return false;
}

function handleSetAndTiltCommand(entity, command, data, user) {
    return new Promise((resolve, reject) => {
        if (data.service_data.position >= 0) {
            let value = (data.service_data.position / 100) * entity.context.STATE.max + entity.context.STATE.min;
            if (entity.context.STATE.invert) {
                value = ((100 - data.service_data.position) / 100) * entity.context.STATE.max + entity.context.STATE.min;
            }
            adapterData.adapter.setForeignState(command.setId, value, false, {user}, err => err ? reject(err) : resolve());
        } else if (data.service_data.tilt_position >= 0) {
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'tilt');
            if (attr && attr.setId) {
                let value = ((data.service_data.tilt_position) / 100) * attr.max + attr.min;
                if (attr.invert) {
                    value = ((100 - data.service_data.tilt_position) / 100) * attr.max + attr.min;
                }
                adapterData.adapter.setForeignState(attr.setId, value, false,
                    {user}, err => err ? reject(err) : resolve());
            } else {
                reject(new Error('No setId for tilt cover.'));
            }
        } else {
            reject(new Error('No matching service data in set_cover_position.'));
        }
    });
}

function addBlindLevel(entities, control, objects, name, id, room, func, _obj, forcedEntityId) {
    const state = control.states.find(s => s.id && s.name === name);
    const entity = entities[0];
    if (state && state.id) {
        const common = objects[state.id] && objects[state.id].common ? objects[state.id].common : {};

        if (state && state.id) {
            //also create input_number - slider to be backwards compatibel:
            const entitySlider = utils.processCommon(entity.attributes.friendly_name, room, func, _obj, 'input_number', forcedEntityId);
            entities.push(entitySlider);
            entitySlider.context.STATE = {setId: state.id, getId: state.id};
            entitySlider.attributes.icon = 'mdi:window-shutter';
            entitySlider.attributes.mode = 'slider';
            entitySlider.attributes.min = common.min !== undefined ? common.min : 0;
            entitySlider.attributes.max = common.max !== undefined ? common.max : 100;
            entitySlider.attributes.step = common.step || 1;
            utils.addID2entity(state.id, entitySlider);

            //fill state with %:
            entity.context.STATE.setId = state.id;
            entity.context.STATE.getId = state.id;
            utils.addID2entity(state.id, entity);
            entity.context.STATE.max = common.max || 100;
            entity.context.STATE.min = common.min || 0;
            entity.context.STATE.getParser = (entity, attr, state)=> {
                if (!state) state = {val: null};
                if (state.val != null) {
                    let position = ((state.val - entity.context.STATE.min) / entity.context.STATE.max) * 100.0;
                    let isClosed = state.val === entity.context.STATE.min;
                    let isOpened = state.val === entity.context.STATE.max;
                    if (entity.context.STATE.invert) {
                        position = 100 - position;
                        isClosed = state.val === entity.context.STATE.max;
                        isOpened = state.val === entity.context.STATE.min;
                    }
                    entity.attributes.current_position = position;
                    if (isClosed) {
                        entity.state = 'closed';
                    } else if (isOpened) {
                        entity.state = 'open';
                    } else {
                        entity.state = String(position);
                    }
                }
            };
            entity.attributes.supported_features |= 4;
            entity.context.COMMANDS.push({
                service: 'set_cover_tilt_position',
                setId: state.id,
                parseCommand: handleSetAndTiltCommand
            });
            entity.context.COMMANDS.push({
                service: 'set_cover_position',
                setId: state.id,
                parseCommand: handleSetAndTiltCommand
            });
            //need to define toggle here, because default handling does not make much sense for cover.
            entity.context.COMMANDS.push({
                service: 'toggle',
                setId: state.id,
                parseCommand: (entity, command, data, user) => {
                    return new Promise((resolve, reject) => {
                        const up = entity.context.COMMANDS.find(a => a.service === 'open_cover');
                        const down = entity.context.COMMANDS.find(a => a.service === 'close_cover');
                        if (entity.state === 'open' || entity.state === 'opening') {
                            if (down) {
                                adapterData.adapter.setForeignState(down.setId, true, false,
                                    {user}, err => err ? reject(err) : resolve());
                            } else {
                                adapterData.adapter.setForeignState(command.setId, entity.context.STATE.invert ? entity.context.STATE.min : entity.context.STATE.max, false,
                                    {user}, err => err ? reject(err) : resolve());
                            }
                        } else {
                            if (up) {
                                adapterData.adapter.setForeignState(up.setId, true, false,
                                    {user}, err => err ? reject(err) : resolve());
                            } else {
                                adapterData.adapter.setForeignState(command.setId, entity.context.STATE.invert ? entity.context.STATE.max : entity.context.STATE.min, false,
                                    {user}, err => err ? reject(err) : resolve());
                            }
                        }
                    });
                }
            });

            //support get/set in two different states, but invert needs to match!
            const getState = control.states.find(s => s.id && s.name === name.replace('SET', 'ACTUAL'));
            if (getState && getState.id) {
                entity.context.STATE.getId = getState.id;
                utils.addID2entity(getState.id, entity);

                entitySlider.context.STATE.getId = getState.id;
                utils.addID2entity(getState.id, entitySlider);
            }
        }
        return true;
    }
    return false;
}

function addTiltLevel(entity, control, objects, name) {
    //support for tilt %:
    const state = control.states.find(s => s.id && s.name === name);
    if (state && state.id) {
        const common = objects[state.id] && objects[state.id].common ? objects[state.id].common : {};
        entity.context.ATTRIBUTES = [{
            attribute: 'tilt',
            getId: state.id,
            setId: state.id,
            min: common.min || 0,
            max: common.max || 100,
            getParser: (entity, attr, state) => {
                if (!state) state = {val: null};
                if (state.val != null) {
                    let position = ((state.val - attr.min) / attr.max) * 100.0;
                    if (attr.invert) {
                        position = 100 - position;
                    }
                    entity.attributes.current_tilt_position = position;
                }
            }
        }];
        utils.addID2entity(state.id, entity);
        entity.attributes.supported_features |= 128;

        const getState = control.states.find(s => s.id && s.name === name.replace('SET', 'ACTUAL'));
        if (getState && getState.id) {
            entity.context.ATTRIBUTES.find(a => a.attribute === 'tilt').getId = getState.id;
            utils.addID2entity(getState.id, entity);
        }
        return true;
    }
    return false;
}


exports.processBlind = function(id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'cover', forcedEntityId);

    /*
        cover device classes.
            DEVICE_CLASS_AWNING = "awning"
            DEVICE_CLASS_BLIND = "blind"
            DEVICE_CLASS_CURTAIN = "curtain"
            DEVICE_CLASS_DAMPER = "damper"
            DEVICE_CLASS_DOOR = "door"
            DEVICE_CLASS_GARAGE = "garage"
            DEVICE_CLASS_GATE = "gate"
            DEVICE_CLASS_SHADE = "shade"
            DEVICE_CLASS_SHUTTER = "shutter"
            DEVICE_CLASS_WINDOW = "window"

        supported features:
            SUPPORT_OPEN = 1
            SUPPORT_CLOSE = 2
            SUPPORT_SET_POSITION = 4
            SUPPORT_STOP = 8
            SUPPORT_OPEN_TILT = 16
            SUPPORT_CLOSE_TILT = 32
            SUPPORT_STOP_TILT = 64
            SUPPORT_SET_TILT_POSITION = 128

        attributes:
            current_position //for shade it seems 0 = open, i.e. up, 100 = closed, i.e. down. HASS says otherway round.
            current_tilt_position
            position
            tilt_position
     */
    entity.context.COMMANDS = [];
    entity.attributes.device_class = 'blind'; //use blind, because now I added tilt support ;-)
    entity.context.STATE = {setId: null, getId: null};
    entity.attributes.supported_features = 0;
    entity.attributes.icon = 'mdi:window-shutter';
    adapterData.log.debug('Creating blind of type ' + control.type + ' for ' + id);

    const entities = [entity];
    if(addBlindLevel(entities, control, objects, 'SET', id, room, func, _obj, forcedEntityId)) {
        entity.context.STATE.invert = !!adapterData.adapter.config.blindsInvert;
    }

    if(addTiltLevel(entity, control, objects, 'TILT_SET')) {
        const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'tilt');
        attr.invert = !!adapterData.adapter.config.blindsInvert;
    }

    //add commands, if present:
    addCommand(entity, control, 'STOP', 'stop_cover', 8);
    const haveOpen = addCommand(entity, control, 'OPEN', 'open_cover', 1, entity => entity.state = 'opening');
    const haveClose = addCommand(entity, control, 'CLOSE', 'close_cover', 2, entity => entity.state = 'closing');
    addCommand(entity, control, 'TILT_OPEN', 'open_cover_tilt', 16);
    addCommand(entity, control, 'TILT_CLOSE', 'close_cover_tilt', 32);
    addCommand(entity, control, 'TILT_STOP', 'stop_cover_tilt', 64);

    //use % setting for up/down in case there are no buttons:
    if (!haveOpen) {
        const command = {
            service: 'open_cover',
            setId: entity.context.STATE.setId,
            parseCommand: (entity, command, params, user) => new Promise((resolve, reject) => {
                entity.state = 'opening';
                adapterData.adapter.setForeignState(command.setId,
                    entity.context.STATE.invert ? entity.context.STATE.min : entity.context.STATE.max, false, {user},
                    err =>
                        err ? reject(err) : resolve());
            })
        };
        entity.context.COMMANDS.push(command);
        entity.attributes.supported_features |= 1;
    }
    if (!haveClose) {
        const command = {
            service: 'close_cover',
            setId: entity.context.STATE.setId,
            parseCommand: (entity, command, params, user) => new Promise((resolve, reject) => {
                entity.state = 'closing';
                adapterData.adapter.setForeignState(command.setId,
                    entity.context.STATE.invert ? entity.context.STATE.max : entity.context.STATE.min, false, {user}, err =>
                        err ? reject(err) : resolve());
            })
        };
        entity.context.COMMANDS.push(command);
        entity.attributes.supported_features |= 2;
    }

    return entities;
};

function augmentServices(services) {
    services.cover = {
        set_cover_tilt_position: {
            name: 'Set tilt position',
            description: 'Sets the tilt position of a cover entity.',
            fields: {
                tilt_position: {
                    required: true,
                    selector: {
                        number: null
                    },
                    name: 'Tilt position',
                    description: 'The target tilt position to set.'
                }
            },
            target: {
                entity: [
                    {
                        domain: [
                            'cover'
                        ]
                    }
                ]
            }
        },
        set_cover_position: {
            name: 'Set position',
            description: 'Sets the position of a cover entity.',
            fields: {
                position: {
                    required: true,
                    selector: {
                        number: null
                    },
                    name: 'Position',
                    description: 'The target position to set.'
                }
            },
            target: {
                entity: [
                    {
                        domain: [
                            'cover'
                        ]
                    }
                ]
            }
        },
        toggle: {
            name: 'Toggle cover status',
            description: 'Toggles the status of a cover entity.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: [
                            'cover'
                        ]
                    }
                ]
            }
        },
        open_cover: {
            name: 'Open cover',
            description: 'Opens a cover entity.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: [
                            'cover'
                        ]
                    }
                ]
            }
        },
        close_cover: {
            name: 'Close cover',
            description: 'Closes a cover entity.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: [
                            'cover'
                        ]
                    }
                ]
            }
        },
        stop_cover: {
            name: 'Stop cover',
            description: 'Stops a cover entity.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: [
                            'cover'
                        ]
                    }
                ]
            }
        },
        open_cover_tilt: {
            name: 'Open tilt',
            description: 'Opens the tilt of a cover entity.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: [
                            'cover'
                        ]
                    }
                ]
            }
        },
        close_cover_tilt: {
            name: 'Close tilt',
            description: 'Closes the tilt of a cover entity.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: [
                            'cover'
                        ]
                    }
                ]
            }
        },
        stop_cover_tilt: {
            name: 'Stop tilt',
            description: 'Stops the tilt of a cover entity.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: [
                            'cover'
                        ]
                    }
                ]
            }
        }
    };
}
augmentServices(adapterData.services);
