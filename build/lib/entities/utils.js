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
  addID2entity: () => addID2entity,
  autoDetermineEntityType: () => autoDetermineEntityType,
  createEntityNameFromCustom: () => createEntityNameFromCustom,
  createObjectsFromArrayOfIds: () => createObjectsFromArrayOfIds,
  extractValidEntityIds: () => extractValidEntityIds,
  fillEntityFromStates: () => fillEntityFromStates,
  fillEntityIntoCaches: () => fillEntityIntoCaches,
  findEntitiesFromEnumChange: () => findEntitiesFromEnumChange,
  findEnumForId: () => findEnumForId,
  getEnumName: () => getEnumName,
  getParentIDs: () => getParentIDs,
  getSmartName: () => getSmartName,
  processCommon: () => processCommon,
  removeEntity: () => removeEntity,
  setJsonAttribute: () => setJsonAttribute,
  updateTimestamps: () => updateTimestamps
});
module.exports = __toCommonJS(utils_exports);
var import_entity_id = require("./entity_id");
var import_friendly_name = require("./friendly_name");
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
  let object = id ? objects[id] : objects;
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
function _getObjectIcon(obj, prefix) {
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
        icon = `${prefix}/adapter/${obj.common.name}/${obj.common.icon}`;
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
function addID2entity(id, entity) {
  if (!entity.context.ids) {
    entity.context.ids = [];
  }
  const ids = entity.context.ids;
  if (!ids.includes(id)) {
    ids.push(id);
  }
}
function removeEntity(entity, newId) {
  if (!entity) {
    return;
  }
  if (newId) {
    entityData.entityId2Entity[newId] = entity;
  } else {
    delete entityData.entityId2Entity[entity.entity_id];
  }
  if (!newId) {
    let foundIndex = entityData.entities.findIndex((x) => x.entity_id === entity.entity_id);
    while (foundIndex !== -1) {
      entityData.entities.splice(foundIndex, 1);
      foundIndex = entityData.entities.findIndex((x) => x.entity_id === entity.entity_id);
    }
  }
  if (!newId && entity.attributes.entity_picture) {
    const urlIndex = entityData.entityIconUrls.findIndex((x) => x === entity.attributes.entity_picture);
    if (urlIndex !== -1) {
      entityData.entityIconUrls.splice(urlIndex, 1);
    }
  }
  for (const key of Object.keys(entityData.iobID2entity)) {
    const entities = entityData.iobID2entity[key];
    let foundIndex = entities.findIndex((x) => x.entity_id === entity.entity_id);
    while (foundIndex !== -1) {
      entities.splice(foundIndex, 1);
      foundIndex = entities.findIndex((x) => x.entity_id === entity.entity_id);
    }
    if (newId) {
      entities.push(newId);
    }
  }
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
function processCommon(name, room, func, obj, entityType, entity_id) {
  var _a, _b, _c;
  const entity = {
    entity_id: (0, import_entity_id.getEntityId)(entityType, entity_id, obj),
    attributes: {
      friendly_name: (0, import_friendly_name.getFriendlyName)(name, obj, getEnumName(room), getEnumName(func))
    },
    state: "unknown",
    //make sure times are initialized:
    last_changed: 0,
    last_updated: 0,
    context: {
      id: obj._id,
      type: (0, import_entity_id.getEntityType)(entityType, entity_id, obj),
      room: getEnumName(room),
      roomId: room ? room._id : null,
      func: getEnumName(func),
      funcId: func ? func._id : null,
      ids: [obj._id],
      stateType: (_a = obj.common) == null ? void 0 : _a.type,
      deviceId: obj._id,
      aliases: ((_b = getSmartName(obj, obj._id, entityData.lang)) == null ? void 0 : _b.split(",")) || []
    }
  };
  if (obj.common && obj.common.unit) {
    entity.attributes.unit_of_measurement = obj.common.unit;
  }
  if (obj.common && obj.common.icon) {
    entity.attributes.entity_picture = (_c = _getObjectIcon(obj)) != null ? _c : void 0;
  }
  addID2entity(obj._id, entity);
  return entity;
}
function fillEntityFromStates(states, entity, objects) {
  var _a;
  entity.context.STATE = { setId: states.state || void 0, getId: states.stateRead || states.state || "" };
  if (entity.context.STATE.getId) {
    entity.context.id = entity.context.STATE.getId;
  } else if (entity.context.STATE.setId) {
    entity.context.id = entity.context.STATE.setId;
  }
  if (!entity.context.ATTRIBUTES) {
    entity.context.ATTRIBUTES = [];
  }
  for (const key of Object.keys(states)) {
    const id = states[key];
    const obj = objects ? objects[id] : null;
    if (id) {
      addID2entity(id, entity);
      if (!key.endsWith("Read")) {
        if (key !== "state" && key !== "stateRead") {
          const attrs = entity.context.ATTRIBUTES;
          const attr = attrs.find((a) => a.attribute === key);
          if (!attr) {
            attrs.push({
              attribute: key,
              getId: states[`${key}Read`] || id,
              setId: ((_a = obj == null ? void 0 : obj.common) == null ? void 0 : _a.write) ? id : void 0
            });
          } else {
            attr.setId = id;
          }
        }
      }
    }
  }
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
function fillEntityIntoCaches(entity) {
  const foundIndex = entityData.entities.findIndex((x) => x.entity_id === entity.entity_id);
  if (foundIndex !== -1) {
    entityData.log.warn(
      `Got duplicate for entity ${entity.entity_id}. Overwriting old value. Was for ${entityData.entities[foundIndex].context.id} and new one is for ${entity.context.id}`
    );
    entityData.entities[foundIndex] = entity;
  } else {
    entityData.entities.push(entity);
  }
  entityData.entityId2Entity[entity.entity_id] = entity;
  const ids = entity.context.ids;
  for (const id of ids || []) {
    entityData.iobID2entity[id] = entityData.iobID2entity[id] || [];
    const foundIdx = entityData.iobID2entity[id].findIndex((e) => e.entity_id === entity.entity_id);
    if (foundIdx === -1) {
      entityData.iobID2entity[id].push(entity);
    } else {
      entityData.iobID2entity[id][foundIdx] = entity;
    }
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
function updateTimestamps(entity, state, newTS = false) {
  let lc;
  let lu;
  if (!state) {
    lc = Date.now();
    lu = Date.now();
  } else {
    lu = state.ts || Date.now();
    lc = state.lc || state.ts || Date.now();
  }
  const stateId = state ? state._id : "";
  try {
    const ts = new Date(lc).getTime();
    if (isNaN(ts)) {
      throw "Invalid Date";
    }
  } catch (e) {
    entityData.adapter.log.debug(`Invalid lc time for ${stateId} in ${entity.entity_id}: ${String(e)}`);
    lc = Date.now();
  }
  try {
    const ts = new Date(lu).getTime();
    if (isNaN(ts)) {
      throw "Invalid Date";
    }
  } catch (e) {
    entityData.adapter.log.debug(`Invalid lu time for ${stateId} in ${entity.entity_id}: ${String(e)}`);
    lu = Date.now();
  }
  const lcKey = newTS ? "lc" : "last_changed";
  const luKey = newTS ? "lu" : "last_updated";
  const entityRecord = entity;
  if (lc / 1e3 > entityRecord[lcKey] || isNaN(entityRecord[lcKey]) || new Date(entityRecord[lcKey] * 1e3).toString() === "Invalid Date") {
    entityRecord[lcKey] = lc / 1e3;
  }
  if (lu / 1e3 > entityRecord[luKey] || isNaN(entityRecord[luKey]) || new Date(entityRecord[luKey] * 1e3).toString() === "Invalid Date") {
    entityRecord[luKey] = lu / 1e3;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addID2entity,
  autoDetermineEntityType,
  createEntityNameFromCustom,
  createObjectsFromArrayOfIds,
  extractValidEntityIds,
  fillEntityFromStates,
  fillEntityIntoCaches,
  findEntitiesFromEnumChange,
  findEnumForId,
  getEnumName,
  getParentIDs,
  getSmartName,
  processCommon,
  removeEntity,
  setJsonAttribute,
  updateTimestamps
});
//# sourceMappingURL=utils.js.map
