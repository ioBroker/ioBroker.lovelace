// eslint-disable-next-line @typescript-eslint/no-require-imports
const bindings = require('../../../lib/bindings');

const WS_OPEN = 1; // WebSocket.OPEN

type SendResponseFn = (ws: unknown, id: unknown, result?: unknown) => void;
/** Ask the server to subscribe a foreign state (it owns the shared `_subscribed` set). */
type SubscribeStateFn = (id: string) => void;

interface TemplateEntry {
    template: unknown;
    ids: string[];
    id: unknown;
}

interface WsWithTemplates {
    send(data: string): void;
    readyState?: number;
    __templates?: TemplateEntry[] | null;
}

interface WsServerLike {
    clients: Iterable<WsWithTemplates>;
}

/**
 * Handles Home Assistant `render_template` requests (used by markdown cards etc.). It keeps a cache
 * of the ioBroker state values referenced by active templates, renders them via `lib/bindings`, and
 * pushes re-rendered results to clients when a referenced state changes.
 *
 * The actual foreign-state subscription set is owned by the server (shared with entity
 * subscriptions); this module asks for subscriptions via the injected `subscribeState` callback and
 * exposes the template-referenced ids for the server's unsubscribe bookkeeping.
 */
class TemplateModule {
    private adapter: ioBroker.Adapter;
    private sendResponse: SendResponseFn;
    private subscribeState: SubscribeStateFn;
    private templateStates: Record<string, ioBroker.State | null | undefined> = {};

    constructor(options: {
        adapter: ioBroker.Adapter;
        sendResponse: SendResponseFn;
        subscribeState: SubscribeStateFn;
    }) {
        this.adapter = options.adapter;
        this.sendResponse = options.sendResponse;
        this.subscribeState = options.subscribeState;
    }

    /**
     * Initialise the per-connection template list. Call when a websocket connects.
     *
     * @param ws - websocket connection
     */
    initWs(ws: WsWithTemplates): void {
        ws.__templates = [];
    }

    /**
     * Drop the per-connection template list. Call when a websocket closes.
     *
     * @param ws - websocket connection
     */
    clearWs(ws: WsWithTemplates): void {
        ws.__templates = null;
    }

    /**
     * Remove a single template subscription (used by unsubscribe_events).
     *
     * @param ws - websocket connection
     * @param subscriptionId - the subscription id to remove
     */
    removeTemplate(ws: WsWithTemplates, subscriptionId: unknown): void {
        if (!ws.__templates) {
            return;
        }
        for (let i = ws.__templates.length - 1; i >= 0; i--) {
            if (ws.__templates[i].id === subscriptionId) {
                ws.__templates.splice(i, 1);
            }
        }
    }

    /**
     * Collect all foreign-state ids referenced by active templates across all clients.
     *
     * @param wss - the websocket server (for iterating clients)
     */
    collectSubscribedIds(wss: WsServerLike | null | undefined): string[] {
        const ids: string[] = [];
        if (wss) {
            for (const client of wss.clients) {
                client.__templates?.forEach(t => ids.push(...t.ids));
            }
        }
        return ids;
    }

    /**
     * Handle a `render_template` message: parse the bindings, subscribe + cache the referenced
     * states, and send back the initial rendered result.
     *
     * @param ws - websocket connection
     * @param message - the render_template message
     * @returns true (always handled)
     */
    processMessage(ws: WsWithTemplates, message: Record<string, unknown>): boolean {
        // Only render_template is ours. The server's fallthrough loop offers EVERY unmatched message
        // to every module, so without this guard we would send a spurious (empty) response to foreign
        // messages like recorder/info or browser_mod/* - which the frontend then reads as a null
        // result (e.g. checkDataBaseMigration crashing on `migration_in_progress` of null).
        if (message.type !== 'render_template') {
            return false;
        }
        const template = message.template;
        this.sendResponse(ws, message.id);

        if (typeof template !== 'string' || !template) {
            this.adapter.log.warn(`Ignoring render_template without template string: ${JSON.stringify(message)}`);
            return true;
        }

        const obj: TemplateEntry = { template, ids: [], id: message.id };
        ws.__templates?.push(obj);

        const vars = bindings.extractBinding(template);
        const promises: Promise<void>[] = [];

        const processId = async (id: string): Promise<void> => {
            if (obj.ids.includes(id)) {
                return;
            }
            obj.ids.push(id);
            this.subscribeState(id);
            try {
                this.templateStates[id] = await this.adapter.getForeignStateAsync(id);
            } catch (e) {
                this.adapter.log.warn(`Cannot get state ${id}: ${String(e)} in template ${String(template)}`);
            }
        };

        if (vars) {
            for (const v of vars) {
                try {
                    promises.push(processId(v.systemOid));
                    if (v.operations) {
                        for (const op of v.operations) {
                            if (op.arg) {
                                for (const arg of op.arg) {
                                    if (arg.systemOid) {
                                        promises.push(processId(arg.systemOid));
                                    }
                                }
                            }
                        }
                    }
                } catch (e) {
                    this.adapter.log.warn(
                        `Cannot process variable ${JSON.stringify(v)}: ${String(e)} in template ${String(template)}`,
                    );
                }
            }
        }

        void Promise.all(promises).then(() => {
            ws.send(
                JSON.stringify({
                    id: message.id,
                    type: 'event',
                    event: { result: bindings.formatBinding(template, this.templateStates) },
                }),
            );
        });
        return true;
    }

    /**
     * On an ioBroker state change, push re-rendered template results to every client whose templates
     * reference the changed state.
     *
     * @param id - the changed state id
     * @param state - the new state
     * @param wss - the websocket server (for iterating clients)
     */
    onStateChange(id: string, state: ioBroker.State | null | undefined, wss: WsServerLike | null | undefined): void {
        if (!wss) {
            return;
        }
        let changed = false;
        for (const client of wss.clients) {
            if (client.__templates && client.readyState === WS_OPEN) {
                client.__templates.forEach(t => {
                    if (t.ids.includes(id)) {
                        const newState = state || ({ val: null } as ioBroker.State);
                        if (changed || (this.templateStates[id] && this.templateStates[id].val !== newState.val)) {
                            this.templateStates[id] = newState;
                            changed = true;
                            client.send(
                                JSON.stringify({
                                    id: t.id,
                                    type: 'event',
                                    event: { result: bindings.formatBinding(t.template, this.templateStates) },
                                }),
                            );
                        }
                    }
                });
            }
        }
    }
}

export = TemplateModule;
