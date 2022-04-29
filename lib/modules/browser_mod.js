
const instancesPath = 'instances.';

class BrowserModModule {
    constructor(options) {
        this.adapter = options.adapter;
        this.objects = options.objects;
        this.clients = {};

        this.knownViews = [];
    }

    async _checkObjects(ioBrokerDeviceId, deviceId) {
        //create device / folder:
        if (!this.objects[ioBrokerDeviceId]) {
            if (!deviceId) {
                await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId, {
                    type: 'folder',
                    common: {name: 'UI Instances'},
                    native: {}
                });
            } else {
                await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId, {
                    type: 'device',
                    common: {name: deviceId},
                    native: {instance: deviceId}
                });
            }
        }

        if (!this.objects[ioBrokerDeviceId + '.path']) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.path', {type: 'state', common: {
                name: 'UI is showing path',
                type: 'number',
                read: true,
                write: true,
                role: 'state',
                states: this.knownViews
            }, native: { instance: deviceId }});
        }

        if (!this.objects[ioBrokerDeviceId + '.visible'] && deviceId) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.visible', {
                type: 'state', common: {
                    name: 'UI is visible',
                    type: 'boolean',
                    read: true,
                    write: false,
                    role: 'sensor'
                }, native: {instance: deviceId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.battery'] && deviceId) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.battery', {
                type: 'channel',
                common: {
                    name: 'battery'
                },
                native: {}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.battery.level'] && deviceId) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.battery.level', {
                type: 'state', common:
                    {
                        name: 'battery',
                        type: 'number',
                        read: true,
                        write: false,
                        role: 'value.battery'
                    }, native: {instance: deviceId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.battery.charging'] && deviceId) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.battery.charging', {
                type: 'state', common:
                    {
                        name: 'charging',
                        type: 'boolean',
                        read: true,
                        write: false,
                        role: 'indicator.plugged'
                    }, native: {instance: deviceId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.name'] && deviceId) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.name', {
                type: 'state', common: {
                    name: 'Name of instance',
                    type: 'string',
                    read: true,
                    write: true,
                    role: 'state'
                }, native: {instance: deviceId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.more_info']) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.more_info', {
                type: 'state', common: {
                    name: 'Show more_info of entity_id',
                    type: 'string',
                    read: true,
                    write: true,
                    role: 'state'
                }, native: {instance: deviceId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.toast']) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.toast', {
                type: 'state', common: {
                    name: 'Show toast. Optional: duration(ms);message',
                    type: 'string',
                    read: true,
                    write: true,
                    role: 'state'
                }, native: {instance: deviceId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.popup']) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.popup', {
                type: 'state', common: {
                    name: 'Show popup',
                    type: 'object',
                    read: true,
                    write: true,
                    role: 'state'
                }, native: {instance: deviceId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.popup_close']) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.popup_close', {
                type: 'state', common: {
                    name: 'Close popups or more_info dialogs.',
                    type: 'boolean',
                    read: false,
                    write: true,
                    role: 'button'
                }, native: {instance: deviceId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.window_reload']) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.window_reload', {
                type: 'state', common: {
                    name: 'Reload webpage',
                    type: 'boolean',
                    read: false,
                    write: true,
                    role: 'button'
                }, native: {instance: deviceId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.lovelace_reload']) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.lovelace_reload', {
                type: 'state', common: {
                    name: 'Reload lovelace configuration',
                    type: 'boolean',
                    read: false,
                    write: true,
                    role: 'button'
                }, native: {instance: deviceId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.blackout']) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.blackout', {
                type: 'state', common: {
                    name: 'Blackout screen',
                    type: 'boolean',
                    read: false,
                    write: true,
                    role: 'button'
                }, native: {instance: deviceId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.online'] && deviceId) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.online', {
                type: 'state', common:
                    {
                        name: 'online',
                        type: 'boolean',
                        read: true,
                        write: false,
                        role: 'indicator.reachable'
                    }, native: {instance: deviceId}
            });
        }
    }

    //store infos about browser instance
    async _hanldeUpdate(ioBrokerDeviceId, message) {
        if (message.data) {
            if (message.data.browser) {
                if (message.data.browser.path) {
                    await this.adapter.setStateAsync(ioBrokerDeviceId + '.path', this.knownViews.indexOf(message.data.browser.path), true);
                }
                if (message.data.browser.visibility) {
                    await this.adapter.setStateAsync(ioBrokerDeviceId + '.visible', message.data.browser.visibility === 'visible', true);
                }
                if (message.data.browser.battery_level) {
                    await this.adapter.setStateAsync(ioBrokerDeviceId + '.battery.level', message.data.browser.battery_level, true);
                }
                await this.adapter.setStateAsync(ioBrokerDeviceId + '.battery.charging', message.data.browser.charging || false, true);
            }
            if (message.data.screen) {
                await this.adapter.setStateAsync(ioBrokerDeviceId + '.blackout', message.data.screen.blackout || false, true);
            }
            if (message.data.player) {
                // volume: 1 (?), muted: boolean, src: '', state === 'stopped'
            }
        }
    }

    _sendToClient(client, message) {
        client.ws.send(JSON.stringify({
            id: client.subscribeId,
            ...message
        }));
    }

    async processBrowserModMessage(ws, message) {
        const method = message.type.split('/')[1];
        //console.log('Incomming browser_mod message:', message);

        if (!message.deviceID) {
            console.warn('No device ID in request: ' + JSON.stringify(message));
            return;
        }
        const ioBrokerDeviceId = instancesPath + message.deviceID;

        if (method === 'update') {
            this._hanldeUpdate(ioBrokerDeviceId, message);
        } else if(method === 'connect') { //similar to 'subscribe'.
            ws.on('close', async () => {
                this.adapter.log.debug(`Instance ${message.deviceID} disconnected.`);
                delete this.clients[message.deviceID];
                await this.adapter.setStateAsync(ioBrokerDeviceId + '.online', false, true);
            });

            this.adapter.log.debug(`Instance ${message.deviceID} connected.`);
            this.clients[message.deviceID] = {
                subscribeId: message.id,
                deviceID: message.deviceID,
                ws
            };
            ws.send(JSON.stringify({id: message.id, type: 'result', success: true, result: null}));

            //check if all objects in ioBroker are created.
            await this._checkObjects(ioBrokerDeviceId, message.deviceID);
            await this.adapter.setStateAsync(ioBrokerDeviceId + '.online', true, true);
        } else {
            console.warn('Unknown browser_mod method: ' + JSON.stringify(message));
        }
    }

    async onStateChange(id, state) {
        //console.log(id);
        if (state && !state.ack && id.startsWith(this.adapter.namespace + '.' + instancesPath)) { //ok, is relevant for us.
            const parts = id.split('.');
            const deviceId = parts[3];
            let command = parts[4];
            let allDevices = false;
            if (!command) {
                command = parts[3];
                allDevices = true;
            }
            console.log(command, '->', state.val);

            const event = {
                event_type: 'browser_mod/connect',
                command,
                origin: 'LOCAL',
                time_fired: new Date().toISOString()
            };

            const client = this.clients[deviceId];
            if (allDevices || client) {
                switch (command) {
                    case 'blackout':
                        if (!state || !state.val) {
                            event.command = 'no_blackout';
                        }
                        break;
                    case 'path':
                        event.command = 'navigate';
                        event.navigation_path = this.knownViews[state.val];
                        break;
                    case 'more_info':
                        event.entity_id = state.val;
                        break;
                    case 'toast':
                        if (state.val) {
                            if (state.val.includes(';')) {
                                [event.duration, event.message] = state.val.split(';');
                            } else {
                                event.message = state.val;
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
                    case 'window_reload':
                        break;
                    case 'lovelace_reload':
                        break;
                    default:
                        return;
                }

                console.log('sending: ', event);
                if (allDevices) {
                    for (const client of Object.values(this.clients)) {
                        this._sendToClient(client, {
                            type: 'event',
                            event,
                            id: client.subscribeId
                        });
                    }
                } else {
                    this._sendToClient(client, {
                        type: 'event',
                        event,
                        id: client.subscribeId
                    });
                }
            } else {
                this.adapter.log.warn('Device ' + deviceId + ' currently not connected. Can not send command ' + command);
            }
        }
    }

    async handeUpdatedConfig(lovelaceConfig) {
        const newViewsArray = [];
        let needUpdate = false;
        for (const view of lovelaceConfig.views) {
            const viewPath = '/lovelace/' + view.path;
            if (!this.knownViews.includes(viewPath)) {
                needUpdate = true;
                this.knownViews.push(viewPath);
            }
            newViewsArray.push(viewPath);
        }

        if (needUpdate) {
            for (const id of Object.keys(this.objects)) {
                if (id.startsWith(this.adapter.namespace + '.' + instancesPath) && id.endsWith('.path')) {
                    this.adapter.extendObject(id, {
                        common: {
                            states: newViewsArray
                        }
                    }, () => { this.adapter.log.debug('Updated ' + id); });
                }
            }
        }
    }

    async init (lovelaceConfig) {
        await this.handeUpdatedConfig(lovelaceConfig);
        await this._checkObjects(instancesPath.substring(0, instancesPath.length - 1));

        for (const id of Object.keys(this.objects)) {
            if (id.startsWith(this.adapter.namespace + '.' + instancesPath) && id.endsWith('.online')) {
                await this.adapter.setState(id, false, true);
            }
        }
    }
}


module.exports = BrowserModModule;
