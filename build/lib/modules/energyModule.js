"use strict";
var import_storage = require("./storage");
const EMPTY_PREFS = {
  energy_sources: [],
  device_consumption: [],
  device_consumption_water: []
};
class EnergyModule {
  adapter;
  sendResponse;
  _prefs = {
    ...EMPTY_PREFS,
    energy_sources: [],
    device_consumption: [],
    device_consumption_water: []
  };
  constructor(options) {
    this.adapter = options.adapter;
    this.sendResponse = options.sendResponse;
  }
  async init() {
    const storage = await this.adapter.getObjectAsync(`${import_storage.STORAGE_PREFIX}energyPrefs`);
    const native = storage == null ? void 0 : storage.native;
    this._prefs = (native == null ? void 0 : native.prefs) || {
      ...EMPTY_PREFS,
      energy_sources: [],
      device_consumption: [],
      device_consumption_water: []
    };
    this.adapter.log.debug("modules/energyModule: init done.");
  }
  async _save() {
    const storage = await this.adapter.getObjectAsync(`${import_storage.STORAGE_PREFIX}energyPrefs`);
    if (!(storage == null ? void 0 : storage.native)) {
      return;
    }
    storage.native.prefs = this._prefs;
    await this.adapter.setObject(`${import_storage.STORAGE_PREFIX}energyPrefs`, storage);
  }
  /** Derive cost_sensors map from stored prefs: stat_energy_from → stat_cost */
  _getCostSensors() {
    const costSensors = {};
    for (const source of this._prefs.energy_sources) {
      const from = source.stat_energy_from;
      const cost = source.stat_cost;
      if (from && cost) {
        costSensors[from] = cost;
      }
      const comp = source.stat_compensation;
      const to = source.stat_energy_to;
      if (to && comp) {
        costSensors[to] = comp;
      }
    }
    return costSensors;
  }
  /** Build an empty validation result (no issues) for the current prefs */
  _emptyValidation() {
    return {
      energy_sources: this._prefs.energy_sources.map(() => []),
      device_consumption: this._prefs.device_consumption.map(() => []),
      device_consumption_water: this._prefs.device_consumption_water.map(() => [])
    };
  }
  processMessage(ws, message) {
    var _a, _b, _c;
    if (!String(message.type).startsWith("energy/")) {
      return false;
    }
    switch (message.type) {
      case "energy/info":
        this.sendResponse(ws, message.id, {
          cost_sensors: this._getCostSensors(),
          solar_forecast_domains: []
        });
        break;
      case "energy/get_prefs":
        this.sendResponse(ws, message.id, this._prefs);
        break;
      case "energy/save_prefs": {
        const updated = {
          energy_sources: (_a = message.energy_sources) != null ? _a : this._prefs.energy_sources,
          device_consumption: (_b = message.device_consumption) != null ? _b : this._prefs.device_consumption,
          device_consumption_water: (_c = message.device_consumption_water) != null ? _c : this._prefs.device_consumption_water
        };
        this._prefs = updated;
        void this._save();
        this.sendResponse(ws, message.id, this._prefs);
        break;
      }
      case "energy/validate":
        this.sendResponse(ws, message.id, this._emptyValidation());
        break;
      case "energy/fossil_energy_consumption":
        this.sendResponse(ws, message.id, {});
        break;
      case "energy/solar_forecast":
        this.sendResponse(ws, message.id, {});
        break;
      default:
        return false;
    }
    return true;
  }
}
module.exports = EnergyModule;
//# sourceMappingURL=energyModule.js.map
