const WS_OPEN = 1; // WebSocket.OPEN

type SendResponseFn = (ws: unknown, id: unknown, result?: unknown) => void;

interface EntityLike {
    entity_id: string;
    context?: { STATE?: { getId?: string | null } };
}

interface EntityDataLike {
    entityId2Entity: Record<string, EntityLike>;
}

/** A single event as stored in the ioBroker calendar state. */
interface RawCalendarEvent {
    _date?: string;
    _end?: string;
    event?: string;
    start?: string | { dateTime?: string; date?: string };
    end?: string | { dateTime?: string; date?: string };
    summary?: string;
    [key: string]: unknown;
}

/** A calendar event in the shape the websocket subscription delivers it. */
interface CalendarEvent {
    start: string;
    end: string;
    summary: string;
    uid: string;
    location?: string;
    description?: string;
}

/** The same event as above, plus whether it covers whole days. */
interface InternalEvent extends CalendarEvent {
    allDay: boolean;
}

/** A date as the REST api of Home Assistant names it: a moment, or a whole day. */
type RestDate = { dateTime: string } | { date: string };

/** A calendar event in the shape the REST api of Home Assistant answers with. */
interface RestEvent {
    start: RestDate;
    end: RestDate;
    summary: string;
    uid: string;
    location?: string;
    description?: string;
}

interface CalendarSubscription {
    id: unknown;
    getId: string;
    start: number;
    end: number;
    /** Serialized events last pushed for this window, to skip identical re-pushes. */
    lastSent: string;
}

interface WsWithCalendar {
    send(data: string): void;
    readyState?: number;
    __auth?: { username?: string };
    __calendarSubs?: CalendarSubscription[];
}

interface WsServerLike {
    clients: Iterable<WsWithCalendar>;
}

/**
 * Calendar support for the Home Assistant frontend.
 *
 * The newer frontend uses the WebSocket subscription `calendar/event/subscribe` (the old REST
 * endpoint `/api/calendars/:entity_id` is still served by the server and now shares this module's
 * event extraction). A calendar entity reads a single ioBroker state holding a JSON array of events;
 * we filter them to the requested window, map them to HA's shape and push them - plus re-push when
 * the underlying state changes (live updates).
 */
class CalendarModule {
    private adapter: ioBroker.Adapter;
    private sendResponse: SendResponseFn;
    private entityData: EntityDataLike;
    private getUserIDFromName: (name: string | undefined) => string;

    /**
     * Create a new calendar module.
     *
     * @param options - options object
     * @param options.adapter - ioBroker adapter instance
     * @param options.sendResponse - send a WS result to a client
     * @param options.entityData - shared entity store (entityId2Entity)
     * @param options.getUserIDFromName - resolve an ioBroker user id from an authenticated username
     */
    constructor(options: {
        adapter: ioBroker.Adapter;
        sendResponse: SendResponseFn;
        entityData: EntityDataLike;
        getUserIDFromName: (name: string | undefined) => string;
    }) {
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
    private _dateOf(value: unknown): string | undefined {
        if (typeof value === 'string') {
            return value;
        }
        if (value && typeof value === 'object') {
            const obj = value as { dateTime?: string; date?: string };
            return obj.dateTime || obj.date;
        }
        return undefined;
    }

    /**
     * Whether a value names a whole day instead of a moment, i.e. "2026-10-07".
     *
     * @param value - the value of a start/end field
     * @returns true for a date without a time
     */
    private static _isDateOnly(value: unknown): boolean {
        const text = typeof value === 'string' ? value : (value as { date?: string } | undefined)?.date;
        return typeof text === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(text);
    }

    /**
     * An event in the shape the REST api of Home Assistant answers with: `start` and `end` are
     * objects there, `{ dateTime }` for a moment and `{ date }` for a whole day, while the websocket
     * subscription delivers plain strings. A card reading `event.start.dateTime` (Calendar Card Pro,
     * for one) finds nothing in the websocket shape (#756).
     *
     * @param event - the event as it was read from the ioBroker state
     * @returns the event for the REST answer
     */
    private static _toRestEvent(event: InternalEvent): RestEvent {
        const asDate = (iso: string): RestDate => ({ date: iso.substring(0, 10) });
        const rest: RestEvent = {
            start: event.allDay ? asDate(event.start) : { dateTime: event.start },
            end: event.allDay ? asDate(event.end) : { dateTime: event.end },
            summary: event.summary,
            uid: event.uid,
        };
        if (event.location) {
            rest.location = event.location;
        }
        if (event.description) {
            rest.description = event.description;
        }
        return rest;
    }

    /**
     * Drop what only we know about an event, so the websocket answer keeps the shape it had.
     *
     * @param event - the event as it was read from the ioBroker state
     * @returns the event for the websocket answer
     */
    private static _toWsEvent(event: InternalEvent): CalendarEvent {
        const { allDay: _allDay, ...rest } = event;
        return rest;
    }

    /**
     * Parse a calendar state value into the events that overlap the [start, end] window.
     *
     * @param value - raw ioBroker state value (JSON string or array)
     * @param start - window start in ms
     * @param end - window end in ms
     */
    private _eventsInRange(value: unknown, start: number, end: number): InternalEvent[] {
        let events: unknown = value;
        if (typeof value === 'string') {
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

        const result: InternalEvent[] = [];
        events.forEach((raw: RawCalendarEvent, index: number) => {
            const startStr = raw._date ?? this._dateOf(raw.start);
            const endStr = raw._end ?? this._dateOf(raw.end) ?? startStr;
            if (!startStr) {
                return;
            }
            const evStart = new Date(startStr).getTime();
            const evEnd = new Date(endStr as string).getTime();
            if (isNaN(evStart)) {
                return;
            }
            const endMs = isNaN(evEnd) ? evStart : evEnd;
            // Overlap test: event touches the requested window.
            if (evStart < end && endMs > start) {
                const event: InternalEvent = {
                    start: new Date(evStart).toISOString(),
                    end: new Date(endMs).toISOString(),
                    summary: String(raw.event ?? raw.summary ?? ''),
                    uid: String(index),
                    // ioBroker.ical marks an event covering whole days with _allDay; a source that
                    // writes HA-style events says the same by giving a date without a time.
                    allDay:
                        raw._allDay === true ||
                        CalendarModule._isDateOnly(raw.start) ||
                        CalendarModule._isDateOnly(raw._date),
                };
                // Optional fields the newer frontend shows in the event detail (only if present).
                if (typeof raw.location === 'string' && raw.location) {
                    event.location = raw.location;
                }
                // _section is where ioBroker.ical puts the description of an event.
                const description = raw.description ?? raw._section;
                if (typeof description === 'string' && description) {
                    event.description = description;
                }
                result.push(event);
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
    async getEvents(entityId: string, start: number, end: number, user: string): Promise<CalendarEvent[]> {
        const entity = this.entityData.entityId2Entity[entityId];
        const getId = entity?.context?.STATE?.getId;
        if (!getId) {
            return [];
        }
        try {
            const state = await this.adapter.getForeignStateAsync(getId, { user });
            return this._eventsInRange(state?.val, start, end).map(event => CalendarModule._toWsEvent(event));
        } catch (e) {
            this.adapter.log.warn(`Could not read calendar state for ${entityId}: ${String(e)}`);
            return [];
        }
    }

    /**
     * The events of a calendar entity for the REST endpoint `/api/calendars/<entity_id>`.
     *
     * @param entityId - HA calendar entity_id
     * @param start - window start in ms
     * @param end - window end in ms
     * @param user - ioBroker user id for the foreign-state read
     * @returns the events, with start/end as the REST api names them
     */
    async getRestEvents(entityId: string, start: number, end: number, user: string): Promise<RestEvent[]> {
        const entity = this.entityData.entityId2Entity[entityId];
        const getId = entity?.context?.STATE?.getId;
        if (!getId) {
            return [];
        }
        try {
            const state = await this.adapter.getForeignStateAsync(getId, { user });
            return this._eventsInRange(state?.val, start, end).map(event => CalendarModule._toRestEvent(event));
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
    async processMessage(ws: WsWithCalendar, message: Record<string, unknown>): Promise<boolean> {
        if (message.type !== 'calendar/event/subscribe') {
            return false;
        }
        const entityId = message.entity_id as string;
        const start = new Date(message.start as string).getTime();
        const end = new Date(message.end as string).getTime();
        const entity = this.entityData.entityId2Entity[entityId];
        const getId = entity?.context?.STATE?.getId;

        const user = this.getUserIDFromName(ws.__auth?.username);
        const events = isNaN(start) || isNaN(end) ? [] : await this.getEvents(entityId, start, end, user);

        // Ack the subscription, then deliver the initial events as an event message. (A subscription
        // delivers data via `event` messages, not a second `result`.)
        this.sendResponse(ws, message.id, null);
        ws.send(JSON.stringify({ id: message.id, type: 'event', event: { events } }));

        if (getId && !isNaN(start) && !isNaN(end)) {
            ws.__calendarSubs = ws.__calendarSubs || [];
            // Drop an identical existing subscription (same calendar + window) instead of stacking a
            // second one. Some embedded browsers (e.g. Fully Kiosk) re-subscribe without first
            // unsubscribing; without this the subscriptions accumulate and every state change pushes
            // duplicate updates, which makes the card flicker.
            ws.__calendarSubs = ws.__calendarSubs.filter(
                sub => !(sub.getId === getId && sub.start === start && sub.end === end),
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
    onStateChange(id: string, state: ioBroker.State | null | undefined, wss: WsServerLike | null | undefined): void {
        if (!wss) {
            return;
        }
        for (const client of wss.clients) {
            if (!client.__calendarSubs || client.readyState !== WS_OPEN) {
                continue;
            }
            for (const sub of client.__calendarSubs) {
                if (sub.getId === id) {
                    const events = this._eventsInRange(state?.val, sub.start, sub.end).map(event =>
                        CalendarModule._toWsEvent(event),
                    );
                    const eventsJson = JSON.stringify(events);
                    // Only push when the events for this window actually changed. Calendar source
                    // adapters often rewrite their state regularly with identical data; re-pushing
                    // that makes the card collapse to its spinner and reload in a loop.
                    if (eventsJson === sub.lastSent) {
                        continue;
                    }
                    sub.lastSent = eventsJson;
                    client.send(JSON.stringify({ id: sub.id, type: 'event', event: { events } }));
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
    removeSubscription(ws: WsWithCalendar, subscriptionId: unknown): void {
        if (ws.__calendarSubs) {
            ws.__calendarSubs = ws.__calendarSubs.filter(sub => sub.id !== subscriptionId);
        }
    }
}

export = CalendarModule;
