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
var friendly_name_exports = {};
__export(friendly_name_exports, {
  getFriendlyName: () => getFriendlyName
});
module.exports = __toCommonJS(friendly_name_exports);
const entityData = require("../../../lib/dataSingleton");
function specificLanguageOrFallback(hash) {
  if (typeof hash === "object" && hash !== null) {
    const map = hash;
    return map[entityData.lang] || map.en;
  }
  return hash;
}
function reducePredefinedName(name) {
  if (typeof name === "object" && name !== null) {
    const map = name;
    return map[entityData.lang] || map.en || Object.values(map)[0];
  }
  return name != null ? name : void 0;
}
const candidates = [
  /**
   * Select predefined name — highest priority.
   *
   * @param predefinedName - the predefined name
   * @returns the friendly name
   */
  function(predefinedName) {
    return reducePredefinedName(predefinedName);
  },
  /**
   * Select smart name from the ioBroker object, if available.
   *
   * @param _predefinedName - unused
   * @param obj - the ioBroker object
   * @returns the friendly name
   */
  function(_predefinedName, obj) {
    return (obj == null ? void 0 : obj.common) ? specificLanguageOrFallback(obj.common.smartName) : void 0;
  },
  /**
   * Select common.name from the ioBroker object, if available.
   *
   * @param _predefinedName - unused
   * @param obj - the ioBroker object
   * @returns the friendly name
   */
  function(_predefinedName, obj) {
    return (obj == null ? void 0 : obj.common) ? specificLanguageOrFallback(obj.common.name) : void 0;
  },
  /**
   * Combine room and function names, if both are available.
   *
   * @param _predefinedName - unused
   * @param _obj - unused
   * @param room - the room of the object
   * @param func - the function of the object
   * @returns the friendly name
   */
  function(_predefinedName, _obj, room, func) {
    return room && func ? `${room} ${func}` : void 0;
  },
  /**
   * Fall back to the ioBroker object ID.
   *
   * @param _predefinedName - unused
   * @param obj - the ioBroker object
   * @returns the friendly name
   */
  function(_predefinedName, obj) {
    return obj == null ? void 0 : obj._id;
  }
];
function getFriendlyName(predefinedName, obj, room, func) {
  return candidates.reduce((acc, candidate) => {
    if (acc) {
      return acc;
    }
    return candidate(predefinedName, obj, room, func);
  }, void 0);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getFriendlyName
});
//# sourceMappingURL=friendly_name.js.map
