"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var syntheticControl_exports = {};
__export(syntheticControl_exports, {
  SYNTHETIC_CONTROL_TYPES: () => SYNTHETIC_CONTROL_TYPES,
  buildManualViaConverter: () => buildManualViaConverter,
  syntheticControlStates: () => syntheticControlStates
});
module.exports = __toCommonJS(syntheticControl_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_converter = __toESM(require("./converter"));
var import_manualStates = require("./manualStates");
const SYNTHETIC_CONTROL_TYPES = {
  cover: import_type_detector.Types.blind,
  lock: import_type_detector.Types.lock,
  media_player: import_type_detector.Types.media,
  vacuum: import_type_detector.Types.vacuumCleaner
};
function applyManualAttributes(entity, custom, entityType) {
  if (custom.attr_assumed_state && ["switch", "light", "cover", "climate", "fan", "humidifier", "group", "water_heater"].includes(entityType)) {
    entity.attributes.assumed_state = true;
  }
  for (const key of Object.keys(custom)) {
    if (key.startsWith("attr_")) {
      entity.attributes[key.substring("attr_".length)] = custom[key];
    }
  }
}
function syntheticControlStates(entityType, custom) {
  if (SYNTHETIC_CONTROL_TYPES[entityType] === void 0) {
    return null;
  }
  return (0, import_manualStates.collectManualStates)(custom);
}
function buildManualViaConverter(params) {
  const { entityType, id, custom, objects, adapter, entityRegistry, forcedEntityId } = params;
  const type = SYNTHETIC_CONTROL_TYPES[entityType];
  const ConverterClass = type !== void 0 ? import_converter.default.converters[type] : void 0;
  if (!ConverterClass) {
    return [];
  }
  const stateMap = (0, import_manualStates.collectManualStates)(custom);
  const states = Object.entries(stateMap).filter(([, sid]) => sid).map(([name, sid]) => ({ id: sid, name }));
  const controls = { type, states };
  const convParams = {
    id,
    controls,
    objects,
    existingEntities: [],
    adapter,
    entityRegistry,
    forcedEntityId
  };
  const entities = ConverterClass.convertEntities(convParams);
  if (entities[0]) {
    applyManualAttributes(entities[0], custom, entityType);
  }
  for (const entity of entities) {
    entity.isManual = true;
  }
  return entities;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SYNTHETIC_CONTROL_TYPES,
  buildManualViaConverter,
  syntheticControlStates
});
//# sourceMappingURL=syntheticControl.js.map
