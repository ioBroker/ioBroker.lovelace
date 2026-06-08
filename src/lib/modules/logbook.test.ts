import { expect } from 'chai';
import * as sinon from 'sinon';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const LogbookModule = require('../modules/logbook');

function makeModule(): { mod: any; sendToAsync: sinon.SinonStub } {
    const sendToAsync = sinon.stub().resolves({ result: [] });
    const adapter = {
        config: { history: 'history.0', historyMaxCount: 100 },
        log: { debug: () => {}, warn: () => {}, error: () => {} },
        getObjectView: (_d: string, _t: string, _p: unknown, cb: (e: unknown, r: unknown) => void) =>
            cb(null, { rows: [] }),
        sendToAsync,
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
