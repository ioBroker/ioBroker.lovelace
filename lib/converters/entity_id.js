const entityData = require("./../dataSingleton");
const pinyin = require("pinyin");
const transliterateRussianToEnglish = require("translit-rus-eng");

const candidates = [
  function (obj) {
    // Highest priority: instance-specific name.
    return (
      obj &&
      obj.common &&
      obj.common.custom &&
      obj.common.custom[entityData.adapter.namespace] &&
      obj.common.custom[entityData.adapter.namespace].name
    );
  },
  function (obj) {
    // Next: common.name, if available.
    return obj && obj.common && maybeEnglishOrUntranslated(obj.common.name);
  },
  function (obj) {
    // Fallback: ioBroker object ID.
    return obj && obj._id;
  },
];

function maybeEnglishOrUntranslated (hash) {
  if (typeof hash === "object") {
    // Entity IDs are always computed from English.
    return hash.en;
  }

  return hash;
};

function entityIdFromObject(obj) {
  return candidates.reduce(function (acc, candidate) {
    // Poor man's lazy evaluation.
    if (acc) {
      return acc;
    }

    return candidate(obj);
  }, undefined);
}

function transliterateChinese(str) {
  const maybeChinese = pinyin(str, { style: pinyin.STYLE_TONE2 });

  if (typeof maybeChinese === "object" && maybeChinese.length > 1) {
    // Found Chinese word.
    // "Chinese中文" => [ [ 'Chinese' ], [ 'zhong1' ], [ 'wen2' ] ]

    let transliterated = "";
    for (let i = 0; i < maybeChinese.length; i++) {
      if (typeof maybeChinese[i] === "object") {
        transliterated += maybeChinese[i][0];
      }
    }
    return transliterated;
  }

  // No Chinese word found, return original string.
  return str;
}

function transliterateGerman(str){
  return str.replace(/Ü/g, "UE")
    .replace(/Ä/g, "AE")
    .replace(/Ö/g, "OE")
    .replace(/ẞ/g, "SS")
    .replace(/ü/g, "ue")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ß/g, "ss");
}

/**
 * Replaces invalid characters from generated unique part of entity id, i.e. light.idPart
 * @param idPart unique part of entity Id
 * @returns {string} cleaned entity Id part.
 */
function replaceInvalidChars(idPart) {
  idPart =
    idPart.search(/[А-Яа-я]/g) != -1
      ? transliterateRussianToEnglish(idPart)
      : idPart;
  idPart = transliterateChinese(idPart);
  idPart = transliterateGerman(idPart);

  return idPart.replace(/`/g, "")
    .replace(/[^a-z\d]/gi, "_")
    .replace(/_+/g, "_");
}

function parts(entityType, entityId, obj) {
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
  return parts(entityType, entityId, obj).join(".");
}

function getEntityType(entityType, entityId, obj) {
  const [type, _, __] = parts(entityType, entityId, obj);
  return type;
}

exports.getEntityId = getEntityId;
exports.getEntityType = getEntityType;
