/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

const BASE_URL = 'http://localhost:38091/api/map_tiles/raster';

exports.runTests = function (suite) {
    suite('map_tiles', getHarness => {
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

        // The base map is proxied by the adapter (OSM asks for an identifying User-Agent, which a
        // browser cannot send). These tests only cover the route itself, they never leave the host.
        it('refuses coordinates outside the tile grid', async () => {
            const response = await fetch(`${BASE_URL}/2/4/0.png`);
            expect(response.status).to.equal(400);
        });

        it('refuses a path that is not a tile', async () => {
            const response = await fetch(`${BASE_URL}/12/2200/..%2f..%2fetc%2fpasswd`);
            expect(response.status).to.equal(400);
        });

        it('refuses a zoom the raster tiles do not have', async () => {
            const response = await fetch(`${BASE_URL}/22/0/0.png`);
            expect(response.status).to.equal(400);
        });
    });
};
