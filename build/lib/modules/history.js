"use strict";
const WS_OPEN = 1;
const { iobState2EntityState } = require("../converters/genericConverter");
const { getHistoryGated, boundHistoryCount } = require("../historyGate");
function applyHistoryTimestamps(entry, state) {
  var _a, _b, _c, _d, _e;
  let lu = (_a = state.ts) != null ? _a : Date.now();
  let lc = (_c = (_b = state.lc) != null ? _b : state.ts) != null ? _c : Date.now();
  if (isNaN(new Date(lc).getTime())) {
    lc = Date.now();
  }
  if (isNaN(new Date(lu).getTime())) {
    lu = Date.now();
  }
  const entryLc = (_d = entry.lc) != null ? _d : 0;
  const entryLu = (_e = entry.lu) != null ? _e : 0;
  if (lc / 1e3 > entryLc || isNaN(entryLc) || new Date(entryLc * 1e3).toString() === "Invalid Date") {
    entry.lc = lc / 1e3;
  }
  if (lu / 1e3 > entryLu || isNaN(entryLu) || new Date(entryLu * 1e3).toString() === "Invalid Date") {
    entry.lu = lu / 1e3;
  }
}
async function getHistory(adapter, entities, start, end, noAttributes, user) {
  var _a;
  const totalResult = {};
  if (!adapter.config.history) {
    adapter.log.warn(`History instance is not selected in the settings`);
  } else {
    for (const entity of entities) {
      if (typeof entity === "object") {
        const id = entity.context.STATE.getId || entity.context.STATE.setId;
        try {
          let stateResult;
          const options = {
            start,
            end,
            count: boundHistoryCount(adapter.config.historyMaxCount),
            aggregate: "onchange",
            user
          };
          if (id) {
            stateResult = await getHistoryGated(adapter, adapter.config.history, {
              id,
              options
            });
          } else {
            stateResult = { result: [] };
          }
          const attributesResult = {};
          if (!noAttributes && entity.context.ATTRIBUTES) {
            for (const attribute of entity.context.ATTRIBUTES) {
              const attrId = attribute.getId || attribute.setId;
              if (attrId) {
                attributesResult[attribute.attribute] = await getHistoryGated(
                  adapter,
                  adapter.config.history,
                  { id: attrId, options }
                );
              } else {
                attributesResult[attribute.attribute] = { result: [] };
              }
            }
          }
          const getAttributeValues = (state, attrResult, attributesUsed2 = [], attributeValues = {}) => {
            var _a2;
            const ts = state.ts;
            if (entity.context.ATTRIBUTES) {
              for (const attribute of entity.context.ATTRIBUTES) {
                if (attributesUsed2.indexOf(attribute.attribute) >= 0) {
                  continue;
                }
                let found = false;
                let best = null;
                let bestDiff = 1e4;
                const results = ((_a2 = attrResult[attribute.attribute]) == null ? void 0 : _a2.result) || [];
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
                  attributeValues[attribute.attribute] = typeof attribute.historyParser === "function" ? attribute.historyParser(id, best.val) : best.val;
                  best.used = true;
                }
              }
            }
            for (const key of Object.keys(entity.attributes)) {
              if (!entity.context.ATTRIBUTES || !entity.context.ATTRIBUTES.find((a) => a.attribute === key)) {
                attributeValues[key] = entity.attributes[key];
              }
            }
            return attributeValues;
          };
          const historyPerEntity = [];
          const attributesUsed = [];
          for (const e of stateResult.result) {
            const result = {
              s: typeof entity.context.STATE.historyParser === "function" ? String(entity.context.STATE.historyParser(id, e.val)) : iobState2EntityState(entity, e.val),
              a: noAttributes ? {} : getAttributeValues(e, attributesResult, attributesUsed),
              lc: 1,
              lu: 1
            };
            applyHistoryTimestamps(result, e);
            historyPerEntity.push(result);
          }
          if (!noAttributes && entity.context.ATTRIBUTES) {
            for (const attribute of entity.context.ATTRIBUTES) {
              attributesUsed.push(attribute.attribute);
              const results = ((_a = attributesResult[attribute.attribute]) == null ? void 0 : _a.result) || [];
              for (const result of results) {
                if (!result.used) {
                  const attributeValues = {};
                  attributeValues[attribute.attribute] = typeof attribute.historyParser === "function" ? attribute.historyParser(id, result.val) : result.val;
                  result.used = true;
                  const data = {
                    lc: 1,
                    lu: 1,
                    a: noAttributes ? {} : getAttributeValues(
                      result,
                      attributesResult,
                      attributesUsed,
                      attributeValues
                    )
                  };
                  applyHistoryTimestamps(data, result);
                  historyPerEntity.push(data);
                }
              }
            }
          }
          if (historyPerEntity.length === 0) {
            historyPerEntity.push({
              s: entity.state,
              a: {},
              lu: start / 1e3
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
function sendHistoryResponse(ws, id, historyData, parameters) {
  if (!historyData) {
    historyData = {};
    for (const entityId of parameters.entityIds) {
      historyData[entityId] = [];
    }
  }
  let startTime = parameters.startTime / 1e3;
  let endTime = startTime;
  for (const stateArray of Object.values(historyData)) {
    for (const state of stateArray) {
      if (state.lu < startTime) {
        startTime = state.lu;
      }
      if (state.lu > endTime) {
        endTime = state.lu;
      }
      if (state.s === null || state.s === void 0) {
        state.s = "unknown";
      }
      if (state.a === void 0) {
        state.a = {};
      }
    }
  }
  const response = {
    id: Number(id),
    type: "event",
    event: { states: historyData },
    start_time: startTime,
    end_time: endTime
  };
  ws.send(JSON.stringify(response));
}
function _convertStateTStoISOString(e) {
  var _a;
  try {
    return new Date(((_a = e.lu || e.lc) != null ? _a : 0) * 1e3).toISOString();
  } catch {
    return (/* @__PURE__ */ new Date()).toISOString();
  }
}
class HistoryModule {
  adapter;
  entityData;
  personModule;
  /**
   * Create a new history module.
   *
   * @param options - constructor options
   * @param options.adapter - ioBroker adapter instance
   * @param options.entityData - shared entity data singleton
   * @param options.personModule - person module for user id resolution
   */
  constructor(options) {
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
  async processRequest(req, res) {
    const entityIDs = req.query.filter_entity_id.split(",").map((id) => id.trim());
    const entities = [];
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
      this.personModule.getUserIDFromName(req._user)
    );
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
    res.json(oldResult);
  }
  /**
   * Process a history message from the frontend.
   *
   * @param ws - websocket connection to the client
   * @param message - the message from the frontend
   */
  async processMessage(ws, message) {
    var _a;
    if (message.type && message.type.startsWith("history/")) {
      let parameters;
      if (message.type === "history/stream") {
        ws.send(JSON.stringify({ id: Number(message.id), type: "result", success: true, result: null }));
        parameters = {
          entityIds: message.entity_ids,
          startTime: new Date(message.start_time).getTime(),
          minimalResponse: message.minimal_response,
          significantChangesOnly: message.significant_changes_only,
          noAttributes: message.no_attributes,
          id: Number(message.id)
        };
        const historySubs = ws._subscribes;
        historySubs.history = historySubs.history || [];
        historySubs.history.push(parameters);
      } else if (message.type === "history/history_during_period") {
        parameters = {
          entityIds: message.entity_ids,
          startTime: new Date(message.start_time).getTime(),
          minimalResponse: message.minimal_response,
          significantChangesOnly: message.significant_changes_only,
          noAttributes: message.no_attributes,
          id: Number(message.id)
        };
      } else {
        this.adapter.log.warn(`Unknown history message type: ${message.type}`);
      }
      if (!parameters) {
        return true;
      }
      if (!this.adapter.config.history) {
        this.adapter.log.warn(`History instance is not selected in the settings -> history won't work`);
        sendHistoryResponse(ws, message.id, null, parameters);
        return true;
      }
      const entities = [];
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
        this.personModule.getUserIDFromName((_a = ws.__auth) == null ? void 0 : _a.username)
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
  onStateChange(id, state, websocketServer) {
    if (state) {
      if (websocketServer) {
        for (const client of websocketServer.clients) {
          const historySubs = client._subscribes;
          if (historySubs.history && client.readyState === WS_OPEN) {
            for (const parameters of historySubs.history) {
              const states = {};
              const entityIdsAffected = this.entityData.iobID2entity[id] || [];
              for (const entity of entityIdsAffected) {
                if (parameters.entityIds.includes(entity.entity_id)) {
                  this.adapter.log.debug(
                    `History subscription ${parameters.id} is for right entity, sending update.`
                  );
                  if (id === entity.context.STATE.getId || id === entity.context.STATE.setId) {
                    states[entity.entity_id] = [
                      {
                        s: typeof entity.context.STATE.historyParser === "function" ? String(entity.context.STATE.historyParser(id, state == null ? void 0 : state.val)) : iobState2EntityState(entity, state == null ? void 0 : state.val),
                        // Always include attributes. The map widget reads a.latitude/a.longitude
                        // from every history point; an entry without `a` crashes it
                        // ("t.a is undefined"). Carry the entity's current attributes so the
                        // point stays usable (lat/lon), instead of just an empty object.
                        a: parameters.noAttributes ? {} : { ...entity.attributes },
                        lu: ((state == null ? void 0 : state.ts) ? state.ts : Date.now()) / 1e3
                      }
                    ];
                  } else if (!parameters.noAttributes && entity.context.ATTRIBUTES) {
                    for (const attribute of entity.context.ATTRIBUTES) {
                      if (id === attribute.getId || id === attribute.setId) {
                        states[entity.entity_id] = states[entity.entity_id] || [
                          {
                            s: entity.state !== void 0 ? entity.state : "unknown",
                            lu: ((state == null ? void 0 : state.ts) ? state.ts : Date.now()) / 1e3,
                            a: {}
                          }
                        ];
                        states[entity.entity_id][0].a = states[entity.entity_id][0].a || {};
                        states[entity.entity_id][0].a[attribute.attribute] = typeof attribute.historyParser === "function" ? attribute.historyParser(id, state == null ? void 0 : state.val) : state == null ? void 0 : state.val;
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
//# sourceMappingURL=history.js.map
