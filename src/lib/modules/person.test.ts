import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const PersonModule = require('../modules/person');

describe('modules/person person/list', function () {
    it('answers with { storage, config } built from the user cache', function () {
        const mod = new PersonModule({
            adapter: { config: { auth: true, defaultUser: 'admin' }, log: { warn: () => {} } },
        });
        mod.usersCache = {
            'system.user.admin': { iobId: 'system.user.admin', name: 'Admin', picture: 'p.png' },
            'system.user.guest': { iobId: 'system.user.guest', name: 'Guest' },
        };

        const sent: any[] = [];
        const handled = mod.processMessage(
            { send: (d: string) => sent.push(JSON.parse(d)) },
            { type: 'person/list', id: 7 },
        );

        expect(handled).to.equal(true);
        expect(sent).to.have.lengthOf(1);
        const msg = sent[0];
        expect(msg).to.include({ id: 7, type: 'result', success: true });
        expect(msg.result.config).to.deep.equal([]);
        expect(msg.result.storage).to.have.lengthOf(2);
        const admin = msg.result.storage.find((p: any) => p.id === 'system.user.admin');
        expect(admin).to.deep.equal({
            id: 'system.user.admin',
            name: 'Admin',
            user_id: 'system.user.admin',
            device_trackers: [],
            picture: 'p.png',
        });
        expect(msg.result.storage.find((p: any) => p.id === 'system.user.guest').picture).to.equal(null);
    });

    it('ignores non-person messages', function () {
        const mod = new PersonModule({
            adapter: { config: { auth: true, defaultUser: 'admin' }, log: { warn: () => {} } },
        });
        expect(mod.processMessage({ send: () => {} }, { type: 'other', id: 1 })).to.equal(false);
    });
});

describe('modules/person translated user names (#731 follow-up)', function () {
    function makeModule(): any {
        return new PersonModule({
            adapter: {
                lang: 'de',
                config: { auth: true, defaultUser: 'system.user.admin' },
                log: { warn: () => {}, debug: () => {} },
            },
        });
    }

    it('reduces a translated common.name to a string on an object change', function () {
        const mod = makeModule();
        mod.onObjectChange('system.user.guest', {
            _id: 'system.user.guest',
            common: { enabled: true, name: { de: 'Gast', en: 'Guest' } },
        });
        // A raw translation object reaching the frontend crashes the view that renders it (#731).
        expect(mod.usersCache['system.user.guest'].name).to.equal('Gast');
    });

    it('reduces a translated common.name to a string on init', async function () {
        const mod = makeModule();
        mod.adapter.getForeignObjectsAsync = () =>
            Promise.resolve({
                'system.user.admin': { common: { enabled: true, name: { en: 'Administrator' } } },
            });
        mod.adapter.subscribeObjectsAsync = () => Promise.resolve();

        await mod.init();

        // 'de' is missing -> English is the fallback, never the object.
        expect(mod.usersCache['system.user.admin'].name).to.equal('Administrator');
        expect(mod.getShorList()).to.deep.equal({ 'system.user.admin': 'Administrator' });
    });
});
