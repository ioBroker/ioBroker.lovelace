const processSensors = require('./sensor');
const utils          = require('./utils');
const adapterData    = require('./../dataSingleton');
const typeDetector   = require('iobroker.type-detector');

// - climate =>
//          STATE on/off,
//          attributes: [
//
//              hvac_mode: HvacMode;
//              hvac_modes: HvacMode[];
//              hvac_action?: HvacAction;
//
//
//              current_temperature: number, <- reads temperature

//                                <- those all set temperature. Low & high are there to set target range.
//              target_temp_step: number,
//              target_temp_low: number,
//              target_temp_high: number,
//              min_temp: number,
//              max_temp: number,
//              temperature: number

//              current_humidity,         <- read humidity

//                                  <- set target humidity (and range)
//              humidity?: number;
//              target_humidity_low?: number;
//              target_humidity_high?: number;
//              min_humidity?: number;
//              max_humidity?: number;

//              fan_mode?: string;
//              fan_modes?: string[];

//              preset_mode?: string;
//              preset_modes?: string[];

//              swing_mode?: string;
//              swing_modes?: string[];

//               aux_heat?: "on" | "off";

//          ],

//export type HvacMode =
//   | "off"
//   | "heat"
//   | "cool"
//   | "heat_cool"
//   | "auto"
//   | "dry"
//   | "fan_only";

//   auto: 1,
//   heat_cool: 2,
//   heat: 3,
//   cool: 4,
//   dry: 5,
//   fan_only: 6,
//   off: 7,

// reports state?
// export type HvacAction = "off" | "heating" | "cooling" | "drying" | "idle";

// Build in presets:
// ECO	Device is running an energy-saving mode
// AWAY	Device is in away mode
// BOOST	Device turn all valve full up
// COMFORT	Device is in comfort mode
// HOME	Device is in home mode
// SLEEP	Device is prepared for sleep
// ACTIVITY	Device is reacting to activity (e.g. movement sensors)


// Supported Features:
const CLIMATE_SUPPORT_TARGET_TEMPERATURE = 1;
//const CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE = 2;
//const CLIMATE_SUPPORT_TARGET_HUMIDITY = 4;
const CLIMATE_SUPPORT_FAN_MODE = 8;
const CLIMATE_SUPPORT_PRESET_MODE = 16;
const CLIMATE_SUPPORT_SWING_MODE = 32;
//const CLIMATE_SUPPORT_AUX_HEAT = 64;

exports.supportedFlags = {
    CLIMATE_SUPPORT_TARGET_TEMPERATURE,
    CLIMATE_SUPPORT_FAN_MODE,
    CLIMATE_SUPPORT_PRESET_MODE,
    CLIMATE_SUPPORT_SWING_MODE
};

//              commands:
//

exports.processThermostatOrAirConditioning = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'climate', forcedEntityId);

    const states = {};
    let entityTemp;
    let entityHum;
    const tempId = 'sensor.' + entity.entity_id.split('.')[1] + '_Temperature';
    const humId = 'sensor.' + entity.entity_id.split('.')[1] + '_Humidity';
    for (const state of control.states) {
        if (state && state.id) {
            switch(state.name) {
                case 'SET': //target temperature -> required.
                    states.temperature = state.id;
                    break;
                case 'MODE': //required for AC
                    states.hvac_mode = state.id; //will also set state, if no Power.
                    break;
                case 'POWER':
                    states.state = state.id; //will also set hvac_mode if no mode.
                    break;
                case 'HUMIDITY': //humidity:
                    states.current_humidity = state.id;
                    entityHum = processSensors.createHumiditySensor(state.id, name, func, room, _obj,objects, humId);
                    break;
                case 'ACTUAL':
                    //current temperature:
                    //-> also detect sensor entity for temperature
                    states.current_temperature = state.id;
                    entityTemp = processSensors.createTemperatureSensor(state.id, name, func, room, _obj, objects, tempId);
                    break;
                case 'BOOST':
                    states.preset_mode = state.id;
                    states.boost = state.id;
                    break;
                case 'PARTY':
                    states.preset_mode = state.id;
                    states.party = state.id;
                    break;
                case 'SPEED': //-> fan mode
                    states.fan_mode = state.id;
                    break;
                case 'SWING':
                    states.swing_mode = state.id;
                    break;
                default:
                    if (!['WORKING', 'UNREACH', 'LOWBAT', 'MAINTAIN', 'ERROR'].includes(state.name)) {
                        adapterData.log.info(`Unknown state ${state.name} while creating climate entity for ${id}. Please report.`);
                    }
            }
        }
    }

    fillClimateEntityFromStates(states, objects, entity, control.type);
    return [entity, entityHum, entityTemp];
};

/**
 * Create manual climate entity.
 * @param id - id of "main" object, i.e. state.
 * @param obj - iobroker object of id param
 * @param entity - already created entity
 * @param objects - id object cache
 * @param custom - custom part of object
 * @returns {Promise<[entity]>}
 */
exports.processManualEntity = async function(id, obj, entity, objects, custom) {
    const states = custom.states || {
        temperature: id
    };

    fillClimateEntityFromStates(states, objects, entity);
    return [entity];
};

/**
 * Implement attribue and state parsing for climate entities.
 * @param states
 * @param objects
 * @param entity
 * @param iobType
 */
function fillClimateEntityFromStates(states, objects, entity, iobType) {
    utils.fillEntityFromStates(states, entity);

    entity.attributes.supported_features = CLIMATE_SUPPORT_TARGET_TEMPERATURE;

    entity.context.COMMANDS = [];
    //add set_hvac_mode command -> used by lovelace to control mode & on/off.
    if (states.state || states.hvac_mode) {
        entity.context.COMMANDS.push({
            service: 'set_hvac_mode',
            setId: states.hvac_mode || states.state,
            parseCommand: async (entity, command, data, user) => {
                const hvac_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'hvac_mode');
                let value = data.service_data.hvac_mode;
                if (entity.context.STATE.setId) { //on & off is done with power state in ioBroker
                    await adapterData.adapter.setForeignStateAsync(entity.context.STATE.setId, value !== 'off', false, {user});
                }

                if (hvac_attr) {
                    value = hvac_attr.lovelaceToIob[value] !== undefined ? hvac_attr.lovelaceToIob[value] : value;
                    await adapterData.adapter.setForeignStateAsync(hvac_attr.setId, value, false, {user});
                }

                entity.attributes.hvac_action = undefined;
            }
        });
    }

    //displays temperature.
    if (states.current_temperature) {
        const obj = objects[states.current_temperature];
        if (obj && obj.common && obj.common.unit) {
            entity.attributes.unit_of_measurement = obj.common.unit;
        }
    }

    //controls hvac_mode which can be 'off' but not 'on', so translate 'on' to heat / cool depending on type.
    if (states.state || states.stateRead) {
        if (!states.hvac_mode) {
            if (iobType === typeDetector.Types.airCondition) {
                entity.attributes.hvac_modes = ['off', 'cool'];
            } else {
                entity.attributes.hvac_modes = ['off', 'heat'];
            }
        }
        entity.context.STATE.getParser = function (entity, attr, state) {
            state = state || {val: null};
            entity.context.iobPower = state.val;
            const target = state.val ? (iobType === typeDetector.Types.airCondition ? 'cool' : 'heat') : 'off';
            const hvac_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'hvac_mode');
            if (hvac_attr) {
                if (!state.val) {
                    entity.attributes.hvac_mode = 'off'; //overwrite mode only if is 'off' or should be set to 'off'.
                } else {
                    if (entity.context.iobMode !== undefined) {
                        entity.attributes.hvac_mode = hvac_attr.iobToLovelace[entity.context.iobMode] || entity.context.iobMode;
                    } else {
                        adapterData.log.warn(`No mode for ${entity.entity_id} received, yet. Asking database. Will delay update.`);
                        //never did get iobMode?? -> retrieve.
                        adapterData.adapter.getForeignState(hvac_attr.getId, s => {
                            const val = s ? s.val : null;
                            if (entity.context.iobMode === undefined) {
                                entity.context.iobMode = val;
                                const target = hvac_attr.iobToLovelace[val] || val || (iobType === typeDetector.Types.airCondition ? 'cool' : 'heat');
                                entity.state = target;
                                entity.attributes.hvac_mode = target;
                            }
                        });
                    }
                }
            } else {
                entity.attributes.hvac_mode = target;
            }
            entity.state = entity.attributes.hvac_mode;
            entity.attributes.hvac_action = undefined;
        };
        entity.context.STATE.historyParser = (id, val) => {
            return val ? iobType === typeDetector.Types.airCondition ? 'cool' : 'heat' : 'off';
        };
    }

    //mode is main setting of operation!!
    if (states.hvac_mode) {
        //iob default modes for AC: {0: 'OFF', 1: 'AUTO', 2: 'COOL', 3: 'HEAT', 4: 'ECO', 5: 'FAN_ONLY', 6: 'DRY'} -> matches quite well.
        //iob default modes for thermostat: {0: 'AUTO', 1: 'MANUAL'} -> does not match so well.. hm
        const hvac_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'hvac_mode');
        hvac_attr.setId = states.hvac_mode;
        const obj = objects[hvac_attr.getId];
        if (obj && obj.common && obj.common.states) {
            entity.attributes.hvac_modes = entity.attributes.hvac_modes || [];
            //create translation of modes:
            hvac_attr.iobToLovelace = obj.common.states;
            hvac_attr.lovelaceToIob = {};
            for (const key of Object.keys(obj.common.states)) {
                const mode = obj.common.states[key];
                entity.attributes.hvac_modes.push(mode.toLowerCase());
                hvac_attr.lovelaceToIob[mode.toLowerCase()] = parseInt(key, 10); //need number!
                hvac_attr.iobToLovelace[key] = mode.toLowerCase(); //make sure case is right, here.
            }
        } else {
            //we don't know anything -> use lovelace default..
            hvac_attr.lovelaceToIob = {'auto': 1, 'heat_cool': 2, 'heat': 3, 'cool': 4, 'dry': 5, 'fan_only': 6, 'off': 7};
            hvac_attr.iobToLovelace = {1: 'auto', 2: 'heat_cool', 3: 'heat', 4: 'cool', 5: 'dry', 6: 'fan_only', 7: 'off'};
            entity.attributes.hvac_modes = ['auto', 'heat_cool', 'heat', 'cool', 'dry', 'fan_only', 'off'];
        }
        if ((states.state || states.stateRead) && !entity.attributes.hvac_modes.includes('off')) {
            entity.attributes.hvac_modes.push('off');
        }
        hvac_attr.getParser = function (entity, attr, state) {
            state = state || {val: null};
            entity.context.iobMode = state.val;
            entity.attributes.hvac_mode = attr.iobToLovelace[state.val] || state.val;
            if (!state.val && ((states.state || states.stateRead) && entity.state === 'off')) {
                entity.attributes.hvac_mode = entity.state;
            } else {
                entity.state = entity.attributes.hvac_mode;
            }
            entity.attributes.hvac_action = undefined;
        };
        hvac_attr.historyParser = (id, val) => {
            return hvac_attr.iobToLovelace[val] || val;
        };
    }

    //preset mode:
    if (states.preset_mode) {
        entity.attributes.supported_features |= CLIMATE_SUPPORT_PRESET_MODE;
        //we have either boost or party -> set them as presets.
        entity.attributes.preset_mode = 'none';
        entity.attributes.preset_modes = ['none'];
        const boost_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'boost');
        if (boost_attr) {
            entity.attributes.preset_modes.push('boost');
            boost_attr.getParser = (entity, attr, state) => {
                const val = state ? state.val : null;
                entity.attributes.boost = val ? 'on' : 'off';
                entity.attributes.preset_mode = val ? 'boost' : entity.attributes.party === 'on' ? 'party' : 'none';
            };
            boost_attr.historyParser = (id, val) => val ? 'boost' : 'none';
        }
        const party_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'party');
        if (party_attr) {
            entity.attributes.preset_modes.push('party');
            party_attr.getParser = (entity, attr, state) => {
                const val = state ? state.val : null;
                entity.attributes.party = val ? 'on' : 'off';
                entity.attributes.preset_mode = val ? 'party' : entity.attributes.boost === 'on' ? 'boost' : 'none';
            };
            party_attr.historyParser = (id, val) => val ? 'party' : 'none';
        }
        const preset_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'preset_mode');
        if (preset_attr) {
            preset_attr.getId = undefined; //prevent direct preset_mode updates.
        }
        entity.context.COMMANDS.push({
            service: 'set_preset_mode',
            parseCommand: async (entity, command, data, user) => {
                const preset = data.service_data.preset_mode;
                let boostVal = false;
                let partyVal = false;
                if (preset === 'boost') {
                    boostVal = true;
                } else if (preset === 'party') {
                    partyVal = true;
                }
                if (party_attr) {
                    await adapterData.adapter.setForeignStateAsync(party_attr.getId, partyVal, false, {user});
                }
                if (boost_attr) {
                    await adapterData.adapter.setForeignStateAsync(boost_attr.getId, boostVal, false, {user});
                }
            }
        });
    }

    //swing: iob defaultStates: {0: 'AUTO', 1: 'HORIZONTAL', 2: 'STATIONARY', 3: 'VERTICAL'}
    // lovelace just presents modes in drop down -> show translated values.
    if (states.swing_mode) {
        entity.attributes.supported_features |= CLIMATE_SUPPORT_SWING_MODE;
        const swing_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'swing_mode');
        const swing_obj = objects[swing_attr.getId];
        if (swing_obj && swing_obj.common && swing_obj.common.states) {
            swing_attr.states = swing_obj.common.states;
            entity.attributes.swing_modes = Object.values(swing_attr.states);
        } else {
            swing_attr.states = {}; //as we don't know a translation, prevent errors later on.
            entity.attributes.swing_modes = [0, 1, 2, 3, 4, 5, 6, 7]; //add some modes to dropdown...
        }
        swing_attr.getParser = (entity, attr, state) => {
            const val = state ? state.val : null;
            entity.attributes.swing_mode = attr.states[val] !== undefined ? attr.states[val] : val;
        };
        swing_attr.historyParser = (id, val) => swing_attr.states[val] || val;
        entity.context.COMMANDS.push({
            service: 'set_swing_mode',
            parseCommand: async (entity, command, data, user) => {
                const mode = data.service_data.swing_mode;
                let val = parseInt(mode, 10);
                for (const key of Object.keys(swing_attr.states)) {
                    if (swing_attr.states[key] === mode) {
                        val = parseInt(key, 10);
                    }
                }
                await adapterData.adapter.setForeignStateAsync(swing_attr.getId, val, false, {user});
            }
        });
    }

    //fan_mode:  iob default states {0: 'AUTO', 1: 'HIGH', 2: 'LOW', 3: 'MEDIUM', 4: 'QUIET', 5: 'TURBO'},
    //lovace translated modes: "off", "on", "auto" -> others will just be added as is.. hm
    if (states.fan_mode) {
        entity.attributes.supported_features |= CLIMATE_SUPPORT_FAN_MODE;
        const fan_attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'fan_mode');
        const fan_obj = objects[fan_attr.getId];
        if (fan_obj && fan_obj.common && fan_obj.common.states) {
            fan_attr.states = fan_obj.common.states;
            entity.attributes.fan_modes = Object.values(fan_attr.states);
        } else {
            fan_attr.states = {}; //we don't know a thing..
            entity.attributes.fan_modes = [0, 1, 2, 3, 4, 5, 6, 7]; //add some modes to dropdown...
        }
        fan_attr.getParser = (entity, attr, state) => {
            const val = state ? state.val : null;
            entity.attributes.fan_mode = attr.states[val] !== undefined ? attr.states[val] : val;
        };
        fan_attr.historyParser = (id, val) => fan_attr.states[val] || val;
        entity.context.COMMANDS.push({
            service: 'set_fan_mode',
            parseCommand: async (entity, command, data, user) => {
                const mode = data.service_data.fan_mode;
                let val = parseInt(mode, 10);
                for (const key of Object.keys(fan_attr.states)) {
                    if (fan_attr.states[key] === mode) {
                        val = parseInt(key, 10);
                    }
                }
                await adapterData.adapter.setForeignStateAsync(fan_attr.getId, val, false, {user});
            }
        });
    }

    //hvac_action -> reports status, i.e. is heating in automatic mode
    if (states.hvac_action) {
        const obj = objects[states.hvac_action];
        const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'hvac_action');
        const type = obj ? obj.common ? obj.common.type ? obj.common.type : 'string' : 'string' : 'string';
        if (obj && obj.common) {
            if (type === 'number' && obj.common.states) {
                attr.states = obj.common.states;
            }
        }
        attr.getParser = (entity, attr, state) => {
            const val = state ? state.val : null;
            if (type === 'number' && attr.states) {
                entity.attributes.hvac_action = attr.historyParser(attr.getId, val);
            } else if (type === 'string') {
                entity.attributes.hvac_action = val;
            } else {
                entity.attributes.hvac_action = val ? iobType === typeDetector.Types.thermostat ? 'heating' : 'cooling' : 'idle';
            }

        };
        attr.historyParser = (id, val) => { return attr.states ? (attr.states[val] || val) : val; };
    }

    //defaults:
    entity.attributes.min_temp = 7;
    entity.attributes.max_temp = 35;
    entity.attributes.target_temp_step = 1;
    entity.attributes.min_humidity = 30;
    entity.attributes.max_humidity = 99;
    //try to get settings from temperature state:
    if (states.temperature) {
        entity.context.COMMANDS.push({
            service: 'set_temperature',
            setId: states.temperature,
            parseCommand: async (entity, command, data, user) => {
                if (data.service_data.temperature === undefined) {
                    adapterData.log.warn(`No temperature in service call for ${entity.entity_id}. Range not yet supported.`);
                }
                //works only if no temperature range is supported!
                await adapterData.adapter.setForeignStateAsync(command.setId, data.service_data.temperature, false, {user});
            }
        });

        if (objects[states.temperature] && objects[states.temperature].common) {
            if (!entity.attributes.unit_of_measurement && objects[states.temperature].common.unit) {
                entity.attributes.unit_of_measurement = objects[states.temperature].common.unit;
            }
            entity.attributes.min_temp = objects[states.temperature].common.min || 7;
            entity.attributes.max_temp = objects[states.temperature].common.max || 35;
            entity.attributes.target_temp_step = objects[states.temperature].common.step || 1;
        }
    }
}
