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

exports.runTests = function (suite) {
    suite('binary_sensors', (getHarness) => {
        //adapter will keep running for all test. harness and initial entities will be initialized once in before.
        let harness;
        let entities;
        let objects;

        //load all test objects here:
        const jsonFiles = [
            //motion sensors
            '../testData/binary_sensor_motion_zigbee.json',
            '../testData/binary_sensor_motion_with_battery_warning.json',
            '../testData/binary_sensor_motion_with_id_clash.json',
            //fire alarm
            '../testData/binary_sensor_fireAlarm_Homematic.json'
        ];

        //start adapter and get initial entities.
        const idsWithEnums = [
            //motion sensors
            'adapter.0.binary_sensor.motions.zigbee',
            'adapter.0.binary_sensor.motions.WithBatteryWarning',
            'adapter.0.binary_sensor.motions.withIdClash',
            //fire alarm
            'adapter.0.binary_sensor.firealarms.homematic'
        ];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            //get harness && entities here.
            harness = getHarness();
            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
        });

        describe('motion sensors', () => {
            it('detects zigbee motion detector', async () => {
                const deviceId = 'adapter.0.binary_sensor.motions.zigbee';
                const binarySensor = entities.find(e => e.context.id === deviceId);
                expect(binarySensor).to.be.ok;
                expectMotion(binarySensor, deviceId, objects[deviceId].common.name, deviceId + '.occupancy');
            });

            it('detects Motion Sensor with battery', async () => {
                const deviceId = 'adapter.0.binary_sensor.motions.WithBatteryWarning';

                const binarySensor = entities.find(e => e.context.id === deviceId);
                const battery = entities.find(e => e.context.id === deviceId + '.batteryWarning');
                expect(binarySensor).to.be.ok;
                expect(battery).to.be.ok;
                expectMotion(binarySensor, deviceId, objects[deviceId].common.name, deviceId + '.motion');
                expectBattery(battery, deviceId + '.batteryWarning', objects[deviceId + '.batteryWarning'].common.name);
            });

            it('detects Motion Sensor with battery and prevents id clash', async () => {
                const deviceId = 'adapter.0.binary_sensor.motions.withIdClash';
                const binarySensor = entities.find(e => e.context.id === deviceId);
                const battery = entities.find(e => e.context.id === deviceId + '.LOW_BAT');
                expect(binarySensor).to.be.ok;
                expect(battery).to.be.ok;
                expectMotion(binarySensor, deviceId, objects[deviceId].common.name, deviceId + '.MOTION');
                expectBattery(battery, deviceId + '.LOW_BAT', objects[deviceId + '.LOW_BAT'].common.name, deviceId + '.LOW_BAT');
            });
        });

        describe('fire alarm', () => {
            it('detect fire alarm with battery', async () => {
                const deviceId = 'adapter.0.binary_sensor.firealarms.homematic';
                const alarmId = 'adapter.0.binary_sensor.firealarms.homematic.1.STATE';
                const batteryId = 'adapter.0.binary_sensor.firealarms.homematic.1.LOWBAT';
                const binarySensor = entities.find(e => e.context.id === deviceId);
                const battery = entities.find(e => e.context.id === batteryId);
                expect(binarySensor).to.be.ok;
                expect(battery).to.be.ok;
                expectBattery(battery, batteryId, objects[batteryId].common.name, batteryId);
                expect(binarySensor).to.have.nested.property('attributes.device_class', 'smoke');
                expectBinarySensor(binarySensor, deviceId, objects[deviceId].common.name, alarmId);
            });
        });
    });
};
