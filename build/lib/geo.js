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
var geo_exports = {};
__export(geo_exports, {
  distanceToZoneM: () => distanceToZoneM,
  findActiveZone: () => findActiveZone,
  haversineKm: () => haversineKm,
  inZone: () => inZone
});
module.exports = __toCommonJS(geo_exports);
function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = (d) => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
function distanceToZoneM(lat, lon, zone) {
  var _a, _b;
  const zoneLat = Number((_a = zone == null ? void 0 : zone.attributes) == null ? void 0 : _a.latitude);
  const zoneLon = Number((_b = zone == null ? void 0 : zone.attributes) == null ? void 0 : _b.longitude);
  if (!isFinite(lat) || !isFinite(lon) || !isFinite(zoneLat) || !isFinite(zoneLon)) {
    return void 0;
  }
  return haversineKm(lat, lon, zoneLat, zoneLon) * 1e3;
}
function inZone(lat, lon, zone, accuracyM = 0) {
  var _a;
  if (!zone || zone.state === "unavailable") {
    return false;
  }
  const radius = Number((_a = zone.attributes) == null ? void 0 : _a.radius);
  const distance = distanceToZoneM(lat, lon, zone);
  if (distance === void 0 || !isFinite(radius)) {
    return false;
  }
  return distance - accuracyM < radius;
}
function findActiveZone(lat, lon, zones, accuracyM = 0) {
  var _a, _b, _c;
  let closest;
  let minDistance = Infinity;
  for (const zone of [...zones].sort((a, b) => a.entity_id.localeCompare(b.entity_id))) {
    if (zone.state === "unavailable" || ((_a = zone.attributes) == null ? void 0 : _a.passive)) {
      continue;
    }
    const distance = distanceToZoneM(lat, lon, zone);
    if (distance === void 0 || !inZone(lat, lon, zone, accuracyM)) {
      continue;
    }
    const smaller = distance === minDistance && Number((_b = zone.attributes) == null ? void 0 : _b.radius) < Number((_c = closest == null ? void 0 : closest.attributes) == null ? void 0 : _c.radius);
    if (!closest || distance < minDistance || smaller) {
      closest = zone;
      minDistance = distance;
    }
  }
  return closest;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  distanceToZoneM,
  findActiveZone,
  haversineKm,
  inZone
});
//# sourceMappingURL=geo.js.map
