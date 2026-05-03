import { BaseEntity, type EntityAttribute } from './baseEntity';
import type { ConverterParameters } from '../converters/converter';

/**
 * State-id map used to fill in the geo_location entity attributes.
 * Each key maps to the corresponding ioBroker state id.
 */
export interface GeoStates {
    gps?: string;
    latitude?: string;
    longitude?: string;
    radius?: string;
    gps_accuracy?: string;
    battery?: string;
}

/**
 * Parse a "lat;lon" or "lat,lon" string and update the entity's latitude/longitude.
 *
 * @param entity - the entity being updated
 * @param _attr - the attribute object (unused; kept for getParser signature compatibility)
 * @param iobState - the ioBroker state with the value to parse
 */
function parseGps(entity: BaseEntity, _attr: EntityAttribute, iobState: ioBroker.State): void {
    const value = ((iobState?.val ?? '') as string).toString();
    let parts = value.split(';');
    if (parts.length !== 2) {
        parts = value.split(',');
    }
    if (parts.length === 2) {
        entity.attributes.latitude = parseFloat(parts[0]);
        entity.attributes.longitude = parseFloat(parts[1]);
    }
}

/**
 * Apply geo_location-specific augmentation on top of the base fillFromStates() call.
 * Adds GPS-string parsing and synthesises latitude/longitude attributes from the gps state.
 *
 * @param states - state-id map (gps, latitude, longitude, radius, gps_accuracy, battery)
 * @param objects - ioBroker objects cache
 * @param entity - entity to mutate in-place
 */
export function applyGeoLocationStates(
    states: GeoStates,
    objects: Record<string, ioBroker.Object>,
    entity: BaseEntity,
): void {
    entity.fillFromStates(states as Record<string, string>, objects);

    entity.attributes.icon = 'mdi:crosshairs-gps';

    if (!states.gps) {
        return;
    }

    const gpsAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'gps');
    if (gpsAttr) {
        gpsAttr.getParser = parseGps;
    }

    if (!states.latitude) {
        entity.context.ATTRIBUTES.push({
            attribute: 'latitude',
            getId: states.gps,
            getParser: parseGps,
            historyParser: (_id, val) => {
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
        entity.context.ATTRIBUTES.push({
            attribute: 'longitude',
            getId: states.gps,
            getParser: parseGps,
            historyParser: (_id, val) => {
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

/**
 * GeoLocationEntity — single class for the Home Assistant `geo_location` domain.
 *
 * Reads GPS / LATITUDE / LONGITUDE / RADIUS / ACCURACY / BATTERY from controls.states
 * and translates "lat;lon" strings into separate latitude / longitude attributes.
 */
export class GeoLocationEntity extends BaseEntity {
    constructor(params: ConverterParameters) {
        const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
        super(friendlyName, room, func, objects[id], 'geo_location', forcedEntityId);

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

        this.attributes.source = 'gps';
        applyGeoLocationStates(states, objects, this);
    }
}
