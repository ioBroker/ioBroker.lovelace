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
    _entries = {};
    _entityCategories = { 0: 'config', 1: 'diagnostic' };

    /**
     * Constructor
     *
     * @param options {object} options including adapter.
     */
    constructor(options) {
        this.adapter = options.adapter;
        this.entityData = options.entityData;
        this.sendResponse = options.sendResponse;
        this.sendUpdate = options.sendUpdate;
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
        this._entries = storage?.native?.entities || {};
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
        storage.native.entities = this._entries;
        storage.native.entityCategories = this._entityCategories;
        await this.adapter.setObject('entityRegistry', storage);
    }

    /**
     * Convert an entity registry entry to the format expected by the frontend for display.
     *
     * @param entityWithId {object} the entity object
     * @returns {{ei: (*|string), en, ai: *, ic, di: *, lb: *[], hb: *, ec: *, tk: (string|*), pl, dp: *}} the entity in the format expected by the frontend
     */
    convertEntryForDisplay(entityWithId) {
        return {
            ei: entityWithId.entity_id,
            en: entityWithId.name || entityWithId.original_name,
            ai: entityWithId.area_id,
            ic: entityWithId.icon || entityWithId.original_icon,
            di: entityWithId.device_id,
            lb: entityWithId.labels || [],
            hb: entityWithId.hidden,
            ec: entityWithId.entity_category,
            tk: entityWithId.translation_key,
            pl: entityWithId.platform,
            dp: entityWithId.display_precision,
        };
    }

    /**
     * Create an entity with an id. Fills all those possible settings in the store with default values or values taken
     * from an entity.
     *
     * @param entity {object} the entity object to create the entry for.
     * @returns {Promise<void>}
     */
    _createEntryFromEntity(entity) {
        const entry = {
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

        if (entry.platform === 'sensor') {
            //sensor options -> see entity_registry.ts
            entry.options = {
                sensor: {
                    display_precision: entity.attributes?.display_precision || null,
                    suggested_display_precision: entity.attributes?.suggested_display_precision || null,
                    unit_of_measurement: entity.attributes?.unit_of_measurement || null, //also number option
                },
            };
        } else if (entry.platform === 'number') {
            entry.options = {
                number: {
                    unit_of_measurement: entity.attributes?.unit_of_measurement || null, //also number option
                },
            };
        } else if (entry.platform === 'light') {
            //light options -> see entity_registry.ts
            entry.options = {
                light: {
                    favorite_colors: entity.attributes?.favorite_colors || [],
                },
            };
        } else if (entry.platform === 'lock') {
            //lock options:
            entry.options = {
                lock: {
                    default_code: entity.attributes?.default_code || null,
                },
            };
        } else if (entry.platform === 'alarm_control_panel') {
            entry.options = {
                alarm_control_panel:
                    entry.platform === 'alarm_control_panel'
                        ? {
                              default_code: entity.attributes?.default_code || null,
                          }
                        : undefined,
            };
        } else if (entry.platform === 'weather') {
            entry.options = {
                weather: {
                    //weather options:
                    precipitation_unit: entity.attributes?.precipitation_unit || undefined,
                    pressure_unit: entity.attributes?.pressure_unit || undefined,
                    temperature_unit: entity.attributes?.temperature_unit || undefined,
                    visibility_unit: entity.attributes?.visibility_unit || undefined,
                    wind_speed_unit: entity.attributes?.wind_speed_unit || undefined,
                },
            };
        }
        return entry;
    }

    /**
     * Update the entity with the new values from the registry. Happens if the frontend changes something.
     * But it should also happen if the entity is (re)created.
     *
     * @param entity {object} the entity to update
     * @param [entry] {object|undefined} the registry entry to take the data from.
     */
    updateEntityFromRegistry(entity, entry) {
        if (!entry) {
            entry = this._entries[entity.context.id];
            if (!entry) {
                this.adapter.log.warn(`Entity ${entity.context.id} not found in registry`);
                return;
            }
        }
        entity.entity_id = entry.entity_id;
        this.entityData.entityId2Entity[entry.entity_id] = entity;
        entity.attributes.friendly_name = entry.name || entry.original_name;
        entity.attributes.icon = entry.icon || entry.original_icon;
        entity.platform = entry.platform;
        entity.attributes.device_class = entry.device_class || entry.original_device_class;
        if (entry.options) {
            for (const platform of Object.keys(entry.options)) {
                if (entry.options[platform]) {
                    for (const attribute of Object.keys(entry.options[platform])) {
                        entity.attributes[attribute] = entry.options[platform][attribute];
                    }
                }
            }
        }
    }

    /**
     * Get the entity id from the iobroker id.
     *
     * @param iobId {string} the ioBroker id
     */
    getEntityId(iobId) {
        return this._entries[iobId]?.entity_id;
    }

    /**
     * Store the entity id in the registry for this iob id to solve duplicates.
     *
     * @param iobId {string} the ioBroker id
     * @param entityId {string} the entity id
     */
    storeEntityId(iobId, entityId) {
        this._entries[iobId] = this._entries[iobId] || {};
        this._entries[iobId].entity_id = entityId;
    }

    /**
     * Process incoming messages from the frontend
     *
     * @param ws {WebSocket} the websocket connection
     * @param message {object} the message from the frontend
     * @returns {Promise<boolean>} true if the message was processed, false if not
     */
    async processMessage(ws, message) {
        if (message.type === 'config/entity_registry/list_for_display') {
            const entities = [];
            for (const entity of this.entityData.entities) {
                entities.push(this.convertEntryForDisplay(this._createEntryFromEntity(entity)));
            }
            this.sendResponse(ws, message.id, {
                entities,
                entity_categories: this._entityCategories,
            });
            return true;
        } else if (message.type === 'config/entity_registry/list') {
            const entities = [];
            for (const id of Object.keys(this._entries)) {
                entities.push(this._entries[id]);
            }
            this.sendResponse(ws, message.id, {
                entities,
                entity_categories: this._entityCategories,
            });
            return true;
        } else if (message.type === 'config/entity_registry/get') {
            const entityId = message.entity_id;
            let entityWithId = this._entries[entityId];
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
                entityWithId = this._createEntryFromEntity(entity);
            }
            this.sendResponse(ws, message.id, entityWithId);
            return true;
        } else if (message.type === 'config/entity_registry/update') {
            const entityId = message.entity_id;
            const entityWithId = this._entries[entityId];
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
                this._createEntryFromEntity(entity);
            }
            // deep copy message:
            const newData = JSON.parse(JSON.stringify(message));
            delete newData.id;
            delete newData.type;
            delete newData.entity_id;
            const changes = {};
            for (const key of Object.keys(newData)) {
                changes[key] = entityWithId[key] || null; //notify about changes.
                entityWithId[key] = newData[key];
                if (key === 'new_entity_id') {
                    //to replace entity_id, need to touch some caches.
                    utils.removeEntity(entity, newData[key]);
                    delete entityWithId.new_entity_id;
                }
            }
            this.updateEntityFromRegistry(entity, entityWithId);
            this.sendResponse(ws, message.id, {
                entity_entry: entityWithId,
            });
            this.sendUpdate('entity_registry_updated', {
                action: 'update',
                entity_id: entityWithId.entity_id,
                changes,
            });
        }
        return false;
    }

    /**
     * Update entities from the registry. Inform the frontend about changes.
     *
     * @param entities {[]} the entities to update
     * @param sendEvent {boolean} true if the event should be sent
     */
    handleUpdatedEntities(entities = [], sendEvent = false) {
        if (entities.length > 0 && sendEvent) {
            for (const entity of entities) {
                this.updateEntityFromRegistry(entity);
            }
            this.sendUpdate('entity_registry_updated');
        }
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
