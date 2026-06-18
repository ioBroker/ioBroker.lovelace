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
