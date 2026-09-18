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
var import_indicators = require("./indicators");
var import_sensor = require("./sensor");
const adapterData = require("../../../lib/dataSingleton");
const PUMP_MEASUREMENTS = [
  { state: "PRESSURE", suffix: "pressure", label: "Pressure", deviceClass: "pressure", unit: "hPa" },
  { state: "FLOW", suffix: "flow", label: "Flow", deviceClass: "volume_flow_rate", unit: "m\xB3/h" },
  { state: "TEMPERATURE", suffix: "temperature", label: "Temperature", deviceClass: "temperature", unit: "\xB0C" }
];
class SwitchConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    if (params.controls.type !== import_type_detector.Types.pump) {
      return [new import_switchEntity.SwitchEntity(params)];
    }
    const entities = [];
    if (params.controls.states.some((s) => s.id && s.name === "POWER")) {
      entities.push(
        new import_switchEntity.SwitchEntity({
          ...params,
          controls: {
            ...params.controls,
            states: params.controls.states.map((s) => s.name === "POWER" ? { ...s, name: "SET" } : s)
          }
        })
      );
    }
    entities.push(...(0, import_indicators.generateMeasurementSensors)(params, PUMP_MEASUREMENTS, (0, import_sensor.sensorBaseName)(params)));
    return entities;
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
import_converter.default.converters[import_type_detector.Types.pump] = SwitchConverter;
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
