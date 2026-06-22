/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('manual_media', getHarness => {
        let harness;
        let entities;
        let objects;

        // A manual media_player configured via the states picker (state_STATE). The synthetic-control
        // bridge builds a real type-detector media player from it.
        const jsonFiles = ['../testData/manual_media.json'];

        const idsWithEnums = [];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            harness = getHarness();
            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
            console.log(entities);
        });

        it('builds a media_player entity from the picked STATE (synthetic-control bridge)', () => {
            const deviceId = '0_userdata.0.player';
            const entity = entities.find(e => e.context.deviceId === deviceId && e.context.type === 'media_player');
            expect(entity).to.be.ok;
            expect(entity.entity_id).to.equal('media_player.living_room');
        });
    });
};
