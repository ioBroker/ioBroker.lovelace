import { expect } from 'chai';
import * as sinon from 'sinon';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const LogbookModule = require('../modules/logbook');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const singleton = require('../../../lib/dataSingleton');

function makeModule(): { mod: any; sendToAsync: sinon.SinonStub } {
    const sendToAsync = sinon.stub().resolves({ result: [] });
    const adapter = {
        config: { history: 'history.0', historyMaxCount: 100 },
        log: { debug: () => {}, warn: () => {}, error: () => {} },
        getObjectView: (_d: string, _t: string, _p: unknown, cb: (e: unknown, r: unknown) => void) =>
            cb(null, { rows: [] }),
        sendToAsync,
        setTimeout: (cb: (...a: unknown[]) => void, ms: number, ...args: unknown[]) => setTimeout(cb, ms, ...args),
        clearTimeout: (t: ReturnType<typeof setTimeout>) => clearTimeout(t),
    };
    const mod = new LogbookModule({ adapter, getUsedEntityIDs: () => [] });
    return { mod, sendToAsync };
}

function makeWs(): { ws: any; sent: any[] } {
    const sent: any[] = [];
    const ws = { send: (data: string) => sent.push(JSON.parse(data)), readyState: 1, _subscribes: {} };
    return { ws, sent };
}

describe('modules/logbook future/invalid requests', function () {
    it('answers a future window with an empty, completed stream and does not query history', async function () {
        const clock = sinon.useFakeTimers();
        try {
            const { mod, sendToAsync } = makeModule();
            const { ws, sent } = makeWs();
            const future = new Date(Date.now() + 86400000).toISOString();
            await mod.processMessage(ws, {
                id: 1,
                type: 'logbook/event_stream',
                start_time: future,
                end_time: new Date(Date.now() + 172800000).toISOString(),
            });
            clock.tick(400);

            expect(sendToAsync.called).to.equal(false);
            // ack + partial event + final (non-partial) event
            const events = sent.filter(m => m.type === 'event');
            expect(events.length).to.be.greaterThan(0);
            expect(events[events.length - 1].event.partial).to.equal(undefined);
            expect(events[events.length - 1].event.events).to.deep.equal([]);
        } finally {
            clock.restore();
        }
    });

    it('answers an invalid (unparseable) time range without querying history', async function () {
        const clock = sinon.useFakeTimers();
        try {
            const { mod, sendToAsync } = makeModule();
            const { ws, sent } = makeWs();
            await mod.processMessage(ws, {
                id: 2,
                type: 'logbook/event_stream',
                start_time: 'not-a-date',
                end_time: 'also-not-a-date',
            });
            clock.tick(400);

            expect(sendToAsync.called).to.equal(false);
            expect(sent.some(m => m.type === 'event')).to.equal(true);
        } finally {
            clock.restore();
        }
    });
});

describe('modules/logbook deduplication', function () {
    const NOW = 1_700_000_000_000;
    const entity = {
        entity_id: 'sensor.x',
        context: { STATE: { getId: 'js.0.x', historyParser: (_i: string, v: unknown) => String(v) } },
    };

    afterEach(function () {
        singleton.entityId2Entity = {};
    });

    it('drops consecutive duplicate states in the initial logbook result', async function () {
        const clock = sinon.useFakeTimers({ now: NOW });
        try {
            singleton.entityId2Entity = { 'sensor.x': entity };
            const { mod, sendToAsync } = makeModule();
            sendToAsync.resolves({
                result: [
                    { ts: NOW - 5000, val: 5 },
                    { ts: NOW - 4000, val: 5 },
                    { ts: NOW - 3000, val: 5 },
                    { ts: NOW - 2000, val: 7 },
                    { ts: NOW - 1000, val: 5 },
                ],
            });
            const { ws, sent } = makeWs();

            await mod.processMessage(ws, {
                id: 1,
                type: 'logbook/event_stream',
                entity_ids: ['sensor.x'],
                start_time: new Date(NOW - 3600000).toISOString(),
                end_time: new Date(NOW).toISOString(),
            });

            const partial = sent.find(m => m.type === 'event' && m.event.partial);
            expect(partial.event.events.map((e: any) => e.state)).to.deep.equal(['5', '7', '5']);
            clock.tick(400);
        } finally {
            clock.restore();
        }
    });

    it('skips a live state change that repeats the last shown state', async function () {
        const clock = sinon.useFakeTimers({ now: NOW });
        try {
            singleton.entityId2Entity = { 'sensor.x': entity };
            const { mod, sendToAsync } = makeModule();
            sendToAsync.resolves({ result: [{ ts: NOW - 1000, val: 5 }] });
            const { ws, sent } = makeWs();

            await mod.processMessage(ws, {
                id: 2,
                type: 'logbook/event_stream',
                entity_ids: ['sensor.x'],
                start_time: new Date(NOW - 3600000).toISOString(),
                end_time: new Date(NOW).toISOString(),
            });
            const before = sent.length;
            const server = { clients: new Set([ws]) };

            // Same value as last shown -> no new logbook event.
            mod.onStateChange('js.0.x', { val: 5, ts: NOW }, server);
            expect(sent.length).to.equal(before);

            // A real change -> one new logbook event.
            mod.onStateChange('js.0.x', { val: 8, ts: NOW + 1 }, server);
            expect(sent.length).to.equal(before + 1);
            expect(sent[sent.length - 1].event.events[0].state).to.equal('8');
            clock.tick(400);
        } finally {
            clock.restore();
        }
    });
});

describe('modules/logbook who caused a change', function () {
    const entity = { entity_id: 'sensor.x', context: { STATE: { getId: 'js.0.x' } } } as any;

    /**
     * The one entry of the last logbook message that was sent.
     *
     * @param sent - the messages the websocket received
     * @returns the single logbook entry of the last message
     */
    function entryOf(sent: any[]): any {
        return sent[sent.length - 1].event.events[0];
    }

    it('names the user of a change and the adapter that wrote it', function () {
        // Both go out and the frontend picks: the user through the user list, otherwise the
        // context_name as the integration behind the change (#751).
        const { mod } = makeModule();
        const { ws, sent } = makeWs();

        mod.sendLogbookResponse(ws, 1, undefined, undefined, [
            { entity, state: { val: 5, ts: 1000, from: 'system.adapter.lovelace.0', user: 'system.user.admin' } },
        ]);

        expect(entryOf(sent)).to.deep.equal({
            when: 1,
            state: '5',
            entity_id: 'sensor.x',
            context_user_id: 'system.user.admin',
            context_name: 'lovelace.0',
        });
    });

    it('names the adapter alone when no user is behind the change', function () {
        const { mod } = makeModule();
        const { ws, sent } = makeWs();

        mod.sendLogbookResponse(ws, 1, undefined, undefined, [
            { entity, state: { val: 5, ts: 1000, from: 'system.adapter.hm-rpc.0' } },
        ]);

        expect(entryOf(sent)).to.deep.equal({
            when: 1,
            state: '5',
            entity_id: 'sensor.x',
            context_name: 'hm-rpc.0',
        });
    });

    it('leaves out what it does not know', function () {
        const { mod } = makeModule();
        const { ws, sent } = makeWs();

        mod.sendLogbookResponse(ws, 1, undefined, undefined, [{ entity, state: { val: 5, ts: 1000 } }]);

        expect(entryOf(sent)).to.deep.equal({ when: 1, state: '5', entity_id: 'sensor.x' });
    });

    it('no longer answers the user list itself', async function () {
        const { mod } = makeModule();
        const { ws } = makeWs();
        expect(await mod.processMessage(ws, { type: 'config/auth/list', id: 3 })).to.equal(false);
    });
});
