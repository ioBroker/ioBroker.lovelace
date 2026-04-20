import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity, type EntityAttribute } from './converter';
import { processCommon, fillEntityFromStates } from '../entities/utils';

/**
 * State-id map passed to fillGeoLocationEntityFromStates.
 * Each key is a geo_location attribute name; the value is the ioBroker state id.
 */
interface GeoStates {
    gps?: string;
    latitude?: string;
    longitude?: string;
    radius?: string;
    gps_accuracy?: string;
    battery?: string;
}

/**
 * Augment a geo_location entity with GPS-parsing attribute handlers.
 *
 * Calls fillEntityFromStates() first, then:
 * - Replaces the gps attribute's getParser with one that splits "lat;lon" or "lat,lon"
 *   and writes entity.attributes.latitude / entity.attributes.longitude.
 * - Adds synthetic latitude/longitude ATTRIBUTES entries (backed by the gps state id)
 *   when no separate LATITUDE / LONGITUDE states were found.
 * TODO: should this function be a generic one in baseclass and be overwritten in GeoLocationConverter, below? -> We call fillEntityFromStates in every conversion. Can we overwrite that one? And call that one in base conversion function?
 *
 * @param states - map of attribute name → ioBroker state id
 * @param objects - ioBroker objects cache
 * @param entity - entity to augment in-place
 */
function fillGeoLocationEntityFromStates(
    states: GeoStates,
    objects: Record<string, ioBroker.Object>,
    entity: ioBrokerEntity,
): void {
    fillEntityFromStates(states as Record<string, string>, entity, objects);

    entity.attributes.icon = 'mdi:crosshairs-gps';

    if (!states.gps) {
        return;
    }

    const gpsAttr = entity.context.ATTRIBUTES?.find((a: EntityAttribute) => a.attribute === 'gps');

    const parseGps = (_entity: ioBrokerEntity, _attr: EntityAttribute, iobState: ioBroker.State): void => {
        const value = ((iobState?.val ?? '') as string).toString();
        let parts = value.split(';');
        if (parts.length !== 2) {
            parts = value.split(',');
        }
        if (parts.length === 2) {
            _entity.attributes.latitude = parseFloat(parts[0]);
            _entity.attributes.longitude = parseFloat(parts[1]);
        }
    };

    if (gpsAttr) {
        gpsAttr.getParser = parseGps;
    }

    if (!states.latitude) {
        entity.context.ATTRIBUTES = entity.context.ATTRIBUTES ?? [];
        entity.context.ATTRIBUTES.push({
            attribute: 'latitude',
            getId: states.gps,
            getParser: parseGps,
            historyParser: (_id: string, val: unknown): string => {
                const str = ((val ?? '') as string).toString();
                let parts = str.split(';');
                if (parts.length !== 2) {
                    parts = str.split(',');
                }
                return parts[0] ?? '';
            },
        });
    }

    if (!states.longitude) {
        entity.context.ATTRIBUTES = entity.context.ATTRIBUTES ?? [];
        entity.context.ATTRIBUTES.push({
            attribute: 'longitude',
            getId: states.gps,
            getParser: parseGps,
            historyParser: (_id: string, val: unknown): string => {
                const str = ((val ?? '') as string).toString();
                let parts = str.split(';');
                if (parts.length !== 2) {
                    parts = str.split(',');
                }
                return parts[1] ?? '';
            },
        });
    }
}

/** Converter for geo_location (GPS tracker) device types. */
export class GeoLocationConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        const { controls, objects, forcedEntityId, friendlyName, room, func } = params;
        const entity = processCommon(friendlyName, room, func, objects[params.id], 'geo_location', forcedEntityId);

        const states: GeoStates = {};

        let state = controls.states.find(s => s.id && s.name === 'GPS');
        if (state?.id) {
            states.gps = state.id;
        } else {
            state = controls.states.find(s => s.id && s.name === 'LATITUDE');
            if (state?.id) {
                states.latitude = state.id;
            }
            state = controls.states.find(s => s.id && s.name === 'LONGITUDE');
            if (state?.id) {
                states.longitude = state.id;
            }
        }

        state = controls.states.find(s => s.id && s.name === 'RADIUS');
        if (state?.id) {
            states.radius = state.id;
        }

        state = controls.states.find(s => s.id && s.name === 'ACCURACY');
        if (state?.id) {
            states.gps_accuracy = state.id;
        }

        state = controls.states.find(s => s.id && s.name === 'BATTERY');
        if (state?.id) {
            states.battery = state.id;
        }

        entity.attributes.source = 'gps';
        fillGeoLocationEntityFromStates(states, objects, entity);

        return [entity];
    }
}

Converter.converters[Types.location] = GeoLocationConverter;
Converter.converters[Types.locationOne] = GeoLocationConverter;
