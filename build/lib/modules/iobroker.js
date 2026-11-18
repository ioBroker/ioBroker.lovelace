"use strict";
var import_historyGate = require("../historyGate");
const WS_OPEN = 1;
const IOBROKER_PROTOCOL_VERSION = 1;
class IobError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}
class IoBrokerModule {
  adapter;
  sendResponse;
  getUserIDFromName;
  subscribeState;
  constructor(options) {
    this.adapter = options.adapter;
    this.sendResponse = options.sendResponse;
    this.getUserIDFromName = options.getUserIDFromName;
    this.subscribeState = options.subscribeState;
  }
  /**
   * Drop every subscription of a connection. Call when a websocket closes.
   *
   * @param ws - websocket connection
   */
  clearWs(ws) {
    ws.__iobSubscriptions = null;
  }
  /**
   * Remove a single subscription (used by unsubscribe_events).
   *
   * @param ws - websocket connection
   * @param subscriptionId - the subscription id to remove
   */
  removeSubscription(ws, subscriptionId) {
    if (ws.__iobSubscriptions) {
      ws.__iobSubscriptions = ws.__iobSubscriptions.filter((s) => s.id !== subscriptionId);
    }
  }
  /**
   * Whether a client subscribed this state - needed when the adapter subscribes all states.
   *
   * @param id - ioBroker state id
   * @param wss - the websocket server
   */
  referencesState(id, wss) {
    var _a;
    if (!wss) {
      return false;
    }
    for (const client of wss.clients) {
      if ((_a = client.__iobSubscriptions) == null ? void 0 : _a.some((s) => s.ids.has(id))) {
        return true;
      }
    }
    return false;
  }
  /**
   * All state ids the clients subscribed, for the subscription bookkeeping of the server.
   *
   * @param wss - the websocket server
   */
  collectSubscribedIds(wss) {
    const ids = /* @__PURE__ */ new Set();
    if (wss) {
      for (const client of wss.clients) {
        for (const s of client.__iobSubscriptions || []) {
          s.ids.forEach((id) => ids.add(id));
        }
      }
    }
    return [...ids];
  }
  /**
   * Push a state change to every connection that subscribed it.
   *
   * @param id - ioBroker state id
   * @param state - new state
   * @param wss - the websocket server
   */
  onStateChange(id, state, wss) {
    const server = wss;
    if (!server) {
      return;
    }
    for (const ws of server.clients) {
      if (!ws.__iobSubscriptions || ws.readyState !== void 0 && ws.readyState !== WS_OPEN) {
        continue;
      }
      for (const s of ws.__iobSubscriptions) {
        if (s.ids.has(id)) {
          ws.send(JSON.stringify({ id: s.id, type: "event", event: { id, state: state != null ? state : null } }));
        }
      }
    }
  }
  /**
   * Handle the iobroker/* messages.
   *
   * @param ws - websocket connection
   * @param message - the incoming message
   * @returns true when the message was ours
   */
  async processMessage(ws, message) {
    var _a;
    const type = typeof message.type === "string" ? message.type : "";
    if (!type.startsWith("iobroker/")) {
      return false;
    }
    const user = this.getUserIDFromName((_a = ws.__auth) == null ? void 0 : _a.username);
    try {
      const result = await this._handle(ws, type, message, user);
      this.sendResponse(ws, message.id, result);
    } catch (e) {
      this.adapter.log.debug(`${type} for ${user} failed: ${String(e)}`);
      ws.send(
        JSON.stringify({
          id: message.id,
          type: "result",
          success: false,
          error: {
            code: e instanceof IobError ? e.code : "iobroker_error",
            message: e instanceof Error ? e.message : String(e)
          }
        })
      );
    }
    return true;
  }
  async _handle(ws, type, m, user) {
    var _a, _b, _c, _d;
    const options = { user };
    switch (type) {
      case "iobroker/info":
        return { version: IOBROKER_PROTOCOL_VERSION, systemLang: await this._systemLang() };
      case "iobroker/get_state":
        return (_a = await this.adapter.getForeignStateAsync(this._id(m.state_id), options)) != null ? _a : null;
      case "iobroker/set_state": {
        const state = m.state;
        const settable = state !== null && typeof state === "object" && "val" in state ? state : { val: state, ack: false };
        await this.adapter.setForeignStateAsync(this._id(m.state_id), settable, options);
        return null;
      }
      case "iobroker/subscribe_states": {
        const ids = (Array.isArray(m.state_ids) ? m.state_ids : [m.state_ids]).map((id) => this._id(id));
        for (const id of ids) {
          await this.adapter.getForeignStateAsync(id, options);
        }
        ws.__iobSubscriptions = ws.__iobSubscriptions || [];
        ws.__iobSubscriptions.push({ id: m.id, ids: new Set(ids) });
        ids.forEach((id) => this.subscribeState(id));
        return null;
      }
      case "iobroker/get_object":
        return (_b = await this.adapter.getForeignObjectAsync(this._id(m.object_id), options)) != null ? _b : null;
      case "iobroker/get_object_view": {
        const objType = typeof m.object_type === "string" ? m.object_type : "state";
        const res = await this.adapter.getObjectViewAsync(
          "system",
          objType,
          {
            startkey: typeof m.start === "string" ? m.start : "",
            endkey: typeof m.end === "string" ? m.end : "\u9999"
          },
          options
        );
        const out = {};
        for (const row of (res == null ? void 0 : res.rows) || []) {
          out[row.id] = row.value;
        }
        return out;
      }
      case "iobroker/send_to": {
        const instance = this._id(m.instance);
        if (!await this._may(user, "sendto")) {
          throw new IobError("unauthorized", `${user} may not send messages to instances`);
        }
        return await this.adapter.sendToAsync(
          instance,
          typeof m.command === "string" ? m.command : "send",
          (_c = m.message) != null ? _c : null,
          {
            timeout: Math.min(Math.max(Number(m.timeout) || 2e4, 1e3), 12e4)
          }
        );
      }
      case "iobroker/get_history": {
        const id = this._id(m.state_id);
        await this.adapter.getForeignStateAsync(id, options);
        const historyOptions = m.options || {};
        const instance = typeof historyOptions.instance === "string" && historyOptions.instance ? historyOptions.instance : this.adapter.config.history;
        if (!instance) {
          throw new IobError("not_supported", "no history instance configured");
        }
        const res = await (0, import_historyGate.getHistoryGated)(this.adapter, instance, {
          id,
          options: historyOptions
        });
        if (res == null ? void 0 : res.error) {
          throw new IobError("iobroker_error", res.error);
        }
        return (_d = res == null ? void 0 : res.result) != null ? _d : [];
      }
      case "iobroker/read_file": {
        const adapterName = this._id(m.adapter);
        const file = typeof m.file === "string" ? m.file : "";
        if (!file || file.split("/").includes("..")) {
          throw new IobError("invalid_format", "invalid file name");
        }
        const res = await this.adapter.readFileAsync(adapterName, file, options);
        const data = res == null ? void 0 : res.file;
        const mimeType = (res == null ? void 0 : res.mimeType) || "";
        if (data === void 0 || data === null) {
          throw new IobError("not_found", `${adapterName}/${file} not found`);
        }
        return Buffer.isBuffer(data) && !/^(text\/|application\/(json|javascript|xml))/.test(mimeType) ? { mimeType, base64: data.toString("base64") } : { mimeType, data: data.toString() };
      }
      default:
        throw new IobError("unknown_command", `unknown command ${type}`);
    }
  }
  _id(value) {
    if (typeof value !== "string" || !value || value.length > 500) {
      throw new IobError("invalid_format", "invalid id");
    }
    return value;
  }
  /**
   * Whether the user has a right of the "other" group (e.g. sendto), like the socket of web and admin check it.
   *
   * @param user - ioBroker user id
   * @param operation - the operation, e.g. sendto
   */
  async _may(user, operation) {
    var _a, _b;
    if (user === "system.user.admin") {
      return true;
    }
    const permissions = await this.adapter.calculatePermissionsAsync(user, []);
    return !!((_b = (_a = permissions == null ? void 0 : permissions.acl) == null ? void 0 : _a.other) == null ? void 0 : _b[operation]);
  }
  async _systemLang() {
    var _a;
    const config = await this.adapter.getForeignObjectAsync("system.config");
    return ((_a = config == null ? void 0 : config.common) == null ? void 0 : _a.language) || "en";
  }
}
module.exports = IoBrokerModule;
//# sourceMappingURL=iobroker.js.map
