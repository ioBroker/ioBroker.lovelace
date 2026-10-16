/* global it before */
const WebSocket = require('ws');
const tools = require('./testTools');
const expect = require('chai').expect;

const BASE_URL = 'http://localhost:38091/api/map_tiles/raster';

/** Ask the adapter for a map tiles access token, the way the frontend does. */
async function readToken() {
    const client = new WebSocket('ws://localhost:38091');
    try {
        return await new Promise((resolve, reject) => {
            client.on('error', reject);
            client.on('open', () => client.send(JSON.stringify({ id: 1, type: 'map_tiles/access_token' })));
            client.on('message', data => {
                for (const message of [].concat(JSON.parse(data.toString('utf8')))) {
                    if (message.type === 'auth_required' || message.type === 'auth_ok') {
                        client.send(JSON.stringify({ type: 'auth', access_token: 'no_token' }));
                        client.send(JSON.stringify({ id: 1, type: 'map_tiles/access_token' }));
                    } else if (message.id === 1 && message.type === 'result') {
                        resolve(message.result.token);
                    }
                }
            });
        });
    } finally {
        client.close();
    }
}

exports.runTests = function (suite) {
    suite('map_tiles', getHarness => {
        let harness;
        let token;

        const jsonFiles = [];
        const idsWithEnums = [];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            harness = getHarness();
            const objects = await tools.loadMultipleObjects(jsonFiles);
            await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
            token = await readToken();
        });

        // The base map is proxied by the adapter (OSM asks for an identifying User-Agent, which a
        // browser cannot send). These tests only cover the route itself, they never leave the host:
        // the coordinates are refused before anything upstream is asked.
        it('refuses coordinates outside the tile grid', async () => {
            const response = await fetch(`${BASE_URL}/2/4/0.png?token=${token}`);
            expect(response.status).to.equal(400);
        });

        it('refuses a path that is not a tile', async () => {
            const response = await fetch(`${BASE_URL}/12/2200/..%2f..%2fetc%2fpasswd?token=${token}`);
            expect(response.status).to.equal(400);
        });

        it('refuses a zoom the raster tiles do not have', async () => {
            const response = await fetch(`${BASE_URL}/22/0/0.png?token=${token}`);
            expect(response.status).to.equal(400);
        });

        it('refuses a request without a token', async () => {
            // Without this the proxy is open to anyone who can reach the port.
            const response = await fetch(`${BASE_URL}/22/0/0.png`);
            expect(response.status).to.equal(403);
        });

        it('refuses a wrong token', async () => {
            const response = await fetch(`${BASE_URL}/22/0/0.png?token=nonsense`);
            expect(response.status).to.equal(403);
        });

        // 400 means the guard let the request through and the coordinates were checked - so the
        // token was accepted, without this test having to ask OSM for a real tile.
        it('takes the token from the X-Map-Tiles-Token header', async () => {
            const response = await fetch(`${BASE_URL}/22/0/0.png`, {
                headers: { 'X-Map-Tiles-Token': token },
            });
            expect(response.status).to.equal(400);
        });

        it('guards the other proxy routes as well', async () => {
            for (const url of [
                'http://localhost:38091/api/map_tiles/tilejson.json',
                'http://localhost:38091/api/map_tiles/vector/1/0/0.mvt',
                'http://localhost:38091/api/map_tiles/fonts/noto_sans_regular/0-255.pbf',
                'http://localhost:38091/api/map_tiles/sprites/basics/sprites.json',
            ]) {
                const response = await fetch(url);
                expect(response.status, url).to.equal(403);
            }
        });
    });
};
