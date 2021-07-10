const tools  = require('./testTools');
const expect = require('chai').expect;

function expectBinarySensor(entity, id, name, getId) {
    tools.expectEntity(entity, 'binary_sensor', id, name, {getId});
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
    return tools.startAndGetEntities(harness, objects, [deviceId]);
}

async function motion_sensor_zigbee(getHarness) {
    // Create a fresh harness instance each test!
    const harness = getHarness();

    const objects = require('../testData/binary_sensor_motion_zigbee.json');
    const deviceId = 'adapter.0.binary_sensor.motions.zigbee';
    const entities = await startAndGetEntities(harness, objects, deviceId);

    expect(entities).to.have.lengthOf(1 + tools.getNumConstEntities() + 1); //for device query switch.
    const binarySensor = entities.find(e => e.context.id === deviceId);
    expect(binarySensor).to.be.ok;
    expectMotion(binarySensor, deviceId, objects[deviceId].common.name, deviceId + '.occupancy');
}

async function motion_sensor_with_battery_warning(getHarness) {
    // Create a fresh harness instance each test!
    const harness = getHarness();

    const objects = require('../testData/binary_sensor_motion_with_battery_warning.json');
    const deviceId = 'adapter.0.binary_sensor.motions.WithBatteryWarning';
    const entities = await startAndGetEntities(harness, objects, deviceId);

    expect(entities).to.have.lengthOf(2 + tools.getNumConstEntities());
    const binarySensor = entities.find(e => e.context.id === deviceId);
    const battery = entities.find(e => e.context.id === deviceId + '.batteryWarning');
    expect(binarySensor).to.be.ok;
    expect(battery).to.be.ok;
    expectMotion(binarySensor, deviceId, objects[deviceId].common.name, deviceId + '.motion');
    expectBattery(battery, deviceId + '.batteryWarning', objects[deviceId + '.batteryWarning'].common.name);
}

async function motion_sensor_with_id_clash(getHarness) {
    // Create a fresh harness instance each test!
    const harness = getHarness();

    const objects = require('../testData/binary_sensor_motion_with_id_clash.json');
    const deviceId = 'adapter.0.binary_sensor.motions.withIdClash';
    const entities = await startAndGetEntities(harness, objects, deviceId);

    expect(entities).to.have.lengthOf(2 + tools.getNumConstEntities());
    const binarySensor = entities.find(e => e.context.id === deviceId);
    const battery = entities.find(e => e.context.id === deviceId + '.LOW_BAT');
    expect(binarySensor).to.be.ok;
    expect(battery).to.be.ok;
    expectMotion(binarySensor, deviceId, objects[deviceId].common.name, deviceId + '.MOTION');
    expectBattery(battery, deviceId + '.LOW_BAT', objects[deviceId + '.LOW_BAT'].common.name, deviceId + '.LOW_BAT');
}

exports.runTests = function (getHarness) {
    describe('Test motion sensors', () => {
        it('detects zigbee motion detector', async () => {
            await motion_sensor_zigbee(getHarness);
        });
        it('detects Motion Sensor with battery', async () => {
            await motion_sensor_with_battery_warning(getHarness);
        });
        it('detects Motion Sensor with battery and prevents id clash', async () => {
            await motion_sensor_with_id_clash(getHarness);
        });

        it('detect fire alarm with battery', async () => {
            const harness = getHarness();

            const objects = require('../testData/binary_sensor_fireAlarm_Homematic.json');
            const deviceId = 'adapter.0.binary_sensor.firealarms.homematic';
            const alarmId = 'adapter.0.binary_sensor.firealarms.homematic.1.STATE';
            const batteryId = 'adapter.0.binary_sensor.firealarms.homematic.1.LOWBAT';
            const entities = await startAndGetEntities(harness, objects, deviceId);
            const binarySensor = entities.find(e => e.context.id === deviceId);
            const battery = entities.find(e => e.context.id === batteryId);
            expect(binarySensor).to.be.ok;
            expect(battery).to.be.ok;
            expectBattery(battery, batteryId, objects[batteryId].common.name, batteryId);
            expect(binarySensor).to.have.nested.property('attributes.device_class', 'smoke');
            expectBinarySensor(binarySensor, deviceId, objects[deviceId].common.name, alarmId);
        });
    });
};
