"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var fan_exports = {};
__export(fan_exports, {
  processManualEntity: () => processManualEntity
});
module.exports = __toCommonJS(fan_exports);
var import_utils = require("../entities/utils");
const adapterData = require("../../../lib/dataSingleton");
function augmentPresetMode(presetModeId, stateId, entity, objects) {
  var _a, _b, _c;
  const attr = (_a = entity.context.ATTRIBUTES) == null ? void 0 : _a.find((a) => a.attribute === "preset_mode");
  if (!attr) {
    return;
  }
  const rawObj = objects[presetModeId];
  const obj = rawObj != null ? rawObj : { common: { type: "number", states: { 0: "off", 1: "low", 2: "medium", 3: "high" } } };
  const common = (_b = obj.common) != null ? _b : {};
  if (!common.type) {
    common.type = "number";
  }
  if (!common.states) {
    common.states = { 0: "off", 1: "low", 2: "medium", 3: "high" };
  }
  const rawStates = common.states;
  if (rawStates) {
    if (Array.isArray(rawStates)) {
      attr.isStringArray = true;
      entity.attributes.preset_modes = rawStates;
    } else if (typeof rawStates === "string") {
      adapterData.log.warn(
        `${String(obj._id)}: states is of type string. Problems might occur. Please fix states to be of type object.`
      );
      attr.map2lovelace = {};
      for (const kv of rawStates.split(";")) {
        const [key, value] = kv.split(":");
        attr.map2lovelace[key] = value;
      }
    } else {
      attr.map2lovelace = rawStates;
      attr.isNumber = common.type !== void 0 && common.type.toLowerCase() === "number";
      attr.map2iob = {};
      entity.attributes.preset_modes = [];
      for (const k of Object.keys(attr.map2lovelace)) {
        attr.map2iob[String(attr.map2lovelace[k])] = k;
        entity.attributes.preset_modes.push(String(attr.map2lovelace[k]));
      }
    }
  }
  attr.getParser = (ent, a, iobState) => {
    var _a2, _b2, _c2;
    const s = iobState != null ? iobState : { val: null };
    const speed = a.map2lovelace ? (_b2 = (_a2 = a.map2lovelace[s.val]) != null ? _a2 : s.val) != null ? _b2 : "unknown" : (_c2 = s.val) != null ? _c2 : "unknown";
    ent.attributes.speed = speed;
    ent.attributes.preset_mode = speed;
    ent.state = speed !== "off" ? "on" : "off";
  };
  entity.context.COMMANDS = (_c = entity.context.COMMANDS) != null ? _c : [];
  const executePresetChange = async (ent, command, targetValue, user) => {
    let target = targetValue;
    if (!attr.isStringArray) {
      if (attr.map2iob) {
        const mapped = attr.map2iob[String(target)];
        if (mapped !== void 0) {
          target = mapped;
        }
      }
      if (attr.isNumber) {
        target = Number(target);
      }
    }
    if (!target && target !== 0) {
      target = targetValue;
    }
    return adapterData.adapter.setForeignStateAsync(command.setId, target, false, { user });
  };
  entity.context.COMMANDS.push({
    service: "set_speed",
    setId: presetModeId,
    parseCommand: async (ent, command, data, user) => {
      var _a2;
      const sd = data.service_data;
      return executePresetChange(ent, command, (_a2 = sd.speed) != null ? _a2 : sd.preset_mode, user);
    }
  });
  entity.context.COMMANDS.push({
    service: "set_preset_mode",
    setId: presetModeId,
    parseCommand: async (ent, command, data, user) => {
      var _a2;
      const sd = data.service_data;
      return executePresetChange(ent, command, (_a2 = sd.speed) != null ? _a2 : sd.preset_mode, user);
    }
  });
  entity.context.COMMANDS.push({
    service: "turn_off",
    setId: presetModeId,
    parseCommand: async (ent, command, _data, user) => {
      await executePresetChange(ent, command, "off", user);
      if (stateId) {
        await adapterData.adapter.setForeignStateAsync(stateId, false, false, { user });
      }
      return void 0;
    }
  });
}
function processManualEntity(id, _obj, entity, objects, custom) {
  var _a, _b;
  const states = (_a = custom.states) != null ? _a : { preset_mode: id };
  if (!states.preset_mode) {
    states.preset_mode = (_b = states.speed) != null ? _b : id;
  }
  delete states.speed;
  (0, import_utils.fillEntityFromStates)(states, entity, objects);
  if (states.preset_mode) {
    augmentPresetMode(states.preset_mode, states.state, entity, objects);
  }
  return new Promise(() => [entity]);
}
adapterData.services.fan = {
  set_speed: {
    name: "Set speed",
    description: "Set the speed of the fan.",
    fields: {
      speed: {
        description: "The speed to set as number.",
        required: true,
        selector: { number: null }
      }
    },
    target: { entity: [{ domain: ["fan"] }] }
  },
  set_preset_mode: {
    name: "Set preset mode",
    description: "Set the preset mode of the fan.",
    fields: {
      preset_mode: {
        description: "The preset mode to set.",
        example: "low",
        selector: { type: "select", options: ["low", "medium", "high", "off"] }
      }
    },
    target: { entity: [{ domain: ["fan"] }] }
  },
  turn_off: {
    name: "Turn off",
    description: "Turns a fan off.",
    fields: {},
    target: { entity: [{ domain: ["fan"] }] }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  processManualEntity
});
//# sourceMappingURL=fan.js.map
