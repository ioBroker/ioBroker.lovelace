import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');
import { processManualEntity, presenceFromValue, presenceFromGps } from './deviceTracker';

function setZones(zones: { entity_id: string; attributes: Record<string, unknown> }[]): void {
    entityData.entityId2Entity = entityData.entityId2Entity || {};
    for (const zone of zones) {
        entityData.entityId2Entity[zone.entity_id] = zone;
    }
    entityData.entities = zones;
}

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
        let previousEntities: unknown;
        beforeEach(function () {
            previousEntities = entityData.entities;
            setZones([{ entity_id: 'zone.home', attributes: { latitude: 52.52, longitude: 13.405, radius: 100 } }]);
        });
        afterEach(function () {
            delete entityData.entityId2Entity['zone.home'];
            delete entityData.entityId2Entity['zone.work'];
            entityData.entities = previousEntities;
        });

        it('returns home inside the radius and not_home outside', function () {
            expect(presenceFromGps(52.52, 13.405)).to.equal('home');
            expect(presenceFromGps(52.6, 13.5)).to.equal('not_home');
        });
        it('returns null without any zone', function () {
            setZones([]);
            expect(presenceFromGps(52.52, 13.405)).to.equal(null);
        });
        it('names the zone the coordinates are in, like Home Assistant does', function () {
            setZones([
                { entity_id: 'zone.home', attributes: { latitude: 52.52, longitude: 13.405, radius: 100 } },
                {
                    entity_id: 'zone.work',
                    attributes: { latitude: 52.4, longitude: 13.2, radius: 200, friendly_name: 'Work' },
                },
            ]);
            expect(presenceFromGps(52.4, 13.2)).to.equal('Work');
        });
        it('ignores a passive zone', function () {
            setZones([
                {
                    entity_id: 'zone.work',
                    attributes: { latitude: 52.4, longitude: 13.2, radius: 200, friendly_name: 'Work', passive: true },
                },
            ]);
            expect(presenceFromGps(52.4, 13.2)).to.equal('not_home');
        });
        it('allows for the GPS accuracy', function () {
            // 150 m away from home, which has a radius of 100 m - inside only with a sloppy fix
            expect(presenceFromGps(52.5213, 13.405)).to.equal('not_home');
            expect(presenceFromGps(52.5213, 13.405, 200)).to.equal('home');
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

        it('applies a fixed entity_picture URL', function () {
            const entity = makeEntity('person');
            processManualEntity(
                'js.0.presence',
                { common: { type: 'string' } } as any,
                entity,
                {},
                { states: {}, attr_entity_picture: 'https://example.com/me.jpg' },
            );
            expect(entity.attributes.entity_picture).to.equal('https://example.com/me.jpg');
        });

        it('wires a picture state (entity_picture) and it wins over a fixed URL', function () {
            const entity = makeEntity('person');
            processManualEntity(
                'js.0.presence',
                { common: { type: 'string' } } as any,
                entity,
                {},
                { states: {}, state_entity_picture: 'js.0.pic', attr_entity_picture: 'https://example.com/me.jpg' },
            );
            // a mapped state takes precedence -> no static value, an ATTRIBUTE is added instead
            expect(entity.attributes.entity_picture).to.equal(undefined);
            const attr = entity.context.ATTRIBUTES.find((a: any) => a.attribute === 'entity_picture');
            expect(attr).to.be.ok;
            expect(attr.getId).to.equal('js.0.pic');
        });

        it('wires battery_level and sets source_type for device_tracker (default gps)', function () {
            const entity = makeEntity('device_tracker');
            processManualEntity(
                'js.0.presence',
                { common: { type: 'string' } } as any,
                entity,
                {},
                { states: {}, state_battery: 'js.0.bat', source_type: 'router' },
            );
            const bat = entity.context.ATTRIBUTES.find((a: any) => a.attribute === 'battery_level');
            expect(bat).to.be.ok;
            expect(bat.getId).to.equal('js.0.bat');
            expect(entity.attributes.source_type).to.equal('router');
        });

        it('does not set source_type for the person domain', function () {
            const entity = makeEntity('person');
            processManualEntity('js.0.presence', { common: { type: 'string' } } as any, entity, {}, { states: {} });
            expect(entity.attributes.source_type).to.equal(undefined);
        });

        it('derives presence from gps when there is no presence state', function () {
            const previousEntities = entityData.entities;
            setZones([{ entity_id: 'zone.home', attributes: { latitude: 52.52, longitude: 13.405, radius: 100 } }]);
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
            entityData.entities = previousEntities;
        });
    });
});
