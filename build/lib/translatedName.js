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
var translatedName_exports = {};
__export(translatedName_exports, {
  resolveTranslatedName: () => resolveTranslatedName
});
module.exports = __toCommonJS(translatedName_exports);
function resolveTranslatedName(name, lang, fallback = "") {
  if (typeof name === "string") {
    return name;
  }
  if (name && typeof name === "object") {
    const map = name;
    return map[lang] || map.en || Object.values(map).find((entry) => typeof entry === "string") || fallback;
  }
  return fallback;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  resolveTranslatedName
});
//# sourceMappingURL=translatedName.js.map
