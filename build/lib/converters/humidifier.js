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
var humidifier_exports = {};
__export(humidifier_exports, {
  HumidifierConverter: () => HumidifierConverter
});
module.exports = __toCommonJS(humidifier_exports);
var import_converter = __toESM(require("./converter"));
var import_humidifierEntity = require("../entities/humidifierEntity");
var import_syntheticControl = require("./syntheticControl");
const adapterData = require("../../../lib/dataSingleton");
class HumidifierConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    return [new import_humidifierEntity.HumidifierEntity(params)];
  }
}
import_syntheticControl.MANUAL_DOMAIN_CONVERTERS.humidifier = HumidifierConverter;
adapterData.services.humidifier = {
  turn_on: {
    name: "Turn on",
    description: "Turn the humidifier on.",
    fields: {},
    target: { entity: [{ domain: ["humidifier"] }] }
  },
  turn_off: {
    name: "Turn off",
    description: "Turn the humidifier off.",
    fields: {},
    target: { entity: [{ domain: ["humidifier"] }] }
  },
  set_humidity: {
    name: "Set humidity",
    description: "Set the target humidity.",
    fields: {
      humidity: {
        name: "Humidity",
        description: "Target humidity (%).",
        required: true,
        selector: { number: null }
      }
    },
    target: { entity: [{ domain: ["humidifier"] }] }
  },
  set_mode: {
    name: "Set mode",
    description: "Set the operation mode.",
    fields: {
      mode: { name: "Mode", description: "The mode to set.", required: true, selector: { text: null } }
    },
    target: { entity: [{ domain: ["humidifier"] }] }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HumidifierConverter
});
//# sourceMappingURL=humidifier.js.map
