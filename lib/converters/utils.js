const pinyin = require('pinyin');

/**
 * Creates objects-Object used in entity creation from array of ids.
 * @param {Array<string>} ids array of ids
 * @returns {Promise<{string: ioBroker.Object}>}
 */
async function createObjectsFromArrayOfIds(ids) {
    const objects = {};
    const objectsUnsorted = await Promise.all(ids.map(id => this.adapter.getForeignObjectAsync(id)));
    for (const obj of objectsUnsorted) {
        if (obj) { //might be null if object for id does not exist.
            objects[obj._id] = obj;
        }
    }
    return objects;
}


/**
 * Replaces invalid characters from generated unique part of entity id, i.e. light.idPart
 * @param idPart unique part of entity Id
 * @returns {string} cleaned entity Id part.
 */
function _replaceInvalidChars(idPart) {
    idPart = idPart.replace(/Ü/g, 'UE');
    idPart = idPart.replace(/Ä/g, 'AE');
    idPart = idPart.replace(/Ö/g, 'OE');
    idPart = idPart.replace(/ü/g, 'ue');
    idPart = idPart.replace(/ä/g, 'ae');
    idPart = idPart.replace(/ö/g, 'oe');
    idPart = idPart.replace(/ß/g, 'ss');
    idPart = idPart.replace(/[^a-zA-Z0-9А-Яа-я_]/g, '_');
    return idPart;
}

/**
 * Get Icon if object has one. Supports data:image, url, and local icon path.
 * @param obj
 * @param prefix
 * @returns {string|null|*}
 * @private
 */
function _getObjectIcon(obj, prefix) {
    prefix = prefix || '.';//http://localhost:8081';

    if (!obj || !obj.common || !obj.common.icon) {
        return null;
    }

    let icon;
    if (!obj.common.icon.match(/^data:image\//)) {
        if (obj.common.icon.startsWith('http')) {
            //icon is full URL. Use that.
            return obj.common.icon;
        }
        if (obj.common.icon.indexOf('.') !== -1) {
            let instance;
            if (obj.type === 'instance') {
                icon = prefix + '/adapter/' + obj.common.name + '/' + obj.common.icon;
            } else if (obj._id && obj._id.match(/^system\.adapter\./)) {
                instance = obj._id.split('.', 3);
                if (obj.common.icon[0] === '/') {
                    instance[2] += obj.common.icon;
                } else {
                    instance[2] += '/' + obj.common.icon;
                }
                icon = prefix + '/adapter/' + instance[2];
            } else {
                instance = obj._id.split('.', 2);
                if (obj.common.icon[0] === '/') {
                    instance[0] += obj.common.icon;
                } else {
                    instance[0] += '/' + obj.common.icon;
                }
                icon = prefix + '/adapter/' + instance[0];
            }
        } else {
            return null; // '<i class="material-icons iob-list-icon">' + obj.common.icon + '</i>';
        }
    } else {
        // base 64 image
        icon = obj.common.icon;
    }

    return icon;
}

/**
 * ioBroker ID needs to be subscribed, if entity is used in vis in order to update.
 * @param id of ioBroker object
 * @param entity entity_id
 */
function addID2entity(id, entity) {
    this._ID2entity[id] = this._ID2entity[id] || [];
    const found = this._ID2entity[id].find(e => e.entity_id === entity.entity_id);
    if (!found) {
        this._ID2entity[id].push(entity);
    }
}

/**
 * Get name from object, depending on lang with  fall back to id.
 * @param obj
 * @param _lang
 * @returns {string|*}
 * @private
 */
function _getObjectName(obj, _lang) {
    //_lang = _lang || this.lang; can't do this. Make sure lang is set below.

    if (obj && obj.common && obj.common.name) {
        if (typeof obj.common.name === 'object') {
            if (obj.common.name[_lang] || obj.common.name.en) {
                return obj.common.name[_lang] || obj.common.name.en;
            } else {
                const lang = Object.keys(obj.common.name).find(lang => obj.common.name[lang]);
                if (obj.common.name[lang]) {
                    return obj.common.name[lang];
                } else {
                    return obj._id;
                }
            }
        } else {
            return obj.common.name;
        }
    } else {
        return obj ? obj._id || '' : '';
    }
}

/**
 * Generates name from object depending on language.
 * @param obj
 * @param __lang
 * @returns {string|*|string}
 */
function getObjectName(obj, __lang) {
    const objName = _getObjectName(obj, __lang);
    const pinyinObjNameObj = pinyin(objName, {style: pinyin.STYLE_TONE2});
    if (typeof pinyinObjNameObj === 'object' && pinyinObjNameObj.length > 1) {
        // Found Chinese word.
        // "Chinese中文" => [ [ 'Chinese' ], [ 'zhong1' ], [ 'wen2' ] ]
        let pinyinObjName = '';
        for (let i = 0; i < pinyinObjNameObj.length; i++) {
            if (typeof pinyinObjNameObj[i] === 'object') {
                pinyinObjName += pinyinObjNameObj[i][0];
            }
        }
        return pinyinObjName;
    }
    // No Chinese word found, return origin object name
    return objName;
}


/**
 * Generates name from obj and replaces some characters so it is valid friendly name.
 * @param obj
 * @param lang
 * @returns {string}
 * @private
 */
function _generateName(obj, lang) {
    return getObjectName(obj, lang).replace(/[^-._\w0-9А-Яа-яÄÜÖßäöü ]/g, '_');
}

/**
 * generate a bare entity from parameters. Already adds the entity to a bunch of arrays. So be sure to use it!
 * @param {string|null} name friendly name of entity, if empty, will be read from object or generated from room & func or id.
 * @param {string|null} room room of device for name generation
 * @param {string|null} func function of device for name generation
 * @param {Object} obj ioBroker object, used to read id, name, icon, unit, lovelace specific settings.
 * @param {string} entityType lovelace domain of entity, for example light, sensor, ...
 * @param [entity_id] predefined entity id. If empty, will be generated from name
 * @returns {{context: {id: string, type: string}, attributes: {friendly_name: string}, entity_id: string}}
 */
function processCommon(name, room, func, obj, entityType, entity_id) {
    if (!name) {
        if (obj && obj.common && obj.common.name) {
            name = _generateName(obj, this.lang);
        } else if (func && room) {
            name = room + ' ' + func;
        } else {
            name = (obj && obj.common && obj.common.custom && obj.common.custom[this.adapter.namespace] && obj.common.custom[this.adapter.namespace].name) || generateName(obj, this.lang);
        }
    }
    let idPart;
    if (entity_id && /^.+\..+$/.test(entity_id)) {
        /** @type{Array<String>} */
        const parts = entity_id.split('.');
        entityType = parts.shift();
        idPart = _replaceInvalidChars(parts.join('_'));
    } else {
        idPart = _replaceInvalidChars(_generateName(obj, 'en'));
    }

    const entity = {
        entity_id: (entityType + '.' + idPart),
        attributes: {
            friendly_name: name
        },
        //last_changed: new Date(state.lc).toISOString(),
        //last_updated: new Date(state.ts).toISOString(),
        context: {
            id: obj._id,
            type: entityType,
        }
    };

    if (obj.common.unit) {
        entity.attributes.unit_of_measurement = obj.common.unit;
    }

    if (obj.common.icon) {
        entity.attributes.entity_picture = _getObjectIcon(obj);
    }

    this._addID2entity(obj._id, entity);
    this._entity2ID[entity.entity_id] = entity;
    const foundIndex = this._entities.findIndex(x => x.entity_id === entity.entity_id);
    if (foundIndex !== -1) {
        this._entities[foundIndex] = entity;
    } else {
        this._entities.push(entity);
    }
    return entity;
}

//required to read user name
exports.getObjectName       = getObjectName;

//required by other converters:
exports._processCommon       = processCommon;
exports._addID2entity        = addID2entity;

//other tools:
exports.createObjectsFromArrayOfIds = createObjectsFromArrayOfIds;
