import { expect } from 'chai';
import { Types } from '@iobroker/type-detector';
import type { PatternControl } from '@iobroker/type-detector';
import { ClimateConverter } from './climate';
import type { ConverterParameters } from './converter';

const DEVICE_ID = 'test.climate_device';
const POWER_ID = `${DEVICE_ID}.power`;

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
