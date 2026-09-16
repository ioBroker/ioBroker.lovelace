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
var manualStates_exports = {};
__export(manualStates_exports, {
  applyCustomAttributes: () => applyCustomAttributes,
  collectCustomAttributes: () => collectCustomAttributes,
  collectManualStates: () => collectManualStates,
  parseJsonStateValue: () => parseJsonStateValue
});
module.exports = __toCommonJS(manualStates_exports);
var import_utils = require("../entities/utils");
function collectManualStates(custom) {
  const out = { ...custom.states || {} };
  for (const [key, value] of Object.entries(custom)) {
    if (key.startsWith("state_") && typeof value === "string" && value) {
      out[key.slice("state_".length)] = value;
    }
  }
  return out;
}
function collectCustomAttributes(custom) {
  const rows = custom.customAttributes;
  if (!Array.isArray(rows)) {
    return [];
  }
  const result = [];
  for (const row of rows) {
    const attribute = typeof (row == null ? void 0 : row.attribute) === "string" ? row.attribute.trim() : "";
    const getId = typeof (row == null ? void 0 : row.state) === "string" ? row.state.trim() : "";
    if (attribute && getId) {
      result.push({ attribute, getId });
    }
  }
  return result;
}
const JSON_STATE_TYPES = ["array", "object", "mixed"];
function parseJsonStateValue(value) {
  if (typeof value !== "string") {
    return value;
  }
  const trimmed = value.trim();
  if (!trimmed.startsWith("[") && !trimmed.startsWith("{")) {
    return value;
  }
  try {
    return JSON.parse(trimmed);
  } catch {
    return value;
  }
}
function jsonAttributeParser(entity, attr, state) {
  (0, import_utils.setJsonAttribute)(entity.attributes, attr.attribute, parseJsonStateValue(state == null ? void 0 : state.val));
}
function applyCustomAttributes(entity, custom, objects) {
  var _a, _b, _c;
  for (const mapping of collectCustomAttributes(custom)) {
    entity.context.ATTRIBUTES = (_a = entity.context.ATTRIBUTES) != null ? _a : [];
    const stateType = (_c = (_b = objects == null ? void 0 : objects[mapping.getId]) == null ? void 0 : _b.common) == null ? void 0 : _c.type;
    const getParser = JSON_STATE_TYPES.includes(stateType || "") ? jsonAttributeParser : void 0;
    const existing = entity.context.ATTRIBUTES.find((attr) => attr.attribute === mapping.attribute);
    if (existing) {
      existing.getId = mapping.getId;
      delete existing.getParser;
      if (getParser) {
        existing.getParser = getParser;
      }
    } else {
      const attribute = { attribute: mapping.attribute, getId: mapping.getId };
      if (getParser) {
        attribute.getParser = getParser;
      }
      entity.context.ATTRIBUTES.push(attribute);
    }
    entity.addID2entity(mapping.getId);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  applyCustomAttributes,
  collectCustomAttributes,
  collectManualStates,
  parseJsonStateValue
});
//# sourceMappingURL=manualStates.js.map
