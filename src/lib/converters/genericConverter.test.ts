import { expect } from 'chai';
import { iobState2EntityState } from './genericConverter';

function entityOfType(type: string): any {
    return { context: { type, STATE: {} }, attributes: {} };
}

describe('converters/genericConverter iobState2EntityState', function () {
    it('maps a boolean automation main state to on/off (regression #697)', function () {
        const entity = entityOfType('automation');
        expect(iobState2EntityState(entity, true)).to.equal('on');
        expect(iobState2EntityState(entity, false)).to.equal('off');
    });

    it('maps switch/light/input_boolean booleans to on/off', function () {
        expect(iobState2EntityState(entityOfType('switch'), true)).to.equal('on');
        expect(iobState2EntityState(entityOfType('light'), false)).to.equal('off');
        expect(iobState2EntityState(entityOfType('input_boolean'), true)).to.equal('on');
    });

    it('maps any other boolean main state (no attribute) to on/off', function () {
        expect(iobState2EntityState(entityOfType('script'), true)).to.equal('on');
        expect(iobState2EntityState(entityOfType('whatever'), false)).to.equal('off');
    });

    it('does not convert boolean attribute values - they stay true/false', function () {
        const entity = entityOfType('automation');
        expect(iobState2EntityState(entity, true, 'some_attribute')).to.equal(true);
        expect(iobState2EntityState(entity, false, 'some_attribute')).to.equal(false);
    });

    it('maps lock booleans to locked/unlocked', function () {
        expect(iobState2EntityState(entityOfType('lock'), true)).to.equal('unlocked');
        expect(iobState2EntityState(entityOfType('lock'), false)).to.equal('locked');
    });

    it('stringifies a non-boolean main state and reports unknown for null', function () {
        expect(iobState2EntityState(entityOfType('sensor'), 42)).to.equal('42');
        expect(iobState2EntityState(entityOfType('sensor'), null)).to.equal('unknown');
    });
});
