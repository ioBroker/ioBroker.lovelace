import { getHistoryGated } from '../historyGate';

const WS_OPEN = 1; // WebSocket.OPEN
/** version of the iobroker/* protocol, answered on iobroker/info */
const IOBROKER_PROTOCOL_VERSION = 1;

type SendResponseFn = (ws: unknown, id: unknown, result?: unknown) => void;

/** One iobroker/subscribe_states subscription of a connection. */
interface StateSubscription {
    id: unknown;
    ids: Set<string>;
}

/** What this module needs of a websocket connection. */
interface WsIob {
    send(data: string): void;
    readyState?: number;
    __auth?: { username?: string } | null;
    __iobSubscriptions?: StateSubscription[] | null;
}

interface WsServerLike {
    clients: Iterable<WsIob>;
}

/** Permission error with a code the frontend can tell apart. */
class IobError extends Error {
    constructor(
        public code: string,
        message: string,
    ) {
        super(message);
    }
}

/**
 * Gives cards access to ioBroker itself over the connection the frontend already has: `iobroker/*`
 * messages to read, write and subscribe states, read objects and files, call `sendTo` and read the
 * history. Every call runs with the rights of the logged-in user (the default user without
 * authentication), like the entity service calls.
 *
 * It lets web components of ioBroker adapters (`@iobroker/web-components`, used by vis-2 and others)
 * run as Lovelace cards without a second connection to the web adapter - so without another port, a
 * second login, mixed http/https or CORS.
 */
class IoBrokerModule {
    private adapter: ioBroker.Adapter;
    private sendResponse: SendResponseFn;
    private getUserIDFromName: (name: string | undefined) => string;
    private subscribeState: (id: string) => void;

    constructor(options: {
        adapter: ioBroker.Adapter;
        sendResponse: SendResponseFn;
        getUserIDFromName: (name: string | undefined) => string;
        subscribeState: (id: string) => void;
    }) {
        this.adapter = options.adapter;
        this.sendResponse = options.sendResponse;
        this.getUserIDFromName = options.getUserIDFromName;
        this.subscribeState = options.subscribeState;
    }

    /**
     * Drop every subscription of a connection. Call when a websocket closes.
     *
     * @param ws - websocket connection
     */
    clearWs(ws: WsIob): void {
        ws.__iobSubscriptions = null;
    }

    /**
     * Remove a single subscription (used by unsubscribe_events).
     *
     * @param ws - websocket connection
     * @param subscriptionId - the subscription id to remove
     */
    removeSubscription(ws: WsIob, subscriptionId: unknown): void {
        if (ws.__iobSubscriptions) {
            ws.__iobSubscriptions = ws.__iobSubscriptions.filter(s => s.id !== subscriptionId);
        }
    }

    /**
     * Whether a client subscribed this state - needed when the adapter subscribes all states.
     *
     * @param id - ioBroker state id
     * @param wss - the websocket server
     */
    referencesState(id: string, wss: WsServerLike | null | undefined): boolean {
        if (!wss) {
            return false;
        }
        for (const client of wss.clients) {
            if (client.__iobSubscriptions?.some(s => s.ids.has(id))) {
                return true;
            }
        }
        return false;
    }

    /**
     * All state ids the clients subscribed, for the subscription bookkeeping of the server.
     *
     * @param wss - the websocket server
     */
    collectSubscribedIds(wss: WsServerLike | null | undefined): string[] {
        const ids = new Set<string>();
        if (wss) {
            for (const client of wss.clients) {
                for (const s of client.__iobSubscriptions || []) {
                    s.ids.forEach(id => ids.add(id));
                }
            }
        }
        return [...ids];
    }

    /**
     * Push a state change to every connection that subscribed it.
     *
     * @param id - ioBroker state id
     * @param state - new state
     * @param wss - the websocket server
     */
    onStateChange(id: string, state: ioBroker.State | null | undefined, wss?: unknown): void {
        const server = wss as WsServerLike | null | undefined;
        if (!server) {
            return;
        }
        for (const ws of server.clients) {
            if (!ws.__iobSubscriptions || (ws.readyState !== undefined && ws.readyState !== WS_OPEN)) {
                continue;
            }
            for (const s of ws.__iobSubscriptions) {
                if (s.ids.has(id)) {
                    ws.send(JSON.stringify({ id: s.id, type: 'event', event: { id, state: state ?? null } }));
                }
            }
        }
    }

    /**
     * Handle the iobroker/* messages.
     *
     * @param ws - websocket connection
     * @param message - the incoming message
     * @returns true when the message was ours
     */
    async processMessage(ws: WsIob, message: Record<string, unknown>): Promise<boolean> {
        const type = typeof message.type === 'string' ? message.type : '';
        if (!type.startsWith('iobroker/')) {
            return false;
        }
        const user = this.getUserIDFromName(ws.__auth?.username);
        try {
            const result = await this._handle(ws, type, message, user);
            this.sendResponse(ws, message.id, result);
        } catch (e) {
            this.adapter.log.debug(`${type} for ${user} failed: ${String(e)}`);
            ws.send(
                JSON.stringify({
                    id: message.id,
                    type: 'result',
                    success: false,
                    error: {
                        code: e instanceof IobError ? e.code : 'iobroker_error',
                        message: e instanceof Error ? e.message : String(e),
                    },
                }),
            );
        }
        return true;
    }

    private async _handle(ws: WsIob, type: string, m: Record<string, unknown>, user: string): Promise<unknown> {
        const options = { user };
        switch (type) {
            case 'iobroker/info':
                return { version: IOBROKER_PROTOCOL_VERSION, systemLang: await this._systemLang() };

            case 'iobroker/get_state':
                return (await this.adapter.getForeignStateAsync(this._id(m.state_id), options)) ?? null;

            case 'iobroker/set_state': {
                const state = m.state as ioBroker.SettableState | ioBroker.StateValue;
                const settable =
                    state !== null && typeof state === 'object' && 'val' in state
                        ? state
                        : { val: state as ioBroker.StateValue, ack: false };
                await this.adapter.setForeignStateAsync(this._id(m.state_id), settable, options);
                return null;
            }

            case 'iobroker/subscribe_states': {
                const ids = (Array.isArray(m.state_ids) ? m.state_ids : [m.state_ids]).map(id => this._id(id));
                // read once with the rights of the user - a state he may not read is not subscribed
                for (const id of ids) {
                    await this.adapter.getForeignStateAsync(id, options);
                }
                ws.__iobSubscriptions = ws.__iobSubscriptions || [];
                ws.__iobSubscriptions.push({ id: m.id, ids: new Set(ids) });
                ids.forEach(id => this.subscribeState(id));
                return null;
            }

            case 'iobroker/get_object':
                return (await this.adapter.getForeignObjectAsync(this._id(m.object_id), options)) ?? null;

            case 'iobroker/get_object_view': {
                const objType = typeof m.object_type === 'string' ? m.object_type : 'state';
                const res = await this.adapter.getObjectViewAsync(
                    'system',
                    objType as 'state',
                    {
                        startkey: typeof m.start === 'string' ? m.start : '',
                        endkey: typeof m.end === 'string' ? m.end : '香',
                    },
                    options,
                );
                const out: Record<string, unknown> = {};
                for (const row of res?.rows || []) {
                    out[row.id] = row.value;
                }
                return out;
            }

            case 'iobroker/send_to': {
                const instance = this._id(m.instance);
                if (!(await this._may(user, 'sendto'))) {
                    throw new IobError('unauthorized', `${user} may not send messages to instances`);
                }
                return await this.adapter.sendToAsync(
                    instance,
                    typeof m.command === 'string' ? m.command : 'send',
                    m.message ?? null,
                    {
                        timeout: Math.min(Math.max(Number(m.timeout) || 20000, 1000), 120000),
                    },
                );
            }

            case 'iobroker/get_history': {
                const id = this._id(m.state_id);
                // only what the user may read
                await this.adapter.getForeignStateAsync(id, options);
                const historyOptions = (m.options as Record<string, unknown>) || {};
                const instance =
                    typeof historyOptions.instance === 'string' && historyOptions.instance
                        ? historyOptions.instance
                        : (this.adapter.config as { history?: string }).history;
                if (!instance) {
                    throw new IobError('not_supported', 'no history instance configured');
                }
                const res = (await getHistoryGated(this.adapter, instance, {
                    id,
                    options: historyOptions,
                })) as { result?: unknown; error?: string } | undefined;
                if (res?.error) {
                    throw new IobError('iobroker_error', res.error);
                }
                return res?.result ?? [];
            }

            case 'iobroker/read_file': {
                const adapterName = this._id(m.adapter);
                const file = typeof m.file === 'string' ? m.file : '';
                if (!file || file.split('/').includes('..')) {
                    throw new IobError('invalid_format', 'invalid file name');
                }
                const res = await this.adapter.readFileAsync(adapterName, file, options);
                const data = res?.file;
                const mimeType = res?.mimeType || '';
                if (data === undefined || data === null) {
                    throw new IobError('not_found', `${adapterName}/${file} not found`);
                }
                return Buffer.isBuffer(data) && !/^(text\/|application\/(json|javascript|xml))/.test(mimeType)
                    ? { mimeType, base64: data.toString('base64') }
                    : { mimeType, data: data.toString() };
            }

            default:
                throw new IobError('unknown_command', `unknown command ${type}`);
        }
    }

    private _id(value: unknown): string {
        if (typeof value !== 'string' || !value || value.length > 500) {
            throw new IobError('invalid_format', 'invalid id');
        }
        return value;
    }

    /**
     * Whether the user has a right of the "other" group (e.g. sendto), like the socket of web and admin check it.
     *
     * @param user - ioBroker user id
     * @param operation - the operation, e.g. sendto
     */
    private async _may(user: string, operation: 'sendto' | 'execute' | 'http'): Promise<boolean> {
        if (user === 'system.user.admin') {
            return true;
        }
        const permissions = (await this.adapter.calculatePermissionsAsync(user, [])) as unknown as {
            acl?: { other?: Record<string, boolean> };
        };
        return !!permissions?.acl?.other?.[operation];
    }

    private async _systemLang(): Promise<string> {
        const config = await this.adapter.getForeignObjectAsync('system.config');
        return (config?.common as { language?: string } | undefined)?.language || 'en';
    }
}

export = IoBrokerModule;
