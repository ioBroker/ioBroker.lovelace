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
    icon: "mdi:view-dashboard",
    title: "states",
    config: { mode: "storage" },
    url_path: "lovelace",
    require_admin: false,
    default_visible: true,
    show_in_sidebar: true
  },
  // Built-in Home Assistant panels (default values from HA). The frontend localizes the titles.
  energy: {
    component_name: "energy",
    icon: "mdi:lightning-bolt",
    title: "energy",
    config: null,
    url_path: "energy",
    require_admin: false,
    default_visible: true,
    show_in_sidebar: true
  },
  logbook: {
    component_name: "logbook",
    icon: "mdi:format-list-bulleted-type",
    title: "logbook",
    config: null,
    url_path: "logbook",
    require_admin: false,
    default_visible: true,
    show_in_sidebar: true
  },
  history: {
    component_name: "history",
    icon: "mdi:chart-box",
    title: "history",
    config: null,
    url_path: "history",
    require_admin: false,
    default_visible: true,
    show_in_sidebar: true
  },
  config: {
    component_name: "config",
    icon: "hass:settings",
    title: "config",
    config: null,
    url_path: "config",
    require_admin: true,
    default_visible: true,
    show_in_sidebar: true
  },
  profile: {
    component_name: "profile",
    icon: null,
    title: null,
    config: null,
    url_path: "profile",
    require_admin: false,
    default_visible: false,
    show_in_sidebar: false
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
    config_panel_domain: null,
    default_visible: true,
    show_in_sidebar: true
  }
};
var panels_default = panels;
//# sourceMappingURL=panels.js.map
