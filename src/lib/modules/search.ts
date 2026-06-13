type SendResponseFn = (ws: unknown, id: unknown, result?: unknown) => void;

interface EntityLike {
    entity_id: string;
    isManual?: boolean;
    context?: { deviceId?: string; roomId?: string };
}

interface EntityData {
    entities: EntityLike[];
    entityId2Entity: Record<string, EntityLike>;
}

interface WsLike {
    send(data: string): void;
}

/**
 * Answers the frontend's entity/device relationship queries used by the settings pages:
 * `search/related` (what is related to a device/entity/area) and `entity/source` (which "integration"
 * created each entity). Both derive their answers from the adapter's entity list.
 */
class SearchModule {
    private sendResponse: SendResponseFn;
    private entityData: EntityData;

    constructor(options: { sendResponse: SendResponseFn; entityData: EntityData }) {
        this.sendResponse = options.sendResponse;
        this.entityData = options.entityData;
    }

    /**
     * Handle a search/source message.
     *
     * @param ws - websocket connection
     * @param message - the message
     * @returns true if handled
     */
    processMessage(ws: WsLike, message: Record<string, unknown>): boolean {
        if (message.type === 'search/related') {
            // Returns a RelatedResult object (all fields optional arrays). A missing handler made the
            // device page crash (`t.filter is not a function`) because the frontend got undefined.
            const related: Record<string, string[]> = {};
            const itemType = message.item_type as string;
            const itemId = message.item_id as string;
            if (itemType === 'device') {
                const entityIds: string[] = [];
                const areas = new Set<string>();
                for (const entity of this.entityData.entities) {
                    if (entity.context?.deviceId === itemId) {
                        entityIds.push(entity.entity_id);
                        if (entity.context.roomId) {
                            areas.add(entity.context.roomId);
                        }
                    }
                }
                if (entityIds.length) {
                    related.entity = entityIds;
                }
                if (areas.size) {
                    related.area = [...areas];
                }
            } else if (itemType === 'entity') {
                const entity = this.entityData.entityId2Entity[itemId];
                if (entity?.context?.deviceId) {
                    related.device = [entity.context.deviceId];
                }
                if (entity?.context?.roomId) {
                    related.area = [entity.context.roomId];
                }
            } else if (itemType === 'area') {
                const deviceIds = new Set<string>();
                const entityIds: string[] = [];
                for (const entity of this.entityData.entities) {
                    if (entity.context?.roomId === itemId) {
                        entityIds.push(entity.entity_id);
                        if (entity.context.deviceId) {
                            deviceIds.add(entity.context.deviceId);
                        }
                    }
                }
                if (deviceIds.size) {
                    related.device = [...deviceIds];
                }
                if (entityIds.length) {
                    related.entity = entityIds;
                }
            }
            this.sendResponse(ws, message.id, related);
            return true;
        }
        if (message.type === 'entity/source') {
            // entity_id -> { domain: which "integration" created the entity }
            const sources: Record<string, { domain: string }> = {};
            for (const entity of this.entityData.entities) {
                if (entity.entity_id === 'zone.home') {
                    sources[entity.entity_id] = { domain: 'constant' };
                } else {
                    sources[entity.entity_id] = { domain: entity.isManual ? 'iob_manual' : 'iob_automatic' };
                }
            }
            this.sendResponse(ws, message.id, sources);
            return true;
        }
        return false;
    }
}

export = SearchModule;
