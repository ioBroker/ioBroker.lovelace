const tools  = require('./testTools');
const expect = require('chai').expect;
const testObjects = require('../testData/custom_settings.json');

exports.runTests = function (getHarness) {
    describe('Test custom settings', () => {
        it('entity should be created', async () => {
            const harness = getHarness();
            const objects = JSON.parse(JSON.stringify(testObjects));
            const deviceId = 'adapter.0.binary_sensor_with_custom';
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId]);
            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'binary_sensor', deviceId, objects[deviceId].common.name, {getId: deviceId});
            expect(entity).to.have.nested.property('attributes.device_class', 'connectivity');
        });
        it('entity should not be created', async () => {
            const harness = getHarness();
            const objects = JSON.parse(JSON.stringify(testObjects));
            const deviceId = 'adapter.0.binary_sensor_with_custom';
            delete objects[deviceId].common.custom;
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId]);
            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.not.ok;
        });
        it('entity should update', async () => {
            const harness = getHarness();
            const objects = JSON.parse(JSON.stringify(testObjects));
            const deviceId = 'adapter.0.binary_sensor_with_custom';
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId]);
            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'binary_sensor', deviceId, objects[deviceId].common.name, {getId: deviceId});
            expect(entity).to.have.nested.property('attributes.device_class', 'connectivity');

            objects[deviceId].common.custom['lovelace.0'].attr_binary_device_class = 'motion';
            await harness._objects.setObjectAsync(deviceId, objects[deviceId]);
            const newEntities = await tools.waitForEntitiesUpdate(harness);
            const newEntity = newEntities.find(e => e.context.id === deviceId);
            expect(newEntity).to.be.ok;
            tools.expectEntity(entity, 'binary_sensor', deviceId,objects[deviceId].common.name, {getId: deviceId});
            expect(entity).to.have.nested.property('attributes.device_class', 'motion');
        });
        it('entity should vanish', async () => {
            const harness = getHarness();
            const objects = JSON.parse(JSON.stringify(testObjects));
            const deviceId = 'adapter.0.binary_sensor_with_custom';
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId]);
            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'binary_sensor', deviceId,objects[deviceId].common.name, {getId: deviceId});
            expect(entity).to.have.nested.property('attributes.device_class', 'connectivity');

            objects[deviceId].common.custom = null;
            await harness._objects.setObjectAsync(deviceId, objects[deviceId]);
            const newEntities = await tools.waitForEntitiesUpdate(harness);
            const newEntity = newEntities.find(e => e.context.id === deviceId);
            expect(newEntity).to.be.not.ok;
        });
    });
};
