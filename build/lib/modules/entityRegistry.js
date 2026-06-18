"use strict";
var import_storage = require("./storage");
class EntityRegistry {
  /**
   * Frontend registry entries keyed by HA entity_id. Holds per-entity overrides
   * (name, icon, device_class, area_id, ...) set via the frontend's
   * `config/entity_registry/update` message.
   */
  _entries = {};
  /**
   * Composite-key → HA entity_id index for deterministic clash resolution.
   * Key format: `${entityType}.${stableIobId}` where stableIobId is STATE.getId
   * when set, otherwise context.id. Survives restarts so colliding entities keep
   * their generated entity_ids.
   */
  _iobIdToEntityId = {};
  _entityCategories = { 0: "config", 1: "diagnostic" };
  adapter;
  entityData;
  sendResponse;
  sendUpdate;
  renameEntityIdInConfigs;
  /**
   * Constructor
   *
   * @param options - options including adapter.
   * @param options.adapter - ioBroker adapter instance
   * @param options.entityData - shared entity data singleton
   * @param options.sendResponse - function to send a response to a client
   * @param options.sendUpdate - function to broadcast an update event
   * @param options.renameEntityIdInConfigs - rewrite a renamed entity_id in the stored lovelace configs
   */
  constructor(options) {
    this.adapter = options.adapter;
    this.entityData = options.entityData;
    this.sendResponse = options.sendResponse;
    this.sendUpdate = options.sendUpdate;
    this.renameEntityIdInConfigs = options.renameEntityIdInConfigs;
  }
  /**
   * Convert an entity registry entry to the format expected by the frontend for display.
   *
   * @param entityWithId - the registry entry to convert
   */
  convertEntryForDisplay(entityWithId) {
    return {
      ei: entityWithId.entity_id,
      en: entityWithId.name || entityWithId.original_name,
      ai: entityWithId.area_id,
      ic: entityWithId.icon || entityWithId.original_icon,
      di: entityWithId.device_id,
      lb: entityWithId.labels || [],
      hb: entityWithId.hidden,
      ec: entityWithId.entity_category,
      tk: entityWithId.translation_key,
      pl: entityWithId.platform,
      dp: entityWithId.display_precision
    };
  }
  /**
   * Create an entity registry entry from an entity.
   *
   * @param entity - the entity to create the entry from
   */
  _createEntryFromEntity(entity) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    const entry = {
      id: entity.context.id,
      entity_id: entity.entity_id,
      name: null,
      icon: null,
      platform: entity.platform,
      config_entry_id: null,
      config_subentry_id: null,
      device_id: entity.context.deviceId || null,
      area_id: entity.context.roomId || null,
      labels: [],
      disabled_by: null,
      hidden_by: null,
      entity_category: null,
      has_entity_name: false,
      original_name: (_a = entity.attributes) == null ? void 0 : _a.friendly_name,
      unique_id: entity.context.id,
      translation_key: null,
      options: null,
      categories: {},
      capabilities: entity.context.capabilities || null,
      original_icon: (_b = entity.attributes) == null ? void 0 : _b.icon,
      // device_class is the user override (null until the user sets one in the frontend);
      // original_device_class is the integration default used for display / "reset to default".
      device_class: null,
      original_device_class: ((_c = entity.attributes) == null ? void 0 : _c.device_class) || null,
      aliases: entity.context.aliases || null
    };
    if (entry.platform === "sensor") {
      entry.options = {
        sensor: {
          display_precision: ((_d = entity.attributes) == null ? void 0 : _d.display_precision) || null,
          suggested_display_precision: ((_e = entity.attributes) == null ? void 0 : _e.suggested_display_precision) || null,
          unit_of_measurement: ((_f = entity.attributes) == null ? void 0 : _f.unit_of_measurement) || null
        }
      };
    } else if (entry.platform === "number") {
      entry.options = {
        number: {
          unit_of_measurement: ((_g = entity.attributes) == null ? void 0 : _g.unit_of_measurement) || null
        }
      };
    } else if (entry.platform === "light") {
      entry.options = {
        light: {
          favorite_colors: ((_h = entity.attributes) == null ? void 0 : _h.favorite_colors) || []
        }
      };
    } else if (entry.platform === "lock") {
      entry.options = {
        lock: {
          default_code: ((_i = entity.attributes) == null ? void 0 : _i.default_code) || null
        }
      };
    } else if (entry.platform === "alarm_control_panel") {
      entry.options = {
        alarm_control_panel: {
          default_code: ((_j = entity.attributes) == null ? void 0 : _j.default_code) || null
        }
      };
    } else if (entry.platform === "weather") {
      entry.options = {
        weather: {
          precipitation_unit: ((_k = entity.attributes) == null ? void 0 : _k.precipitation_unit) || void 0,
          pressure_unit: ((_l = entity.attributes) == null ? void 0 : _l.pressure_unit) || void 0,
          temperature_unit: ((_m = entity.attributes) == null ? void 0 : _m.temperature_unit) || void 0,
          visibility_unit: ((_n = entity.attributes) == null ? void 0 : _n.visibility_unit) || void 0,
          wind_speed_unit: ((_o = entity.attributes) == null ? void 0 : _o.wind_speed_unit) || void 0
        }
      };
    }
    return entry;
  }
  /**
   * Update the entity with the new values from the registry.
   *
   * @param entity - the entity to update
   * @param entry - the registry entry to read values from (optional, looked up by entity id if omitted)
   */
  updateEntityFromRegistry(entity, entry) {
    if (!entry) {
      entry = this._entries[entity.entity_id];
      if (!entry) {
        return;
      }
    }
    if (!entity.isManual) {
      entity.entity_id = entry.entity_id;
      this.entityData.entityId2Entity[entry.entity_id] = entity;
    }
    entity.attributes.friendly_name = entry.name || entity.attributes.friendly_name;
    entity.attributes.icon = entry.icon || entity.attributes.icon;
    entity.platform = entry.platform || entity.platform;
    entity.attributes.device_class = entry.device_class || entity.attributes.device_class;
    if (entry.options) {
      for (const platform of Object.keys(entry.options)) {
        if (entry.options[platform]) {
          const platformOptions = entry.options[platform];
          for (const attribute of Object.keys(platformOptions)) {
            entity.attributes[attribute] = platformOptions[attribute];
          }
        }
      }
    }
  }
  /**
   * Look up a reserved entity_id for a composite key.
   * Key format: `${entityType}.${stableIobId}`.
   *
   * @param key - composite key
   */
  getReservedEntityId(key) {
    return this._iobIdToEntityId[key];
  }
  /**
   * Reserve an entity_id under a composite key for deterministic clash resolution.
   * Key format: `${entityType}.${stableIobId}`.
   *
   * @param key - composite key
   * @param entityId - HA entity id to reserve
   */
  reserveEntityId(key, entityId) {
    this._iobIdToEntityId[key] = entityId;
  }
  /**
   * Process incoming messages from the frontend.
   *
   * @param ws - websocket connection to the client
   * @param message - the message from the frontend
   */
  processMessage(ws, message) {
    var _a, _b, _c, _d, _e;
    if (message.type === "config/entity_registry/list_for_display") {
      const entities = [];
      for (const entity of this.entityData.entities) {
        entities.push(this.convertEntryForDisplay(this._createEntryFromEntity(entity)));
      }
      this.sendResponse(ws, message.id, {
        entities,
        entity_categories: this._entityCategories
      });
      return true;
    } else if (message.type === "config/entity_registry/list") {
      const entities = [];
      for (const entity of this.entityData.entities) {
        const stored = this._entries[entity.entity_id];
        entities.push(stored || this._createEntryFromEntity(entity));
      }
      this.sendResponse(ws, message.id, entities);
      return true;
    } else if (message.type === "config/entity_registry/get") {
      const entityId = message.entity_id;
      let entityWithId = this._entries[entityId];
      const entity = this.entityData.entityId2Entity[entityId];
      if (!entity) {
        ws.send(
          JSON.stringify({
            id: message.id,
            type: "result",
            success: false,
            error: { code: "entity_not_found" }
          })
        );
        this.adapter.log.warn(`Entity ${entityId} not found`);
        return true;
      }
      if (!entityWithId) {
        entityWithId = this._createEntryFromEntity(entity);
      }
      this.sendResponse(ws, message.id, entityWithId);
      return true;
    } else if (message.type === "config/entity_registry/get_entries") {
      const entityIds = message.entity_ids;
      const result = {};
      for (const entityId of entityIds) {
        const entityWithId = this._entries[entityId];
        const entity = this.entityData.entityId2Entity[entityId];
        if (entityWithId) {
          result[entityId] = entityWithId;
        } else if (entity) {
          result[entityId] = this._createEntryFromEntity(entity);
        } else {
          result[entityId] = null;
        }
      }
      this.sendResponse(ws, message.id, result);
      return true;
    } else if (message.type === "config/entity_registry/update") {
      const entityId = message.entity_id;
      let entityWithId = this._entries[entityId];
      const entity = this.entityData.entityId2Entity[entityId];
      if (!entity) {
        ws.send(
          JSON.stringify({
            id: message.id,
            type: "result",
            success: false,
            error: { code: "entity_not_found" }
          })
        );
        this.adapter.log.warn(`Entity ${entityId} not found`);
        return true;
      }
      if (!entityWithId) {
        entityWithId = this._createEntryFromEntity(entity);
      }
      this._entries[entityId] = entityWithId;
      const newData = JSON.parse(JSON.stringify(message));
      delete newData.id;
      delete newData.type;
      delete newData.entity_id;
      if (typeof newData.options_domain === "string") {
        const domain = newData.options_domain;
        const opts = (_a = newData.options) != null ? _a : {};
        const existing = (_b = entityWithId.options) != null ? _b : {};
        existing[domain] = opts;
        entityWithId.options = existing;
        delete newData.options_domain;
        delete newData.options;
      }
      const changes = {};
      for (const key of Object.keys(newData)) {
        changes[key] = entityWithId[key] || null;
        entityWithId[key] = newData[key];
        if (key === "new_entity_id") {
          const oldEntityId = entity.entity_id;
          const newEntityId = newData[key];
          if (!newEntityId || newEntityId === oldEntityId) {
            delete entityWithId.new_entity_id;
            continue;
          }
          const stableIobId = (_d = (_c = entity.context.STATE) == null ? void 0 : _c.getId) != null ? _d : entity.context.id;
          const oldKey = `${oldEntityId.split(".")[0]}.${stableIobId}`;
          const newKey = `${newEntityId.split(".")[0]}.${stableIobId}`;
          delete this._iobIdToEntityId[oldKey];
          this._iobIdToEntityId[newKey] = newEntityId;
          if (this._entries[oldEntityId]) {
            this._entries[newEntityId] = this._entries[oldEntityId];
            delete this._entries[oldEntityId];
          } else {
            this._entries[newEntityId] = entityWithId;
          }
          entityWithId.entity_id = newEntityId;
          entityWithId.userRenamed = true;
          entity.unregister(newEntityId);
          delete entityWithId.new_entity_id;
          void ((_e = this.renameEntityIdInConfigs) == null ? void 0 : _e.call(this, oldEntityId, newEntityId));
          if (entity.isManual) {
            void this._persistManualEntityRename(entity.context.id, newEntityId);
          }
        }
      }
      this.updateEntityFromRegistry(entity, entityWithId);
      void this.saveEntityRegistry();
      this.sendResponse(ws, message.id, { entity_entry: entityWithId });
      this.sendUpdate("entity_registry_updated", {
        action: "update",
        entity_id: entityWithId.entity_id,
        changes
      });
      return true;
    }
    return false;
  }
  /**
   * Update entities from the registry. Inform the frontend about changes.
   *
   * @param entities - entities to update from the registry
   * @param sendEvent - whether to send an update event to the frontend
   */
  handleUpdatedEntities(entities = [], sendEvent = false) {
    for (const entity of entities) {
      this.updateEntityFromRegistry(entity);
    }
    if (entities.length > 0 && sendEvent) {
      this.sendUpdate("entity_registry_updated");
      this.sendUpdate("device_registry_updated");
    }
  }
  /**
   * Load the entity registry from the ioBroker object database.
   */
  async loadEntityRegistry() {
    const storage = await this.adapter.getObjectAsync(`${import_storage.STORAGE_PREFIX}entityRegistry`);
    const native = storage == null ? void 0 : storage.native;
    this._entries = (native == null ? void 0 : native.entries) || {};
    this._iobIdToEntityId = (native == null ? void 0 : native.iobIdToEntityId) || {};
    this._entityCategories = (native == null ? void 0 : native.entityCategories) || {
      0: "config",
      1: "diagnostic"
    };
  }
  /**
   * Store the entity registry to the ioBroker object database.
   */
  async saveEntityRegistry() {
    const storage = await this.adapter.getObjectAsync(`${import_storage.STORAGE_PREFIX}entityRegistry`);
    if (!storage.native) {
      storage.native = {};
    }
    storage.native.entries = this._entries;
    storage.native.iobIdToEntityId = this._iobIdToEntityId;
    storage.native.entityCategories = this._entityCategories;
    await this.adapter.setObject(`${import_storage.STORAGE_PREFIX}entityRegistry`, storage);
  }
  /**
   * Persist a renamed manual entity back to its source object's custom config, so the new
   * entity_id survives a restart (manual entities are regenerated from the object, not the
   * registry). The new id's domain becomes `custom[ns].entity`, its local part `custom[ns].name`.
   *
   * @param objId - ioBroker object id of the manual entity (entity.context.id)
   * @param newEntityId - the new HA entity_id (e.g. "switch.kitchen")
   */
  async _persistManualEntityRename(objId, newEntityId) {
    try {
      const obj = await this.adapter.getForeignObjectAsync(objId);
      if (!(obj == null ? void 0 : obj.common)) {
        return;
      }
      const ns = this.adapter.namespace;
      const common = obj.common;
      const custom = common.custom || {};
      custom[ns] = custom[ns] || {};
      const [domain, ...rest] = newEntityId.split(".");
      custom[ns].entity = domain;
      custom[ns].name = rest.join(".");
      common.custom = custom;
      await this.adapter.setForeignObjectAsync(objId, obj);
      this.adapter.log.debug(`Persisted manual entity rename to ${newEntityId} on ${objId}.`);
    } catch (e) {
      this.adapter.log.warn(`Could not persist manual entity rename for ${objId}: ${String(e)}`);
    }
  }
  /**
   * Whether the given entity_id has a user override in the registry (icon, name, manual rename, …)
   * and should therefore be left untouched by a bulk "regenerate entity ids" run.
   *
   * @param entityId - HA entity_id
   * @returns true if the entity was customized by the user
   */
  isProtectedFromRegen(entityId) {
    return !!this._entries[entityId];
  }
  /**
   * Drop all reserved entity_ids except those that belong to protected (user-customized) entities.
   * Cleared reservations let the entities regenerate with the currently configured auto-id format
   * on the next conversion; protected ones keep their reserved id.
   *
   * @param protectedIds - set of entity_ids whose reservation must be kept
   */
  clearAutoReservations(protectedIds) {
    for (const key of Object.keys(this._iobIdToEntityId)) {
      if (!protectedIds.has(this._iobIdToEntityId[key])) {
        delete this._iobIdToEntityId[key];
      }
    }
  }
  /**
   * Clean up, save the entity registry.
   */
  async cleanup() {
    this.adapter.log.debug("cleaning up entity registry");
    await this.saveEntityRegistry();
  }
  /**
   * Init module.
   */
  async init() {
    await this.loadEntityRegistry();
    await this.cleanupStaleRegistry();
    this.adapter.log.debug("modules/entityRegistry: init done.");
  }
  /**
   * Drop reservations AND user overrides whose ioBroker object no longer exists.
   * Handles deletes that happened while the adapter wasn't running (we do not react to object
   * deletions at runtime). Runs on init.
   */
  async cleanupStaleRegistry() {
    const existsCache = {};
    const objectExists = async (iobId) => {
      if (iobId in existsCache) {
        return existsCache[iobId];
      }
      try {
        existsCache[iobId] = !!await this.adapter.getForeignObjectAsync(iobId);
      } catch {
        existsCache[iobId] = void 0;
      }
      return existsCache[iobId];
    };
    const staleReservations = [];
    for (const key of Object.keys(this._iobIdToEntityId)) {
      const dotIdx = key.indexOf(".");
      if (dotIdx < 0) {
        staleReservations.push(key);
        continue;
      }
      if (await objectExists(key.substring(dotIdx + 1)) === false) {
        staleReservations.push(key);
      }
    }
    for (const key of staleReservations) {
      delete this._iobIdToEntityId[key];
    }
    const staleEntries = [];
    for (const entityId of Object.keys(this._entries)) {
      const iobId = this._entries[entityId].id;
      if (iobId && await objectExists(iobId) === false) {
        staleEntries.push(entityId);
      }
    }
    for (const entityId of staleEntries) {
      delete this._entries[entityId];
    }
    if (staleReservations.length || staleEntries.length) {
      this.adapter.log.debug(
        `Dropped ${staleReservations.length} stale entity_id reservation(s) and ${staleEntries.length} stale registry entry(ies).`
      );
      await this.saveEntityRegistry();
    }
  }
}
module.exports = EntityRegistry;
//# sourceMappingURL=entityRegistry.js.map
