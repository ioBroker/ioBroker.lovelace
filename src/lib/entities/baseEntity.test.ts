import { expect } from 'chai';
import sinon from 'sinon';
import { BaseEntity } from './baseEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');

function makeObj(id: string, name = 'Test', write = false): ioBroker.Object {
    return {
        _id: id,
        type: 'state',
        common: { name, role: '', write },
        native: {},
    } as unknown as ioBroker.Object;
}

function makeEntity(id = 'sensor.test', iobId = 'test.0.device'): BaseEntity {
    const obj = makeObj(iobId);
    return new BaseEntity('Test', null, null, obj, 'sensor', id);
}

describe('BaseEntity', function () {
    beforeEach(function () {
        entityData.entities = [];
        entityData.iobID2entity = {};
        entityData.entityId2Entity = {};
        entityData.entityIconUrls = [];
        entityData.adapter.namespace = 'lovelace.0';
        entityData.log = { warn: sinon.spy(), error: () => {} };
    });

    // -------------------------------------------------------------------------
    // addID2entity
    // -------------------------------------------------------------------------
    describe('addID2entity', function () {
        it('adds a new id to iobIds', function () {
            const entity = makeEntity();
            entity.addID2entity('test.0.extra');
            expect(entity.iobIds).to.include('test.0.extra');
        });

        it('does not add duplicates', function () {
            const entity = makeEntity();
            const initialLength = entity.iobIds.length;
            entity.addID2entity(entity.iobIds[0]);
            expect(entity.iobIds).to.have.lengthOf(initialLength);
        });

        it('adds multiple distinct ids', function () {
            const entity = makeEntity();
            entity.addID2entity('test.0.extra1');
            entity.addID2entity('test.0.extra2');
            expect(entity.iobIds).to.include('test.0.extra1');
            expect(entity.iobIds).to.include('test.0.extra2');
        });
    });

    // -------------------------------------------------------------------------
    // fillFromStates
    // -------------------------------------------------------------------------
    describe('fillFromStates', function () {
        it('sets STATE.setId to states.state', function () {
            const entity = makeEntity();
            entity.fillFromStates({ state: 'test.0.state' });
            expect(entity.context.STATE.setId).to.equal('test.0.state');
        });

        it('sets STATE.getId to states.state when no stateRead', function () {
            const entity = makeEntity();
            entity.fillFromStates({ state: 'test.0.state' });
            expect(entity.context.STATE.getId).to.equal('test.0.state');
        });

        it('sets STATE.getId to stateRead when provided', function () {
            const entity = makeEntity();
            entity.fillFromStates({ state: 'test.0.state', stateRead: 'test.0.stateRead' });
            expect(entity.context.STATE.getId).to.equal('test.0.stateRead');
        });

        it('sets STATE.setId from state even when stateRead is also provided', function () {
            const entity = makeEntity();
            entity.fillFromStates({ state: 'test.0.state', stateRead: 'test.0.stateRead' });
            expect(entity.context.STATE.setId).to.equal('test.0.state');
        });

        it('creates an ATTRIBUTE entry for non-state keys', function () {
            const entity = makeEntity();
            entity.fillFromStates({ state: 'test.0.state', temperature: 'test.0.temp' });
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'temperature');
            expect(attr).to.exist;
            expect(attr!.getId).to.equal('test.0.temp');
        });

        it('registers the state id in iobIds', function () {
            const entity = makeEntity();
            entity.fillFromStates({ state: 'test.0.newState' });
            expect(entity.iobIds).to.include('test.0.newState');
        });

        it('registers attribute ids in iobIds', function () {
            const entity = makeEntity();
            entity.fillFromStates({ state: 'test.0.state', brightness: 'test.0.bright' });
            expect(entity.iobIds).to.include('test.0.bright');
        });

        it('does not create an ATTRIBUTE for stateRead key', function () {
            const entity = makeEntity();
            entity.fillFromStates({ state: 'test.0.state', stateRead: 'test.0.stateRead' });
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'stateRead');
            expect(attr).to.not.exist;
        });

        it('sets setId on attribute when ioBroker object is writable', function () {
            const entity = makeEntity();
            const objects = { 'test.0.temp': makeObj('test.0.temp', 'Temp', true) };
            entity.fillFromStates({ state: 'test.0.state', temperature: 'test.0.temp' }, objects);
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'temperature');
            expect(attr!.setId).to.equal('test.0.temp');
        });

        it('does not set setId on attribute when ioBroker object is not writable', function () {
            const entity = makeEntity();
            const objects = { 'test.0.temp': makeObj('test.0.temp', 'Temp', false) };
            entity.fillFromStates({ state: 'test.0.state', temperature: 'test.0.temp' }, objects);
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'temperature');
            expect(attr!.setId).to.be.undefined;
        });

        it('uses <key>Read for getAttribute getId when provided', function () {
            const entity = makeEntity();
            entity.fillFromStates({
                state: 'test.0.state',
                temperature: 'test.0.tempSet',
                temperatureRead: 'test.0.tempGet',
            });
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'temperature');
            expect(attr!.getId).to.equal('test.0.tempGet');
        });
    });

    // -------------------------------------------------------------------------
    // registerInCaches
    // -------------------------------------------------------------------------
    describe('registerInCaches', function () {
        it('adds entity to entityData.entities', function () {
            const entity = makeEntity('sensor.reg_test', 'test.0.reg');
            entity.registerInCaches();
            expect(entityData.entities).to.include(entity);
        });

        it('adds entity to entityData.entityId2Entity keyed by entity_id', function () {
            const entity = makeEntity('sensor.reg_test2', 'test.0.reg2');
            entity.registerInCaches();
            expect(entityData.entityId2Entity['sensor.reg_test2']).to.equal(entity);
        });

        it('adds entity to entityData.iobID2entity for each iobId', function () {
            const entity = makeEntity('sensor.reg_test3', 'test.0.reg3');
            entity.addID2entity('test.0.extra');
            entity.registerInCaches();
            expect(entityData.iobID2entity['test.0.reg3']).to.include(entity);
            expect(entityData.iobID2entity['test.0.extra']).to.include(entity);
        });

        it('logs a warning and overwrites on duplicate entity_id', function () {
            const entity1 = makeEntity('sensor.dup', 'test.0.dup1');
            const entity2 = makeEntity('sensor.dup', 'test.0.dup2');
            entity1.registerInCaches();
            entity2.registerInCaches();
            expect((entityData.log.warn as sinon.SinonSpy).calledOnce).to.be.true;
            expect(entityData.entityId2Entity['sensor.dup']).to.equal(entity2);
        });

        it('replaces the old entity in entities array on duplicate', function () {
            const entity1 = makeEntity('sensor.dup2', 'test.0.dup3');
            const entity2 = makeEntity('sensor.dup2', 'test.0.dup4');
            entity1.registerInCaches();
            entity2.registerInCaches();
            expect(entityData.entities).to.include(entity2);
            expect(entityData.entities).to.not.include(entity1);
        });
    });

    // -------------------------------------------------------------------------
    // unregister (no newId)
    // -------------------------------------------------------------------------
    describe('unregister() without newId', function () {
        it('removes entity from entityData.entities', function () {
            const entity = makeEntity('sensor.unreg', 'test.0.unreg');
            entity.registerInCaches();
            entity.unregister();
            expect(entityData.entities).to.not.include(entity);
        });

        it('removes entity from entityData.entityId2Entity', function () {
            const entity = makeEntity('sensor.unreg2', 'test.0.unreg2');
            entity.registerInCaches();
            entity.unregister();
            expect(entityData.entityId2Entity).to.not.have.property('sensor.unreg2');
        });

        it('removes entity from entityData.iobID2entity for each iobId', function () {
            const entity = makeEntity('sensor.unreg3', 'test.0.unreg3');
            entity.addID2entity('test.0.extra_unreg');
            entity.registerInCaches();
            entity.unregister();
            expect(entityData.iobID2entity['test.0.unreg3'] ?? []).to.not.include(entity);
            expect(entityData.iobID2entity['test.0.extra_unreg'] ?? []).to.not.include(entity);
        });

        it('removes entity_picture from entityIconUrls', function () {
            const entity = makeEntity('sensor.icon_unreg', 'test.0.icon_unreg');
            entity.attributes.entity_picture = '/adapter/test/0/img/icon.png';
            entityData.entityIconUrls.push('/adapter/test/0/img/icon.png');
            entity.registerInCaches();
            entity.unregister();
            expect(entityData.entityIconUrls).to.not.include('/adapter/test/0/img/icon.png');
        });

        it('does not remove entity_picture from entityIconUrls when entity has none', function () {
            const entity = makeEntity('sensor.noicon_unreg', 'test.0.noicon_unreg');
            entityData.entityIconUrls.push('/adapter/test/0/img/shared.png');
            entity.registerInCaches();
            entity.unregister();
            expect(entityData.entityIconUrls).to.include('/adapter/test/0/img/shared.png');
        });
    });

    // -------------------------------------------------------------------------
    // unregister(newId) — re-keying
    // -------------------------------------------------------------------------
    describe('unregister(newId)', function () {
        it('adds newId to entityData.entityId2Entity', function () {
            const entity = makeEntity('sensor.rekey', 'test.0.rekey');
            entity.registerInCaches();
            entity.unregister('sensor.rekey_new');
            expect(entityData.entityId2Entity['sensor.rekey_new']).to.equal(entity);
        });

        it('does not remove entity from entities array when newId is provided', function () {
            const entity = makeEntity('sensor.rekey2', 'test.0.rekey2');
            entity.registerInCaches();
            entity.unregister('sensor.rekey2_new');
            expect(entityData.entities).to.include(entity);
        });

        it('adds newId string into iobID2entity entries', function () {
            const entity = makeEntity('sensor.rekey3', 'test.0.rekey3');
            entity.registerInCaches();
            entity.unregister('sensor.rekey3_new');
            const entries = entityData.iobID2entity['test.0.rekey3'];
            expect(entries).to.include('sensor.rekey3_new' as unknown as BaseEntity);
        });

        it('removes old entity_id from iobID2entity entries when rekeying', function () {
            const entity = makeEntity('sensor.rekey4', 'test.0.rekey4');
            entity.registerInCaches();
            entity.unregister('sensor.rekey4_new');
            const entries = (entityData.iobID2entity['test.0.rekey4'] ?? []) as BaseEntity[];
            expect(entries).to.not.include(entity);
        });
    });

    // -------------------------------------------------------------------------
    // updateTimestamp
    // -------------------------------------------------------------------------
    describe('updateTimestamp', function () {
        it('sets state to "unknown" when state is null and isStateChange is true', function () {
            const entity = makeEntity();
            entity.state = 'on';
            entity.updateTimestamp(null, true);
            expect(entity.state).to.equal('unknown');
        });

        it('does not change state when state is null and isStateChange is false', function () {
            const entity = makeEntity();
            entity.state = 'on';
            entity.updateTimestamp(null, false);
            expect(entity.state).to.equal('on');
        });

        it('updates last_updated from state.ts', function () {
            const entity = makeEntity();
            const ts = Date.now() - 5000;
            const state = { ts, lc: ts, val: 'on', ack: true, from: '', q: 0 } as ioBroker.State;
            entity.updateTimestamp(state, true);
            expect(entity.last_updated).to.equal(ts);
        });

        it('updates last_changed when isStateChange is true', function () {
            const entity = makeEntity();
            const ts = Date.now() - 5000;
            const lc = Date.now() - 3000;
            const state = { ts, lc, val: 'on', ack: true, from: '', q: 0 } as ioBroker.State;
            entity.updateTimestamp(state, true);
            expect(entity.last_changed).to.equal(lc);
        });

        it('does not update last_changed when isStateChange is false', function () {
            const entity = makeEntity();
            entity.last_changed = 0;
            const ts = Date.now() - 5000;
            const lc = Date.now() - 3000;
            const state = { ts, lc, val: 'on', ack: true, from: '', q: 0 } as ioBroker.State;
            entity.updateTimestamp(state, false);
            expect(entity.last_changed).to.equal(0);
        });

        it('does not decrease last_updated if existing value is newer', function () {
            const entity = makeEntity();
            const futureTs = Date.now() + 10000;
            entity.last_updated = futureTs;
            const state = { ts: Date.now(), lc: Date.now(), val: 'on', ack: true, from: '', q: 0 } as ioBroker.State;
            entity.updateTimestamp(state, true);
            expect(entity.last_updated).to.equal(futureTs);
        });

        it('sets state to "unknown" but does not update last_changed if state was already "unknown"', function () {
            const entity = makeEntity();
            entity.state = 'unknown';
            entity.last_changed = 0;
            entity.updateTimestamp(null, true);
            expect(entity.state).to.equal('unknown');
            expect(entity.last_changed).to.equal(0);
        });

        it('replaces invalid state.ts with Date.now()', function () {
            const entity = makeEntity();
            const state = { ts: NaN, lc: NaN, val: 'on', ack: true, from: '', q: 0 } as unknown as ioBroker.State;
            entity.updateTimestamp(state, true);
            expect(entity.last_updated).to.be.greaterThan(0);
        });
    });
});
