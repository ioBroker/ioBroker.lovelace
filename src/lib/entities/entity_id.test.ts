import { expect } from 'chai';
import { getEntityId, getEntityType } from './entity_id';

describe('entities/entity_id', function () {
    describe('getEntityId', function () {
        it('derives id from common.name', function () {
            const obj = { common: { name: 'My Light' }, _id: 'ignored' } as ioBroker.Object;
            expect(getEntityId('light', null, obj)).to.equal('light.My_Light');
        });

        it('falls back to object._id when common.name is absent', function () {
            const obj = { _id: 'adapter.0.device.state' } as ioBroker.Object;
            expect(getEntityId('binary_sensor', null, obj)).to.equal('binary_sensor.adapter_0_device_state');
        });

        it('uses predefined entity id with dot (overrides entityType)', function () {
            const obj = { common: { name: 'ignored' }, _id: 'ignored' } as ioBroker.Object;
            expect(getEntityId('light', 'climate.my_ac', obj)).to.equal('climate.my_ac');
        });

        it('ignores predefined entity id without a dot', function () {
            const obj = { common: { name: 'Some Light' }, _id: 'ignored' } as ioBroker.Object;
            expect(getEntityId('light', 'no_dot_here', obj)).to.equal('light.Some_Light');
        });

        it('replaces spaces and special chars with underscores, collapses runs', function () {
            const obj = { common: { name: 'Room Light #1' }, _id: 'ignored' } as ioBroker.Object;
            expect(getEntityId('light', null, obj)).to.equal('light.Room_Light_1');
        });

        it('collapses consecutive underscores', function () {
            const obj = { common: { name: 'a  b' }, _id: 'ignored' } as ioBroker.Object;
            expect(getEntityId('switch', null, obj)).to.equal('switch.a_b');
        });

        it('uses English name from multilingual object', function () {
            const obj = {
                common: { name: { en: 'English Name', de: 'Deutscher Name' } },
                _id: 'ignored',
            } as ioBroker.Object;
            expect(getEntityId('sensor', null, obj)).to.equal('sensor.English_Name');
        });

        it('uses only available language when English is absent', function () {
            const obj = { common: { name: { de: 'Einzige Sprache' } }, _id: 'ignored' } as ioBroker.Object;
            expect(getEntityId('sensor', null, obj)).to.equal('sensor.Einzige_Sprache');
        });

        it('transliterates German umlauts', function () {
            const obj = { common: { name: 'Wohnzimmer Übersicht' }, _id: 'ignored' } as ioBroker.Object;
            expect(getEntityId('light', null, obj)).to.equal('light.Wohnzimmer_UEbersicht');
        });

        it('never returns an empty id part (would collide with every other entity of the type)', function () {
            // A predefined entity_id of "binary_sensor." (id part after the dot empty) must not be
            // used as-is - it degenerates to a value shared by every entity of the type.
            const obj = { common: {}, _id: 'adapter.0.device.state' } as ioBroker.Object;
            const result = getEntityId('binary_sensor', 'binary_sensor.', obj);
            expect(result).to.not.equal('binary_sensor.');
            expect(result).to.equal('binary_sensor.adapter_0_device_state');
        });

        it('falls back to the object id when common.name is an empty string', function () {
            const obj = { common: { name: '' }, _id: 'adapter.0.device.state' } as ioBroker.Object;
            expect(getEntityId('sensor', null, obj)).to.equal('sensor.adapter_0_device_state');
        });

        it('transliterates Russian characters', function () {
            const obj = { common: { name: 'Свет' }, _id: 'ignored' } as ioBroker.Object;
            const result = getEntityId('light', null, obj);
            expect(result).to.match(/^light\.[a-z_]+$/i);
            expect(result).to.not.match(/[А-Яа-я]/);
        });
    });

    describe('getEntityType', function () {
        it('returns the given entityType when no predefined id', function () {
            const obj = { common: { name: 'Whatever' }, _id: 'x' } as ioBroker.Object;
            expect(getEntityType('light', null, obj)).to.equal('light');
        });

        it('returns type from predefined entity id (part before dot)', function () {
            const obj = { common: { name: 'ignored' }, _id: 'ignored' } as ioBroker.Object;
            expect(getEntityType('light', 'climate.my_ac', obj)).to.equal('climate');
        });

        it('ignores predefined id without dot and returns original entityType', function () {
            const obj = { common: { name: 'ignored' }, _id: 'ignored' } as ioBroker.Object;
            expect(getEntityType('switch', 'no_dot', obj)).to.equal('switch');
        });
    });

    describe('autoEntityIdFormat', function () {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const entityData = require('../../../lib/dataSingleton');
        afterEach(function () {
            entityData.autoEntityIdFormat = 'name';
        });

        it('roomFunction format builds the id from room and function', function () {
            entityData.autoEntityIdFormat = 'roomFunction';
            const obj = { common: { name: 'My Light' }, _id: 'adapter.0.device' } as ioBroker.Object;
            expect(getEntityId('light', null, obj, 'Living Room', 'Light')).to.equal('light.Living_Room_Light');
        });

        it('roomFunction falls back to the name when room/function are missing', function () {
            entityData.autoEntityIdFormat = 'roomFunction';
            const obj = { common: { name: 'My Light' }, _id: 'adapter.0.device' } as ioBroker.Object;
            expect(getEntityId('light', null, obj, null, null)).to.equal('light.My_Light');
        });

        it('iobId format builds the id from the object id', function () {
            entityData.autoEntityIdFormat = 'iobId';
            const obj = { common: { name: 'My Light' }, _id: 'adapter.0.device.state' } as ioBroker.Object;
            expect(getEntityId('light', null, obj, 'Living Room', 'Light')).to.equal('light.adapter_0_device_state');
        });

        it('name format (default) still uses common.name', function () {
            entityData.autoEntityIdFormat = 'name';
            const obj = { common: { name: 'My Light' }, _id: 'adapter.0.device' } as ioBroker.Object;
            expect(getEntityId('light', null, obj, 'Living Room', 'Light')).to.equal('light.My_Light');
        });
    });
});
