import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');
import { processManualEntity, presenceFromValue, presenceFromGps } from './deviceTracker';

function makeEntity(type: string): any {
    return {
        entity_id: `${type}.phone`,
        state: undefined,
        attributes: {},
        context: { type, STATE: {}, ATTRIBUTES: [] },
        fillFromStates: () => {},
        addID2entity: () => {},
    };
}

describe('converters/deviceTracker', function () {
    describe('presenceFromValue', function () {
        it('maps booleans (and their string forms) to home/not_home', function () {
            expect(presenceFromValue(true)).to.equal('home');
            expect(presenceFromValue(false)).to.equal('not_home');
            expect(presenceFromValue('true')).to.equal('home');
            expect(presenceFromValue('false')).to.equal('not_home');
        });
        it('passes a zone name through and reports unknown for empty/object', function () {
            expect(presenceFromValue('Work')).to.equal('Work');
            expect(presenceFromValue('')).to.equal('unknown');
            expect(presenceFromValue(null)).to.equal('unknown');
            expect(presenceFromValue({})).to.equal('unknown');
        });
    });

    describe('presenceFromGps', function () {
        beforeEach(function () {
            entityData.entityId2Entity = entityData.entityId2Entity || {};
            entityData.entityId2Entity['zone.home'] = {
                attributes: { latitude: 52.52, longitude: 13.405, radius: 100 },
            };
        });
        afterEach(function () {
            delete entityData.entityId2Entity['zone.home'];
        });

        it('returns home inside the radius and not_home outside', function () {
            expect(presenceFromGps(52.52, 13.405)).to.equal('home');
            expect(presenceFromGps(52.6, 13.5)).to.equal('not_home');
        });
        it('returns null without home coordinates', function () {
            delete entityData.entityId2Entity['zone.home'];
            expect(presenceFromGps(52.52, 13.405)).to.equal(null);
        });
    });

    describe('processManualEntity', function () {
        it('uses the main object as presence when it is boolean (presence wins)', function () {
            const entity = makeEntity('device_tracker');
            processManualEntity('js.0.presence', { common: { type: 'boolean' } } as any, entity, {}, { states: {} });
            expect(entity.context.STATE.getId).to.equal('js.0.presence');
            // getParser turns the boolean into a zone state
            entity.context.STATE.getParser(entity, 'state', { val: true });
            expect(entity.state).to.equal('home');
            expect(entity.attributes.unit_of_measurement).to.equal(undefined);
        });

        it('adds the person wrapper attributes for the person domain', function () {
            const entity = makeEntity('person');
            processManualEntity('js.0.presence', { common: { type: 'string' } } as any, entity, {}, { states: {} });
            expect(entity.attributes.device_trackers).to.deep.equal([]);
            expect(entity.attributes.user_id).to.equal(null);
            expect(entity.attributes.editable).to.equal(false);
            expect(entity.attributes.id).to.be.a('string');
        });

        it('derives presence from gps when there is no presence state', function () {
            entityData.entityId2Entity = entityData.entityId2Entity || {};
            entityData.entityId2Entity['zone.home'] = {
                attributes: { latitude: 52.52, longitude: 13.405, radius: 100 },
            };
            const entity = makeEntity('device_tracker');
            // main object is a number -> not usable as presence; gps state provided instead
            processManualEntity(
                'js.0.gps',
                { common: { type: 'number' } } as any,
                entity,
                {},
                { states: { gps: 'js.0.gps' } },
            );
            expect(entity.context.STATE.getId).to.equal('js.0.gps');
            entity.attributes.latitude = 52.52;
            entity.attributes.longitude = 13.405;
            entity.context.STATE.getParser(entity, 'state', { val: '52.52;13.405' });
            expect(entity.state).to.equal('home');
            delete entityData.entityId2Entity['zone.home'];
        });
    });
});
