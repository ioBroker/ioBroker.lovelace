import { Types } from '@iobroker/type-detector';
import type { PatternControl } from '@iobroker/type-detector/types';
import converterLight from '../../../lib/converters/light';
import converterClimate from '../../../lib/converters/climate';
import { processMediaPlayer } from '../../../lib/converters/media_player';
import { processBattery, connectivityIndicator, processError, processMaintenance, processWorking } from './indicators';

// Phase 2 & 3 converters — now TypeScript; imported so their self-registration runs at load time.
import './switch';
import './lock';
import './sensor';
import './geo_location';
import './camera';
import './weather';
import './cover';
import '@iobroker/types';
import type { HassEntityAttributeBase } from 'home-assistant-js-websocket';

// NOTE: binary_sensor.ts is NOT imported here to avoid a circular dependency.
// BinarySensorConverter (defined in binary_sensor.ts) self-registers on
// Converter.converters when binary_sensor.ts is first required by server.js.

// ---------------------------------------------------------------------------
// Data shape of an incoming HA WebSocket service call, as seen by parseCommand
// ---------------------------------------------------------------------------

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
    getId?: string | null;
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
    getParser?: (entity: ioBrokerEntity, attributeName: string, state: ioBroker.State) => void;
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
    getParser?: (entity: ioBrokerEntity, attr: EntityAttribute, state: ioBroker.State) => void;
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
    map?: Record<string | number, unknown>;
    /**
     * Map Lovelace/HA attribute values → ioBroker values.
     * Used by climate converter for hvac_mode translation.
     */
    lovelaceToIob?: Record<string, unknown>;
    /**
     * Map ioBroker values → Lovelace/HA attribute values.
     * Used by climate converter for hvac_mode translation.
     */
    iobToLovelace?: Record<string | number, unknown>;
    /**
     * Converts a historical ioBroker state value to an HA attribute value string.
     * Used by geo_location for extracting latitude/longitude from a GPS "lat;lon" string.
     */
    historyParser?: (iobId: string, val: unknown) => string;
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
    setId?: string | null;
    /**
     * Custom async handler for this command.
     * Receives the entity, the matched command object, the full HA service-call data,
     * and the ioBroker user id. Must return a Promise.
     * When absent, server.js falls back to generic service handling (toggle, set value, etc.).
     */
    parseCommand?: (
        entity: ioBrokerEntity,
        command: EntityCommand,
        data: ServiceCallData,
        user: string,
    ) => Promise<unknown>;
    /**
     * Value to write to setId when this command fires (media_player).
     * parseCommand may read command.val instead of computing the value from service_data.
     */
    val?: unknown;
    /**
     * Brightness/level value for light turn_on (the maximum 'on' brightness level).
     * TODO: Review whether this should be in service_data instead when light.js is migrated.
     */
    on?: number;
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

export type ioBrokerEntity = {
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
    state: string;
    /**
     * when the state (and only the state!) last changed.
     * We store a number here. Frontend expects a String in ISO format.
     */
    last_changed: number;
    /**
     * when was the state or attributes last changed.
     */
    last_updated: number;
    /**
     * attributes as frontend expects them — an object, not an array.
     */
    attributes: HassEntityAttributeBase & Record<string, unknown>;
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
         * All ioBroker state ids this entity subscribes to.
         * Populated by addID2entity(); used by server.js for change routing.
         */
        ids?: string[];
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
        STATE?: EntityState;
        /** HA service call handlers — one entry per supported service. */
        COMMANDS?: EntityCommand[];
        /** Additional HA attribute mappings to ioBroker states. */
        ATTRIBUTES?: EntityAttribute[];

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
};

export type ConverterParameters = {
    /**
     * The ID of the ioBroker device.
     */
    id: string;
    /**
     * The single PatternControl being converted (one entry from the type-detector result array).
     */
    controls: PatternControl;
    /**
     * The friendly name of the device, if we have a predefined one.
     */
    friendlyName?: string;
    /**
     * Room enum object assigned to the device.
     */
    room?: ioBroker.EnumObject;
    /**
     * Function enum object assigned to the device.
     */
    func?: ioBroker.EnumObject;
    /**
     * The cache of ioBroker objects.
     */
    objects: Record<string, ioBroker.Object>;
    /**
     * The already existing entities to check for duplicates.
     */
    existingEntities: Array<ioBrokerEntity>;
    /**
     * The ioBroker adapter instance.
     */
    adapter: ioBroker.Adapter;
    /**
     * The entity registry module.
     */
    entityRegistry: {
        /**
         * Get a previously stored entity_id override for the given ioBroker id.
         */
        getEntityId(iobId: string): string | undefined;
        /**
         * Persist an entity_id assignment for the given ioBroker id.
         */
        storeEntityId(iobId: string, entityId: string): void;
    };
    /**
     * A predetermined entity_id to use, overrides the auto-generated one.
     */
    forcedEntityId?: string;
};

/**
 * Base class for all device converters.
 *
 * Subclasses implement convertEntities() to produce HA entities from a single
 * detected PatternControl.  The base class convert() method calls convertEntities()
 * and then handles the shared work: indicator entities, duplicate detection, and
 * registration in existingEntities.
 *
 * ## Adding a new TypeScript converter subclass
 *
 * 1. Create `src/lib/converters/<type>.ts`, extend Converter, override convertEntities().
 * 2. At the bottom of the file, register: `Converter.converters[Types.xxx] = MyConverter;`
 * 3. Ensure server.js requires the compiled file so the registration runs.
 *
 * ## Legacy JS converters
 *
 * Converters not yet migrated to TypeScript are kept in legacyConverters and are called
 * with the old positional-argument signature.  They will be removed as migration proceeds.
 */
export class Converter {
    /**
     * Registry of TypeScript converter subclasses keyed by device type.
     * Populated by each subclass module at load time.
     */
    static converters: Partial<Record<Types, typeof Converter>> = {};

    /**
     * Legacy JavaScript converter functions with positional-argument signature.
     * Will be removed as converters are migrated to TypeScript subclasses.
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    static legacyConverters: Partial<Record<Types, Function>> = {
        // Phases 2 & 3 converters (switch, lock, sensor, geo_location, camera, weather, cover)
        // are now TypeScript and self-register in Converter.converters — no longer listed here.
        [Types.light]: converterLight.processLight,
        [Types.dimmer]: converterLight.processLightAdvanced,
        [Types.ct]: converterLight.processLightAdvanced,
        [Types.hue]: converterLight.processLightAdvanced,
        [Types.rgb]: converterLight.processLightAdvanced,
        [Types.rgbSingle]: converterLight.processLightAdvanced,
        [Types.airCondition]: converterClimate.processThermostatOrAirConditioning,
        [Types.thermostat]: converterClimate.processThermostatOrAirConditioning,
        [Types.media]: processMediaPlayer,
        // NOTE: binary sensor types (motion, door, window, fireAlarm) are handled by
        // BinarySensorConverter in binary_sensor.ts and registered in Converter.converters.
    };

    /**
     * Override in subclasses to return the HA entities for this device type.
     * Called by the base class convert() after resolving forcedEntityId.
     *
     * @param _params - conversion parameters with a single controls PatternControl
     * @returns array of created entities (may be empty, may be async)
     */
    static convertEntities(_params: ConverterParameters): ioBrokerEntity[] | Promise<ioBrokerEntity[]> {
        return [];
    }

    /**
     * Template method — do not override in subclasses.
     * Calls this.convertEntities(), adds indicator entities, handles duplicates.
     *
     * @param params - conversion parameters (controls is a single PatternControl)
     */
    static async convert(params: ConverterParameters): Promise<void> {
        const forcedEntityId = params.entityRegistry.getEntityId(params.id);
        const entities = await this.convertEntities({ ...params, forcedEntityId });
        Converter._processEntities(entities, params);
    }

    /**
     * Main entry point called from server.js.
     * Iterates over all detected controls and dispatches each one to the right converter.
     * TypeScript subclasses in Converter.converters take priority over legacyConverters.
     *
     * @param controls - array of PatternControls returned by type-detector
     * @param baseParams - all parameters except 'controls'
     */
    static async convertAll(
        controls: PatternControl[],
        baseParams: Omit<ConverterParameters, 'controls'>,
    ): Promise<void> {
        const { adapter } = baseParams;
        for (const control of controls) {
            const params: ConverterParameters = { ...baseParams, controls: control };

            const ConverterClass = Converter.converters[control.type];
            if (ConverterClass) {
                await ConverterClass.convert(params);
                continue;
            }

            const legacyFn = Converter.legacyConverters[control.type];
            if (legacyFn) {
                const forcedEntityId = baseParams.entityRegistry.getEntityId(baseParams.id);
                // Legacy converters use old positional-argument signature

                const entities = await legacyFn(
                    baseParams.id,
                    control,
                    baseParams.friendlyName,
                    baseParams.room,
                    baseParams.func,
                    baseParams.objects[baseParams.id],
                    baseParams.objects,
                    forcedEntityId,
                );

                Converter._processEntities(entities || [], params);
                continue;
            }

            adapter.log.debug(
                `[Type-Detector] device ${control.states?.find((e: { id?: string }) => e?.id)?.id} - ${control.type} - ${baseParams.id} is not yet supported`,
            );
        }
    }

    /**
     * Shared post-processing for a batch of entities produced by a single converter call.
     * Adds indicator entities (battery, connectivity, error, maintenance, working),
     * detects and resolves duplicate entity_ids, and pushes into existingEntities.
     *
     * @param entities - entities produced by the converter
     * @param params - conversion parameters
     */
    static _processEntities(entities: ioBrokerEntity[], params: ConverterParameters): void {
        if (!entities?.length) {
            return;
        }
        const { existingEntities, adapter, entityRegistry, controls } = params;

        // Add indicator entities for the primary device entity
        const mainEntity = entities.find((x: ioBrokerEntity | null | undefined) => x?.entity_id);
        if (mainEntity) {
            entities.push(...Converter._generateEntitiesFromIndicators(mainEntity, params));
        }

        for (const entity of entities) {
            if (!entity) {
                continue;
            }
            if (!entity.context.iobType) {
                entity.context.iobType = controls.type;
            }

            const existing = existingEntities.find(e => e.entity_id === entity.entity_id);
            if (existing) {
                if (entity.context.id !== existing.context.id) {
                    // Different ioBroker device — resolve collision by renaming the new entity
                    entityRegistry.storeEntityId(existing.context.id, existing.entity_id);
                    entity.entity_id = `${entity.entity_id}_${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
                    entityRegistry.storeEntityId(entity.context.id, entity.entity_id);
                    adapter.log.debug(
                        `Duplicates found for ${existing.entity_id}, solved by renaming second to ${entity.entity_id}`,
                    );
                } else {
                    adapter.log.warn(
                        `Duplicate entities for identical iob ids? ${entity.entity_id}, ${entity.context.id}, ${controls.type}, ${params.id}`,
                    );
                    continue;
                }
            }

            existingEntities.push(entity);
            adapter.log.debug(
                `[Type-Detector] Created auto device: ${entity.entity_id} - ${controls.type} - ${params.id}`,
            );
        }
    }

    /**
     * Generate indicator entities (battery, connectivity, error, maintenance, working)
     * for the given device.  Sets context.deviceId on each indicator to link it back
     * to the main entity.
     *
     * @param mainEntity - the primary entity for the device
     * @param parameters - conversion parameters (used to build each indicator)
     */
    static _generateEntitiesFromIndicators(
        mainEntity: ioBrokerEntity,
        parameters: ConverterParameters,
    ): Array<ioBrokerEntity> {
        const entities: ioBrokerEntity[] = [];
        const baseName = mainEntity.entity_id.split('.')[1];

        const add = (entity: ioBrokerEntity | null): void => {
            if (entity) {
                entity.context.deviceId = mainEntity.context.id;
                entities.push(entity);
            }
        };

        add(processBattery({ ...parameters, forcedEntityId: `binary_sensor.${baseName}_BatteryWarning` }));
        add(connectivityIndicator({ ...parameters, forcedEntityId: `binary_sensor.${baseName}_Connectivity` }));
        add(processError({ ...parameters, forcedEntityId: `binary_sensor.${baseName}_Error` }));
        add(processMaintenance({ ...parameters, forcedEntityId: `binary_sensor.${baseName}_Maintenance` }));
        add(processWorking({ ...parameters, forcedEntityId: `binary_sensor.${baseName}_Working` }));

        return entities;
    }

    /**
     * Create manual entity - base function for creating entities that are not based on type-detector results, but are manually
     * defined by the user via object-settings.
     * TODO: use in server.js
     *
     * @param _params - conversion parameters (unused in base; subclasses may use)
     */
    static processManualEntity(_params: ConverterParameters): void {}
}

export default Converter;
