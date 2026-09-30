"use strict";
class CompatModule {
  sendResponse;
  constructor(options) {
    this.sendResponse = options.sendResponse;
  }
  /**
   * Handle a stub message.
   *
   * @param ws - websocket connection
   * @param message - the message
   * @returns true if handled
   */
  processMessage(ws, message) {
    switch (message.type) {
      case "repairs/list_issues":
        this.sendResponse(ws, message.id, { issues: [] });
        return true;
      case "config/floor_registry/list":
        this.sendResponse(ws, message.id, []);
        return true;
      case "config/label_registry/list":
        this.sendResponse(ws, message.id, []);
        return true;
      case "config/category_registry/list":
        this.sendResponse(ws, message.id, []);
        return true;
      case "homeassistant/expose_entity/list":
        this.sendResponse(ws, message.id, { exposed_entities: {} });
        return true;
      case "integration/descriptions":
        this.sendResponse(ws, message.id, {});
        return true;
      case "config_entries/subscribe":
        ws.send(
          JSON.stringify([
            { id: message.id, type: "result", success: true, result: null },
            { id: message.id, type: "event", event: [] }
          ])
        );
        return true;
      case "config_entries/flow/progress":
        this.sendResponse(ws, message.id, []);
        return true;
      case "config_entries/get":
        this.sendResponse(ws, message.id, []);
        return true;
      case "config_entries/flow/subscribe":
        ws.send(
          JSON.stringify([
            { id: message.id, type: "result", success: true, result: null },
            { id: message.id, type: "event", event: [] }
          ])
        );
        return true;
      case "http/config": {
        const http = {
          use_x_forwarded_for: false,
          trusted_proxies: [],
          use_x_frame_options: true,
          ip_ban_enabled: false,
          login_attempts_threshold: -1
        };
        this.sendResponse(ws, message.id, {
          stable: http,
          pending: null,
          active_config_type: "storage",
          default: http
        });
        return true;
      }
      case "manifest/list":
        this.sendResponse(ws, message.id, []);
        return true;
      default:
        return false;
    }
  }
}
module.exports = CompatModule;
//# sourceMappingURL=compat.js.map
