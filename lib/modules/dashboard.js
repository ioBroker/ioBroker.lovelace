/**
 * Class to handle dashboards.
 *
 * It keeps an array of dashboards and delivers it to the frontend, if asked for.
 */
class DashboardModule {
    _dashboards = [];
    //store config with url_path as key.
    _dashboardConfigs = {};

    /**
     * Constructor
     *
     * @param options {object} options including adapter.
     */
    constructor(options) {
        this.adapter = options.adapter;
        this.sendResponse = options.sendResponse;
        this.sendUpdate = options.sendUpdate;
    }

    /**
     * Load the entity registry from the ioBroker object database
     *
     * @returns {Promise<void>}
     */
    async loadDashboards() {
        const storage = await this.adapter.getObjectAsync('dashboardStorage');
        this._dashboards = storage?.native?.dashboards || [];
        this._dashboardConfigs = storage?.native?.dashboardConfigs || {};
    }

    /**
     * Store the entity registry from the ioBroker object database
     *
     * @returns {Promise<void>}
     */
    async saveDashboards() {
        const storage = await this.adapter.getObjectAsync('dashboardStorage');
        if (!storage.native) {
            storage.native = {};
        }
        storage.native.dashboards = this._dashboards;
        storage.native.dashboardConfigs = this._dashboardConfigs;
        await this.adapter.setObject('dashboardStorage', storage);
    }

    /**
     * Add a dashboard config to the storage.
     *
     * @param urlPath {string} the url path of the dashboard
     * @returns object with the dashboard config
     */
    getConfig(urlPath) {
        if (this._dashboardConfigs[urlPath]) {
            return this._dashboardConfigs[urlPath];
        }
        return { views: [] };
    }

    /**
     * Store a dashboard config to the storage.
     *
     * @param urlPath {string} the url path of the dashboard
     * @param config {object} the dashboard config
     * @returns {Promise<void>}
     */
    async storeConfig(urlPath, config) {
        this._dashboardConfigs[urlPath] = config;
        await this.saveDashboards();
    }

    /**
     * Search a unique id for the dashboard.
     *
     * @param dashboard {object} the dashboard to search an id for.
     * @returns {string} the unique id for the dashboard
     */
    findDashboardId(dashboard) {
        if (dashboard.id) {
            // if the dashboard has an id, use it
            return dashboard.id;
        }

        let id = `dashboard_${dashboard.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
        id = id.replace(/_+/g, '_');
        let dashboards = this._dashboards.filter(d => d.id === id);
        let num = 1;
        while (dashboards.length > 0) {
            id = `${id}_${num}`;
            dashboards = this._dashboards.filter(d => d.id === id);
            num += 1;
        }
        return id;
    }

    /**
     * Add dashboards to the panels array.
     *
     * @param panels {Array} the panels array to add the dashboards to
     */
    addDashboardsToPanels(panels) {
        for (const dashboard of this._dashboards) {
            panels[dashboard.url_path] = {
                component_name: 'lovelace',
                icon: dashboard.show_in_sidebar ? dashboard.icon : null,
                title: dashboard.show_in_sidebar ? dashboard.title : null,
                id: dashboard.id,
                config: {
                    mode: dashboard.mode,
                },
                url_path: dashboard.url_path,
                require_admin: dashboard.require_admin,
                config_panel_domain: null, //hm?
            };
        }
    }

    /**
     * Process incoming messages from the frontend
     *
     * @param ws {WebSocket} the websocket connection
     * @param message {object} the message from the frontend
     * @returns {Promise<boolean>} true if the message was processed, false if not
     */
    async processMessage(ws, message) {
        if (message.type === 'lovelace/dashboards/list') {
            this.sendResponse(ws, message.id, this._dashboards);
            return true;
        } else if (message.type === 'lovelace/dashboards/create' || message.type === 'lovelace/dashboards/update') {
            const dashboard = this._dashboards.find(d => d.id === message.dashboard_id) || {};
            console.log('dashboard', message);
            for (const key of Object.keys(message)) {
                if (key !== 'type' && key !== 'id' && key !== 'dashboard_id') {
                    dashboard[key] = message[key] || dashboard[key];
                }
            }
            if (!message.dashboard_id) {
                // new dashboard
                dashboard.id = this.findDashboardId(dashboard);
            }
            this._dashboards = this._dashboards.filter(d => d.id !== dashboard.id);
            this._dashboards.push(dashboard);
            await this.saveDashboards();
            //notify the frontend about the new dashboard that has to be shown in sidebar.
            this.sendUpdate('panels_updated');
            this.sendResponse(ws, message.id, dashboard);
            return true;
        } else if (message.type === 'lovelace/dashboards/delete') {
            const dashboardId = message.dashboard_id;
            this._dashboards = this._dashboards.filter(d => d.id !== dashboardId);
            await this.saveDashboards();
            //notify the frontend about the new dashboard that has to be shown in sidebar.
            this.sendUpdate('panels_updated');
            this.sendResponse(ws, message.id, { success: true });
            return true;
        }
        return false;
    }

    /**
     * Clean up, save the entity registry
     *
     * @returns {Promise<void>}
     */
    async cleanup() {
        this.adapter.log.debug('cleaning up dashboards');
        await this.saveDashboards();
    }

    /**
     * Init module.
     *
     * @returns {Promise<void>}
     */
    async init() {
        await this.loadDashboards();
    }
}

module.exports = DashboardModule;
