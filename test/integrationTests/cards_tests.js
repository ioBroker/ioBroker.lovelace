/* global it before */
const WebSocket = require('ws');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const tools = require('./testTools');
const expect = require('chai').expect;

// Padded past the compression threshold (1 kB) - a real card is far bigger than the banner.
const CARD = 'console.info(`%c TEST-CARD %c v1.2.3 `, "color: white");\n' + `/* ${'padding '.repeat(300)} */\n`;

/**
 * GET a url with the given headers, without a fetch library in between.
 *
 * `fetch` adds "cache-control: no-cache" as soon as a conditional header is set by hand, and that
 * tells the server to answer in full - a browser revalidating its cache does not do that.
 *
 * @param url - what to request
 * @param headers - request headers
 * @returns status and headers of the answer
 */
async function request(url, headers = {}) {
    return new Promise((resolve, reject) => {
        http.get(url, { headers }, res => {
            res.resume();
            res.on('end', () => resolve({ status: res.statusCode, headers: res.headers }));
        }).on('error', reject);
    });
}

/** Ask the adapter which resources (custom cards) it offers to the frontend. */
async function readResources() {
    const client = new WebSocket(`ws://localhost:38091`);
    try {
        return await new Promise((resolve, reject) => {
            client.on('error', reject);
            client.on('open', () => client.send(JSON.stringify({ id: 1, type: 'lovelace/resources' })));
            client.on('message', data => {
                for (const message of [].concat(JSON.parse(data.toString('utf8')))) {
                    if (message.type === 'auth_required' || message.type === 'auth_ok') {
                        client.send(JSON.stringify({ type: 'auth', access_token: 'no_token' }));
                        client.send(JSON.stringify({ id: 1, type: 'lovelace/resources' }));
                    } else if (message.id === 1 && message.type === 'result') {
                        resolve(message.result || []);
                    }
                }
            });
        });
    } finally {
        client.close();
    }
}

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
            // The page links to the cards folder of this instance in the admin file browser.
            expect(answer.native._cardsFolder).to.equal('lovelace.0%2Fcards');
        });

        it('offers a custom card under its plain url and revalidates it (#755)', async () => {
            // A card may import a sibling file relatively ("./test-card-editor.js"). That import
            // never carries a version marker, so the resource url must not carry one either -
            // otherwise the browser loads the same module twice and the second
            // customElements.define() throws.
            const resources = await readResources();
            const entry = resources.find(resource => resource.url.startsWith('/cards/test-card.js'));
            expect(entry.url).to.equal('/cards/test-card.js');

            const response = await request('http://localhost:38091/cards/test-card.js');
            expect(response.status).to.equal(200);
            expect(response.headers['cache-control']).to.equal('no-cache');

            // Instead of a cache time, the unchanged card is confirmed with a cheap 304.
            const etag = response.headers.etag;
            expect(etag).to.be.ok;
            const again = await request('http://localhost:38091/cards/test-card.js', {
                'if-none-match': etag,
            });
            expect(again.status).to.equal(304);
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

        it('picks up a card written to the folder without being asked', async () => {
            // Someone drops a card into lovelace.0/cards through the admin file browser. The adapter
            // watches the folder, so it ends up in the resource list the frontend loads - without
            // anyone pressing "Reload cards".
            await harness.objects.writeFileAsync('lovelace.0', '/cards/watched-card.js', CARD);

            let resources = [];
            for (let i = 0; i < 20; i++) {
                await tools.delay(250);
                resources = await readResources();
                if (resources.some(entry => entry.url.startsWith('/cards/watched-card.js'))) {
                    break;
                }
            }
            expect(resources.map(entry => entry.url).join(' ')).to.contain('/cards/watched-card.js');

            await harness.objects.unlinkAsync('lovelace.0', '/cards/watched-card.js');
        });

        it('deletes a card and rescans the folder', async () => {
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

        it('offers the shipped cards with the adapter version and caches them for good', async () => {
            // An adapter update replaces browser_mod.js without renaming it, so the url carries the
            // adapter version - otherwise the browser would keep running the old copy.
            const version = require('../../package.json').version;
            const resources = await readResources();
            const browserMod = resources.find(entry => entry.url.startsWith('/cards/_static_browser_mod.js'));
            expect(browserMod.url).to.equal(`/cards/_static_browser_mod.js?v=${version}`);

            const response = await fetch(`http://localhost:38091${browserMod.url}`);
            expect(response.status).to.equal(200);
            expect(response.headers.get('cache-control')).to.contain('immutable');
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
