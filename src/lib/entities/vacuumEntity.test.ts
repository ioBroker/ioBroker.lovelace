import { expect } from 'chai';
import { mapVacuumState } from './vacuumEntity';

describe('entities/vacuumEntity mapVacuumState', function () {
    it('maps common status strings to HA vacuum states', function () {
        expect(mapVacuumState('Cleaning')).to.equal('cleaning');
        expect(mapVacuumState('charging')).to.equal('docked');
        expect(mapVacuumState('docked')).to.equal('docked');
        expect(mapVacuumState('paused')).to.equal('paused');
        expect(mapVacuumState('returning home')).to.equal('returning');
        expect(mapVacuumState('error')).to.equal('error');
    });

    it('falls back to idle for unknown values', function () {
        expect(mapVacuumState('whatever')).to.equal('idle');
        expect(mapVacuumState(null)).to.equal('idle');
    });

    it('uses the states map for numeric values', function () {
        expect(mapVacuumState(2, { 0: 'idle', 1: 'docked', 2: 'Spot cleaning' })).to.equal('cleaning');
    });
});
