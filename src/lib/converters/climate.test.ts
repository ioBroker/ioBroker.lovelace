import { expect } from 'chai';
import sinon from 'sinon';
import { Types } from '@iobroker/type-detector';
import type { PatternControl } from '@iobroker/type-detector';
import { ClimateConverter, supportedFlags } from './climate';
import type { ConverterParameters } from './converter';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');
entityData.adapter = entityData.adapter || {};
entityData.log = entityData.log || { warn: () => {}, error: () => {}, debug: () => {}, info: () => {} };

const DEVICE_ID = 'test.climate_device';
const POWER_ID = `${DEVICE_ID}.power`;
const BOOST_ID = `${DEVICE_ID}.boost`;
const PARTY_ID = `${DEVICE_ID}.party`;
const ECO_ID = `${DEVICE_ID}.eco`;

/**
 * A state value as the parsers get it.
 *
 * @param val - the ioBroker state value
 */
function state(val: ioBroker.StateValue): ioBroker.State {
    return { val, ts: Date.now(), lc: Date.now(), ack: true, from: '' };
}

function makeObj(id: string): ioBroker.Object {
    return {
        _id: id,
        type: 'state',
        common: { name: id, role: '', read: true, write: true, type: 'boolean' },
        native: {},
    } as unknown as ioBroker.Object;
}

function makeParameters(
    states: Array<{ id?: string; name: string }>,
    type: Types = Types.thermostat,
): ConverterParameters {
    const objects: Record<string, ioBroker.Object> = { [DEVICE_ID]: makeObj(DEVICE_ID) };
    for (const s of states) {
        if (s.id) {
            objects[s.id] = makeObj(s.id);
        }
    }
    return {
        id: DEVICE_ID,
        controls: { states, type } as unknown as PatternControl,
        friendlyName: 'Test Climate',
        room: undefined,
        func: undefined,
        objects,
        existingEntities: [],
        adapter: { log: { debug: () => {}, warn: () => {} } } as unknown as ioBroker.Adapter,
        entityRegistry: { getReservedEntityId: () => undefined, reserveEntityId: () => {} },
    };
}

describe('converters/climate', function () {
    describe('STATE.historyParser', function () {
        it('thermostat: raw true → heat, false → off', function () {
            const params = makeParameters([{ id: POWER_ID, name: 'POWER' }], Types.thermostat);
            const entity = ClimateConverter.convertEntities(params)[0];
            const hp = entity.context.STATE.historyParser!;
            expect(hp('', true)).to.equal('heat');
            expect(hp('', false)).to.equal('off');
        });

        it('airCondition: raw true → cool, false → off', function () {
            const params = makeParameters([{ id: POWER_ID, name: 'POWER' }], Types.airCondition);
            const entity = ClimateConverter.convertEntities(params)[0];
            const hp = entity.context.STATE.historyParser!;
            expect(hp('', true)).to.equal('cool');
            expect(hp('', false)).to.equal('off');
        });
    });
});

describe('converters/climate setpoint of type-detector 6', function () {
    it('takes SET_HEATING as the target temperature when there is no plain SET', function () {
        // A thermostat whose only setpoint carries the role level.temperature.heating is reported as
        // SET_HEATING since type-detector 6 - without this the thermostat had no target temperature.
        const params = makeParameters(
            [
                { id: `${DEVICE_ID}.set_heating`, name: 'SET_HEATING' },
                { id: `${DEVICE_ID}.actual`, name: 'ACTUAL' },
            ],
            Types.thermostat,
        );
        const entity = ClimateConverter.convertEntities(params)[0];

        const temperature = entity.context.ATTRIBUTES.find(a => a.attribute === 'temperature');
        expect(temperature?.getId).to.equal(`${DEVICE_ID}.set_heating`);
    });

    it('takes SET_COOLING for a device that only cools', function () {
        const params = makeParameters([{ id: `${DEVICE_ID}.set_cooling`, name: 'SET_COOLING' }], Types.airCondition);
        const entity = ClimateConverter.convertEntities(params)[0];

        const temperature = entity.context.ATTRIBUTES.find(a => a.attribute === 'temperature');
        expect(temperature?.getId).to.equal(`${DEVICE_ID}.set_cooling`);
    });

    it('keeps the plain SET of a device that has both', function () {
        const params = makeParameters(
            [
                { id: `${DEVICE_ID}.set`, name: 'SET' },
                { id: `${DEVICE_ID}.set_cooling`, name: 'SET_COOLING' },
            ],
            Types.thermostat,
        );
        const entity = ClimateConverter.convertEntities(params)[0];

        const temperature = entity.context.ATTRIBUTES.find(a => a.attribute === 'temperature');
        expect(temperature?.getId).to.equal(`${DEVICE_ID}.set`);
    });
});

describe('converters/climate presets', function () {
    function makePresetEntity(): ReturnType<typeof ClimateConverter.convertEntities>[0] {
        return ClimateConverter.convertEntities(
            makeParameters(
                [
                    { id: POWER_ID, name: 'POWER' },
                    { id: BOOST_ID, name: 'BOOST' },
                    { id: PARTY_ID, name: 'PARTY' },
                    { id: ECO_ID, name: 'ECO' },
                ],
                Types.thermostat,
            ),
        )[0];
    }

    it('offers every mapped preset switch as a preset mode', function () {
        const entity = makePresetEntity();
        expect(entity.attributes.preset_modes).to.deep.equal(['none', 'boost', 'party', 'eco']);
        expect(entity.attributes.preset_mode).to.equal('none');
        //ECO is a preset, it must not show up as an hvac mode (HA only knows a fixed set of those)
        expect(entity.attributes.hvac_modes).to.not.include('eco');
    });

    it('reports the switch that is on as the preset mode', function () {
        const entity = makePresetEntity();
        const eco = entity.context.ATTRIBUTES.find(a => a.attribute === 'eco')!;
        const boost = entity.context.ATTRIBUTES.find(a => a.attribute === 'boost')!;

        eco.getParser!(entity, eco, state(true));
        expect(entity.attributes.eco).to.equal('on');
        expect(entity.attributes.preset_mode).to.equal('eco');

        //boost wins over eco while both are on, and eco is back once boost goes off again
        boost.getParser!(entity, boost, state(true));
        expect(entity.attributes.preset_mode).to.equal('boost');
        boost.getParser!(entity, boost, state(false));
        expect(entity.attributes.preset_mode).to.equal('eco');

        eco.getParser!(entity, eco, state(false));
        expect(entity.attributes.preset_mode).to.equal('none');
        expect(eco.historyParser!('', true)).to.equal('eco');
        expect(eco.historyParser!('', false)).to.equal('none');
    });

    it('set_preset_mode switches the chosen preset on and the others off', async function () {
        const entity = makePresetEntity();
        const setForeignStateAsync = sinon.stub().resolves();
        entityData.adapter.setForeignStateAsync = setForeignStateAsync;
        const cmd = entity.context.COMMANDS.find(c => c.service === 'set_preset_mode')!;

        await cmd.parseCommand!(
            entity,
            cmd,
            { id: 1, service: 'set_preset_mode', service_data: { preset_mode: 'eco' } },
            'user',
        );
        expect(setForeignStateAsync.calledWith(ECO_ID, true, false, { user: 'user' })).to.be.true;
        expect(setForeignStateAsync.calledWith(BOOST_ID, false, false, { user: 'user' })).to.be.true;
        expect(setForeignStateAsync.calledWith(PARTY_ID, false, false, { user: 'user' })).to.be.true;

        setForeignStateAsync.resetHistory();
        await cmd.parseCommand!(
            entity,
            cmd,
            { id: 2, service: 'set_preset_mode', service_data: { preset_mode: 'none' } },
            'user',
        );
        expect(setForeignStateAsync.args.every(args => args[1] === false)).to.be.true;
        sinon.restore();
    });
});

describe('converters/climate ECO as a mode value', function () {
    const MODE_ID = `${DEVICE_ID}.mode`;
    //type-detector reports ECO as a value of an air conditioner's MODE state
    const MODE_STATES = { 0: 'AUTO', 3: 'COOL', 5: 'ECO', 8: 'OFF' };

    function makeModeEntity(): ReturnType<typeof ClimateConverter.convertEntities>[0] {
        const params = makeParameters([{ id: MODE_ID, name: 'MODE' }], Types.airCondition);
        (params.objects[MODE_ID].common as ioBroker.StateCommon).states = MODE_STATES;
        (params.objects[MODE_ID].common as ioBroker.StateCommon).type = 'number';
        return ClimateConverter.convertEntities(params)[0];
    }

    it('offers eco as a preset and keeps it out of the hvac modes', function () {
        const entity = makeModeEntity();
        expect(entity.attributes.hvac_modes).to.have.members(['auto', 'cool', 'off']);
        expect(entity.attributes.preset_modes).to.deep.equal(['none', 'eco']);
        expect(Number(entity.attributes.supported_features) & supportedFlags.CLIMATE_SUPPORT_PRESET_MODE).to.be.above(
            0,
        );
    });

    it('reports the eco preset and keeps the last real hvac mode', function () {
        const entity = makeModeEntity();
        const mode = entity.context.ATTRIBUTES.find(a => a.attribute === 'hvac_mode')!;

        mode.getParser!(entity, mode, state(0));
        expect(entity.attributes.hvac_mode).to.equal('auto');
        expect(entity.attributes.preset_mode).to.equal('none');

        mode.getParser!(entity, mode, state(5));
        expect(entity.attributes.preset_mode).to.equal('eco');
        //HA only knows a fixed set of hvac modes, so the last real one is kept
        expect(entity.attributes.hvac_mode).to.equal('auto');
        expect(entity.state).to.equal('auto');
        //a preset is no state of its own in a history graph
        expect(mode.historyParser!('', 5)).to.equal('cool');

        mode.getParser!(entity, mode, state(3));
        expect(entity.attributes.hvac_mode).to.equal('cool');
        expect(entity.attributes.preset_mode).to.equal('none');
    });

    it('set_preset_mode writes the mode value and switches back to the last real mode', async function () {
        const entity = makeModeEntity();
        const setForeignStateAsync = sinon.stub().resolves();
        entityData.adapter.setForeignStateAsync = setForeignStateAsync;
        const mode = entity.context.ATTRIBUTES.find(a => a.attribute === 'hvac_mode')!;
        const cmd = entity.context.COMMANDS.find(c => c.service === 'set_preset_mode')!;

        mode.getParser!(entity, mode, state(3));
        await cmd.parseCommand!(
            entity,
            cmd,
            { id: 1, service: 'set_preset_mode', service_data: { preset_mode: 'eco' } },
            'user',
        );
        expect(setForeignStateAsync.calledWith(MODE_ID, 5, false, { user: 'user' })).to.be.true;

        mode.getParser!(entity, mode, state(5));
        setForeignStateAsync.resetHistory();
        await cmd.parseCommand!(
            entity,
            cmd,
            { id: 2, service: 'set_preset_mode', service_data: { preset_mode: 'none' } },
            'user',
        );
        expect(setForeignStateAsync.calledWith(MODE_ID, 3, false, { user: 'user' })).to.be.true;
        sinon.restore();
    });
});
