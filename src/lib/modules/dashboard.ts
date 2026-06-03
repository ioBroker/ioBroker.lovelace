import { STORAGE_PREFIX } from './storage';
import { replaceEntityIdInConfig } from '../entities/utils';
type SendResponseFn = (ws: unknown, id: unknown, result: unknown) => void;
type SendUpdateFn = (type: string) => void;

interface Dashboard {
    id?: string;
    title?: string;
    url_path?: string;
    show_in_sidebar?: boolean;
    icon?: string;
    mode?: string;
    require_admin?: boolean;
    [key: string]: unknown;
}

/**
 * Class to handle dashboards.
 */
class DashboardModule {
    private _dashboards: Dashboard[] = [];
    private _dashboardConfigs: Record<string, unknown> = {};
    /** Per-panel overrides (title/icon/require_admin/show_in_sidebar) keyed by url_path, e.g. 'lovelace'. */
    private _panelOverrides: Record<string, Record<string, unknown>> = {};

    private adapter: ioBroker.Adapter;
    private sendResponse: SendResponseFn;
    private sendUpdate: SendUpdateFn;

    /**
     * Constructor
     *
     * @param options - options including adapter.
     * @param options.adapter - ioBroker adapter instance
     * @param options.sendResponse - function to send a response to a client
     * @param options.sendUpdate - function to broadcast an update event
     */
    constructor(options: { adapter: ioBroker.Adapter; sendResponse: SendResponseFn; sendUpdate: SendUpdateFn }) {
        this.adapter = options.adapter;
        this.sendResponse = options.sendResponse;
        this.sendUpdate = options.sendUpdate;
    }

    /**
     * Load the dashboards from the ioBroker object database.
     */
    async loadDashboards(): Promise<void> {
        const storage = await this.adapter.getObjectAsync(`${STORAGE_PREFIX}dashboardStorage`);
        this._dashboards =
            ((storage as ioBroker.Object & { native: Record<string, unknown> })?.native?.dashboards as Dashboard[]) ||
            [];
        this._dashboardConfigs =
            ((storage as ioBroker.Object & { native: Record<string, unknown> })?.native?.dashboardConfigs as Record<
                string,
                unknown
            >) || {};
        this._panelOverrides =
            ((storage as ioBroker.Object & { native: Record<string, unknown> })?.native?.panelOverrides as Record<
                string,
                Record<string, unknown>
            >) || {};
    }

    /**
     * Store the dashboards to the ioBroker object database.
     */
    async saveDashboards(): Promise<void> {
        const storage = (await this.adapter.getObjectAsync(
            `${STORAGE_PREFIX}dashboardStorage`,
        )) as ioBroker.AnyObject & {
            native: Record<string, unknown>;
        };
        if (!storage.native) {
            storage.native = {};
        }
        storage.native.dashboards = this._dashboards;
        storage.native.dashboardConfigs = this._dashboardConfigs;
        storage.native.panelOverrides = this._panelOverrides;
        await this.adapter.setObject(`${STORAGE_PREFIX}dashboardStorage`, storage);
    }

    /**
     * Get config for a dashboard url path.
     *
     * @param urlPath - the URL path of the dashboard
     */
    getConfig(urlPath: string): unknown {
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
    async storeConfig(urlPath: string, config: unknown): Promise<void> {
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
    async renameEntityId(oldEntityId: string, newEntityId: string): Promise<boolean> {
        let changed = false;
        for (const urlPath of Object.keys(this._dashboardConfigs)) {
            if (replaceEntityIdInConfig(this._dashboardConfigs[urlPath], oldEntityId, newEntityId)) {
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
    findDashboardId(dashboard: Dashboard): string {
        if (dashboard.id) {
            return dashboard.id;
        }

        let id = `dashboard_${(dashboard.title || 'unnamed').toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
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
     * @param panels - panels object to add dashboards to
     */
    addDashboardsToPanels(panels: Record<string, unknown>): void {
        for (const dashboard of this._dashboards) {
            panels[dashboard.url_path!] = {
                component_name: 'lovelace',
                icon: dashboard.show_in_sidebar ? dashboard.icon : null,
                title: dashboard.show_in_sidebar ? dashboard.title : null,
                id: dashboard.id,
                config: { mode: dashboard.mode },
                url_path: dashboard.url_path,
                require_admin: dashboard.require_admin,
                config_panel_domain: null,
            };
        }
    }

    /**
     * Apply stored per-panel overrides (title/icon/require_admin/show_in_sidebar) to the fixed panels,
     * e.g. so the main 'lovelace' board can be renamed/hidden from the frontend (frontend/update_panel).
     *
     * @param panels - panels object to apply overrides to (mutated in place)
     */
    applyPanelOverrides(panels: Record<string, unknown>): void {
        for (const urlPath of Object.keys(this._panelOverrides)) {
            const panel = panels[urlPath] as Record<string, unknown> | undefined;
            if (!panel) {
                continue;
            }
            const ov = this._panelOverrides[urlPath];
            if (ov.show_in_sidebar === false) {
                panel.title = null;
                panel.icon = null;
            } else {
                if (ov.title !== undefined) {
                    panel.title = ov.title;
                }
                if (ov.icon !== undefined) {
                    panel.icon = ov.icon;
                }
            }
            if (ov.require_admin !== undefined) {
                panel.require_admin = ov.require_admin;
            }
        }
    }

    /**
     * Process incoming messages from the frontend.
     *
     * @param ws - websocket connection to the client
     * @param message - the message from the frontend
     */
    async processMessage(ws: unknown, message: Record<string, unknown>): Promise<boolean> {
        if (message.type === 'lovelace/dashboards/list') {
            this.sendResponse(ws, message.id, this._dashboards);
            return true;
        } else if (message.type === 'lovelace/dashboards/create' || message.type === 'lovelace/dashboards/update') {
            const dashboard: Dashboard = this._dashboards.find(d => d.id === message.dashboard_id) || {};
            console.log('dashboard', message);
            for (const key of Object.keys(message)) {
                if (key !== 'type' && key !== 'id' && key !== 'dashboard_id') {
                    dashboard[key] = message[key] || dashboard[key];
                }
            }
            if (!message.dashboard_id) {
                dashboard.id = this.findDashboardId(dashboard);
            }
            this._dashboards = this._dashboards.filter(d => d.id !== dashboard.id);
            this._dashboards.push(dashboard);
            await this.saveDashboards();
            this.sendUpdate('panels_updated');
            this.sendResponse(ws, message.id, dashboard);
            return true;
        } else if (message.type === 'lovelace/dashboards/delete') {
            const dashboardId = message.dashboard_id as string;
            this._dashboards = this._dashboards.filter(d => d.id !== dashboardId);
            await this.saveDashboards();
            this.sendUpdate('panels_updated');
            this.sendResponse(ws, message.id, { success: true });
            return true;
        } else if (message.type === 'frontend/update_panel') {
            // Edit of a fixed panel (e.g. the main 'lovelace' board): title/icon/require_admin/
            // show_in_sidebar. Stored as an override and applied in get_panels.
            const urlPath = message.url_path as string;
            if (urlPath) {
                const ov = this._panelOverrides[urlPath] || {};
                for (const key of ['title', 'icon', 'require_admin', 'show_in_sidebar']) {
                    if (message[key] !== undefined) {
                        ov[key] = message[key];
                    }
                }
                this._panelOverrides[urlPath] = ov;
                await this.saveDashboards();
                this.sendUpdate('panels_updated');
            }
            this.sendResponse(ws, message.id, null);
            return true;
        }
        return false;
    }

    /**
     * Clean up, save dashboards.
     */
    async cleanup(): Promise<void> {
        this.adapter.log.debug('cleaning up dashboards');
        await this.saveDashboards();
    }

    /**
     * Init module.
     */
    async init(): Promise<void> {
        await this.loadDashboards();
        this.adapter.log.debug('modules/dashboard: init done.');
    }
}

export = DashboardModule;
