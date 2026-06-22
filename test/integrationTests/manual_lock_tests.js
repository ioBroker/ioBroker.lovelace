/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('manual_lock', getHarness => {
        let harness;
        let entities;
        let objects;

        // A manual lock configured via the states picker (state_SET). The synthetic-control bridge
        // builds a real type-detector lock from it, so a lock can be configured manually.
        const jsonFiles = ['../testData/manual_lock.json'];

        const idsWithEnums = [];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            harness = getHarness();
            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
            console.log(entities);
        });

        it('builds a lock entity from the picked SET state (synthetic-control bridge)', () => {
            const deviceId = '0_userdata.0.doorlock';
            const entity = entities.find(e => e.context.deviceId === deviceId && e.context.type === 'lock');
            expect(entity).to.be.ok;
            expect(entity.entity_id).to.equal('lock.front_door');
            expect(entity.context.STATE.setId).to.equal(deviceId);
        });
    });
};
