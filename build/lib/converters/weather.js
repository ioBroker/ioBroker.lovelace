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
var weather_exports = {};
__export(weather_exports, {
  WeatherConverter: () => WeatherConverter
});
module.exports = __toCommonJS(weather_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_converter = __toESM(require("./converter"));
var import_weatherEntity = require("../entities/weatherEntity");
const adapterData = require("../../../lib/dataSingleton");
class WeatherConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    return [new import_weatherEntity.WeatherEntity(params)];
  }
}
import_converter.default.converters[import_type_detector.Types.weatherForecast] = WeatherConverter;
import_converter.default.converters[import_type_detector.Types.weatherCurrent] = WeatherConverter;
adapterData.services.weather = {
  get_forecast: {
    name: "Get forecast",
    description: "Get weather forecast.",
    fields: {
      type: {
        required: true,
        selector: { select: { options: ["daily", "hourly", "twice_daily"], translation_key: "forecast_type" } },
        name: "Forecast type",
        description: "Forecast type: daily, hourly or twice daily."
      }
    },
    target: { entity: [{ domain: ["weather"], supported_features: [1, 2, 4] }] },
    response: { optional: false }
  },
  get_forecasts: {
    name: "Get forecasts",
    description: "Get weather forecasts.",
    fields: {
      type: {
        required: true,
        selector: { select: { options: ["daily", "hourly", "twice_daily"], translation_key: "forecast_type" } },
        name: "Forecast type",
        description: "Forecast type: daily, hourly or twice daily."
      }
    },
    target: { entity: [{ domain: ["weather"], supported_features: [1, 2, 4] }] },
    response: { optional: false }
  }
};
delete adapterData.services.weather;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WeatherConverter
});
//# sourceMappingURL=weather.js.map
