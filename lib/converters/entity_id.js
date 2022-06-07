const entityData = require("./../dataSingleton");
const pinyin = require("pinyin");
const translit = require("translit-rus-eng");

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
  const found = candidates.reduce(function (acc, candidate) {
    // Poor man's lazy evaluation.
    if (acc) {
      return acc;
    }

    return candidate(obj);
  }, undefined);

  return handleChineseCharacters(found || "");
}

// TODO: Inconsistent handling of Chinese here and Russian later in
// replaceInvalidChars.
function handleChineseCharacters(str) {
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

/**
 * Replaces invalid characters from generated unique part of entity id, i.e. light.idPart
 * @param idPart unique part of entity Id
 * @returns {string} cleaned entity Id part.
 */
function replaceInvalidChars(idPart) {
  idPart = idPart.search(/[А-Яа-я]/g) != -1 ? translit(idPart) : idPart;
  idPart = idPart.replace(/Ü/g, "UE");
  idPart = idPart.replace(/Ä/g, "AE");
  idPart = idPart.replace(/Ö/g, "OE");
  idPart = idPart.replace(/ü/g, "ue");
  idPart = idPart.replace(/ä/g, "ae");
  idPart = idPart.replace(/ö/g, "oe");
  idPart = idPart.replace(/ß/g, "ss");
  idPart = idPart.replace(/`/g, "");
  idPart = idPart.replace(/[^a-zA-Z0-9А-Яа-я_]/g, "_");
  idPart = idPart.replace(/_+/g, "_");
  return idPart;
}

function parts(entityType, entityId, obj) {
  let idPart;

  if (entityId && entityId.includes(".")) {
    const parts = entityId.split(".");
    entityType = parts.shift();
    idPart = parts.join("_");
  } else {
    // TODO: Not sure why we would want to replace here while replaceInvalidChars
    // runs later. Also the replacement will be inconsistent with the replacement
    // of the idPart computed in the if above.
    idPart = entityIdFromObject(obj).replace(
      /[^-._\w0-9А-Яа-яÄÜÖßäöü ]/g,
      "_"
    );
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
