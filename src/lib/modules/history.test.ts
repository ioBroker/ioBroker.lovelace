import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const HistoryModule = require('../modules/history');

function makeModule(entity: any): any {
    const adapter = {
        config: { history: 'history.0', historyMaxCount: 100 },
        log: { debug: () => {}, warn: () => {}, error: () => {} },
    };
    const entityData = {
        entityId2Entity: { [entity.entity_id]: entity },
        iobID2entity: { [entity.context.STATE.getId]: [entity] },
    };
    const personModule = { getUserIDFromName: () => '' };
    return new HistoryModule({ adapter, entityData, personModule });
}

function makeServer(sub: any): { server: any; sent: any[] } {
    const sent: any[] = [];
    const ws = {
        send: (data: string) => sent.push(JSON.parse(data)),
        readyState: 1,
        _subscribes: { history: [sub] },
    };
    return { server: { clients: new Set([ws]) }, sent };
}

describe('modules/history onStateChange live update', function () {
    const entity = {
        entity_id: 'device_tracker.phone',
        state: 'home',
        attributes: { latitude: 52.5, longitude: 13.4, friendly_name: 'Phone' },
        context: { STATE: { getId: 'tracker.0.phone.presence' }, ATTRIBUTES: [] },
    };

    it('includes attributes on the pushed point so the map widget does not crash (a.latitude)', function () {
        const mod = makeModule(entity);
        const sub = { entityIds: ['device_tracker.phone'], startTime: 0, id: 7 };
        const { server, sent } = makeServer(sub);

        mod.onStateChange('tracker.0.phone.presence', { val: 'not_home', ts: Date.now() }, server);

        expect(sent).to.have.lengthOf(1);
        const point = sent[0].event.states['device_tracker.phone'][0];
        // The bug emitted a point without `a` -> frontend `t.a.latitude` threw "t.a is undefined".
        expect(point.a).to.not.equal(undefined);
        expect(point.a.latitude).to.equal(52.5);
        expect(point.a.longitude).to.equal(13.4);
    });

    it('sends an empty attribute object when the subscription requested no attributes', function () {
        const mod = makeModule(entity);
        const sub = { entityIds: ['device_tracker.phone'], startTime: 0, id: 8, noAttributes: true };
        const { server, sent } = makeServer(sub);

        mod.onStateChange('tracker.0.phone.presence', { val: 'not_home', ts: Date.now() }, server);

        const point = sent[0].event.states['device_tracker.phone'][0];
        expect(point.a).to.deep.equal({});
    });
});

describe('modules/history deduplication', function () {
    function makeModuleWithHistory(entity: any, result: any[]): any {
        const adapter = {
            config: { history: 'history.0', historyMaxCount: 100 },
            log: { debug: () => {}, warn: () => {}, error: () => {} },
            sendToAsync: () => Promise.resolve({ result }),
        };
        const entityData = {
            entityId2Entity: { [entity.entity_id]: entity },
            iobID2entity: { [entity.context.STATE.getId]: [entity] },
        };
        return new HistoryModule({ adapter, entityData, personModule: { getUserIDFromName: () => '' } });
    }

    const entity = {
        entity_id: 'sensor.x',
        state: '5',
        attributes: {},
        context: { STATE: { getId: 'js.0.x', historyParser: (_i: string, v: unknown) => String(v) }, ATTRIBUTES: [] },
    };

    it('drops adjacent duplicate points (same state), keeping the first of each run', async function () {
        const mod = makeModuleWithHistory(entity, [
            { ts: 1000, val: 5 },
            { ts: 2000, val: 5 },
            { ts: 3000, val: 5 },
            { ts: 4000, val: 7 },
            { ts: 5000, val: 7 },
            { ts: 6000, val: 5 },
        ]);
        const sent: any[] = [];
        const ws: any = { send: (d: string) => sent.push(JSON.parse(d)), readyState: 1, _subscribes: {} };

        await mod.processMessage(ws, {
            type: 'history/history_during_period',
            entity_ids: ['sensor.x'],
            start_time: new Date(1000).toISOString(),
            no_attributes: true,
            id: 5,
        });

        // history_during_period is a one-shot command -> answered with a 'result' (see #722).
        const states = sent.find(m => m.type === 'result').result['sensor.x'];
        expect(states.map((s: any) => s.s)).to.deep.equal(['5', '7', '5']);
    });
});

describe('modules/history response type per request kind', function () {
    function makeModule(entity: any, result: any[]): any {
        const adapter = {
            config: { history: 'history.0', historyMaxCount: 100 },
            log: { debug: () => {}, warn: () => {}, error: () => {} },
            sendToAsync: () => Promise.resolve({ result }),
        };
        const entityData = {
            entityId2Entity: { [entity.entity_id]: entity },
            iobID2entity: { [entity.context.STATE.getId]: [entity] },
        };
        return new HistoryModule({ adapter, entityData, personModule: { getUserIDFromName: () => '' } });
    }

    const entity = {
        entity_id: 'sensor.x',
        state: '5',
        attributes: {},
        context: { STATE: { getId: 'js.0.x', historyParser: (_i: string, v: unknown) => String(v) }, ATTRIBUTES: [] },
    };

    it('answers history_during_period (hass.callWS) with a result, not an event', async function () {
        // A one-shot callWS command has no `callback` in home-assistant-js-websocket; replying with
        // an `event` throws "TypeError: t.callback is not a function" in the frontend (#722).
        // Custom cards such as lovelace-windrose-card use this command.
        const mod = makeModule(entity, [{ ts: 1000, val: 5 }]);
        const sent: any[] = [];
        const ws: any = { send: (d: string) => sent.push(JSON.parse(d)), readyState: 1, _subscribes: {} };

        await mod.processMessage(ws, {
            type: 'history/history_during_period',
            entity_ids: ['sensor.x'],
            start_time: new Date(1000).toISOString(),
            no_attributes: true,
            id: 11,
        });

        expect(sent).to.have.lengthOf(1);
        expect(sent[0].type).to.equal('result');
        expect(sent[0].success).to.equal(true);
        expect(sent[0].id).to.equal(11);
        // result is the bare HistoryStates map (entity_id -> points), not wrapped in { states }.
        expect(sent[0].result['sensor.x'].map((s: any) => s.s)).to.deep.equal(['5']);
        expect(sent[0]).to.not.have.property('event');
    });

    it('still answers history/stream (subscription) with an ack plus event messages', async function () {
        const mod = makeModule(entity, [{ ts: 1000, val: 5 }]);
        const sent: any[] = [];
        const ws: any = { send: (d: string) => sent.push(JSON.parse(d)), readyState: 1, _subscribes: {} };

        await mod.processMessage(ws, {
            type: 'history/stream',
            entity_ids: ['sensor.x'],
            start_time: new Date(1000).toISOString(),
            no_attributes: true,
            id: 12,
        });

        expect(sent[0]).to.include({ id: 12, type: 'result', success: true });
        const event = sent.find(m => m.type === 'event');
        expect(event, 'no event sent for the subscription').to.not.equal(undefined);
        expect(event.event.states['sensor.x'].map((s: any) => s.s)).to.deep.equal(['5']);
    });

    it('answers history_during_period with a result even when no history instance is configured', async function () {
        const mod = makeModule(entity, []);
        mod.adapter.config.history = '';
        const sent: any[] = [];
        const ws: any = { send: (d: string) => sent.push(JSON.parse(d)), readyState: 1, _subscribes: {} };

        await mod.processMessage(ws, {
            type: 'history/history_during_period',
            entity_ids: ['sensor.x'],
            start_time: new Date(1000).toISOString(),
            id: 13,
        });

        expect(sent[0].type).to.equal('result');
        expect(sent[0].success).to.equal(true);
        expect(sent[0].result).to.deep.equal({ 'sensor.x': [] });
    });
});
