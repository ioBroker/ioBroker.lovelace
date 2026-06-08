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
var indicators_exports = {};
__export(indicators_exports, {
  connectivityIndicator: () => connectivityIndicator,
  generateElectricitySensors: () => generateElectricitySensors,
  processBattery: () => processBattery,
  processError: () => processError,
  processMaintenance: () => processMaintenance,
  processWorking: () => processWorking
});
module.exports = __toCommonJS(indicators_exports);
var import_binarySensorEntity = require("../entities/binarySensorEntity");
var import_sensorEntity = require("../entities/sensorEntity");
const ELECTRICITY_SPECS = [
  {
    name: "ELECTRIC_POWER",
    suffix: "power",
    deviceClass: "power",
    unit: "W",
    stateClass: "measurement",
    label: "Power"
  },
  {
    name: "CURRENT",
    suffix: "current",
    deviceClass: "current",
    unit: "A",
    stateClass: "measurement",
    label: "Current"
  },
  {
    name: "VOLTAGE",
    suffix: "voltage",
    deviceClass: "voltage",
    unit: "V",
    stateClass: "measurement",
    label: "Voltage"
  },
  // value.power.consumption is an accumulating energy meter -> usable by the energy dashboard.
  {
    name: "CONSUMPTION",
    suffix: "energy",
    deviceClass: "energy",
    unit: "kWh",
    stateClass: "total_increasing",
    label: "Energy"
  },
  {
    name: "FREQUENCY",
    suffix: "frequency",
    deviceClass: "frequency",
    unit: "Hz",
    stateClass: "measurement",
    label: "Frequency"
  }
];
function generateElectricitySensors(parameters, baseName) {
  var _a;
  const entities = [];
  for (const spec of ELECTRICITY_SPECS) {
    const state = parameters.controls.states.find((s) => s.id && s.name === spec.name);
    if (!(state == null ? void 0 : state.id)) {
      continue;
    }
    const name = `${parameters.friendlyName || baseName} ${spec.label}`;
    entities.push(
      import_sensorEntity.SensorEntity.electricity(
        state.id,
        name,
        parameters.room,
        parameters.func,
        (_a = parameters.objects) == null ? void 0 : _a[state.id],
        `sensor.${baseName}_${spec.suffix}`,
        spec.deviceClass,
        spec.unit,
        spec.stateClass
      )
    );
  }
  return entities;
}
function makeIndicator(parameters, stateName, iobType, deviceClass, inverted = false) {
  const state = parameters.controls.states.find((s) => s.id && s.name === stateName);
  if (!(state == null ? void 0 : state.id)) {
    return null;
  }
  return new import_binarySensorEntity.BinarySensorEntity(parameters, {
    stateId: state.id,
    sourceObj: parameters.objects[state.id],
    deviceClass,
    iobType,
    inverted
  });
}
function processBattery(parameters) {
  return makeIndicator(parameters, "LOWBAT", "LOWBAT", "battery");
}
function connectivityIndicator(parameters) {
  const offlineState = parameters.controls.states.find((s) => s.id && (s.name === "UNREACH" || s.name === "OFFLINE"));
  if (offlineState == null ? void 0 : offlineState.id) {
    return new import_binarySensorEntity.BinarySensorEntity(parameters, {
      stateId: offlineState.id,
      sourceObj: parameters.objects[offlineState.id],
      iobType: "OFFLINE",
      inverted: true
    });
  }
  return makeIndicator(parameters, "CONNECTED", "CONNECTED", "connectivity");
}
function processError(parameters) {
  return makeIndicator(parameters, "ERROR", "ERROR", "problem");
}
function processMaintenance(parameters) {
  return makeIndicator(parameters, "MAINTAIN", "MAINTAIN", "update");
}
function processWorking(parameters) {
  return makeIndicator(parameters, "WORKING", "WORKING", "running");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  connectivityIndicator,
  generateElectricitySensors,
  processBattery,
  processError,
  processMaintenance,
  processWorking
});
//# sourceMappingURL=indicators.js.map
