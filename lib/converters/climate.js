const processSensors = require('./sensor');
const utils          = require('./utils');
const adapterData    = require('./../dataSingleton');

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
// export const CLIMATE_SUPPORT_TARGET_TEMPERATURE = 1;
// export const CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE = 2;
// export const CLIMATE_SUPPORT_TARGET_HUMIDITY = 4;
// export const CLIMATE_SUPPORT_FAN_MODE = 8;
// export const CLIMATE_SUPPORT_PRESET_MODE = 16;
// export const CLIMATE_SUPPORT_SWING_MODE = 32;
// export const CLIMATE_SUPPORT_AUX_HEAT = 64;


//              commands:
//

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

