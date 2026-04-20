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
var switch_exports = {};
__export(switch_exports, {
  SwitchConverter: () => SwitchConverter
});
module.exports = __toCommonJS(switch_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_converter = __toESM(require("./converter"));
var import_utils = require("../entities/utils");
const adapterData = require("../../../lib/dataSingleton");
class SwitchConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    const { controls, objects, forcedEntityId, friendlyName, room, func } = params;
    const entity = (0, import_utils.processCommon)(friendlyName, room, func, objects[params.id], "switch", forcedEntityId);
    entity.context.STATE = { setId: null, getId: null };
    let state = controls.states.find((s) => s.id && s.name === "SET");
    if (state == null ? void 0 : state.id) {
      entity.context.STATE.setId = state.id;
      entity.context.STATE.getId = state.id;
      if (controls.type === import_type_detector.Types.socket) {
        entity.attributes.icon = "mdi:power-socket-eu";
        entity.attributes.device_class = "outlet";
      } else {
        entity.attributes.device_class = "switch";
      }
      (0, import_utils.addID2entity)(state.id, entity);
    }
    state = controls.states.find((s) => s.id && s.name === "ACTUAL");
    if (state == null ? void 0 : state.id) {
      if (!state.id.startsWith("zigbee.") || !state.id.endsWith(".available") || !state.id.endsWith(".device_query")) {
        entity.context.STATE.getId = state.id;
        (0, import_utils.addID2entity)(state.id, entity);
      }
    }
    return [entity];
  }
}
import_converter.default.converters[import_type_detector.Types.socket] = SwitchConverter;
import_converter.default.converters[import_type_detector.Types.button] = SwitchConverter;
adapterData.services.switch = {
  turn_off: {
    name: "Turn off",
    description: "Turns a switch off.",
    fields: {},
    target: { entity: [{ domain: ["switch"] }] }
  },
  turn_on: {
    name: "Turn on",
    description: "Turns a switch on.",
    fields: {},
    target: { entity: [{ domain: ["switch"] }] }
  },
  toggle: {
    name: "Toggle",
    description: "Toggles a switch on/off.",
    fields: {},
    target: { entity: [{ domain: ["switch"] }] }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SwitchConverter
});
//# sourceMappingURL=switch.js.map
