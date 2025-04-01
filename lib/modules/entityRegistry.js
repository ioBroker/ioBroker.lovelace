/**
 * Class to handle the entity registry.
 * i.e. it needs to keep an array of entities, both manually configured and automatically detected.
 * It needs to send the list upon request from the frontend.
 * It has to store additional settings for each entity, like the history parser, the icon, the friendly name, etc.
 *
 * TODO: It should deprecate the dataSingleton.js file.
 */

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
     * Process incoming messages from the frontend
     *
     * @param ws {WebSocket} the websocket connection
     * @param message {object} the message from the frontend
     * @returns {Promise<boolean>} true if the message was processed, false if not
     */
    async processMessage(ws, message) {
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
        } else if (message.type === 'config/entity_registry/get') {
            // config/entity_registry/get
            return true;
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
