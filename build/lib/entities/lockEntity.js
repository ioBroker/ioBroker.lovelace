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
var lockEntity_exports = {};
__export(lockEntity_exports, {
  LockEntity: () => LockEntity
});
module.exports = __toCommonJS(lockEntity_exports);
var import_baseEntity = require("./baseEntity");
const adapterData = require("../../../lib/dataSingleton");
class LockEntity extends import_baseEntity.BaseEntity {
  constructor(params) {
    const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
    super(friendlyName, room, func, objects[id], "lock", forcedEntityId);
    this.context.STATE.setId = null;
    this.context.STATE.getId = null;
    const setState = controls.states.find((s) => s.id && s.name === "SET");
    if (setState == null ? void 0 : setState.id) {
      this.context.STATE.setId = setState.id;
      this.context.STATE.getId = setState.id;
      this.addID2entity(setState.id);
    }
    const actualState = controls.states.find((s) => s.id && s.name === "ACTUAL");
    if (actualState == null ? void 0 : actualState.id) {
      this.context.STATE.getId = actualState.id;
      this.addID2entity(actualState.id);
    }
    const openState = controls.states.find((s) => s.id && s.name === "OPEN");
    if (openState == null ? void 0 : openState.id) {
      const openId = openState.id;
      this.attributes.supported_features = 1;
      this.context.COMMANDS = [
        {
          service: "open",
          setId: openId,
          parseCommand: (_entity, command, _data, _user) => {
            return new Promise((resolve, reject) => {
              adapterData.adapter.setForeignState(
                command.setId,
                true,
                false,
                { user: _user },
                (err) => err ? reject(err) : resolve(void 0)
              );
            });
          }
        }
      ];
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LockEntity
});
//# sourceMappingURL=lockEntity.js.map
