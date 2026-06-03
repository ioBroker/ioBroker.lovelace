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
var converter_exports = {};
__export(converter_exports, {
  Converter: () => Converter,
  Entity: () => import_baseEntity.BaseEntity,
  default: () => converter_default
});
module.exports = __toCommonJS(converter_exports);
var import_indicators = require("./indicators");
var import_entity_id = require("../entities/entity_id");
var import_baseEntity = require("../entities/baseEntity");
const entityData = require("../../../lib/dataSingleton");
class Converter {
  /**
   * Registry of TypeScript converter subclasses keyed by device type.
   * Populated by each subclass module at load time.
   */
  static converters = {};
  /**
   * Tracks duplicate-iob-id reports already logged this run so we don't spam
   * the log on every redetection pass.
   */
  static _loggedDuplicateIobIds = /* @__PURE__ */ new Set();
  /**
   * Override in subclasses to return the HA entities for this device type.
   * Called by the base class convert() after resolving forcedEntityId.
   *
   * @param _params - conversion parameters with a single controls PatternControl
   * @returns array of created entities (may be empty, may be async)
   */
  static convertEntities(_params) {
    return [];
  }
  /**
   * Template method — do not override in subclasses.
   * Calls this.convertEntities(), adds indicator entities, handles duplicates.
   *
   * @param params - conversion parameters (controls is a single PatternControl)
   */
  static convert(params) {
    const entities = this.convertEntities(params);
    Converter._processEntities(entities, params);
  }
  /**
   * Main entry point called from server.js.
   * Iterates over all detected controls and dispatches each one to the right converter.
   * Dispatches each control to the matching TypeScript converter subclass.
   *
   * @param controls - array of PatternControls returned by type-detector
   * @param baseParams - all parameters except 'controls'
   */
  static convertAll(controls, baseParams) {
    var _a, _b;
    const { adapter } = baseParams;
    for (const control of controls) {
      const params = { ...baseParams, controls: control };
      const ConverterClass = Converter.converters[control.type];
      if (ConverterClass) {
        ConverterClass.convert(params);
        continue;
      }
      adapter.log.debug(
        `[Type-Detector] device ${(_b = (_a = control.states) == null ? void 0 : _a.find((e) => e == null ? void 0 : e.id)) == null ? void 0 : _b.id} - ${control.type} - ${baseParams.id} is not yet supported`
      );
    }
  }
  /**
   * Shared post-processing for a batch of entities produced by a single converter call.
   * Adds indicator entities (battery, connectivity, error, maintenance, working),
   * detects and resolves duplicate entity_ids, and pushes into existingEntities.
   *
   * @param entities - entities produced by the converter
   * @param params - conversion parameters
   */
  static _processEntities(entities, params) {
    var _a, _b, _c;
    if (!(entities == null ? void 0 : entities.length)) {
      return;
    }
    const { existingEntities, adapter, entityRegistry, controls } = params;
    if (entityData.autoEntityIdFormat === "iobId") {
      for (const entity of entities) {
        const stateId = (_b = (_a = entity == null ? void 0 : entity.context) == null ? void 0 : _a.STATE) == null ? void 0 : _b.getId;
        if (entity && stateId) {
          entity.entity_id = (0, import_entity_id.getEntityId)(entity.entity_id.split(".")[0], null, {
            _id: stateId
          });
        }
      }
    }
    for (const entity of entities) {
      if (!entity) {
        continue;
      }
      const reserved = entityRegistry.getReservedEntityId(Converter._registryKey(entity));
      if (reserved) {
        entity.entity_id = reserved;
      }
    }
    const mainEntity = entities.find((x) => x == null ? void 0 : x.entity_id);
    if (mainEntity) {
      entities.push(...Converter._generateEntitiesFromIndicators(mainEntity, params));
    }
    for (const entity of entities) {
      if (((_c = entity == null ? void 0 : entity.context.STATE) == null ? void 0 : _c.getId) && entity.context.STATE.getId !== entity.context.id) {
        entity.context.id = entity.context.STATE.getId;
      }
    }
    for (const entity of entities) {
      if (!entity) {
        continue;
      }
      if (!entity.context.iobType) {
        entity.context.iobType = controls.type;
      }
      const existing = existingEntities.find((e) => e.entity_id === entity.entity_id);
      if (existing) {
        if (entity.context.id !== existing.context.id) {
          const newId = Converter._resolveCollision(entity, existingEntities);
          adapter.log.debug(
            `Duplicates found for ${existing.entity_id}, solved by renaming second to ${newId}`
          );
          entity.entity_id = newId;
        } else {
          const dupKey = `${entity.entity_id}|${entity.context.id}`;
          if (!Converter._loggedDuplicateIobIds.has(dupKey)) {
            Converter._loggedDuplicateIobIds.add(dupKey);
            adapter.log.info(
              `Duplicate entities for identical iob ids? ${entity.entity_id}, ${entity.context.id}, ${controls.type}, ${params.id}`
            );
          }
          continue;
        }
      }
      entityRegistry.reserveEntityId(Converter._registryKey(entity), entity.entity_id);
      existingEntities.push(entity);
      adapter.log.debug(
        `[Type-Detector] Created auto device: ${entity.entity_id} - ${controls.type} - ${params.id}`
      );
    }
  }
  /**
   * Build the registry composite key for an entity:
   * `${entityType}.${STATE.getId ?? context.id}`.
   * Works before or after the context.id rewrite step.
   *
   * @param entity - entity to derive the key for
   */
  static _registryKey(entity) {
    var _a, _b;
    const type = entity.entity_id.split(".")[0];
    const stableId = (_b = (_a = entity.context.STATE) == null ? void 0 : _a.getId) != null ? _b : entity.context.id;
    return `${type}.${stableId}`;
  }
  /**
   * Generate a deterministic, non-colliding entity_id for an entity that clashes
   * with an existing entity_id. Uses the last segment of context.id as suffix,
   * falling back to a counter if the suffix-augmented id still collides.
   *
   * @param entity - entity needing a new entity_id (its current entity_id collides)
   * @param existingEntities - already-registered entities to check against
   */
  static _resolveCollision(entity, existingEntities) {
    const base = entity.entity_id;
    const lastSeg = entity.context.id.split(".").pop().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
    let candidate = lastSeg ? `${base}_${lastSeg}` : `${base}_2`;
    let counter = 2;
    while (existingEntities.some((e) => e.entity_id === candidate)) {
      candidate = lastSeg ? `${base}_${lastSeg}_${counter++}` : `${base}_${counter++}`;
    }
    return candidate;
  }
  /**
   * Generate indicator entities (battery, connectivity, error, maintenance, working)
   * for the given device.  Sets context.deviceId on each indicator to link it back
   * to the main entity.
   *
   * @param mainEntity - the primary entity for the device
   * @param parameters - conversion parameters (used to build each indicator)
   */
  static _generateEntitiesFromIndicators(mainEntity, parameters) {
    const entities = [];
    const baseName = mainEntity.entity_id.split(".")[1];
    const add = (entity) => {
      if (entity) {
        entity.context.deviceId = mainEntity.context.id;
        entities.push(entity);
      }
    };
    add((0, import_indicators.processBattery)({ ...parameters, forcedEntityId: `binary_sensor.${baseName}_BatteryWarning` }));
    add((0, import_indicators.connectivityIndicator)({ ...parameters, forcedEntityId: `binary_sensor.${baseName}_Connectivity` }));
    add((0, import_indicators.processError)({ ...parameters, forcedEntityId: `binary_sensor.${baseName}_Error` }));
    add((0, import_indicators.processMaintenance)({ ...parameters, forcedEntityId: `binary_sensor.${baseName}_Maintenance` }));
    add((0, import_indicators.processWorking)({ ...parameters, forcedEntityId: `binary_sensor.${baseName}_Working` }));
    return entities;
  }
  /**
   * Create manual entity - base function for creating entities that are not based on type-detector results, but are manually
   * defined by the user via object-settings.
   * TODO: use in server.js
   *
   * @param _params - conversion parameters (unused in base; subclasses may use)
   */
  static processManualEntity(_params) {
  }
}
var converter_default = Converter;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Converter,
  Entity
});
//# sourceMappingURL=converter.js.map
