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
var water_heater_exports = {};
__export(water_heater_exports, {
  WaterHeaterConverter: () => WaterHeaterConverter
});
module.exports = __toCommonJS(water_heater_exports);
var import_converter = __toESM(require("./converter"));
var import_waterHeaterEntity = require("../entities/waterHeaterEntity");
var import_syntheticControl = require("./syntheticControl");
const adapterData = require("../../../lib/dataSingleton");
class WaterHeaterConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    return [new import_waterHeaterEntity.WaterHeaterEntity(params)];
  }
}
import_syntheticControl.MANUAL_DOMAIN_CONVERTERS.water_heater = WaterHeaterConverter;
adapterData.services.water_heater = {
  turn_on: {
    name: "Turn on",
    description: "Turn the water heater on.",
    fields: {},
    target: { entity: [{ domain: ["water_heater"] }] }
  },
  turn_off: {
    name: "Turn off",
    description: "Turn the water heater off.",
    fields: {},
    target: { entity: [{ domain: ["water_heater"] }] }
  },
  set_temperature: {
    name: "Set temperature",
    description: "Set the target temperature.",
    fields: {
      temperature: {
        name: "Temperature",
        description: "Target temperature.",
        required: true,
        selector: { number: null }
      }
    },
    target: { entity: [{ domain: ["water_heater"] }] }
  },
  set_operation_mode: {
    name: "Set operation mode",
    description: "Set the operation mode.",
    fields: {
      operation_mode: {
        name: "Operation mode",
        description: "The operation mode to set.",
        required: true,
        selector: { text: null }
      }
    },
    target: { entity: [{ domain: ["water_heater"] }] }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WaterHeaterConverter
});
//# sourceMappingURL=water_heater.js.map
