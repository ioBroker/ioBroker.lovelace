# Changelog

<!--
	PLACEHOLDER for next version:
	## __WORK IN PROGRESS__
-->

## __WORK IN PROGRESS__
* (thost96) Fixed: set Theme state type to string instead of text
* (thost96) Added: Darktheme config option 

## 1.3.6 (2021-01-08)
* (Garfonso) Fixed: do not ignore devices deleted from iot / without smartName
* (Garfosno) Added: Support location devices with one GPS state in string form
* (Garfonso) Added: Support for log service, logs frontend errors in server log
* (Garfonso) Added: Support for service calls with multiple ids, i.e. header switch of elements card
* (Garfonso) Fixed: unique check for manual entities only checked instance 0. Made them a bit more userfriendly, too.
* (Garfonso) Added: Possibility to select theme during runtime / select default dark theme
* (Garfonso) Fixed: hideToolbar did hide tab bar, too
* (Garfonso) Added: Support for iobroker_say service call (allows tts in mini-mediaplayer card using platform iobroker)

## 1.3.4 (2021-01-08)
* (bluefox) Support of new Let's Encrypt (only with js-controller 3.2.x)

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
