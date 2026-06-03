import type { HassEntityAttributeBase, HassEntityBase } from 'home-assistant-js-websocket';
import { getFriendlyName } from './friendly_name';
import { getEntityId, getEntityType } from './entity_id';
import { getEnumName, getSmartName, getObjectIcon } from './utils';
import { iobState2EntityState } from '../converters/genericConverter';

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

export type ServiceCallData = {
    /** WebSocket message id */
    id: number;
    /** HA service name, e.g. 'turn_on', 'set_hvac_mode', 'media_play' */
    service: string;
    /** Service-specific parameters from the frontend */
    service_data: Record<string, unknown>;
    /** Target entity or entities the service call addresses */
    target?: ServiceCallTarget;
};

export type ServiceCallTarget = {
    /** entity_id or list of entity_ids the service call targets */
    entity_id: string | string[];
};

// ---------------------------------------------------------------------------
// STATE — how entity.state maps to/from the main ioBroker state
// ---------------------------------------------------------------------------

export type EntityState = {
    /**
     * ioBroker state id to read entity.state from.
     * null/undefined when the entity has no readable ioBroker state (e.g. camera with getValue only).
     */
    getId: string | null;
    /**
     * ioBroker state id to write when a service call changes the entity.
     * Only set when it differs from getId, or when the state is write-only.
     * null/undefined until the converter assigns one.
     */
    setId?: string | null;
    /**
     * Custom parser: reads state.val and updates entity.state (and optionally attributes).
     * When absent, iobState2EntityState() is used instead.
     */
    getParser?: (entity: BaseEntity, attributeName: string, state: ioBroker.State) => void;
    /**
     * Converts a historical ioBroker state value to an entity.state string.
     * Used by HistoryModule when replaying state history.
     */
    historyParser?: (iobId: string, val: ioBroker.StateValue) => string;
    /** Maximum raw ioBroker value; used for percentage/range scaling (e.g. cover position). */
    max?: number;
    /** Minimum raw ioBroker value; used for percentage/range scaling. */
    min?: number;
    /** If true, invert direction when scaling (e.g. cover SET vs ACTUAL direction). */
    invert?: boolean;
    /** Raw ioBroker values are boolean — skip numeric conversion. */
    isBoolean?: boolean;
    /** Raw ioBroker values are numeric. */
    isNumber?: boolean;
    /**
     * ioBroker common.states value map (e.g. {0: 'closed', 1: 'tilted', 2: 'open'}).
     * Used by sensor window-tilt to translate numeric state values to strings.
     */
    states?: Record<string | number, string> | null;
    /**
     * Raw ioBroker value is a JSON-encoded string array.
     * Only used by a few types, e.g. geo_location which encodes [lat, lon] as a string.
     */
    isStringArray?: boolean;
    /**
     * Map ioBroker state value to entity.state string.
     *
     * @deprecated Use map2lovelace instead.
     */
    map?: Record<string, string | number>;
    /** Map ioBroker state value → entity.state string (replaces deprecated map). */
    map2lovelace?: Record<string | number, string | number>;
    /** Map entity.state string → ioBroker state value (inverse of map2lovelace; can be auto-generated). */
    map2iob?: Record<string, string | number>;
    /**
     * Predefined constant string for entity.state that overrides any ioBroker value.
     * Used by entities that have no readable state (e.g. camera when no snapshot state exists).
     */
    getValue?: string;
    /**
     * Attribute values stored on switch-off and restored on switch-on (advanced lights only).
     * Keys are HA attribute names such as 'brightness', 'color_temp', 'rgb_color', etc.
     */
    storedValues?: Record<string, unknown>;
    /**
     * Be compatible to attribute..?
     */
    attribute: 'state';
};

// ---------------------------------------------------------------------------
// ATTRIBUTES — how additional HA attributes map to ioBroker states
// ---------------------------------------------------------------------------

export type EntityAttribute = {
    /**
     * HA attribute name to set on entity.attributes.
     * Can be a dotted path for nested attributes, e.g. 'forecast.0.temperature'.
     */
    attribute: string;
    /**
     * ioBroker state id to read this attribute from.
     * null/undefined until assigned (legacy JS converters may start with null).
     */
    getId?: string | null;
    /** ioBroker state id to write when the attribute is set from HA. Only set when writable. */
    setId?: string | null;
    /**
     * Custom parser: reads state.val and updates entity.attributes (or entity.state).
     * When absent, iobState2EntityState() + setJsonAttribute() are used instead.
     * The attr parameter is this EntityAttribute object itself.
     */
    getParser?: (entity: BaseEntity, attr: EntityAttribute, state: ioBroker.State) => void;
    /** Maximum raw ioBroker value; used for percentage scaling (e.g. cover tilt). */
    max?: number;
    /** Minimum raw ioBroker value; used for percentage scaling (e.g. cover tilt). */
    min?: number;
    /** If true, invert direction when scaling (e.g. cover tilt). */
    invert?: boolean;
    /** Value map for this attribute, e.g. alarm arm-state codes → HA state strings. */
    map?: Record<string | number, string>;
    /** Map Lovelace/HA attribute values → ioBroker values. */
    lovelaceToIob?: Record<string, string | number>;
    /** Map ioBroker values → Lovelace/HA attribute values. */
    iobToLovelace?: Record<string | number, string>;
    /** Converts a historical ioBroker state value to an HA attribute value string. */
    historyParser?: (iobId: string, val: ioBroker.StateValue) => string;
    /** Whether the ioBroker state value is a JSON-encoded string array. */
    isStringArray?: boolean;
    /** Whether the ioBroker state value is numeric. */
    isNumber?: boolean;
    /** Map ioBroker state value → HA attribute string. */
    map2lovelace?: Record<string | number, string | number>;
    /** Inverse of map2lovelace: HA attribute string → ioBroker state value. */
    map2iob?: Record<string, string | number>;
    /** Day offset from "today" to compute the forecast date from a state timestamp. */
    dayShift?: number;
    /** Whether to convert between mired and Kelvin for color temperature (light converter). */
    convert_to_mired?: boolean;
    /** Whether the RGB value is encoded as a "r,g,b" decimal comma-separated string. */
    is_rgb_array?: boolean;
    /** Whether the RGB value is encoded as a "#RRGGBB" hex string. */
    is_rgb_string?: boolean;
    /** Whether this attribute uses a boolean ioBroker state (e.g. climate swing on/off). */
    isBoolean?: boolean;
    /** States map for this attribute (e.g. swing modes, fan modes). */
    states?: Record<string | number, unknown>;
};

// ---------------------------------------------------------------------------
// COMMANDS — HA service calls this entity can handle
// ---------------------------------------------------------------------------

export type EntityCommand = {
    /** HA service name this command handles, e.g. 'lock', 'turn_on'. */
    service: string;
    /** ioBroker state id to write when the command is executed.  Omit when parseCommand handles writes itself. */
    setId?: string | null;
    /** Custom async handler for this command. */
    parseCommand?: (
        entity: BaseEntity,
        command: EntityCommand,
        data: ServiceCallData,
        user: string,
    ) => Promise<unknown>;
    /** Value to write to setId when this command fires (media_player). */
    val?: unknown;
    /** Value to write to the SET state when turning on. */
    on?: number | boolean;
    /** ioBroker state id for the play action in a media_player play/pause toggle command. */
    playId?: string;
    /** ioBroker state id for the pause action in a media_player play/pause toggle command. */
    pauseId?: string;
    /** Value to write to playId when playing (media_player). */
    playVal?: unknown;
    /** Value to write to pauseId when pausing (media_player). */
    pauseVal?: unknown;
    /** Whether to write entity.state as a string rather than a timestamp number. */
    isString?: boolean;
    /** ioBroker state id to read current value before applying an incremental change. */
    getId?: string;
    /** Minimum value for range/incremental commands (media_player volume). */
    min?: number;
    /** Maximum value for range/incremental commands (media_player volume, light brightness). */
    max?: number;
    /** Step size for incremental commands (media_player volume_up / volume_down). */
    step?: number;
    /** 'Off' level for lights whose state is a numeric dimmer value rather than boolean. */
    off?: number | boolean;
};

// ---------------------------------------------------------------------------
// InputDateTimeCapabilities — used by input_datetime context.capabilities
// ---------------------------------------------------------------------------

export type InputDateTimeCapabilities = {
    /** Whether the entity exposes a date component (input_datetime). */
    has_date: boolean;
    /** Whether the entity exposes a time component (input_datetime). */
    has_time: boolean;
};

/**
 * Base class for all entities the adapter exposes to the Lovelace frontend.
 *
 * Replaces the older plain-object + `processCommon` / `addID2entity` /
 * `fillEntityFromStates` / `fillEntityIntoCaches` / `removeEntity` helper functions
 * with instance methods on a real class.  Per-HA-domain subclasses live in
 * `src/lib/entities/<domain>Entity.ts` and add domain-specific construction logic
 * on top of the common shape provided here.
 *
 * The on-the-wire shape (entity_id / state / attributes / context) is unchanged
 * from the legacy plain-object form, so server.ts and existing converters that
 * mutate `entity.context.STATE`, etc., continue to work.
 */
export class BaseEntity {
    /**
     * entity_id of the entity, for example "light.living_room_light". Should be unique across all
     * entities and should not change after creation, since it is used for storing in entity registry
     * and so on. It should be based on the ioBroker id of the device or state and the type of entity
     * (like main state, battery, online/offline, error, maintenance, working), not on friendly name.
     */
    entity_id: string;
    /** state of the entity. Needs to be a string and what the frontend expects it to be. */
    state: string = 'unknown';
    /** when the state (and only the state) last changed. */
    last_changed: number = 0;
    /** when the state or attributes last changed. */
    last_updated: number = 0;
    /** attributes as the frontend expects them — an object, not an array. */
    attributes: HassEntityAttributeBase & Record<string, unknown> = {};
    /** ioBroker context information — internal bookkeeping not sent to the frontend. */
    context: {
        // --- Set by the constructor ---
        id: string;
        type?: string;
        room?: string | null;
        roomId?: string | null;
        func?: string | null;
        funcId?: string | null;
        stateType?: string;
        deviceId?: string;
        aliases?: string[];

        // --- Set by converters or _processEntities() ---
        iobType?: string;
        STATE: EntityState;
        COMMANDS: EntityCommand[];
        ATTRIBUTES: EntityAttribute[];

        // --- Converter-specific runtime fields ---
        iobPower?: unknown;
        iobMode?: unknown;
        capabilities?: InputDateTimeCapabilities;
        lastValue?: unknown;
    };

    /**
     * Ids of ioBroker objects associated with this entity_id (for state subscription and lookup).
     */
    iobIds: string[] = [];

    /** Marks an entity created from a manual user-configured object. */
    isManual?: boolean;

    /**
     * Generate a bare entity from common parameters.
     *
     * @param name - friendly name; if empty, taken from object or generated from room & func or id
     * @param room - room enum object (used for friendly-name generation)
     * @param func - function enum object (used for friendly-name generation)
     * @param obj - ioBroker object — used for id, name, icon, unit, lovelace-specific settings
     * @param entityType - lovelace domain of the entity (e.g. 'light', 'sensor')
     * @param entity_id - predefined entity id; if empty, generated from name
     * @param language - language for name extraction; defaults to 'en'
     */
    constructor(
        name: string | null | undefined,
        room: ioBroker.EnumObject | null | undefined,
        func: ioBroker.EnumObject | null | undefined,
        obj: ioBroker.Object | undefined,
        entityType: string,
        entity_id?: string | null,
        language?: string,
    ) {
        const objId = obj?._id ?? '';
        this.entity_id = getEntityId(entityType, entity_id, obj, getEnumName(room), getEnumName(func));
        this.attributes = {
            friendly_name: getFriendlyName(name, obj, getEnumName(room), getEnumName(func)),
        };
        this.context = {
            id: objId,
            type: getEntityType(entityType, entity_id, obj),
            room: getEnumName(room),
            roomId: room ? room._id : null,
            func: getEnumName(func),
            funcId: func ? func._id : null,
            stateType: (obj?.common as Record<string, unknown> | undefined)?.type as string | undefined,
            deviceId: objId,
            aliases: obj ? getSmartName(obj, objId, language ?? entityData.lang)?.split(',') || [] : [],
            STATE: {
                getId: objId || null,
                attribute: 'state',
            },
            ATTRIBUTES: [],
            COMMANDS: [],
        };

        if (obj?.common?.unit) {
            this.attributes.unit_of_measurement = obj.common.unit;
        }
        if (obj?.common?.icon) {
            this.attributes.entity_picture = getObjectIcon(obj) ?? undefined;
        }
        if (objId) {
            this.addID2entity(objId);
        }
    }

    /**
     * Register an ioBroker state id as used by this entity (for subscriptions and lookup).
     *
     * @param id - ioBroker state id
     */
    addID2entity(id: string): void {
        if (!this.iobIds.includes(id)) {
            this.iobIds.push(id);
        }
    }

    /**
     * Fill entity STATE/ATTRIBUTES from a `{state, stateRead, ...}` map. Replaces the old
     * standalone `fillEntityFromStates(states, entity, objects)` helper.
     *
     * @param states - ids of ioBroker states; "state" goes into entity-state, can also have stateRead.
     *                 Other keys become attributes named after the key.
     * @param objects - optional objects cache to determine writeability of attributes.
     */
    fillFromStates(states: Record<string, string>, objects?: Record<string, ioBroker.Object>): void {
        this.context.STATE = {
            attribute: 'state',
            setId: states.state || null,
            getId: states.stateRead || states.state || null,
        };

        this.context.ATTRIBUTES = this.context.ATTRIBUTES ?? [];
        for (const key of Object.keys(states)) {
            const id = states[key];
            const obj = objects ? objects[id] : null;
            if (id) {
                this.addID2entity(id);
                if (!key.endsWith('Read')) {
                    if (key !== 'state' && key !== 'stateRead') {
                        const attrs = this.context.ATTRIBUTES;
                        const attr = attrs.find(a => a.attribute === key);
                        if (!attr) {
                            attrs.push({
                                attribute: key,
                                getId: states[`${key}Read`] || id,
                                setId: (obj?.common as Record<string, unknown>)?.write ? id : undefined,
                            });
                        } else {
                            attr.setId = id;
                        }
                    }
                }
            }
        }
    }

    /**
     * Register this entity in the dataSingleton caches (entities array, entityId2Entity,
     * iobID2entity).  Replaces the old standalone `fillEntityIntoCaches(entity)` helper.
     */
    registerInCaches(): void {
        const foundIndex = entityData.entities.findIndex(x => x.entity_id === this.entity_id);
        if (foundIndex !== -1) {
            entityData.log.warn(
                `Got duplicate for entity ${this.entity_id}. Overwriting old value. Was for ${entityData.entities[foundIndex].context.id} and new one is for ${this.context.id}`,
            );
            entityData.entities[foundIndex] = this;
        } else {
            entityData.entities.push(this);
        }
        entityData.entityId2Entity[this.entity_id] = this;
        const ids = this.iobIds;
        for (const id of ids || []) {
            entityData.iobID2entity[id] = entityData.iobID2entity[id] || [];
            const foundIdx = entityData.iobID2entity[id].findIndex(e => e.entity_id === this.entity_id);
            if (foundIdx === -1) {
                entityData.iobID2entity[id].push(this);
            } else {
                entityData.iobID2entity[id][foundIdx] = this;
            }
        }
    }

    /**
     * Remove this entity from the dataSingleton caches, or rename it to a new entity_id.
     * Replaces the old standalone `removeEntity(entity, newId?)` helper.
     *
     * @param newId - if set, the entity is re-keyed under this new id instead of being removed.
     */
    unregister(newId?: string): void {
        if (newId) {
            delete entityData.entityId2Entity[this.entity_id];
            entityData.entityId2Entity[newId] = this;
        } else {
            delete entityData.entityId2Entity[this.entity_id];
        }

        if (!newId) {
            let foundIndex = entityData.entities.findIndex(x => x.entity_id === this.entity_id);
            while (foundIndex !== -1) {
                entityData.entities.splice(foundIndex, 1);
                foundIndex = entityData.entities.findIndex(x => x.entity_id === this.entity_id);
            }
        }

        if (!newId && this.attributes.entity_picture) {
            const urlIndex = entityData.entityIconUrls.findIndex(x => x === this.attributes.entity_picture);
            if (urlIndex !== -1) {
                entityData.entityIconUrls.splice(urlIndex, 1);
            }
        }

        // Only the remove case touches iobID2entity. On rename the entity keeps the same ioBroker
        // state ids (iobID2entity keys are ioBroker ids, not HA entity_ids) and the same object
        // reference - only entity_id (a property on that object) changes - so its entries stay valid.
        if (!newId) {
            for (const key of Object.keys(entityData.iobID2entity)) {
                const entities = entityData.iobID2entity[key];
                let foundIndex = entities.findIndex(x => x.entity_id === this.entity_id);
                while (foundIndex !== -1) {
                    entities.splice(foundIndex, 1);
                    foundIndex = entities.findIndex(x => x.entity_id === this.entity_id);
                }
            }
        }
    }

    /**
     * Update timestamps from a state change.
     *
     * @param state - state to update from
     * @param isStateChange - true if entity.state was changed (rather than only an attribute)
     */
    updateTimestamp(state: ioBroker.State | null | undefined, isStateChange: boolean): void {
        if (!state) {
            if (isStateChange) {
                if (this.state !== 'unknown') {
                    this.last_changed = Date.now() / 1000;
                    this.last_updated = Date.now() / 1000;
                }
                this.state = 'unknown';
            }
            return;
        }

        if (!state.ts || isNaN(new Date(state.ts).getTime())) {
            state.ts = Date.now();
        }
        if (state.lc && isNaN(new Date(state.lc).getTime())) {
            state.lc = Date.now();
        }
        // Store as Unix seconds (matching the legacy plain-object format consumed by _getShortEntity).
        const lu = (state.ts || Date.now()) / 1000;
        const lc = (state.lc || state.ts || Date.now()) / 1000;

        if (lu > this.last_updated) {
            this.last_updated = lu;
        }
        if (isStateChange && lc > this.last_changed) {
            this.last_changed = lc;
        }
    }

    /**
     * Process a state change from ioBroker state db. Routes to STATE.getParser /
     * ATTRIBUTES[*].getParser, then refreshes timestamps.
     *
     * @param id - ioBroker object id that changed
     * @param state - new state value (null when the state was deleted)
     */
    processStateChange(id: string, state: ioBroker.State | null | undefined): void {
        let isStateChange = false;
        let isChange = false;
        if (id === this.context.STATE.getId) {
            const isChanged = this.getParser(this.context.STATE, state);
            if (isChanged) {
                isStateChange = true;
                isChange = true;
            }
        }
        for (const attr of this.context.ATTRIBUTES ?? []) {
            if (attr.getId === id) {
                isChange ||= this.getParser(attr, state);
            }
        }
        if (isChange) {
            this.updateTimestamp(state, isStateChange);
        }
    }

    /**
     * Default getParser — overridable by subclasses.
     *
     * @param attr - the attribute (or STATE) whose getId object changed.
     * @param state - new state of the getId object
     * @returns true when the value actually changed
     */
    getParser(attr: EntityState | EntityAttribute, state: ioBroker.State | null | undefined): boolean {
        const oldVal = attr.attribute === 'state' ? this.state : this.attributes[attr.attribute];
        const newVal = iobState2EntityState(this, state?.val ?? null, attr.attribute);
        if (attr.attribute === 'state') {
            this.state = newVal as string;
        } else {
            this.attributes[attr.attribute] = newVal;
        }
        return oldVal !== newVal;
    }

    /** Convert into the full entity representation expected by the HA frontend. */
    getEntityRepresentationForFrontend(): HassEntityBase {
        return {
            entity_id: this.entity_id,
            state: this.state,
            last_updated: new Date(this.last_updated * 1000).toISOString(),
            last_changed: new Date(this.last_changed * 1000).toISOString(),
            attributes: this.attributes,
            context: {
                id: this.context.id,
                user_id: null,
                parent_id: null,
            },
        };
    }

    /** Convert into the short entity representation used for live state updates. */
    getShortEntityForFrontend(): { s: string; a: Record<string, unknown>; lc: number; lu: number } {
        return {
            s: this.state,
            a: this.attributes,
            lc: this.last_changed,
            lu: this.last_updated,
        };
    }
}

/**
 * Backwards-compatible factory equivalent to the old `processCommon()` helper.
 * Returns a new BaseEntity with the same shape the legacy converters built by hand.
 *
 * @param name - friendly name; if empty, taken from object or generated from room & func or id
 * @param room - room enum object (used for friendly-name generation)
 * @param func - function enum object (used for friendly-name generation)
 * @param obj - ioBroker object — used for id, name, icon, unit, lovelace-specific settings
 * @param entityType - lovelace domain of the entity (e.g. 'light', 'sensor')
 * @param entity_id - predefined entity id; if empty, generated from name
 * @param language - language for name extraction; defaults to dataSingleton.lang
 */
export function processCommon(
    name: string | null | undefined,
    room: ioBroker.EnumObject | null | undefined,
    func: ioBroker.EnumObject | null | undefined,
    obj: ioBroker.Object | undefined,
    entityType: string,
    entity_id?: string | null,
    language?: string,
): BaseEntity {
    return new BaseEntity(name, room, func, obj, entityType, entity_id, language);
}
