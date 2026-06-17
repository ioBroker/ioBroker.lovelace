const instancesPath = 'instances.';

interface BrowserSettings {
    hideSidebar?: boolean;
    hideHeader?: boolean;
    defaultPanel?: string | null;
    sidebarPanelOrder?: unknown;
    sidebarHiddenPanels?: unknown;
    sidebarTitle?: string | null;
    faviconTemplate?: string | null;
    titleTemplate?: string | null;
    hideInteractIcon?: boolean;
    autoRegister?: boolean;
    lockRegister?: boolean | null;
    [key: string]: unknown;
}

interface BrowserEntry {
    last_seen: number;
    registered: boolean;
    locked: boolean;
    camera: boolean;
    settings: BrowserSettings;
    meta: string;
    hideHeader?: unknown;
}

interface BrowserModStorage {
    browsers: Record<string, BrowserEntry>;
    version: string;
    settings: BrowserSettings;
    user_settings: Record<string, unknown>;
    /** Maps a login-session key (auth token / user) to a Browser ID for sync-session recall. */
    sessions: Record<string, string>;
}

interface ClientEntry {
    subscribeId: unknown;
    instance: string;
    ws: WsWithBrowserId;
}

interface WsWithBrowserId {
    send(data: string): void;
    on(event: string, listener: (...args: unknown[]) => void): void;
    browserID?: string;
    __auth?: { username?: string; access_token?: string };
}

type AdapterWithConfig = ioBroker.Adapter & {
    config: {
        maxBrowserInstances: number;
        themes?: string;
        /** Custom browser tab title (#663). Applied via browser_mod's titleTemplate. */
        browserTitle?: string;
    };
};

// eslint-disable-next-line @typescript-eslint/no-require-imports
const yaml = require('js-yaml');

/**
 * Version reported to the browser_mod frontend. Must match the version bundled in
 * hass_frontend/static_cards/browser_mod.js (its internal `Mt` constant). If they differ,
 * the frontend shows a "Browser Mod version mismatch" reload prompt. Bump this whenever the
 * shipped browser_mod frontend is updated.
 */
const BROWSER_MOD_VERSION = '2.13.5';

/**
 * Support for browser_mod integration.
 * This is now installed with lovelace by default to control the frontends from ioBroker states.
 */
class BrowserModModule {
    private adapter: AdapterWithConfig;
    private objects: Record<string, unknown>;
    private clients: Record<string, ClientEntry>;
    private browserModStorage: BrowserModStorage;
    private knownViews: string[];
    private knownViewsStates: Record<string, string>;

    /**
     * Create a new instance of the browser_mod module.
     *
     * @param options - options object with adapter and objects
     * @param options.adapter - ioBroker adapter instance
     * @param options.objects - ioBroker objects cache
     */
    constructor(options: { adapter: AdapterWithConfig; objects: Record<string, unknown> }) {
        this.adapter = options.adapter;
        this.objects = options.objects;
        this.clients = {};
        this.browserModStorage = {
            browsers: {},
            version: BROWSER_MOD_VERSION,
            settings: {
                hideSidebar: true,
                hideHeader: false,
                defaultPanel: null,
                sidebarPanelOrder: null,
                sidebarHiddenPanels: null,
                sidebarTitle: null,
                faviconTemplate: null,
                // Custom browser tab title (#663). The frontend otherwise hardcodes the tab title;
                // browser_mod renders titleTemplate and sets document.title from it.
                titleTemplate: options.adapter.config.browserTitle || null,
                hideInteractIcon: true,
                autoRegister: true,
                lockRegister: null,
            },
            user_settings: {},
            sessions: {},
        };

        this.knownViews = [];
        this.knownViewsStates = {};
    }

    /**
     * Check if all objects for the browser_mod integration are created.
     *
     * @param ioBrokerDeviceId - ioBroker device id (path within adapter namespace)
     * @param browserId - browser_mod browser id
     * @param battery - whether to create battery state objects
     */
    async _checkObjects(ioBrokerDeviceId: string, browserId?: string, battery = false): Promise<void> {
        ioBrokerDeviceId = `${this.adapter.namespace}.${ioBrokerDeviceId}`;
        if (!this.objects[ioBrokerDeviceId]) {
            if (!browserId) {
                await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId, {
                    type: 'folder',
                    common: { name: 'UI Instances' },
                    native: {},
                });
            } else {
                await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId, {
                    type: 'device',
                    common: {
                        name: browserId,
                        statusStates: { onlineId: `${ioBrokerDeviceId}.online` },
                    },
                    native: { instance: browserId },
                });
                this.adapter.log.info(`New browser_mod instance ${browserId}`);
            }
        }

        if (!this.objects[`${ioBrokerDeviceId}.path`]) {
            await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.path`, {
                type: 'state',
                common: {
                    name: 'UI is showing path',
                    type: 'string',
                    read: true,
                    write: true,
                    role: 'state',
                    states: this.knownViewsStates,
                },
                native: { instance: browserId },
            });
        }

        if (!this.objects[`${ioBrokerDeviceId}.visible`] && browserId) {
            await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.visible`, {
                type: 'state',
                common: { name: 'UI is visible', type: 'boolean', read: true, write: false, role: 'sensor' },
                native: { instance: browserId },
            });
        }

        if (!this.objects[`${ioBrokerDeviceId}.activity`] && browserId) {
            await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.activity`, {
                type: 'state',
                common: {
                    name: 'User is active in this browser',
                    type: 'boolean',
                    read: true,
                    write: false,
                    role: 'sensor',
                },
                native: { instance: browserId },
            });
        }

        if (battery) {
            if (!this.objects[`${ioBrokerDeviceId}.battery`] && browserId) {
                await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.battery`, {
                    type: 'channel',
                    common: { name: 'battery' },
                    native: {},
                });
            }
            if (!this.objects[`${ioBrokerDeviceId}.battery.level`] && browserId) {
                await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.battery.level`, {
                    type: 'state',
                    common: { name: 'battery', type: 'number', read: true, write: false, role: 'value.battery' },
                    native: { instance: browserId },
                });
            }
            if (!this.objects[`${ioBrokerDeviceId}.battery.charging`] && browserId) {
                await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.battery.charging`, {
                    type: 'state',
                    common: {
                        name: 'charging',
                        type: 'boolean',
                        read: true,
                        write: false,
                        role: 'indicator.plugged',
                    },
                    native: { instance: browserId },
                });
            }
        }

        if (this.objects[`${ioBrokerDeviceId}.name`]) {
            await this.adapter.delObjectAsync(`${ioBrokerDeviceId}.name`);
        }

        if (!this.objects[`${ioBrokerDeviceId}.more_info`]) {
            await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.more_info`, {
                type: 'state',
                common: {
                    name: 'Show more_info of entity_id',
                    type: 'string',
                    read: false,
                    write: true,
                    role: 'state',
                },
                native: { instance: browserId },
            });
        }

        if (!this.objects[`${ioBrokerDeviceId}.toast`]) {
            await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.toast`, {
                type: 'state',
                common: {
                    name: { en: 'Notification in bottom left.', de: 'Benachrichtigung unten links' },
                    desc: {
                        en: 'Simple text or optional as json with fields: message, duration, action_text, action, see browser_mod notification dokumentation',
                        de: 'Einfacher text oder optional als json mit den Feldern: message, duration, action_text, action, wie in der Dokumentation zu browser_mod unter dem Punkt notification',
                    },
                    type: 'string',
                    read: false,
                    write: true,
                    role: 'json',
                },
                native: { instance: browserId },
            });
        }

        if (this.objects[`${ioBrokerDeviceId}.notification`]) {
            await this.adapter.delObjectAsync(`${ioBrokerDeviceId}.notification`);
        }

        if (!this.objects[`${ioBrokerDeviceId}.popup`]) {
            await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.popup`, {
                type: 'state',
                common: { name: 'Show popup', type: 'string', read: false, write: true, role: 'json' },
                native: { instance: browserId },
            });
        }

        if (!this.objects[`${ioBrokerDeviceId}.popup_close`]) {
            await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.popup_close`, {
                type: 'state',
                common: {
                    name: 'Close popups or more_info dialogs.',
                    type: 'boolean',
                    read: false,
                    write: true,
                    role: 'button',
                },
                native: { instance: browserId },
            });
        }

        if (!this.objects[`${ioBrokerDeviceId}.refresh`]) {
            await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.refresh`, {
                type: 'state',
                common: { name: 'Reload webpage', type: 'boolean', read: false, write: true, role: 'button' },
                native: { instance: browserId },
            });
        }

        if (this.objects[`${ioBrokerDeviceId}.window_reload`]) {
            await this.adapter.delObjectAsync(`${ioBrokerDeviceId}.window_reload`);
        }
        if (this.objects[`${ioBrokerDeviceId}.lovelace_reload`]) {
            await this.adapter.delObjectAsync(`${ioBrokerDeviceId}.lovelace_reload`);
        }

        if (!this.objects[`${ioBrokerDeviceId}.blackout`]) {
            await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.blackout`, {
                type: 'state',
                common: { name: 'Blackout screen', type: 'boolean', read: false, write: true, role: 'button' },
                native: { instance: browserId },
            });
        }

        if (!this.objects[`${ioBrokerDeviceId}.set_theme`]) {
            await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.set_theme`, {
                type: 'state',
                common: {
                    name: { en: 'Set frontend theme', de: 'Frontend-Theme setzen' },
                    desc: {
                        en: 'Theme name (see dropdown). Advanced: JSON with fields theme, dark ("auto"/"light"/"dark"), primaryColor.',
                        de: 'Theme-Name (siehe Auswahl). Erweitert: JSON mit Feldern theme, dark ("auto"/"light"/"dark"), primaryColor.',
                    },
                    type: 'string',
                    read: false,
                    write: true,
                    role: 'text',
                    states: this._getThemeStates(),
                },
                native: { instance: browserId },
            });
        }

        if (!this.objects[`${ioBrokerDeviceId}.console`]) {
            await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.console`, {
                type: 'state',
                common: {
                    name: { en: 'Log message to browser console', de: 'Nachricht in Browser-Konsole ausgeben' },
                    type: 'string',
                    read: false,
                    write: true,
                    role: 'text',
                },
                native: { instance: browserId },
            });
        }

        if (!this.objects[`${ioBrokerDeviceId}.change_browser_id`] && browserId) {
            await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.change_browser_id`, {
                type: 'state',
                common: {
                    name: { en: 'Change this Browser ID', de: 'Diese Browser-ID ändern' },
                    desc: {
                        en: 'New Browser ID as plain text, or JSON with fields: new_browser_id, register (bool), refresh (bool).',
                        de: 'Neue Browser-ID als Text, oder JSON mit Feldern: new_browser_id, register (bool), refresh (bool).',
                    },
                    type: 'string',
                    read: true,
                    write: true,
                    role: 'text',
                },
                native: { instance: browserId },
            });
            // Prefill with the current id so the user just edits it instead of typing it from scratch.
            await this.adapter.setStateAsync(`${ioBrokerDeviceId}.change_browser_id`, browserId, true);
        }

        if (!this.objects[`${ioBrokerDeviceId}.online`] && browserId) {
            await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.online`, {
                type: 'state',
                common: {
                    name: 'online',
                    type: 'boolean',
                    read: true,
                    write: false,
                    role: 'indicator.reachable',
                    def: true,
                },
                native: { instance: browserId },
            });
        }

        await this._checkSettingState(ioBrokerDeviceId, browserId, 'hideHeader', 'Hide Header');
        await this._checkSettingState(ioBrokerDeviceId, browserId, 'hideSidebar', 'Hide Sidebar');
    }

    /**
     * Create (and on the root level, seed) the hideHeader / hideSidebar switch state, or - if it
     * already exists - read its value into the browser_mod storage. The root object (no browserId,
     * `instances.<key>`) is the "target all" default: its `def` and seeded value come from the global
     * default and are read back on init as the default for new browsers; per-browser objects mirror
     * that default.
     *
     * @param ioBrokerDeviceId - fully namespaced device id (root `instances` or `instances.<browserId>`)
     * @param browserId - browser id, or undefined for the root "target all" object
     * @param key - which setting (`hideHeader` or `hideSidebar`)
     * @param name - display name for the object
     */
    private async _checkSettingState(
        ioBrokerDeviceId: string,
        browserId: string | undefined,
        key: 'hideHeader' | 'hideSidebar',
        name: string,
    ): Promise<void> {
        const stateId = `${ioBrokerDeviceId}.${key}`;
        if (!this.objects[stateId]) {
            const def = !!this.browserModStorage.settings[key];
            await this.adapter.setObjectNotExistsAsync(stateId, {
                type: 'state',
                common: { name, type: 'boolean', read: true, write: true, role: 'switch', def },
                native: { instance: browserId },
            });
            if (!browserId) {
                // Root "target all" default: give it a value so init reads it as the default.
                await this.adapter.setStateAsync(stateId, def, true);
            }
        } else {
            const settingState = await this.adapter.getStateAsync(stateId);
            if (settingState) {
                if (browserId) {
                    this.initialiseBrowserSettings(browserId, true);
                    this.browserModStorage.browsers[browserId].settings[key] = settingState.val as boolean;
                } else {
                    this.browserModStorage.settings[key] = settingState.val as boolean;
                }
            }
        }
    }

    /**
     * Clean up old browser_mod instances.
     */
    async _cleanUpInstances(): Promise<void> {
        const count = Object.keys(this.browserModStorage.browsers).length;
        if (count > this.adapter.config.maxBrowserInstances) {
            this.adapter.log.info(
                `Cleaning up ${count - this.adapter.config.maxBrowserInstances} old browser_mod instances.`,
            );
            const browsersSorted = Object.keys(this.browserModStorage.browsers).sort(
                (a, b) => this.browserModStorage.browsers[a].last_seen - this.browserModStorage.browsers[b].last_seen,
            );
            for (let i = 0; i < count - this.adapter.config.maxBrowserInstances; i += 1) {
                const browserId = browsersSorted[i];
                this.adapter.log.debug(
                    `Deleting old browser_mod instance ${browserId}, last seen ${new Date(this.browserModStorage.browsers[browserId].last_seen).toISOString()}`,
                );
                await this.adapter.delObjectAsync(`${instancesPath}${browserId}`, { recursive: true });
                delete this.browserModStorage.browsers[browserId];
            }
        }
    }

    /**
     * Initialise the browser settings for a browser_mod instance.
     *
     * @param browserId - browser_mod browser id
     * @param now - whether to set last_seen to current time
     */
    initialiseBrowserSettings(browserId: string, now = false): void {
        if (!this.browserModStorage.browsers[browserId]) {
            this.browserModStorage.browsers[browserId] = {
                last_seen: now ? Date.now() : 0,
                registered: true,
                locked: false,
                camera: false,
                // Copy, not a reference: a shared object would let per-browser hideSidebar/hideHeader
                // writes mutate the global defaults and every other browser's settings.
                settings: { ...this.browserModStorage.settings },
                meta: 'default',
            };
        }
    }

    /**
     * Handle an update message from a browser_mod instance.
     *
     * @param ioBrokerDeviceId - ioBroker device id path for the browser instance
     * @param message - the update message from the browser
     */
    async _handleUpdate(ioBrokerDeviceId: string, message: Record<string, unknown>): Promise<void> {
        if (message.browserID && this.browserModStorage.browsers[message.browserID as string]) {
            this.browserModStorage.browsers[message.browserID as string].last_seen = Date.now() / 1000;
        }
        const data = message.data as Record<string, unknown> | undefined;
        if (data) {
            if (data.browser) {
                const browser = data.browser as Record<string, unknown>;
                if (browser.battery_level) {
                    await this._checkObjects(ioBrokerDeviceId, message.browserID as string, true);
                    await this.adapter.setState(
                        `${ioBrokerDeviceId}.battery.level`,
                        browser.battery_level as ioBroker.StateValue,
                        true,
                    );
                    await this.adapter.setState(
                        `${ioBrokerDeviceId}.battery.charging`,
                        (browser.charging as boolean) || false,
                        true,
                    );
                } else {
                    await this._checkObjects(ioBrokerDeviceId, message.browserID as string);
                    await this._cleanUpInstances();
                }
                if (browser.path) {
                    await this.adapter.setState(`${ioBrokerDeviceId}.path`, browser.path as ioBroker.StateValue, true);
                }
                if (browser.visibility) {
                    await this.adapter.setState(`${ioBrokerDeviceId}.visible`, browser.visibility === 'visible', true);
                }
            }
            if (typeof data.activity === 'boolean') {
                await this.adapter.setState(`${ioBrokerDeviceId}.activity`, data.activity, true);
            }
            if (typeof data.screen_on === 'boolean') {
                await this.adapter.setState(`${ioBrokerDeviceId}.blackout`, !data.screen_on, true);
            }
        }
    }

    /**
     * Send a message to a browser_mod instance.
     *
     * @param client - the browser_mod client to send to
     * @param message - message payload to send
     */
    _sendToClient(client: ClientEntry, message: Record<string, unknown>): void {
        client.ws.send(
            JSON.stringify({
                id: client.subscribeId,
                ...message,
            }),
        );
    }

    /**
     * (Re-)send the browser_mod "ready" event (the full storage incl. this browser's settings) to a
     * live client. Sent again after a (re)register so the card re-applies settings like hideSidebar
     * once it is registered and the sidebar element exists - otherwise the very first connect can apply
     * hideSidebar before the sidebar is ready and the user has to press F5.
     *
     * @param client - the browser_mod client to notify
     */
    private _sendReadyEvent(client: ClientEntry): void {
        this._sendToClient(client, {
            type: 'event',
            event: {
                event_type: 'ready',
                origin: 'LOCAL',
                result: this.browserModStorage,
                time_fired: new Date().toISOString(),
            },
        });
    }

    /**
     * Apply a root "target all" setting change (hideHeader/hideSidebar) to every known browser: update
     * its in-memory setting and its per-instance mirror state. The per-instance setState uses ack=true
     * so it does not re-trigger onStateChange.
     *
     * @param key - which setting (`hideHeader` or `hideSidebar`)
     * @param val - the new value
     */
    private async _applyRootSettingToAll(key: 'hideHeader' | 'hideSidebar', val: boolean): Promise<void> {
        for (const browserId of Object.keys(this.browserModStorage.browsers)) {
            this.initialiseBrowserSettings(browserId);
            this.browserModStorage.browsers[browserId].settings[key] = val;
            const stateId = `${instancesPath}${browserId}.${key}`;
            if (this.objects[`${this.adapter.namespace}.${stateId}`]) {
                await this.adapter.setStateAsync(stateId, val, true);
            }
        }
    }

    /**
     * Write the per-browser setting VALUES onto their mirror states. _checkObjects only seeds the
     * objects with the global default in common.def; it never writes the state value. Used on
     * (re)register and rename so the ioBroker states reflect the browser's actual settings.
     *
     * @param ioBrokerDeviceId - the browser's device path (e.g. instances.<id>)
     * @param settings - the browser's settings, if known
     */
    private async _applySettingStates(ioBrokerDeviceId: string, settings?: BrowserSettings): Promise<void> {
        if (!settings) {
            return;
        }
        for (const key of ['hideSidebar', 'hideHeader'] as const) {
            if (settings[key] !== undefined) {
                await this.adapter.setState(`${ioBrokerDeviceId}.${key}`, !!settings[key], true);
            }
        }
    }

    /**
     * Derive a stable key for the current login session, used for sync-session Browser ID recall.
     * Prefers the auth token, falls back to the username. Returns undefined when neither is known.
     *
     * @param ws - websocket connection
     */
    private _sessionKey(ws: WsWithBrowserId): string | undefined {
        return ws.__auth?.access_token || ws.__auth?.username || undefined;
    }

    /**
     * Build the `common.states` value→label map of theme names available for set_theme.
     * Parses the same theme YAML the server uses, plus the built-in 'default'/'auto' entries.
     */
    private _getThemeStates(): Record<string, string> {
        const states: Record<string, string> = { default: 'default', auto: 'auto' };
        try {
            const themes = (yaml.load(this.adapter.config.themes || '') as Record<string, unknown>) || {};
            for (const themeName of Object.keys(themes)) {
                states[themeName] = themeName;
            }
        } catch (e) {
            this.adapter.log.debug(`Could not parse themes for set_theme states: ${String(e)}`);
        }
        return states;
    }

    /**
     * Handle a `browser_mod.*` service call from the frontend (e.g. browser_mod.notification,
     * browser_mod.refresh). Translates it into a browser command and forwards it to the target
     * browser(s). Without this, such calls fell through to the generic entity handler and produced
     * a misleading "Unknown entity" warning.
     *
     * @param ws - websocket connection the call came in on
     * @param data - the call_service payload
     * @returns true if handled
     */
    processServiceCall(ws: WsWithBrowserId, data: Record<string, unknown>): boolean {
        if (data.domain !== 'browser_mod') {
            return false;
        }
        const service = data.service as string;
        const serviceData: Record<string, unknown> = { ...((data.service_data as Record<string, unknown>) || {}) };

        // A "version mismatch" notification means the shipped browser_mod frontend was replaced
        // (e.g. the user installed their own browser_mod). It ships WITH ioBroker.lovelace.
        if (
            service === 'notification' &&
            typeof serviceData.message === 'string' &&
            serviceData.message.includes('version mismatch')
        ) {
            this.adapter.log.warn(
                `browser_mod reports: "${serviceData.message}". The browser_mod frontend ships with ` +
                    `ioBroker.lovelace (expected version ${BROWSER_MOD_VERSION}). Do NOT install your own ` +
                    `browser_mod - remove it so the bundled version is used.`,
            );
        }

        // Resolve the target browser. "THIS" means the calling browser.
        let browserId = serviceData.browser_id as string | undefined;
        if (browserId === 'THIS') {
            browserId = ws.browserID;
        }
        delete serviceData.browser_id;

        const event: Record<string, unknown> = {
            event_type: 'browser_mod/command',
            command: service,
            origin: 'LOCAL',
            time_fired: new Date().toISOString(),
            ...serviceData,
        };

        if (browserId && this.clients[browserId]) {
            const client = this.clients[browserId];
            this._sendToClient(client, { type: 'event', event: { ...event, browserID: client.instance } });
        } else {
            // No specific connected target -> broadcast to all connected browsers.
            for (const client of Object.values(this.clients)) {
                this._sendToClient(client, { type: 'event', event: { ...event, browserID: client.instance } });
            }
        }

        // Acknowledge so the frontend's call_service promise resolves.
        ws.send(JSON.stringify({ id: data.id, type: 'result', success: true, result: { context: { id: null } } }));
        return true;
    }

    /**
     * Process a message from a browser_mod instance.
     *
     * @param ws - websocket connection with browser id
     * @param message - the message from the frontend
     */
    async processMessage(ws: WsWithBrowserId, message: Record<string, unknown>): Promise<boolean> {
        if (message.type && (message.type as string).startsWith('browser_mod/')) {
            const method = (message.type as string).split('/')[1];

            if (!message.browserID && method !== 'recall_id') {
                this.adapter.log.warn(`No browser ID in browser_mod request: ${JSON.stringify(message)}`);
                return true;
            }
            const ioBrokerDeviceId = instancesPath + (message.browserID as string);

            if (method === 'update') {
                await this._handleUpdate(ioBrokerDeviceId, message);
            } else if (method === 'connect') {
                ws.on('close', async () => {
                    // Use the current browserID from the ws: it may have been renamed (change_browser_id)
                    // after connect, in which case message.browserID is stale.
                    const currentId = ws.browserID || (message.browserID as string);
                    this.adapter.log.debug(`Instance ${currentId} disconnected.`);
                    delete this.clients[currentId];
                    // Guard against the object having been deleted (rename) - avoid creating an orphan state.
                    if (this.objects[`${this.adapter.namespace}.${instancesPath}${currentId}.online`]) {
                        await this.adapter.setStateAsync(`${instancesPath}${currentId}.online`, false, true);
                    }
                });

                this.adapter.log.debug(`Instance ${String(message.browserID)} connected.`);
                this.clients[message.browserID as string] = {
                    subscribeId: message.id,
                    instance: message.browserID as string,
                    ws,
                };
                ws.browserID = message.browserID as string;

                ws.send(
                    JSON.stringify([
                        { id: message.id, type: 'result', success: true, result: null },
                        {
                            id: message.id,
                            type: 'event',
                            event: {
                                event_type: 'ready',
                                origin: 'LOCAL',
                                result: this.browserModStorage,
                                time_fired: new Date().toISOString(),
                            },
                        },
                    ]),
                );

                if (this.objects[`${this.adapter.namespace}.${ioBrokerDeviceId}.online`]) {
                    await this.adapter.setStateAsync(`${ioBrokerDeviceId}.online`, true, true);
                } else {
                    this.adapter.log.debug(`No objects for instance, yet.. ${ioBrokerDeviceId}.online`);
                }
            } else if (method === 'register') {
                this.initialiseBrowserSettings(message.browserID as string, true);

                const msgData = message.data as Record<string, unknown> | undefined;
                if (msgData && msgData.browserID) {
                    const oldBrowserId = message.browserID as string;
                    const newBrowserId = msgData.browserID as string;
                    const newIoBrokerDeviceId = instancesPath + newBrowserId;
                    // Drop stale OLD entries from the in-memory objects cache. Cache keys are fully
                    // namespaced (lovelace.0.instances.OLD…), so the prefix must include the namespace.
                    const oldPrefix = `${this.adapter.namespace}.${ioBrokerDeviceId}`;
                    for (const id of Object.keys(this.objects)) {
                        if (id.startsWith(oldPrefix)) {
                            delete this.objects[id];
                        }
                    }
                    try {
                        await this.adapter.delObjectAsync(ioBrokerDeviceId, { recursive: true });
                        await this._checkObjects(newIoBrokerDeviceId, newBrowserId);
                    } catch (e) {
                        this.adapter.log.warn(
                            `Could not delete old instance objects in ${ioBrokerDeviceId}, please do so yourself. Error was: ${String(e)}`,
                        );
                    }
                    delete this.browserModStorage.browsers[oldBrowserId];
                    delete msgData.browserID;
                    this.browserModStorage.browsers[newBrowserId] = msgData as unknown as BrowserEntry;

                    // Carry the per-browser setting VALUES over to the freshly created states. _checkObjects
                    // only seeds the objects with the global default in common.default, it does not write the
                    // state value, so without this the new browser's hideSidebar/hideHeader would reset.
                    await this._applySettingStates(
                        newIoBrokerDeviceId,
                        msgData.settings as BrowserSettings | undefined,
                    );

                    // Move the live connection (if any) from the old id to the new one so the still-open
                    // browser keeps being tracked, ws.browserID stays correct, and online is set on the
                    // new device. Without this the renamed browser shows offline and the close handler
                    // would clean up the wrong id.
                    const liveClient = this.clients[oldBrowserId];
                    if (liveClient) {
                        delete this.clients[oldBrowserId];
                        liveClient.instance = newBrowserId;
                        liveClient.ws.browserID = newBrowserId;
                        this.clients[newBrowserId] = liveClient;
                    }
                    if (this.clients[newBrowserId]) {
                        // _checkObjects already created the object in the DB above, so this is safe
                        // even if the in-memory objects cache hasn't caught up yet.
                        await this.adapter.setStateAsync(`${newIoBrokerDeviceId}.online`, true, true);
                        this._sendReadyEvent(this.clients[newBrowserId]);
                    }
                    this.adapter.log.info(`browser_mod instance renamed: ${oldBrowserId} -> ${newBrowserId}`);
                } else {
                    try {
                        await this._checkObjects(ioBrokerDeviceId, message.browserID as string);
                        await this._cleanUpInstances();
                        // Mirror the browser's reported settings onto the freshly created states.
                        await this._applySettingStates(
                            ioBrokerDeviceId,
                            msgData?.settings as BrowserSettings | undefined,
                        );
                    } catch (e) {
                        this.adapter.log.warn(
                            `Could not create objects for instance ${ioBrokerDeviceId}. Error was: ${String(e)}`,
                        );
                    }
                    if (this.objects[`${this.adapter.namespace}.${ioBrokerDeviceId}.online`]) {
                        await this.adapter.setStateAsync(`${ioBrokerDeviceId}.online`, true, true);
                    } else {
                        this.adapter.log.debug(`No objects for instance, yet.. ${ioBrokerDeviceId}.online`);
                    }
                    // Re-push settings so the card re-applies hideSidebar/etc. now that it is registered.
                    const client = this.clients[message.browserID as string];
                    if (client) {
                        this._sendReadyEvent(client);
                    }
                }
            } else if (method === 'log') {
                this.adapter.log.debug(`Message from browser_mod: ${String(message.message)}`);
                ws.send(JSON.stringify({ id: message.id, type: 'result', success: true }));
            } else if (method === 'settings') {
                // Settings come in three scopes: global ({key,value}), per-user ({user,key,value})
                // and per-browser. Store any key the frontend sends — new browser_mod versions add
                // settings (kiosk mode, camera resolution, defaultDashboard, syncSession, …) that are
                // not part of our initial seed, and the old `!== undefined` guard silently dropped them.
                if (message.key) {
                    if (message.user) {
                        const user = message.user as string;
                        const userSettings = (this.browserModStorage.user_settings[user] ||
                            (this.browserModStorage.user_settings[user] = {})) as Record<string, unknown>;
                        userSettings[message.key as string] = message.value;
                    } else {
                        this.browserModStorage.settings[message.key as string] = message.value;
                    }
                    this.adapter.log.debug(
                        `Updated browser_mod settings: ${message.key as string} to ${String(message.value)}`,
                    );
                }
                ws.send(JSON.stringify({ id: message.id, type: 'result', success: true }));
            } else if (method === 'store_session') {
                // Sync-session: tie this Browser ID to the login session so it can be recalled on
                // other clients sharing the same login (e.g. Companion apps). browser_mod 2.13+.
                const sessionKey = this._sessionKey(ws);
                if (sessionKey && message.browserID) {
                    this.browserModStorage.sessions[sessionKey] = message.browserID as string;
                }
                ws.send(JSON.stringify({ id: message.id, type: 'result', success: true }));
            } else if (method === 'delete_session') {
                const sessionKey = this._sessionKey(ws);
                if (sessionKey) {
                    delete this.browserModStorage.sessions[sessionKey];
                }
                ws.send(JSON.stringify({ id: message.id, type: 'result', success: true }));
            } else if (method === 'recall_id') {
                // The frontend expects { browserID, via_session }. If a sync-session mapping exists
                // for this login, return it and flag via_session so the client enables sync mode.
                const sessionKey = this._sessionKey(ws);
                const sessionBrowserId = sessionKey ? this.browserModStorage.sessions[sessionKey] : undefined;
                const result = sessionBrowserId
                    ? { browserID: sessionBrowserId, via_session: true }
                    : { browserID: ws.browserID ?? null };
                ws.send(JSON.stringify({ id: message.id, type: 'result', success: true, result }));
            } else if (method === 'unregister') {
                const browserId = message.browserID as string;
                try {
                    await this.adapter.delObjectAsync(`${instancesPath}${browserId}`, { recursive: true });
                } catch (e) {
                    this.adapter.log.info(`Could not delete browser_mod instance ${browserId} objects: ${String(e)}`);
                    this.adapter.log.info('Maybe was already deleted?');
                }
                delete this.browserModStorage.browsers[browserId];
                this.adapter.log.debug(`Instance ${browserId} unregistered.`);
                ws.send(JSON.stringify({ id: message.id, type: 'result', success: true }));
            } else {
                this.adapter.log.warn(`Unknown browser_mod method: ${JSON.stringify(message)}`);
                ws.send(JSON.stringify({ id: message.id, type: 'result', success: true }));
            }
            return true;
        } else {
            return false;
        }
    }

    /**
     * Handle a state change in ioBroker.
     *
     * @param id - ioBroker state id that changed
     * @param state - the new state value
     */
    onStateChange(id: string, state: ioBroker.State | null | undefined): void {
        if (state && !state.ack && id.startsWith(`${this.adapter.namespace}.${instancesPath}`)) {
            const parts = id.split('.');
            const browserId = parts[3];
            let command = parts[4];
            let allDevices = false;
            if (!command) {
                command = parts[3];
                allDevices = true;
            }

            let event: Record<string, unknown> = {
                event_type: 'browser_mod/command',
                command,
                origin: 'LOCAL',
                time_fired: new Date().toISOString(),
            };

            const client = this.clients[browserId];
            if (allDevices || client) {
                switch (command) {
                    case 'blackout':
                        if (!state.val) {
                            event.command = 'screen_on';
                        } else {
                            event.command = 'screen_off';
                        }
                        break;
                    case 'path':
                        event.command = 'navigate';
                        event.path = state.val;
                        break;
                    case 'more_info':
                        event.entity = state.val;
                        break;
                    case 'toast':
                        event.command = 'notification';
                        if (state.val) {
                            try {
                                const { duration, message, action_text, action } = JSON.parse(
                                    state.val as string,
                                ) as Record<string, unknown>;
                                event.duration = duration;
                                event.message = message;
                                event.action_text = action_text;
                                event.action = action;
                            } catch (e) {
                                this.adapter.log.error(`Could not parse toast object: ${String(e)}`);
                                const valStr = state.val as string;
                                if (valStr.includes(';')) {
                                    [event.duration, event.message, event.action_text, event.action] =
                                        valStr.split(';');
                                    if (event.action) {
                                        try {
                                            event.action = JSON.parse(event.action as string);
                                        } catch (e2) {
                                            this.adapter.log.debug(
                                                `Could not parse action string ${String(event.action)}: ${String(e2)}`,
                                            );
                                        }
                                    }
                                } else {
                                    event.message = valStr;
                                }
                            }
                        } else {
                            return;
                        }
                        break;
                    case 'popup':
                        if (state.val) {
                            try {
                                const popup = JSON.parse(state.val as string) as Record<string, unknown>;
                                for (const key of Object.keys(popup)) {
                                    event[key] = popup[key];
                                }
                            } catch (e) {
                                this.adapter.log.error(`Could not parse popup object: ${String(e)}`);
                                return;
                            }
                        } else {
                            return;
                        }
                        break;
                    case 'popup_close':
                        if (state.val) {
                            event.command = 'close_popup';
                        } else {
                            return;
                        }
                        break;
                    case 'refresh':
                        break;
                    case 'set_theme':
                        if (state.val) {
                            const valStr = state.val as string;
                            try {
                                const theme = JSON.parse(valStr) as Record<string, unknown>;
                                for (const key of Object.keys(theme)) {
                                    event[key] = theme[key];
                                }
                            } catch {
                                // Plain string -> treat as theme name
                                event.theme = valStr;
                            }
                        } else {
                            return;
                        }
                        break;
                    case 'console':
                        if (state.val) {
                            event.message = state.val;
                        } else {
                            return;
                        }
                        break;
                    case 'change_browser_id':
                        if (state.val) {
                            const valStr = state.val as string;
                            event.current_browser_id = browserId;
                            try {
                                const data = JSON.parse(valStr) as Record<string, unknown>;
                                for (const key of Object.keys(data)) {
                                    event[key] = data[key];
                                }
                            } catch {
                                event.new_browser_id = valStr;
                            }
                        } else {
                            return;
                        }
                        break;
                    case 'hideHeader':
                    case 'hideSidebar': {
                        const key = command;
                        const val = !!state.val;
                        if (allDevices) {
                            // Root "target all" write: new default for future browsers AND pushed onto
                            // every existing browser's setting + per-instance state.
                            this.browserModStorage.settings[key] = val;
                            void this._applyRootSettingToAll(key, val);
                        } else {
                            this.initialiseBrowserSettings(browserId);
                            this.browserModStorage.browsers[browserId].settings[key] = val;
                        }
                        event = { result: this.browserModStorage };
                        break;
                    }
                    default:
                        return;
                }

                if (allDevices) {
                    for (const c of Object.values(this.clients)) {
                        this._sendToClient(c, { type: 'event', event, id: c.subscribeId });
                    }
                } else {
                    event.browserID = client.instance;
                    this._sendToClient(client, { type: 'event', event, id: client.subscribeId });
                }
            } else {
                this.adapter.log.warn(`Device ${browserId} currently not connected. Can not send command ${command}`);
            }
        }
    }

    /**
     * Handle a change of lovelace configuration. Updates ioBroker objects for new views.
     *
     * @param lovelaceConfig - current lovelace configuration
     * @param lovelaceConfig.views - array of view definitions with path property
     */
    handeUpdatedConfig(lovelaceConfig: { views: { path: string }[] }): void {
        let needUpdate = false;
        for (const view of lovelaceConfig.views) {
            const viewPath = `/lovelace/${view.path}`;
            if (!this.knownViews.includes(viewPath)) {
                needUpdate = true;
                this.knownViews.push(viewPath);
            }
        }

        if (needUpdate) {
            this.knownViewsStates = {};
            for (let i = 0; i < this.knownViews.length; i += 1) {
                this.knownViewsStates[this.knownViews[i]] = this.knownViews[i];
            }

            for (const id of Object.keys(this.objects)) {
                if (id.startsWith(`${this.adapter.namespace}.${instancesPath}`) && id.endsWith('.path')) {
                    this.adapter.extendObject(id, { common: { type: 'string', states: this.knownViewsStates } }, () => {
                        this.adapter.log.debug(`Updated ${id}`);
                    });
                }
            }
        }
    }

    /**
     * Initialize the browser_mod module.
     *
     * @param lovelaceConfig - current lovelace configuration
     * @param lovelaceConfig.views - array of view definitions with path property
     */
    async init(lovelaceConfig: { views: { path: string }[] }): Promise<void> {
        this.handeUpdatedConfig(lovelaceConfig);
        await this._checkObjects(instancesPath.substring(0, instancesPath.length - 1));

        for (const id of Object.keys(this.objects)) {
            if (id.startsWith(`${this.adapter.namespace}.${instancesPath}`)) {
                const browserId = id.split('.')[3];
                if (id.endsWith('.online')) {
                    const onlineState = await this.adapter.getStateAsync(id);
                    this.initialiseBrowserSettings(browserId);
                    this.browserModStorage.browsers[browserId].last_seen = onlineState?.lc || 0;
                    await this.adapter.setState(id, false, true);
                } else {
                    // Restore persisted hideHeader/hideSidebar into storage so they survive a restart.
                    // (Both keys must be handled - missing hideSidebar here let it revert to the global
                    //  default, and the next browser (re)register then overwrote the saved state.)
                    for (const key of ['hideHeader', 'hideSidebar'] as const) {
                        if (id.endsWith(key)) {
                            const settingState = await this.adapter.getStateAsync(id);
                            if (settingState) {
                                if (id === `${this.adapter.namespace}.${instancesPath}${key}`) {
                                    this.browserModStorage.settings[key] = settingState.val as boolean;
                                } else {
                                    this.initialiseBrowserSettings(browserId);
                                    this.browserModStorage.browsers[browserId].settings[key] =
                                        settingState.val as boolean;
                                }
                            }
                        }
                    }
                }
            }
        }
        await this._cleanUpInstances();
        this.adapter.log.debug('modules/browser_mod: init done.');
    }

    /**
     * Augment the services object with browser_mod services.
     *
     * @param services - services map to augment
     */
    augmentServices(services: Record<string, unknown>): void {
        const target = {
            device: [{ integration: 'browser_mod' }],
            entity: [{ integration: 'browser_mod' }],
        };
        services.browser_mod = {
            sequence: {
                name: '',
                description: 'Run a sequence of services',
                fields: {
                    sequence: {
                        name: 'Actions',
                        description: 'List of services to run',
                        selector: { object: null },
                    },
                },
                target,
            },
            delay: {
                name: '',
                description: 'Wait for a time',
                fields: {
                    time: {
                        name: 'Time',
                        description: 'Time to wait (ms)',
                        selector: { number: { mode: 'box' } },
                    },
                },
                target,
            },
            popup: {
                name: '',
                description: 'Display a popup',
                fields: {
                    title: { name: 'Title', description: 'Popup title', selector: { text: null } },
                    content: {
                        name: 'Content',
                        required: true,
                        description: 'Popup content (Test or lovelace card configuration)',
                        selector: { object: null },
                    },
                    size: {
                        name: 'Size',
                        description: '',
                        selector: { select: { mode: 'dropdown', options: ['normal', 'wide', 'fullscreen'] } },
                    },
                    right_button: {
                        name: 'Right button',
                        description: 'Text of the right button',
                        selector: { text: null },
                    },
                    right_button_action: {
                        name: 'Right button action',
                        description: 'Action to perform when the right button is pressed',
                        selector: { object: null },
                    },
                    left_button: {
                        name: 'Left button',
                        description: 'Text of the left button',
                        selector: { text: null },
                    },
                    left_button_action: {
                        name: 'Left button action',
                        description: 'Action to perform when left button is pressed',
                        selector: { object: null },
                    },
                    dismissable: {
                        name: 'User dismissable',
                        description: 'Whether the popup can be closed by the user without action',
                        default: true,
                        selector: { boolean: null },
                    },
                    dismiss_action: {
                        name: 'Dismiss action',
                        description: 'Action to perform when popup is dismissed',
                        selector: { object: null },
                    },
                    autoclose: {
                        name: 'Auto close',
                        description: 'Close the popup automatically on mouse, pointer or keyboard activity',
                        default: false,
                        selector: { boolean: null },
                    },
                    timeout: {
                        name: 'Auto close timeout',
                        description: 'Time before closing (ms)',
                        selector: { number: { mode: 'box' } },
                    },
                    timeout_action: {
                        name: 'Timeout action',
                        description: 'Action to perform when popup is closed by timeout',
                        selector: { object: null },
                    },
                    style: {
                        name: 'Styles',
                        description: 'CSS code to apply to the popup window',
                        selector: { text: { multiline: true } },
                    },
                },
                target,
            },
            more_info: {
                name: '',
                description: 'Show more-info dialog',
                fields: {
                    entity: {
                        name: 'Entity ID',
                        description: '',
                        required: true,
                        selector: { text: null },
                    },
                    large: { name: 'Large size', description: '', default: false, selector: { boolean: null } },
                    ignore_popup_card: {
                        name: 'Ignore any active popup-card overrides',
                        description: '',
                        default: false,
                        selector: { boolean: null },
                    },
                },
                target,
            },
            close_popup: { name: '', description: 'Close a popup', fields: {}, target },
            notification: {
                name: '',
                description: 'Display a short notification',
                fields: {
                    message: {
                        name: 'Message',
                        description: 'Message to display',
                        required: true,
                        selector: { text: null },
                    },
                    duration: {
                        name: 'Auto close timeout',
                        description: 'Time before closing (ms)',
                        selector: { number: { mode: 'box' } },
                    },
                    action_text: {
                        name: 'Action button text',
                        description: 'Text of optional action button',
                        selector: { text: null },
                    },
                    action: {
                        name: 'Button action',
                        description: 'Action to perform when the action button is pressed',
                        selector: { object: null },
                    },
                },
                target,
            },
            navigate: {
                name: '',
                description: 'Navigate browser to a different page',
                fields: {
                    path: { name: 'Path', description: 'Target path', selector: { text: null } },
                },
                target,
            },
            refresh: { name: '', description: 'Refresh page', fields: {}, target },
            set_theme: {
                name: '',
                description: 'Change the current theme',
                fields: {
                    theme: {
                        name: 'Theme',
                        description: "Name of theme or 'auto'",
                        selector: { text: null },
                    },
                    dark: {
                        name: 'Mode',
                        description: 'Dark/light mode',
                        selector: { select: { options: ['auto', 'light', 'dark'] } },
                    },
                    primaryColor: {
                        name: 'Primary Color',
                        description: 'Primary theme color',
                        selector: { color_rgb: null },
                    },
                    accentColor: {
                        name: 'Accent Color',
                        description: 'Accent theme color',
                        selector: { color_rgb: null },
                    },
                },
                target,
            },
            console: {
                name: '',
                description: 'Print text to browser console',
                fields: {
                    message: { name: 'Message', description: 'Text to print', selector: { text: null } },
                },
                target,
            },
            javascript: {
                name: '',
                description: 'Run arbitrary JavaScript code',
                fields: {
                    code: { name: 'Code', description: 'JavaScript code to run', selector: { object: null } },
                },
                target,
            },
        };
    }
}

export = BrowserModModule;
