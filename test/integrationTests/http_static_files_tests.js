/* global it before */
const http = require('node:http');
const tools = require('./testTools');
const expect = require('chai').expect;

/**
 * GET request that sends the path exactly as given. Unlike browsers or curl, node does not resolve .. segments.
 *
 * @param {string} urlPath path to request, may contain .. segments
 * @returns {Promise<{status: number, body: string}>} status and body of the response
 */
function rawGet(urlPath) {
    return new Promise((resolve, reject) => {
        http.get({ host: '127.0.0.1', port: tools.lovelacePort, path: urlPath }, res => {
            let body = '';
            res.setEncoding('utf8');
            res.on('data', chunk => (body += chunk));
            res.on('end', () => resolve({ status: res.statusCode, body }));
        }).on('error', reject);
    });
}

exports.runTests = function (suite) {
    suite('http static files', getHarness => {
        before(async () => {
            tools.clearClient();
            const harness = getHarness();
            await tools.startAndGetEntities(harness, {}, [], []);
            await harness.objects.writeFileAsync('lovelace.0', 'cards/user-card.js', 'console.log("user card");');
            await harness.objects.writeFileAsync('lovelace.0', 'uploaded_images/secret.json', '{"secret":true}');
        });

        it('serves user cards from the file storage', async () => {
            const card = await rawGet('/cards/user-card.js');
            expect(card.status).to.equal(200);
            expect(card.body).to.include('user card');
        });

        it('serves static cards, icons and root files', async () => {
            const card = await rawGet('/cards/_static_/browser_mod.js');
            expect(card.status).to.equal(200);
            expect(card.body).to.not.be.empty;

            expect((await rawGet('/static/icons/favicon-192x192.png')).status).to.equal(200);
            expect((await rawGet('/static/images/appstore.svg')).status).to.equal(200);
            expect((await rawGet('/robots.txt')).status).to.equal(200);
        });

        // All of these point to the adapter's own package.json, which lives outside every served folder.
        const traversalUrls = [
            '/cards/_static_/../../package.json', // hass_frontend/static_cards -> adapter root
            '/cards/_static_/../../../iobroker.lovelace/package.json',
            '/hacsfiles/_static_/../../package.json',
            '/local/custom_ui/_static_/../../package.json',
            '/foo/cards/_static_/../../package.json',
            '/cards/_static_/..\\..\\package.json',
            '/static/icons/../../package.json', // assets/icons -> adapter root
            '/frontend_latest/../../package.json',
            '/frontend_es5/../../package.json',
            '/static/images/../../../package.json',
            '/static/../../package.json',
            '/../package.json',
        ];
        // Unknown urls may fall back to the index page (status 200), so check the content instead of the status.
        for (const url of traversalUrls) {
            it(`does not deliver files outside the served folders for ${url}`, async () => {
                const { body } = await rawGet(url);
                expect(body).to.not.include('"iobroker.lovelace"');
            });
        }

        it('does not leave the cards folder of the file storage', async () => {
            const { status, body } = await rawGet('/cards/../uploaded_images/secret.json');
            expect(body).to.not.include('"secret"');
            expect(status).to.equal(404);
        });

        it('serves the value of a state, an image as the image it holds (#723)', async () => {
            const harness = getHarness();
            const image = Buffer.from('fake png');
            await harness.objects.setObjectAsync('lovelace.0.test.snapshot', {
                type: 'state',
                common: { name: 'snapshot', type: 'string', role: 'state', read: true, write: false },
                native: {},
            });
            await harness.objects.setObjectAsync('lovelace.0.test.text', {
                type: 'state',
                common: { name: 'text', type: 'string', role: 'state', read: true, write: false },
                native: {},
            });
            await harness.states.setStateAsync(
                'lovelace.0.test.snapshot',
                `data:image/png;base64,${image.toString('base64')}`,
                true,
            );
            await harness.states.setStateAsync('lovelace.0.test.text', 'hello', true);

            // Before, this route read a binary state, which ioBroker does not have any more - every
            // request answered with 500 "getBinaryStateAsync is not a function".
            const snapshot = await rawGet('/state/lovelace.0.test.snapshot');
            expect(snapshot.status).to.equal(200);
            expect(snapshot.body).to.contain('fake png');

            const text = await rawGet('/state/lovelace.0.test.text');
            expect(text.status).to.equal(200);
            expect(text.body).to.equal('hello');

            expect((await rawGet('/state/lovelace.0.does.not.exist')).status).to.equal(404);
            // /state/ alone does not even reach the route (its wildcard needs a segment) and lands on
            // the index page - it must not answer with an error.
            expect((await rawGet('/state/')).status).to.not.equal(500);
        });
    });
};
