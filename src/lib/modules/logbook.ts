const WS_OPEN = 1; // WebSocket.OPEN

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityDataSingleton = require('../../../lib/dataSingleton') as {
    entityId2Entity: Record<string, EntityLike>;
};
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { iobState2EntityState } = require('../converters/genericConverter') as {
    iobState2EntityState: (entity: EntityLike, val: unknown) => unknown;
};
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { getHistoryGated, boundHistoryCount } = require('../historyGate') as {
    getHistoryGated: (
        adapter: { sendToAsync(instance: string, command: string, message: unknown): Promise<unknown> },
        instance: string,
        message: unknown,
    ) => Promise<unknown>;
    boundHistoryCount: (configured: number | undefined) => number;
};

interface EntityLike {
    entity_id: string;
    context: {
        STATE: {
            getId?: string;
            setId?: string;
            historyParser?: (id: string, val: unknown) => unknown;
        };
        ATTRIBUTES?: unknown[];
    };
}

interface WsClient {
    send(data: string): void;
    readyState: number;
    _subscribes: Record<string, unknown>;
    logbook?: LogbookSubscription[];
}

interface WsServer {
    clients: Set<WsClient>;
}

interface LogbookSubscription {
    id: number;
    idsToWatch: { iobStateId: string; entity: EntityLike }[];
}

type AdapterWithConfig = ioBroker.Adapter & {
    config: {
        logbookSource?: string;
        history?: string;
        historyMaxCount?: number;
    };
};

/**
 * Logbook module - kind of "history" for the frontend.
 */
class LogbookModule {
    private adapter: AdapterWithConfig;
    private getUsedEntityIDs: () => string[];
    private instances: { name: string; id: string }[];

    /**
     * Create a new logbook module.
     *
     * @param options - options object with adapter and getUsedEntityIDs function
     * @param options.adapter - ioBroker adapter instance
     * @param options.getUsedEntityIDs - function returning all currently used HA entity ids
     */
    constructor(options: { adapter: AdapterWithConfig; getUsedEntityIDs: () => string[] }) {
        this.adapter = options.adapter;
        this.getUsedEntityIDs = options.getUsedEntityIDs;

        this.instances = [];
        let objectType = 'instance';
        const params: { startkey: string; endkey: string } = {
            startkey: 'system.adapter.',
            endkey: 'system.adapter.\u9999',
        };
        if (this.adapter.config.logbookSource === 'user') {
            objectType = 'user';
            params.startkey = 'system.user.';
            params.endkey = 'system.user.\u9999';
        }
        if (this.adapter.config.logbookSource !== 'none') {
            this.adapter.getObjectView('system', objectType, params, (err, instances) => {
                if (err) {
                    this.adapter.log.warn(`Could not get instances: ${err}`);
                } else if (instances) {
                    for (const row of instances.rows) {
                        if (row.value && row.value._id) {
                            const id = row.value._id;
                            let name = id.split('.').splice(2).join('.');
                            if (this.adapter.config.logbookSource === 'user') {
                                name = row.value.common.name as string;
                            }
                            this.instances.push({ name, id });
                        }
                    }
                }
            });
        }
    }

    /**
     * Send a logbook response to the frontend.
     *
     * @param ws - websocket client to send to
     * @param id - subscription message id
     * @param startTime - start timestamp in milliseconds
     * @param endTime - end timestamp in milliseconds
     * @param results - array of entity+state pairs to include in the response
     * @param partial - whether this is a partial response (more to follow)
     */
    sendLogbookResponse(
        ws: WsClient,
        id: unknown,
        startTime?: number,
        endTime?: number,
        results: { entity: EntityLike; state: ioBroker.State }[] = [],
        partial = false,
    ): void {
        const message: Record<string, unknown> = {
            id: Number(id),
            type: 'event',
            event: {
                events: [],
            },
        };
        const event = message.event as Record<string, unknown>;
        if (startTime) {
            event.start_time = startTime / 1000;
        }
        if (endTime) {
            event.end_time = endTime / 1000;
        }
        if (partial) {
            event.partial = true;
        }

        const events = event.events as Record<string, unknown>[];
        for (const result of results) {
            let from: unknown = undefined;
            if (this.adapter.config.logbookSource === 'user') {
                from = (result.state as unknown as Record<string, unknown>).user;
            }
            if (this.adapter.config.logbookSource === 'adapter') {
                from = result.state.from;
            }
            events.push({
                when: result.state.ts / 1000,
                state:
                    typeof result.entity.context.STATE.historyParser === 'function'
                        ? String(result.entity.context.STATE.historyParser(String(id), result.state.val))
                        : String(iobState2EntityState(result.entity, result.state.val)),
                entity_id: result.entity.entity_id,
                context_user_id: from,
            });
        }
        events.sort((a, b) => (a.when as number) - (b.when as number));
        ws.send(JSON.stringify(message));
    }

    /**
     * Process a message from the frontend.
     *
     * @param ws - websocket connection to the client
     * @param message - the message from the frontend
     */
    async processMessage(ws: WsClient, message: Record<string, unknown>): Promise<boolean> {
        if (message.type === 'logbook/event_stream') {
            try {
                ws.send(JSON.stringify({ id: Number(message.id), type: 'result', success: true, result: null }));
                ws._subscribes.logbook = ws._subscribes.logbook || [];

                const startTime = new Date(message.start_time as string).getTime();
                const endTime = new Date(message.end_time as string).getTime();
                const entityIds = (message.entity_ids as string[]) || this.getUsedEntityIDs();
                this.adapter.log.debug(`Logbook subscription ${String(message.id)} for ${JSON.stringify(entityIds)}`);

                // A request that lies (partly) in the future or has an invalid/empty range has no
                // history to return. Querying getHistory with start >= end can hang the history
                // adapter (no callback), so Promise.all never resolves and the frontend spins
                // forever -> answer with an empty, completed stream right away.
                const queryEnd = Math.min(Date.now(), endTime);
                if (Number.isNaN(startTime) || Number.isNaN(queryEnd) || startTime >= queryEnd) {
                    this.sendLogbookResponse(ws, message.id, startTime, endTime, [], true);
                    setTimeout(() => this.sendLogbookResponse(ws, message.id, startTime, endTime, []), 300);
                    return true;
                }

                if (!this.adapter.config.history) {
                    this.adapter.log.warn(`History instance is not selected in the settings -> logbook won't work`);
                    this.sendLogbookResponse(ws, message.id, startTime, endTime, []);
                    return true;
                }

                const idsToWatch: { iobStateId: string; entity: EntityLike }[] = [];
                const promises: Promise<void>[] = [];
                const results: { entity: EntityLike; state: ioBroker.State }[] = [];
                const options = {
                    start: startTime,
                    end: queryEnd,
                    count: boundHistoryCount(this.adapter.config.historyMaxCount),
                    aggregate: 'onchange',
                    from: true,
                    returnNewestEntries: true,
                    ack: true,
                    user: true,
                };

                for (const entityId of entityIds) {
                    const entity = entityDataSingleton.entityId2Entity[entityId];
                    if (entity) {
                        if (entity.context && entity.context.STATE) {
                            const id = entity.context.STATE.getId || entity.context.STATE.setId;
                            if (id) {
                                idsToWatch.push({ iobStateId: id, entity });
                                promises.push(
                                    getHistoryGated(this.adapter, this.adapter.config.history, {
                                        id,
                                        options,
                                    }).then(stateResult => {
                                        for (const state of (stateResult as { result: ioBroker.State[] }).result) {
                                            if (state !== null) {
                                                results.push({ entity, state });
                                            }
                                        }
                                    }),
                                );
                            }
                        }
                    } else {
                        this.adapter.log.warn(`Unknown entity id ${entityId}`);
                    }
                }

                await Promise.all(promises);
                this.sendLogbookResponse(ws, message.id, startTime, endTime, results, true);
                setTimeout(() => this.sendLogbookResponse(ws, message.id, startTime, endTime, []), 300);

                const logbookSubs = ws._subscribes.logbook as LogbookSubscription[];
                const subscription = logbookSubs.find(entry => entry.id === Number(message.id));
                if (subscription) {
                    subscription.idsToWatch = subscription.idsToWatch.concat(idsToWatch);
                } else {
                    logbookSubs.push({
                        id: Number(message.id),
                        idsToWatch,
                    });
                }
            } catch (e) {
                this.adapter.log.error(`Could not create logbook answer: ${(e as Error).stack}`);
                this.sendLogbookResponse(ws, message.id, undefined, undefined, []);
            }
            return true;
        } else if (message.type === 'config/auth/list') {
            const result = this.instances;
            ws.send(JSON.stringify({ id: message.id, type: 'result', success: true, result }));
            return true;
        } else if (message.type === 'trace/contexts') {
            ws.send(JSON.stringify({ id: message.id, type: 'result', success: true, result: {} }));
            return true;
        }
        return false;
    }

    /**
     * Handle state changes. Check if they need to be added to the logbook.
     *
     * @param id - ioBroker state id that changed
     * @param state - the new state value
     * @param websocketServer - websocket server to iterate connected clients
     */
    onStateChange(id: string, state: ioBroker.State | null | undefined, websocketServer: WsServer): void {
        if (state) {
            if (websocketServer) {
                for (const client of websocketServer.clients) {
                    if (client._subscribes.logbook && client.readyState === WS_OPEN) {
                        for (const subscription of client._subscribes.logbook as LogbookSubscription[]) {
                            const idAndEntity = subscription.idsToWatch.find(entry => id === entry.iobStateId);
                            if (idAndEntity) {
                                this.sendLogbookResponse(client, subscription.id, undefined, undefined, [
                                    { state, entity: idAndEntity.entity },
                                ]);
                            }
                        }
                    }
                }
            }
        }
    }
}

export = LogbookModule;
