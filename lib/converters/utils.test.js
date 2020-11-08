const expect = require('chai').expect;

const utils = require('./utils');

const mockServer = {
    _entities     : [],
    _entity2ID    : {},
    _ID2entity    : {},
    land          : 'en',
    adapter       : { namespace: 'lovelace.1' }
};
const _processCommon = utils._processCommon.bind(mockServer);
mockServer._addID2entity  = utils._addID2entity.bind(mockServer);

function expectEntity(entity, entity_id, id, name, type) {
    expect(entity).to.have.property('entity_id', entity_id);
    expect(entity).to.have.property('attributes');
    expect(entity).to.have.nested.property('attributes.friendly_name', name);
    expect(entity).to.have.property('context');
    expect(entity).to.have.nested.property('context.id', id);
    expect(entity).to.have.nested.property('context.type', type);
    expect(mockServer._ID2entity).to.have.property(id);
    expect(mockServer._entity2ID).to.have.property(entity_id);

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
        const currLength = mockServer._entities.length;
        const entity = _processCommon(null, null, null, obj, 'switch');
        expectEntity(entity, entity_id, id, obj.common.name, 'switch');
        expect(mockServer._entities).to.have.lengthOf(currLength + 1);
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
        const currLength = mockServer._entities.length;

        const entity = _processCommon(name, null, null, obj, 'switch');
        expectEntity(entity, entity_id, id, name, 'switch');
        expect(mockServer._entities).to.have.lengthOf(currLength + 1);
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
        const currLength = mockServer._entities.length;

        const entity = _processCommon(null, room, func, obj, 'light');
        expectEntity(entity, entity_id, id, 'Room1 Light', 'light');
        expect(mockServer._entities).to.have.lengthOf(currLength + 1);
    });

    it('processCommon -> predefined id', function () {
        const id = 'test.0.airCondition';
        const entity_id = 'climate.Kitchen';
        const name = 'AirCon Kitchen Smart';
        const obj = {
            type: 'device',
            common: {
                name: 'AirCondition Kitchen',
                smartName: name
            },
            native: {},
            _id: id
        };
        const currLength = mockServer._entities.length;

        const entity = _processCommon(null, null, null, obj, 'climate', entity_id);
        expectEntity(entity, entity_id, id, name, 'climate');
        expect(mockServer._entities).to.have.lengthOf(currLength + 1);
    });
});
