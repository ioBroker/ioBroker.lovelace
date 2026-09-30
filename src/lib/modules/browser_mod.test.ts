import { expect } from 'chai';
import sinon from 'sinon';
import { readFileSync } from 'node:fs';
import { detectCardVersion } from '../cards';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const BrowserModModule = require('../modules/browser_mod');

const NS = 'lovelace.0';

function makeAdapter(): any {
    return {
        namespace: NS,
        config: { maxBrowserInstances: 50 },
        log: { debug: () => {}, info: () => {}, warn: () => {}, error: () => {} },
        getStateAsync: (id: string) => {
            // The root ("target all") states hold no value in these tests - only the per-browser
            // mirrors do. Both are read back on init now, so they must be distinguishable.
            if (id === `${NS}.instances.hideSidebar` || id === `${NS}.instances.hideHeader`) {
                return null;
            }
            if (id.endsWith('hideSidebar')) {
                return { val: true };
            }
            if (id.endsWith('hideHeader')) {
                return { val: true };
            }
            if (id.endsWith('.online')) {
                return { lc: 100 };
            }
            return null;
        },
        setStateAsync: async () => {},
        setState: async () => {},
        setObjectNotExistsAsync: async () => {},
        getObjectAsync: () => Promise.resolve(null),
        setObjectAsync: () => Promise.resolve(),
        extendObject: (_id: string, _o: unknown, cb?: () => void) => cb && cb(),
        delObjectAsync: async () => {},
    };
}

describe('modules/browser_mod hideSidebar persistence', function () {
    it('initialiseBrowserSettings copies the global settings (no shared reference)', function () {
        const mod: any = new BrowserModModule({ adapter: makeAdapter(), objects: {} });
        mod.initialiseBrowserSettings('A');
        // Mutating one browser must not touch the global defaults or another browser (default: true).
        mod.browserModStorage.browsers.A.settings.hideSidebar = false;
        mod.initialiseBrowserSettings('B');

        expect(mod.browserModStorage.settings.hideSidebar).to.equal(true);
        expect(mod.browserModStorage.browsers.B.settings.hideSidebar).to.equal(true);
        expect(mod.browserModStorage.browsers.A.settings).to.not.equal(mod.browserModStorage.settings);
    });

    it('init restores the persisted per-browser hideSidebar instead of the global default', async function () {
        const objects: Record<string, unknown> = {
            [`${NS}.instances.A.online`]: {},
            [`${NS}.instances.A.hideSidebar`]: {},
        };
        const mod: any = new BrowserModModule({ adapter: makeAdapter(), objects });
        // Global default differs from the stored per-browser value to prove it is actually restored.
        mod.browserModStorage.settings.hideSidebar = false;

        await mod.init({ views: [] });

        expect(mod.browserModStorage.browsers.A.settings.hideSidebar).to.equal(true);
        expect(mod.browserModStorage.settings.hideSidebar).to.equal(false);
    });

    it('a root "target all" write updates the default and every browser + per-instance state', async function () {
        const setStates: [string, unknown][] = [];
        const adapter = makeAdapter();
        adapter.setStateAsync = (id: string, val: unknown) => {
            setStates.push([id, val]);
            return Promise.resolve();
        };
        const objects: Record<string, unknown> = { [`${NS}.instances.A.hideSidebar`]: {} };
        const mod: any = new BrowserModModule({ adapter, objects });
        mod.initialiseBrowserSettings('A');
        mod.clients = { A: { subscribeId: 1, instance: 'A', ws: { send: () => {} } } };

        // Root write: instances.hideSidebar (no browser id), not acked (user write).
        mod.onStateChange(`${NS}.instances.hideSidebar`, { val: false, ack: false });
        await new Promise(r => setTimeout(r, 5));

        expect(mod.browserModStorage.settings.hideSidebar).to.equal(false); // new default
        expect(mod.browserModStorage.browsers.A.settings.hideSidebar).to.equal(false); // pushed to browser
        expect(setStates).to.deep.include(['instances.A.hideSidebar', false]); // mirrored to per-instance state
    });

    it('seeds change_browser_id with the current browser id', async function () {
        const setStates: [string, unknown][] = [];
        const adapter = makeAdapter();
        adapter.setStateAsync = (id: string, val: unknown) => {
            setStates.push([id, val]);
            return Promise.resolve();
        };
        const mod: any = new BrowserModModule({ adapter, objects: {} });

        await mod._checkObjects('instances.blau', 'blau');

        expect(setStates).to.deep.include(['lovelace.0.instances.blau.change_browser_id', 'blau']);
    });
});

describe('modules/browser_mod invalid browser ids', function () {
    it('sanitizes a garbage browser id for all state ids (no invalid characters)', function () {
        const mod: any = new BrowserModModule({ adapter: makeAdapter(), objects: {} });
        expect(mod._sanitizeBrowserId('[object Object]')).to.equal('_object_Object_');
        expect(mod._sanitizeBrowserId('browser_mod_abc12_def34')).to.equal('browser_mod_abc12_def34');
        expect(mod._sanitizeBrowserId('with.dots and spaces')).to.equal('with_dots_and_spaces');
    });

    it('rejects a non-string browserID like the python backend', async function () {
        const warns: string[] = [];
        const adapter = makeAdapter();
        adapter.log.warn = (m: string) => warns.push(m);
        const mod: any = new BrowserModModule({ adapter, objects: {} });

        const handled = await mod.processMessage(
            { send: () => {}, on: () => {} },
            { type: 'browser_mod/connect', id: 1, browserID: { some: 'object' } },
        );

        expect(handled).to.equal(true);
        expect(Object.keys(mod.clients)).to.have.lengthOf(0);
        expect(warns.some(w => w.includes('not a string'))).to.equal(true);
    });

    it('connect with a garbage string id registers under the sanitized id and asks the client to rename', async function () {
        const sent: any[] = [];
        const mod: any = new BrowserModModule({ adapter: makeAdapter(), objects: {} });
        const ws = { send: (d: string) => sent.push(JSON.parse(d)), on: () => {} };

        await mod.processMessage(ws, { type: 'browser_mod/connect', id: 7, browserID: '[object Object]' });

        // Registered under the sanitized id - no invalid characters anywhere.
        expect(Object.keys(mod.clients)).to.deep.equal(['_object_Object_']);
        // The client got a change_browser_id command with its raw id and a fresh generated one.
        const flat = sent.flat();
        const heal = flat.find((m: any) => m.event?.command === 'change_browser_id');
        expect(heal, 'heal event missing').to.not.equal(undefined);
        expect(heal.event.current_browser_id).to.equal('[object Object]');
        expect(heal.event.new_browser_id).to.match(/^browser_mod_[0-9a-f]+_[0-9a-f]+$/);
        expect(heal.event.register).to.equal(true);
    });

    it('init purges instance trees with invalid ids', async function () {
        const deleted: string[] = [];
        const adapter = makeAdapter();
        adapter.delObjectAsync = (id: string) => {
            deleted.push(id);
            return Promise.resolve();
        };
        const objects: Record<string, unknown> = {
            [`${NS}.instances._object Object_`]: {},
            [`${NS}.instances._object Object_.online`]: {},
            [`${NS}.instances.good_id.online`]: {},
        };
        const mod: any = new BrowserModModule({ adapter, objects });

        await mod.init({ views: [] });

        expect(deleted).to.include('instances._object Object_');
        expect(deleted.some(d => d.includes('good_id'))).to.equal(false);
        expect(Object.keys(objects).some(k => k.includes('_object Object_'))).to.equal(false);
    });
});

describe('modules/browser_mod setting persistence across restarts (#733)', function () {
    /**
     * Adapter whose object DB knows the instances states, with a settable stored value for the root
     * "target all" hideSidebar. `objects` (the shared cache) is deliberately left empty: the server
     * fills it from a concurrently running _readObjects(), so during init it usually still is.
     *
     * @param rootHideSidebar - value the root hideSidebar state holds, `undefined` for "no state yet"
     */
    function makeDbAdapter(rootHideSidebar: unknown): {
        adapter: any;
        setStates: [string, unknown][];
        stateIds: string[];
    } {
        const setStates: [string, unknown][] = [];
        const stateIds = [`${NS}.instances.hideSidebar`, `${NS}.instances.hideHeader`];
        const adapter: any = {
            namespace: NS,
            config: { maxBrowserInstances: 50 },
            log: { debug: () => {}, info: () => {}, warn: () => {}, error: () => {} },
            getObjectViewAsync: () => Promise.resolve({ rows: stateIds.map(id => ({ id, value: { _id: id } })) }),
            getStateAsync: (id: string) => {
                if (id === `${NS}.instances.hideSidebar`) {
                    return Promise.resolve(rootHideSidebar === undefined ? null : { val: rootHideSidebar });
                }
                return Promise.resolve(null);
            },
            setStateAsync: (id: string, val: unknown) => {
                setStates.push([id, val]);
                return Promise.resolve();
            },
            setState: (id: string, val: unknown) => {
                setStates.push([id, val]);
                return Promise.resolve();
            },
            setObjectNotExistsAsync: () => Promise.resolve(),
            extendObject: (_id: string, _o: unknown, cb?: () => void) => cb && cb(),
            delObjectAsync: () => Promise.resolve(),
        };
        return { adapter, setStates, stateIds };
    }

    it('keeps a stored hideSidebar=false over a restart and does not re-seed the default', async function () {
        const { adapter, setStates } = makeDbAdapter(false);
        // Empty cache on purpose - this is what init() really sees while _readObjects() is still running.
        const mod: any = new BrowserModModule({ adapter, objects: {} });

        await mod.init({ views: [] });

        expect(mod.browserModStorage.settings.hideSidebar, 'stored value must win over the default').to.equal(false);
        // The user's value must not be overwritten with the built-in default (true).
        expect(setStates.filter(([id]) => id.endsWith('instances.hideSidebar'))).to.deep.equal([]);
    });

    it('seeds the root default only when the state has no value yet', async function () {
        const { adapter, setStates } = makeDbAdapter(undefined);
        const mod: any = new BrowserModModule({ adapter, objects: {} });

        await mod.init({ views: [] });

        expect(setStates).to.deep.include([`${NS}.instances.hideSidebar`, true]);
        expect(mod.browserModStorage.settings.hideSidebar).to.equal(true);
    });
});

describe('modules/browser_mod requests without a browser id (browser_mod 3.x)', function () {
    function makeWs(): { ws: any; sent: any[] } {
        const sent: any[] = [];
        return { ws: { send: (d: string) => sent.push(JSON.parse(d)), on: () => {} }, sent };
    }

    it('stores a global setting that comes without a browserID', async function () {
        const mod: any = new BrowserModModule({ adapter: makeAdapter(), objects: {} });
        const { ws, sent } = makeWs();

        // set_setting(key, value, 'global') sends no browserID - this used to be dropped.
        const handled = await mod.processMessage(ws, {
            type: 'browser_mod/settings',
            key: 'lockRegister',
            value: true,
            id: 5,
        });

        expect(handled).to.equal(true);
        expect(mod.browserModStorage.settings.lockRegister).to.equal(true);
        expect(sent[0]).to.include({ id: 5, type: 'result', success: true });
    });

    it('stores a per-user setting that comes without a browserID', async function () {
        const mod: any = new BrowserModModule({ adapter: makeAdapter(), objects: {} });
        const { ws } = makeWs();

        await mod.processMessage(ws, {
            type: 'browser_mod/settings',
            user: 'system.user.admin',
            key: 'defaultPanel',
            value: 'lovelace',
            id: 6,
        });

        expect(mod.browserModStorage.user_settings['system.user.admin'].defaultPanel).to.equal('lovelace');
    });

    it('accepts the repair-issue messages of browser_mod 3.x without answering them', async function () {
        const mod: any = new BrowserModModule({ adapter: makeAdapter(), objects: {} });
        const { ws, sent } = makeWs();

        const handled = await mod.processMessage(ws, {
            type: 'browser_mod/create_issue',
            issue_id: 'default_dashboard_plugin_conflict',
            severity: 'warning',
            id: 7,
        });

        expect(handled).to.equal(true);
        // The frontend sends these without expecting a result.
        expect(sent).to.have.lengthOf(0);
    });

    it('still refuses a request that needs a browser id and has none', async function () {
        const mod: any = new BrowserModModule({ adapter: makeAdapter(), objects: {} });
        const { ws, sent } = makeWs();

        const handled = await mod.processMessage(ws, { type: 'browser_mod/update', data: {}, id: 8 });

        expect(handled).to.equal(true);
        expect(sent).to.have.lengthOf(0);
    });
});

describe('modules/browser_mod default dashboard resolution', function () {
    function makeModule(): any {
        return new BrowserModModule({ adapter: makeAdapter(), objects: {} });
    }

    it('prefers the user setting, then the browser, then the global one', function () {
        const mod = makeModule();
        mod.browserModStorage.settings.defaultPanel = 'global-dash';
        mod.initialiseBrowserSettings('B');
        mod.browserModStorage.browsers.B.settings.defaultPanel = 'browser-dash';
        mod.browserModStorage.user_settings['system.user.admin'] = { defaultPanel: 'user-dash' };

        const ws: any = { browserID: 'B', __auth: { username: 'system.user.admin' } };
        expect(mod.getDefaultPanel(ws)).to.equal('user-dash');

        delete mod.browserModStorage.user_settings['system.user.admin'].defaultPanel;
        expect(mod.getDefaultPanel(ws)).to.equal('browser-dash');

        delete mod.browserModStorage.browsers.B.settings.defaultPanel;
        expect(mod.getDefaultPanel(ws)).to.equal('global-dash');
    });

    it('finds the browser through the sync session before it has connected', function () {
        const mod = makeModule();
        mod.initialiseBrowserSettings('B');
        mod.browserModStorage.browsers.B.settings.defaultPanel = 'browser-dash';
        mod.browserModStorage.sessions['token-1'] = 'B';

        // No browserID on the websocket yet - the frontend asks for its user data before browser_mod
        // connects, which is why the session mapping is used.
        expect(mod.getDefaultPanel({ __auth: { access_token: 'token-1' } } as any)).to.equal('browser-dash');
    });

    it('answers undefined when nothing is configured', function () {
        const mod = makeModule();
        expect(mod.getDefaultPanel({} as any)).to.equal(undefined);
        expect(mod.getGlobalDefaultPanel()).to.equal(undefined);
    });
});

describe('modules/browser_mod version', function () {
    it('reports the version of the browser_mod frontend we ship', function () {
        // The frontend compares both and shows a "version mismatch" reload prompt when they differ.
        // Updating hass_frontend/static_cards/browser_mod*.js means bumping BROWSER_MOD_VERSION too.
        const card = readFileSync(`${__dirname}/../../../hass_frontend/static_cards/browser_mod.js`, 'utf8');
        const shipped = detectCardVersion(card);
        expect(shipped, 'no version found in the shipped browser_mod.js').to.be.a('string');
        expect(BrowserModModule.VERSION).to.equal(shipped);
    });
});

describe('modules/browser_mod settings storage (#751)', function () {
    /**
     * An adapter whose storage object survives, the way ioBroker keeps it over a restart.
     *
     * @param stored - the objects that survive a restart, keyed by id
     * @returns the adapter mock
     */
    function makeAdapterWithStorage(stored: Record<string, any>): any {
        const adapter = makeAdapter();
        adapter.getObjectAsync = (id: string) => Promise.resolve(stored[id] ? { ...stored[id] } : null);
        adapter.setObjectAsync = (id: string, obj: any) => {
            // Store a copy: the module hands over its live settings object.
            stored[id] = { ...obj, native: JSON.parse(JSON.stringify(obj.native)) };
            return Promise.resolve();
        };
        return adapter;
    }

    it('stores a global setting and reads it back after a restart', async function () {
        const clock = sinon.useFakeTimers();
        try {
            const stored: Record<string, any> = {};
            const first: any = new BrowserModModule({ adapter: makeAdapterWithStorage(stored), objects: {} });
            const ws = { send: () => {}, __auth: { username: 'admin' } };

            // What the frontend sends when the sidebar title is changed for all browsers.
            await first.processMessage(ws, {
                type: 'browser_mod/settings',
                key: 'sidebarTitle',
                value: 'ioBroker',
                id: 1,
            });
            // The write waits a moment for the other settings of a connecting browser.
            expect(stored['storage.browserMod']).to.equal(undefined);
            clock.tick(2500);
            await Promise.resolve();

            expect(stored['storage.browserMod'].native.settings.sidebarTitle).to.equal('ioBroker');

            const second: any = new BrowserModModule({ adapter: makeAdapterWithStorage(stored), objects: {} });
            await second.init({ views: [] });
            expect(second.browserModStorage.settings.sidebarTitle).to.equal('ioBroker');
            // The seeded defaults are kept next to what was stored.
            expect(second.browserModStorage.settings.hideSidebar).to.equal(true);
        } finally {
            clock.restore();
        }
    });

    it('restores the settings of a browser and its last_seen', async function () {
        const stored: Record<string, any> = {
            'storage.browserMod': {
                native: {
                    settings: {},
                    browsers: { A: { last_seen: 1700000000000, registered: true, settings: { hideHeader: true } } },
                    user_settings: { 'system.user.admin': { theme: 'dark' } },
                    sessions: { key: 'A' },
                },
            },
        };
        const mod: any = new BrowserModModule({ adapter: makeAdapterWithStorage(stored), objects: {} });
        await mod.init({ views: [] });

        expect(mod.browserModStorage.browsers.A.last_seen).to.equal(1700000000000);
        expect(mod.browserModStorage.browsers.A.settings.hideHeader).to.equal(true);
        expect(mod.browserModStorage.user_settings['system.user.admin']).to.deep.equal({ theme: 'dark' });
        expect(mod.browserModStorage.sessions.key).to.equal('A');
    });

    it('drops what was removed instead of keeping it forever', async function () {
        // Written with setObject, not extendObject: the latter merges deeply, so an unregistered
        // browser would stay in the stored settings.
        const stored: Record<string, any> = {
            'storage.browserMod': {
                type: 'channel',
                common: { name: 'Storage for browser_mod settings' },
                native: {
                    settings: {},
                    browsers: { A: { last_seen: 1, registered: true, settings: {} } },
                    user_settings: {},
                    sessions: {},
                },
            },
        };
        const mod: any = new BrowserModModule({ adapter: makeAdapterWithStorage(stored), objects: {} });
        await mod.init({ views: [] });
        expect(Object.keys(mod.browserModStorage.browsers)).to.deep.equal(['A']);

        delete mod.browserModStorage.browsers.A;
        await mod._saveStorage();

        expect(stored['storage.browserMod'].native.browsers).to.deep.equal({});
    });

    it('hands last_seen to the frontend as a string', function () {
        // The browser_mod panel gives it to ha-relative-time, which converts a string but calls
        // getTime() on a number - that threw "t.getTime is not a function" and left the table broken.
        const mod: any = new BrowserModModule({ adapter: makeAdapter(), objects: {} });
        mod.initialiseBrowserSettings('A');
        mod.browserModStorage.browsers.A.last_seen = 1700000000000;

        const forFrontend = mod._storageForFrontend();
        expect(forFrontend.browsers.A.last_seen).to.equal(new Date(1700000000000).toISOString());
        // never seen -> null, which the frontend shows as "never"
        mod.initialiseBrowserSettings('B');
        expect(mod._storageForFrontend().browsers.B.last_seen).to.equal(null);
    });
});
