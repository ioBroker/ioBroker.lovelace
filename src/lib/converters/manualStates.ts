import type { BaseEntity } from '../entities/baseEntity';

/**
 * Collect the state-id map for a manual entity from its custom config.
 *
 * The states-picker in the admin custom dialog stores each picked ioBroker object id as a flat
 * `state_<role>` key (e.g. `state_presence`, `state_SET`, `state_ACTUAL`). Advanced users may also
 * provide a nested `custom.states` object directly. This merges both into one `{ role: id }` map
 * (the flat picker keys win, since they are the explicitly chosen ones).
 *
 * @param custom - the object's custom settings for our namespace
 * @returns a map of role -> ioBroker state id
 */
export function collectManualStates(custom: Record<string, unknown>): Record<string, string> {
    const out: Record<string, string> = { ...((custom.states as Record<string, string> | undefined) || {}) };
    for (const [key, value] of Object.entries(custom)) {
        if (key.startsWith('state_') && typeof value === 'string' && value) {
            out[key.slice('state_'.length)] = value;
        }
    }
    return out;
}

/** One expert-configured attribute: an arbitrary HA attribute name fed from an ioBroker state. */
export interface CustomAttributeMapping {
    /** HA attribute name, may be a dotted path for nested attributes. */
    attribute: string;
    /** ioBroker state id the value is read from. */
    getId: string;
}

/**
 * Read the expert "custom attributes" table of a manual entity.
 *
 * The custom dialog stores the table rows as `customAttributes: [{ attribute, state }]`. Rows
 * without an attribute name or without a state are ignored (a half-filled new row in the table).
 *
 * @param custom - the object's custom settings for our namespace
 * @returns the configured attribute mappings
 */
export function collectCustomAttributes(custom: Record<string, unknown>): CustomAttributeMapping[] {
    const rows = custom.customAttributes;
    if (!Array.isArray(rows)) {
        return [];
    }
    const result: CustomAttributeMapping[] = [];
    for (const row of rows as Record<string, unknown>[]) {
        const attribute = typeof row?.attribute === 'string' ? row.attribute.trim() : '';
        const getId = typeof row?.state === 'string' ? row.state.trim() : '';
        if (attribute && getId) {
            result.push({ attribute, getId });
        }
    }
    return result;
}

/**
 * Apply the expert "custom attributes" table onto an already built manual entity.
 *
 * Runs after the converters, so a configured attribute wins over the one the converter created
 * (the user picked the state explicitly). Registering the state id routes its changes to this
 * entity, the generic attribute handling then keeps entity.attributes up to date.
 *
 * @param entity - the manual entity to extend
 * @param custom - the object's custom settings for our namespace
 */
export function applyCustomAttributes(entity: BaseEntity, custom: Record<string, unknown>): void {
    for (const mapping of collectCustomAttributes(custom)) {
        entity.context.ATTRIBUTES = entity.context.ATTRIBUTES ?? [];
        const existing = entity.context.ATTRIBUTES.find(attr => attr.attribute === mapping.attribute);
        if (existing) {
            existing.getId = mapping.getId;
            // The converter's parser belongs to the state it picked, not to this one.
            delete existing.getParser;
        } else {
            entity.context.ATTRIBUTES.push({ attribute: mapping.attribute, getId: mapping.getId });
        }
        entity.addID2entity(mapping.getId);
    }
}
