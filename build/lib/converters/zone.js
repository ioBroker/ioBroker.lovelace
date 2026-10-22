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
var zone_exports = {};
__export(zone_exports, {
  processManualEntity: () => processManualEntity
});
module.exports = __toCommonJS(zone_exports);
var import_manualStates = require("./manualStates");
const DEFAULT_RADIUS = 100;
function parseGpsPart(index) {
  return (entity, attr, state) => {
    var _a;
    const value = ((_a = state == null ? void 0 : state.val) != null ? _a : "").toString();
    let parts = value.split(";");
    if (parts.length !== 2) {
      parts = value.split(",");
    }
    if (parts.length === 2) {
      entity.attributes[attr.attribute] = parseFloat(parts[index]);
    }
  };
}
function numericAttribute(entity, name) {
  if (entity.attributes[name] === void 0) {
    return;
  }
  const value = Number(entity.attributes[name]);
  if (isFinite(value)) {
    entity.attributes[name] = value;
  } else {
    delete entity.attributes[name];
  }
}
function processManualEntity(id, obj, entity, _objects, custom) {
  var _a, _b;
  const states = (0, import_manualStates.collectManualStates)(custom);
  const base = entity;
  for (const name of ["latitude", "longitude", "radius"]) {
    numericAttribute(entity, name);
  }
  if (entity.attributes.radius === void 0) {
    entity.attributes.radius = DEFAULT_RADIUS;
  }
  entity.attributes.passive = !!custom.attr_passive;
  entity.attributes.editable = false;
  entity.attributes.icon = entity.attributes.icon || "mdi:map-marker-radius";
  entity.state = "zoning";
  entity.context.STATE = { getValue: "zoning", getId: null, attribute: "state" };
  entity.context.ATTRIBUTES = (_a = entity.context.ATTRIBUTES) != null ? _a : [];
  const gpsId = states.gps || (!states.latitude && !states.longitude && ((_b = obj == null ? void 0 : obj.common) == null ? void 0 : _b.type) === "string" ? id : void 0);
  if (gpsId) {
    base.addID2entity(gpsId);
    entity.context.ATTRIBUTES.push({ attribute: "latitude", getId: gpsId, getParser: parseGpsPart(0) });
    entity.context.ATTRIBUTES.push({ attribute: "longitude", getId: gpsId, getParser: parseGpsPart(1) });
  } else {
    for (const name of ["latitude", "longitude"]) {
      if (states[name]) {
        base.addID2entity(states[name]);
        entity.context.ATTRIBUTES.push({ attribute: name, getId: states[name] });
      }
    }
  }
  if (states.radius) {
    base.addID2entity(states.radius);
    entity.context.ATTRIBUTES.push({ attribute: "radius", getId: states.radius });
  }
  return [entity];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  processManualEntity
});
//# sourceMappingURL=zone.js.map
