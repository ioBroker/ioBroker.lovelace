import { BaseEntity, type EntityAttribute } from './baseEntity';
import type { ConverterParameters } from '../converters/converter';

import entityData from '../../../lib/dataSingleton';

/**
 * State-id map used to fill in the geo_location entity attributes.
 * Each key maps to the corresponding ioBroker state id.
 */
export interface GeoStates {
    /** ioBroker state id for combined "lat;lon" GPS string */
    gps?: string;
    /** ioBroker state id for latitude */
    latitude?: string;
    /** ioBroker state id for longitude */
    longitude?: string;
    /** ioBroker state id for radius */
    radius?: string;
    /** ioBroker state id for GPS accuracy */
    gps_accuracy?: string;
    /** ioBroker state id for battery level */
    battery?: string;
}

/**
 * Haversine great-circle distance in km.
 *
 * @param lat1 - first latitude
 * @param lon1 - first longitude
 * @param lat2 - second latitude
 * @param lon2 - second longitude
 */
function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371;
    const toRad = (d: number): number => (d * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * Compute distance from zone.home to the given coordinates.
 * Returns null when home coordinates are not yet available.
 *
 * @param lat - latitude of the entity
 * @param lon - longitude of the entity
 */
function distanceFromHome(lat: number, lon: number): string | null {
    const entityId2Entity = entityData.entityId2Entity as Record<string, { attributes: Record<string, unknown> }>;
    const home = entityId2Entity?.['zone.home'];
    const homeLat = home?.attributes?.latitude as number | undefined;
    const homeLon = home?.attributes?.longitude as number | undefined;
    if (
        !isFinite(lat) ||
        !isFinite(lon) ||
        homeLat == null ||
        !isFinite(homeLat) ||
        homeLon == null ||
        !isFinite(homeLon)
    ) {
        return null;
    }
    return haversineKm(lat, lon, homeLat, homeLon).toFixed(1);
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
 * Adds GPS-string parsing, synthesises latitude/longitude attributes from the gps state,
 * and wires STATE.getId + getParser so entity.state is the haversine distance to zone.home.
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
    entity.attributes.unit_of_measurement = 'km';

    if (states.gps) {
        // Single combined GPS-string state — wire STATE so entity_id persistence and distance work.
        entity.context.STATE.getId = states.gps;
        entity.context.STATE.getParser = (ent: BaseEntity, _attr: string, state: ioBroker.State): void => {
            const value = ((state?.val ?? '') as string).toString();
            let parts = value.split(';');
            if (parts.length !== 2) {
                parts = value.split(',');
            }
            if (parts.length === 2) {
                const lat = parseFloat(parts[0]);
                const lon = parseFloat(parts[1]);
                ent.attributes.latitude = lat;
                ent.attributes.longitude = lon;
                const dist = distanceFromHome(lat, lon);
                if (dist !== null) {
                    ent.state = dist;
                }
            }
        };

        // Keep the 'gps' attribute getParser for history support.
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
    } else {
        // Separate latitude / longitude states.
        if (states.latitude) {
            // Wire STATE to latitude so entity_id persistence and distance-on-lat-change work.
            entity.context.STATE.getId = states.latitude;
            entity.context.STATE.getParser = (ent: BaseEntity, _attr: string, state: ioBroker.State): void => {
                const lat = parseFloat(state.val as string);
                ent.attributes.latitude = lat;
                const dist = distanceFromHome(lat, ent.attributes.longitude as number);
                if (dist !== null) {
                    ent.state = dist;
                }
            };
        }

        if (states.longitude) {
            // Also recompute distance when longitude changes.
            const lonAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'longitude');
            if (lonAttr) {
                lonAttr.getParser = (ent: BaseEntity, _attr: EntityAttribute, state: ioBroker.State): void => {
                    const lon = parseFloat(state.val as string);
                    ent.attributes.longitude = lon;
                    const dist = distanceFromHome(ent.attributes.latitude as number, lon);
                    if (dist !== null) {
                        ent.state = dist;
                    }
                };
            }
        }
    }
}

/**
 * GeoLocationEntity — single class for the Home Assistant `geo_location` domain.
 *
 * Reads GPS / LATITUDE / LONGITUDE / RADIUS / ACCURACY / BATTERY from controls.states
 * and translates "lat;lon" strings into separate latitude / longitude attributes.
 * entity.state is set to the haversine distance (km) from zone.home.
 */
export class GeoLocationEntity extends BaseEntity {
    /** @param params - converter parameters */
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
