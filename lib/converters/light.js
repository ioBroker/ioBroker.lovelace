const utils       = require('./../entities/utils');
const adapterData = require('./../dataSingleton');
const Types       = require('iobroker.type-detector').Types;

exports.processLight = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'light', forcedEntityId);

    let state = control.states.find(s => s.id && s.name === 'SET');
    entity.context.STATE = {setId: null, getId: null};
    if (state && state.id) {
        entity.context.STATE.setId = state.id;
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
        entity.attributes.color_mode = ONOFF;
        entity.attributes.supported_color_modes = [ONOFF];
    }

    state = control.states.find(s => s.id && (s.name === 'ON_ACTUAL' || s.name === 'ACTUAL'));
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }

    return [entity];
};

// Uses color mode!
// Possible modes:
//const UNKNOWN = "unknown";
const ONOFF = 'onoff';
const BRIGHTNESS = 'brightness';
const COLOR_TEMP = 'color_temp';
const HS = 'hs';
//const XY = "xy"; -> not yet supported by frontend, it seems?
const RGB = 'rgb';
const RGBW = 'rgbw';
//const RGBWW = "rgbww"; <- two white???
//
// -> fill attribute supported_color_modes
//
const SUPPORT_EFFECT = 4;
//const SUPPORT_FLASH = 8;
//const SUPPORT_TRANSITION = 32;

const attributesToNullOnOff = ['color_mode', 'brightness', 'color_temp', 'hs_color', 'rgb_color', 'rgbw_color', 'xy_color', 'effect'];

function _lightAdvancedAddState(states, objects, entity) {
    const getState = states.stateRead;

    //for advanced lights, clear attributes, so frontend doesn't still show them.
    entity.context.STATE.storedValues = {};
    entity.context.STATE.getParser = (entity, attr, state) => {
        if (!state) {
            state = {val: null};
        }
        const oldState = entity.state;
        entity.state = state.val ? 'on' : 'off';
        if (!state.val && oldState === 'on') {
            for (const attr of attributesToNullOnOff) {
                if (entity.attributes[attr] !== undefined) {
                    entity.context.STATE.storedValues[attr] = entity.attributes[attr];
                    entity.attributes[attr] = null;
                }
            }
            adapterData.log.debug(`Stored old values for next switch on: ${JSON.stringify(entity.context.STATE.storedValues)}`);
        }
        if (state.val && oldState !== 'on') {
            for (const attr of attributesToNullOnOff) {
                if (entity.attributes[attr] === null) { //make sure the attribute was not yet read from somewhere else
                    entity.attributes[attr] = entity.context.STATE.storedValues[attr];
                }
            }
            adapterData.log.debug(`Restored old values from previous switch off: ${JSON.stringify(entity.context.STATE.storedValues)}`);
        }
    };

    //prevent zigbee 'available' to become getId:
    if (getState && getState.startsWith('zigbee.') && (getState.endsWith('.available') || getState.endsWith('.device_query'))) {
        entity.context.STATE.getId = states.state;
    }
    if (states.state) {
        entity.context.STATE.isBoolean = objects[states.state] && objects[states.state].common && objects[states.state].common.type === 'boolean';
        entity.attributes.supported_color_modes.push(ONOFF);
        return true;
    } else {
        return false;
    }
}

function _lightAdvancedAddColorTemperature(states, objects, entity) {
    const iobMaxValueKelvin = 7000;
    const iobMinValueKelvin = 1000;

    if (states.color_temp) {
        const attribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'color_temp');
        const tempObj = objects[states.color_temp];
        attribute.convert_to_mired = tempObj && tempObj.common ? (tempObj.common.unit === 'mired') : false;
        attribute.getParser = (entity, attr, state) => {
            let targetAttributes = entity.attributes;
            if (entity.state !== 'on') {
                targetAttributes = entity.context.STATE.storedValues;
            }

            if (!state || !state.val) {
                targetAttributes.color_temp = iobMinValueKelvin;
                return;
            }
            let targetCt = state.val;
            if (targetCt < 1000 && !attr.convert_to_mired) {
                attr.convert_to_mired = true;
                //adapterData.log.warn('Need mired conversion for ' + states.color_temp + ' and did not detect that in setup. Please set unit to "K" in object settings.');
            }
            if (targetCt > 1000 && attr.convert_to_mired) {
                attr.convert_to_mired = false;
            }
            if (attr.convert_to_mired) {
                targetCt = 1e6 / targetCt;
            }
            targetAttributes.color_temp_kelvin = targetCt;
            targetAttributes.color_temp = 1e6 / targetCt;
            targetAttributes.color_mode = COLOR_TEMP;
        };

        entity.attributes.max_color_temp_kelvin = tempObj && tempObj.common && tempObj.common.max || iobMaxValueKelvin;
        entity.attributes.min_color_temp_kelvin = tempObj && tempObj.common && tempObj.common.min || iobMinValueKelvin;
        if (attribute.convert_to_mired || entity.attributes.max_color_temp_kelvin < 1000) {
            attribute.convert_to_mired = true;
            entity.attributes.max_color_temp_kelvin = tempObj && tempObj.common && tempObj.common.min ? 1e6 / tempObj.common.min : iobMaxValueKelvin;
            entity.attributes.min_color_temp_kelvin = tempObj && tempObj.common && tempObj.common.max ? 1e6 / tempObj.common.max : iobMinValueKelvin;
        }
        if (!entity.attributes.max_color_temp_kelvin || isNaN(entity.attributes.max_color_temp_kelvin)) {
            entity.attributes.max_color_temp_kelvin = iobMaxValueKelvin;
        }
        if (!entity.attributes.min_color_temp_kelvin || isNaN(entity.attributes.min_color_temp_kelvin)) {
            entity.attributes.min_color_temp_kelvin = iobMinValueKelvin;
        }
        adapterData.log.debug(entity.entity_id + ' ct needs mired conversion: ' + attribute.convert_to_mired);

        if (entity.attributes.min_color_temp_kelvin > entity.attributes.max_color_temp_kelvin) {
            //for kelvin conversion, min and max need to be swapped.
            const max = entity.attributes.min_color_temp_kelvin;
            entity.attributes.min_color_temp_kelvin = entity.attributes.max_color_temp_kelvin;
            entity.attributes.max_color_temp_kelvin = max;
        }

        entity.attributes.supported_color_modes.push(COLOR_TEMP);
    }
}

function _lightAdvancedAddBrightness(states, objects, entity) {
    if (!states.brightness && states.state && objects[states.state] && objects[states.state].common && objects[states.state].common.type === 'number') {
        states.brightness = states.state;
        if (!states.brightnessRead) {
            states.brightnessRead = states.stateRead;
        }
    }

    if (states.brightness) {
        const attribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'brightness');
        attribute.getParser = (entity, attr, state) => {
            let targetAttributes = entity.attributes;
            if (entity.state !== 'on') {
                targetAttributes = entity.context.STATE.storedValues;
            }

            state = state || {val: 0};
            targetAttributes.brightness = ((state.val - attr.min) / (attr.max - attr.min)) * 255;
            if (!targetAttributes.color_mode || targetAttributes.color_mode === ONOFF) {
                targetAttributes.color_mode = BRIGHTNESS;
            }

            if (states.state === states.brightness) {
                if (entity.state !== 'on') {
                    for (const attr of attributesToNullOnOff) {
                        if (entity.attributes[attr] === null) { //make sure the attribute was not yet read from somewhere else
                            entity.attributes[attr] = entity.context.STATE.storedValues[attr];
                        }
                    }
                }
                entity.state = targetAttributes.brightness > 0 ? 'on' : 'off';
                if (entity.attributes.color_mode === ONOFF) {
                    entity.attributes.color_mode = BRIGHTNESS;
                }
            }
        };
        attribute.setId = states.brightness;
        attribute.getId = states.brightnessRead || states.brightness;
        attribute.min = (objects[attribute.getId] && objects[attribute.getId].common && objects[attribute.getId].common.min) || 0;
        attribute.max = (objects[attribute.getId] && objects[attribute.getId].common && objects[attribute.getId].common.max) || 100;
        entity.attributes.supported_color_modes.push(BRIGHTNESS);
    }
}

function _lightAdvancedAddHueAndSat(states, objects, entity) {
    if (states.hue) {
        const hue_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'hue');
        hue_attr.max = objects[states.hue] && objects[states.hue].common && objects[states.hue].common.max || 360;
        hue_attr.getParser = (entity, attr, state) => {
            let targetAttributes = entity.attributes;
            if (entity.state !== 'on') {
                targetAttributes = entity.context.STATE.storedValues;
            }

            state = state || {val: 0};
            targetAttributes.hs_color[0] = state.val / attr.max * 360;
            targetAttributes.color_mode = HS;
        };
        entity.attributes.supported_color_modes.push(HS);
        entity.attributes.hs_color = [null,null];
        entity.context.STATE.storedValues.hs_color = [0,100];
    }

    //add saturation as own attribute. Will update saturation values from ioBroker correctly.
    if (states.saturation) {
        const sat_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'saturation');
        sat_attr.max = objects[states.saturation] && objects[states.saturation].common && objects[states.saturation].common.max || 100;
        if (!states.rgb_color && !states.red) {
            if (!states.hue) {
                adapterData.log.warn('Saturation present but no hue id found for ' + states.saturation + '. Hue won\'t work.');
                return;
            }
            sat_attr.getParser = (entity, attr, state) => {
                let targetAttributes = entity.attributes;
                if (entity.state !== 'on') {
                    targetAttributes = entity.context.STATE.storedValues;
                }
                state = state || {val: 0};
                targetAttributes.hs_color[1] = state.val / attr.max * 100;
                targetAttributes.color_mode = HS;
            };
        } else {
            sat_attr.getParser = () => {}; //ignore saturation updates.
        }
    } else if (states.hue) {
        adapterData.log.warn('Hue present but no saturation id found for ' + states.hue + '. Saturation won\'t work.');
    }
}

async function _lightAdvancedAddRGBSingle(states, objects, entity) {
    if (states.rgb_color) {
        const attribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'rgb_color');
        attribute.is_rgb_array = false;
        attribute.is_rgb_string = true;
        attribute.getParser = (entity, attr, state) => {
            let targetAttributes = entity.attributes;
            if (entity.state !== 'on') {
                targetAttributes = entity.context.STATE.storedValues;
            }
            let str = state ? (state.val || '#000000').toString() : '#000000';
            if (str[0] === '#') {
                str = str.substring(1);
            }
            let r,g,b;
            if (/([0-9]){1,3},([0-9]){1,3},([0-9]){1,3}/.test(str)) {
                adapterData.log.debug('Have RGB decimal array.');
                [r, g, b] = str.split(',').map(v => parseInt(v, 10));
            } else {
                if (!/^[\da-fA-F]{6}/.test(str)) {
                    adapterData.log.error('Malformed rgb string ' + str + ' expecting six hex digits.');
                    return;
                }
                r = parseInt(str.substring(0, 2), 16);
                g = parseInt(str.substring(2, 4), 16);
                b = parseInt(str.substring(4, 6), 16);
            }

            targetAttributes.rgb_color = [r, g, b];
            targetAttributes.color_mode = RGB;
            if (states.white) {
                targetAttributes.color_mode = RGBW;
                targetAttributes.rgbw_color[0] = r;
                targetAttributes.rgbw_color[1] = g;
                targetAttributes.rgbw_color[2] = b;
            }
        };

        //check if the current state is rgb array.
        const rgbState = await adapterData.adapter.getForeignStateAsync(states.rgb_color);
        if (rgbState && rgbState.val) {
            attribute.is_rgb_array = /([0-9]){1,3},([0-9]){1,3},([0-9]){1,3}/.test(rgbState.val.toString());
        }

        entity.attributes.rgb_color = [null,null,null];
        entity.context.STATE.storedValues.rgb_color = [0,0,0];
        entity.attributes.supported_color_modes.push(RGB);
    }
}

function _lightAdvancedAddRGB(states, objects, entity) {
    if (states.red && states.green && states.blue) {
        const red_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'red');
        const green_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'green');
        const blue_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'blue');

        const rgbGetParser = (index, entity, attr, state) => {
            let targetAttributes = entity.attributes;
            if (entity.state !== 'on') {
                targetAttributes = entity.context.STATE.storedValues;
            }
            let val = state ? state.val || 0 : 0;
            val = val / attr.max * 255;
            targetAttributes.rgb_color[index] = val;
            if (targetAttributes.rgbw_color) {
                targetAttributes.rgbw_color[index] = val;
            }
            targetAttributes.color_mode = states.white ? RGBW : RGB;
        };

        red_attr.getParser = rgbGetParser.bind(this, 0);
        green_attr.getParser = rgbGetParser.bind(this, 1);
        blue_attr.getParser = rgbGetParser.bind(this, 2);
        red_attr.max = objects[states.red] && objects[states.red].common && objects[states.red].common.max || 100;
        green_attr.max = objects[states.green] && objects[states.green].common && objects[states.green].common.max || 100;
        blue_attr.max = objects[states.blue] && objects[states.blue].common && objects[states.blue].common.max || 100;

        entity.attributes.supported_color_modes.push(RGB);
        entity.attributes.rgb_color = [null,null,null];
        entity.context.STATE.storedValues.rgb_color = [0,0,0];
        if (states.white) {
            entity.attributes.rgbw_color = [null,null,null,null];
            entity.context.STATE.storedValues.rgbw_color = [0,0,0,0];
        }
    }
}

async function _setLightAdvancedAttributesToIOBStates(data, entity, user) {
    function NumToHex(num) {
        num = Math.min(Math.max(Math.round(num), 0), 255);
        let hex = Number(num).toString(16).toUpperCase();
        if (hex.length < 2) {
            hex = '0' + hex;
        }
        return hex;
    }

    if (data.service_data.color_temp) { //will also be false for ct = 0 -> but ct = 0 is not a useful mired value and creates issues with the conversion.
        let ct = 1e6 / data.service_data.color_temp;
        entity.attributes.color_temp_kelvin = ct;
        entity.attributes.color_temp = data.service_data.color_temp;
        const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'color_temp');
        if (attr.convert_to_mired) {
            ct = data.service_data.color_temp;
        }
        entity.attributes.color_mode = COLOR_TEMP;
        await adapterData.adapter.setForeignStateAsync(attr.getId, ct, false, {user});
    }
    if (data.service_data.color_temp_kelvin) { //will also be false for ct = 0 -> but ct = 0 is not a useful mired value and creates issues with the conversion.
        let ct = data.service_data.color_temp_kelvin;
        entity.attributes.color_temp_kelvin = ct;
        const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'color_temp');
        if (attr.convert_to_mired) {
            ct = 1e6 / ct;
        }
        entity.attributes.color_mode = COLOR_TEMP;
        await adapterData.adapter.setForeignStateAsync(attr.getId, ct, false, {user});
    }
    if (data.service_data.brightness >= 0 && !data.service_data.brightness_pct) {
        data.service_data.brightness_pct = data.service_data.brightness / 255 * 100;
    }
    if (data.service_data.brightness_pct >= 0) {
        const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'brightness');
        entity.attributes.brightness = (data.service_data.brightness_pct / 100) * 255;
        if (!entity.context.STATE.isBoolean) {
            entity.state = data.service_data.brightness_pct > 0 ? 'on' : 'off';
        }
        if (!entity.attributes.color_mode || entity.attributes.color_mode === ONOFF) {
            entity.attributes.color_mode = BRIGHTNESS;
        }
        await adapterData.adapter.setForeignState(attr.setId, data.service_data.brightness_pct / 100 * (attr.max - attr.min) + attr.min, false, {user});
    }
    if (data.service_data.hs_color) {
        const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'hue');
        const attr_Sat = entity.context.ATTRIBUTES.find(a => a.attribute === 'saturation');
        entity.attributes.hs_color = data.service_data.hs_color;
        const [h, s] = data.service_data.hs_color;

        if (attr) {
            await adapterData.adapter.setForeignStateAsync(attr.getId, h / 360 * attr.max, false, {user});
        } else {
            adapterData.log.warn('No hue for ' + entity.entity_id + ', can only set saturation.');
        }
        if (attr_Sat) {
            await adapterData.adapter.setForeignStateAsync(attr_Sat.getId, s / 100 * attr_Sat.max, false, {user});
        } else {
            adapterData.log.warn('No saturation for ' + entity.entity_id + ', can only set hue.');
        }
        entity.attributes.color_mode = HS;
    }
    if (data.service_data.rgbw_color) {
        const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'white');
        await adapterData.adapter.setForeignStateAsync(attr.getId, data.service_data.rgbw_color[3] / 255 * attr.max, false, {user});
        data.service_data.rgb_color = data.service_data.rgbw_color; //make sure we set color, too.
        entity.attributes.color_mode = RGBW;
    }
    if (data.service_data.rgb_color) {
        const rgb_color = entity.context.ATTRIBUTES.find(a => a.attribute === 'rgb_color');
        const [r, g, b] = data.service_data.rgb_color;
        if (rgb_color) {
            if (!rgb_color.is_rgb_array) {
                const rgbString = '#' + NumToHex(r) + NumToHex(g) + NumToHex(b);
                await adapterData.adapter.setForeignStateAsync(rgb_color.getId, rgbString, false, {user});
            } else {
                const rgbString = r + ',' + g + ',' + b;
                await adapterData.adapter.setForeignStateAsync(rgb_color.getId, rgbString, false, {user});
            }
        } else {
            const red_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'red');
            const green_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'green');
            const blue_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'blue');
            //set r,g,b to single states in ioBroker. rgb is always [0-255] here (from HASS), so scale here.
            await Promise.all([
                adapterData.adapter.setForeignStateAsync(red_attr.getId, r / 255 * red_attr.max, false, {user}),
                adapterData.adapter.setForeignStateAsync(green_attr.getId, g / 255 * green_attr.max, false, {user}),
                adapterData.adapter.setForeignStateAsync(blue_attr.getId, b / 255 * blue_attr.max, false, {user})
            ]);
        }
        entity.attributes.color_mode = !data.service_data.rgbw_color ? RGB : RGBW;
    }
    if (data.service_data.effect) {
        const effect_attr = entity.context.ATTRIBUTES.find(a => a.attributes === 'effect');
        let val = effect_attr.states[data.service_data.effect];
        if (val === undefined) {
            val = data.service_data.effect;
        }
        await adapterData.adapter.setForeignStateAsync(effect_attr.getId, val, false, {user});
    }
}

async function _handleTurnOnCmd(entity, command, data, user) {
    // if ON/OFF object exists
    if (entity.context.STATE.setId && entity.context.STATE.getId) {
        // read actual state
        const state = await adapterData.adapter.getForeignStateAsync(entity.context.STATE.getId);

        // if the light is not ON
        if (!state || !state.val) {
            // turn ON:
            await adapterData.adapter.setForeignStateAsync(entity.context.STATE.setId, command.on, false, {user});
        }
    }
    if (!entity.attributes.color_mode) {
        entity.attributes.color_mode = ONOFF;
    }
    await _setLightAdvancedAttributesToIOBStates(data, entity, user);
}

/**
 * Extract relevant ids from the type-detector control object.
 * Result object has optional members:
 *      state
 *      brightness
 *      color_temp
 *
 *      hue
 *      saturation
 *
 *      rgb_color
 *      red
 *      green
 *      blue
 *      white
 *
 * @param control
 * @returns {{}}
 */
function convertControlToStates(control) {
    function findState(name) {
        const state = control.states.find(s => s.id && s.name === name);
        return state ? state.id : undefined;
    }

    const states = {};
    switch (control.type) {
        case Types.rgb:
        case Types.rgbSingle:
        case Types.hue:
        case Types.ct:
            states.state = findState('ON');
            states.stateRead = findState('ON_ACTUAL');
            //still don't get difference between brightness and dimmer... is a bit confusing in type-detector, too:
            states.brightness = findState('DIMMER');
            if (!states.brightness) {
                states.brightness = findState('BRIGHTNESS');
            }
            break;
        case Types.dimmer:
            states.state = findState('ON_SET');
            states.stateRead = findState('ON_ACTUAL');
            if (!states.state) {
                states.state = findState('SET');
                if (!states.stateRead) {
                    states.stateRead = findState('ACTUAL');
                }
            }
            states.brightness = findState('SET');
            states.brightnessRead = findState('ACTUAL');
            break;
        case Types.light:
            states.state = findState('SET');
            states.stateRead = findState('ACTUAL');
            break;
    }
    states.color_temp = findState('TEMPERATURE');

    //color stuff:
    states.hue = findState('HUE');
    states.saturation = findState('SATURATION');
    states.rgb_color = findState('RGB');
    states.red = findState('RED');
    states.green = findState('GREEN');
    states.blue = findState('BLUE');
    states.white = findState('WHITE');

    return states;
}

/**
 * Fills bare entity from states and objects with all that light entity can do.
 * @param states - state ids, either created manually or from convertControlToStates function
 * @param objects - objects for state ids.
 * @param entity - bare entity to fill.
 * @returns {Promise<*[entity]>}
 */
async function fillLightEntityFromStates(states, objects, entity) {
    utils.fillEntityFromStates(states, entity); //already prefills attributes.
    entity.attributes.supported_color_modes = [];
    entity.attributes.color_mode = ONOFF;
    entity.supported_features = 0;
    if (!entity.context.COMMANDS) {
        entity.context.COMMANDS = [];
    }
    entity.context.STATE.storedValues = {};

    const white_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'white');
    if (states.white) {
        white_attr.max = objects[white_attr.getId] && objects[white_attr.getId].common && objects[white_attr.getId].common.max || 100;
        entity.attributes.rgbw_color = [entity.attributes.red, entity.attributes.green, entity.attributes.blue, entity.attributes.white];
        if (states.red || states.rgb_color) {
            entity.attributes.supported_color_modes.push(RGBW);
            white_attr.getParser = (entity, attr, state) => {
                const val = state ? state.val || 0 : 0;
                let targetAttributes = entity.attributes;
                if (entity.state !== 'on') {
                    targetAttributes = entity.context.STATE.storedValues;
                }
                targetAttributes.rgbw_color[3] = val / attr.max * 255;
                targetAttributes.color_mode = RGBW;
            };
        }
    }

    //fill in on/off state id.
    _lightAdvancedAddState(states, objects, entity);

    //fill in color temperature stuff.
    await _lightAdvancedAddColorTemperature(states, objects, entity);

    //if there is a "BRIGHTNESS" control, use it to dim the light.
    await _lightAdvancedAddBrightness(states, objects, entity);

    //add hue and sat:
    await _lightAdvancedAddHueAndSat(states, objects, entity);

    //add rgb. Will only happen, if no hue.
    await _lightAdvancedAddRGBSingle(states, objects, entity);

    //add rgb as single states. Will only happen if no hue and no rgbSingle:
    await _lightAdvancedAddRGB(states, objects, entity);

    if (states.effect) {
        const effect_attr = entity.context.ATTRIBUTES.find(a => a.attributes === 'effect');
        effect_attr.states = objects[effect_attr.getId] && objects[effect_attr.getId].common && objects[effect_attr.getId].common.states || {0: 'Please', 1: 'Fill', 2: 'States'};
        entity.attributes.effect_list = Object.values(effect_attr.states);
        effect_attr.getParser = (entity, attr, state) => {
            state = state || {val: 0};
            let targetAttributes = entity.attributes;
            if (entity.state !== 'on') {
                targetAttributes = entity.context.STATE.storedValues;
            }
            targetAttributes.effect = effect_attr.states[state.val];
        };
        entity.supported_features |= SUPPORT_EFFECT;
    }

    entity.context.COMMANDS.push({
        service: 'turn_on',
        on: true,
        setId: entity.context.STATE.setId,
        parseCommand: _handleTurnOnCmd.bind(this)
    });
    if (!entity.context.STATE.isBoolean) {
        const stateObj = objects[states.state];
        entity.context.COMMANDS[0].on = stateObj && stateObj.common && stateObj.common.max || 100;
        entity.context.COMMANDS.push({
            service: 'turn_off',
            off: stateObj && stateObj.common && stateObj.common.min || 0,
            setId: entity.context.STATE.setId,
            parseCommand: (entity, command, data, user) => {
                return adapterData.adapter.setForeignStateAsync(command.setId, command.off, false, {user});
            }
        });
        entity.context.STATE.getParser = function (entity, attr, state) {
            state = state || {val: null};
            entity.state = state.val > (stateObj && stateObj.common && stateObj.common.min || 0) ? 'on' : 'off';
            if (!entity.attributes.color_mode) {
                entity.attributes.color_mode = ONOFF;
            }
        };
    }

    return [entity];
}

/**
 * Create manual light entity.
 * @param id - id of "main" object, i.e., state.
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
    if (obj && obj.common && obj.common.type === 'number') {
        states.brightness = id;
    }

    return fillLightEntityFromStates(states, objects, entity);
};

/**
 * Create Light entity form type-detector detection.
 * @param id
 * @param control
 * @param name
 * @param room
 * @param func
 * @param _obj
 * @param objects
 * @param forcedEntityId
 * @returns {Promise<null|entity[]>}
 */
exports.processLightAdvanced = async function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const states = convertControlToStates(control);
    if (states.state) {
        const entity = utils.processCommon(name, func, room, _obj, 'light', forcedEntityId);

        return fillLightEntityFromStates(states, objects, entity);
    } else {
        adapterData.log.debug('Could not add ' + id + ' of type ' + control.type + ' -> no on/off control found.');
        return null;
    }
};
