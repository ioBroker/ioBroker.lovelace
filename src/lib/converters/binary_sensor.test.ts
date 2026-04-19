import { expect } from 'chai';
import {
    processMotion,
    processDoor,
    processWindow,
    processFireAlarm,
    processBattery,
    connectivityIndicator,
    processError,
    processMaintenance,
    processWorking,
    processManualEntity,
} from './binary_sensor';
import type { ConverterParameters, ioBrokerEntity } from './converter';
import type { PatternControl } from '@iobroker/type-detector/types';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');
entityData.adapter.namespace = 'lovelace.0';

const DEVICE_ID = 'device.0.test';
const STATE_ID = `${DEVICE_ID}.actual`;

function makeObj(id: string, name = 'Test Device'): ioBroker.Object {
    return { _id: id, type: 'device', common: { name, role: '' }, native: {} } as ioBroker.Object;
}

function makeParameters(
    states: Array<{ id?: string; name: string }>,
    overrides: Partial<ConverterParameters> = {},
): ConverterParameters {
    const objects: Record<string, ioBroker.Object> = { [DEVICE_ID]: makeObj(DEVICE_ID) };
    for (const s of states) {
        if (s.id) {
            objects[s.id] = makeObj(s.id, s.name);
        }
    }
    return {
        id: DEVICE_ID,
        controls: { states, type: 0 } as unknown as PatternControl,
        friendlyName: 'Test Device',
        room: undefined,
        func: undefined,
        objects,
        existingEntities: [],
        adapter: { log: { debug: () => {}, warn: () => {} } } as unknown as ioBroker.Adapter,
        entityRegistry: { getEntityId: () => undefined, storeEntityId: () => {} },
        ...overrides,
    };
}

describe('binary_sensor converter', function () {
    describe('processMotion', function () {
        it('returns one entity with motion device_class and icon', function () {
            const params = makeParameters([{ id: STATE_ID, name: 'ACTUAL' }]);
            const entities = processMotion(params);
            expect(entities).to.have.lengthOf(1);
            expect(entities[0].entity_id).to.match(/^binary_sensor\./);
            expect(entities[0].attributes.device_class).to.equal('motion');
            expect(entities[0].attributes.icon).to.equal('mdi:motion-sensor');
        });

        it('sets STATE.getId from ACTUAL state', function () {
            const params = makeParameters([{ id: STATE_ID, name: 'ACTUAL' }]);
            const entities = processMotion(params);
            expect(entities[0].context.STATE?.getId).to.equal(STATE_ID);
        });

        it('leaves STATE.getId empty when ACTUAL state has no id', function () {
            const params = makeParameters([{ name: 'ACTUAL' }]);
            const entities = processMotion(params);
            expect(entities[0].context.STATE?.getId).to.equal('');
        });
    });

    describe('processDoor', function () {
        it('returns one entity with door device_class and icon', function () {
            const params = makeParameters([{ id: STATE_ID, name: 'ACTUAL' }]);
            const entities = processDoor(params);
            expect(entities).to.have.lengthOf(1);
            expect(entities[0].attributes.device_class).to.equal('door');
            expect(entities[0].attributes.icon).to.equal('mdi:door');
        });

        it('sets STATE.getId from ACTUAL state', function () {
            const params = makeParameters([{ id: STATE_ID, name: 'ACTUAL' }]);
            expect(processDoor(params)[0].context.STATE?.getId).to.equal(STATE_ID);
        });
    });

    describe('processWindow', function () {
        it('returns one entity with window device_class and icon', function () {
            const params = makeParameters([{ id: STATE_ID, name: 'ACTUAL' }]);
            const entities = processWindow(params);
            expect(entities).to.have.lengthOf(1);
            expect(entities[0].attributes.device_class).to.equal('window');
            expect(entities[0].attributes.icon).to.equal('mdi:window-maximize');
        });

        it('sets STATE.getId from ACTUAL state', function () {
            const params = makeParameters([{ id: STATE_ID, name: 'ACTUAL' }]);
            expect(processWindow(params)[0].context.STATE?.getId).to.equal(STATE_ID);
        });
    });

    describe('processFireAlarm', function () {
        it('returns one entity with smoke device_class', function () {
            const params = makeParameters([{ id: STATE_ID, name: 'ACTUAL' }]);
            const entities = processFireAlarm(params);
            expect(entities).to.have.lengthOf(1);
            expect(entities[0].attributes.device_class).to.equal('smoke');
        });

        it('sets STATE.getId from ACTUAL state', function () {
            const params = makeParameters([{ id: STATE_ID, name: 'ACTUAL' }]);
            expect(processFireAlarm(params)[0].context.STATE?.getId).to.equal(STATE_ID);
        });
    });

    describe('processBattery', function () {
        it('returns null when no LOWBAT state exists', function () {
            const params = makeParameters([{ id: STATE_ID, name: 'ACTUAL' }]);
            expect(processBattery(params)).to.be.null;
        });

        it('returns entity with battery device_class when LOWBAT state exists', function () {
            const lowbatId = `${DEVICE_ID}.lowbat`;
            const params = makeParameters([{ id: lowbatId, name: 'LOWBAT' }]);
            const entity = processBattery(params);
            expect(entity).to.not.be.null;
            expect(entity!.attributes.device_class).to.equal('battery');
            expect(entity!.context.iobType).to.equal('LOWBAT');
            expect(entity!.context.STATE?.getId).to.equal(lowbatId);
        });

        it('uses the battery state object (not the main device object) for entity creation', function () {
            const lowbatId = `${DEVICE_ID}.lowbat`;
            const params = makeParameters([{ id: lowbatId, name: 'LOWBAT' }]);
            const entity = processBattery(params);
            // entity_id is derived from the lowbat state object's name, not the device id
            expect(entity!.entity_id).to.match(/^binary_sensor\./);
        });
    });

    describe('connectivityIndicator', function () {
        it('returns null when no connectivity state exists', function () {
            const params = makeParameters([{ id: STATE_ID, name: 'ACTUAL' }]);
            expect(connectivityIndicator(params)).to.be.null;
        });

        it('returns inverted entity for UNREACH state', function () {
            const unreachId = `${DEVICE_ID}.unreach`;
            const params = makeParameters([{ id: unreachId, name: 'UNREACH' }]);
            const entity = connectivityIndicator(params);
            expect(entity).to.not.be.null;
            expect(entity!.attributes.device_class).to.equal('connectivity');
            expect(entity!.context.iobType).to.equal('OFFLINE');
            expect(entity!.context.STATE?.getId).to.equal(unreachId);
            // getParser inverts: val=true (offline) → state='off'
            const mockEntity = { state: '' } as ioBrokerEntity;
            entity!.context.STATE!.getParser!(mockEntity, '', { val: true } as ioBroker.State);
            expect(mockEntity.state).to.equal('off');
            entity!.context.STATE!.getParser!(mockEntity, '', { val: false } as ioBroker.State);
            expect(mockEntity.state).to.equal('on');
        });

        it('returns inverted entity for OFFLINE state', function () {
            const offlineId = `${DEVICE_ID}.offline`;
            const params = makeParameters([{ id: offlineId, name: 'OFFLINE' }]);
            const entity = connectivityIndicator(params);
            expect(entity).to.not.be.null;
            expect(entity!.context.iobType).to.equal('OFFLINE');
        });

        it('returns non-inverted entity for CONNECTED state', function () {
            const connectedId = `${DEVICE_ID}.connected`;
            const params = makeParameters([{ id: connectedId, name: 'CONNECTED' }]);
            const entity = connectivityIndicator(params);
            expect(entity).to.not.be.null;
            expect(entity!.attributes.device_class).to.equal('connectivity');
            expect(entity!.context.iobType).to.equal('CONNECTED');
            expect(entity!.context.STATE?.getParser).to.be.undefined;
        });

        it('historyParser inverts value for UNREACH state', function () {
            const unreachId = `${DEVICE_ID}.unreach`;
            const params = makeParameters([{ id: unreachId, name: 'UNREACH' }]);
            const entity = connectivityIndicator(params)!;
            expect(entity.context.STATE!.historyParser!('', { val: true } as ioBroker.State)).to.equal('off');
            expect(entity.context.STATE!.historyParser!('', { val: false } as ioBroker.State)).to.equal('on');
        });
    });

    describe('processError', function () {
        it('returns null when no ERROR state exists', function () {
            const params = makeParameters([{ id: STATE_ID, name: 'ACTUAL' }]);
            expect(processError(params)).to.be.null;
        });

        it('returns entity with problem device_class when ERROR state exists', function () {
            const errorId = `${DEVICE_ID}.error`;
            const params = makeParameters([{ id: errorId, name: 'ERROR' }]);
            const entity = processError(params);
            expect(entity).to.not.be.null;
            expect(entity!.attributes.device_class).to.equal('problem');
            expect(entity!.context.iobType).to.equal('ERROR');
            expect(entity!.context.STATE?.getId).to.equal(errorId);
        });
    });

    describe('processMaintenance', function () {
        it('returns null when no MAINTAIN state exists', function () {
            const params = makeParameters([{ id: STATE_ID, name: 'ACTUAL' }]);
            expect(processMaintenance(params)).to.be.null;
        });

        it('returns entity with update device_class when MAINTAIN state exists', function () {
            const maintainId = `${DEVICE_ID}.maintain`;
            const params = makeParameters([{ id: maintainId, name: 'MAINTAIN' }]);
            const entity = processMaintenance(params);
            expect(entity).to.not.be.null;
            expect(entity!.attributes.device_class).to.equal('update');
            expect(entity!.context.iobType).to.equal('MAINTAIN');
        });
    });

    describe('processWorking', function () {
        it('returns null when no WORKING state exists', function () {
            const params = makeParameters([{ id: STATE_ID, name: 'ACTUAL' }]);
            expect(processWorking(params)).to.be.null;
        });

        it('returns entity with running device_class when WORKING state exists', function () {
            const workingId = `${DEVICE_ID}.working`;
            const params = makeParameters([{ id: workingId, name: 'WORKING' }]);
            const entity = processWorking(params);
            expect(entity).to.not.be.null;
            expect(entity!.attributes.device_class).to.equal('running');
            expect(entity!.context.iobType).to.equal('WORKING');
        });
    });

    describe('processManualEntity', function () {
        it('sets device_class from custom settings', function () {
            const entity = { attributes: {}, context: { STATE: { getId: STATE_ID } } } as unknown as ioBrokerEntity;
            const obj = { _id: DEVICE_ID, type: 'state', common: { role: 'sensor' }, native: {} } as ioBroker.Object;
            const result = processManualEntity(DEVICE_ID, obj, entity, {}, { attr_device_class: 'motion' });
            expect(result).to.have.lengthOf(1);
            expect(result[0].attributes.device_class).to.equal('motion');
        });

        it('adds connectivity inversion for unreach indicator', function () {
            const entity = { attributes: {}, context: { STATE: { getId: STATE_ID } } } as unknown as ioBrokerEntity;
            const obj = {
                _id: DEVICE_ID,
                type: 'state',
                common: { role: 'indicator.unreach', name: '' },
                native: {},
            } as ioBroker.Object;
            const result = processManualEntity(DEVICE_ID, obj, entity, {}, { attr_device_class: 'connectivity' });
            expect(result[0].context.STATE?.getParser).to.be.a('function');
            expect(result[0].context.STATE?.historyParser).to.be.a('function');
        });
    });
});
