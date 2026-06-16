"use strict";
var import_jinja = require("./jinja");
const bindings = require("../../../lib/bindings");
const adapterData = require("../../../lib/dataSingleton");
const WS_OPEN = 1;
function looksLikeStateId(id) {
  return typeof id === "string" && id.length > 0 && !/[\s"'`%(){}<>[\]]/.test(id);
}
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
   * Whether any active template (across all clients) references the given ioBroker state id.
   * Used by the server's onStateChange fast-path under the all-states subscription.
   *
   * @param id - ioBroker state id
   * @param wss - the websocket server (for iterating clients)
   */
  referencesState(id, wss) {
    var _a;
    if (!wss) {
      return false;
    }
    for (const client of wss.clients) {
      if ((_a = client.__templates) == null ? void 0 : _a.some((t) => t.ids.includes(id))) {
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
    var _a, _b, _c, _d;
    if (message.type !== "render_template") {
      return false;
    }
    const template = message.template;
    this.sendResponse(ws, message.id);
    if (typeof template !== "string" || !template) {
      this.adapter.log.warn(`Ignoring render_template without template string: ${JSON.stringify(message)}`);
      return true;
    }
    const obj = { template, ids: [], id: message.id, jinja: (0, import_jinja.isJinjaTemplate)(template) };
    (_a = ws.__templates) == null ? void 0 : _a.push(obj);
    const promises = [];
    const processId = async (id) => {
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
      for (const entityId of (0, import_jinja.extractEntityIds)(template)) {
        const entity = adapterData.entityId2Entity[entityId];
        const getId = (_c = (_b = entity == null ? void 0 : entity.context) == null ? void 0 : _b.STATE) == null ? void 0 : _c.getId;
        if (getId) {
          promises.push(processId(getId));
        }
        for (const attr of ((_d = entity == null ? void 0 : entity.context) == null ? void 0 : _d.ATTRIBUTES) || []) {
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
              `Cannot process variable ${JSON.stringify(v)}: ${String(e)} in template ${String(template)}`
            );
          }
        }
      }
    }
    void Promise.all(promises).then(() => {
      ws.send(
        JSON.stringify({
          id: message.id,
          type: "event",
          event: {
            result: this._render(obj),
            // The Developer Tools "Templates" page reads listeners.time and crashes if
            // listeners is missing. We don't track HA-style listeners, so report none.
            listeners: { all: false, domains: [], entities: [], time: false }
          }
        })
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
  _render(entry) {
    if (entry.jinja) {
      return (0, import_jinja.renderJinja)(String(entry.template));
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
                  event: {
                    result: this._render(t),
                    listeners: { all: false, domains: [], entities: [], time: false }
                  }
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
