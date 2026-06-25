import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const CalendarModule = require('../modules/calendar');

const DAY = 24 * 60 * 60 * 1000;
const T0 = Date.parse('2026-06-13T00:00:00.000Z');

function makeModule(stateVal: unknown): { mod: any; responses: { id: unknown; result: unknown }[] } {
    const responses: { id: unknown; result: unknown }[] = [];
    const mod = new CalendarModule({
        adapter: {
            log: { warn: () => {}, error: () => {} },
            getForeignStateAsync: () => Promise.resolve({ val: stateVal }),
        },
        sendResponse: (_ws: unknown, id: unknown, result: unknown) => responses.push({ id, result }),
        entityData: {
            entityId2Entity: {
                'calendar.abfall': { entity_id: 'calendar.abfall', context: { STATE: { getId: 'cal.0.abfall' } } },
            },
        },
        getUserIDFromName: () => 'system.user.admin',
    });
    return { mod, responses };
}

const EVENTS = [
    { _date: '2026-06-13T08:00:00.000Z', _end: '2026-06-13T09:00:00.000Z', event: 'Restmüll' },
    { _date: '2026-07-01T08:00:00.000Z', _end: '2026-07-01T09:00:00.000Z', event: 'Out of range' },
];

describe('modules/calendar', function () {
    it('getEvents returns events in range mapped to HA shape', async function () {
        const { mod } = makeModule(JSON.stringify(EVENTS));
        const res = await mod.getEvents('calendar.abfall', T0, T0 + DAY, 'system.user.admin');
        expect(res).to.have.lengthOf(1);
        expect(res[0]).to.deep.equal({
            start: '2026-06-13T08:00:00.000Z',
            end: '2026-06-13T09:00:00.000Z',
            summary: 'Restmüll',
            uid: '0',
        });
    });

    it('includes location and description when present', async function () {
        const withExtra = [
            {
                _date: '2026-06-13T08:00:00.000Z',
                _end: '2026-06-13T09:00:00.000Z',
                event: 'Meeting',
                location: 'Office',
                description: 'Quarterly review',
            },
        ];
        const { mod } = makeModule(JSON.stringify(withExtra));
        const res = await mod.getEvents('calendar.abfall', T0, T0 + DAY, 'system.user.admin');
        expect(res[0]).to.deep.equal({
            start: '2026-06-13T08:00:00.000Z',
            end: '2026-06-13T09:00:00.000Z',
            summary: 'Meeting',
            uid: '0',
            location: 'Office',
            description: 'Quarterly review',
        });
    });

    it('omits location/description when absent', async function () {
        const { mod } = makeModule(JSON.stringify(EVENTS));
        const res = await mod.getEvents('calendar.abfall', T0, T0 + DAY, 'system.user.admin');
        expect(res[0]).to.not.have.property('location');
        expect(res[0]).to.not.have.property('description');
    });

    it('getEvents returns [] for an unknown entity', async function () {
        const { mod } = makeModule(JSON.stringify(EVENTS));
        expect(await mod.getEvents('calendar.unknown', T0, T0 + DAY, 'system.user.admin')).to.deep.equal([]);
    });

    it('calendar/event/subscribe acks then sends an event with the events, and registers the sub', async function () {
        const { mod, responses } = makeModule(JSON.stringify(EVENTS));
        const sent: any[] = [];
        const ws: any = { send: (d: string) => sent.push(JSON.parse(d)), readyState: 1 };

        const handled = await mod.processMessage(ws, {
            type: 'calendar/event/subscribe',
            entity_id: 'calendar.abfall',
            start: '2026-06-13T00:00:00.000Z',
            end: '2026-06-14T00:00:00.000Z',
            id: 9,
        });

        expect(handled).to.equal(true);
        expect(responses).to.deep.equal([{ id: 9, result: null }]);
        expect(sent).to.have.lengthOf(1);
        expect(sent[0]).to.deep.equal({
            id: 9,
            type: 'event',
            event: {
                events: [
                    {
                        start: '2026-06-13T08:00:00.000Z',
                        end: '2026-06-13T09:00:00.000Z',
                        summary: 'Restmüll',
                        uid: '0',
                    },
                ],
            },
        });
        expect(ws.__calendarSubs).to.have.lengthOf(1);
        expect(ws.__calendarSubs[0].getId).to.equal('cal.0.abfall');
    });

    it('onStateChange re-pushes events to a subscribed client', function () {
        const { mod } = makeModule(JSON.stringify(EVENTS));
        const sent: any[] = [];
        const ws: any = {
            send: (d: string) => sent.push(JSON.parse(d)),
            readyState: 1,
            __calendarSubs: [{ id: 9, getId: 'cal.0.abfall', start: T0, end: T0 + DAY }],
        };
        mod.onStateChange('cal.0.abfall', { val: JSON.stringify(EVENTS) }, { clients: [ws] });
        expect(sent).to.have.lengthOf(1);
        expect(sent[0].event.events).to.have.lengthOf(1);
    });

    it('onStateChange does not re-push when the events are unchanged (no refresh loop)', function () {
        const { mod } = makeModule(JSON.stringify(EVENTS));
        const sent: any[] = [];
        const ws: any = {
            send: (d: string) => sent.push(JSON.parse(d)),
            readyState: 1,
            __calendarSubs: [{ id: 9, getId: 'cal.0.abfall', start: T0, end: T0 + DAY, lastSent: '' }],
        };
        // First change differs from the (empty) lastSent -> one push.
        mod.onStateChange('cal.0.abfall', { val: JSON.stringify(EVENTS) }, { clients: [ws] });
        // Source rewrites identical data -> must not push again.
        mod.onStateChange('cal.0.abfall', { val: JSON.stringify(EVENTS) }, { clients: [ws] });
        mod.onStateChange('cal.0.abfall', { val: JSON.stringify(EVENTS) }, { clients: [ws] });
        expect(sent).to.have.lengthOf(1);
    });

    it('onStateChange pushes again when the events really change', function () {
        const { mod } = makeModule(JSON.stringify(EVENTS));
        const sent: any[] = [];
        const ws: any = {
            send: (d: string) => sent.push(JSON.parse(d)),
            readyState: 1,
            __calendarSubs: [{ id: 9, getId: 'cal.0.abfall', start: T0, end: T0 + DAY, lastSent: '' }],
        };
        mod.onStateChange('cal.0.abfall', { val: JSON.stringify(EVENTS) }, { clients: [ws] });
        mod.onStateChange('cal.0.abfall', { val: JSON.stringify([]) }, { clients: [ws] });
        expect(sent).to.have.lengthOf(2);
        expect(sent[1].event.events).to.have.lengthOf(0);
    });

    it('re-subscribing the same calendar window replaces the previous subscription', async function () {
        const { mod } = makeModule(JSON.stringify(EVENTS));
        const ws: any = { send: () => {}, readyState: 1 };
        const base = {
            type: 'calendar/event/subscribe',
            entity_id: 'calendar.abfall',
            start: '2026-06-13T00:00:00.000Z',
            end: '2026-06-14T00:00:00.000Z',
        };
        await mod.processMessage(ws, { ...base, id: 1 });
        await mod.processMessage(ws, { ...base, id: 2 });
        expect(ws.__calendarSubs).to.have.lengthOf(1);
        expect(ws.__calendarSubs[0].id).to.equal(2);
    });

    it('removeSubscription drops the sub; ignores foreign messages', async function () {
        const { mod } = makeModule(JSON.stringify(EVENTS));
        const ws: any = { __calendarSubs: [{ id: 9, getId: 'cal.0.abfall', start: T0, end: T0 + DAY }] };
        mod.removeSubscription(ws, 9);
        expect(ws.__calendarSubs).to.have.lengthOf(0);
        expect(await mod.processMessage({ send: () => {} }, { type: 'other', id: 1 })).to.equal(false);
    });
});
