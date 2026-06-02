"use strict";
class SearchModule {
  sendResponse;
  entityData;
  constructor(options) {
    this.sendResponse = options.sendResponse;
    this.entityData = options.entityData;
  }
  /**
   * Handle a search/source message.
   *
   * @param ws - websocket connection
   * @param message - the message
   * @returns true if handled
   */
  processMessage(ws, message) {
    var _a, _b, _c, _d;
    if (message.type === "search/related") {
      const related = {};
      const itemType = message.item_type;
      const itemId = message.item_id;
      if (itemType === "device") {
        const entityIds = [];
        const areas = /* @__PURE__ */ new Set();
        for (const entity of this.entityData.entities) {
          if (((_a = entity.context) == null ? void 0 : _a.deviceId) === itemId) {
            entityIds.push(entity.entity_id);
            if (entity.context.roomId) {
              areas.add(entity.context.roomId);
            }
          }
        }
        if (entityIds.length) {
          related.entity = entityIds;
        }
        if (areas.size) {
          related.area = [...areas];
        }
      } else if (itemType === "entity") {
        const entity = this.entityData.entityId2Entity[itemId];
        if ((_b = entity == null ? void 0 : entity.context) == null ? void 0 : _b.deviceId) {
          related.device = [entity.context.deviceId];
        }
        if ((_c = entity == null ? void 0 : entity.context) == null ? void 0 : _c.roomId) {
          related.area = [entity.context.roomId];
        }
      } else if (itemType === "area") {
        const deviceIds = /* @__PURE__ */ new Set();
        const entityIds = [];
        for (const entity of this.entityData.entities) {
          if (((_d = entity.context) == null ? void 0 : _d.roomId) === itemId) {
            entityIds.push(entity.entity_id);
            if (entity.context.deviceId) {
              deviceIds.add(entity.context.deviceId);
            }
          }
        }
        if (deviceIds.size) {
          related.device = [...deviceIds];
        }
        if (entityIds.length) {
          related.entity = entityIds;
        }
      }
      this.sendResponse(ws, message.id, related);
      return true;
    }
    if (message.type === "entity/source") {
      const sources = {};
      for (const entity of this.entityData.entities) {
        if (entity.entity_id === "zone.home") {
          sources[entity.entity_id] = { domain: "constant" };
        } else {
          sources[entity.entity_id] = { domain: entity.isManual ? "iob_manual" : "iob_automatic" };
        }
      }
      this.sendResponse(ws, message.id, sources);
      return true;
    }
    return false;
  }
}
module.exports = SearchModule;
//# sourceMappingURL=search.js.map
