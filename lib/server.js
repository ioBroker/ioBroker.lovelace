const fs         = require('fs');
const crypto     = require('crypto');
const WebSocket  = require('ws');
const bodyParser = require('body-parser');
const SERVICES   = require('./services');
const PANELS     = require('./panels');
const multer     = require('multer');
const mime       = require('mime');
const yaml       = require('js-yaml');
const request    = require('request');
const jstz       = require('jstimezonedetect');
const utils      = require('./converters/utils');
const processBlind    = require('./converters/cover').processBlind;
const processSocket   = require('./converters/switch').processSocket;
const converterLight  = require('./converters/light');

const bindings   = require('./bindings');

const TIMEOUT_PASSWORD_ENTER = 180000; // 3 min
const TIMEOUT_AUTH_CODE = 10000; // 10sec

const {Types, ChannelDetector} = require('iobroker.type-detector');
const ignoreIds = [
    /^system\./,
    /^script\./,
];
const express = require('express');

const ROOT_DIR = '../hass_frontend';

const VERSION  = '0.102.1';
const NO_TOKEN = 'no_token';

function getRootPath() {
    if (ROOT_DIR.match(/^\w:/) || ROOT_DIR.startsWith('/')) {
        return ROOT_DIR + '/';
    } else {
        return __dirname + '/' + ROOT_DIR + '/';
    }
}

const generateRandomToken = function (callback) {
    crypto.randomBytes(256, (ex, buffer) => {
        crypto.randomBytes(32, (ex, secret) => {
            if (ex) {
                return callback('server_error');
            }

            const token = crypto
                .createHmac('sha256', secret)
                .update(buffer)
                .digest('hex');

            callback(false, token);
        });
    });
};

function padding(num) {
    return num < 10 ? '0' + num : num;
}

/*
possible HASS entity types:
- fan
- input_boolean
- light => STATE on/off, attributes: [brightness, hs_color([h,s]), min_mireds, max_mireds, color_temp, white_value, effect_list, effect, supported_features ], commands: turn_on(brightness_pct, hs_color, brightness, color_temp, white_value, effect), turn_off, toggle
  supported_features: brightness=0x01, colorTemp=0x02, effectList=0x04, color=0x10, whiteValue=0x80
- switch => STATE on/off, attributes: [brightness, hs_color], commands: turn_on, turn_off, toggle
- group
- automation
- climate => STATE on/off, attributes: [current_temperature, operation_mode, operation_list, target_temp_step, target_temp_low, target_temp_high,min_temp, max_temp, temperature], commands:
- cover
- configurator
- input_select
- input_number
- input_text
- lock
- media_player =>
    STATE on/off/playing/paused/idle/standby/unknown,
    attributes: [media_content_type(music/game/music/tvshow/...), entity_picture(as cover), media_duration, supported_features, is_volume_muted, volume_level, media_duration, media_position, media_position_updated_at, media_title, media_artist, media_series_title, media_season, media_episode, app_name, source, source_list, sound_mode, sound_mode_list],
    commands: media_play_pause, media_next_track, media_play_pause, media_previous_track, volume_set(volume_level), turn_off, turn_on, volume_down, volume_mute(is_volume_muted), volume_up, select_source(source), select_sound_mode(sound_mode),
    features for supported_features: PAUSE 0x1, volume_set 0x4, volume_mute 0x8, media_previous_track 0x10, media_next_track 0x20, turn_on 0x80, turn_off 0x100, play_media 0x200, volume_down/volume_up 0x400, select_source 0x800, select_sound_mode (0x10000), play (0x4000)
- scene
- script
- timer => STATE idle/paused/active, attributes: [remaining]
- vacuum
- water_heater
- weblink
- alarm_control_panel => STATE disarmed/armed/armed_home/armed_away/armed_night/armed_custom_bypass/pending/arming/disarming/triggered, attributes: [code_format], commands: alarm_arm_away, alarm_arm_home, alarm_arm_night, alarm_arm_custom_bypass, alarm_disarm (code will be sent)
- camera
- history_graph
- input_datetime
- sun
- updater
- binary_sensor => STATE on/off
- geo_location => attributes: [latitude, longitude, passive, icon, radius, entity_picture, gps_accuracy, source]
- weather => STATE any-text(no icon)/clear-night/cloudy/fog/hail/lightning/lightning-rainy/partlycloudy/pouring/rainy/snowy/snowy-rainy/sunny/windy/windy-variant, attributes: [temperature, pressure, humidity, wind_speed, wind_bearing, forecast]
       forecast is an array with max 5 items [{datetime: something for new Date(aa), temperature, templow, condition(see STATE), precipitation}, {...}]
 */

class WebServer {
    constructor(options) {
        this._lovelaceConfig = null;
        this._ressourceConfig = []; //new place to store custom cards (modules) and stuff.
        this.adapter         = options.adapter;
        this.config          = this.adapter.config;
        this.log             = this.adapter.log;
        this.lang            = 'en';
        this.detector        = new ChannelDetector();
        this.config.ttl      = parseInt(this.config.ttl, 10) || 3600;
        this.words           = options.words || {};

        this._notifications  = [];
        this._subscribed     = [];
        this._objects        = {}; // think about if it really required
        this._entities       = [];
        this._entity2ID      = {};
        this._ID2entity      = {};
        this._server         = options.server;
        this._app            = options.app;
        this._auth_flows     = {};
        this.templateStates  = {};
        this._processCommon  = utils._processCommon.bind(this); //make processCommon operate on our members.
        this._addID2entity   = utils._addID2entity.bind(this);  //make addID2entity operate on our members.
        this._themes         = {}; //themes storage
        this._currentTheme   = this.config.defaultTheme || 'default';

        this.converter = {
            [Types.socket]:                 processSocket.bind(this),
            [Types.light]:                  converterLight.processLight.bind(this),
            [Types.dimmer]:                 converterLight.processLightAdvanced.bind(this),
            [Types.ct]:                     converterLight.processLightAdvanced.bind(this),
            [Types.hue]:                    converterLight.processLightAdvanced.bind(this),
            [Types.rgb]:                    converterLight.processLightAdvanced.bind(this),
            [Types.rgbSingle]:              converterLight.processLightAdvanced.bind(this),
            [Types.motion]:                 this._processMotion.bind(this),
            [Types.window]:                 this._processWindow.bind(this),
            [Types.windowTilt]:             this._processWindowTilt.bind(this),
            [Types.door]:                   this._processDoor.bind(this),
            [Types.button]:                 processSocket.bind(this),
            [Types.temperature]:            this._processTemperature.bind(this),
            [Types.lock]:                   this._processLock.bind(this),
            [Types.thermostat]:             this._processThermostat.bind(this),
            [Types.blind]:                  processBlind.bind(this),
            [Types.blindButtons]:           processBlind.bind(this),
            [Types.weatherForecast]:        this._processWeather.bind(this),
            [Types.accuWeatherForecast]:    this._processAccuWeather.bind(this),
            [Types.location]:               this._processLocation.bind(this),
            [Types.location_one]:           this._processLocation.bind(this),
            [Types.media]:                  this._processMediaPlayer.bind(this),
            [Types.image]:                  this._processImage.bind(this),
        };

        this.adapter.getForeignObject('system.config', (err, config) => {
            this.lang = config.common.language;
            this.systemConfig = config.common;
            this._updateConstantEntities();

            this.adapter.getObject('configuration', (err, config) => {
                if (config && config.native && config.native.title) {
                    this._lovelaceConfig = config.native;
                    this._lovelaceConfig.hideToolbar = this.config.hideHeader;
                } else {
                    this._lovelaceConfig = require('./defaultConfig');
                }

                this._readNotifications().then(() => {
                    this._readAllEntities().then(() => {
                        this.adapter.subscribeObjects('configuration');
                        this.adapter.subscribeStates('control.*');
                        this.adapter.subscribeStates('notifications.*');
                        this.adapter.subscribeStates('conversation');
                        return this._init();
                    });
                });

            });
        });

        //setup theme selection button:
        try {
            this._themes = yaml.safeLoad(this.config.themes || '') || {};
        } catch (e) {
            this.log.error('Cannot parse themes: ' + e);
            this._themes = {};
        }
        const states = { 'default': 'default'};
        for(const themeName of Object.keys(this._themes)) {
            states[themeName] = themeName;
        }
        this.adapter.extendObjectAsync(this.adapter.namespace + '.control.theme', { common: { states: states}}).then(() => {
            this.adapter.getStateAsync(this.adapter.namespace + '.control.theme').then(state => {
                //remember currently selected theme, if valid. Select default otherwise.
                if (state && (this._themes[state.val] || state.val === 'default')) {
                    this._currentTheme = state.val;
                } else {
                    this._currentTheme = this.config.defaultTheme || 'default';
                    this.adapter.setStateAsync(this.adapter.namespace + '.control.theme', this._currentTheme, true);
                }
            });
        });

        // check every minute
        if (this.config.auth !== false) {
            this._clearInterval = setInterval(() => this.clearAuth(), 60000);
        }
    }

    async _readAllEntities() {
        const smartDevices = await this._updateDevices();
        for (const dev of smartDevices) {
            const foundIndex = this._entities.findIndex(x => x.entity_id === dev.entity_id);
            if (foundIndex !== -1) {
                this._entities[foundIndex] = dev;
            } else {
                this._entities.push(dev);
            }
        }
        await this._getAllEntities();
        await this._getAllStates();
        this._manageSubscribesFromConfig();
        await this.adapter.setStateAsync('info.entitiesUpdated', true, true);
    }

    clearAuth() {
        const now = Date.now();
        let changed = false;
        Object.keys(this._auth_flows).forEach(flowId => {
            const flow = this._auth_flows[flowId];
            if (flow.auth_ttl) {
                if (now - flow.ts > flow.auth_ttl) {
                    this.log.debug(`Deleted old flowId ${flow.username} ${flowId}`);
                    delete this._auth_flows[flowId];
                    changed = true;
                }
            } else {
                if (now - flow.ts > TIMEOUT_PASSWORD_ENTER) {
                    this.log.debug('Deleted old flowId (no password) ' + flowId);
                    delete this._auth_flows[flowId];
                    changed = true;
                }
            }
        });
        changed && this._saveAuth();
    }

    _setJsonAttribute(obj, parts, index, value) {
        if (parts.length - 1 === index) {
            obj[parts[index]] = value;
        } else {
            // if a number
            if (typeof obj[parts[index]] !== 'object') {
                if (parts.length - 2 >= index && parts[index + 1] >= '0' && parts[index + 1] <= '9') {
                    obj[parts[index]] = [];
                } else {
                    obj[parts[index]] = {};
                }
            }
            this._setJsonAttribute(obj[parts[index]], parts, index + 1, value);
        }
    }

    setJsonAttribute(obj, path, value) {
        if (!path) {
            this.log.error('Invalid attribute name for ' + JSON.stringify(obj) + ' = ' + value);
            return;
        }
        const parts = path.split('.');
        if (parts.length === 1) {
            obj[path] = value;
        } else {
            this._setJsonAttribute(obj, parts, 0, value);
        }
    }

    async _getAllEntities() {
        try {
            const doc = await this.adapter.getObjectViewAsync('custom', 'state', {});
            const ids = [];
            if (doc && doc.rows) {
                for (let i = 0, l = doc.rows.length; i < l; i++) {
                    if (doc.rows[i].value) {
                        const id = doc.rows[i].id;
                        if (doc.rows[i].value[this.adapter.namespace]) {
                            ids.push(id);
                        }
                    }
                }
            }
            ids.push(this.adapter.namespace + '.control.alarm');

            await this._processEntities(ids, this._entities);
        } catch (e) {
            this.adapter.error('Could not get object view for getAllEntities: ' + e.toString() + ' - ' + e.stack);
        }
    }

    _getSmartName(states, id) {
        if (!id) {
            if (!this.adapter.config.noCommon) {
                return states.common.smartName;
            } else {
                return (states &&
                    states.common &&
                    states.common.custom &&
                    states.common.custom[this.adapter.namespace]) ?
                    states.common.custom[this.adapter.namespace].smartName : undefined;
            }
        } else
        if (!this.adapter.config.noCommon) {
            return states[id] && states[id].common ? states[id].common.smartName : null;
        } else {
            return (states[id] &&
                states[id].common &&
                states[id].common.custom &&
                states[id].common.custom[this.adapter.namespace]) ?
                states[id].common.custom[this.adapter.namespace].smartName || null : null;
        }
    }

    // ------------------------------- START OF CONVERTERS ---------------------------------------- //

    _processWeather(id, control, name, room, func, _obj) {
        const entity = this._processCommon(name, room, func, _obj, 'weather');

        // - weather => STATE any-text(no icon)/clear-night/cloudy/fog/hail/lightning/lightning-rainy/partlycloudy/pouring/rainy/snowy/snowy-rainy/sunny/windy/windy-variant, attributes: [temperature, pressure, humidity, wind_speed, wind_bearing, forecast]
        //        forecast is an array with max 5 items [{datetime: something for new Date(aa), temperature, templow, condition(see STATE), precipitation}, {...}]

        let state = control.states.find(s => s.id && s.name === 'ICON');
        entity.context.STATE = {getId: null};
        if (state && state.id) {
            entity.context.STATE.getId = state.id;
            this._addID2entity(state.id, entity);
        }
        entity.context.ATTRIBUTES = [];

        state = control.states.find(s => s.id && s.name === 'TEMP');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'temperature', getId: state.id});
            this._addID2entity(state.id, entity);
        } else {
            state = control.states.find(s => s.id && s.name === 'TEMP_MAX');
            if (state && state.id) {
                entity.context.ATTRIBUTES.push({attribute: 'temperature', getId: state.id});
                this._addID2entity(state.id, entity);
            }
        }

        state = control.states.find(s => s.id && s.name === 'PRESSURE');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'pressure', getId: state.id});
            this._addID2entity(state.id, entity);
        } else {
            state = control.states.find(s => s.id && s.name === 'PRESSURE0');
            if (state && state.id) {
                entity.context.ATTRIBUTES.push({attribute: 'pressure', getId: state.id});
                this._addID2entity(state.id, entity);
                state.id = null; // do not detect it later
            }
        }

        state = control.states.find(s => s.id && s.name === 'HUMIDITY');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'humidity', getId: state.id});
            this._addID2entity(state.id, entity);
        } else {
            state = control.states.find(s => s.id && s.name === 'HUMIDITY0');
            if (state && state.id) {
                entity.context.ATTRIBUTES.push({attribute: 'humidity', getId: state.id});
                this._addID2entity(state.id, entity);
                state.id = null; // do not detect it later
            }
        }

        state = control.states.find(s => s.id && s.name === 'WIND_SPEED');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'wind_speed', getId: state.id});
            this._addID2entity(state.id, entity);
        } else {
            state = control.states.find(s => s.id && s.name === 'WIND_SPEED0');
            if (state && state.id) {
                entity.context.ATTRIBUTES.push({attribute: 'wind_speed', getId: state.id});
                this._addID2entity(state.id, entity);
                state.id = null; // do not detect it later
            }
        }

        state = control.states.find(s => s.id && s.name === 'WIND_DIRECTION'); // in °
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'wind_bearing', getId: state.id});
            this._addID2entity(state.id, entity);
        } else {
            state = control.states.find(s => s.id && s.name === 'WIND_DIRECTION0'); // in °
            if (state && state.id) {
                entity.context.ATTRIBUTES.push({attribute: 'wind_bearing', getId: state.id});
                this._addID2entity(state.id, entity);
                state.id = null; // do not detect it later
            }
        }

        // forecast {datetime: something for new Date(aa), temperature, templow, condition(see STATE), precipitation}
        // day 0
        let somethingFound;
        let hassCounter = -1;

        for (let day = 0; day < 6; day++) {
            let dayShiftId;
            somethingFound = false;
            state = control.states.find(s => s.id && s.name === 'ICON' + day);
            if (state && state.id) {
                if (!somethingFound) {
                    hassCounter++;
                    somethingFound = true;
                }
                dayShiftId = dayShiftId || state.id;
                entity.context.ATTRIBUTES.push({attribute: `forecast.${hassCounter}.condition`, getId: state.id});
                this._addID2entity(state.id, entity);
            }

            state = control.states.find(s => s.id && s.name === 'TEMP' + day);
            if (state && state.id) {
                if (!somethingFound) {
                    hassCounter++;
                    somethingFound = true;
                }
                dayShiftId = dayShiftId || state.id;
                entity.context.ATTRIBUTES.push({attribute: `forecast.${hassCounter}.temperature`, getId: state.id});
                this._addID2entity(state.id, entity);
            } else {
                state = control.states.find(s => s.id && s.name === 'TEMP_MAX' + day);
                if (state && state.id) {
                    if (!somethingFound) {
                        hassCounter++;
                        somethingFound = true;
                    }
                    dayShiftId = dayShiftId || state.id;
                    entity.context.ATTRIBUTES.push({attribute: `forecast.${hassCounter}.temperature`, getId: state.id});
                    this._addID2entity(state.id, entity);
                }
            }

            state = control.states.find(s => s.id && s.name === 'TEMP_MIN' + day);
            if (state && state.id) {
                if (!somethingFound) {
                    hassCounter++;
                    somethingFound = true;
                }
                dayShiftId = dayShiftId || state.id;
                entity.context.ATTRIBUTES.push({attribute: `forecast.${hassCounter}.templow`, getId: state.id});
                this._addID2entity(state.id, entity);
            }

            state = control.states.find(s => s.id && s.name === 'PRECIPITATION_CHANCE' + day);
            if (state && state.id) {
                if (!somethingFound) {
                    hassCounter++;
                    somethingFound = true;
                }
                dayShiftId = dayShiftId || state.id;
                entity.context.ATTRIBUTES.push({attribute: `forecast.${hassCounter}.precipitation_probability`, getId: state.id});
                this._addID2entity(state.id, entity);
            }

            state = control.states.find(s => s.id && s.name === 'PRECIPITATION' + day);
            if (state && state.id) {
                if (!somethingFound) {
                    hassCounter++;
                    somethingFound = true;
                }
                dayShiftId = dayShiftId || state.id;
                entity.context.ATTRIBUTES.push({attribute: `forecast.${hassCounter}.precipitation`, getId: state.id});
                this._addID2entity(state.id, entity);
            }

            if (somethingFound) {
                state = control.states.find(s => s.id && s.name === 'DATE' + day);
                if (state && state.id) {
                    entity.context.ATTRIBUTES.push({attribute: `forecast.${hassCounter}.datetime`, getId: state.id});
                    this._addID2entity(state.id, entity);
                } else if (dayShiftId) {
                    entity.context.ATTRIBUTES.push({
                        attribute: `forecast.${hassCounter}.datetime`,
                        dayShift: hassCounter,
                        getId: dayShiftId,
                        getParser: (entity, attr) => {
                            const date = new Date();
                            attr.dayShift && date.setDate(date.getDate() + attr.dayShift);
                            this.setJsonAttribute(entity.attributes, attr.attribute, date.toISOString());
                        }
                    });
                }
            } else if (hassCounter >= 0) {
                break;
            }
        }

        return [entity];
    }

    _processAccuWeather(id, control, name, room, func, _obj) {
        const entity = this._processCommon(name, room, func, _obj, 'weather');

        // - weather => STATE any-text(no icon)/clear-night/cloudy/fog/hail/lightning/lightning-rainy/partlycloudy/pouring/rainy/snowy/snowy-rainy/sunny/windy/windy-variant, attributes: [temperature, pressure, humidity, wind_speed, wind_bearing, forecast]
        //        forecast is an array with max 5 items [{datetime: something for new Date(aa), temperature, templow, condition(see STATE), precipitation}, {...}]

        let state = control.states.find(s => s.id && s.name === 'STATE');
        entity.context.STATE = {getId: null};
        if (state && state.id) {
            entity.context.STATE.getId = state.id;
            this._addID2entity(state.id, entity);
        }
        entity.context.ATTRIBUTES = [];

        state = control.states.find(s => s.id && s.name === 'TEMP');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'temperature', getId: state.id});
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'ICON_URL');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'icon_url', getId: state.id});
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'TIME_SUNRISE');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'sunrise', getId: state.id});
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'TIME_SUNSET');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'sunset', getId: state.id});
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'PRESSURE');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'pressure', getId: state.id});
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'HUMIDITY');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'humidity', getId: state.id});
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'WIND_SPEED');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'wind_speed', getId: state.id});
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'WIND_DIRECTION_STR'); // compass
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'wind_bearing', getId: state.id});
            this._addID2entity(state.id, entity);
        }

        // forecast {datetime: something for new Date(aa), temperature, templow, condition(see STATE), precipitation}
        // day 0
        let somethingFound;
        let hassCounter = -1;

        for (let day = 0; day < 6; day++) {
            let dayShiftId;
            somethingFound = false;
            state = control.states.find(s => s.id && s.name === 'STATE' + day);
            if (state && state.id) {
                if (!somethingFound) {
                    hassCounter++;
                    somethingFound = true;
                }
                dayShiftId = dayShiftId || state.id;
                entity.context.ATTRIBUTES.push({attribute: `forecast.${hassCounter}.condition`, getId: state.id});
                this._addID2entity(state.id, entity);
            }

            state = control.states.find(s => s.id && s.name === 'ICON_URL' + day);
            if (state && state.id) {
                if (!somethingFound) {
                    hassCounter++;
                    somethingFound = true;
                }
                dayShiftId = dayShiftId || state.id;
                entity.context.ATTRIBUTES.push({attribute: `forecast.${hassCounter}.icon_url`, getId: state.id});
                this._addID2entity(state.id, entity);
            }


            state = control.states.find(s => s.id && s.name === 'TEMP_MAX' + day);
            if (state && state.id) {
                if (!somethingFound) {
                    hassCounter++;
                    somethingFound = true;
                }
                dayShiftId = dayShiftId || state.id;
                entity.context.ATTRIBUTES.push({attribute: `forecast.${hassCounter}.temperature`, getId: state.id});
                this._addID2entity(state.id, entity);
            }


            state = control.states.find(s => s.id && s.name === 'TEMP_MIN' + day);
            if (state && state.id) {
                if (!somethingFound) {
                    hassCounter++;
                    somethingFound = true;
                }
                dayShiftId = dayShiftId || state.id;
                entity.context.ATTRIBUTES.push({attribute: `forecast.${hassCounter}.templow`, getId: state.id});
                this._addID2entity(state.id, entity);
            }


            state = control.states.find(s => s.id && s.name === 'PRECIPITATION' + day);
            if (state && state.id) {
                if (!somethingFound) {
                    hassCounter++;
                    somethingFound = true;
                }
                dayShiftId = dayShiftId || state.id;
                entity.context.ATTRIBUTES.push({attribute: `forecast.${hassCounter}.precipitation`, getId: state.id});
                this._addID2entity(state.id, entity);
            }


            if (somethingFound) {
                state = control.states.find(s => s.id && s.name === 'DATE' + day);
                if (state && state.id) {
                    entity.context.ATTRIBUTES.push({attribute: `forecast.${hassCounter}.datetime`, getId: state.id});
                    this._addID2entity(state.id, entity);
                } else if (dayShiftId) {
                    entity.context.ATTRIBUTES.push({
                        attribute: `forecast.${hassCounter}.datetime`,
                        dayShift: hassCounter,
                        getId: dayShiftId,
                        getParser: (entity, attr) => {
                            const date = new Date();
                            attr.dayShift && date.setDate(date.getDate() + attr.dayShift);
                            this.setJsonAttribute(entity.attributes, attr.attribute, date.toISOString());
                        }
                    });
                }
            } else if (hassCounter >= 0) {
                break;
            }
        }

        return [entity];
    }

    _processLocation(id, control, name, room, func, _obj) {
        // - geo_location => attributes: [latitude, longitude, passive, icon, radius, entity_picture, gps_accuracy, source]
        const entity = this._processCommon(name, room, func, _obj, 'geo_location');

        entity.context.STATE = {getId: null};
        entity.context.ATTRIBUTES = [];
        entity.attributes.icon = 'mdi:crosshairs-gps';

        let state = control.states.find(s => s.id && s.name === 'GPS');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({
                attribute: 'latitude',
                getId: state.id,
                getParser: function (entity, attr, value) {
                    value = (value || '').toString();
                    let parts = value.toString().split(';');
                    if (parts.length !== 2) {
                        parts = value.toString().split(',');
                    }
                    if (parts.length === 2) {
                        entity.attributes.latitude = parseFloat(parts[0]);
                        entity.attributes.longitude = parseFloat(parts[1]);
                    }
                },
                historyParser: (id, val) => {
                    val = (val || '').toString();
                    let parts = val.toString().split(';');
                    if (parts.length !== 2) {
                        parts = val.toString().split(',');
                    }
                    return parts[0];
                }
            }, {
                attribute: 'longitude',
                historyParser: (id, val) => {
                    val = (val || '').toString();
                    let parts = val.toString().split(';');
                    if (parts.length !== 2) {
                        parts = val.toString().split(',');
                    }
                    return parts[1];
                }
            });
            this._addID2entity(state.id, entity);
        } else {
            state = control.states.find(s => s.id && s.name === 'LATITUDE');
            if (state && state.id) {
                entity.context.ATTRIBUTES.push({attribute: 'latitude', getId: state.id});
                this._addID2entity(state.id, entity);
            }

            state = control.states.find(s => s.id && s.name === 'LONGITUDE');
            if (state && state.id) {
                entity.context.ATTRIBUTES.push({attribute: 'longitude', getId: state.id});
                this._addID2entity(state.id, entity);
            }
        }

        state = control.states.find(s => s.id && s.name === 'RADIUS');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'radius', getId: state.id});
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'ACCURACY');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'gps_accuracy', getId: state.id});
            this._addID2entity(state.id, entity);
        }

        entity.attributes.source = 'gps';

        return [entity];
    }

    _processImage(id, control, name, room, func, _obj) {
        // - geo_location => attributes: [latitude, longitude, passive, icon, radius, entity_picture, gps_accuracy, source]
        const entity = this._processCommon(name, room, func, _obj, 'camera');

        entity.context.STATE = {getId: null};
        entity.context.ATTRIBUTES = [];
        entity.attributes.icon = 'mdi:camera-outline';

        const state = control.states.find(s => s.id && s.name === 'URL');
        if (state && state.id) {
            entity.context.STATE = {getValue: 'on'};
            entity.context.ATTRIBUTES = [{getId: state.id, attribute: 'url'}];
            entity.attributes.code_format = 'number';

            entity.attributes.access_token = crypto
                .createHmac('sha256', (Math.random() * 1000000000).toString())
                .update(Date.now().toString())
                .digest('hex');

            entity.attributes.model_name = 'Simulated URL';
            entity.attributes.brand = 'ioBroker';
            entity.attributes.motion_detection = false;
            this._addID2entity(state.id, entity);
        }

        return [entity];
    }

    _processMediaPlayer(id, control, name, room, func, _obj, objects) {
        // - media_player =>
        // STATE on/off/playing/paused/idle/standby/unknown,
        //     attributes: [
        //          media_content_type(music/game/music/tvshow/...), // not supported
        //          entity_picture(as cover),
        //          supported_features,
        //          is_volume_muted,
        //          volume_level,
        //          media_duration,
        //          media_position,
        //          media_position_updated_at,
        //          media_title,
        //          media_artist,
        //          media_series_title, // not supported
        //          media_season,
        //          media_episode,
        //          app_name, // not supported
        //          source, // not supported
        //          source_list, // not supported
        //          sound_mode, // not supported
        //          sound_mode_list // not supported
        //          ],
        //     commands:
        //          media_play_pause,
        //          media_stop,
        //          media_next_track,
        //          media_previous_track,
        //          volume_set(volume_level),
        //          turn_off,
        //          turn_on,
        //          volume_down,
        //          volume_mute(is_volume_muted),
        //          volume_up,
        //          select_source(source), // not supported
        //          select_sound_mode(sound_mode), // not supported
        //     features for supported_features:
        //          PAUSE 0x1,
        //          SEEK 0x2,
        //          volume_set 0x4,
        //          volume_mute 0x8,
        //          media_previous_track 0x10,
        //          media_next_track 0x20,
        //          turn_on 0x80,
        //          turn_off 0x100,
        //          play_media 0x200,
        //          volume_down/volume_up 0x400,
        //          select_source 0x800,
        //          stop 0x1000,
        //          clear_playlist 0x2000,
        //          play (0x4000),
        //          shuffle 0x8000,
        //          select_sound_mode (0x10000)

        const entity = this._processCommon(name, room, func, _obj, 'media_player');

        entity.context.STATE = {getId: null};
        entity.context.ATTRIBUTES = [];
        entity.context.COMMANDS = [];
        entity.attributes.icon = 'mdi:play-network';
        entity.attributes.media_content_type = 'unknown';
        entity.attributes.supported_features = 0;
        let playPauseCommand;

        const parsePlayPauseCommand = (entity, command, params, user) => {
            let id = command.setId;
            let val = true;
            if (entity.state === 'playing') {
                //ok, need to pause.
                if (command.pauseId) {
                    id = command.pauseId;
                } else {
                    val = false;
                }
                entity.state = 'paused';
            } else {
                entity.state = 'playing';
            }
            return new Promise((resolve, reject) =>
                this.adapter.setForeignState(id, val, false, {user}, err =>
                    err ? reject(err) : resolve()));
        };

        let state = control.states.find(s => s.id && s.name === 'STATE');
        if (state && state.id) {
            entity.context.STATE.setId = state.id;
            entity.context.STATE.getId = state.id;
            entity.context.STATE.getParser = (entity, attr, state) => {
                state = state || {val: null};
                // on/off/playing/paused/idle/standby/unknown,
                if (state.val === true || state.val === 1 || state.val === 'play') {
                    entity.state = 'playing';
                } else if (state.val === false || state.val === 0 || state.val === 'pause') {
                    entity.state = 'paused';
                } else if (state.val === 'stop' || state.val === 2) {
                    entity.state = 'idle';
                }
            };
            entity.context.STATE.historyParser = (id, val) => {
                if (val === true || val === 1 || val === 'play') {
                    return 'playing';
                }
                if (val === false || val === 0 || val === 'pause') {
                    return 'paused';
                }
                return 'idle';
            };

            if (objects[state.id] && objects[state.id].common && objects[state.id].common.write) {
                playPauseCommand = {
                    service: 'media_play_pause',
                    setId: state.id,
                    parseCommand: parsePlayPauseCommand
                };
                entity.context.COMMANDS.push(playPauseCommand);
                entity.attributes.supported_features |= 0x4000;
            }
            this._addID2entity(state.id, entity);
        }

        if (!playPauseCommand) {
            state = control.states.find(s => s.id && s.name === 'PLAY');
            if (state && state.id) {
                playPauseCommand = {
                    service: 'media_play_pause',
                    setId: state.id,
                    parseCommand: parsePlayPauseCommand
                };
                entity.context.COMMANDS.push(playPauseCommand);
                entity.attributes.supported_features |= 0x4000;
            }

            state = control.states.find(s => s.id && s.name === 'PAUSE');
            if (!state || !state.id) { //try to use STOP for Pause.
                state = control.states.find(s => s.id && s.name === 'STOP');
            }
            if (state && state.id) {
                entity.attributes.supported_features |= 0x1;
                if (playPauseCommand) {
                    playPauseCommand.pauseId = state.id;
                } else {
                    entity.context.COMMANDS.push({
                        service: 'media_play_pause',
                        pauseId: state.id,
                        parseCommand: parsePlayPauseCommand
                    });
                }
            }
        }

        state = control.states.find(s => s.id && s.name === 'STOP');
        if (state && state.id) {
            entity.context.COMMANDS.push({
                service: 'media_stop',
                stopId: state.id,
                parseCommand: (entity, command, params, user) => new Promise((resolve, reject) =>
                    this.adapter.setForeignState(command.stopId, true, false, {user}, err =>
                        err ? reject(err) : resolve()))
            });
            entity.attributes.supported_features |= 0x1000;
        }

        state = control.states.find(s => s.id && s.name === 'SHUFFLE');
        if (state && state.id) {
            entity.context.COMMANDS.push({
                service: 'shuffle_set',
                setId: state.id,
                parseCommand: (entity, command, params, user) => new Promise((resolve, reject) =>
                    this.adapter.setForeignState(command.setId, true, false, {user}, err =>
                        err ? reject(err) : resolve()))
            });
            entity.context.ATTRIBUTES.push({
                attribute: 'shuffle',
                getId: state.id,
            });
            this._addID2entity(state.id, entity);
            entity.attributes.supported_features |= 0x8000;
        }

        state = control.states.find(s => s.id && s.name === 'NEXT');
        if (state && state.id) {
            entity.context.COMMANDS.push({
                service: 'media_next_track',
                setId: state.id,
                parseCommand: (entity, command, params, user) =>
                    new Promise((resolve, reject) =>
                        this.adapter.setForeignState(command.setId, true, false, {user}, err =>
                            err ? reject(err) : resolve()))

            });
            entity.attributes.supported_features |= 0x20;
        }

        state = control.states.find(s => s.id && s.name === 'PREV');
        if (state && state.id) {
            entity.context.COMMANDS.push({
                service: 'media_previous_track',
                setId: state.id,
                parseCommand: (entity, command, params, user) =>
                    new Promise((resolve, reject) =>
                        this.adapter.setForeignState(command.setId, true, false, {user}, err =>
                            err ? reject(err) : resolve()))

            });
            entity.attributes.supported_features |= 0x10;
        }
        let getVolumeId;
        state = control.states.find(s => s.id && s.name === 'VOLUME_ACTUAL');
        if (state && state.id) {
            getVolumeId = state.id;
        }
        state = control.states.find(s => s.id && s.name === 'VOLUME');

        let setVolumeId;
        if (state && state.id) {
            setVolumeId = state.id;
            getVolumeId = getVolumeId || state.id;

            entity.attributes.supported_features |= 0x4;
            entity.attributes.supported_features |= 0x400;

            const common = objects[setVolumeId].common || {};

            const min = common.min !== undefined ? common.min : 0;
            const max = common.max !== undefined ? common.max : 100;
            const step = common.step !== undefined ? common.step : (max - min) / 10;

            entity.context.COMMANDS.push({
                service: 'volume_down',
                setId: setVolumeId,
                getId: getVolumeId,
                min,
                max,
                step,
                parseCommand: (entity, command, params, user) => new Promise((resolve, reject) => {
                    // get status
                    this.adapter.getForeignState(command.getId, (err, state) => {
                        let val = (state && state.val) || 0;
                        val -= command.step;
                        if (val < command.min) {
                            val = command.min;
                        }
                        this.adapter.setForeignState(command.setId, val, false, {user}, err =>
                            err ? reject(err) : resolve());
                    });
                })
            });

            entity.context.COMMANDS.push({
                service: 'volume_up',
                setId: setVolumeId,
                getId: getVolumeId,
                min,
                max,
                step,
                parseCommand: (entity, command, params, user) => new Promise((resolve, reject) => {
                    // get status
                    this.adapter.getForeignState(command.getId, (err, state) => {
                        let val = (state && state.val) || 0;
                        val += command.step;
                        if (val > command.max) {
                            val = command.max;
                        }
                        this.adapter.setForeignState(command.setId, val, false, {user}, err =>
                            err ? reject(err) : resolve());
                    });
                })
            });

            entity.context.COMMANDS.push({
                service: 'volume_set',
                setId: setVolumeId,
                min: min,
                max: max,
                parseCommand: (entity, command, data, user) =>
                    new Promise((resolve, reject) => {
                        let volume = data.service_data.value !== undefined ? data.service_data.value : data.service_data.volume_level;
                        volume = volume * command.max + command.min; //scale from [0.0,1.0] to [min,max]
                        this.adapter.setForeignState(command.setId, volume, false, {user}, err =>
                            err ? reject(err) : resolve());
                    })
            });

            entity.context.ATTRIBUTES.push({
                attribute: 'volume_level',
                getId: state.id,
                min: min,
                max: max,
                getParser: function (entity, attr, state) {
                    state = state || {val: null};
                    if (state.val !== null) {
                        entity.attributes.volume_level = (state.val - attr.min) / attr.max;
                    }
                }
            });
            entity.attributes.volume_level = 0;
            this._addID2entity(state.id, entity);
        } else if (getVolumeId) {
            const common = objects[getVolumeId].common || {};
            const min = common.min !== undefined ? common.min : 0;
            const max = common.max !== undefined ? common.max : 100;
            entity.context.ATTRIBUTES.push({
                attribute: 'volume_level',
                getId: getVolumeId,
                min: min,
                max: max,
                getParser: function (entity, attr, state) {
                    state = state || {val: null};
                    if (state.val !== null) {
                        entity.attributes.volume_level = (state.val - attr.min) / attr.max;
                    }
                }
            });
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'MUTE');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({
                attribute: 'is_volume_muted',
                getId: state.id
            });

            entity.context.COMMANDS.push({
                service: 'volume_mute',
                setId: state.id,
                parseCommand: (entity, command, data, user) =>
                    new Promise((resolve, reject) =>
                        this.adapter.setForeignState(command.setId, data.service_data.is_volume_muted, false, {user}, err =>
                            err ? reject(err) : resolve()))
            });

            this._addID2entity(state.id, entity);
            entity.attributes.supported_features |= 0x8;
        }

        state = control.states.find(s => s.id && s.name === 'POWER');
        if (state && state.id) {
            entity.context.COMMANDS.push({
                service: 'turn_on',
                setId: state.id,
                parseCommand: (entity, command, params, user) =>
                    new Promise((resolve, reject) =>
                        this.adapter.setForeignState(command.setId, true, false, {user}, err =>
                            err ? reject(err) : resolve()))
            });

            entity.context.COMMANDS.push({
                service: 'turn_off',
                setId: state.id,
                parseCommand: (entity, command, params, user) =>
                    new Promise((resolve, reject) =>
                        this.adapter.setForeignState(command.setId, false, false, {user}, err =>
                            err ? reject(err) : resolve()))
            });

            entity.context.ATTRIBUTES.push({
                attribute: 'power',
                getId: state.id,
                getParser: function (entity, attr, state) {
                    state = state || {val: null};
                    if (state.val) {
                        entity.attributes.power = 'on';
                    } else {
                        entity.attributes.power = 'off';
                        entity.state = 'off';
                    }
                }
            });
            entity.attributes.supported_features |= 0x80;
            entity.attributes.supported_features |= 0x100;
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'ARTIST');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'media_artist', getId: state.id});
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'TITLE');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'media_title', getId: state.id});
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'DURATION');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'media_duration', getId: state.id});
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'ELAPSED');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'media_position', getId: state.id});
            entity.context.ATTRIBUTES.push({attribute: 'media_position_updated_at', media_position_updated_at: true});
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'EPISODE');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'media_episode', getId: state.id});
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'SEASON');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'media_season', getId: state.id});
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'COVER');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'entity_picture', getId: state.id});
            this._addID2entity(state.id, entity);
        }

        return [entity];
    }

    _processDoor(id, control, name, room, func, _obj, objects) {
        const entity = this._processCommon(name, room, func, _obj, 'binary_sensor');

        const state = control.states.find(s => s.id && s.name === 'ACTUAL');
        entity.context.STATE = {getId: null};
        entity.attributes.icon = 'mdi:door';
        entity.attributes.device_class = 'door';
        if (state && state.id) {
            entity.context.STATE.getId = state.id;
            this._addID2entity(state.id, entity);
        }

        return [entity, this._processBattery(control, name, room, func, objects)];
    }

    _processWindow(id, control, name, room, func, _obj, objects) {
        const entity = this._processCommon(name, room, func, _obj, 'binary_sensor');

        const state = control.states.find(s => s.id && s.name === 'ACTUAL');
        entity.context.STATE = {getId: null};
        entity.attributes.icon = 'mdi:window-maximize';
        entity.attributes.device_class = 'window';
        if (state && state.id) {
            entity.context.STATE.getId = state.id;
            this._addID2entity(state.id, entity);
        }

        return [entity, this._processBattery(control, name, room, func, objects)];
    }

    _processWindowTilt(id, control, name, room, func, _obj, objects) {
        const entity = this._processCommon(name, room, func, _obj, 'sensor');

        const state = control.states.find(s => s.id && s.name === 'ACTUAL');
        entity.context.STATE = {getId: null};
        entity.attributes.icon = 'mdi:window-maximize';
        entity.attributes.device_class = 'window';
        if (state && state.id) {
            entity.context.STATE.getId = state.id;
            entity.context.STATE.states = objects[state.id] && objects[state.id].common ? objects[state.id].common.states || null : null;
            entity.context.STATE.getParser = function (entity, attr, state) {
                state = state || {val: null};
                entity.state = entity.context.STATE.historyParser(id, state.val);
            };
            entity.context.STATE.historyParser = function (id, val) {
                let str;
                if (entity.context.STATE.states) {
                    str = entity.context.STATE.states[val] ? entity.context.STATE.states[val].toLowerCase() : 'error';
                } else {
                    //use 0 = closed, 1 = tilted, 2 = open as default from ioBroker-roles documentation, if no common.states
                    str = val === 0 ? 'closed' : val === 1 ? 'tilted' : 'open';
                }
                //try to translate -> will work for open, closed, tilted.
                return this.words[str] ? this.words[str][this.lang] || this.words[str].en : str;
            }.bind(this);
            this._addID2entity(state.id, entity);
        }

        return [entity, this._processBattery(control, name, room, func, objects)];
    }

    _processBattery(control, name, room, func, objects) {
        const state = control.states.find(s => s.id && s.name === 'LOWBAT');
        if (state && state.id) {
            const entity = this._processCommon(name, room, func, objects[state.id], 'sensor');
            entity.context.STATE = {getId: state.id};
            entity.context.iobType = 'LOWBAT';
            entity.attributes.icon = 'mdi:battery-alert';
            entity.attributes.device_class = 'battery';
            entity.unit_of_measurement = '%';
            this._addID2entity(state.id, entity);
            return entity;
        } else {
            return null;
        }
    }

    _processMotion(id, control, name, room, func, _obj, objects) {
        const entity = this._processCommon(name, room, func, _obj, 'binary_sensor');

        const state = control.states.find(s => s.id && s.name === 'ACTUAL');
        entity.context.STATE = {getId: null};
        entity.attributes.icon = 'mdi:motion-sensor';
        entity.attributes.device_class = 'motion';
        if (state && state.id) {
            entity.context.STATE.getId = state.id;
            this._addID2entity(state.id, entity);
        }

        return [entity, this._processBattery(control, name, room, func, objects)];
    }

    _processLock(id, control, name, room, func, _obj, objects) {
        const entity = this._processCommon(name, room, func, _obj, 'lock');

        let state = control.states.find(s => s.id && s.name === 'SET');
        entity.context.STATE = {setId: null, getId: null};
        if (state && state.id) {
            entity.context.STATE.setId = state.id;
            entity.context.STATE.getId = state.id; //fallback if no getId.
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'ACTUAL');
        if (state && state.id) {
            entity.context.STATE.getId = state.id;
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'OPEN');
        if (state && state.id) {
            entity.attributes.supported_features = 1;
            entity.context.COMMANDS = [{
                service: 'open',
                setId: state.id,
                parseCommand: (entity, command, data, user) => {
                    return new Promise((resolve, reject) => {
                        this.adapter.setForeignState(command.setId, true, false,
                            {user}, err => err ? reject(err) : resolve());
                    });
                }
            }];
        }
        return [entity, this._processBattery(control, name, room, func, objects)];
    }

    _processTemperature(id, control, name, room, func, _obj, objects) {
        let entity;
        let state = control.states.find(s => s.id && s.name === 'ACTUAL'); // temperature
        if (state && state.id) {
            entity = this._processCommon(name, room, func, objects[state.id], 'sensor');
            entity.context.STATE = {getId: state.id};
            entity.attributes.device_class = 'temperature';
            this._addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'SECOND'); // humidity
        let entityHum;
        if (state && state.id) {
            entityHum = this._processCommon(name, room, func, objects[state.id], 'sensor');
            entityHum.context.STATE = {getId: state.id};
            entityHum.attributes.icon = 'mdi:mdi-water';
            entityHum.attributes.device_class = 'humidity';
            entityHum.attributes.unit_of_measurement = entityHum.attributes.unit_of_measurement || objects[state.id].common.unit || '%';
            this._addID2entity(state.id, entityHum);
        }

        return [entity, entityHum, this._processBattery(control, name, room, func, objects)];
    }

    _processThermostat(id, control, name, room, func, _obj, objects) {
        // - climate => STATE on/off, attributes: [current_temperature, operation_mode, operation_list, target_temp_step, target_temp_low, target_temp_high, min_temp, max_temp, temperature], commands:
        const entity = this._processCommon(name, room, func, _obj, 'climate');

        let state = control.states.find(s => s.id && s.name === 'POWER');
        entity.context.STATE = {setId: null, getId: null};
        entity.attributes.icon = 'mdi:thermostat';

        if (state && state.id) {
            entity.context.STATE.setId = state.id;
            entity.context.STATE.getId = state.id;
            this._addID2entity(state.id, entity);
        }

        // actual temperature
        state = control.states.find(s => s.id && s.name === 'ACTUAL');
        if (state && state.id) {
            entity.context.ATTRIBUTES = entity.context.ATTRIBUTES || [];
            entity.context.ATTRIBUTES.push({attribute: 'current_temperature', getId: state.id});
            this._addID2entity(state.id, entity);
            if (objects[state.id].common && objects[state.id].common.unit) {
                entity.attributes.unit_of_measurement = objects[state.id].common.unit;
            }
        }

        state = control.states.find(s => s.id && s.name === 'SET');
        if (state && state.id) {
            entity.context.ATTRIBUTES = entity.context.ATTRIBUTES || [];
            entity.context.ATTRIBUTES.push({attribute: 'temperature', getId: state.id});
            entity.context.COMMANDS = [{
                service: 'set_temperature',
                setId: state.id,
                parseCommand: (entity, command, data, user) =>
                    new Promise((resolve, reject) =>
                        this.adapter.setForeignState(command.setId, data.service_data.temperature, false, {user}, err =>
                            err ? reject(err) : resolve()))
            }];

            if (objects[state.id].common) {
                if (!entity.attributes.unit_of_measurement && objects[state.id].common.unit) {
                    entity.attributes.unit_of_measurement = objects[state.id].common.unit;
                }
                if (objects[state.id].common.min) {
                    entity.attributes.min_temp = objects[state.id].common.min;
                }
                if (objects[state.id].common.max) {
                    entity.attributes.max_temp = objects[state.id].common.max;
                }
                if (objects[state.id].common.step) {
                    entity.attributes.target_temp_step = objects[state.id].common.step;
                }
            }
            this._addID2entity(state.id, entity);
        }

        // detect second entity => humidity
        let entryHum;
        state = control.states.find(s => s.id && s.name === 'HUMIDITY');
        if (state && state.id) {
            entryHum = this._processCommon(name, room, func, objects[state.id], 'sensor');
            entryHum.context.STATE = {getId: state.id};
            entryHum.attributes.icon = 'mdi:mdi-water';
            entryHum.attributes.device_class = 'humidity';
            entryHum.attributes.unit_of_measurement = entryHum.attributes.unit_of_measurement || objects[state.id].common.unit || '%';
            this._addID2entity(state.id, entryHum);
        }
        return [entity, entryHum, this._processBattery(control, name, room, func, objects)];
    }

    _iobState2EntityState(id, val, type) {
        type = type || this._ID2entity[id][0].context.type;
        const pos = type.lastIndexOf('.');
        if (pos !== -1) {
            type = type.substring(pos + 1);
        }

        if (type === 'light' || type === 'switch' || type==='input_boolean') {
            return val ? 'on' : 'off';
        } else
        if (type === 'binary_sensor') {
            return val ? 'on' : 'off';
        } else
        if (type === 'lock') {
            return val ? 'unlocked' : 'locked';
        } else
        if (type === 'alarm_control_panel') {
            return val ? 'armed' : 'disarmed';
        } else {
            return val === null || val === undefined ? 'unknown' : val;
        }
    }

    // Process manually created entity
    async _processManualEntity(id) {
        try {
            const obj = await this.adapter.getForeignObjectAsync(id);
            if (id === this.adapter.namespace + '.control.alarm') {
                obj.common.custom = obj.common.custom || {};
                obj.common.custom[this.adapter.namespace] = obj.common.custom[this.adapter.namespace] || {};
                obj.common.custom[this.adapter.namespace].name = obj.common.custom[this.adapter.namespace].name || 'defaultAlarm';
                obj.common.custom[this.adapter.namespace].entity = 'alarm_control_panel';
            }
            const entityType = obj.common.custom[this.adapter.namespace].entity;
            const idPart = obj.common.custom[this.adapter.namespace].name;
            const entity_id = idPart && typeof idPart === 'string' ? entityType + '.' + idPart : null;

            const entity = this._processCommon(null, null, null, obj, entityType, entity_id);

            entity.context.STATE = {getId: id, setId: id};
            entity.isManual = true;

            if (entityType === 'light') {
                if (obj.common.type === 'number') {
                    entity.attributes.supported_features = 1;
                    let iobMaxValue = 100;
                    if (obj.common.max) {
                        iobMaxValue = obj.common.max;
                    } else {
                        this.adapter.log.warn(`no max value for light object '${id}' defined -> using fallback max = 100`);
                    }

                    entity.attributes.iob_max = iobMaxValue;

                    const state = await this.adapter.getForeignStateAsync(id);
                    entity.attributes.brightness = state ? state.val || 0 : 0;
                    entity.context.ATTRIBUTES = [{attribute: 'brightness', getId: id}];
                    entity.context.COMMANDS = [{
                        service: 'turn_on',
                        setId: id,
                        on: iobMaxValue,
                        parseCommand: (entity, command, data, user) => {
                            let val = command.on;
                            if (data.service_data.brightness >= 0) {
                                entity.attributes.brightness = data.service_data.brightness;
                                entity.attributes.brightness_pct = data.service_data.brightness / 255;
                                val = data.service_data.brightness / 255 * iobMaxValue;
                            }
                            if (data.service_data.brightness_pct >= 0) {
                                entity.attributes.brightness = (data.service_data.brightness_pct / 100) * 255;
                                entity.attributes.brightness_pct = data.service_data.brightness_pct;
                                val = data.service_data.brightness_pct / 100 * iobMaxValue;
                            }
                            return this.adapter.setForeignStateAsync(command.setId, val, false, {user});
                        }
                    }, {
                        service: 'turn_off',
                        setId: id,
                        off: obj.common.min || 0,
                        parseCommand: (entity, command, data, user) => {
                            return this.adapter.setForeignStateAsync(command.setId, command.off, false, {user});
                        }
                    }];
                }
            } else if (entityType === 'camera') {
                entity.context.STATE = {getValue: 'on'};
                entity.context.ATTRIBUTES = [{getId: id, attribute: 'url'}];
                entity.attributes.code_format = 'number';
                entity.attributes.access_token = crypto
                    .createHmac('sha256', (Math.random() * 1000000000).toString())
                    .update(Date.now().toString())
                    .digest('hex');
                entity.attributes.model_name = 'Simulated URL';
                entity.attributes.brand = 'ioBroker';
                entity.attributes.motion_detection = false;
            } else if (entityType === 'alarm_control_panel') {
                // - alarm_control_panel => STATE disarmed/armed/armed_home/armed_away/armed_night/armed_custom_bypass/pending/arming/disarming/triggered, attributes: [code_format], commands: alarm_arm_away, alarm_arm_home, alarm_arm_night, alarm_arm_custom_bypass, alarm_disarm (code will be sent)
                // we support only armed/disarmed
                entity.attributes.code_format = obj.common.custom[this.adapter.namespace].code_format || 'number';
                // the code must be in the object in native as alarm_code
            } else if (entityType === 'input_number') {
                entity.attributes.min  = obj.common.min !== undefined ? obj.common.min : 0;
                entity.attributes.max  = obj.common.max !== undefined ? obj.common.max : 100;
                entity.attributes.step = obj.common.step || 1;
                entity.attributes.mode = obj.common.custom[this.adapter.namespace].mode || 'slider';
                const state = await this.adapter.getForeignStateAsync(id);
                entity.attributes.initial = state ? state.val || 0 : 0;
            }
            else if (entityType === 'input_boolean') {
                const state = await this.adapter.getForeignStateAsync(id);
                entity.attributes.initial = this._iobState2EntityState(null, state.val, entityType);
            }
            else if (entityType === 'input_select') {
                if (obj.common.states ) {
                    if (typeof obj.common.states === 'string') {
                        this.log.warn(obj._id + ': states is of type string. Problems might occur. Please fix states to be of type object.');
                        entity.context.STATE.map = {};
                        for (const kv of obj.common.states.split(';')) {
                            const [key, value] = kv.split(':');
                            entity.context.STATE.map[key] = value;
                        }
                    } else {
                        entity.context.STATE.map = obj.common.states ;
                    }
                    entity.attributes.options = Object.values(entity.context.STATE.map);
                }
                const state = await this.adapter.getForeignStateAsync(id);
                if (state) {
                    if (entity.context.STATE.map && entity.context.STATE.map[state.val]) {
                        entity.attributes.initial = entity.context.STATE.map[state.val];
                    }
                }
            }
            else if (entityType === 'switch') {
                entity.context.STATE.setId = id;
                entity.context.STATE.getId = id;
                entity.attributes.icon = 'mdi:light-switch';
                entity.attributes.assumed_state = true;
            }  else if (entityType === 'timer') {
                // - timer => STATE idle/paused/active, attributes: [remaining]
                entity.context.STATE = {getId: null, setId: null}; // will be simulated
                entity.context.lastValue = null;
                entity.attributes.remaining = 0;
                entity.context.ATTRIBUTES = [{
                    attribute: 'remaining',
                    getId: id,
                    setId: id,
                    getParser: function (entity, attr, state) {
                        state = state || {val: null};
                        // - timer => STATE idle/paused/active, attributes: [remaining]
                        // if 0 => timer is off
                        if (!state.val) {
                            entity.state = 'idle';
                        } else if (entity.context.lastValue === null) {
                            entity.state = 'active';
                        } else if (entity.context.lastValue === state.val) {
                            // pause
                            entity.state = 'paused';
                        } else {
                            // active
                            entity.state = 'active';
                        }

                        entity.context.lastValue = state.val;

                        // seconds to D HH:MM:SS
                        if (typeof state.val === 'string' && state.val.indexOf(':') !== -1) {
                            entity.attributes.remaining = state.val;
                        } else {
                            state.val     = parseInt(state.val, 10);
                            const hours   = Math.floor(state.val / 3600);
                            const minutes = Math.floor((state.val % 3600) / 60);
                            const seconds = state.val % 60;
                            entity.attributes.remaining = `${padding(hours)}:${padding(minutes)}:${padding(seconds)}`;
                        }
                    }
                }];
            }
            this.log.debug(`Create manual device: ${entity.entity_id} - ${id}`);

            this._addID2entity(id, entity);

            this._objects[id] = obj;
            return [entity];
        } catch (e) {
            this.adapter.error('Could not process manual entity ' + id + ': ' + e.toString() + ' - ' + e.stack);
        }
    }

    _processSingleCall(ws, data, entity_id) {
        const user = 'system.user.' + (ws.__auth.username || this.config.defaultUser);


        const entity = this._entity2ID[entity_id];
        const id = entity.context.STATE.setId;

        if (entity.context.COMMANDS) {
            const command = entity.context.COMMANDS.find(c => c.service === data.service);
            if (command && command.parseCommand) {
                return command.parseCommand(entity, command, data, user)
                    .then(result => this._sendResponse(ws, data.id, result))
                    .catch(e => this._sendResponse(ws, data.id, {result: false, error: e}));
            }
        }

        if (data.service === 'toggle') {
            this.log.debug('toggle ' + id);

            this.adapter.getForeignState(id, {user}, (err, state) =>
                this.adapter.setForeignState(id, state ? !state.val : true, false, {user}, () =>
                    this._sendResponse(ws, data.id)));
        } else
        if (data.service === 'volume_set') {
            this.log.debug('volume_set ' + id);

            this.adapter.setForeignState(id, data.service_data.value, false, {user}, () =>
                this._sendResponse(ws, data.id));
        } else
        if (data.service === 'trigger' || data.service === 'turn_on' || data.service === 'unlock') {
            this.log.debug(data.service + ' ' + id);

            this.adapter.setForeignState(id, true, false, {user}, () =>
                this._sendResponse(ws, data.id));
        } else
        if (data.service === 'turn_off' || data.service === 'lock') {
            this.log.debug(data.service + ' ' + id);

            this.adapter.setForeignState(id, false, false, {user}, () =>
                this._sendResponse(ws, data.id));
        } else
        if (data.service === 'set_temperature') {
            this.log.debug('set_temperature ' + data.service_data.temperature);

            if (data.service_data.temperature !== undefined) {
                if (entity.context.ATTRIBUTES) {
                    const attr = entity.context.ATTRIBUTES.find(attr => attr.attribute === 'temperature');
                    if (attr) {
                        return this.adapter.setForeignState(attr.setId, data.service_data.temperature, false, {user}, () =>
                            this._sendResponse(ws, data.id));
                    }
                }
            }
            this.log.warn('Cannot find attribute temperature in ' + entity_id);
            this._sendResponse(ws, data.id);
        } else
        if (data.service === 'set_operation_mode') {
            this.log.debug('set_operation_mode ' + data.service_data.operation_mode);

            this.adapter.setForeignState(id, false, false, {user}, () =>
                this._sendResponse(ws, data.id));
        } else
        if (data.service === 'set_page') {
            this.log.debug('set_page ' + JSON.stringify(data.service_data.page));

            if (typeof data.service_data.page === 'object') {
                this.adapter.setState('control.data', {
                    val: data.service_data.page.title,
                    ack: true
                }, () => {
                    /*this.adapter.setState('control.instance', {
                        val: self._instance,
                        ack: true
                    }, () => {*/
                    this.adapter.setState('control.command', {
                        val: 'changedView',
                        ack: true
                    });
                    //});
                });
            }
        } else
        if (data.service.startsWith('set_') && data.service !== 'set_datetime') {
            this.log.debug(data.service + ': ' + id + ' = ' + data.service_data[data.service.substring(4)]);
            // set_value          => service_data.value
            // set_operation_mode => service_data.operation_mode
            // set_temperature    => service_data.temperature
            // set_speed          => service_data.speed

            this.adapter.setForeignState(id, data.service_data[data.service.substring(4)], false, {user}, () =>
                this._sendResponse(ws, data.id));
        } else
        if (data.service === 'volume_mute') {
            this.log.debug('volume_mute ' + id + ' = ' + data.service_data.is_volume_muted);
            // volume_mute        => service_data.is_volume_muted

            this.adapter.setForeignState(id, data.service_data.is_volume_muted, false, {user}, () =>
                this._sendResponse(ws, data.id));
        } else
        if (data.service.startsWith('select_option')) {
            this.log.debug(data.service + ': ' + id + ' = ' + data.service_data[data.service.substring(7)]);
            //get list of options;
            this.adapter.getForeignObject(id, (err, obj) => {
                if (obj.common.states) {
                    const valToState = Object.keys(obj.common.states).find(key => obj.common.states[key] === data.service_data.option);
                    this.adapter.setForeignState(id, valToState, false, {user}, () =>
                        this._sendResponse(ws, data.id));
                }
            });
            //this.adapter.setForeignState(id, data.service_data[data.service.substring(7)], false, {user}, () =>
            //    this._sendResponse(ws, data.id));
        } else
        if (data.service.startsWith('select_')) {
            this.log.debug(data.service + ': ' + id + ' = ' + data.service_data[data.service.substring(7)]);
            // select_option      => service_data.option
            // select_source      => service_data.source

            this.adapter.setForeignState(id, data.service_data[data.service.substring(7)], false, {user}, () =>
                this._sendResponse(ws, data.id));
        } else
        if (data.service.startsWith('alarm_')) {
            //  alarm_arm_away, alarm_arm_home, alarm_arm_night, alarm_arm_custom_bypass, alarm_disarm (code will be sent)
            this.log.debug(data.service + ': ' + id + ' = ' + data.service_data.code ? 'XXX' : 'none');
            this.adapter.getForeignObject(id, (err, obj) => {
                if (obj.native.alarm_code && obj.native.alarm_code.toString() !== data.service_data.code.toString()) {
                    this._sendResponse(ws, data.id, {result: false, error: 'invalid code'});
                } else {
                    this.log.warn(`No code is defined! To provide the code add to object ${id} native.alarm_code with desired code`);
                    this.adapter.setForeignState(id, data.service.startsWith('alarm_arm'), false, {user}, () =>
                        this._sendResponse(ws, data.id));
                }
            });
        } else if (data.service.endsWith('_say')) {
            this.adapter.setForeignState(id, data.service_data.message, false, {user}, () => {
                this._sendResponse(ws, data.id);
            });
        } else {
            this.log.warn('Unknown service: ' + data.service + ' (' + JSON.stringify(data) + ')');
            // close_cover, open_cover
            // set_datetime       => service_data.date, service_data.time

            //{'id": 21, "type": "result", "success": false, "error": {"code": "not_found", "message": "Service not found."}}
            ws.send(JSON.stringify({id, type: 'result', success: false, error: {code: 'not_found', message: 'Service not found.'}}));
        }
    }

    _processCall(ws, data) {
        if (!data.service) {
            this.log.warn('Invalid service call. Make sure service looks like domain.service_name');
            return;
        }

        if (data.service === 'dismiss') {
            this.log.debug('dismiss ' + data.service_data.notification_id);

            return this._clearNotification(data.service_data.notification_id).then(() =>
                this._sendResponse(ws, data.id));
        }

        if(data.domain === 'system_log' && data.service === 'write') {
            this.log.info('Log from UI ' + data.service_data.message);
            return this._sendResponse(ws, data.id);
        }

        let ids = [data.service_data.entity_id];
        if (data.service_data.entity_id instanceof Array) {
            ids = data.service_data.entity_id;
        }
        delete data.service_data.entity_id; //make sure we do not use entity_id array in processSingleCall -> use param entity_id there.

        for (const id of ids) {
            if (!this._entity2ID[id]) {
                this.log.warn('Unknown entity: ' + id + ' for service call ' + JSON.stringify(data));
            } else {
                this._processSingleCall(ws, data, id);
            }
        }
    }

    async _getAllStates() {
        let entity = this._entities.find(e => e.state === undefined);
        while (entity) {
            entity.state = 'unknown';
            if (entity.context.STATE && entity.context.STATE.getId) {
                try {
                    const state = await this.adapter.getForeignStateAsync(entity.context.STATE.getId, {user: 'system.user.' + this.config.defaultUser});
                    if (state) {
                        this.onStateChange(entity.context.STATE.getId, state);
                    } else {
                        entity.state = 'unknown';
                        try {
                            entity.last_changed = new Date().toISOString();
                        } catch (e) {
                            this.adapter.log.warn(`Invalid last changed for ${entity.context.STATE.getId}`);
                        }
                        entity.last_updated = entity.last_changed;
                    }
                } catch (e) {
                    this.adapter.error('Could not get state ' + entity.context.STATE.getId + ': ' + e + ' - ' + e.stack);
                }
            } else if (entity.context.type === 'switch') {
                entity.state = 'off';
            } else if (entity.context.STATE.getValue !== undefined) {
                entity.state = entity.context.STATE.getValue;
            } else if (entity.context.type === 'climate') {
                entity.state = 'on';
            }

            //handle attributes:
            if (entity.context.ATTRIBUTES) {
                const ids = entity.context.ATTRIBUTES.map(entry => entry.getId || '');
                try {
                    const states = await this.adapter.getForeignStatesAsync(ids);
                    if (ids && ids.length) {
                        entity.attributes = entity.attributes || {};
                        ids.forEach((id, i) => {
                            const attribute = entity.context.ATTRIBUTES[i].attribute;
                            if (attribute === 'remaining' && entity.context.type === 'timer') {
                                if (!states[id].val) {
                                    entity.state = 'idle';
                                } else {
                                    entity.state = 'active';
                                }
                                entity.context.lastValue = states[id].val;
                            } else {
                                this.onStateChange(id, states[id]);
                            }
                        });
                    }
                } catch (e) {
                    this.adapter.error('Could not update state: ' + e + ' - ' + e.stack);
                }
            }
            entity = this._entities.find(e => e.state === undefined);
        }
    }

    async onStateChange(id, state, forceUpdate = false) {
        if (state) {
            if (id === this.adapter.namespace + '.control.shopping_list') {
                return this._sendUpdate('shopping_list_updated');
            } else if (id === this.adapter.namespace + '.notifications.list') {
                if (!state.ack) {
                    await this._readNotifications();
                }
                return this._sendUpdate('persistent_notifications_updated');
            } else if (id === this.adapter.namespace + '.notifications.add') {
                return !state.ack &&
                    this.addNotification(state.val).then(() =>
                        this._sendUpdate('persistent_notifications_updated'));
            } else if (id === this.adapter.namespace + '.notifications.clear') {
                return !state.ack &&
                    this._clearNotification(state.val).then(() =>
                        this._sendUpdate('persistent_notifications_updated'));
            } else if (id === this.adapter.namespace + '.control.theme') {
                if (this._themes[state.val] || state.val === 'default') {
                    this._currentTheme = state.val;
                    this._sendUpdate('themes_updated');
                }
            } else if (id === this.adapter.namespace + '.conversation') {
                if (state.ack) {
                    // send answer to conversation dialog
                    this._wss && this._wss.clients.forEach(client => {
                        if (client.__conversations && client.readyState === WebSocket.OPEN) {

                            Object.keys(client.__conversations).forEach(conversation_id => {
                                client.__conversations[conversation_id].timer && clearTimeout(client.__conversations[conversation_id].timer);

                                const answer = {
                                    id: client.__conversations[conversation_id].id,
                                    type: 'result',
                                    success: true,
                                    result: {
                                        speech: {
                                            plain: {
                                                speech: state.val,
                                                extra_data: null
                                            }
                                        },
                                        card: {}
                                    }
                                };
                                client.send(JSON.stringify(answer));
                            });
                        }
                    });
                }
            }
        }

        const changedStates = {};
        this._wss && this._wss.clients.forEach(client => {
            if (client.__templates && client.readyState === WebSocket.OPEN) {
                client.__templates.forEach(t => {
                    if (t.ids.includes(id)) {
                        const _state = state || {val: null};
                        if (changedStates[id] || (this.templateStates[id] && this.templateStates[id].val !== _state.val)) {
                            this.templateStates[id] = _state;
                            changedStates[id] = true;
                            const event = {
                                id: t.id,
                                type: 'event',
                                event: {
                                    result: bindings.formatBinding(t.template, this.templateStates)
                                }
                            };
                            client.send(JSON.stringify(event));
                        }
                    }
                });
            }
        });

        const entities = this._ID2entity[id];
        if (entities) {
            entities.forEach(entity => {
                let updated = false;
                if (state) {
                    // {id: 2, type: "event", "event": {"event_type": "state_changed", "data": {"entity_id": "sun.sun", "old_state": {"entity_id": "sun.sun", "state": "above_horizon", "attributes": {"next_dawn": "2019-05-17T02:57:08+00:00", "next_dusk": "2019-05-16T19:44:32+00:00", "next_midnight": "2019-05-16T23:21:40+00:00", "next_noon": "2019-05-17T11:21:38+00:00", "next_rising": "2019-05-17T03:36:58+00:00", "next_setting": "2019-05-16T19:04:54+00:00", "elevation": 54.81, "azimuth": 216.35, "friendly_name": "Sun"}, "last_changed": "2019-05-16T09:09:53.424242+00:00", "last_updated": "2019-05-16T12:46:30.001390+00:00", "context": {id: "05356b1a7df54b2f939d3c7f8a3e05b4", "parent_id": null, "user_id": null}}, "new_state": {"entity_id": "sun.sun", "state": "above_horizon", "attributes": {"next_dawn": "2019-05-17T02:57:08+00:00", "next_dusk": "2019-05-16T19:44:32+00:00", "next_midnight": "2019-05-16T23:21:40+00:00", "next_noon": "2019-05-17T11:21:38+00:00", "next_rising": "2019-05-17T03:36:58+00:00", "next_setting": "2019-05-16T19:04:54+00:00", "elevation": 54.71, "azimuth": 216.72, "friendly_name": "Sun"}, "last_changed": "2019-05-16T09:09:53.424242+00:00", "last_updated": "2019-05-16T12:47:30.000414+00:00", "context": {id: "e738dc26af1d48b4964c6d9805179595", "parent_id": null, "user_id": null}}}, "origin": "LOCAL", "time_fired": "2019-05-16T12:47:30.000414+00:00", "context": {id: "e738dc26af1d48b4964c6d9805179595", "parent_id": null, "user_id": null}}}
                    if (entity.context.STATE.getId === id) {
                        updated = true;
                        try {
                            entity.last_changed = new Date(state.lc).toISOString();
                        } catch (e) {
                            this.adapter.log.warn(`Invalid last changed for ${entity.context.STATE.getId}`);
                        }
                        try {
                            entity.last_updated = new Date(state.ts).toISOString();
                        } catch (e) {
                            this.adapter.log.warn(`Invalid timestamp for ${entity.context.STATE.getId}`);
                        }

                        if (entity.context.STATE.getParser) {
                            entity.context.STATE.getParser(entity, 'state', state);
                        } else {
                            if (entity.context.type === 'light' && typeof (state.val) === 'number') {
                                // is dimmer
                                entity.attributes.brightness = state.val * 255 / entity.attributes.iob_max;
                                entity.state = state.val > 0 ? 'on' : 'off';
                            } else if (entity.context.type === 'input_select') {
                                if (entity.context.STATE.map) {
                                    entity.attributes.initial = this._iobState2EntityState(id, entity.context.STATE.map[state.val]);
                                    entity.state = this._iobState2EntityState(id, entity.context.STATE.map[state.val]);
                                }
                            } else {
                                entity.state = this._iobState2EntityState(id, state.val);
                            }
                        }
                    }

                    //can have identical id for state and attributes.
                    if (entity.context.ATTRIBUTES) {
                        const attributes = entity.context.ATTRIBUTES.filter(e => e.getId === id);
                        for (const attr of attributes) {
                            updated = true;
                            try {
                                entity.last_changed = new Date(state.lc).toISOString();
                            } catch (e) {
                                this.adapter.log.warn(`Invalid last changed for ${attr.getId}`);
                            }
                            try {
                                entity.last_updated = new Date(state.ts).toISOString();
                            } catch (e) {
                                this.adapter.log.warn(`Invalid timestamp for ${attr.getId}`);
                            }

                            if (attr.getParser) {
                                attr.getParser(entity, attr, state);
                            } else {
                                if (entity.context.type === 'light' && typeof(state.val) === 'number'){
                                    // is dimmer
                                    this.setJsonAttribute(entity.attributes, attr.attribute, this._iobState2EntityState(null,  state.val * 255 / entity.attributes.iob_max, attr.attribute), this.log);
                                } else {
                                    this.setJsonAttribute(entity.attributes, attr.attribute, this._iobState2EntityState(null, state.val, attr.attribute), this.log);
                                }
                            }
                        }
                    }
                }

                if (!updated && !forceUpdate) {
                    return; //nothing happened -> do not notify UI.
                }

                let time_fired;

                try {
                    time_fired = new Date(state ? state.ts : undefined).toISOString();
                } catch (e) {
                    time_fired = new Date().toISOString();
                }
                const t = {
                    type: 'event',
                    event: {
                        event_type: 'state_changed',
                        data: {
                            entity_id: entity.entity_id,
                            new_state: entity
                        },
                        origin: 'LOCAL',
                        time_fired
                    }
                };

                const foundIndex = this._entities.findIndex(x => x.entity_id === entity.entity_id);
                if (foundIndex !== -1) {
                    this._entities[foundIndex] = entity;
                }

                this._wss && this._wss.clients.forEach(ws => {
                    if (ws._subscribes && ws._subscribes.state_changed) {
                        ws._subscribes.state_changed.forEach(id => {
                            t.id = id;
                            ws.send(JSON.stringify(t));
                        });
                    }
                });

            });
        }
    }

    // ------------------------------- END OF CONVERTERS ---------------------------------------- //

    async _processIobState(ids, objects, id, roomName, funcName, result) {
        if (!id) {
            return;
        }

        // object might be deleted but still in room/func enums.
        if (!objects[id]) {
            return;
        }

        let friendlyName = this._getSmartName(objects, id);
        if (typeof friendlyName === 'object' && friendlyName) {
            friendlyName = friendlyName[this.lang] || friendlyName.en;
        }

        //this ignores devices that are deletec in iot adapter. We should not ignore them here! Additional
        // unused entities do not hurt us thaaat much. If they do we should add another ignore method for lovelace.
        //if (friendlyName === 'ignore' || friendlyName === false) {
        //    return;
        //}

        if (!friendlyName && !roomName && !funcName) {
            return;
        }

        try {
            // try to detect device
            const options = {
                objects:            objects,
                id:                 id,
                _keysOptional:      ids,
                _usedIdsOptional:   this.usedIds
            };
            const controls = this.detector.detect(options);
            if (controls) {
                for (const control of controls) {
                    if (this.converter[control.type]) {
                        const entities = await this.converter[control.type](id, control, friendlyName, roomName, funcName, objects[id], objects);
                        // converter could return one ore more devices as array
                        if (entities && entities.length) {
                            // iterate through entities
                            for (const entity of entities) {
                                if (!entity) return;

                                const _entity = result.find(e => e.entity_id === entity.entity_id);
                                if (_entity) {
                                    return this.log.debug('Duplicates found for ' + entity.entity_id);
                                }

                                result.push(entity);

                                if (entity.context.STATE) {
                                    if (entity.context.STATE.getId) {
                                        this._objects[entity.context.STATE.getId] = objects[entity.context.STATE.getId];
                                    }
                                    if (entity.context.STATE.setId && entity.context.STATE.setId !== entity.context.STATE.getId) {
                                        this._objects[entity.context.STATE.setId] = objects[entity.context.STATE.setId];
                                    }
                                }
                                if (entity.context.ATTRIBUTES) {
                                    entity.context.ATTRIBUTES.forEach(attr => {
                                        if (attr.getId) {
                                            this._objects[attr.getId] = objects[attr.getId];
                                        }
                                        if (attr.setId && attr.getId !== attr.setId) {
                                            this._objects[attr.setId] = objects[attr.setId];
                                        }
                                    });
                                }

                                this.adapter.log.debug('[Type-Detector] Created auto device: ' + entity.entity_id + ' - ' + control.type + ' - ' + id);
                            }
                        }
                    } else {
                        this.adapter.log.debug('[Type-Detector] device ' + control.states.find(e => e.id).id + ' - ' + control.type + ' - ' + id + ' is not yet supported');
                    }
                }
            } else {
                console.log(`[Type-Detector] Nothing found for ${options.id}`);
            }
        } catch (e) {
            this.adapter.log.error('[Type-Detector] Cannot process "' + id + '": ' + e + ' stack: ' + e.stack);
            throw e;
        }
    }

    _updateConstantEntities() {
        //zone.home:
        let entityHome = this._entities.find(x => x.entity === 'zone.home');
        if (!entityHome) {
            entityHome = {
                'entity_id': 'zone.home',
                'state': 'zoning',
                'attributes': {
                    'hidden': true,
                    'radius': 10,
                    'friendly_name': 'Home',
                    'icon': 'mdi:home'
                },
                'context': {
                    'id': 'system.config', //not sure this makes a lot of sense. But prevents crash in UI.
                    'STATE': {} //prevent warning on getting history.
                }
            };
            this._entities.push(entityHome);
            this._entity2ID[entityHome.entity_id] = entityHome;
        }
        const now = new Date().toISOString();
        entityHome.attributes.latitude = parseFloat(this.systemConfig.latitude);
        entityHome.attributes.longitude = parseFloat(this.systemConfig.longitude);
        entityHome.last_changed = now;
        entityHome.last_updated = now;
    }

    async _updateDevices() {
        const result = [];
        try {
            const {objects, enums} = await this._readObjects();
            const ids = Object.keys(objects);
            this.enums = [];
            this.enums = [];
            this.usedIds = [];
            this.keys = [];

            ids.sort();

            // Build overlap from rooms and functions
            const rooms = [];
            const funcs = [];
            // let smartName;
            Object.keys(enums).forEach(id => {
                // smartName = this._getSmartName(enums[id]);
                if (id.match(/^enum\.rooms\./)/*     && smartName !== 'ignore' && smartName !== false*/) {
                    rooms.push(id);
                } else if (id.match(/^enum\.functions\./)/* && smartName !== 'ignore' && smartName !== false*/) {
                    funcs.push(id);
                }
            });

            const roomNames = {};
            for (const funcId of funcs) {
                const func = enums[funcId];
                if (!func.common || !func.common.members || typeof func.common.members !== 'object' || !func.common.members.length) continue;

                // Get the name of function (with language and if name is empty)
                let funcName = this._getSmartName(func);
                funcName = funcName || func.common.name;

                if (funcName && typeof funcName === 'object') funcName = funcName[this.lang] || funcName.en;

                if (!funcName) {
                    funcName = funcId.substring('enum.functions.'.length);
                    funcName = funcName[0].toUpperCase() + funcName.substring(1);
                }

                for (const id of func.common.members) {
                    for (const roomId of rooms) {
                        const room = enums[roomId];
                        if (!room.common || !room.common.members || typeof func.common.members !== 'object' || !room.common.members.length) continue;

                        // If state or channel is in some room and in some function
                        const pos = room.common.members.indexOf(id);
                        if (pos !== -1) {
                            // find name for room if not found earlier
                            if (!roomNames[roomId]) {
                                // Get the name of function (with language and if name is empty)
                                let roomName = this._getSmartName(room);
                                roomName = roomName || room.common.name;
                                if (roomName && typeof roomName === 'object') roomName = roomName[this.lang] || roomName.en;
                                if (!roomName) {
                                    roomName = roomId.substring('enum.rooms.'.length);
                                    roomName = roomName[0].toUpperCase() + roomName.substring(1);
                                }
                                roomNames[roomId] = roomName;
                            }

                            await this._processIobState(ids, objects, id, roomNames[roomId], funcName, result);
                        }
                    }
                }
            }

            this.usedIds = null;
            this.keys = null;
        } catch (e) {
            this.adapter.error('Could not create auto entities: ' + e);
        }

        result.forEach(entity => this.adapter.log.debug(`AUTO Device detected: ${entity.context.id} => ${entity.context.type}`));
        return result;
    }

    async _readObjects() {
        const objects = {};
        const enums = {};
        try {
            const params = {};
            if (this.adapter.config.aliasOnly) {
                params.startkey = 'alias.0.';
                params.endkey = 'alias.0.\u9999';
            }
            const _states   = await this.adapter.getObjectViewAsync('system', 'state', params);
            const _channels = await this.adapter.getObjectViewAsync('system', 'channel', params);
            const _devices  = await this.adapter.getObjectViewAsync('system', 'device', params);
            const _enums    = await this.adapter.getObjectViewAsync('system', 'enum', {});
            if (_devices && _devices.rows) {
                for (let i = 0; i < _devices.rows.length; i++) {
                    if (_devices.rows[i].value && _devices.rows[i].value._id && !ignoreIds.find(reg => reg.test(_devices.rows[i].value._id))) {
                        objects[_devices.rows[i].value._id] = _devices.rows[i].value;
                    }
                }
            }
            if (_channels && _channels.rows) {
                for (let i = 0; i < _channels.rows.length; i++) {
                    if (_channels.rows[i].value && _channels.rows[i].value._id && !ignoreIds.find(reg => reg.test(_channels.rows[i].value._id))) {
                        objects[_channels.rows[i].value._id] = _channels.rows[i].value;
                    }
                }
            }
            if (_states && _states.rows) {
                for (let i = 0; i < _states.rows.length; i++) {
                    if (_states.rows[i].value && _states.rows[i].value._id && !ignoreIds.find(reg => reg.test(_states.rows[i].value._id))) {
                        objects[_states.rows[i].value._id] = _states.rows[i].value;
                    }
                }
            }
            if (_enums && _enums.rows) {
                for (let i = 0; i < _enums.rows.length; i++) {
                    if (_enums.rows[i].value && _enums.rows[i].value._id) {
                        enums[_enums.rows[i].value._id] = _enums.rows[i].value;
                        objects[_enums.rows[i].value._id] = _enums.rows[i].value;
                    }
                }
            }

        } catch (e) {
            this.adapter.error('Failed to get states / channels / devices / enums, entity generation won\'t work: ' + e.toString() + ' - ' + e.stack);
        }
        return {objects, enums};
    }

    async _processEntities(ids, _entities) {
        _entities = _entities || [];
        for (const id of ids) {
            const entities = await this._processManualEntity(id);
            _entities = _entities.concat(entities);
        }
        return _entities;
    }

    // set as resources the custom cards
    _listFiles(cb) {
        this.adapter.readDir(this.adapter.namespace, '/cards/', (err, list) => {
            if (list.length) {
                this._ressourceConfig = list.map(file => {
                    const pos = file.file.lastIndexOf('.');
                    const type = file.file.substring(pos + 1).toLowerCase();
                    this.log.debug('Add custom cards: ' + file.file + ' as ' + type);
                    return {
                        type: type === 'js' ? 'module' : type,
                        url: '/cards/' + file.file
                    };
                });
            }
            cb && cb();
        });
    }

    _flatJSON(obj, entities) {
        Object.keys(obj).forEach(key => {
            if (obj[key] instanceof Object) {
                if (obj[key] instanceof Array && key === 'entities' && typeof obj[key][0] === 'string') {
                    //handle entities array -> custom:mini-graph-card stores entities just as string!
                    for (const entity of obj[key]) {
                        entities.indexOf(entity) === -1 && entities.push(entity);
                    }
                } else {
                    this._flatJSON(obj[key], entities);
                }
            } else {
                if (key === 'entity') {
                    entities.indexOf(obj[key]) === -1 && entities.push(obj[key]);
                }
            }
        });
    }

    _manageSubscribesFromConfig() {
        const entities = [];

        if (this._lovelaceConfig.views) {
            // iterate trough all objects to get all nested entities Ids
            this._flatJSON(this._lovelaceConfig.views, entities);
        }

        // this._lovelaceConfig.views && this._lovelaceConfig.views.forEach(view =>
        //     view.cards && view.cards.forEach(card => {
        //         card.entity && entities.indexOf(card.entity) === -1 && entities.push(card.entity);
        //         if (card.entities) {
        //             if (card.entities instanceof Array) {
        //                 card.entities.forEach(subCard => subCard.entity && entities.indexOf(subCard.entity) === -1 && entities.push(subCard.entity));
        //             } else
        //             if (typeof card.entities === 'string') {
        //                 entities.indexOf(card.entities) === -1 && entities.push(card.entities);
        //             }
        //         }
        //     }));

        let ids = [];
        entities.forEach(entityId => {
            const entity = this._entity2ID[entityId];
            if (!entity) {
                return;
            }
            if (entity.context.STATE && entity.context.STATE.getId && ids.indexOf(entity.context.STATE.getId) === -1) {
                ids.push(entity.context.STATE.getId);
            }
            if (entity.context.ATTRIBUTES) {
                entity.context.ATTRIBUTES.forEach(attr => {
                    if (attr.getId && ids.indexOf(attr.getId) === -1) {
                        ids.push(attr.getId);
                    }
                });
            }
        });

        // check all sockets
        this._wss && this._wss.clients.forEach(client =>
            client.__templates && client.__templates.forEach(t => ids = ids.concat(t.ids)));

        const deleted = this._subscribed.filter(id => ids.indexOf(id) === -1);

        // unsubscribe
        deleted.forEach(id => {
            this.log.debug('IoB UnSubscribe on ' + id);
            this.adapter.unsubscribeForeignStates(id);
            const pos = this._subscribed.indexOf(id);
            this._subscribed.splice(pos, 1);
        });

        // subscribe
        ids.forEach(id => {
            if (this._subscribed.indexOf(id) === -1) {
                this._subscribed.push(id);
                this.adapter.subscribeForeignStates(id);
                this.log.debug('IoB Subscribe on ' + id);
            }
        });
    }

    _renderIndex() {
        if (this._indexHtml) {
            return this._indexHtml;
        }
        const text = fs.readFileSync(getRootPath() + 'index.html').toString('utf-8');
        const lines = text.split('\n');
        const nLines = [];
        let template = false;
        let style = false;
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].trim().match(/^{%/)) {
                template = !template;
                continue;
            } else
            if (!style && lines[i].trim().match(/<style>/)) {
                style = true;
                nLines.push(lines[i]);
                nLines.push(fs.readFileSync(__dirname + '/../assets/style.css').toString('utf-8'));
                continue;
            } else
            if (lines[i].trim().match(/<\/body>/)) {
                const hideScript = [];
                /*if (this.config.hideHeader) {
                    hideScript.push('hideHeader();');
                }*/
                if (this.config.auth === false) {
                    hideScript.push('window.hassNoAuth = "NO_AUTH";');
                    hideScript.push('window.__tokenCache = {tokens: undefined, writeEnabled: false};');
                }
                nLines.push('<script>\n' + fs.readFileSync(__dirname + '/../assets/index.js').toString('utf-8') + hideScript.join('\n') + '\n</script>');
            }
            if (template) {
                continue;
            }
            nLines.push(lines[i]);
        }
        this._indexHtml = nLines.join('\n');
        this._indexHtml = this._indexHtml.replace(/{{ no_auth }}/g, '1'); // deprecated
        this._indexHtml = this._indexHtml.replace(/{{ use_oauth }}/g, '0');  // deprecated
        this._indexHtml = this._indexHtml.replace(/{{ theme_color }}/g, this._renderManifest().theme_color);  // deprecated
        this._indexHtml = this._indexHtml.replace(/#THEMEC/g, this._renderManifest().theme_color);
        return this._indexHtml;
    }

    _renderManifest() {
        let lang = 'en-US';
        if (this.lang === 'ru') {
            lang = 'ru-RU';
        } else
        if (this.lang === 'de') {
            lang = 'de-DE';
        }

        return {
            background_color: '#FFFFFF',
            description: 'Open-source home automation platform running on Node.js.',
            dir: 'ltr',
            display: 'standalone',
            icons: [
                {
                    sizes: '192x192',
                    src: '/static/icons/favicon-192x192.png',
                    type: 'image/png'
                },
                {
                    sizes: '384x384',
                    src: '/static/icons/favicon-384x384.png',
                    type: 'image/png'
                },
                {
                    sizes: '512x512',
                    src: '/static/icons/favicon-512x512.png',
                    type: 'image/png'
                },
                {
                    sizes: '1024x1024',
                    src: '/static/icons/favicon-1024x1024.png',
                    type: 'image/png'
                }
            ],
            lang,
            name: 'ioBroker',
            short_name: 'IoB',
            start_url: '/?homescreen=1',
            theme_color: '#03A9F4'
        };
    }

    _renderAuthorize() {
        let html = fs.readFileSync(getRootPath() + 'authorize.html').toString('utf-8');
        html = html.replace(/Home Assistant/g, 'ioBroker');
        return html;
    }

    _getConfig() {
        const tzone = jstz.determine().name();
        //this.log.debug("tz:" + tzone);
        return {
            latitude: parseFloat(this.systemConfig.latitude),
            longitude: parseFloat(this.systemConfig.longitude),
            elevation: 0,
            unit_system: {
                length: 'km',
                mass: 'g',
                pressure: 'mmHg',
                temperature: '\u00b0C',
                volume: 'L'
            },
            language: this.systemConfig.language,
            location_name: 'Home',
            time_zone: tzone,
            components: [
                'lovelace', 'conversation', 'history', 'shopping_list'
            ],
            version: VERSION
        };
    }

    _getThemes() {
        return {
            themes: this._themes,
            default_theme: this._currentTheme || this.config.defaultTheme || 'default',
            default_dark_theme: this.config.defaultThemeDark || 'default'
        };
    }

    getHassStates() {
        // parse config for entity_ids
        return this._entities;

        /*return [
            {
                "entity_id": "sun.sun",
                "state": "above_horizon",
                "attributes": {
                    "next_dawn": "2019-05-17T02:57:08+00:00",
                    "next_dusk": "2019-05-16T19:44:32+00:00",
                    "next_midnight": "2019-05-16T23:21:40+00:00",
                    "next_noon": "2019-05-17T11:21:38+00:00",
                    "next_rising": "2019-05-17T03:36:58+00:00",
                    "next_setting": "2019-05-16T19:04:54+00:00",
                    "elevation": 54.81,
                    "azimuth": 216.35,
                    "friendly_name": "Sun"
                },
                "last_changed": "2019-05-16T09:09:53.424242+00:00",
                "last_updated": "2019-05-16T12:46:30.001390+00:00",
                "context": {id: "05356b1a7df54b2f939d3c7f8a3e05b4", "parent_id": null, "user_id": null}
            },
            {
                "entity_id": "zone.home",
                "state": "zoning",
                "attributes": {
                    "hidden": true,
                    "latitude": 50.1155,
                    "longitude": 8.6842,
                    "radius": 100,
                    "friendly_name": "Home",
                    "icon": "mdi:home"
                },
                "last_changed": "2019-05-16T09:09:53.425218+00:00",
                "last_updated": "2019-05-16T09:09:53.425218+00:00",
                "context": {id: "42760245d5a84438a4e2989bd39d31ef", "parent_id": null, "user_id": null}
            },
            {
                "entity_id": "sensor.yr_symbol",
                "state": "unknown",
                "attributes": {
                    "attribution": "Weather forecast from met.no, delivered by the Norwegian Meteorological Institute.",
                    "friendly_name": "yr Symbol",
                    "entity_picture": "https://api.met.no/weatherapi/weathericon/1.1/?symbol=None;content_type=image/png"
                },
                "last_changed": "2019-05-16T09:10:06.702562+00:00",
                "last_updated": "2019-05-16T09:10:06.702562+00:00",
                "context": {id: "ce038a425b484d27945e375ca2145ce9", "parent_id": null, "user_id": null}
            },
            {
                "entity_id": "group.all_devices",
                "state": "unknown",
                "attributes": {
                    "entity_id": [],
                    "order": 0,
                    "auto": true,
                    "friendly_name": "all devices",
                    "hidden": true
                },
                "last_changed": "2019-05-16T09:10:06.710375+00:00",
                "last_updated": "2019-05-16T09:10:06.710375+00:00",
                "context": {id: "ec4352089b944195a6b2de382fbd5b02", "parent_id": null, "user_id": null}
            },
            {
                "entity_id": "person.admin",
                "state": "unknown",
                "attributes": {
                    "editable": true,
                    id: "c110b265fd8b460d89f8b184e39c622c",
                    "user_id": "4e645b6d65ea4473b31a69d685781a17",
                    "friendly_name": "Admin"
                },
                "last_changed": "2019-05-16T09:10:07.335375+00:00",
                "last_updated": "2019-05-16T09:10:07.769945+00:00",
                "context": {id: "d9cf0d3c16974a04a1363e9c726cef55", "parent_id": null, "user_id": null}
            }
        ];*/
    }

    onCards(req, res) {
        let file = req.url;
        const pos = req.url.indexOf('?');
        if (pos !== -1) {
            file = file.substring(0, pos);
        }
        this.adapter.readFile(this.adapter.namespace, file, {user: 'system.user.' + this.config.defaultUser}, (err, data) => {
            if (data) {
                const pos = file.lastIndexOf('.');
                res.setHeader('content-type', (mime.getType || mime.lookup).call(mime, file.substring(pos + 1).toLowerCase()));
                res.send(data);
            } else {
                res.status(404).send('File not found');
            }
        });
    }

    onCustomUI(req, res) {
        let file = req.url;
        const pos = req.url.indexOf('?');
        if (pos !== -1) {
            file = file.substring(0, pos);
        }
        this.adapter.readFile(this.adapter.namespace, file.replace('/local/custom_ui/', '/cards/'), {user: 'system.user.' + this.config.defaultUser}, (err, data) => {
            if (data) {
                const pos = req.url.lastIndexOf('.');
                res.setHeader('content-type', (mime.getType || mime.lookup).call(mime, file.substring(pos + 1).toLowerCase()));
                res.send(data);
            } else {
                res.status(404).send('File not found');
            }
        });
    }

    /**
     * convert .ts of state e to ISOString with try/catch and now as fallback.
     * @param {ioBroker.state} e
     * @returns {string}
     * @private
     */
    _convertStateTStoISOString(e) {
        try {
            return new Date(e.ts).toISOString();
        } catch (error) {
            return new Date().toISOString();
        }
    }

    async _init() {
        const upload = multer();

        this._listFiles();

        this.adapter.subscribeForeignObjects('*');

        //this._app.use(bodyParser.json());
        this._app.use(bodyParser.urlencoded({ extended: false }));

        // on http://localhost:3000/auth/authorize?response_type=code&client_id=http%3A%2F%2Flocalhost%3A3000%2F&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flovelace%3Fauth_callback%3D1&state=eyJoYXNzVXJsIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiY2xpZW50SWQiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAvIn0%3D
        this._app.get('/auth/authorize', (req, res) => {
            res.setHeader('location', '/frontend_es5/authorize.html' + req.url.replace(/^\//, '').replace(/^auth\/authorize/, ''));
            res.status(302).send();
        });

        this._app.use('/auth/providers', (req, res) =>
            res.json([{id: null, name: 'ioBroker Local', type: 'iobroker'}]));

        this._app.post('/auth/login_flow', (req, res) => {
            console.log('/auth/login_flow' + JSON.stringify(req.query) + JSON.stringify(req.body));

            generateRandomToken((_err, token) => {
                this._auth_flows[token] = {
                    ts: Date.now()
                };
                res.json({
                    data_schema: [
                        {name: 'username', type: 'string'},
                        {name: 'password', type: 'string'}
                    ],
                    description_placeholders: null,
                    errors: {},
                    flow_id: token,
                    handler: ['iobroker', null],
                    step_id: 'init',
                    type: 'form'
                });
            });
        });

        this._app.post('/auth/login_flow/:id', (req, res) => {
            if (!this._auth_flows[req.params.id] || Date.now() - this._auth_flows[req.params.id].ts > TIMEOUT_PASSWORD_ENTER) {
                return res.status(501).json({error: 'session expired'});
            }

            let s = '';
            req.on('data', d => s += d.toString());
            req.on('end', () => {
                try {
                    s = JSON.parse(s);
                } catch (_) {
                    this.log.warn('Cannot parse with data: ' + s);
                }
                console.log('/auth/login_flow/:id' + JSON.stringify(req.query) + JSON.stringify(req.param));

                this.adapter.checkPassword(s.username, s.password, result => {
                    if (result) {
                        generateRandomToken((_err, auth_code) => {
                            this._auth_flows[req.params.id].auth_code = auth_code;
                            this._auth_flows[req.params.id].client_id = s.client_id;
                            this._auth_flows[req.params.id].username  = s.username;
                            this._auth_flows[req.params.id].ts        = Date.now();

                            res.json({
                                description: null,
                                description_placeholders: null,
                                flow_id:    req.params.id,
                                handler:    ['iobroker', null],
                                result:     auth_code, // auth code
                                title:      'ioBroker Local',
                                type:       'create_entry',
                                version:    1
                            });
                        });
                    } else {
                        res.status(401).json({error: 'Invalid username or password'});
                    }
                });
            });
        });

        const cpUpload = upload.fields([
            {name: 'client_id',     maxCount: 1},
            {name: 'client_secret', maxCount: 1},
            {name: 'code',          maxCount: 1},
            {name: 'refresh_token', maxCount: 1},
            {code: 'grant_type',    maxCount: 1}
        ]);

        this._app.post('/auth/token', cpUpload, (req, res) => {
            const now = Date.now();
            if (req.body.action === 'revoke') {
                const flowId = Object.keys(this._auth_flows)
                    .find(flowId => this._auth_flows[flowId].refresh_token === req.body.refresh_token);
                if (flowId) {
                    delete this._auth_flows[flowId];
                    res.status(200).json({result: 'revoked'});
                } else {
                    res.status(404).json({result: 'not exists'});
                }
            } else
            if (req.body.grant_type === 'authorization_code') {
                // simulate token exchange
                if (this.config.auth === false && req.body.code === 'NO_AUTH') {
                    res.json({
                        access_token:  NO_TOKEN,
                        expires_in:    Math.round(3600000000),
                        refresh_token: NO_TOKEN,
                        token_type:   'Bearer'
                    });
                    return;
                }

                const flowId = Object.keys(this._auth_flows)
                    .find(flowId => this._auth_flows[flowId].auth_code === req.body.code && now - this._auth_flows[flowId].ts < TIMEOUT_AUTH_CODE);

                if (!flowId) {
                    res.status(403).json({error: 'auth code is invalid or expired'});
                    //res.json({ok: false, status: 403, error: 'auth code is invalid or expired'});
                } else {
                    generateRandomToken((_err, access_token) => {
                        generateRandomToken((_err, refresh_token) => {
                            console.log('generate new access token ' + JSON.stringify(req.body));

                            const flow = this._auth_flows[flowId];
                            //access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5Yjc5Y2Q2OTZmN2U0ZDc2OTg1NGU4NGQ3YmY4NzNlMyIsImlhdCI6MTU1ODAwOTE1MywiZXhwIjoxNTU4MDEwOTUzfQ.QL9qA0QeOxfMoxPUfxH1kEZDGnDNlSHbQeMF8z2xLw0',
                            flow.access_token  = access_token;
                            flow.refresh_token = refresh_token;
                            flow.auth_ttl      = this.config.ttl * 1000;
                            flow.ts            = now;

                            res.json({
                                access_token:  flow.access_token,
                                expires_in:    Math.round(flow.auth_ttl / 1000),
                                refresh_token: flow.refresh_token,
                                token_type:    'Bearer'
                            });
                            this._saveAuth();
                        });
                    });
                }
            } else if (req.body.grant_type === 'refresh_token') {
                const flowId = Object.keys(this._auth_flows)
                    .find(flowId =>
                        this._auth_flows[flowId].refresh_token === req.body.refresh_token &&
                        now - this._auth_flows[flowId].ts < this._auth_flows[flowId].auth_ttl);
                if (!flowId) {
                    res.status(403).json({error: 'refresh_token is invalid or expired'});
                    //res.json({ok: false, status: 403, error: 'refresh_token is invalid or expired'});
                } else {
                    generateRandomToken((_err, access_token) => {
                        generateRandomToken((_err, refresh_token) => {
                            console.log('generate access token' + JSON.stringify(req.body));

                            const flow = this._auth_flows[flowId];
                            //access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5Yjc5Y2Q2OTZmN2U0ZDc2OTg1NGU4NGQ3YmY4NzNlMyIsImlhdCI6MTU1ODAwOTE1MywiZXhwIjoxNTU4MDEwOTUzfQ.QL9qA0QeOxfMoxPUfxH1kEZDGnDNlSHbQeMF8z2xLw0',
                            flow.access_token  = access_token;
                            flow.refresh_token = refresh_token;
                            flow.auth_ttl      = this.config.ttl * 1000;
                            flow.ts            = now;

                            res.json({
                                access_token:  flow.access_token,
                                expires_in:    Math.round(flow.auth_ttl / 1000),
                                refresh_token: flow.refresh_token,
                                token_type:    'Bearer'
                            });
                            this._saveAuth();
                        });
                    });
                }
            }
        });

        /*const token = this._app.oauth.token();
        this._app.post('/auth/token', (req,res,next) => {
            token(req,res,next);
        });*/

        const pagesWithAuth = [
            /^\/adapter\//,
            /^\/state\//,
            /^\/api\/history\//,
        ];

        this._app.use((req, res, next) => {
            if (req.url.includes('authorize.html')) {
                this.log.debug('authorize.html');
                res.send(this._renderAuthorize());
            } else {
                // check authentication
                if (pagesWithAuth.some(reg => reg.test(req.url)) && this.config.auth !== false) {
                    let access_token = req.headers ? (req.headers.authorization || req.headers.Authorization || '').substring(7) : ''; // "'Bearer '.length
                    access_token = access_token || req.query.token;
                    if (!access_token) {
                        this.log.warn('Auth token not found! Close connection.');
                        return res.status(401).send({error: 'Not authenticated'});
                    } else {
                        const now          = Date.now();
                        const flowId       = Object.keys(this._auth_flows)
                            .find(_flowId =>
                                this._auth_flows[_flowId].access_token === access_token &&
                                now - this._auth_flows[_flowId].ts < this._auth_flows[_flowId].auth_ttl);

                        if (!flowId) {
                            this.log.warn('Auth token is expired!');
                            res.status(401).json({error: 'Not authenticated'});
                            return;
                        } else {
                            req._user = this._auth_flows[flowId].username;
                        }
                    }
                }

                next();
            }
        });

        this._app.get('/cards/*', (req, res) => this.onCards(req, res));
        this._app.get('/lovelace/cards/*', (req, res) => this.onCards(req, res));

        this._app.get('/local/custom_ui/*', (req, res) => this.onCustomUI(req, res));
        this._app.get('/lovelace/local/custom_ui/*', (req, res) => this.onCustomUI(req, res));

        this._app.get('/', (req, res) => res.send(this._renderIndex()));
        this._app.get('/lovelace/', (req, res) => res.send(this._renderIndex()));
        this._app.get('/lovelace', (req, res) => res.send(this._renderIndex()));
        this._app.get('/lovelace/:id', (req, res) => res.send(this._renderIndex()));

        this._app.get('/manifest.json', (req, res) => res.json(this._renderManifest()));
        this._app.get('/lovelace/manifest.json', (req, res) => res.json(this._renderManifest()));

        this._app.use('/frontend_latest/', express.static(getRootPath()));
        this._app.use('/lovelace/frontend_latest/', express.static(getRootPath()));

        this._app.use('/static/icons/', express.static(__dirname + '/../assets/icons/'));
        this._app.use('/lovelace/static/icons/', express.static(__dirname + '/../assets/icons/'));

        this._app.use('/images/', express.static(getRootPath() + 'static/images/'));
        this._app.use('/lovelace/images/', express.static(getRootPath() + 'static/images/'));

        this._app.use('/static/', express.static(getRootPath()));
        this._app.use('/lovelace/static/', express.static(getRootPath()));

        this._app.use('/adapter/', (req, res) => {
            let url = req.url;
            url = url.replace(/^\/([a-zA-Z0-9-_]+)\//, '/$1.admin/');
            url = url.split('/');
            // Skip first /
            url.shift();
            // Get ID
            const id = url.shift();
            url = url.join('/');
            const pos = url.indexOf('?');
            if (pos !== -1) {
                url = url.substring(0, pos);
            }

            this.adapter.readFile(id, url, {user: 'system.user.' + this.config.defaultUser}, (err, buffer, mimeType) => {
                if (buffer === null || buffer === undefined || err) {
                    res.contentType('text/html');
                    res.status(404).send('File ' + url + ' not found: ' + err);
                } else {
                    mimeType = mimeType || (mime.getType || mime.lookup).call(mime, url) || 'text/javascript';

                    res.contentType(mimeType);
                    res.status(200).send(buffer);
                }
            });
        });

        // Init read from states
        this._app.get('/state/*', (req, res) => {
            try {
                const fileName = req.url.split('/', 3)[2].split('?', 2);
                this.adapter.getForeignObject(fileName[0], (err, obj) => {
                    let contentType = 'text/plain';
                    if (obj && obj.common.type === 'file')  {
                        contentType = (mime.getType || mime.lookup).call(mime, fileName[0]);
                    }
                    this.adapter.getBinaryState(fileName[0], {user: 'system.user.' + this.adapter.config.defaultUser}, (err, obj) => {
                        if (!err && obj !== null && obj !== undefined) {
                            if (obj && typeof obj === 'object' && obj.val !== undefined && obj.ack !== undefined) {
                                res.set('Content-Type', 'application/json');
                            } else {
                                res.set('Content-Type', contentType || 'text/plain');
                            }
                            res.status(200).send(obj);
                        } else {
                            res.status(404).send('404 Not found. File ' + fileName[0] + ' not found');
                        }
                    });
                });
            } catch (e) {
                res.status(500).send('500. Error' + e);
            }
        });

        this._app.use('/lovelace/', express.static(getRootPath()));
        this._app.use(express.static(getRootPath()));

        this._app.get('/api/history/period/:start', async (req, res) => {
            this.log.debug(`Get history for ${req.query.filter_entity_id} from ${req.params.start} to ${req.query.end_time}`);

            const user = req._user || this.config.defaultUser;

            if (!this.adapter.config.history) {
                this.log.warn(`History instance is not selected in the settings`);
                res.json([]);
            } else {
                const entityIDs = req.query.filter_entity_id.split(',').map(id => id.trim());
                const totalResult = [];
                for (const id of entityIDs) {
                    //const i = entityIDs.indexOf(id);
                    // Get stored values for "system.adapter.admin.0.memRss" in last hour
                    const entity = this._entity2ID[id];
                    if (entity) {
                        const id = entity.context.STATE.getId || entity.context.STATE.setId;
                        try {
                            let stateResult;
                            const options = {
                                start: new Date(req.params.start).getTime(),
                                end: new Date(req.query.end_time).getTime(),
                                aggregate: 'onchange',
                                user,
                            };
                            if (id) {
                                stateResult = await this.adapter.sendToAsync(this.adapter.config.history, 'getHistory', {
                                    id, options
                                });
                            } else {
                                stateResult = { result: [] };
                            }
                            const attributesResult = {};
                            if (entity.context.ATTRIBUTES) {
                                for (const attribute of entity.context.ATTRIBUTES) {
                                    const id = attribute.getId || attribute.setId;
                                    if (id) {
                                        attributesResult[attribute.attribute] = await this.adapter.sendToAsync(this.adapter.config.history,
                                            'getHistory', {id, options});
                                    } else {
                                        attributesResult[attribute.attribute] = {result: [] };
                                    }
                                }
                            }

                            //var t = [
                            //    [{
                            //      "attributes": {
                            //          "attribution": "Weather forecast from met.no, delivered by the Norwegian Meteorological Institute.",
                            //          "entity_picture": "https://api.met.no/weatherapi/weathericon/1.1/?symbol=None;content_type=image/png",
                            //          "friendly_name": "yr Symbol"
                            //      },
                            //      "context": {"id": "1969195c53b54e9593e3a7c50425fd9d", "parent_id": null, "user_id": null},
                            //      "entity_id": "sensor.yr_symbol",
                            //      "last_changed": "2019-05-21T11:14:39.714000+00:00",
                            //      "last_updated": "2019-05-21T11:14:39.714000+00:00",
                            //      "state": "unknown"
                            //      }]
                            //]

                            //match attributes to states by ts:
                            const getAttributeValues = (ts, attributesResult, attributesUsed = [], attributeValues = {}) => {
                                if (entity.context.ATTRIBUTES) {
                                    for (const attribute of entity.context.ATTRIBUTES) {
                                        if (attributesUsed.indexOf(attribute.attribute) >= 0) {
                                            continue; //already found value for that attribute.
                                        }
                                        let found = false;
                                        const results = attributesResult[attribute.attribute].result;
                                        for (const result of results) {
                                            if (!result.used) {
                                                const resultTs = this._convertStateTStoISOString(result);
                                                if (Math.abs(new Date(resultTs).getTime() - new Date(ts).getTime()) < 1000) {
                                                    attributeValues[attribute.attribute] = result.val;
                                                }
                                                result.used = true;
                                                found = true;
                                                break;
                                            }
                                        }
                                        if (!found) {
                                            attributeValues[attribute.attribute] = entity.attributes[attribute.attribute]; //use current value as default if none found.
                                        }
                                    }
                                }
                                for (const key of Object.keys(entity.attributes)) {
                                    if (!entity.context.ATTRIBUTES || !entity.context.ATTRIBUTES.find(a => a.attribute === key)) {
                                        attributeValues[key] = entity.attributes[key]; //make sure to copy static attributes here.
                                    }
                                }
                                return attributeValues;
                            };

                            //console.log(JSON.stringify(stateResult.result));
                            const arr = [];
                            for (const e of stateResult.result) {
                                if (e.val !== null) {
                                    const ts = this._convertStateTStoISOString(e);
                                    const result = {
                                        entity_id: entity.entity_id,
                                        state: typeof entity.context.STATE.historyParser === 'function' ?
                                            entity.context.STATE.historyParser(id, e.val).toString() :
                                            this._iobState2EntityState(id, e.val).toString(),
                                        last_changed: ts,
                                        last_updated: ts,
                                        attributes: getAttributeValues(ts, attributesResult)
                                    };
                                    arr.push(result);
                                }
                            }
                            //add unsused attribute values:
                            if (entity.context.ATTRIBUTES) {
                                const attributesUsed = [];
                                for (const attribute of entity.context.ATTRIBUTES) {
                                    attributesUsed.push(attribute.attribute);
                                    const results = attributesResult[attribute.attribute].result;
                                    for (const result of results) {
                                        if (!result.used) {
                                            const attributeValues = {};
                                            const ts = this._convertStateTStoISOString(result);
                                            attributeValues[attribute.attribute] = result.val;
                                            result.used = true;
                                            //fill in other attributes:
                                            const data = {
                                                entity_id: entity.entity_id,
                                                //state: null,
                                                last_changed: ts,
                                                last_updated: ts,
                                                attributes: getAttributeValues(ts, attributesResult, attributesUsed, attributeValues)
                                            };
                                            arr.push(data);
                                        }
                                    }
                                }
                            }
                            //console.log(JSON.stringify(arr));

                            totalResult.push(arr);
                        } catch (e) {
                            this.log.warn('Could not get history for ' + entity.entity_id + ' - Error in request: ' + e);
                            totalResult.push([]);
                        }
                    } else {
                        this.log.warn('Cannot get history - Unknown entity: ' + id);
                        totalResult.push([]); // place default value
                    }
                }
                res.json(totalResult);

                //res.status(500).send({error: 'Unknown entities'});
            }

        });
        this._app.get('/api/camera_proxy_stream/:entity_id', (req, res) => {
            this.log.debug(`Get image for ${req.params.entity_id} token=${req.query.token || req.query.signed}`);
            this._getImage(req.params.entity_id, req.query.token || 'empty', req.query.signed, (err, data) => {
                if (data) {
                    res.setHeader('content-type', data.content_type);
                    res.send(Buffer.from(data.content, 'base64'));
                } else {
                    res.status(404).json({error: err});
                }
            });
        });

        this._app.get('/api/camera_proxy/:entity_id', (req, res) => {
            this.log.debug(`Get image for ${req.params.entity_id} acces_token=${req.query.signed}`);
            this._getImage(req.params.entity_id, 'empty', req.query.signed, (err, data) => {
                if (data) {
                    res.setHeader('content-type', data.content_type);
                    res.send(Buffer.from(data.content, 'base64'));
                } else {
                    res.status(404).json({error: err});
                }
            });
        });

        //initialize the WebSocket server instance
        this._wss = new WebSocket.Server({server: this._server});

        if (this.config.auth !== false) {
            this.adapter.getState('session', (err, state) => {
                if (state && state.val) {
                    try {
                        state = JSON.parse(state.val);
                    } catch (e) {
                        this.log.error('Cannot parse session: ' + state);
                        return;
                    }
                    this._auth_flows = state;
                }
            });
        }

        this._wss.on('connection', ws => this._initConnection(ws));
    }

    _getLayoutConfig() {
        return this._lovelaceConfig;
    }

    _setLayoutConfig(config) {
        this.adapter.getObject('configuration', (err, obj) => {
            if (JSON.stringify(obj.native) !== JSON.stringify(config)) {
                obj.native = config;
                this.adapter.setObject('configuration', obj, err => {
                    err && this.log.error('Cannot save config: ' + err);
                    this._sendUpdate('lovelace_updated');
                });
            }

        });
    }

    _getCurrentUser(ws, cb) {
        const user = 'system.user.' + (ws.__auth.username || this.config.defaultUser);

        this.adapter.getForeignObject(user, {user}, (err, obj) => {
            cb({
                id: user,
                name: utils.getObjectName(obj),
                is_owner: user === 'system.user.admin',
                is_admin: user === 'system.user.admin',
                credentials: [{auth_provider_type: 'iobroker', auth_provider_id: null}],
                mfa_modules: [{id: 'totp', name: 'Authenticator app', enabled: false}]
            });
        });
    }

    _getTranslations() {
        return {
            resources: require('./translations/de.json')
        };
    }

    _sendResponse(ws, id, result) {
        ws.send(JSON.stringify({id, type: 'result', success: true, result: result || null}));
    }

    _sendUpdate(eventType) {
        this._wss.clients.forEach(ws => {
            if (ws._subscribes && ws._subscribes[eventType]) {
                const t = {
                    type: 'event',
                    event: {
                        event_type: eventType,
                        origin: 'LOCAL',
                        time_fired: new Date().toISOString()
                    }
                };
                ws._subscribes[eventType].forEach(id => {
                    t.id = id;
                    ws.send(JSON.stringify(t));
                });
            }
        });
    }

    _processShoppingList(ws, message) {
        this.adapter.getState('control.shopping_list', (err, state) => {
            if (state && state.val) {
                try {
                    state = JSON.parse(state.val);
                } catch (e) {
                    this.log.error('Cannot parse shopping list: ' + state.val);
                    state = [];
                }
            } else {
                state = [];
            }
            if (message.type === 'shopping_list/items/add') {
                state.push({name: message.name, id: Date.now(), complete: false});
                this.adapter.setState('control.shopping_list', JSON.stringify(state), true, () => {
                    this._sendResponse(ws, message.id);
                    this._sendUpdate('shopping_list_updated');
                });
            } else if (message.type === 'shopping_list/items/clear') {
                state = state.filter(item => !item.complete);

                this.adapter.setState('control.shopping_list', JSON.stringify(state), true, () => {
                    this._sendResponse(ws, message.id);
                    this._sendUpdate('shopping_list_updated');
                });
            }  else if (message.type === 'shopping_list/items/update') {
                const item = state.find(item => item.id === message.item_id);
                if (item) {
                    if (message.name !== undefined) {
                        item.name = message.name;
                    }
                    if (message.complete !== undefined) {
                        item.complete = message.complete;
                    }
                    this.adapter.setState('control.shopping_list', JSON.stringify(state), true, () => {
                        this._sendResponse(ws, message.id);
                        this._sendUpdate('shopping_list_updated');
                    });
                } else {
                    this._sendResponse(ws, message.id, {result: false});
                }
            } else {
                this._sendResponse(ws, message.id, state);
            }
        });
    }

    _getImage(entity_id, token, access_token, cb) {
        const entity = this._entity2ID[entity_id];
        if (!entity) {
            cb('no entity found');
        } else {
            let id;
            let user = '';
            if (this.config.auth !== false && (token || access_token)) {
                if (access_token) {
                    const now = Date.now();
                    const flowId = Object.keys(this._auth_flows)
                        .find(flowId =>
                            this._auth_flows[flowId].access_token === access_token &&
                            now - this._auth_flows[flowId].ts < this._auth_flows[flowId].auth_ttl);

                    if (!flowId) {
                        return cb('Invalid token!');
                    } else {
                        user = this._auth_flows[flowId].username;
                    }
                } else
                if (token && entity.attributes.access_token !== token) {
                    this.log.warn('Invalid access token for ' + entity_id + ' - ' + token);
                    return cb('Invalid access token for ' + entity_id + ' - ' + token);
                }
            }

            if (entity.context.STATE.getId) {
                id = entity.context.STATE.getId;
            } else if (entity.context.ATTRIBUTES) {
                const attr = entity.context.ATTRIBUTES.find(attr => attr.attribute === 'url');
                if (attr) {
                    id = attr.getId;
                }
            }
            if (id) {
                this.adapter.getForeignState(id, {user: 'system.user.' + (user || this.config.defaultUser)}, (err, state) => {
                    if (state && state.val && typeof state.val === 'string') {
                        const val = state.val.split('?')[0] || '';
                        // if like /adapter/daswetter/icons/tiempo-weather/galeria1/3.png
                        if (val.startsWith('/adapter/')) {
                            let url = val;
                            url = url.replace(/^\/adapter\/([a-zA-Z0-9-_]+)\//, '/$1.admin/');
                            url = url.split('/');
                            // Skip first /
                            url.shift();
                            // Get ID
                            const id = url.shift();
                            url = url.join('/');
                            const pos = url.indexOf('?');
                            if (pos !== -1) {
                                url = url.substring(0, pos);
                            }

                            this.adapter.readFile(id, url, {user: 'system.user.' + (user || this.config.defaultUser)}, (err, buffer, mimeType) => {
                                if (buffer === null || buffer === undefined || err) {
                                    cb('Not found');
                                } else {
                                    mimeType = mimeType || (mime.getType || mime.lookup).call(mime, url) || 'text/javascript';
                                    const result = {content_type: mimeType, content: buffer.toString('base64')};
                                    cb(null, result);
                                }
                            });
                        } else {
                            request(state.val, {encoding: null}, (err, state, body) => {
                                if (body) {
                                    const result = {content_type: (mime.getType || mime.lookup).call(mime, val) || 'image/jpeg', content: body.toString('base64')};
                                    cb(null, result);
                                } else {
                                    err && this.log.warn('Cannot download image: ' + err);
                                    cb('Cannot download image: ' + err);
                                }
                            });
                        }
                    } else {
                        this.log.warn('No url value for ' + entity_id + ' in ' + id);
                        cb('Cannot download image: ' + err);
                    }
                });
            } else {
                this.log.warn('No url attribute found for ' + entity_id);
                cb('No url attribute found for ' + entity_id);
            }
        }
    }

    async _readNotifications() {
        try {
            const state = await this.adapter.getStateAsync('notifications.list');
            const val = (state && state.val) || '[]';
            try {
                this._notifications = JSON.parse(val);
            } catch (e) {
                this.log.warn('Cannot parse notifications: ' + val);
                this._notifications = [];
            }
            return this._notifications;
        } catch (e) {
            this.adapter.error('Failed to read notifications: ' + e);
        }
    }

    async _saveNotifications() {
        await this.adapter.setStateAsync('notifications.list', JSON.stringify(this._notifications), true);
        return this._notifications;
    }

    async addNotification(info) {
        if (typeof info !== 'object') {
            if (typeof info === 'string' && info.trim()[0] === '{') {
                try {
                    info = JSON.parse(info);
                } catch (e) {
                    console.warn('Cannot parse ' + info);
                }
            } else {
                info = {title: info.toString(), message: ''};
            }
        }
        info.notification_id = info.notification_id || Date.now();
        info.created_at = info.created_at || Date.now();

        this._notifications.push(info);
        return this._saveNotifications();
    }

    async _clearNotification(id) {
        if (id) {
            for (let i = 0; i < this._notifications.length; i++) {
                if (this._notifications[i].notification_id === id) {
                    this._notifications.splice(i, 1);
                    break;
                }
            }
        } else {
            this._notifications = [];
        }
        return this._saveNotifications();
    }

    _initConnection(ws) {
        ws._subscribes = {};
        ws.__templates = [];
        let testTimer = null;

        ws.on('error', e => {
            console.error('Error: ' + e);
            testTimer && clearInterval(testTimer);
            testTimer = null;
        });

        //connection is up, let's add a simple simple event
        ws.on('message', message => {
            try {
                message = JSON.parse(message);
            } catch (e) {
                console.error('Cannot parse message: ' + message);
                return;
            }

            // this.log.debug('MESSAGE: ' + message.type);
            const now = Date.now();

            if (message.type === 'auth') {
                this.log.debug('HASS Auth: ' + message.access_token);
                // simulate token exchange
                if (this.config.auth === false && message.access_token === NO_TOKEN) {
                    ws.__auth = {};
                    return ws.send(JSON.stringify({type: 'auth_ok', ha_version: VERSION}));
                }

                const flowId = Object.keys(this._auth_flows).find(flowId => this._auth_flows[flowId].access_token === message.access_token && now - this._auth_flows[flowId].ts < this._auth_flows[flowId].auth_ttl);
                if (!flowId) {
                    this.log.warn('HASS auth_invalid: ' + message.access_token);
                    ws.send(JSON.stringify({type: 'auth_invalid', result: false, ha_version: VERSION}));
                    ws.close();
                } else {
                    ws.__auth = this._auth_flows[flowId];
                    ws.__auth.flowId = flowId;
                    //ws.send(JSON.stringify({type: 'auth_required', ha_version: VERSION}));
                    ws.send(JSON.stringify({type: 'auth_ok', ha_version: VERSION}));
                }
                return;
            }

            // check authentication
            if (this.config.auth !== false) {
                if (!ws.__auth) {
                    this.log.warn('Auth token not found! Close connection.');
                    ws.send(JSON.stringify({type: 'auth_invalid', result: false, ha_version: VERSION}));
                    ws.close();
                    return;
                } else if (now - ws.__auth.ts > ws.__auth.auth_ttl) {
                    this.log.warn('Auth token is expired! Close connection.');
                    ws.send(JSON.stringify({type: 'auth_invalid', result: false, ha_version: VERSION}));
                    ws.close();
                    return;
                }
            }

            if (message.type === 'subscribe_events') {
                this.log.debug('HASS Subscribe: ' + message.event_type);
                if (ws._subscribes) {
                    ws._subscribes[message.event_type] = ws._subscribes[message.event_type] || [];
                    ws._subscribes[message.event_type].push(message.id);
                }
                this._sendResponse(ws, message.id);
            } else
            if (message.type === 'unsubscribe_events') {
                this.log.debug('HASS UnSubscribe: ' + JSON.stringify(message));
                if (message.event_type && ws._subscribes && ws._subscribes[message.event_type]) {
                    const pos = ws._subscribes[message.event_type].indexOf(message.subscription);
                    if (pos !== -1) {
                        ws._subscribes[message.event_type].splice(pos, 1);
                    }

                    if (!ws._subscribes[message.event_type].length) {
                        delete ws._subscribes[message.event_type];
                    }
                } else if (!message.event_type) {
                    ws._subscribes && Object.keys(ws._subscribes).forEach(event_type => {
                        const pos = ws._subscribes[event_type].indexOf(message.subscription);
                        if (pos !== -1) {
                            ws._subscribes[event_type].splice(pos, 1);
                        }

                        if (!ws._subscribes[event_type].length) {
                            delete ws._subscribes[event_type];
                        }
                    });

                    if (ws.__templates) {
                        for (let i = ws.__templates.length - 1; i >= 0; i--) {
                            if (ws.__templates[i].id === message.subscription) {
                                ws.__templates.splice(i, 1);
                            }
                        }
                    }
                }

                this._sendResponse(ws, message.id);
            } else
            if (message.type === 'get_states') {
                this._sendResponse(ws, message.id, this.getHassStates());
            } else
            if (message.type === 'get_config') {
                this._sendResponse(ws, message.id, this._getConfig());
            } else
            if (message.type === 'get_services') {
                this._sendResponse(ws, message.id, SERVICES);
            } else
            if (message.type === 'get_panels') {
                this._sendResponse(ws, message.id, PANELS);
            } else
            if (message.type === 'auth/sign_path') {
                this.log.debug('Sign: ' + message.path);
                try {
                    const [path, query] = message.path.split('?');
                    const search = {};
                    if (query) {
                        query.split('&').forEach(item => {
                            const parts = item.split('=');
                            search[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1] || '');
                        });
                    }


                    search.signed = this.config.auth !== false ? ws.__auth.access_token : NO_TOKEN + '_' + Date.now();
                    const url = Object.keys(search).map(attr => `${encodeURIComponent(attr)}=${encodeURIComponent(search[attr])}`).join('&');
                    this._sendResponse(ws, message.id, {path: path + '?' + url});
                } catch (e) {
                    this.log.error(e);
                }
            } else
            if (message.type === 'frontend/get_themes') {
                this._sendResponse(ws, message.id, this._getThemes());
            } else
            if (message.type === 'auth/current_user') {
                this._getCurrentUser(ws, data =>
                    this._sendResponse(ws, message.id, data));
            } else
            if (message.type === 'frontend/get_user_data') {
                this.log.debug('Get USER Data: ' + message.key);
                this._sendResponse(ws, message.id, {value:{language: this.systemConfig.language}});
            } else
            if (message.type === 'frontend/get_translations') {
                this.log.debug('Get translations: ' + message.language);
                this._sendResponse(ws, message.id, this._getTranslations());
            } else
            if (message.type === 'lovelace/config') {
                this.log.debug('get config: ' + message.force);
                this._sendResponse(ws, message.id, this._getLayoutConfig());
            } else
            if (message.type === 'lovelace/config/save') {
                this._setLayoutConfig(message.config);
                this._sendResponse(ws, message.id);
            } else
            if (message.type === 'lovelace/resources') {
                this._sendResponse(ws, message.id, this._ressourceConfig);
            } else
            if (message.type === 'persistent_notification/get') {
                this._sendResponse(ws, message.id, this._notifications);
            } else
            if (message.type === 'config/entity_registry/get') {
                // todo What is that?
                this.log.debug('Get entity_registry: ' + message.entity_id);
                this._sendResponse(ws, message.id, null);
            } else
            if (message.type.startsWith('shopping_list/items')) {
                this._processShoppingList(ws, message);
            } else
            if (message.type === 'camera_thumbnail') {
                this.log.warn('camera_thumbnail ' + message.entity_id + ' deprecated!!!');
                this._getImage(message.entity_id, null, null, (err, data) => {
                    if (err) {
                        this._sendResponse(ws, message.id);
                    } else {
                        this._sendResponse(ws, message.id, data);
                    }
                });
            } else
            if (message.type === 'call_service') {
                //{"type":"call_service","domain":"zone","service":"turn_off","service_data":{"entity_id":"zone.home"},"id":18}
                this._processCall(ws, message);
            }  else
            if (message.type === 'conversation/agent/info') {
                // BF: I have no idea what is that
                this._sendResponse(ws, message.id, {onboarding: null, attribution: null});
            } else
            if (message.type === 'conversation/process') {
                ws.__conversations = ws.__conversations || {};
                // request is like {"type":"conversation/process","text":"aaa","conversation_id":"edd087a3779a6b2a5e4d","id":23}
                const conversation_id = message.conversation_id;

                ws.__conversations[conversation_id] = {
                    id: message.id,
                    timer: setTimeout((_conversation_id, messageId) => {
                        ws && ws.__conversations && ws.__conversations[_conversation_id] && delete ws.__conversations[_conversation_id];
                        ws && this._sendResponse(ws, messageId, {
                            speech: {
                                plain: {
                                    speech: this.words.no_one_hears_you[this.lang] || this.words.no_one_hears_you.en,
                                    extra_data: null
                                }
                            }
                        });
                    }, 1000, conversation_id, message.id),
                };

                this.adapter.setState('conversation', message.text);

                // answer must be
                // {"id": 23, "type": "result", "success": true, "result": {"speech": {"plain": {"speech": "Sorry, I didn't understand that", "extra_data": null}}, "card": {}}}
            } else
            if (message.type === 'render_template') {
                //{"type":"render_template","template":"The **Markdown** ","variables":{"config":{"type":"markdown","content":"The **Markdown** card allows you to write any text. You can style it **bold**, *italicized*, ~strikethrough~ etc. You can do images, links, and more.\n\nFor more information see the [Markdown Cheatsheet](https://commonmark.org/help).","title":"Markdown"}},"id":11}
                const template = message.template;
                this._sendResponse(ws, message.id);

                const obj = {template, ids: [], id: message.id};
                ws.__templates && ws.__templates.push(obj);

                const vars = bindings.extractBinding(template);
                const promises = [];

                // subscribe all variables and read their values
                vars && vars.forEach(v =>
                    promises.push(new Promise(resolve => {
                        const id = v.systemOid;

                        obj.ids.push(id);

                        if (this._subscribed.indexOf(id) === -1) {
                            this._subscribed.push(id);
                            this.adapter.subscribeForeignStates(id);
                            this.log.debug('IoB Subscribe on ' + id);
                        }

                        this.adapter.getForeignState(id, (err, state) => {
                            if (state) {
                                this.templateStates[id] = state;
                            }
                            resolve();
                        });
                    })));

                Promise.all(promises)
                    .then(() => {
                        const t = {
                            id: message.id,
                            type: 'event',
                            event: {
                                result: bindings.formatBinding(template, this.templateStates)
                            }
                        };
                        ws.send(JSON.stringify(t));
                    });
            } else {
                console.warn('Unknown request: ' + JSON.stringify(message));
            }
        });

        /*testTimer = setInterval(() => {
            // {id: 2, type: "event", "event": {"event_type": "state_changed", "data": {"entity_id": "sun.sun", "old_state": {"entity_id": "sun.sun", "state": "above_horizon", "attributes": {"next_dawn": "2019-05-17T02:57:08+00:00", "next_dusk": "2019-05-16T19:44:32+00:00", "next_midnight": "2019-05-16T23:21:40+00:00", "next_noon": "2019-05-17T11:21:38+00:00", "next_rising": "2019-05-17T03:36:58+00:00", "next_setting": "2019-05-16T19:04:54+00:00", "elevation": 54.81, "azimuth": 216.35, "friendly_name": "Sun"}, "last_changed": "2019-05-16T09:09:53.424242+00:00", "last_updated": "2019-05-16T12:46:30.001390+00:00", "context": {id: "05356b1a7df54b2f939d3c7f8a3e05b4", "parent_id": null, "user_id": null}}, "new_state": {"entity_id": "sun.sun", "state": "above_horizon", "attributes": {"next_dawn": "2019-05-17T02:57:08+00:00", "next_dusk": "2019-05-16T19:44:32+00:00", "next_midnight": "2019-05-16T23:21:40+00:00", "next_noon": "2019-05-17T11:21:38+00:00", "next_rising": "2019-05-17T03:36:58+00:00", "next_setting": "2019-05-16T19:04:54+00:00", "elevation": 54.71, "azimuth": 216.72, "friendly_name": "Sun"}, "last_changed": "2019-05-16T09:09:53.424242+00:00", "last_updated": "2019-05-16T12:47:30.000414+00:00", "context": {id: "e738dc26af1d48b4964c6d9805179595", "parent_id": null, "user_id": null}}}, "origin": "LOCAL", "time_fired": "2019-05-16T12:47:30.000414+00:00", "context": {id: "e738dc26af1d48b4964c6d9805179595", "parent_id": null, "user_id": null}}}
            if (subscribes.state_changed) {
                subscribes.state_changed.forEach(id => {
                    const t = {
                        id,
                        type: "event",
                        "event": {
                            "event_type": "state_changed",
                            "data": {
                                "entity_id": "sun.sun",
                                "old_state": {
                                    "entity_id": "sun.sun",
                                    "state": "above_horizon",
                                    "attributes": {
                                        "next_dawn": "2019-05-17T02:57:08+00:00",
                                        "next_dusk": "2019-05-16T19:44:32+00:00",
                                        "next_midnight": "2019-05-16T23:21:40+00:00",
                                        "next_noon": "2019-05-17T11:21:38+00:00",
                                        "next_rising": "2019-05-17T03:36:58+00:00",
                                        "next_setting": "2019-05-16T19:04:54+00:00",
                                        "elevation": 54.81,
                                        "azimuth": 216.35,
                                        "friendly_name": "Sun"
                                    },
                                    "last_changed": "2019-05-16T09:09:53.424242+00:00",
                                    "last_updated": "2019-05-16T12:46:30.001390+00:00",
                                    "context": {
                                        id: "05356b1a7df54b2f939d3c7f8a3e05b4",
                                        "parent_id": null,
                                        "user_id": null
                                    }
                                },
                                "new_state": {
                                    "entity_id": "sun.sun",
                                    "state": "above_horizon",
                                    "attributes": {
                                        "next_dawn": "2019-05-17T02:57:08+00:00",
                                        "next_dusk": "2019-05-16T19:44:32+00:00",
                                        "next_midnight": "2019-05-16T23:21:40+00:00",
                                        "next_noon": "2019-05-17T11:21:38+00:00",
                                        "next_rising": "2019-05-17T03:36:58+00:00",
                                        "next_setting": "2019-05-16T19:04:54+00:00",
                                        "elevation": 54.71,
                                        "azimuth": 216.72,
                                        "friendly_name": "Sun"
                                    },
                                    "last_changed": "2019-05-16T09:09:53.424242+00:00",
                                    "last_updated": "2019-05-16T12:47:30.000414+00:00",
                                    "context": {
                                        id: "e738dc26af1d48b4964c6d9805179595",
                                        "parent_id": null,
                                        "user_id": null
                                    }
                                }
                            },
                            "origin": "LOCAL",
                            "time_fired": "2019-05-16T12:47:30.000414+00:00",
                            "context": {id: "e738dc26af1d48b4964c6d9805179595", "parent_id": null, "user_id": null}
                        }
                    };
                    ws.send(JSON.stringify(t));
                });
            }
        }, 10000);*/
        ws.on('close', () => {
            this.log.debug('Connection closed');
            ws._subscribes = null;
            ws.__templates = null;
            testTimer && clearInterval(testTimer);
            testTimer = null;
        });
    }

    _saveAuth(cb) {
        if (this.config.auth !== false) {
            this.adapter.setState('session', JSON.stringify(this._auth_flows), cb);
        }
    }

    onObjectChange(id, obj) {
        if (id === this.adapter.namespace + '.configuration') {
            this._lovelaceConfig = obj.native;
            this._lovelaceConfig.hideToolbar = this.config.hideHeader;
            this._manageSubscribesFromConfig();
        } else if (id === 'system.config') {
            if (obj && obj.common) {
                this.lang = obj.common.language || this.lang || 'en';
                this.systemConfig = obj.common;
                this._updateConstantEntities();
            }
        } else {
            // start the detection anew in 5 seconds
            let needRefresh = true;
            if (this.adapter.config.aliasOnly) {
                if (!id.startsWith('alias.0.')) {
                    // ok, object not in alias. Let's see if it is a manual entity:
                    if (obj && obj.common && obj.common.custom && obj.common.custom[this.adapter.namespace]) {
                        // ok, object has this adapter custom -> need to refresh entities.
                        this.log.debug('Manual entity ' + id + ' did change -> require entity refresh.');
                    } else {
                        if (Object.keys(this._ID2entity).includes(id)) {
                            // ok, id has something to do with entity -> refresh entities (could even be deleted)
                            this.log.debug('Manual entity ' + id + ' was removed -> require entity refresh.');
                        } else {
                            this.log.debug('Object ' + id + ' did change, but has no connection to this instance -> ignore.');
                            needRefresh = false;
                        }
                    }
                }
            }

            if (needRefresh) {
                this._updateTimer && clearTimeout(this._updateTimer);
                this._updateTimer = setTimeout(async () => {
                    this._updateTimer = null;
                    //clear entities before creating new ones (and ignoring them):
                    this._entities       = [];
                    this._entity2ID      = {};
                    this._ID2entity      = {};
                    await this._readAllEntities();
                    this.onStateChange(id, null, true);
                }, 5000);
            }
        }
    }

    destroy(cb) {
        this.adapter.unsubscribeStates('control.*');
        this.adapter.unsubscribeStates('notifications.*');
        this._saveAuth(() => {
            this.adapter.unsubscribeForeignObjects('*');
            this.adapter.unsubscribeObjects('configuration', cb);
        });
        this._clearInterval && clearInterval(this._clearInterval);
        this._clearInterval = null;
    }
}

module.exports = WebServer;
