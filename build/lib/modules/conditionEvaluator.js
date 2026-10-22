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
var conditionEvaluator_exports = {};
__export(conditionEvaluator_exports, {
  UnsupportedConditionError: () => UnsupportedConditionError,
  asArray: () => asArray,
  collectEntityIds: () => collectEntityIds,
  evaluateCondition: () => evaluateCondition
});
module.exports = __toCommonJS(conditionEvaluator_exports);
var import_jinja = require("./jinja");
var import_geo = require("../geo");
var import_sun = require("../sun");
const adapterData = require("../../../lib/dataSingleton");
class UnsupportedConditionError extends Error {
}
const CLIENT_CONDITIONS = ["screen", "user", "view_columns", "location", "time"];
const TRUTHY = ["true", "yes", "on", "enable", "1"];
const SUN_EVENTS = ["sunrise", "sunset"];
function asArray(value) {
  if (value === void 0 || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
function entityOf(entityId) {
  return typeof entityId === "string" ? adapterData.entityId2Entity[entityId] : void 0;
}
function valueOf(entity, attribute) {
  var _a;
  return typeof attribute === "string" ? (_a = entity.attributes) == null ? void 0 : _a[attribute] : entity.state;
}
function asText(value) {
  switch (typeof value) {
    case "string":
      return value;
    case "number":
    case "boolean":
    case "bigint":
      return value.toString();
    default:
      return void 0;
  }
}
function sameValue(value, wanted) {
  if (value === wanted) {
    return true;
  }
  const left = asText(value);
  const right = asText(wanted);
  return left !== void 0 && left === right;
}
function durationToMs(duration) {
  if (duration === void 0 || duration === null) {
    return 0;
  }
  if (typeof duration === "number") {
    return duration * 1e3;
  }
  if (typeof duration === "string") {
    const sign = duration.trim().startsWith("-") ? -1 : 1;
    const parts = duration.trim().replace(/^[+-]/, "").split(":").map(Number);
    if (parts.some((p) => isNaN(p))) {
      return 0;
    }
    const [hours = 0, minutes = 0, seconds = 0] = parts;
    return sign * ((hours * 60 + minutes) * 60 + seconds) * 1e3;
  }
  if (typeof duration === "object") {
    const d = duration;
    const num = (key) => Number(d[key]) || 0;
    return ((num("hours") * 60 + num("minutes")) * 60 + num("seconds")) * 1e3 + num("days") * 864e5 + num("milliseconds");
  }
  return 0;
}
function boundToNumber(bound) {
  if (bound === void 0 || bound === null) {
    return void 0;
  }
  const direct = Number(bound);
  if (!isNaN(direct)) {
    return direct;
  }
  const entity = entityOf(bound);
  const indirect = entity ? Number(entity.state) : NaN;
  return isNaN(indirect) ? void 0 : indirect;
}
function evaluateState(condition, context) {
  const entityIds = asArray(condition.entity_id);
  const wanted = asArray(condition.state);
  if (!entityIds.length || !wanted.length) {
    return false;
  }
  const forMs = durationToMs(condition.for);
  const results = entityIds.map((entityId) => {
    var _a;
    const entity = entityOf(entityId);
    if (!entity) {
      return false;
    }
    const value = valueOf(entity, condition.attribute);
    if (!wanted.some((want) => sameValue(value, want))) {
      return false;
    }
    if (!forMs) {
      return true;
    }
    const elapsed = Date.now() - (entity.last_changed || 0) * 1e3;
    if (elapsed >= forMs) {
      return true;
    }
    (_a = context.schedule) == null ? void 0 : _a.call(context, forMs - elapsed + 100);
    return false;
  });
  return condition.match === "any" ? results.some(Boolean) : results.every(Boolean);
}
function evaluateNumericState(condition) {
  const entityIds = asArray(condition.entity_id);
  if (!entityIds.length) {
    return false;
  }
  const above = boundToNumber(condition.above);
  const below = boundToNumber(condition.below);
  const results = entityIds.map((entityId) => {
    const entity = entityOf(entityId);
    if (!entity) {
      return false;
    }
    let value = valueOf(entity, condition.attribute);
    if (typeof condition.value_template === "string") {
      value = (0, import_jinja.renderJinja)(condition.value_template, { state: entity.state, value });
    }
    const num = Number(value);
    if (value === "" || value === null || isNaN(num)) {
      return false;
    }
    if (above !== void 0 && !(num > above)) {
      return false;
    }
    if (below !== void 0 && !(num < below)) {
      return false;
    }
    return true;
  });
  return condition.match === "any" ? results.some(Boolean) : results.every(Boolean);
}
function evaluateZone(condition) {
  const entityIds = asArray(condition.entity_id);
  const zoneIds = asArray(condition.zone);
  if (!entityIds.length || !zoneIds.length) {
    return false;
  }
  return entityIds.every((entityId) => {
    var _a, _b, _c;
    const entity = entityOf(entityId);
    if (!entity) {
      return false;
    }
    const latitude = Number((_a = entity.attributes) == null ? void 0 : _a.latitude);
    const longitude = Number((_b = entity.attributes) == null ? void 0 : _b.longitude);
    const accuracy = Number((_c = entity.attributes) == null ? void 0 : _c.gps_accuracy) || 0;
    return zoneIds.some((zoneId) => (0, import_geo.inZone)(latitude, longitude, entityOf(zoneId), accuracy));
  });
}
function homeCoordinates() {
  var _a, _b;
  const home = adapterData.entityId2Entity["zone.home"];
  const lat = Number((_a = home == null ? void 0 : home.attributes) == null ? void 0 : _a.latitude);
  const lng = Number((_b = home == null ? void 0 : home.attributes) == null ? void 0 : _b.longitude);
  return isFinite(lat) && isFinite(lng) ? { lat, lng } : void 0;
}
function sunLimit(event, offset, lat, lng, dayOffset) {
  if (typeof event !== "string" || !SUN_EVENTS.includes(event)) {
    return void 0;
  }
  const day = /* @__PURE__ */ new Date();
  day.setDate(day.getDate() + dayOffset);
  const time = (0, import_sun.sunEventTime)(event, lat, lng, day);
  return time ? time.getTime() + durationToMs(offset) : void 0;
}
function evaluateSun(condition, context) {
  var _a;
  const home = homeCoordinates();
  if (!home) {
    throw new UnsupportedConditionError(
      "condition sun needs the latitude/longitude from the ioBroker system settings"
    );
  }
  const namesBefore = typeof condition.before === "string" && SUN_EVENTS.includes(condition.before);
  const namesAfter = typeof condition.after === "string" && SUN_EVENTS.includes(condition.after);
  if (!namesBefore && !namesAfter) {
    return true;
  }
  const now = Date.now();
  const before = sunLimit(condition.before, condition.before_offset, home.lat, home.lng, 0);
  const after = sunLimit(condition.after, condition.after_offset, home.lat, home.lng, 0);
  const midnight = /* @__PURE__ */ new Date();
  midnight.setHours(24, 0, 0, 0);
  const next = [
    before,
    after,
    sunLimit(condition.before, condition.before_offset, home.lat, home.lng, 1),
    sunLimit(condition.after, condition.after_offset, home.lat, home.lng, 1),
    midnight.getTime()
  ].reduce(
    (soonest, time) => time !== void 0 && time > now && (soonest === void 0 || time < soonest) ? time : soonest,
    void 0
  );
  if (next !== void 0) {
    (_a = context.schedule) == null ? void 0 : _a.call(context, next - now + 1e3);
  }
  if (namesBefore && before === void 0 || namesAfter && after === void 0) {
    return false;
  }
  if (before !== void 0 && now > before) {
    return false;
  }
  if (after !== void 0 && now < after) {
    return false;
  }
  return true;
}
function evaluateTemplate(condition) {
  if (typeof condition.value_template !== "string") {
    return false;
  }
  const rendered = (0, import_jinja.renderJinja)(condition.value_template, null).trim();
  if (TRUTHY.includes(rendered.toLowerCase())) {
    return true;
  }
  const num = Number(rendered);
  return !isNaN(num) && num !== 0;
}
function logicalChildren(condition) {
  return asArray(condition.conditions).filter((child) => child && child.enabled !== false);
}
function evaluateCondition(condition, context = {}) {
  if (!condition || typeof condition !== "object") {
    throw new UnsupportedConditionError("condition is not an object");
  }
  const cond = condition;
  const type = typeof cond.condition === "string" ? cond.condition : "state";
  switch (type) {
    case "and":
      return logicalChildren(cond).every((child) => evaluateCondition(child, context));
    case "or":
      return logicalChildren(cond).some((child) => evaluateCondition(child, context));
    case "not":
      return !logicalChildren(cond).some((child) => evaluateCondition(child, context));
    case "state":
      return evaluateState(cond, context);
    case "numeric_state":
      return evaluateNumericState(cond);
    case "template":
      return evaluateTemplate(cond);
    case "zone":
      return evaluateZone(cond);
    case "sun":
      return evaluateSun(cond, context);
    default:
      throw new UnsupportedConditionError(
        CLIENT_CONDITIONS.includes(type) ? `condition ${type} is evaluated in the browser and should not be sent here` : `condition ${type} is not supported by ioBroker.lovelace`
      );
  }
}
function collectEntityIds(condition) {
  const ids = /* @__PURE__ */ new Set();
  const walk = (node) => {
    if (!node || typeof node !== "object") {
      return;
    }
    const cond = node;
    for (const entityId of asArray(cond.entity_id)) {
      if (typeof entityId === "string") {
        ids.add(entityId);
      }
    }
    for (const zoneId of asArray(cond.zone)) {
      if (typeof zoneId === "string") {
        ids.add(zoneId);
      }
    }
    for (const candidate of [cond.entity, cond.above, cond.below]) {
      if (typeof candidate === "string" && adapterData.entityId2Entity[candidate]) {
        ids.add(candidate);
      }
    }
    if (typeof cond.value_template === "string") {
      for (const entityId of (0, import_jinja.extractEntityIds)(cond.value_template)) {
        ids.add(entityId);
      }
    }
    for (const child of asArray(cond.conditions)) {
      walk(child);
    }
  };
  walk(condition);
  return [...ids];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UnsupportedConditionError,
  asArray,
  collectEntityIds,
  evaluateCondition
});
//# sourceMappingURL=conditionEvaluator.js.map
