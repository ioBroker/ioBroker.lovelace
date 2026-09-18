"use strict";
var import_storage = require("./storage");
class UserDataModule {
  adapter;
  sendResponse;
  getLanguage;
  getDefaultPanel;
  getGlobalDefaultPanel;
  _userData = {};
  _objectId = `${import_storage.STORAGE_PREFIX}userData`;
  /**
   * Create the user data module.
   *
   * @param options - options object
   * @param options.adapter - ioBroker adapter instance
   * @param options.sendResponse - send a result to a websocket client
   * @param options.getLanguage - the adapter language (config, else the ioBroker system language)
   * @param options.getDefaultPanel - browser_mod's default dashboard for this connection
   * @param options.getGlobalDefaultPanel - browser_mod's global default dashboard
   */
  constructor(options) {
    this.adapter = options.adapter;
    this.sendResponse = options.sendResponse;
    this.getLanguage = options.getLanguage || (() => void 0);
    this.getDefaultPanel = options.getDefaultPanel || (() => void 0);
    this.getGlobalDefaultPanel = options.getGlobalDefaultPanel || (() => void 0);
  }
  async init() {
    var _a;
    try {
      const obj = await this.adapter.getObjectAsync(this._objectId);
      this._userData = ((_a = obj == null ? void 0 : obj.native) == null ? void 0 : _a.userData) || {};
    } catch (e) {
      this.adapter.log.debug(`Could not load userData: ${String(e)}`);
      this._userData = {};
    }
    this.adapter.log.debug("modules/userData: init done.");
  }
  async _save() {
    try {
      const obj = await this.adapter.getObjectAsync(this._objectId);
      if (obj) {
        obj.native = obj.native || {};
        obj.native.userData = this._userData;
        await this.adapter.setObjectAsync(this._objectId, obj);
      }
    } catch (e) {
      this.adapter.log.warn(`Could not save userData: ${String(e)}`);
    }
  }
  /**
   * Identify the frontend "user". Uses the authenticated username, else a shared default.
   *
   * @param ws - websocket connection
   */
  _getUserKey(ws) {
    var _a;
    return ((_a = ws.__auth) == null ? void 0 : _a.username) || "_default";
  }
  /**
   * Read a single user-data value for the given connection and key. The 'core' key always carries
   * default_panel so the frontend lands on the lovelace dashboard.
   *
   * @param ws - websocket connection
   * @param key - user-data key (core, theme, sidebar, language, …)
   */
  _getValue(ws, key) {
    var _a;
    const stored = (_a = this._userData[this._getUserKey(ws)]) == null ? void 0 : _a[key];
    if (key === "core") {
      const browserModPanel = this.getDefaultPanel(ws);
      return { default_panel: browserModPanel || "lovelace", ...stored || {} };
    }
    if (key === "language") {
      const language = this.getLanguage();
      const locale = stored || void 0;
      if (!language) {
        return locale != null ? locale : null;
      }
      if (locale == null ? void 0 : locale.language) {
        return locale;
      }
      return { ...locale || {}, language };
    }
    return stored != null ? stored : null;
  }
  /**
   * Read a system-data value. Only the `core` key carries something: the default dashboard set
   * globally in browser_mod (the per-user and per-browser ones travel in the user data).
   *
   * @param key - system-data key
   */
  _getSystemValue(key) {
    if (key === "core") {
      const defaultPanel = this.getGlobalDefaultPanel();
      return defaultPanel ? { default_panel: defaultPanel } : null;
    }
    return null;
  }
  /**
   * Handle a frontend user/system data message.
   *
   * @param ws - websocket connection
   * @param message - the message
   * @returns true if handled
   */
  processMessage(ws, message) {
    const type = message.type;
    const key = message.key;
    switch (type) {
      case "frontend/subscribe_user_data":
        ws.send(
          JSON.stringify([
            { id: message.id, type: "result", success: true, result: null },
            { id: message.id, type: "event", event: { value: this._getValue(ws, key) } }
          ])
        );
        return true;
      case "frontend/get_user_data":
        this.sendResponse(ws, message.id, { value: this._getValue(ws, key) });
        return true;
      case "frontend/set_user_data": {
        const userKey = this._getUserKey(ws);
        this._userData[userKey] = this._userData[userKey] || {};
        this._userData[userKey][key] = message.value;
        void this._save();
        this.sendResponse(ws, message.id, null);
        return true;
      }
      case "frontend/subscribe_system_data":
        ws.send(
          JSON.stringify([
            { id: message.id, type: "result", success: true, result: null },
            { id: message.id, type: "event", event: { value: this._getSystemValue(key) } }
          ])
        );
        return true;
      case "frontend/get_system_data":
        this.sendResponse(ws, message.id, { value: this._getSystemValue(key) });
        return true;
      case "frontend/set_system_data":
        this.sendResponse(ws, message.id, null);
        return true;
      default:
        return false;
    }
  }
}
module.exports = UserDataModule;
//# sourceMappingURL=userData.js.map
