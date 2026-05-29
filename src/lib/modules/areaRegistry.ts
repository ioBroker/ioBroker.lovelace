type SendResponseFn = (ws: unknown, id: unknown, result: unknown) => void;
type SendUpdateFn = (type: string) => void;

/**
 * AreaRegistry, a module to implement area registry and process messages from the frontend.
 */
class AreaRegistry {
    private adapter: ioBroker.Adapter & { lang: string };
    private rooms: Record<string, ioBroker.Object>;
    private sendResponse: SendResponseFn;
    private sendUpdate: SendUpdateFn;

    /**
     * Constructor
     *
     * @param options - options including adapter.
     * @param options.adapter - ioBroker adapter instance
     * @param options.rooms - map of room enum objects
     * @param options.sendResponse - function to send a response to a client
     * @param options.sendUpdate - function to broadcast an update event
     */
    constructor(options: {
        adapter: ioBroker.Adapter & { lang: string };
        rooms: Record<string, ioBroker.Object>;
        sendResponse: SendResponseFn;
        sendUpdate: SendUpdateFn;
    }) {
        this.adapter = options.adapter;
        this.rooms = options.rooms;
        this.sendResponse = options.sendResponse;
        this.sendUpdate = options.sendUpdate;
    }

    /**
     * Create area registry entry from a room object.
     *
     * @param room - the ioBroker room enum object
     * @returns the created entry
     */
    private _createEntryFromRoom(room: ioBroker.Object): Record<string, unknown> {
        const name = room.common.name;
        const nameStr =
            typeof name === 'string'
                ? name
                : (name as Record<string, string>)[this.adapter.lang] ||
                  (name as Record<string, string>).en ||
                  (name as Record<string, string>)[Object.keys(name)[0]];
        return {
            area_id: room._id,
            name: nameStr,
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
     * Process incoming messages from the frontend.
     *
     * @param ws - the websocket connection
     * @param message - the message from the frontend
     * @returns true if the message was processed, false if not
     */
    processMessage(ws: unknown, message: Record<string, unknown>): boolean {
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
     * @param id - the id of the changed object
     */
    onObjectChange(id: string): void {
        if (id?.startsWith('enum.rooms.')) {
            this.sendUpdate('area_registry_updated');
        }
    }
}

export = AreaRegistry;
