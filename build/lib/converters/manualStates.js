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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  collectManualStates
});
//# sourceMappingURL=manualStates.js.map
