import { expect } from 'chai';
import { collectManualStates } from './manualStates';

describe('converters/manualStates', function () {
    it('collects flat state_<role> picker keys into a role->id map', function () {
        const custom = {
            entity: 'device_tracker',
            name: 'phone',
            state_presence: 'js.0.presence',
            state_gps: 'js.0.gps',
            attr_source: 'gps',
        };
        expect(collectManualStates(custom)).to.deep.equal({
            presence: 'js.0.presence',
            gps: 'js.0.gps',
        });
    });

    it('merges a nested custom.states object, flat picker keys win', function () {
        const custom = {
            states: { presence: 'old.id', battery: 'js.0.bat' },
            state_presence: 'js.0.presence',
        };
        expect(collectManualStates(custom)).to.deep.equal({
            presence: 'js.0.presence',
            battery: 'js.0.bat',
        });
    });

    it('ignores empty / non-string picker values', function () {
        const custom = { state_gps: '', state_latitude: undefined, state_longitude: 'js.0.lon' };
        expect(collectManualStates(custom)).to.deep.equal({ longitude: 'js.0.lon' });
    });
});
