const processSocket = require('./switch').processSocket;
const utils = require('./../entities/utils');

const {Types} = require('iobroker.type-detector');

const expect = require('chai').expect;
const sinon = require('sinon');

describe('converters/switch', function () {
    it('socket', function () {
        const id = 'test.socket';
        const control = {
            type: Types.socket,
            states: [
                {
                    indicator: false, type: 'boolean', name: 'SET', required: true, write: true, defaultRole: 'switch', id: 'test.socket.state'
                },
                {
                    indicator: false, type: 'boolean', name: 'ACTUAL', required: true, write: false, defaultRole: 'switch'
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

        const mock = sinon.mock(utils);
        mock.expects('addID2entity').once().withArgs(control.states[0].id);

        const entities = processSocket(id,control, null, null, null, _obj);
        expect(entities).to.have.lengthOf(1);
        const entity = entities[0];
        expect(entity).to.have.nested.property('attributes.icon', 'mdi:power-socket-eu');
        expect(entity).to.have.nested.property('context.STATE');
        expect(entity).to.have.nested.property('context.STATE.setId', control.states[0].id);
        expect(entity).to.have.nested.property('context.STATE.getId', control.states[0].id);
        mock.verify();
    });

    it('socket with ACTUAL', function () {
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

        const mock = sinon.mock(utils);
        mock.expects('addID2entity').once().withArgs(control.states[0].id);
        mock.expects('addID2entity').once().withArgs(control.states[1].id);

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

        const mock = sinon.mock(utils);
        mock.expects('addID2entity').once().withArgs(control.states[0].id);

        const entities = processSocket(id,control, null, null, null, _obj);
        expect(entities).to.have.lengthOf(1);
        const entity = entities[0];
        expect(entity).to.not.have.nested.property('attributes.icon');
        expect(entity).to.have.nested.property('context.STATE');
        expect(entity).to.have.nested.property('context.STATE.setId', control.states[0].id);
        mock.verify();
    });
});
