import type { Types } from '@iobroker/type-detector';
import type { PatternControl } from '@iobroker/type-detector/types';
import { processBattery, connectivityIndicator, processError, processMaintenance, processWorking } from './indicators';

// Phase 4 converters — now TypeScript; imported so their self-registration runs at load time.
import '@iobroker/types';

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
    existingEntities: Array<Entity>;
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
     * Override in subclasses to return the HA entities for this device type.
     * Called by the base class convert() after resolving forcedEntityId.
     *
     * @param _params - conversion parameters with a single controls PatternControl
     * @returns array of created entities (may be empty, may be async)
     */
    static convertEntities(_params: ConverterParameters): Entity[] {
        return [];
    }

    /**
     * Template method — do not override in subclasses.
     * Calls this.convertEntities(), adds indicator entities, handles duplicates.
     *
     * @param params - conversion parameters (controls is a single PatternControl)
     */
    static convert(params: ConverterParameters): void {
        const forcedEntityId = params.entityRegistry.getEntityId(params.id);
        const entities = this.convertEntities({ ...params, forcedEntityId });
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
    static _processEntities(entities: Entity[], params: ConverterParameters): void {
        if (!entities?.length) {
            return;
        }
        const { existingEntities, adapter, entityRegistry, controls } = params;

        // Add indicator entities for the primary device entity
        const mainEntity = entities.find((x: Entity | null | undefined) => x?.entity_id);
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
        mainEntity: Entity,
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
