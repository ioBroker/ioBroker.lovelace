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
var sun_exports = {};
__export(sun_exports, {
  computeSunState: () => computeSunState
});
module.exports = __toCommonJS(sun_exports);
const SunCalc = require("suncalc");
function computeSunState(lat, lng, now = /* @__PURE__ */ new Date()) {
  const pos = SunCalc.getPosition(now, lat, lng);
  const elevation = pos.altitude * 180 / Math.PI;
  const azimuth = ((pos.azimuth * 180 / Math.PI + 180) % 360 + 360) % 360;
  const later = SunCalc.getPosition(new Date(now.getTime() + 6e5), lat, lng);
  const nextEvent = (key) => {
    for (let dayOffset = 0; dayOffset <= 2; dayOffset++) {
      const times = SunCalc.getTimes(new Date(now.getTime() + dayOffset * 864e5), lat, lng);
      const t = times[key];
      if (t instanceof Date && !isNaN(t.getTime()) && t.getTime() > now.getTime()) {
        return t.toISOString();
      }
    }
    return void 0;
  };
  return {
    // -0.833° accounts for atmospheric refraction at the horizon (matches HA's sunrise definition).
    state: elevation > -0.833 ? "above_horizon" : "below_horizon",
    attributes: {
      elevation: Math.round(elevation * 100) / 100,
      azimuth: Math.round(azimuth * 100) / 100,
      rising: later.altitude > pos.altitude,
      next_dawn: nextEvent("dawn"),
      next_dusk: nextEvent("dusk"),
      next_midnight: nextEvent("nadir"),
      next_noon: nextEvent("solarNoon"),
      next_rising: nextEvent("sunrise"),
      next_setting: nextEvent("sunset")
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  computeSunState
});
//# sourceMappingURL=sun.js.map
