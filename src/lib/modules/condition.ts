import {
    asArray,
    collectEntityIds,
    evaluateCondition,
    UnsupportedConditionError,
    type Condition,
} from './conditionEvaluator';

const WS_OPEN = 1; // WebSocket.OPEN

type SendResponseFn = (ws: unknown, id: unknown, result?: unknown) => void;

/** One entity id lookup table entry - all we need of an entity here. */
interface EntityLike {
    entity_id: string;
}

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    iobID2entity: Record<string, EntityLike[] | undefined>;
};

interface ConditionSubscription {
    id: unknown;
    condition: Condition;
    /** entity ids the condition reads, so a state change can trigger a re-evaluation */
    entityIds: string[];
    /** last result sent to the client */
    result?: boolean;
    /** timers of pending `for` checks */
    timers: NodeJS.Timeout[];
}

interface WsWithConditions {
    send(data: string): void;
    readyState?: number;
    __conditions?: ConditionSubscription[] | null;
}

interface WsServerLike {
    clients: Iterable<WsWithConditions>;
}

/**
 * Handles `subscribe_condition` and `test_condition`.
 *
 * Since frontend 2026.x the dashboard no longer decides visibility itself: a conditional card, a
 * `visibility:` on a card, badge, section or view, and the condition editor all send the condition
 * to the server and wait for a result. Without an answer the frontend keeps the element hidden and
 * shows the subscription error, so every conditional card broke when we replied `unknown_command`.
 *
 * The conditions arrive as Home Assistant automation conditions (the frontend translates the
 * lovelace shape first) and are evaluated against the entities we hold. They are re-evaluated
 * whenever an ioBroker state behind one of the entities they read changes; no extra state
 * subscription is needed because the entity states are subscribed already.
 */
class ConditionModule {
    private adapter: ioBroker.Adapter;
    private sendResponse: SendResponseFn;

    constructor(options: { adapter: ioBroker.Adapter; sendResponse: SendResponseFn }) {
        this.adapter = options.adapter;
        this.sendResponse = options.sendResponse;
    }

    /**
     * Drop every condition subscription of a connection. Call when a websocket closes.
     *
     * @param ws - websocket connection
     */
    clearWs(ws: WsWithConditions): void {
        for (const subscription of ws.__conditions || []) {
            this._clearTimers(subscription);
        }
        ws.__conditions = null;
    }

    /**
     * Remove a single condition subscription (used by unsubscribe_events).
     *
     * @param ws - websocket connection
     * @param subscriptionId - the subscription id to remove
     */
    removeSubscription(ws: WsWithConditions, subscriptionId: unknown): void {
        if (!ws.__conditions) {
            return;
        }
        for (let i = ws.__conditions.length - 1; i >= 0; i--) {
            if (ws.__conditions[i].id === subscriptionId) {
                this._clearTimers(ws.__conditions[i]);
                ws.__conditions.splice(i, 1);
            }
        }
    }

    /**
     * Handle `subscribe_condition` (keep evaluating and push every change) and `test_condition`
     * (evaluate once).
     *
     * @param ws - websocket connection
     * @param message - the incoming message
     * @returns true when the message was ours
     */
    processMessage(ws: WsWithConditions, message: Record<string, unknown>): boolean {
        if (message.type === 'test_condition') {
            try {
                const result = asArray(message.condition as Condition).every(condition => evaluateCondition(condition));
                this.sendResponse(ws, message.id, { result });
            } catch (e) {
                this._sendError(ws, message.id, e);
            }
            return true;
        }
        if (message.type !== 'subscribe_condition') {
            return false;
        }

        const condition = message.condition as Condition;
        let result: boolean;
        try {
            result = evaluateCondition(condition);
        } catch (e) {
            this.adapter.log.debug(`Cannot evaluate condition ${JSON.stringify(condition)}: ${String(e)}`);
            this._sendError(ws, message.id, e);
            return true;
        }

        const subscription: ConditionSubscription = {
            id: message.id,
            condition,
            entityIds: collectEntityIds(condition),
            timers: [],
        };
        ws.__conditions = ws.__conditions || [];
        ws.__conditions.push(subscription);

        this.sendResponse(ws, message.id);
        this._send(ws, subscription, result);
        return true;
    }

    /**
     * Re-evaluate the conditions that read an entity behind the changed ioBroker state.
     *
     * @param id - the changed ioBroker state id
     * @param _state - the new state (unused: the entities are updated before we are called)
     * @param wss - the websocket server (for iterating clients)
     */
    onStateChange(id: string, _state: ioBroker.State | null | undefined, wss?: unknown): void {
        const server = wss as WsServerLike | null | undefined;
        if (!server) {
            return;
        }
        const entityIds = (adapterData.iobID2entity[id] || []).map(entity => entity?.entity_id);
        if (!entityIds.length) {
            return;
        }
        for (const client of server.clients) {
            if (!client.__conditions || client.readyState !== WS_OPEN) {
                continue;
            }
            for (const subscription of client.__conditions) {
                if (subscription.entityIds.some(entityId => entityIds.includes(entityId))) {
                    this._reevaluate(client, subscription);
                }
            }
        }
    }

    /**
     * Evaluate a subscription again and push the result if it changed.
     *
     * @param ws - websocket connection
     * @param subscription - the subscription to re-evaluate
     */
    private _reevaluate(ws: WsWithConditions, subscription: ConditionSubscription): void {
        this._clearTimers(subscription);
        let result: boolean;
        try {
            result = evaluateCondition(subscription.condition, {
                schedule: (delay: number) => {
                    subscription.timers.push(
                        setTimeout(() => {
                            if (ws.__conditions?.includes(subscription)) {
                                this._reevaluate(ws, subscription);
                            }
                        }, delay),
                    );
                },
            });
        } catch (e) {
            // The condition was fine when it arrived, so this is a template that broke on new data.
            this.adapter.log.debug(`Cannot evaluate condition ${JSON.stringify(subscription.condition)}: ${String(e)}`);
            return;
        }
        if (result !== subscription.result) {
            this._send(ws, subscription, result);
        }
    }

    /**
     * Send a condition result to the client.
     *
     * @param ws - websocket connection
     * @param subscription - the subscription the result belongs to
     * @param result - whether the condition is met
     */
    private _send(ws: WsWithConditions, subscription: ConditionSubscription, result: boolean): void {
        subscription.result = result;
        ws.send(JSON.stringify({ id: subscription.id, type: 'event', event: { result } }));
    }

    /**
     * Tell the client that we cannot evaluate this condition. The frontend then hides the element
     * and shows the message in the condition editor.
     *
     * @param ws - websocket connection
     * @param id - message id
     * @param error - what went wrong
     */
    private _sendError(ws: WsWithConditions, id: unknown, error: unknown): void {
        ws.send(
            JSON.stringify({
                id,
                type: 'result',
                success: false,
                error: {
                    code: error instanceof UnsupportedConditionError ? 'not_supported' : 'invalid_format',
                    message: error instanceof Error ? error.message : String(error),
                },
            }),
        );
    }

    /**
     * Drop the pending `for` timers of a subscription.
     *
     * @param subscription - the subscription to clean up
     */
    private _clearTimers(subscription: ConditionSubscription): void {
        for (const timer of subscription.timers) {
            clearTimeout(timer);
        }
        subscription.timers = [];
    }
}

export = ConditionModule;
