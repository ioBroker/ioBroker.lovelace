import { Types } from '@iobroker/type-detector';
import type { PatternControl } from '@iobroker/type-detector/types';
import converterSwitch from '../../../lib/converters/switch';
import converterLight from '../../../lib/converters/light';
import converterSensors from '../../../lib/converters/sensor';
import { processLock } from '../../../lib/converters/lock';
import converterClimate from '../../../lib/converters/climate';
import { processBlind } from '../../../lib/converters/cover';
import converterWeather from '../../../lib/converters/weather';
import converterGeoLocation from '../../../lib/converters/geo_location';
import { processMediaPlayer } from '../../../lib/converters/media_player';
import { processImage } from '../../../lib/converters/camera';
import {
    processBattery,
    connectivityIndicator,
    processError,
    processMaintenance,
    processWorking,
} from './indicators';
import '@iobroker/types';
import type { HassEntityAttributeBase } from 'home-assistant-js-websocket';

// NOTE: binary_sensor.ts is NOT imported here to avoid a circular dependency.
// BinarySensorConverter (defined in binary_sensor.ts) self-registers on
// Converter.converters when binary_sensor.ts is first required by server.js.

export type ioBrokerEntity = {
    /**
     * entity_id of the entity, for example "light.living_room_light". Should be unique across all
     * entities and should not change after creation, since it is used for storing in entity registry
     * and so on. It should be based on the ioBroker id of the device or state and the type of entity
     * (like main state, battery, online/offline, error, maintenance, working), not on friendly name.
     */
    entity_id: string;
    /** state of the entity as a string, matching what the frontend expects */
    state: string;
    /** timestamp (ms) when only the state last changed */
    last_changed: number;
    /** timestamp (ms) when state or attributes last changed */
    last_updated: number;
    /** HA-compatible attributes object (not an array) */
    attributes: HassEntityAttributeBase & Record<string, unknown>;
    /** ioBroker-specific context, not used by the HA frontend */
    context: {
        /** ioBroker object id of the device or main state */
        id: string;
        /** detected ioBroker device type (e.g. Types.motion) */
        iobType?: string;
        /** How to map entity.state from/to ioBroker */
        STATE?: {
            getId: string;
            getParser?: (entity: ioBrokerEntity, attributeName: string, state: ioBroker.State) => void;
            historyParser?: (iobId: string, state: ioBroker.State) => string;
            setId?: string;
            max?: number;
            min?: number;
            isBoolean?: boolean;
            isNumber?: boolean;
            isStringArray?: boolean;
            /** @deprecated use map2lovelace */
            map?: Record<string, string | number>;
            map2lovelace?: Record<string, string | number>;
            map2iob?: Record<string, string | number>;
            getValue?: string;
        };
        COMMANDS?: [];
        ATTRIBUTES?: [];
        /** entity_id of the parent device, set on indicator entities */
        deviceId?: string;
    };
};

export type ConverterParameters = {
    /** ioBroker device id */
    id: string;
    /** The single PatternControl being converted */
    controls: PatternControl;
    /** Pre-determined friendly name, if any */
    friendlyName?: string;
    /** Room enum object assigned to the device */
    room?: ioBroker.EnumObject;
    /** Function enum object assigned to the device */
    func?: ioBroker.EnumObject;
    /** Cache of all ioBroker objects */
    objects: Record<string, ioBroker.Object>;
    /** Entities already created in this run (for duplicate detection) */
    existingEntities: Array<ioBrokerEntity>;
    /** ioBroker adapter instance */
    adapter: ioBroker.Adapter;
    /** Entity registry module */
    entityRegistry: {
        getEntityId(iobId: string): string | undefined;
        storeEntityId(iobId: string, entityId: string): void;
    };
    /** Pre-determined entity_id to use, overrides auto-generated one */
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
        [Types.socket]: converterSwitch.processSocket,
        [Types.light]: converterLight.processLight,
        [Types.dimmer]: converterLight.processLightAdvanced,
        [Types.ct]: converterLight.processLightAdvanced,
        [Types.hue]: converterLight.processLightAdvanced,
        [Types.rgb]: converterLight.processLightAdvanced,
        [Types.rgbSingle]: converterLight.processLightAdvanced,
        [Types.windowTilt]: converterSensors.processWindowTilt,
        [Types.button]: converterSwitch.processSocket,
        [Types.temperature]: converterSensors.processTemperature,
        [Types.humidity]: converterSensors.processHumidity,
        [Types.lock]: processLock,
        [Types.airCondition]: converterClimate.processThermostatOrAirConditioning,
        [Types.thermostat]: converterClimate.processThermostatOrAirConditioning,
        [Types.blind]: processBlind,
        [Types.blindButtons]: processBlind,
        [Types.weatherForecast]: converterWeather.processWeather,
        [Types.location]: converterGeoLocation.processLocation,
        [Types.locationOne]: converterGeoLocation.processLocation,
        [Types.media]: processMediaPlayer,
        [Types.image]: processImage,
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
        await Converter._processEntities(entities, params);
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
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
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
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                await Converter._processEntities(entities || [], params);
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
    static async _processEntities(entities: ioBrokerEntity[], params: ConverterParameters): Promise<void> {
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

    static processManualEntity(_params: ConverterParameters): void {}
}

export default Converter;
