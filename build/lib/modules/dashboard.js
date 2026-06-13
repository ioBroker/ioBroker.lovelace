"use strict";
var import_storage = require("./storage");
var import_utils = require("../entities/utils");
class DashboardModule {
  _dashboards = [];
  _dashboardConfigs = {};
  /** Per-panel overrides (title/icon/require_admin/show_in_sidebar) keyed by url_path, e.g. 'lovelace'. */
  _panelOverrides = {};
  adapter;
  sendResponse;
  sendUpdate;
  /**
   * Constructor
   *
   * @param options - options including adapter.
   * @param options.adapter - ioBroker adapter instance
   * @param options.sendResponse - function to send a response to a client
   * @param options.sendUpdate - function to broadcast an update event
   */
  constructor(options) {
    this.adapter = options.adapter;
    this.sendResponse = options.sendResponse;
    this.sendUpdate = options.sendUpdate;
  }
  /**
   * Load the dashboards from the ioBroker object database.
   */
  async loadDashboards() {
    var _a, _b, _c;
    const storage = await this.adapter.getObjectAsync(`${import_storage.STORAGE_PREFIX}dashboardStorage`);
    this._dashboards = ((_a = storage == null ? void 0 : storage.native) == null ? void 0 : _a.dashboards) || [];
    this._dashboardConfigs = ((_b = storage == null ? void 0 : storage.native) == null ? void 0 : _b.dashboardConfigs) || {};
    this._panelOverrides = ((_c = storage == null ? void 0 : storage.native) == null ? void 0 : _c.panelOverrides) || {};
  }
  /**
   * Store the dashboards to the ioBroker object database.
   */
  async saveDashboards() {
    const storage = await this.adapter.getObjectAsync(
      `${import_storage.STORAGE_PREFIX}dashboardStorage`
    );
    if (!storage.native) {
      storage.native = {};
    }
    storage.native.dashboards = this._dashboards;
    storage.native.dashboardConfigs = this._dashboardConfigs;
    storage.native.panelOverrides = this._panelOverrides;
    await this.adapter.setObject(`${import_storage.STORAGE_PREFIX}dashboardStorage`, storage);
  }
  /**
   * Get config for a dashboard url path.
   *
   * @param urlPath - the URL path of the dashboard
   */
  getConfig(urlPath) {
    if (this._dashboardConfigs[urlPath]) {
      return this._dashboardConfigs[urlPath];
    }
    return { views: [] };
  }
  /**
   * Store a dashboard config.
   *
   * @param urlPath - the URL path of the dashboard
   * @param config - the dashboard config to store
   */
  async storeConfig(urlPath, config) {
    this._dashboardConfigs[urlPath] = config;
    await this.saveDashboards();
  }
  /**
   * Replace a renamed entity_id across all stored additional-dashboard configs.
   *
   * @param oldEntityId - previous HA entity_id
   * @param newEntityId - new HA entity_id
   * @returns true if any dashboard config changed (and was persisted)
   */
  async renameEntityId(oldEntityId, newEntityId) {
    let changed = false;
    for (const urlPath of Object.keys(this._dashboardConfigs)) {
      if ((0, import_utils.replaceEntityIdInConfig)(this._dashboardConfigs[urlPath], oldEntityId, newEntityId)) {
        changed = true;
      }
    }
    if (changed) {
      await this.saveDashboards();
    }
    return changed;
  }
  /**
   * Search a unique id for the dashboard.
   *
   * @param dashboard - the dashboard to find an id for
   */
  findDashboardId(dashboard) {
    if (dashboard.id) {
      return dashboard.id;
    }
    let id = `dashboard_${(dashboard.title || "unnamed").toLowerCase().replace(/[^a-z0-9]/g, "_")}`;
    id = id.replace(/_+/g, "_");
    let dashboards = this._dashboards.filter((d) => d.id === id);
    let num = 1;
    while (dashboards.length > 0) {
      id = `${id}_${num}`;
      dashboards = this._dashboards.filter((d) => d.id === id);
      num += 1;
    }
    return id;
  }
  /**
   * Add dashboards to the panels array.
   *
   * @param panels - panels object to add dashboards to
   */
  addDashboardsToPanels(panels) {
    for (const dashboard of this._dashboards) {
      panels[dashboard.url_path] = {
        component_name: "lovelace",
        icon: dashboard.show_in_sidebar ? dashboard.icon : null,
        title: dashboard.show_in_sidebar ? dashboard.title : null,
        id: dashboard.id,
        config: { mode: dashboard.mode },
        url_path: dashboard.url_path,
        require_admin: dashboard.require_admin,
        config_panel_domain: null
      };
    }
  }
  /**
   * Apply stored per-panel overrides (title/icon/require_admin/show_in_sidebar) to the fixed panels,
   * e.g. so the main 'lovelace' board can be renamed/hidden from the frontend (frontend/update_panel).
   *
   * @param panels - panels object to apply overrides to (mutated in place)
   */
  applyPanelOverrides(panels) {
    for (const urlPath of Object.keys(this._panelOverrides)) {
      const panel = panels[urlPath];
      if (!panel) {
        continue;
      }
      const ov = this._panelOverrides[urlPath];
      if (ov.title !== void 0) {
        panel.title = ov.title;
      }
      if (ov.icon !== void 0) {
        panel.icon = ov.icon;
      }
      if (ov.require_admin !== void 0) {
        panel.require_admin = ov.require_admin;
      }
      if (ov.show_in_sidebar !== void 0) {
        panel.show_in_sidebar = ov.show_in_sidebar;
      }
    }
  }
  /**
   * Process incoming messages from the frontend.
   *
   * @param ws - websocket connection to the client
   * @param message - the message from the frontend
   */
  async processMessage(ws, message) {
    if (message.type === "lovelace/dashboards/list") {
      this.sendResponse(ws, message.id, this._dashboards);
      return true;
    } else if (message.type === "lovelace/dashboards/create" || message.type === "lovelace/dashboards/update") {
      const dashboard = this._dashboards.find((d) => d.id === message.dashboard_id) || {};
      for (const key of Object.keys(message)) {
        if (key !== "type" && key !== "id" && key !== "dashboard_id") {
          dashboard[key] = message[key] || dashboard[key];
        }
      }
      if (!message.dashboard_id) {
        dashboard.id = this.findDashboardId(dashboard);
      }
      this._dashboards = this._dashboards.filter((d) => d.id !== dashboard.id);
      this._dashboards.push(dashboard);
      await this.saveDashboards();
      this.sendUpdate("panels_updated");
      this.sendResponse(ws, message.id, dashboard);
      return true;
    } else if (message.type === "lovelace/dashboards/delete") {
      const dashboardId = message.dashboard_id;
      this._dashboards = this._dashboards.filter((d) => d.id !== dashboardId);
      await this.saveDashboards();
      this.sendUpdate("panels_updated");
      this.sendResponse(ws, message.id, { success: true });
      return true;
    } else if (message.type === "frontend/update_panel") {
      const urlPath = message.url_path;
      if (urlPath) {
        await this._storePanelOverride(urlPath, message);
      }
      this.sendResponse(ws, message.id, null);
      return true;
    }
    return false;
  }
  /**
   * Merge the editable panel fields (title/icon/require_admin/show_in_sidebar) from a message into
   * the stored override for a panel, persist, and notify clients to reload their panels.
   *
   * @param urlPath - panel url_path (e.g. 'lovelace')
   * @param source - message containing the new values
   */
  async _storePanelOverride(urlPath, source) {
    const ov = this._panelOverrides[urlPath] || {};
    for (const key of ["title", "icon", "require_admin", "show_in_sidebar"]) {
      if (source[key] !== void 0) {
        ov[key] = source[key];
      }
    }
    this._panelOverrides[urlPath] = ov;
    await this.saveDashboards();
    this.sendUpdate("panels_updated");
  }
  /**
   * Clean up, save dashboards.
   */
  async cleanup() {
    this.adapter.log.debug("cleaning up dashboards");
    await this.saveDashboards();
  }
  /**
   * Init module.
   */
  async init() {
    await this.loadDashboards();
    this.adapter.log.debug("modules/dashboard: init done.");
  }
}
module.exports = DashboardModule;
//# sourceMappingURL=dashboard.js.map
