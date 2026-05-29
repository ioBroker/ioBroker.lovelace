import { expect } from 'chai';
import { Types } from '@iobroker/type-detector';
import type { PatternControl } from '@iobroker/type-detector';
import { LockEntity } from '../entities/lockEntity';
import type { ConverterParameters } from './converter';

const DEVICE_ID = 'test.lock_device';
const SET_ID = `${DEVICE_ID}.set`;
const ACTUAL_ID = `${DEVICE_ID}.actual`;
const OPEN_ID = `${DEVICE_ID}.open`;

function makeObj(id: string, name = 'Test Device'): ioBroker.Object {
    return { _id: id, type: 'device', common: { name, role: '' }, native: {} };
}

function makeParameters(
    states: Array<{ id?: string; name: string }>,
    type: Types = Types.lock,
    overrides: Partial<ConverterParameters> = {},
): ConverterParameters {
    const objects: Record<string, ioBroker.Object> = { [DEVICE_ID]: makeObj(DEVICE_ID, 'Some Lock') };
    for (const s of states) {
        if (s.id) {
            objects[s.id] = makeObj(s.id, s.name);
        }
    }
    return {
        id: DEVICE_ID,
        controls: { states, type } as unknown as PatternControl,
        friendlyName: undefined,
        room: undefined,
        func: undefined,
        objects,
        existingEntities: [],
        adapter: { log: { debug: () => {}, warn: () => {} } } as unknown as ioBroker.Adapter,
        entityRegistry: { getEntityId: () => undefined, storeEntityId: () => {} },
        ...overrides,
    };
}

describe('converters/lock', function () {
    it('with SET state: context.STATE.setId and getId both equal SET id', function () {
        const params = makeParameters([{ id: SET_ID, name: 'SET' }]);
        const entity = new LockEntity(params);

        expect(entity.context.STATE.setId).to.equal(SET_ID);
        expect(entity.context.STATE.getId).to.equal(SET_ID);
    });

    it('with SET state: iobIds includes SET id', function () {
        const params = makeParameters([{ id: SET_ID, name: 'SET' }]);
        const entity = new LockEntity(params);

        expect(entity.iobIds).to.include(SET_ID);
    });

    it('entity_id starts with lock domain', function () {
        const params = makeParameters([{ id: SET_ID, name: 'SET' }]);
        const entity = new LockEntity(params);

        expect(entity.entity_id).to.match(/^lock\./);
    });

    it('with SET + ACTUAL: getId is overridden to ACTUAL id, setId stays SET id', function () {
        const params = makeParameters([
            { id: SET_ID, name: 'SET' },
            { id: ACTUAL_ID, name: 'ACTUAL' },
        ]);
        const entity = new LockEntity(params);

        expect(entity.context.STATE.setId).to.equal(SET_ID);
        expect(entity.context.STATE.getId).to.equal(ACTUAL_ID);
    });

    it('with SET + ACTUAL: iobIds includes both SET and ACTUAL ids', function () {
        const params = makeParameters([
            { id: SET_ID, name: 'SET' },
            { id: ACTUAL_ID, name: 'ACTUAL' },
        ]);
        const entity = new LockEntity(params);

        expect(entity.iobIds).to.include(SET_ID);
        expect(entity.iobIds).to.include(ACTUAL_ID);
    });

    it('with OPEN: supported_features === 1', function () {
        const params = makeParameters([
            { id: SET_ID, name: 'SET' },
            { id: OPEN_ID, name: 'OPEN' },
        ]);
        const entity = new LockEntity(params);

        expect(entity.attributes.supported_features).to.equal(1);
    });

    it('with OPEN: COMMANDS has one entry with service === "open"', function () {
        const params = makeParameters([
            { id: SET_ID, name: 'SET' },
            { id: OPEN_ID, name: 'OPEN' },
        ]);
        const entity = new LockEntity(params);

        expect(entity.context.COMMANDS).to.have.lengthOf(1);
        expect(entity.context.COMMANDS[0].service).to.equal('open');
    });

    it('with OPEN: COMMANDS[0].setId equals OPEN id', function () {
        const params = makeParameters([
            { id: SET_ID, name: 'SET' },
            { id: OPEN_ID, name: 'OPEN' },
        ]);
        const entity = new LockEntity(params);

        expect(entity.context.COMMANDS[0].setId).to.equal(OPEN_ID);
    });

    it('without OPEN: COMMANDS is empty', function () {
        const params = makeParameters([{ id: SET_ID, name: 'SET' }]);
        const entity = new LockEntity(params);

        expect(entity.context.COMMANDS).to.be.empty;
    });

    it('without any states: STATE.setId and getId are null', function () {
        const params = makeParameters([]);
        const entity = new LockEntity(params);

        expect(entity.context.STATE.setId).to.be.null;
        expect(entity.context.STATE.getId).to.be.null;
    });

    it('without any states: no COMMANDS', function () {
        const params = makeParameters([]);
        const entity = new LockEntity(params);

        expect(entity.context.COMMANDS).to.be.empty;
    });
});
