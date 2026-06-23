import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const AreaRegistry = require('../modules/areaRegistry');

function makeModule(rooms: Record<string, unknown>, lang = 'de'): any {
    return new AreaRegistry({
        adapter: { lang, log: { debug: () => {} } },
        rooms,
        sendResponse: () => {},
        sendUpdate: () => {},
    });
}

describe('modules/areaRegistry _createEntryFromRoom', function () {
    it('resolves a translated name in the adapter language', function () {
        const mod = makeModule({});
        const entry = mod._createEntryFromRoom({
            _id: 'enum.rooms.living',
            common: { name: { de: 'Wohnzimmer', en: 'Living' }, icon: 'mdi:sofa' },
        });
        expect(entry.name).to.equal('Wohnzimmer');
        expect(entry.area_id).to.equal('enum.rooms.living');
        expect(entry.icon).to.equal('mdi:sofa');
    });

    it('does not crash on a room without a name (falls back to the id)', function () {
        const mod = makeModule({}, '');
        const entry = mod._createEntryFromRoom({ _id: 'enum.rooms.broken', common: {} });
        expect(entry.name).to.equal('enum.rooms.broken');
        expect(entry.icon).to.equal(null);
    });

    it('survives an empty name object and a missing common', function () {
        const mod = makeModule({});
        expect(mod._createEntryFromRoom({ _id: 'enum.rooms.a', common: { name: {} } }).name).to.equal('enum.rooms.a');
        expect(mod._createEntryFromRoom({ _id: 'enum.rooms.b' }).name).to.equal('enum.rooms.b');
    });
});
