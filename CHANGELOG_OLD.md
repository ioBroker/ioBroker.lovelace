# Older Changes
## 4.0.6 (2023-12-09)
* (Garfonso) fixed: thermostat card for thermostats without mode / off state
* (Garfonso) fixed: history and history graph missing for some stuff

## 4.0.5 (2023-12-09)
* (Garfonso) revert shopping list
* (Garfonso) prevent invalid date error

## 4.0.4 (2023-12-09)
* (Garfonso) fix: crash

## 4.0.3 (2023-12-09)
* (Garfonso) fix: tests.

## 4.0.2 (2023-12-09)
* (Garfonso) fix: crash

## 4.0.1 (2023-12-08)
* (Garfonso) fix: hideHeader object is writable

## 4.0.0 (2023-12-08)
* (Garfonso) Breaking: Update frontent to 2023.12.08.1
* (Garfonso) Breaking: all states default to string now. Added some exceptions (like timestamps). Check your filters.
* (Garfonso) Use better random numbers for tokens.
* (Garfonso) Support media_play_pause (mini-media-player card play / pause) again.
* (Garfonso) Support for input_select
* (Garfonso) Improve support for sensor with device_class=date
* (Garfonso) Remove hideToolbar from settings. Now using browser_mod to allow per instance control.
* (Garfonso) repaired persistent notifications.
* (Garfonso) Use browser_mod to hide sidebar.

## 3.0.1 (2022-11-03)
* (Garfonso) do not crash if no history instance selected.
* (Garfonso) notifications working again.
* (Garfonso) repaired color temperature handling.

## 3.0.0 (2022-10-28)
* (agross) added: per instance language support
* (Garfonso) entity_id for devices with only one non english name should be ok again.
* (Garfonso) changed: updated frontend to 20221027.0. Needs theme adjustment (add code-editor-background-color) and probably card updates
* (Garfonso) added: browser_mod (2.1.3) is now integrated. Please remove manual installed versions of custom browser_mod card.
* (Garfonso) added: 'instances.refresh' can be used to reload page in connected browsers.
* (Garfonso) removed: lovelace_reload and window_reload states
* (Garfonso) removed: name state, not supported by browser_mod anymore
* (Garfonso) added: Support for toasts with action button (either json or ;-string)
* (Garfonso) added: activity state will show if user is currently using a certain browser
* (Garfonso) added: Support for subfolders in /cards/ for images and stuff custom cards load (please keep cards in root folder).
* (Garfonso) crash if notification was malformed json.
* (Garfonso) some translation stuff
* (Garfonso) crash case when states were updated before websocket was ready
* (Apollon77) Prepare for future js-controller versions
* (bluefox) tried to make html requests relative

## 2.2.0 (2022-06-05)
* (Garfonso) fixed: incorrect warning about duplicate entities on update of manual entity.
* (Garfonso) fixed: input_datetime did not work if time was enabled and did vanish if date and time were enabled.
* (Garfonso) fixed: RGB hex string got broken on not rounded numbers (problem with mushroom ligth card).
* (Garfonso) fixed: state of cover entity if not 0 or 100% (fixes problem with sliter-button-card).
* (Garfonso) fixed: light did not read brightness ACTUAL in dimmer devices.
* (Garfonso) added: support auto entities card and subscription.
* (Garfonso) added: improve support for input_datetime & string states.
* (Garfonso) added: support for browser_mod (i.e. crontrol frontend from iobroker).

## 2.1.4 (2022-01-09)
* (Garfonso) Dependency update

## 2.1.3 (2022-01-07)
* (Garfonso) Fixed: remove backup of old frontend (sorry)

## 2.1.2 (2022-01-06)
* (Garfonso) Fixed: Menu was broken in frontend.

## 2.1.1 (2022-01-06)
* (Garfonso) Fixed: Entity update in some cases.

## 2.1.0 (2022-01-06)
* (Garfonso) Added: support for new things in frontend (like arm_vacation state, currency, ...).
* (Garfonso) Change: Updated frontent to 20211229.0 (needs update of browser_mod, card_mod)

## 2.0.7 (2022-01-06)
* (Garfonso) Fix: possible crash while creating light entity
* (Garfonso) Fix: possible crashes in binding support
* (Garfonso) Fix: /state/ handler for files (repairs for example Sonos cover image)
* (Garfonso) Fix: tilt command was not correctly processed in ioBroker
* (Garfonso) Fix: conversion issues in alarm control panel
* (Garfonso) Fix: missed update if auto and manual entity were created from same ioBroker device
* (Garfonso) Fixed: Warning on object change of manual entites
* (Garfonso) Change: Subscribe ids for all config elements contain valid entity_ids (fixes tankerkoenig card and secondary-entity-row)
* (Garfonso) Added: support for offline indicator (auto & manual) and online indicator
* (Garfonso) Added: support for error, maintenance and working indicator (binary sensors)
* (Garfonso) Added: more devices classes with custom settings
* (Garfonso) Added: Support for calendar (only ical, use custom settings to create calendar entity on ical.*.data.table).

## 2.0.6 (2021-08-31)
* (Garfonso) Add manual entity support for geo_location (inofficial currently)
* (Garfonso) Fix binding for other things than val (like ts or lc).
* (algar42) Add additional field for accuweather weather (and custom card)
* (algar42) translate russian characters to allowed charset in ids
* (Garfonso) Add workaround for custom card upload issue with admin 5.
* (Garfonso) fix history attributes with state and multiple attributes

## 2.0.4 (2021-07-23)
* (Garfonso) Add support for fan entity (makes fan card working).
* (Garfonso) fix backwards compatibility for input_datetime attributes.
* (Garfonso) fix airconditioner with power mode on mode update

## 2.0.3 (2021-07-04)
* (Garfonso) fix typo.

## 2.0.2 (2021-07-04)
* (Garfonso) fixed: Date shift for weather forecast without date state.

## 2.0.1 (2021-07-01)
* (Garfonso) fixed: Zigbee lights (issue 222).

## 2.0.0 (2021-06-17)
* (Garfonso) Changed: !Breaking! Battery warning is now binary_sensor instead of sensor (now ui sets icon and  translates ok)
* (Garfonso) Fixed:   !Breaking! entity_id conflict for low_bat / humidity when part of another device
* (Garfonso) Updated frontend to 20210603.0 (changed light entity to not convert color anymore)
* (Garfonso) Changed: increased file size limit to 5 MB during upload in config.
* (Garfonso) Added: Support for input_datetime
* (Garfonso) Added: Support for manual complex light entities
* (Garfonso) Added: Support for images from base64 data in iobroker states 
* (Garfonso) Added: Support for additional alarm states.
* (Garfonso) Added: Parameter to only enter code when disarming alarm
* (Garfonso) Added: Support for admin 5 (jsonCustom)
* (Garfonso) Added: Support for airCondition / rework thermostat
* (Garfonso) Added: manual entities can be more complex now (needs documentation)
* (Garfonso) Added: darkMode control

## 1.5.0 (2021-02-15)
* (Garfonso) Changed: defaultTheme and control.theme were in conflict. Now control.theme is set when selecting a new default theme.
* (Garfonso) Added: control.themeDark to control devices in dark mode, too.
* (Garfonso) Fixed: Device Icons with authentication now work
* (Garfonso) Changed: previously only admin user could change the UI. Now also the owner of the configuration object and members of the owner group are allowed to change the UI.
* (Garfonso) Internal code cleanup / breaking dependency update.
* (Garfonso) Added: Support for pure humidity sensors.
* (Garfonso) Added: Support for URL as entity_image
* (Garfonso) Fixed: Adjust user-name/user-id handling to changes in js-controller 3.2.*
* (Garfonso) Fixed: default themes do not show as selected
* (Garfonso) Fixed: Loading themes / custom cards / image-proxy

## 1.4.3 (2021-02-01)
* (bluefox) Support of lovelace via ioBroker.pro

## 1.4.2 (2021-01-08)
* (thost96) Fixed: set Theme state type to string instead of text

## 1.4.1 (2021-01-08)
* (bluefox) Support of new Let's Encrypt (only with js-controller 3.2.x)

## 1.3.6 (2021-01-08)
* (Garfonso) Fixed: do not ignore devices deleted from iot / without smartName
* (Garfosno) Added: Support location devices with one GPS state in string form
* (Garfonso) Added: Support for log service, logs frontend errors in server log
* (Garfonso) Added: Support for service calls with multiple ids, i.e. header switch of elements card
* (Garfonso) Fixed: unique check for manual entities only checked instance 0. Made them a bit more userfriendly, too.
* (Garfonso) Added: Possibility to select theme during runtime / select default dark theme
* (Garfonso) Fixed: hideToolbar did hide tab bar, too
* (Garfonso) Added: Support for iobroker_say service call (allows tts in mini-mediaplayer card using platform iobroker)

## 1.3.3 (2020-11-19)
* (Garfonso) Added/Fixed: Also subscribe states for custom:mini-graph-card and maybe others.

## 1.3.2 (2020-11-19)
* (Garfonso) Fixed: Possible crash during device creation.

## 1.3.1 (2020-11-15)
* (Garfonso) Fixed: Issue with manually genereadte entity IDs (changed and could contain illegal characters)

## 1.3.0 (2020-11-12)
* (Garfonso) Fixed: Revert changes in thermostat to make it working again
* (Garfonso) Fixed: Prevent crash on invalid call-service action
* (Garfonso) Fixed: Object changes are now reflected in entities and UI updated.
* (Garfonso) Added: Support for RGB Arrays (hue-extended).
* (Garfonso) Enhancement: started refactoring of server.js - will take time, but make maintenance easier.
* (Garfonso) Change: Notifications are now cached in adapter, makes responses a bit faster
* (Garfonso) Enhancement: Updated to lovelace 20201021.4

## 1.2.7 (2020-10-18) - Bug fix Release 
* (Garfonso) Fixed: manual dimmer lights did not work in some cases due to missing initialization of entity.state
* (Garfonso) Fixed/Changed: Testing infrastructure and dev-dependencies (work in progress)
* (Garfonso) Fixed: set default mode of thermostat to "auto". Should allow setting of temperature.
* (Garfonso) Fixed: Up/Down button on covers
* (Garfonso) Fixed: Issue with play/pause on media player and improve history
* (Garfonso) Added: Allow automatically generated dimmers without on/off state.
* (Garfonso) Fixed: In some occasions names of manually generated entities could crash the adapter

## 1.2.6 (2020-08-13)
* (Garfonso) Fixed: invalid date in weather cards
* (Garfonso) Fixed: issues with space in manual entity names.

## 1.2.5 (2020-07-10)
* (Garfonso) Fixed: Parse initial values the same way as state changes
* (Garfonso) Added: Work around for (old) common.states of type string

## 1.2.4 (2020-06-29)
* (Garfonso) Fixed: corrected hass_frontend files and directory
* (Garfonso) Fixed: Prevent warning and possible crash

## 1.2.3 (2020-06-27)
* (Garfonso) Added: config to select direction of blinds.
* (Garfonso) Fixed: missing translation of binary_sensor.states
* (Garfonso) Fixed: History Graph diagrams for sensor-entities

## 1.2.2 (2020-06-24)
* (Garfonso) Fixed: Notification-drawer was to wide on narrow screens
* (Garfonso) Fixed: Clear-all notifications button now has its icon again
* (Garfonso) Fixed: Notification-button could move unpredictable in toolbar
* (Garfonso) Fixed: Lock status is now displayed in icon (open/close)
* (Garfonso) Fixed: Lock status is now received if no dedicated getId exists (by subscribing setId like with other entities)
* (Garfonso) Added: Support for open-service call (which is not yet? supported in lovelace itself...)

## 1.2.1 (2020-06-23)
* (Garfonso) Updated Hass Lovelace. Which fixes weather-card, no weather icons with authorization and (maybe?) store credentials
             Please make sure to update your custom cards! Follwing cards need updates:
                [mini-graph-card](https://github.com/kalkih/mini-graph-card)
                [Slideshow](https://github.com/igloo15/slideshow-card)
                [button-entity-row](https://github.com/mattatcha/button-entity-row)
* (Garfonso) Fix: yaml editor goes missing on Firefox 
* (Garfonso) Added: Support for new type of blinds (needs type-detector update)

## 1.2.0 (2020-06-20)
* (Garfonso) Added: Support for cover entity (cover and input_number entities are now created for blinds)
* (Garfonso) Added: Support for new blind types which let lovelace determine direction of 0/100%
* (Garfonso) Fixed: Prefer ON_LIGHT for lights if present, should fix cases where there is also a switch state in a light device.
* (Garfonso) Added: Enable history support, let's more-info show history of states
* (Garfonso) Added: zone.home entity from system.config (i.e. lat/long)
* (Garfonso) Fixed: Make door devices create a device_class door entity
* (Garfonso) Fixed: Added some missing translations, improved translation a bit, added domain name to translations in custom tab.

## 1.1.0 (2020-05-28)
* (Garfonso) BREAKING: fixed issue with entity_id generation which now allows umlauts to be replaced by ue/ae/oe.
* (Garfonso) added windowsTilt device type
* (Garfonso) reworked friendly name for auto generated entities, allow space in name.
* (Garfonso) use device_class feature for sensors (where applicable) -> results in translation features of lovelace being used.
* (Garfonso) multiple fixes/additions to media player (like volume scaling, on/off support, shuffle support, stop support)

## 1.0.16 (2020-05-04)
* (Apollon77) webserver initialization optimized again to prevent errors with invalid certificates

## 1.0.15 (2020-04-30)
* (Apollon77) errors on webserver initialization are handled properly

## 1.0.14 (2020-04-22)
* (algar42) Call of deprecated getObjectView updated for js-controller v3

## 1.0.13 (2020-04-13)
* (bluefox) The translation was corrected in the custom settings.

## 1.0.12 (2020-03-16)
* (Garfonso) Added option to restrict auto entity creation to alias.0.*

## 1.0.10 (2020-02-13)
* (Garfonso) Fixed handling of malformed / null RGB string
* (algar42)  Binary sensor added
* (Garfonso) fixed manual dimmer 
* (algar42)  fixed for duplicated states via websockets
* (Garfonso) fixed handling of deleted objects

## 1.0.9 (2020-01-29)
* (bluefox) Dimmer control was fixed

## 1.0.8 (2020-01-13)
* (Garfonso) process max value of saturation and hue
* (Garfonso) disable extensive debug logging
* (Garfonso) many changes done concerning detection of devices and processing of states
* (bluefox) Update hass lovelace

## 1.0.7 (2019-12-17)
* (bluefox) Invalid objects will be filtered out.

## 1.0.6 (2019-12-06)
* (bluefox) Fixed disconnection behavior

## 1.0.5 (2019-11-27)
* (algar42) getting back broken update of internal_entities

## 1.0.4 (2019-11-25)
* (bluefox) Implemented bindings ala vis in markdown
* (bluefox) protect access to states

## 0.2.5 (2019-11-18)
* (algar42) Dimmer light is now switched on with the previous brightness level and not 100%
* (algar42) Added ability to correctly control light brightness from Card and from more_info dialog as well
* (algar42) input_boolean processing correct and initial value added to entity
* (algar42) input_select processing added
* (algar42) Entities object updates with new states added (resolved issue #46 showing old values on page refresh)
* (algar42) Switch entity updated to show two state buttons in GUI (assumed_state attribute set to true)
* (algar42) Russian translation updated
* (algar42) Language support added. Lovelace runs with IoB System Language

## 0.2.4 (2019-11-05)
* (ldittmar) Fixed translations

## 0.2.3 (2019-10-22)
* (bluefox) The custom settings were corrected

## 0.2.1 (2019-10-15)
* (bluefox) Processing of empty states was corrected

## 0.2.0 (2019-09-19)
* (Scrounger) Some bugs on "Custom Dialog" were fixed
* (Scrounger) bug fix: if value set by lovelace and max is not 100
* (Scrounger) log warn if no max value set for light entity
* (bluefox) Version of home-assistant-polymer was updated to 1.0.0

## 0.1.5 (2019-08-26)
* (bluefox) fixed timestamp conversion

## 0.1.3 (2019-07-18)
* (SchumyHao) If no ACTUAL is discovered, use SET value as switch entity value

## 0.1.2 (2019-07-14)
* (SchumyHao) Translate Chinese words to pinyin

## 0.1.1 (2019-06-10)
* (bluefox) Fixed control of states

## 0.1.0 (2019-06-06)
* (bluefox) Authentication could be disabled
* (bluefox) Lovelace compiled extra for ioBroker

## 0.0.3 (2019-06-02)
* (bluefox) initial release
