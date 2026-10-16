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
  cardsVersion: () => cardsVersion,
  detectCardVersion: () => detectCardVersion,
  staticCardUrl: () => staticCardUrl,
  stripCardsVersion: () => stripCardsVersion
});
module.exports = __toCommonJS(cards_exports);
var import_node_fs = require("node:fs");
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
const ADAPTER_VERSION = JSON.parse((0, import_node_fs.readFileSync)(`${__dirname}/../../package.json`, "utf8")).version;
function staticCardUrl(file) {
  return `/cards/_static_${file}?v=${ADAPTER_VERSION}`;
}
const CARDS_VERSION_PREFIX = "_v";
function cardsVersion(files) {
  var _a, _b;
  let newest = 0;
  for (const file of files) {
    const stamp = file.modifiedAt || ((_a = file.stats) == null ? void 0 : _a.mtimeMs) || ((_b = file.stats) == null ? void 0 : _b.size) || 0;
    if (stamp > newest) {
      newest = stamp;
    }
  }
  return newest ? `${CARDS_VERSION_PREFIX}${newest}` : "";
}
function stripCardsVersion(file) {
  const match = new RegExp(`^/cards/${CARDS_VERSION_PREFIX}\\d+/`).exec(file);
  return match ? { file: `/cards/${file.substring(match[0].length)}`, versioned: true } : { file, versioned: false };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cardsVersion,
  detectCardVersion,
  staticCardUrl,
  stripCardsVersion
});
//# sourceMappingURL=cards.js.map
