import { renderJinja, extractEntityIds } from './jinja';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    entityId2Entity: Record<string, EntityLike | undefined>;
};

/** What this module needs of an entity: the frontend state and its attributes. */
interface EntityLike {
    entity_id: string;
    state: string | number | boolean | null | undefined;
    attributes?: Record<string, unknown>;
    /** epoch seconds of the last state change (used by `for`) */
    last_changed?: number;
}

/** A condition as the frontend sends it - a Home Assistant automation condition. */
export type Condition = Record<string, any>;

/** Thrown for a condition Home Assistant knows and we do not, so the client sees why. */
export class UnsupportedConditionError extends Error {}

/** Condition types that are evaluated in the browser and never reach us. */
const CLIENT_CONDITIONS = ['screen', 'user', 'view_columns', 'location', 'time'];

/** What Home Assistant's `result_as_boolean` takes for true. */
const TRUTHY = ['true', 'yes', 'on', 'enable', '1'];

/**
 * Wrap a single value into an array, like Home Assistant's config validation does for the
 * fields that accept one value or a list (`entity_id`, `state`, `conditions`).
 *
 * @param value - one value, a list of values, or nothing
 */
export function asArray<T>(value: T | T[] | null | undefined): T[] {
    if (value === undefined || value === null) {
        return [];
    }
    return Array.isArray(value) ? value : [value];
}

/**
 * The entity the condition talks about, or undefined when we do not have it.
 *
 * @param entityId - Home Assistant entity id
 */
function entityOf(entityId: unknown): EntityLike | undefined {
    return typeof entityId === 'string' ? adapterData.entityId2Entity[entityId] : undefined;
}

/**
 * The value a condition compares: the state, or the attribute when one is named.
 *
 * @param entity - the entity to read
 * @param attribute - name of the attribute, or undefined for the state
 */
function valueOf(entity: EntityLike, attribute: unknown): unknown {
    return typeof attribute === 'string' ? entity.attributes?.[attribute] : entity.state;
}

/**
 * The text of a value, for values that have one. An object or array has none, so it only ever
 * matches itself.
 *
 * @param value - the value to stringify
 */
function asText(value: unknown): string | undefined {
    switch (typeof value) {
        case 'string':
            return value;
        case 'number':
        case 'boolean':
        case 'bigint':
            return value.toString();
        default:
            return undefined;
    }
}

/**
 * Compare a state or attribute value with what the condition wants. Home Assistant compares the
 * state as a string, and an attribute by value, so a number 23 matches the string "23" either way.
 *
 * @param value - the current value
 * @param wanted - the value the condition asks for
 */
function sameValue(value: unknown, wanted: unknown): boolean {
    if (value === wanted) {
        return true;
    }
    const left = asText(value);
    const right = asText(wanted);
    return left !== undefined && left === right;
}

/**
 * Milliseconds of a `for:` entry, which is a number of seconds, "HH:MM:SS" or
 * `{ hours, minutes, seconds }`.
 *
 * @param duration - the `for` value of the condition
 */
function durationToMs(duration: unknown): number {
    if (duration === undefined || duration === null) {
        return 0;
    }
    if (typeof duration === 'number') {
        return duration * 1000;
    }
    if (typeof duration === 'string') {
        const parts = duration.split(':').map(p => Number(p));
        if (parts.some(p => isNaN(p))) {
            return 0;
        }
        const [hours = 0, minutes = 0, seconds = 0] = parts;
        return ((hours * 60 + minutes) * 60 + seconds) * 1000;
    }
    if (typeof duration === 'object') {
        const d = duration as Record<string, unknown>;
        const num = (key: string): number => Number(d[key]) || 0;
        return (
            ((num('hours') * 60 + num('minutes')) * 60 + num('seconds')) * 1000 +
            num('days') * 86400000 +
            num('milliseconds')
        );
    }
    return 0;
}

/**
 * A number the condition compares against: a plain number, a numeric string, or the state of
 * another entity (Home Assistant allows an entity id as a bound).
 *
 * @param bound - the `above` or `below` value of the condition
 */
function boundToNumber(bound: unknown): number | undefined {
    if (bound === undefined || bound === null) {
        return undefined;
    }
    const direct = Number(bound);
    if (!isNaN(direct)) {
        return direct;
    }
    const entity = entityOf(bound);
    const indirect = entity ? Number(entity.state) : NaN;
    return isNaN(indirect) ? undefined : indirect;
}

/** Context of one evaluation: `for` needs to come back later, templates may fail. */
export interface EvaluationContext {
    /** Ask for another evaluation in `delay` ms (a `for` that has not elapsed yet). */
    schedule?: (delay: number) => void;
}

/**
 * Evaluate a `state` condition: every (or, with `match: any`, one) entity holds one of the wanted
 * values. With `for` the value must have been there for that long, which is checked against the
 * entity's last change and re-checked by a timer.
 *
 * @param condition - the state condition
 * @param context - evaluation context
 */
function evaluateState(condition: Condition, context: EvaluationContext): boolean {
    const entityIds = asArray(condition.entity_id);
    const wanted = asArray(condition.state);
    if (!entityIds.length || !wanted.length) {
        return false;
    }
    const forMs = durationToMs(condition.for);
    const results = entityIds.map(entityId => {
        const entity = entityOf(entityId);
        if (!entity) {
            return false;
        }
        const value = valueOf(entity, condition.attribute);
        if (!wanted.some(want => sameValue(value, want))) {
            return false;
        }
        if (!forMs) {
            return true;
        }
        const elapsed = Date.now() - (entity.last_changed || 0) * 1000;
        if (elapsed >= forMs) {
            return true;
        }
        // Not long enough yet - come back when it would be.
        context.schedule?.(forMs - elapsed + 100);
        return false;
    });
    return condition.match === 'any' ? results.some(Boolean) : results.every(Boolean);
}

/**
 * Evaluate a `numeric_state` condition: the value (state, attribute, or a template of it) is
 * above and/or below the given bounds, which may themselves be entity ids.
 *
 * @param condition - the numeric_state condition
 */
function evaluateNumericState(condition: Condition): boolean {
    const entityIds = asArray(condition.entity_id);
    if (!entityIds.length) {
        return false;
    }
    const above = boundToNumber(condition.above);
    const below = boundToNumber(condition.below);
    const results = entityIds.map(entityId => {
        const entity = entityOf(entityId);
        if (!entity) {
            return false;
        }
        let value = valueOf(entity, condition.attribute);
        if (typeof condition.value_template === 'string') {
            value = renderJinja(condition.value_template, { state: entity.state, value });
        }
        const num = Number(value);
        if (value === '' || value === null || isNaN(num)) {
            return false;
        }
        if (above !== undefined && !(num > above)) {
            return false;
        }
        if (below !== undefined && !(num < below)) {
            return false;
        }
        // Lovelace only checks that the value is a number when no bound is given.
        return true;
    });
    return condition.match === 'any' ? results.some(Boolean) : results.every(Boolean);
}

/**
 * Evaluate a `template` condition through the Jinja2 emulation, with Home Assistant's idea of a
 * truthy result.
 *
 * @param condition - the template condition
 */
function evaluateTemplate(condition: Condition): boolean {
    if (typeof condition.value_template !== 'string') {
        return false;
    }
    const rendered = renderJinja(condition.value_template, null).trim();
    if (TRUTHY.includes(rendered.toLowerCase())) {
        return true;
    }
    const num = Number(rendered);
    return !isNaN(num) && num !== 0;
}

/**
 * Children of a logical condition, without the ones the user disabled (core skips those).
 *
 * @param condition - the and/or/not condition
 */
function logicalChildren(condition: Condition): Condition[] {
    return asArray<Condition>(condition.conditions).filter(child => child && child.enabled !== false);
}

/**
 * Evaluate one condition of a Home Assistant condition tree.
 *
 * @param condition - the condition to evaluate
 * @param context - evaluation context
 * @throws {UnsupportedConditionError} for a condition type we cannot evaluate
 */
export function evaluateCondition(condition: unknown, context: EvaluationContext = {}): boolean {
    if (!condition || typeof condition !== 'object') {
        throw new UnsupportedConditionError('condition is not an object');
    }
    const cond = condition as Condition;
    // `{ entity, state }` without a type is the old lovelace shape; newer frontends translate it.
    const type = typeof cond.condition === 'string' ? cond.condition : 'state';

    switch (type) {
        case 'and':
            return logicalChildren(cond).every(child => evaluateCondition(child, context));
        case 'or':
            return logicalChildren(cond).some(child => evaluateCondition(child, context));
        case 'not':
            // Home Assistant's `not` is true when none of its conditions is true.
            return !logicalChildren(cond).some(child => evaluateCondition(child, context));
        case 'state':
            return evaluateState(cond, context);
        case 'numeric_state':
            return evaluateNumericState(cond);
        case 'template':
            return evaluateTemplate(cond);
        default:
            throw new UnsupportedConditionError(
                CLIENT_CONDITIONS.includes(type)
                    ? `condition ${type} is evaluated in the browser and should not be sent here`
                    : `condition ${type} is not supported by ioBroker.lovelace`,
            );
    }
}

/**
 * All entity ids a condition tree reads, so a state change of one of them can trigger a new
 * evaluation.
 *
 * @param condition - the condition tree
 */
export function collectEntityIds(condition: unknown): string[] {
    const ids = new Set<string>();
    const walk = (node: unknown): void => {
        if (!node || typeof node !== 'object') {
            return;
        }
        const cond = node as Condition;
        for (const entityId of asArray(cond.entity_id)) {
            if (typeof entityId === 'string') {
                ids.add(entityId);
            }
        }
        // The lovelace shape uses `entity`, and a bound may name an entity instead of a number.
        for (const candidate of [cond.entity, cond.above, cond.below]) {
            if (typeof candidate === 'string' && adapterData.entityId2Entity[candidate]) {
                ids.add(candidate);
            }
        }
        if (typeof cond.value_template === 'string') {
            for (const entityId of extractEntityIds(cond.value_template)) {
                ids.add(entityId);
            }
        }
        for (const child of asArray<Condition>(cond.conditions)) {
            walk(child);
        }
    };
    walk(condition);
    return [...ids];
}
