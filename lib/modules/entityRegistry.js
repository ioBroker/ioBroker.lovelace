/**
 * Class to handle the entity registry.
 * i.e. it needs to keep an array of entities, both manually configured and automatically detected.
 * It needs to send the list upon request from the frontend.
 * It has to store additional settings for each entity, like the history parser, the icon, the friendly name, etc.
 *
 * TODO: It should deprecate the dataSingleton.js file.
 */

const { utils } = require('../entities/utils');

/**
 * EntityRegistry, module to implement entity registry and process messages from the frontend.
 *
 * Will store information about entities in ioBroker object database.
 */
class EntityRegistry {
    _entitiesWithId = {};
    _entityCategories = { 0: 'config', 1: 'diagnostic' };

    /**
     * Constructor
     *
     * @param options {object} options including adapter.
     */
    constructor(options) {
        this.adapter = options.adapter;
        this.entityData = options.entityData;
    }

    //LATER!!
    /**
     * Get entity by id
     *
     * @param id {string} the id of the entity
     * @returns entity {object|undefined} the entity object or undefined if not found
     */
    /*getEntity(id) {
        return this._entities[id];
    }*/

    /**
     * Set entity by id
     *
     * @param id {string} the id of the entity
     * @param entity {object} the entity object
     */
    /*setEntity(id, entity) {
        this._entities[id] = entity;
    }*/

    /**
     * Iterate over the entities
     *
     */
    /*[Symbol.iterator]() {
        let index = 0;
        const entities = this._entities;
        return {
            next() {
                if (index < entities.length) {
                    return { value: entities[index++], done: false };
                } else {
                    return { done: true };
                }
            },
        };
    }*/

    /**
     * Load the entity registry from the ioBroker object database
     *
     * @returns {Promise<void>}
     */
    async loadEntityRegistry() {
        const storage = await this.adapter.getObjectAsync('entityRegistry');
        this._entitiesWithId = storage?.native?.entities || {};
        this._entityCategories = storage?.native?.entityCategories || { 0: 'config', 1: 'diagnostic' };
    }

    /**
     * Store the entity registry from the ioBroker object database
     *
     * @returns {Promise<void>}
     */
    async saveEntityRegistry() {
        const storage = await this.adapter.getObjectAsync('entityRegistry');
        if (!storage.native) {
            storage.native = {};
        }
        storage.native.entities = this._entitiesWithId;
        storage.native.entityCategories = this._entityCategories;
        await this.adapter.setObject('entityRegistry', storage);
    }

    /**
     * Convert an entity to the format expected by the frontend for display.
     *
     * @param entity {object} the entity object
     * @returns {{ei: (*|string), en, ai: *, ic, di: *, lb: *[], hb: *, ec: *, tk: (string|*), pl, dp: *}} the entity in the format expected by the frontend
     */
    convertEntityToRegistryDisplay(entity) {
        return {
            ei: entity.entity_id,
            en: entity.name || entity.attributes?.friendly_name,
            ai: entity.area_id,
            ic: entity.icon,
            di: entity.device_id,
            lb: entity.labels || [],
            hb: entity.hidden,
            ec: entity.entity_category,
            tk: entity.translation_key,
            pl: entity.platform,
            dp: entity.display_precision,
        };
    }

    /**
     * Create an entity with an id. Fills all those possible settings in the store with default values or values taken
     * from an entity.
     *
     * @param entity {object} the entity object to create the entry for.
     * @returns {Promise<void>}
     */
    _createEntityWithId(entity) {
        const entityWithId = {
            id: entity.context.id,
            entity_id: entity.entity_id,
            name: null, //seems to always be null?
            icon: null,
            platform: entity.platform,
            config_entry_id: null,
            config_subentry_id: null,
            device_id: entity.context.deviceId || null,
            area_id: entity.context.roomId || null,
            labels: [],
            disabled_by: null, //"user" | "device" | "integration" | "config_entry"
            hidden_by: null, //"user" | "device" | "integration"
            entity_category: null, // "config" | "diagnostic" ...?
            has_entity_name: false, //what...??? does not change to true after changing name...??
            original_name: entity.attributes?.friendly_name, //seems to always be the same as name
            unique_id: entity.context.id, //quite different entries.. seem to contain id part of entity_id sometimes. Hm.
            translation_key: null, //can we control translation with that... but... what translation?
            options: null, //seem to be "platform" specific options. Hm.
            categories: {},
            capabilities: entity.context.capabilities || null,
            original_icon: entity.attributes?.icon, //seems to always be the same as icon
            device_class: entity.attributes?.device_class || null,
            original_device_class: entity.attributes?.device_class || null,
            aliases: entity.context.aliases || null,
        };
        return entityWithId;
    }

    /**
     * Update the entity with the new values from the registry. Happens if frontend changes something.
     * But should also happen if entity is (re)created.
     *
     * @param entity {object} the entity object to update
     * @param entityWithId {object} the registry entry to take the data from.
     */
    updateEntityFromRegistry(entity, entityWithId) {
        entity.entity_id = entityWithId.entity_id;
        this.entityData.entityId2Entity[entityWithId.entity_id] = entity;
        entity.attributes.friendly_name = entityWithId.name || entityWithId.original_name;
        entity.attributes.icon = entityWithId.icon || entityWithId.original_icon;
        entity.platform = entityWithId.platform;
        entity.attributes.device_class = entityWithId.device_class || entityWithId.original_device_class;
    }

    /**
     * Get the entity id from the iobroker id.
     *
     * @param iobId {string} the ioBroker id
     */
    getEntityId(iobId) {
        return this._entitiesWithId[iobId]?.entity_id;
    }

    /**
     * Process incoming messages from the frontend
     *
     * @param ws {WebSocket} the websocket connection
     * @param message {object} the message from the frontend
     * @returns {Promise<boolean>} true if the message was processed, false if not
     */
    async processMessage(ws, message) {
        //TODO: usually subcribes to entity_registry_updated events -> how to update them?
        if (message.type === 'config/entity_registry/list_for_display') {
            const entities = [];
            for (const id of Object.keys(this._entitiesWithId)) {
                entities.push(this.convertEntityToRegistryDisplay(this._entitiesWithId[id]));
            }
            this._sendResponse(ws, message.id, {
                entities,
                entity_categories: this._entityCategories,
            });
            return true;
        } else if (message.type === 'config/entity_registry/list') {
            const entities = [];
            for (const id of Object.keys(this._entitiesWithId)) {
                entities.push(this._entitiesWithId[id]);
            }
            this._sendResponse(ws, message.id, {
                entities,
                entity_categories: this._entityCategories,
            });
            return true;
        } else if (message.type === 'config/entity_registry/get') {
            const entityId = message.entity_id;
            let entityWithId = this._entitiesWithId[entityId];
            const entity = this.entityData.entityId2Entity[entityId];
            if (!entity) {
                ws.send(
                    JSON.stringify({
                        id: message.id,
                        type: 'result',
                        success: false,
                        error: { code: 'entity_not_found' },
                    }),
                );
                this.adapter.log.warn(`Entity ${entityId} not found`);
                return true;
            }
            if (!entityWithId) {
                entityWithId = this._createEntityWithId(entity);
            }
            this._sendResponse(ws, message.id, entityWithId);
            return true;
        } else if (message.type === 'config/entity_registry/update') {
            const entityId = message.entity_id;
            const entityWithId = this._entitiesWithId[entityId];
            const entity = this.entityData.entityId2Entity[entityId];
            if (!entity) {
                ws.send(
                    JSON.stringify({
                        id: message.id,
                        type: 'result',
                        success: false,
                        error: { code: 'entity_not_found' },
                    }),
                );
                this.adapter.log.warn(`Entity ${entityId} not found`);
                return true;
            }
            if (!entityWithId) {
                this._createEntityWithId(entity);
            }
            // deep copy message:
            const newData = JSON.parse(JSON.stringify(message));
            delete newData.id;
            delete newData.type;
            delete newData.entity_id;
            for (const key of Object.keys(newData)) {
                entityWithId[key] = newData[key];
                if (key === 'new_entity_id') {
                    //to replace entity_id, need to touch some caches.
                    utils.removeEntity(entity, newData[key]);
                    delete entityWithId.new_entity_id;
                }
            }
            this.updateEntityFromRegistry(entity, entityWithId);
            this._sendResponse(ws, message.id, {
                entity_entry: entityWithId,
            });
        }
        return false;
    }

    /**
     * Clean up, save the entity registry
     *
     * @returns {Promise<void>}
     */
    async cleanup() {
        this.adapter.log.debug('cleaning up entity registry');
        await this.saveEntityRegistry();
    }

    /**
     * Init module.
     *
     * @returns {Promise<void>}
     */
    async init() {
        await this.loadEntityRegistry();
    }
}

module.exports = EntityRegistry;
