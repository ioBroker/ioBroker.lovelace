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
  GeoLocationConverter: () => GeoLocationConverter,
  processManualEntity: () => processManualEntity
});
module.exports = __toCommonJS(geo_location_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_converter = __toESM(require("./converter"));
var import_geoLocationEntity = require("../entities/geoLocationEntity");
class GeoLocationConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    return [new import_geoLocationEntity.GeoLocationEntity(params)];
  }
}
function processManualEntity(_id, _obj, entity, objects, custom) {
  var _a, _b;
  const states = (_a = custom.states) != null ? _a : {};
  entity.attributes.source = (_b = custom.attr_source) != null ? _b : "gps";
  (0, import_geoLocationEntity.applyGeoLocationStates)(states, objects, entity);
  return [entity];
}
import_converter.default.converters[import_type_detector.Types.location] = GeoLocationConverter;
import_converter.default.converters[import_type_detector.Types.locationOne] = GeoLocationConverter;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GeoLocationConverter,
  processManualEntity
});
//# sourceMappingURL=geo_location.js.map
