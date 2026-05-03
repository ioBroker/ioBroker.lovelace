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
var binarySensorEntity_exports = {};
__export(binarySensorEntity_exports, {
  BinarySensorEntity: () => BinarySensorEntity
});
module.exports = __toCommonJS(binarySensorEntity_exports);
var import_baseEntity = require("./baseEntity");
class BinarySensorEntity extends import_baseEntity.BaseEntity {
  constructor(params, opts = {}) {
    var _a, _b;
    const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
    const obj = (_a = opts.sourceObj) != null ? _a : objects[id];
    super(friendlyName, room, func, obj, "binary_sensor", forcedEntityId);
    this.context.STATE.getId = "";
    if (opts.stateId) {
      this.context.STATE.getId = opts.stateId;
      this.addID2entity(opts.stateId);
    } else {
      const stateName = (_b = opts.stateName) != null ? _b : "ACTUAL";
      const state = controls == null ? void 0 : controls.states.find((s) => s.id && s.name === stateName);
      if (state == null ? void 0 : state.id) {
        this.context.STATE.getId = state.id;
        this.addID2entity(state.id);
      }
    }
    if (opts.deviceClass) {
      this.attributes.device_class = opts.deviceClass;
    }
    if (opts.icon) {
      this.attributes.icon = opts.icon;
    }
    if (opts.iobType) {
      this.context.iobType = opts.iobType;
    }
    if (opts.inverted) {
      this.applyOfflineInversion();
    }
  }
  /**
   * Make this binary_sensor invert its raw state — for an UNREACH/OFFLINE-style ioBroker
   * indicator that should be presented to HA as a `connectivity` sensor (online = on).
   */
  applyOfflineInversion() {
    this.attributes.device_class = "connectivity";
    this.context.STATE.getParser = (entity, _attr, state) => {
      entity.state = (state == null ? void 0 : state.val) ? "off" : "on";
    };
    this.context.STATE.historyParser = (_iobId, state) => {
      return (state == null ? void 0 : state.val) ? "off" : "on";
    };
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BinarySensorEntity
});
//# sourceMappingURL=binarySensorEntity.js.map
