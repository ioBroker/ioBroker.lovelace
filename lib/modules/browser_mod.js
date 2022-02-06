
const instancesPath = 'instances.';

class BrowserModModule {
    constructor(options) {
        this.adapter = options.adapter;
        this.objects = options.objects;
        this.clients = {};

        this.knownViews = [];
    }

    async _checkObjects(ioBrokerDeviceId, deviceId) {
        if (!this.objects[ioBrokerDeviceId]) {
            //check for adapter objects:
            await this.adapter.setObjectAsync(ioBrokerDeviceId, {
                type: 'device',
                common: {name: deviceId},
                native: {instance: deviceId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.path']) {
            await this.adapter.setObjectAsync(ioBrokerDeviceId + '.path', {type: 'state', common: {
                name: 'UI is showing path',
                type: 'string',
                read: true,
                write: true,
                role: 'state',
                states: []
            }, native: { instance: deviceId }});
        }

        if (!this.objects[ioBrokerDeviceId + '.visible']) {
            await this.adapter.setObjectAsync(ioBrokerDeviceId + '.visible', {
                type: 'state', common: {
                    name: 'UI is visible',
                    type: 'boolean',
                    read: true,
                    write: false,
                    role: 'sensor'
                }, native: {instance: deviceId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.battery']) {
            await this.adapter.setObjectAsync(ioBrokerDeviceId + '.battery', {
                type: 'channel',
                common: {
                    name: 'battery'
                },
                native: {}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.battery.level']) {
            await this.adapter.setObjectAsync(ioBrokerDeviceId + '.battery.level', {
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

        if (!this.objects[ioBrokerDeviceId + '.battery.charging']) {
            await this.adapter.setObjectAsync(ioBrokerDeviceId + '.battery.charging', {
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

        if (!this.objects[ioBrokerDeviceId + '.name']) {
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

        if (!this.objects[ioBrokerDeviceId + '.blackout']) {
            await this.adapter.setObjectAsync(ioBrokerDeviceId + '.blackout', {
                type: 'state', common: {
                    name: 'Blackout screen',
                    type: 'boolean',
                    read: true,
                    write: true,
                    role: 'switch.light'
                }, native: {instance: deviceId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.online']) {
            await this.adapter.setObjectAsync(ioBrokerDeviceId + '.online', {
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
                    await this.adapter.setStateAsync(ioBrokerDeviceId + '.path', message.data.browser.path, true);
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
        console.log('Incomming browser_mod message:', message);

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
        console.log(id);
        if (state && !state.ack && id.startsWith(this.adapter.namespace + '.' + instancesPath)) { //ok, is relevant for us.
            const parts = id.split('.');
            const deviceId = parts[3];
            let command = parts[4];

            const client = this.clients[deviceId];
            if (client) {
                switch (command) {
                    case 'blackout':
                        if (!state || !state.val) {
                            command = 'no_blackout';
                        }
                        break;
                    default:
                        return;
                }

                this._sendToClient(client, {
                    type: 'event',
                    event: {
                        event_type: 'browser_mod/connect',
                        command,
                        origin: 'LOCAL',
                        time_fired: new Date().toISOString()
                    },
                    id: client.subscribeId
                });
            } else {
                this.adapter.log.warn('Device ' + deviceId + ' currently not connected. Can not send command ' + command);
            }
        }
    }

    async handeUpdatedConfig(lovelaceConfig) {
        const newViewsArray = [];
        let needUpdate = false;
        for (const view of lovelaceConfig.views) {
            if (!this.knownViews.includes(view.path)) {
                needUpdate = true;
                this.knownViews.push(view.path);
            }
            newViewsArray.push('/lovelace/' + view.path);
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
}


module.exports = BrowserModModule;
