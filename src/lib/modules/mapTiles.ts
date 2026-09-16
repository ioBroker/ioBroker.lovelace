/**
 * Map tile proxy for the frontend's base map.
 *
 * Home Assistant used CARTO's free raster basemap until CARTO started watermarking unauthenticated
 * tiles with "API KEY REQUIRED" (2026-08); HA replaced it with tiles served by the OpenStreetMap
 * Foundation, proxied by the backend (core integration `map_tiles`). We do the same, because the
 * OSMF tile policy wants every request identified by a `User-Agent` or `Referer`, and a browser can
 * send neither: both are forbidden header names for scripts, and the default referrer would leak the
 * (possibly external) URL of the user's ioBroker installation to a third party.
 *
 * The proxy also caches: the OSMF asks consumers to cache tiles, and a dashboard with a map card
 * re-requests the same tiles on every reload.
 */

/** Upstream raster tiles. */
const RASTER_URL = 'https://tile.openstreetmap.org';
/** OSM raster stops here; Leaflet scales the last level up for closer zooms. */
const RASTER_MAX_ZOOM = 19;
/** In-memory cache budget. Tiles are ~20-60 kB, so this holds a few hundred of them. */
const CACHE_MAX_BYTES = 32 * 1024 * 1024;
/** How long a cached tile is served without asking upstream again. */
const TILE_TTL = 7 * 24 * 60 * 60 * 1000;
/** Cache-Control for the browser - the OSMF asks for at least a week. */
const TILE_MAX_AGE = 7 * 24 * 60 * 60;
/** Upstream requests in flight at once (protects the volunteer-run OSM servers). */
const MAX_CONCURRENT_FETCHES = 16;
/** Give up on a slow tile rather than holding the connection. */
const FETCH_TIMEOUT = 10000;
/** Far above any real tile; guards against a broken or hostile upstream. */
const MAX_TILE_BYTES = 2 * 1024 * 1024;

interface CachedTile {
    body: Buffer;
    contentType: string;
    /** When it was fetched; older than TILE_TTL means "ask upstream again". */
    ts: number;
}

interface TileRequest {
    url: string;
    params: Record<string, string>;
}

interface TileResponse {
    status(code: number): TileResponse;
    set(headers: Record<string, string>): TileResponse;
    send(body?: unknown): void;
    end(): void;
}

/**
 * Serves `/api/map_tiles/raster/{z}/{x}/{y}.png` from the OpenStreetMap Foundation tile servers.
 */
class MapTilesModule {
    private adapter: ioBroker.Adapter;
    private userAgent: string;
    private cacheMaxBytes: number;
    /** Insertion ordered, so the oldest entry is the first one - used as a crude LRU. */
    private cache = new Map<string, CachedTile>();
    private cacheBytes = 0;
    /** Requests for the same tile share one upstream fetch. */
    private inflight = new Map<string, Promise<CachedTile | null>>();
    private running = 0;
    private waiting: (() => void)[] = [];

    /**
     * Create the map tiles module.
     *
     * @param options - options object
     * @param options.adapter - ioBroker adapter instance
     * @param options.version - adapter version, part of the upstream User-Agent
     * @param options.cacheMaxBytes - cache budget, defaults to CACHE_MAX_BYTES
     */
    constructor(options: { adapter: ioBroker.Adapter; version: string; cacheMaxBytes?: number }) {
        this.adapter = options.adapter;
        this.cacheMaxBytes = options.cacheMaxBytes || CACHE_MAX_BYTES;
        // OSM wants an identifying application and a way to get in touch.
        this.userAgent = `ioBroker.lovelace/${options.version} (+https://github.com/ioBroker/ioBroker.lovelace)`;
    }

    /**
     * Parse and validate the tile coordinates of a request path.
     *
     * @param z - zoom level
     * @param x - tile column
     * @param y - tile row, with the file extension and an optional retina suffix
     * @returns the coordinates, or null when they are out of range / not numbers
     */
    static parseCoordinates(z: string, x: string, y: string): { z: number; x: number; y: number } | null {
        // Retina: our frontend asks for "@2x.png". OSM has no 2x tiles, the normal one is served.
        const row = y.replace(/(@2x)?\.png$/, '');
        if (!/^\d{1,2}$/.test(z) || !/^\d{1,9}$/.test(x) || !/^\d{1,9}$/.test(row)) {
            return null;
        }
        const zoom = Number(z);
        const column = Number(x);
        const line = Number(row);
        if (zoom > RASTER_MAX_ZOOM) {
            return null;
        }
        const max = 2 ** zoom;
        if (column >= max || line >= max) {
            return null;
        }
        return { z: zoom, x: column, y: line };
    }

    /** Wait for a free slot, so we never hammer the OSM servers with the whole viewport at once. */
    private async acquire(): Promise<void> {
        if (this.running < MAX_CONCURRENT_FETCHES) {
            this.running++;
            return;
        }
        await new Promise<void>(resolve => this.waiting.push(resolve));
        this.running++;
    }

    private release(): void {
        this.running--;
        const next = this.waiting.shift();
        if (next) {
            next();
        }
    }

    /**
     * Store a tile, evicting the oldest entries until the cache fits its budget again.
     *
     * @param key - cache key (the tile path)
     * @param tile - the tile to store
     */
    private store(key: string, tile: CachedTile): void {
        const previous = this.cache.get(key);
        if (previous) {
            this.cacheBytes -= previous.body.length;
            this.cache.delete(key);
        }
        this.cache.set(key, tile);
        this.cacheBytes += tile.body.length;
        while (this.cacheBytes > this.cacheMaxBytes && this.cache.size > 1) {
            const oldest = this.cache.keys().next().value as string;
            this.cacheBytes -= this.cache.get(oldest)!.body.length;
            this.cache.delete(oldest);
        }
    }

    /**
     * Fetch one tile from upstream (deduplicated per tile).
     *
     * @param key - the tile path, e.g. "12/2200/1343"
     * @returns the tile, or null when upstream did not deliver one
     */
    private fetchTile(key: string): Promise<CachedTile | null> {
        const running = this.inflight.get(key);
        if (running) {
            return running;
        }
        const request = (async (): Promise<CachedTile | null> => {
            await this.acquire();
            try {
                const response = await fetch(`${RASTER_URL}/${key}.png`, {
                    headers: { 'User-Agent': this.userAgent, Accept: 'image/png,image/*' },
                    signal: AbortSignal.timeout(FETCH_TIMEOUT),
                });
                if (!response.ok) {
                    this.adapter.log.debug(`Map tile ${key}: upstream answered ${response.status}`);
                    return null;
                }
                const body = Buffer.from(await response.arrayBuffer());
                if (!body.length || body.length > MAX_TILE_BYTES) {
                    this.adapter.log.warn(`Map tile ${key}: unexpected size ${body.length}, ignored.`);
                    return null;
                }
                const tile: CachedTile = {
                    body,
                    contentType: response.headers.get('content-type') || 'image/png',
                    ts: Date.now(),
                };
                this.store(key, tile);
                return tile;
            } catch (e) {
                this.adapter.log.debug(`Could not load map tile ${key}: ${String(e)}`);
                return null;
            } finally {
                this.release();
                this.inflight.delete(key);
            }
        })();
        this.inflight.set(key, request);
        return request;
    }

    /**
     * Express handler for a raster tile request.
     *
     * @param req - the request, with z/x/y route parameters
     * @param res - the response
     */
    async serveRaster(req: TileRequest, res: TileResponse): Promise<void> {
        const coordinates = MapTilesModule.parseCoordinates(req.params.z, req.params.x, req.params.y);
        if (!coordinates) {
            res.status(400).send('Invalid tile coordinates');
            return;
        }
        const key = `${coordinates.z}/${coordinates.x}/${coordinates.y}`;
        const cached = this.cache.get(key);
        if (cached && Date.now() - cached.ts < TILE_TTL) {
            // Refresh the LRU position, then serve from memory.
            this.cache.delete(key);
            this.cache.set(key, cached);
            this.sendTile(res, cached);
            return;
        }

        const tile = (await this.fetchTile(key)) || cached;
        if (!tile) {
            // No tile and nothing stale to fall back on: let Leaflet show its empty tile.
            res.status(502).send('Could not load map tile');
            return;
        }
        this.sendTile(res, tile);
    }

    private sendTile(res: TileResponse, tile: CachedTile): void {
        res.set({
            'Content-Type': tile.contentType,
            'Cache-Control': `public, max-age=${TILE_MAX_AGE}`,
        }).send(tile.body);
    }
}

export = MapTilesModule;
