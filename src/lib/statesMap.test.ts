import { expect } from 'chai';
import { normalizeStates, parseStatesString } from './statesMap';

describe('lib/statesMap', function () {
    it('reads the pairs of a states string', function () {
        expect(parseStatesString('0:off;1:on')).to.deep.equal({ 0: 'off', 1: 'on' });
    });

    it('reads a states string whose values are their own text', function () {
        // what a user writes for an input_select of plain words
        expect(parseStatesString('Inland:Inland;Ausland:Ausland;Paket:Paket')).to.deep.equal({
            Inland: 'Inland',
            Ausland: 'Ausland',
            Paket: 'Paket',
        });
    });

    it('takes a value without a text as its own text', function () {
        expect(parseStatesString('Inland;Ausland')).to.deep.equal({ Inland: 'Inland', Ausland: 'Ausland' });
    });

    it('ignores empty pairs and trims the texts', function () {
        expect(parseStatesString(' 0 : off ; ; 1 : on ;')).to.deep.equal({ 0: 'off', 1: 'on' });
    });

    it('keeps a text that holds a colon', function () {
        expect(parseStatesString('1:a:b')).to.deep.equal({ 1: 'a:b' });
    });

    it('hands a map and a list back unchanged', function () {
        const map = { 0: 'off' };
        const list = ['off', 'on'];
        expect(normalizeStates(map)).to.equal(map);
        expect(normalizeStates(list)).to.equal(list);
    });

    it('has no states for an empty setting', function () {
        expect(normalizeStates(undefined)).to.equal(undefined);
        expect(normalizeStates(null)).to.equal(undefined);
        expect(normalizeStates('')).to.equal(undefined);
    });

    it('warns about the string form, so the user can fix the object', function () {
        let warned = 0;
        normalizeStates('0:off', () => warned++);
        normalizeStates({ 0: 'off' }, () => warned++);
        expect(warned).to.equal(1);
    });
});
