import { expect } from 'chai';
import { haversineKm, distanceToZoneM, inZone, findActiveZone, type ZoneLike } from './geo';

const HOME: ZoneLike = { entity_id: 'zone.home', attributes: { latitude: 52.52, longitude: 13.405, radius: 100 } };

describe('geo', function () {
    it('measures the distance between two coordinates', function () {
        //Berlin -> Hamburg is about 255 km
        expect(haversineKm(52.52, 13.405, 53.55, 9.99)).to.be.closeTo(255, 5);
        expect(haversineKm(52.52, 13.405, 52.52, 13.405)).to.equal(0);
    });

    it('has no distance without usable coordinates', function () {
        expect(distanceToZoneM(52.52, 13.405, { entity_id: 'zone.x', attributes: {} })).to.equal(undefined);
        expect(distanceToZoneM(NaN, 13.405, HOME)).to.equal(undefined);
    });

    it('decides inside/outside and allows for the GPS accuracy', function () {
        expect(inZone(52.52, 13.405, HOME)).to.equal(true);
        //about 150 m north of the centre, so outside the 100 m radius
        expect(inZone(52.5213, 13.405, HOME)).to.equal(false);
        expect(inZone(52.5213, 13.405, HOME, 200)).to.equal(true);
        expect(inZone(52.52, 13.405, undefined)).to.equal(false);
        expect(inZone(52.52, 13.405, { ...HOME, state: 'unavailable' })).to.equal(false);
    });

    it('picks the closest zone, the smaller one when they are equally close', function () {
        const big: ZoneLike = {
            entity_id: 'zone.city',
            attributes: { latitude: 52.52, longitude: 13.405, radius: 5000 },
        };
        const small: ZoneLike = {
            entity_id: 'zone.flat',
            attributes: { latitude: 52.52, longitude: 13.405, radius: 50 },
        };
        expect(findActiveZone(52.52, 13.405, [big, small])?.entity_id).to.equal('zone.flat');

        //only the big one contains a point 1 km away
        expect(findActiveZone(52.529, 13.405, [big, small])?.entity_id).to.equal('zone.city');
        expect(findActiveZone(52.9, 13.405, [big, small])).to.equal(undefined);
    });

    it('skips passive and unavailable zones', function () {
        const passive: ZoneLike = { entity_id: 'zone.p', attributes: { ...HOME.attributes, passive: true } };
        const dead: ZoneLike = { entity_id: 'zone.d', state: 'unavailable', attributes: { ...HOME.attributes } };
        expect(findActiveZone(52.52, 13.405, [passive, dead])).to.equal(undefined);
        expect(findActiveZone(52.52, 13.405, [passive, dead, HOME])?.entity_id).to.equal('zone.home');
    });
});
