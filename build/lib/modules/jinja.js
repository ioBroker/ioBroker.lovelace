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
var jinja_exports = {};
__export(jinja_exports, {
  extractEntityIds: () => extractEntityIds,
  isJinjaTemplate: () => isJinjaTemplate,
  renderJinja: () => renderJinja
});
module.exports = __toCommonJS(jinja_exports);
var nunjucks = __toESM(require("nunjucks"));
const adapterData = require("../../../lib/dataSingleton");
function isJinjaTemplate(template) {
  return typeof template === "string" && (template.includes("{{") || template.includes("{%"));
}
function getEntity(entityId) {
  return adapterData.entityId2Entity[entityId];
}
function stateOf(entityId) {
  const entity = getEntity(entityId);
  if (!entity || entity.state === void 0 || entity.state === null) {
    return "unknown";
  }
  const value = entity.state;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  return JSON.stringify(value);
}
function buildStatesAccessor() {
  const fn = (entityId) => stateOf(entityId);
  return new Proxy(fn, {
    apply: (_target, _thisArg, args) => stateOf(String(args[0])),
    get: (target, domain) => {
      if (typeof domain !== "string" || domain in target) {
        return Reflect.get(target, domain);
      }
      return new Proxy(
        {},
        {
          get: (_t, object) => {
            if (typeof object !== "string") {
              return void 0;
            }
            const entity = getEntity(`${domain}.${object}`);
            return entity ? { state: entity.state, attributes: entity.attributes || {}, entity_id: entity.entity_id } : void 0;
          }
        }
      );
    }
  });
}
function allEntities() {
  return adapterData.entities || [];
}
function resolveArea(lookup) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const needle = typeof lookup === "string" ? lookup : "";
  if (!needle) {
    return { id: null, name: null };
  }
  const entity = getEntity(needle) || allEntities().find((e) => {
    var _a2;
    return ((_a2 = e.context) == null ? void 0 : _a2.deviceId) === needle;
  });
  if (entity) {
    return { id: (_b = (_a = entity.context) == null ? void 0 : _a.roomId) != null ? _b : null, name: (_d = (_c = entity.context) == null ? void 0 : _c.room) != null ? _d : null };
  }
  const inArea = allEntities().find((e) => {
    var _a2, _b2;
    return ((_a2 = e.context) == null ? void 0 : _a2.roomId) === needle || ((_b2 = e.context) == null ? void 0 : _b2.room) === needle;
  });
  return inArea ? { id: (_f = (_e = inArea.context) == null ? void 0 : _e.roomId) != null ? _f : null, name: (_h = (_g = inArea.context) == null ? void 0 : _g.room) != null ? _h : null } : { id: null, name: null };
}
function toNumber(value, fallback, asInt) {
  const text = typeof value === "number" ? String(value) : typeof value === "string" ? value.trim() : "";
  const num = text ? Number(text) : NaN;
  if (isNaN(num)) {
    return fallback === void 0 ? 0 : fallback;
  }
  return asInt ? Math.trunc(num) : num;
}
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function isDateTime(value) {
  return !!value && typeof value === "object" && value.__date instanceof Date;
}
function pad(value, width = 2) {
  return String(Math.abs(value)).padStart(width, "0");
}
function strftime(date, format, utc) {
  const year = utc ? date.getUTCFullYear() : date.getFullYear();
  const month = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
  const day = utc ? date.getUTCDate() : date.getDate();
  const hour = utc ? date.getUTCHours() : date.getHours();
  const minute = utc ? date.getUTCMinutes() : date.getMinutes();
  const second = utc ? date.getUTCSeconds() : date.getSeconds();
  const ms = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
  const weekday = utc ? date.getUTCDay() : date.getDay();
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  const startOfYear = utc ? Date.UTC(year, 0, 1) : new Date(year, 0, 1).getTime();
  const startOfDay = utc ? Date.UTC(year, month - 1, day) : new Date(year, month - 1, day).getTime();
  const yearDay = Math.round((startOfDay - startOfYear) / 864e5) + 1;
  const offsetMinutes = utc ? 0 : -date.getTimezoneOffset();
  const offset = `${offsetMinutes < 0 ? "-" : "+"}${pad(Math.trunc(Math.abs(offsetMinutes) / 60))}${pad(
    Math.abs(offsetMinutes) % 60
  )}`;
  const codes = {
    Y: () => String(year),
    y: () => pad(year % 100),
    C: () => pad(Math.trunc(year / 100)),
    m: () => pad(month),
    d: () => pad(day),
    e: () => String(day).padStart(2, " "),
    H: () => pad(hour),
    I: () => pad(hour12),
    M: () => pad(minute),
    S: () => pad(second),
    f: () => pad(ms * 1e3, 6),
    p: () => hour < 12 ? "AM" : "PM",
    A: () => DAY_NAMES[weekday],
    a: () => DAY_NAMES[weekday].slice(0, 3),
    B: () => MONTH_NAMES[month - 1],
    b: () => MONTH_NAMES[month - 1].slice(0, 3),
    h: () => MONTH_NAMES[month - 1].slice(0, 3),
    j: () => pad(yearDay, 3),
    w: () => String(weekday),
    u: () => String(weekday === 0 ? 7 : weekday),
    s: () => String(Math.floor(date.getTime() / 1e3)),
    z: () => offset,
    Z: () => utc ? "UTC" : offset,
    D: () => `${pad(month)}/${pad(day)}/${pad(year % 100)}`,
    F: () => `${year}-${pad(month)}-${pad(day)}`,
    R: () => `${pad(hour)}:${pad(minute)}`,
    T: () => `${pad(hour)}:${pad(minute)}:${pad(second)}`,
    x: () => `${pad(month)}/${pad(day)}/${pad(year % 100)}`,
    X: () => `${pad(hour)}:${pad(minute)}:${pad(second)}`,
    c: () => `${DAY_NAMES[weekday].slice(0, 3)} ${MONTH_NAMES[month - 1].slice(0, 3)} ${String(day).padStart(
      2,
      " "
    )} ${pad(hour)}:${pad(minute)}:${pad(second)} ${year}`,
    "%": () => "%"
  };
  return format.replace(/%(-?)([A-Za-z%])/g, (all, noPad, code) => {
    const render = codes[code];
    if (!render) {
      return all;
    }
    const text = render();
    return noPad ? text.replace(/^[0 ]+(?=.)/, "") : text;
  });
}
function isoOffset(date, utc) {
  if (utc) {
    return "+00:00";
  }
  const minutes = -date.getTimezoneOffset();
  return `${minutes < 0 ? "-" : "+"}${pad(Math.trunc(Math.abs(minutes) / 60))}:${pad(Math.abs(minutes) % 60)}`;
}
function makeDateTime(date, utc = false) {
  const self = {
    __date: date,
    __utc: utc,
    year: utc ? date.getUTCFullYear() : date.getFullYear(),
    month: (utc ? date.getUTCMonth() : date.getMonth()) + 1,
    day: utc ? date.getUTCDate() : date.getDate(),
    hour: utc ? date.getUTCHours() : date.getHours(),
    minute: utc ? date.getUTCMinutes() : date.getMinutes(),
    second: utc ? date.getUTCSeconds() : date.getSeconds(),
    microsecond: (utc ? date.getUTCMilliseconds() : date.getMilliseconds()) * 1e3,
    strftime: (format) => strftime(date, typeof format === "string" ? format : "", utc),
    timestamp: () => date.getTime() / 1e3,
    isoformat: () => `${strftime(date, "%Y-%m-%dT%H:%M:%S", utc)}${isoOffset(date, utc)}`,
    weekday: () => ((utc ? date.getUTCDay() : date.getDay()) + 6) % 7,
    // Python: Monday is 0
    isoweekday: () => (utc ? date.getUTCDay() : date.getDay()) || 7,
    date: () => strftime(date, "%Y-%m-%d", utc),
    time: () => strftime(date, "%H:%M:%S", utc),
    // Printing a datetime in Python gives "2026-10-17 20:15:00+02:00", and a template that
    // renders now() without a format expects exactly that, not a JS date string.
    toString: () => `${strftime(date, "%Y-%m-%d %H:%M:%S", utc)}${isoOffset(date, utc)}`
  };
  return self;
}
function toDate(value) {
  if (isDateTime(value)) {
    return value.__date;
  }
  if (value instanceof Date) {
    return isNaN(value.getTime()) ? null : value;
  }
  if (typeof value === "number") {
    return isNaN(value) ? null : new Date(value * 1e3);
  }
  if (typeof value === "string" && value.trim()) {
    const text = value.trim();
    const date = String(Number(text)) === text ? new Date(Number(text) * 1e3) : new Date(text);
    return isNaN(date.getTime()) ? null : date;
  }
  return null;
}
let env = null;
function getEnv() {
  if (env) {
    return env;
  }
  env = new nunjucks.Environment(null, { autoescape: false });
  env.addGlobal("states", buildStatesAccessor());
  env.addGlobal("is_state", (entityId, value) => stateOf(entityId) === String(value));
  env.addGlobal(
    "state_attr",
    (entityId, attribute) => {
      var _a, _b, _c;
      return (_c = (_b = (_a = getEntity(entityId)) == null ? void 0 : _a.attributes) == null ? void 0 : _b[attribute]) != null ? _c : null;
    }
  );
  env.addGlobal(
    "is_state_attr",
    (entityId, attribute, value) => {
      var _a, _b;
      return String((_b = (_a = getEntity(entityId)) == null ? void 0 : _a.attributes) == null ? void 0 : _b[attribute]) === String(value);
    }
  );
  env.addGlobal("has_value", (entityId) => {
    const s = stateOf(entityId);
    return s !== "unknown" && s !== "unavailable";
  });
  env.addGlobal("now", () => makeDateTime(/* @__PURE__ */ new Date()));
  env.addGlobal("utcnow", () => makeDateTime(/* @__PURE__ */ new Date(), true));
  env.addGlobal("today_at", (time) => {
    const text = typeof time === "string" && time.trim() ? time.trim() : "00:00:00";
    const [h, m, sec] = text.split(":");
    const date = /* @__PURE__ */ new Date();
    date.setHours(Number(h) || 0, Number(m) || 0, Number(sec) || 0, 0);
    return makeDateTime(date);
  });
  env.addGlobal("area_id", (lookup) => resolveArea(lookup).id);
  env.addGlobal("area_name", (lookup) => resolveArea(lookup).name);
  env.addGlobal("areas", () => [
    ...new Set(
      allEntities().map((e) => {
        var _a;
        return (_a = e.context) == null ? void 0 : _a.roomId;
      }).filter((id) => !!id)
    )
  ]);
  env.addGlobal("area_entities", (lookup) => {
    const area = resolveArea(lookup);
    return area.id ? allEntities().filter((e) => {
      var _a;
      return ((_a = e.context) == null ? void 0 : _a.roomId) === area.id;
    }).map((e) => e.entity_id) : [];
  });
  env.addGlobal("device_id", (entityId) => {
    var _a, _b, _c;
    return (_c = (_b = (_a = getEntity(String(entityId))) == null ? void 0 : _a.context) == null ? void 0 : _b.deviceId) != null ? _c : null;
  });
  env.addGlobal(
    "device_entities",
    (deviceId) => allEntities().filter((e) => {
      var _a;
      return ((_a = e.context) == null ? void 0 : _a.deviceId) === String(deviceId);
    }).map((e) => e.entity_id)
  );
  env.addGlobal(
    "expand",
    (...args) => args.flat().map((id) => getEntity(String(id))).filter((e) => !!e).map((e) => ({ entity_id: e.entity_id, state: e.state, attributes: e.attributes || {} }))
  );
  env.addGlobal(
    "iif",
    (condition, ifTrue = true, ifFalse = false) => condition ? ifTrue : ifFalse
  );
  env.addGlobal("float", (value, fallback) => toNumber(value, fallback, false));
  env.addGlobal("int", (value, fallback) => toNumber(value, fallback, true));
  env.addGlobal("as_timestamp", (value, fallback) => {
    const date = toDate(value);
    return date ? date.getTime() / 1e3 : fallback != null ? fallback : null;
  });
  env.addGlobal("as_datetime", (value, fallback) => {
    const date = toDate(value);
    return date ? makeDateTime(date) : fallback != null ? fallback : null;
  });
  env.addGlobal("as_local", (value) => {
    const date = toDate(value);
    return date ? makeDateTime(date) : null;
  });
  env.addFilter(
    "count",
    (value) => Array.isArray(value) || typeof value === "string" ? value.length : Object.keys(value || {}).length
  );
  env.addFilter("as_datetime", (value, fallback) => {
    const date = toDate(value);
    return date ? makeDateTime(date) : fallback != null ? fallback : null;
  });
  env.addFilter("as_timestamp", (value, fallback) => {
    const date = toDate(value);
    return date ? date.getTime() / 1e3 : fallback != null ? fallback : null;
  });
  env.addFilter("as_local", (value) => {
    const date = toDate(value);
    return date ? makeDateTime(date) : null;
  });
  env.addFilter("timestamp_custom", (value, format, local, fallback) => {
    const date = toDate(value);
    if (!date) {
      return fallback != null ? fallback : null;
    }
    return strftime(date, typeof format === "string" ? format : "%Y-%m-%dT%H:%M:%S", local === false);
  });
  env.addFilter("timestamp_local", (value, fallback) => {
    const date = toDate(value);
    return date ? `${strftime(date, "%Y-%m-%dT%H:%M:%S", false)}${isoOffset(date, false)}` : fallback != null ? fallback : null;
  });
  env.addFilter("timestamp_utc", (value, fallback) => {
    const date = toDate(value);
    return date ? strftime(date, "%Y-%m-%dT%H:%M:%S+00:00", true) : fallback != null ? fallback : null;
  });
  env.addFilter("strftime", (value, format) => {
    const date = toDate(value);
    return date ? strftime(date, typeof format === "string" ? format : "%Y-%m-%dT%H:%M:%S", false) : null;
  });
  return env;
}
function renderJinja(template, variables) {
  try {
    return getEnv().renderString(template, variables ? { ...variables } : {});
  } catch (e) {
    return `Template error: ${e.message}`;
  }
}
function extractEntityIds(template) {
  const ids = /* @__PURE__ */ new Set();
  const re = /[a-z_][a-z0-9_]*\.[A-Za-z0-9_]+/g;
  let match;
  while ((match = re.exec(template)) !== null) {
    if (adapterData.entityId2Entity[match[0]]) {
      ids.add(match[0]);
    }
  }
  return [...ids];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  extractEntityIds,
  isJinjaTemplate,
  renderJinja
});
//# sourceMappingURL=jinja.js.map
