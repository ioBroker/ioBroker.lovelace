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
var utils_exports = {};
__export(utils_exports, {
  autoDetermineEntityType: () => autoDetermineEntityType,
  createEntityNameFromCustom: () => createEntityNameFromCustom,
  createObjectsFromArrayOfIds: () => createObjectsFromArrayOfIds,
  extractValidEntityIds: () => extractValidEntityIds,
  findEntitiesFromEnumChange: () => findEntitiesFromEnumChange,
  findEnumForId: () => findEnumForId,
  getEnumName: () => getEnumName,
  getObjectIcon: () => getObjectIcon,
  getParentIDs: () => getParentIDs,
  getSmartName: () => getSmartName,
  setJsonAttribute: () => setJsonAttribute
});
module.exports = __toCommonJS(utils_exports);
var import_entity_id = require("./entity_id");
const entityData = require("../../../lib/dataSingleton");
async function createObjectsFromArrayOfIds(ids) {
  const objects = {};
  const objectsUnsorted = await Promise.all(ids.map((id) => entityData.adapter.getForeignObjectAsync(id)));
  for (const obj of objectsUnsorted) {
    if (obj) {
      objects[obj._id] = obj;
    }
  }
  return objects;
}
function getParentIDs(id, objects) {
  const obj = objects[id];
  const parentIDs = [];
  if (obj) {
    if (obj.type === "device") {
      return [id];
    } else {
      const parts = id.split(".");
      while (parts.length > 3) {
        parts.pop();
        const parentId = parts.join(".");
        const parentObj = objects[parentId];
        if (parentObj) {
          parentIDs.push(parentId);
          if (parentObj.type === "device") {
            break;
          }
        }
      }
    }
  }
  return parentIDs;
}
function isIdInEnum(e, id) {
  for (const member of e.common.members || []) {
    if (id.startsWith(member)) {
      return true;
    }
  }
  return false;
}
function findEnumForId(enums, id) {
  for (const e of enums) {
    if (isIdInEnum(e, id)) {
      return e;
    }
  }
  return void 0;
}
function getSmartName(objects, id, lang) {
  if (!lang) {
    entityData.log.warn(`getSmartName falling back to en as default for ${id}. Please fix.`);
    lang = "en";
  }
  const object = id ? objects[id] : objects;
  if (!object || !object.common || !object.common.smartName) {
    return void 0;
  }
  const smartName = object.common.smartName;
  if (typeof smartName === "object" && smartName !== null) {
    const map = smartName;
    return map[lang] || map.en;
  }
  return smartName;
}
const enumNameCache = {};
function getEnumName(obj, lang, force = false) {
  var _a, _b;
  if (!obj) {
    return null;
  }
  if (obj._id && enumNameCache[obj._id] && !force) {
    return enumNameCache[obj._id];
  }
  let name = getSmartName(obj, null, lang != null ? lang : "en");
  name = name || ((_a = obj == null ? void 0 : obj.common) == null ? void 0 : _a.name);
  if (name && typeof name === "object") {
    const nameMap = name;
    name = nameMap[lang != null ? lang : "en"] || nameMap.en;
  }
  if (!name) {
    const parts = ((_b = obj == null ? void 0 : obj._id) == null ? void 0 : _b.split(".")) || [];
    parts.unshift();
    parts.unshift();
    name = "";
    for (const part of parts) {
      name += ` ${part[0].toUpperCase()}${part.substring(1)}`;
    }
    name = name.substring(1);
  }
  enumNameCache[obj._id] = name;
  return name;
}
function _setJsonAttribute(obj, parts, index, value) {
  if (parts.length - 1 === index) {
    obj[parts[index]] = value;
  } else {
    if (typeof obj[parts[index]] !== "object") {
      if (parts.length - 2 >= index && parts[index + 1] >= "0" && parts[index + 1] <= "9") {
        obj[parts[index]] = [];
      } else {
        obj[parts[index]] = {};
      }
    }
    _setJsonAttribute(obj[parts[index]], parts, index + 1, value);
  }
}
function setJsonAttribute(obj, path, value) {
  if (!path) {
    entityData.log.error(`Invalid attribute name for ${JSON.stringify(obj)} = ${String(value)}`);
    return;
  }
  const parts = path.split(".");
  if (parts.length === 1) {
    obj[path] = value;
  } else {
    _setJsonAttribute(obj, parts, 0, value);
  }
}
function extractValidEntityIds(str, alreadyPresentEntityIds = []) {
  const entityRegEx = /([a-zA-Z0-9А-Яа-я_]+\.[a-zA-Z0-9А-Яа-я_]+)/g;
  let match = entityRegEx.exec(str);
  while (match !== null) {
    const id = match[1];
    if (id && alreadyPresentEntityIds.indexOf(id) === -1 && entityData.entityId2Entity[id]) {
      alreadyPresentEntityIds.push(id);
    }
    match = entityRegEx.exec(str);
  }
}
function getObjectIcon(obj, prefix) {
  prefix = prefix || ".";
  if (!obj || !obj.common || !obj.common.icon) {
    return null;
  }
  let icon;
  if (!obj.common.icon.match(/^data:image\//)) {
    if (obj.common.icon.startsWith("http")) {
      return obj.common.icon;
    }
    if (obj.common.icon.indexOf(".") !== -1) {
      let instance;
      if (obj.type === "instance") {
        icon = `${prefix}/adapter/${String(obj.common.name)}/${obj.common.icon}`;
      } else if (obj._id && obj._id.match(/^system\.adapter\./)) {
        instance = obj._id.split(".", 3);
        if (obj.common.icon[0] === "/") {
          instance[2] += obj.common.icon;
        } else {
          instance[2] += `/${obj.common.icon}`;
        }
        icon = `${prefix}/adapter/${instance[2]}`;
      } else {
        instance = obj._id.split(".", 2);
        if (obj.common.icon[0] === "/") {
          instance[0] += obj.common.icon;
        } else {
          instance[0] += `/${obj.common.icon}`;
        }
        icon = `${prefix}/adapter/${instance[0]}`;
      }
    } else {
      return null;
    }
  } else {
    icon = obj.common.icon;
  }
  return icon;
}
function findEntitiesFromEnumChange(newEnum, oldEnum) {
  var _a, _b;
  const membersNew = ((_a = newEnum == null ? void 0 : newEnum.common) == null ? void 0 : _a.members) || [];
  const membersOld = ((_b = oldEnum == null ? void 0 : oldEnum.common) == null ? void 0 : _b.members) || [];
  let entities = [];
  const ids = [];
  for (const id of membersNew) {
    if (!membersOld.includes(id)) {
      const affectedEntities = entityData.iobID2entity[id];
      if (affectedEntities && affectedEntities.length) {
        entities = entities.concat(affectedEntities);
      } else {
        ids.push(id);
      }
    }
  }
  for (const id of membersOld) {
    if (!membersNew.includes(id)) {
      const affectedEntities = entityData.iobID2entity[id];
      if (affectedEntities && affectedEntities.length) {
        entities = entities.concat(affectedEntities);
      } else {
        ids.push(id);
      }
    }
  }
  return { ids, entities };
}
function autoDetermineEntityType(obj) {
  if (obj.common) {
    if (obj.common.write) {
      if (obj.common.states) {
        return "input_select";
      }
      if (obj.common.role === "date") {
        return "input_datetime";
      }
      if (obj.common.type === "number") {
        return "input_number";
      } else if (obj.common.type === "boolean") {
        return "input_boolean";
      } else {
        return "input_text";
      }
    } else {
      if (obj.common.type === "boolean") {
        return "binary_sensor";
      } else {
        return "sensor";
      }
    }
  } else {
    return "sensor";
  }
}
function createEntityNameFromCustom(obj, namespace) {
  var _a;
  const custom = (_a = obj.common) == null ? void 0 : _a.custom;
  if (!obj.common || !custom || !custom[namespace]) {
    const entityType = autoDetermineEntityType(obj);
    return (0, import_entity_id.getEntityId)(entityType, null, obj);
  } else {
    if (!custom[namespace].entity) {
      custom[namespace].entity = autoDetermineEntityType(obj);
    }
    if (!custom[namespace].name) {
      custom[namespace].name = obj._id.replace(/\./g, "_");
    }
    return `${custom[namespace].entity}.${custom[namespace].name}`;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  autoDetermineEntityType,
  createEntityNameFromCustom,
  createObjectsFromArrayOfIds,
  extractValidEntityIds,
  findEntitiesFromEnumChange,
  findEnumForId,
  getEnumName,
  getObjectIcon,
  getParentIDs,
  getSmartName,
  setJsonAttribute
});
//# sourceMappingURL=utils.js.map
