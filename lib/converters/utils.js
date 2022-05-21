const pinyin      = require('pinyin');
const entityData  = require('./../dataSingleton');
const translit    = require('translit-rus-eng');

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
    idPart =  idPart.search(/[А-Яа-я]/g) !=-1 ? translit(idPart): idPart;
    idPart = idPart.replace(/Ü/g, 'UE');
    idPart = idPart.replace(/Ä/g, 'AE');
    idPart = idPart.replace(/Ö/g, 'OE');
    idPart = idPart.replace(/ü/g, 'ue');
    idPart = idPart.replace(/ä/g, 'ae');
    idPart = idPart.replace(/ö/g, 'oe');
    idPart = idPart.replace(/ß/g, 'ss');
    idPart = idPart.replace(/`/g, '');
    idPart = idPart.replace(/[^a-zA-Z0-9А-Яа-я_]/g, '_');
    idPart = idPart.replace(/_+/g,'_');
    return idPart;
}

/**
 * Extract all entity ids from a string and add them to the array alreadyPresentEntityIds.
 * @param {string} str
 * @param {Array<string>} alreadyPresentEntityIds
 */
function extractValidEntityIds(str, alreadyPresentEntityIds = []) {
    const entityRegEx = /([a-zA-Z0-9А-Яа-я_]+\.[a-zA-Z0-9А-Яа-я_]+)/g;
    let match = entityRegEx.exec(str);
    while (match !== null) {
        const id = match[1];
        //check if id valid, if not already present and if we have an entity for the id:
        if (id && alreadyPresentEntityIds.indexOf(id) === -1 && entityData.entityId2Entity[id]) {
            alreadyPresentEntityIds.push(id);
        }
        match = entityRegEx.exec(str);
    }
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
 * @param entity complete entity
 */
function addID2entity(id, entity) {
    if (!entity.context.ids) {
        entity.context.ids = [];
    }
    if (!entity.context.ids.includes(id)) {
        entity.context.ids.push(id);
    }
}

/**
 * Get name from object, depending on lang with  fall back to id.
 * @param obj
 * @param lang
 * @returns {string|*}
 * @private
 */
function _getObjectName(obj, lang) {
    lang = lang || entityData.lang;

    const specificLanguageOrFallback = function(hash){
        if (typeof hash === "object") {
          // Prefer language, use English as a fallback.
          return hash[lang] || hash.en;
        }

        return hash;
    };

    const candidates = [
        function() {
            // Highest priority: instance-specific name.
            return (
                obj &&
                obj.common &&
                obj.common.custom &&
                obj.common.custom[entityData.adapter.namespace] &&
                obj.common.custom[entityData.adapter.namespace].name
            );
        },
        function() {
            // Next: common.smartName, if available.
            return (
                obj &&
                obj.common &&
                specificLanguageOrFallback(obj.common.smartName)
            );
        },
        function() {
            // Next: common.name, if available.
            return (
                obj &&
                obj.common &&
                specificLanguageOrFallback(obj.common.name)
            );
        },
        function() {
            // Fallback: ioBroker object ID.
            return obj && obj._id;
        }
    ];

    const found = candidates
      .reduce(function (acc, candidate) {
        // Poor man's lazy evaluation.
        if (acc) {
          return acc;
        }

        return candidate();
      }, undefined);

    return found || '';
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
    // entityData.entities        = [];
    // entityData.entityId2Entity = {};
    // entityData.iobID2entity    = {};
    // entityData._entityIconUrls = []; //stores icon urls that may be accessed without token.
    if (!entity) {
        return;
    }
    delete entityData.entityId2Entity[entity.entity_id];
    let foundIndex = entityData.entities.findIndex(x => x.entity_id === entity.entity_id);
    while (foundIndex !== -1) {
        entityData.entities.splice(foundIndex, 1);
        foundIndex = entityData.entities.findIndex(x => x.entity_id === entity.entity_id);
    }
    if (entity.attributes.entity_picture) {
        const urlIndex = entityData.entityIconUrls.findIndex(x => x === entity.attributes.entity_picture);
        if (urlIndex !== -1) {
            entityData.entityIconUrls.splice(urlIndex, 1);
        }
    }
    for (const key of Object.keys(entityData.iobID2entity)) {
        const entities = entityData.iobID2entity[key];
        let foundIndex = entities.findIndex(x => x.entity_id === entity.entity_id);
        while (foundIndex !== -1) {
            entities.splice(foundIndex, 1);
            foundIndex = entities.findIndex(x => x.entity_id === entity.entity_id);
        }
    }
}

/**
 * Find all entities that are affected by a change in an enum (or that are members of an enum, if oldEnum is empty)
 * @param {ioBroker.Enum} newEnum
 * @param {ioBroker.Enum} [oldEnum]
 * @returns {Array<Entity>}
 */
function findEntitiesFromEnumChange(newEnum, oldEnum) {
    const membersNew = newEnum && newEnum.common ? newEnum.common.members || [] : [];
    const membersOld = oldEnum && oldEnum.common ? oldEnum.common.members || [] : [];

    let entities = [];
    const ids = [];
    for (const id of membersNew) {
        if (!membersOld.includes(id)) {
            //new id!
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
            //removed id!
            const affectedEntities = entityData.iobID2entity[id];
            if (affectedEntities && affectedEntities.length) {
                entities = entities.concat(affectedEntities);
            } else {
                ids.push(id);
            }
        }
    }

    return {ids, entities};
}

function _getFriendlyName(predefinedName, obj, room, func) {
    const candidates = [
        function() {
            // Highest priority: The predefined name.
            return predefinedName;
        },
        function() {
            // Next: if the object and its names are available, try them.
            return (
                obj &&
                obj.common &&
                (obj.common.name || obj.common.smartName) &&
                _generateName(obj, entityData.lang)
            );
        },
        function() {
            // Next: room and function.
            return room && func && (room + " " + func);
        },
        function() {
            // Fallback, use ioBroker object ID.
            return _generateName(obj, entityData.lang);
        }
    ];

    return candidates.reduce(function (acc, current) {
        // Poor man's lazy evaluation.
        if (acc) {
            return acc;
        }

        return current();
    }, undefined);
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
    let idPart;
    if (entity_id && entity_id.includes('.')) {
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
            friendly_name: _getFriendlyName(name, obj, room, func)
        },
        //last_changed: new Date(state.lc).toISOString(),
        //last_updated: new Date(state.ts).toISOString(),
        context: {
            id: obj._id,
            type: entityType,
            room: room,
            func: func,
            ids: [obj._id]
        }
    };

    if (obj.common && obj.common.unit) {
        entity.attributes.unit_of_measurement = obj.common.unit;
    }

    if (obj.common && obj.common.icon) {
        entity.attributes.entity_picture = _getObjectIcon(obj);
    }

    addID2entity(obj._id, entity);
    return entity;
}

/**
 * Fill entity functions from states Object -> allows users to add generic iobroker ids as attributes. Useful for additional info (currently, only).
 * @param {Record<string, string>} states ids of iobroker states - "state" goes into entity-state, can also have stateRead. Rest creates attributes from key.
 * @param {Entity} entity entity to fill.
 */
function fillEntityFromStates(states, entity) {
    //state:
    entity.context.STATE = {setId: states.state || null, getId: states.stateRead || states.state || null};

    //attributes:
    entity.context.ATTRIBUTES = entity.context.ATTRIBUTES || [];
    for (const key of Object.keys(states)) {
        const id = states[key];
        if (id) {
            addID2entity(id, entity);
            if (!key.endsWith('Read')) {
                if (key !== 'state' && key !== 'stateRead') {
                    const attr = entity.context.ATTRIBUTES.find(a => a.attribute === key);
                    if (!attr) {
                        entity.context.ATTRIBUTES.push({attribute: key, getId: states[key + 'Read'] || id});
                    }
                }
            }
        }
    }
}

/**
 * Determine entity type if none set.
 * @param {ioBroker.Object} obj
 * @returns {string}
 */
function autoDetermineEntityType(obj) {
    if (obj.common) {
        if (obj.common.write) {
            if (obj.common.states) {
                return 'input_select';
            }
            if (obj.common.role === 'date') {
                return 'input_datetime';
            }
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
 * Fill entity into entityData-entity caches.
 * @param entity
 */
function fillEntityIntoCaches(entity) {
    const foundIndex = entityData.entities.findIndex(x => x.entity_id === entity.entity_id);
    if (foundIndex !== -1) {
        entityData.log.warn(`Got duplicate for entity ${entity.entity_id}. Overwriting old value. Was for ${entityData.entities[foundIndex].context.id} and new one is for ${entity.context.id}`);
        entityData.entities[foundIndex] = entity;
    } else {
        entityData.entities.push(entity);
    }
    entityData.entityId2Entity[entity.entity_id] = entity;
    for (const id of entity.context.ids) {
        entityData.iobID2entity[id] = entityData.iobID2entity[id] || [];
        const foundIndex = entityData.iobID2entity[id].findIndex(e => e.entity_id === entity.entity_id);
        if (foundIndex === -1) {
            entityData.iobID2entity[id].push(entity);
        } else {
            entityData.iobID2entity[id][foundIndex] = entity;
        }
    }
}

/**
 * Creates name of entity from "custom" part of ioBroker object.
 * @param {ioBroker.Object} obj
 * @param {String} namespace - namespace of adapter
 * @returns {string}
 */
function createEntityNameFromCustom(obj, namespace) {
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
exports.processCommon        = processCommon;
exports.addID2entity         = addID2entity;
exports.fillEntityFromStates = fillEntityFromStates;

//other tools:
exports.createObjectsFromArrayOfIds = createObjectsFromArrayOfIds;
exports.createEntityNameFromCuston  = createEntityNameFromCustom;
exports.autoDetermineEntityType     = autoDetermineEntityType;
exports.setJsonAttribute            = setJsonAttribute;
exports.getSmartName                = getSmartName;
exports.fillEntityIntoCaches        = fillEntityIntoCaches;
exports.extractValidEntityIds       = extractValidEntityIds; //used to manage subscriptions.

//used for intelligent update:
exports.removeEntity               = removeEntity;
exports.findEnumForId              = findEnumForId;
exports.findEntitiesFromEnumChange = findEntitiesFromEnumChange;
