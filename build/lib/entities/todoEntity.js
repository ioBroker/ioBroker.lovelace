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
var todoEntity_exports = {};
__export(todoEntity_exports, {
  TodoEntity: () => TodoEntity
});
module.exports = __toCommonJS(todoEntity_exports);
var import_baseEntity = require("./baseEntity");
const entityData = require("../../../lib/dataSingleton");
const SUPPORTED_FEATURES = 1 | 2 | 4 | 8;
class TodoEntity extends import_baseEntity.BaseEntity {
  constructor(name, obj, entityId) {
    super(name, null, null, obj != null ? obj : void 0, "todo", entityId);
    TodoEntity.augment(this);
  }
  /**
   * Apply todo-domain setup to a pre-created BaseEntity.
   * Used by server.ts when a user manually configures an entity with entity type `todo`.
   *
   * @param entity - entity to configure in-place
   */
  static augment(entity) {
    entity.attributes.icon = "mdi:cart";
    entity.attributes.supported_features = SUPPORTED_FEATURES;
    entity.context.STATE = {
      attribute: "state",
      getId: entity.context.id || null,
      setId: entity.context.id || null,
      getParser: (ent, _attr, state) => {
        if (state == null ? void 0 : state.val) {
          try {
            const items = JSON.parse(state.val);
            ent.state = String(items.length);
          } catch (e) {
            entityData.log.warn(
              `Cannot parse todo items of ${ent.context.id}: ${String(state.val)}, ${String(e)}`
            );
            ent.state = "unknown";
          }
        } else {
          ent.state = "0";
        }
      },
      historyParser: (_id, state) => {
        try {
          const items = JSON.parse(state.val);
          return String(items.length);
        } catch (e) {
          entityData.log.warn(
            `Cannot parse todo items of ${entity.context.id}: ${String(state.val)}, ${String(e)}`
          );
          return "unknown";
        }
      }
    };
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TodoEntity
});
//# sourceMappingURL=todoEntity.js.map
