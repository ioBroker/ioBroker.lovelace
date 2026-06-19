/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('manual_cover', getHarness => {
        let harness;
        let entities;
        let objects;

        // A manual cover (e.g. an automatic window) configured via the states picker: state_SET maps
        // a level state. The synthetic-control bridge builds a real type-detector cover from it.
        const jsonFiles = ['../testData/manual_cover.json'];

        const idsWithEnums = [];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            harness = getHarness();
            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
            console.log(entities);
        });

        it('builds a cover entity from the picked SET state (synthetic-control bridge)', () => {
            const deviceId = '0_userdata.0.window';
            const entity = entities.find(e => e.context.deviceId === deviceId && e.context.type === 'cover');
            expect(entity).to.be.ok;
            expect(entity.entity_id).to.equal('cover.my_window');
            expect(entity).to.have.nested.property('attributes.device_class', 'window');
            // the level state must be wired as the cover position state
            expect(entity.context.STATE.setId).to.equal(deviceId);
        });
    });
};
