const instancesPath = 'instances.';

/**
 * Support for browser_mod integration.
 * This is now installed with lovelace by default to control the frontends from iobroker states.
 */
class BrowserModModule {
    /**
     * Create a new instance of the browser_mod module.
     *
     * @param options {object} options object with adapter and objects
     */
    constructor(options) {
        this.adapter = options.adapter;
        this.objects = options.objects;
        this.clients = {};
        this.browserModStorage = {
            browsers: {},
            version: '2.0',
            settings: {
                //possible settings. Send them all.
                hideSidebar: true, //set this to true for now -> might make change in frontend unnecessary. And maybe we can use it later.
                hideHeader: false,
                defaultPanel: null,
                sidebarPanelOrder: null,
                sidebarHiddenPanels: null,
                sidebarTitle: null,
                faviconTemplate: null,
                titleTemplate: null,
                hideInteractIcon: true, //is the icon to configure browser_mod -> not working currently, so let's hide it.
                autoRegister: true,
                lockRegister: null,
            },
            user_settings: {}, //hm.. what is this? -> you can select settings on a per user basis. Proably stored here. Let's try that sometime.
        };

        this.knownViews = [];
        this.knownViewsStates = {};
    }

    /**
     * Check if all objects for the browser_mod integration are created.
     *
     * @param ioBrokerDeviceId {string} ioBroker device id
     * @param browserId {string} browser id
     * @param battery {boolean} if battery states should be created
     * @returns {Promise<void>} promise that resolves when all objects are created
     */
    async _checkObjects(ioBrokerDeviceId, browserId, battery = false) {
        ioBrokerDeviceId = `${this.adapter.namespace}.${ioBrokerDeviceId}`;
        //create device / folder:
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
                        statusStates: {
                            onlineId: `${ioBrokerDeviceId}.online`,
                        },
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
                common: {
                    name: 'UI is visible',
                    type: 'boolean',
                    read: true,
                    write: false,
                    role: 'sensor',
                },
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
                    common: {
                        name: 'battery',
                    },
                    native: {},
                });
            }

            if (!this.objects[`${ioBrokerDeviceId}.battery.level`] && browserId) {
                await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.battery.level`, {
                    type: 'state',
                    common: {
                        name: 'battery',
                        type: 'number',
                        read: true,
                        write: false,
                        role: 'value.battery',
                    },
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
                    name: {
                        en: 'Notification in bottom left.',
                        de: 'Benachrichtigung unten links',
                    },
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
                common: {
                    name: 'Show popup',
                    type: 'string',
                    read: false,
                    write: true,
                    role: 'json',
                },
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
                common: {
                    name: 'Reload webpage',
                    type: 'boolean',
                    read: false,
                    write: true,
                    role: 'button',
                },
                native: { instance: browserId },
            });
        }

        //remove old states, if they are still there. Version 3.0.0
        if (this.objects[`${ioBrokerDeviceId}.window_reload`]) {
            await this.adapter.delObjectAsync(`${ioBrokerDeviceId}.window_reload`);
        }
        if (this.objects[`${ioBrokerDeviceId}.lovelace_reload`]) {
            await this.adapter.delObjectAsync(`${ioBrokerDeviceId}.lovelace_reload`);
        }

        if (!this.objects[`${ioBrokerDeviceId}.blackout`]) {
            await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.blackout`, {
                type: 'state',
                common: {
                    name: 'Blackout screen',
                    type: 'boolean',
                    read: false,
                    write: true,
                    role: 'button',
                },
                native: { instance: browserId },
            });
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

        if (!this.objects[`${ioBrokerDeviceId}.hideHeader`]) {
            await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.hideHeader`, {
                type: 'state',
                common: {
                    name: 'Hide Header',
                    type: 'boolean',
                    read: true,
                    write: true,
                    role: 'switch',
                    default: this.browserModStorage.settings.hideHeader,
                },
                native: {
                    instance: browserId,
                },
            });
        } else {
            //read hideHeader setting from object:
            const hideHeader = await this.adapter.getStateAsync(`${ioBrokerDeviceId}.hideHeader`);
            if (hideHeader) {
                if (browserId) {
                    this.initialiseBrowserSettings(browserId, true);
                    this.browserModStorage.browsers[browserId].settings.hideHeader = hideHeader.val;
                } else {
                    this.browserModStorage.settings.hideHeader = hideHeader.val;
                }
            }
        }

        if (!this.objects[`${ioBrokerDeviceId}.hideSidebar`]) {
            await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.hideSidebar`, {
                type: 'state',
                common: {
                    name: 'Hide Sidebar',
                    type: 'boolean',
                    read: true,
                    write: true,
                    role: 'switch',
                    default: this.browserModStorage.settings.hideSidebar,
                },
                native: {
                    instance: browserId,
                },
            });
        } else {
            //read hideSidebar setting from object:
            const hideSidebar = await this.adapter.getStateAsync(`${ioBrokerDeviceId}.hideSidebar`);
            if (hideSidebar) {
                if (browserId) {
                    this.initialiseBrowserSettings(browserId, true);
                    this.browserModStorage.browsers[browserId].settings.hideSidebar = hideSidebar.val;
                } else {
                    this.browserModStorage.settings.hideSidebar = hideSidebar.val;
                }
            }
        }
    }

    /**
     * Clean up old browser_mod instances, i.e., delete from the object database if too many.
     *
     * @returns {Promise<void>}
     */
    async _cleanUpInstances() {
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
                    `Deleting old browser_mod instance ${browserId}, last seen ${new Date(this.browserModStorage.browsers[browserId].last_seen)}`,
                );
                await this.adapter.delObjectAsync(`${instancesPath}${browserId}`, { recursive: true });
                delete this.browserModStorage.browsers[browserId];
            }
        }
    }

    /**
     * Initialise the browser settings for a browser_mod instance.
     *
     * @param browserId {string} browser id
     * @param [now] {boolean} if the browser was seen now
     */
    initialiseBrowserSettings(browserId, now = false) {
        if (!this.browserModStorage.browsers[browserId]) {
            this.browserModStorage.browsers[browserId] = {
                last_seen: now ? Date.now() : 0,
                registered: true,
                locked: false,
                camera: false,
                settings: this.browserModStorage.settings, //send default settings...?
                meta: 'default',
            };
        }
    }

    /**
     * Handle an update message from a browser_mod instance. Will store infos about the browser instance in ioBroker objects.
     *
     * @param ioBrokerDeviceId {string} ioBroker device id
     * @param message {object} message from browser_mod
     * @returns {Promise<void>} promise that resolves when the message is handled
     */
    async _handleUpdate(ioBrokerDeviceId, message) {
        if (message.browserID && this.browserModStorage.browsers[message.browserID]) {
            this.browserModStorage.browsers[message.browserID].last_seen = Date.now() / 1000;
        }
        if (message.data) {
            if (message.data.browser) {
                //check if all objects in ioBroker are created.
                if (message.data.browser.battery_level) {
                    await this._checkObjects(ioBrokerDeviceId, message.browserID, true);
                    await this.adapter.setStateAsync(
                        `${ioBrokerDeviceId}.battery.level`,
                        message.data.browser.battery_level,
                        true,
                    );
                    await this.adapter.setStateAsync(
                        `${ioBrokerDeviceId}.battery.charging`,
                        message.data.browser.charging || false,
                        true,
                    );
                } else {
                    await this._checkObjects(ioBrokerDeviceId, message.browserID);
                    await this._cleanUpInstances(); //maybe delete old instance, if new was created.
                }

                if (message.data.browser.path) {
                    await this.adapter.setStateAsync(`${ioBrokerDeviceId}.path`, message.data.browser.path, true);
                }
                if (message.data.browser.visibility) {
                    await this.adapter.setStateAsync(
                        `${ioBrokerDeviceId}.visible`,
                        message.data.browser.visibility === 'visible',
                        true,
                    );
                }
            }
            if (typeof message.data.activity === 'boolean') {
                await this.adapter.setStateAsync(`${ioBrokerDeviceId}.activity`, message.data.activity, true);
            }
            if (typeof message.data.screen_on === 'boolean') {
                await this.adapter.setStateAsync(`${ioBrokerDeviceId}.blackout`, !message.data.screen_on, true);
            }
            if (message.data.player) {
                // volume: 1 (?), muted: boolean, src: '', state === 'stopped'
            }
        }
    }

    /**
     * Send a message to a browser_mod instance.
     *
     * @param client {object} websocket client connection
     * @param message {object} message to send
     */
    _sendToClient(client, message) {
        client.ws.send(
            JSON.stringify({
                id: client.subscribeId,
                ...message,
            }),
        );
    }

    /**
     * Process a message from a browser_mod instance.
     * handles everything in browser_mod/ namespace.
     *
     * @param ws {object} websocket connection to the client that sent the message
     * @param message {object} message from the client
     * @returns {Promise<boolean>} promise that resolves with true if the message was processed
     */
    async processMessage(ws, message) {
        if (message.type && message.type.startsWith('browser_mod/')) {
            const method = message.type.split('/')[1];
            // console.log('Incoming browser_mod message:');
            // console.dir(message, {depth: null});

            if (!message.browserID && method !== 'recall_id') {
                this.adapter.log.warn(`No browser ID in browser_mod request: ${JSON.stringify(message)}`);
                return true;
            }
            const ioBrokerDeviceId = instancesPath + message.browserID;

            if (method === 'update') {
                await this._handleUpdate(ioBrokerDeviceId, message);
            } else if (method === 'connect') {
                // similar to 'subscribe'.
                ws.on('close', async () => {
                    this.adapter.log.debug(`Instance ${message.browserID} disconnected.`);
                    delete this.clients[message.browserID];
                    await this.adapter.setStateAsync(`${ioBrokerDeviceId}.online`, false, true);
                });

                this.adapter.log.debug(`Instance ${message.browserID} connected.`);
                this.clients[message.browserID] = {
                    subscribeId: message.id,
                    instance: message.browserID,
                    ws,
                };
                ws.browserID = message.browserID; //store browserID in ws object to handle recall service call later.

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
                    console.log(
                        'No objects for instance, yet..',
                        `${ioBrokerDeviceId}.online`,
                        this.objects[ioBrokerDeviceId],
                        //this.objects,
                    );
                }
            } else if (method === 'register') {
                this.initialiseBrowserSettings(message.browserID, true);

                // if data.browserID exists, browserID is changed -> copy stuff and delete old id.
                if (message.data && message.data.browserID) {
                    const newIoBrokerDeviceId = instancesPath + message.data.browserID;
                    for (const id of Object.keys(this.objects)) {
                        if (id.startsWith(ioBrokerDeviceId)) {
                            delete this.objects[id];
                        }
                    }
                    try {
                        await this.adapter.delObjectAsync(ioBrokerDeviceId, { recursive: true });
                        await this._checkObjects(newIoBrokerDeviceId, message.data.browserID);
                    } catch (e) {
                        this.adapter.log.warn(
                            `Could not delete old instance objects in ${
                                ioBrokerDeviceId
                            }, please do so yourself. Error was: ${e}`,
                        );
                    }
                    delete this.browserModStorage.browsers[message.browserID];
                    delete message.data.browserID;
                    this.browserModStorage.browsers[message.data.browserID] = message.data;
                } else {
                    try {
                        await this._checkObjects(ioBrokerDeviceId, message.browserID);
                        await this._cleanUpInstances(); //maybe delete old instance, if new was created.
                    } catch (e) {
                        this.adapter.log.warn(
                            `Could not create objects for instance ${ioBrokerDeviceId}. Error was: ${e}`,
                        );
                    }
                    if (this.objects[`${this.adapter.namespace}.${ioBrokerDeviceId}.online`]) {
                        await this.adapter.setStateAsync(`${ioBrokerDeviceId}.online`, true, true);
                    } else {
                        console.log(
                            'No objects for instance, yet..',
                            `${ioBrokerDeviceId}.online`,
                            this.objects[ioBrokerDeviceId],
                            //this.objects,
                        );
                    }
                }
            } else if (method === 'log') {
                this.adapter.log.debug(`Message from browser_mod: ${message.message}`);
                ws.send(JSON.stringify({ id: message.id, type: 'result', success: true }));
            } else if (method === 'settings') {
                //{"type":"browser_mod/settings","key":"autoRegister","value":true,"id":200} <- something like this...
                if (message.key && this.browserModStorage.settings[message.key] !== undefined) {
                    this.browserModStorage.settings[message.key] = message.value;
                    this.adapter.log.debug(`Updated browser_mod settings: ${message.key} to ${message.value}`);
                }
                //think about making this permanent somehow? -> but only if we find a way to allow browser_mod_settings panel.
                ws.send(JSON.stringify({ id: message.id, type: 'result', success: true}));
            } else if (method === 'recall_id') {
                ws.send(JSON.stringify({ id: message.id, type: 'result', success: true, result: ws.browserID }));
            } else if (method === 'unregister') {
                const browserId = message.browserID;
                try {
                    await this.adapter.delObjectAsync(`${instancesPath}${browserId}`, {recursive: true});
                } catch (e) {
                    this.adapter.log.info(`Could not delete browser_mod instance ${browserId} objects: `, e);
                    this.adapter.log.info('Maybe was already deleted?');
                }
                delete this.browserModStorage.browsers[browserId];
                this.adapter.log.debug(`Instance ${browserId} unregistered.`);
                ws.send(JSON.stringify({ id: message.id, type: 'result', success: true}));
            } else {
                this.adapter.log.warn(`Unknown browser_mod method: ${JSON.stringify(message)}`);
                ws.send(JSON.stringify({ id: message.id, type: 'result', success: true}));
            }
            return true;
        } else {
            return false;
        }
    }

    /**
     * Handle a state change in ioBroker.
     *
     * @param id {string} id of the state that changed
     * @param state {ioBroker.State|null} new state or null if deleted
     * @returns {Promise<void>} promise that resolves when the state change is handled
     */
    async onStateChange(id, state) {
        //console.log(id);
        if (state && !state.ack && id.startsWith(`${this.adapter.namespace}.${instancesPath}`)) {
            //ok, is relevant for us.
            const parts = id.split('.');
            const browserId = parts[3];
            let command = parts[4];
            let allDevices = false;
            if (!command) {
                command = parts[3];
                allDevices = true;
            }

            let event = {
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
                                const { duration, message, action_text, action } = JSON.parse(state.val);
                                event.duration = duration;
                                event.message = message;
                                event.action_text = action_text;
                                event.action = action;
                            } catch (e) {
                                this.adapter.log.error(`Could not parse toast object: ${e}`);
                                if (state.val.includes(';')) {
                                    [event.duration, event.message, event.action_text, event.action] =
                                        state.val.split(';');
                                    if (event.action) {
                                        try {
                                            event.action = JSON.parse(event.action);
                                        } catch (e) {
                                            this.adapter.debug(`Could not parse action string ${event.action}: ${e}`);
                                        }
                                    }
                                } else {
                                    event.message = state.val;
                                }
                            }
                        } else {
                            return;
                        }
                        break;
                    case 'popup':
                        if (state.val) {
                            try {
                                const popup = JSON.parse(state.val);
                                for (const key of Object.keys(popup)) {
                                    event[key] = popup[key];
                                }
                            } catch (e) {
                                this.adapter.log.error('Could not parse popup object: ', e);
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
                    case 'hideHeader':
                        if (allDevices) {
                            this.browserModStorage.settings.hideHeader = state.val;
                        } else {
                            this.browserModStorage.browsers[browserId].hideHeader = state.val;
                        }
                        event = {
                            result: this.browserModStorage,
                        };
                        break;
                    default:
                        return;
                }

                //console.log('sending: ', event);
                if (allDevices) {
                    for (const client of Object.values(this.clients)) {
                        this._sendToClient(client, {
                            type: 'event',
                            event,
                            id: client.subscribeId,
                        });
                    }
                } else {
                    event.browserID = client.instance;
                    this._sendToClient(client, {
                        type: 'event',
                        event,
                        id: client.subscribeId,
                    });
                }
            } else {
                this.adapter.log.warn(`Device ${browserId} currently not connected. Can not send command ${command}`);
            }
        }
    }

    /**
     * Handle a change of lovelace configuration.
     * Will update ioBroker objects for new views.
     *
     * @param lovelaceConfig {object} new lovelace configuration
     * @returns {Promise<void>} promise that resolves when the configuration change is handled
     */
    async handeUpdatedConfig(lovelaceConfig) {
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
                    this.adapter.extendObject(
                        id,
                        {
                            common: {
                                type: 'string',
                                states: this.knownViewsStates,
                            },
                        },
                        () => {
                            this.adapter.log.debug(`Updated ${id}`);
                        },
                    );
                }
            }
        }
    }

    /**
     * Initialize the browser_mod module.
     * Will update ioBroker objects for new views.
     *
     * @param lovelaceConfig {object} lovelace configuration
     * @returns {Promise<void>} promise that resolves when the module is initialized
     */
    async init(lovelaceConfig) {
        await this.handeUpdatedConfig(lovelaceConfig);
        await this._checkObjects(instancesPath.substring(0, instancesPath.length - 1));

        //iterate all instances in object database and initialize browser settings. Also reads hideHeader states.
        //initiates browser online state to false.
        for (const id of Object.keys(this.objects)) {
            if (id.startsWith(`${this.adapter.namespace}.${instancesPath}`)) {
                const browserId = id.split('.')[3];
                if (id.endsWith('.online')) {
                    const onlineState = await this.adapter.getStateAsync(id);
                    this.initialiseBrowserSettings(browserId);
                    this.browserModStorage.browsers[browserId].last_seen = onlineState?.lc || 0;
                    await this.adapter.setState(id, false, true);
                } else if (id.endsWith('hideHeader')) {
                    const hideHeader = await this.adapter.getStateAsync(id);
                    if (hideHeader) {
                        if (id === `${this.adapter.namespace}.${instancesPath}hideHeader`) {
                            this.browserModStorage.settings.hideHeader = hideHeader.val;
                        } else {
                            //read hideHeader states from ioBroker objects.
                            this.initialiseBrowserSettings(browserId);
                            this.browserModStorage.browsers[id.split('.')[3]].settings.hideHeader = hideHeader.val;
                        }
                    }
                }
            }
        }
        //maybe clean up instances here
        await this._cleanUpInstances();
    }

    /**
     * Augment the services object with browser_mod services.
     *
     * @param services {object} services object to augment
     */
    augmentServices(services) {
        services.browser_mod = {
            sequence: {
                name: '',
                description: 'Run a sequence of services',
                fields: {
                    sequence: {
                        name: 'Actions',
                        description: 'List of services to run',
                        selector: {
                            object: null,
                        },
                    },
                },
                target: {
                    device: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                    entity: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                },
            },
            delay: {
                name: '',
                description: 'Wait for a time',
                fields: {
                    time: {
                        name: 'Time',
                        description: 'Time to wait (ms)',
                        selector: {
                            number: {
                                mode: 'box',
                            },
                        },
                    },
                },
                target: {
                    device: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                    entity: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                },
            },
            popup: {
                name: '',
                description: 'Display a popup',
                fields: {
                    title: {
                        name: 'Title',
                        description: 'Popup title',
                        selector: {
                            text: null,
                        },
                    },
                    content: {
                        name: 'Content',
                        required: true,
                        description: 'Popup content (Test or lovelace card configuration)',
                        selector: {
                            object: null,
                        },
                    },
                    size: {
                        name: 'Size',
                        description: '',
                        selector: {
                            select: {
                                mode: 'dropdown',
                                options: ['normal', 'wide', 'fullscreen'],
                            },
                        },
                    },
                    right_button: {
                        name: 'Right button',
                        description: 'Text of the right button',
                        selector: {
                            text: null,
                        },
                    },
                    right_button_action: {
                        name: 'Right button action',
                        description: 'Action to perform when the right button is pressed',
                        selector: {
                            object: null,
                        },
                    },
                    left_button: {
                        name: 'Left button',
                        description: 'Text of the left button',
                        selector: {
                            text: null,
                        },
                    },
                    left_button_action: {
                        name: 'Left button action',
                        description: 'Action to perform when left button is pressed',
                        selector: {
                            object: null,
                        },
                    },
                    dismissable: {
                        name: 'User dismissable',
                        description: 'Whether the popup can be closed by the user without action',
                        default: true,
                        selector: {
                            boolean: null,
                        },
                    },
                    dismiss_action: {
                        name: 'Dismiss action',
                        description: 'Action to perform when popup is dismissed',
                        selector: {
                            object: null,
                        },
                    },
                    autoclose: {
                        name: 'Auto close',
                        description: 'Close the popup automatically on mouse, pointer or keyboard activity',
                        default: false,
                        selector: {
                            boolean: null,
                        },
                    },
                    timeout: {
                        name: 'Auto close timeout',
                        description: 'Time before closing (ms)',
                        selector: {
                            number: {
                                mode: 'box',
                            },
                        },
                    },
                    timeout_action: {
                        name: 'Timeout action',
                        description: 'Action to perform when popup is closed by timeout',
                        selector: {
                            object: null,
                        },
                    },
                    style: {
                        name: 'Styles',
                        description: 'CSS code to apply to the popup window',
                        selector: {
                            text: {
                                multiline: true,
                            },
                        },
                    },
                },
                target: {
                    device: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                    entity: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                },
            },
            more_info: {
                name: '',
                description: 'Show more-info dialog',
                fields: {
                    entity: {
                        name: 'Entity ID',
                        description: '',
                        required: true,
                        selector: {
                            text: null,
                        },
                    },
                    large: {
                        name: 'Large size',
                        description: '',
                        default: false,
                        selector: {
                            boolean: null,
                        },
                    },
                    ignore_popup_card: {
                        name: 'Ignore any active popup-card overrides',
                        description: '',
                        default: false,
                        selector: {
                            boolean: null,
                        },
                    },
                },
                target: {
                    device: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                    entity: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                },
            },
            close_popup: {
                name: '',
                description: 'Close a popup',
                fields: {},
                target: {
                    device: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                    entity: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                },
            },
            notification: {
                name: '',
                description: 'Display a short notification',
                fields: {
                    message: {
                        name: 'Message',
                        description: 'Message to display',
                        required: true,
                        selector: {
                            text: null,
                        },
                    },
                    duration: {
                        name: 'Auto close timeout',
                        description: 'Time before closing (ms)',
                        selector: {
                            number: {
                                mode: 'box',
                            },
                        },
                    },
                    action_text: {
                        name: 'Action button text',
                        description: 'Text of optional action button',
                        selector: {
                            text: null,
                        },
                    },
                    action: {
                        name: 'Button action',
                        description: 'Action to perform when the action button is pressed',
                        selector: {
                            object: null,
                        },
                    },
                },
                target: {
                    device: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                    entity: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                },
            },
            navigate: {
                name: '',
                description: 'Navigate browser to a different page',
                fields: {
                    path: {
                        name: 'Path',
                        description: 'Target path',
                        selector: {
                            text: null,
                        },
                    },
                },
                target: {
                    device: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                    entity: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                },
            },
            refresh: {
                name: '',
                description: 'Refresh page',
                fields: {},
                target: {
                    device: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                    entity: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                },
            },
            set_theme: {
                name: '',
                description: 'Change the current theme',
                fields: {
                    theme: {
                        name: 'Theme',
                        description: "Name of theme or 'auto'",
                        selector: {
                            text: null,
                        },
                    },
                    dark: {
                        name: 'Mode',
                        description: 'Dark/light mode',
                        selector: {
                            select: {
                                options: ['auto', 'light', 'dark'],
                            },
                        },
                    },
                    primaryColor: {
                        name: 'Primary Color',
                        description: 'Primary theme color',
                        selector: {
                            color_rgb: null,
                        },
                    },
                    accentColor: {
                        name: 'Accent Color',
                        description: 'Accent theme color',
                        selector: {
                            color_rgb: null,
                        },
                    },
                },
                target: {
                    device: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                    entity: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                },
            },
            console: {
                name: '',
                description: 'Print text to browser console',
                fields: {
                    message: {
                        name: 'Message',
                        description: 'Text to print',
                        selector: {
                            text: null,
                        },
                    },
                },
                target: {
                    device: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                    entity: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                },
            },
            javascript: {
                name: '',
                description: 'Run arbitrary JavaScript code',
                fields: {
                    code: {
                        name: 'Code',
                        description: 'JavaScript code to run',
                        selector: {
                            object: null,
                        },
                    },
                },
                target: {
                    device: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                    entity: [
                        {
                            integration: 'browser_mod',
                        },
                    ],
                },
            },
        };
    }
}

module.exports = BrowserModModule;
