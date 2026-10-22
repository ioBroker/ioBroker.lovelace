"use strict";
var import_conditionEvaluator = require("./conditionEvaluator");
const WS_OPEN = 1;
const adapterData = require("../../../lib/dataSingleton");
class ConditionModule {
  adapter;
  sendResponse;
  constructor(options) {
    this.adapter = options.adapter;
    this.sendResponse = options.sendResponse;
  }
  /**
   * Drop every condition subscription of a connection. Call when a websocket closes.
   *
   * @param ws - websocket connection
   */
  clearWs(ws) {
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
  removeSubscription(ws, subscriptionId) {
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
  processMessage(ws, message) {
    if (message.type === "test_condition") {
      try {
        const result2 = (0, import_conditionEvaluator.asArray)(message.condition).every((condition2) => (0, import_conditionEvaluator.evaluateCondition)(condition2));
        this.sendResponse(ws, message.id, { result: result2 });
      } catch (e) {
        this._sendError(ws, message.id, e);
      }
      return true;
    }
    if (message.type !== "subscribe_condition") {
      return false;
    }
    const condition = message.condition;
    let result;
    try {
      result = (0, import_conditionEvaluator.evaluateCondition)(condition);
    } catch (e) {
      this.adapter.log.debug(`Cannot evaluate condition ${JSON.stringify(condition)}: ${String(e)}`);
      this._sendError(ws, message.id, e);
      return true;
    }
    const subscription = {
      id: message.id,
      condition,
      entityIds: (0, import_conditionEvaluator.collectEntityIds)(condition),
      timers: []
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
  onStateChange(id, _state, wss) {
    const server = wss;
    if (!server) {
      return;
    }
    const entityIds = (adapterData.iobID2entity[id] || []).map((entity) => entity == null ? void 0 : entity.entity_id);
    if (!entityIds.length) {
      return;
    }
    for (const client of server.clients) {
      if (!client.__conditions || client.readyState !== WS_OPEN) {
        continue;
      }
      for (const subscription of client.__conditions) {
        if (subscription.entityIds.some((entityId) => entityIds.includes(entityId))) {
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
  _reevaluate(ws, subscription) {
    this._clearTimers(subscription);
    let result;
    try {
      result = (0, import_conditionEvaluator.evaluateCondition)(subscription.condition, {
        schedule: (delay) => {
          subscription.timers.push(
            setTimeout(() => {
              var _a;
              if ((_a = ws.__conditions) == null ? void 0 : _a.includes(subscription)) {
                this._reevaluate(ws, subscription);
              }
            }, delay)
          );
        }
      });
    } catch (e) {
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
  _send(ws, subscription, result) {
    subscription.result = result;
    ws.send(JSON.stringify({ id: subscription.id, type: "event", event: { result } }));
  }
  /**
   * Tell the client that we cannot evaluate this condition. The frontend then hides the element
   * and shows the message in the condition editor.
   *
   * @param ws - websocket connection
   * @param id - message id
   * @param error - what went wrong
   */
  _sendError(ws, id, error) {
    ws.send(
      JSON.stringify({
        id,
        type: "result",
        success: false,
        error: {
          code: error instanceof import_conditionEvaluator.UnsupportedConditionError ? "not_supported" : "invalid_format",
          message: error instanceof Error ? error.message : String(error)
        }
      })
    );
  }
  /**
   * Drop the pending `for` timers of a subscription.
   *
   * @param subscription - the subscription to clean up
   */
  _clearTimers(subscription) {
    for (const timer of subscription.timers) {
      clearTimeout(timer);
    }
    subscription.timers = [];
  }
}
module.exports = ConditionModule;
//# sourceMappingURL=condition.js.map
