/**
 * The `common.states` of an ioBroker object, turned into a map.
 *
 * ioBroker takes three forms there: a map (`{"0": "off", "1": "on"}`), a list (`["off", "on"]`) and
 * - from the days before json was allowed in an object - a string of pairs
 * (`"0:off;1:on"`). The string form is still written by hand and still stored in plenty of
 * installations, so everything that reads `common.states` has to understand it.
 *
 * @param raw - the string as it stands in the object
 * @returns the pairs as a map; a value without a text maps to itself
 */
export function parseStatesString(raw: string): Record<string, string> {
    const states: Record<string, string> = {};
    for (const pair of raw.split(';')) {
        if (!pair.trim()) {
            continue;
        }
        const separator = pair.indexOf(':');
        const key = separator === -1 ? pair.trim() : pair.substring(0, separator).trim();
        const text = separator === -1 ? pair.trim() : pair.substring(separator + 1).trim();
        if (key) {
            states[key] = text || key;
        }
    }
    return states;
}

/**
 * `common.states` in the form the converters work with: a list stays a list, a string becomes the
 * map it describes, and a map is handed back as it is.
 *
 * @param raw - the states of the object
 * @param warn - called with the reason when the string form is met, to tell the user to fix it
 * @returns the states, or undefined when the object has none
 */
export function normalizeStates(
    raw: unknown,
    warn?: () => void,
): Record<string | number, string | number> | (string | number)[] | undefined {
    if (raw === undefined || raw === null || raw === '') {
        return undefined;
    }
    if (Array.isArray(raw)) {
        return raw as (string | number)[];
    }
    if (typeof raw === 'string') {
        warn?.();
        return parseStatesString(raw);
    }
    if (typeof raw === 'object') {
        return raw as Record<string | number, string | number>;
    }
    return undefined;
}
