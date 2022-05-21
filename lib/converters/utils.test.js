const expect = require('chai').expect;

const utils = require('./utils');

const entityData = require('./../dataSingleton');
entityData.adapter.namespace = 'lovelace.1';

function expectEntity(entity, entity_id, id, name, type) {
    expect(entity).to.have.property('entity_id', entity_id);
    expect(entity).to.have.property('attributes');
    expect(entity).to.have.nested.property('attributes.friendly_name', name);
    expect(entity).to.have.property('context');
    expect(entity).to.have.nested.property('context.id', id);
    expect(entity).to.have.nested.property('context.type', type);
    expect(entity).to.have.nested.property('context.ids');
    expect(entity.context.ids).to.have.members([id]);
}

describe('converters/utils', function () {
    it('processCommon -> id from common.name', function () {
        const id = 'test.0.socket';
        const entity_id = 'switch.Some_Socket';
        const obj = {
            type: 'device',
            common: {
                name: 'Some Socket'
            },
            native: {},
            _id: id
        };
        const entity = utils.processCommon(null, null, null, obj, 'switch');
        expectEntity(entity, entity_id, id, obj.common.name, 'switch');
    });

    it('processCommon -> id from name argument', function () {
        const id = 'test.0.other_socket';
        const entity_id = 'switch.Some_other_Socket';
        const name = 'Some other Socket';
        const obj = {
            type: 'device',
            common: {
                name: 'Some other Socket'
            },
            native: {},
            _id: id
        };
        const entity = utils.processCommon(name, null, null, obj, 'switch');
        expectEntity(entity, entity_id, id, name, 'switch');
    });

    it('processCommon -> id from room & func', function () {
        const id = 'test.0.light';
        const entity_id = 'light.test_0_light'; //id is derived from object id.
        const room = 'Room1';
        const func = 'Light';
        const obj = {
            type: 'device',
            common: {
            },
            native: {},
            _id: id
        };
        const entity = utils.processCommon(null, room, func, obj, 'light');
        expectEntity(entity, entity_id, id, 'Room1 Light', 'light');
    });

    it('processCommon -> predefined id', function () {
        const id = 'test.0.airCondition';
        const entity_id = 'climate.Kitchen';
        const name = 'AirCon Kitchen Smart';
        const obj = {
            type: 'device',
            common: {
                name: name,
                smartName: name //smartName test won't work. Smartname is extracted before and set as friendly name. Hm.
            },
            native: {},
            _id: id
        };
        const entity = utils.processCommon(null, null, null, obj, 'climate', entity_id);
        expectEntity(entity, entity_id, id, name, 'climate');
    });

    it('processCommon -> predefined id with illegal characters', function () {
        const id = 'test.0.airCondition';
        const entity_id = 'climate.Kitchen.illegal#';
        const name = 'AirCon Kitchen Smart';
        const obj = {
            type: 'device',
            common: {
                name: name
            },
            native: {},
            _id: id
        };
        const entity = utils.processCommon(null, null, null, obj, 'climate', entity_id);
        expectEntity(entity, 'climate.Kitchen_illegal_', id, name, 'climate');
    });

    it('processCommon -> manual name', function () {
        const id = 'test.0.airCondition';
        const entity_id = 'light.Kitchen';
        const name = 'Manual defined name';
        const obj = {
            type: 'device',
            common: {
                custom: {
                    'lovelace.1': {
                        name: name
                    }
                }
            },
            native: {},
            _id: id
        };
        const entity = utils.processCommon(null, null, null, obj, 'climate', entity_id); //have type overwritten by manualy specified id.

        expectEntity(entity, entity_id, id, name, 'light');
        expect(entity.attributes.unit_of_measurement, '%');
    });

    it('processCommon -> unit', function () {
        const id = 'test.0.airCondition.unit';
        const entity_id = 'light.Kitchen_Unit';
        const name = 'Manual defined name';
        const obj = {
            type: 'device',
            common: {
                custom: {
                    'lovelace.1': {
                        name: name
                    }
                },
                unit: '%'
            },
            native: {},
            _id: id
        };
        const entity = utils.processCommon(null, null, null, obj, 'climate', entity_id); //have type overwritten by manualy specified id.
        expectEntity(entity, entity_id, id, name, 'light');
        expect(entity.attributes.unit_of_measurement, '%');
    });

    it('processCommon -> icon adapter', function () {
        const id = 'test.0.light.icon';
        const entity_id = 'light.test_0_light_icon'; //id is derived from object id.
        const room = 'Room1';
        const func = 'Light_Icon';
        const obj = {
            type: 'device',
            common: {
                icon: 'img/basiczbr3.png'
            },
            native: {},
            _id: id
        };
        const entity = utils.processCommon(null, room, func, obj, 'light');
        expect(entity.attributes.entity_picture, '/adapter/test/0/img/basiczbr3.png');
        expectEntity(entity, entity_id, id, 'Room1 Light_Icon', 'light');
    });

    it('processCommon -> icon url', function () {
        const id = 'test.0.light.icon_url';
        const entity_id = 'light.test_0_light_icon_url'; //id is derived from object id.
        const room = 'Room1';
        const func = 'Light_Icon_url';
        const obj = {
            type: 'device',
            common: {
                icon: 'http://some.server/img/basiczbr3.png'
            },
            native: {},
            _id: id
        };
        const entity = utils.processCommon(null, room, func, obj, 'light');
        expect(entity.attributes.entity_picture, obj.common.icon);
        expectEntity(entity, entity_id, id, 'Room1 Light_Icon_url', 'light');
    });
});
