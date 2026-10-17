import * as nunjucks from 'nunjucks';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton');

/**
 * Minimal Home Assistant Jinja2 template support.
 *
 * Home Assistant evaluates templates with a Jinja2 environment that exposes helpers like
 * `states()`, `is_state()`, `state_attr()` and `now().strftime()`. We render with nunjucks
 * (Jinja2-compatible syntax) and map those helpers onto our entity store
 * (dataSingleton.entityId2Entity), plus the area and device functions, which read the room an
 * entity is in, and the date helpers around a Python-like datetime. That covers the common
 * Markdown-card / Mushroom / template-entity-row templates.
 *
 * It is still not a full HA template environment. Missing, among others: `relative_time`,
 * `timedelta` and the rest of the date arithmetic, `min`/`max`/`average`, the `regex_*` filters,
 * labels, floors and `integration_entities`. A template that uses one of those renders to a
 * `Template error: ...` text, the way a broken template does, since Jinja aborts the whole
 * template on an unknown function.
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

const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * A point in time with the fields of a Python `datetime`, because that is what Home Assistant's
 * `now()` hands to a template: `now().hour`, `now().strftime('%H:%M')`, `now().timestamp()`.
 */
interface DateTimeLike {
    /** the JS date behind it, for our own helpers (as_timestamp, as_local, ...) */
    __date: Date;
    /** read the fields in UTC (utcnow) instead of in the adapter's local time (now) */
    __utc: boolean;
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    microsecond: number;
    strftime: (format: string) => string;
    timestamp: () => number;
    isoformat: () => string;
    weekday: () => number;
    isoweekday: () => number;
    date: () => string;
    time: () => string;
    toString: () => string;
}

/**
 * Whether a value is one of our datetime objects.
 *
 * @param value - the value to check
 */
function isDateTime(value: unknown): value is DateTimeLike {
    return !!value && typeof value === 'object' && (value as DateTimeLike).__date instanceof Date;
}

/**
 * Pad a number to a fixed width, the way every strftime code but the `%-` ones does.
 *
 * @param value - the number to pad
 * @param width - how many digits
 */
function pad(value: number, width = 2): string {
    return String(Math.abs(value)).padStart(width, '0');
}

/**
 * Format a date with the C/Python strftime codes Home Assistant templates use. Unknown codes are
 * left as they are (Python would raise); the names are English, as in a default HA install.
 *
 * @param date - the date to format
 * @param format - the strftime format string
 * @param utc - read the date's fields in UTC instead of local time
 */
function strftime(date: Date, format: string, utc: boolean): string {
    const year = utc ? date.getUTCFullYear() : date.getFullYear();
    const month = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
    const day = utc ? date.getUTCDate() : date.getDate();
    const hour = utc ? date.getUTCHours() : date.getHours();
    const minute = utc ? date.getUTCMinutes() : date.getMinutes();
    const second = utc ? date.getUTCSeconds() : date.getSeconds();
    const ms = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
    const weekday = utc ? date.getUTCDay() : date.getDay();
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    // Day of the year: days since January 1st in the same representation.
    const startOfYear = utc ? Date.UTC(year, 0, 1) : new Date(year, 0, 1).getTime();
    const startOfDay = utc ? Date.UTC(year, month - 1, day) : new Date(year, month - 1, day).getTime();
    const yearDay = Math.round((startOfDay - startOfYear) / 86400000) + 1;
    // Offset to UTC, in the +0200 form. getTimezoneOffset() counts the other way round.
    const offsetMinutes = utc ? 0 : -date.getTimezoneOffset();
    const offset = `${offsetMinutes < 0 ? '-' : '+'}${pad(Math.trunc(Math.abs(offsetMinutes) / 60))}${pad(
        Math.abs(offsetMinutes) % 60,
    )}`;

    const codes: Record<string, () => string> = {
        Y: () => String(year),
        y: () => pad(year % 100),
        C: () => pad(Math.trunc(year / 100)),
        m: () => pad(month),
        d: () => pad(day),
        e: () => String(day).padStart(2, ' '),
        H: () => pad(hour),
        I: () => pad(hour12),
        M: () => pad(minute),
        S: () => pad(second),
        f: () => pad(ms * 1000, 6),
        p: () => (hour < 12 ? 'AM' : 'PM'),
        A: () => DAY_NAMES[weekday],
        a: () => DAY_NAMES[weekday].slice(0, 3),
        B: () => MONTH_NAMES[month - 1],
        b: () => MONTH_NAMES[month - 1].slice(0, 3),
        h: () => MONTH_NAMES[month - 1].slice(0, 3),
        j: () => pad(yearDay, 3),
        w: () => String(weekday),
        u: () => String(weekday === 0 ? 7 : weekday),
        s: () => String(Math.floor(date.getTime() / 1000)),
        z: () => offset,
        Z: () => (utc ? 'UTC' : offset),
        D: () => `${pad(month)}/${pad(day)}/${pad(year % 100)}`,
        F: () => `${year}-${pad(month)}-${pad(day)}`,
        R: () => `${pad(hour)}:${pad(minute)}`,
        T: () => `${pad(hour)}:${pad(minute)}:${pad(second)}`,
        x: () => `${pad(month)}/${pad(day)}/${pad(year % 100)}`,
        X: () => `${pad(hour)}:${pad(minute)}:${pad(second)}`,
        c: () =>
            `${DAY_NAMES[weekday].slice(0, 3)} ${MONTH_NAMES[month - 1].slice(0, 3)} ${String(day).padStart(
                2,
                ' ',
            )} ${pad(hour)}:${pad(minute)}:${pad(second)} ${year}`,
        '%': () => '%',
    };

    return format.replace(/%(-?)([A-Za-z%])/g, (all, noPad: string, code: string) => {
        const render = codes[code];
        if (!render) {
            return all;
        }
        const text = render();
        // "%-d" / "%-H" are the glibc way of asking for the unpadded number.
        return noPad ? text.replace(/^[0 ]+(?=.)/, '') : text;
    });
}

/**
 * The offset to UTC in the +02:00 form Python's `isoformat()` and `str(datetime)` print.
 *
 * @param date - the date whose offset is meant
 * @param utc - a UTC datetime, which is always +00:00
 */
function isoOffset(date: Date, utc: boolean): string {
    if (utc) {
        return '+00:00';
    }
    const minutes = -date.getTimezoneOffset();
    return `${minutes < 0 ? '-' : '+'}${pad(Math.trunc(Math.abs(minutes) / 60))}:${pad(Math.abs(minutes) % 60)}`;
}

/**
 * Wrap a JS date in the Python-datetime shape templates expect.
 *
 * @param date - the date to wrap
 * @param utc - expose the fields in UTC (utcnow) instead of local time (now)
 */
function makeDateTime(date: Date, utc = false): DateTimeLike {
    const self: DateTimeLike = {
        __date: date,
        __utc: utc,
        year: utc ? date.getUTCFullYear() : date.getFullYear(),
        month: (utc ? date.getUTCMonth() : date.getMonth()) + 1,
        day: utc ? date.getUTCDate() : date.getDate(),
        hour: utc ? date.getUTCHours() : date.getHours(),
        minute: utc ? date.getUTCMinutes() : date.getMinutes(),
        second: utc ? date.getUTCSeconds() : date.getSeconds(),
        microsecond: (utc ? date.getUTCMilliseconds() : date.getMilliseconds()) * 1000,
        strftime: (format: string) => strftime(date, typeof format === 'string' ? format : '', utc),
        timestamp: () => date.getTime() / 1000,
        isoformat: () => `${strftime(date, '%Y-%m-%dT%H:%M:%S', utc)}${isoOffset(date, utc)}`,
        weekday: () => ((utc ? date.getUTCDay() : date.getDay()) + 6) % 7, // Python: Monday is 0
        isoweekday: () => (utc ? date.getUTCDay() : date.getDay()) || 7,
        date: () => strftime(date, '%Y-%m-%d', utc),
        time: () => strftime(date, '%H:%M:%S', utc),
        // Printing a datetime in Python gives "2026-10-17 20:15:00+02:00", and a template that
        // renders now() without a format expects exactly that, not a JS date string.
        toString: () => `${strftime(date, '%Y-%m-%d %H:%M:%S', utc)}${isoOffset(date, utc)}`,
    };
    return self;
}

/**
 * Read a date out of whatever a template passes along: one of our datetimes, a JS date, a unix
 * timestamp (seconds, as `as_timestamp` returns them) or a parsable date string.
 *
 * @param value - the value to interpret
 */
function toDate(value: unknown): Date | null {
    if (isDateTime(value)) {
        return value.__date;
    }
    if (value instanceof Date) {
        return isNaN(value.getTime()) ? null : value;
    }
    if (typeof value === 'number') {
        return isNaN(value) ? null : new Date(value * 1000);
    }
    if (typeof value === 'string' && value.trim()) {
        const text = value.trim();
        // A bare number in a string is a unix timestamp, too (states are strings for us).
        const date = String(Number(text)) === text ? new Date(Number(text) * 1000) : new Date(text);
        return isNaN(date.getTime()) ? null : date;
    }
    return null;
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
    // Dates. HA hands a template a Python datetime, so `now().strftime('%H:%M')`, `now().hour` and
    // a bare `now()` all have to work.
    env.addGlobal('now', () => makeDateTime(new Date()));
    env.addGlobal('utcnow', () => makeDateTime(new Date(), true));
    env.addGlobal('today_at', (time: unknown) => {
        const text = typeof time === 'string' && time.trim() ? time.trim() : '00:00:00';
        const [h, m, sec] = text.split(':');
        const date = new Date();
        date.setHours(Number(h) || 0, Number(m) || 0, Number(sec) || 0, 0);
        return makeDateTime(date);
    });

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
        const date = toDate(value);
        return date ? date.getTime() / 1000 : (fallback ?? null);
    });
    env.addGlobal('as_datetime', (value: unknown, fallback?: unknown) => {
        const date = toDate(value);
        return date ? makeDateTime(date) : (fallback ?? null);
    });
    env.addGlobal('as_local', (value: unknown) => {
        const date = toDate(value);
        return date ? makeDateTime(date) : null;
    });

    // `count` is a Jinja2 alias for `length`, which nunjucks does not ship.
    env.addFilter('count', (value: unknown) =>
        Array.isArray(value) || typeof value === 'string' ? value.length : Object.keys(value || {}).length,
    );

    // The date helpers are filters as well in HA ({{ states('sensor.x') | as_datetime }}), and the
    // timestamp_* filters are strftime for a unix timestamp.
    env.addFilter('as_datetime', (value: unknown, fallback?: unknown) => {
        const date = toDate(value);
        return date ? makeDateTime(date) : (fallback ?? null);
    });
    env.addFilter('as_timestamp', (value: unknown, fallback?: unknown) => {
        const date = toDate(value);
        return date ? date.getTime() / 1000 : (fallback ?? null);
    });
    env.addFilter('as_local', (value: unknown) => {
        const date = toDate(value);
        return date ? makeDateTime(date) : null;
    });
    env.addFilter('timestamp_custom', (value: unknown, format?: unknown, local?: unknown, fallback?: unknown) => {
        const date = toDate(value);
        if (!date) {
            return fallback ?? null;
        }
        return strftime(date, typeof format === 'string' ? format : '%Y-%m-%dT%H:%M:%S', local === false);
    });
    env.addFilter('timestamp_local', (value: unknown, fallback?: unknown) => {
        const date = toDate(value);
        return date ? `${strftime(date, '%Y-%m-%dT%H:%M:%S', false)}${isoOffset(date, false)}` : (fallback ?? null);
    });
    env.addFilter('timestamp_utc', (value: unknown, fallback?: unknown) => {
        const date = toDate(value);
        return date ? strftime(date, '%Y-%m-%dT%H:%M:%S+00:00', true) : (fallback ?? null);
    });
    env.addFilter('strftime', (value: unknown, format?: unknown) => {
        const date = toDate(value);
        return date ? strftime(date, typeof format === 'string' ? format : '%Y-%m-%dT%H:%M:%S', false) : null;
    });
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
