import * as nunjucks from 'nunjucks';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton');

/**
 * Minimal Home Assistant Jinja2 template support.
 *
 * Home Assistant evaluates templates with a Jinja2 environment that exposes helpers like
 * `states()`, `is_state()`, `state_attr()` and `now()`. We render with nunjucks (Jinja2-compatible
 * syntax) and map those helpers onto our entity store (dataSingleton.entityId2Entity). This covers
 * the common Markdown-card / Mushroom-style templates; it is NOT a full HA template environment
 * (no entity registry helpers, no `expand`, no HA-specific filters).
 */

interface EntityLike {
    entity_id: string;
    state: unknown;
    attributes?: Record<string, unknown>;
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
    return env;
}

/**
 * Render a Jinja2 template against the live entity store. Errors are returned as text (like HA's
 * templates page) instead of thrown, so a bad template can never crash the adapter.
 *
 * @param template - the Jinja2 template string
 */
export function renderJinja(template: string): string {
    try {
        return getEnv().renderString(template, {});
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
