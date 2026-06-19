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
var deviceTracker_exports = {};
__export(deviceTracker_exports, {
  presenceFromGps: () => presenceFromGps,
  presenceFromValue: () => presenceFromValue,
  processManualEntity: () => processManualEntity
});
module.exports = __toCommonJS(deviceTracker_exports);
var import_geoLocationEntity = require("../entities/geoLocationEntity");
var import_dataSingleton = __toESM(require("../../../lib/dataSingleton"));
const EARTH_RADIUS_KM = 6371;
function haversineKm(lat1, lon1, lat2, lon2) {
  const toRad = (d) => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return EARTH_RADIUS_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
function presenceFromValue(val) {
  if (typeof val === "boolean") {
    return val ? "home" : "not_home";
  }
  if (typeof val === "number") {
    return String(val);
  }
  if (typeof val !== "string" || val === "") {
    return "unknown";
  }
  if (val === "true") {
    return "home";
  }
  if (val === "false") {
    return "not_home";
  }
  return val;
}
function presenceFromGps(lat, lon) {
  var _a, _b, _c, _d;
  const home = (_a = import_dataSingleton.default.entityId2Entity) == null ? void 0 : _a["zone.home"];
  const la = Number(lat);
  const lo = Number(lon);
  const homeLat = Number((_b = home == null ? void 0 : home.attributes) == null ? void 0 : _b.latitude);
  const homeLon = Number((_c = home == null ? void 0 : home.attributes) == null ? void 0 : _c.longitude);
  if (!isFinite(la) || !isFinite(lo) || !isFinite(homeLat) || !isFinite(homeLon)) {
    return null;
  }
  const radiusM = Number((_d = home == null ? void 0 : home.attributes) == null ? void 0 : _d.radius) || 100;
  const distanceM = haversineKm(la, lo, homeLat, homeLon) * 1e3;
  return distanceM <= radiusM ? "home" : "not_home";
}
function processManualEntity(id, obj, entity, objects, custom) {
  var _a, _b, _c, _d, _e;
  const states = (_a = custom.states) != null ? _a : {};
  const domain = entity.context.type;
  const base = entity;
  entity.attributes.source = (_b = custom.attr_source) != null ? _b : "gps";
  const geoStates = {
    gps: states.gps,
    latitude: states.latitude,
    longitude: states.longitude,
    gps_accuracy: states.gps_accuracy,
    battery: states.battery
  };
  (0, import_geoLocationEntity.applyGeoLocationStates)(geoStates, objects, base);
  delete entity.attributes.unit_of_measurement;
  entity.attributes.icon = domain === "person" ? "mdi:account" : "mdi:account-arrow-right";
  let presenceId = states.presence;
  if (!presenceId) {
    const mainType = (_c = obj == null ? void 0 : obj.common) == null ? void 0 : _c.type;
    if (mainType === "boolean" || mainType === "string") {
      presenceId = id;
    }
  }
  if (presenceId) {
    entity.context.STATE = {
      getId: presenceId,
      attribute: "state",
      getParser: (ent, _a2, st) => {
        ent.state = presenceFromValue(st == null ? void 0 : st.val);
      }
    };
    base.addID2entity(presenceId);
  } else {
    const gpsId = states.gps || states.latitude;
    if (gpsId) {
      entity.context.STATE = {
        getId: gpsId,
        attribute: "state",
        getParser: (ent) => {
          const derived = presenceFromGps(ent.attributes.latitude, ent.attributes.longitude);
          ent.state = derived != null ? derived : "unknown";
        }
      };
      base.addID2entity(gpsId);
    }
  }
  if (domain === "person") {
    entity.attributes.device_trackers = (_d = entity.attributes.device_trackers) != null ? _d : [];
    entity.attributes.user_id = null;
    entity.attributes.id = (_e = custom.name) != null ? _e : entity.entity_id.split(".").slice(1).join(".");
    entity.attributes.editable = false;
  }
  return [entity];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  presenceFromGps,
  presenceFromValue,
  processManualEntity
});
//# sourceMappingURL=deviceTracker.js.map
