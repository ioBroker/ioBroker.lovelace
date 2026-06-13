"use strict";
function unitClassForDeviceClass(deviceClass) {
  switch (deviceClass) {
    case "energy":
    case "energy_storage":
      return "energy";
    case "power":
      return "power";
    case "gas":
    case "water":
    case "volume":
    case "volume_storage":
      return "volume";
    default:
      return null;
  }
}
class StatisticsRecorder {
  server;
  adapter;
  log;
  personModule;
  dataSingleton;
  /**
   * Constructor
   *
   * @param options - options
   * @param options.server - server for sending responses to clients
   * @param options.adapter - ioBroker adapter instance
   * @param options.log - ioBroker logger
   * @param options.personModule - person module for user id resolution
   * @param options.dataSingleton - shared entity data singleton
   */
  constructor(options) {
    this.server = options.server;
    this.adapter = options.adapter;
    this.log = options.log;
    this.personModule = options.personModule;
    this.dataSingleton = options.dataSingleton;
  }
  /**
   * Get history for entity.
   *
   * @param id - ioBroker state id to get history for
   * @param start - start timestamp in milliseconds
   * @param end - end timestamp in milliseconds
   * @param step - aggregation step size in milliseconds
   * @param aggregate - aggregation function (min, max, average, total, onchange)
   * @param user - ioBroker user id for access control
   */
  async getHistory(id, start, end, step, aggregate, user) {
    if (!this.adapter.config.history) {
      this.log.warn(`History instance is not selected in the settings`);
      return [];
    } else {
      const history = this.adapter.config.history;
      const count = (end - start) / step;
      const options = { start, end, step, count, aggregate, user };
      if (id) {
        const result = await this.adapter.sendToAsync(history, "getHistory", {
          id,
          options
        });
        if (result == null ? void 0 : result.error) {
          this.log.error(
            `Error getting history for ${id}: ${String(result.error)}`
          );
        }
        if (result && result.result) {
          return result.result;
        } else {
          return [];
        }
      } else {
        return [];
      }
    }
  }
  /**
   * Process message from the frontend.
   *
   * @param ws - websocket connection to the client
   * @param message - the message from the frontend
   */
  async processMessage(ws, message) {
    var _a, _b, _c, _d;
    const msgType = message.type;
    if (msgType == null ? void 0 : msgType.startsWith("recorder/")) {
      if (msgType === "recorder/info") {
        const result = {
          backlog: 0,
          db_in_default_location: true,
          max_backlog: 65e3,
          migration_in_progress: false,
          migration_is_live: false,
          recording: true,
          thread_running: true
        };
        this.server._sendResponse(ws, message.id, result);
        return true;
      } else if (msgType === "recorder/get_statistics_metadata") {
        const result = [];
        for (const entityId of message.statistic_ids) {
          const entity = this.dataSingleton.entityId2Entity[entityId];
          if (!entity) {
            this.log.warn(`Entity ${entityId} not found`);
            continue;
          }
          this.log.debug(`Getting metadata for ${entityId}`);
          result.push({
            statistic_id: entityId,
            display_unit_of_measurement: entity.attributes.unit_of_measurement,
            has_mean: true,
            has_sum: true,
            name: null,
            source: "recorder",
            statistics_unit_of_measurement: entity.attributes.unit_of_measurement,
            unit_class: "temperature"
          });
        }
        this.server._sendResponse(ws, message.id, result);
        return true;
      } else if (msgType === "recorder/list_statistic_ids") {
        const filter = message.statistic_type;
        const result = [];
        for (const entity of this.dataSingleton.entities) {
          const unit = (_a = entity.attributes) == null ? void 0 : _a.unit_of_measurement;
          if (!unit) {
            continue;
          }
          const unitClass = unitClassForDeviceClass((_b = entity.attributes) == null ? void 0 : _b.device_class);
          const isSum = unitClass === "energy" || unitClass === "volume";
          if (filter === "sum" && !isSum) {
            continue;
          }
          if (filter === "mean" && isSum) {
            continue;
          }
          result.push({
            statistic_id: entity.entity_id,
            display_unit_of_measurement: unit,
            has_sum: isSum,
            mean_type: isSum ? 0 : 1,
            // StatisticMeanType: NONE / ARITHMETIC
            name: null,
            source: "recorder",
            statistics_unit_of_measurement: unit,
            unit_class: unitClass
          });
        }
        this.server._sendResponse(ws, message.id, result);
        return true;
      } else if (msgType === "recorder/statistics_during_period") {
        this.log.debug(`Getting statistics for period ${JSON.stringify(message)}`);
        const result = {};
        const wsWithAuth = ws;
        const user = this.personModule.getUserIDFromName((_c = wsWithAuth.__auth) == null ? void 0 : _c.username);
        const start = new Date(message.start_time).getTime();
        const end = message.end_time ? new Date(message.end_time).getTime() : Date.now();
        let step;
        switch (message.period) {
          case "5minute":
            step = 3e4;
            break;
          case "hour":
            step = 36e5;
            break;
          case "day":
            step = 864e5;
            break;
          case "week":
            step = 6048e5;
            break;
          case "month":
            step = 2628e6;
            break;
          default:
            this.log.warn(`Unknown period ${String(message.period)}, default to hour`);
            step = 36e5;
            break;
        }
        const aggregates = [];
        const types = message.types;
        if (types == null ? void 0 : types.includes("state")) {
          aggregates.push(void 0);
        }
        if (types == null ? void 0 : types.includes("min")) {
          aggregates.push("min");
        }
        if (types == null ? void 0 : types.includes("max")) {
          aggregates.push("max");
        }
        if (types == null ? void 0 : types.includes("mean")) {
          aggregates.push("average");
        }
        if (types == null ? void 0 : types.includes("sum")) {
          aggregates.push("total");
        }
        if (types == null ? void 0 : types.includes("change")) {
          aggregates.push("onchange");
        }
        for (const entityId of message.statistic_ids) {
          const entity = this.dataSingleton.entityId2Entity[entityId];
          if (!entity) {
            this.log.warn(`Entity ${entityId} not found`);
            continue;
          }
          this.log.debug(`Getting statistics for ${entityId}`);
          const id = entity.context.STATE.getId || entity.context.STATE.setId || "";
          const entityResult = [];
          for (const aggregate of aggregates) {
            const currentResults = await this.getHistory(id, start, end, step, aggregate, user);
            for (let i = 0; i < currentResults.length; i++) {
              if (!entityResult[i]) {
                const entry = {
                  start: currentResults[i].ts,
                  end: ((_d = currentResults[i + 1]) == null ? void 0 : _d.ts) || end
                };
                if (aggregate) {
                  entry[aggregate] = currentResults[i].value;
                } else {
                  entry.state = currentResults[i].value;
                }
                entityResult.push(entry);
              } else {
                if (aggregate) {
                  entityResult[i][aggregate] = currentResults[i].value;
                } else {
                  entityResult[i].state = currentResults[i].value;
                }
              }
            }
          }
        }
        this.server._sendResponse(ws, message.id, result);
        return true;
      }
    }
    return void 0;
  }
}
module.exports = StatisticsRecorder;
//# sourceMappingURL=statisticsRecorder.js.map
