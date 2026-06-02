"use strict";
const bindings = require("../../../lib/bindings");
const WS_OPEN = 1;
class TemplateModule {
  adapter;
  sendResponse;
  subscribeState;
  templateStates = {};
  constructor(options) {
    this.adapter = options.adapter;
    this.sendResponse = options.sendResponse;
    this.subscribeState = options.subscribeState;
  }
  /**
   * Initialise the per-connection template list. Call when a websocket connects.
   *
   * @param ws - websocket connection
   */
  initWs(ws) {
    ws.__templates = [];
  }
  /**
   * Drop the per-connection template list. Call when a websocket closes.
   *
   * @param ws - websocket connection
   */
  clearWs(ws) {
    ws.__templates = null;
  }
  /**
   * Remove a single template subscription (used by unsubscribe_events).
   *
   * @param ws - websocket connection
   * @param subscriptionId - the subscription id to remove
   */
  removeTemplate(ws, subscriptionId) {
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
  collectSubscribedIds(wss) {
    var _a;
    const ids = [];
    if (wss) {
      for (const client of wss.clients) {
        (_a = client.__templates) == null ? void 0 : _a.forEach((t) => ids.push(...t.ids));
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
  processMessage(ws, message) {
    var _a;
    if (message.type !== "render_template") {
      return false;
    }
    const template = message.template;
    this.sendResponse(ws, message.id);
    if (typeof template !== "string" || !template) {
      this.adapter.log.warn(`Ignoring render_template without template string: ${JSON.stringify(message)}`);
      return true;
    }
    const obj = { template, ids: [], id: message.id };
    (_a = ws.__templates) == null ? void 0 : _a.push(obj);
    const vars = bindings.extractBinding(template);
    const promises = [];
    const processId = async (id) => {
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
            `Cannot process variable ${JSON.stringify(v)}: ${String(e)} in template ${String(template)}`
          );
        }
      }
    }
    void Promise.all(promises).then(() => {
      ws.send(
        JSON.stringify({
          id: message.id,
          type: "event",
          event: { result: bindings.formatBinding(template, this.templateStates) }
        })
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
  onStateChange(id, state, wss) {
    if (!wss) {
      return;
    }
    let changed = false;
    for (const client of wss.clients) {
      if (client.__templates && client.readyState === WS_OPEN) {
        client.__templates.forEach((t) => {
          if (t.ids.includes(id)) {
            const newState = state || { val: null };
            if (changed || this.templateStates[id] && this.templateStates[id].val !== newState.val) {
              this.templateStates[id] = newState;
              changed = true;
              client.send(
                JSON.stringify({
                  id: t.id,
                  type: "event",
                  event: { result: bindings.formatBinding(t.template, this.templateStates) }
                })
              );
            }
          }
        });
      }
    }
  }
}
module.exports = TemplateModule;
//# sourceMappingURL=template.js.map
