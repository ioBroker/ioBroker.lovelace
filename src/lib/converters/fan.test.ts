import { expect } from 'chai';
import sinon from 'sinon';
import { processManualEntity } from './fan';
import { BaseEntity } from '../entities/baseEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');
entityData.adapter = entityData.adapter || {};
entityData.adapter.namespace = 'lovelace.0';
entityData.log = { warn: () => {}, error: () => {}, debug: () => {} };

const DEVICE_ID = 'test.fan';
const PRESET_ID = `${DEVICE_ID}.preset_mode`;
const STATE_ID = `${DEVICE_ID}.power`;

const DEFAULT_STATES = { 0: 'off', 1: 'low', 2: 'medium', 3: 'high' };

function makeObj(id: string, states: Record<string | number, string> = DEFAULT_STATES): ioBroker.Object {
    return {
        _id: id,
        type: 'state',
        common: { name: id, role: '', type: 'number', write: true, read: true, states },
        native: {},
    } as unknown as ioBroker.Object;
}

function makeDeviceObj(id: string): ioBroker.Object {
    return { _id: id, type: 'device', common: { name: id, role: '' }, native: {} } as unknown as ioBroker.Object;
}

function makeEntity(): BaseEntity {
    return new BaseEntity(null, null, null, makeDeviceObj(DEVICE_ID), 'fan', 'fan.test');
}

function makeObjects(): Record<string, ioBroker.Object> {
    return { [DEVICE_ID]: makeDeviceObj(DEVICE_ID), [PRESET_ID]: makeObj(PRESET_ID) };
}

function makeEntityWithFan(statesMap = DEFAULT_STATES): BaseEntity {
    const entity = makeEntity();
    const objects = { [DEVICE_ID]: makeDeviceObj(DEVICE_ID), [PRESET_ID]: makeObj(PRESET_ID, statesMap) };
    processManualEntity(DEVICE_ID, objects[DEVICE_ID], entity, objects, { states: { preset_mode: PRESET_ID } });
    return entity;
}

describe('converters/fan', function () {
    describe('processManualEntity — attribute setup', function () {
        it('builds map2lovelace from states object', function () {
            const entity = makeEntityWithFan();
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'preset_mode')!;
            expect(attr.map2lovelace).to.deep.equal(DEFAULT_STATES);
        });

        it('builds map2iob as inverse of map2lovelace', function () {
            const entity = makeEntityWithFan();
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'preset_mode')!;
            expect(attr.map2iob).to.deep.equal({ off: '0', low: '1', medium: '2', high: '3' });
        });

        it('builds preset_modes list', function () {
            const entity = makeEntityWithFan();
            expect(entity.attributes.preset_modes).to.deep.equal(['off', 'low', 'medium', 'high']);
        });

        it('registers set_speed, set_preset_mode, turn_off commands', function () {
            const entity = makeEntityWithFan();
            const services = entity.context.COMMANDS.map(c => c.service);
            expect(services).to.include('set_speed');
            expect(services).to.include('set_preset_mode');
            expect(services).to.include('turn_off');
        });

        it('set_speed and set_preset_mode use preset_mode state id as setId', function () {
            const entity = makeEntityWithFan();
            const setSpeed = entity.context.COMMANDS.find(c => c.service === 'set_speed')!;
            const setPreset = entity.context.COMMANDS.find(c => c.service === 'set_preset_mode')!;
            expect(setSpeed.setId).to.equal(PRESET_ID);
            expect(setPreset.setId).to.equal(PRESET_ID);
        });

        it('preset_mode registered in iobIds', function () {
            const entity = makeEntityWithFan();
            expect(entity.iobIds).to.include(PRESET_ID);
        });
    });

    describe('attr.getParser', function () {
        it('maps numeric iob value 2 → medium, state on', function () {
            const entity = makeEntityWithFan();
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'preset_mode')!;
            attr.getParser!(entity, attr, {
                val: 2,
                ts: Date.now(),
                ack: true,
                from: '',
                lc: Date.now(),
            } as ioBroker.State);
            expect(entity.attributes.preset_mode).to.equal('medium');
            expect(entity.attributes.speed).to.equal('medium');
            expect(entity.state).to.equal('on');
        });

        it('maps numeric iob value 0 → off, state off', function () {
            const entity = makeEntityWithFan();
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'preset_mode')!;
            attr.getParser!(entity, attr, {
                val: 0,
                ts: Date.now(),
                ack: true,
                from: '',
                lc: Date.now(),
            } as ioBroker.State);
            expect(entity.attributes.preset_mode).to.equal('off');
            expect(entity.state).to.equal('off');
        });

        it('maps numeric iob value 3 → high, state on', function () {
            const entity = makeEntityWithFan();
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'preset_mode')!;
            attr.getParser!(entity, attr, {
                val: 3,
                ts: Date.now(),
                ack: true,
                from: '',
                lc: Date.now(),
            } as ioBroker.State);
            expect(entity.attributes.preset_mode).to.equal('high');
            expect(entity.state).to.equal('on');
        });
    });

    describe('set_preset_mode command', function () {
        let setForeignStateAsync: sinon.SinonStub;

        beforeEach(function () {
            setForeignStateAsync = sinon.stub().resolves();
            entityData.adapter.setForeignStateAsync = setForeignStateAsync;
        });

        afterEach(function () {
            sinon.restore();
        });

        it('maps string "high" → numeric 3 and calls setForeignStateAsync', async function () {
            const entity = makeEntityWithFan();
            const cmd = entity.context.COMMANDS.find(c => c.service === 'set_preset_mode')!;
            await cmd.parseCommand!(
                entity,
                cmd,
                { id: 1, service: 'set_preset_mode', service_data: { preset_mode: 'high' } },
                'user',
            );
            expect(setForeignStateAsync.calledWith(PRESET_ID, 3, false, { user: 'user' })).to.be.true;
        });

        it('maps string "low" → numeric 1', async function () {
            const entity = makeEntityWithFan();
            const cmd = entity.context.COMMANDS.find(c => c.service === 'set_preset_mode')!;
            await cmd.parseCommand!(
                entity,
                cmd,
                { id: 1, service: 'set_preset_mode', service_data: { preset_mode: 'low' } },
                'user',
            );
            expect(setForeignStateAsync.calledWith(PRESET_ID, 1, false, { user: 'user' })).to.be.true;
        });

        it('accepts speed field as alias for preset_mode', async function () {
            const entity = makeEntityWithFan();
            const cmd = entity.context.COMMANDS.find(c => c.service === 'set_speed')!;
            await cmd.parseCommand!(
                entity,
                cmd,
                { id: 1, service: 'set_speed', service_data: { speed: 'medium' } },
                'user',
            );
            expect(setForeignStateAsync.calledWith(PRESET_ID, 2, false, { user: 'user' })).to.be.true;
        });
    });

    describe('turn_off command', function () {
        let setForeignStateAsync: sinon.SinonStub;

        beforeEach(function () {
            setForeignStateAsync = sinon.stub().resolves();
            entityData.adapter.setForeignStateAsync = setForeignStateAsync;
        });

        afterEach(function () {
            sinon.restore();
        });

        it('maps "off" → 0 and calls setForeignStateAsync on preset_mode', async function () {
            const entity = makeEntityWithFan();
            const cmd = entity.context.COMMANDS.find(c => c.service === 'turn_off')!;
            await cmd.parseCommand!(entity, cmd, { id: 1, service: 'turn_off', service_data: {} }, 'user');
            expect(setForeignStateAsync.calledWith(PRESET_ID, 0, false, { user: 'user' })).to.be.true;
        });

        it('also writes false to power state when state id provided', async function () {
            const entity = makeEntity();
            const objects = makeObjects();
            objects[STATE_ID] = makeObj(STATE_ID, {});
            processManualEntity(DEVICE_ID, objects[DEVICE_ID], entity, objects, {
                states: { preset_mode: PRESET_ID, state: STATE_ID },
            });
            const cmd = entity.context.COMMANDS.find(c => c.service === 'turn_off')!;
            await cmd.parseCommand!(entity, cmd, { id: 1, service: 'turn_off', service_data: {} }, 'user');
            expect(setForeignStateAsync.calledWith(STATE_ID, false, false, { user: 'user' })).to.be.true;
        });
    });
});
