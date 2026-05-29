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
  SwitchConverter: () => SwitchConverter,
  processManualEntity: () => processManualEntity
});
module.exports = __toCommonJS(switch_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_converter = __toESM(require("./converter"));
var import_switchEntity = require("../entities/switchEntity");
const adapterData = require("../../../lib/dataSingleton");
class SwitchConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    return [new import_switchEntity.SwitchEntity(params)];
  }
}
function processManualEntity(_id, obj, entity, _objects, custom) {
  var _a, _b;
  const common = obj.common;
  entity.attributes.assumed_state = (_b = (_a = custom.attr_assumed_state) != null ? _a : custom.assumed_state) != null ? _b : !!common && !common.read;
  return [entity];
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
  SwitchConverter,
  processManualEntity
});
//# sourceMappingURL=switch.js.map
