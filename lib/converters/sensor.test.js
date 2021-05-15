const convertSensor = require('./sensor');
const {Types} = require('iobroker.type-detector');

const expect = require('chai').expect;
const sinon = require('sinon');

const mockServer = {
    _processCommon: function () {
        return {
            entity_id: 'sensor.entity_id',
            attributes: {
                friendly_name: 'Name'
            },
            context: {
                id: 'iobroker.0.id',
                type: 'sensor'
            }
        };
    },
    _addID2entity: function () {}
};
const processWindowTilt = convertSensor.processWindowTilt.bind(mockServer);

describe('converters/sensor', function () {
    it('windowTilt', function () {
        const id = 'test.window_with_tilt';
        const control = {
            type: Types.socket,
            states: [
                {
                    indicator: false, type: 'boolean', name: 'ACTUAL', required: true, write: false, defaultRole: 'value.window', id: 'test.window_with_tilt.state'
                }
            ]
        };
        const _obj = {
            type: 'device',
            common: {
                name: 'Some Window'
            },
            native: {},
            _id: id
        };

        const mock = sinon.mock(mockServer);
        mock.expects('_addID2entity').once().withArgs(control.states[0].id);

        const objects = {};
        objects[_obj._id] = _obj;
        const entities = processWindowTilt(id, control, null, null, null, _obj, objects);
        expect(entities).to.have.lengthOf(2);
        const entity = entities[0];
        expect(entity).to.have.nested.property('attributes.icon', 'mdi:window-maximize');
        expect(entity).to.have.nested.property('attributes.device_class', 'window');
        expect(entity).to.have.nested.property('context.STATE');
        expect(entity).to.have.nested.property('context.STATE.getId', control.states[0].id);
        mock.verify();
    });

    /*it('socket with ACTUAL', function () {
        const id = 'test.socket';
        const control = {
            type: Types.socket,
            states: [
                {
                    indicator: false, type: 'boolean', name: 'SET', required: true, write: true, defaultRole: 'switch', id: 'test.socket.state'
                },
                {
                    indicator: false, type: 'boolean', name: 'ACTUAL', required: true, write: false, defaultRole: 'switch', id: 'test.socket.readState'
                }
            ]
        };
        const _obj = {
            type: 'device',
            common: {
                name: 'Some Socket'
            },
            native: {},
            _id: id
        };

        const mock = sinon.mock(mockServer);
        mock.expects('_addID2entity').once().withArgs(control.states[0].id);
        mock.expects('_addID2entity').once().withArgs(control.states[1].id);

        const entities = processSocket(id,control, null, null, null, _obj);
        expect(entities).to.have.lengthOf(1);
        const entity = entities[0];
        expect(entity).to.have.nested.property('attributes.icon', 'mdi:power-socket-eu');
        expect(entity).to.have.nested.property('context.STATE');
        expect(entity).to.have.nested.property('context.STATE.setId', control.states[0].id);
        expect(entity).to.have.nested.property('context.STATE.getId', control.states[1].id);
        mock.verify();
    });

    it('button', function () {
        const id = 'test.button';
        const control = {
            type: Types.button,
            states: [
                {
                    indicator: false, type: 'boolean', name: 'SET', required: true, write: true, defaultRole: 'switch', id: 'test.button.state'
                }
            ]
        };
        const _obj = {
            type: 'device',
            common: {
                name: 'Some Button'
            },
            native: {},
            _id: id
        };

        const mock = sinon.mock(mockServer);
        mock.expects('_addID2entity').once().withArgs(control.states[0].id);

        const entities = processSocket(id,control, null, null, null, _obj);
        expect(entities).to.have.lengthOf(1);
        const entity = entities[0];
        expect(entity).to.not.have.nested.property('attributes.icon');
        expect(entity).to.have.nested.property('context.STATE');
        expect(entity).to.have.nested.property('context.STATE.setId', control.states[0].id);
        mock.verify();
    });*/
});
