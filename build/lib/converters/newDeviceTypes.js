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
var newDeviceTypes_exports = {};
__export(newDeviceTypes_exports, {
  AirQualityConverter: () => AirQualityConverter,
  ContactConverter: () => ContactConverter,
  ElectricityConverter: () => ElectricityConverter,
  FanConverter: () => FanConverter,
  MeasurementConverter: () => MeasurementConverter,
  PumpConverter: () => PumpConverter,
  default: () => newDeviceTypes_default
});
module.exports = __toCommonJS(newDeviceTypes_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_converter = __toESM(require("./converter"));
var import_sensorEntity = require("../entities/sensorEntity");
var import_binarySensorEntity = require("../entities/binarySensorEntity");
var import_switchEntity = require("../entities/switchEntity");
var import_entity_id = require("../entities/entity_id");
var import_baseEntity = require("../entities/baseEntity");
var import_fan = require("./fan");
const AIR_QUALITY = [
  { state: "AQI", suffix: "aqi", label: "Air quality index", deviceClass: "aqi", unit: "" },
  { state: "CO2", suffix: "co2", label: "CO2", deviceClass: "carbon_dioxide", unit: "ppm" },
  { state: "CO", suffix: "co", label: "CO", deviceClass: "carbon_monoxide", unit: "ppm" },
  {
    state: "TVOC",
    suffix: "tvoc",
    label: "VOC",
    deviceClass: "volatile_organic_compounds",
    unit: "\xB5g/m\xB3"
  },
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
const PUMP_MEASUREMENTS = [
  { state: "PRESSURE", suffix: "pressure", label: "Pressure", deviceClass: "pressure", unit: "hPa" },
  { state: "FLOW", suffix: "flow", label: "Flow", deviceClass: "volume_flow_rate", unit: "m\xB3/h" },
  { state: "TEMPERATURE", suffix: "temperature", label: "Temperature", deviceClass: "temperature", unit: "\xB0C" }
];
function buildSensors(params, measurements) {
  var _a, _b, _c, _d;
  const entities = [];
  const baseName = (params.forcedEntityId || (0, import_entity_id.getEntityId)("sensor", null, (_a = params.objects) == null ? void 0 : _a[params.id], (_b = params.room) == null ? void 0 : _b._id, (_c = params.func) == null ? void 0 : _c._id)).split(".")[1];
  for (const measurement of measurements) {
    const state = params.controls.states.find((s) => s.id && s.name === measurement.state);
    if (!(state == null ? void 0 : state.id)) {
      continue;
    }
    entities.push(
      import_sensorEntity.SensorEntity.electricity(
        state.id,
        `${params.friendlyName || baseName} ${measurement.label}`,
        params.room,
        params.func,
        (_d = params.objects) == null ? void 0 : _d[state.id],
        `sensor.${baseName}_${measurement.suffix}`,
        measurement.deviceClass,
        measurement.unit,
        measurement.stateClass || "measurement"
      )
    );
  }
  return entities;
}
class AirQualityConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    return buildSensors(params, AIR_QUALITY);
  }
}
class ElectricityConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities() {
    return [];
  }
}
class MeasurementConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    if (params.controls.type === import_type_detector.Types.flow) {
      return buildSensors(params, [
        { state: "FLOW", suffix: "flow", label: "Flow", deviceClass: "volume_flow_rate", unit: "m\xB3/h" }
      ]);
    }
    return buildSensors(params, [
      { state: "PRESSURE", suffix: "pressure", label: "Pressure", deviceClass: "pressure", unit: "hPa" }
    ]);
  }
}
class FanConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    const { objects, id, forcedEntityId, friendlyName, room, func, controls } = params;
    const stateId = (name) => {
      var _a;
      return (_a = controls.states.find((s) => s.id && s.name === name)) == null ? void 0 : _a.id;
    };
    const speed = stateId("SPEED") || stateId("SPEED_LEVEL");
    const power = stateId("POWER");
    if (!speed && !power) {
      return [];
    }
    const entity = new import_baseEntity.BaseEntity(friendlyName, room, func, objects[id], "fan", forcedEntityId);
    return (0, import_fan.processManualEntity)(speed || power || id, objects[id], entity, objects, {
      state_SET: power,
      state_SPEED: speed,
      state_OSCILLATION: stateId("SWING"),
      state_DIRECTION: stateId("AIRFLOW_DIRECTION")
    });
  }
}
class PumpConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    const power = params.controls.states.find((s) => s.id && s.name === "POWER");
    const entities = [];
    if (power == null ? void 0 : power.id) {
      const withSet = {
        ...params,
        controls: {
          ...params.controls,
          states: params.controls.states.map((s) => s.name === "POWER" ? { ...s, name: "SET" } : s)
        }
      };
      entities.push(new import_switchEntity.SwitchEntity(withSet));
    }
    entities.push(...buildSensors(params, PUMP_MEASUREMENTS));
    return entities;
  }
}
class ContactConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    const deviceClass = params.controls.type === import_type_detector.Types.coAlarm ? "carbon_monoxide" : "opening";
    return [new import_binarySensorEntity.BinarySensorEntity(params, { deviceClass })];
  }
}
import_converter.default.converters[import_type_detector.Types.airQuality] = AirQualityConverter;
import_converter.default.converters[import_type_detector.Types.electricity] = ElectricityConverter;
import_converter.default.converters[import_type_detector.Types.pressure] = MeasurementConverter;
import_converter.default.converters[import_type_detector.Types.flow] = MeasurementConverter;
import_converter.default.converters[import_type_detector.Types.contact] = ContactConverter;
import_converter.default.converters[import_type_detector.Types.coAlarm] = ContactConverter;
import_converter.default.converters[import_type_detector.Types.fan] = FanConverter;
import_converter.default.converters[import_type_detector.Types.airPurifier] = FanConverter;
import_converter.default.converters[import_type_detector.Types.pump] = PumpConverter;
var newDeviceTypes_default = {
  AirQualityConverter,
  ElectricityConverter,
  MeasurementConverter,
  ContactConverter,
  FanConverter,
  PumpConverter
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AirQualityConverter,
  ContactConverter,
  ElectricityConverter,
  FanConverter,
  MeasurementConverter,
  PumpConverter
});
//# sourceMappingURL=newDeviceTypes.js.map
