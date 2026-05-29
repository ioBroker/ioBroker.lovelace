"use strict";
class DeviceRegistry {
  adapter;
  entityData;
  sendResponse;
  /**
   * Constructor
   *
   * @param options - options including adapter.
   * @param options.adapter - ioBroker adapter instance
   * @param options.entityData - shared entity data singleton
   * @param options.sendResponse - function to send a response to a client
   */
  constructor(options) {
    this.adapter = options.adapter;
    this.entityData = options.entityData;
    this.sendResponse = options.sendResponse;
  }
  /**
   * Create device registry entry from an entity on the fly.
   *
   * @param entity - the entity to create the entry from
   * @returns the created entry
   */
  _createEntryFromEntity(entity) {
    return {
      id: entity.context.device_id,
      config_entries: [],
      config_entries_subentries: {},
      connections: [],
      identifiers: [[entity.attributes.friendly_name, entity.context.device_id]],
      manufacturer: null,
      model: null,
      model_id: null,
      name: entity.attributes.friendly_name,
      labels: [],
      sw_version: null,
      hw_version: null,
      serial_number: null,
      via_device_id: null,
      area_id: entity.context.roomId || null,
      name_by_user: null,
      entry_type: null,
      disabled_by: null,
      configuration_url: null,
      primary_config_entry: null
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
    if (message.type === "config/device_registry/list") {
      const entries = [];
      for (const entity of this.entityData.entities) {
        if (entity.context.id === entity.context.device_id) {
          entries.push(this._createEntryFromEntity(entity));
        }
      }
      this.sendResponse(ws, message.id, entries);
      return true;
    }
    return false;
  }
}
module.exports = DeviceRegistry;
//# sourceMappingURL=deviceRegistry.js.map
