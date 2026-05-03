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
var geoLocationEntity_exports = {};
__export(geoLocationEntity_exports, {
  GeoLocationEntity: () => GeoLocationEntity,
  applyGeoLocationStates: () => applyGeoLocationStates
});
module.exports = __toCommonJS(geoLocationEntity_exports);
var import_baseEntity = require("./baseEntity");
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
  if (!states.gps) {
    return;
  }
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
}
class GeoLocationEntity extends import_baseEntity.BaseEntity {
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
