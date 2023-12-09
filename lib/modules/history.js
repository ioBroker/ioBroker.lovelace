const iobState2EntityState = require('../converters/genericConverter').iobState2EntityState;
const updateTimestamps = require('../entities/utils').updateTimestamps;

/**
 * getHistory from history instances.
 * @param adapter app adapter
 * @param {Array<Object|undefined>} entities entities that are queried.
 * @param {string} start date string to start from
 * @param {string} end date string to end
 * @param {boolean|undefined} noAttributes if attributes should also be gathered or not.
 * @param {string} user
 * @returns {Promise<*[]>}
 */
async function getHistory(adapter, entities, start, end, noAttributes, user) {
    const totalResult = [];
    if (!adapter.config.history) {
        adapter.log.warn(`History instance is not selected in the settings`);
    } else {
        for (const entity of entities) {
            if (typeof entity === 'object') {
                const id = entity.context.STATE.getId || entity.context.STATE.setId;
                try {
                    let stateResult;
                    const options = {
                        start: new Date(start).getTime(),
                        end: new Date(end).getTime(),
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
                    if (entity.context.ATTRIBUTES) {
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
                                let bestDiff = 1000;
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
                                    best.used = true;
                                } else {
                                    attributeValues[attribute.attribute] = entity.attributes[attribute.attribute]; //use current value as default if none found.
                                }
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
                    const arr = [];
                    const attributesUsed = [];
                    for (const e of stateResult.result) {
                        if (e.val !== null) {
                            const result = {
                                entity_id: entity.entity_id,
                                state: typeof entity.context.STATE.historyParser === 'function' ?
                                    entity.context.STATE.historyParser(id, e.val).toString() :
                                    iobState2EntityState(entity, e.val).toString(),
                                last_changed: 0,
                                last_updated: 0,
                                attributes: getAttributeValues(e, attributesResult, attributesUsed)
                            };
                            updateTimestamps(result, e);
                            arr.push(result);
                        }
                    }
                    //add unused attribute values:
                    if (!noAttributes && entity.context.ATTRIBUTES) {
                        for (const attribute of entity.context.ATTRIBUTES) {
                            attributesUsed.push(attribute.attribute);
                            const results = attributesResult[attribute.attribute].result;
                            for (const result of results) {
                                if (result.val !== null && !result.used) {
                                    const attributeValues = {};
                                    attributeValues[attribute.attribute] = typeof attribute.historyParser === 'function' ? attribute.historyParser(id, result.val) : result.val;
                                    result.used = true;
                                    //fill in other attributes:
                                    const data = {
                                        entity_id: entity.entity_id,
                                        //state: null,
                                        last_changed: 0,
                                        last_updated: 0,
                                        attributes: getAttributeValues(result, attributesResult, attributesUsed, attributeValues)
                                    };
                                    updateTimestamps(data, result);
                                    arr.push(data);
                                }
                            }
                        }
                    }
                    //console.log(JSON.stringify(arr));

                    totalResult.push(arr);
                } catch (e) {
                    adapter.log.warn(`Could not get history for ${entity.entity_id} - Error in request: ${e}`);
                    totalResult.push([]);
                }
            } else {
                adapter.log.warn(`Cannot get history - Unknown entity: ${entity}`);
                totalResult.push([]); // place default value
            }
        }
    }
    return totalResult;
}

/**
 * Converts old results (from getHistory) into new WebSocket format... somehow is quite different.
 * @param entities
 * @param result
 * @returns {{}}
 */
function convertHistoryResultToWebsocketApi(entities, result) {
    const newResult = {};
    for (let i = 0; i < entities.length; i += 1) {
        const entity = entities[i];
        if (typeof entity === 'object') {
            const entityHistoryStates = [];
            if (result[i] && result[i] instanceof Array) {
                for (const res of result[i]) {
                    const entityHistoryState = {
                        s: res.state,
                        a: res.attributes,
                        lc: res.last_changed, //changed that already in old code.
                        lu: res.last_updated
                    };
                    entityHistoryStates.push(entityHistoryState);
                }
            }
            newResult[entity.entity_id] = entityHistoryStates;
        } else {
            newResult[entity] = [];
        }
    }
    return newResult;
}

class HistoryModule {
    constructor(options) {
        this.adapter = options.adapter;
        this.entityData = options.entityData;
    }

    //{"type":"history/history_during_period","start_time":"2022-07-08T08:09:12.022Z","end_time":"2022-07-08T09:09:12.022Z","significant_changes_only":false,"include_start_time_state":true,"minimal_response":true,"no_attributes":true,"entity_ids":["binary_sensor.TestFeuerAlarm"],"id":29}
    async processMessage(ws, message) {
        //maybe handle these parameters, too:
        //include_start_time_state true/false
        //minimal_response true/false (?)
        //significant_changes_only true/false

        // new:
        // {"type":"history/stream","entity_ids":["input_boolean.testschalter"],"start_time":"2023-07-04T18:10:49.546Z","minimal_response":true,"significant_changes_only":true,"no_attributes":true,"id":38}

        console.log('Getting history ' + JSON.stringify(message));
        const entities = [];
        for (const id of message.entity_ids) {
            const entity = this.entityData.entityId2Entity[id];
            entities.push(entity || id);
        }

        const oldResult = await getHistory(this.adapter, entities, message.start_time, message.end_time, message.no_attributes, this.adapter.config.defaultUser);
        const result = convertHistoryResultToWebsocketApi(entities, oldResult);
        const response = {
            id: message.id,
            type: 'event',
            success: true,
            event: {
                states: result
            }
        };
        console.log(response);
        ws.send(JSON.stringify(response));
    }

    async processRequest(req, res) {
        this.adapter.log.debug(`Get history for ${req.query.filter_entity_id} from ${req.params.start} to ${req.query.end_time}`);

        const entityIDs = req.query.filter_entity_id.split(',').map(id => id.trim());
        const entities = [];
        for (const id of entityIDs) {
            const entity = this.entityData.entityId2Entity[id];
            entities.push(entity || id);
        }

        const result = await getHistory(this.adapter, entities, req.params.start, req.query.end_time, req.query.noAttributes, req._user || this.adapter.config.defaultUser);
        res.json(result);
    }
}

module.exports = HistoryModule;