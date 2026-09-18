import { expect } from 'chai';
import { Types } from '@iobroker/type-detector';
import {
    AirQualityConverter,
    ContactConverter,
    FanConverter,
    MeasurementConverter,
    PumpConverter,
} from './newDeviceTypes';
import type { ConverterParameters } from './converter';

const DEVICE_ID = 'test.device';

function makeObj(id: string, name = 'Test Device'): ioBroker.Object {
    return { _id: id, type: 'device', common: { name, role: '' }, native: {} };
}

function makeParameters(type: Types, states: { id: string; name: string }[]): ConverterParameters {
    const objects: Record<string, ioBroker.Object> = { [DEVICE_ID]: makeObj(DEVICE_ID, 'Living Room Device') };
    for (const s of states) {
        objects[s.id] = makeObj(s.id, s.name);
    }
    return {
        id: DEVICE_ID,
        controls: { states, type },
        friendlyName: 'Living Room Device',
        room: undefined,
        func: undefined,
        objects,
        existingEntities: [],
        adapter: { log: { debug: () => {}, warn: () => {} } } as unknown as ioBroker.Adapter,
        entityRegistry: { getReservedEntityId: () => undefined, reserveEntityId: () => {} },
    };
}

describe('converters/newDeviceTypes air quality', function () {
    it('creates one sensor per measured value, with the Home Assistant device classes', function () {
        const entities = AirQualityConverter.convertEntities(
            makeParameters(Types.airQuality, [
                { id: `${DEVICE_ID}.aqi`, name: 'AQI' },
                { id: `${DEVICE_ID}.co2`, name: 'CO2' },
                { id: `${DEVICE_ID}.pm25`, name: 'PM25' },
                { id: `${DEVICE_ID}.humidity`, name: 'HUMIDITY' },
            ]),
        );

        // Home Assistant has no entity for an air quality device as a whole any more.
        expect(entities.map(e => e.attributes.device_class)).to.deep.equal([
            'aqi',
            'carbon_dioxide',
            'pm25',
            'humidity',
        ]);
        expect(entities.every(e => e.entity_id.startsWith('sensor.'))).to.equal(true);
        expect(entities[1].attributes.unit_of_measurement).to.equal('ppm');
        expect(entities[1].context.STATE.getId).to.equal(`${DEVICE_ID}.co2`);
    });

    it('skips the values the device does not have', function () {
        const entities = AirQualityConverter.convertEntities(
            makeParameters(Types.airQuality, [{ id: `${DEVICE_ID}.aqi`, name: 'AQI' }]),
        );
        expect(entities).to.have.lengthOf(1);
    });
});

describe('converters/newDeviceTypes single measurements', function () {
    it('builds a pressure sensor', function () {
        const entities = MeasurementConverter.convertEntities(
            makeParameters(Types.pressure, [{ id: `${DEVICE_ID}.p`, name: 'PRESSURE' }]),
        );
        expect(entities).to.have.lengthOf(1);
        expect(entities[0].attributes.device_class).to.equal('pressure');
    });

    it('builds a flow sensor', function () {
        const entities = MeasurementConverter.convertEntities(
            makeParameters(Types.flow, [{ id: `${DEVICE_ID}.f`, name: 'FLOW' }]),
        );
        expect(entities[0].attributes.device_class).to.equal('volume_flow_rate');
    });
});

describe('converters/newDeviceTypes contact and CO alarm', function () {
    it('builds an opening contact', function () {
        const entities = ContactConverter.convertEntities(
            makeParameters(Types.contact, [{ id: `${DEVICE_ID}.c`, name: 'ACTUAL' }]),
        );
        expect(entities[0].entity_id.startsWith('binary_sensor.')).to.equal(true);
        expect(entities[0].attributes.device_class).to.equal('opening');
        expect(entities[0].context.STATE.getId).to.equal(`${DEVICE_ID}.c`);
    });

    it('builds a carbon monoxide alarm', function () {
        const entities = ContactConverter.convertEntities(
            makeParameters(Types.coAlarm, [{ id: `${DEVICE_ID}.co`, name: 'ACTUAL' }]),
        );
        expect(entities[0].attributes.device_class).to.equal('carbon_monoxide');
    });
});

describe('converters/newDeviceTypes fan', function () {
    it('builds a fan entity from the detected speed and power states', function () {
        const entities = FanConverter.convertEntities(
            makeParameters(Types.fan, [
                { id: `${DEVICE_ID}.speed`, name: 'SPEED' },
                { id: `${DEVICE_ID}.power`, name: 'POWER' },
                { id: `${DEVICE_ID}.swing`, name: 'SWING' },
            ]),
        );

        expect(entities).to.have.lengthOf(1);
        const fan = entities[0];
        expect(fan.entity_id.startsWith('fan.')).to.equal(true);
        expect(fan.context.STATE.setId).to.equal(`${DEVICE_ID}.power`);
        // oscillation is wired, so the frontend offers the button for it
        expect(fan.context.COMMANDS.map(c => c.service)).to.include('oscillate');
    });

    it('also serves an air purifier, which Home Assistant models as a fan', function () {
        const entities = FanConverter.convertEntities(
            makeParameters(Types.airPurifier, [{ id: `${DEVICE_ID}.speed`, name: 'SPEED' }]),
        );
        expect(entities[0].entity_id.startsWith('fan.')).to.equal(true);
    });
});

describe('converters/newDeviceTypes pump', function () {
    it('is a switch plus a sensor for everything it measures', function () {
        const entities = PumpConverter.convertEntities(
            makeParameters(Types.pump, [
                { id: `${DEVICE_ID}.power`, name: 'POWER' },
                { id: `${DEVICE_ID}.pressure`, name: 'PRESSURE' },
                { id: `${DEVICE_ID}.flow`, name: 'FLOW' },
            ]),
        );

        expect(entities[0].entity_id.startsWith('switch.')).to.equal(true);
        // POWER is what the switch writes; the detected name differs from the one it looks for.
        expect(entities[0].context.STATE.setId).to.equal(`${DEVICE_ID}.power`);
        expect(entities.slice(1).map(e => e.attributes.device_class)).to.deep.equal(['pressure', 'volume_flow_rate']);
    });
});
