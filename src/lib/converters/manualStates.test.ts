import { expect } from 'chai';
import { applyCustomAttributes, collectCustomAttributes, collectManualStates } from './manualStates';
import { BaseEntity } from '../entities/baseEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');
entityData.adapter = entityData.adapter || {};
entityData.adapter.namespace = 'lovelace.0';

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

describe('converters/manualStates custom attributes', function () {
    function makeEntity(): BaseEntity {
        const obj = {
            _id: 'js.0.dev',
            type: 'state',
            common: { name: 'dev' },
            native: {},
        } as unknown as ioBroker.Object;
        return new BaseEntity(null, null, null, obj, 'sensor', 'sensor.dev');
    }

    it('reads the table rows', function () {
        const custom = {
            customAttributes: [
                { attribute: 'battery_level', state: 'js.0.bat' },
                { attribute: ' spaced ', state: ' js.0.x ' },
            ],
        };
        expect(collectCustomAttributes(custom)).to.deep.equal([
            { attribute: 'battery_level', getId: 'js.0.bat' },
            { attribute: 'spaced', getId: 'js.0.x' },
        ]);
    });

    it('ignores half-filled and missing rows', function () {
        expect(
            collectCustomAttributes({ customAttributes: [{ attribute: 'a' }, { state: 'js.0.b' }, {}] }),
        ).to.deep.equal([]);
        expect(collectCustomAttributes({})).to.deep.equal([]);
        expect(collectCustomAttributes({ customAttributes: 'nonsense' })).to.deep.equal([]);
    });

    it('adds the attribute to the entity and routes the state to it', function () {
        const entity = makeEntity();
        applyCustomAttributes(entity, { customAttributes: [{ attribute: 'battery_level', state: 'js.0.bat' }] });

        expect(entity.context.ATTRIBUTES).to.deep.include({ attribute: 'battery_level', getId: 'js.0.bat' });
        // Without the id registered on the entity it is neither subscribed nor routed to it.
        expect(entity.iobIds).to.include('js.0.bat');
    });

    it('overrides an attribute the converter created, including its parser', function () {
        const entity = makeEntity();
        entity.context.ATTRIBUTES.push({
            attribute: 'battery_level',
            getId: 'js.0.other',
            getParser: () => {},
        });

        applyCustomAttributes(entity, { customAttributes: [{ attribute: 'battery_level', state: 'js.0.bat' }] });

        const attrs = entity.context.ATTRIBUTES.filter(a => a.attribute === 'battery_level');
        expect(attrs).to.have.lengthOf(1);
        expect(attrs[0].getId).to.equal('js.0.bat');
        expect(attrs[0].getParser).to.equal(undefined);
    });
});
