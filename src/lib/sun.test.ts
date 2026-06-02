import { expect } from 'chai';
import { computeSunState } from './sun';

// Berlin
const LAT = 52.52;
const LNG = 13.405;

describe('sun computeSunState', function () {
    it('reports above_horizon with positive elevation at midday', function () {
        const r = computeSunState(LAT, LNG, new Date('2025-06-21T11:00:00Z'));
        expect(r.state).to.equal('above_horizon');
        expect(r.attributes.elevation).to.be.greaterThan(0);
    });

    it('reports below_horizon with negative elevation at night', function () {
        const r = computeSunState(LAT, LNG, new Date('2025-12-21T01:00:00Z'));
        expect(r.state).to.equal('below_horizon');
        expect(r.attributes.elevation).to.be.lessThan(0);
    });

    it('returns azimuth normalised to [0,360)', function () {
        for (const hour of ['00:00', '06:00', '12:00', '18:00']) {
            const r = computeSunState(LAT, LNG, new Date(`2025-06-21T${hour}:00Z`));
            expect(r.attributes.azimuth).to.be.within(0, 360);
            expect(r.attributes.azimuth).to.be.lessThan(360);
        }
    });

    it('rising is true before solar noon and false after', function () {
        const morning = computeSunState(LAT, LNG, new Date('2025-06-21T05:00:00Z'));
        const afternoon = computeSunState(LAT, LNG, new Date('2025-06-21T16:00:00Z'));
        expect(morning.attributes.rising).to.equal(true);
        expect(afternoon.attributes.rising).to.equal(false);
    });

    it('exposes the next_* events as ISO strings in the future', function () {
        const now = new Date('2025-06-21T12:00:00Z');
        const r = computeSunState(LAT, LNG, now);
        for (const key of ['next_rising', 'next_setting', 'next_dawn', 'next_dusk', 'next_noon', 'next_midnight']) {
            const val = (r.attributes as Record<string, string | undefined>)[key];
            expect(val, key).to.be.a('string');
            expect(new Date(val!).getTime(), key).to.be.greaterThan(now.getTime());
        }
    });
});
