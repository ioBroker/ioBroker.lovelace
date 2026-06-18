"use strict";
const { getHistoryGated } = require("../historyGate");
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
    }
    if (!id) {
      return [];
    }
    const history = this.adapter.config.history;
    const fetchPage = async (pageStart, pageEnd) => {
      const count = Math.max(1, Math.ceil((pageEnd - pageStart) / step));
      const result = await getHistoryGated(this.adapter, history, {
        id,
        options: { start: pageStart, end: pageEnd, step, count, aggregate, user }
      });
      if (result == null ? void 0 : result.error) {
        const errText = typeof result.error === "string" ? result.error : JSON.stringify(result.error);
        this.log.error(`Error getting history for ${id}: ${errText}`);
      }
      return (result == null ? void 0 : result.result) || [];
    };
    const MAX_BUCKETS_PER_PAGE = 1e3;
    const totalBuckets = Math.max(1, Math.ceil((end - start) / step));
    if (totalBuckets <= MAX_BUCKETS_PER_PAGE) {
      return fetchPage(start, end);
    }
    const out = [];
    const pageSpan = MAX_BUCKETS_PER_PAGE * step;
    for (let pageStart = start; pageStart < end; pageStart += pageSpan) {
      out.push(...await fetchPage(pageStart, Math.min(end, pageStart + pageSpan)));
    }
    return out;
  }
  /**
   * Process message from the frontend.
   *
   * @param ws - websocket connection to the client
   * @param message - the message from the frontend
   */
  async processMessage(ws, message) {
    var _a, _b, _c, _d, _e, _f, _g;
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
          const unitClass = unitClassForDeviceClass(entity.attributes.device_class);
          const isSum = unitClass === "energy" || unitClass === "volume";
          result.push({
            statistic_id: entityId,
            display_unit_of_measurement: entity.attributes.unit_of_measurement,
            has_mean: !isSum,
            has_sum: isSum,
            name: null,
            source: "recorder",
            statistics_unit_of_measurement: entity.attributes.unit_of_measurement,
            unit_class: unitClass
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
        const types = message.types;
        const wantMean = types == null ? void 0 : types.includes("mean");
        const wantMin = types == null ? void 0 : types.includes("min");
        const wantMax = types == null ? void 0 : types.includes("max");
        const wantState = types == null ? void 0 : types.includes("state");
        const wantSum = types == null ? void 0 : types.includes("sum");
        const wantChange = types == null ? void 0 : types.includes("change");
        for (const entityId of message.statistic_ids) {
          const entity = this.dataSingleton.entityId2Entity[entityId];
          if (!entity) {
            this.log.warn(`Entity ${entityId} not found`);
            continue;
          }
          const id = entity.context.STATE.getId || entity.context.STATE.setId || "";
          if (!id) {
            continue;
          }
          this.log.debug(`Getting statistics for ${entityId}`);
          const buckets = /* @__PURE__ */ new Map();
          const bucketAt = (bucketStart, bucketEnd) => {
            let bucket = buckets.get(bucketStart);
            if (!bucket) {
              bucket = { start: bucketStart, end: bucketEnd };
              buckets.set(bucketStart, bucket);
            }
            return bucket;
          };
          const meanLike = [
            [wantMean, "average", "mean"],
            [wantMin, "min", "min"],
            [wantMax, "max", "max"]
          ];
          for (const [wanted, iobAggregate, field] of meanLike) {
            if (!wanted) {
              continue;
            }
            const series = await this.getHistory(id, start, end, step, iobAggregate, user);
            for (let i = 0; i < series.length; i++) {
              if (series[i].val == null) {
                continue;
              }
              const value = Number(series[i].val);
              if (!isNaN(value)) {
                bucketAt(series[i].ts, (_e = (_d = series[i + 1]) == null ? void 0 : _d.ts) != null ? _e : end)[field] = value;
              }
            }
          }
          if (wantSum || wantState || wantChange) {
            const series = await this.getHistory(id, start - step, end, step, "max", user);
            let previous;
            for (let i = 0; i < series.length; i++) {
              if (series[i].val == null) {
                continue;
              }
              const value = Number(series[i].val);
              if (series[i].ts >= start && !isNaN(value)) {
                const bucket = bucketAt(series[i].ts, (_g = (_f = series[i + 1]) == null ? void 0 : _f.ts) != null ? _g : end);
                if (wantSum) {
                  bucket.sum = value;
                }
                if (wantState) {
                  bucket.state = value;
                }
                if (wantChange) {
                  bucket.change = previous !== void 0 && value >= previous ? value - previous : null;
                }
              }
              if (!isNaN(value)) {
                previous = value;
              }
            }
          }
          result[entityId] = [...buckets.values()].sort((a, b) => a.start - b.start);
          if (result[entityId].length === 0) {
            this.log.info(
              `No history for statistic ${entityId} (state ${id}). The energy/statistics graphs stay empty - make sure a history/SQL/InfluxDB instance is selected in the adapter settings AND logging is enabled for that state.`
            );
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
