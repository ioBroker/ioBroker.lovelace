/**
 * Global concurrency gate for `getHistory` requests to the history adapter.
 *
 * ioBroker transfers an oversized sendTo reply through the states database (the payload is stored
 * in a state and the receiver reads it back with a GET). A `getHistory` reply can therefore push a
 * large amount of data through the states DB. Pagination caps the size of a single reply, but the
 * total amount of data pending in the states-DB (redis) output buffer is
 * `concurrent requests × reply size`. A misbehaving / reconnecting frontend that fires many history
 * requests at once (history graphs, logbook over many entities, statistics) can pile up enough
 * concurrent replies to overflow the redis client-output-buffer-limit, which makes redis close the
 * adapter's states connection ("write ECONNRESET"). This gate bounds the number of in-flight
 * `getHistory` requests so the buffer can never grow that large, regardless of client behaviour.
 *
 * The state is module-level on purpose: it is shared across all callers (history, logbook,
 * statistics) and even across adapter instances in compact mode, which all talk to the same states
 * DB - a single global cap is exactly what protects that shared connection.
 */

interface SendToAdapter {
    sendToAsync(instanceName: string, command: string, message: unknown): Promise<unknown>;
}

/**
 * Default cap on the number of points a single getHistory request may return when the instance has
 * no historyMaxCount configured (e.g. an upgraded instance where the io-package default never got
 * applied). An unbounded request returns the whole range, which on a long window / busy state can be
 * hundreds of MB - transferred through the states DB it overflows the redis output buffer and drops
 * the connection. Always bound it.
 */
export const DEFAULT_HISTORY_MAX_COUNT = 2000;

/** Hard upper bound so even an explicitly huge historyMaxCount cannot produce an oversized reply. */
export const HARD_HISTORY_MAX_COUNT = 50000;

/**
 * Bound a configured historyMaxCount into a safe range. Unset / non-positive -> the default; an
 * explicit value is capped at the hard maximum.
 *
 * @param configured - the instance's configured historyMaxCount (may be undefined)
 * @returns a positive, capped point count
 */
export function boundHistoryCount(configured: number | undefined): number {
    if (!configured || configured < 1) {
        return DEFAULT_HISTORY_MAX_COUNT;
    }
    return Math.min(configured, HARD_HISTORY_MAX_COUNT);
}

const MAX_CONCURRENT = 3;
let active = 0;
const queue: (() => void)[] = [];

function acquire(): Promise<void> {
    if (active < MAX_CONCURRENT) {
        active++;
        return Promise.resolve();
    }
    return new Promise<void>(resolve => queue.push(resolve));
}

function release(): void {
    const next = queue.shift();
    if (next) {
        // hand the slot straight to the next waiter (active stays the same).
        next();
    } else {
        active--;
    }
}

/**
 * Run a `getHistory` sendTo through the global concurrency gate.
 *
 * @param adapter - adapter (needs sendToAsync)
 * @param instance - history adapter instance id (e.g. `history.0`)
 * @param message - the getHistory message (`{ id, options }`)
 * @returns the history adapter reply
 */
export async function getHistoryGated(adapter: SendToAdapter, instance: string, message: unknown): Promise<unknown> {
    await acquire();
    try {
        return await adapter.sendToAsync(instance, 'getHistory', message);
    } finally {
        release();
    }
}
