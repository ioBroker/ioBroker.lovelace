import { Types, type PatternControl } from '@iobroker/type-detector';
import Converter, { type ConverterParameters } from './converter';
import type { BaseEntity } from '../entities/baseEntity';
import { collectManualStates } from './manualStates';

/**
 * Manual entity types that are built by synthesizing a type-detector PatternControl from the picked
 * states and running the registered converter, instead of a bespoke processManualEntity. This reuses
 * the full converter logic (e.g. cover position/tilt + open/close/stop commands).
 *
 * Maps the HA domain (custom.entity) to the `Types.*` the converter is registered under.
 */
export const SYNTHETIC_CONTROL_TYPES: Record<string, Types> = {
    cover: Types.blind,
    lock: Types.lock,
    media_player: Types.media,
};

/**
 * Apply assumed_state and attr_* attributes onto a converted entity, mirroring what
 * _processManualEntity does for the bespoke converters (whose pre-built entity already carried them).
 *
 * @param entity - the converted main entity
 * @param custom - the object's custom settings for our namespace
 * @param entityType - the HA domain
 */
function applyManualAttributes(entity: BaseEntity, custom: Record<string, unknown>, entityType: string): void {
    if (
        custom.attr_assumed_state &&
        ['switch', 'light', 'cover', 'climate', 'fan', 'humidifier', 'group', 'water_heater'].includes(entityType)
    ) {
        entity.attributes.assumed_state = true;
    }
    for (const key of Object.keys(custom)) {
        if (key.startsWith('attr_')) {
            entity.attributes[key.substring('attr_'.length)] = custom[key];
        }
    }
}

/**
 * Role->id map of the states a synthetic-bridge manual entity references, so the caller can pre-load
 * their objects. Returns null when the type is not built via the synthetic-control bridge.
 *
 * @param entityType - the HA domain (custom.entity)
 * @param custom - the object's custom settings for our namespace
 */
export function syntheticControlStates(
    entityType: string,
    custom: Record<string, unknown>,
): Record<string, string> | null {
    if (SYNTHETIC_CONTROL_TYPES[entityType] === undefined) {
        return null;
    }
    return collectManualStates(custom);
}

/** Options for {@link buildManualViaConverter}. */
export interface SyntheticBridgeParams {
    /** HA domain (custom.entity), e.g. 'cover'. */
    entityType: string;
    /** ioBroker id of the main (custom-configured) object. */
    id: string;
    /** The object's custom settings for our namespace. */
    custom: Record<string, unknown>;
    /** ioBroker objects cache (must already contain the referenced state objects). */
    objects: Record<string, ioBroker.Object>;
    /** ioBroker adapter instance. */
    adapter: ioBroker.Adapter;
    /** Entity registry (for the converter's reserved-id lookups). */
    entityRegistry: ConverterParameters['entityRegistry'];
    /** Predetermined entity_id (the manual entity's id from custom.name). */
    forcedEntityId?: string;
}

/**
 * Build a manual entity by synthesizing a type-detector PatternControl from the picked states and
 * running the registered converter. Objects for the referenced state ids must already be in
 * `objects` (the converter reads e.g. min/max from them).
 *
 * @param params - bridge parameters
 * @returns the converted entities (marked isManual), or [] when the type is not bridged
 */
export function buildManualViaConverter(params: SyntheticBridgeParams): BaseEntity[] {
    const { entityType, id, custom, objects, adapter, entityRegistry, forcedEntityId } = params;
    const type = SYNTHETIC_CONTROL_TYPES[entityType];
    const ConverterClass = type !== undefined ? Converter.converters[type] : undefined;
    if (!ConverterClass) {
        return [];
    }

    const stateMap = collectManualStates(custom);
    // type-detector states carry more fields, but the entity builders only read id + name; the rest
    // is read from the referenced objects. Build the minimal shape and cast.
    const states = Object.entries(stateMap)
        .filter(([, sid]) => sid)
        .map(([name, sid]) => ({ id: sid, name }));
    const controls = { type, states } as unknown as PatternControl;

    const convParams: ConverterParameters = {
        id,
        controls,
        objects,
        existingEntities: [],
        adapter,
        entityRegistry,
        forcedEntityId,
    };
    const entities = ConverterClass.convertEntities(convParams);
    if (entities[0]) {
        applyManualAttributes(entities[0], custom, entityType);
    }
    for (const entity of entities) {
        entity.isManual = true;
    }
    return entities;
}
