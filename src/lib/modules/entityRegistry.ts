import type { BaseEntity } from '../entities/baseEntity';
import { STORAGE_PREFIX } from './storage';

type SendResponseFn = (ws: unknown, id: unknown, result: unknown) => void;
type SendUpdateFn = (type: string, data?: unknown) => void;
type RenameEntityIdFn = (oldEntityId: string, newEntityId: string) => void | Promise<void>;

interface EntityLike {
    entity_id: string;
    isManual?: boolean;
    platform?: string;
    state?: unknown;
    context: {
        id: string;
        deviceId?: string;
        roomId?: string;
        capabilities?: unknown;
        aliases?: unknown;
        STATE?: { getId?: string | null };
    };
    attributes: Record<string, unknown>;
}

interface EntityData {
    entities: EntityLike[];
    entityId2Entity: Record<string, EntityLike>;
}

interface RegistryEntry {
    id?: string;
    entity_id?: string;
    name?: string | null;
    icon?: string | null;
    platform?: string;
    config_entry_id?: string | null;
    config_subentry_id?: string | null;
    device_id?: string | null;
    area_id?: string | null;
    labels?: string[];
    disabled_by?: string | null;
    hidden_by?: string | null;
    hidden?: boolean;
    entity_category?: string | null;
    has_entity_name?: boolean;
    original_name?: string;
    unique_id?: string;
    translation_key?: string | null;
    options?: Record<string, unknown> | null;
    categories?: Record<string, unknown>;
    capabilities?: unknown;
    original_icon?: string;
    device_class?: string | null;
    original_device_class?: string | null;
    aliases?: unknown;
    display_precision?: unknown;
    new_entity_id?: string;
    [key: string]: unknown;
}

/**
 * EntityRegistry, module to implement entity registry and process messages from the frontend.
 */
class EntityRegistry {
    /**
     * Frontend registry entries keyed by HA entity_id. Holds per-entity overrides
     * (name, icon, device_class, area_id, ...) set via the frontend's
     * `config/entity_registry/update` message.
     */
    private _entries: Record<string, RegistryEntry> = {};
    /**
     * Composite-key → HA entity_id index for deterministic clash resolution.
     * Key format: `${entityType}.${stableIobId}` where stableIobId is STATE.getId
     * when set, otherwise context.id. Survives restarts so colliding entities keep
     * their generated entity_ids.
     */
    private _iobIdToEntityId: Record<string, string> = {};
    private _entityCategories: Record<number, string> = { 0: 'config', 1: 'diagnostic' };

    private adapter: ioBroker.Adapter;
    private entityData: EntityData;
    private sendResponse: SendResponseFn;
    private sendUpdate: SendUpdateFn;
    private renameEntityIdInConfigs?: RenameEntityIdFn;

    /**
     * Constructor
     *
     * @param options - options including adapter.
     * @param options.adapter - ioBroker adapter instance
     * @param options.entityData - shared entity data singleton
     * @param options.sendResponse - function to send a response to a client
     * @param options.sendUpdate - function to broadcast an update event
     * @param options.renameEntityIdInConfigs - rewrite a renamed entity_id in the stored lovelace configs
     */
    constructor(options: {
        adapter: ioBroker.Adapter;
        entityData: EntityData;
        sendResponse: SendResponseFn;
        sendUpdate: SendUpdateFn;
        renameEntityIdInConfigs?: RenameEntityIdFn;
    }) {
        this.adapter = options.adapter;
        this.entityData = options.entityData;
        this.sendResponse = options.sendResponse;
        this.sendUpdate = options.sendUpdate;
        this.renameEntityIdInConfigs = options.renameEntityIdInConfigs;
    }

    /**
     * Convert an entity registry entry to the format expected by the frontend for display.
     *
     * @param entityWithId - the registry entry to convert
     */
    convertEntryForDisplay(entityWithId: RegistryEntry): Record<string, unknown> {
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
     * Create an entity registry entry from an entity.
     *
     * @param entity - the entity to create the entry from
     */
    private _createEntryFromEntity(entity: EntityLike): RegistryEntry {
        const entry: RegistryEntry = {
            id: entity.context.id,
            entity_id: entity.entity_id,
            name: null,
            icon: null,
            platform: entity.platform,
            config_entry_id: null,
            config_subentry_id: null,
            device_id: entity.context.deviceId || null,
            area_id: entity.context.roomId || null,
            labels: [],
            disabled_by: null,
            hidden_by: null,
            entity_category: null,
            has_entity_name: false,
            original_name: entity.attributes?.friendly_name as string,
            unique_id: entity.context.id,
            translation_key: null,
            options: null,
            categories: {},
            capabilities: entity.context.capabilities || null,
            original_icon: entity.attributes?.icon as string,
            device_class: (entity.attributes?.device_class as string) || null,
            original_device_class: (entity.attributes?.device_class as string) || null,
            aliases: entity.context.aliases || null,
        };

        if (entry.platform === 'sensor') {
            entry.options = {
                sensor: {
                    display_precision: entity.attributes?.display_precision || null,
                    suggested_display_precision: entity.attributes?.suggested_display_precision || null,
                    unit_of_measurement: entity.attributes?.unit_of_measurement || null,
                },
            };
        } else if (entry.platform === 'number') {
            entry.options = {
                number: {
                    unit_of_measurement: entity.attributes?.unit_of_measurement || null,
                },
            };
        } else if (entry.platform === 'light') {
            entry.options = {
                light: {
                    favorite_colors: entity.attributes?.favorite_colors || [],
                },
            };
        } else if (entry.platform === 'lock') {
            entry.options = {
                lock: {
                    default_code: entity.attributes?.default_code || null,
                },
            };
        } else if (entry.platform === 'alarm_control_panel') {
            entry.options = {
                alarm_control_panel: {
                    default_code: entity.attributes?.default_code || null,
                },
            };
        } else if (entry.platform === 'weather') {
            entry.options = {
                weather: {
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
     * Update the entity with the new values from the registry.
     *
     * @param entity - the entity to update
     * @param entry - the registry entry to read values from (optional, looked up by entity id if omitted)
     */
    updateEntityFromRegistry(entity: EntityLike, entry?: RegistryEntry): void {
        if (entity.isManual) {
            return;
        }
        if (!entry) {
            entry = this._entries[entity.entity_id];
            if (!entry) {
                return;
            }
        }
        entity.entity_id = entry.entity_id!;
        this.entityData.entityId2Entity[entry.entity_id!] = entity;
        entity.attributes.friendly_name = entry.name || entry.original_name || entity.attributes.friendly_name;
        entity.attributes.icon = entry.icon || entry.original_icon || entity.attributes.icon;
        entity.platform = entry.platform || entity.platform;
        entity.attributes.device_class =
            entry.device_class || entry.original_device_class || entity.attributes.device_class;
        if (entry.options) {
            for (const platform of Object.keys(entry.options)) {
                if (entry.options[platform]) {
                    const platformOptions = entry.options[platform] as Record<string, unknown>;
                    for (const attribute of Object.keys(platformOptions)) {
                        entity.attributes[attribute] = platformOptions[attribute];
                    }
                }
            }
        }
    }

    /**
     * Look up a reserved entity_id for a composite key.
     * Key format: `${entityType}.${stableIobId}`.
     *
     * @param key - composite key
     */
    getReservedEntityId(key: string): string | undefined {
        return this._iobIdToEntityId[key];
    }

    /**
     * Reserve an entity_id under a composite key for deterministic clash resolution.
     * Key format: `${entityType}.${stableIobId}`.
     *
     * @param key - composite key
     * @param entityId - HA entity id to reserve
     */
    reserveEntityId(key: string, entityId: string): void {
        this._iobIdToEntityId[key] = entityId;
    }

    /**
     * Process incoming messages from the frontend.
     *
     * @param ws - websocket connection to the client
     * @param message - the message from the frontend
     */
    processMessage(ws: unknown, message: Record<string, unknown>): boolean {
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
            // Must return a bare array of full registry entries for ALL entities (the device page
            // filters it by device_id). `list_for_display` is the one that returns { entities, ... }.
            const entities = [];
            for (const entity of this.entityData.entities) {
                const stored = this._entries[entity.entity_id];
                entities.push(stored || this._createEntryFromEntity(entity));
            }
            this.sendResponse(ws, message.id, entities);
            return true;
        } else if (message.type === 'config/entity_registry/get') {
            const entityId = message.entity_id as string;
            let entityWithId = this._entries[entityId];
            const entity = this.entityData.entityId2Entity[entityId];
            if (!entity) {
                (ws as { send(data: string): void }).send(
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
        } else if (message.type === 'config/entity_registry/get_entries') {
            const entityIds = message.entity_ids as string[];
            const result: Record<string, RegistryEntry | null> = {};
            for (const entityId of entityIds) {
                const entityWithId = this._entries[entityId];
                const entity = this.entityData.entityId2Entity[entityId];
                if (entityWithId) {
                    result[entityId] = entityWithId;
                } else if (entity) {
                    result[entityId] = this._createEntryFromEntity(entity);
                } else {
                    result[entityId] = null;
                }
            }
            this.sendResponse(ws, message.id, result);
            return true;
        } else if (message.type === 'config/entity_registry/update') {
            const entityId = message.entity_id as string;
            let entityWithId = this._entries[entityId];
            const entity = this.entityData.entityId2Entity[entityId];
            if (!entity) {
                (ws as { send(data: string): void }).send(
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
            // Make sure the (possibly freshly created) entry is stored, otherwise edits to a
            // never-before-changed entity would be lost.
            this._entries[entityId] = entityWithId;
            const newData = JSON.parse(JSON.stringify(message)) as Record<string, unknown>;
            delete newData.id;
            delete newData.type;
            delete newData.entity_id;
            // HA sends per-domain entity options as { options_domain, options } (e.g. a light's
            // favorite_colors). Store them nested under entry.options[options_domain]; the frontend
            // reads entity_entry.options.<domain>.<key> (e.g. options.light.favorite_colors), so a
            // flat options object would never be picked up.
            // Like HA's async_update_entity_options, the domain dict is REPLACED, not merged: a key
            // set to undefined is dropped by the frontend's JSON.stringify, so a reset-to-default
            // arrives as options: {} and must clear the previously stored values.
            if (typeof newData.options_domain === 'string') {
                const domain = newData.options_domain;
                const opts = (newData.options as Record<string, unknown> | undefined) ?? {};
                const existing = (entityWithId.options as Record<string, Record<string, unknown>> | null) ?? {};
                existing[domain] = opts;
                entityWithId.options = existing;
                delete newData.options_domain;
                delete newData.options;
            }
            const changes: Record<string, unknown> = {};
            for (const key of Object.keys(newData)) {
                changes[key] = entityWithId[key] || null;
                entityWithId[key] = newData[key];
                if (key === 'new_entity_id') {
                    const oldEntityId = entity.entity_id;
                    const newEntityId = newData[key] as string;
                    // Update reservation index so the new entity_id is restored on next start.
                    const stableIobId = entity.context.STATE?.getId ?? entity.context.id;
                    const oldKey = `${oldEntityId.split('.')[0]}.${stableIobId}`;
                    const newKey = `${newEntityId.split('.')[0]}.${stableIobId}`;
                    delete this._iobIdToEntityId[oldKey];
                    this._iobIdToEntityId[newKey] = newEntityId;
                    // Rekey _entries under the new HA entity_id so future lookups work.
                    if (this._entries[oldEntityId]) {
                        this._entries[newEntityId] = this._entries[oldEntityId];
                        delete this._entries[oldEntityId];
                    } else {
                        this._entries[newEntityId] = entityWithId;
                    }
                    entityWithId.entity_id = newEntityId;
                    // Mark as user-renamed so a bulk "regenerate entity ids" run leaves it alone.
                    entityWithId.userRenamed = true;
                    (entity as unknown as BaseEntity).unregister(newEntityId);
                    delete entityWithId.new_entity_id;
                    // Rewrite the old entity_id to the new one in the stored lovelace configs so
                    // existing cards keep pointing at the renamed entity.
                    void this.renameEntityIdInConfigs?.(oldEntityId, newEntityId);
                    // Manual entities are regenerated from the source object's custom config on every
                    // start and ignore the registry overrides, so a rename would otherwise be lost.
                    // Persist it back to the object instead.
                    if (entity.isManual) {
                        void this._persistManualEntityRename(entity.context.id, newEntityId);
                    }
                }
            }
            this.updateEntityFromRegistry(entity, entityWithId);
            void this.saveEntityRegistry();
            this.sendResponse(ws, message.id, { entity_entry: entityWithId });
            this.sendUpdate('entity_registry_updated', {
                action: 'update',
                entity_id: entityWithId.entity_id,
                changes,
            });
            return true;
        }

        return false;
    }

    /**
     * Update entities from the registry. Inform the frontend about changes.
     *
     * @param entities - entities to update from the registry
     * @param sendEvent - whether to send an update event to the frontend
     */
    handleUpdatedEntities(entities: EntityLike[] = [], sendEvent = false): void {
        for (const entity of entities) {
            this.updateEntityFromRegistry(entity);
        }
        if (entities.length > 0 && sendEvent) {
            this.sendUpdate('entity_registry_updated');
            this.sendUpdate('device_registry_updated');
        }
    }

    /**
     * Load the entity registry from the ioBroker object database.
     */
    async loadEntityRegistry(): Promise<void> {
        const storage = await this.adapter.getObjectAsync(`${STORAGE_PREFIX}entityRegistry`);
        const native = (storage as ioBroker.Object & { native: Record<string, unknown> })?.native;
        this._entries = (native?.entries as Record<string, RegistryEntry>) || {};
        this._iobIdToEntityId = (native?.iobIdToEntityId as Record<string, string>) || {};
        this._entityCategories = (native?.entityCategories as Record<number, string>) || {
            0: 'config',
            1: 'diagnostic',
        };
    }

    /**
     * Store the entity registry to the ioBroker object database.
     */
    async saveEntityRegistry(): Promise<void> {
        const storage = (await this.adapter.getObjectAsync(`${STORAGE_PREFIX}entityRegistry`)) as ioBroker.AnyObject & {
            native: Record<string, unknown>;
        };
        if (!storage.native) {
            storage.native = {};
        }
        storage.native.entries = this._entries;
        storage.native.iobIdToEntityId = this._iobIdToEntityId;
        storage.native.entityCategories = this._entityCategories;
        await this.adapter.setObject(`${STORAGE_PREFIX}entityRegistry`, storage);
    }

    /**
     * Persist a renamed manual entity back to its source object's custom config, so the new
     * entity_id survives a restart (manual entities are regenerated from the object, not the
     * registry). The new id's domain becomes `custom[ns].entity`, its local part `custom[ns].name`.
     *
     * @param objId - ioBroker object id of the manual entity (entity.context.id)
     * @param newEntityId - the new HA entity_id (e.g. "switch.kitchen")
     */
    private async _persistManualEntityRename(objId: string, newEntityId: string): Promise<void> {
        try {
            const obj = await this.adapter.getForeignObjectAsync(objId);
            if (!obj?.common) {
                return;
            }
            const ns = this.adapter.namespace;
            const common = obj.common as Record<string, unknown>;
            const custom = (common.custom as Record<string, Record<string, unknown>>) || {};
            custom[ns] = custom[ns] || {};
            const [domain, ...rest] = newEntityId.split('.');
            custom[ns].entity = domain;
            custom[ns].name = rest.join('.');
            common.custom = custom;
            await this.adapter.setForeignObjectAsync(objId, obj);
            this.adapter.log.debug(`Persisted manual entity rename to ${newEntityId} on ${objId}.`);
        } catch (e) {
            this.adapter.log.warn(`Could not persist manual entity rename for ${objId}: ${String(e)}`);
        }
    }

    /**
     * Whether the given entity_id has a user override in the registry (icon, name, manual rename, …)
     * and should therefore be left untouched by a bulk "regenerate entity ids" run.
     *
     * @param entityId - HA entity_id
     * @returns true if the entity was customized by the user
     */
    isProtectedFromRegen(entityId: string): boolean {
        return !!this._entries[entityId];
    }

    /**
     * Drop all reserved entity_ids except those that belong to protected (user-customized) entities.
     * Cleared reservations let the entities regenerate with the currently configured auto-id format
     * on the next conversion; protected ones keep their reserved id.
     *
     * @param protectedIds - set of entity_ids whose reservation must be kept
     */
    clearAutoReservations(protectedIds: Set<string>): void {
        for (const key of Object.keys(this._iobIdToEntityId)) {
            if (!protectedIds.has(this._iobIdToEntityId[key])) {
                delete this._iobIdToEntityId[key];
            }
        }
    }

    /**
     * Clean up, save the entity registry.
     */
    async cleanup(): Promise<void> {
        this.adapter.log.debug('cleaning up entity registry');
        await this.saveEntityRegistry();
    }

    /**
     * Init module.
     */
    async init(): Promise<void> {
        await this.loadEntityRegistry();
        await this.cleanupStaleRegistry();
        this.adapter.log.debug('modules/entityRegistry: init done.');
    }

    /**
     * Drop reservations AND user overrides whose ioBroker object no longer exists.
     * Handles deletes that happened while the adapter wasn't running (we do not react to object
     * deletions at runtime). Runs on init.
     */
    async cleanupStaleRegistry(): Promise<void> {
        // Cache object existence per ioBroker id so we look each one up only once (reservations and
        // overrides often share the same iobId). On a transient DB error we return undefined and
        // leave the entry alone.
        const existsCache: Record<string, boolean | undefined> = {};
        const objectExists = async (iobId: string): Promise<boolean | undefined> => {
            if (iobId in existsCache) {
                return existsCache[iobId];
            }
            try {
                existsCache[iobId] = !!(await this.adapter.getForeignObjectAsync(iobId));
            } catch {
                existsCache[iobId] = undefined; // transient error — don't drop
            }
            return existsCache[iobId];
        };

        // Reservations: key format `${entityType}.${stableIobId}`.
        const staleReservations: string[] = [];
        for (const key of Object.keys(this._iobIdToEntityId)) {
            const dotIdx = key.indexOf('.');
            if (dotIdx < 0) {
                staleReservations.push(key);
                continue;
            }
            if ((await objectExists(key.substring(dotIdx + 1))) === false) {
                staleReservations.push(key);
            }
        }
        for (const key of staleReservations) {
            delete this._iobIdToEntityId[key];
        }

        // User overrides (custom name/icon/area/manual rename): entry.id is the ioBroker object id.
        const staleEntries: string[] = [];
        for (const entityId of Object.keys(this._entries)) {
            const iobId = this._entries[entityId].id as string | undefined;
            if (iobId && (await objectExists(iobId)) === false) {
                staleEntries.push(entityId);
            }
        }
        for (const entityId of staleEntries) {
            delete this._entries[entityId];
        }

        if (staleReservations.length || staleEntries.length) {
            this.adapter.log.debug(
                `Dropped ${staleReservations.length} stale entity_id reservation(s) and ${staleEntries.length} stale registry entry(ies).`,
            );
            await this.saveEntityRegistry();
        }
    }
}

export = EntityRegistry;
