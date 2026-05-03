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
var entity_exports = {};
__export(entity_exports, {
  BaseEntity: () => import_baseEntity.BaseEntity,
  Entity: () => import_baseEntity.BaseEntity,
  processCommon: () => import_baseEntity.processCommon
});
module.exports = __toCommonJS(entity_exports);
var import_baseEntity = require("../entities/baseEntity");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseEntity,
  Entity,
  processCommon
});
//# sourceMappingURL=entity.js.map
