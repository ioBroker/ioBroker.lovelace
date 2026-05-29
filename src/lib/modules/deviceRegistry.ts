type SendResponseFn = (ws: unknown, id: unknown, result: unknown) => void;

interface EntityLike {
    context: {
        id: string;
        device_id?: string;
        roomId?: string;
    };
    attributes: {
        friendly_name?: string;
    };
}

interface EntityData {
    entities: EntityLike[];
    entityId2Entity: Record<string, EntityLike>;
}

/**
 * DeviceRegistry, a module to implement device registry and process messages from the frontend.
 *
 * Will not store anything to the ioBroker db, currently, but generate devices on the fly.
 */
class DeviceRegistry {
    private adapter: ioBroker.Adapter;
    private entityData: EntityData;
    private sendResponse: SendResponseFn;

    /**
     * Constructor
     *
     * @param options - options including adapter.
     * @param options.adapter - ioBroker adapter instance
     * @param options.entityData - shared entity data singleton
     * @param options.sendResponse - function to send a response to a client
     */
    constructor(options: { adapter: ioBroker.Adapter; entityData: EntityData; sendResponse: SendResponseFn }) {
        this.adapter = options.adapter;
        this.entityData = options.entityData;
        this.sendResponse = options.sendResponse;
    }

    /**
     * Create device registry entry from an entity on the fly.
     *
     * @param entity - the entity to create the entry from
     * @returns the created entry
     */
    private _createEntryFromEntity(entity: EntityLike): Record<string, unknown> {
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
     * Process incoming messages from the frontend.
     *
     * @param ws - the websocket connection
     * @param message - the message from the frontend
     * @returns true if the message was processed, false if not
     */
    processMessage(ws: unknown, message: Record<string, unknown>): boolean {
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
        return false;
    }
}

export = DeviceRegistry;
