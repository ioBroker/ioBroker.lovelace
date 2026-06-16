// eslint-disable-next-line @typescript-eslint/no-require-imports
const bindings = require('../../../lib/bindings');
import { isJinjaTemplate, renderJinja, extractEntityIds } from './jinja';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton');

const WS_OPEN = 1; // WebSocket.OPEN

/**
 * A real ioBroker state id never contains whitespace or quote/bracket characters. The Home Assistant
 * "Developer Tools -> Templates" page sends Jinja2 templates, which our ioBroker-binding parser
 * mis-reads as bogus state ids; subscribing to those throws "not a valid ID pattern" and previously
 * crashed the adapter. Reject anything that cannot be a plain state id.
 *
 * @param id - candidate state id extracted from a template
 */
function looksLikeStateId(id: unknown): id is string {
    return typeof id === 'string' && id.length > 0 && !/[\s"'`%(){}<>[\]]/.test(id);
}

type SendResponseFn = (ws: unknown, id: unknown, result?: unknown) => void;
/** Ask the server to subscribe a foreign state (it owns the shared `_subscribed` set). */
type SubscribeStateFn = (id: string) => void;

interface TemplateEntry {
    template: unknown;
    ids: string[];
    id: unknown;
    /** true for HA Jinja2 templates (rendered via nunjucks), false for ioBroker {id} bindings. */
    jinja?: boolean;
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
     * Whether any active template (across all clients) references the given ioBroker state id.
     * Used by the server's onStateChange fast-path under the all-states subscription.
     *
     * @param id - ioBroker state id
     * @param wss - the websocket server (for iterating clients)
     */
    referencesState(id: string, wss: WsServerLike | null | undefined): boolean {
        if (!wss) {
            return false;
        }
        for (const client of wss.clients) {
            if (client.__templates?.some(t => t.ids.includes(id))) {
                return true;
            }
        }
        return false;
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

        const obj: TemplateEntry = { template, ids: [], id: message.id, jinja: isJinjaTemplate(template) };
        ws.__templates?.push(obj);

        const promises: Promise<void>[] = [];

        const processId = async (id: string): Promise<void> => {
            if (!looksLikeStateId(id) || obj.ids.includes(id)) {
                return;
            }
            obj.ids.push(id);
            try {
                this.subscribeState(id);
                this.templateStates[id] = await this.adapter.getForeignStateAsync(id);
            } catch (e) {
                this.adapter.log.warn(`Cannot get state ${id}: ${String(e)} in template ${String(template)}`);
            }
        };

        if (obj.jinja) {
            // HA Jinja2 template: subscribe the ioBroker states behind every referenced entity (its
            // main state + any attribute states) so we re-render when they change.
            for (const entityId of extractEntityIds(template)) {
                const entity = adapterData.entityId2Entity[entityId];
                const getId = entity?.context?.STATE?.getId;
                if (getId) {
                    promises.push(processId(getId));
                }
                for (const attr of entity?.context?.ATTRIBUTES || []) {
                    if (attr.getId) {
                        promises.push(processId(attr.getId));
                    }
                }
            }
        } else {
            const vars = bindings.extractBinding(template);
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
        }

        void Promise.all(promises).then(() => {
            ws.send(
                JSON.stringify({
                    id: message.id,
                    type: 'event',
                    event: {
                        result: this._render(obj),
                        // The Developer Tools "Templates" page reads listeners.time and crashes if
                        // listeners is missing. We don't track HA-style listeners, so report none.
                        listeners: { all: false, domains: [], entities: [], time: false },
                    },
                }),
            );
        });
        return true;
    }

    /**
     * Render a template entry to its result string: Jinja2 via nunjucks (against the live entity
     * store), or the ioBroker {id} binding via lib/bindings.
     *
     * @param entry - the template entry
     */
    private _render(entry: TemplateEntry): unknown {
        if (entry.jinja) {
            return renderJinja(String(entry.template));
        }
        return bindings.formatBinding(entry.template, this.templateStates);
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
                                    event: {
                                        result: this._render(t),
                                        listeners: { all: false, domains: [], entities: [], time: false },
                                    },
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
