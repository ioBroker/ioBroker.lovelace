"use strict";
class AreaRegistry {
  adapter;
  rooms;
  sendResponse;
  sendUpdate;
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
  /**
   * Create area registry entry from a room object.
   *
   * @param room - the ioBroker room enum object
   * @returns the created entry
   */
  _createEntryFromRoom(room) {
    const name = room.common.name;
    const nameStr = typeof name === "string" ? name : name[this.adapter.lang] || name.en || name[Object.keys(name)[0]];
    return {
      area_id: room._id,
      name: nameStr,
      aliases: [],
      floor_id: null,
      humidity_entity_id: null,
      icon: room.common.icon,
      labels: [],
      picture: null,
      temperature_entity_id: null
    };
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
      const entries = [];
      for (const room of Object.values(this.rooms)) {
        entries.push(this._createEntryFromRoom(room));
      }
      this.sendResponse(ws, message.id, entries);
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
