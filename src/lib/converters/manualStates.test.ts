import { expect } from 'chai';
import {
    applyCustomAttributes,
    collectCustomAttributes,
    collectManualStates,
    parseJsonStateValue,
} from './manualStates';
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

describe('converters/manualStates JSON attributes', function () {
    function makeEntity(): BaseEntity {
        const obj = {
            _id: 'js.0.dev',
            type: 'state',
            common: { name: 'dev' },
            native: {},
        } as unknown as ioBroker.Object;
        return new BaseEntity(null, null, null, obj, 'sensor', 'sensor.dev');
    }

    function makeObjects(type: string): Record<string, ioBroker.Object> {
        return {
            'js.0.table': {
                _id: 'js.0.table',
                type: 'state',
                common: { name: 'table', type },
                native: {},
            } as unknown as ioBroker.Object,
        };
    }

    it('parses a JSON string, passes everything else through', function () {
        expect(parseJsonStateValue('[{"a":1}]')).to.deep.equal([{ a: 1 }]);
        expect(parseJsonStateValue(' {"a":1} ')).to.deep.equal({ a: 1 });
        // A mixed state often holds something that is not JSON - that must survive unchanged.
        expect(parseJsonStateValue('42')).to.equal('42');
        expect(parseJsonStateValue('plain text')).to.equal('plain text');
        expect(parseJsonStateValue('[broken')).to.equal('[broken');
        expect(parseJsonStateValue(17)).to.equal(17);
        expect(parseJsonStateValue(null)).to.equal(null);
        // Some adapters store a real object.
        expect(parseJsonStateValue([1, 2])).to.deep.equal([1, 2]);
    });

    for (const type of ['array', 'object', 'mixed']) {
        it(`reads a state of type ${type} as JSON`, function () {
            const entity = makeEntity();
            applyCustomAttributes(
                entity,
                { customAttributes: [{ attribute: 'rows', state: 'js.0.table' }] },
                makeObjects(type),
            );

            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'rows')!;
            expect(attr.getParser).to.be.a('function');
            attr.getParser!(entity, attr, { val: '[{"name":"a"}]' } as ioBroker.State);
            // ioBroker stores arrays as a JSON string; cards iterating it need the array (#58972f4).
            expect(entity.attributes.rows).to.deep.equal([{ name: 'a' }]);
        });
    }

    it('leaves a string state alone', function () {
        const entity = makeEntity();
        applyCustomAttributes(
            entity,
            { customAttributes: [{ attribute: 'rows', state: 'js.0.table' }] },
            makeObjects('string'),
        );

        const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'rows')!;
        expect(attr.getParser).to.equal(undefined);
    });

    it('writes a nested attribute path from JSON as well', function () {
        const entity = makeEntity();
        applyCustomAttributes(
            entity,
            { customAttributes: [{ attribute: 'data.rows', state: 'js.0.table' }] },
            makeObjects('array'),
        );

        const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'data.rows')!;
        attr.getParser!(entity, attr, { val: '[1,2]' } as ioBroker.State);
        expect(entity.attributes.data).to.deep.equal({ rows: [1, 2] });
    });
});
