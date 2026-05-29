"use strict";
const WS_OPEN = 1;
const entityDataSingleton = require("../../../lib/dataSingleton");
const { iobState2EntityState } = require("../converters/genericConverter");
class LogbookModule {
  adapter;
  getUsedEntityIDs;
  instances;
  /**
   * Create a new logbook module.
   *
   * @param options - options object with adapter and getUsedEntityIDs function
   * @param options.adapter - ioBroker adapter instance
   * @param options.getUsedEntityIDs - function returning all currently used HA entity ids
   */
  constructor(options) {
    this.adapter = options.adapter;
    this.getUsedEntityIDs = options.getUsedEntityIDs;
    this.instances = [];
    let objectType = "instance";
    const params = {
      startkey: "system.adapter.",
      endkey: "system.adapter.\u9999"
    };
    if (this.adapter.config.logbookSource === "user") {
      objectType = "user";
      params.startkey = "system.user.";
      params.endkey = "system.user.\u9999";
    }
    if (this.adapter.config.logbookSource !== "none") {
      this.adapter.getObjectView("system", objectType, params, (err, instances) => {
        if (err) {
          this.adapter.log.warn(`Could not get instances: ${err}`);
        } else if (instances) {
          for (const row of instances.rows) {
            if (row.value && row.value._id) {
              const id = row.value._id;
              let name = id.split(".").splice(2).join(".");
              if (this.adapter.config.logbookSource === "user") {
                name = row.value.common.name;
              }
              this.instances.push({ name, id });
            }
          }
        }
      });
    }
  }
  /**
   * Send a logbook response to the frontend.
   *
   * @param ws - websocket client to send to
   * @param id - subscription message id
   * @param startTime - start timestamp in milliseconds
   * @param endTime - end timestamp in milliseconds
   * @param results - array of entity+state pairs to include in the response
   * @param partial - whether this is a partial response (more to follow)
   */
  sendLogbookResponse(ws, id, startTime, endTime, results = [], partial = false) {
    const message = {
      id: Number(id),
      type: "event",
      event: {
        events: []
      }
    };
    const event = message.event;
    if (startTime) {
      event.start_time = startTime / 1e3;
    }
    if (endTime) {
      event.end_time = endTime / 1e3;
    }
    if (partial) {
      event.partial = true;
    }
    const events = event.events;
    for (const result of results) {
      let from = void 0;
      if (this.adapter.config.logbookSource === "user") {
        from = result.state.user;
      }
      if (this.adapter.config.logbookSource === "adapter") {
        from = result.state.from;
      }
      events.push({
        when: result.state.ts / 1e3,
        state: typeof result.entity.context.STATE.historyParser === "function" ? String(result.entity.context.STATE.historyParser(String(id), result.state.val)) : String(iobState2EntityState(result.entity, result.state.val)),
        entity_id: result.entity.entity_id,
        context_user_id: from
      });
    }
    events.sort((a, b) => a.when - b.when);
    ws.send(JSON.stringify(message));
  }
  /**
   * Process a message from the frontend.
   *
   * @param ws - websocket connection to the client
   * @param message - the message from the frontend
   */
  async processMessage(ws, message) {
    if (message.type === "logbook/event_stream") {
      try {
        ws.send(JSON.stringify({ id: Number(message.id), type: "result", success: true, result: null }));
        ws._subscribes.logbook = ws._subscribes.logbook || [];
        const startTime = new Date(message.start_time).getTime();
        const endTime = new Date(message.end_time).getTime();
        const entityIds = message.entity_ids || this.getUsedEntityIDs();
        this.adapter.log.debug(`Logbook subscription ${String(message.id)} for ${JSON.stringify(entityIds)}`);
        if (!this.adapter.config.history) {
          this.adapter.log.warn(`History instance is not selected in the settings -> logbook won't work`);
          this.sendLogbookResponse(ws, message.id, startTime, endTime, []);
          return true;
        }
        const idsToWatch = [];
        const promises = [];
        const results = [];
        const options = {
          start: startTime,
          end: Math.min(Date.now(), endTime),
          count: this.adapter.config.historyMaxCount,
          aggregate: "onchange",
          from: true,
          returnNewestEntries: true,
          ack: true,
          user: true
        };
        for (const entityId of entityIds) {
          const entity = entityDataSingleton.entityId2Entity[entityId];
          if (entity) {
            if (entity.context && entity.context.STATE) {
              const id = entity.context.STATE.getId || entity.context.STATE.setId;
              if (id) {
                idsToWatch.push({ iobStateId: id, entity });
                promises.push(
                  this.adapter.sendToAsync(this.adapter.config.history, "getHistory", {
                    id,
                    options
                  }).then((stateResult) => {
                    for (const state of stateResult.result) {
                      if (state !== null) {
                        results.push({ entity, state });
                      }
                    }
                  })
                );
              }
            }
          } else {
            this.adapter.log.warn(`Unknown entity id ${entityId}`);
          }
        }
        await Promise.all(promises);
        this.sendLogbookResponse(ws, message.id, startTime, endTime, results, true);
        setTimeout(() => this.sendLogbookResponse(ws, message.id, startTime, endTime, []), 300);
        const logbookSubs = ws._subscribes.logbook;
        const subscription = logbookSubs.find((entry) => entry.id === Number(message.id));
        if (subscription) {
          subscription.idsToWatch = subscription.idsToWatch.concat(idsToWatch);
        } else {
          logbookSubs.push({
            id: Number(message.id),
            idsToWatch
          });
        }
      } catch (e) {
        this.adapter.log.error(`Could not create logbook answer: ${e.stack}`);
        this.sendLogbookResponse(ws, message.id, void 0, void 0, []);
      }
      return true;
    } else if (message.type === "config/auth/list") {
      const result = this.instances;
      ws.send(JSON.stringify({ id: message.id, type: "result", success: true, result }));
      return true;
    } else if (message.type === "trace/contexts") {
      ws.send(JSON.stringify({ id: message.id, type: "result", success: true, result: {} }));
      return true;
    }
    return false;
  }
  /**
   * Handle state changes. Check if they need to be added to the logbook.
   *
   * @param id - ioBroker state id that changed
   * @param state - the new state value
   * @param websocketServer - websocket server to iterate connected clients
   */
  onStateChange(id, state, websocketServer) {
    if (state) {
      if (websocketServer) {
        for (const client of websocketServer.clients) {
          if (client._subscribes.logbook && client.readyState === WS_OPEN) {
            for (const subscription of client._subscribes.logbook) {
              const idAndEntity = subscription.idsToWatch.find((entry) => id === entry.iobStateId);
              if (idAndEntity) {
                this.sendLogbookResponse(client, subscription.id, void 0, void 0, [
                  { state, entity: idAndEntity.entity }
                ]);
              }
            }
          }
        }
      }
    }
  }
}
module.exports = LogbookModule;
//# sourceMappingURL=logbook.js.map
