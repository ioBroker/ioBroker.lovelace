/**
 * AreaRegistry, a module to implement device registry and process messages from the frontend.
 */
class AreaRegistry {
    /**
     * Constructor
     *
     * @param options {object} options including adapter.
     */
    constructor(options) {
        this.adapter = options.adapter;
        this.rooms = options.rooms;
        this.sendResponse = options.sendResponse;
        this.sendUpdate = options.sendUpdate;
    }

    /**
     * Create device registry entry from an entity on the fly.
     *
     * @param room {ioBroker.Object} the entity to create the entry from
     * @returns {object} the created entry
     */
    _createEntryFromRoom(room) {
        return {
            area_id: room._id,
            name: typeof room.common.name === 'string' ? room.common.name : (room.common.name[this.adapter.lang] || room.common.name.en || room.common.name[Object.keys(room.common.name)[0]]),
            aliases: [],
            floor_id: null,
            humidity_entity_id: null,
            icon: room.common.icon,
            labels: [],
            picture: null,
            temperature_entity_id: null,
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
        if (message.type === 'config/area_registry/list') {
            const entries = [];
            for (const room of Object.values(this.rooms)) {
                entries.push(this._createEntryFromRoom(room));
            }
            this.sendResponse(ws, message.id, entries);
            return true;
        }
        return false;
    }

    /**
     * Process object changes - tell the frontend to reload rooms, if a room enum is changed.
     *
     * @param id {string} the id of the changed object
     */
    onObjectChange(id) {
        // Need to also send `area_registry_updated` events...
        if (id?.startsWith('enum.rooms.')) {
            this.sendUpdate('area_registry_updated');
        }
    }
}

module.exports = AreaRegistry;
