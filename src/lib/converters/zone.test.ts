import { expect } from 'chai';
import { processManualEntity } from './zone';

function makeEntity(attributes: Record<string, unknown> = {}): any {
    return {
        entity_id: 'zone.garden',
        state: undefined,
        attributes,
        context: { type: 'zone', STATE: {}, ATTRIBUTES: [] },
        addID2entity: (): void => {},
    };
}

function build(
    id: string,
    type: string,
    custom: Record<string, unknown>,
    attributes: Record<string, unknown> = {},
): any {
    return processManualEntity(id, { common: { type } } as any, makeEntity(attributes), {}, custom)[0];
}

describe('converters/zone', function () {
    it('makes a fixed zone from the entered position and radius', function () {
        //the admin dialog hands the numbers over as the attributes it stores
        const zone = build('js.0.garden', 'boolean', {}, { latitude: '52.52', longitude: '13.405', radius: '50' });

        expect(zone.state).to.equal('zoning');
        expect(zone.attributes.latitude).to.equal(52.52);
        expect(zone.attributes.longitude).to.equal(13.405);
        expect(zone.attributes.radius).to.equal(50);
        expect(zone.attributes.passive).to.equal(false);
        expect(zone.attributes.icon).to.equal('mdi:map-marker-radius');
        //no ioBroker state to read, so the state stays what it is
        expect(zone.context.STATE.getId).to.equal(null);
        expect(zone.context.ATTRIBUTES).to.have.lengthOf(0);
    });

    it('uses 100 m when no radius is given and drops a radius that is no number', function () {
        expect(build('js.0.garden', 'boolean', {}).attributes.radius).to.equal(100);
        expect(build('js.0.garden', 'boolean', {}, { radius: 'wide' }).attributes.radius).to.equal(100);
    });

    it('follows a GPS state, which is the configured object itself when it holds a string', function () {
        const zone = build('js.0.caravan', 'string', {});
        const latitude = zone.context.ATTRIBUTES.find((a: any) => a.attribute === 'latitude');
        const longitude = zone.context.ATTRIBUTES.find((a: any) => a.attribute === 'longitude');
        expect(latitude.getId).to.equal('js.0.caravan');
        expect(longitude.getId).to.equal('js.0.caravan');

        latitude.getParser(zone, latitude, { val: '52.52;13.405' });
        longitude.getParser(zone, longitude, { val: '52.52;13.405' });
        expect(zone.attributes.latitude).to.equal(52.52);
        expect(zone.attributes.longitude).to.equal(13.405);
        //a comma-separated pair is what some adapters write
        latitude.getParser(zone, latitude, { val: '48.1,11.5' });
        expect(zone.attributes.latitude).to.equal(48.1);
    });

    it('wires separate latitude/longitude/radius states and keeps a passive zone passive', function () {
        const zone = build('js.0.zone', 'boolean', {
            state_latitude: 'js.0.lat',
            state_longitude: 'js.0.lon',
            state_radius: 'js.0.radius',
            attr_passive: true,
        });

        const ids = zone.context.ATTRIBUTES.map((a: any) => `${a.attribute}=${a.getId}`);
        expect(ids).to.deep.equal(['latitude=js.0.lat', 'longitude=js.0.lon', 'radius=js.0.radius']);
        expect(zone.attributes.passive).to.equal(true);
    });
});
