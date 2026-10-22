import type { ioBrokerEntity } from './converter';
import type { BaseEntity, EntityAttribute } from '../entities/baseEntity';
import { collectManualStates } from './manualStates';

/** Default radius in metres, like a zone created in Home Assistant. */
const DEFAULT_RADIUS = 100;

/**
 * Read one half of a "lat;lon" (or "lat,lon") GPS string into the attribute it is wired to.
 *
 * @param index - 0 for the latitude, 1 for the longitude
 */
function parseGpsPart(index: 0 | 1): (entity: BaseEntity, attr: EntityAttribute, state: ioBroker.State) => void {
    return (entity: BaseEntity, attr: EntityAttribute, state: ioBroker.State): void => {
        const value = ((state?.val ?? '') as string).toString();
        let parts = value.split(';');
        if (parts.length !== 2) {
            parts = value.split(',');
        }
        if (parts.length === 2) {
            entity.attributes[attr.attribute] = parseFloat(parts[index]);
        }
    };
}

/**
 * Turn an attribute that the admin dialog stores as text into a number, or drop it when it is
 * none.
 *
 * @param entity - the entity to fix up
 * @param name - attribute name
 */
function numericAttribute(entity: ioBrokerEntity, name: string): void {
    if (entity.attributes[name] === undefined) {
        return;
    }
    const value = Number(entity.attributes[name]);
    if (isFinite(value)) {
        entity.attributes[name] = value;
    } else {
        delete entity.attributes[name];
    }
}

/**
 * Build a manually configured `zone` entity.
 *
 * A zone is a circle on the map: `latitude`, `longitude` and `radius` (in metres). The coordinates
 * can be fixed (the `attr_latitude` / `attr_longitude` fields of the dialog) or come from ioBroker
 * states, so a zone can follow something that moves:
 * - `state_gps` (or the configured object itself, when it holds "lat;lon"),
 * - or `state_latitude` / `state_longitude`,
 * - plus an optional `state_radius`.
 *
 * Zones are what the `zone` condition and the presence of a device_tracker/person are checked
 * against; `attr_passive` keeps a zone out of the presence detection, like in Home Assistant.
 *
 * @param id - ioBroker state id of the main (custom-configured) object
 * @param obj - the main ioBroker object
 * @param entity - the already-built entity
 * @param _objects - ioBroker objects cache (unused)
 * @param custom - the object's custom settings for our namespace
 */
export function processManualEntity(
    id: string,
    obj: ioBroker.Object,
    entity: ioBrokerEntity,
    _objects: Record<string, ioBroker.Object>,
    custom: Record<string, unknown>,
): ioBrokerEntity[] {
    const states = collectManualStates(custom);
    const base = entity;

    for (const name of ['latitude', 'longitude', 'radius']) {
        numericAttribute(entity, name);
    }
    if (entity.attributes.radius === undefined) {
        entity.attributes.radius = DEFAULT_RADIUS;
    }
    entity.attributes.passive = !!custom.attr_passive;
    entity.attributes.editable = false;
    entity.attributes.icon = entity.attributes.icon || 'mdi:map-marker-radius';

    // A zone has no own value to show - like zone.home it just is.
    entity.state = 'zoning';
    entity.context.STATE = { getValue: 'zoning', getId: null, attribute: 'state' as const };
    entity.context.ATTRIBUTES = entity.context.ATTRIBUTES ?? [];

    // The configured object itself is the GPS source when nothing else is picked and it holds a
    // string ("lat;lon"), which is how the GPS adapters store a position.
    const gpsId =
        states.gps || (!states.latitude && !states.longitude && obj?.common?.type === 'string' ? id : undefined);
    if (gpsId) {
        base.addID2entity(gpsId);
        entity.context.ATTRIBUTES.push({ attribute: 'latitude', getId: gpsId, getParser: parseGpsPart(0) });
        entity.context.ATTRIBUTES.push({ attribute: 'longitude', getId: gpsId, getParser: parseGpsPart(1) });
    } else {
        for (const name of ['latitude', 'longitude'] as const) {
            if (states[name]) {
                base.addID2entity(states[name]);
                entity.context.ATTRIBUTES.push({ attribute: name, getId: states[name] });
            }
        }
    }
    if (states.radius) {
        base.addID2entity(states.radius);
        entity.context.ATTRIBUTES.push({ attribute: 'radius', getId: states.radius });
    }

    return [entity];
}
