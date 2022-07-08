const entityData = require('./../dataSingleton');
const pinyin = require('pinyin');
const transliterateRussianToEnglish = require('translit-rus-eng');

function maybeEnglishOrUntranslated(hash) {
    if (typeof hash === 'object') {
        if (hash.en) {
            // Entity IDs are always computed from English.
            return hash.en;
        } else {
            const names = Object.values(hash);
            if (names.length === 1) { //if only one name, just take that one.
                return names[0];
            }
        }
    }

    return hash;
}

function entityIdFromObject(obj) {
    //top priority: manually defined "name", i.e. idPart (is mislabeled in custom config).
    if(obj && obj.common && obj.common.custom &&
        obj.common.custom[entityData.adapter.namespace] &&
        obj.common.custom[entityData.adapter.namespace].name) {
        return obj.common.custom[entityData.adapter.namespace].name;
    }
    //Next: common.name, if available.
    if (obj && obj.common) {
        const idPart = maybeEnglishOrUntranslated(obj.common.name);
        if (idPart) {
            return idPart; //else -> fall back to object id.
        }
    }
    // Fallback: ioBroker object ID.
    return obj ? obj._id : 'NO_ID';
}

function transliterateChinese(str) {
    const maybeChinese = pinyin(str, { style: pinyin.STYLE_TONE2 });

    if (typeof maybeChinese === 'object' && maybeChinese.length > 1) {
        // Found Chinese word.
        // "Chinese中文" => [ [ 'Chinese' ], [ 'zhong1' ], [ 'wen2' ] ]

        let transliterated = '';
        for (let i = 0; i < maybeChinese.length; i++) {
            if (typeof maybeChinese[i] === 'object') {
                transliterated += maybeChinese[i][0];
            }
        }
        return transliterated;
    }

    // No Chinese word found, return original string.
    return str;
}

function transliterateGerman(str){
    return str.replace(/Ü/g, 'UE')
        .replace(/Ä/g, 'AE')
        .replace(/Ö/g, 'OE')
        .replace(/ẞ/g, 'SS')
        .replace(/ü/g, 'ue')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ß/g, 'ss');
}

/**
 * Replaces invalid characters from generated unique part of entity id, i.e. light.idPart
 * @param idPart unique part of entity Id
 * @returns {string} cleaned entity Id part.
 */
function replaceInvalidChars(idPart) {
    idPart =
        idPart.search(/[А-Яа-я]/g) !== -1
            ? transliterateRussianToEnglish(idPart)
            : idPart;
    idPart = transliterateChinese(idPart);
    idPart = transliterateGerman(idPart);

    return idPart.replace(/`/g, '')
        .replace(/[^a-z\d]/gi, '_')
        .replace(/_+/g, '_');
}

function parts(entityType, entityId, obj) {
    let idPart;

    if (entityId && entityId.includes('.')) {
        const parts = entityId.split('.');
        entityType = parts.shift();
        idPart = parts.join('_');
    } else {
        idPart = entityIdFromObject(obj);
    }

    return [entityType, replaceInvalidChars(idPart)];
}

function getEntityId(entityType, entityId, obj) {
    return parts(entityType, entityId, obj).join('.');
}

function getEntityType(entityType, entityId, obj) {
    return parts(entityType, entityId, obj)[0];
}

exports.getEntityId = getEntityId;
exports.getEntityType = getEntityType;
