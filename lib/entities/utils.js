const entityData = require('./../dataSingleton');
const getEntityId = require('./entity_id').getEntityId;
const getEntityType = require('./entity_id').getEntityType;
const getFriendlyName = require('./friendly_name').getFriendlyName;

/**
 * Creates objects-Object used in entity creation from an array of ids.
 *
 * @param {Array<string>} ids array of ids
 * @returns {Promise<{string: ioBroker.Object}>} object with id as key and ioBroker.Object as values.
 */
async function createObjectsFromArrayOfIds(ids) {
    const objects = {};
    const objectsUnsorted = await Promise.all(ids.map(id => entityData.adapter.getForeignObjectAsync(id)));
    for (const obj of objectsUnsorted) {
        if (obj) {
            //might be null if object for id does not exist.
            objects[obj._id] = obj;
        }
    }
    return objects;
}

/**
 * Finds out if id is part of this enum or not.
 *
 * @param e {ioBroker.Enum} enum object
 * @param id {string} id to check
 * @returns {boolean} true if id is part of this enum.
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
 *
 * @param enums {Array<ioBroker.Enum>} array of enums
 * @param id {string} id to find
 * @returns {object | undefined} enum object or undefined if not found.
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
 *
 * @param {{String: ioBroker.Object}|ioBroker.Object} objects id to object cache
 * @param {string} id id of object to get the smartName for.
 * @param {string} lang language to use for smartName
 * @returns {string|undefined} smartName or undefined if not found.
 */
function getSmartName(objects, id, lang) {
    let object = objects[id];
    if (!id) {
        object = objects;
    }
    if (!object || !object.common || !object.common.smartName) {
        return undefined;
    }
    if (typeof object.common.smartName === 'object') {
        return object.common.smartName[lang] || object.common.smartName.en;
    }
    //if not object, just return the smartName.
    return object.common.smartName;
}

const cache = {};
/**
 * Get name of enum
 *
 * @param {ioBroker.Enum} obj enum object
 * @param {string} [lang] or 'en' if not set.
 * @param {boolean} [force] if true, will not use cache.
 * @returns {string} name of enum
 */
function getEnumName(obj, lang, force = false) {
    if (cache[obj._id] && !force) {
        return cache[obj._id];
    }
    if (!obj) {
        return null;
    }

    let name = getSmartName(obj, null, lang);
    name = name || obj?.common?.name;

    if (name && typeof name === 'object') {
        name = name[lang] || name.en;
    }

    if (!name) {
        const parts = obj?._id?.split('.');
        parts.unshift(); //remove "enum"
        parts.unshift(); //remove "functions" / "rooms"
        name = '';
        for (const part of parts) {
            name += ` ${part[0].toUpperCase()}${part.substring(1)}`;
        }
        name = name.substring(1); //remove first space.
    }
    cache[obj._id] = name;
    return name;
}

/**
 * Internal function of setJsonAttribute
 *
 * @param obj object to set attribute in
 * @param parts parts of attribute name
 * @param index current index
 * @param value value to set
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
 *
 * @param obj object to set attribute in
 * @param path path to attribute
 * @param value value to set
 */
function setJsonAttribute(obj, path, value) {
    if (!path) {
        entityData.log.error(`Invalid attribute name for ${JSON.stringify(obj)} = ${value}`);
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
 * Extract all entity ids from a string and add them to the array alreadyPresentEntityIds.
 *
 * @param {string} str string to extract entity ids from
 * @param {Array<string>} alreadyPresentEntityIds array of already present entity ids
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
 *
 * @param obj {ioBroker.Object} ioBroker object
 * @param prefix {string} prefix to add to local icons
 * @returns {string|null|*} icon url or null if no icon.
 */
function _getObjectIcon(obj, prefix) {
    prefix = prefix || '.'; //http://localhost:8081';

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
                icon = `${prefix}/adapter/${obj.common.name}/${obj.common.icon}`;
            } else if (obj._id && obj._id.match(/^system\.adapter\./)) {
                instance = obj._id.split('.', 3);
                if (obj.common.icon[0] === '/') {
                    instance[2] += obj.common.icon;
                } else {
                    instance[2] += `/${obj.common.icon}`;
                }
                icon = `${prefix}/adapter/${instance[2]}`;
            } else {
                instance = obj._id.split('.', 2);
                if (obj.common.icon[0] === '/') {
                    instance[0] += obj.common.icon;
                } else {
                    instance[0] += `/${obj.common.icon}`;
                }
                icon = `${prefix}/adapter/${instance[0]}`;
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
 *
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
 * Removes entity from cached storages or adjusts to new id.
 *
 * @param entity entity to remove
 * @param newId if set, will just replay entity_id.
 */
function removeEntity(entity, newId) {
    // need to process those:
    // entityData.entities        = [];
    // entityData.entityId2Entity = {};
    // entityData.iobID2entity    = {};
    // entityData._entityIconUrls = []; //stores icon urls that may be accessed without token.
    if (!entity) {
        return;
    }

    //entityId2Entity:
    if (newId) {
        entityData.entityId2Entity[newId] = entity;
    } else {
        delete entityData.entityId2Entity[entity.entity_id];
    }

    //entities
    if (!newId) {
        let foundIndex = entityData.entities.findIndex(x => x.entity_id === entity.entity_id);
        while (foundIndex !== -1) {
            entityData.entities.splice(foundIndex, 1);
            foundIndex = entityData.entities.findIndex(x => x.entity_id === entity.entity_id);
        }
    }

    //_entityIconUrls
    if (!newId && entity.attributes.entity_picture) {
        const urlIndex = entityData.entityIconUrls.findIndex(x => x === entity.attributes.entity_picture);
        if (urlIndex !== -1) {
            entityData.entityIconUrls.splice(urlIndex, 1);
        }
    }

    //iobID2entity
    for (const key of Object.keys(entityData.iobID2entity)) {
        const entities = entityData.iobID2entity[key];
        let foundIndex = entities.findIndex(x => x.entity_id === entity.entity_id);
        while (foundIndex !== -1) {
            entities.splice(foundIndex, 1);
            foundIndex = entities.findIndex(x => x.entity_id === entity.entity_id);
        }
        if (newId) {
            entities.push(newId);
        }
    }
}

/**
 * Find all entities that are affected by a change in an enum (or that are members of an enum, if oldEnum is empty)
 *
 * @param {ioBroker.Enum} newEnum updated enum
 * @param {ioBroker.Enum} [oldEnum] old version of enum
 * @returns {{ids: Array<string>, entities: Array<object>}} array of entities that are affected by the change.
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

    return { ids, entities };
}

/**
 * generate a bare entity from parameters. Already adds the entity to a bunch of arrays. So be sure to use it!
 *
 * @param {string|null} name friendly name of entity, if empty, will be read from object or generated from room & func or id.
 * @param {string|null} room room of device for name generation
 * @param {string|null} func function of device for name generation
 * @param {object} obj ioBroker object, used to read id, name, icon, unit, lovelace specific settings.
 * @param {string} entityType lovelace domain of entity, for example light, sensor, ...
 * @param [entity_id] predefined entity id. If empty, will be generated from name
 * @returns {{context: {id: string, type: string}, attributes: {friendly_name: string}, entity_id: string}} new entity object
 */
function processCommon(name, room, func, obj, entityType, entity_id) {
    const entity = {
        entity_id: getEntityId(entityType, entity_id, obj),
        attributes: {
            friendly_name: getFriendlyName(name, obj, room, func),
        },
        //make sure times are initialized:
        last_changed: 0,
        last_updated: 0,
        context: {
            id: obj._id,
            type: getEntityType(entityType, entity_id, obj),
            room: room,
            func: func,
            ids: [obj._id],
            stateType: obj.common?.type,
        },
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
 *
 * @param {Record<string, string>} states ids of iobroker states - "state" goes into entity-state, can also have stateRead. Rest creates attributes from key.
 * @param {object} entity entity to fill.
 */
function fillEntityFromStates(states, entity) {
    //state:
    entity.context.STATE = { setId: states.state || null, getId: states.stateRead || states.state || null };

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
                        entity.context.ATTRIBUTES.push({ attribute: key, getId: states[`${key}Read`] || id });
                    }
                }
            }
        }
    }
}

/**
 * Determine entity type if none set.
 *
 * @param {ioBroker.Object} obj ioBroker object to determine entity type for.
 * @returns {string} entity type
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
 *
 * @param entity entity to fill into caches
 */
function fillEntityIntoCaches(entity) {
    const foundIndex = entityData.entities.findIndex(x => x.entity_id === entity.entity_id);
    if (foundIndex !== -1) {
        entityData.log.warn(
            `Got duplicate for entity ${entity.entity_id}. Overwriting old value. Was for ${entityData.entities[foundIndex].context.id} and new one is for ${entity.context.id}`,
        );
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
 *
 * @param {ioBroker.Object} obj - ioBroker object with custom part
 * @param {string} namespace - namespace of adapter
 * @returns {string} entity id
 */
function createEntityNameFromCustom(obj, namespace) {
    if (!obj.common || !obj.common.custom || !obj.common.custom[namespace]) {
        const entityType = autoDetermineEntityType(obj);
        return getEntityId(entityType, null, obj);
    } else {
        if (!obj.common.custom[namespace].entity) {
            obj.common.custom[namespace].entity = autoDetermineEntityType(obj);
        }
        if (!obj.common.custom[namespace].name) {
            obj.common.custom[namespace].name = obj._id.replace(/\./g, '_');
        }
        return `${obj.common.custom[namespace].entity}.${obj.common.custom[namespace].name}`;
    }
}

/**
 * Update timestamps in entity from state in ioBroker.
 *
 * @param entity {object} entity to update
 * @param state {ioBroker.State} state to update from
 * @param newTS {boolean} if true, will update lc and lu, if false, will update last_changed and last_updated.
 */
function updateTimestamps(entity, state, newTS = false) {
    let lc;
    let lu;
    if (!state) {
        //if we don't know anything, all is now.
        lc = Date.now();
        lu = Date.now();
    } else {
        lu = state.ts || Date.now();
        lc = state.lc || state.ts || Date.now();
    }

    try {
        const ts = new Date(lc).getTime();
        if (isNaN(ts)) {
            throw 'Invalid Date';
        }
    } catch (e) {
        entityData.adapter.log.debug(`Invalid lc time for ${state._id} in ${entity.entity_id}: ${e}`);
        lc = Date.now();
    }
    try {
        const ts = new Date(lc).getTime();
        if (isNaN(ts)) {
            throw 'Invalid Date';
        }
    } catch (e) {
        entityData.adapter.log.debug(`Invalid lu time for ${state._id} in ${entity.entity_id}: ${e}`);
        lu = Date.now();
    }

    let lcToCheck = 'last_changed';
    let luToCheck = 'last_updated';
    if (newTS) {
        lcToCheck = 'lc';
        luToCheck = 'lu';
    }

    if (
        lc / 1000 > entity[lcToCheck] ||
        isNaN(entity[lcToCheck]) ||
        new Date(entity[lcToCheck] * 1000).toString() === 'Invalid Date'
    ) {
        entity[lcToCheck] = lc / 1000;
    }
    if (
        lu / 1000 > entity[luToCheck] ||
        isNaN(entity[luToCheck]) ||
        new Date(entity[luToCheck] * 1000).toString() === 'Invalid Date'
    ) {
        entity[luToCheck] = lu / 1000;
    }
}

//required to read user name
exports.getEnumName = getEnumName;

//required by other converters:
exports.processCommon = processCommon;
exports.addID2entity = addID2entity;
exports.fillEntityFromStates = fillEntityFromStates;

//other tools:
exports.createObjectsFromArrayOfIds = createObjectsFromArrayOfIds;
exports.createEntityNameFromCuston = createEntityNameFromCustom;
exports.autoDetermineEntityType = autoDetermineEntityType;
exports.setJsonAttribute = setJsonAttribute;
exports.getSmartName = getSmartName;
exports.fillEntityIntoCaches = fillEntityIntoCaches;
exports.extractValidEntityIds = extractValidEntityIds; //used to manage subscriptions.
exports.updateTimestamps = updateTimestamps;

//used for intelligent update:
exports.removeEntity = removeEntity;
exports.findEnumForId = findEnumForId;
exports.findEntitiesFromEnumChange = findEntitiesFromEnumChange;
