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
var import_utils = require("../entities/utils");
function createOnlineIndicatorFromOfflineIndicator(entity) {
  entity.attributes.device_class = "connectivity";
  entity.context.STATE.getParser = (_entity, _attr, state) => {
    _entity.state = (state == null ? void 0 : state.val) ? "off" : "on";
  };
  entity.context.STATE.historyParser = (_iobId, state) => {
    return (state == null ? void 0 : state.val) ? "off" : "on";
  };
}
function processBattery(parameters) {
  const state = parameters.controls.states.find((s) => s.id && s.name === "LOWBAT");
  if (state == null ? void 0 : state.id) {
    const entity = (0, import_utils.processCommon)(
      parameters.friendlyName,
      parameters.room,
      parameters.func,
      parameters.objects[state.id],
      "binary_sensor",
      parameters.forcedEntityId
    );
    entity.context.STATE = { getId: state.id };
    entity.context.iobType = "LOWBAT";
    entity.attributes.device_class = "battery";
    return entity;
  }
  return null;
}
function connectivityIndicator(parameters) {
  const offlineState = parameters.controls.states.find((s) => s.id && (s.name === "UNREACH" || s.name === "OFFLINE"));
  if (offlineState == null ? void 0 : offlineState.id) {
    const entity = (0, import_utils.processCommon)(
      parameters.friendlyName,
      parameters.room,
      parameters.func,
      parameters.objects[offlineState.id],
      "binary_sensor",
      parameters.forcedEntityId
    );
    entity.context.STATE = { getId: offlineState.id };
    entity.context.iobType = "OFFLINE";
    createOnlineIndicatorFromOfflineIndicator(entity);
    return entity;
  }
  const connectedState = parameters.controls.states.find((s) => s.id && s.name === "CONNECTED");
  if (connectedState == null ? void 0 : connectedState.id) {
    const entity = (0, import_utils.processCommon)(
      parameters.friendlyName,
      parameters.room,
      parameters.func,
      parameters.objects[connectedState.id],
      "binary_sensor",
      parameters.forcedEntityId
    );
    entity.context.STATE = { getId: connectedState.id };
    entity.context.iobType = "CONNECTED";
    entity.attributes.device_class = "connectivity";
    return entity;
  }
  return null;
}
function processError(parameters) {
  const state = parameters.controls.states.find((s) => s.id && s.name === "ERROR");
  if (state == null ? void 0 : state.id) {
    const entity = (0, import_utils.processCommon)(
      parameters.friendlyName,
      parameters.room,
      parameters.func,
      parameters.objects[state.id],
      "binary_sensor",
      parameters.forcedEntityId
    );
    entity.context.STATE = { getId: state.id };
    entity.context.iobType = "ERROR";
    entity.attributes.device_class = "problem";
    return entity;
  }
  return null;
}
function processMaintenance(parameters) {
  const state = parameters.controls.states.find((s) => s.id && s.name === "MAINTAIN");
  if (state == null ? void 0 : state.id) {
    const entity = (0, import_utils.processCommon)(
      parameters.friendlyName,
      parameters.room,
      parameters.func,
      parameters.objects[state.id],
      "binary_sensor",
      parameters.forcedEntityId
    );
    entity.context.STATE = { getId: state.id };
    entity.context.iobType = "MAINTAIN";
    entity.attributes.device_class = "update";
    return entity;
  }
  return null;
}
function processWorking(parameters) {
  const state = parameters.controls.states.find((s) => s.id && s.name === "WORKING");
  if (state == null ? void 0 : state.id) {
    const entity = (0, import_utils.processCommon)(
      parameters.friendlyName,
      parameters.room,
      parameters.func,
      parameters.objects[state.id],
      "binary_sensor",
      parameters.forcedEntityId
    );
    entity.context.STATE = { getId: state.id };
    entity.context.iobType = "WORKING";
    entity.attributes.device_class = "running";
    return entity;
  }
  return null;
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
