import { BaseEntity } from './baseEntity';
import { getEntityId } from './entity_id';

interface EntityData {
    entities: BaseEntity[];
    iobID2entity: Record<string, BaseEntity[]>;
    entityId2Entity: Record<string, BaseEntity>;
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
    lang: string | undefined,
): string | undefined {
    if (!lang) {
        entityData.log.warn(`getSmartName falling back to en as default for ${id}. Please fix.`);
        lang = 'en';
    }
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
export function getObjectIcon(obj: ioBroker.Object, prefix?: string): string | null {
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
 * Removes entity from cached storages or re-keys it under a new entity_id.
 * Backward-compat shim — prefer `entity.unregister(newId?)` directly on a BaseEntity.
 *
 * @param entity - entity to remove
 * @param newId - if set, the entity is re-keyed under this new id instead of being removed.
 */
export function removeEntity(entity: BaseEntity | null | undefined, newId?: string): void {
    if (!entity) {
        return;
    }
    entity.unregister(newId);
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
): { ids: string[]; entities: BaseEntity[] } {
    const membersNew: string[] = newEnum?.common?.members || [];
    const membersOld: string[] = oldEnum?.common?.members || [];

    let entities: BaseEntity[] = [];
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
 * Fill an entity's STATE/ATTRIBUTES from a `{state, stateRead, ...}` map.
 * Backward-compat shim — prefer `entity.fillFromStates(states, objects)`.
 *
 * @param states - ids of ioBroker states; "state" → entity.state, others → attributes.
 * @param entity - entity to fill
 * @param objects - optional objects cache to determine writeability of attributes.
 */
export function fillEntityFromStates(
    states: Record<string, string>,
    entity: BaseEntity,
    objects?: Record<string, ioBroker.Object>,
): void {
    entity.fillFromStates(states, objects);
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
 * Register an entity in the dataSingleton caches.
 * Backward-compat shim — prefer `entity.registerInCaches()`.
 *
 * @param entity - entity to fill into caches
 */
export function fillEntityIntoCaches(entity: BaseEntity): void {
    entity.registerInCaches();
}

/**
 * Update timestamps on an entity from an ioBroker state.
 * Backward-compat shim — prefer `entity.updateTimestamp(state, isStateChange)`.
 *
 * @param entity - entity to update
 * @param state - ioBroker state to read timestamps from
 */
export function updateTimestamps(entity: BaseEntity, state: ioBroker.State | null | undefined): void {
    entity.updateTimestamp(state, true);
}

/**
 * Track an ioBroker state id on an entity.
 * Backward-compat shim — prefer `entity.addID2entity(id)`.
 *
 * @param id - ioBroker state id
 * @param entity - entity to register the id on
 */
export function addID2entity(id: string, entity: BaseEntity): void {
    entity.addID2entity(id);
}

/**
 * Build a bare entity from common parameters.
 * Backward-compat shim — prefer `new BaseEntity(...)` (or a per-domain subclass).
 *
 * @param name - friendly name; if empty, taken from object or generated from room & func or id
 * @param room - room enum object (used for friendly-name generation)
 * @param func - function enum object (used for friendly-name generation)
 * @param obj - ioBroker object — used for id, name, icon, unit, lovelace-specific settings
 * @param entityType - lovelace domain of the entity (e.g. 'light', 'sensor')
 * @param entity_id - predefined entity id; if empty, generated from name
 */
export function processCommon(
    name: string | null | undefined,
    room: ioBroker.EnumObject | null | undefined,
    func: ioBroker.EnumObject | null | undefined,
    obj: ioBroker.Object | undefined,
    entityType: string,
    entity_id?: string | null,
): BaseEntity {
    return new BaseEntity(name, room, func, obj, entityType, entity_id);
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
