const expect = require('chai').expect;
const WebSocket = require('ws');
const enums = require("../testData/enums.json");

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
    if (startingUp) {
        const instanceObj = await harness.objects.getObjectAsync('system.adapter.lovelace.0');
        if (instanceObj.native.port !== lovelacePort) {
            instanceObj.native.port = lovelacePort;
            await harness.objects.setObjectAsync('system.adapter.lovelace.0', instanceObj);
            console.log('Updated lovelace port to ' + lovelacePort);
        }
    }
    if (!startingUp) {
        await harness.states.setStateAsync('lovelace.0.info.entitiesUpdated', false);
    }
    if (!idsWithEnums) {
        idsWithEnums = [];
    }
    enums['enum.rooms.testroom'].common.members = idsWithEnums;
    enums['enum.functions.testfunc'].common.members = idsWithEnums;
    await harness.objects.setObjectAsync('enum.rooms.testroom', enums['enum.rooms.testroom']);
    await harness.objects.setObjectAsync('enum.functions.testfunc', enums['enum.functions.testfunc']);

    for (const id of Object.keys(objects)) {
        const obj = objects[id];
        await harness.objects.setObjectAsync(id, obj);
    }
    console.log('Added objects to db.');
};

async function waitForStateChange(targetId, harness) {
    return new Promise(resolve => {
        function stateChangedListener(id, state) {
            if (id === targetId) {
                if (state.val === true) {
                    console.log('Entities updated! -> resolve');
                    harness.removeListener('stateChange', stateChangedListener);
                    resolve();
                }
            } else {
                console.log('Ignore change for', id);
            }
        }
        harness.on('stateChange', stateChangedListener);
    });
}

/**
 * Waits until lovelace.0.info.entitiesUpdated is set to true by lovelace.
 * @param harness
 * @param {Array<IOBObject>} objects to add.
 * @param {boolean} [startingUp] prevent setting entitiesUpdated to false on startup
 * @returns {Promise<Array<Entity>>}
 */
exports.waitForEntitiesUpdate = async function (harness, objects) {
    console.log('Adding new Objects - reset entities updated flag.');
    await harness.states.setStateAsync('lovelace.0.info.entitiesUpdated', false);

    const promise = waitForStateChange('lovelace.0.info.entitiesUpdated', harness);
    for (const obj of objects) {
        await harness.objects.setObjectAsync(obj._id, obj);
    }
    console.log('Updated objects, now wait for lovelace to process them.');
    await promise;
    console.log('Lovelace created new entities. Testing can continue.');
    return exports.sendToAsync(harness, 'lovelace.0', 'browse', 'message');
};

exports.startAndGetEntities = async function (harness, objects, deviceIds, initialStates) {
    await exports.insertObjectsToDB(harness, objects, deviceIds, true);
    if (initialStates && initialStates.length) {
        const promises = [];
        for (const keyValue of initialStates) {
            promises.push(harness.states.setStateAsync(keyValue.id, keyValue.val));
        }
        await Promise.all(promises);
        console.log('Updated states.');
    }
    // Start the adapter and wait until it has started
    const promises = [
        harness.startAdapterAndWait(),
        waitForStateChange('lovelace.0.info.readyForClients', harness)
    ];
    await Promise.all(promises);
    console.log('Lovelace started and ready for action.');
    const entities = await exports.sendToAsync(harness, 'lovelace.0', 'browse', 'message');
    console.log('got entities after first start, add them to configuration.');
    await exports.addEntitiesToConfiguration(harness, entities);
    console.log('Startup done.');
    return entities;
};

/**
 * Expects one entity
 * @param {Entity} entity
 * @param {string} entityType (for example light or sensor)
 * @param {string} ioBrokerDeviceId expected id of context.id
 * @param {string} [name] expected friendly name
 * @param {Record<string,string>} [values] additional values, for example getId/setId of context.STATE.
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
 * @param {Array<Entity>} entities
 * @returns {Promise<Array<Entity>>}
 */
exports.addEntitiesToConfiguration = async function (harness, entities) {
    console.log('Updating UI config -> ignore update messages. :-)');
    const configObj = await harness.objects.getObjectAsync('lovelace.0.configuration');
    let currentConfig = configObj.native;
    if (!currentConfig.views) {
        currentConfig = JSON.parse(JSON.stringify(require('../../lib/defaultConfig.json')));
        configObj.native = currentConfig;
    }
    for (const entity of entities) {
        //should look like lib\defaultConfig.json -> i.e. just fill views[0].cards
        currentConfig.views[0].cards.push({ //just add entity card
            'type': 'entity',
            'entity': entity.entity_id
        });
    }
    const newEntities = await exports.waitForEntitiesUpdate(harness, [configObj]);
    console.log('Updated lovelace UI config.');
    return newEntities;
};

let currentClient;
let id = 0;
exports.clearClient = function () { currentClient && currentClient.close(); currentClient = undefined; };

async function setupClient() {
    console.log('Setting up websocket client for UI input emulation.');
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
    currentClient.on('close', () => {currentClient = undefined; console.log('UI client closed.');});
    currentClient.on('error', () => {currentClient = undefined; console.log('UI client error.');});
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
    let fired = false;
    console.log('Change state in iob and see that ' + entity_id + ' changes.');

    if (!currentClient) {
        await setupClient();
    }
    const resultPromise = new Promise(resolve => {
        function eventListener(message) {
            console.log('.');
            if (fired) {
                currentClient.removeEventListener('message', eventListener);
                return;
            }
            const m = JSON.parse(message);
            console.log('Got message ', m);
            if (m.type === 'event' && m.event && m.event.event_type === 'state_changed') {
                const data = m.event.data;
                if (data.entity_id === entity_id) {
                    fired = true;
                    console.log('Got message from adapter to UI:');
                    console.dir(data.new_state, {depth: null});
                    validator(data.new_state); //pass new entity to validator.
                    currentClient.removeEventListener('message', eventListener);
                    resolve();
                }
            }
        }
        currentClient.on('message', eventListener);
        console.log('added message listener.');
    });
    await changeState();
    console.log('iob state changed.');
    await resultPromise;
    return resultPromise;
};

/**
 * Send a service call to adapter, emulating UI interaction
 * @param harness
 * @param {function} prepareMessageFunc - prepare message (will receive message object) -> fill in domain, service, and service_data.
 * @param {string} [ioBrokerId] - set of ids of state to check for changes.
 * @returns {Promise<ioBroker.State|null>}
 */
exports.validateUIInput = async function (harness, entity, prepareMessageFunc, ioBrokerId, validator) {
    if (ioBrokerId) {
        await exports.validateMultiUIInput(harness, entity, prepareMessageFunc, [ioBrokerId], (states) => {
            if (validator) {
                validator(states[ioBrokerId]);
            }
        });
    } else {
        await exports.validateMultiUIInput(harness, entity, prepareMessageFunc);
    }
};

/**
 * Send a service call to adapter, emulating UI interaction
 * @param harness
 * @param {function} prepareMessageFunc - prepare message (will receive message object) -> fill in domain, service, and service_data.
 * @param {Array<string>} [ioBrokerIds] - set of ids of state to check for changes.
 * @returns {Promise<ioBroker.State|null>}
 */
exports.validateMultiUIInput = async function (harness, entity, prepareMessageFunc, ioBrokerIds, validator) {
    if (!currentClient) {
        await setupClient();
    }

    console.log('Emulate UI input for ' + entity.entity_id + ' and see if iob states change.');
    await new Promise(resolve => {
        function receiver(message) {
            const m = JSON.parse(message);
            if (m.id === service_call_id) {
                currentClient.removeEventListener('message', receiver);
                console.log('Got response from adapter to UI message.');
                resolve();
            }
        }

        const results = {};
        function stateChanged(id, state) {
            console.log(id, 'changed to', state ? state.val : 'null');
            if (state.from !== 'system.adapter.lovelace.0') {
                console.log('State change not from lovelace -> ignore.', state);
                return;
            }
            if (ioBrokerIds.includes(id)) {
                results[id] = state;
                const foundIndex = ioBrokerIds.indexOf(id);
                ioBrokerIds.splice(foundIndex, 1);
            }
            if (ioBrokerIds.length === 0) { //all received.
                harness.removeListener('stateChange', stateChanged);
                console.log('All iob states changed after UI input. Done.');
                if (validator) {
                    validator(results);
                }
                resolve();
            }
        }

        id += 1;
        const service_call_id = id;
        if (ioBrokerIds && ioBrokerIds.length) {
            console.log('Subscribed to iob stateChange');
            harness.on('stateChange', stateChanged);
        } else {
            console.log('Subscribed to lovelace stateChange');
            currentClient.on('message', receiver);
        }
        const message = {id, type: 'call_service'};
        prepareMessageFunc(message);
        message.service_data.entity_id = entity.entity_id;
        //TODO: no one waits for this callback... can this cause issues? *Should* not, because listeners can not resolve before this is sent, right?
        currentClient.send(JSON.stringify(message), (err) => {
            if (err) {
                console.log('Error sending: ', err);
            }
            console.log('Did send emulated UI message');
        });
    });
};
