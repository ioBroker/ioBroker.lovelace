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
var baseEntity_exports = {};
__export(baseEntity_exports, {
  BaseEntity: () => BaseEntity,
  processCommon: () => processCommon
});
module.exports = __toCommonJS(baseEntity_exports);
var import_friendly_name = require("./friendly_name");
var import_entity_id = require("./entity_id");
var import_utils = require("./utils");
var import_genericConverter = require("../converters/genericConverter");
const entityData = require("../../../lib/dataSingleton");
class BaseEntity {
  /**
   * entity_id of the entity, for example "light.living_room_light". Should be unique across all
   * entities and should not change after creation, since it is used for storing in entity registry
   * and so on. It should be based on the ioBroker id of the device or state and the type of entity
   * (like main state, battery, online/offline, error, maintenance, working), not on friendly name.
   */
  entity_id;
  /** state of the entity. Needs to be a string and what the frontend expects it to be. */
  state = "unknown";
  /** when the state (and only the state) last changed. */
  last_changed = 0;
  /** when the state or attributes last changed. */
  last_updated = 0;
  /** attributes as the frontend expects them — an object, not an array. */
  attributes = {};
  /** ioBroker context information — internal bookkeeping not sent to the frontend. */
  context;
  /**
   * Ids of ioBroker objects associated with this entity_id (for state subscription and lookup).
   */
  iobIds = [];
  /** Marks an entity created from a manual user-configured object. */
  isManual;
  /**
   * Generate a bare entity from common parameters.
   *
   * @param name - friendly name; if empty, taken from object or generated from room & func or id
   * @param room - room enum object (used for friendly-name generation)
   * @param func - function enum object (used for friendly-name generation)
   * @param obj - ioBroker object — used for id, name, icon, unit, lovelace-specific settings
   * @param entityType - lovelace domain of the entity (e.g. 'light', 'sensor')
   * @param entity_id - predefined entity id; if empty, generated from name
   * @param language - language for name extraction; defaults to 'en'
   */
  constructor(name, room, func, obj, entityType, entity_id, language) {
    var _a, _b, _c, _d, _e, _f;
    const objId = (_a = obj == null ? void 0 : obj._id) != null ? _a : "";
    this.entity_id = (0, import_entity_id.getEntityId)(entityType, entity_id, obj);
    this.attributes = {
      friendly_name: (0, import_friendly_name.getFriendlyName)(name, obj, (0, import_utils.getEnumName)(room), (0, import_utils.getEnumName)(func))
    };
    this.context = {
      id: objId,
      type: (0, import_entity_id.getEntityType)(entityType, entity_id, obj),
      room: (0, import_utils.getEnumName)(room),
      roomId: room ? room._id : null,
      func: (0, import_utils.getEnumName)(func),
      funcId: func ? func._id : null,
      stateType: (_b = obj == null ? void 0 : obj.common) == null ? void 0 : _b.type,
      deviceId: objId,
      aliases: obj ? ((_c = (0, import_utils.getSmartName)(obj, objId, language != null ? language : entityData.lang)) == null ? void 0 : _c.split(",")) || [] : [],
      STATE: {
        getId: objId || null,
        attribute: "state"
      },
      ATTRIBUTES: [],
      COMMANDS: []
    };
    if ((_d = obj == null ? void 0 : obj.common) == null ? void 0 : _d.unit) {
      this.attributes.unit_of_measurement = obj.common.unit;
    }
    if ((_e = obj == null ? void 0 : obj.common) == null ? void 0 : _e.icon) {
      this.attributes.entity_picture = (_f = (0, import_utils.getObjectIcon)(obj)) != null ? _f : void 0;
    }
    if (objId) {
      this.addID2entity(objId);
    }
  }
  /**
   * Register an ioBroker state id as used by this entity (for subscriptions and lookup).
   *
   * @param id - ioBroker state id
   */
  addID2entity(id) {
    if (!this.iobIds.includes(id)) {
      this.iobIds.push(id);
    }
  }
  /**
   * Fill entity STATE/ATTRIBUTES from a `{state, stateRead, ...}` map. Replaces the old
   * standalone `fillEntityFromStates(states, entity, objects)` helper.
   *
   * @param states - ids of ioBroker states; "state" goes into entity-state, can also have stateRead.
   *                 Other keys become attributes named after the key.
   * @param objects - optional objects cache to determine writeability of attributes.
   */
  fillFromStates(states, objects) {
    var _a, _b;
    this.context.STATE = {
      attribute: "state",
      setId: states.state || null,
      getId: states.stateRead || states.state || null
    };
    if (this.context.STATE.getId) {
      this.context.id = this.context.STATE.getId;
    } else if (this.context.STATE.setId) {
      this.context.id = this.context.STATE.setId;
    }
    this.context.ATTRIBUTES = (_a = this.context.ATTRIBUTES) != null ? _a : [];
    for (const key of Object.keys(states)) {
      const id = states[key];
      const obj = objects ? objects[id] : null;
      if (id) {
        this.addID2entity(id);
        if (!key.endsWith("Read")) {
          if (key !== "state" && key !== "stateRead") {
            const attrs = this.context.ATTRIBUTES;
            const attr = attrs.find((a) => a.attribute === key);
            if (!attr) {
              attrs.push({
                attribute: key,
                getId: states[`${key}Read`] || id,
                setId: ((_b = obj == null ? void 0 : obj.common) == null ? void 0 : _b.write) ? id : void 0
              });
            } else {
              attr.setId = id;
            }
          }
        }
      }
    }
  }
  /**
   * Register this entity in the dataSingleton caches (entities array, entityId2Entity,
   * iobID2entity).  Replaces the old standalone `fillEntityIntoCaches(entity)` helper.
   */
  registerInCaches() {
    const foundIndex = entityData.entities.findIndex((x) => x.entity_id === this.entity_id);
    if (foundIndex !== -1) {
      entityData.log.warn(
        `Got duplicate for entity ${this.entity_id}. Overwriting old value. Was for ${entityData.entities[foundIndex].context.id} and new one is for ${this.context.id}`
      );
      entityData.entities[foundIndex] = this;
    } else {
      entityData.entities.push(this);
    }
    entityData.entityId2Entity[this.entity_id] = this;
    const ids = this.iobIds;
    for (const id of ids || []) {
      entityData.iobID2entity[id] = entityData.iobID2entity[id] || [];
      const foundIdx = entityData.iobID2entity[id].findIndex((e) => e.entity_id === this.entity_id);
      if (foundIdx === -1) {
        entityData.iobID2entity[id].push(this);
      } else {
        entityData.iobID2entity[id][foundIdx] = this;
      }
    }
  }
  /**
   * Remove this entity from the dataSingleton caches, or rename it to a new entity_id.
   * Replaces the old standalone `removeEntity(entity, newId?)` helper.
   *
   * @param newId - if set, the entity is re-keyed under this new id instead of being removed.
   */
  unregister(newId) {
    if (newId) {
      entityData.entityId2Entity[newId] = this;
    } else {
      delete entityData.entityId2Entity[this.entity_id];
    }
    if (!newId) {
      let foundIndex = entityData.entities.findIndex((x) => x.entity_id === this.entity_id);
      while (foundIndex !== -1) {
        entityData.entities.splice(foundIndex, 1);
        foundIndex = entityData.entities.findIndex((x) => x.entity_id === this.entity_id);
      }
    }
    if (!newId && this.attributes.entity_picture) {
      const urlIndex = entityData.entityIconUrls.findIndex((x) => x === this.attributes.entity_picture);
      if (urlIndex !== -1) {
        entityData.entityIconUrls.splice(urlIndex, 1);
      }
    }
    for (const key of Object.keys(entityData.iobID2entity)) {
      const entities = entityData.iobID2entity[key];
      let foundIndex = entities.findIndex((x) => x.entity_id === this.entity_id);
      while (foundIndex !== -1) {
        entities.splice(foundIndex, 1);
        foundIndex = entities.findIndex((x) => x.entity_id === this.entity_id);
      }
      if (newId) {
        entities.push(newId);
      }
    }
  }
  /**
   * Update timestamps from a state change.
   *
   * @param state - state to update from
   * @param isStateChange - true if entity.state was changed (rather than only an attribute)
   */
  updateTimestamp(state, isStateChange) {
    if (!state) {
      if (isStateChange) {
        if (this.state !== "unknown") {
          this.last_changed = Date.now();
          this.last_updated = Date.now();
        }
        this.state = "unknown";
      }
      return;
    }
    if (!state.ts || isNaN(new Date(state.ts).getTime())) {
      state.ts = Date.now();
    }
    if (state.lc && isNaN(new Date(state.lc).getTime())) {
      state.lc = Date.now();
    }
    const lu = state.ts || Date.now();
    const lc = state.lc || state.ts || Date.now();
    if (lu > this.last_updated) {
      this.last_updated = lu;
    }
    if (isStateChange && lc > this.last_changed) {
      this.last_changed = lc;
    }
  }
  /**
   * Process a state change from ioBroker state db. Routes to STATE.getParser /
   * ATTRIBUTES[*].getParser, then refreshes timestamps.
   *
   * @param id - ioBroker object id that changed
   * @param state - new state value (null when the state was deleted)
   */
  processStateChange(id, state) {
    var _a;
    let isStateChange = false;
    let isChange = false;
    if (id === this.context.STATE.getId) {
      const isChanged = this.getParser(this.context.STATE, state);
      if (isChanged) {
        isStateChange = true;
        isChange = true;
      }
    }
    for (const attr of (_a = this.context.ATTRIBUTES) != null ? _a : []) {
      if (attr.getId === id) {
        isChange || (isChange = this.getParser(attr, state));
      }
    }
    if (isChange) {
      this.updateTimestamp(state, isStateChange);
    }
  }
  /**
   * Default getParser — overridable by subclasses.
   *
   * @param attr - the attribute (or STATE) whose getId object changed.
   * @param state - new state of the getId object
   * @returns true when the value actually changed
   */
  getParser(attr, state) {
    var _a;
    const oldVal = attr.attribute === "state" ? this.state : this.attributes[attr.attribute];
    const newVal = (0, import_genericConverter.iobState2EntityState)(this, (_a = state == null ? void 0 : state.val) != null ? _a : null, attr.attribute);
    if (attr.attribute === "state") {
      this.state = newVal;
    } else {
      this.attributes[attr.attribute] = newVal;
    }
    return oldVal !== newVal;
  }
  /** Convert into the full entity representation expected by the HA frontend. */
  getEntityRepresentationForFrontend() {
    return {
      entity_id: this.entity_id,
      state: this.state,
      last_updated: new Date(this.last_updated).toISOString(),
      last_changed: new Date(this.last_changed).toISOString(),
      attributes: this.attributes,
      context: {
        id: this.context.id,
        user_id: null,
        parent_id: null
      }
    };
  }
  /** Convert into the short entity representation used for live state updates. */
  getShortEntityForFrontend() {
    return {
      s: this.state,
      a: this.attributes,
      lc: this.last_changed / 1e3,
      lu: this.last_updated / 1e3
    };
  }
}
function processCommon(name, room, func, obj, entityType, entity_id, language) {
  return new BaseEntity(name, room, func, obj, entityType, entity_id, language);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseEntity,
  processCommon
});
//# sourceMappingURL=baseEntity.js.map
