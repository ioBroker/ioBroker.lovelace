import type { HassEntityAttributeBase, HassEntityBase } from 'home-assistant-js-websocket';
import { getFriendlyName } from '../entities/friendly_name';
import { getEntityId, getEntityType } from '../entities/entity_id';
import { getEnumName, getSmartName, getObjectIcon } from '../entities/utils';
import { iobState2EntityState } from './genericConverter';

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
    getParser?: (entity: Entity, attributeName: string, state: ioBroker.State) => void;
    /**
     * Converts a historical ioBroker state value to an entity.state string.
     * Used by HistoryModule when replaying state history.
     */
    historyParser?: (iobId: string, state: ioBroker.State) => string;
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
    getId: string | null;
    /** ioBroker state id to write when the attribute is set from HA. Only set when writable. */
    setId?: string | null;
    /**
     * Custom parser: reads state.val and updates entity.attributes (or entity.state).
     * When absent, iobState2EntityState() + setJsonAttribute() are used instead.
     * The attr parameter is this EntityAttribute object itself.
     */
    getParser?: (entity: Entity, attr: EntityAttribute, state: ioBroker.State) => void;
    /** Maximum raw ioBroker value; used for percentage scaling (e.g. cover tilt). */
    max?: number;
    /** Minimum raw ioBroker value; used for percentage scaling (e.g. cover tilt). */
    min?: number;
    /** If true, invert direction when scaling (e.g. cover tilt). */
    invert?: boolean;
    /**
     * Value map for this attribute, e.g. alarm arm-state codes → HA state strings.
     * TODO: Clarify whether this overlaps with EntityState.map — consider unifying.
     */
    map?: Record<string | number, string>;
    /**
     * Map Lovelace/HA attribute values → ioBroker values.
     * Used by climate converter for hvac_mode translation.
     */
    lovelaceToIob?: Record<string, string | number>;
    /**
     * Map ioBroker values → Lovelace/HA attribute values.
     * Used by climate converter for hvac_mode translation.
     */
    iobToLovelace?: Record<string | number, string>;
    /**
     * Converts a historical ioBroker state value to an HA attribute value string.
     * Used by geo_location for extracting latitude/longitude from a GPS "lat;lon" string.
     */
    historyParser?: (iobId: string, val: ioBroker.StateValue) => string;
    /**
     * Whether the ioBroker state value is a JSON-encoded string array.
     * Used by fan/input_select when common.states is an Array.
     */
    isStringArray?: boolean;
    /** Whether the ioBroker state value is numeric. Used by fan/input_select for type coercion. */
    isNumber?: boolean;
    /**
     * Map ioBroker state value → HA attribute string.
     * Parallel to EntityState.map2lovelace but for attributes (e.g. fan preset_mode).
     */
    map2lovelace?: Record<string | number, string | number>;
    /**
     * Inverse of map2lovelace: HA attribute string → ioBroker state value.
     * Built from map2lovelace entries at converter time.
     */
    map2iob?: Record<string, string | number>;
    /**
     * Day offset from "today" to compute the forecast date from a state timestamp.
     * Used by weather converter for forecast.N.datetime when no explicit DATE state exists.
     */
    dayShift?: number;
    /**
     * Whether to convert between mired and Kelvin for color temperature (light converter).
     * true when ioBroker state unit is 'mired'; false when unit is 'K' (Kelvin).
     */
    convert_to_mired?: boolean;
    /**
     * Whether the RGB value is encoded as a "r,g,b" decimal comma-separated string.
     * Used by light converter for single RGB state.
     */
    is_rgb_array?: boolean;
    /**
     * Whether the RGB value is encoded as a "#RRGGBB" hex string.
     * Used by light converter for single RGB state.
     */
    is_rgb_string?: boolean;
    /**
     * Whether this attribute uses a boolean ioBroker state (e.g. climate swing on/off).
     * Used by climate converter for swing_mode.
     */
    isBoolean?: boolean;
    /**
     * States map for this attribute (e.g. swing modes {0:'AUTO',1:'HORIZONTAL'}, fan modes).
     * Used by climate converter for swing_mode and fan_mode translation.
     */
    states?: Record<string | number, unknown>;
};

// ---------------------------------------------------------------------------
// COMMANDS — HA service calls this entity can handle
// ---------------------------------------------------------------------------

export type EntityCommand = {
    /**
     * HA service name this command handles, e.g. 'lock', 'turn_on', 'set_hvac_mode'.
     * server.js matches incoming service calls against this field.
     */
    service: string;
    /**
     * ioBroker state id to write when the command is executed.
     * Not needed when parseCommand handles the write itself.
     */
    setId: string | null;
    /**
     * Custom async handler for this command.
     * Receives the entity, the matched command object, the full HA service-call data,
     * and the ioBroker user id. Must return a Promise.
     * When absent, server.js falls back to generic service handling (toggle, set value, etc.).
     */
    parseCommand?: (entity: Entity, command: EntityCommand, data: ServiceCallData, user: string) => Promise<unknown>;
    /**
     * Value to write to setId when this command fires (media_player).
     * parseCommand may read command.val instead of computing the value from service_data.
     */
    val?: unknown;
    /**
     * Value to write to the SET state when turning on.
     * boolean (true) for boolean lights; numeric max value for dimmer-style lights.
     */
    on?: number | boolean;
    /** ioBroker state id for the play action in a media_player play/pause toggle command. */
    playId?: string;
    /** ioBroker state id for the pause action in a media_player play/pause toggle command. */
    pauseId?: string;
    /** Value to write to playId when playing (media_player). */
    playVal?: unknown;
    /** Value to write to pauseId when pausing (media_player). */
    pauseVal?: unknown;
    /**
     * Whether to write entity.state as a string rather than a timestamp number.
     * Used by input_datetime when the ioBroker state type is 'string'.
     */
    isString?: boolean;
    /**
     * ioBroker state id to read current value before applying an incremental change.
     * Used by media_player volume_up / volume_down to read current volume first.
     */
    getId?: string;
    /** Minimum value for range/incremental commands (media_player volume). */
    min?: number;
    /** Maximum value for range/incremental commands (media_player volume, light brightness). */
    max?: number;
    /** Step size for incremental commands (media_player volume_up / volume_down). */
    step?: number;
    /**
     * 'Off' level for lights whose state is a numeric dimmer value rather than boolean.
     * Turn-off writes this value (typically the common.min of the SET state).
     */
    off?: number | boolean;
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// InputDateTimeCapabilities — used by input_datetime context.capabilities
// ---------------------------------------------------------------------------

export type InputDateTimeCapabilities = {
    /** Whether the entity exposes a date component (input_datetime). */
    has_date: boolean;
    /** Whether the entity exposes a time component (input_datetime). */
    has_time: boolean;
};

// ioBrokerEntity — the central entity object shared between converters and server.js
// ---------------------------------------------------------------------------

/**
 * Base class for all Entities. Provides methods to help create / control basic entities.
 * Should be overwritten by derived entity classes.
 * TODO: rework converter convept into class hirarchy of Entity classes.
 */
export class Entity {
    /**
     * entity_id of the entity, for example "light.living_room_light". Should be unique across all
     * entities and should not change after creation, since it is used for storing in entity registry
     * and so on. It should be based on the ioBroker id of the device or state and the type of entity
     * (like main state, battery, online/offline, error, maintenance, working), not on friendly name.
     */
    entity_id: string;
    /**
     * state of the entity. Needs to be a string and what the frontend expects it to be!
     */
    state: string = 'unknown';
    /**
     * when the state (and only the state!) last changed.
     * We store a number here. Frontend expects a String in ISO format.
     */
    last_changed: number = 0;
    /**
     * when was the state or attributes last changed.
     */
    last_updated: number = 0;
    /**
     * attributes as frontend expects them — an object, not an array.
     */
    attributes: HassEntityAttributeBase & Record<string, unknown> = {};
    /**
     * ioBroker context information — internal bookkeeping not sent to the frontend.
     */
    context: {
        // --- Set by processCommon() in utils.ts ---

        /**
         * ioBroker id of the device object or main state, used to link the entity back to ioBroker.
         * Updated by converters to point to the main readable state (if different from the device id).
         */
        id: string;
        /**
         * HA entity type domain, e.g. 'light', 'sensor', 'binary_sensor'.
         * Derived from processCommon() → getEntityType().
         */
        type?: string;
        /** Human-readable room name derived from the room enum. */
        room?: string | null;
        /** ioBroker id of the room enum object (e.g. 'enum.rooms.living_room'). */
        roomId?: string | null;
        /** Human-readable function name derived from the function enum. */
        func?: string | null;
        /** ioBroker id of the function enum object (e.g. 'enum.functions.light'). */
        funcId?: string | null;
        /**
         * ioBroker common.type of the main state object ('boolean', 'number', 'string', …).
         * Used by server.js for generic state conversion.
         */
        stateType?: string;
        /**
         * ioBroker id of the parent device object.
         * Set to obj._id by processCommon(); overwritten to mainEntity.context.id
         * by _generateEntitiesFromIndicators() on indicator entities (battery, connectivity, …).
         */
        deviceId?: string;
        /**
         * Smart-name aliases for this entity, split from common.smartName by comma.
         * Used by the area/person registry to expose alternate names.
         */
        aliases?: string[];

        // --- Set by converters or _processEntities() ---

        /**
         * type-detector device type string (e.g. 'motion', 'light').
         * Set by Converter._processEntities() from the PatternControl type.
         */
        iobType?: string;
        /** How entity.state maps to/from the primary ioBroker state. */
        STATE: EntityState;
        /** HA service call handlers — one entry per supported service. */
        COMMANDS: EntityCommand[];
        /** Additional HA attribute mappings to ioBroker states. */
        ATTRIBUTES: EntityAttribute[];

        // --- Converter-specific runtime fields ---

        /**
         * Climate: current ioBroker power state (boolean or 0/1).
         * Tracked so the climate converter can distinguish device-off from mode-off.
         */
        iobPower?: unknown;
        /**
         * Climate: current raw ioBroker HVAC mode value (before translation to HA hvac_mode).
         * Cached so the STATE.getParser can produce the correct HA mode even when mode and
         * power states arrive in separate ioBroker updates.
         */
        iobMode?: unknown;
        /**
         * input_datetime: whether the entity exposes date and/or time components.
         * TODO: Move to entity.attributes when input_datetime is migrated to TypeScript.
         */
        capabilities?: InputDateTimeCapabilities;
        /**
         * server.js: last known raw ioBroker value, used for simulated entities
         * (e.g. an input_boolean backed by a numeric ioBroker state) to suppress
         * spurious updates when the value has not actually changed.
         * TODO: Review whether this should live on entity.state after server.js is migrated.
         */
        lastValue?: unknown;
    };

    /**
     * Ids of iobroker Objects that are associated with this entity_id.
     * This is needed to subscribe and process state changes.
     */
    iobIds: string[] = [];

    /**
     * Generate a bare entity from parameters. Already adds the entity to its ids context array.
     *
     * @param name - friendly name of entity; if empty, will be read from object or generated from room & func or id
     * @param room - room enum object of device for name generation
     * @param func - function enum object of device for name generation
     * @param obj - ioBroker object, used to read id, name, icon, unit, lovelace specific settings
     * @param entityType - lovelace domain of entity, for example light, sensor, ...
     * @param entity_id - predefined entity id; if empty, will be generated from name
     * @param language - needed to extract names from objects; defaults to 'en'
     * @returns new entity object
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
        this.entity_id = getEntityId(entityType, entity_id, obj);
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
            aliases: obj ? getSmartName(obj, objId, language)?.split(',') || [] : [],
            STATE: {
                getId: objId,
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
     * Updates both the canonical `iobIds` array and the legacy `context.ids` for backward
     * compatibility with JS code that still reads from `entity.context.ids`.
     *
     * @param id - ioBroker state id
     */
    addID2entity(id: string): void {
        if (!this.iobIds.includes(id)) {
            this.iobIds.push(id);
        }
    }

    /**
     * Update Timestamps from a state change.
     *
     * @param state - state to update from
     * @param isStateChange - if entity.state was changed or "only" an attribute.
     */
    updateTimestamp(state: ioBroker.State | null | undefined, isStateChange: boolean): void {
        //TODO: do we have entities that don't want this default behaviour?
        if (!state) {
            if (isStateChange) {
                if (this.state !== 'unknown') {
                    this.last_changed = Date.now();
                    this.last_updated = Date.now();
                }
                this.state = 'unknown';
            }
            return;
        }

        //be careful update / changed has different interpretations in ioBroker and HASS. At least on this level.
        if (!state.ts || isNaN(new Date(state.ts).getTime())) {
            state.ts = Date.now();
        }
        if (state.lc && isNaN(new Date(state.lc).getTime())) {
            state.lc = Date.now();
        }
        const lu = state.ts || Date.now();
        const lc = state.lc || state.ts || Date.now();

        //TODO: check if state changed and update last_updated and last_changed accordingly.
        //But this probably has to be done on child level. Hm...
        //also update timestamps method checked if new timestamps were bigger than old. Hm.
        if (lu > this.last_updated) {
            this.last_updated = lu;
        }
        if (isStateChange && lc > this.last_changed) {
            this.last_changed = lc;
        }
    }

    /**
     * Process state change from ioBroker state db.
     *
     * @param id ioBroker object id.
     * @param state new state
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
     * Default getParser - can be overwritten by child classes.
     *
     * @param attr attribute whose getId object changed (including "state").
     * @param state new state of getId object
     */
    getParser(attr: EntityState | EntityAttribute, state: ioBroker.State | null | undefined): boolean {
        const oldVal = attr.attribute === 'state' ? this.state : this.attributes[attr.attribute];
        const newVal = iobState2EntityState(this, state?.val ?? null, attr.attribute);
        if (attr.attribute === 'state') {
            this.state = newVal as string; //iobState2EntityState makes sure it is string.
        } else {
            this.attributes[attr.attribute] = newVal;
        }
        return oldVal !== newVal;
    }

    /**
     * Convert into entity for the frontend.
     */
    getEntityRepresentationForFrontend(): HassEntityBase {
        return {
            entity_id: this.entity_id,
            state: this.state,
            last_updated: new Date(this.last_updated).toISOString(),
            last_changed: new Date(this.last_changed).toISOString(),
            attributes: this.attributes,
            context: {
                id: this.context.id,
                user_id: null,
                parent_id: null,
            },
        };
    }

    /**
     * Convert into short entity for the frontend.
     * TODO: replaces _getShortEntity function in server.ts -> needs to be implemented some day.
     */
    getShortEntityForFrontend(): { s: string; a: Record<string, unknown>; lc: number; lu: number } {
        return {
            s: this.state,
            a: this.attributes,
            lc: this.last_changed / 1000,
            lu: this.last_updated / 1000,
        };
    }
}
