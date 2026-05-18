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
var weatherEntity_exports = {};
__export(weatherEntity_exports, {
  WeatherEntity: () => WeatherEntity
});
module.exports = __toCommonJS(weatherEntity_exports);
var import_baseEntity = require("./baseEntity");
var import_utils = require("./utils");
class WeatherEntity extends import_baseEntity.BaseEntity {
  /** @param params - converter parameters */
  constructor(params) {
    const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
    super(friendlyName, room, func, objects[id], "weather", forcedEntityId);
    this.context.STATE.getId = null;
    this.context.ATTRIBUTES = [];
    let state = controls.states.find((s) => s.id && s.name === "ICON");
    if (state == null ? void 0 : state.id) {
      this.context.STATE.getId = state.id;
      this.addID2entity(state.id);
    }
    state = controls.states.find((s) => s.id && s.name === "TEMP");
    if (state == null ? void 0 : state.id) {
      this.context.ATTRIBUTES.push({ attribute: "temperature", getId: state.id });
      this.addID2entity(state.id);
    } else {
      state = controls.states.find((s) => s.id && s.name === "TEMP_MAX");
      if (!(state == null ? void 0 : state.id)) {
        state = controls.states.find((s) => s.id && s.name === "ACTUAL");
      }
      if (state == null ? void 0 : state.id) {
        this.context.ATTRIBUTES.push({ attribute: "temperature", getId: state.id });
        this.addID2entity(state.id);
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
        this.context.ATTRIBUTES.push({ attribute: attrName, getId: state.id });
        this.addID2entity(state.id);
      }
    }
    for (const [bare, zeroed, attr] of [
      ["TIME_SUNRISE", "TIME_SUNRISE0", "sunrise"],
      ["TIME_SUNSET", "TIME_SUNSET0", "sunset"],
      ["STATE", "STATE0", "state_desc"]
    ]) {
      state = controls.states.find((s) => s.id && s.name === bare);
      if (state == null ? void 0 : state.id) {
        this.context.ATTRIBUTES.push({ attribute: attr, getId: state.id });
        this.addID2entity(state.id);
      } else {
        state = controls.states.find((s) => s.id && s.name === zeroed);
        if (state == null ? void 0 : state.id) {
          this.context.ATTRIBUTES.push({ attribute: attr, getId: state.id });
          this.addID2entity(state.id);
          state.id = null;
        }
      }
    }
    if (!this.context.ATTRIBUTES.find((a) => a.attribute === "state_desc")) {
      state = controls.states.find((s) => s.id && s.name === "WEATHER");
      if (state == null ? void 0 : state.id) {
        this.context.ATTRIBUTES.push({ attribute: "state_desc", getId: state.id });
        this.addID2entity(state.id);
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
          this.context.ATTRIBUTES.push({ attribute, getId: state.id });
          this.addID2entity(state.id);
        }
      };
      state = controls.states.find((s) => s.id && s.name === `ICON${postFix}`);
      if (state == null ? void 0 : state.id) {
        hassCounter++;
        somethingFound = true;
        dayShiftId = state.id;
        this.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.condition`, getId: state.id });
        this.addID2entity(state.id);
      }
      tryAdd(`TEMP_MAX${postFix}`, `forecast.${hassCounter}.temperature`);
      if (!somethingFound || !this.context.ATTRIBUTES.find((a) => a.attribute === `forecast.${hassCounter}.temperature`)) {
        tryAdd(`TEMP${postFix}`, `forecast.${hassCounter}.temperature`);
      }
      tryAdd(`TEMP_MIN${postFix}`, `forecast.${hassCounter}.templow`);
      tryAdd(`PRECIPITATION_CHANCE${postFix}`, `forecast.${hassCounter}.precipitation_probability`);
      tryAdd(`PRECIPITATION${postFix}`, `forecast.${hassCounter}.precipitation`);
      tryAdd(`HUMIDITY${postFix}`, `forecast.${hassCounter}.humidity`);
      if (somethingFound) {
        state = controls.states.find((s) => s.id && s.name === `DATE${postFix}`);
        if (state == null ? void 0 : state.id) {
          this.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.datetime`, getId: state.id });
          this.addID2entity(state.id);
        } else if (dayShiftId) {
          const capturedShift = day;
          const capturedHassCounter = hassCounter;
          this.context.ATTRIBUTES.push({
            attribute: `forecast.${capturedHassCounter}.datetime`,
            dayShift: capturedShift,
            getId: dayShiftId,
            getParser: (ent, attr, iobState) => {
              let date = /* @__PURE__ */ new Date();
              if (iobState == null ? void 0 : iobState.ts) {
                date = new Date(iobState.ts);
              }
              if (attr.dayShift) {
                date.setDate(date.getDate() + attr.dayShift);
              }
              (0, import_utils.setJsonAttribute)(ent.attributes, attr.attribute, date.toISOString());
            }
          });
        }
      } else if (hassCounter >= 0) {
        break;
      }
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WeatherEntity
});
//# sourceMappingURL=weatherEntity.js.map
