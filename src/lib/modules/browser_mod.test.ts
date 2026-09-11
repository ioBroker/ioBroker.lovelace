import { expect } from 'chai';

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
            getObjectViewAsync: async () => ({ rows: stateIds.map(id => ({ id, value: { _id: id } })) }),
            getStateAsync: async (id: string) => {
                if (id === `${NS}.instances.hideSidebar`) {
                    return rootHideSidebar === undefined ? null : { val: rootHideSidebar };
                }
                return null;
            },
            setStateAsync: async (id: string, val: unknown) => {
                setStates.push([id, val]);
            },
            setState: async (id: string, val: unknown) => {
                setStates.push([id, val]);
            },
            setObjectNotExistsAsync: async () => {},
            extendObject: (_id: string, _o: unknown, cb?: () => void) => cb && cb(),
            delObjectAsync: async () => {},
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
