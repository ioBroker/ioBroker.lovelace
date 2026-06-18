"use strict";
const WS_OPEN = 1;
class CalendarModule {
  adapter;
  sendResponse;
  entityData;
  getUserIDFromName;
  /**
   * Create a new calendar module.
   *
   * @param options - options object
   * @param options.adapter - ioBroker adapter instance
   * @param options.sendResponse - send a WS result to a client
   * @param options.entityData - shared entity store (entityId2Entity)
   * @param options.getUserIDFromName - resolve an ioBroker user id from an authenticated username
   */
  constructor(options) {
    this.adapter = options.adapter;
    this.sendResponse = options.sendResponse;
    this.entityData = options.entityData;
    this.getUserIDFromName = options.getUserIDFromName;
  }
  /**
   * Extract the start/end of a stored event (supports the ioBroker `_date`/`_end` format and the
   * HA-style `start`/`end` that may be a string or an object with `dateTime`/`date`).
   *
   * @param value - a string ISO date, or an object with dateTime/date
   */
  _dateOf(value) {
    if (typeof value === "string") {
      return value;
    }
    if (value && typeof value === "object") {
      const obj = value;
      return obj.dateTime || obj.date;
    }
    return void 0;
  }
  /**
   * Parse a calendar state value into the events that overlap the [start, end] window.
   *
   * @param value - raw ioBroker state value (JSON string or array)
   * @param start - window start in ms
   * @param end - window end in ms
   */
  _eventsInRange(value, start, end) {
    let events = value;
    if (typeof value === "string") {
      try {
        events = JSON.parse(value);
      } catch (e) {
        this.adapter.log.warn(`Calendar state is not valid JSON: ${String(e)}`);
        return [];
      }
    }
    if (!Array.isArray(events)) {
      return [];
    }
    const result = [];
    events.forEach((raw, index) => {
      var _a, _b, _c, _d, _e;
      const startStr = (_a = raw._date) != null ? _a : this._dateOf(raw.start);
      const endStr = (_c = (_b = raw._end) != null ? _b : this._dateOf(raw.end)) != null ? _c : startStr;
      if (!startStr) {
        return;
      }
      const evStart = new Date(startStr).getTime();
      const evEnd = new Date(endStr).getTime();
      if (isNaN(evStart)) {
        return;
      }
      const endMs = isNaN(evEnd) ? evStart : evEnd;
      if (evStart < end && endMs > start) {
        result.push({
          start: new Date(evStart).toISOString(),
          end: new Date(endMs).toISOString(),
          summary: String((_e = (_d = raw.event) != null ? _d : raw.summary) != null ? _e : ""),
          uid: String(index)
        });
      }
    });
    return result;
  }
  /**
   * Get the events for a calendar entity in the given window (used by both the WS subscription and
   * the REST endpoint).
   *
   * @param entityId - HA calendar entity_id
   * @param start - window start in ms
   * @param end - window end in ms
   * @param user - ioBroker user id for the foreign-state read
   */
  async getEvents(entityId, start, end, user) {
    var _a, _b;
    const entity = this.entityData.entityId2Entity[entityId];
    const getId = (_b = (_a = entity == null ? void 0 : entity.context) == null ? void 0 : _a.STATE) == null ? void 0 : _b.getId;
    if (!getId) {
      return [];
    }
    try {
      const state = await this.adapter.getForeignStateAsync(getId, { user });
      return this._eventsInRange(state == null ? void 0 : state.val, start, end);
    } catch (e) {
      this.adapter.log.warn(`Could not read calendar state for ${entityId}: ${String(e)}`);
      return [];
    }
  }
  /**
   * Handle a `calendar/event/subscribe` message: send the current events, then keep the
   * subscription so we can push updates when the underlying state changes.
   *
   * @param ws - websocket connection
   * @param message - the message from the frontend
   * @returns true if handled
   */
  async processMessage(ws, message) {
    var _a, _b, _c;
    if (message.type !== "calendar/event/subscribe") {
      return false;
    }
    const entityId = message.entity_id;
    const start = new Date(message.start).getTime();
    const end = new Date(message.end).getTime();
    const entity = this.entityData.entityId2Entity[entityId];
    const getId = (_b = (_a = entity == null ? void 0 : entity.context) == null ? void 0 : _a.STATE) == null ? void 0 : _b.getId;
    const user = this.getUserIDFromName((_c = ws.__auth) == null ? void 0 : _c.username);
    const events = isNaN(start) || isNaN(end) ? [] : await this.getEvents(entityId, start, end, user);
    this.sendResponse(ws, message.id, null);
    ws.send(JSON.stringify({ id: message.id, type: "event", event: { events } }));
    if (getId && !isNaN(start) && !isNaN(end)) {
      ws.__calendarSubs = ws.__calendarSubs || [];
      ws.__calendarSubs = ws.__calendarSubs.filter(
        (sub) => !(sub.getId === getId && sub.start === start && sub.end === end)
      );
      ws.__calendarSubs.push({ id: message.id, getId, start, end, lastSent: JSON.stringify(events) });
    }
    return true;
  }
  /**
   * Push refreshed events to every subscription whose calendar state changed.
   *
   * @param id - changed ioBroker state id
   * @param state - new state
   * @param wss - websocket server (to iterate clients)
   */
  onStateChange(id, state, wss) {
    if (!wss) {
      return;
    }
    for (const client of wss.clients) {
      if (!client.__calendarSubs || client.readyState !== WS_OPEN) {
        continue;
      }
      for (const sub of client.__calendarSubs) {
        if (sub.getId === id) {
          const events = this._eventsInRange(state == null ? void 0 : state.val, sub.start, sub.end);
          const eventsJson = JSON.stringify(events);
          if (eventsJson === sub.lastSent) {
            continue;
          }
          sub.lastSent = eventsJson;
          client.send(JSON.stringify({ id: sub.id, type: "event", event: { events } }));
        }
      }
    }
  }
  /**
   * Remove a calendar subscription (called from unsubscribe_events).
   *
   * @param ws - websocket connection
   * @param subscriptionId - the subscription id to remove
   */
  removeSubscription(ws, subscriptionId) {
    if (ws.__calendarSubs) {
      ws.__calendarSubs = ws.__calendarSubs.filter((sub) => sub.id !== subscriptionId);
    }
  }
}
module.exports = CalendarModule;
//# sourceMappingURL=calendar.js.map
