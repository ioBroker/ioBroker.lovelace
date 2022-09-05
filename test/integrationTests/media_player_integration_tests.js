const tools  = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('media_player', (getHarness) => {
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
        });

        describe('detect adapters', () => {
            jsonFiles.push('../testData/media_player_musiccast.json');
            idsWithEnums.push('adapter.0.media_player.musiccast');
            it('music cast player is created', async () => {
                const deviceId = 'adapter.0.media_player.musiccast';
                const deviceObj = objects[deviceId];

                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;
                //tools.expectEntity(entity, 'media_player', deviceId, deviceObj.name);
                //TODO: music cast not yet working. Investigate. :-)
            });

            jsonFiles.push('../testData/media_player_sonos.json');
            idsWithEnums.push('adapter.0.media_player.sonos');
            it('sonos player is created', async () => {
                const deviceId = 'adapter.0.media_player.sonos';
                const deviceObj = objects[deviceId];

                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;
                tools.expectEntity(entity, 'media_player', deviceId, deviceObj.name);
            });
        });
    });
};
