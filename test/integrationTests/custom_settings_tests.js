const tools  = require('./testTools');
const expect = require('chai').expect;
const testObjects = require('../testData/binary_sensor_custom_settings.json');

exports.runTests = function (getHarness) {
    describe('Test custom settings', () => {
        it('entity should be created', async () => {
            const harness = getHarness();
            const objects = JSON.parse(JSON.stringify(testObjects));
            const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId]);
            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'binary_sensor', deviceId, objects[deviceId].common.name, {getId: deviceId});
            expect(entity).to.have.nested.property('attributes.device_class', 'connectivity');
        });
        it('entity should not be created', async () => {
            const harness = getHarness();
            const objects = JSON.parse(JSON.stringify(testObjects));
            const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
            delete objects[deviceId].common.custom;
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId]);
            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.not.ok;
        });
        it('entity should update', async () => {
            const harness = getHarness();
            const objects = JSON.parse(JSON.stringify(testObjects));
            const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId]);
            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'binary_sensor', deviceId, objects[deviceId].common.name, {getId: deviceId});
            expect(entity).to.have.nested.property('attributes.device_class', 'connectivity');

            await harness._objects.delObjectAsync(deviceId);
            const obj = objects[deviceId];
            obj.common.custom = {
                'lovelace.0': {
                    'enabled': true,
                    'entity': 'binary_sensor',
                    'name': 'binary_sensor_with_custom',
                    'attr_device_class': 'motion'
                }
            };
            await harness._objects.setObjectAsync(deviceId, obj);
            const newEntities = await tools.waitForEntitiesUpdate(harness);
            const newEntity = newEntities.find(e => e.context.id === deviceId);
            expect(newEntity).to.be.ok;
            tools.expectEntity(newEntity, 'binary_sensor', deviceId,objects[deviceId].common.name, {getId: deviceId});
            expect(newEntity).to.have.nested.property('attributes.device_class', 'motion');
        });
        it('entity should vanish if custom disabled', async () => {
            const harness = getHarness();
            const objects = JSON.parse(JSON.stringify(testObjects));
            const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId]);
            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'binary_sensor', deviceId,objects[deviceId].common.name, {getId: deviceId});
            expect(entity).to.have.nested.property('attributes.device_class', 'connectivity');

            const obj = JSON.parse(JSON.stringify(objects[deviceId]));
            obj.common.custom['lovelace.0'] = null;
            await harness._objects.setObjectAsync(deviceId, obj);
            const newEntities = await tools.waitForEntitiesUpdate(harness);
            const newEntity = newEntities.find(e => e.context.id === deviceId);
            expect(newEntity).to.be.not.ok;
        });
        it('entity should vanish if object deleted', async () => {
            const harness = getHarness();
            const objects = JSON.parse(JSON.stringify(testObjects));
            const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId]);
            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'binary_sensor', deviceId,objects[deviceId].common.name, {getId: deviceId});
            expect(entity).to.have.nested.property('attributes.device_class', 'connectivity');

            await harness._objects.delObjectAsync(deviceId);
            const newEntities = await tools.waitForEntitiesUpdate(harness);
            const newEntity = newEntities.find(e => e.context.id === deviceId);
            expect(newEntity).to.be.not.ok;
        });
    });
};
