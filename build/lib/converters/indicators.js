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
  generateBatterySensor: () => generateBatterySensor,
  generateElectricitySensors: () => generateElectricitySensors,
  generateMeasurementSensors: () => generateMeasurementSensors,
  processBattery: () => processBattery,
  processError: () => processError,
  processMaintenance: () => processMaintenance,
  processWorking: () => processWorking
});
module.exports = __toCommonJS(indicators_exports);
var import_binarySensorEntity = require("../entities/binarySensorEntity");
var import_sensorEntity = require("../entities/sensorEntity");
const adapterData = require("../../../lib/dataSingleton");
function translateLabel(label) {
  var _a;
  const entry = (_a = adapterData.words) == null ? void 0 : _a[label];
  return entry && (entry[adapterData.lang] || entry.en) || label;
}
const GENERATED_NAME_TAIL = /^(unreach|unreachable|offline|online|connected|connection|connectivity|reachable|alive|lowbat|lowbattery|batterywarning|battery|bat|warning|error|fault|maintain|maintenance|working|busy|state|value|actual|power|current|voltage|energy|consumption|frequency|level)$/i;
function isGeneratedName(name) {
  const words = name.split(/[\s._:\-/]+/).filter((w) => w);
  const tail = words[words.length - 1];
  return !tail || GENERATED_NAME_TAIL.test(tail);
}
function simplifyName(name) {
  return name.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
}
function derivedName(deviceName, stateObj, label) {
  if (!label || !deviceName) {
    return deviceName;
  }
  const common = stateObj == null ? void 0 : stateObj.common;
  if (common == null ? void 0 : common.smartName) {
    return void 0;
  }
  const raw = common == null ? void 0 : common.name;
  const own = typeof raw === "object" && raw ? raw[adapterData.lang] || raw.en : raw;
  if (own && !isGeneratedName(own) && simplifyName(own) !== simplifyName(deviceName)) {
    return void 0;
  }
  return `${deviceName} ${translateLabel(label)}`;
}
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
function generateMeasurementSensors(parameters, measurements, baseName) {
  var _a, _b;
  const entities = [];
  for (const measurement of measurements) {
    const state = parameters.controls.states.find((s) => s.id && s.name === measurement.state);
    if (!(state == null ? void 0 : state.id)) {
      continue;
    }
    const sourceObj = (_a = parameters.objects) == null ? void 0 : _a[state.id];
    entities.push(
      import_sensorEntity.SensorEntity.electricity(
        state.id,
        derivedName(parameters.friendlyName || baseName, sourceObj, measurement.label),
        parameters.room,
        parameters.func,
        (_b = parameters.objects) == null ? void 0 : _b[state.id],
        `sensor.${baseName}_${measurement.suffix}`,
        measurement.deviceClass,
        measurement.unit,
        measurement.stateClass || "measurement"
      )
    );
  }
  return entities;
}
function generateElectricitySensors(parameters, baseName) {
  var _a, _b;
  const entities = [];
  for (const spec of ELECTRICITY_SPECS) {
    const state = parameters.controls.states.find((s) => s.id && s.name === spec.name);
    if (!(state == null ? void 0 : state.id)) {
      continue;
    }
    const name = derivedName(parameters.friendlyName || baseName, (_a = parameters.objects) == null ? void 0 : _a[state.id], spec.label);
    entities.push(
      import_sensorEntity.SensorEntity.electricity(
        state.id,
        name,
        parameters.room,
        parameters.func,
        (_b = parameters.objects) == null ? void 0 : _b[state.id],
        `sensor.${baseName}_${spec.suffix}`,
        spec.deviceClass,
        spec.unit,
        spec.stateClass
      )
    );
  }
  return entities;
}
function generateBatterySensor(parameters, baseName) {
  var _a, _b;
  const state = parameters.controls.states.find((s) => s.id && s.name === "BATTERY");
  if (!(state == null ? void 0 : state.id)) {
    return null;
  }
  return import_sensorEntity.SensorEntity.electricity(
    state.id,
    derivedName(parameters.friendlyName || baseName, (_a = parameters.objects) == null ? void 0 : _a[state.id], "Battery"),
    parameters.room,
    parameters.func,
    (_b = parameters.objects) == null ? void 0 : _b[state.id],
    `sensor.${baseName}_battery`,
    "battery",
    "%",
    "measurement"
  );
}
function makeIndicator(parameters, stateName, iobType, deviceClass, inverted = false, label) {
  const state = parameters.controls.states.find((s) => s.id && s.name === stateName);
  if (!(state == null ? void 0 : state.id)) {
    return null;
  }
  const sourceObj = parameters.objects[state.id];
  return new import_binarySensorEntity.BinarySensorEntity(
    { ...parameters, friendlyName: derivedName(parameters.friendlyName, sourceObj, label) },
    {
      stateId: state.id,
      sourceObj,
      deviceClass,
      iobType,
      inverted
    }
  );
}
function processBattery(parameters, label) {
  return makeIndicator(parameters, "LOWBAT", "LOWBAT", "battery", false, label);
}
function connectivityIndicator(parameters, label) {
  const offlineState = parameters.controls.states.find((s) => s.id && (s.name === "UNREACH" || s.name === "OFFLINE"));
  if (offlineState == null ? void 0 : offlineState.id) {
    const sourceObj = parameters.objects[offlineState.id];
    return new import_binarySensorEntity.BinarySensorEntity(
      { ...parameters, friendlyName: derivedName(parameters.friendlyName, sourceObj, label) },
      {
        stateId: offlineState.id,
        sourceObj,
        iobType: "OFFLINE",
        inverted: true
      }
    );
  }
  return makeIndicator(parameters, "CONNECTED", "CONNECTED", "connectivity", false, label);
}
function processError(parameters, label) {
  return makeIndicator(parameters, "ERROR", "ERROR", "problem", false, label);
}
function processMaintenance(parameters, label) {
  return makeIndicator(parameters, "MAINTAIN", "MAINTAIN", "update", false, label);
}
function processWorking(parameters, label) {
  return makeIndicator(parameters, "WORKING", "WORKING", "running", false, label);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  connectivityIndicator,
  generateBatterySensor,
  generateElectricitySensors,
  generateMeasurementSensors,
  processBattery,
  processError,
  processMaintenance,
  processWorking
});
//# sourceMappingURL=indicators.js.map
