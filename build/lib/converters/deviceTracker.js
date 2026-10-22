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
var deviceTracker_exports = {};
__export(deviceTracker_exports, {
  presenceFromGps: () => presenceFromGps,
  presenceFromValue: () => presenceFromValue,
  processManualEntity: () => processManualEntity
});
module.exports = __toCommonJS(deviceTracker_exports);
var import_geoLocationEntity = require("../entities/geoLocationEntity");
var import_manualStates = require("./manualStates");
var import_geo = require("../geo");
const entityData = require("../../../lib/dataSingleton");
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
function presenceFromGps(lat, lon, accuracyM = 0) {
  var _a;
  const la = Number(lat);
  const lo = Number(lon);
  if (!isFinite(la) || !isFinite(lo)) {
    return null;
  }
  const zones = (entityData.entities || []).filter((entity) => {
    var _a2;
    return (_a2 = entity == null ? void 0 : entity.entity_id) == null ? void 0 : _a2.startsWith("zone.");
  });
  if (!zones.length) {
    return null;
  }
  const zone = (0, import_geo.findActiveZone)(la, lo, zones, accuracyM);
  if (!zone) {
    return "not_home";
  }
  const name = (_a = zone.attributes) == null ? void 0 : _a.friendly_name;
  return zone.entity_id === "zone.home" ? "home" : typeof name === "string" && name ? name : zone.entity_id;
}
function processManualEntity(id, obj, entity, objects, custom) {
  var _a, _b, _c, _d, _e;
  const states = (0, import_manualStates.collectManualStates)(custom);
  const domain = entity.context.type;
  const base = entity;
  entity.attributes.source = (_a = custom.attr_source) != null ? _a : "gps";
  const geoStates = {
    gps: states.gps,
    latitude: states.latitude,
    longitude: states.longitude,
    gps_accuracy: states.gps_accuracy
    // battery is wired below as the HA `battery_level` attribute, not the generic geo `battery`.
  };
  (0, import_geoLocationEntity.applyGeoLocationStates)(geoStates, objects, base);
  delete entity.attributes.unit_of_measurement;
  entity.attributes.icon = domain === "person" ? "mdi:account" : "mdi:account-arrow-right";
  let presenceId = states.presence;
  if (!presenceId) {
    const mainType = (_b = obj == null ? void 0 : obj.common) == null ? void 0 : _b.type;
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
          const derived = presenceFromGps(
            ent.attributes.latitude,
            ent.attributes.longitude,
            Number(ent.attributes.gps_accuracy) || 0
          );
          ent.state = derived != null ? derived : "unknown";
        }
      };
      base.addID2entity(gpsId);
    }
  }
  entity.context.ATTRIBUTES = (_c = entity.context.ATTRIBUTES) != null ? _c : [];
  if (states.battery) {
    base.addID2entity(states.battery);
    entity.context.ATTRIBUTES.push({ attribute: "battery_level", getId: states.battery });
  }
  if (domain === "device_tracker") {
    entity.attributes.source_type = custom.source_type || "gps";
  }
  if (states.entity_picture) {
    base.addID2entity(states.entity_picture);
    entity.context.ATTRIBUTES.push({ attribute: "entity_picture", getId: states.entity_picture });
  } else if (typeof custom.attr_entity_picture === "string" && custom.attr_entity_picture) {
    entity.attributes.entity_picture = custom.attr_entity_picture;
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
