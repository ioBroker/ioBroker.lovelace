"use strict";
var import_storage = require("./storage");
class AreaRegistry {
  adapter;
  rooms;
  sendResponse;
  sendUpdate;
  _sortOrder = [];
  /**
   * Constructor
   *
   * @param options - options including adapter.
   * @param options.adapter - ioBroker adapter instance
   * @param options.rooms - map of room enum objects
   * @param options.sendResponse - function to send a response to a client
   * @param options.sendUpdate - function to broadcast an update event
   */
  constructor(options) {
    this.adapter = options.adapter;
    this.rooms = options.rooms;
    this.sendResponse = options.sendResponse;
    this.sendUpdate = options.sendUpdate;
  }
  async init() {
    const storage = await this.adapter.getObjectAsync(`${import_storage.STORAGE_PREFIX}areaRegistry`);
    const native = storage == null ? void 0 : storage.native;
    this._sortOrder = (native == null ? void 0 : native.sortOrder) || [];
    this.adapter.log.debug("modules/areaRegistry: init done.");
  }
  async _save() {
    const storage = await this.adapter.getObjectAsync(`${import_storage.STORAGE_PREFIX}areaRegistry`);
    if (!(storage == null ? void 0 : storage.native)) {
      return;
    }
    storage.native.sortOrder = this._sortOrder;
    await this.adapter.setObject(`${import_storage.STORAGE_PREFIX}areaRegistry`, storage);
  }
  /**
   * Create area registry entry from a room object.
   *
   * @param room - the ioBroker room enum object
   * @returns the created entry
   */
  _createEntryFromRoom(room) {
    var _a, _b;
    const common = (_a = room.common) != null ? _a : {};
    const name = common.name;
    let nameStr;
    if (typeof name === "string") {
      nameStr = name;
    } else if (name && typeof name === "object") {
      const map = name;
      nameStr = map[this.adapter.lang] || map.en || Object.values(map)[0] || room._id;
    } else {
      nameStr = room._id;
    }
    return {
      area_id: room._id,
      name: nameStr,
      aliases: [],
      floor_id: null,
      humidity_entity_id: null,
      icon: (_b = common.icon) != null ? _b : null,
      labels: [],
      picture: null,
      temperature_entity_id: null
    };
  }
  _sortedEntries() {
    const all = Object.values(this.rooms).map((r) => this._createEntryFromRoom(r));
    if (this._sortOrder.length === 0) {
      return all;
    }
    const indexed = new Map(this._sortOrder.map((id, i) => [id, i]));
    return all.sort((a, b) => {
      var _a, _b;
      const ai = (_a = indexed.get(a.area_id)) != null ? _a : Number.MAX_SAFE_INTEGER;
      const bi = (_b = indexed.get(b.area_id)) != null ? _b : Number.MAX_SAFE_INTEGER;
      return ai - bi;
    });
  }
  /**
   * Process incoming messages from the frontend.
   *
   * @param ws - the websocket connection
   * @param message - the message from the frontend
   * @returns true if the message was processed, false if not
   */
  processMessage(ws, message) {
    if (message.type === "config/area_registry/list") {
      let entries = [];
      try {
        entries = this._sortedEntries();
      } catch (e) {
        this.adapter.log.warn(`Could not build the area list: ${e instanceof Error ? e.message : String(e)}`);
      }
      this.sendResponse(ws, message.id, entries);
      return true;
    }
    if (message.type === "config/area_registry/reorder") {
      this._sortOrder = message.area_ids || [];
      void this._save();
      this.sendUpdate("area_registry_updated");
      return true;
    }
    return false;
  }
  /**
   * Process object changes - tell the frontend to reload rooms, if a room enum is changed.
   *
   * @param id - the id of the changed object
   */
  onObjectChange(id) {
    if (id == null ? void 0 : id.startsWith("enum.rooms.")) {
      this.sendUpdate("area_registry_updated");
    }
  }
}
module.exports = AreaRegistry;
//# sourceMappingURL=areaRegistry.js.map
