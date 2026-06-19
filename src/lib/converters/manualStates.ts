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
