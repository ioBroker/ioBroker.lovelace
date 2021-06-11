
async function _processBrowserModMessage(message, adapter) {
    const method = message.type.split('/')[1];

    //store infos about browser instance
    if (method === 'update') {
        if (!message.deviceID) {
            console.warn('No device ID in request: ' + JSON.stringify(message));
            return;
        }
        const id = 'instances.' + message.deviceID;
        await adapter.setObjectNotExistsAsync(id, { type: 'device', common: { name: message.deviceID }, native: {instance: message.deviceID } });
        if (message.data && message.data.browser) {
            if (message.data.browser.path) {
                await adapter.setObjectNotExistsAsync(id + '.path', {type: 'state', common: {
                    name: 'UI Path',
                    type: 'string',
                    read: true,
                    write: true,
                    role: 'state'
                }, native: { instance: message.deviceID }});
                await adapter.setStateAsync(id + '.path', message.data.browser.path, true);
            }
            if (message.data.browser.visibility) {
                await adapter.setObjectNotExistsAsync(id + '.visible', {type: 'state', common: {
                    name: 'UI Visible',
                    type: 'boolean',
                    read: true,
                    write: false,
                    role: 'sensor'
                }, native: { instance: message.deviceID }});
                await adapter.setStateAsync(id + '.visible', message.data.browser.visibility === 'visible', true);
            }
            if (message.data.browser.battery_level) {
                await adapter.setObjectNotExistsAsync(id + '.battery', {type: 'state', common:
                        {
                            name: 'battery',
                            type: 'number',
                            read: true,
                            write: false,
                            role: 'value.battery'
                        }, native: { instance: message.deviceID }});
                await adapter.setStateAsync(id + '.battery', message.data.browser.battery_level, true);
            }
        }
    } else if(message.type === 'connect') {
        adapter.log.debug(`Instance ${message.data.deviceID} connected.`);
    } else {
        console.warn('Unknown browser_mod method: ' + JSON.stringify(message));
    }
}

exports.processBrowserModMessage = _processBrowserModMessage;
