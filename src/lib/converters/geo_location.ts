import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { GeoLocationEntity, applyGeoLocationStates, type GeoStates } from '../entities/geoLocationEntity';

/** Converter for geo_location (GPS tracker) device types. */
export class GeoLocationConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        return [new GeoLocationEntity(params)];
    }
}

/**
 * Apply geo_location states to a manually-configured entity.
 *
 * @param _id - ioBroker state id (the main object) — unused, kept for signature compat
 * @param _obj - ioBroker object — unused
 * @param entity - already-built entity
 * @param objects - ioBroker objects cache
 * @param custom - custom settings from the ioBroker object (custom.states is the GeoStates map)
 */
export function processManualEntity(
    _id: string,
    _obj: ioBroker.Object,
    entity: ioBrokerEntity,
    objects: Record<string, ioBroker.Object>,
    custom: Record<string, unknown>,
): ioBrokerEntity[] {
    const states = (custom.states as GeoStates | undefined) ?? {};
    entity.attributes.source = custom.attr_source ?? 'gps';
    applyGeoLocationStates(states, objects, entity);
    return [entity];
}

Converter.converters[Types.location] = GeoLocationConverter;
Converter.converters[Types.locationOne] = GeoLocationConverter;
