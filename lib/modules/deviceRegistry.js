/**
 * DeviceRegistry, a module to implement device registry and process messages from the frontend.
 *
 * Will not story anything to the iobroker db, currently, but generate devices on the fly during device detection.
 */
class DeviceRegistry {
    /**
     * Constructor
     *
     * @param options {object} options including adapter.
     */
    constructor(options) {
        this.adapter = options.adapter;
        this.entityData = options.entityData;
        this.sendResponse = options.sendResponse;
    }

    /**
     * Create device registry entry from an entity on the fly.
     *
     * @param entity {object} the entity to create the entry from
     * @returns {object} the created entry
     */
    _createEntryFromEntity(entity) {
        return {
            id: entity.context.device_id,
            config_entries: [],
            config_entries_subentries: {},
            connections: [],
            identifiers: [[entity.attributes.friendly_name, entity.context.device_id]],
            manufacturer: null,
            model: null,
            model_id: null,
            name: entity.attributes.friendly_name,
            labels: [],
            sw_version: null,
            hw_version: null,
            serial_number: null,
            via_device_id: null,
            area_id: entity.context.roomId || null,
            name_by_user: null,
            entry_type: null,
            disabled_by: null,
            configuration_url: null,
            primary_config_entry: null,
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
        if (message.type === 'config/device_registry/list') {
            const entries = [];
            for (const entity of this.entityData.entities) {
                if (entity.context.id === entity.context.device_id) {
                    entries.push(this._createEntryFromEntity(entity));
                }
            }
            this.sendResponse(ws, message.id, entries);
            return true;
        }
        // Need to also send `device_registry_updated` events. For now hack entity_registry with that.
        return false;
    }
}

module.exports = DeviceRegistry;
