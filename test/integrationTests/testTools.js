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
 * @returns {Promise<void>}
 */
exports.insertObjectsToDB = async function (harness, objects, idsWithEnums) {
    //modify port here:
    const instanceObj = await harness._objects.getObjectAsync('system.adapter.lovelace.0');
    instanceObj.native.port = 38091;
    await harness._objects.setObjectAsync('system.adapter.lovelace.0', instanceObj);
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
 * @returns {Promise<boolean>}
 */
exports.waitForEntitiesUpdate = async function (harness) {
    //await harness.states.setStateAsync('lovelace.0.info.entitiesUpdated', false); //may create race condition... hm? :-(
    let haveUpdate = false;
    while (!haveUpdate) {
        const state = await harness.states.getStateAsync('lovelace.0.info.entitiesUpdated');
        if (state && state.val) {
            haveUpdate = true;
            return true;
        }
        console.log('No new entities, yet. Wait some more...');
        await exports.delay(1000);
    }
};
