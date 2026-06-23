import type { ioBrokerEntity } from './converter';
import type { BaseEntity } from '../entities/baseEntity';
import { applyGeoLocationStates, type GeoStates } from '../entities/geoLocationEntity';
import { collectManualStates } from './manualStates';

import entityData from '../../../lib/dataSingleton';

/**
 * State-id map for a manually configured device_tracker / person entity.
 * Location keys mirror {@link GeoStates}; `presence` is an optional dedicated presence state.
 */
export interface TrackerStates extends GeoStates {
    /** ioBroker state id holding the presence/zone (boolean -> home/not_home, or a zone name string). */
    presence?: string;
    /** ioBroker state id holding the picture URL (entity_picture). */
    entity_picture?: string;
}

const EARTH_RADIUS_KM = 6371;

/**
 * Haversine great-circle distance in km.
 *
 * @param lat1 - first latitude
 * @param lon1 - first longitude
 * @param lat2 - second latitude
 * @param lon2 - second longitude
 */
function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const toRad = (d: number): number => (d * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return EARTH_RADIUS_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * Map an ioBroker presence value to a Home Assistant tracker state string.
 * booleans (and 'true'/'false' strings) become home/not_home; any other string (a zone name) is
 * passed through; null/undefined/'' become 'unknown'.
 *
 * @param val - the raw ioBroker state value
 */
export function presenceFromValue(val: unknown): string {
    if (typeof val === 'boolean') {
        return val ? 'home' : 'not_home';
    }
    if (typeof val === 'number') {
        return String(val);
    }
    if (typeof val !== 'string' || val === '') {
        return 'unknown';
    }
    if (val === 'true') {
        return 'home';
    }
    if (val === 'false') {
        return 'not_home';
    }
    return val;
}

/**
 * Derive home/not_home from coordinates relative to zone.home and its radius.
 * Returns null when home coordinates / the entity coordinates are not available.
 *
 * @param lat - entity latitude
 * @param lon - entity longitude
 */
export function presenceFromGps(lat: unknown, lon: unknown): string | null {
    const home = (entityData.entityId2Entity as Record<string, { attributes?: Record<string, unknown> }>)?.[
        'zone.home'
    ];
    const la = Number(lat);
    const lo = Number(lon);
    const homeLat = Number(home?.attributes?.latitude);
    const homeLon = Number(home?.attributes?.longitude);
    if (!isFinite(la) || !isFinite(lo) || !isFinite(homeLat) || !isFinite(homeLon)) {
        return null;
    }
    const radiusM = Number(home?.attributes?.radius) || 100;
    const distanceM = haversineKm(la, lo, homeLat, homeLon) * 1000;
    return distanceM <= radiusM ? 'home' : 'not_home';
}

/**
 * Build a manually-configured device_tracker or person entity. The entity domain is taken from the
 * already-built entity (`entity.context.type`); `person` additionally gets the wrapper attributes
 * (`device_trackers`, `user_id`, `id`, `editable`).
 *
 * Mapping (via the object's custom config, like geo_location):
 * - location: `custom.states.gps` ("lat;lon") or `custom.states.latitude`/`.longitude`, plus
 *   optional `gps_accuracy` / `battery`.
 * - presence (entity state), highest priority first:
 *   1. `custom.states.presence` (boolean -> home/not_home, or a zone-name string),
 *   2. the main object itself when it is a boolean/string,
 *   3. derived from the coordinates vs zone.home.
 *
 * @param id - ioBroker state id of the main (custom-configured) object
 * @param obj - the main ioBroker object
 * @param entity - the already-built entity (domain person or device_tracker)
 * @param objects - ioBroker objects cache
 * @param custom - the object's custom settings for our namespace
 */
export function processManualEntity(
    id: string,
    obj: ioBroker.Object,
    entity: ioBrokerEntity,
    objects: Record<string, ioBroker.Object>,
    custom: Record<string, unknown>,
): ioBrokerEntity[] {
    const states = collectManualStates(custom) as TrackerStates;
    const domain = entity.context.type;
    const base = entity;

    entity.attributes.source = custom.attr_source ?? 'gps';

    // Reuse the geo_location GPS plumbing to fill latitude/longitude (and gps_accuracy/battery).
    // It also sets STATE to the distance-to-home; we override STATE below so the state is presence.
    const geoStates: GeoStates = {
        gps: states.gps,
        latitude: states.latitude,
        longitude: states.longitude,
        gps_accuracy: states.gps_accuracy,
        // battery is wired below as the HA `battery_level` attribute, not the generic geo `battery`.
    };
    applyGeoLocationStates(geoStates, objects, base);
    // A tracker/person has no unit and uses a person-style icon, not the gps crosshair.
    delete entity.attributes.unit_of_measurement;
    entity.attributes.icon = domain === 'person' ? 'mdi:account' : 'mdi:account-arrow-right';

    // Presence (entity state). Priority: dedicated presence state > the main object (if boolean/
    // string) > derived from the coordinates.
    let presenceId = states.presence;
    if (!presenceId) {
        const mainType = obj?.common?.type;
        if (mainType === 'boolean' || mainType === 'string') {
            presenceId = id;
        }
    }
    if (presenceId) {
        entity.context.STATE = {
            getId: presenceId,
            attribute: 'state',
            getParser: (ent: BaseEntity, _a: string, st: ioBroker.State): void => {
                ent.state = presenceFromValue(st?.val);
            },
        };
        base.addID2entity(presenceId);
    } else {
        // No presence state: derive home/not_home from the coordinates whenever they change.
        const gpsId = states.gps || states.latitude;
        if (gpsId) {
            entity.context.STATE = {
                getId: gpsId,
                attribute: 'state',
                getParser: (ent: BaseEntity): void => {
                    const derived = presenceFromGps(ent.attributes.latitude, ent.attributes.longitude);
                    ent.state = derived ?? 'unknown';
                },
            };
            base.addID2entity(gpsId);
        }
    }

    entity.context.ATTRIBUTES = entity.context.ATTRIBUTES ?? [];

    // battery_level from a battery state.
    if (states.battery) {
        base.addID2entity(states.battery);
        entity.context.ATTRIBUTES.push({ attribute: 'battery_level', getId: states.battery });
    }

    // device_tracker source type (gps / router / bluetooth / bluetooth_le); person uses `source`.
    if (domain === 'device_tracker') {
        entity.attributes.source_type = custom.source_type || 'gps';
    }

    // Picture (entity_picture): a fixed URL (attr_entity_picture) or a state that holds the URL
    // (state_entity_picture). A mapped state wins so the picture can change at runtime.
    if (states.entity_picture) {
        base.addID2entity(states.entity_picture);
        entity.context.ATTRIBUTES.push({ attribute: 'entity_picture', getId: states.entity_picture });
    } else if (typeof custom.attr_entity_picture === 'string' && custom.attr_entity_picture) {
        entity.attributes.entity_picture = custom.attr_entity_picture;
    }

    if (domain === 'person') {
        entity.attributes.device_trackers = entity.attributes.device_trackers ?? [];
        entity.attributes.user_id = null;
        entity.attributes.id = custom.name ?? entity.entity_id.split('.').slice(1).join('.');
        entity.attributes.editable = false;
    }

    return [entity];
}
