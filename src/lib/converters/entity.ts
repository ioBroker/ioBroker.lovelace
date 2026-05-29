/**
 * Backward-compat re-export shim. The Entity class and supporting types now live
 * under src/lib/entities/baseEntity.ts as `BaseEntity`. This file keeps the older
 * `Entity` export working for files that still import from './entity'.
 */
export type {
    EntityState,
    EntityAttribute,
    EntityCommand,
    InputDateTimeCapabilities,
    ServiceCallData,
    ServiceCallTarget,
} from '../entities/baseEntity';
export { BaseEntity, BaseEntity as Entity, processCommon } from '../entities/baseEntity';
