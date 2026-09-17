/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

// Padded past the compression threshold (1 kB) - a real card is far bigger than the banner.
const CARD = 'console.info(`%c TEST-CARD %c v1.2.3 `, "color: white");\n' + `/* ${'padding '.repeat(300)} */\n`;

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

            // The admin page fills its table from this (sendTo with useNative).
            const answer = await tools.sendToAsync(harness, 'lovelace.0', 'listCards', {});
            const card = answer.native._cardsTable.find(entry => entry.file === 'test-card.js');
            expect(card).to.be.ok;
            // A card has no metadata file; the version is read out of the source.
            expect(card.version).to.equal('1.2.3');
            expect(Number(card.size)).to.be.above(0);
            expect(card.modified).to.be.a('string');
        });

        it('caches a versioned card url for good, an unversioned one only briefly', async () => {
            // The resource list points at "?v=<modified>", so that url can be cached forever; a card
            // referenced by hand has no marker, and caching it would hide the next update.
            const versioned = await fetch('http://localhost:38091/cards/test-card.js?v=4711');
            expect(versioned.status).to.equal(200);
            expect(versioned.headers.get('cache-control')).to.contain('immutable');

            const plain = await fetch('http://localhost:38091/cards/test-card.js');
            expect(plain.headers.get('cache-control')).to.equal('public, max-age=3600');
        });

        it('serves the precompressed frontend file when the browser accepts brotli', async () => {
            const response = await fetch('http://localhost:38091/frontend_latest/core.3a73894c712f397c.js', {
                headers: { 'Accept-Encoding': 'br' },
            });
            expect(response.status).to.equal(200);
            // fetch decodes the body, so the header tells us whether the .br file was used.
            expect(response.headers.get('content-encoding')).to.equal('br');
            expect(response.headers.get('content-type')).to.contain('javascript');
            expect(response.headers.get('cache-control')).to.contain('immutable');
            expect((await response.text()).length).to.be.above(0);
        });

        it('compresses what has no precompressed copy on disk', async () => {
            // The cards folder holds the user's files, so there is no .br next to them; they are
            // compressed on the fly instead (small answers stay uncompressed, as they should).
            const response = await fetch('http://localhost:38091/cards/test-card.js', {
                headers: { 'Accept-Encoding': 'gzip' },
            });
            expect(response.status).to.equal(200);
            expect(response.headers.get('content-encoding')).to.equal('gzip');
        });

        it('does not cache the index and the service worker', async () => {
            const index = await fetch('http://localhost:38091/');
            expect(index.headers.get('cache-control')).to.equal('no-cache');

            const worker = await fetch('http://localhost:38091/sw-modern.js');
            expect(worker.status).to.equal(200);
            expect(worker.headers.get('cache-control')).to.equal('no-cache');
        });

        it('reports a new version after the card file was replaced', async () => {
            await harness.objects.writeFileAsync('lovelace.0', '/cards/test-card.js', CARD.replace('1.2.3', '1.3.0'));

            const answer = await tools.sendToAsync(harness, 'lovelace.0', 'listCards', {});
            // Overwriting must work - the user should not have to delete the old file first.
            expect(answer.native._cardsTable.find(entry => entry.file === 'test-card.js').version).to.equal('1.3.0');
        });
    });
};
