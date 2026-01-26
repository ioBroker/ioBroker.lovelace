
import {Types} from '@iobroker/type-detector';
import converterSwitch from './switch';
import converterLight from './light';
import converterBinarySensors from './binary_sensor';
import converterSensors from './sensor';
import {processLock} from './lock';
import converterClimate from './climate';
import {processBlind} from './cover';
import converterWeather from './weather';
import converterGeoLocation from './geo_location';
import {processMediaPlayer} from './media_player';
import {processImage} from './camera';
import type { PatternControl } from '@iobroker/type-detector/types';

type ConverterParams = {
    /**
     * The ID of the ioBroker device.
     */
    id: string;
    /**
     * The controls found by type-detector.
     */
    controls: PatternControl[];
    /**
     * The friendly name of the device, if we have a predefined one.
     */
    friendlyName?: string;
    /**
     * ID of the room of the device
     */
    room?: string;
    /**
     * ID of function of the device
     */
    func?: string;
    /**
     * The cache of ioBroker objects.
     */
    objects: Record<string, ioBroker.Object>;
    /**
     * The already existing entities to check for duplicates.
     */
    existingEntities: Array<object>;
    /**
     * The ioBroker adapter instance.
     */
    adapter: ioBroker.Adapter;
    /**
     * The entity registry module
     */
    entityRegistry: EntityRegistry;
};

/**
 * Base class for all converters. (Currently not really, mostly working with a static function and doing some groundwork
 * and then calling other converter functions... but in future could be more OOP like)
 */
export class Converter {
    static converter = {
        [Types.socket]: converterSwitch.processSocket,
        [Types.light]: converterLight.processLight,
        [Types.dimmer]: converterLight.processLightAdvanced,
        [Types.ct]: converterLight.processLightAdvanced,
        [Types.hue]: converterLight.processLightAdvanced,
        [Types.rgb]: converterLight.processLightAdvanced,
        [Types.rgbSingle]: converterLight.processLightAdvanced,
        [Types.motion]: converterBinarySensors.processMotion,
        [Types.window]: converterBinarySensors.processWindow,
        [Types.windowTilt]: converterSensors.processWindowTilt,
        [Types.door]: converterBinarySensors.processDoor,
        [Types.button]: converterSwitch.processSocket,
        [Types.temperature]: converterSensors.processTemperature,
        [Types.humidity]: converterSensors.processHumidity,
        [Types.lock]: processLock,
        [Types.airCondition]: converterClimate.processThermostatOrAirConditioning,
        [Types.thermostat]: converterClimate.processThermostatOrAirConditioning,
        [Types.blind]: processBlind,
        [Types.blindButtons]: processBlind,
        [Types.weatherForecast]: converterWeather.processWeather,
        [Types.accuWeatherForecast]: converterWeather.processAccuWeather,
        [Types.location]: converterGeoLocation.processLocation,
        [Types.locationOne]: converterGeoLocation.processLocation,
        [Types.media]: processMediaPlayer,
        [Types.image]: processImage,
        [Types.fireAlarm]: converterBinarySensors.processFireAlarm,
    };

    /**
     * Generate entities from indicators for a device, found by type detector. Store "deviceId" in context for later use.
     *
     * @param mainEntity main entity of the device
     * @param control control object from type detector
     * @param friendlyName friendly name of the device
     * @param room room name of the device
     * @param func function name of the device
     * @param objects all ioBroker objects
     * @returns {*[]} array of generated entities
     */
    static _generateEntitiesFromIndicators(mainEntity, control, friendlyName, room, func, objects) {
        const entities = [];
        const baseName = mainEntity.entity_id.split('.')[1];
        //make battery have sensible entity id and make sure it is different from "host" device:
        const battery = converterBinarySensors.processBattery(
            control,
            friendlyName,
            room,
            func,
            objects,
            `binary_sensor.${baseName}_BatteryWarning`,
        );
        if (battery) {
            battery.context.deviceId = mainEntity.context.id;
            entities.push(battery);
        }
        //create binary sensor from online/offline indicator:
        const online = converterBinarySensors.connectivityIndicator(
            control,
            friendlyName,
            room,
            func,
            objects,
            `binary_sensor.${baseName}_Connectivity`,
        );
        if (online) {
            online.context.deviceId = mainEntity.context.id;
            entities.push(online);
        }
        //error:
        const error = converterBinarySensors.processError(
            control,
            friendlyName,
            room,
            func,
            objects,
            `binary_sensor.${baseName}_Error`,
        );
        if (error) {
            error.context.deviceId = mainEntity.context.id;
            entities.push(error);
        }
        //maintenance
        const maintenance = converterBinarySensors.processMaintenance(
            control,
            friendlyName,
            room,
            func,
            objects,
            `binary_sensor.${baseName}_Maintenance`,
        );
        if (maintenance) {
            maintenance.context.deviceId = mainEntity.context.id;
            entities.push(maintenance);
        }
        //working
        const working = converterBinarySensors.processWorking(
            control,
            friendlyName,
            room,
            func,
            objects,
            `binary_sensor.${baseName}_Working`,
        );
        if (working) {
            working.context.deviceId = mainEntity.context.id;
            entities.push(working);
        }

        return entities;
    }

    /**
     * Convert ioBroker device to Home Assistant entities.
     *
     * @param {ConverterParams} params - The parameters for conversion.
     */
    static async convert(params) {
        const { controls, id, friendlyName, room, func, objects, existingEntities, adapter, entityRegistry } = params;
        for (const control of controls) {
            if (Converter.converter[control.type]) {
                const forcedEntityId = entityRegistry.getEntityId(id);
                const entities = await Converter.converter[control.type](
                    id,
                    control,
                    friendlyName,
                    room,
                    func,
                    objects[id],
                    objects,
                    forcedEntityId,
                );
                // converter could return one or more devices as an array
                if (entities && entities.length) {
                    //try to create battery_alarm:
                    const mainEntity = entities.find(x => x && x.entity_id);
                    if (mainEntity) {
                        const indicatorEntities = Converter._generateEntitiesFromIndicators(
                            mainEntity,
                            control,
                            friendlyName,
                            room,
                            func,
                            objects,
                        );
                        entities.push(...indicatorEntities);
                    }

                    // iterate through entities
                    for (const entity of entities) {
                        if (!entity) {
                            continue;
                        }
                        if (!entity.context.iobType) {
                            entity.context.iobType = control.type; //remember type.
                        }

                        const _entity = existingEntities.find(e => e.entity_id === entity.entity_id);
                        if (_entity) {
                            if (entity.context.id !== _entity.context.id) {
                                entityRegistry.storeEntityId(_entity.context.id, _entity.entity_id);
                                entity.entity_id = `${entity.entity_id}_${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
                                entityRegistry.storeEntityId(entity.context.id, entity.entity_id);
                                //utils.fillEntityIntoCaches(entity); -> nope, nowadays done in calling method.
                                adapter.log.debug(
                                    `Duplicates found for ${_entity.entity_id}, solved by renaming second to ${entity.entity_id}`,
                                );
                            } else {
                                //TODO: context.id is not sufficient here... there are devices with a lot of types and some of them can be duplicates...
                                //decide: either not use id of device for context.id or check context.state.setId or getId here as well... (or so), since this should be unique. But it is not present for all entities... right?
                                // like location... or so?
                                adapter.log.warn(
                                    `Duplicate entities for identical iob ids? ${entity.entity_id}, ${entity.context.id}, ${control.type}, ${id}`,
                                );
                                continue;
                            }
                        }

                        existingEntities.push(entity);

                        adapter.log.debug(
                            `[Type-Detector] Created auto device: ${entity.entity_id} - ${control.type} - ${id}`,
                        );
                    }
                }
            } else {
                adapter.log.debug(
                    `[Type-Detector] device ${control.states.find(e => e.id).id} - ${control.type} - ${id} is not yet supported`,
                );
            }
        }
    }

    static processManualEntity(params) {

    }
}

export default Converter;
