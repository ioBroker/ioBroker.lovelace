const expect = require('chai').expect;

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
 * @returns {Promise<void>}
 */
exports.insertObjectsToDB = async function (harness, objects, idsWithEnums) {
    //modify port here:
    const instanceObj = await harness._objects.getObjectAsync('system.adapter.lovelace.0');
    if (instanceObj.native.port !== 38091) {
        instanceObj.native.port = 38091;
        await harness._objects.setObjectAsync('system.adapter.lovelace.0', instanceObj);
    }
    await harness.states.setStateAsync('lovelace.0.info.entitiesUpdated', false);
    if (idsWithEnums) {
        const enums = require('../testData/enums.json');
        enums['enum.rooms.testroom'].common.members = idsWithEnums;
        enums['enum.functions.testfunc'].common.members = idsWithEnums;
        await harness._objects.setObjectAsync('enum.rooms.testroom', enums['enum.rooms.testroom']);
        await harness._objects.setObjectAsync('enum.functions.testfunc', enums['enum.functions.testfunc']);
    }

    for (const id of Object.keys(objects)) {
        const obj = objects[id];
        await harness._objects.setObjectAsync(id, obj);
    }
};

/**
 * Waits until lovelace.0.info.entitiesUpdated is set to true by lovelace.
 * @param harness
 * @returns {Promise<Entities>}
 */
exports.waitForEntitiesUpdate = async function (harness) {
    await harness.states.setStateAsync('lovelace.0.info.entitiesUpdated', false);
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

exports.startAndGetEntities = async function (harness, objects, deviceIds) {
    await exports.insertObjectsToDB(harness, objects, deviceIds);
    // Start the adapter and wait until it has started
    await harness.startAdapterAndWait();
    await exports.waitForEntitiesUpdate(harness);

    const entities = await exports.sendToAsync(harness, 'lovelace.0', 'browse', 'message');
    return entities;
};

exports.expectEntity = function (entity, entityType, ioBrokerDeviceId, name, values) {
    expect(entity).to.have.property('attributes');
    expect(entity).to.have.nested.property('attributes.friendly_name', name);
    expect(entity).to.have.nested.property('context.STATE');
    expect(entity).to.have.nested.property('context.id', ioBrokerDeviceId);
    expect(entity).to.have.nested.property('context.type', entityType);
    if (values.getId) {
        expect(entity).to.have.nested.property('context.STATE.getId', values.getId);
    }
    if (values.setId) {
        expect(entity).to.have.nested.property('context.STATE.setId', values.setId);
    }
    expect(entity).to.have.property('entity_id');
    expect(entity.entity_id.startsWith(entityType + '.')).to.be.true;
};
