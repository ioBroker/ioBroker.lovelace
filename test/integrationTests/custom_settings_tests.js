const tools  = require('./testTools');
const expect = require('chai').expect;
const testObjects = require('../testData/binary_sensor_custom_settings.json');

exports.runTests = function (getHarness) {
    it('entity should be created', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(testObjects));
        const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
        const entities = await tools.startAndGetEntities(harness, objects);
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
        const entities = await tools.startAndGetEntities(harness, objects);
        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.not.ok;
    });
    it('entity should be created after custom is set', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(testObjects));
        const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
        const custom = objects[deviceId].common.custom;
        delete objects[deviceId].common.custom;
        const entities = await tools.startAndGetEntities(harness, objects);
        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.not.ok;

        objects[deviceId].common.custom = custom;
        const newEntities = await tools.waitForEntitiesUpdate(harness, [objects[deviceId]]);
        const newEntity = newEntities.find(e => e.context.id === deviceId);
        expect(newEntity).to.be.ok;
    });
    it('entity should update', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(testObjects));
        const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
        const entities = await tools.startAndGetEntities(harness, objects);
        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'binary_sensor', deviceId, objects[deviceId].common.name, {getId: deviceId});
        expect(entity).to.have.nested.property('attributes.device_class', 'connectivity');

        await harness.objects.delObjectAsync(deviceId);
        const obj = objects[deviceId];
        obj.common.custom = {
            'lovelace.0': {
                'enabled': true,
                'entity': 'binary_sensor',
                'name': 'binary_sensor_with_custom',
                'attr_device_class': 'motion'
            }
        };
        const newEntities = await tools.waitForEntitiesUpdate(harness, [obj]);
        const newEntity = newEntities.find(e => e.context.id === deviceId);
        expect(newEntity).to.be.ok;
        tools.expectEntity(newEntity, 'binary_sensor', deviceId,objects[deviceId].common.name, {getId: deviceId});
        expect(newEntity).to.have.nested.property('attributes.device_class', 'motion');
    });
    it('entity should vanish if custom disabled', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(testObjects));
        const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
        const entities = await tools.startAndGetEntities(harness, objects);
        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'binary_sensor', deviceId,objects[deviceId].common.name, {getId: deviceId});
        expect(entity).to.have.nested.property('attributes.device_class', 'connectivity');

        const obj = JSON.parse(JSON.stringify(objects[deviceId]));
        obj.common.custom['lovelace.0'] = null;
        const newEntities = await tools.waitForEntitiesUpdate(harness, [obj]);
        const newEntity = newEntities.find(e => e.context.id === deviceId);
        expect(newEntity).to.be.not.ok;
    });
    it('entity should vanish if object deleted', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(testObjects));
        const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
        const entities = await tools.startAndGetEntities(harness, objects);
        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'binary_sensor', deviceId,objects[deviceId].common.name, {getId: deviceId});
        expect(entity).to.have.nested.property('attributes.device_class', 'connectivity');

        await harness.states.setStateAsync('lovelace.0.info.entitiesUpdated', false);
        await harness.objects.delObjectAsync(deviceId);
        const newEntities = await tools.waitForEntitiesUpdate(harness, [], true);
        const newEntity = newEntities.find(e => e.context.id === deviceId);
        expect(newEntity).to.be.not.ok;
    });

    it('entity should stay if object changed but keeps custom', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(testObjects));
        const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
        const entities = await tools.startAndGetEntities(harness, objects);
        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'binary_sensor', deviceId,objects[deviceId].common.name, {getId: deviceId});

        const obj = objects[deviceId];
        obj.common.name = 'New Name';
        const newEntities = await tools.waitForEntitiesUpdate(harness, [obj], false);
        const newEntity = newEntities.find(e => e.context.id === deviceId);
        expect(newEntity).to.be.ok;
        expect(newEntity).to.have.nested.property('attributes.friendly_name', 'New Name');
    });

    it('manual entity should overwrite automatic entity', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(testObjects));
        const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId]);
        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        expect(entity).to.have.nested.property('attributes.device_class', 'connectivity'); //should not be window as auto detected!!
        expect(entities).to.have.lengthOf(1 + tools.getNumConstEntities());
    });
};
