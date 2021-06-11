const expect = require('chai').expect;
const WebSocket = require('ws');

const lovelacePort = 38091;

/**
 * returns number of entities that are always added to entities array.
 * @returns {number}
 */
exports.getNumConstEntities = function () {
    //zone.home
    //alarm_control_panel.defaultAlarm
    return 2;
};

/**
 * Async waits for delay t.
 * @param {number} t time in milliseconds
 * @param {any} [val] value to return on timeout
 * @returns {Promise<unknown>}
 */
exports.delay = function (t, val) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(val);
        }, t);
    });
};

//example: harness.sendTo('lovelace.0', 'browse', 'message', (resp) => {});
exports.sendToAsync = function (harness, instance, command, message) {
    return new Promise((resolve) => {
        harness.sendTo(instance, command, message, (resp) => {
            resolve(resp);
        });
    });
};

/**
 * Insert objects into harness db
 * @param harness
 * @param {Record<string, ioBroker.Object>} objects
 * @param {Array<string>} [idsWithEnums] ids to add to enums.
 * @param {boolean} [startingUp] prevent setting entitiesUpdated to false on startup
 * @returns {Promise<void>}
 */
exports.insertObjectsToDB = async function (harness, objects, idsWithEnums, startingUp) {
    //modify port here:
    const instanceObj = await harness.objects.getObjectAsync('system.adapter.lovelace.0');
    if (instanceObj.native.port !== lovelacePort) {
        instanceObj.native.port = lovelacePort;
        await harness.objects.setObjectAsync('system.adapter.lovelace.0', instanceObj);
    }
    if (!startingUp) {
        await harness.states.setStateAsync('lovelace.0.info.entitiesUpdated', false);
    }
    if (idsWithEnums) {
        const enums = require('../testData/enums.json');
        enums['enum.rooms.testroom'].common.members = idsWithEnums;
        enums['enum.functions.testfunc'].common.members = idsWithEnums;
        await harness.objects.setObjectAsync('enum.rooms.testroom', enums['enum.rooms.testroom']);
        await harness.objects.setObjectAsync('enum.functions.testfunc', enums['enum.functions.testfunc']);
    }

    for (const id of Object.keys(objects)) {
        const obj = objects[id];
        await harness.objects.setObjectAsync(id, obj);
    }
};

/**
 * Waits until lovelace.0.info.entitiesUpdated is set to true by lovelace.
 * @param harness
 * @param {boolean} [startingUp] prevent setting entitiesUpdated to false on startup
 * @returns {Promise<Entities>}
 */
exports.waitForEntitiesUpdate = async function (harness, startingUp) {
    if (!startingUp) {
        await harness.states.setStateAsync('lovelace.0.info.entitiesUpdated', false);
    }
    let haveUpdate = false;
    while (!haveUpdate) {
        const state = await harness.states.getStateAsync('lovelace.0.info.entitiesUpdated');
        if (state && state.val) {
            haveUpdate = true;
            return await exports.sendToAsync(harness, 'lovelace.0', 'browse', 'message');
        }
        console.log('No new entities, yet. Wait some more...');
        await exports.delay(1000);
    }
};

exports.startAndGetEntities = async function (harness, objects, deviceIds, initialStates) {
    await exports.insertObjectsToDB(harness, objects, deviceIds, true);
    if (initialStates && initialStates.length) {
        const promises = [];
        for (const keyValue of initialStates) {
            promises.push(harness.states.setStateAsync(keyValue.id, keyValue.val));
        }
        await Promise.all(promises);
    }
    // Start the adapter and wait until it has started
    await harness.startAdapterAndWait();
    await exports.waitForEntitiesUpdate(harness, true);

    const entities = await exports.sendToAsync(harness, 'lovelace.0', 'browse', 'message');
    return entities;
};

/**
 * Expects one entity
 * @param {Entity} entity
 * @param {string} entityType (for example light or sensor)
 * @param {string} ioBrokerDeviceId expected id of context.id
 * @param {string} name expected friendly name
 * @param {Record<string,string>} values additional values, for example getId/setId of context.STATE.
 */
exports.expectEntity = function (entity, entityType, ioBrokerDeviceId, name, values) {
    expect(entity).to.have.property('attributes');
    if (name) {
        expect(entity).to.have.nested.property('attributes.friendly_name', name);
    }
    expect(entity).to.have.nested.property('context.STATE');
    expect(entity).to.have.nested.property('context.id', ioBrokerDeviceId);
    expect(entity).to.have.nested.property('context.type', entityType);
    if (values && values.getId) {
        expect(entity).to.have.nested.property('context.STATE.getId', values.getId);
    }
    if (values && values.setId) {
        expect(entity).to.have.nested.property('context.STATE.setId', values.setId);
    }
    expect(entity).to.have.property('entity_id');
    expect(entity.entity_id.startsWith(entityType + '.')).to.be.true;
};

/**
 * Adds entity to configuration, which should make adapter subscribe to state changes
 * @param harness
 * @param {string} entity_id
 * @returns {Promise<void>}
 */
exports.addEntityToConfiguration = async function (harness, entity_id) {
    const configObj = await harness.objects.getObjectAsync('lovelace.0.configuration');
    let currentConfig = configObj.native;
    if (!currentConfig.views) {
        currentConfig = JSON.parse(JSON.stringify(require('../../lib/defaultConfig.json')));
        configObj.native = currentConfig;
    }
    //should look like lib\defaultConfig.json -> i.e. just fill views[0].cards
    currentConfig.views[0].cards.push({ //just add entity card
        'type': 'entity',
        'entity': entity_id
    });
    await harness.objects.setObjectAsync('lovelace.0.configuration', configObj);
    await exports.waitForEntitiesUpdate(harness);
};

let currentClient;
let id = 0;
exports.clearClient = function () { currentClient && currentClient.close(); currentClient = undefined; };

async function setupClient() {
    currentClient = new WebSocket('ws://localhost:38091');
    const promise = new Promise(resolve => {
        let subscribeId = 0;
        function subscribeListener(message) {
            const m = JSON.parse(message);
            if (m.id === subscribeId && m.type === 'result') {
                console.log('Successfully subscribed to state_changed events.');
                currentClient.removeEventListener('message', subscribeListener);
                resolve();
            }
        }
        currentClient.on('message', subscribeListener);
        currentClient.on('open', () => {
            id += 1;
            currentClient.send(JSON.stringify({id: id, type: 'auth', access_token: 'no_token'}));
            id += 1;
            subscribeId = id;
            currentClient.send(JSON.stringify({id: id, type: 'subscribe_events', event_type: 'state_changed'}));
        });
    });
    currentClient.on('close', () => currentClient = undefined);
    currentClient.on('error', () => currentClient = undefined);
    return promise;
}

/**
 * initiate websocket connection to lovelace, subscribe to state changes, then change state in iobroker and validate reaction from lovelace
 * @param harness
 * @param {string} entity_id id of entity that should be watched for changes.
 * @param {function} changeState function that changes iobroker state -> must return promise / be async!
 * @param {function} validator function that validates changed state, will get complete new entity.
 * @returns {Promise<unknown>}
 */
exports.validateStateChange = async function (harness, entity_id, changeState, validator) {
    if (!currentClient) {
        await setupClient();
    }
    const resultPromise = new Promise(resolve => {
        function eventListener(message) {
            const m = JSON.parse(message);
            if (m.type === 'event' && m.event && m.event.event_type === 'state_changed') {
                const data = m.event.data;
                if (data.entity_id === entity_id) {
                    console.dir(data.new_state);
                    validator(data.new_state); //pass new entity to validator.
                    currentClient.removeEventListener('message', eventListener);
                    resolve();
                }
            }
        }
        currentClient.on('message', eventListener);
    });
    await changeState();
    return resultPromise;
};

/**
 * Send a service call to adapter, emulating UI interaction
 * @param harness
 * @param {function} prepareMessageFunc - prepare message (will receive message object) -> fill in domain, service, and service_data.
 * @param {string} [ioBrokerId] - id of state to check for changes.
 * @returns {Promise<ioBroker.State|null>}
 */
exports.validateUIInput = async function (harness, entity, prepareMessageFunc, ioBrokerId, validator) {
    if (!currentClient) {
        await setupClient();
    }

    await new Promise(resolve => {
        function receiver(message) {
            const m = JSON.parse(message);
            if (m.id === service_call_id) {
                currentClient.removeEventListener('message', receiver);
                resolve();
            }
        }

        function stateChanged(id, state) {
            console.log(id, 'changed');
            if (id === ioBrokerId) {
                if (validator) {
                    validator(state);
                }
                harness.removeListener('stateChange', stateChanged);
                resolve(state);
            }
        }

        id += 1;
        const service_call_id = id;
        if (ioBrokerId) {
            console.log('Subscribed to iob stateChange');
            harness.on('stateChange', stateChanged);
        } else {
            console.log('Subscribed to lovelace stateChange');
            currentClient.subscribe('message', receiver);
        }
        const message = {id, type: 'call_service'};
        prepareMessageFunc(message);
        message.service_data.entity_id = entity.entity_id;
        currentClient.send(JSON.stringify(message));
    });
};
