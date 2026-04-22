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
  default: () => converter_default
});
module.exports = __toCommonJS(converter_exports);
var import_indicators = require("./indicators");
var import_types = require("@iobroker/types");
class Converter {
  /**
   * Registry of TypeScript converter subclasses keyed by device type.
   * Populated by each subclass module at load time.
   */
  static converters = {};
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
    const forcedEntityId = params.entityRegistry.getEntityId(params.id);
    const entities = this.convertEntities({ ...params, forcedEntityId });
    Converter._processEntities(entities, params);
  }
  /**
   * Main entry point called from server.js.
   * Iterates over all detected controls and dispatches each one to the right converter.
   * TypeScript subclasses in Converter.converters take priority over legacyConverters.
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
    if (!(entities == null ? void 0 : entities.length)) {
      return;
    }
    const { existingEntities, adapter, entityRegistry, controls } = params;
    const mainEntity = entities.find((x) => x == null ? void 0 : x.entity_id);
    if (mainEntity) {
      entities.push(...Converter._generateEntitiesFromIndicators(mainEntity, params));
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
          entityRegistry.storeEntityId(existing.context.id, existing.entity_id);
          entity.entity_id = `${entity.entity_id}_${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
          entityRegistry.storeEntityId(entity.context.id, entity.entity_id);
          adapter.log.debug(
            `Duplicates found for ${existing.entity_id}, solved by renaming second to ${entity.entity_id}`
          );
        } else {
          adapter.log.warn(
            `Duplicate entities for identical iob ids? ${entity.entity_id}, ${entity.context.id}, ${controls.type}, ${params.id}`
          );
          continue;
        }
      }
      existingEntities.push(entity);
      adapter.log.debug(
        `[Type-Detector] Created auto device: ${entity.entity_id} - ${controls.type} - ${params.id}`
      );
    }
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
  Converter
});
//# sourceMappingURL=converter.js.map
