"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var panels_exports = {};
__export(panels_exports, {
  default: () => panels_default
});
module.exports = __toCommonJS(panels_exports);
const panels = {
  lovelace: {
    component_name: "lovelace",
    icon: null,
    title: null,
    config: { mode: "storage" },
    url_path: "lovelace",
    require_admin: false
  },
  config: {
    component_name: "config",
    icon: "hass:settings",
    title: "config",
    config: null,
    url_path: "config",
    require_admin: true
  },
  profile: {
    component_name: "profile",
    icon: null,
    title: null,
    config: null,
    url_path: "profile",
    require_admin: false
  },
  "browser-mod": {
    component_name: "custom",
    icon: "mdi:server",
    title: "Browser Mod",
    config: {
      _panel_custom: {
        name: "browser-mod-panel",
        js_url: "/cards/_static_browser_mod_panel.js"
      }
    },
    url_path: "browser-mod",
    require_admin: false,
    config_panel_domain: null
  }
};
var panels_default = panels;
module.exports = panels;
//# sourceMappingURL=panels.js.map
