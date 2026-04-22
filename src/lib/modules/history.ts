const WS_OPEN = 1; // WebSocket.OPEN

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { iobState2EntityState } = require('../../../lib/converters/genericConverter') as {
    iobState2EntityState: (entity: EntityLike, val: unknown) => unknown;
};
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { updateTimestamps } = require('../../../lib/entities/utils') as {
    updateTimestamps: (target: Record<string, unknown>, source: unknown, fromHistory?: boolean) => void;
};

interface EntityAttribute {
    attribute: string;
    getId?: string;
    setId?: string;
    historyParser?: (id: string, val: unknown) => unknown;
}

interface EntityLike {
    entity_id: string;
    state?: unknown;
    attributes: Record<string, unknown>;
    context: {
        STATE: {
            getId?: string;
            setId?: string;
            historyParser?: (id: string, val: unknown) => unknown;
        };
        ATTRIBUTES?: EntityAttribute[];
    };
}

interface EntityData {
    entityId2Entity: Record<string, EntityLike>;
    iobID2entity: Record<string, EntityLike[]>;
}

interface HistoryParameters {
    entityIds: string[];
    startTime: number;
    minimalResponse?: boolean;
    significantChangesOnly?: boolean;
    noAttributes?: boolean;
    id: number;
}

interface HistoryEntry {
    s?: unknown;
    a?: Record<string, unknown>;
    lc?: number;
    lu?: number;
}

interface WsClient {
    send(data: string): void;
    readyState: number;
    _subscribes: Record<string, unknown>;
    __auth?: { username?: string };
}

interface WsServer {
    clients: Set<WsClient>;
}

type AdapterWithConfig = ioBroker.Adapter & {
    config: {
        history?: string;
        historyMaxCount?: number;
    };
};

type PersonModuleInterface = {
    getUserIDFromName(name: string | undefined): string;
};

/**
 * Get history from history instances.
 *
 * @param adapter - ioBroker adapter instance
 * @param entities - list of entities or entity ids to get history for
 * @param start - start timestamp in milliseconds
 * @param end - end timestamp in milliseconds
 * @param noAttributes - whether to omit attributes from the result
 * @param user - ioBroker user id for access control
 */
async function getHistory(
    adapter: AdapterWithConfig,
    entities: (EntityLike | string)[],
    start: number,
    end: number,
    noAttributes: boolean | undefined,
    user: string,
): Promise<Record<string, HistoryEntry[]>> {
    const totalResult: Record<string, HistoryEntry[]> = {};
    if (!adapter.config.history) {
        adapter.log.warn(`History instance is not selected in the settings`);
    } else {
        for (const entity of entities) {
            if (typeof entity === 'object') {
                const id = entity.context.STATE.getId || entity.context.STATE.setId;
                try {
                    let stateResult: { result: ioBroker.State[] };
                    const options = {
                        start,
                        end,
                        count: adapter.config.historyMaxCount,
                        aggregate: 'onchange',
                        user,
                    };
                    if (id) {
                        stateResult = (await adapter.sendToAsync(adapter.config.history, 'getHistory', {
                            id,
                            options,
                        })) as unknown as { result: ioBroker.State[] };
                    } else {
                        stateResult = { result: [] };
                    }

                    const attributesResult: Record<string, { result: (ioBroker.State & { used?: boolean })[] }> = {};
                    if (!noAttributes && entity.context.ATTRIBUTES) {
                        for (const attribute of entity.context.ATTRIBUTES) {
                            const attrId = attribute.getId || attribute.setId;
                            if (attrId) {
                                attributesResult[attribute.attribute] = (await adapter.sendToAsync(
                                    adapter.config.history,
                                    'getHistory',
                                    { id: attrId, options },
                                )) as unknown as { result: (ioBroker.State & { used?: boolean })[] };
                            } else {
                                attributesResult[attribute.attribute] = { result: [] };
                            }
                        }
                    }

                    const getAttributeValues = (
                        state: ioBroker.State,
                        attrResult: typeof attributesResult,
                        attributesUsed: string[] = [],
                        attributeValues: Record<string, unknown> = {},
                    ): Record<string, unknown> => {
                        const ts = state.ts;
                        if (entity.context.ATTRIBUTES) {
                            for (const attribute of entity.context.ATTRIBUTES) {
                                if (attributesUsed.indexOf(attribute.attribute) >= 0) {
                                    continue;
                                }
                                let found = false;
                                let best: (ioBroker.State & { used?: boolean }) | null = null;
                                let bestDiff = 10000;
                                const results = attrResult[attribute.attribute]?.result || [];
                                for (const result of results) {
                                    if (result.val !== null) {
                                        const diff = Math.abs(result.ts - ts);
                                        if (diff < bestDiff) {
                                            best = result;
                                            bestDiff = diff;
                                            found = true;
                                        }
                                    }
                                }
                                if (found && best) {
                                    attributeValues[attribute.attribute] =
                                        typeof attribute.historyParser === 'function'
                                            ? attribute.historyParser(id!, best.val)
                                            : best.val;
                                    best.used = true;
                                }
                            }
                        }
                        for (const key of Object.keys(entity.attributes)) {
                            if (
                                !entity.context.ATTRIBUTES ||
                                !entity.context.ATTRIBUTES.find(a => a.attribute === key)
                            ) {
                                attributeValues[key] = entity.attributes[key];
                            }
                        }
                        return attributeValues;
                    };

                    const historyPerEntity: HistoryEntry[] = [];
                    const attributesUsed: string[] = [];
                    for (const e of stateResult.result) {
                        const result: HistoryEntry = {
                            s:
                                typeof entity.context.STATE.historyParser === 'function'
                                    ? String(entity.context.STATE.historyParser(id!, e.val))
                                    : iobState2EntityState(entity, e.val),
                            a: noAttributes ? {} : getAttributeValues(e, attributesResult, attributesUsed),
                            lc: 1,
                            lu: 1,
                        };
                        updateTimestamps(result as Record<string, unknown>, e, true);
                        historyPerEntity.push(result);
                    }

                    if (!noAttributes && entity.context.ATTRIBUTES) {
                        for (const attribute of entity.context.ATTRIBUTES) {
                            attributesUsed.push(attribute.attribute);
                            const results = attributesResult[attribute.attribute]?.result || [];
                            for (const result of results) {
                                if (!result.used) {
                                    const attributeValues: Record<string, unknown> = {};
                                    attributeValues[attribute.attribute] =
                                        typeof attribute.historyParser === 'function'
                                            ? attribute.historyParser(id!, result.val)
                                            : result.val;
                                    result.used = true;
                                    const data: HistoryEntry = {
                                        lc: 1,
                                        lu: 1,
                                        a: noAttributes
                                            ? {}
                                            : getAttributeValues(
                                                  result as ioBroker.State,
                                                  attributesResult,
                                                  attributesUsed,
                                                  attributeValues,
                                              ),
                                    };
                                    updateTimestamps(data as Record<string, unknown>, result, true);
                                    historyPerEntity.push(data);
                                }
                            }
                        }
                    }

                    if (historyPerEntity.length === 0) {
                        historyPerEntity.push({
                            s: entity.state,
                            a: {},
                            lu: start / 1000,
                        });
                    }
                    totalResult[entity.entity_id] = historyPerEntity;
                } catch (e) {
                    adapter.log.warn(`Could not get history for ${entity.entity_id} - Error in request: ${String(e)}`);
                }
            } else {
                adapter.log.warn(`Cannot get history - Unknown entity: ${entity}`);
            }
        }
    }
    return totalResult;
}

/**
 * Send history response to the client that requested them.
 *
 * @param ws - websocket client to send the response to
 * @param id - message id to include in the response
 * @param historyData - history data to send, or null to send empty arrays
 * @param parameters - the original history request parameters
 */
function sendHistoryResponse(
    ws: WsClient,
    id: unknown,
    historyData: Record<string, HistoryEntry[]> | null,
    parameters: HistoryParameters,
): void {
    if (!historyData) {
        historyData = {};
        for (const entityId of parameters.entityIds) {
            historyData[entityId] = [];
        }
    }

    let startTime = parameters.startTime / 1000;
    let endTime = startTime;
    for (const stateArray of Object.values(historyData)) {
        for (const state of stateArray) {
            if (state.lu! < startTime) {
                startTime = state.lu!;
            }
            if (state.lu! > endTime) {
                endTime = state.lu!;
            }
            if (state.s === null || state.s === undefined) {
                state.s = 'unknown';
            }
        }
    }

    const response = {
        id: Number(id),
        type: 'event',
        event: { states: historyData },
        start_time: startTime,
        end_time: endTime,
    };
    ws.send(JSON.stringify(response));
}

/**
 * Convert state timestamp to ISOString.
 *
 * @param e - state object with timestamp fields
 * @param e.lu - last updated timestamp in seconds
 * @param e.lc - last changed timestamp in seconds
 */
function _convertStateTStoISOString(e: { lu?: number; lc?: number }): string {
    try {
        return new Date(((e.lu || e.lc) ?? 0) * 1000).toISOString();
    } catch {
        return new Date().toISOString();
    }
}

/**
 * History module to handle history requests.
 */
class HistoryModule {
    private adapter: AdapterWithConfig;
    private entityData: EntityData;
    private personModule: PersonModuleInterface;

    /**
     * Create a new history module.
     *
     * @param options - constructor options
     * @param options.adapter - ioBroker adapter instance
     * @param options.entityData - shared entity data singleton
     * @param options.personModule - person module for user id resolution
     */
    constructor(options: { adapter: AdapterWithConfig; entityData: EntityData; personModule: PersonModuleInterface }) {
        this.adapter = options.adapter;
        this.entityData = options.entityData;
        this.personModule = options.personModule;
    }

    /**
     * Process a request to the history api (legacy HTTP endpoint).
     *
     * @param req - HTTP request object
     * @param req.query - query parameters
     * @param req.params - route parameters (start date)
     * @param req._user - authenticated user name
     * @param res - HTTP response object
     * @param res.json - function to send JSON response
     */
    async processRequest(
        req: { query: Record<string, string>; params: Record<string, string>; _user?: string },
        res: { json(data: unknown): void },
    ): Promise<void> {
        const entityIDs = req.query.filter_entity_id.split(',').map(id => id.trim());
        const entities: (EntityLike | string)[] = [];
        for (const id of entityIDs) {
            const entity = this.entityData.entityId2Entity[id];
            entities.push(entity || id);
        }

        const newResult = await getHistory(
            this.adapter,
            entities,
            new Date(req.params.start).getTime(),
            new Date(req.query.end_time).getTime(),
            !!req.query.noAttributes,
            this.personModule.getUserIDFromName(req._user),
        );
        const oldResult = [];
        for (const [entity_id, states] of Object.entries(newResult)) {
            const entityResult = [];
            for (const state of states) {
                const ts = _convertStateTStoISOString(state as { lu?: number; lc?: number });
                entityResult.push({
                    entity_id,
                    state: String(state.s),
                    last_changed: ts,
                    last_updated: ts,
                    attributes: state.a,
                });
            }
            oldResult.push(entityResult);
        }
        res.json(oldResult);
    }

    /**
     * Process a history message from the frontend.
     *
     * @param ws - websocket connection to the client
     * @param message - the message from the frontend
     */
    async processMessage(ws: WsClient, message: Record<string, unknown>): Promise<boolean> {
        if (message.type && (message.type as string).startsWith('history/')) {
            let parameters: HistoryParameters | undefined;
            if (message.type === 'history/stream') {
                ws.send(JSON.stringify({ id: Number(message.id), type: 'result', success: true, result: null }));
                parameters = {
                    entityIds: message.entity_ids as string[],
                    startTime: new Date(message.start_time as string).getTime(),
                    minimalResponse: message.minimal_response as boolean,
                    significantChangesOnly: message.significant_changes_only as boolean,
                    noAttributes: message.no_attributes as boolean,
                    id: Number(message.id),
                };
                const historySubs = ws._subscribes as Record<string, HistoryParameters[]>;
                historySubs.history = historySubs.history || [];
                historySubs.history.push(parameters);
            } else if (message.type === 'history/history_during_period') {
                parameters = {
                    entityIds: message.entity_ids as string[],
                    startTime: new Date(message.start_time as string).getTime(),
                    minimalResponse: message.minimal_response as boolean,
                    significantChangesOnly: message.significant_changes_only as boolean,
                    noAttributes: message.no_attributes as boolean,
                    id: Number(message.id),
                };
            } else {
                this.adapter.log.warn(`Unknown history message type: ${message.type as string}`);
            }

            if (!parameters) {
                return true;
            }

            if (!this.adapter.config.history) {
                this.adapter.log.warn(`History instance is not selected in the settings -> history won't work`);
                sendHistoryResponse(ws, message.id, null, parameters);
                return true;
            }

            const entities: (EntityLike | string)[] = [];
            for (const id of parameters.entityIds) {
                const entity = this.entityData.entityId2Entity[id];
                entities.push(entity || id);
            }

            const historyData = await getHistory(
                this.adapter,
                entities,
                parameters.startTime,
                Date.now(),
                parameters.noAttributes,
                this.personModule.getUserIDFromName(ws.__auth?.username),
            );
            sendHistoryResponse(ws, message.id, historyData, parameters);
            return true;
        }
        return false;
    }

    /**
     * Process a state change and send it to subscribed history clients.
     *
     * @param id - ioBroker state id that changed
     * @param state - the new state value
     * @param websocketServer - websocket server to iterate connected clients
     */
    onStateChange(id: string, state: ioBroker.State | null | undefined, websocketServer: WsServer): void {
        if (state) {
            if (websocketServer) {
                for (const client of websocketServer.clients) {
                    const historySubs = client._subscribes as Record<string, HistoryParameters[]>;
                    if (historySubs.history && client.readyState === WS_OPEN) {
                        for (const parameters of historySubs.history) {
                            const states: Record<string, HistoryEntry[]> = {};
                            const entityIdsAffected = this.entityData.iobID2entity[id] || [];
                            for (const entity of entityIdsAffected) {
                                if (parameters.entityIds.includes(entity.entity_id)) {
                                    this.adapter.log.debug(
                                        `History subscription ${parameters.id} is for right entity, sending update.`,
                                    );
                                    if (id === entity.context.STATE.getId || id === entity.context.STATE.setId) {
                                        states[entity.entity_id] = [
                                            {
                                                s:
                                                    typeof entity.context.STATE.historyParser === 'function'
                                                        ? String(entity.context.STATE.historyParser(id, state?.val))
                                                        : iobState2EntityState(entity, state?.val),
                                                lu: (state?.ts ? state.ts : Date.now()) / 1000,
                                            },
                                        ];
                                    } else if (!parameters.noAttributes && entity.context.ATTRIBUTES) {
                                        for (const attribute of entity.context.ATTRIBUTES) {
                                            if (id === attribute.getId || id === attribute.setId) {
                                                states[entity.entity_id] = states[entity.entity_id] || [
                                                    {
                                                        s: entity.state !== undefined ? entity.state : 'unknown',
                                                        lu: (state?.ts ? state.ts : Date.now()) / 1000,
                                                        a: {},
                                                    },
                                                ];
                                                states[entity.entity_id][0].a = states[entity.entity_id][0].a || {};
                                                states[entity.entity_id][0].a![attribute.attribute] =
                                                    typeof attribute.historyParser === 'function'
                                                        ? attribute.historyParser(id, state?.val)
                                                        : state?.val;
                                            }
                                        }
                                    }
                                }
                            }

                            if (Object.keys(states).length > 0) {
                                sendHistoryResponse(client, parameters.id, states, parameters);
                            }
                        }
                    }
                }
            }
        }
    }
}

module.exports = HistoryModule;
