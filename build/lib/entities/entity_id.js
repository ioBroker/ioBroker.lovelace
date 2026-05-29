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
var entity_id_exports = {};
__export(entity_id_exports, {
  getEntityId: () => getEntityId,
  getEntityType: () => getEntityType
});
module.exports = __toCommonJS(entity_id_exports);
const pinyin = require("pinyin").default;
const transliterateRussianToEnglish = require("translit-rus-eng");
function maybeEnglishOrUntranslated(hash) {
  if (typeof hash === "object" && hash !== null) {
    if (hash.en) {
      return hash.en;
    } else {
      const names = Object.values(hash);
      if (names.length === 1) {
        return names[0];
      }
    }
  }
  return hash != null ? hash : "";
}
function entityIdFromObject(obj) {
  if (obj && obj.common) {
    const idPart = maybeEnglishOrUntranslated(obj.common.name);
    if (idPart) {
      return idPart;
    }
  }
  return obj ? obj._id : "NO_ID";
}
function transliterateChinese(str) {
  const maybeChinese = pinyin(str, { style: pinyin.STYLE_TONE2 });
  if (typeof maybeChinese === "object" && maybeChinese.length > 1) {
    let transliterated = "";
    for (let i = 0; i < maybeChinese.length; i++) {
      if (typeof maybeChinese[i] === "object") {
        transliterated += maybeChinese[i][0];
      }
    }
    return transliterated;
  }
  return str;
}
function transliterateGerman(str) {
  return str.replace(/Ü/g, "UE").replace(/Ä/g, "AE").replace(/Ö/g, "OE").replace(/ẞ/g, "SS").replace(/ü/g, "ue").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ß/g, "ss");
}
function replaceInvalidChars(idPart) {
  idPart = idPart.search(/[А-Яа-я]/g) !== -1 ? transliterateRussianToEnglish(idPart) : idPart;
  idPart = transliterateChinese(idPart);
  idPart = transliterateGerman(idPart);
  return idPart.replace(/`/g, "").replace(/[^a-z\d]/gi, "_").replace(/_+/g, "_");
}
function splitEntityId(entityType, entityId, obj) {
  let idPart;
  if (entityId && entityId.includes(".")) {
    const parts = entityId.split(".");
    entityType = parts.shift();
    idPart = parts.join("_");
  } else {
    idPart = entityIdFromObject(obj);
  }
  return [entityType, replaceInvalidChars(idPart)];
}
function getEntityId(entityType, entityId, obj) {
  return splitEntityId(entityType, entityId, obj).join(".");
}
function getEntityType(entityType, entityId, obj) {
  return splitEntityId(entityType, entityId, obj)[0];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getEntityId,
  getEntityType
});
//# sourceMappingURL=entity_id.js.map
