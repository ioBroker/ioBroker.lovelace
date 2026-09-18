"use strict";
var import_node_crypto = require("node:crypto");
const RASTER_URL = "https://tile.openstreetmap.org";
const VECTOR_URL = "https://vector.openstreetmap.org";
const TILEJSON_URL = `${VECTOR_URL}/shortbread_v1/tilejson.json`;
const RASTER_MAX_ZOOM = 19;
const VECTOR_MAX_ZOOM = 14;
const VECTOR_TILE_PATH = "/api/map_tiles/vector/{z}/{x}/{y}.mvt";
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const CACHE_MAX_BYTES = 32 * 1024 * 1024;
const TILE_TTL = 7 * 24 * 60 * 60 * 1e3;
const ASSET_TTL = 30 * 24 * 60 * 60 * 1e3;
const TILEJSON_TTL = 60 * 60 * 1e3;
const TILE_MAX_AGE = 7 * 24 * 60 * 60;
const ASSET_MAX_AGE = 30 * 24 * 60 * 60;
const TILEJSON_MAX_AGE = 5 * 60;
const MAX_CONCURRENT_FETCHES = 16;
const FETCH_TIMEOUT = 1e4;
const MAX_TILE_BYTES = 8 * 1024 * 1024;
const MAX_COORDINATE_DIGITS = 8;
const FONTSTACK_RE = /^[A-Za-z0-9 _-]{1,64}(?:,[A-Za-z0-9 _-]{1,64}){0,7}$/;
const GLYPH_RANGE_RE = /^\d{1,5}-\d{1,5}\.pbf$/;
const SPRITE_SET_RE = /^[a-z0-9_-]{1,32}$/;
const SPRITE_NAME_RE = /^sprites(?:@2x)?$/;
const TOKEN_SIZE = 32;
const TOKEN_CHANGE_INTERVAL = 30 * 60 * 1e3;
class MapTilesModule {
  adapter;
  userAgent;
  cacheMaxBytes;
  /** Insertion ordered, so the oldest entry is the first one - used as a crude LRU. */
  cache = /* @__PURE__ */ new Map();
  cacheBytes = 0;
  /** Requests for the same asset share one upstream fetch. */
  inflight = /* @__PURE__ */ new Map();
  running = 0;
  waiting = [];
  /** The current token first, the previous one second (the frontend keeps using it for a while). */
  tokens = [];
  tokenTimer;
  /**
   * Create the map tiles module.
   *
   * @param options - options object
   * @param options.adapter - ioBroker adapter instance
   * @param options.version - adapter version, part of the upstream User-Agent
   * @param options.cacheMaxBytes - cache budget, defaults to CACHE_MAX_BYTES
   */
  constructor(options) {
    this.adapter = options.adapter;
    this.cacheMaxBytes = options.cacheMaxBytes || CACHE_MAX_BYTES;
    this.userAgent = `ioBroker.lovelace/${options.version} (+https://github.com/ioBroker/ioBroker.lovelace)`;
    this.tokens = [MapTilesModule.createToken()];
  }
  /** Start rotating the access token the frontend asks for. */
  init() {
    var _a;
    (_a = this.tokenTimer) != null ? _a : this.tokenTimer = this.adapter.setInterval(() => {
      this.tokens = [MapTilesModule.createToken(), this.tokens[0]];
    }, TOKEN_CHANGE_INTERVAL);
    return Promise.resolve();
  }
  /** Stop the token rotation. */
  cleanup() {
    if (this.tokenTimer) {
      this.adapter.clearInterval(this.tokenTimer);
      this.tokenTimer = void 0;
    }
  }
  static createToken() {
    return (0, import_node_crypto.randomBytes)(TOKEN_SIZE).toString("hex");
  }
  /**
   * Answer `map_tiles/access_token`. The frontend puts the token into the tile urls, because a
   * Leaflet raster layer loads its tiles with an `<img>`, which can carry no header.
   *
   * @param ws - websocket connection
   * @param message - the message from the frontend
   * @returns true if handled
   */
  processMessage(ws, message) {
    if (message.type !== "map_tiles/access_token") {
      return false;
    }
    ws.send(
      JSON.stringify({
        id: message.id,
        type: "result",
        success: true,
        result: { token: this.tokens[0] }
      })
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
  static parseCoordinates(z, x, y, maxZoom = RASTER_MAX_ZOOM) {
    const row = y.replace(/(@2x)?\.(png|mvt)$/, "");
    if (z.length > MAX_COORDINATE_DIGITS || x.length > MAX_COORDINATE_DIGITS || row.length > MAX_COORDINATE_DIGITS) {
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
  async acquire() {
    if (this.running < MAX_CONCURRENT_FETCHES) {
      this.running++;
      return;
    }
    await new Promise((resolve) => this.waiting.push(resolve));
    this.running++;
  }
  release() {
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
  store(key, asset) {
    const previous = this.cache.get(key);
    if (previous) {
      this.cacheBytes -= previous.body.length;
      this.cache.delete(key);
    }
    this.cache.set(key, asset);
    this.cacheBytes += asset.body.length;
    while (this.cacheBytes > this.cacheMaxBytes && this.cache.size > 1) {
      const oldest = this.cache.keys().next().value;
      this.cacheBytes -= this.cache.get(oldest).body.length;
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
  fetchAsset(key, url, contentType, transform) {
    const running = this.inflight.get(key);
    if (running) {
      return running;
    }
    const request = (async () => {
      await this.acquire();
      try {
        const response = await fetch(url, {
          headers: { "User-Agent": this.userAgent },
          signal: AbortSignal.timeout(FETCH_TIMEOUT)
        });
        if (!response.ok) {
          this.adapter.log.debug(`Map tiles ${key}: upstream answered ${response.status}`);
          return null;
        }
        let body = Buffer.from(await response.arrayBuffer());
        if (body.length > MAX_TILE_BYTES) {
          this.adapter.log.warn(`Map tiles ${key}: unexpected size ${body.length}, ignored.`);
          return null;
        }
        if (transform) {
          const rewritten = transform(body);
          if (!rewritten) {
            return null;
          }
          body = rewritten;
        }
        if (!body.length && !key.startsWith("vector/")) {
          return null;
        }
        const asset = { body, contentType, ts: Date.now() };
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
  async serveAsset(res, key, url, contentType, ttl, maxAge, transform) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.ts < ttl) {
      this.cache.delete(key);
      this.cache.set(key, cached);
      this.send(res, cached, maxAge);
      return;
    }
    const asset = await this.fetchAsset(key, url, contentType, transform) || cached;
    if (!asset) {
      res.status(502).send("Could not load map data");
      return;
    }
    this.send(res, asset, maxAge);
  }
  send(res, asset, maxAge) {
    res.set({
      "Content-Type": asset.contentType,
      "Cache-Control": `public, max-age=${maxAge}`
    }).send(asset.body);
  }
  /**
   * Express handler for a raster tile request (`/api/map_tiles/raster/{z}/{x}/{y}.png`).
   *
   * @param req - the request, with z/x/y route parameters
   * @param res - the response
   */
  async serveRaster(req, res) {
    const coordinates = MapTilesModule.parseCoordinates(req.params.z, req.params.x, req.params.y);
    if (!coordinates) {
      res.status(400).send("Invalid tile coordinates");
      return;
    }
    const key = `raster/${coordinates.z}/${coordinates.x}/${coordinates.y}`;
    await this.serveAsset(
      res,
      key,
      `${RASTER_URL}/${coordinates.z}/${coordinates.x}/${coordinates.y}.png`,
      "image/png",
      TILE_TTL,
      TILE_MAX_AGE
    );
  }
  /**
   * Express handler for a vector tile request (`/api/map_tiles/vector/{z}/{x}/{y}.mvt`).
   *
   * @param req - the request, with z/x/y route parameters
   * @param res - the response
   */
  async serveVector(req, res) {
    const coordinates = MapTilesModule.parseCoordinates(req.params.z, req.params.x, req.params.y, VECTOR_MAX_ZOOM);
    if (!coordinates) {
      res.status(400).send("Invalid tile coordinates");
      return;
    }
    const key = `vector/${coordinates.z}/${coordinates.x}/${coordinates.y}`;
    await this.serveAsset(
      res,
      key,
      `${VECTOR_URL}/shortbread_v1/${coordinates.z}/${coordinates.x}/${coordinates.y}.mvt`,
      "application/vnd.mapbox-vector-tile",
      TILE_TTL,
      TILE_MAX_AGE
    );
  }
  /**
   * Express handler for the label glyphs (`/api/map_tiles/fonts/{fontstack}/{range}.pbf`).
   *
   * @param req - the request, with fontstack/range route parameters
   * @param res - the response
   */
  async serveGlyphs(req, res) {
    const fontstack = req.params.fontstack;
    const range = req.params.range;
    if (!FONTSTACK_RE.test(fontstack) || !GLYPH_RANGE_RE.test(range)) {
      res.status(400).send("Invalid font request");
      return;
    }
    const path = `fonts/${fontstack}/${range}`;
    await this.serveAsset(
      res,
      path,
      // The font stack may contain spaces; express handed it to us decoded.
      `${VECTOR_URL}/styles/shortbread/fonts/${encodeURIComponent(fontstack)}/${range}`,
      "application/x-protobuf",
      ASSET_TTL,
      ASSET_MAX_AGE
    );
  }
  /**
   * Express handler for the icon sprites (`/api/map_tiles/sprites/{set}/sprites[@2x].json|png`).
   *
   * @param req - the request, with set/name route parameters
   * @param res - the response
   */
  async serveSprites(req, res) {
    const set = req.params.set;
    const file = req.params.name || "";
    const match = /^(.+)\.(json|png)$/.exec(file);
    if (!SPRITE_SET_RE.test(set) || !match || !SPRITE_NAME_RE.test(match[1])) {
      res.status(400).send("Invalid sprite request");
      return;
    }
    const path = `sprites/${set}/${match[1]}.${match[2]}`;
    await this.serveAsset(
      res,
      path,
      `${VECTOR_URL}/styles/shortbread/${path}`,
      match[2] === "json" ? "application/json" : "image/png",
      ASSET_TTL,
      ASSET_MAX_AGE
    );
  }
  /**
   * Express handler for the TileJSON (`/api/map_tiles/tilejson.json`), rewritten to point back at
   * this adapter instead of upstream.
   *
   * @param _req - the request (unused)
   * @param res - the response
   */
  async serveTileJson(_req, res) {
    await this.serveAsset(
      res,
      "tilejson.json",
      TILEJSON_URL,
      "application/json",
      TILEJSON_TTL,
      TILEJSON_MAX_AGE,
      (body) => MapTilesModule.rewriteTileJson(body, (id) => this.adapter.log.warn(id))
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
  static rewriteTileJson(body, warn) {
    var _a, _b;
    let tilejson;
    try {
      tilejson = JSON.parse(body.toString("utf8"));
    } catch {
      warn("Upstream map TileJSON is not valid JSON");
      return null;
    }
    if (!tilejson || typeof tilejson !== "object" || !Array.isArray(tilejson.tiles) || !tilejson.tiles.length) {
      warn("Upstream map TileJSON does not list any tiles");
      return null;
    }
    const minzoom = Math.max(Number((_a = tilejson.minzoom) != null ? _a : 0) || 0, 0);
    const maxzoom = Math.min(Number((_b = tilejson.maxzoom) != null ? _b : VECTOR_MAX_ZOOM) || VECTOR_MAX_ZOOM, VECTOR_MAX_ZOOM);
    return Buffer.from(
      JSON.stringify({
        ...tilejson,
        tiles: [VECTOR_TILE_PATH],
        minzoom,
        maxzoom,
        attribution: ATTRIBUTION
      }),
      "utf8"
    );
  }
}
module.exports = MapTilesModule;
//# sourceMappingURL=mapTiles.js.map
