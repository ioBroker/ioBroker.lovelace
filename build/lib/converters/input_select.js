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
var input_select_exports = {};
__export(input_select_exports, {
  processManualEntity: () => processManualEntity
});
module.exports = __toCommonJS(input_select_exports);
const adapterData = require("../../../lib/dataSingleton");
async function fillInputSelectEntity(stateId, entity, objects) {
  var _a, _b, _c;
  const obj = (_a = objects[stateId]) != null ? _a : { common: { type: "string", states: [] } };
  const common = (_b = obj.common) != null ? _b : { type: "string" };
  if (!common.type) {
    common.type = "string";
  }
  entity.context.STATE.isNumber = common.type.toLowerCase() === "number";
  const rawStates = common.states;
  if (rawStates) {
    if (Array.isArray(rawStates)) {
      entity.context.STATE.isStringArray = true;
      entity.attributes.options = rawStates;
    } else if (typeof rawStates === "string") {
      adapterData.log.warn(
        `${String(obj._id)}: states is of type string. Problems might occur. Please fix states to be of type object.`
      );
      entity.context.STATE.map2lovelace = {};
      for (const kv of rawStates.split(";")) {
        const [key, value] = kv.split(":");
        entity.context.STATE.map2lovelace[key] = value;
      }
    } else {
      entity.context.STATE.map2lovelace = rawStates;
      entity.context.STATE.isNumber = common.type !== void 0 && common.type.toLowerCase() === "number";
      entity.attributes.options = Object.values(entity.context.STATE.map2lovelace);
    }
  } else {
    adapterData.log.warn(`${entity.entity_id} has no common.states. Options will be empty and issues will occur.`);
  }
  const currentState = await adapterData.adapter.getForeignStateAsync(stateId);
  if (currentState) {
    entity.attributes.initial = currentState.val;
    const map = entity.context.STATE.map2lovelace;
    if (map && map[currentState.val] !== void 0) {
      entity.attributes.initial = map[currentState.val];
    }
  }
  entity.context.STATE.getParser = (ent, _attr, iobState) => {
    var _a2, _b2, _c2;
    const s = iobState != null ? iobState : { val: null };
    ent.attributes.initial = (_a2 = s.val) != null ? _a2 : "unknown";
    const m = ent.context.STATE.map2lovelace;
    if (m) {
      ent.attributes.initial = (_c2 = (_b2 = m[s.val]) != null ? _b2 : s.val) != null ? _c2 : "unknown";
    }
    ent.state = ent.attributes.initial;
  };
  entity.context.COMMANDS = (_c = entity.context.COMMANDS) != null ? _c : [];
  entity.context.COMMANDS.push({
    service: "select_option",
    setId: entity.context.STATE.setId,
    parseCommand: async (ent, command, data, user) => {
      let target = data.service_data.option;
      if (!ent.context.STATE.isStringArray) {
        const map = ent.context.STATE.map2lovelace;
        if (map) {
          const found = Object.keys(map).find((key) => map[key] === target);
          if (found !== void 0) {
            target = found;
          }
        }
        if (!target && target !== 0) {
          target = data.service_data.option;
        }
        if (ent.context.STATE.isNumber) {
          target = Number(target);
        }
      }
      if (!target && target !== 0) {
        target = data.service_data.option;
      }
      return adapterData.adapter.setForeignStateAsync(command.setId, target, false, {
        user
      });
    }
  });
  entity.addID2entity(stateId);
}
async function processManualEntity(id, _obj, entity, objects, custom) {
  var _a, _b;
  const states = (_a = custom.states) != null ? _a : { state: id };
  const stateId = (_b = states.state) != null ? _b : id;
  await fillInputSelectEntity(stateId, entity, objects);
  return [entity];
}
adapterData.services.input_select = {
  select_option: {
    name: "Select",
    description: "Selects an option.",
    fields: {
      option: {
        required: true,
        example: '"Item A"',
        selector: { text: null },
        name: "Option",
        description: "Option to be selected."
      }
    },
    target: { entity: [{ domain: ["input_select"] }] }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  processManualEntity
});
//# sourceMappingURL=input_select.js.map
