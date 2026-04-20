import type { ioBrokerEntity } from '../converters/converter';
import { getEntityId, getEntityType } from './entity_id';
import { getFriendlyName } from './friendly_name';

interface EntityData {
    entities: ioBrokerEntity[];
    iobID2entity: Record<string, ioBrokerEntity[]>;
    entityId2Entity: Record<string, ioBrokerEntity>;
    adapter: ioBroker.Adapter;
    log: ioBroker.Logger;
    lang: string;
    words: Record<string, string>;
    entityIconUrls: string[];
}

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData: EntityData = require('../../../lib/dataSingleton');

/**
 * Creates objects-Object used in entity creation from an array of ids.
 *
 * @param ids - array of ioBroker object ids
 * @returns object with id as key and ioBroker.Object as values
 */
export async function createObjectsFromArrayOfIds(ids: string[]): Promise<Record<string, ioBroker.Object>> {
    const objects: Record<string, ioBroker.Object> = {};
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
 * Find all parent IDs up to device. Objects for those IDs are guaranteed to be present in objects parameter.
 *
 * @param id - id of object to find parents for
 * @param objects - id to ioBroker.Object cache
 * @returns array of parent IDs, starting with direct parent, up to device. If object is device, returns array with only the id itself.
 */
export function getParentIDs(id: string, objects: Record<string, ioBroker.Object>): string[] {
    const obj = objects[id];
    const parentIDs: string[] = [];
    //make sure to find parent devices, too:
    if (obj) {
        if (obj.type === 'device') {
            return [id];
        } else {
            //if not device, search in parent for device.
            const parts = id.split('.');
            while (parts.length > 3) {
                parts.pop();
                const parentId = parts.join('.');
                const parentObj = objects[parentId];
                if (parentObj) {
                    parentIDs.push(parentId);
                    if (parentObj.type === 'device') {
                        break;
                    }
                }
            }
        }
    }
    return parentIDs;
}

/**
 * Finds out if id is part of this enum or not.
 *
 * @param e - enum object
 * @param id - id to check
 * @returns true if id is part of this enum
 */
function isIdInEnum(e: ioBroker.EnumObject, id: string): boolean {
    for (const member of e.common.members || []) {
        if (id.startsWith(member)) {
            return true;
        }
    }
    return false;
}

/**
 * Find enum in enums array for id.
 *
 * @param enums - array of enum objects
 * @param id - id to find
 * @returns enum object or undefined if not found
 */
export function findEnumForId(enums: ioBroker.EnumObject[], id: string): ioBroker.EnumObject | undefined {
    for (const e of enums) {
        if (isIdInEnum(e, id)) {
            return e;
        }
    }
    return undefined;
}

/**
 * Gets smartName for object or for id from objects cache.
 *
 * @param objects - id to object cache, or a single ioBroker.Object when id is falsy
 * @param id - id of object to get the smartName for; if falsy, objects itself is treated as the object
 * @param lang - language to use for smartName
 * @returns smartName or undefined if not found
 */
export function getSmartName(
    objects: Record<string, ioBroker.Object> | ioBroker.Object,
    id: string | null | undefined,
    lang: string,
): string | undefined {
    const object: ioBroker.Object | undefined = id
        ? (objects as Record<string, ioBroker.Object>)[id]
        : (objects as ioBroker.Object);

    if (!object || !object.common || !(object.common as Record<string, unknown>).smartName) {
        return undefined;
    }
    const smartName = (object.common as Record<string, unknown>).smartName;
    if (typeof smartName === 'object' && smartName !== null) {
        const map = smartName as Record<string, string>;
        return map[lang] || map.en;
    }
    //if not object, just return the smartName.
    return smartName as string;
}

const enumNameCache: Record<string, string> = {};

/**
 * Get name of enum
 *
 * @param obj - enum object
 * @param lang - language code, defaults to 'en'
 * @param force - if true, will not use cache
 * @returns name of enum
 */
export function getEnumName(obj: ioBroker.EnumObject | null | undefined, lang?: string, force = false): string | null {
    if (!obj) {
        return null;
    }
    if (obj._id && enumNameCache[obj._id] && !force) {
        return enumNameCache[obj._id];
    }

    let name: string | undefined = getSmartName(obj as unknown as ioBroker.Object, null, lang ?? 'en');
    name = name || (obj?.common?.name as string | undefined);

    if (name && typeof name === 'object') {
        const nameMap = name as unknown as Record<string, string>;
        name = nameMap[lang ?? 'en'] || nameMap.en;
    }

    if (!name) {
        const parts = obj?._id?.split('.') || [];
        parts.unshift(); //remove "enum"
        parts.unshift(); //remove "functions" / "rooms"
        name = '';
        for (const part of parts) {
            name += ` ${part[0].toUpperCase()}${part.substring(1)}`;
        }
        name = name.substring(1); //remove first space.
    }
    enumNameCache[obj._id] = name;
    return name;
}

/**
 * Internal function of setJsonAttribute
 *
 * @param obj - object to set attribute in
 * @param parts - parts of attribute name
 * @param index - current index
 * @param value - value to set
 */
function _setJsonAttribute(obj: Record<string, unknown>, parts: string[], index: number, value: unknown): void {
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
        _setJsonAttribute(obj[parts[index]] as Record<string, unknown>, parts, index + 1, value);
    }
}

/**
 * Sets attribute of entity at a dotted path.
 *
 * @param obj - object to set attribute in
 * @param path - dotted path to attribute
 * @param value - value to set
 */
export function setJsonAttribute(obj: Record<string, unknown>, path: string, value: unknown): void {
    if (!path) {
        entityData.log.error(`Invalid attribute name for ${JSON.stringify(obj)} = ${String(value)}`);
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
 * @param str - string to extract entity ids from
 * @param alreadyPresentEntityIds - array of already present entity ids
 */
export function extractValidEntityIds(str: string, alreadyPresentEntityIds: string[] = []): void {
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
 * @param obj - ioBroker object
 * @param prefix - prefix to add to local icons
 * @returns icon url or null if no icon
 */
function _getObjectIcon(obj: ioBroker.Object, prefix?: string): string | null {
    prefix = prefix || '.'; //http://localhost:8081';

    if (!obj || !obj.common || !obj.common.icon) {
        return null;
    }

    let icon: string;
    if (!obj.common.icon.match(/^data:image\//)) {
        if (obj.common.icon.startsWith('http')) {
            //icon is full URL. Use that.
            return obj.common.icon;
        }
        if (obj.common.icon.indexOf('.') !== -1) {
            let instance: string[];
            if (obj.type === 'instance') {
                icon = `${prefix}/adapter/${String((obj.common as Record<string, unknown>).name)}/${obj.common.icon}`;
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
 * @param id - ioBroker state id
 * @param entity - complete entity
 */
export function addID2entity(id: string, entity: ioBrokerEntity): void {
    if (!entity.context.ids) {
        entity.context.ids = [];
    }
    const ids = entity.context.ids;
    if (!ids.includes(id)) {
        ids.push(id);
    }
}

/**
 * Removes entity from cached storages or adjusts to new id.
 *
 * @param entity - entity to remove
 * @param newId - if set, will just replay entity_id
 */
export function removeEntity(entity: ioBrokerEntity | null | undefined, newId?: string): void {
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
            entities.push(newId as unknown as ioBrokerEntity);
        }
    }
}

/**
 * Find all entities that are affected by a change in an enum (or that are members of an enum, if oldEnum is empty)
 *
 * @param newEnum - updated enum
 * @param oldEnum - old version of enum
 * @returns object with affected entity ids and entity objects
 */
export function findEntitiesFromEnumChange(
    newEnum: ioBroker.EnumObject,
    oldEnum?: ioBroker.EnumObject,
): { ids: string[]; entities: ioBrokerEntity[] } {
    const membersNew: string[] = newEnum?.common?.members || [];
    const membersOld: string[] = oldEnum?.common?.members || [];

    let entities: ioBrokerEntity[] = [];
    const ids: string[] = [];
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
 * Generate a bare entity from parameters. Already adds the entity to its ids context array.
 *
 * @param name - friendly name of entity; if empty, will be read from object or generated from room & func or id
 * @param room - room enum object of device for name generation
 * @param func - function enum object of device for name generation
 * @param obj - ioBroker object, used to read id, name, icon, unit, lovelace specific settings
 * @param entityType - lovelace domain of entity, for example light, sensor, ...
 * @param entity_id - predefined entity id; if empty, will be generated from name
 * @returns new entity object
 */
export function processCommon(
    name: string | null | undefined,
    room: ioBroker.EnumObject | null | undefined,
    func: ioBroker.EnumObject | null | undefined,
    obj: ioBroker.Object | undefined,
    entityType: string,
    entity_id?: string | null,
): ioBrokerEntity {
    const objId = obj?._id ?? '';
    const entity: ioBrokerEntity = {
        entity_id: getEntityId(entityType, entity_id, obj),
        attributes: {
            friendly_name: getFriendlyName(name, obj, getEnumName(room), getEnumName(func)),
        },
        state: 'unknown',
        //make sure times are initialized:
        last_changed: 0,
        last_updated: 0,
        context: {
            id: objId,
            type: getEntityType(entityType, entity_id, obj),
            room: getEnumName(room),
            roomId: room ? room._id : null,
            func: getEnumName(func),
            funcId: func ? func._id : null,
            ids: [objId],
            stateType: (obj?.common as Record<string, unknown> | undefined)?.type as string | undefined,
            deviceId: objId,
            aliases: obj ? getSmartName(obj, objId, entityData.lang)?.split(',') || [] : [],
        },
    };

    if (obj?.common && obj.common.unit) {
        entity.attributes.unit_of_measurement = obj.common.unit;
    }

    if (obj?.common && obj.common.icon) {
        entity.attributes.entity_picture = _getObjectIcon(obj) ?? undefined;
    }

    if (objId) {
        addID2entity(objId, entity);
    }
    return entity;
}

/**
 * Fill entity functions from states Object — allows users to add generic ioBroker ids as attributes.
 *
 * @param states - ids of ioBroker states; "state" goes into entity-state, can also have stateRead. Rest creates attributes from key.
 * @param entity - entity to fill
 * @param objects - optional objects cache to determine writeability of attributes
 */
export function fillEntityFromStates(
    states: Record<string, string>,
    entity: ioBrokerEntity,
    objects?: Record<string, ioBroker.Object>,
): void {
    //state:
    entity.context.STATE = { setId: states.state || undefined, getId: states.stateRead || states.state || '' };
    // make entity.context.id point to main state. Still have deviceId which points to device object.
    if (entity.context.STATE.getId) {
        entity.context.id = entity.context.STATE.getId;
    } else if (entity.context.STATE.setId) {
        entity.context.id = entity.context.STATE.setId;
    }

    //attributes:
    if (!entity.context.ATTRIBUTES) {
        entity.context.ATTRIBUTES = [];
    }
    for (const key of Object.keys(states)) {
        const id = states[key];
        const obj = objects ? objects[id] : null;
        if (id) {
            addID2entity(id, entity);
            if (!key.endsWith('Read')) {
                if (key !== 'state' && key !== 'stateRead') {
                    const attrs = entity.context.ATTRIBUTES;
                    const attr = attrs.find(a => a.attribute === key);
                    if (!attr) {
                        attrs.push({
                            attribute: key,
                            getId: states[`${key}Read`] || id,
                            setId: (obj?.common as Record<string, unknown>)?.write ? id : undefined,
                        });
                    } else {
                        attr.setId = id;
                    }
                }
            }
        }
    }
}

/**
 * Determine entity type if none set.
 *
 * @param obj - ioBroker object to determine entity type for
 * @returns entity type
 */
export function autoDetermineEntityType(obj: ioBroker.Object): string {
    if (obj.common) {
        if (obj.common.write) {
            if ((obj.common as Record<string, unknown>).states) {
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
 * Fill entity into entityData entity caches.
 *
 * @param entity - entity to fill into caches
 */
export function fillEntityIntoCaches(entity: ioBrokerEntity): void {
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
    const ids = entity.context.ids;
    for (const id of ids || []) {
        entityData.iobID2entity[id] = entityData.iobID2entity[id] || [];
        const foundIdx = entityData.iobID2entity[id].findIndex(e => e.entity_id === entity.entity_id);
        if (foundIdx === -1) {
            entityData.iobID2entity[id].push(entity);
        } else {
            entityData.iobID2entity[id][foundIdx] = entity;
        }
    }
}

/**
 * Creates name of entity from "custom" part of ioBroker object.
 *
 * @param obj - ioBroker object with custom part
 * @param namespace - namespace of adapter (e.g. 'lovelace.0')
 * @returns entity id
 */
export function createEntityNameFromCustom(obj: ioBroker.Object, namespace: string): string {
    const custom = (obj.common as Record<string, unknown>)?.custom as
        | Record<string, Record<string, string>>
        | undefined;
    if (!obj.common || !custom || !custom[namespace]) {
        const entityType = autoDetermineEntityType(obj);
        return getEntityId(entityType, null, obj);
    } else {
        if (!custom[namespace].entity) {
            custom[namespace].entity = autoDetermineEntityType(obj);
        }
        if (!custom[namespace].name) {
            custom[namespace].name = obj._id.replace(/\./g, '_');
        }
        return `${custom[namespace].entity}.${custom[namespace].name}`;
    }
}

/**
 * Update timestamps in entity from state in ioBroker.
 *
 * @param entity - entity to update
 * @param state - state to update from
 * @param newTS - if true, will update lc and lu fields; if false, will update last_changed and last_updated
 */
export function updateTimestamps(
    entity: ioBrokerEntity,
    state: ioBroker.State | null | undefined,
    newTS = false,
): void {
    let lc: number;
    let lu: number;
    if (!state) {
        //if we don't know anything, all is now.
        lc = Date.now();
        lu = Date.now();
    } else {
        lu = state.ts || Date.now();
        lc = state.lc || state.ts || Date.now();
    }

    const stateId = state ? ((state as unknown as Record<string, unknown>)._id as string) : '';
    try {
        const ts = new Date(lc).getTime();
        if (isNaN(ts)) {
            throw new Error('Invalid Date');
        }
    } catch (e) {
        entityData.adapter.log.debug(`Invalid lc time for ${stateId} in ${entity.entity_id}: ${String(e)}`);
        lc = Date.now();
    }
    try {
        const ts = new Date(lu).getTime();
        if (isNaN(ts)) {
            throw new Error('Invalid Date');
        }
    } catch (e) {
        entityData.adapter.log.debug(`Invalid lu time for ${stateId} in ${entity.entity_id}: ${String(e)}`);
        lu = Date.now();
    }

    const lcKey = newTS ? 'lc' : 'last_changed';
    const luKey = newTS ? 'lu' : 'last_updated';
    const entityRecord = entity as unknown as Record<string, number>;

    if (
        lc / 1000 > entityRecord[lcKey] ||
        isNaN(entityRecord[lcKey]) ||
        new Date(entityRecord[lcKey] * 1000).toString() === 'Invalid Date'
    ) {
        entityRecord[lcKey] = lc / 1000;
    }
    if (
        lu / 1000 > entityRecord[luKey] ||
        isNaN(entityRecord[luKey]) ||
        new Date(entityRecord[luKey] * 1000).toString() === 'Invalid Date'
    ) {
        entityRecord[luKey] = lu / 1000;
    }
}
