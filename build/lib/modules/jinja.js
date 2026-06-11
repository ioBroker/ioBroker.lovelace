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
  env.addGlobal("now", () => /* @__PURE__ */ new Date());
  env.addGlobal("utcnow", () => /* @__PURE__ */ new Date());
  return env;
}
function renderJinja(template) {
  try {
    return getEnv().renderString(template, {});
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
