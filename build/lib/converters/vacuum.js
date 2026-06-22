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
var vacuum_exports = {};
__export(vacuum_exports, {
  VacuumConverter: () => VacuumConverter
});
module.exports = __toCommonJS(vacuum_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_converter = __toESM(require("./converter"));
var import_vacuumEntity = require("../entities/vacuumEntity");
const adapterData = require("../../../lib/dataSingleton");
class VacuumConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    return [new import_vacuumEntity.VacuumEntity(params)];
  }
}
import_converter.default.converters[import_type_detector.Types.vacuumCleaner] = VacuumConverter;
adapterData.services.vacuum = {
  start: {
    name: "Start",
    description: "Start or resume the cleaning task.",
    fields: {},
    target: { entity: [{ domain: ["vacuum"] }] }
  },
  pause: {
    name: "Pause",
    description: "Pause the cleaning task.",
    fields: {},
    target: { entity: [{ domain: ["vacuum"] }] }
  },
  stop: {
    name: "Stop",
    description: "Stop the current cleaning task.",
    fields: {},
    target: { entity: [{ domain: ["vacuum"] }] }
  },
  return_to_base: {
    name: "Return to dock",
    description: "Tell the vacuum to return to its dock.",
    fields: {},
    target: { entity: [{ domain: ["vacuum"] }] }
  },
  locate: {
    name: "Locate",
    description: "Locate the vacuum cleaner robot.",
    fields: {},
    target: { entity: [{ domain: ["vacuum"] }] }
  },
  clean_spot: {
    name: "Clean spot",
    description: "Tell the vacuum to do a spot clean-up.",
    fields: {},
    target: { entity: [{ domain: ["vacuum"] }] }
  },
  set_fan_speed: {
    name: "Set fan speed",
    description: "Set the fan speed of the vacuum.",
    fields: {
      fan_speed: {
        description: "The fan speed to set.",
        required: true,
        example: "high",
        selector: { text: null }
      }
    },
    target: { entity: [{ domain: ["vacuum"] }] }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  VacuumConverter
});
//# sourceMappingURL=vacuum.js.map
