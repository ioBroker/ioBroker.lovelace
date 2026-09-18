import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const MapTilesModule = require('../modules/mapTiles');

function makeModule(): any {
    return new MapTilesModule({
        adapter: { log: { debug: () => {}, warn: () => {}, error: () => {} } },
        version: '6.1.3',
    });
}

function makeRes(): { res: any; sent: any } {
    const sent: any = { status: 200, headers: {}, body: undefined };
    const res: any = {
        status(code: number) {
            sent.status = code;
            return res;
        },
        set(headers: Record<string, string>) {
            Object.assign(sent.headers, headers);
            return res;
        },
        send(body: unknown) {
            sent.body = body;
        },
        end() {},
    };
    return { res, sent };
}

describe('modules/mapTiles coordinates', function () {
    it('accepts a plain and a retina tile path', function () {
        expect(MapTilesModule.parseCoordinates('12', '2200', '1343.png')).to.deep.equal({
            z: 12,
            x: 2200,
            y: 1343,
        });
        // OSM has no 2x tiles, the normal one answers the retina request.
        expect(MapTilesModule.parseCoordinates('12', '2200', '1343@2x.png')).to.deep.equal({
            z: 12,
            x: 2200,
            y: 1343,
        });
    });

    it('rejects anything that is not a tile inside the grid', function () {
        expect(MapTilesModule.parseCoordinates('12', '2200', '../../etc/passwd')).to.equal(null);
        expect(MapTilesModule.parseCoordinates('20', '0', '0.png')).to.equal(null); // above OSM's max zoom
        expect(MapTilesModule.parseCoordinates('2', '4', '0.png')).to.equal(null); // outside the grid
        expect(MapTilesModule.parseCoordinates('1', '-1', '0.png')).to.equal(null);
        expect(MapTilesModule.parseCoordinates('a', '0', '0.png')).to.equal(null);
    });
});

describe('modules/mapTiles serving', function () {
    const originalFetch = global.fetch;
    let requests: { url: string; userAgent: string }[];

    beforeEach(function () {
        requests = [];
        global.fetch = ((url: string, options: any) => {
            requests.push({ url, userAgent: options?.headers?.['User-Agent'] });
            return Promise.resolve({
                ok: true,
                status: 200,
                headers: { get: () => 'image/png' },
                arrayBuffer: () => Promise.resolve(Buffer.from('tile-bytes')),
            });
        }) as unknown as typeof fetch;
    });

    afterEach(function () {
        global.fetch = originalFetch;
    });

    it('proxies a tile and identifies the adapter to the tile server', async function () {
        const mod = makeModule();
        const { res, sent } = makeRes();

        await mod.serveRaster({ params: { z: '12', x: '2200', y: '1343.png' } }, res);

        expect(requests).to.have.lengthOf(1);
        expect(requests[0].url).to.equal('https://tile.openstreetmap.org/12/2200/1343.png');
        // OSM's policy requires an identifying User-Agent; a browser cannot set one.
        expect(requests[0].userAgent).to.contain('ioBroker.lovelace/6.1.3');
        expect(sent.body.toString()).to.equal('tile-bytes');
        expect(sent.headers['Content-Type']).to.equal('image/png');
        expect(sent.headers['Cache-Control']).to.contain('max-age=');
    });

    it('answers a second request for the same tile from the cache', async function () {
        const mod = makeModule();
        await mod.serveRaster({ params: { z: '12', x: '2200', y: '1343.png' } }, makeRes().res);
        const second = makeRes();
        await mod.serveRaster({ params: { z: '12', x: '2200', y: '1343.png' } }, second.res);

        expect(requests).to.have.lengthOf(1);
        expect(second.sent.body.toString()).to.equal('tile-bytes');
    });

    it('shares one upstream request between concurrent callers', async function () {
        const mod = makeModule();
        const first = makeRes();
        const second = makeRes();
        await Promise.all([
            mod.serveRaster({ params: { z: '5', x: '16', y: '10.png' } }, first.res),
            mod.serveRaster({ params: { z: '5', x: '16', y: '10.png' } }, second.res),
        ]);

        expect(requests).to.have.lengthOf(1);
        expect(first.sent.body.toString()).to.equal('tile-bytes');
        expect(second.sent.body.toString()).to.equal('tile-bytes');
    });

    it('refuses an invalid tile without asking upstream', async function () {
        const mod = makeModule();
        const { res, sent } = makeRes();

        await mod.serveRaster({ params: { z: '12', x: '2200', y: 'evil.png?x=1' } }, res);

        expect(requests).to.have.lengthOf(0);
        expect(sent.status).to.equal(400);
    });

    it('serves a stale tile when upstream fails', async function () {
        const mod = makeModule();
        await mod.serveRaster({ params: { z: '3', x: '4', y: '5.png' } }, makeRes().res);
        // Age the cached tile past its TTL, then make upstream fail.
        mod.cache.get('raster/3/4/5').ts = 0;
        global.fetch = () => Promise.reject(new Error('network down'));

        const { res, sent } = makeRes();
        await mod.serveRaster({ params: { z: '3', x: '4', y: '5.png' } }, res);

        expect(sent.status).to.equal(200);
        expect(sent.body.toString()).to.equal('tile-bytes');
    });

    it('drops the oldest tiles when the cache budget is exceeded', async function () {
        // Budget of 15 bytes: the second 10-byte tile pushes the first one out.
        const mod = new MapTilesModule({
            adapter: { log: { debug: () => {}, warn: () => {}, error: () => {} } },
            version: '6.1.3',
            cacheMaxBytes: 15,
        });

        await mod.serveRaster({ params: { z: '3', x: '1', y: '1.png' } }, makeRes().res);
        await mod.serveRaster({ params: { z: '3', x: '2', y: '2.png' } }, makeRes().res);

        expect(mod.cache.has('raster/3/1/1')).to.equal(false);
        expect(mod.cache.has('raster/3/2/2')).to.equal(true);
    });
});

describe('modules/mapTiles vector map endpoints', function () {
    const originalFetch = global.fetch;
    let requests: string[];
    let body: string;

    beforeEach(function () {
        requests = [];
        body = 'upstream-bytes';
        global.fetch = ((url: string) => {
            requests.push(url);
            return Promise.resolve({
                ok: true,
                status: 200,
                headers: { get: () => 'application/octet-stream' },
                arrayBuffer: () => Promise.resolve(Buffer.from(body)),
            });
        }) as unknown as typeof fetch;
    });

    afterEach(function () {
        global.fetch = originalFetch;
    });

    it('proxies a vector tile and stops above the zoom the source has', async function () {
        const mod = makeModule();
        const { res, sent } = makeRes();

        await mod.serveVector({ params: { z: '14', x: '8800', y: '5375.mvt' } }, res);

        expect(requests[0]).to.equal('https://vector.openstreetmap.org/shortbread_v1/14/8800/5375.mvt');
        expect(sent.headers['Content-Type']).to.equal('application/vnd.mapbox-vector-tile');

        // MapLibre overzooms above the source maximum, so z15 must never reach upstream.
        const tooDeep = makeRes();
        await mod.serveVector({ params: { z: '15', x: '0', y: '0.mvt' } }, tooDeep.res);
        expect(tooDeep.sent.status).to.equal(400);
        expect(requests).to.have.lengthOf(1);
    });

    it('serves the label glyphs and encodes a font stack with spaces', async function () {
        const mod = makeModule();
        const { res, sent } = makeRes();

        await mod.serveGlyphs({ params: { fontstack: 'Noto Sans Regular', range: '0-255.pbf' } }, res);

        expect(requests[0]).to.equal(
            'https://vector.openstreetmap.org/styles/shortbread/fonts/Noto%20Sans%20Regular/0-255.pbf',
        );
        expect(sent.headers['Content-Type']).to.equal('application/x-protobuf');
    });

    it('refuses a font or sprite request that is not one', async function () {
        const mod = makeModule();
        const glyphs = makeRes();
        await mod.serveGlyphs({ params: { fontstack: '../../etc', range: '0-255.pbf' } }, glyphs.res);
        expect(glyphs.sent.status).to.equal(400);

        const sprites = makeRes();
        await mod.serveSprites({ params: { set: 'basics', name: 'passwd.json' } }, sprites.res);
        expect(sprites.sent.status).to.equal(400);

        expect(requests).to.have.lengthOf(0);
    });

    it('serves both sprite files of a set', async function () {
        const mod = makeModule();
        const index = makeRes();
        const sheet = makeRes();

        await mod.serveSprites({ params: { set: 'basics', name: 'sprites.json' } }, index.res);
        await mod.serveSprites({ params: { set: 'basics', name: 'sprites@2x.png' } }, sheet.res);

        expect(requests).to.deep.equal([
            'https://vector.openstreetmap.org/styles/shortbread/sprites/basics/sprites.json',
            'https://vector.openstreetmap.org/styles/shortbread/sprites/basics/sprites@2x.png',
        ]);
        expect(index.sent.headers['Content-Type']).to.equal('application/json');
        expect(sheet.sent.headers['Content-Type']).to.equal('image/png');
    });

    it('republishes the TileJSON with our own tile url', async function () {
        const mod = makeModule();
        body = JSON.stringify({
            tiles: ['https://vector.openstreetmap.org/shortbread_v1/{z}/{x}/{y}.mvt'],
            minzoom: 0,
            maxzoom: 20,
            attribution: 'upstream',
            vector_layers: [{ id: 'places' }],
        });
        const { res, sent } = makeRes();

        await mod.serveTileJson({ params: {} }, res);

        const tilejson = JSON.parse(sent.body.toString());
        // MapLibre must fetch the tiles through us, not from upstream directly.
        expect(tilejson.tiles).to.deep.equal(['/api/map_tiles/vector/{z}/{x}/{y}.mvt']);
        // Clamped to what the vector route serves, and the attribution OSM asks for.
        expect(tilejson.maxzoom).to.equal(14);
        expect(tilejson.attribution).to.contain('OpenStreetMap');
        expect(tilejson.vector_layers).to.deep.equal([{ id: 'places' }]);
    });

    it('refuses a TileJSON that lists no tiles', async function () {
        const mod = makeModule();
        body = JSON.stringify({ tiles: [] });
        const { res, sent } = makeRes();

        await mod.serveTileJson({ params: {} }, res);

        expect(sent.status).to.equal(502);
    });
});

describe('modules/mapTiles access token', function () {
    it('answers map_tiles/access_token with a token', function () {
        const mod = makeModule();
        const sent: any[] = [];

        const handled = mod.processMessage(
            { send: (d: string) => sent.push(JSON.parse(d)) },
            { type: 'map_tiles/access_token', id: 3 },
        );

        expect(handled).to.equal(true);
        expect(sent[0]).to.include({ id: 3, type: 'result', success: true });
        expect(sent[0].result.token).to.be.a('string').with.length.above(16);
    });

    it('ignores other messages', function () {
        expect(makeModule().processMessage({ send: () => {} }, { type: 'other', id: 1 })).to.equal(false);
    });
});
