/* global describe it before */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('sensor', getHarness => {
        //adapter will keep running for all test. harness and initial entities will be initialized once in before.
        //let harness;
        let entities;
        let objects;

        //load all test objects here:
        const jsonFiles = [];

        //start adapter and get initial entities.
        const idsWithEnums = [];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            //get harness && entities here.
            const harness = getHarness();
            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
        });

        describe('Test temperature sensors', () => {
            jsonFiles.push('../testData/sensor_zigbee_temp_and_hum_with_clash.json');
            idsWithEnums.push(
                'adapter.0.sensor.zigbee_with_temp_and_humidity_clash_first',
                'adapter.0.sensor.zigbee_with_temp_and_humidity_clash_second',
            );
            it('it should create four entities from two zigbee temperature and humidity sensors', async () => {
                const deviceId1 = 'adapter.0.sensor.zigbee_with_temp_and_humidity_clash_first';
                const deviceId2 = 'adapter.0.sensor.zigbee_with_temp_and_humidity_clash_second';

                const t1 = entities.find(
                    e => e.context.id === deviceId1 && e.attributes.device_class === 'temperature',
                );
                const t2 = entities.find(
                    e => e.context.id === deviceId2 && e.attributes.device_class === 'temperature',
                );
                const h1 = entities.find(e => e.context.id === deviceId1 && e.attributes.device_class === 'humidity');
                const h2 = entities.find(e => e.context.id === deviceId2 && e.attributes.device_class === 'humidity');
                expect(t1).to.be.ok;
                expect(t2).to.be.ok;
                expect(h1).to.be.ok;
                expect(h2).to.be.ok;
                expect(h1).to.have.property('entity_id', `${t1.entity_id}_Humidity`);
                expect(h2).to.have.property('entity_id', `${t2.entity_id}_Humidity`);
                tools.expectEntity(t1, 'sensor', deviceId1, objects[deviceId1].common.name, {
                    getId: `${deviceId1}.temperature`,
                });
                tools.expectEntity(t2, 'sensor', deviceId2, objects[deviceId2].common.name, {
                    getId: `${deviceId2}.temperature`,
                });
                tools.expectEntity(h1, 'sensor', deviceId1, objects[deviceId1].common.name, {
                    getId: `${deviceId1}.humidity`,
                });
                tools.expectEntity(h2, 'sensor', deviceId2, objects[deviceId2].common.name, {
                    getId: `${deviceId2}.humidity`,
                });
            });
        });
    });
};
