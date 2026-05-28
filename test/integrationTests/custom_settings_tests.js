/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('custom_settings', getHarness => {
        //adapter will keep running for all test. harness and initial entities will be initialized once in before.
        let harness;
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
            harness = getHarness();
            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
            console.log(entities);
        });

        jsonFiles.push('../testData/binary_sensor_custom_settings.json');
        it('entity should be created', async () => {
            const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'binary_sensor', deviceId, objects[deviceId].common.name, { getId: deviceId });
            expect(entity).to.have.nested.property('attributes.device_class', 'connectivity');
        });

        jsonFiles.push('../testData/custom_test_no_custom.json');
        it('entity should not be created', async () => {
            const deviceId = 'adapter.0.binary_sensor.motions.withoutCustom';
            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.not.ok;
        });

        //uses '../testData/custom_test_no_custom.json' and '../testData/binary_sensor_custom_settings.json'
        it('entity should be created after custom is set', async () => {
            const deviceId = 'adapter.0.binary_sensor.motions.withoutCustom';
            const custom = JSON.parse(
                JSON.stringify(objects['adapter.0.binary_sensor.motions.withCustom'].common.custom),
            );
            custom.name = 'binary_sensor_without_custom';
            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.not.ok;

            const obj = JSON.parse(JSON.stringify(objects[deviceId]));
            obj.common.custom = custom;
            const newEntities = await tools.waitForEntitiesUpdate(harness, [obj]);
            const newEntity = newEntities.find(e => e.context.id === deviceId);
            expect(newEntity).to.be.ok;
        });

        // uses '../testData/binary_sensor_custom_settings.json'
        it('entity should update', async () => {
            const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
            await harness.objects.delObjectAsync(deviceId);
            const obj = JSON.parse(JSON.stringify(objects[deviceId]));
            obj.common.custom = {
                'lovelace.0': {
                    enabled: true,
                    entity: 'binary_sensor',
                    name: 'binary_sensor_with_custom',
                    attr_device_class: 'motion',
                },
            };
            const newEntities = await tools.waitForEntitiesUpdate(harness, [obj]);
            const newEntity = newEntities.find(e => e.context.id === deviceId);
            expect(newEntity).to.be.ok;
            tools.expectEntity(newEntity, 'binary_sensor', deviceId, objects[deviceId].common.name, {
                getId: deviceId,
            });
            expect(newEntity).to.have.nested.property('attributes.device_class', 'motion');
        });

        // uses '../testData/binary_sensor_custom_settings.json'
        it('entity should vanish if custom disabled', async () => {
            const deviceId = 'adapter.0.binary_sensor.motions.withCustom';

            const obj = JSON.parse(JSON.stringify(objects[deviceId]));
            obj.common.custom['lovelace.0'] = null;
            const newEntities = await tools.waitForEntitiesUpdate(harness, [obj]);
            const newEntity = newEntities.find(e => e.context.id === deviceId);
            expect(newEntity).to.be.not.ok;
        });

        it('entity should vanish if object deleted', async () => {
            //reset object:
            const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
            const entities = await tools.waitForEntitiesUpdate(harness, [objects[deviceId]]);

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;

            await harness.states.setStateAsync('lovelace.0.info.entitiesUpdated', false);
            await harness.objects.delObjectAsync(deviceId);
            const newEntities = await tools.waitForEntitiesUpdate(harness, []);
            const newEntity = newEntities.find(e => e.context.id === deviceId);
            expect(newEntity).to.be.not.ok;
        });

        it('entity should stay if object changed but keeps custom', async () => {
            const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
            const entities = await tools.waitForEntitiesUpdate(harness, [objects[deviceId]]);
            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;

            const obj = objects[deviceId];
            obj.common.name = 'New Name';
            const newEntities = await tools.waitForEntitiesUpdate(harness, [obj]);
            const newEntity = newEntities.find(e => e.context.id === deviceId);
            expect(newEntity).to.be.ok;
            expect(newEntity).to.have.nested.property('attributes.friendly_name', 'New Name');
        });

        it('manual entity should overwrite automatic entity', async () => {
            //reset object:
            const deviceId = 'adapter.0.binary_sensor.motions.withCustom';
            const enums = require('../testData/enums.json');
            enums['enum.rooms.testroom'].common.members = [deviceId];
            enums['enum.functions.testfunc'].common.members = [deviceId];
            await harness.objects.setObjectAsync('enum.rooms.testroom', enums['enum.rooms.testroom']);
            await harness.objects.setObjectAsync('enum.functions.testfunc', enums['enum.functions.testfunc']);
            const entities = await tools.waitForEntitiesUpdate(harness, [objects[deviceId]]);
            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            expect(entity).to.have.nested.property('attributes.device_class', 'connectivity'); //should not be window as auto detected!!
            // exactly one entity for this device — manual entity must have displaced the auto-detected one
            expect(entities.filter(e => e.context.id === deviceId)).to.have.lengthOf(1);
        });

        jsonFiles.push('../testData/binary_sensor_custom_different_name.json');
        it('manual entity displaces auto entity even when entity_ids differ', async () => {
            // Step 1: auto-detect deviceId (put it in room+function, no custom settings yet)
            // → auto entity_id = binary_sensor.different_name_auto
            // Step 2: add custom settings with a different name
            // → manual entity_id = binary_sensor.different_name_manual
            // The auto entity must be removed; only the manual entity should remain.
            const deviceId = 'adapter.0.binary_sensor.motions.differentName';
            const enums = require('../testData/enums.json');
            enums['enum.rooms.testroom'].common.members = [deviceId];
            enums['enum.functions.testfunc'].common.members = [deviceId];
            await harness.objects.setObjectAsync('enum.rooms.testroom', enums['enum.rooms.testroom']);
            await harness.objects.setObjectAsync('enum.functions.testfunc', enums['enum.functions.testfunc']);

            // Step 1: create auto entity (object without custom settings)
            const autoEntities = await tools.waitForEntitiesUpdate(harness, [objects[deviceId]]);
            const autoEntity = autoEntities.find(e => e.entity_id === 'binary_sensor.different_name_auto');
            expect(autoEntity).to.be.ok; // auto entity must exist at this point

            // Step 2: add custom settings with a different name → triggers displacement of auto entity
            const objWithCustom = JSON.parse(JSON.stringify(objects[deviceId]));
            objWithCustom.common.custom = {
                'lovelace.0': {
                    enabled: true,
                    entity: 'binary_sensor',
                    name: 'different_name_manual',
                    attr_device_class: 'connectivity',
                },
            };
            const entities = await tools.waitForEntitiesUpdate(harness, [objWithCustom]);

            const manualEntity = entities.find(e => e.entity_id === 'binary_sensor.different_name_manual');
            expect(manualEntity).to.be.ok;
            expect(manualEntity).to.have.nested.property('attributes.device_class', 'connectivity');

            // Auto entity must be gone; only manual entity remains for this device
            const remainingAutoEntity = entities.find(e => e.entity_id === 'binary_sensor.different_name_auto');
            expect(remainingAutoEntity).to.be.not.ok;
            // exactly one entity for deviceId
            expect(entities.filter(e => e.context.id === deviceId)).to.have.lengthOf(1);
        });
    });
};
