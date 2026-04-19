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
var binary_sensor_exports = {};
__export(binary_sensor_exports, {
  BinarySensorConverter: () => BinarySensorConverter,
  connectivityIndicator: () => import_indicators.connectivityIndicator,
  default: () => binary_sensor_default,
  processBattery: () => import_indicators.processBattery,
  processDoor: () => processDoor,
  processError: () => import_indicators.processError,
  processFireAlarm: () => processFireAlarm,
  processMaintenance: () => import_indicators.processMaintenance,
  processManualEntity: () => processManualEntity,
  processMotion: () => processMotion,
  processWindow: () => processWindow,
  processWorking: () => import_indicators.processWorking
});
module.exports = __toCommonJS(binary_sensor_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_converter = require("./converter");
var import_utils = require("../entities/utils");
var import_indicators = require("./indicators");
function createSensorEntity(parameters, stateName = "ACTUAL") {
  const { friendlyName, room, func, objects, id, forcedEntityId, controls } = parameters;
  const entity = (0, import_utils.processCommon)(
    friendlyName,
    room,
    func,
    objects[id],
    "binary_sensor",
    forcedEntityId
  );
  entity.context.STATE = { getId: "" };
  const state = controls.states.find((s) => s.id && s.name === stateName);
  if (state == null ? void 0 : state.id) {
    entity.context.STATE.getId = state.id;
  }
  return entity;
}
function processMotion(parameters) {
  const entity = createSensorEntity(parameters);
  entity.attributes.icon = "mdi:motion-sensor";
  entity.attributes.device_class = "motion";
  return [entity];
}
function processDoor(parameters) {
  const entity = createSensorEntity(parameters);
  entity.attributes.icon = "mdi:door";
  entity.attributes.device_class = "door";
  return [entity];
}
function processWindow(parameters) {
  const entity = createSensorEntity(parameters);
  entity.attributes.icon = "mdi:window-maximize";
  entity.attributes.device_class = "window";
  return [entity];
}
function processFireAlarm(parameters) {
  const entity = createSensorEntity(parameters);
  entity.attributes.device_class = "smoke";
  return [entity];
}
function createOnlineIndicatorFromOfflineIndicator(entity) {
  entity.attributes.device_class = "connectivity";
  entity.context.STATE.getParser = (_entity, _attr, state) => {
    _entity.state = (state == null ? void 0 : state.val) ? "off" : "on";
  };
  entity.context.STATE.historyParser = (_iobId, state) => {
    return (state == null ? void 0 : state.val) ? "off" : "on";
  };
}
function processManualEntity(_id, obj, entity, _objects, custom) {
  var _a;
  entity.attributes.device_class = custom.attr_device_class;
  if (custom.attr_device_class === "connectivity" && ((_a = obj.common) == null ? void 0 : _a.role) === "indicator.unreach") {
    createOnlineIndicatorFromOfflineIndicator(entity);
  }
  return [entity];
}
class BinarySensorConverter extends import_converter.Converter {
  /**
   * Return entities for the detected binary sensor type.
   * Called by the inherited Converter.convert() template method.
   *
   * @param params - conversion parameters
   */
  static convertEntities(params) {
    switch (params.controls.type) {
      case import_type_detector.Types.motion:
        return processMotion(params);
      case import_type_detector.Types.door:
        return processDoor(params);
      case import_type_detector.Types.window:
        return processWindow(params);
      case import_type_detector.Types.fireAlarm:
        return processFireAlarm(params);
      default:
        return [];
    }
  }
}
import_converter.Converter.converters[import_type_detector.Types.motion] = BinarySensorConverter;
import_converter.Converter.converters[import_type_detector.Types.door] = BinarySensorConverter;
import_converter.Converter.converters[import_type_detector.Types.window] = BinarySensorConverter;
import_converter.Converter.converters[import_type_detector.Types.fireAlarm] = BinarySensorConverter;
var binary_sensor_default = {
  processMotion,
  processDoor,
  processWindow,
  processFireAlarm,
  processManualEntity,
  BinarySensorConverter
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BinarySensorConverter,
  connectivityIndicator,
  processBattery,
  processDoor,
  processError,
  processFireAlarm,
  processMaintenance,
  processManualEntity,
  processMotion,
  processWindow,
  processWorking
});
//# sourceMappingURL=binary_sensor.js.map
