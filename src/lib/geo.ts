/**
 * Geo helpers shared by the geo_location/device_tracker entities and the zone condition:
 * distance between two coordinates and Home Assistant's idea of "inside a zone".
 */

/** What this module needs of a zone entity. */
export interface ZoneLike {
    /** Home Assistant entity id of the zone. */
    entity_id: string;
    /** The zone state, which only matters when it is 'unavailable'. */
    state?: unknown;
    /** The zone attributes: latitude, longitude, radius and passive. */
    attributes?: Record<string, unknown>;
}

/**
 * Haversine great-circle distance in km.
 *
 * @param lat1 - first latitude
 * @param lon1 - first longitude
 * @param lat2 - second latitude
 * @param lon2 - second longitude
 */
export function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371;
    const toRad = (d: number): number => (d * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * Distance in metres between a point and the centre of a zone, or undefined when either of them
 * has no usable coordinates.
 *
 * @param lat - latitude of the point
 * @param lon - longitude of the point
 * @param zone - the zone entity
 */
export function distanceToZoneM(lat: number, lon: number, zone: ZoneLike | undefined): number | undefined {
    const zoneLat = Number(zone?.attributes?.latitude);
    const zoneLon = Number(zone?.attributes?.longitude);
    if (!isFinite(lat) || !isFinite(lon) || !isFinite(zoneLat) || !isFinite(zoneLon)) {
        return undefined;
    }
    return haversineKm(lat, lon, zoneLat, zoneLon) * 1000;
}

/**
 * Whether a point is inside a zone, the way Home Assistant decides it: the distance to the zone
 * centre, reduced by the GPS accuracy, has to be smaller than the zone radius.
 *
 * @param lat - latitude of the point
 * @param lon - longitude of the point
 * @param zone - the zone entity
 * @param accuracyM - GPS accuracy in metres (0 when unknown)
 */
export function inZone(lat: number, lon: number, zone: ZoneLike | undefined, accuracyM = 0): boolean {
    if (!zone || zone.state === 'unavailable') {
        return false;
    }
    const radius = Number(zone.attributes?.radius);
    const distance = distanceToZoneM(lat, lon, zone);
    if (distance === undefined || !isFinite(radius)) {
        return false;
    }
    return distance - accuracyM < radius;
}

/**
 * The zone a point is in, like Home Assistant's `async_active_zone`: the closest zone that
 * contains the point, the smaller one when two are equally close. Passive and unavailable zones
 * are ignored.
 *
 * @param lat - latitude of the point
 * @param lon - longitude of the point
 * @param zones - all zone entities to consider
 * @param accuracyM - GPS accuracy in metres (0 when unknown)
 */
export function findActiveZone(lat: number, lon: number, zones: ZoneLike[], accuracyM = 0): ZoneLike | undefined {
    let closest: ZoneLike | undefined;
    let minDistance = Infinity;
    for (const zone of [...zones].sort((a, b) => a.entity_id.localeCompare(b.entity_id))) {
        if (zone.state === 'unavailable' || zone.attributes?.passive) {
            continue;
        }
        const distance = distanceToZoneM(lat, lon, zone);
        if (distance === undefined || !inZone(lat, lon, zone, accuracyM)) {
            continue;
        }
        const smaller =
            distance === minDistance && Number(zone.attributes?.radius) < Number(closest?.attributes?.radius);
        if (!closest || distance < minDistance || smaller) {
            closest = zone;
            minDistance = distance;
        }
    }
    return closest;
}
