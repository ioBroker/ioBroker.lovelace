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
var imageEntity_exports = {};
__export(imageEntity_exports, {
  IMAGE_PROXY_PATH: () => IMAGE_PROXY_PATH,
  applyImageAttributes: () => applyImageAttributes,
  imageProxyUrl: () => imageProxyUrl
});
module.exports = __toCommonJS(imageEntity_exports);
var import_utils = require("./utils");
const IMAGE_PROXY_PATH = "/api/image_proxy";
function imageProxyUrl(entityId, accessToken, state) {
  return accessToken ? `${IMAGE_PROXY_PATH}/${entityId}?token=${accessToken}&state=${state}` : void 0;
}
function applyImageAttributes(entity, urlStateId) {
  entity.context.STATE.getId = urlStateId;
  entity.context.STATE.setId = null;
  entity.attributes.access_token = (0, import_utils.generateAccessToken)();
  entity.context.STATE.getParser = (ent, _attr, state) => {
    ent.state = new Date(state.lc || state.ts || Date.now()).toISOString();
    ent.attributes.entity_picture = imageProxyUrl(ent.entity_id, ent.attributes.access_token, ent.state);
  };
  entity.addID2entity(urlStateId);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IMAGE_PROXY_PATH,
  applyImageAttributes,
  imageProxyUrl
});
//# sourceMappingURL=imageEntity.js.map
