const tools  = require('./testTools');
const expect = require('chai').expect;
const utils  = require('util');

function expectBinarySensor(entity, id, name, getId) {
    expect(entity).to.have.property('attributes');
    expect(entity).to.have.nested.property('attributes.friendly_name', name);
    expect(entity).to.have.nested.property('context.STATE');
    expect(entity).to.have.nested.property('context.id', id);
    expect(entity).to.have.nested.property('context.type', 'binary_sensor');
    if (getId) {
        expect(entity).to.have.nested.property('context.STATE.getId', getId);
    } else {
        expect(entity).to.have.nested.property('context.STATE.getId', id);
    }
    expect(entity).to.have.property('entity_id');
    expect(entity.entity_id.startsWith('binary_sensor.')).to.be.true;
}

function expectMotion(entity, id, name, getId) {
    expect(entity).to.have.nested.property('attributes.device_class', 'motion');
    expectBinarySensor(entity, id, name, getId);
}

function expectBattery(entity, id, name, getId) {
    expect(entity).to.have.nested.property('attributes.device_class', 'battery');
    expectBinarySensor(entity, id, name, getId);
}

async function startAndGetEntities(harness, objects, deviceId) {
    await tools.insertObjectsToDB(harness, objects, [deviceId]);
    // Start the adapter and wait until it has started
    await harness.startAdapterAndWait();
    await tools.waitForEntitiesUpdate(harness);

    const entities = await tools.sendToAsync(harness, 'lovelace.0', 'browse', 'message');
    console.log(utils.inspect(entities, {color: true, depth: 10}));
    return entities;
}

async function motion_sensor_zigbee(getHarness) {
    // Create a fresh harness instance each test!
    const harness = getHarness();

    const objects = require('../testData/binary_sensor_motion_zigbee.json');
    const deviceId = 'zigbee.0.0123456789abcdef';
    const entities = await startAndGetEntities(harness, objects, deviceId);

    expect(entities).to.have.lengthOf(1 + tools.getNumConstEntities());
    const binarySensor = entities.find(e => e.context.id === deviceId);
    expect(binarySensor).to.be.ok;
    expectMotion(binarySensor, deviceId, objects[deviceId].common.name, deviceId + '.occupancy');
}

async function motion_sensor_with_battry_warning(getHarness) {
    // Create a fresh harness instance each test!
    const harness = getHarness();

    const objects = require('../testData/binary_sensor_motion_with_battery_warning.json');
    const deviceId = 'javascript.0.motions.WithBatteryWarning';
    const entities = await startAndGetEntities(harness, objects, deviceId);

    expect(entities).to.have.lengthOf(2 + tools.getNumConstEntities());
    const binarySensor = entities.find(e => e.context.id === deviceId);
    const battery = entities.find(e => e.context.id === deviceId + '.batteryWarning');
    expect(binarySensor).to.be.ok;
    expect(battery).to.be.ok;
    expectMotion(binarySensor, deviceId, objects[deviceId].common.name, deviceId + '.motion');
    expectBattery(battery, deviceId + '.batteryWarning', objects[deviceId + '.batteryWarning'].common.name);
}

exports.runTests = function (getHarness) {
    return describe('Test motion sensors', () => {
        it('Zigbee', () => {
            return motion_sensor_zigbee(getHarness);
        });
        it('Motion Sensor with battery', () => {
            return motion_sensor_with_battry_warning(getHarness);
        });
    });
};
