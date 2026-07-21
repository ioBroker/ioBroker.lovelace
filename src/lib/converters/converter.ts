import type { Types, PatternControl } from '@iobroker/type-detector';
import {
    processBattery,
    connectivityIndicator,
    processError,
    processMaintenance,
    processWorking,
    generateElectricitySensors,
} from './indicators';
import type { BaseEntity } from '../entities/baseEntity';
import { getEntityId } from '../entities/entity_id';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData: { autoEntityIdFormat?: string } = require('../../../lib/dataSingleton');

/** Alias kept for backward compatibility with the legacy "ioBrokerEntity" name used by older converters. */
export type ioBrokerEntity = BaseEntity;
export type {
    EntityState,
    EntityAttribute,
    EntityCommand,
    ServiceCallData,
    ServiceCallTarget,
} from '../entities/baseEntity';
export { BaseEntity as Entity } from '../entities/baseEntity';

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
    existingEntities: Array<BaseEntity>;
    /**
     * The ioBroker adapter instance.
     */
    adapter: ioBroker.Adapter;
    /**
     * The entity registry module.
     */
    entityRegistry: {
        /**
         * Look up the reserved entity_id for a composite key (`${entityType}.${stableIobId}`).
         */
        getReservedEntityId(key: string): string | undefined;
        /**
         * Reserve an entity_id under a composite key for deterministic clash resolution.
         */
        reserveEntityId(key: string, entityId: string): void;
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
 * 3. Import the file in server.ts so the self-registration runs at startup.
 *
 */
export class Converter {
    /**
     * Registry of TypeScript converter subclasses keyed by device type.
     * Populated by each subclass module at load time.
     */
    static converters: Partial<Record<Types, typeof Converter>> = {};

    /**
     * Tracks duplicate-iob-id reports already logged this run so we don't spam
     * the log on every redetection pass.
     */
    static _loggedDuplicateIobIds = new Set<string>();

    /**
     * Override in subclasses to return the HA entities for this device type.
     * Called by the base class convert() after resolving forcedEntityId.
     *
     * @param _params - conversion parameters with a single controls PatternControl
     * @returns array of created entities (may be empty, may be async)
     */
    static convertEntities(_params: ConverterParameters): BaseEntity[] {
        return [];
    }

    /**
     * Template method — do not override in subclasses.
     * Calls this.convertEntities(), adds indicator entities, handles duplicates.
     *
     * @param params - conversion parameters (controls is a single PatternControl)
     */
    static convert(params: ConverterParameters): void {
        const entities = this.convertEntities(params);
        Converter._processEntities(entities, params);
    }

    /**
     * Main entry point called from server.js.
     * Iterates over all detected controls and dispatches each one to the right converter.
     * Dispatches each control to the matching TypeScript converter subclass.
     *
     * @param controls - array of PatternControls returned by type-detector
     * @param baseParams - all parameters except 'controls'
     */
    static convertAll(controls: PatternControl[], baseParams: Omit<ConverterParameters, 'controls'>): void {
        const { adapter } = baseParams;
        for (const control of controls) {
            const params: ConverterParameters = { ...baseParams, controls: control };

            const ConverterClass = Converter.converters[control.type];
            if (ConverterClass) {
                ConverterClass.convert(params);
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
    static _processEntities(entities: BaseEntity[], params: ConverterParameters): void {
        if (!entities?.length) {
            return;
        }
        const { existingEntities, adapter, entityRegistry, controls } = params;

        // Step 0: for the iobId auto-format, regenerate the id from each entity's own state id.
        // STATE.getId is only known after convertEntities() ran (not in the BaseEntity ctor, which
        // could only use the device id). Using the state id makes the id unique per entity and avoids
        // device-id collision suffixes. A reservation (step 1) still overrides this for existing ones.
        if (entityData.autoEntityIdFormat === 'iobId') {
            for (const entity of entities) {
                const stateId = entity?.context?.STATE?.getId;
                if (entity && stateId) {
                    entity.entity_id = getEntityId(entity.entity_id.split('.')[0], null, {
                        _id: stateId,
                    } as ioBroker.Object);
                }
            }
        }

        // Remember each entity's freshly generated ("raw") entity_id before step 1 can overwrite it
        // with a reservation. Collision resolution (step 4) always renames starting from this raw id,
        // never from a (possibly already suffixed) reserved one - otherwise a stale/colliding
        // reservation would grow indefinitely across restarts (base_a -> base_a_b -> base_a_b_c -> ...)
        // instead of staying at most one suffix away from the plain generated name.
        const rawEntityIds = new Map<BaseEntity, string>();
        for (const entity of entities) {
            if (entity) {
                rawEntityIds.set(entity, entity.entity_id);
            }
        }

        // Step 1: restore any previously reserved entity_ids by composite key.
        // Composite key = `${entityType}.${STATE.getId || context.id || entity.entity_id}`. Stable
        // across restarts, and unique per entity (see _registryKey) - so a reserved entity colliding
        // with something else in step 4 should never happen. Track which entities got a reservation
        // restored, so step 4 can flag it loudly if one does collide anyway (registry corruption).
        const hadReservation = new Set<BaseEntity>();
        for (const entity of entities) {
            if (!entity) {
                continue;
            }
            const reserved = entityRegistry.getReservedEntityId(Converter._registryKey(entity));
            if (reserved) {
                entity.entity_id = reserved;
                hadReservation.add(entity);
            }
        }

        // Step 2: add indicator entities for the primary device entity.
        // Must run before context.id rewrite so indicator.context.deviceId points at the
        // device root (mainEntity.context.id is still the device id at this point).
        const mainEntity = entities.find((x: BaseEntity | null | undefined) => x?.entity_id);
        if (mainEntity) {
            entities.push(...Converter._generateEntitiesFromIndicators(mainEntity, params));
            // Optional electricity states (power, current, voltage, consumption, frequency) -> sensors.
            const electricitySensors = generateElectricitySensors(params, mainEntity.entity_id.split('.')[1]);
            for (const sensor of electricitySensors) {
                sensor.context.deviceId = mainEntity.context.id;
            }
            entities.push(...electricitySensors);
        }
        // Indicator/electricity entities were pushed after step 1, so they never had a reservation
        // applied - their current entity_id already is their freshly generated one.
        for (const entity of entities) {
            if (entity && !rawEntityIds.has(entity)) {
                rawEntityIds.set(entity, entity.entity_id);
            }
        }

        // Step 3: rewrite context.id to STATE.getId where set. Makes context.id unique per
        // entity (two sensors from one device get distinct context.ids) and lets the registry
        // composite key disambiguate clashes.
        for (const entity of entities) {
            if (entity?.context.STATE?.getId && entity.context.STATE.getId !== entity.context.id) {
                entity.context.id = entity.context.STATE.getId;
            }
        }

        // Step 4: duplicate detection, deterministic resolution, reservation, registration.
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
                    if (hadReservation.has(entity)) {
                        // A restored reservation should be unique to this entity (see _registryKey) and
                        // therefore never collide. If it does, the registry itself is inconsistent -
                        // resolving from the raw name and re-reserving below still recovers, but this
                        // needs attention, so log louder than the normal (expected, first-time) case.
                        adapter.log.warn(
                            `Reserved entity_id ${entity.entity_id} (registry key ${Converter._registryKey(entity)}) unexpectedly collides with ${existing.entity_id} - registry may be inconsistent, re-resolving.`,
                        );
                    }
                    const newId = Converter._resolveCollision(
                        rawEntityIds.get(entity) ?? entity.entity_id,
                        entity,
                        existingEntities,
                    );
                    adapter.log.debug(
                        `Duplicates found for ${existing.entity_id}, solved by renaming second to ${newId}`,
                    );
                    entity.entity_id = newId;
                } else {
                    const dupKey = `${entity.entity_id}|${entity.context.id}`;
                    if (!Converter._loggedDuplicateIobIds.has(dupKey)) {
                        Converter._loggedDuplicateIobIds.add(dupKey);
                        adapter.log.info(
                            `Duplicate entities for identical iob ids? ${entity.entity_id}, ${entity.context.id}, ${controls.type}, ${params.id}`,
                        );
                    }
                    continue;
                }
            }

            entityRegistry.reserveEntityId(Converter._registryKey(entity), entity.entity_id);
            existingEntities.push(entity);
            adapter.log.debug(
                `[Type-Detector] Created auto device: ${entity.entity_id} - ${controls.type} - ${params.id}`,
            );
        }
    }

    /**
     * Build the registry composite key for an entity:
     * `${entityType}.${STATE.getId || context.id || entity.entity_id}`.
     * Works before or after the context.id rewrite step.
     *
     * Deliberately uses `||`, not `??`: a type without its own readable state (e.g.
     * `buttonSensor`, which has no ACTUAL/ON_ACTUAL) leaves `STATE.getId` as `''` (see
     * BinarySensorEntity's constructor), not `null`/`undefined` - `??` would treat that empty
     * string as "present" and skip the `context.id` fallback. Every such entity would then
     * collapse onto the SAME key (`"binary_sensor."`), so they'd overwrite each other's
     * reservation and each subsequent collision would resolve against whichever entity_id the
     * previous one just wrote - producing an ever-growing chain of concatenated device names,
     * all within a single run (no restart or persisted state required to reproduce it).
     *
     * @param entity - entity to derive the key for
     */
    static _registryKey(entity: BaseEntity): string {
        const type = entity.entity_id.split('.')[0];
        const stableId = entity.context.STATE?.getId || entity.context.id || entity.entity_id;
        return `${type}.${stableId}`;
    }

    /**
     * Generate a deterministic, non-colliding entity_id for an entity that clashes
     * with an existing entity_id. Uses the last segment of context.id as suffix,
     * falling back to a counter if the suffix-augmented id still collides.
     *
     * @param base - the freshly generated ("raw") entity_id to resolve the collision from. Must
     * never be an already-suffixed/reserved id, or repeated collisions across restarts would keep
     * appending further segments onto it indefinitely instead of staying one suffix away from base.
     * @param entity - entity needing a new entity_id (used for its context.id suffix source)
     * @param existingEntities - already-registered entities to check against
     */
    static _resolveCollision(base: string, entity: BaseEntity, existingEntities: BaseEntity[]): string {
        const lastSeg = entity.context.id
            .split('.')
            .pop()!
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '_')
            .replace(/^_+|_+$/g, '');
        let candidate = lastSeg ? `${base}_${lastSeg}` : `${base}_2`;
        let counter = 2;
        while (existingEntities.some(e => e.entity_id === candidate)) {
            candidate = lastSeg ? `${base}_${lastSeg}_${counter++}` : `${base}_${counter++}`;
        }
        return candidate;
    }

    /**
     * Generate indicator entities (battery, connectivity, error, maintenance, working)
     * for the given device.  Sets context.deviceId on each indicator to link it back
     * to the main entity.
     *
     * @param mainEntity - the primary entity for the device
     * @param parameters - conversion parameters (used to build each indicator)
     */
    static _generateEntitiesFromIndicators(mainEntity: BaseEntity, parameters: ConverterParameters): Array<BaseEntity> {
        const entities: BaseEntity[] = [];
        const baseName = mainEntity.entity_id.split('.')[1];

        const add = (entity: BaseEntity | null): void => {
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
