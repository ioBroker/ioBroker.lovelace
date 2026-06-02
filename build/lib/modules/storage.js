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
var storage_exports = {};
__export(storage_exports, {
  STORAGE_OBJECTS: () => STORAGE_OBJECTS,
  STORAGE_PREFIX: () => STORAGE_PREFIX,
  migrateStorageObjects: () => migrateStorageObjects
});
module.exports = __toCommonJS(storage_exports);
const STORAGE_PREFIX = "storage.";
const STORAGE_OBJECTS = ["entityRegistry", "areaRegistry", "energyPrefs", "userData", "dashboardStorage"];
async function migrateStorageObjects(adapter) {
  for (const id of STORAGE_OBJECTS) {
    const newId = `${STORAGE_PREFIX}${id}`;
    let oldObj;
    try {
      oldObj = await adapter.getObjectAsync(id);
    } catch {
      oldObj = null;
    }
    if (!oldObj) {
      continue;
    }
    const oldHasData = !!oldObj.native && Object.keys(oldObj.native).length > 0;
    try {
      const newObj = await adapter.getObjectAsync(newId);
      if (!newObj) {
        await adapter.setObjectAsync(newId, {
          type: "channel",
          common: { name: `Storage for ${id}` },
          native: oldObj.native || {}
        });
        adapter.log.info(`Migrated storage object ${id} -> ${newId} (created)`);
      } else if (oldHasData && !(newObj.native && Object.keys(newObj.native).length > 0)) {
        newObj.native = oldObj.native;
        await adapter.setObjectAsync(newId, newObj);
        adapter.log.info(`Migrated storage object ${id} -> ${newId}`);
      }
      await adapter.delObjectAsync(id);
      adapter.log.debug(`Removed legacy storage object ${id}`);
    } catch (e) {
      adapter.log.warn(`Could not migrate storage object ${id} -> ${newId}: ${String(e)}`);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  STORAGE_OBJECTS,
  STORAGE_PREFIX,
  migrateStorageObjects
});
//# sourceMappingURL=storage.js.map
