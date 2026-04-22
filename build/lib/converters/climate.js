"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var climate_exports = {};
__export(climate_exports, {
  ClimateConverter: () => ClimateConverter,
  processManualEntity: () => processManualEntity,
  supportedFlags: () => supportedFlags
});
module.exports = __toCommonJS(climate_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_converter = __toESM(require("./converter"));
var import_utils = require("../entities/utils");
var import_sensor = require("./sensor");
const adapterData = require("../../../lib/dataSingleton");
const CLIMATE_SUPPORT_TARGET_TEMPERATURE = 1;
const CLIMATE_SUPPORT_FAN_MODE = 8;
const CLIMATE_SUPPORT_PRESET_MODE = 16;
const CLIMATE_SUPPORT_SWING_MODE = 32;
const supportedFlags = {
  CLIMATE_SUPPORT_TARGET_TEMPERATURE,
  CLIMATE_SUPPORT_FAN_MODE,
  CLIMATE_SUPPORT_PRESET_MODE,
  CLIMATE_SUPPORT_SWING_MODE
};
function translateModeNameForLovelace(modeNameIn) {
  const lower = modeNameIn.toLowerCase();
  switch (lower) {
    case "dehumid":
      return "dry";
    case "fan":
      return "fan_only";
    case "cold":
      return "cool";
    case "hot":
      return "heat";
    default:
      return lower;
  }
}
function fillClimateEntityFromStates(states, objects, entity, iobType) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
  (0, import_utils.fillEntityFromStates)(states, entity, objects);
  entity.attributes.supported_features = CLIMATE_SUPPORT_TARGET_TEMPERATURE;
  entity.context.COMMANDS = [];
  if (states.state || states.hvac_mode) {
    entity.context.COMMANDS.push({
      service: "set_hvac_mode",
      setId: (_a = states.hvac_mode) != null ? _a : states.state,
      parseCommand: async (ent, _command, data, user) => {
        var _a2, _b2, _c2;
        const hvac_attr = (_a2 = ent.context.ATTRIBUTES) == null ? void 0 : _a2.find((a) => a.attribute === "hvac_mode");
        const value = data.service_data.hvac_mode;
        if ((_b2 = ent.context.STATE) == null ? void 0 : _b2.setId) {
          await adapterData.adapter.setForeignStateAsync(ent.context.STATE.setId, value !== "off", false, {
            user
          });
        }
        if (hvac_attr) {
          const target = (_c2 = hvac_attr.lovelaceToIob) == null ? void 0 : _c2[value];
          if (target !== void 0) {
            await adapterData.adapter.setForeignStateAsync(
              hvac_attr.setId,
              target,
              false,
              { user }
            );
          }
        }
        ent.attributes.hvac_action = void 0;
        return void 0;
      }
    });
  }
  if (states.state || states.stateRead) {
    if (!entity.attributes.hvac_modes) {
      entity.attributes.hvac_modes = [];
    }
    entity.attributes.hvac_modes.push("off");
    if (!states.hvac_mode) {
      entity.attributes.hvac_modes.push(iobType === import_type_detector.Types.airCondition ? "cool" : "heat");
    }
    entity.context.STATE.getParser = (ent, _attrName, state) => {
      var _a2, _b2, _c2;
      const s = state != null ? state : { val: null };
      ent.context.iobPower = s.val;
      const target = s.val ? iobType === import_type_detector.Types.airCondition ? "cool" : "heat" : "off";
      const hvac_attr = (_a2 = ent.context.ATTRIBUTES) == null ? void 0 : _a2.find((a) => a.attribute === "hvac_mode");
      if (hvac_attr) {
        if (!s.val) {
          ent.attributes.hvac_mode = "off";
        } else {
          if (ent.context.iobMode !== void 0) {
            ent.attributes.hvac_mode = (_c2 = (_b2 = hvac_attr.iobToLovelace) == null ? void 0 : _b2[ent.context.iobMode]) != null ? _c2 : String(ent.context.iobMode);
          } else {
            adapterData.log.warn(
              `No mode for ${ent.entity_id} received, yet. Asking database. Will delay update.`
            );
            adapterData.adapter.getForeignStateAsync(hvac_attr.getId).then((stateVal) => {
              var _a3, _b3;
              const val = stateVal ? stateVal.val : null;
              if (ent.context.iobMode === void 0) {
                ent.context.iobMode = val;
                const resolved = (_b3 = (_a3 = hvac_attr.iobToLovelace) == null ? void 0 : _a3[val]) != null ? _b3 : iobType === import_type_detector.Types.airCondition ? "cool" : "heat";
                ent.state = resolved;
                ent.attributes.hvac_mode = resolved;
              }
            }).catch((e) => {
              adapterData.log.error(
                `Error fetching HVAC mode for ${ent.entity_id} during power state update: ${e}`
              );
            });
          }
        }
      } else {
        ent.attributes.hvac_mode = target;
      }
      ent.state = ent.attributes.hvac_mode;
      ent.attributes.hvac_action = void 0;
    };
    entity.context.STATE.historyParser = (_id, state) => {
      return (state == null ? void 0 : state.val) ? iobType === import_type_detector.Types.airCondition ? "cool" : "heat" : "off";
    };
  }
  if (states.hvac_mode) {
    const hvac_attr = (_b = entity.context.ATTRIBUTES) == null ? void 0 : _b.find((a) => a.attribute === "hvac_mode");
    if (hvac_attr) {
      hvac_attr.setId = states.hvac_mode;
      const obj = objects[hvac_attr.getId];
      if ((_c = obj == null ? void 0 : obj.common) == null ? void 0 : _c.states) {
        entity.attributes.hvac_modes = (_d = entity.attributes.hvac_modes) != null ? _d : [];
        const rawStates = obj.common.states;
        hvac_attr.iobToLovelace = { ...rawStates };
        hvac_attr.lovelaceToIob = {};
        for (const key of Object.keys(rawStates)) {
          const mode = rawStates[key];
          const modeName = translateModeNameForLovelace(mode);
          entity.attributes.hvac_modes.push(modeName);
          hvac_attr.lovelaceToIob[modeName] = parseInt(key, 10);
          hvac_attr.iobToLovelace[key] = modeName;
        }
      } else {
        hvac_attr.lovelaceToIob = { auto: 1, heat_cool: 2, heat: 3, cool: 4, dry: 5, fan_only: 6, off: 7 };
        hvac_attr.iobToLovelace = {
          1: "auto",
          2: "heat_cool",
          3: "heat",
          4: "cool",
          5: "dry",
          6: "fan_only",
          7: "off"
        };
        entity.attributes.hvac_modes = ["auto", "heat_cool", "heat", "cool", "dry", "fan_only", "off"];
      }
      if ((states.state || states.stateRead) && !entity.attributes.hvac_modes.includes("off")) {
        entity.attributes.hvac_modes.push("off");
      }
      hvac_attr.getParser = (ent, attr, state) => {
        var _a2, _b2;
        const s = state != null ? state : { val: null };
        ent.context.iobMode = s.val;
        ent.attributes.hvac_mode = (_b2 = (_a2 = attr.iobToLovelace) == null ? void 0 : _a2[s.val]) != null ? _b2 : String(s.val);
        if (!ent.context.iobPower && (states.state || states.stateRead) && ent.state === "off") {
          ent.attributes.hvac_mode = ent.state;
        } else {
          ent.state = ent.attributes.hvac_mode;
        }
        ent.attributes.hvac_action = void 0;
      };
      hvac_attr.historyParser = (_id, val) => {
        var _a2, _b2;
        return (_b2 = (_a2 = hvac_attr.iobToLovelace) == null ? void 0 : _a2[val]) != null ? _b2 : String(val);
      };
    }
  }
  if (states.preset_mode) {
    entity.attributes.supported_features = entity.attributes.supported_features | CLIMATE_SUPPORT_PRESET_MODE;
    entity.attributes.preset_mode = "none";
    entity.attributes.preset_modes = ["none"];
    const boost_attr = (_e = entity.context.ATTRIBUTES) == null ? void 0 : _e.find((a) => a.attribute === "boost");
    if (boost_attr) {
      entity.attributes.preset_modes.push("boost");
      boost_attr.getParser = (ent, _attr, state) => {
        const val = state ? state.val : null;
        ent.attributes.boost = val ? "on" : "off";
        ent.attributes.preset_mode = val ? "boost" : ent.attributes.party === "on" ? "party" : "none";
      };
      boost_attr.historyParser = (_id, val) => val ? "boost" : "none";
    }
    const party_attr = (_f = entity.context.ATTRIBUTES) == null ? void 0 : _f.find((a) => a.attribute === "party");
    if (party_attr) {
      entity.attributes.preset_modes.push("party");
      party_attr.getParser = (ent, _attr, state) => {
        const val = state ? state.val : null;
        ent.attributes.party = val ? "on" : "off";
        ent.attributes.preset_mode = val ? "party" : ent.attributes.boost === "on" ? "boost" : "none";
      };
      party_attr.historyParser = (_id, val) => val ? "party" : "none";
    }
    const preset_attr = (_g = entity.context.ATTRIBUTES) == null ? void 0 : _g.find((a) => a.attribute === "preset_mode");
    if (preset_attr) {
      preset_attr.getId = null;
    }
    entity.context.COMMANDS.push({
      service: "set_preset_mode",
      parseCommand: async (_ent, _command, data, user) => {
        const preset = data.service_data.preset_mode;
        const boostVal = preset === "boost";
        const partyVal = preset === "party";
        const promises = [];
        if (party_attr == null ? void 0 : party_attr.getId) {
          promises.push(
            adapterData.adapter.setForeignStateAsync(party_attr.getId, partyVal, false, { user })
          );
        }
        if (boost_attr == null ? void 0 : boost_attr.getId) {
          promises.push(
            adapterData.adapter.setForeignStateAsync(boost_attr.getId, boostVal, false, { user })
          );
        }
        return Promise.all(promises);
      }
    });
  }
  if (states.swing_mode) {
    entity.attributes.supported_features = entity.attributes.supported_features | CLIMATE_SUPPORT_SWING_MODE;
    const swing_attr = (_h = entity.context.ATTRIBUTES) == null ? void 0 : _h.find((a) => a.attribute === "swing_mode");
    if (swing_attr) {
      const swing_obj = objects[swing_attr.getId];
      const swingCommon = (_i = swing_obj == null ? void 0 : swing_obj.common) != null ? _i : {};
      if (swingCommon.type === "boolean") {
        swing_attr.isBoolean = true;
        swing_attr.states = { false: "off", true: "on" };
        entity.attributes.swing_modes = ["off", "on"];
      } else if ((_j = swing_obj == null ? void 0 : swing_obj.common) == null ? void 0 : _j.states) {
        swing_attr.states = swing_obj.common.states;
        entity.attributes.swing_modes = Object.values(swing_attr.states);
      } else {
        swing_attr.states = {};
        entity.attributes.swing_modes = [0, 1, 2, 3, 4, 5, 6, 7];
      }
      swing_attr.getParser = (ent, attr, state) => {
        const val = state ? state.val : null;
        ent.attributes.swing_mode = attr.states && attr.states[val] !== void 0 ? attr.states[val] : val;
      };
      swing_attr.historyParser = (_id, val) => {
        return String(
          swing_attr.states && swing_attr.states[val] !== void 0 ? swing_attr.states[val] : val
        );
      };
      entity.context.COMMANDS.push({
        service: "set_swing_mode",
        parseCommand: async (ent, _command, data, user) => {
          var _a2;
          const mode = data.service_data.swing_mode;
          const swingAttr = (_a2 = ent.context.ATTRIBUTES) == null ? void 0 : _a2.find((a) => a.attribute === "swing_mode");
          let val;
          if (swingAttr && swingAttr.getId) {
            if (swingAttr == null ? void 0 : swingAttr.isBoolean) {
              val = mode === "on";
            } else {
              val = parseInt(mode, 10);
              if (swingAttr.states) {
                for (const key of Object.keys(swingAttr.states)) {
                  if (swingAttr.states[key] === mode) {
                    val = parseInt(key, 10);
                  }
                }
              }
            }
            return adapterData.adapter.setForeignStateAsync(swingAttr.getId, val, false, { user });
          }
        }
      });
    }
  }
  if (states.fan_mode) {
    entity.attributes.supported_features = entity.attributes.supported_features | CLIMATE_SUPPORT_FAN_MODE;
    const fan_attr = (_k = entity.context.ATTRIBUTES) == null ? void 0 : _k.find((a) => a.attribute === "fan_mode");
    if (fan_attr) {
      const fan_obj = objects[fan_attr.getId];
      if ((_l = fan_obj == null ? void 0 : fan_obj.common) == null ? void 0 : _l.states) {
        fan_attr.states = fan_obj.common.states;
        entity.attributes.fan_modes = Object.values(fan_attr.states);
      } else {
        fan_attr.states = {};
        entity.attributes.fan_modes = [0, 1, 2, 3, 4, 5, 6, 7];
      }
      fan_attr.getParser = (ent, attr, state) => {
        const val = state ? state.val : null;
        ent.attributes.fan_mode = attr.states && attr.states[val] !== void 0 ? attr.states[val] : val;
      };
      fan_attr.historyParser = (_id, val) => {
        return String(
          fan_attr.states && fan_attr.states[val] !== void 0 ? fan_attr.states[val] : val
        );
      };
      entity.context.COMMANDS.push({
        service: "set_fan_mode",
        parseCommand: async (ent, _command, data, user) => {
          var _a2;
          const mode = data.service_data.fan_mode;
          const fanAttr = (_a2 = ent.context.ATTRIBUTES) == null ? void 0 : _a2.find((a) => a.attribute === "fan_mode");
          let val = parseInt(mode, 10);
          if (fanAttr && fanAttr.getId) {
            if (fanAttr.states) {
              for (const key of Object.keys(fanAttr.states)) {
                if (fanAttr.states[key] === mode) {
                  val = parseInt(key, 10);
                }
              }
            }
            return adapterData.adapter.setForeignStateAsync(fanAttr.getId, val, false, { user });
          }
        }
      });
    }
  }
  if (states.hvac_action) {
    const actionObj = objects[states.hvac_action];
    const actionAttr = (_m = entity.context.ATTRIBUTES) == null ? void 0 : _m.find((a) => a.attribute === "hvac_action");
    if (actionAttr) {
      const actionCommon = (_n = actionObj == null ? void 0 : actionObj.common) != null ? _n : {};
      const type = (_o = actionCommon.type) != null ? _o : "string";
      if (type === "number" && actionCommon.states) {
        actionAttr.states = actionCommon.states;
      }
      actionAttr.getParser = (ent, attr, state) => {
        const val = state ? state.val : null;
        if (type === "number" && attr.states) {
          ent.attributes.hvac_action = attr.historyParser ? attr.historyParser(attr.getId, val) : String(val);
        } else if (type === "string") {
          ent.attributes.hvac_action = translateModeNameForLovelace(String(val));
        } else {
          ent.attributes.hvac_action = val ? iobType === import_type_detector.Types.thermostat ? "heating" : "cooling" : "idle";
        }
      };
      actionAttr.historyParser = (_id, val) => {
        return translateModeNameForLovelace(
          String(
            actionAttr.states && actionAttr.states[val] !== void 0 ? actionAttr.states[val] : val
          )
        );
      };
    }
  }
  if (!entity.attributes.hvac_modes) {
    entity.attributes.hvac_modes = [iobType === import_type_detector.Types.airCondition ? "cool" : "heat"];
  }
  entity.attributes.min_temp = 7;
  entity.attributes.max_temp = 35;
  entity.attributes.target_temp_step = 1;
  entity.attributes.min_humidity = 30;
  entity.attributes.max_humidity = 99;
  if (states.temperature) {
    entity.context.COMMANDS.push({
      service: "set_temperature",
      setId: states.temperature,
      parseCommand: async (_ent, command, data, user) => {
        const sd = data.service_data;
        if (sd.temperature === void 0) {
          adapterData.log.warn(
            `No temperature in service call for ${_ent.entity_id}. Range not yet supported.`
          );
        }
        return adapterData.adapter.setForeignStateAsync(
          command.setId,
          sd.temperature,
          false,
          { user }
        );
      }
    });
    const tempObj = objects[states.temperature];
    const tempCommon = (_p = tempObj == null ? void 0 : tempObj.common) != null ? _p : {};
    if (tempCommon) {
      entity.attributes.min_temp = (_q = tempCommon.min) != null ? _q : 7;
      entity.attributes.max_temp = (_r = tempCommon.max) != null ? _r : 35;
      entity.attributes.target_temp_step = (_s = tempCommon.step) != null ? _s : 1;
    }
  }
}
class ClimateConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    var _a;
    const { controls, objects, forcedEntityId, friendlyName, room, func } = params;
    const entity = (0, import_utils.processCommon)(friendlyName, room, func, objects[params.id], "climate", forcedEntityId);
    const states = {};
    let entityTemp;
    let entityHum;
    const baseName = entity.entity_id.split(".")[1];
    const tempId = `sensor.${baseName}_Temperature`;
    const humId = `sensor.${baseName}_Humidity`;
    for (const state of controls.states) {
      if (state == null ? void 0 : state.id) {
        switch (state.name) {
          case "SET":
            states.temperature = state.id;
            break;
          case "MODE":
            states.hvac_mode = state.id;
            break;
          case "POWER":
            states.state = state.id;
            break;
          case "HUMIDITY":
            states.current_humidity = state.id;
            entityHum = (0, import_sensor.createHumiditySensor)(state.id, friendlyName, room, func, objects[params.id], humId);
            break;
          case "ACTUAL":
            states.current_temperature = state.id;
            entityTemp = (0, import_sensor.createTemperatureSensor)(
              state.id,
              friendlyName,
              room,
              func,
              objects[params.id],
              tempId
            );
            break;
          case "BOOST":
            states.preset_mode = state.id;
            states.boost = state.id;
            break;
          case "PARTY":
            states.preset_mode = state.id;
            states.party = state.id;
            break;
          case "SPEED":
            states.fan_mode = state.id;
            break;
          case "SWING":
            states.swing_mode = state.id;
            break;
          default:
            if (!["WORKING", "UNREACH", "LOWBAT", "MAINTAIN", "ERROR"].includes((_a = state.name) != null ? _a : "")) {
              adapterData.log.info(
                `Unknown state ${state.name} while creating climate entity for ${params.id}. Please report.`
              );
            }
        }
      }
    }
    fillClimateEntityFromStates(states, objects, entity, controls.type);
    const result = [entity];
    if (entityHum) {
      result.push(entityHum);
    }
    if (entityTemp) {
      result.push(entityTemp);
    }
    return result;
  }
}
import_converter.default.converters[import_type_detector.Types.thermostat] = ClimateConverter;
import_converter.default.converters[import_type_detector.Types.airCondition] = ClimateConverter;
function processManualEntity(id, _obj, entity, objects, custom) {
  var _a;
  const states = (_a = custom.states) != null ? _a : { temperature: id };
  fillClimateEntityFromStates(states, objects, entity);
  return [entity];
}
adapterData.services.climate = {
  set_temperature: {
    name: "Set temperature",
    description: "Sets the temperature of a climate entity.",
    fields: {
      temperature: {
        required: true,
        selector: { number: null },
        name: "Temperature",
        description: "The target temperature to set."
      }
    },
    target: { entity: [{ domain: ["climate"] }] }
  },
  set_hvac_mode: {
    name: "Set HVAC mode",
    description: "Sets the HVAC mode of a climate entity.",
    fields: {
      hvac_mode: {
        required: true,
        selector: {
          select: {
            options: ["off", "heat", "cool", "auto", "dry", "fan_only"],
            translation_key: "hvac_mode"
          }
        },
        name: "HVAC mode",
        description: "The target HVAC mode to set."
      }
    },
    target: { entity: [{ domain: ["climate"] }] }
  },
  set_preset_mode: {
    name: "Set preset mode",
    description: "Sets the preset mode of a climate entity.",
    fields: {
      preset_mode: {
        required: true,
        selector: {
          select: { options: ["boost", "party"], translation_key: "preset_mode" }
        },
        name: "Preset mode",
        description: "The target preset mode to set."
      }
    },
    target: { entity: [{ domain: ["climate"] }] }
  },
  set_swing_mode: {
    name: "Set swing mode",
    description: "Sets the swing mode of a climate entity.",
    fields: {
      swing_mode: {
        required: true,
        selector: {
          select: { options: ["off", "on"], translation_key: "swing_mode" }
        },
        name: "Swing mode",
        description: "The target swing mode to set."
      }
    },
    target: { entity: [{ domain: ["climate"] }] }
  },
  set_fan_mode: {
    name: "Set fan mode",
    description: "Sets the fan mode of a climate entity.",
    fields: {
      preset_mode: {
        required: true,
        selector: { number: null },
        name: "Preset mode",
        description: "The target preset mode to set."
      }
    },
    target: { entity: [{ domain: ["climate"] }] }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ClimateConverter,
  processManualEntity,
  supportedFlags
});
//# sourceMappingURL=climate.js.map
