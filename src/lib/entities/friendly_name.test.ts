import { expect } from 'chai';
import { getFriendlyName } from './friendly_name';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData = require('../../../lib/dataSingleton');

describe('entities/friendly_name', function () {
    beforeEach(function () {
        entityData.lang = 'en';
    });

    it('predefined name wins over everything else', function () {
        const obj = { common: { name: 'ignored', smartName: 'also ignored' }, _id: 'ignored' } as ioBroker.Object;
        expect(getFriendlyName('My Name', obj, 'room', 'func')).to.equal('My Name');
    });

    it('smartName (string) is used when no predefined name', function () {
        const obj = { common: { name: 'ignored', smartName: 'Smart' }, _id: 'ignored' } as ioBroker.Object;
        expect(getFriendlyName(null, obj, 'room', 'func')).to.equal('Smart');
    });

    it('smartName (object) uses configured language', function () {
        entityData.lang = 'de';
        const obj = { common: { name: 'ignored', smartName: { en: 'English', de: 'Deutsch' } }, _id: 'ignored' } as ioBroker.Object;
        expect(getFriendlyName(null, obj, null, null)).to.equal('Deutsch');
    });

    it('smartName (object) falls back to English', function () {
        entityData.lang = 'fr';
        const obj = { common: { name: 'ignored', smartName: { en: 'English', de: 'Deutsch' } }, _id: 'ignored' } as ioBroker.Object;
        expect(getFriendlyName(null, obj, null, null)).to.equal('English');
    });

    it('common.name (string) is used when no smartName', function () {
        const obj = { common: { name: 'Common Name' }, _id: 'ignored' } as ioBroker.Object;
        expect(getFriendlyName(null, obj, 'room', 'func')).to.equal('Common Name');
    });

    it('common.name (object) uses configured language', function () {
        entityData.lang = 'de';
        const obj = { common: { name: { en: 'English', de: 'Deutsch' } }, _id: 'ignored' } as ioBroker.Object;
        expect(getFriendlyName(null, obj, null, null)).to.equal('Deutsch');
    });

    it('common.name (object) falls back to English', function () {
        entityData.lang = 'fr';
        const obj = { common: { name: { en: 'English', de: 'Deutsch' } }, _id: 'ignored' } as ioBroker.Object;
        expect(getFriendlyName(null, obj, null, null)).to.equal('English');
    });

    it('room and function are combined when no name is available', function () {
        const obj = { common: {}, _id: 'ignored' } as ioBroker.Object;
        expect(getFriendlyName(null, obj, 'Living Room', 'Light')).to.equal('Living Room Light');
    });

    it('room and function require both to be set', function () {
        const obj = { common: {}, _id: 'ignored' } as ioBroker.Object;
        expect(getFriendlyName(null, obj, 'Living Room', null)).to.equal('ignored');
    });

    it('falls back to object _id as last resort', function () {
        const obj = { _id: 'the.object.id' } as ioBroker.Object;
        expect(getFriendlyName(null, obj, null, null)).to.equal('the.object.id');
    });

    it('returns null/falsy when object itself is absent', function () {
        expect(getFriendlyName(null, null, null, null)).to.be.undefined;
    });
});
