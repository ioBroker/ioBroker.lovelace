import * as nunjucks from 'nunjucks';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton');

/**
 * Minimal Home Assistant Jinja2 template support.
 *
 * Home Assistant evaluates templates with a Jinja2 environment that exposes helpers like
 * `states()`, `is_state()`, `state_attr()` and `now()`. We render with nunjucks (Jinja2-compatible
 * syntax) and map those helpers onto our entity store (dataSingleton.entityId2Entity), plus the
 * area and device functions, which read the room an entity is in. That covers the common
 * Markdown-card / Mushroom / template-entity-row templates.
 *
 * It is still not a full HA template environment. Missing, among others: `now().strftime()` and the
 * other date arithmetic (`as_datetime`, `relative_time`, `timedelta`, the `timestamp_*` filters),
 * `min`/`max`/`average`, the `regex_*` filters, labels, floors and `integration_entities`. A
 * template that uses one of those renders to a `Template error: ...` text, the way a broken
 * template does, since Jinja aborts the whole template on an unknown function.
 */

interface EntityLike {
    entity_id: string;
    state: unknown;
    attributes?: Record<string, unknown>;
    context?: { room?: string | null; roomId?: string | null; deviceId?: string | null };
}

/**
 * Whether a string actually contains Jinja2 markers. Plain text and our ioBroker `{id}` bindings do
 * not, so the caller can keep using the binding path for those.
 *
 * @param template - the template string
 */
export function isJinjaTemplate(template: string): boolean {
    return typeof template === 'string' && (template.includes('{{') || template.includes('{%'));
}

/**
 * Look up an entity by entity_id in the live entity store.
 *
 * @param entityId - the HA entity id (e.g. 'sensor.temp')
 */
function getEntity(entityId: string): EntityLike | undefined {
    return adapterData.entityId2Entity[entityId] as EntityLike | undefined;
}

/**
 * Get an entity's state as a string (HA helpers are string-based). Unknown entities yield 'unknown'.
 *
 * @param entityId - the HA entity id
 */
function stateOf(entityId: string): string {
    const entity = getEntity(entityId);
    if (!entity || entity.state === undefined || entity.state === null) {
        return 'unknown';
    }
    const value = entity.state;
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        return String(value);
    }
    return JSON.stringify(value);
}

/**
 * `states` as HA exposes it: callable (`states('sensor.x')` -> state string) and indexable
 * (`states.sensor.x` -> a state object with `.state` / `.attributes`).
 */
function buildStatesAccessor(): unknown {
    const fn = (entityId: string): string => stateOf(entityId);
    return new Proxy(fn, {
        apply: (_target, _thisArg, args: unknown[]) => stateOf(String(args[0])),
        get: (target, domain) => {
            // Function members (apply/call/bind/name/length/…) must pass through, otherwise the
            // template engine cannot invoke `states(...)`. Only unknown string keys are HA domains.
            if (typeof domain !== 'string' || domain in target) {
                return Reflect.get(target, domain);
            }
            return new Proxy(
                {},
                {
                    get: (_t, object) => {
                        if (typeof object !== 'string') {
                            return undefined;
                        }
                        const entity = getEntity(`${domain}.${object}`);
                        return entity
                            ? { state: entity.state, attributes: entity.attributes || {}, entity_id: entity.entity_id }
                            : undefined;
                    },
                },
            );
        },
    });
}

/** All active entities, from the live store. */
function allEntities(): EntityLike[] {
    return (adapterData.entities || []) as EntityLike[];
}

/**
 * Resolve what Home Assistant calls an "area lookup": an entity_id, a device id, an area id or an
 * area name. Our areas are the ioBroker room enums an entity is assigned to, so we only know the
 * areas that have at least one entity in them.
 *
 * @param lookup - entity_id, device id, area id or area name
 * @returns the entity whose area is meant, or the matching area itself
 */
function resolveArea(lookup: unknown): { id: string | null; name: string | null } {
    const needle = typeof lookup === 'string' ? lookup : '';
    if (!needle) {
        return { id: null, name: null };
    }
    const entity = getEntity(needle) || allEntities().find(e => e.context?.deviceId === needle);
    if (entity) {
        return { id: entity.context?.roomId ?? null, name: entity.context?.room ?? null };
    }
    const inArea = allEntities().find(e => e.context?.roomId === needle || e.context?.room === needle);
    return inArea
        ? { id: inArea.context?.roomId ?? null, name: inArea.context?.room ?? null }
        : { id: null, name: null };
}

/**
 * Turn a value into a number the way Home Assistant's `float`/`int` do: anything unparsable
 * becomes the given default instead of raising.
 *
 * @param value - the value to convert
 * @param fallback - what to return when the value is not a number
 * @param asInt - cut off the decimals
 */
function toNumber(value: unknown, fallback: unknown, asInt: boolean): unknown {
    const text = typeof value === 'number' ? String(value) : typeof value === 'string' ? value.trim() : '';
    // Number('') is 0 and Number('7x') is NaN - both are "not a number" to Home Assistant.
    const num = text ? Number(text) : NaN;
    if (isNaN(num)) {
        return fallback === undefined ? 0 : fallback;
    }
    return asInt ? Math.trunc(num) : num;
}

let env: nunjucks.Environment | null = null;

/**
 * Build (once) the nunjucks environment with the HA template helpers wired to the live entity store.
 */
function getEnv(): nunjucks.Environment {
    if (env) {
        return env;
    }
    env = new nunjucks.Environment(null, { autoescape: false });
    env.addGlobal('states', buildStatesAccessor());
    env.addGlobal('is_state', (entityId: string, value: unknown) => stateOf(entityId) === String(value));
    env.addGlobal(
        'state_attr',
        (entityId: string, attribute: string) => getEntity(entityId)?.attributes?.[attribute] ?? null,
    );
    env.addGlobal(
        'is_state_attr',
        (entityId: string, attribute: string, value: unknown) =>
            String(getEntity(entityId)?.attributes?.[attribute]) === String(value),
    );
    env.addGlobal('has_value', (entityId: string) => {
        const s = stateOf(entityId);
        return s !== 'unknown' && s !== 'unavailable';
    });
    env.addGlobal('now', () => new Date());
    env.addGlobal('utcnow', () => new Date());

    // Areas and devices. Cards like template-entity-row and the Mushroom templates reach for these
    // as a matter of course; without them nunjucks aborts the whole template with
    // "Unable to call `area_name`".
    env.addGlobal('area_id', (lookup: unknown) => resolveArea(lookup).id);
    env.addGlobal('area_name', (lookup: unknown) => resolveArea(lookup).name);
    env.addGlobal('areas', () => [
        ...new Set(
            allEntities()
                .map(e => e.context?.roomId)
                .filter((id): id is string => !!id),
        ),
    ]);
    env.addGlobal('area_entities', (lookup: unknown) => {
        const area = resolveArea(lookup);
        return area.id
            ? allEntities()
                  .filter(e => e.context?.roomId === area.id)
                  .map(e => e.entity_id)
            : [];
    });
    env.addGlobal('device_id', (entityId: unknown) => getEntity(String(entityId))?.context?.deviceId ?? null);
    env.addGlobal('device_entities', (deviceId: unknown) =>
        allEntities()
            .filter(e => e.context?.deviceId === String(deviceId))
            .map(e => e.entity_id),
    );
    env.addGlobal('expand', (...args: unknown[]) =>
        args
            .flat()
            .map(id => getEntity(String(id)))
            .filter((e): e is EntityLike => !!e)
            .map(e => ({ entity_id: e.entity_id, state: e.state, attributes: e.attributes || {} })),
    );

    // Scalar helpers. Jinja2 has no ternary of its own, so HA templates lean on iif() and on
    // float()/int() to make a state string comparable.
    env.addGlobal('iif', (condition: unknown, ifTrue: unknown = true, ifFalse: unknown = false) =>
        condition ? ifTrue : ifFalse,
    );
    env.addGlobal('float', (value: unknown, fallback?: unknown) => toNumber(value, fallback, false));
    env.addGlobal('int', (value: unknown, fallback?: unknown) => toNumber(value, fallback, true));
    env.addGlobal('as_timestamp', (value: unknown, fallback?: unknown) => {
        const date = value instanceof Date ? value : new Date(String(value));
        return isNaN(date.getTime()) ? (fallback ?? null) : date.getTime() / 1000;
    });

    // `count` is a Jinja2 alias for `length`, which nunjucks does not ship.
    env.addFilter('count', (value: unknown) =>
        Array.isArray(value) || typeof value === 'string' ? value.length : Object.keys(value || {}).length,
    );
    return env;
}

/**
 * Render a Jinja2 template against the live entity store. Errors are returned as text (like HA's
 * templates page) instead of thrown, so a bad template can never crash the adapter.
 *
 * @param template - the Jinja2 template string
 * @param variables - variables the caller sent along with the template (the frontend and cards like
 *   template-entity-row pass `config`, `user`, `browser` and `hash` this way)
 */
export function renderJinja(template: string, variables?: Record<string, unknown> | null): string {
    try {
        return getEnv().renderString(template, variables ? { ...variables } : {});
    } catch (e) {
        return `Template error: ${(e as Error).message}`;
    }
}

/**
 * Extract the entity_ids a template references, so the caller can subscribe to the underlying
 * ioBroker states and re-render on change. Matches any token that is a known entity_id (covers the
 * quoted forms inside states()/is_state()/state_attr()).
 *
 * @param template - the Jinja2 template string
 */
export function extractEntityIds(template: string): string[] {
    const ids = new Set<string>();
    const re = /[a-z_][a-z0-9_]*\.[A-Za-z0-9_]+/g;
    let match: RegExpExecArray | null;
    while ((match = re.exec(template)) !== null) {
        if (adapterData.entityId2Entity[match[0]]) {
            ids.add(match[0]);
        }
    }
    return [...ids];
}
