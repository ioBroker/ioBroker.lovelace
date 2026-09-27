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
var stateResponse_exports = {};
__export(stateResponse_exports, {
  stateToResponse: () => stateToResponse
});
module.exports = __toCommonJS(stateResponse_exports);
function stateToResponse(value) {
  if (typeof value === "string") {
    const dataUrl = /^data:([^;,]*)(;base64)?,/.exec(value);
    if (dataUrl) {
      const payload = value.substring(dataUrl[0].length);
      return {
        contentType: dataUrl[1] || "application/octet-stream",
        body: dataUrl[2] ? Buffer.from(payload, "base64") : Buffer.from(decodeURIComponent(payload), "utf8")
      };
    }
    return { contentType: "text/plain", body: value };
  }
  if (value === null || value === void 0) {
    return { contentType: "text/plain", body: "" };
  }
  if (typeof value === "object") {
    return { contentType: "application/json", body: JSON.stringify(value) };
  }
  return { contentType: "text/plain", body: String(value) };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  stateToResponse
});
//# sourceMappingURL=stateResponse.js.map
