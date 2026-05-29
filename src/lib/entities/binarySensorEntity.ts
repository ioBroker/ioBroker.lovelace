import { BaseEntity } from './baseEntity';
import type { ConverterParameters } from '../converters/converter';

/**
 * Configuration for constructing a BinarySensorEntity.
 *
 * Either `stateName` (looked up against params.controls.states) or `stateId` (a direct
 * ioBroker id) can be provided as the source of the entity's main state.
 */
export interface BinarySensorOptions {
    /**
     * Name of the state in `params.controls.states` to use as the main readable state.
     * Mutually exclusive with `stateId`. Defaults to 'ACTUAL' for the four primary
     * binary-sensor types (motion / door / window / smoke).
     */
    stateName?: string;
    /** Direct ioBroker state id to use as the main readable state, bypassing controls.states. */
    stateId?: string;
    /** Lovelace device_class. */
    deviceClass?: string;
    /** Lovelace mdi icon. */
    icon?: string;
    /** ioBroker type tag stored in context.iobType (used by indicators: 'LOWBAT', 'OFFLINE', etc.). */
    iobType?: string;
    /**
     * Convert the ioBroker value via boolean inversion (offline state → connectivity 'on').
     * Used by the unreach / offline indicator.
     */
    inverted?: boolean;
    /** ioBroker state object to base processCommon on (instead of params.objects[params.id]). */
    sourceObj?: ioBroker.Object;
}

/**
 * BinarySensorEntity — single class for every Home Assistant binary_sensor.
 *
 * Covers the type-detector binary-sensor types (motion / door / window / fireAlarm)
 * plus the indicator entities (battery, connectivity, error, maintenance, working)
 * since they all share the same on/off state plus a device_class.
 */
export class BinarySensorEntity extends BaseEntity {
    /**
     * @param params - converter parameters
     * @param opts - optional device-class and source-object overrides
     */
    constructor(params: ConverterParameters, opts: BinarySensorOptions = {}) {
        const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
        const obj = opts.sourceObj ?? objects[id];
        super(friendlyName, room, func, obj, 'binary_sensor', forcedEntityId);

        // Reset STATE.getId to '' so the legacy "state not found" tests still see ''.
        this.context.STATE.getId = '';

        if (opts.stateId) {
            this.context.STATE.getId = opts.stateId;
            this.addID2entity(opts.stateId);
        } else {
            const stateName = opts.stateName ?? 'ACTUAL';
            const state = controls?.states.find(s => s.id && s.name === stateName);
            if (state?.id) {
                this.context.STATE.getId = state.id;
                this.addID2entity(state.id);
            }
        }

        if (opts.deviceClass) {
            this.attributes.device_class = opts.deviceClass;
        }
        if (opts.icon) {
            this.attributes.icon = opts.icon;
        }
        if (opts.iobType) {
            this.context.iobType = opts.iobType;
        }
        if (opts.inverted) {
            this.applyOfflineInversion();
        }
    }

    /**
     * Make this binary_sensor invert its raw state — for an UNREACH/OFFLINE-style ioBroker
     * indicator that should be presented to HA as a `connectivity` sensor (online = on).
     */
    applyOfflineInversion(): void {
        this.attributes.device_class = 'connectivity';
        this.context.STATE.getParser = (entity, _attr, state): void => {
            entity.state = state?.val ? 'off' : 'on';
        };
        this.context.STATE.historyParser = (_iobId: string, val: ioBroker.StateValue): string => {
            return val ? 'off' : 'on';
        };
    }
}
