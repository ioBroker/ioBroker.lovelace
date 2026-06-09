import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const BrowserModModule = require('../modules/browser_mod');

const NS = 'lovelace.0';

function makeAdapter(): any {
    return {
        namespace: NS,
        config: { maxBrowserInstances: 50 },
        log: { debug: () => {}, info: () => {}, warn: () => {}, error: () => {} },
        getStateAsync: async (id: string) => {
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
        // Mutating one browser must not touch the global defaults or another browser.
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
});
