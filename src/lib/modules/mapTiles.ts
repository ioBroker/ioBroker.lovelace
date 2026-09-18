import { randomBytes } from 'node:crypto';

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
 * The frontend draws the map with MapLibre from vector tiles and falls back to raster tiles when the
 * device has no WebGL2. Both come through here, together with the TileJSON, the label glyphs and the
 * icon sprites the vector style references.
 *
 * The proxy also caches: the OSMF asks consumers to cache tiles, and a dashboard with a map card
 * re-requests the same tiles on every reload.
 */

/** Upstream raster tiles. */
const RASTER_URL = 'https://tile.openstreetmap.org';
/** Upstream vector tiles, their TileJSON and the assets of the "shortbread" style. */
const VECTOR_URL = 'https://vector.openstreetmap.org';
const TILEJSON_URL = `${VECTOR_URL}/shortbread_v1/tilejson.json`;
/** OSM raster stops here; Leaflet scales the last level up for closer zooms. */
const RASTER_MAX_ZOOM = 19;
/** MapLibre overzooms above this, so nothing legitimate asks for a vector tile past z14. */
const VECTOR_MAX_ZOOM = 14;
/** Where our own vector tiles live - the TileJSON we hand out points here. */
const VECTOR_TILE_PATH = '/api/map_tiles/vector/{z}/{x}/{y}.mvt';
/** OSM's own TileJSON omits "contributors", which their guidelines ask for. */
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
/** In-memory cache budget. Tiles are ~20-60 kB, so this holds a few hundred of them. */
const CACHE_MAX_BYTES = 32 * 1024 * 1024;
/** How long a cached tile is served without asking upstream again. */
const TILE_TTL = 7 * 24 * 60 * 60 * 1000;
/** Glyphs and sprites are pinned to an upstream release and practically never change. */
const ASSET_TTL = 30 * 24 * 60 * 60 * 1000;
/** Short: the TileJSON is how upstream would announce a moved tile endpoint. */
const TILEJSON_TTL = 60 * 60 * 1000;
/** Cache-Control for the browser - the OSMF asks for at least a week. */
const TILE_MAX_AGE = 7 * 24 * 60 * 60;
const ASSET_MAX_AGE = 30 * 24 * 60 * 60;
const TILEJSON_MAX_AGE = 5 * 60;
/** Upstream requests in flight at once (protects the volunteer-run OSM servers). */
const MAX_CONCURRENT_FETCHES = 16;
/** Give up on a slow tile rather than holding the connection. */
const FETCH_TIMEOUT = 10000;
/** Far above any real tile or asset; guards against a broken or hostile upstream. */
const MAX_TILE_BYTES = 8 * 1024 * 1024;
/** Cap the coordinate length before parsing, so a huge digit string is cheap to refuse. */
const MAX_COORDINATE_DIGITS = 8;

/** A font stack as MapLibre requests it, e.g. "Noto Sans Regular,Arial Unicode MS Regular". */
const FONTSTACK_RE = /^[A-Za-z0-9 _-]{1,64}(?:,[A-Za-z0-9 _-]{1,64}){0,7}$/;
const GLYPH_RANGE_RE = /^\d{1,5}-\d{1,5}\.pbf$/;
const SPRITE_SET_RE = /^[a-z0-9_-]{1,32}$/;
const SPRITE_NAME_RE = /^sprites(?:@2x)?$/;

/** Bytes of entropy per access token. */
const TOKEN_SIZE = 32;
/** Two tokens are live at a time, so one stays valid for 30 to 60 minutes. */
const TOKEN_CHANGE_INTERVAL = 30 * 60 * 1000;

interface CachedAsset {
    body: Buffer;
    contentType: string;
    /** When it was fetched; older than its TTL means "ask upstream again". */
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

interface WsClient {
    send(data: string): void;
}

/**
 * Serves everything the frontend's base map needs under `/api/map_tiles/`, from the OpenStreetMap
 * Foundation servers.
 */
class MapTilesModule {
    private adapter: ioBroker.Adapter;
    private userAgent: string;
    private cacheMaxBytes: number;
    /** Insertion ordered, so the oldest entry is the first one - used as a crude LRU. */
    private cache = new Map<string, CachedAsset>();
    private cacheBytes = 0;
    /** Requests for the same asset share one upstream fetch. */
    private inflight = new Map<string, Promise<CachedAsset | null>>();
    private running = 0;
    private waiting: (() => void)[] = [];
    /** The current token first, the previous one second (the frontend keeps using it for a while). */
    private tokens: string[] = [];
    private tokenTimer: ioBroker.Interval | undefined;

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
        this.tokens = [MapTilesModule.createToken()];
    }

    /** Start rotating the access token the frontend asks for. */
    init(): Promise<void> {
        this.tokenTimer ??= this.adapter.setInterval(() => {
            // Keep the previous one valid, so a browser holding it is not cut off mid-map.
            this.tokens = [MapTilesModule.createToken(), this.tokens[0]];
        }, TOKEN_CHANGE_INTERVAL);
        return Promise.resolve();
    }

    /** Stop the token rotation. */
    cleanup(): void {
        if (this.tokenTimer) {
            this.adapter.clearInterval(this.tokenTimer);
            this.tokenTimer = undefined;
        }
    }

    private static createToken(): string {
        return randomBytes(TOKEN_SIZE).toString('hex');
    }

    /**
     * Answer `map_tiles/access_token`. The frontend puts the token into the tile urls, because a
     * Leaflet raster layer loads its tiles with an `<img>`, which can carry no header.
     *
     * @param ws - websocket connection
     * @param message - the message from the frontend
     * @returns true if handled
     */
    processMessage(ws: WsClient, message: Record<string, unknown>): boolean {
        if (message.type !== 'map_tiles/access_token') {
            return false;
        }
        ws.send(
            JSON.stringify({
                id: message.id,
                type: 'result',
                success: true,
                result: { token: this.tokens[0] },
            }),
        );
        return true;
    }

    /**
     * Parse and validate the tile coordinates of a request path.
     *
     * @param z - zoom level
     * @param x - tile column
     * @param y - tile row, with the file extension and an optional retina suffix
     * @param maxZoom - highest zoom this tile kind is served for
     * @returns the coordinates, or null when they are out of range / not numbers
     */
    static parseCoordinates(
        z: string,
        x: string,
        y: string,
        maxZoom: number = RASTER_MAX_ZOOM,
    ): { z: number; x: number; y: number } | null {
        // Retina: our frontend asks for "@2x.png". OSM has no 2x tiles, the normal one is served.
        const row = y.replace(/(@2x)?\.(png|mvt)$/, '');
        if (
            z.length > MAX_COORDINATE_DIGITS ||
            x.length > MAX_COORDINATE_DIGITS ||
            row.length > MAX_COORDINATE_DIGITS
        ) {
            return null;
        }
        if (!/^\d{1,2}$/.test(z) || !/^\d{1,9}$/.test(x) || !/^\d{1,9}$/.test(row)) {
            return null;
        }
        const zoom = Number(z);
        const column = Number(x);
        const line = Number(row);
        if (zoom > maxZoom) {
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
     * Store an asset, evicting the oldest entries until the cache fits its budget again.
     *
     * @param key - cache key (the request path)
     * @param asset - the asset to store
     */
    private store(key: string, asset: CachedAsset): void {
        const previous = this.cache.get(key);
        if (previous) {
            this.cacheBytes -= previous.body.length;
            this.cache.delete(key);
        }
        this.cache.set(key, asset);
        this.cacheBytes += asset.body.length;
        while (this.cacheBytes > this.cacheMaxBytes && this.cache.size > 1) {
            const oldest = this.cache.keys().next().value as string;
            this.cacheBytes -= this.cache.get(oldest)!.body.length;
            this.cache.delete(oldest);
        }
    }

    /**
     * Fetch one asset from upstream (deduplicated per key).
     *
     * @param key - cache key, e.g. "raster/12/2200/1343"
     * @param url - the upstream url to read it from
     * @param contentType - what we tell the browser the answer is
     * @param transform - optional rewrite of the upstream body (used for the TileJSON)
     * @returns the asset, or null when upstream did not deliver one
     */
    private fetchAsset(
        key: string,
        url: string,
        contentType: string,
        transform?: (body: Buffer) => Buffer | null,
    ): Promise<CachedAsset | null> {
        const running = this.inflight.get(key);
        if (running) {
            return running;
        }
        const request = (async (): Promise<CachedAsset | null> => {
            await this.acquire();
            try {
                const response = await fetch(url, {
                    headers: { 'User-Agent': this.userAgent },
                    signal: AbortSignal.timeout(FETCH_TIMEOUT),
                });
                if (!response.ok) {
                    this.adapter.log.debug(`Map tiles ${key}: upstream answered ${response.status}`);
                    return null;
                }
                let body: Buffer = Buffer.from(await response.arrayBuffer());
                if (body.length > MAX_TILE_BYTES) {
                    this.adapter.log.warn(`Map tiles ${key}: unexpected size ${body.length}, ignored.`);
                    return null;
                }
                if (transform) {
                    const rewritten: Buffer | null = transform(body);
                    if (!rewritten) {
                        return null;
                    }
                    body = rewritten;
                }
                // An empty vector tile is a legitimate answer (sea, desert), an empty png is not.
                if (!body.length && !key.startsWith('vector/')) {
                    return null;
                }
                const asset: CachedAsset = { body, contentType, ts: Date.now() };
                this.store(key, asset);
                return asset;
            } catch (e) {
                this.adapter.log.debug(`Could not load map asset ${key}: ${String(e)}`);
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
     * Serve one asset: from the cache while it is fresh, else from upstream, falling back to a stale
     * copy when upstream is unreachable.
     *
     * @param res - the response
     * @param key - cache key
     * @param url - upstream url
     * @param contentType - content type of the answer
     * @param ttl - how long a cached copy counts as fresh
     * @param maxAge - Cache-Control max-age for the browser
     * @param transform - optional rewrite of the upstream body
     */
    private async serveAsset(
        res: TileResponse,
        key: string,
        url: string,
        contentType: string,
        ttl: number,
        maxAge: number,
        transform?: (body: Buffer) => Buffer | null,
    ): Promise<void> {
        const cached = this.cache.get(key);
        if (cached && Date.now() - cached.ts < ttl) {
            // Refresh the LRU position, then serve from memory.
            this.cache.delete(key);
            this.cache.set(key, cached);
            this.send(res, cached, maxAge);
            return;
        }

        const asset = (await this.fetchAsset(key, url, contentType, transform)) || cached;
        if (!asset) {
            res.status(502).send('Could not load map data');
            return;
        }
        this.send(res, asset, maxAge);
    }

    private send(res: TileResponse, asset: CachedAsset, maxAge: number): void {
        res.set({
            'Content-Type': asset.contentType,
            'Cache-Control': `public, max-age=${maxAge}`,
        }).send(asset.body);
    }

    /**
     * Express handler for a raster tile request (`/api/map_tiles/raster/{z}/{x}/{y}.png`).
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
        const key = `raster/${coordinates.z}/${coordinates.x}/${coordinates.y}`;
        await this.serveAsset(
            res,
            key,
            `${RASTER_URL}/${coordinates.z}/${coordinates.x}/${coordinates.y}.png`,
            'image/png',
            TILE_TTL,
            TILE_MAX_AGE,
        );
    }

    /**
     * Express handler for a vector tile request (`/api/map_tiles/vector/{z}/{x}/{y}.mvt`).
     *
     * @param req - the request, with z/x/y route parameters
     * @param res - the response
     */
    async serveVector(req: TileRequest, res: TileResponse): Promise<void> {
        const coordinates = MapTilesModule.parseCoordinates(req.params.z, req.params.x, req.params.y, VECTOR_MAX_ZOOM);
        if (!coordinates) {
            res.status(400).send('Invalid tile coordinates');
            return;
        }
        const key = `vector/${coordinates.z}/${coordinates.x}/${coordinates.y}`;
        await this.serveAsset(
            res,
            key,
            `${VECTOR_URL}/shortbread_v1/${coordinates.z}/${coordinates.x}/${coordinates.y}.mvt`,
            'application/vnd.mapbox-vector-tile',
            TILE_TTL,
            TILE_MAX_AGE,
        );
    }

    /**
     * Express handler for the label glyphs (`/api/map_tiles/fonts/{fontstack}/{range}.pbf`).
     *
     * @param req - the request, with fontstack/range route parameters
     * @param res - the response
     */
    async serveGlyphs(req: TileRequest, res: TileResponse): Promise<void> {
        const fontstack = req.params.fontstack;
        const range = req.params.range;
        if (!FONTSTACK_RE.test(fontstack) || !GLYPH_RANGE_RE.test(range)) {
            res.status(400).send('Invalid font request');
            return;
        }
        const path = `fonts/${fontstack}/${range}`;
        await this.serveAsset(
            res,
            path,
            // The font stack may contain spaces; express handed it to us decoded.
            `${VECTOR_URL}/styles/shortbread/fonts/${encodeURIComponent(fontstack)}/${range}`,
            'application/x-protobuf',
            ASSET_TTL,
            ASSET_MAX_AGE,
        );
    }

    /**
     * Express handler for the icon sprites (`/api/map_tiles/sprites/{set}/sprites[@2x].json|png`).
     *
     * @param req - the request, with set/name route parameters
     * @param res - the response
     */
    async serveSprites(req: TileRequest, res: TileResponse): Promise<void> {
        const set = req.params.set;
        const file = req.params.name || '';
        const match = /^(.+)\.(json|png)$/.exec(file);
        if (!SPRITE_SET_RE.test(set) || !match || !SPRITE_NAME_RE.test(match[1])) {
            res.status(400).send('Invalid sprite request');
            return;
        }
        const path = `sprites/${set}/${match[1]}.${match[2]}`;
        await this.serveAsset(
            res,
            path,
            `${VECTOR_URL}/styles/shortbread/${path}`,
            match[2] === 'json' ? 'application/json' : 'image/png',
            ASSET_TTL,
            ASSET_MAX_AGE,
        );
    }

    /**
     * Express handler for the TileJSON (`/api/map_tiles/tilejson.json`), rewritten to point back at
     * this adapter instead of upstream.
     *
     * @param _req - the request (unused)
     * @param res - the response
     */
    async serveTileJson(_req: TileRequest, res: TileResponse): Promise<void> {
        await this.serveAsset(
            res,
            'tilejson.json',
            TILEJSON_URL,
            'application/json',
            TILEJSON_TTL,
            TILEJSON_MAX_AGE,
            body => MapTilesModule.rewriteTileJson(body, id => this.adapter.log.warn(id)),
        );
    }

    /**
     * Republish the upstream TileJSON as ours: the tiles are fetched through this adapter, and the
     * zoom range is clamped to what the vector route actually serves.
     *
     * @param body - the upstream TileJSON
     * @param warn - called with a message when the upstream answer is unusable
     * @returns the rewritten TileJSON, or null when upstream sent something unusable
     */
    static rewriteTileJson(body: Buffer, warn: (message: string) => void): Buffer | null {
        let tilejson: Record<string, unknown>;
        try {
            tilejson = JSON.parse(body.toString('utf8')) as Record<string, unknown>;
        } catch {
            warn('Upstream map TileJSON is not valid JSON');
            return null;
        }
        if (!tilejson || typeof tilejson !== 'object' || !Array.isArray(tilejson.tiles) || !tilejson.tiles.length) {
            warn('Upstream map TileJSON does not list any tiles');
            return null;
        }
        const minzoom = Math.max(Number(tilejson.minzoom ?? 0) || 0, 0);
        const maxzoom = Math.min(Number(tilejson.maxzoom ?? VECTOR_MAX_ZOOM) || VECTOR_MAX_ZOOM, VECTOR_MAX_ZOOM);
        return Buffer.from(
            JSON.stringify({
                ...tilejson,
                tiles: [VECTOR_TILE_PATH],
                minzoom,
                maxzoom,
                attribution: ATTRIBUTION,
            }),
            'utf8',
        );
    }
}

export = MapTilesModule;
