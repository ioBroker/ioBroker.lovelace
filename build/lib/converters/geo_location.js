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
var geo_location_exports = {};
__export(geo_location_exports, {
  GeoLocationConverter: () => GeoLocationConverter
});
module.exports = __toCommonJS(geo_location_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_converter = __toESM(require("./converter"));
var import_utils = require("../entities/utils");
function fillGeoLocationEntityFromStates(states, objects, entity) {
  var _a, _b, _c;
  (0, import_utils.fillEntityFromStates)(states, entity, objects);
  entity.attributes.icon = "mdi:crosshairs-gps";
  if (!states.gps) {
    return;
  }
  const gpsAttr = (_a = entity.context.ATTRIBUTES) == null ? void 0 : _a.find((a) => a.attribute === "gps");
  const parseGps = (_entity, _attr, iobState) => {
    var _a2;
    const value = ((_a2 = iobState == null ? void 0 : iobState.val) != null ? _a2 : "").toString();
    let parts = value.split(";");
    if (parts.length !== 2) {
      parts = value.split(",");
    }
    if (parts.length === 2) {
      _entity.attributes.latitude = parseFloat(parts[0]);
      _entity.attributes.longitude = parseFloat(parts[1]);
    }
  };
  if (gpsAttr) {
    gpsAttr.getParser = parseGps;
  }
  if (!states.latitude) {
    entity.context.ATTRIBUTES = (_b = entity.context.ATTRIBUTES) != null ? _b : [];
    entity.context.ATTRIBUTES.push({
      attribute: "latitude",
      getId: states.gps,
      getParser: parseGps,
      historyParser: (_id, val) => {
        var _a2;
        const str = (val != null ? val : "").toString();
        let parts = str.split(";");
        if (parts.length !== 2) {
          parts = str.split(",");
        }
        return (_a2 = parts[0]) != null ? _a2 : "";
      }
    });
  }
  if (!states.longitude) {
    entity.context.ATTRIBUTES = (_c = entity.context.ATTRIBUTES) != null ? _c : [];
    entity.context.ATTRIBUTES.push({
      attribute: "longitude",
      getId: states.gps,
      getParser: parseGps,
      historyParser: (_id, val) => {
        var _a2;
        const str = (val != null ? val : "").toString();
        let parts = str.split(";");
        if (parts.length !== 2) {
          parts = str.split(",");
        }
        return (_a2 = parts[1]) != null ? _a2 : "";
      }
    });
  }
}
class GeoLocationConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    const { controls, objects, forcedEntityId, friendlyName, room, func } = params;
    const entity = (0, import_utils.processCommon)(friendlyName, room, func, objects[params.id], "geo_location", forcedEntityId);
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
    entity.attributes.source = "gps";
    fillGeoLocationEntityFromStates(states, objects, entity);
    return [entity];
  }
}
import_converter.default.converters[import_type_detector.Types.location] = GeoLocationConverter;
import_converter.default.converters[import_type_detector.Types.locationOne] = GeoLocationConverter;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GeoLocationConverter
});
//# sourceMappingURL=geo_location.js.map
