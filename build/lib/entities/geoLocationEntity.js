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
var geoLocationEntity_exports = {};
__export(geoLocationEntity_exports, {
  GeoLocationEntity: () => GeoLocationEntity,
  applyGeoLocationStates: () => applyGeoLocationStates
});
module.exports = __toCommonJS(geoLocationEntity_exports);
var import_baseEntity = require("./baseEntity");
var import_dataSingleton = __toESM(require("../../../lib/dataSingleton"));
function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = (d) => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
function distanceFromHome(lat, lon) {
  var _a, _b;
  const entityId2Entity = import_dataSingleton.default.entityId2Entity;
  const home = entityId2Entity == null ? void 0 : entityId2Entity["zone.home"];
  const homeLat = (_a = home == null ? void 0 : home.attributes) == null ? void 0 : _a.latitude;
  const homeLon = (_b = home == null ? void 0 : home.attributes) == null ? void 0 : _b.longitude;
  if (!isFinite(lat) || !isFinite(lon) || homeLat == null || !isFinite(homeLat) || homeLon == null || !isFinite(homeLon)) {
    return null;
  }
  return haversineKm(lat, lon, homeLat, homeLon).toFixed(1);
}
function parseGps(entity, _attr, iobState) {
  var _a;
  const value = ((_a = iobState == null ? void 0 : iobState.val) != null ? _a : "").toString();
  let parts = value.split(";");
  if (parts.length !== 2) {
    parts = value.split(",");
  }
  if (parts.length === 2) {
    entity.attributes.latitude = parseFloat(parts[0]);
    entity.attributes.longitude = parseFloat(parts[1]);
  }
}
function applyGeoLocationStates(states, objects, entity) {
  entity.fillFromStates(states, objects);
  entity.attributes.icon = "mdi:crosshairs-gps";
  entity.attributes.unit_of_measurement = "km";
  if (states.gps) {
    entity.context.STATE.getId = states.gps;
    entity.context.STATE.getParser = (ent, _attr, state) => {
      var _a;
      const value = ((_a = state == null ? void 0 : state.val) != null ? _a : "").toString();
      let parts = value.split(";");
      if (parts.length !== 2) {
        parts = value.split(",");
      }
      if (parts.length === 2) {
        const lat = parseFloat(parts[0]);
        const lon = parseFloat(parts[1]);
        ent.attributes.latitude = lat;
        ent.attributes.longitude = lon;
        const dist = distanceFromHome(lat, lon);
        if (dist !== null) {
          ent.state = dist;
        }
      }
    };
    const gpsAttr = entity.context.ATTRIBUTES.find((a) => a.attribute === "gps");
    if (gpsAttr) {
      gpsAttr.getParser = parseGps;
    }
    if (!states.latitude) {
      entity.context.ATTRIBUTES.push({
        attribute: "latitude",
        getId: states.gps,
        getParser: parseGps,
        historyParser: (_id, val) => {
          var _a;
          const str = (val != null ? val : "").toString();
          let parts = str.split(";");
          if (parts.length !== 2) {
            parts = str.split(",");
          }
          return (_a = parts[0]) != null ? _a : "";
        }
      });
    }
    if (!states.longitude) {
      entity.context.ATTRIBUTES.push({
        attribute: "longitude",
        getId: states.gps,
        getParser: parseGps,
        historyParser: (_id, val) => {
          var _a;
          const str = (val != null ? val : "").toString();
          let parts = str.split(";");
          if (parts.length !== 2) {
            parts = str.split(",");
          }
          return (_a = parts[1]) != null ? _a : "";
        }
      });
    }
  } else {
    if (states.latitude) {
      entity.context.STATE.getId = states.latitude;
      entity.context.STATE.getParser = (ent, _attr, state) => {
        const lat = parseFloat(state.val);
        ent.attributes.latitude = lat;
        const dist = distanceFromHome(lat, ent.attributes.longitude);
        if (dist !== null) {
          ent.state = dist;
        }
      };
    }
    if (states.longitude) {
      const lonAttr = entity.context.ATTRIBUTES.find((a) => a.attribute === "longitude");
      if (lonAttr) {
        lonAttr.getParser = (ent, _attr, state) => {
          const lon = parseFloat(state.val);
          ent.attributes.longitude = lon;
          const dist = distanceFromHome(ent.attributes.latitude, lon);
          if (dist !== null) {
            ent.state = dist;
          }
        };
      }
    }
  }
}
class GeoLocationEntity extends import_baseEntity.BaseEntity {
  /** @param params - converter parameters */
  constructor(params) {
    const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
    super(friendlyName, room, func, objects[id], "geo_location", forcedEntityId);
    const states = {};
    let state = controls.states.find((s) => s.id && s.name === "GPS");
    if (state == null ? void 0 : state.id) {
      states.gps = state.id;
    } else {
      state = controls.states.find((s) => s.id && s.name === "LATITUDE");
      if (state == null ? void 0 : state.id) {
        states.latitude = state.id;
      }
      state = controls.states.find((s) => s.id && s.name === "LONGITUDE");
      if (state == null ? void 0 : state.id) {
        states.longitude = state.id;
      }
    }
    state = controls.states.find((s) => s.id && s.name === "RADIUS");
    if (state == null ? void 0 : state.id) {
      states.radius = state.id;
    }
    state = controls.states.find((s) => s.id && s.name === "ACCURACY");
    if (state == null ? void 0 : state.id) {
      states.gps_accuracy = state.id;
    }
    state = controls.states.find((s) => s.id && s.name === "BATTERY");
    if (state == null ? void 0 : state.id) {
      states.battery = state.id;
    }
    this.attributes.source = "gps";
    applyGeoLocationStates(states, objects, this);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GeoLocationEntity,
  applyGeoLocationStates
});
//# sourceMappingURL=geoLocationEntity.js.map
