// eslint-disable-next-line @typescript-eslint/no-require-imports
const yaml = require('js-yaml');

type SendUpdateFn = (type: string) => void;

type AdapterWithThemeConfig = ioBroker.Adapter & {
    config: {
        themes?: string;
        defaultTheme?: string;
        defaultThemeDark?: string;
    };
};

interface ThemesResponse {
    themes: Record<string, unknown>;
    default_theme: string;
    default_dark_theme: string;
    darkMode: boolean;
}

/**
 * Owns the frontend themes: parses the theme YAML from the adapter config, keeps the
 * `control.theme` / `control.themeDark` selection dropdowns in sync, tracks the currently selected
 * light/dark theme and dark-mode flag, and serves the `frontend/get_themes` response.
 */
class ThemesModule {
    private adapter: AdapterWithThemeConfig;
    private sendUpdate: SendUpdateFn;
    private _themes: Record<string, unknown> = {};
    private _currentTheme: string;
    private _currentThemeDark: string;
    private _darkMode = false;

    constructor(options: { adapter: AdapterWithThemeConfig; sendUpdate: SendUpdateFn }) {
        this.adapter = options.adapter;
        this.sendUpdate = options.sendUpdate;
        this._currentTheme = this.adapter.config.defaultTheme || 'default';
        this._currentThemeDark = this.adapter.config.defaultThemeDark || 'default';
    }

    /** Returns the payload for the `frontend/get_themes` WebSocket message. */
    getThemes(): ThemesResponse {
        return {
            themes: this._themes,
            default_theme: this._currentTheme || this.adapter.config.defaultTheme || 'default',
            default_dark_theme: this._currentThemeDark || this.adapter.config.defaultThemeDark || 'default',
            darkMode: this._darkMode,
        };
    }

    /**
     * Parse the theme YAML, fill the `control.theme`/`control.themeDark` value dropdowns with the
     * available theme names, and load the currently selected themes and dark-mode flag.
     */
    async init(): Promise<void> {
        try {
            this._themes = yaml.safeLoad(this.adapter.config.themes || '') || {};
        } catch (depError: unknown) {
            const message = depError instanceof Error ? depError.message : String(depError);
            if (message.includes('yaml.safeLoad') && message.includes('removed')) {
                this._themes = yaml.load(this.adapter.config.themes || '') || {};
            } else {
                this.adapter.log.error(`Cannot parse themes: ${message}`);
                this._themes = {};
            }
        }

        const states: Record<string, string> = { default: 'default' };
        for (const themeName of Object.keys(this._themes)) {
            states[themeName] = themeName;
        }
        for (const ctrl of ['control.theme', 'control.themeDark']) {
            const fullId = `${this.adapter.namespace}.${ctrl}`;
            const obj = await this.adapter.getObjectAsync(fullId);
            if (obj && obj.common) {
                obj.common.states = states;
                await this.adapter.setObject(fullId, obj);
            } else {
                this.adapter.log.warn(`State ${fullId} missing`);
            }
        }

        const state = await this.adapter.getStateAsync(`${this.adapter.namespace}.control.theme`);
        // Remember the currently selected theme, if valid. Select default otherwise.
        if (state && (this._themes[state.val as string] || state.val === 'default')) {
            this._currentTheme = state.val as string;
        } else {
            this._currentTheme = this.adapter.config.defaultTheme || 'default';
            await this.adapter.setStateAsync(`${this.adapter.namespace}.control.theme`, this._currentTheme, true);
        }

        const darkState = await this.adapter.getStateAsync(`${this.adapter.namespace}.control.themeDark`);
        if (darkState && (this._themes[darkState.val as string] || darkState.val === 'default')) {
            this._currentThemeDark = darkState.val as string;
        } else {
            this._currentThemeDark = this.adapter.config.defaultThemeDark || 'default';
            await this.adapter.setStateAsync(
                `${this.adapter.namespace}.control.themeDark`,
                this._currentThemeDark,
                true,
            );
        }

        const darkModeState = await this.adapter.getStateAsync(`${this.adapter.namespace}.control.darkMode`);
        if (darkModeState) {
            this._darkMode = !!darkModeState.val;
        }
        this.adapter.log.debug('themes: init done');
    }

    /**
     * React to a change of one of the theme control states. Updates the selection and notifies
     * clients via `themes_updated`.
     *
     * @param id - the changed state id
     * @param state - the new state
     * @returns true if this was a theme control state (and was handled)
     */
    onStateChange(id: string, state: ioBroker.State | null | undefined): boolean {
        if (!state) {
            return false;
        }
        if (id === `${this.adapter.namespace}.control.theme` || id === `${this.adapter.namespace}.control.themeDark`) {
            const dark = id.includes('Dark');
            if (this._themes[state.val as string] || state.val === 'default') {
                if (dark) {
                    this._currentThemeDark = state.val as string;
                } else {
                    this._currentTheme = state.val as string;
                }
                this.sendUpdate('themes_updated');
            }
            return true;
        }
        if (id === `${this.adapter.namespace}.control.darkMode`) {
            if (this._darkMode !== !!state.val) {
                this._darkMode = !!state.val;
                this.sendUpdate('themes_updated');
            }
            return true;
        }
        return false;
    }
}

export = ThemesModule;
