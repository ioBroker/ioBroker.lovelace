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
var sensorEntity_exports = {};
__export(sensorEntity_exports, {
  SensorEntity: () => SensorEntity
});
module.exports = __toCommonJS(sensorEntity_exports);
var import_baseEntity = require("./baseEntity");
const adapterData = require("../../../lib/dataSingleton");
class SensorEntity extends import_baseEntity.BaseEntity {
  /**
   * Build a humidity sensor from a known state id.
   *
   * @param stateId - ioBroker state id to read humidity from
   * @param name - friendly name
   * @param room - room enum object
   * @param func - function enum object
   * @param obj - ioBroker object for the device
   * @param forcedEntityId - optional entity_id override
   */
  static humidity(stateId, name, room, func, obj, forcedEntityId) {
    const entity = new SensorEntity(name, room, func, obj, forcedEntityId);
    entity.context.STATE.getId = stateId;
    entity.attributes.device_class = "humidity";
    entity.attributes.unit_of_measurement = entity.attributes.unit_of_measurement || "%";
    entity.addID2entity(stateId);
    return entity;
  }
  /**
   * Build a temperature sensor from a known state id.
   *
   * @param stateId - ioBroker state id to read temperature from
   * @param name - friendly name
   * @param room - room enum object
   * @param func - function enum object
   * @param obj - ioBroker object for the device
   * @param forcedEntityId - optional entity_id override
   */
  static temperature(stateId, name, room, func, obj, forcedEntityId) {
    const entity = new SensorEntity(name, room, func, obj, forcedEntityId);
    entity.context.STATE.getId = stateId;
    entity.attributes.device_class = "temperature";
    entity.attributes.unit_of_measurement = entity.attributes.unit_of_measurement || "\xB0C";
    entity.addID2entity(stateId);
    return entity;
  }
  /**
   * Build an illuminance sensor from a known state id.
   *
   * @param stateId - ioBroker state id to read illuminance from
   * @param name - friendly name
   * @param room - room enum object
   * @param func - function enum object
   * @param obj - ioBroker object for the state
   * @param forcedEntityId - optional entity_id override
   */
  static illuminance(stateId, name, room, func, obj, forcedEntityId) {
    const entity = new SensorEntity(name, room, func, obj, forcedEntityId);
    entity.context.STATE.getId = stateId;
    entity.attributes.device_class = "illuminance";
    entity.attributes.unit_of_measurement = entity.attributes.unit_of_measurement || "lx";
    entity.addID2entity(stateId);
    return entity;
  }
  /**
   * Build a generic numeric sensor (power, current, voltage, energy, frequency, …) from a state id,
   * using the object's own unit when set. Used for the optional electricity states of a device.
   *
   * @param stateId - ioBroker state id to read from
   * @param name - friendly name
   * @param room - room enum object
   * @param func - function enum object
   * @param obj - ioBroker object of the state (its common.unit is used when present)
   * @param forcedEntityId - entity_id override
   * @param deviceClass - HA sensor device_class (e.g. 'power', 'energy')
   * @param defaultUnit - unit to use when the object has none
   * @param stateClass - HA state_class ('measurement' or 'total_increasing')
   */
  static electricity(stateId, name, room, func, obj, forcedEntityId, deviceClass, defaultUnit, stateClass) {
    const entity = new SensorEntity(name, room, func, obj, forcedEntityId);
    entity.context.STATE.getId = stateId;
    entity.attributes.device_class = deviceClass;
    entity.attributes.unit_of_measurement = entity.attributes.unit_of_measurement || defaultUnit;
    entity.attributes.state_class = stateClass;
    entity.addID2entity(stateId);
    return entity;
  }
  /**
   * Build a windowTilt sensor (closed / tilted / open) from converter parameters.
   *
   * @param params - converter parameters
   */
  static windowTilt(params) {
    var _a, _b;
    const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
    const entity = new SensorEntity(friendlyName, room, func, objects[id], forcedEntityId);
    entity.context.STATE.getId = null;
    entity.attributes.icon = "mdi:window-maximize";
    entity.attributes.device_class = "window";
    const state = controls.states.find((s) => s.id && s.name === "ACTUAL");
    if (state == null ? void 0 : state.id) {
      const stateId = state.id;
      entity.context.STATE.getId = stateId;
      entity.context.STATE.states = ((_a = objects[stateId]) == null ? void 0 : _a.common) ? (_b = objects[stateId].common.states) != null ? _b : null : null;
      entity.context.STATE.historyParser = (_iobId, val) => {
        let str;
        const stateMap = entity.context.STATE.states;
        if (stateMap) {
          str = stateMap[val] ? stateMap[val].toLowerCase() : "error";
        } else {
          str = val === 0 ? "closed" : val === 1 ? "tilted" : "open";
        }
        const wordEntry = adapterData.words[str];
        return wordEntry ? wordEntry[adapterData.lang] || wordEntry.en : str;
      };
      entity.context.STATE.getParser = (e, _attr, iobState) => {
        const s = iobState || { val: null };
        e.state = e.context.STATE.historyParser(stateId, s.val);
      };
      entity.addID2entity(stateId);
    }
    return entity;
  }
  constructor(name, room, func, obj, forcedEntityId) {
    super(name, room, func, obj, "sensor", forcedEntityId);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SensorEntity
});
//# sourceMappingURL=sensorEntity.js.map
