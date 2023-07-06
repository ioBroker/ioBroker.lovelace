const convertSensor = require('./sensor');
const utils = require('./../entities/utils');
const {Types} = require('iobroker.type-detector');

const expect = require('chai').expect;
const sinon = require('sinon');

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

        const mock = sinon.mock(utils);
        mock.expects('addID2entity').once().withArgs(control.states[0].id);

        const objects = {};
        objects[_obj._id] = _obj;
        const entities = convertSensor.processWindowTilt(id, control, null, null, null, _obj, objects);
        expect(entities).to.have.lengthOf(1);
        const entity = entities[0];
        expect(entity).to.have.nested.property('attributes.icon', 'mdi:window-maximize');
        expect(entity).to.have.nested.property('attributes.device_class', 'window');
        expect(entity).to.have.nested.property('context.STATE');
        expect(entity).to.have.nested.property('context.STATE.getId', control.states[0].id);
        mock.verify();
    });
});
