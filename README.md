![Logo](admin/lovelace.png)
# ioBroker.lovelace

![Number of Installations](http://iobroker.live/badges/lovelace-installed.svg)
![Number of Installations](http://iobroker.live/badges/lovelace-stable.svg)
[![NPM version](http://img.shields.io/npm/v/iobroker.lovelace.svg)](https://www.npmjs.com/package/iobroker.lovelace)

![Test and Release](https://github.com/ioBroker/iobroker.lovelace/workflows/Test%20and%20Release/badge.svg)
[![Translation status](https://weblate.iobroker.net/widgets/adapters/-/lovelace/svg-badge.svg)](https://weblate.iobroker.net/engage/adapters/?utm_source=widget)
[![Downloads](https://img.shields.io/npm/dm/iobroker.lovelace.svg)](https://www.npmjs.com/package/iobroker.lovelace)

## lovelace adapter for ioBroker

With this adapter, you can build visualization for ioBroker with Home Assistant Lovelace UI.

## Documentation

* 📘 [English documentation](docs/en/README.md)
* 📗 [Deutsche Dokumentation](docs/de/README.md)

The documentation covers configuration (auto / manual entities), panels & special entities (alarm, timer, weather, map, video, …), custom cards, themes, icons, notifications, voice control and troubleshooting.

## Development

### Original sources for lovelace
Used sources are here https://github.com/GermanBluefox/home-assistant-polymer .

### Todo
Security must be taken from the current user and not from default_user.

### Version
Used version of home-assistant-frontend@20260527.6
Version of Browser Mod: 2.13.5

### How to build the new Lovelace version
First of all, the actual https://github.com/home-assistant/frontend (dev branch) must be **manually** merged into https://github.com/GermanBluefox/home-assistant-polymer.git (***iob*** branch!).

All changes for ioBroker are marked with comment `// IoB`.
For now (20260527.1) following files were modified:
- `build-scripts/gulp/app.js` - Add new gulp task develop-iob
- `build-scripts/gulp/rspack.js` - Add new gulp task rspack-dev-app
- `build-scripts/rspack.cjs` - disable source maps in prod build to reduce emitted file count.
- `src/data/icons.ts` - keep old icons, for now.
- `src/data/weather.ts` - add support to display weather icon from url.
- `src/dialogs/more-info/const.ts` - remove weather state & history, if is image
- `src/dialogs/more-info/ha-more-info-dialog.ts` - remove entity settings button and tab
- `src/dialogs/more-info/ha-more-info-history.ts` - remove `show more` link in history
- `src/dialogs/more-info/ha-more-info-logbook.ts` - remove `show more` link in logbook
- `src/dialogs/more-info/controls/more-info-weather.ts` - add support to display weather icon from url.
- `src/dialogs/voice-command-dialog/ha-voice-command-dialog.ts` - disable configuration of voice assistants
- `src/entrypoints/core.ts` - add no auth option
- `src/panels/lovelace/cards/hui-weather-forecast-card.ts` - add support to display weather icon from url.
- `src/panels/lovelace/entity-rows/hui-weather-entity-row.ts` - add support to display weather icon from url with auth.
- `src/panels/lovelace/hui-root.ts` - added notification button, disable manage dashboards link, hide add (device/automation/area/person) button, open edit-panel dialog for lovelace boards, live dashboard title from hass.panels
- `src/layouts/hass-router-page.ts` - guard updatePageEl against undefined route during rebuild (panel rename crash).
- `src/panels/config/dashboard/ha-config-dashboard.ts` - hide settings sections (automations, apps, voice assistants, system, people, tip).
- `src/panels/config/ha-panel-config.ts` - hide integrations tab in devices & services, land devices & services tile on /config/devices.
- `src/panels/config/developer-tools/ha-panel-developer-tools.ts` - remove yaml, events and assist tabs from developer tools.
- `src/panels/config/developer-tools/developer-tools-router.ts` - default to states tab (yaml removed).
- `src/panels/config/info/ha-config-info.ts` - hide doc/credits/community/license links in about (keep keyboard shortcuts).
- `src/panels/config/lovelace/dashboards/ha-config-lovelace-dashboards.ts` - show fixed panels (incl. browser-mod) in built-in dashboards list.
- `src/panels/profile/ha-panel-profile.ts` - hide security tab in user profile.
- `src/util/documentation-url.ts` - for link to iobroker help instead of home assistant.
- `src/html/index.html.template` - remove Safari smart app banner (apple-itunes-app meta) for HA iOS app (#418).
- `.husky/pre-commit` - remove git commit hooks.

After that checkout modified version in `./build` folder. Then.

1. go to ./build directory.
2. `git clone https://github.com/GermanBluefox/home-assistant-polymer.git` it is a fork of https://github.com/home-assistant/frontend.git, but some things are modified (see the file list earlier).
3. `cd home-assistant-polymer`
4. `git checkout master`
5. `yarn install`
6. `gulp build-app` for release or `gulp develop-iob` for the debugging version. To build web after changes you can call `webpack-dev-app` for faster build, but you need to call `build-app` anyway after the version is ready for use.
7. run script `hass_frontend/static_cards/newFrontend.sh` in adapter repo to update frontend (it assumes that the two repositories are next to each other in the same folder, if not, please adjust script, preferably with some parameter handling and make a PR, thanks :smile: )
8. Run `gulp rename` task.
9. Update the version in `README.md`.

## Changelog

<!--
	PLACEHOLDER for the next version:
	### **WORK IN PROGRESS**
    ### for next frontend update, update of auto entities card will be necessary!
-->
### **WORK IN PROGRESS**
* (Garfonso/Claude) Remove HA-App Banner on iPhone (#418).
* (Garfonso/Claude) New manual entity types `device_tracker` and `person` to show presence/GPS on the map, with object pickers for the presence and location states.
* (Garfonso/Claude) Manual `cover` entities can now be configured with object pickers (e.g. an automatic window), reusing the full cover logic.
* (Garfonso/Claude) Reorganized the user documentation into matching English and German pages under `docs/en` / `docs/de` (entities, cards & UI, features), linked from the README; development/build notes stay in the README.
* (Garfonso/Claude) Fixed history/logbook stopping to load after a while (a hung history request could permanently block all following ones).
* (Garfonso/Claude) Manual `lock` and `media_player` entities can now be configured with object pickers for their states.
* (Garfonso/Claude) Vacuum cleaners are now supported (auto-detection + manual object pickers): start/stop/pause, fan speed and battery.
* (Garfonso/Claude) New manual entity types `humidifier` and `water_heater`, configurable with object pickers.

### 6.0.4 (2026-06-18)
* (Garfonso/Claude) Bound the number of history points fetched per request, so a large history graph can no longer overload the states database.
* (Garfonso/Claude) Manual entities on `system.*`/`script.*` objects (e.g. a JavaScript adapter state) no longer disappear after a restart. (#709)
* (Garfonso/Claude) Manual entities now honor the friendly name and icon set via the frontend's entity settings, and editing them no longer briefly reverts the change.

### 6.0.3 (2026-06-18)
* (Garfonso/Claude) Manually mapped objects outside `alias.0` no longer disappear after a restart when "only generate from alias" is active. (#704)
* (Garfonso/Claude) Limit concurrent history requests to avoid overloading the states database connection.
* (Garfonso/Claude) Fixed a crash in the map card caused by history updates without attributes.
* (Garfonso/Claude) Removed the browser tab title setting; set the dashboard title instead.
* (Garfonso/Claude) Calendar card no longer flickers/reloads in a loop when the calendar source updates frequently.

### 6.0.2 (2026-06-17)
* (Garfonso/Claude) Reduced object-database load (skip our own internal objects, yield during processing) and removed leftover debug logging.
* (Garfonso/Claude) browser_mod re-applies its settings (e.g. hidden sidebar) after a browser registers, so it no longer needs an F5 (hopefully).
* (Garfonso/Claude) Above ~50 referenced states the adapter subscribes to all states at once and filters itself, to reduce database load.
* (Garfonso/Claude) Statistics history is fetched in pages, so a large energy/history request can no longer overload the states database.

### 6.0.1 (2026-06-16)
* (Garfonso/Claude) Fixed issues with statistic recorder and energy dashboard.

### 6.0.0 (2026-06-13)
* (Garfonso/Claude) **BREAKING:** Update to Home Assistant Frontend 20260527.6. See [migration guide in docs](docs/en/theme_migration.md) for theme changes.
* (Garfonso/Claude) **BREAKING:** Internal storage objects were moved into a new `storage` folder to declutter the object tree: `entityRegistry`, `areaRegistry`, `energyPrefs`, `userData` and `dashboardStorage` are now `storage.entityRegistry`, `storage.areaRegistry`, etc. The adapter migrates the data automatically on first start; the old objects are removed. If you referenced any of these object ids directly (scripts), update the paths. (`configuration` stays at the adapter root.)
* (Garfonso/Claude) Frontend user data (themes, dark mode, sidebar order, …) is now saved.
* (Garfonso/Claude) Configure entities directly from the frontend, including entity_id.
* (Garfoson/Claude) Full dashboard support.
* (Garfonso/Claude) Room and function names are now shown in your configured language instead of always English. (#667)
* (Garfonso/Claude) Markdown and template-based cards can now use Home Assistant templates (`{{ states("…") }}`, `is_state`, `state_attr`, `now()`, …) on top of the existing ioBroker `{id}` bindings.
* (Garfonso/Claude) You can set whether the sidebar/header is hidden for new browsers via the `instances.hideSidebar` / `instances.hideHeader` states; changing them also applies to all currently connected browsers.
* (Garfonso/Claude) The browser tab title and the PWA / home-screen app name can now be customized in the adapter settings. (#663)
* (Garfonso/Claude) The automatic entity_id format is now configurable (object name / room + function / ioBroker id). A "Regenerate entity IDs" button in the settings applies a changed format to existing automatic entities and rewrites the dashboards; entities you renamed in the frontend are kept.
* (Garfonso/Claude) Renaming a manually configured entity in the frontend persists to the source object, so it survives a restart.
* (Garfonso/Claude) The main "lovelace" dashboard can now be renamed/re-iconed/hidden from the frontend like the other dashboards
* (Garfonso/Claude) Energy dashboard support
* (Garfonso/Claude) A device's optional electricity states (power, current, voltage, consumption/energy, frequency) are now exposed as `sensor` entities (e.g. on sockets).
* (Garfonso/Claude) Logbook: a request for a future or invalid/empty time range no longer hangs the frontend.
* (Garfonso/Claude) Calendar entities now work with the new frontend: the `calendar/event/subscribe` WebSocket subscription is answered (and refreshes when the calendar state changes), so calendar cards and the calendar panel show events again.
* (Garfonso/Claude) On start, the entity registry now also drops leftover entries (custom names/icons) for objects that no longer exist, not just stale id reservations.
* (Garfonso/Claude) Renamed the settings button "Regenerate entity IDs" to "Apply entity-ID format to the visualization" - it adapts the dashboards to the entity-id setting (entity ids are regenerated on every start anyway).

[Older changelogs can be found there](CHANGELOG_OLD.md)

## License

Copyright (c) 2019-2026, bluefox <dogafox@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
