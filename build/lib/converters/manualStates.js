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
  collectManualStates: () => collectManualStates
});
module.exports = __toCommonJS(manualStates_exports);
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
function applyCustomAttributes(entity, custom) {
  var _a;
  for (const mapping of collectCustomAttributes(custom)) {
    entity.context.ATTRIBUTES = (_a = entity.context.ATTRIBUTES) != null ? _a : [];
    const existing = entity.context.ATTRIBUTES.find((attr) => attr.attribute === mapping.attribute);
    if (existing) {
      existing.getId = mapping.getId;
      delete existing.getParser;
    } else {
      entity.context.ATTRIBUTES.push({ attribute: mapping.attribute, getId: mapping.getId });
    }
    entity.addID2entity(mapping.getId);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  applyCustomAttributes,
  collectCustomAttributes,
  collectManualStates
});
//# sourceMappingURL=manualStates.js.map
