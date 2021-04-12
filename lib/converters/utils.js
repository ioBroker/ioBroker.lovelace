const pinyin      = require('pinyin');
const entityData  = require('./../dataSingleton');

/**
 * Creates objects-Object used in entity creation from array of ids.
 * @param {Array<string>} ids array of ids
 * @returns {Promise<{string: ioBroker.Object}>}
 */
async function createObjectsFromArrayOfIds(ids) {
    const objects = {};
    const objectsUnsorted = await Promise.all(ids.map(id => entityData.adapter.getForeignObjectAsync(id)));
    for (const obj of objectsUnsorted) {
        if (obj) { //might be null if object for id does not exist.
            objects[obj._id] = obj;
        }
    }
    return objects;
}

/**
 * Finds out if id is part of this enum or not.
 * @param e
 * @param id
 * @returns {boolean}
 */
function isIdInEnum(e, id) {
    for (const member of e.common.members) {
        if (id.startsWith(member)) {
            return true;
        }
    }
    return false;
}

/**
 * Find enum in enums array for id.
 * @param enums
 * @param id
 * @returns {Object|undefined}
 */
function findEnumForId(enums, id) {
    for (const e of enums) {
        if (isIdInEnum(e, id)) {
            return e;
        }
    }
}

/**
 * Gets smartName for object or for id from objects cache.
 * @param {{String: ioBroker.Object}|ioBroker.Object} objects id to object cache
 * @param {String} id id of object to get the smartName for.
 * @returns {string|undefined}
 */
function getSmartName(objects, id) {
    if (!id) {
        return objects.common.smartName;
    }
    return objects[id] && objects[id].common ? objects[id].common.smartName : undefined;
}

/**
 * Get name of enum
 * @param {ioBroker.Enum} obj
 * @param {string} [lang] or 'en'
 * @returns {string}
 */
function getEnumName(obj, lang) {
    let name = getSmartName(obj);
    name = name || obj.common.name;

    if (name && typeof name === 'object') {
        name = name[lang] || name.en;
    }

    if (!name) {
        const parts = obj._id.split('.');
        parts.unshift(); //remove "enum"
        parts.unshift(); //remove "functions" / "rooms"
        name = '';
        for (const part of parts) {
            name += ' ' + part[0].toUpperCase() + part.substring(1);
        }
        name = name.substring(1); //remove first space.
    }
    return name;
}

/**
 * Internal function of setJsonAttribute
 * @param obj
 * @param parts
 * @param index
 * @param value
 * @private
 */
function _setJsonAttribute(obj, parts, index, value) {
    if (parts.length - 1 === index) {
        obj[parts[index]] = value;
    } else {
        // if a number
        if (typeof obj[parts[index]] !== 'object') {
            if (parts.length - 2 >= index && parts[index + 1] >= '0' && parts[index + 1] <= '9') {
                obj[parts[index]] = [];
            } else {
                obj[parts[index]] = {};
            }
        }
        _setJsonAttribute(obj[parts[index]], parts, index + 1, value);
    }
}

/**
 * sets attribute of entity.
 * @param obj
 * @param path
 * @param value
 */
function setJsonAttribute(obj, path, value) {
    if (!path) {
        entityData.log.error('Invalid attribute name for ' + JSON.stringify(obj) + ' = ' + value);
        return;
    }
    const parts = path.split('.');
    if (parts.length === 1) {
        obj[path] = value;
    } else {
        _setJsonAttribute(obj, parts, 0, value);
    }
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
    entityData.iobID2entity[id] = entityData.iobID2entity[id] || [];
    const found = entityData.iobID2entity[id].find(e => e.entity_id === entity.entity_id);
    if (!found) {
        entityData.iobID2entity[id].push(entity);
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
    _lang = _lang || entityData.lang;


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
 * Removes entity from cached storages.
 * @param entity
 */
function removeEntity(entity) {
    // need to process those:
    // entityData.entities        = []; done
    // entityData.entityId2Entity = {}; done
    // entityData.iobId2Entity    = {}; <- no, done in removeIdFromEntities, which calls this function.
    // entityData._entityIconUrls = []; //stores icon urls that may be accessed without token.
    if (!entity) {
        return;
    }
    delete entityData.entityId2Entity[entity.entity_id];
    const foundIndex = entityData.entities.findIndex(x => x.entity_id === entity.entity_id);
    if (foundIndex !== -1) {
        entityData.entities.splice(foundIndex, 1);
    }
    if (entity.attributes.entity_picture) {
        const urlIndex = entityData.entityIconUrls.findIndex(entity.attributes.entity_picture);
        if (urlIndex !== -1) {
            entityData.entityIconUrls.splice(urlIndex, 1);
        }
    }
}

/**
 * Remove id from entities / remove entities that use this id. Used if object with id was deleted.
 * @param id
 * @returns {boolean} true if entity did change.
 */
function removeIdFromEntities(id) {
    const affectedEntities = entityData.iobID2entity[id];
    let changed = false;
    if (affectedEntities) {
        for (const entity of affectedEntities) {
            if (entity.context.STATE) {
                if (entity.context.STATE.getId === id || entity.context.STATE.setId === id) {
                    //completely remove entity:
                    changed = true;
                    removeEntity(entity);
                }
            }
            if (entity.context.ATTRIBUTES) {
                const remainingAttributes = [];
                for (const attribute of entity.context.ATTRIBUTES) {
                    if (attribute.setId === id || attribute.getId === id) {
                        entityData.log.debug(`Removed attribute ${attribute.attribute} from ${entity.entity_id} because ${id} was deleted.`);
                        changed = true;
                    } else {
                        remainingAttributes.push(attribute);
                    }
                }
                entity.context.ATTRIBUTES = remainingAttributes;
            }
            if (entity.context.COMMANDS) {
                const remainingCommands = [];
                for (const command of entity.context.COMMANDS) {
                    if (command.setId === id || command.getId === id) {
                        entityData.log.debug(`Removed command ${command.service} from ${entity.entity_id} because ${id} was deleted.`);
                        changed = true;
                    } else {
                        remainingCommands.push(command);
                    }
                }
                entity.context.COMMANDS = remainingCommands;
            }
        }
    }
    //remove id from entity:
    delete entityData.iobID2entity[id];
    return changed;
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
            name = _generateName(obj, entityData.lang);
        } else if (func && room) {
            name = room + ' ' + func;
        } else {
            name = (obj && obj.common && obj.common.custom && obj.common.custom[this.adapter.namespace] && obj.common.custom[this.adapter.namespace].name) || _generateName(obj, this.lang);
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

    addID2entity(obj._id, entity);
    entityData.entityId2Entity[entity.entity_id] = entity;
    const foundIndex = entityData.entities.findIndex(x => x.entity_id === entity.entity_id);
    if (foundIndex !== -1) {
        entityData.entities[foundIndex] = entity;
    } else {
        entityData.entities.push(entity);
    }
    return entity;
}

/**
 * Determine entity type if none set.
 * @param {ioBroker.Object} obj
 * @returns {string}
 */
function autoDetermineEntityType(obj) {
    if (obj.common) {
        if (obj.common.write) {
            if (obj.common.type === 'number') {
                return 'input_number';
            } else if (obj.common.type === 'boolean') {
                return 'input_boolean';
            } else {
                return 'input_text';
            }
        } else {
            if (obj.common.type === 'boolean') {
                return 'binary_sensor';
            } else {
                return 'sensor';
            }
        }
    } else {
        return 'sensor'; //sensor can be everything.
    }
}

/**
 * Creates name of entity from "custom" part of ioBroker object.
 * @param {ioBroker.Object} obj
 * @param {String} namespace - namespace of adapter
 * @returns {string}
 */
function createEntityNameFromCuston(obj, namespace) {
    if (!obj.common || !obj.common.custom || !obj.common.custom[namespace]) {
        return autoDetermineEntityType(obj) + '.' + _replaceInvalidChars(_generateName(obj, 'en'));
    }
    const custom = obj.common.custom[namespace];
    const entityType = custom.entity || autoDetermineEntityType(obj);
    const idPart = custom.name;
    const entity_id = idPart && typeof idPart === 'string' ? entityType + '.' + idPart : null;
    return entity_id;
}

//required to read user name
exports.getObjectName       = getObjectName;
exports.getEnumName         = getEnumName;

//required by other converters:
exports.processCommon       = processCommon;
exports.addID2entity        = addID2entity;

//other tools:
exports.createObjectsFromArrayOfIds = createObjectsFromArrayOfIds;
exports.createEntityNameFromCuston  = createEntityNameFromCuston;
exports.autoDetermineEntityType     = autoDetermineEntityType;
exports.setJsonAttribute            = setJsonAttribute;
exports.getSmartName                = getSmartName;

//used for intelligent update:
exports.removeIdFromEntities = removeIdFromEntities;
exports.removeEntity         = removeEntity;
exports.findEnumForId        = findEnumForId;
