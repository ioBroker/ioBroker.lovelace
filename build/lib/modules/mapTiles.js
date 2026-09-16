"use strict";
const RASTER_URL = "https://tile.openstreetmap.org";
const RASTER_MAX_ZOOM = 19;
const CACHE_MAX_BYTES = 32 * 1024 * 1024;
const TILE_TTL = 7 * 24 * 60 * 60 * 1e3;
const TILE_MAX_AGE = 7 * 24 * 60 * 60;
const MAX_CONCURRENT_FETCHES = 16;
const FETCH_TIMEOUT = 1e4;
const MAX_TILE_BYTES = 2 * 1024 * 1024;
class MapTilesModule {
  adapter;
  userAgent;
  cacheMaxBytes;
  /** Insertion ordered, so the oldest entry is the first one - used as a crude LRU. */
  cache = /* @__PURE__ */ new Map();
  cacheBytes = 0;
  /** Requests for the same tile share one upstream fetch. */
  inflight = /* @__PURE__ */ new Map();
  running = 0;
  waiting = [];
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
  }
  /**
   * Parse and validate the tile coordinates of a request path.
   *
   * @param z - zoom level
   * @param x - tile column
   * @param y - tile row, with the file extension and an optional retina suffix
   * @returns the coordinates, or null when they are out of range / not numbers
   */
  static parseCoordinates(z, x, y) {
    const row = y.replace(/(@2x)?\.png$/, "");
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
   * Store a tile, evicting the oldest entries until the cache fits its budget again.
   *
   * @param key - cache key (the tile path)
   * @param tile - the tile to store
   */
  store(key, tile) {
    const previous = this.cache.get(key);
    if (previous) {
      this.cacheBytes -= previous.body.length;
      this.cache.delete(key);
    }
    this.cache.set(key, tile);
    this.cacheBytes += tile.body.length;
    while (this.cacheBytes > this.cacheMaxBytes && this.cache.size > 1) {
      const oldest = this.cache.keys().next().value;
      this.cacheBytes -= this.cache.get(oldest).body.length;
      this.cache.delete(oldest);
    }
  }
  /**
   * Fetch one tile from upstream (deduplicated per tile).
   *
   * @param key - the tile path, e.g. "12/2200/1343"
   * @returns the tile, or null when upstream did not deliver one
   */
  fetchTile(key) {
    const running = this.inflight.get(key);
    if (running) {
      return running;
    }
    const request = (async () => {
      await this.acquire();
      try {
        const response = await fetch(`${RASTER_URL}/${key}.png`, {
          headers: { "User-Agent": this.userAgent, Accept: "image/png,image/*" },
          signal: AbortSignal.timeout(FETCH_TIMEOUT)
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
        const tile = {
          body,
          contentType: response.headers.get("content-type") || "image/png",
          ts: Date.now()
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
  async serveRaster(req, res) {
    const coordinates = MapTilesModule.parseCoordinates(req.params.z, req.params.x, req.params.y);
    if (!coordinates) {
      res.status(400).send("Invalid tile coordinates");
      return;
    }
    const key = `${coordinates.z}/${coordinates.x}/${coordinates.y}`;
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.ts < TILE_TTL) {
      this.cache.delete(key);
      this.cache.set(key, cached);
      this.sendTile(res, cached);
      return;
    }
    const tile = await this.fetchTile(key) || cached;
    if (!tile) {
      res.status(502).send("Could not load map tile");
      return;
    }
    this.sendTile(res, tile);
  }
  sendTile(res, tile) {
    res.set({
      "Content-Type": tile.contentType,
      "Cache-Control": `public, max-age=${TILE_MAX_AGE}`
    }).send(tile.body);
  }
}
module.exports = MapTilesModule;
//# sourceMappingURL=mapTiles.js.map
