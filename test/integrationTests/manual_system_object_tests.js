/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('manual_system_object', getHarness => {
        //adapter will keep running for all tests. harness and initial entities will be initialized once in before.
        let harness;
        let entities;
        let objects;

        // Regression test for #709: a manual entity configured on a system.* object (here
        // system.adapter.javascript.0.eventLoopLag) must survive an adapter restart. Such objects are
        // filtered out of auto-detection by ignoreIds, so on startup they have to be loaded explicitly
        // via the custom view - otherwise the entity only appears after re-saving the object.
        const jsonFiles = ['../testData/system_object_custom.json'];

        const idsWithEnums = [];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            harness = getHarness();
            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
            console.log(entities);
        });

        it('manual entity on a system.* object is created on startup (#709)', () => {
            const deviceId = 'system.adapter.javascript.0.eventLoopLag';
            const entity = entities.find(e => e.context.deviceId === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'sensor', deviceId, objects[deviceId].common.name, { getId: deviceId });
        });
    });
};
