import { expect } from 'chai';
import { generateElectricitySensors, generateBatterySensor } from './indicators';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');
entityData.adapter.namespace = 'lovelace.0';
entityData.lang = 'en';
entityData.log = { warn: () => {}, error: () => {} };

function makeParams(states: { id: string; name: string }[], objects: Record<string, any>, friendlyName?: string): any {
    return { controls: { states }, objects, friendlyName, room: undefined, func: undefined };
}

describe('converters/indicators generateElectricitySensors', function () {
    it('creates power and energy sensors with device_class/unit/state_class', function () {
        const objects = {
            'sock.0.power': { _id: 'sock.0.power', common: { name: 'P', unit: 'W' } },
            'sock.0.energy': { _id: 'sock.0.energy', common: { name: 'E', unit: 'kWh' } },
        };
        const states = [
            { id: 'sock.0.power', name: 'ELECTRIC_POWER' },
            { id: 'sock.0.energy', name: 'CONSUMPTION' },
        ];
        const res = generateElectricitySensors(makeParams(states, objects, 'Socket'), 'socket');
        expect(res).to.have.lengthOf(2);

        const power = res.find(e => e.entity_id === 'sensor.socket_power')!;
        expect(power.attributes.device_class).to.equal('power');
        expect(power.attributes.unit_of_measurement).to.equal('W');
        expect(power.attributes.state_class).to.equal('measurement');
        expect(power.context.STATE.getId).to.equal('sock.0.power');

        const energy = res.find(e => e.entity_id === 'sensor.socket_energy')!;
        expect(energy.attributes.device_class).to.equal('energy');
        expect(energy.attributes.unit_of_measurement).to.equal('kWh');
        expect(energy.attributes.state_class).to.equal('total_increasing');
    });

    it('returns empty when no electricity states are present', function () {
        const res = generateElectricitySensors(makeParams([{ id: 'x', name: 'SET' }], {}, 'X'), 'x');
        expect(res).to.have.lengthOf(0);
    });

    it('falls back to the default unit when the object has none', function () {
        const objects = { 'a.power': { _id: 'a.power', common: { name: 'P' } } };
        const res = generateElectricitySensors(
            makeParams([{ id: 'a.power', name: 'ELECTRIC_POWER' }], objects, 'A'),
            'a',
        );
        expect(res[0].attributes.unit_of_measurement).to.equal('W');
    });
});

describe('converters/indicators generateBatterySensor', function () {
    it('creates a battery sensor from the BATTERY state (value.battery, %)', function () {
        const objects = { 'zig.0.bat': { _id: 'zig.0.bat', common: { name: 'Bat', unit: '%' } } };
        const sensor = generateBatterySensor(
            makeParams([{ id: 'zig.0.bat', name: 'BATTERY' }], objects, 'Thermostat'),
            'thermostat',
        )!;

        expect(sensor).to.not.equal(null);
        expect(sensor.entity_id).to.equal('sensor.thermostat_battery');
        expect(sensor.attributes.device_class).to.equal('battery');
        expect(sensor.attributes.unit_of_measurement).to.equal('%');
        expect(sensor.attributes.state_class).to.equal('measurement');
        expect(sensor.context.STATE.getId).to.equal('zig.0.bat');
    });

    it('falls back to % when the object has no unit', function () {
        const objects = { 'a.bat': { _id: 'a.bat', common: { name: 'B' } } };
        const sensor = generateBatterySensor(makeParams([{ id: 'a.bat', name: 'BATTERY' }], objects, 'A'), 'a')!;
        expect(sensor.attributes.unit_of_measurement).to.equal('%');
    });

    it('returns null without a BATTERY state (LOWBAT alone is the separate warning indicator)', function () {
        const res = generateBatterySensor(makeParams([{ id: 'x.lowbat', name: 'LOWBAT' }], {}, 'X'), 'x');
        expect(res).to.equal(null);
    });
});
