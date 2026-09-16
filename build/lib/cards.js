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
var cards_exports = {};
__export(cards_exports, {
  cacheBuster: () => cacheBuster,
  detectCardVersion: () => detectCardVersion
});
module.exports = __toCommonJS(cards_exports);
const SEMVER = "(\\d+\\.\\d+(?:\\.\\d+)?(?:[-+][0-9A-Za-z.]+)?)";
function resolveVariable(content, name) {
  const match = new RegExp(`(?:^|[^\\w$.])${name}\\s*=\\s*["'\`]v?${SEMVER}["'\`]`).exec(content);
  return match == null ? void 0 : match[1];
}
function detectCardVersion(content) {
  const bannerRegEx = /%c/g;
  let banner = bannerRegEx.exec(content);
  while (banner) {
    const window = content.substring(banner.index, banner.index + 250);
    const literal = new RegExp(`[vV](?:ersion)?\\.?\\s*${SEMVER}`).exec(window);
    if (literal) {
      return literal[1];
    }
    const reference = /\$\{(\w+)\}|\.concat\((\w+)/.exec(window);
    const resolved = reference && resolveVariable(content, reference[1] || reference[2]);
    if (resolved) {
      return resolved;
    }
    banner = bannerRegEx.exec(content);
  }
  const constant = new RegExp(`(?:card[_ ]?version|version)["'\`\\s:=]{1,12}v?${SEMVER}`, "i").exec(content);
  return constant == null ? void 0 : constant[1];
}
function cacheBuster(file) {
  var _a, _b;
  const version = file.modifiedAt || ((_a = file.stats) == null ? void 0 : _a.mtimeMs) || ((_b = file.stats) == null ? void 0 : _b.size);
  return version ? `?v=${version}` : "";
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cacheBuster,
  detectCardVersion
});
//# sourceMappingURL=cards.js.map
