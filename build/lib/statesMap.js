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
var statesMap_exports = {};
__export(statesMap_exports, {
  normalizeStates: () => normalizeStates,
  parseStatesString: () => parseStatesString
});
module.exports = __toCommonJS(statesMap_exports);
function parseStatesString(raw) {
  const states = {};
  for (const pair of raw.split(";")) {
    if (!pair.trim()) {
      continue;
    }
    const separator = pair.indexOf(":");
    const key = separator === -1 ? pair.trim() : pair.substring(0, separator).trim();
    const text = separator === -1 ? pair.trim() : pair.substring(separator + 1).trim();
    if (key) {
      states[key] = text || key;
    }
  }
  return states;
}
function normalizeStates(raw, warn) {
  if (raw === void 0 || raw === null || raw === "") {
    return void 0;
  }
  if (Array.isArray(raw)) {
    return raw;
  }
  if (typeof raw === "string") {
    warn == null ? void 0 : warn();
    return parseStatesString(raw);
  }
  if (typeof raw === "object") {
    return raw;
  }
  return void 0;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  normalizeStates,
  parseStatesString
});
//# sourceMappingURL=statesMap.js.map
