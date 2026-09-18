/* global it before */
const fs = require('node:fs');
const path = require('node:path');
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
            // Pick a real file of the current frontend build - the names carry a content hash.
            const dir = path.join(__dirname, '../../hass_frontend/frontend_latest');
            const name = fs
                .readdirSync(dir)
                .find(file => file.endsWith('.js') && fs.existsSync(path.join(dir, `${file}.br`)));
            expect(name, 'no precompressed frontend file found').to.be.ok;

            const response = await fetch(`http://localhost:38091/frontend_latest/${name}`, {
                headers: { 'Accept-Encoding': 'br' },
            });
            expect(response.status).to.equal(200);
            // fetch decodes the body, so the header tells us whether the .br file was used.
            expect(response.headers.get('content-encoding')).to.equal('br');
            expect(response.headers.get('content-type')).to.contain('javascript');
            expect(response.headers.get('cache-control')).to.contain('immutable');
            expect((await response.text()).length).to.be.above(0);
        });

        it('offers the card for the delete dropdown and deletes it', async () => {
            const names = await tools.sendToAsync(harness, 'lovelace.0', 'listCardNames', {});
            expect(names.map(entry => entry.value)).to.include('test-card.js');

            const answer = await tools.sendToAsync(harness, 'lovelace.0', 'deleteCard', { file: 'test-card.js' });
            // The answer carries the refreshed table, so the admin page updates right away.
            expect(answer.native._cardsTable.find(entry => entry.file === 'test-card.js')).to.equal(undefined);

            const afterwards = await tools.sendToAsync(harness, 'lovelace.0', 'listCardNames', {});
            expect(afterwards.map(entry => entry.value)).to.not.include('test-card.js');

            // put it back for the tests that follow
            await harness.objects.writeFileAsync('lovelace.0', '/cards/test-card.js', CARD);
        });

        it('builds the theme list from the yaml the admin page sends', async () => {
            const list = await tools.sendToAsync(harness, 'lovelace.0', 'getThemes', {
                themes: 'my-theme:\n  primary-color: "#ff0000"\nother:\n  primary-color: blue\n',
            });
            expect(list.map(entry => entry.value)).to.deep.equal(['default', 'my-theme', 'other']);
        });

        it('answers the theme list with at least the default for broken yaml', async () => {
            const list = await tools.sendToAsync(harness, 'lovelace.0', 'getThemes', { themes: '\tnot: [yaml' });
            expect(list).to.deep.equal([{ value: 'default', label: 'default' }]);
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

        it('serves the browser_mod files the panels are loaded from', async () => {
            // browser_mod 3.x renamed its panel file and added a second one; a rename would
            // otherwise only show as an empty panel in the browser.
            for (const file of ['browser_mod.js', 'browser_mod_browser_panel.js', 'browser_mod_config_panel.js']) {
                const response = await fetch(`http://localhost:38091/cards/_static_${file}`);
                expect(response.status, file).to.equal(200);
                expect((await response.text()).length, file).to.be.above(1000);
            }
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
