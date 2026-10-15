import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const ThemesModule = require('../modules/themes');

interface Harness {
    mod: any;
    /** the states the fake states DB holds */
    states: Record<string, { val: unknown } | undefined>;
    /** every setState the module performed */
    written: { id: string; val: unknown }[];
    /** the `common.states` the dropdown objects carry */
    dropdowns: Record<string, Record<string, string> | undefined>;
    warnings: string[];
}

/**
 * Build a ThemesModule over a fake adapter.
 *
 * @param themes - the YAML of the `themes` setting
 * @param selected - the value of `control.theme` / `control.themeDark`, undefined for no state
 * @param config - the configured default themes
 * @param config.defaultTheme - the configured default light theme
 * @param config.defaultThemeDark - the configured default dark theme
 */
function makeModule(
    themes: string | undefined,
    selected: string | undefined,
    config: { defaultTheme?: string; defaultThemeDark?: string } = {},
): Harness {
    const states: Record<string, { val: unknown } | undefined> = {
        'lovelace.0.control.theme': selected === undefined ? undefined : { val: selected },
        'lovelace.0.control.themeDark': selected === undefined ? undefined : { val: selected },
    };
    const written: { id: string; val: unknown }[] = [];
    const warnings: string[] = [];
    const objects: Record<string, any> = {
        'lovelace.0.control.theme': { common: { name: 'theme', states: { default: 'default', old: 'old' } } },
        'lovelace.0.control.themeDark': { common: { name: 'themeDark', states: { default: 'default', old: 'old' } } },
    };

    const mod = new ThemesModule({
        adapter: {
            namespace: 'lovelace.0',
            config: { themes, ...config },
            log: {
                error: () => {},
                warn: (message: string) => warnings.push(message),
                debug: () => {},
            },
            getObjectAsync: (id: string) => Promise.resolve(objects[id]),
            setObject: (id: string, obj: any) => {
                objects[id] = obj;
                return Promise.resolve();
            },
            getStateAsync: (id: string) => Promise.resolve(states[id]),
            setStateAsync: (id: string, val: unknown) => {
                written.push({ id, val });
                states[id] = { val };
                return Promise.resolve();
            },
        },
        sendUpdate: () => {},
    });

    return {
        mod,
        states,
        written,
        warnings,
        get dropdowns() {
            return {
                theme: objects['lovelace.0.control.theme'].common.states,
                themeDark: objects['lovelace.0.control.themeDark'].common.states,
            };
        },
    };
}

describe('modules/themes selection', function () {
    it('offers the configured themes in the control dropdowns', async function () {
        const h = makeModule('mine:\n  primary-color: red\n', 'mine');
        await h.mod.init();

        expect(h.dropdowns.theme).to.deep.equal({ default: 'default', mine: 'mine' });
        expect(h.mod.getThemes().default_theme).to.equal('mine');
    });

    it('keeps the selected theme when the YAML is broken', async function () {
        // Editing the YAML can leave it unparseable. Resetting the selection to "default" here lost
        // it for good: putting the YAML back did not bring the theme back, only a full restore did.
        const h = makeModule('mine:\n  primary-color: red\n bad: [', 'mine');
        await h.mod.init();

        expect(h.written).to.deep.equal([]);
        expect(h.states['lovelace.0.control.theme']).to.deep.equal({ val: 'mine' });
        expect(h.mod.getThemes().default_theme).to.equal('mine');
    });

    it('leaves the dropdowns alone when the YAML is broken', async function () {
        const h = makeModule('mine:\n  primary-color: red\n bad: [', 'mine');
        await h.mod.init();

        expect(h.dropdowns.theme).to.deep.equal({ default: 'default', old: 'old' });
    });

    it('keeps a selected theme that is no longer in the YAML, and says so', async function () {
        const h = makeModule('other:\n  primary-color: red\n', 'mine');
        await h.mod.init();

        expect(h.written).to.deep.equal([]);
        expect(h.mod.getThemes().default_theme).to.equal('mine');
        expect(h.warnings.join(' ')).to.contain('"mine"');
    });

    it('fills a selection that was never made from the configuration', async function () {
        const h = makeModule('mine:\n  primary-color: red\n', undefined, {
            defaultTheme: 'mine',
            defaultThemeDark: 'mine',
        });
        await h.mod.init();

        expect(h.written).to.deep.equal([
            { id: 'lovelace.0.control.theme', val: 'mine' },
            { id: 'lovelace.0.control.themeDark', val: 'mine' },
        ]);
        expect(h.mod.getThemes().default_theme).to.equal('mine');
    });

    it('takes over a theme the frontend does not know yet', async function () {
        // The selection used to be dropped silently, so picking the theme appeared to do nothing.
        const h = makeModule('mine:\n  primary-color: red\n', 'mine');
        await h.mod.init();

        expect(h.mod.onStateChange('lovelace.0.control.theme', { val: 'not-yet-configured' })).to.equal(true);
        expect(h.mod.getThemes().default_theme).to.equal('not-yet-configured');
    });
});
