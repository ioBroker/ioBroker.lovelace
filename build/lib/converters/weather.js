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
var import_utils = require("../entities/utils");
const adapterData = require("../../../lib/dataSingleton");
class WeatherConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    const { controls, objects, forcedEntityId, friendlyName, room, func } = params;
    const entity = (0, import_utils.processCommon)(friendlyName, room, func, objects[params.id], "weather", forcedEntityId);
    entity.context.STATE = { getId: null };
    entity.context.ATTRIBUTES = [];
    let state = controls.states.find((s) => s.id && s.name === "ICON");
    if (state == null ? void 0 : state.id) {
      entity.context.STATE.getId = state.id;
      (0, import_utils.addID2entity)(state.id, entity);
    }
    state = controls.states.find((s) => s.id && s.name === "TEMP");
    if (state == null ? void 0 : state.id) {
      entity.context.ATTRIBUTES.push({ attribute: "temperature", getId: state.id });
      (0, import_utils.addID2entity)(state.id, entity);
    } else {
      state = controls.states.find((s) => s.id && s.name === "TEMP_MAX");
      if (state == null ? void 0 : state.id) {
        entity.context.ATTRIBUTES.push({ attribute: "temperature", getId: state.id });
        (0, import_utils.addID2entity)(state.id, entity);
      }
    }
    for (const [stateName, attrName] of [
      ["PRESSURE", "pressure"],
      ["HUMIDITY", "humidity"],
      ["WIND_SPEED", "wind_speed"],
      ["WIND_DIRECTION", "wind_bearing"],
      ["PRECIPITATION_CHANCE", "precipitation_probability"],
      ["PRECIPITATION", "precipitation"]
    ]) {
      state = controls.states.find((s) => s.id && s.name === stateName);
      if (state == null ? void 0 : state.id) {
        entity.context.ATTRIBUTES.push({ attribute: attrName, getId: state.id });
        (0, import_utils.addID2entity)(state.id, entity);
      }
    }
    for (const [bare, zeroed, attr] of [
      ["TIME_SUNRISE", "TIME_SUNRISE0", "sunrise"],
      ["TIME_SUNSET", "TIME_SUNSET0", "sunset"],
      ["STATE", "STATE0", "state_desc"]
    ]) {
      state = controls.states.find((s) => s.id && s.name === bare);
      if (state == null ? void 0 : state.id) {
        entity.context.ATTRIBUTES.push({ attribute: attr, getId: state.id });
        (0, import_utils.addID2entity)(state.id, entity);
      } else {
        state = controls.states.find((s) => s.id && s.name === zeroed);
        if (state == null ? void 0 : state.id) {
          entity.context.ATTRIBUTES.push({ attribute: attr, getId: state.id });
          (0, import_utils.addID2entity)(state.id, entity);
          state.id = null;
        }
      }
    }
    let hassCounter = -1;
    for (let day = 0; day < 9; day++) {
      const postFix = day ? String(day) : "";
      let somethingFound = false;
      let dayShiftId;
      const tryAdd = (name, attribute) => {
        state = controls.states.find((s) => s.id && s.name === name);
        if (state == null ? void 0 : state.id) {
          if (!somethingFound) {
            hassCounter++;
            somethingFound = true;
          }
          dayShiftId = dayShiftId != null ? dayShiftId : state.id;
          entity.context.ATTRIBUTES.push({ attribute, getId: state.id });
          (0, import_utils.addID2entity)(state.id, entity);
        }
      };
      state = controls.states.find((s) => s.id && s.name === `ICON${postFix}`);
      if (state == null ? void 0 : state.id) {
        hassCounter++;
        somethingFound = true;
        dayShiftId = state.id;
        entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.condition`, getId: state.id });
        (0, import_utils.addID2entity)(state.id, entity);
      }
      tryAdd(`TEMP_MAX${postFix}`, `forecast.${hassCounter}.temperature`);
      if (!somethingFound || !entity.context.ATTRIBUTES.find((a) => a.attribute === `forecast.${hassCounter}.temperature`)) {
        tryAdd(`TEMP${postFix}`, `forecast.${hassCounter}.temperature`);
      }
      tryAdd(`TEMP_MIN${postFix}`, `forecast.${hassCounter}.templow`);
      tryAdd(`PRECIPITATION_CHANCE${postFix}`, `forecast.${hassCounter}.precipitation_probability`);
      tryAdd(`PRECIPITATION${postFix}`, `forecast.${hassCounter}.precipitation`);
      tryAdd(`HUMIDITY${postFix}`, `forecast.${hassCounter}.humidity`);
      if (somethingFound) {
        state = controls.states.find((s) => s.id && s.name === `DATE${postFix}`);
        if (state == null ? void 0 : state.id) {
          entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.datetime`, getId: state.id });
          (0, import_utils.addID2entity)(state.id, entity);
        } else if (dayShiftId) {
          const capturedShift = day;
          const capturedHassCounter = hassCounter;
          entity.context.ATTRIBUTES.push({
            attribute: `forecast.${capturedHassCounter}.datetime`,
            dayShift: capturedShift,
            getId: dayShiftId,
            getParser: (_entity, attr, iobState) => {
              let date = /* @__PURE__ */ new Date();
              if (iobState == null ? void 0 : iobState.ts) {
                date = new Date(iobState.ts);
              }
              if (attr.dayShift) {
                date.setDate(date.getDate() + attr.dayShift);
              }
              (0, import_utils.setJsonAttribute)(_entity.attributes, attr.attribute, date.toISOString());
            }
          });
        }
      } else if (hassCounter >= 0) {
        break;
      }
    }
    return [entity];
  }
}
import_converter.default.converters[import_type_detector.Types.weatherForecast] = WeatherConverter;
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
