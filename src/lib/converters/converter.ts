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

        // Step 1: restore any previously reserved entity_ids by composite key.
        // Composite key = `${entityType}.${STATE.getId ?? context.id}`. Stable across restarts.
        for (const entity of entities) {
            if (!entity) {
                continue;
            }
            const reserved = entityRegistry.getReservedEntityId(Converter._registryKey(entity));
            if (reserved) {
                entity.entity_id = reserved;
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
                    const newId = Converter._resolveCollision(entity, existingEntities);
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
     * `${entityType}.${STATE.getId ?? context.id}`.
     * Works before or after the context.id rewrite step.
     *
     * @param entity - entity to derive the key for
     */
    static _registryKey(entity: BaseEntity): string {
        const type = entity.entity_id.split('.')[0];
        const stableId = entity.context.STATE?.getId ?? entity.context.id;
        return `${type}.${stableId}`;
    }

    /**
     * Generate a deterministic, non-colliding entity_id for an entity that clashes
     * with an existing entity_id. Uses the last segment of context.id as suffix,
     * falling back to a counter if the suffix-augmented id still collides.
     *
     * @param entity - entity needing a new entity_id (its current entity_id collides)
     * @param existingEntities - already-registered entities to check against
     */
    static _resolveCollision(entity: BaseEntity, existingEntities: BaseEntity[]): string {
        const base = entity.entity_id;
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
