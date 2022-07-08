const iobState2EntityState = require('../converters/genericConverter').iobState2EntityState;

/**
 * convert .ts of state e to ISOString with try/catch and now as fallback.
 * @param {ioBroker.state} e
 * @returns {string}
 * @private
 */
function _convertStateTStoISOString(e) {
    try {
        return new Date(e.ts).toISOString();
    } catch (error) {
        return new Date().toISOString();
    }
}

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
exports.getHistory = async function(adapter, entities, start, end, noAttributes, user) {
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
                        user,
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
                            if (id) {
                                attributesResult[attribute.attribute] = await adapter.sendToAsync(adapter.config.history,
                                    'getHistory', {id, options});
                            } else {
                                attributesResult[attribute.attribute] = {result: []};
                            }
                        }
                    }

                    //match attributes to states by ts:
                    const getAttributeValues = (ts, attributesResult, attributesUsed = [], attributeValues = {}) => {
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
                                        const diff = Math.abs(result.ts - new Date(ts).getTime());
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
                            const ts = _convertStateTStoISOString(e);
                            const result = {
                                entity_id: entity.entity_id,
                                state: typeof entity.context.STATE.historyParser === 'function' ?
                                    entity.context.STATE.historyParser(id, e.val).toString() :
                                    iobState2EntityState(entity, e.val).toString(),
                                last_changed: ts,
                                last_updated: ts,
                                attributes: getAttributeValues(ts, attributesResult, attributesUsed)
                            };
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
                                    const ts = _convertStateTStoISOString(result);
                                    attributeValues[attribute.attribute] = typeof attribute.historyParser === 'function' ? attribute.historyParser(id, result.val) : result.val;
                                    result.used = true;
                                    //fill in other attributes:
                                    const data = {
                                        entity_id: entity.entity_id,
                                        //state: null,
                                        last_changed: ts,
                                        last_updated: ts,
                                        attributes: getAttributeValues(ts, attributesResult, attributesUsed, attributeValues)
                                    };
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
                adapter.log.warn(`Cannot get history - Unknown entity: ${id}`);
                totalResult.push([]); // place default value
            }
        }
    }
    return totalResult;
}
