import { expect } from 'chai';
import sinon from 'sinon';
import { Types } from '@iobroker/type-detector';
import type { PatternControl } from '@iobroker/type-detector';
import { CoverEntity } from '../entities/coverEntity';
import type { ConverterParameters } from './converter';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');

const DEVICE_ID = 'test.cover_device';
const SET_ID = `${DEVICE_ID}.set`;
const OPEN_ID = `${DEVICE_ID}.open`;
const CLOSE_ID = `${DEVICE_ID}.close`;
const STOP_ID = `${DEVICE_ID}.stop`;

function makeObj(id: string, common: Record<string, unknown> = {}): ioBroker.Object {
    return {
        _id: id,
        type: 'state',
        common: { name: id, role: '', read: true, write: true, type: 'number', ...common },
        native: {},
    } as unknown as ioBroker.Object;
}

function makeParameters(
    states: Array<{ id?: string; name: string }>,
    objCommon: Record<string, Record<string, unknown>> = {},
    overrides: Partial<ConverterParameters> = {},
): ConverterParameters {
    const objects: Record<string, ioBroker.Object> = { [DEVICE_ID]: makeObj(DEVICE_ID) };
    for (const s of states) {
        if (s.id) {
            objects[s.id] = makeObj(s.id, objCommon[s.id] ?? {});
        }
    }
    return {
        id: DEVICE_ID,
        controls: { states, type: Types.blind } as unknown as PatternControl,
        friendlyName: 'Test Cover',
        room: undefined,
        func: undefined,
        objects,
        existingEntities: [],
        adapter: { log: { debug: () => {}, warn: () => {} } } as unknown as ioBroker.Adapter,
        entityRegistry: { getEntityId: () => undefined, storeEntityId: () => {} },
        ...overrides,
    };
}

describe('converters/cover', function () {
    before(function () {
        // Ensure dataSingleton has adapter.config and a full log object.
        // These must be set in a before() hook (not at module level) because other
        // test files that load after this one may overwrite entityData.log with a
        // partial stub that lacks debug().
        entityData.adapter = entityData.adapter || {};
        entityData.adapter.config = entityData.adapter.config || {};
        entityData.log = { debug: () => {}, warn: () => {}, error: () => {}, info: () => {}, silly: () => {} };
    });

    describe('CoverEntity.build — no states', function () {
        it('returns one entity when no SET state', function () {
            const params = makeParameters([]);
            const entities = CoverEntity.build(params);
            expect(entities).to.have.lengthOf(1);
        });

        it('entity_id starts with cover.', function () {
            const params = makeParameters([]);
            const entities = CoverEntity.build(params);
            expect(entities[0].entity_id).to.match(/^cover\./);
        });

        it('STATE.setId is null when no SET state', function () {
            const params = makeParameters([]);
            const entities = CoverEntity.build(params);
            expect(entities[0].context.STATE.setId).to.be.null;
        });

        it('STATE.getId is null when no SET state', function () {
            const params = makeParameters([]);
            const entities = CoverEntity.build(params);
            expect(entities[0].context.STATE.getId).to.be.null;
        });

        it('COMMANDS has fallback open_cover command', function () {
            const params = makeParameters([]);
            const entities = CoverEntity.build(params);
            const services = entities[0].context.COMMANDS.map(c => c.service);
            expect(services).to.include('open_cover');
        });

        it('COMMANDS has fallback close_cover command', function () {
            const params = makeParameters([]);
            const entities = CoverEntity.build(params);
            const services = entities[0].context.COMMANDS.map(c => c.service);
            expect(services).to.include('close_cover');
        });
    });

    describe('CoverEntity.build — with SET state', function () {
        it('returns one entity when SET state present', function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }]);
            const entities = CoverEntity.build(params);
            expect(entities).to.have.lengthOf(1);
        });

        it('first entity is cover domain', function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }]);
            const entities = CoverEntity.build(params);
            expect(entities[0].entity_id).to.match(/^cover\./);
        });

        it('STATE.setId equals SET state id', function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }]);
            const entities = CoverEntity.build(params);
            expect(entities[0].context.STATE.setId).to.equal(SET_ID);
        });

        it('COMMANDS has set_cover_position', function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }]);
            const entities = CoverEntity.build(params);
            const services = entities[0].context.COMMANDS.map(c => c.service);
            expect(services).to.include('set_cover_position');
        });

        it('supported_features has bit 4 (position support)', function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }]);
            const entities = CoverEntity.build(params);
            const sf = entities[0].attributes.supported_features as number;
            expect(sf & 4).to.equal(4);
        });

        it('SET_ID is registered in entity iobIds', function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }]);
            const entities = CoverEntity.build(params);
            expect(entities[0].iobIds).to.include(SET_ID);
        });
    });

    describe('CoverEntity.build — with OPEN state', function () {
        it('supported_features has bit 1 (open support)', function () {
            const params = makeParameters([{ id: OPEN_ID, name: 'OPEN' }]);
            const entities = CoverEntity.build(params);
            const sf = entities[0].attributes.supported_features as number;
            expect(sf & 1).to.equal(1);
        });

        it('COMMANDS has open_cover with OPEN state id', function () {
            const params = makeParameters([{ id: OPEN_ID, name: 'OPEN' }]);
            const entities = CoverEntity.build(params);
            const openCmd = entities[0].context.COMMANDS.find(c => c.service === 'open_cover');
            expect(openCmd).to.exist;
            expect(openCmd!.setId).to.equal(OPEN_ID);
        });
    });

    describe('CoverEntity.build — with CLOSE state', function () {
        it('supported_features has bit 2 (close support)', function () {
            const params = makeParameters([{ id: CLOSE_ID, name: 'CLOSE' }]);
            const entities = CoverEntity.build(params);
            const sf = entities[0].attributes.supported_features as number;
            expect(sf & 2).to.equal(2);
        });

        it('COMMANDS has close_cover with CLOSE state id', function () {
            const params = makeParameters([{ id: CLOSE_ID, name: 'CLOSE' }]);
            const entities = CoverEntity.build(params);
            const closeCmd = entities[0].context.COMMANDS.find(c => c.service === 'close_cover');
            expect(closeCmd).to.exist;
            expect(closeCmd!.setId).to.equal(CLOSE_ID);
        });
    });

    describe('CoverEntity.build — with STOP state', function () {
        it('supported_features has bit 8 (stop support)', function () {
            const params = makeParameters([{ id: STOP_ID, name: 'STOP' }]);
            const entities = CoverEntity.build(params);
            const sf = entities[0].attributes.supported_features as number;
            expect(sf & 8).to.equal(8);
        });

        it('COMMANDS has stop_cover with STOP state id', function () {
            const params = makeParameters([{ id: STOP_ID, name: 'STOP' }]);
            const entities = CoverEntity.build(params);
            const stopCmd = entities[0].context.COMMANDS.find(c => c.service === 'stop_cover');
            expect(stopCmd).to.exist;
            expect(stopCmd!.setId).to.equal(STOP_ID);
        });
    });

    describe('parseCommand — set_cover_position', function () {
        let setForeignState: sinon.SinonStub;

        beforeEach(function () {
            setForeignState = sinon.stub().callsArgWith(4, null);
            entityData.adapter.setForeignState = setForeignState;
        });

        afterEach(function () {
            sinon.restore();
        });

        it('position=50 → writes 50 to SET_ID', async function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }], { [SET_ID]: { min: 0, max: 100 } });
            const entity = CoverEntity.build(params)[0];
            const cmd = entity.context.COMMANDS.find(c => c.service === 'set_cover_position')!;
            await cmd.parseCommand!(
                entity,
                cmd,
                { id: 1, service: 'set_cover_position', service_data: { position: 50 } },
                'user',
            );
            expect(setForeignState.calledWith(SET_ID, 50, false, { user: 'user' })).to.be.true;
        });

        it('position=100 → writes max (100) to SET_ID', async function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }], { [SET_ID]: { min: 0, max: 100 } });
            const entity = CoverEntity.build(params)[0];
            const cmd = entity.context.COMMANDS.find(c => c.service === 'set_cover_position')!;
            await cmd.parseCommand!(
                entity,
                cmd,
                { id: 1, service: 'set_cover_position', service_data: { position: 100 } },
                'user',
            );
            expect(setForeignState.calledWith(SET_ID, 100, false, { user: 'user' })).to.be.true;
        });

        it('position=25 with custom max=200 → writes 50', async function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }], { [SET_ID]: { min: 0, max: 200 } });
            const entity = CoverEntity.build(params)[0];
            const cmd = entity.context.COMMANDS.find(c => c.service === 'set_cover_position')!;
            await cmd.parseCommand!(
                entity,
                cmd,
                { id: 1, service: 'set_cover_position', service_data: { position: 25 } },
                'user',
            );
            expect(setForeignState.calledWith(SET_ID, 50, false, { user: 'user' })).to.be.true;
        });
    });

    describe('parseCommand — open_cover / close_cover fallback (SET only)', function () {
        let setForeignState: sinon.SinonStub;

        beforeEach(function () {
            setForeignState = sinon.stub().callsArgWith(4, null);
            entityData.adapter.setForeignState = setForeignState;
        });

        afterEach(function () {
            sinon.restore();
        });

        it('open_cover writes max (100) to SET_ID', async function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }], { [SET_ID]: { min: 0, max: 100 } });
            const entity = CoverEntity.build(params)[0];
            const cmd = entity.context.COMMANDS.find(c => c.service === 'open_cover')!;
            await cmd.parseCommand!(entity, cmd, { id: 1, service: 'open_cover', service_data: {} }, 'user');
            expect(setForeignState.calledWith(SET_ID, 100, false, { user: 'user' })).to.be.true;
        });

        it('open_cover sets entity.state to "opening"', async function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }], { [SET_ID]: { min: 0, max: 100 } });
            const entity = CoverEntity.build(params)[0];
            const cmd = entity.context.COMMANDS.find(c => c.service === 'open_cover')!;
            await cmd.parseCommand!(entity, cmd, { id: 1, service: 'open_cover', service_data: {} }, 'user');
            expect(entity.state).to.equal('opening');
        });

        it('close_cover writes min (0) to SET_ID', async function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }], { [SET_ID]: { min: 0, max: 100 } });
            const entity = CoverEntity.build(params)[0];
            const cmd = entity.context.COMMANDS.find(c => c.service === 'close_cover')!;
            await cmd.parseCommand!(entity, cmd, { id: 1, service: 'close_cover', service_data: {} }, 'user');
            expect(setForeignState.calledWith(SET_ID, 0, false, { user: 'user' })).to.be.true;
        });

        it('close_cover sets entity.state to "closing"', async function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }], { [SET_ID]: { min: 0, max: 100 } });
            const entity = CoverEntity.build(params)[0];
            const cmd = entity.context.COMMANDS.find(c => c.service === 'close_cover')!;
            await cmd.parseCommand!(entity, cmd, { id: 1, service: 'close_cover', service_data: {} }, 'user');
            expect(entity.state).to.equal('closing');
        });
    });

    describe('parseCommand — open_cover / close_cover with dedicated OPEN/CLOSE states', function () {
        let setForeignState: sinon.SinonStub;

        beforeEach(function () {
            setForeignState = sinon.stub().callsArgWith(4, null);
            entityData.adapter.setForeignState = setForeignState;
        });

        afterEach(function () {
            sinon.restore();
        });

        it('open_cover writes true to OPEN_ID', async function () {
            const params = makeParameters([{ id: OPEN_ID, name: 'OPEN' }]);
            const entity = CoverEntity.build(params)[0];
            const cmd = entity.context.COMMANDS.find(c => c.service === 'open_cover')!;
            await cmd.parseCommand!(entity, cmd, { id: 1, service: 'open_cover', service_data: {} }, 'user');
            expect(setForeignState.calledWith(OPEN_ID, true, false, { user: 'user' })).to.be.true;
        });

        it('close_cover writes true to CLOSE_ID', async function () {
            const params = makeParameters([{ id: CLOSE_ID, name: 'CLOSE' }]);
            const entity = CoverEntity.build(params)[0];
            const cmd = entity.context.COMMANDS.find(c => c.service === 'close_cover')!;
            await cmd.parseCommand!(entity, cmd, { id: 1, service: 'close_cover', service_data: {} }, 'user');
            expect(setForeignState.calledWith(CLOSE_ID, true, false, { user: 'user' })).to.be.true;
        });

        it('stop_cover writes true to STOP_ID', async function () {
            const params = makeParameters([{ id: STOP_ID, name: 'STOP' }]);
            const entity = CoverEntity.build(params)[0];
            const cmd = entity.context.COMMANDS.find(c => c.service === 'stop_cover')!;
            await cmd.parseCommand!(entity, cmd, { id: 1, service: 'stop_cover', service_data: {} }, 'user');
            expect(setForeignState.calledWith(STOP_ID, true, false, { user: 'user' })).to.be.true;
        });
    });

    describe('getParser (position)', function () {
        it('STATE.getParser is a function when SET state is present', function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }], { [SET_ID]: { min: 0, max: 100 } });
            const entities = CoverEntity.build(params);
            expect(entities[0].context.STATE.getParser).to.be.a('function');
        });

        it('getParser sets current_position and entity.state for mid-range value', function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }], { [SET_ID]: { min: 0, max: 100 } });
            const entities = CoverEntity.build(params);
            const entity = entities[0];
            const iobState: ioBroker.State = {
                val: 50,
                ts: Date.now(),
                ack: true,
                from: '',
                lc: Date.now(),
            };
            entity.context.STATE.getParser!(entity, 'state', iobState);
            expect(entity.state).to.equal('50');
            expect(entity.attributes.current_position).to.equal(50);
        });

        it('getParser sets state to "closed" when value equals min', function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }], { [SET_ID]: { min: 0, max: 100 } });
            const entities = CoverEntity.build(params);
            const entity = entities[0];
            const iobState: ioBroker.State = { val: 0, ts: Date.now(), ack: true, from: '', lc: Date.now() };
            entity.context.STATE.getParser!(entity, 'state', iobState);
            expect(entity.state).to.equal('closed');
        });

        it('getParser sets state to "open" when value equals max', function () {
            const params = makeParameters([{ id: SET_ID, name: 'SET' }], { [SET_ID]: { min: 0, max: 100 } });
            const entities = CoverEntity.build(params);
            const entity = entities[0];
            const iobState: ioBroker.State = { val: 100, ts: Date.now(), ack: true, from: '', lc: Date.now() };
            entity.context.STATE.getParser!(entity, 'state', iobState);
            expect(entity.state).to.equal('open');
        });
    });
});
