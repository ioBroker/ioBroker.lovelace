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
var switchEntity_exports = {};
__export(switchEntity_exports, {
  SwitchEntity: () => SwitchEntity
});
module.exports = __toCommonJS(switchEntity_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_baseEntity = require("./baseEntity");
class SwitchEntity extends import_baseEntity.BaseEntity {
  constructor(params) {
    const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
    super(friendlyName, room, func, objects[id], "switch", forcedEntityId);
    this.context.STATE.setId = null;
    this.context.STATE.getId = null;
    const setState = controls.states.find((s) => s.id && s.name === "SET");
    if (setState == null ? void 0 : setState.id) {
      this.context.STATE.setId = setState.id;
      this.context.STATE.getId = setState.id;
      if (controls.type === import_type_detector.Types.socket) {
        this.attributes.icon = "mdi:power-socket-eu";
        this.attributes.device_class = "outlet";
      } else {
        this.attributes.device_class = "switch";
      }
      this.addID2entity(setState.id);
    }
    const actualState = controls.states.find((s) => s.id && s.name === "ACTUAL");
    if (actualState == null ? void 0 : actualState.id) {
      if (!actualState.id.startsWith("zigbee.") || !actualState.id.endsWith(".available") || !actualState.id.endsWith(".device_query")) {
        this.context.STATE.getId = actualState.id;
        this.addID2entity(actualState.id);
      }
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SwitchEntity
});
//# sourceMappingURL=switchEntity.js.map
