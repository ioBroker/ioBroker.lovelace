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
var sensor_exports = {};
__export(sensor_exports, {
  SensorConverter: () => SensorConverter,
  createHumiditySensor: () => createHumiditySensor,
  createTemperatureSensor: () => createTemperatureSensor,
  processManualEntity: () => processManualEntity,
  sensorBaseName: () => sensorBaseName
});
module.exports = __toCommonJS(sensor_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_indicators = require("./indicators");
var import_entity_id = require("../entities/entity_id");
var import_converter = __toESM(require("./converter"));
var import_sensorEntity = require("../entities/sensorEntity");
function createHumiditySensor(stateId, name, room, func, obj, forcedEntityId) {
  return import_sensorEntity.SensorEntity.humidity(stateId, name, room, func, obj, forcedEntityId);
}
function createTemperatureSensor(stateId, name, room, func, obj, forcedEntityId) {
  return import_sensorEntity.SensorEntity.temperature(stateId, name, room, func, obj, forcedEntityId);
}
const AIR_QUALITY = [
  { state: "AQI", suffix: "aqi", label: "Air quality index", deviceClass: "aqi", unit: "" },
  { state: "CO2", suffix: "co2", label: "CO2", deviceClass: "carbon_dioxide", unit: "ppm" },
  { state: "CO", suffix: "co", label: "CO", deviceClass: "carbon_monoxide", unit: "ppm" },
  { state: "TVOC", suffix: "tvoc", label: "VOC", deviceClass: "volatile_organic_compounds", unit: "\xB5g/m\xB3" },
  { state: "PM1", suffix: "pm1", label: "PM1", deviceClass: "pm1", unit: "\xB5g/m\xB3" },
  { state: "PM25", suffix: "pm25", label: "PM2.5", deviceClass: "pm25", unit: "\xB5g/m\xB3" },
  { state: "PM10", suffix: "pm10", label: "PM10", deviceClass: "pm10", unit: "\xB5g/m\xB3" },
  { state: "NO2", suffix: "no2", label: "NO2", deviceClass: "nitrogen_dioxide", unit: "\xB5g/m\xB3" },
  { state: "SO2", suffix: "so2", label: "SO2", deviceClass: "sulphur_dioxide", unit: "\xB5g/m\xB3" },
  { state: "O3", suffix: "o3", label: "Ozone", deviceClass: "ozone", unit: "\xB5g/m\xB3" },
  // Formaldehyde and radon have no device class in Home Assistant; they are still worth a sensor.
  { state: "CH2O", suffix: "ch2o", label: "Formaldehyde", deviceClass: "", unit: "\xB5g/m\xB3" },
  { state: "RN", suffix: "radon", label: "Radon", deviceClass: "", unit: "Bq/m\xB3" },
  { state: "PRESSURE", suffix: "pressure", label: "Pressure", deviceClass: "pressure", unit: "hPa" },
  { state: "ACTUAL", suffix: "temperature", label: "Temperature", deviceClass: "temperature", unit: "\xB0C" },
  { state: "HUMIDITY", suffix: "humidity", label: "Humidity", deviceClass: "humidity", unit: "%" }
];
const PRESSURE = {
  state: "PRESSURE",
  suffix: "pressure",
  label: "Pressure",
  deviceClass: "pressure",
  unit: "hPa"
};
const FLOW = {
  state: "FLOW",
  suffix: "flow",
  label: "Flow",
  deviceClass: "volume_flow_rate",
  unit: "m\xB3/h"
};
function sensorBaseName(params) {
  var _a, _b, _c;
  return (params.forcedEntityId || (0, import_entity_id.getEntityId)("sensor", null, (_a = params.objects) == null ? void 0 : _a[params.id], (_b = params.room) == null ? void 0 : _b._id, (_c = params.func) == null ? void 0 : _c._id)).split(".")[1];
}
class SensorConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    const { controls, objects, forcedEntityId, friendlyName, room, func } = params;
    if (controls.type === import_type_detector.Types.windowTilt) {
      return [import_sensorEntity.SensorEntity.windowTilt(params)];
    }
    if (controls.type === import_type_detector.Types.airQuality) {
      return (0, import_indicators.generateMeasurementSensors)(params, AIR_QUALITY, sensorBaseName(params));
    }
    if (controls.type === import_type_detector.Types.pressure || controls.type === import_type_detector.Types.flow) {
      return (0, import_indicators.generateMeasurementSensors)(
        params,
        [controls.type === import_type_detector.Types.flow ? FLOW : PRESSURE],
        sensorBaseName(params)
      );
    }
    if (controls.type === import_type_detector.Types.electricity) {
      return [];
    }
    if (controls.type === import_type_detector.Types.humidity) {
      const state2 = controls.states.find((s) => s.id && s.name === "ACTUAL");
      if (state2 == null ? void 0 : state2.id) {
        return [import_sensorEntity.SensorEntity.humidity(state2.id, friendlyName, room, func, objects[params.id], forcedEntityId)];
      }
      return [];
    }
    if (controls.type === import_type_detector.Types.illuminance) {
      const state2 = controls.states.find((s) => s.id && s.name === "ACTUAL");
      if (state2 == null ? void 0 : state2.id) {
        return [
          import_sensorEntity.SensorEntity.illuminance(state2.id, friendlyName, room, func, objects[params.id], forcedEntityId)
        ];
      }
      return [];
    }
    const entities = [];
    let state = controls.states.find((s) => s.id && s.name === "ACTUAL");
    let tempEntity;
    if (state == null ? void 0 : state.id) {
      tempEntity = import_sensorEntity.SensorEntity.temperature(
        state.id,
        friendlyName,
        room,
        func,
        objects[params.id],
        forcedEntityId
      );
      entities.push(tempEntity);
    }
    state = controls.states.find((s) => s.id && s.name === "SECOND");
    if (state == null ? void 0 : state.id) {
      const humForcedId = tempEntity ? `${tempEntity.entity_id}_Humidity` : void 0;
      entities.push(import_sensorEntity.SensorEntity.humidity(state.id, friendlyName, room, func, objects[params.id], humForcedId));
    }
    return entities;
  }
}
function processManualEntity(_id, _obj, entity, _objects, custom) {
  entity.attributes.device_class = custom.attr_device_class;
  entity.attributes.unit_of_measurement = custom.attr_unit_of_measurement || entity.attributes.unit_of_measurement;
  return [entity];
}
import_converter.default.converters[import_type_detector.Types.windowTilt] = SensorConverter;
import_converter.default.converters[import_type_detector.Types.temperature] = SensorConverter;
import_converter.default.converters[import_type_detector.Types.humidity] = SensorConverter;
import_converter.default.converters[import_type_detector.Types.illuminance] = SensorConverter;
import_converter.default.converters[import_type_detector.Types.airQuality] = SensorConverter;
import_converter.default.converters[import_type_detector.Types.pressure] = SensorConverter;
import_converter.default.converters[import_type_detector.Types.flow] = SensorConverter;
import_converter.default.converters[import_type_detector.Types.electricity] = SensorConverter;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SensorConverter,
  createHumiditySensor,
  createTemperatureSensor,
  processManualEntity,
  sensorBaseName
});
//# sourceMappingURL=sensor.js.map
