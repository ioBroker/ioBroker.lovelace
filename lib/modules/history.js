const {WebSocket} = require('ws');
const iobState2EntityState = require('../converters/genericConverter').iobState2EntityState;
const updateTimestamps = require('../entities/utils').updateTimestamps;

/**
 * getHistory from history instances.
 * @param adapter app adapter
 * @param {Array<Object|undefined>} entities entities that are queried.
 * @param {number} start javascript timestamp
 * @param {numnber} end javascript timestamp
 * @param {boolean|undefined} noAttributes if attributes should also be gathered or not.
 * @param {string} user
 * @returns {Promise<*[]>}
 */
async function getHistory(adapter, entities, start, end, noAttributes, user) {
    const totalResult = {};
    if (!adapter.config.history) {
        adapter.log.warn(`History instance is not selected in the settings`);
    } else {
        for (const entity of entities) {
            if (typeof entity === 'object') {
                const id = entity.context.STATE.getId || entity.context.STATE.setId;
                try {
                    let stateResult;
                    const options = {
                        start,
                        end,
                        count: adapter.config.historyMaxCount,
                        aggregate: 'onchange',
                        user
                    };
                    if (id) {
                        stateResult = await adapter.sendToAsync(adapter.config.history, 'getHistory', {
                            id, options
                        });
                    } else {
                        stateResult = {result: []};
                    }
                    const attributesResult = {};
                    //don't get attributes results if not requested.
                    if (!noAttributes && entity.context.ATTRIBUTES) {
                        for (const attribute of entity.context.ATTRIBUTES) {
                            const id = attribute.getId || attribute.setId;
                            if (!noAttributes && id) {
                                attributesResult[attribute.attribute] = await adapter.sendToAsync(adapter.config.history,
                                    'getHistory', {id, options});
                            } else {
                                attributesResult[attribute.attribute] = {result: []};
                            }
                        }
                    }

                    /**
                     * match attributes to states by ts:
                     * @param state {ioBroker.State}
                     * @param attributesResult
                     * @param attributesUsed
                     * @param attributeValues
                     * @returns {{}}
                     */
                    const getAttributeValues = (state, attributesResult, attributesUsed = [], attributeValues = {}) => {
                        const ts = state.ts;
                        if (entity.context.ATTRIBUTES) {
                            for (const attribute of entity.context.ATTRIBUTES) {
                                if (attributesUsed.indexOf(attribute.attribute) >= 0) {
                                    continue; //already found value for that attribute.
                                }
                                let found = false;
                                let best = null;
                                let bestDiff = 10000;
                                const results = attributesResult[attribute.attribute].result;
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
                                if (found) {
                                    attributeValues[attribute.attribute] = typeof attribute.historyParser === 'function' ? attribute.historyParser(id, best.val) : best.val;
                                    best.used = true; //will be checked later, all "unused" attributes will be added without state later.
                                } /*else { //let's try to leave attribute empty, for now, if no value in history that is closer than 10 seconds.
                                    attributeValues[attribute.attribute] = entity.attributes[attribute.attribute]; //use current value as default if none found.
                                }*/
                            }
                        }
                        for (const key of Object.keys(entity.attributes)) {
                            if (!entity.context.ATTRIBUTES || !entity.context.ATTRIBUTES.find(a => a.attribute === key)) {
                                attributeValues[key] = entity.attributes[key]; //make sure to copy static attributes here.
                            }
                        }
                        return attributeValues;
                    };

                    //console.log(JSON.stringify(stateResult.result));
                    const historyPerEntity = [];
                    const attributesUsed = [];
                    for (const e of stateResult.result) {
                        const result = {
                            s: typeof entity.context.STATE.historyParser === 'function' ?
                                entity.context.STATE.historyParser(id, e.val).toString() :
                                iobState2EntityState(entity, e.val),
                            a: noAttributes ? {} : getAttributeValues(e, attributesResult, attributesUsed),
                            lc: 1,
                            lu: 1
                        };
                        updateTimestamps(result, e, true);
                        historyPerEntity.push(result);
                    }
                    //add unused attribute values:
                    if (!noAttributes && entity.context.ATTRIBUTES) {
                        for (const attribute of entity.context.ATTRIBUTES) {
                            //find other attributes for this type. Will use this attribute as "state" for the getAttributeValues function.
                            // so we don't want to find this attribute again. Will add all matching attributes anyway. So in later runs this attribute will be "empty", i.e. all used.
                            attributesUsed.push(attribute.attribute);
                            const results = attributesResult[attribute.attribute].result;
                            for (const result of results) {
                                if (!result.used) {
                                    const attributeValues = {};
                                    attributeValues[attribute.attribute] = typeof attribute.historyParser === 'function' ? attribute.historyParser(id, result.val) : result.val;
                                    result.used = true;
                                    //fill in other attributes:
                                    const data = {
                                        //state: null,
                                        lc: 1,
                                        lu: 1,
                                        a: noAttributes ? {} : getAttributeValues(result, attributesResult, attributesUsed, attributeValues)
                                    };
                                    updateTimestamps(data, result, true);
                                    historyPerEntity.push(data);
                                }
                            }
                        }
                    }
                    //make sure there is at least one in there, frontend crashes otherwise:
                    if (historyPerEntity.length === 0) {
                        historyPerEntity.push({
                            s: entity.state,
                            a: {},
                            lu: start / 1000
                        });
                    }
                    totalResult[entity.entity_id] = historyPerEntity;
                } catch (e) {
                    adapter.log.warn(`Could not get history for ${entity.entity_id} - Error in request: ${e}`);
                    //totalResult[entity.entity_id] = [];
                }
            } else {
                adapter.log.warn(`Cannot get history - Unknown entity: ${entity}`);
                //if no object -> entity is just the entity_id.
                //totalResult[entity] = [];
            }
        }
    }
    return totalResult;
}

function sendHistoryResponse(ws, id, historyData, parameters) {
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
            if (state.lu < startTime) {
                startTime = state.lu;
            }
            if (state.lu > endTime) {
                endTime = state.lu;
            }
            if (state.s === null || state.s === undefined) {
                state.s = 'unknown';
            }

            /*if (parameters.noAttributes) {
                delete state.a;
            }
            if (parameters.minimalResponse) {
                delete state.lc;
            }*/
        }
    }

    const response = {
        id: Number(id),
        type: 'event',
        event: {
            states: historyData
        },
        start_time: startTime,
        end_time: endTime
    };
    //console.log('Sending history message for ' + JSON.stringify(parameters));
    //console.log(JSON.stringify(response, null, 2));
    ws.send(JSON.stringify(response));
}

/**
 * convert .ts of state e to ISOString with try/catch and now as fallback.
 * @param {state} e
 * @returns {string}
 * @private
 */
function _convertStateTStoISOString(e) {
    try {
        return new Date((e.lu || e.lc) * 1000).toISOString();
    } catch (error) {
        return new Date().toISOString();
    }
}

class HistoryModule {
    constructor(options) {
        this.adapter = options.adapter;
        this.entityData = options.entityData;
    }

    async processRequest(req, res) {
        //this.adapter.log.debug(`Get history for ${req.query.filter_entity_id} from ${req.params.start} to ${req.query.end_time} LEGACY`);

        const entityIDs = req.query.filter_entity_id.split(',').map(id => id.trim());
        const entities = [];
        for (const id of entityIDs) {
            const entity = this.entityData.entityId2Entity[id];
            entities.push(entity || id);
        }

        const newResult = await getHistory(this.adapter, entities, new Date(req.params.start).getTime(), new Date(req.query.end_time).getTime(), req.query.noAttributes, req._user || this.adapter.config.defaultUser);
        const oldResult = [];
        for (const [entity_id, states] of Object.entries(newResult)) {
            const entityResult = [];
            for (const state of states) {
                const ts = _convertStateTStoISOString(state);
                entityResult.push({
                    entity_id,
                    state: String(state.s),
                    last_changed: ts,
                    last_updated: ts,
                    attributes: state.a
                });
            }
            oldResult.push(entityResult);
        }
        //console.log('Legacy history result: ' + JSON.stringify(oldResult, null, 2));
        res.json(oldResult);
    }

    //{"type":"history/history_during_period","start_time":"2022-07-08T08:09:12.022Z","end_time":"2022-07-08T09:09:12.022Z","significant_changes_only":false,"include_start_time_state":true,"minimal_response":true,"no_attributes":true,"entity_ids":["binary_sensor.TestFeuerAlarm"],"id":29}
    async processMessage(ws, message) {
        if (message.type && message.type.startsWith('history/')) {
            //maybe handle these parameters, too:
            //include_start_time_state true/false
            //minimal_response true/false (?)
            //significant_changes_only true/false

            let parameters;
            if (message.type === 'history/stream') {
                // new:
                // {"type":"history/stream","entity_ids":["input_boolean.testschalter"],"start_time":"2023-07-04T18:10:49.546Z","minimal_response":true,"significant_changes_only":true,"no_attributes":true,"id":38}
                // -> is subscription!!! -> send confirmation of subscription to client here:
                ws.send(JSON.stringify({id: Number(message.id), type: 'result', success: true, result: null})); //say that subscription was successfull.

                //keep subscription and id:
                parameters = {
                    entityIds: message.entity_ids,
                    startTime: new Date(message.start_time).getTime(),
                    minimalResponse: message.minimal_response,
                    significantChangesOnly: message.significant_changes_only,
                    noAttributes: message.no_attributes,
                    id: Number(message.id)
                };

                // add subscription here.
                ws._subscribes.history = ws._subscribes.history || [];
                ws._subscribes.history.push(parameters);
            } else if (message.type === 'history/history_during_period') {
                //same, but no subscription:
                parameters = {
                    entityIds: message.entity_ids,
                    startTime: new Date(message.start_time).getTime(),
                    minimalResponse: message.minimal_response,
                    significantChangesOnly: message.significant_changes_only,
                    noAttributes: message.no_attributes,
                    id: Number(message.id)
                };
            } else {
                this.adapter.log.warn('Unknown history message type: ' + message.type);
            }
            if (!this.adapter.config.history) {
                this.adapter.log.warn(`History instance is not selected in the settings -> logbook won't work`);
                sendHistoryResponse(ws, message.id, null, parameters);
                return;
            }

            //console.log('Getting history ' + JSON.stringify(message));
            const entities = [];
            for (const id of parameters.entityIds) {
                const entity = this.entityData.entityId2Entity[id];
                entities.push(entity || id);
            }

            const historyData = await getHistory(this.adapter, entities, parameters.startTime, Date.now(), parameters.noAttributes, this.adapter.config.defaultUser);
            sendHistoryResponse(ws, message.id, historyData, parameters);
            return true;
        }
        return false;
    }

    onStateChange(id, state, websocketServer) {
        if (state) {
            //check if the state update needs to be added to any logbook:
            if (websocketServer) {
                for (const client of websocketServer.clients) {
                    if (client._subscribes.history && client.readyState === WebSocket.OPEN) {
                        for (const parameters of client._subscribes.history) {
                            const states = {};
                            //found a client with active subscription -> update.
                            //this.adapter.log.debug('History subscription ' + msgId + ' found.');

                            const entityIdsAffected = this.entityData.iobID2entity[id] || [];
                            for (const entity of entityIdsAffected) {
                                if (parameters.entityIds.includes(entity.entity_id)) {
                                    this.adapter.log.debug('History subscription ' + parameters.id + ' is for right entity, sending update.');
                                    if (id === entity.context.STATE.getId || id === entity.context.STATE.setId) {
                                        states[entity.entity_id] = [{
                                            s: typeof entity.context.STATE.historyParser === 'function' ?
                                                entity.context.STATE.historyParser(id, state.val).toString() :
                                                iobState2EntityState(entity, state.val),
                                            lu: (state.ts ? state.ts : Date.now()) / 1000
                                        }];
                                    } else if (!parameters.noAttributes) {
                                        //add attributes:
                                        for (const attribute of entity.context.ATTRIBUTES) {
                                            if (id === attribute.getId || id === attribute.setId) {
                                                //use state from entity if attribute did change.
                                                states[entity.entity_id] = states[entity.entity_id] || [{
                                                    s: entity.state !== undefined ? entity.state : 'unknown',
                                                    lu: (state.ts ? state.ts : Date.now()) / 1000,
                                                    a: {}
                                                }];
                                                states[entity.entity_id][0].a = states[entity.entity_id][0].a || {};
                                                states[entity.entity_id][0].a[attribute.attribute] = typeof attribute.historyParser === 'function' ?
                                                    attribute.historyParser(id, state.val) :
                                                    state.val;
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