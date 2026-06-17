/* global it before after */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('alias_only', getHarness => {
        //adapter will keep running for all tests. harness and initial entities will be initialized once in before.
        let harness;
        let entities;
        let objects;

        //load all test objects here:
        const jsonFiles = ['../testData/alias_only_custom.json'];

        const idsWithEnums = [];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            harness = getHarness();

            // Regression test for #704: enable "only generate entities from alias" BEFORE start.
            // With aliasOnly active, _readObjects() only range-queries alias.0.*, so manually
            // configured objects living elsewhere (here adapter.0.*) used to be missing from the
            // object cache at startup and their manual entities were never created.
            const instanceObj = await harness.objects.getObjectAsync('system.adapter.lovelace.0');
            instanceObj.native.aliasOnly = true;
            await harness.objects.setObjectAsync('system.adapter.lovelace.0', instanceObj);

            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
            console.log(entities);
        });

        after(async () => {
            // Do not leak the aliasOnly flag into later suites sharing the same objects db.
            const instanceObj = await harness.objects.getObjectAsync('system.adapter.lovelace.0');
            instanceObj.native.aliasOnly = false;
            await harness.objects.setObjectAsync('system.adapter.lovelace.0', instanceObj);
        });

        it('manual entity outside alias.0 is created on startup with aliasOnly active (#704)', () => {
            const deviceId = '0_userdata.0.aliasOnlyManualOutside';
            const entity = entities.find(e => e.context.deviceId === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'binary_sensor', deviceId, objects[deviceId].common.name, { getId: deviceId });
            expect(entity).to.have.nested.property('attributes.device_class', 'connectivity');
        });
    });
};
