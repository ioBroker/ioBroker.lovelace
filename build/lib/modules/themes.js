"use strict";
var import_themesYaml = require("../themesYaml");
class ThemesModule {
  adapter;
  sendUpdate;
  _themes = {};
  _currentTheme;
  _currentThemeDark;
  _darkMode = false;
  constructor(options) {
    this.adapter = options.adapter;
    this.sendUpdate = options.sendUpdate;
    this._currentTheme = this.adapter.config.defaultTheme || "default";
    this._currentThemeDark = this.adapter.config.defaultThemeDark || "default";
  }
  /** Returns the payload for the `frontend/get_themes` WebSocket message. */
  getThemes() {
    return {
      themes: this._themes,
      default_theme: this._currentTheme || this.adapter.config.defaultTheme || "default",
      default_dark_theme: this._currentThemeDark || this.adapter.config.defaultThemeDark || "default",
      darkMode: this._darkMode
    };
  }
  /**
   * Parse the theme YAML, fill the `control.theme`/`control.themeDark` value dropdowns with the
   * available theme names, and load the currently selected themes and dark-mode flag. Neither a
   * broken YAML nor a theme that disappeared from it discards what the user selected, see
   * `_readSelection()`.
   */
  async init() {
    let parsed = true;
    try {
      this._themes = (0, import_themesYaml.parseThemes)(this.adapter.config.themes);
    } catch (error) {
      this.adapter.log.error(`Cannot parse themes: ${error instanceof Error ? error.message : String(error)}`);
      this._themes = {};
      parsed = false;
    }
    if (parsed) {
      const states = { default: "default" };
      for (const themeName of Object.keys(this._themes)) {
        states[themeName] = themeName;
      }
      for (const ctrl of ["control.theme", "control.themeDark"]) {
        const fullId = `${this.adapter.namespace}.${ctrl}`;
        const obj = await this.adapter.getObjectAsync(fullId);
        if (obj && obj.common) {
          obj.common.states = { ...states };
          await this.adapter.setObject(fullId, obj);
        } else {
          this.adapter.log.warn(`State ${fullId} missing`);
        }
      }
    }
    this._currentTheme = await this._readSelection("control.theme", this.adapter.config.defaultTheme);
    this._currentThemeDark = await this._readSelection("control.themeDark", this.adapter.config.defaultThemeDark);
    const darkModeState = await this.adapter.getStateAsync(`${this.adapter.namespace}.control.darkMode`);
    if (darkModeState) {
      this._darkMode = !!darkModeState.val;
    }
    this.adapter.log.debug("themes: init done");
  }
  /**
   * Read one of the theme selections without ever discarding it.
   *
   * A theme the parsed YAML does not know right now is kept: the setting may be broken or the
   * theme may have been renamed while editing it, and overwriting the state here would lose the
   * selection for good - the user would have to pick the theme again, or restore a backup. The
   * frontend ignores a theme it does not know and falls back to the default look, so the
   * selection simply takes effect again once the theme is back. Only a selection that was never
   * made is filled from the configuration.
   *
   * @param ctrl - `control.theme` or `control.themeDark`
   * @param configured - the default from the adapter configuration
   * @returns the theme name to report to the frontend
   */
  async _readSelection(ctrl, configured) {
    const fullId = `${this.adapter.namespace}.${ctrl}`;
    const state = await this.adapter.getStateAsync(fullId);
    const selected = (state == null ? void 0 : state.val) === null || (state == null ? void 0 : state.val) === void 0 ? "" : String(state.val);
    if (!selected) {
      const fallback = configured || "default";
      await this.adapter.setStateAsync(fullId, fallback, true);
      return fallback;
    }
    if (selected !== "default" && !this._themes[selected]) {
      this.adapter.log.warn(
        `Theme "${selected}" of ${ctrl} is not among the configured themes. Keeping the selection, the default look is used until the theme is back.`
      );
    }
    return selected;
  }
  /**
   * React to a change of one of the theme control states. Updates the selection and notifies
   * clients via `themes_updated`.
   *
   * @param id - the changed state id
   * @param state - the new state
   * @returns true if this was a theme control state (and was handled)
   */
  onStateChange(id, state) {
    if (!state) {
      return false;
    }
    if (id === `${this.adapter.namespace}.control.theme` || id === `${this.adapter.namespace}.control.themeDark`) {
      const dark = id.includes("Dark");
      const value = state.val === null || state.val === void 0 || state.val === "" ? "default" : String(state.val);
      if (value !== "default" && !this._themes[value]) {
        this.adapter.log.warn(`Theme "${value}" is not among the configured themes.`);
      }
      if (dark) {
        this._currentThemeDark = value;
      } else {
        this._currentTheme = value;
      }
      this.sendUpdate("themes_updated");
      return true;
    }
    if (id === `${this.adapter.namespace}.control.darkMode`) {
      if (this._darkMode !== !!state.val) {
        this._darkMode = !!state.val;
        this.sendUpdate("themes_updated");
      }
      return true;
    }
    return false;
  }
}
module.exports = ThemesModule;
//# sourceMappingURL=themes.js.map
