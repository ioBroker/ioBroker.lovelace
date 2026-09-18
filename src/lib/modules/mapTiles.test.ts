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
        mod.cache.get('3/4/5').ts = 0;
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

        expect(mod.cache.has('3/1/1')).to.equal(false);
        expect(mod.cache.has('3/2/2')).to.equal(true);
    });
});
