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
var genericConverter_exports = {};
__export(genericConverter_exports, {
  iobState2EntityState: () => iobState2EntityState,
  numericDeviceClasses: () => numericDeviceClasses
});
module.exports = __toCommonJS(genericConverter_exports);
const numericDeviceClasses = [
  "voltage",
  "sulphur_dioxide",
  "carbon_dioxide",
  "current",
  "volume_storage",
  "volume",
  "ozone",
  "speed",
  "atmospheric_pressure",
  "carbon_monoxide",
  "aqi",
  "pm25",
  "nitrogen_monoxide",
  "power_factor",
  "pm1",
  "precipitation",
  "volatile_organic_compounds",
  "humidity",
  "pressure",
  "battery",
  "irradiance",
  "wind_speed",
  "pm10",
  "ph",
  "reactive_power",
  "temperature",
  "precipitation_intensity",
  "sound_pressure",
  "data_rate",
  "frequency",
  "volatile_organic_compounds_parts",
  "energy",
  "apparent_power",
  "weight",
  "duration",
  "gas",
  "water",
  "power",
  "monetary",
  "signal_strength",
  "data_size",
  "energy_storage",
  "nitrogen_dioxide",
  "nitrous_oxide",
  "illuminance",
  "moisture",
  "distance"
];
function iobState2EntityState(entity, val, attribute) {
  var _a, _b, _c;
  let type = entity.context.type || "";
  const pos = type.lastIndexOf(".");
  if (pos !== -1) {
    type = type.substring(pos + 1);
  }
  if (type === "light" || type === "switch" || type === "input_boolean") {
    return val ? "on" : "off";
  } else if (type === "binary_sensor") {
    return val ? "on" : "off";
  } else if (typeof val === "number" && (entity.context.type === "datetime" || ["date", "timestamp"].includes((_a = entity.attributes) == null ? void 0 : _a.device_class))) {
    const date = new Date(val);
    let dateStr = date.toDateString();
    if (((_b = entity.attributes) == null ? void 0 : _b.device_class) === "timestamp") {
      dateStr = date.toISOString();
    }
    return dateStr === "Invalid Date" ? "unknown" : dateStr;
  } else if (type === "lock") {
    return val ? "unlocked" : "locked";
  } else if (typeof val === "boolean" && type !== "media_player" && !attribute) {
    return val ? "on" : "off";
  } else if (typeof val === "number" && entity.context.STATE && entity.context.STATE.map2lovelace) {
    const map = entity.context.STATE.map2lovelace;
    return (_c = map[val]) != null ? _c : val;
  } else if (attribute === "power") {
    return val ? "on" : "off";
  } else {
    if (!attribute) {
      return val === null || val === void 0 ? "unknown" : typeof val === "object" ? JSON.stringify(val) : String(val);
    } else {
      return val;
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  iobState2EntityState,
  numericDeviceClasses
});
//# sourceMappingURL=genericConverter.js.map
