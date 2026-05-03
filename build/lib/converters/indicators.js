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
  processBattery: () => processBattery,
  processError: () => processError,
  processMaintenance: () => processMaintenance,
  processWorking: () => processWorking
});
module.exports = __toCommonJS(indicators_exports);
var import_binarySensorEntity = require("../entities/binarySensorEntity");
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
  processBattery,
  processError,
  processMaintenance,
  processWorking
});
//# sourceMappingURL=indicators.js.map
