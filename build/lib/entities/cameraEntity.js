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
var cameraEntity_exports = {};
__export(cameraEntity_exports, {
  CameraEntity: () => CameraEntity,
  applyCameraUrlAttributes: () => applyCameraUrlAttributes
});
module.exports = __toCommonJS(cameraEntity_exports);
var import_baseEntity = require("./baseEntity");
var import_utils = require("./utils");
function applyCameraUrlAttributes(entity, urlStateId) {
  entity.context.STATE.getId = urlStateId;
  entity.context.STATE.getParser = (ent, _attr, state) => {
    ent.state = state.val ? "on" : "off";
  };
  entity.context.ATTRIBUTES = [{ getId: urlStateId, attribute: "url" }];
  entity.attributes.code_format = "number";
  entity.attributes.access_token = (0, import_utils.generateAccessToken)();
  entity.attributes.model_name = "Simulated URL";
  entity.attributes.brand = "ioBroker";
  entity.attributes.motion_detection = false;
  entity.addID2entity(urlStateId);
}
class CameraEntity extends import_baseEntity.BaseEntity {
  /**
   * @param params - converter parameters from the type-detector
   */
  constructor(params) {
    const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
    super(friendlyName, room, func, objects[id], "camera", forcedEntityId);
    this.context.STATE.getId = null;
    this.context.ATTRIBUTES = [];
    this.attributes.icon = "mdi:camera-outline";
    const state = controls.states.find((s) => s.id && s.name === "URL");
    if (state == null ? void 0 : state.id) {
      applyCameraUrlAttributes(this, state.id);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CameraEntity,
  applyCameraUrlAttributes
});
//# sourceMappingURL=cameraEntity.js.map
