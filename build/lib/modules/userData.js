"use strict";
var import_storage = require("./storage");
class UserDataModule {
  adapter;
  sendResponse;
  _userData = {};
  _objectId = `${import_storage.STORAGE_PREFIX}userData`;
  constructor(options) {
    this.adapter = options.adapter;
    this.sendResponse = options.sendResponse;
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
      return { default_panel: "lovelace", ...stored || {} };
    }
    return stored != null ? stored : null;
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
            { id: message.id, type: "event", event: { value: null } }
          ])
        );
        return true;
      case "frontend/get_system_data":
        this.sendResponse(ws, message.id, { value: null });
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
