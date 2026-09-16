/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

const CARD = 'console.info(`%c TEST-CARD %c v1.2.3 `, "color: white");';

exports.runTests = function (suite) {
    suite('custom_cards', getHarness => {
        let harness;

        const jsonFiles = [];
        const idsWithEnums = [];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            harness = getHarness();
            const objects = await tools.loadMultipleObjects(jsonFiles);
            await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
        });

        it('lists an uploaded card with the version it prints about itself', async () => {
            await harness.objects.writeFileAsync('lovelace.0', '/cards/test-card.js', CARD);

            const list = await tools.sendToAsync(harness, 'lovelace.0', 'listCards', {});
            const card = list.find(entry => entry.file === 'test-card.js');
            expect(card).to.be.ok;
            // A card has no metadata file; the version is read out of the source.
            expect(card.version).to.equal('1.2.3');
            expect(card.isDir).to.equal(false);
            expect(card.size).to.be.above(0);
        });

        it('reports a new version after the card file was replaced', async () => {
            await harness.objects.writeFileAsync('lovelace.0', '/cards/test-card.js', CARD.replace('1.2.3', '1.3.0'));

            const list = await tools.sendToAsync(harness, 'lovelace.0', 'listCards', {});
            // Overwriting must work - the user should not have to delete the old file first.
            expect(list.find(entry => entry.file === 'test-card.js').version).to.equal('1.3.0');
        });
    });
};
