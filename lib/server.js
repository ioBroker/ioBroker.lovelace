const fs = require('fs');
const crypto = require('crypto');
const WebSocket = require('ws');
const bodyParser = require('body-parser');
const PANELS = require('./panels');
const multer = require('multer');
const mime = require('mime');
const yaml = require('js-yaml');
const axios = require('axios');
const jstz = require('jstimezonedetect');
const handleAutoEntitiesCard = require('./modules/autoEntities').handleAutoEntitiesCard;
const utils = require('./entities/utils');
const BrowserModModule = require('./modules/browser_mod');
const processBlind = require('./converters/cover').processBlind;
const converterSwitch = require('./converters/switch');
const converterLight = require('./converters/light');
const converterBinarySensors = require('./converters/binary_sensor');
const converterSensors = require('./converters/sensor');
const processMediaPlayer = require('./converters/media_player').processMediaPlayer;
const converterClimate = require('./converters/climate');
const converterWeather = require('./converters/weather');
const processImage = require('./converters/camera').processImage;
const processLock = require('./converters/lock').processLock;
const converterGeoLocation = require('./converters/geo_location');
const converterDatetime = require('./converters/input_datetime');
const converterAlarmCP = require('./converters/alarm_control_panel');
const converterInputSelect = require('./converters/input_select');
const convertFan = require('./converters/fan');
const entityData = require('./dataSingleton');
const bindings = require('./bindings');
const getFriendlyName = require('./entities/friendly_name').getFriendlyName;
const iobState2EntityState = require('./converters/genericConverter').iobState2EntityState;
const NUMERIC_DEVICE_CLASSES = require('./converters/genericConverter').numericDeviceClasses;
const HistoryModule = require('./modules/history');
const ConversationModule = require('./modules/conversation');
const LogbookModule = require('./modules/logbook');
const PersistentNotifications = require('./modules/persistentNotifications');
const TodoModule = require('./modules/todo');
const PersonModule = require('./modules/person');
const StatisticsRecorderModule = require('./modules/statisticsRecorder');
const EntityRegistry = require('./modules/entityRegistry');
const DashboardModule = require('./modules/dashboard');
const EXIT_CODES = require('@iobroker/adapter-core').EXIT_CODES;

const TIMEOUT_PASSWORD_ENTER = 180000; // 3 min
const TIMEOUT_AUTH_CODE = 10000; // 10sec

const ChannelDetector = require('@iobroker/type-detector').default;
const { Types } = require('@iobroker/type-detector');
const ignoreIds = [/^system\./, /^script\./];
const express = require('express');

const ROOT_DIR = '../hass_frontend';

//frontend expects only YYYY.MM.DD -> omit the rest.
const VERSION = fs
    .readFileSync(`${getRootPath()}version.txt`, 'utf8')
    .replace(/(\d{4})(\d{2})(\d{2})\.(\d).*/s, '$1.$2.$3');
const NO_TOKEN = 'no_token';

function getRootPath() {
    if (ROOT_DIR.match(/^\w:/) || ROOT_DIR.startsWith('/')) {
        return `${ROOT_DIR}/`;
    }
    return `${__dirname}/${ROOT_DIR}/`;
}

const generateRandomToken = function (callback) {
    crypto.randomBytes(256, (ex, buffer) => {
        crypto.randomBytes(32, (ex, secret) => {
            if (ex) {
                return callback('server_error');
            }

            const token = crypto.createHmac('sha256', secret).update(buffer).digest('hex');

            callback(false, token);
        });
    });
};

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

const staticOptions = {
    maxAge: 2678400 * 1000, // 31 days
};

/**
 * WebServer class, handles incomming requests and manages websocket connections.
 */
class WebServer {
    /**
     * Constructor of the WebServer class.
     *
     * @param options object with options from the adapter.
     */
    constructor(options) {
        this._lovelaceConfig = null;
        this._ressourceConfig = []; //new place to store custom cards (modules) and stuff.
        this.adapter = options.adapter;
        this.config = this.adapter.config;
        this.log = this.adapter.log;
        this.lang = this.config.language || 'en';
        this.detector = new ChannelDetector();
        this.config.ttl = parseInt(this.config.ttl, 10) || 3600;
        this.words = options.words || {};

        //setup entityData:
        entityData.adapter = this.adapter;
        entityData.log = this.adapter.log;
        entityData.words = this.words;
        entityData.server = this;

        //files that might be requested from frontend and are delivered using readFile. No authority check is applied here!
        this._requestableFiles = [];

        this._subscribed = [];
        this._server = options.server;
        this._app = options.app;
        this._auth_flows = {};
        this.templateStates = {};
        this._themes = {}; //themes storage
        this._currentTheme = this.config.defaultTheme || 'default';
        this._currentThemeDark = this.config.defaultThemeDark || 'default';
        this._darkMode = false;

        //object data for updates:
        this._objectData = {
            objects: {}, //id -> object storage
            ids: [], //array of object ids.
            rooms: [],
            functions: [],
            roomNames: {}, //id -> name storage
            funcNames: {},
            updatedObjects: [], //id + object pairs on updates to handle burst updates after burst.
            usedKeys: [], //temporary storage for used keys (type-detector)
        };

        //initialize modules.
        this._modules = {
            browserMod: new BrowserModModule({
                adapter: this.adapter,
                objects: this._objectData.objects,
            }),
            conversation: new ConversationModule({
                adapter: this.adapter,
                sendResponse: this._sendResponse,
                lang: this.lang,
                words: this.words,
            }),
            logbook: new LogbookModule({
                adapter: this.adapter,
                getUsedEntityIDs: () => {
                    const entities = [];
                    this._flatJSON(this._lovelaceConfig ? this._lovelaceConfig.views : {}, entities);
                    return entities;
                },
                webSocketServer: this._wss,
            }),
            notifications: new PersistentNotifications({
                adapter: this.adapter,
                server: this,
            }),
            todo: new TodoModule({
                adapter: this.adapter,
                entityData: entityData,
                server: this, //for legacy shopping list.. is that still used at all?
                getWebsocketServer: () => this._wss,
            }),
            person: new PersonModule({
                adapter: this.adapter,
            }),
            entityRegistry: new EntityRegistry({
                adapter: this.adapter,
                entityData: entityData,
                sendResponse: this._sendResponse,
                sendUpdate: this._sendUpdate.bind(this),
            }),
            dashboard: new DashboardModule({
                adapter: this.adapter,
                sendResponse: this._sendResponse,
                sendUpdate: this._sendUpdate.bind(this),
            }),
        };
        this._modules.history = new HistoryModule({
            adapter: this.adapter,
            entityData: entityData,
            personModule: this._modules.person,
        });
        this._modules.statisticsRecorder = new StatisticsRecorderModule({
            adapter: this.adapter,
            server: this,
            log: this.log,
            personModule: this._modules.person,
            dataSingleton: entityData,
        });

        this.converter = {
            [Types.socket]: converterSwitch.processSocket,
            [Types.light]: converterLight.processLight,
            [Types.dimmer]: converterLight.processLightAdvanced,
            [Types.ct]: converterLight.processLightAdvanced,
            [Types.hue]: converterLight.processLightAdvanced,
            [Types.rgb]: converterLight.processLightAdvanced,
            [Types.rgbSingle]: converterLight.processLightAdvanced,
            [Types.motion]: converterBinarySensors.processMotion,
            [Types.window]: converterBinarySensors.processWindow,
            [Types.windowTilt]: converterSensors.processWindowTilt,
            [Types.door]: converterBinarySensors.processDoor,
            [Types.button]: converterSwitch.processSocket,
            [Types.temperature]: converterSensors.processTemperature,
            [Types.humidity]: converterSensors.processHumidity,
            [Types.lock]: processLock,
            [Types.airCondition]: converterClimate.processThermostatOrAirConditioning,
            [Types.thermostat]: converterClimate.processThermostatOrAirConditioning,
            [Types.blind]: processBlind,
            [Types.blindButtons]: processBlind,
            [Types.weatherForecast]: converterWeather.processWeather,
            [Types.accuWeatherForecast]: converterWeather.processAccuWeather,
            [Types.location]: converterGeoLocation.processLocation,
            [Types.location_one]: converterGeoLocation.processLocation,
            [Types.media]: processMediaPlayer,
            [Types.image]: processImage,
            [Types.fireAlarm]: converterBinarySensors.processFireAlarm,
        };

        if (this.adapter.config.updateTimeout !== undefined) {
            this.adapter.config.updateTimeout = Math.max(100, Math.min(this.adapter.config.updateTimeout, 30000));
        }

        const concurrentPromises = [
            this._modules.todo.init(),
            this._modules.person.init(),
            this._modules.entityRegistry.init(),
            this._modules.dashboard.init(),
            this.adapter
                .getForeignObjectAsync('system.config')
                .then(config => {
                    this.lang = this.config.language || config.common.language;
                    entityData.lang = this.lang;
                    this.systemConfig = config.common;
                    this.systemConfig.ts = config.ts;
                    this._updateConstantEntities();

                    return this.adapter.getObjectAsync('configuration');
                })
                .then(config => {
                    if (config && config.native && config.native.title) {
                        this._lovelaceConfig = config.native;
                    } else {
                        this._lovelaceConfig = require('./defaultConfig');
                    }
                })
                .then(() => this._modules.browserMod.init(this._lovelaceConfig)),
            this._readAllEntities(),
            this._listFiles(),
            this._initThemes(),
        ];

        Promise.all(concurrentPromises)
            .then(() => {
                this.adapter.subscribeObjects('configuration');
                this.adapter.subscribeStates('control.*');
                this.adapter.subscribeStates('notifications.*');
                this.adapter.subscribeStates('instances.*');
                this.adapter.subscribeStates('conversation');
                this._init();
                for (const module of Object.values(this._modules)) {
                    if (typeof module.augmentServices === 'function') {
                        module.augmentServices(entityData.services);
                    }
                }

                // check every minute
                if (this.config.auth !== false) {
                    this._clearInterval = setInterval(() => this.clearAuth(), 60000);
                }
                this.adapter.setState('info.readyForClients', true, true);
                this.log.debug('Initialization done.');
            })
            .catch(err => {
                this.log.error(`Initialization error: ${err}`);
                if (typeof this.adapter.terminate === 'function') {
                    this.adapter.terminate(EXIT_CODES.INVALID_ADAPTER_CONFIG);
                } else {
                    process.exit(EXIT_CODES.INVALID_ADAPTER_CONFIG);
                }
            });
    }

    /**
     * Generate all entities from object database using type-detector and custom settings.
     *
     * @returns {Promise<void>} resolves, when done.
     */
    async _readAllEntities() {
        const smartDevices = await this._updateDevices();
        for (const entity of smartDevices) {
            //fill entity into
            utils.fillEntityIntoCaches(entity);
        }
        await this._getManualEntities(); //creates manual entities.
        //now all entities are created. Check for icon urls:
        for (const entity of entityData.entities) {
            if (entity.attributes.entity_picture && !entity.attributes.entity_picture.match(/^data:image\//)) {
                const url = entity.attributes.entity_picture.replace(/^\./, '');
                if (!entityData.entityIconUrls.includes(url)) {
                    entityData.entityIconUrls.push(url);
                }
            }
        }
        await this._getAllStates();
        await this._manageSubscribesFromConfig();
        this.log.debug('entitiesUpdated for startup.');
        await this.adapter.setStateAsync('info.entitiesUpdated', true, true);
    }

    /**
     * Remove auth sessions that expired.
     */
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
                    this.log.debug(`Deleted old flowId (no password) ${flowId}`);
                    delete this._auth_flows[flowId];
                    changed = true;
                }
            }
        });
        changed && this._saveAuth();
    }

    /**
     * Generates entities from custom settings (TODO: name is misguiding!!)
     *
     * @returns {Promise<void>} resolves, when done.
     */
    async _getManualEntities() {
        try {
            const doc = await this.adapter.getObjectViewAsync('system', 'custom', {});
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
            ids.push(`${this.adapter.namespace}.control.alarm`);

            const created = [];
            for (const id of ids) {
                const entities = await this._processManualEntity(id);
                for (const entity of entities) {
                    created.push(entity);
                    utils.fillEntityIntoCaches(entity);
                }
            }
            this._modules.entityRegistry.handleUpdatedEntities(created, false);
        } catch (e) {
            this.adapter.log.error(`Could not get object view for getAllEntities: ${e.toString()} - ${e.stack}`);
        }
    }

    // ------------------------------- START OF CONVERTERS ---------------------------------------- //

    // Process manually created entity
    /**
     * Create manual entities from custom-part. Process one object here.
     *
     * @param {string} id of ioBroker object
     * @returns {Promise<{context: {id: string, type: string}, attributes: {friendly_name: string}, entity_id: string}[]|entity[]|*[]>} manual entity
     */
    async _processManualEntity(id) {
        try {
            const obj = await this.adapter.getForeignObjectAsync(id);
            if (!this._objectData.objects[id]) {
                this._objectData.objects[id] = obj;
            }
            if (id === `${this.adapter.namespace}.control.alarm`) {
                obj.common.custom = obj.common.custom || {};
                obj.common.custom[this.adapter.namespace] = obj.common.custom[this.adapter.namespace] || {};
                obj.common.custom[this.adapter.namespace].name =
                    obj.common.custom[this.adapter.namespace].name || 'defaultAlarm';
                obj.common.custom[this.adapter.namespace].entity = 'alarm_control_panel';
                obj.common.custom[this.adapter.namespace].states = {
                    state: id,
                    arm_state: `${this.adapter.namespace}.control.alarm_arm_state`,
                };
            }
            const custom = obj.common.custom[this.adapter.namespace] || {};
            const entityType = custom.entity || utils.autoDetermineEntityType(obj);
            const forcedEntityId = this._modules.entityRegistry.getEntityId(id);
            const entity_id = forcedEntityId || utils.createEntityNameFromCuston(obj, this.adapter.namespace);

            const entity = utils.processCommon(null, null, null, obj, entityType, entity_id);

            if (
                custom.attr_assumed_state &&
                ['switch', 'light', 'cover', 'climate', 'fan', 'humidifier', 'group', 'water_heater'].includes(
                    entityType,
                )
            ) {
                entity.attributes.assumed_state = true;
            }

            entity.context.STATE = { getId: id, setId: id };
            if (obj && obj.common && obj.common.states && ['string', 'number'].includes(obj.common.type)) {
                entity.context.STATE.map2lovelace = obj.common.states;
                if (!(obj.common.states instanceof Array)) {
                    entity.context.STATE.map2iob = {};
                    Object.keys(obj.common.states).forEach(
                        k => (entity.context.STATE.map2iob[obj.common.states[k]] = k),
                    );
                }
            }

            utils.addID2entity(id, entity);
            if (custom.states && custom.states.stateRead) {
                entity.context.STATE.getId = custom.states.stateRead;
                utils.addID2entity(custom.states.stateRead, entity);
            }
            entity.isManual = true;
            if (custom.states) {
                if (custom.states.state && custom.states.state !== id) {
                    this.log.error(
                        `Please define custom settings on main object ${custom.states.state} and not on ${id}. Entity skipped`,
                    );
                    return [];
                }
                custom.states.state = id;

                //get objects of all necessary additional ids here:
                for (const stateId of Object.values(custom.states)) {
                    if (!this._objectData.objects[stateId]) {
                        try {
                            this._objectData.objects[stateId] = await this.adapter.getForeignObjectAsync(stateId);
                        } catch (e) {
                            this.adapter.log.warn(
                                `Could not get object ${stateId} for manual entity ${entity_id} please check config in ${id}. Error: ${e}`,
                            );
                        }
                    }
                }
                utils.fillEntityFromStates(custom.states, entity);
            }
            for (const key of Object.keys(custom)) {
                if (key.startsWith('attr_')) {
                    const attributeName = key.substring('attr_'.length);
                    entity.attributes[attributeName] = custom[key];
                }
            }

            this.log.debug(`Create manual ${entityType} device: ${entity.entity_id} - ${id}`);
            if (entityType === 'light') {
                return converterLight.processManualEntity(id, obj, entity, this._objectData.objects, custom);
            } else if (entityType === 'input_datetime') {
                return converterDatetime.processManualEntity(id, obj, entity, this._objectData.objects, custom);
            } else if (entityType === 'binary_sensor') {
                return converterBinarySensors.processManualEntity(id, obj, entity, this._objectData.objects, custom);
            } else if (entityType === 'sensor') {
                return converterSensors.processManualEntity(id, obj, entity, this._objectData.objects, custom);
            } else if (entityType === 'climate') {
                return converterClimate.processManualEntity(id, obj, entity, this._objectData.objects, custom);
            } else if (entityType === 'geo_location') {
                return converterGeoLocation.processManualEntity(id, obj, entity, this._objectData.objects, custom);
            } else if (entityType === 'camera') {
                entity.context.STATE = { getValue: 'on' };
                entity.context.ATTRIBUTES = [{ getId: id, attribute: 'url' }];
                entity.attributes.code_format = 'number';
                entity.attributes.access_token = crypto
                    .createHmac(
                        'sha256',
                        (crypto.webcrypto.getRandomValues(new Uint32Array(1))[0] * 1000000000).toString(),
                    )
                    .update(Date.now().toString())
                    .digest('hex');
                entity.attributes.model_name = 'Simulated URL';
                entity.attributes.brand = 'ioBroker';
                entity.attributes.motion_detection = false;
            } else if (entityType === 'alarm_control_panel') {
                return converterAlarmCP.processManualEntity(id, obj, entity, this._objectData.objects, custom);
            } else if (entityType === 'input_number') {
                entity.attributes.min = obj.common.min !== undefined ? obj.common.min : 0;
                entity.attributes.max = obj.common.max !== undefined ? obj.common.max : 100;
                entity.attributes.step = obj.common.step || 1;
                entity.attributes.mode =
                    entity.attributes.mode || obj.common.custom[this.adapter.namespace].mode || 'slider'; // or box, will become input box.
                const state = await this.adapter.getForeignStateAsync(id);
                entity.attributes.initial = state ? state.val || 0 : 0;
            } else if (entityType === 'input_boolean') {
                const state = await this.adapter.getForeignStateAsync(id);
                entity.attributes.initial = iobState2EntityState(entity, state ? state.val : undefined, 'initial');
            } else if (entityType === 'input_select') {
                return converterInputSelect.processManualEntity(id, obj, entity, this._objectData.objects, custom);
            } else if (entityType === 'fan') {
                return convertFan.processManualEntity(id, obj, entity, this._objectData.objects, custom);
            } else if (entityType === 'todo') {
                return this._modules.todo.processManualEntity(id, obj, entity, this._objectData.objects, custom);
            } else if (entityType === 'switch') {
                return converterSwitch.processManualEntity(id, obj, entity, this._objectData.objects, custom);
            } else if (entityType === 'timer') {
                // - timer => STATE idle/paused/active, attributes: [remaining]
                entity.context.STATE = { getId: null, setId: null }; // will be simulated
                entity.context.lastValue = null;
                entity.attributes.remaining = 0;
                entity.context.ATTRIBUTES = [
                    {
                        attribute: 'remaining',
                        getId: id,
                        setId: id,
                        getParser: function (entity, attr, state) {
                            state = state || { val: null };
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
                                state.val = parseInt(state.val, 10);
                                const hours = Math.floor(state.val / 3600);
                                const minutes = Math.floor((state.val % 3600) / 60);
                                const seconds = state.val % 60;
                                entity.attributes.remaining = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                            }
                        },
                    },
                ];
            }

            utils.addID2entity(id, entity);

            return [entity];
        } catch (e) {
            this.adapter.log.error(`Could not process manual entity ${id}: ${e.toString()} - ${e.stack}`);
        }
    }

    /**
     * Process a single service call from the frontend.
     *
     * @param ws websocket connection to the frontend
     * @param {Record<string,any>} data data of the service call
     * @param {string} entity_id entity id connected to the call. Required to be a single id in this function.
     * @returns {Promise<void>} resolves when done.
     */
    async _processSingleCall(ws, data, entity_id) {
        const user = this._modules.person.getUserIDFromName(ws.__auth?.username);

        const entity = entityData.entityId2Entity[entity_id];
        const id = entity.context.STATE.setId;

        if (entity.context.COMMANDS) {
            const command = entity.context.COMMANDS.find(c => c.service === data.service);
            if (command && command.parseCommand) {
                return command
                    .parseCommand(entity, command, data, user)
                    .then(result => this._sendResponse(ws, data.id, result))
                    .catch(e => this._sendResponse(ws, data.id, { result: false, error: e.message || e }));
            }
        }

        if (data.service === 'toggle') {
            this.log.debug(`toggle ${id}`);

            this.adapter.getForeignState(id, { user }, (err, state) =>
                this.adapter.setForeignState(id, state ? !state.val : true, false, { user }, () =>
                    this._sendResponse(ws, data.id),
                ),
            );
        } else if (data.service === 'volume_set') {
            this.log.debug(`volume_set ${id}`);

            this.adapter.setForeignState(id, Number(data.service_data.value), false, { user }, () =>
                this._sendResponse(ws, data.id),
            );
        } else if (
            data.service === 'trigger' ||
            data.service === 'turn_on' ||
            data.service === 'unlock' ||
            data.service === 'press'
        ) {
            this.log.debug(`${data.service} ${id}`);

            this.adapter.setForeignState(id, true, false, { user }, () => this._sendResponse(ws, data.id));
        } else if (data.service === 'turn_off' || data.service === 'lock') {
            this.log.debug(`${data.service} ${id}`);

            this.adapter.setForeignState(id, false, false, { user }, () => this._sendResponse(ws, data.id));
        } else if (data.service === 'set_temperature') {
            this.log.debug(`set_temperature ${data.service_data.temperature}`);

            if (data.service_data.temperature !== undefined) {
                if (entity.context.ATTRIBUTES) {
                    const attr = entity.context.ATTRIBUTES.find(attr => attr.attribute === 'temperature');
                    if (attr) {
                        return this.adapter.setForeignState(
                            attr.setId,
                            Number(data.service_data.temperature),
                            false,
                            { user },
                            () => this._sendResponse(ws, data.id),
                        );
                    }
                }
            }
            this.log.warn(`Cannot find attribute temperature in ${entity_id}`);
            this._sendResponse(ws, data.id);
        } else if (data.service === 'set_operation_mode') {
            this.log.debug(`set_operation_mode ${data.service_data.operation_mode}`);

            //TODO: just sending false here probably is wrong. The call is supported only be Waterheater entity. So... not really used, right now?
            this.adapter.setForeignState(id, false, false, { user }, () => this._sendResponse(ws, data.id));
        } else if (data.service === 'set_page') {
            this.log.debug(`set_page ${JSON.stringify(data.service_data.page)}`);

            if (typeof data.service_data.page === 'object') {
                this.adapter.setState(
                    'control.data',
                    {
                        val: data.service_data.page.title,
                        ack: true,
                    },
                    () => {
                        this.adapter.setState('control.command', {
                            val: 'changedView',
                            ack: true,
                        });
                    },
                );
            }
        } else if (data.service.startsWith('set_') && data.service !== 'set_datetime') {
            this.log.debug(`${data.service}: ${id} = ${data.service_data[data.service.substring(4)]}`);
            // set_value          => service_data.value
            // set_operation_mode => service_data.operation_mode
            // set_temperature    => service_data.temperature
            // set_speed          => service_data.speed
            let val = data.service_data[data.service.substring(4)];
            if (!val && ['datetime'].includes(entity.context.type)) {
                val = data.service_data.datetime;
            }
            if (entity.context.STATE.map2iob) {
                val = Number(entity.context.STATE.map2iob[val]);
                if (!val && val !== 0) {
                    val = data.service_data[data.service.substring(4)]; //fallback if undefined.
                }
            }
            if (entity.context.stateType === 'number') {
                val = Number(val);
            }

            this.adapter.setForeignState(id, val, false, { user }, () => this._sendResponse(ws, data.id));
        } else if (data.service === 'volume_mute') {
            this.log.debug(`volume_mute ${id} = ${data.service_data.is_volume_muted}`);
            // volume_mute        => service_data.is_volume_muted

            this.adapter.setForeignState(id, data.service_data.is_volume_muted, false, { user }, () =>
                this._sendResponse(ws, data.id),
            );
        } else if (data.service.startsWith('select_')) {
            this.log.debug(`${data.service}: ${id} = ${data.service_data[data.service.substring(7)]}`);
            // select_option      => service_data.option
            // select_source      => service_data.source
            let val = data.service_data[data.service.substring(7)];
            if (entity.context.STATE.map2iob) {
                val = Number(entity.context.STATE.map2iob[val]);
                if (!val && val !== 0) {
                    val = data.service_data[data.service.substring(7)]; //fallback if undefined.
                }
            }

            this.adapter.setForeignState(id, val, false, { user }, () => this._sendResponse(ws, data.id));
        } else if (data.service.endsWith('_say')) {
            this.adapter.setForeignState(id, data.service_data.message, false, { user }, () => {
                this._sendResponse(ws, data.id);
            });
        } else {
            this.log.warn(`Unknown service: ${data.service} (${JSON.stringify(data)})`);
            //{'id": 21, "type": "result", "success": false, "error": {"code": "not_found", "message": "Service not found."}}
            ws.send(
                JSON.stringify({
                    id,
                    type: 'result',
                    success: false,
                    error: { code: 'not_found', message: 'Service not found.' },
                }),
            );
        }
    }

    /**
     * Process service calls. Extracts entity_id from data. Can be an array, too. Also hands the call to modules, if
     * they process service calls.
     *
     * @param ws websocket connection to the frontend
     * @param data data of the service call
     * @returns {Promise<void>} resolves when done.
     */
    async _processCall(ws, data) {
        if (!data.service) {
            this.log.warn('Invalid service call. Make sure service looks like domain.service_name');
            return;
        }

        if (data.domain === 'system_log' && data.service === 'write') {
            this.log.info(`Log from UI ${data.service_data.message}`);
            return this._sendResponse(ws, data.id);
        }

        //do that here, because no entity_id in service call!
        let handled = false;
        for (const module of Object.values(this._modules)) {
            if (typeof module.processServiceCall === 'function') {
                handled = (await module.processServiceCall(ws, data)) || handled;
            }
        }
        if (handled) {
            return; //already processed.
        }

        //handle new format and convert to old:
        if (data.target && data.target.entity_id) {
            data.service_data.entity_id = data.service_data.entity_id || data.target.entity_id;
        }

        let ids = [data.service_data.entity_id];
        if (data.service_data.entity_id instanceof Array) {
            ids = data.service_data.entity_id;
        }
        delete data.service_data.entity_id; //make sure we do not use entity_id array in processSingleCall -> use param entity_id there.

        for (const id of ids) {
            if (!entityData.entityId2Entity[id]) {
                this.log.warn(`Unknown entity: ${id} for service call ${JSON.stringify(data)}`);
            } else {
                await this._processSingleCall(ws, data, id);
            }
        }
    }

    /**
     * Read states from iobroker state database and fill entity states / attributes.
     * Usually done to read initial values.
     *
     * @returns {Promise<void>} resolves when done.
     */
    async _getAllStates() {
        let entity = entityData.entities.find(e => e.state === undefined);
        while (entity) {
            entity.state = 'unknown';
            if (entity.context.STATE && entity.context.STATE.getId) {
                try {
                    const user = this.config.defaultUser;
                    const state = await this.adapter.getForeignStateAsync(entity.context.STATE.getId, { user });
                    if (state) {
                        await this.onStateChange(entity.context.STATE.getId, state);
                    } else {
                        entity.state = 'unknown';
                        entity.last_changed = Date.now() / 1000;
                        entity.last_updated = entity.last_changed;
                    }
                } catch (e) {
                    this.adapter.log.error(`Could not get state ${entity.context.STATE.getId}: ${e} - ${e.stack}`);
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
                    this.adapter.log.error(`Could not update state: ${e} - ${e.stack}`);
                }
            }
            entity = entityData.entities.find(e => e.state === undefined);
        }
    }

    /**
     * Handle a state change.
     *
     * @param id id of the state
     * @param state new state object
     * @param forceUpdate force entity.state update of all clients
     * @returns {Promise<void>} resolves when done.
     */
    async onStateChange(id, state, forceUpdate = false) {
        if (state) {
            if (
                id === `${this.adapter.namespace}.control.theme` ||
                id === `${this.adapter.namespace}.control.themeDark`
            ) {
                const dark = id.includes('Dark');
                if (this._themes[state.val] || state.val === 'default') {
                    this[dark ? '_currentThemeDark' : '_currentTheme'] = state.val;
                    this._sendUpdate('themes_updated');
                }
            } else if (id === `${this.adapter.namespace}.control.darkMode`) {
                if (this._darkMode !== state.val) {
                    this._darkMode = !!state.val;
                    this._sendUpdate('themes_updated');
                }
            }
        }

        const changedStates = {};
        this._wss &&
            this._wss.clients.forEach(client => {
                if (client.__templates && client.readyState === WebSocket.OPEN) {
                    client.__templates.forEach(t => {
                        if (t.ids.includes(id)) {
                            const _state = state || { val: null };
                            if (
                                changedStates[id] ||
                                (this.templateStates[id] && this.templateStates[id].val !== _state.val)
                            ) {
                                this.templateStates[id] = _state;
                                changedStates[id] = true;
                                const event = {
                                    id: t.id,
                                    type: 'event',
                                    event: {
                                        result: bindings.formatBinding(t.template, this.templateStates),
                                    },
                                };
                                client.send(JSON.stringify(event));
                            }
                        }
                    });
                }
            });

        const entities = entityData.iobID2entity[id];
        if (entities) {
            entities.forEach(entity => {
                let updated = false;
                if (state) {
                    // {id: 2, type: "event", "event": {"event_type": "state_changed", "data": {"entity_id": "sun.sun", "old_state": {"entity_id": "sun.sun", "state": "above_horizon", "attributes": {"next_dawn": "2019-05-17T02:57:08+00:00", "next_dusk": "2019-05-16T19:44:32+00:00", "next_midnight": "2019-05-16T23:21:40+00:00", "next_noon": "2019-05-17T11:21:38+00:00", "next_rising": "2019-05-17T03:36:58+00:00", "next_setting": "2019-05-16T19:04:54+00:00", "elevation": 54.81, "azimuth": 216.35, "friendly_name": "Sun"}, "last_changed": "2019-05-16T09:09:53.424242+00:00", "last_updated": "2019-05-16T12:46:30.001390+00:00", "context": {id: "05356b1a7df54b2f939d3c7f8a3e05b4", "parent_id": null, "user_id": null}}, "new_state": {"entity_id": "sun.sun", "state": "above_horizon", "attributes": {"next_dawn": "2019-05-17T02:57:08+00:00", "next_dusk": "2019-05-16T19:44:32+00:00", "next_midnight": "2019-05-16T23:21:40+00:00", "next_noon": "2019-05-17T11:21:38+00:00", "next_rising": "2019-05-17T03:36:58+00:00", "next_setting": "2019-05-16T19:04:54+00:00", "elevation": 54.71, "azimuth": 216.72, "friendly_name": "Sun"}, "last_changed": "2019-05-16T09:09:53.424242+00:00", "last_updated": "2019-05-16T12:47:30.000414+00:00", "context": {id: "e738dc26af1d48b4964c6d9805179595", "parent_id": null, "user_id": null}}}, "origin": "LOCAL", "time_fired": "2019-05-16T12:47:30.000414+00:00", "context": {id: "e738dc26af1d48b4964c6d9805179595", "parent_id": null, "user_id": null}}}
                    if (entity.context.STATE.getId === id) {
                        updated = true;
                        utils.updateTimestamps(entity, state);

                        if (entity.context.STATE.getParser) {
                            entity.context.STATE.getParser(entity, 'state', state);
                        } else {
                            entity.state = iobState2EntityState(entity, state.val);
                        }
                    }

                    //can have identical id for state and attributes.
                    if (entity.context.ATTRIBUTES) {
                        const attributes = entity.context.ATTRIBUTES.filter(e => e.getId === id);
                        for (const attr of attributes) {
                            updated = true;
                            //only update if newer than already present time.
                            utils.updateTimestamps(entity, state);

                            if (attr.getParser) {
                                attr.getParser(entity, attr, state);
                            } else {
                                utils.setJsonAttribute(
                                    entity.attributes,
                                    attr.attribute,
                                    iobState2EntityState(entity, state.val, attr.attribute),
                                    this.log,
                                );
                            }
                        }
                    }
                }

                if (!updated && !forceUpdate) {
                    return; //nothing happened -> do not notify UI.
                }

                this.updateEntityInFrontend(entity, state);
            });
        }

        //check modules:
        for (const module of Object.values(this._modules)) {
            if (typeof module.onStateChange === 'function') {
                module.onStateChange(id, state, this._wss);
            }
        }
    }

    /**
     * Send entity update to all clients / frontends.
     *
     * @param entity entity that changed.
     * @param state ioBroker state, used to get the timestamp.
     */
    updateEntityInFrontend(entity, state) {
        const t = {
            type: 'event',
            event: {
                a: {},
                event_type: 'subscribe_entities',
                origin: 'LOCAL',
                time_fired: (state ? state.ts : Date.now()) / 1000,
            },
        };
        t.event.a[entity.entity_id] = this._getShortEntity(entity);

        this._wss &&
            this._wss.clients.forEach(ws => {
                if (ws._subscribes && ws._subscribes.subscribe_entities) {
                    ws._subscribes.subscribe_entities.forEach(id => {
                        t.id = id;
                        ws.send(JSON.stringify(t));
                    });
                }
            });
    }

    // ------------------------------- END OF CONVERTERS ---------------------------------------- //

    /**
     * Generate entities from indicators for a device, found by type detector. Store "deviceId" in context for later use.
     *
     * @param mainEntity main entity of the device
     * @param control control object from type detector
     * @param friendlyName friendly name of the device
     * @param room room name of the device
     * @param func function name of the device
     * @param objects all ioBroker objects
     * @returns {*[]} array of generated entities
     */
    _generateEntitiesFromIndicators(mainEntity, control, friendlyName, room, func, objects) {
        const entities = [];
        const baseName = mainEntity.entity_id.split('.')[1];
        //make battery have sensible entity id and make sure it is different from "host" device:
        const battery = converterBinarySensors.processBattery(
            control,
            friendlyName,
            room,
            func,
            objects,
            `binary_sensor.${baseName}_BatteryWarning`,
        );
        if (battery) {
            battery.context.deviceId = mainEntity.context.id;
            entities.push(battery);
        }
        //create binary sensor from online/offline indicator:
        const online = converterBinarySensors.connectivityIndicator(
            control,
            friendlyName,
            room,
            func,
            objects,
            `binary_sensor.${baseName}_Connectivity`,
        );
        if (online) {
            online.context.deviceId = mainEntity.context.id;
            entities.push(online);
        }
        //error:
        const error = converterBinarySensors.processError(
            control,
            friendlyName,
            room,
            func,
            objects,
            `binary_sensor.${baseName}_Error`,
        );
        if (error) {
            error.context.deviceId = mainEntity.context.id;
            entities.push(error);
        }
        //maintenance
        const maintenance = converterBinarySensors.processMaintenance(
            control,
            friendlyName,
            room,
            func,
            objects,
            `binary_sensor.${baseName}_Maintenance`,
        );
        if (maintenance) {
            maintenance.context.deviceId = mainEntity.context.id;
            entities.push(maintenance);
        }
        //working
        const working = converterBinarySensors.processWorking(
            control,
            friendlyName,
            room,
            func,
            objects,
            `binary_sensor.${baseName}_Working`,
        );
        if (working) {
            working.context.deviceId = mainEntity.context.id;
            entities.push(working);
        }

        return entities;
    }

    /**
     * Process one ioBroker object, hand it to type-detector, create entities if devices are detected.
     *
     * @param ids ids of all ioBroker objects (or only alias.*)
     * @param objects all ioBroker objects in ids
     * @param id id of object to process
     * @param room room object assigned to object
     * @param func func object assigned to object
     * @param result array of created entities if any
     * @returns {Promise<void>} resolves when done.
     */
    async _processIobState(ids, objects, id, room, func, result) {
        if (!id) {
            return;
        }

        // object might be deleted but still in room/func enums.
        if (!objects[id]) {
            return;
        }

        let friendlyName = utils.getSmartName(objects, id, this.lang);
        if (!friendlyName && !room && !func) {
            return;
        }

        try {
            // try to detect a device
            const options = {
                objects: objects,
                id: id,
                _keysOptional: ids,
                _usedIdsOptional: this._objectData.usedKeys,
            };
            delete this.detector.cache[id];
            const controls = this.detector.detect(options);
            if (controls) {
                for (const control of controls) {
                    if (this.converter[control.type]) {
                        const forcedEntityId = this._modules.entityRegistry.getEntityId(id);
                        const entities = await this.converter[control.type](
                            id,
                            control,
                            friendlyName,
                            room,
                            func,
                            objects[id],
                            objects,
                            forcedEntityId,
                        );
                        // converter could return one or more devices as an array
                        if (entities && entities.length) {
                            //try to create battery_alarm:
                            const mainEntity = entities.find(x => x && x.entity_id);
                            if (mainEntity) {
                                const indicatorEntities = this._generateEntitiesFromIndicators(
                                    mainEntity,
                                    control,
                                    friendlyName,
                                    room,
                                    func,
                                    objects,
                                );
                                entities.push(...indicatorEntities);
                            }

                            // iterate through entities
                            for (const entity of entities) {
                                if (!entity) {
                                    continue;
                                }
                                if (!entity.context.iobType) {
                                    entity.context.iobType = control.type; //remember type.
                                }

                                const _entity = result.find(e => e.entity_id === entity.entity_id);
                                if (_entity) {
                                    if (entity.context.id !== _entity.context.id) {
                                        this._modules.entityRegistry.storeEntityId(
                                            _entity.context.id,
                                            _entity.entity_id,
                                        );
                                        entity.entity_id = `${entity.entity_id}_${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
                                        this._modules.entityRegistry.storeEntityId(entity.context.id, entity.entity_id);
                                        utils.fillEntityIntoCaches(entity);
                                        this.log.debug(
                                            `Duplicates found for ${_entity.entity_id}, solved by renaming second to ${entity.entity_id}`,
                                        );
                                    } else {
                                        this.log.warn(
                                            `Duplicate entities for identical iob ids? ${entity.entity_id}, ${entity.context.id}`,
                                        );
                                        continue;
                                    }
                                }

                                result.push(entity);

                                this.adapter.log.debug(
                                    `[Type-Detector] Created auto device: ${entity.entity_id} - ${control.type} - ${id}`,
                                );
                            }
                        }
                    } else {
                        this.adapter.log.debug(
                            `[Type-Detector] device ${control.states.find(e => e.id).id} - ${control.type} - ${id} is not yet supported`,
                        );
                    }
                }
            } else {
                this.adapter.log.debug(`[Type-Detector] Nothing found for ${options.id}`);
            }
        } catch (e) {
            this.adapter.log.error(`[Type-Detector] Cannot process "${id}": ${e} stack: ${e.stack}`);
            throw e;
        }
    }

    /**
     * Something changed in system, for example system location, so we need to update constant entities, for example zone.home.
     */
    _updateConstantEntities() {
        //zone.home:
        let entityHome = entityData.entityId2Entity['zone.home'];
        if (!entityHome) {
            entityHome = {
                entity_id: 'zone.home',
                state: 'zoning',
                attributes: {
                    hidden: true,
                    radius: 10,
                    friendly_name: 'Home',
                    icon: 'mdi:home',
                },
                context: {
                    id: 'system.config', // not sure this makes a lot of sense. But prevents crash in UI.
                    STATE: {}, //prevent warning on getting history.
                    type: 'zone',
                },
            };
            entityData.entities.push(entityHome);
            entityData.entityId2Entity[entityHome.entity_id] = entityHome;
        }
        entityHome.attributes.latitude = parseFloat(this.systemConfig.latitude);
        entityHome.attributes.longitude = parseFloat(this.systemConfig.longitude);
        entityHome.last_changed = (this.systemConfig.ts || Date.now()) / 1000;
        entityHome.last_updated = (this.systemConfig.ts || Date.now()) / 1000;
        this._modules.entityRegistry.handleUpdatedEntities([entityHome], false);
    }

    /**
     * Create one entity from type-detector
     *
     * @param {string} id of the main object (i.e., device)
     * @returns {Promise<*[]>} array of created entities if any
     */
    async _createOneDevice(id) {
        const foundRoom = utils.findEnumForId(Object.values(this._objectData.rooms), id);
        const foundFunc = utils.findEnumForId(Object.values(this._objectData.functions), id);

        if (foundRoom && foundFunc) {
            if (this._objectData.ids.length !== Object.keys(this._objectData.objects).length) {
                this._objectData.ids = Object.keys(this._objectData.objects);
                this._objectData.ids.sort();
            }

            const entities = [];
            this.log.debug('Starting processIobState', foundRoom._id, foundFunc._id);
            await this._processIobState(
                this._objectData.ids,
                this._objectData.objects,
                id,
                foundRoom,
                foundFunc,
                entities,
            );
            this._objectData.usedKeys = []; //clean this up again.
            this.log.debug('Done processIobState');

            if (entities.length) {
                for (const entity of entities) {
                    this.log.debug(`Object ${id} changed, updated entity ${entity.entity_id}.`);
                    // entityData.entities and entityData.entityId2Entity are already updated / overwritten in processCommon!
                    // update _ID2entity:
                    entityData.iobID2entity[id] = entityData.iobID2entity[id] || []; //make sure it exists.
                }
                this.log.debug(`Object ${id} did change, got ${entities.length} updated entities.`);
            } else {
                this.log.debug(`Object ${id} did change, got no updated entities.`);
            }
            return entities;
        }
        return [];
    }

    /**
     * Update all devices from type-detector
     *
     * @returns {Promise<*[]>} array of entities created
     */
    async _updateDevices() {
        const result = [];
        try {
            await this._readObjects();

            if (this._objectData.ids.length !== Object.keys(this._objectData.objects).length) {
                this._objectData.ids = Object.keys(this._objectData.objects);
                this._objectData.ids.sort();
            }

            for (const func of Object.values(this._objectData.functions)) {
                if (
                    !func.common ||
                    !func.common.members ||
                    typeof func.common.members !== 'object' ||
                    !func.common.members.length
                ) {
                    continue;
                }

                //for each member of func, look for the same ID in all rooms:
                for (const id of func.common.members) {
                    for (const room of Object.values(this._objectData.rooms)) {
                        if (
                            !room.common ||
                            !room.common.members ||
                            typeof func.common.members !== 'object' ||
                            !room.common.members.length
                        ) {
                            continue;
                        }

                        // If state or channel is in some room and in some function
                        const pos = room.common.members.indexOf(id);
                        if (pos !== -1) {
                            await this._processIobState(
                                this._objectData.ids,
                                this._objectData.objects,
                                id,
                                room,
                                func,
                                result,
                            );
                        }
                    }
                }
            }

            this._objectData.usedKeys = [];
        } catch (e) {
            this.adapter.log.error(`Could not create auto entities: ${e.stack}`);
        }

        result.forEach(entity =>
            this.adapter.log.debug(`AUTO Device detected: ${entity.context?.id} => ${entity.context?.type}`),
        );
        this.log.debug(`Found ${result.length} auto created entities.`);
        this._modules.entityRegistry.handleUpdatedEntities(result, false);
        return result;
    }

    /**
     * Read all objects from object database that are required to create entities from type-detector results.
     *
     * @returns {Promise<Record<string, ioBroker.Object>>} all objects
     */
    async _readObjects() {
        const objects = this._objectData.objects;

        if (Object.keys(this._objectData.objects).length < 10) {
            try {
                const params = {};
                if (this.adapter.config.aliasOnly) {
                    params.startkey = 'alias.0.';
                    params.endkey = 'alias.0.\u9999';
                }
                const _states = await this.adapter.getObjectViewAsync('system', 'state', params);
                const _channels = await this.adapter.getObjectViewAsync('system', 'channel', params);
                const _devices = await this.adapter.getObjectViewAsync('system', 'device', params);
                const _enums = await this.adapter.getObjectViewAsync('system', 'enum', {});
                if (_devices && _devices.rows) {
                    for (let i = 0; i < _devices.rows.length; i++) {
                        if (
                            _devices.rows[i].value &&
                            _devices.rows[i].value._id &&
                            !ignoreIds.find(reg => reg.test(_devices.rows[i].value._id))
                        ) {
                            objects[_devices.rows[i].value._id] = _devices.rows[i].value;
                        }
                    }
                }
                if (_channels && _channels.rows) {
                    for (let i = 0; i < _channels.rows.length; i++) {
                        if (
                            _channels.rows[i].value &&
                            _channels.rows[i].value._id &&
                            !ignoreIds.find(reg => reg.test(_channels.rows[i].value._id))
                        ) {
                            objects[_channels.rows[i].value._id] = _channels.rows[i].value;
                        }
                    }
                }
                if (_states && _states.rows) {
                    for (let i = 0; i < _states.rows.length; i++) {
                        if (
                            _states.rows[i].value &&
                            _states.rows[i].value._id &&
                            !ignoreIds.find(reg => reg.test(_states.rows[i].value._id))
                        ) {
                            objects[_states.rows[i].value._id] = _states.rows[i].value;
                        }
                    }
                }
                if (_enums && _enums.rows) {
                    for (let i = 0; i < _enums.rows.length; i++) {
                        if (_enums.rows[i].value && _enums.rows[i].value._id) {
                            objects[_enums.rows[i].value._id] = _enums.rows[i].value;

                            if (_enums.rows[i].value._id.startsWith('enum.rooms.')) {
                                this._objectData.rooms[_enums.rows[i].value._id] = _enums.rows[i].value;
                            }
                            if (_enums.rows[i].value._id.startsWith('enum.functions.')) {
                                this._objectData.functions[_enums.rows[i].value._id] = _enums.rows[i].value;
                            }
                        }
                    }
                }
            } catch (e) {
                this.adapter.log.error(
                    `Failed to get states / channels / devices / enums, entity generation won't work: ${e.toString()} - ${e.stack}`,
                );
            }
        }
        return objects;
    }

    /**
     * Add custom cards as resources so that frontend nows about them.
     * Also lists browser_mod and possibly other static cards.
     *
     * @returns {Promise<void>} resolves when done.
     */
    async _listFiles() {
        try {
            const staticCards = ['browser_mod.js', 'browser_mod_panel.js'];
            for (const file of staticCards) {
                this.log.debug(`Add static card: ${file} as ${'js'}`);
                this._ressourceConfig.push({
                    type: 'module',
                    url: `/cards/_static_${file}`,
                });
            }

            const list = await this.adapter.readDirAsync(this.adapter.namespace, '/cards/');
            if (list.length) {
                //keep static cards! Just add the dynamic ones during startup.
                for (const file of list) {
                    if (!file.isDir) {
                        const pos = file.file.lastIndexOf('.');
                        const type = file.file.substring(pos + 1).toLowerCase();
                        if (type === 'js') {
                            //we do not really need to advertise the images, do we? Hm.
                            this.log.debug(`Add custom cards: ${file.file} as ${type}`);
                            this._ressourceConfig.push({
                                type: type === 'js' ? 'module' : type,
                                url: `/cards/${file.file}`,
                            });
                        } else if (['css', 'html'].includes(type)) {
                            this.log.debug(`Add custom font/css/html: ${file.file} as ${type}`);
                            this._ressourceConfig.push({
                                type: type,
                                url: `/cards/${file.file}`,
                            });
                        }
                    }
                }
            }
        } catch (err) {
            if (err.message !== 'Not exists') {
                //prevent error if there are no cards at all.
                this.log.warn(`Could not load custom cards: ${err}`);
            }
        }
    }

    /**
     * Read enitiy from frontend configuration.
     *
     * @param obj frontend configuration
     * @param entities array to store entities
     */
    _flatJSON(obj, entities) {
        for (const key of Object.keys(obj)) {
            if (key === 'type' && obj[key] === 'custom:auto-entities') {
                handleAutoEntitiesCard(obj, entities, entityData.entities); //add entities from auto-entities card. But also check for entities field, which is supported.
            }

            if (obj[key] instanceof Object) {
                if (obj[key] instanceof Array && key === 'entities' && typeof obj[key][0] === 'string') {
                    // handle entity array -> custom:mini-graph-card stores entities just as string!
                    for (const entity of obj[key]) {
                        entities.indexOf(entity) === -1 && entities.push(entity);
                    }
                } else {
                    this._flatJSON(obj[key], entities);
                }
            } else {
                if (key === 'entity') {
                    entities.indexOf(obj[key]) === -1 && entities.push(obj[key]);
                } else {
                    utils.extractValidEntityIds(obj[key], entities);
                }
            }
        }
    }

    /**
     * Subscribe to ioBroker state changes based on frontend configuration.
     *
     * @returns {Promise<void>} resolve when done.
     */
    async _manageSubscribesFromConfig() {
        const entities = [];
        const promises = [];

        if (this._lovelaceConfig.views) {
            // iterate through all objects to get all nested entities Ids
            this._flatJSON(this._lovelaceConfig.views, entities);

            promises.push(this._modules.browserMod.handeUpdatedConfig(this._lovelaceConfig));
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
            const entity = entityData.entityId2Entity[entityId];
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
        this._wss &&
            this._wss.clients.forEach(
                client => client.__templates && client.__templates.forEach(t => (ids = ids.concat(t.ids))),
            );

        const deleted = this._subscribed.filter(id => ids.indexOf(id) === -1);

        // unsubscribe
        deleted.forEach(id => {
            this.log.debug(`IoB UnSubscribe on ${id}`);
            this.adapter.unsubscribeForeignStates(id);
            const pos = this._subscribed.indexOf(id);
            this._subscribed.splice(pos, 1);
        });

        // subscribe
        ids.forEach(id => {
            if (this._subscribed.indexOf(id) === -1) {
                this._subscribed.push(id);
                promises.push(this.adapter.subscribeForeignStatesAsync(id));
                this.log.debug(`IoB Subscribe on ${id}`);
            }
        });

        // wait for asynchronous code.
        if (promises.length) {
            await Promise.all(promises);
        }
    }

    /**
     * Render the index html file on request. May replace some stuff.
     *
     * @returns {*} index html.
     */
    _renderIndex() {
        if (this._indexHtml) {
            return this._indexHtml;
        }
        const text = fs.readFileSync(`${getRootPath()}index.html`).toString('utf-8');
        const lines = text.split('\n');
        const nLines = [];
        let template = false;
        let style = false;
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].trim().match(/^{%/)) {
                template = !template;
                continue;
            } else if (!style && lines[i].trim().match(/<style>/)) {
                style = true;
                nLines.push(lines[i]);
                nLines.push(fs.readFileSync(`${__dirname}/../assets/style.css`).toString('utf-8'));
                continue;
            } else if (lines[i].trim().match(/<\/body>/)) {
                const hideScript = [];
                /*if (this.config.hideHeader) {
                    hideScript.push('hideHeader();');
                }*/
                if (this.config.auth === false) {
                    hideScript.push('window.hassNoAuth = "NO_AUTH";');
                    hideScript.push('window.__tokenCache = {tokens: undefined, writeEnabled: false};');
                }
                nLines.push(`<script>\n${hideScript.join('\n')}\n</script>`);
                //deprecated.
                //nLines.push('<script>\n' + fs.readFileSync(__dirname + '/../assets/index.js').toString('utf-8') + hideScript.join('\n') + '\n</script>');
            }
            if (template) {
                continue;
            }
            nLines.push(lines[i]);
        }
        this._indexHtml = nLines.join('\n');
        this._indexHtml = this._indexHtml.replace(/{{ no_auth }}/g, '1'); // deprecated
        this._indexHtml = this._indexHtml.replace(/{{ use_oauth }}/g, '0'); // deprecated
        this._indexHtml = this._indexHtml.replace(/{{ theme_color }}/g, this._renderManifest().theme_color); // deprecated
        this._indexHtml = this._indexHtml.replace(/#THEMEC/g, this._renderManifest().theme_color);
        return this._indexHtml;
    }

    /**
     * Creates manifest object based on language.
     *
     * @returns {{theme_color: string, background_color: string, display: string, name: string, start_url: string, description: string, short_name: string, dir: string, icons: [{sizes: string, src: string, type: string},{sizes: string, src: string, type: string},{sizes: string, src: string, type: string},{sizes: string, src: string, type: string}], lang: string}} manifest object.
     */
    _renderManifest() {
        let lang = 'en-US';
        if (this.lang === 'ru') {
            lang = 'ru-RU';
        } else if (this.lang === 'de') {
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
                    type: 'image/png',
                },
                {
                    sizes: '384x384',
                    src: '/static/icons/favicon-384x384.png',
                    type: 'image/png',
                },
                {
                    sizes: '512x512',
                    src: '/static/icons/favicon-512x512.png',
                    type: 'image/png',
                },
                {
                    sizes: '1024x1024',
                    src: '/static/icons/favicon-1024x1024.png',
                    type: 'image/png',
                },
            ],
            lang,
            name: 'ioBroker',
            short_name: 'IoB',
            start_url: '/?homescreen=1',
            theme_color: '#03A9F4',
        };
    }

    /**
     * Rendes the authorize page.
     *
     * @returns {string} authorize page html
     */
    _renderAuthorize() {
        let html = fs.readFileSync(`${getRootPath()}authorize.html`).toString('utf-8');
        html = html.replace(/Home Assistant/g, 'ioBroker');
        return html;
    }

    /**
     * Returns lovelace / HASS config for the frontent.
     *
     * @returns {{elevation: number, country: any, components: string[], latitude: number, safe_mode: boolean, language: (*|string), time_zone, internal_url: null, version: string, unit_system: {volume: string, mass: string, length: string, accumulated_precipitation: string, temperature: (any|string), wind_speed: string, pressure: string}, location_name: string, external_url: null, currency: (any|string), state: string, config_source: string, longitude: number}} config
     */
    _getConfig() {
        const tzone = jstz.determine().name();
        // this.log.debug("tz:" + tzone);
        const configObj = {
            latitude: parseFloat(this.systemConfig.latitude),
            longitude: parseFloat(this.systemConfig.longitude),
            elevation: 0,
            unit_system: {
                length: 'km',
                accumulated_precipitation: 'mm',
                mass: 'g',
                pressure: 'mmHg',
                temperature: this.systemConfig.tempUnit || '\u00b0C',
                volume: 'L',
                wind_speed: 'km/h',
            },
            location_name: 'Home',
            time_zone: tzone,
            components: [
                //TODO: experiment with notify.html5.
                'lovelace',
                'conversation',
                'todo',
                'energy',
                'notify.html5',
                'logbook',
            ],
            // example: -> seems to be much more complex. hm.
            // ["default_config", "input_number", "device_automation", "homeassistant_alerts", "api", "script", "trace", "image_upload", "light", "stream", "application_credentials", "tts.google_translate", "number", "network", "switch.dlink", "yamaha_musiccast", "zone", "ssdp", "dhcp", "radio_browser", "websocket_api", "sensor.energy", "scene.homeassistant", "auth", "sun", "switch", "analytics", "select", "cloud", "frontend", "logger", "my", "switch_as_x", "lovelace", "media_player", "mobile_app", "person", "backup", "intent", "input_select", "dlink", "hardware", "repairs", "webhook", "notify.mobile_app", "input_boolean", "tts", "weather.met", "sensor.ondilo_ico", "switch.yamaha_musiccast", "scene", "file_upload", "sensor.sun", "input_datetime", "light.switch_as_x", "met", "homeassistant", "stt", "map", "timer", "automation", "search", "http", "persistent_notification", "logbook", "system_log", "accuweather", "input_text", "number.yamaha_musiccast", "media_player.yamaha_musiccast", "sensor", "ondilo_ico", "conversation", "energy", "input_button", "bluetooth", "sensor.accuweather", "blueprint", "schedule", "tag", "system_health", "zeroconf", "weather", "recorder", "assist_pipeline", "onboarding", "counter", "notify", "diagnostics", "select.yamaha_musiccast", "history", "media_source", "config", "weather.accuweather", "usb"],
            version: VERSION,
            config_source: 'storage',
            safe_mode: false,
            state: 'RUNNING',
            external_url: null, // hm.. what happens if we fill this?
            internal_url: null,
            currency: this.systemConfig.currency || 'EUR',
            country: this.systemConfig.country,
            language: this.lang,
        };

        if (this.adapter.config.history) {
            configObj.components.push('history'); //only activate history in frontend if history instance is selected.
        }

        return configObj;
    }

    /**
     * Returns themes and the ones currently selected in config / object.
     *
     * @returns {{themes: (*|{}), default_theme: (*|string), darkMode: boolean, default_dark_theme: (*|string)}} themes
     */
    _getThemes() {
        return {
            themes: this._themes,
            default_theme: this._currentTheme || this.config.defaultTheme || 'default',
            default_dark_theme: this._currentThemeDark || this.config.defaultThemeDark || 'default',
            darkMode: this._darkMode,
        };
    }

    /**
     * Somehow this seem to just be the entities?
     *
     * @returns {[]} entity array.
     */
    getHassStates() {
        // parse config for entity_ids
        return entityData.entities;
    }

    /**
     * Frontend requested a card. Read cards from the file system and send them.
     *
     * @param req request with url.
     * @param res response to use to send the result with.
     * @returns {Promise<void>} resolve when done.
     */
    async onCards(req, res) {
        let file = req.url.replace('hacsfiles', 'cards');
        file = file.replace('/cards/_static_', '/lovelace/static_cards/');
        const pos = file.indexOf('?');
        if (pos !== -1) {
            file = file.substring(0, pos);
        }
        try {
            const user = this._modules.person.getUserIDFromName(req._user);
            let data;
            if (file.startsWith('/lovelace/')) {
                file = file.replace('/lovelace/', '');
                data = await fs.promises.readFile(getRootPath() + file, 'utf-8');
            } else {
                data = (await this.adapter.readFileAsync(this.adapter.namespace, file, { user })).file;
            }
            const pos = file.lastIndexOf('.');
            res.setHeader(
                'content-type',
                (mime.getType || mime.lookup).call(data.mimeType, file.substring(pos + 1).toLowerCase()),
            );
            res.setHeader('Cache-Control', `public, max-age=${staticOptions.maxAge}`);
            res.send(data);
        } catch (err) {
            this.log.warn(`Could not read card ${file}: ${err}`);
            res.status(404).send('File not found');
        }
    }

    /**
     * Frontend requested a custom UI component. This will be read from the file system and sent.
     *
     * @param req request with url
     * @param res response to send data with
     * @returns {Promise<void>} resolves when done.
     */
    async onCustomUI(req, res) {
        let file = req.url;
        const pos = req.url.indexOf('?');
        if (pos !== -1) {
            file = file.substring(0, pos);
        }
        try {
            const user = this._modules.person.getUserIDFromName(req._user);
            const data = await this.adapter.readFileAsync(
                this.adapter.namespace,
                file.replace('/local/custom_ui/', '/cards/'),
                { user },
            );
            const pos = req.url.lastIndexOf('.');
            res.setHeader(
                'content-type',
                (mime.getType || mime.lookup).call(data.mimeType, file.substring(pos + 1).toLowerCase()),
            );
            res.send(data.file);
        } catch (err) {
            this.log.warn(`Could not read customUI ${file}: ${err}`);
            res.status(404).send('File not found');
        }
    }

    /**
     * Frontend tries to authorozie a user. Check the request and store the result.
     *
     * @param req request with body containing the auth code and action.
     * @param res response to send the result with.
     */
    onAuth(req, res) {
        const now = Date.now();
        if (req.body.action === 'revoke') {
            const flowId = Object.keys(this._auth_flows).find(
                flowId => this._auth_flows[flowId].refresh_token === req.body.refresh_token,
            );
            if (flowId) {
                delete this._auth_flows[flowId];
                res.status(200).json({ result: 'revoked' });
            } else {
                res.status(404).json({ result: 'not exists' });
            }
        } else if (req.body.grant_type === 'authorization_code') {
            // simulate token exchange
            if (this.config.auth === false && req.body.code === 'NO_AUTH') {
                res.json({
                    access_token: NO_TOKEN,
                    expires_in: Math.round(3600000000),
                    refresh_token: NO_TOKEN,
                    token_type: 'Bearer',
                });
                return;
            }

            const flowId = Object.keys(this._auth_flows).find(
                flowId =>
                    this._auth_flows[flowId].auth_code === req.body.code &&
                    now - this._auth_flows[flowId].ts < TIMEOUT_AUTH_CODE,
            );

            if (!flowId) {
                res.status(200).json({ abort: 'login_expired' });
            } else {
                generateRandomToken((_err, access_token) => {
                    generateRandomToken((_err, refresh_token) => {
                        console.log(`generate new access token ${JSON.stringify(req.body)}`);

                        const flow = this._auth_flows[flowId];
                        //access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5Yjc5Y2Q2OTZmN2U0ZDc2OTg1NGU4NGQ3YmY4NzNlMyIsImlhdCI6MTU1ODAwOTE1MywiZXhwIjoxNTU4MDEwOTUzfQ.QL9qA0QeOxfMoxPUfxH1kEZDGnDNlSHbQeMF8z2xLw0',
                        flow.access_token = access_token;
                        flow.refresh_token = refresh_token;
                        flow.auth_ttl = this.config.ttl * 1000;
                        flow.ts = now;

                        res.json({
                            access_token: flow.access_token,
                            expires_in: Math.round(flow.auth_ttl / 1000),
                            refresh_token: flow.refresh_token,
                            token_type: 'Bearer',
                        });
                        this._saveAuth();
                    });
                });
            }
        } else if (req.body.grant_type === 'refresh_token') {
            const flowId = Object.keys(this._auth_flows).find(
                flowId =>
                    this._auth_flows[flowId].refresh_token === req.body.refresh_token &&
                    now - this._auth_flows[flowId].ts < this._auth_flows[flowId].auth_ttl,
            );
            if (!flowId) {
                res.status(200).json({ errors: { abort: 'login_expired' } });
            } else {
                generateRandomToken((_err, access_token) => {
                    generateRandomToken((_err, refresh_token) => {
                        console.log(`generate access token${JSON.stringify(req.body)}`);

                        const flow = this._auth_flows[flowId];
                        //access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5Yjc5Y2Q2OTZmN2U0ZDc2OTg1NGU4NGQ3YmY4NzNlMyIsImlhdCI6MTU1ODAwOTE1MywiZXhwIjoxNTU4MDEwOTUzfQ.QL9qA0QeOxfMoxPUfxH1kEZDGnDNlSHbQeMF8z2xLw0',
                        flow.access_token = access_token;
                        flow.refresh_token = refresh_token;
                        flow.auth_ttl = this.config.ttl * 1000;
                        flow.ts = now;

                        res.json({
                            access_token: flow.access_token,
                            expires_in: Math.round(flow.auth_ttl / 1000),
                            refresh_token: flow.refresh_token,
                            token_type: 'Bearer',
                        });
                        this._saveAuth();
                    });
                });
            }
        }
    }

    /**
     * Parse themes stored in config and set the current theme.
     *
     * @returns {Promise<void>} resolves when done.
     */
    async _initThemes() {
        //setup theme selection button:
        try {
            this._themes = yaml.safeLoad(this.config.themes || '') || {};
        } catch (depError) {
            if (depError.message.includes('yaml.safeLoad') && depError.message.includes('removed')) {
                this._themes = yaml.load(this.config.themes || '') || {};
            } else {
                this.log.error(`Cannot parse themes: ${depError}`);
                this._themes = {};
            }
        }
        const states = { default: 'default' };
        for (const themeName of Object.keys(this._themes)) {
            states[themeName] = themeName;
        }
        await this.adapter.extendObjectAsync(`${this.adapter.namespace}.control.theme`, { common: { states } });
        await this.adapter.extendObjectAsync(`${this.adapter.namespace}.control.themeDark`, { common: { states } });

        const state = await this.adapter.getStateAsync(`${this.adapter.namespace}.control.theme`);
        // remember the currently selected theme, if valid. Select default otherwise.
        if (state && (this._themes[state.val] || state.val === 'default')) {
            this._currentTheme = state.val;
        } else {
            this._currentTheme = this.config.defaultTheme || 'default';
            await this.adapter.setStateAsync(`${this.adapter.namespace}.control.theme`, this._currentTheme, true);
        }
        const darkSate = await this.adapter.getStateAsync(`${this.adapter.namespace}.control.themeDark`);
        //remember currently selected theme, if valid. Select default otherwise.
        if (darkSate && (this._themes[darkSate.val] || darkSate.val === 'default')) {
            this._currentThemeDark = darkSate.val;
        } else {
            this._currentThemeDark = this.config.defaultThemeDark || 'default';
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
    }

    /**
     * Send a file requested from frontend.
     *
     * @param req request with url
     * @param res response to send the file with
     * @returns {Promise<void>} resolves when done.
     */
    async _sendFile(req, res) {
        let url = req.url;
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

        this.log.debug(`Trying to send file ${url} for ${id}`);
        try {
            let user = this._modules.person.getUserIDFromName(req._user);
            const image = await this.adapter.readFileAsync(id, url, { user });
            if (image.file === null || image.file === undefined) {
                this.log.error(`File ${url} seems to be empty?`);
                res.contentType('text/html');
                res.status(404).send(`File ${url} not found: file empty`);
            } else {
                image.mimeType =
                    image.mimeType || (mime.getType || mime.lookup).call(image.mimeType, url) || 'text/javascript';
                res.contentType(image.mimeType);
                res.status(200).send(image.file);
            }
        } catch (err) {
            res.contentType('text/html');
            res.status(404).send(`File ${url} not found: ${err}`);
        }
    }

    /**
     * Adds a file to requestable files. This means the file can be requested without credentials. Like cover images, for example.
     *
     * @param stateValue string identifying the file, usually the content of a state (like cover image)
     */
    addRequestableFile(stateValue) {
        if (stateValue) {
            if (!this._requestableFiles.includes(stateValue)) {
                this._requestableFiles.push(stateValue);
            }
        }
    }

    /**
     * Remove a file from the list of requestable files.
     * That means the file cannot be requested without credentials anymore. This is used to serve cover images, for example.
     *
     * @param stateValue string identifying the file, usually the content of a state (like cover image)
     */
    removeRequestableFile(stateValue) {
        if (stateValue) {
            const index = this._requestableFiles.indexOf(stateValue);
            if (index >= 0) {
                this._requestableFiles.splice(index, 1);
            }
        }
    }

    /**
     * Gets an auth flow object to send to UI for login form / login errors.
     *
     * @param {string} flowId the flow id
     * @returns {{data_schema: [{name: string, type: string, required: boolean},{name: string, type: string, required: boolean}], description_placeholders: null, errors: {}, flow_id: *, handler: string[], last_step: null, step_id: string, type: string}} the flow
     */
    _getAuthFlow(flowId) {
        return {
            data_schema: [
                { name: 'username', type: 'string', required: true },
                { name: 'password', type: 'string', required: true },
            ],
            description_placeholders: null,
            errors: {},
            flow_id: flowId,
            handler: ['iobroker', null],
            last_step: null,
            step_id: 'init',
            type: 'form',
        };
    }

    /**
     * Initialize the webserver (i.e., setup routes and stuff)
     */
    _init() {
        const upload = multer();

        this.adapter.subscribeForeignObjects('*');

        this._app.use(bodyParser.json());
        this._app.use(bodyParser.urlencoded({ extended: false }));

        // on http://localhost:3000/auth/authorize?response_type=code&client_id=http%3A%2F%2Flocalhost%3A3000%2F&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flovelace%3Fauth_callback%3D1&state=eyJoYXNzVXJsIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiY2xpZW50SWQiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAvIn0%3D
        this._app.get('/auth/authorize', (req, res) => {
            this.log.debug('PRO-debug: auth/authorize - started.');
            res.redirect(
                302,
                `/frontend_es5/authorize.html${req.url.replace(/^\//, '').replace(/^auth\/authorize/, '')}`,
            );
        });

        this._app.use('/auth/providers', (req, res) => {
            res.json({
                providers: [
                    {
                        id: null,
                        name: 'ioBroker Local',
                        type: 'iobroker',
                        users: this.config.showUsersOnLoginScreen ? this._modules.person.getShorList() : undefined,
                    },
                ],
            });
        });

        this._app.post('/auth/login_flow', (req, res) => {
            console.log(`/auth/login_flow${JSON.stringify(req.query)}${JSON.stringify(req.body)}`);
            this.log.debug('PRO-debug: /auth/login_flow');

            generateRandomToken((_err, token) => {
                this._auth_flows[token] = { ts: Date.now() };

                res.json(this._getAuthFlow(token));
            });
        });

        this._app.delete('/auth/login_flow/:id', (req, res) => {
            delete this._auth_flows[req.params.id];
            res.status(200).json({ message: 'Flow aborted' });
        });

        this._app.post('/auth/login_flow/:id', (req, res) => {
            if (this.config.auth === false) {
                res.status(200).json({
                    description: null,
                    description_placeholders: null,
                    flow_id: req.params.id,
                    handler: ['iobroker', null],
                    version: 1,
                    result: 'NO_AUTH',
                    title: 'ioBroker Local',
                    type: 'create_entry',
                });
                return;
            }

            if (
                !this._auth_flows[req.params.id] ||
                Date.now() - this._auth_flows[req.params.id].ts > TIMEOUT_PASSWORD_ENTER
            ) {
                res.status(200).json({ abort: { reason: 'login_expired' } });
                return;
            }

            let s = '';
            req.on('data', d => (s += d.toString()));
            req.on('end', () => {
                try {
                    s = JSON.parse(s);
                } catch (e) {
                    this.log.warn(`Cannot parse with data: ${s} - ${e} - ${e.stack}`);
                }

                console.log(`/auth/login_flow/:id${JSON.stringify(req.query)}${JSON.stringify(req.params)}`);
                //console.log(s);

                this.adapter.checkPassword(s.username, s.password, result => {
                    const ourResult = this._getAuthFlow(req.params.id);

                    if (result) {
                        generateRandomToken((_err, auth_code) => {
                            this._auth_flows[req.params.id].auth_code = auth_code;
                            this._auth_flows[req.params.id].client_id = s.client_id;
                            this._auth_flows[req.params.id].username = s.username;
                            this._auth_flows[req.params.id].ts = Date.now();

                            ourResult.result = auth_code;
                            ourResult.title = 'ioBroker Local';
                            ourResult.type = 'create_entry';

                            this._saveAuth();
                            res.status(200).json(ourResult);
                        });
                    } else {
                        ourResult.errors = { base: 'invalid_auth' };
                        res.status(200).json(ourResult);
                    }
                });
            });
        });

        const cpUpload = upload.fields([
            { name: 'client_id', maxCount: 1 },
            { name: 'client_secret', maxCount: 1 },
            { name: 'code', maxCount: 1 },
            { name: 'refresh_token', maxCount: 1 },
            { code: 'grant_type', maxCount: 1 },
        ]);

        this._app.post('/auth/token', cpUpload, (req, res) => this.onAuth(req, res));

        /*const token = this._app.oauth.token();
        this._app.post('/auth/token', (req,res,next) => {
            token(req,res,next);
        });*/

        const pagesWithAuth = [/^\/adapter\//, /^\/state\//, /^\/api\/history\//, /^\/api\/calendars\//];

        this._app.use((req, res, next) => {
            if (req.url.includes('authorize.html')) {
                this.log.debug('authorize.html');
                res.send(this._renderAuthorize());
            } else {
                // check authentication - allow entity_icons to be delivered without token
                if (this.config.auth !== false) {
                    if (pagesWithAuth.some(reg => reg.test(req.url)) && !entityData.entityIconUrls.includes(req.url)) {
                        let access_token = req.headers
                            ? (req.headers.authorization || req.headers.Authorization || '').substring(7)
                            : ''; // "'Bearer '.length
                        access_token = access_token || req.query.token;
                        if (!access_token) {
                            this.log.warn('Auth token not found! Close connection.');
                            res.status(200).json({ abort: { reason: 'login_expired' } });
                            return;
                        } else {
                            const now = Date.now();
                            const flowId = Object.keys(this._auth_flows).find(
                                _flowId =>
                                    this._auth_flows[_flowId].access_token === access_token &&
                                    now - this._auth_flows[_flowId].ts < this._auth_flows[_flowId].auth_ttl,
                            );

                            if (!flowId) {
                                this.log.warn('Auth token is expired!');
                                res.status(200).json({ abort: { reason: 'login_expired' } });
                                return;
                            } else {
                                req._user = this._auth_flows[flowId].username;
                            }
                        }
                    }
                }

                //if no auth or page does not require auth, use default user:
                //invalid token run into return above and close connection.
                req._user = req._user || this.config.defaultUser;

                next();
            }
        });

        //handle local images that are content of some states:
        this._app.use(async (req, res, next) => {
            if (this._requestableFiles.includes(req.url)) {
                if (!req._user) {
                    //sadly frontend does not send auth info with most request.... :-/
                    req._user = this.config.defaultUser;
                }
                await this._sendFile(req, res);
            } else {
                next();
            }
        });

        this._app.get('/cards/*card', async (req, res) => await this.onCards(req, res));
        this._app.get('/lovelace/cards/*card', async (req, res) => await this.onCards(req, res));
        this._app.get('/hacsfiles/*card', async (req, res) => await this.onCards(req, res));

        this._app.get('/local/custom_ui/*ui', async (req, res) => await this.onCustomUI(req, res));
        this._app.get('/lovelace/local/custom_ui/*ui', async (req, res) => await this.onCustomUI(req, res));

        this._app.get('/', (req, res) => res.send(this._renderIndex()));
        this._app.get('/lovelace/', (req, res) => res.send(this._renderIndex()));
        this._app.get('/lovelace', (req, res) => res.send(this._renderIndex()));
        this._app.get('/lovelace/:id', (req, res) => res.send(this._renderIndex()));
        this._app.get('/profile', (req, res) => res.send(this._renderIndex()));
        this._app.get('/profile/', (req, res) => res.send(this._renderIndex()));
        this._app.get('/profile/:id', (req, res) => res.send(this._renderIndex()));

        this._app.get('/manifest.json', (req, res) => res.json(this._renderManifest()));
        this._app.get('/lovelace/manifest.json', (req, res) => res.json(this._renderManifest()));
        this._app.get('/profile/manifest.json', (req, res) => res.json(this._renderManifest()));

        this._app.use('/frontend_latest/', express.static(getRootPath(), staticOptions));
        this._app.use('/lovelace/frontend_latest/', express.static(getRootPath(), staticOptions));
        this._app.use('/profile/frontend_latest/', express.static(getRootPath(), staticOptions));

        this._app.use('/static/icons/', express.static(`${__dirname}/../assets/icons/`, staticOptions));
        this._app.use('/lovelace/static/icons/', express.static(`${__dirname}/../assets/icons/`, staticOptions));
        this._app.use('/profile/static/icons/', express.static(`${__dirname}/../assets/icons/`, staticOptions));

        this._app.use('/images/', express.static(`${getRootPath()}static/images/`, staticOptions));
        this._app.use('/lovelace/images/', express.static(`${getRootPath()}static/images/`, staticOptions));
        this._app.use('/profile/images/', express.static(`${getRootPath()}static/images/`, staticOptions));

        this._app.use('/static/', express.static(getRootPath(), staticOptions));
        this._app.use('/lovelace/static/', express.static(getRootPath(), staticOptions));
        this._app.use('/profile/static/', express.static(getRootPath(), staticOptions));

        this._app.get('/adapter/*adapter', async (req, res) => {
            await this._replyWithImage(req, res);
        });

        // Init read from states
        this._app.get('/state/*state', async (req, res) => {
            try {
                const fileName = req.url.split('/', 3)[2].split('?', 2);
                const obj = await this.adapter.getForeignObjectAsync(fileName[0]);
                let contentType = 'text/plain';
                if (obj && obj.common.type === 'file') {
                    contentType = (mime.getType || mime.lookup).call(mime, fileName[0]);
                }
                const user = this._modules.person.getUserIDFromName(req._user);
                const data = await this.adapter.getBinaryStateAsync(fileName[0], { user });
                if (data !== null && obj !== undefined) {
                    if (data && typeof data === 'object' && data.val !== undefined && data.ack !== undefined) {
                        res.set('Content-Type', 'application/json');
                    } else {
                        res.set('Content-Type', contentType || 'text/plain');
                    }
                    res.status(200).send(data);
                } else {
                    res.status(404).send(`404 Not found. File ${fileName[0]} not found`);
                }
            } catch (e) {
                try {
                    this.log.warn(`Error serving states: ${e}`);
                    res.status(500).send(`500. Error${e}`);
                } catch (innerE) {
                    // connection to a client is not open anymore. Don't kill server here!
                    this.log.debug(`Connection to client already closed?: ${innerE} could not send error ${e}`);
                }
            }
        });

        this._app.use('/lovelace/', express.static(getRootPath(), staticOptions));
        this._app.use(express.static(getRootPath(), staticOptions));

        this._app.get('/api/history/period/:start', async (req, res) => {
            this._modules.history.processRequest(req, res);
        });
        this._app.get('/api/person/*person', async (req, res) => {
            this._modules.person.processRequest(req, res);
        });
        this._app.get('/api/camera_proxy_stream/:entity_id', async (req, res) => {
            await this._replyWithImage(req, res);
        });

        this._app.get('/api/camera_proxy/:entity_id', async (req, res) => {
            await this._replyWithImage(req, res);
        });

        this._app.get('/api/calendars/:entity_id', async (req, res) => {
            //this.log.debug('Calendar for ' + req.params.entity_id + ' from ' + req.query.start + ' to ' + req.query.end);
            const entity = entityData.entityId2Entity[req.params.entity_id];
            if (!entity) {
                return res.status(404).json({ error: 'Unknown entity' });
            }
            const start = new Date(req.query.start).getTime();
            const end = new Date(req.query.end).getTime();
            if (isNaN(start) || isNaN(end)) {
                this.log.warn(`Start or end malformed for calendar request: ${req.query.start} / ${req.query.end}`);
                return res.status(404).json({ error: 'Start or end misformated' });
            }

            const user = this._modules.person.getUserIDFromName(req._user);
            try {
                const state = await this.adapter.getForeignStateAsync(entity.context.STATE.getId, { user });
                if (state && state.val) {
                    let events = state.val;
                    if (typeof state.val === 'string') {
                        try {
                            events = JSON.parse(state.val);
                        } catch (e) {
                            this.log.warn(`Could not process calendar entries. Make sure it is JSON and array: ${e}`);
                        }
                    }
                    const results = [];
                    if (events instanceof Array) {
                        for (const event of events) {
                            const evStart = new Date(event._date).getTime();
                            const evEnd = new Date(event._end).getTime();
                            if (evStart >= start || evEnd <= end || (evStart <= start && evEnd >= end)) {
                                //event in range?
                                results.push({
                                    start: event._date,
                                    end: event._end,
                                    summary: event.event,
                                });
                            }
                        }
                        res.json(results);
                        return;
                    } else {
                        this.log.warn(`Could not process calendar entries. Make sure it is JSON and array.`);
                    }
                }
            } catch (e) {
                this.log.error(`Could not get state ${entity.context.STATE.getId}: ${e}`);
            }

            //fallback: empty list.
            res.json([]);
        });

        this._app.use((req, res) => {
            this.log.debug(`Unknown request for ${req.url}`);
            res.send('unknown');
        });

        //initialize the WebSocket server instance
        this._wss = new WebSocket.Server({ server: this._server });

        if (this.config.auth !== false) {
            this.adapter.getState('session', (err, state) => {
                if (state && state.val) {
                    try {
                        state = JSON.parse(state.val);
                    } catch (e) {
                        this.log.error(`Cannot parse session: ${state}: ${e} - ${e.stack}`);
                        return;
                    }
                    this._auth_flows = state;
                }
            });
        }

        this._wss.on('connection', async ws => await this._initConnection(ws));
    }

    /**
     * Return the stored configuration.
     *
     * @returns {Record<string, any>} configuration object
     */
    _getLayoutConfig() {
        return this._lovelaceConfig;
    }

    /**
     * Store configuration in object 'configuration'.
     *
     * @param config configuration to store
     */
    _setLayoutConfig(config) {
        this.adapter.getObject('configuration', (err, obj) => {
            if (JSON.stringify(obj.native) !== JSON.stringify(config)) {
                obj.native = config;
                this.adapter.setObject('configuration', obj, err => {
                    err && this.log.error(`Cannot save config: ${err}`);
                    this._sendUpdate('lovelace_updated');
                });
            }
        });
    }

    /**
     * From websocket connection get the username and create HASS user object.
     *
     * @param ws websocket connection
     * @returns {Promise<{is_admin: boolean, credentials: [{auth_provider_id: null, auth_provider_type: string}], is_owner: boolean, name: (string|undefined), mfa_modules: [{name: string, id: string, enabled: boolean}], id: string}>} user object
     */
    async _getCurrentUser(ws) {
        const user = this._modules.person.getUserIDFromName(ws.__auth.username);
        const userObj = {
            id: user,
            name: ws.__auth.username || this._modules.person.getUserNameFromID(this.config.defaultUser),
            is_owner: user === 'system.user.admin',
            is_admin: user === 'system.user.admin',
            credentials: [{ auth_provider_type: 'iobroker', auth_provider_id: null }],
            mfa_modules: [{ id: 'totp', name: 'Authenticator app', enabled: false }],
        };

        try {
            const obj = await this.adapter.getForeignObjectAsync(user, { user });
            userObj.name = getFriendlyName(null, obj, null, null);

            if (!userObj.is_admin) {
                //if user is not admin but can write config object -> make lovelace admin.
                const configObj = await this.adapter.getObjectAsync(`${this.adapter.namespace}.configuration`);
                if (configObj.acl) {
                    if (configObj.acl.owner === user) {
                        userObj.is_admin = true;
                        userObj.is_owner = true;
                    } else if (configObj.acl.ownerGroup) {
                        const groupObj = await this.adapter.getForeignObjectAsync(configObj.acl.ownerGroup);
                        if (groupObj.common.members && groupObj.common.members.includes(user)) {
                            userObj.is_admin = true;
                            userObj.is_owner = true;
                        }
                    }
                } else {
                    this.log.warn(
                        `No ACL info in ${this.adapter.namespace}.configuration. Can't determine if user is admin`,
                    );
                }
            }
        } catch (err) {
            this.log.warn(`Could not get user ${user}: ${err.stack ? err.stack : err}`);
        }

        return userObj;
    }

    /**
     * Read translations from the filesystem.
     *
     * @returns {Record<string, string>} translations as object
     */
    _getTranslations() {
        //TODO: why does this only return de?? :-( Is this used at all?
        return {
            resources: require('./translations/de.json'),
        };
    }

    /**
     * Send a (success) response to a websocket client
     *
     * @param ws websocket connect
     * @param id id of the request
     * @param [result] optional result to send
     */
    _sendResponse(ws, id, result) {
        ws.send(JSON.stringify({ id: Number(id), type: 'result', success: true, result: result || null }));
    }

    /**
     * Send an update of eventType to all connected websocket clients.
     *
     * @param eventType eventType as string
     * @param data optional data to send
     */
    _sendUpdate(eventType, data) {
        if (this._wss && this._wss.clients && this._wss.clients.size) {
            this._wss.clients.forEach(ws => {
                if (ws._subscribes && ws._subscribes[eventType]) {
                    const t = {
                        type: 'event',
                        event: {
                            event_type: eventType,
                            data: data || {},
                            origin: 'LOCAL',
                            time_fired: Date.now() / 1000,
                        },
                    };
                    ws._subscribes[eventType].forEach(id => {
                        t.id = id;
                        ws.send(JSON.stringify(t));
                    });
                }
            });
        }
    }

    /**
     * Return all connected websocket clients that subsribed to a certain event type.
     *
     * @param eventType eventType as string
     * @returns {*[]} possible empty array of clients
     */
    getClientsWithSubscription(eventType) {
        const clients = [];
        if (this._wss && this._wss.clients && this._wss.clients.size) {
            this._wss.clients.forEach(ws => {
                if (ws._subscribes && ws._subscribes[eventType]) {
                    clients.push(ws);
                }
            });
        }
        return clients;
    }

    /**
     * Reply with image data to a request.
     *
     * @param req incoming request
     * @param res response to send the image with
     * @returns {Promise<void>} resolves when done.
     */
    async _replyWithImage(req, res) {
        this.log.debug(
            `Get image for ${req.url} and entity ${req.params?.entity_id} with token=${req.query?.token} and signed=${req.query?.signed}`,
        );
        try {
            const data = await this._getImage(
                req.params?.entity_id,
                req.query?.token || 'empty',
                req.params?.entity_id ? req.query?.signed : req.query?.token,
                req.url,
                req._user,
            );
            res.setHeader('content-type', data.content_type);
            console.log(`Send image ${data.content_type} - ${data.content.length}`);
            let content = data.content;
            if (!data.content_type.includes('svg')) {
                content = Buffer.from(data.content, 'base64');
            }
            res.send(content);
        } catch (err) {
            this.log.warn(`Error in _getImage: ${err} - ${err.stack}`);
            res.status(404).json({ error: err });
        }
    }

    /**
     * Read an image from a state and return it as base64 encoded string.
     *
     * @param entity_id id of the entity
     * @param token access token for the entity itself.
     * @param access_token access token to check if the user is logged in.
     * @param url optional url to the image, if no entity is used.
     * @param reqUser user that requested the image
     * @returns {Promise<{content_type: (*|string), content: string}>} image as base64 string
     */
    async _getImage(entity_id, token, access_token, url, reqUser) {
        const entity = entityData.entityId2Entity[entity_id];
        let id;
        let userName; // will be ignored in case of no authentication enabled.
        if (
            this.config.auth !== false &&
            (token || access_token) &&
            !this._requestableFiles.includes(url) &&
            !entityData.entityIconUrls.includes(url)
        ) {
            if (access_token) {
                const now = Date.now();
                const flowId = Object.keys(this._auth_flows).find(
                    flowId =>
                        this._auth_flows[flowId].access_token === access_token &&
                        now - this._auth_flows[flowId].ts < this._auth_flows[flowId].auth_ttl,
                );

                if (!flowId) {
                    throw new Error('Invalid token!');
                } else {
                    userName = this._auth_flows[flowId].username;
                }
            } else if (token && entity?.attributes.access_token !== token) {
                this.log.warn(`Invalid access token for ${entity_id} - ${token}`);
                throw new Error(`Invalid access token for ${entity_id} - ${token}`);
            } else {
                userName = reqUser;
            }
        }

        if (entity?.context.STATE.getId) {
            id = entity.context.STATE.getId;
        } else if (entity?.context.ATTRIBUTES) {
            const attr = entity.context.ATTRIBUTES.find(attr => attr.attribute === 'url');
            if (attr) {
                id = attr.getId;
            }
        }
        let result;
        if (id) {
            const user = this._modules.person.getUserIDFromName(userName);
            const state = await this.adapter.getForeignStateAsync(id, { user });
            if (state && state.val && typeof state.val === 'string') {
                const val = state.val.split('?')[0] || '';
                // if like /adapter/daswetter/icons/tiempo-weather/galeria1/3.png
                if (val.startsWith('/adapter/')) {
                    url = state.val;
                } else if (state.val.startsWith('data')) {
                    const dataUrl = state.val;
                    const mimeType = dataUrl.substring(dataUrl.indexOf(':') + 1, dataUrl.indexOf(';'));
                    const encoding = dataUrl.substring(dataUrl.indexOf(';') + 1, dataUrl.indexOf(','));

                    if (encoding.localeCompare('base64', undefined, { sensitivity: 'base' }) !== 0) {
                        this.log.warn(`Wrong encoding: ${encoding}`);
                        throw new Error(`Wrong encoding: ${encoding}`);
                    }
                    const base64Data = dataUrl.split(',')[1];
                    result = {
                        content_type: mimeType || 'image/jpeg',
                        content: base64Data,
                    };
                    return result;
                } else {
                    const resp = await axios(state.val, { responseType: 'arraybuffer' });
                    result = {
                        content_type: (mime.getType || mime.lookup).call(mime, val) || 'image/jpeg',
                        content: Buffer.from(resp.data, 'binary').toString('base64'),
                    };
                    return result;
                }
            } else {
                throw new Error(`State ${id} does not contain url to image`);
            }
        }
        if (url) {
            //try to get image from iobroker-data url:
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

            let image;
            try {
                //ignore user here, let's read files as admin, always. User usually has no access to those files.
                //in case of auth, token is checked above.
                image = await this.adapter.readFileAsync(id, url);
            } catch (err) {
                throw new Error(`Cannot download image: ${err}`);
            }
            if (image) {
                if (image.file === null || image.file === undefined) {
                    throw new Error('File empty or not found');
                } else {
                    image.mimeType =
                        image.mimeType || (mime.getType || mime.lookup).call(image.mimeType, url) || 'image/jpeg';
                    result = { content_type: image.mimeType, content: image.file.toString('base64') };
                    return result;
                }
            }
        }

        //no id / no url
        throw new Error(`No url attribute found for ${entity_id} or no url supplied ${url}`);
    }

    /**
     * Transforms an entity into a short version that can be sent to the client.
     * Somehow introduced in newer versions of Home Assistant.
     *
     * @param entity old entity.
     * @returns {{a: (*|boolean|NamedNodeMap|ActiveX.IXMLDOMNamedNodeMap|ActiveX.ISchemaItemCollection), s, lc: (*|number), lu: (*|number)}} short entity
     */
    _getShortEntity(entity) {
        return {
            s: entity.state,
            a: entity.attributes,
            lc: entity.last_changed,
            lu: entity.last_updated,
        };
    }

    /**
     * Client connected and established a websocket connection. Initialize server here.
     *
     * @param ws - websocket connection
     * @returns {Promise<void>} - nothing
     */
    async _initConnection(ws) {
        ws._subscribes = {};
        ws.__templates = [];
        let testTimer = null;

        ws.on('error', e => {
            console.error(`Error: ${e}`);
            this.log.debug(`PRO-debug: ws error: ${e} - ${e.stack}`);
            clearInterval(testTimer);
            testTimer = null;
        });

        if (this.config.auth) {
            // tell the home assistant to authorize itself.
            this.log.debug('Telling new client to authorize, because authorization is enabled.');
            ws.send(JSON.stringify({ type: 'auth_required', ha_version: VERSION }));
        }

        //connection is up, let's add a simple event
        ws.on('message', async message => {
            this.log.debug('PRO-debug: ws message received');
            if (typeof message !== 'string') {
                //try to convert to string here?
                if (message instanceof Buffer) {
                    this.log.debug('PRO-debug: ws message is buffer');
                    message = message.toString('utf8');
                }
            }

            try {
                message = JSON.parse(message);
                //console.log(message);
            } catch (e) {
                this.log.debug(
                    `Could not parse message: ${message} with type ${typeof message}, got error ${e} with stack ${e.stack}`,
                );
                this.log.debug(`PRO-debug stringified message: ${JSON.stringify(message)}`);
                console.error(`Cannot parse message: ${message}`);
                return;
            }

            //make sure we compare numbers with numbers!
            message.id = Number(message.id);
            if (message.subscription) {
                message.subscription = Number(message.subscription);
            }

            // this.log.debug('MESSAGE: ' + message.type);
            const now = Date.now();

            if (message.type === 'auth') {
                this.log.debug(`HASS Auth: ${message.access_token}`);
                // simulate token exchange
                if (this.config.auth === false && message.access_token === NO_TOKEN) {
                    ws.__auth = {};
                    return ws.send(JSON.stringify({ type: 'auth_ok', ha_version: VERSION }));
                }

                const flowId = Object.keys(this._auth_flows).find(
                    flowId =>
                        this._auth_flows[flowId].access_token === message.access_token &&
                        now - this._auth_flows[flowId].ts < this._auth_flows[flowId].auth_ttl,
                );
                if (!flowId) {
                    this.log.warn(`HASS auth_invalid: ${message.access_token}`);
                    ws.send(JSON.stringify({ type: 'auth_invalid', message: 'Invalid access token or password' }));
                    ws.close(1000);
                } else {
                    ws.__auth = this._auth_flows[flowId];
                    ws.__auth.flowId = flowId;
                    ws.send(JSON.stringify({ type: 'auth_ok', ha_version: VERSION }));
                }
                return;
            }

            // check authentication
            if (this.config.auth !== false) {
                if (!ws.__auth) {
                    this.log.warn('Auth token not found! Close connection.');
                    ws.send(JSON.stringify({ type: 'auth_invalid', message: 'Invalid access token or password' }));
                    ws.close();
                    return;
                } else if (now - ws.__auth.ts > ws.__auth.auth_ttl) {
                    this.log.warn('Auth token is expired! Close connection.');
                    ws.send(JSON.stringify({ type: 'auth_invalid', result: false, ha_version: VERSION }));
                    ws.close();
                    return;
                }
            }

            if (message.type === 'subscribe_events') {
                this.log.debug(`HASS Subscribe: ${message.event_type}`);
                if (ws._subscribes) {
                    ws._subscribes[message.event_type] = ws._subscribes[message.event_type] || [];
                    ws._subscribes[message.event_type].push(message.id);
                }
                this._sendResponse(ws, message.id);
            } else if (message.type === 'unsubscribe_events') {
                this.log.debug(`HASS UnSubscribe: ${JSON.stringify(message)}`);
                if (message.event_type && ws._subscribes && ws._subscribes[message.event_type]) {
                    const pos = ws._subscribes[message.event_type].indexOf(message.subscription);
                    if (pos !== -1) {
                        ws._subscribes[message.event_type].splice(pos, 1);
                    }

                    if (!ws._subscribes[message.event_type].length) {
                        delete ws._subscribes[message.event_type];
                    }
                } else if (!message.event_type) {
                    ws._subscribes &&
                        Object.keys(ws._subscribes).forEach(event_type => {
                            if (
                                this._modules[event_type] &&
                                typeof this._modules[event_type].removeSubscription === 'function'
                            ) {
                                this._modules[event_type].removeSubscription(ws, message.subscription);
                            } else {
                                //filter out all that are just the same number and where sub.id matches the number.
                                ws._subscribes[event_type] = ws._subscribes[event_type].filter(
                                    sub => sub !== message.subscription && sub.id !== message.subscription,
                                );
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
            } else if (message.type === 'subscribe_entities') {
                this.log.debug(`Subscribe entities: ${JSON.stringify(message, null, 2)}`);
                if (ws._subscribes) {
                    ws._subscribes.subscribe_entities = ws._subscribes.subscribe_entities || [];
                    ws._subscribes.subscribe_entities.push(message.id);
                }
                //this._sendResponse(ws, message.id);
                //new combined message:
                const subscribeEntitiesResponse = [
                    { id: message.id, type: 'result', success: true, result: null },
                    { id: message.id, type: 'event', event: { a: {} } },
                ];
                for (const entity of entityData.entities) {
                    subscribeEntitiesResponse[1].event.a[entity.entity_id] = this._getShortEntity(entity);
                }
                ws.send(JSON.stringify(subscribeEntitiesResponse));
            } else if (message.type === 'supported_features') {
                //this is needed sind 2022.09 -> not sure what to answer here...? But otherwise connect won't happen at all if we answer with a current version
                this.log.debug(`supported_features message: ${JSON.stringify(message.features)}`);
                this._sendResponse(ws, message.id);
            } else if (message.type === 'get_states') {
                this._sendResponse(ws, message.id, this.getHassStates());
            } else if (message.type === 'get_config') {
                this._sendResponse(ws, message.id, this._getConfig());
            } else if (message.type === 'get_services') {
                this._sendResponse(ws, message.id, entityData.services);
            } else if (message.type === 'get_panels') {
                this._modules.dashboard.addDashboardsToPanels(PANELS);
                this._sendResponse(ws, message.id, PANELS);
            } else if (message.type === 'auth/sign_path') {
                this.log.debug(`Sign: ${message.path}`);
                try {
                    const [path, query] = message.path.split('?');
                    const search = {};
                    if (query) {
                        query.split('&').forEach(item => {
                            const parts = item.split('=');
                            search[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1] || '');
                        });
                    }

                    search.signed = this.config.auth !== false ? ws.__auth.access_token : `${NO_TOKEN}_${Date.now()}`;
                    const url = Object.keys(search)
                        .map(attr => `${encodeURIComponent(attr)}=${encodeURIComponent(search[attr])}`)
                        .join('&');
                    this._sendResponse(ws, message.id, { path: `${path}?${url}` });
                } catch (e) {
                    this.log.error(e);
                }
            } else if (message.type === 'frontend/get_themes') {
                this._sendResponse(ws, message.id, this._getThemes());
            } else if (message.type === 'auth/current_user') {
                this._getCurrentUser(ws).then(data => this._sendResponse(ws, message.id, data));
            } else if (message.type === 'frontend/get_user_data') {
                this.log.debug(`Get USER Data: ${message.key}`);
                this._sendResponse(ws, message.id, { value: { language: this.lang } });
            } else if (message.type === 'frontend/get_translations') {
                this.log.debug(`Get translations: ${message.language}`);
                this._sendResponse(ws, message.id, this._getTranslations());
            } else if (message.type === 'lovelace/config') {
                this.log.debug(`get config: ${message.force}`);
                this._sendResponse(ws, message.id, this._getLayoutConfig());
            } else if (message.type === 'lovelace/config/save') {
                this._setLayoutConfig(message.config);
                this._sendResponse(ws, message.id);
            } else if (message.type === 'lovelace/resources') {
                this._sendResponse(ws, message.id, this._ressourceConfig);
            } else if (message.type === 'config/device_registry/list') {
                this._sendResponse(ws, message.id, []); // always send an empty device list for now.
            } else if (message.type === 'repairs/list_issues') {
                this._sendResponse(ws, message.id, { issues: [] }); // always send an empty issue list for now.
            } else if (message.type === 'config/floor_registry/list') {
                this._sendResponse(ws, message.id, []); // always send an empty floor list for now.
            } else if (message.type === 'config/area_registry/list') {
                //TODO: maybe send rooms here? -> yes, in HomeAssistant these are rooms!
                this._sendResponse(ws, message.id, []); // always send an empty device list for now.
            } else if (message.type === 'camera_thumbnail') {
                this.log.warn(`camera_thumbnail ${message.entity_id} deprecated!!!`);
                try {
                    const data = await this._getImage(message.entity_id, null, null);
                    this._sendResponse(ws, message.id, data);
                } catch (err) {
                    this.log.warn(`Error in camera_thumbnail: ${err} - ${err.stack}`);
                    this._sendResponse(ws, message.id);
                }
            } else if (message.type === 'call_service') {
                //{"type":"call_service","domain":"zone","service":"turn_off","service_data":{"entity_id":"zone.home"},"id":18}
                await this._processCall(ws, message);
            } else if (message.type === 'render_template') {
                //{"type":"render_template","template":"The **Markdown** ","variables":{"config":{"type":"markdown","content":"The **Markdown** card allows you to write any text. You can style it **bold**, *italicized*, ~strikethrough~ etc. You can do images, links, and more.\n\nFor more information see the [Markdown Cheatsheet](https://commonmark.org/help).","title":"Markdown"}},"id":11}
                const template = message.template;
                this._sendResponse(ws, message.id);

                const obj = { template, ids: [], id: message.id };
                ws.__templates && ws.__templates.push(obj);

                const vars = bindings.extractBinding(template);
                const promises = [];

                // subscribe all variables and read their values
                vars &&
                    vars.forEach(v =>
                        promises.push(
                            new Promise(resolve => {
                                const id = v.systemOid;

                                obj.ids.push(id);

                                if (this._subscribed.indexOf(id) === -1) {
                                    this._subscribed.push(id);
                                    this.adapter.subscribeForeignStates(id);
                                    this.log.debug(`IoB Subscribe on ${id}`);
                                }

                                this.adapter.getForeignState(id, (err, state) => {
                                    if (state) {
                                        this.templateStates[id] = state;
                                    }
                                    resolve();
                                });
                            }),
                        ),
                    );

                Promise.all(promises).then(() => {
                    const t = {
                        id: message.id,
                        type: 'event',
                        event: {
                            result: bindings.formatBinding(template, this.templateStates),
                        },
                    };
                    ws.send(JSON.stringify(t));
                });
            } else if (message.type === 'sensor/numeric_device_classes') {
                //it seems frontend now asks backend for what device_classes are numeric. Ok. Let's use that. ;-)
                this._sendResponse(ws, message.id, { numeric_device_classes: NUMERIC_DEVICE_CLASSES });
            } else if (message.type === 'ping') {
                this._sendResponse(ws, message.id, { type: 'pong' });
            } else {
                //check modules:
                let result = false;
                for (const module of Object.values(this._modules)) {
                    if (typeof module.processMessage === 'function') {
                        result = (await module.processMessage(ws, message)) || result;
                    }
                }
                if (!result) {
                    console.warn(`Unknown request: ${JSON.stringify(message)}`);
                    ws.send(
                        JSON.stringify({
                            id: message.id,
                            type: 'result',
                            success: false,
                            error: { code: 'unknown_command' },
                        }),
                    );
                }
            }
        });

        ws.on('close', () => {
            this.log.debug('Connection closed');
            this.log.debug('PRO-debug: ws close');
            ws._subscribes = null;
            ws.__templates = null;
            clearInterval(testTimer);
            testTimer = null;
        });
    }

    /**
     * Saves the successful authentication into ioBroker object database.
     *
     * @param cb callback
     */
    _saveAuth(cb) {
        if (this.config.auth !== false) {
            this.adapter.setState('session', JSON.stringify(this._auth_flows), true, cb);
        }
    }

    /**
     * Update entity (by deleting and recreating it)
     *
     * @param {string} id of entity.context.id -> main id / device id.
     * @param {ioBroker.Object} obj of entity.context.id
     * @param entity old entity.
     * @returns {Promise<void>}
     */
    async _updateEntity(id, obj, entity) {
        if (entity) {
            this.log.debug(`Processing change in ${id}, removing old entity ${entity.entity_id} in order to recreate.`);
            utils.removeEntity(entity);
        } else {
            this.log.debug(`No entity in change set for ${id}. Might create new entities.`);
        }

        // object deleted:
        if (!obj) {
            // we have an entity that is missing its object -> need to delete.
            if (entity) {
                this.log.debug(`Object ${id} deleted. ${entity.entity_id} was deleted, too.`);
            }
            return [];
        } else {
            // update manual device:
            if (obj.common && obj.common.custom && obj.common.custom[this.adapter.namespace]) {
                this.log.debug(`Object ${id} changed, required update of manual entity.`);
                return this._processManualEntity(id);
            }

            if (this.adapter.config.aliasOnly) {
                if (!id.startsWith('alias.0.')) {
                    this.log.debug(
                        `Object ${id} changed, update of automatic created entities not relevant for us, because out of alias.`,
                    );
                } else {
                    return this._createOneDevice(id); //start auto creation for one device.
                }
            } else {
                return this._createOneDevice(id); //start auto creation for one device.
            }
        }
        return [];
    }

    /**
     * Marks id and obj or entity for later update. Updates entries, if there are already some for entity / id.
     *
     * @param {string} id of iobroker object
     * @param {ioBroker.Object} obj iobroker object
     * @param [entity] entity to update, if already exists.
     */
    _markForUpdate(id, obj, entity) {
        if (entity) {
            //we have entity -> keep only on change for one entity, because it will be completely rebuilt.
            const foundIndex = this._objectData.updatedObjects.findIndex(
                e => e.entity && e.entity.entity_id === entity.entity_id,
            );
            if (foundIndex !== -1) {
                this.log.debug(
                    `Overwriting to process change later on! New: ${obj ? 'object' : 'NO object'}, ${id}. Old: ${this._objectData.updatedObjects[foundIndex].obj ? 'object' : 'NO object'}, ${id} for ${entity.entity_id}`,
                );
                this._objectData.updatedObjects[foundIndex] = { id, obj, entity };
            } else {
                this.log.debug(
                    `Storing to process change later on! New: ${obj ? 'object' : 'NO object'}, ${id} for ${entity.entity_id}`,
                );
                this._objectData.updatedObjects.push({ id, obj, entity });
            }
        } else {
            const foundIndex = this._objectData.updatedObjects.findIndex(e => !e.entity && e.id === id);
            if (foundIndex !== -1) {
                this.log.debug(
                    `Overwriting to process change later on! New: ${obj ? 'object' : 'NO object'}, ${id}. Old: ${this._objectData.updatedObjects[foundIndex].obj ? 'object' : 'NO object'}, ${id} for no entity yet`,
                );
                this._objectData.updatedObjects[foundIndex] = { id, obj };
            } else {
                this.log.debug(
                    `Storing to process change later on! New: ${obj ? 'object' : 'NO object'}, ${id} for no entity, yet`,
                );
                this._objectData.updatedObjects.push({ id, obj });
            }
        }
    }

    /**
     * Process object change. Can create / destroy entities.
     *
     * @param id of object
     * @param obj object itself
     * @returns {Promise<void>} resolves when done.
     */
    async onObjectChange(id, obj) {
        console.log('onObjectChange', id, obj);
        if (obj) {
            if (obj.type === 'state' || obj.type === 'channel' || obj.type === 'device') {
                if (
                    !this.adapter.config.aliasOnly ||
                    id.startsWith('alias.0.') ||
                    (obj.common && obj.common.custom && obj.common.custom[this.adapter.namespace])
                ) {
                    this._objectData.objects[id] = obj;
                    this.log.debug(`${id} updated.`);
                    if (!this._objectData.ids.includes(id)) {
                        this._objectData.ids.push(id);
                    }
                }
            } else if (obj.type === 'enum') {
                if (id.startsWith('enum.rooms.')) {
                    const { ids, entities: affectedEntities } = utils.findEntitiesFromEnumChange(
                        obj,
                        this._objectData.rooms[id],
                    );
                    for (const entity of affectedEntities) {
                        if (entity) {
                            this.log.debug(`${id} changed, ${entity.entity_id} affected.`);
                            this._markForUpdate(entity.context.id, this._objectData.objects[entity.context.id], entity);
                        }
                    }
                    for (const id of ids) {
                        this._markForUpdate(id, this._objectData.objects[id]);
                    }
                    utils.getEnumName(obj, this.lang, true);
                    this._objectData.rooms[id] = obj;
                    this.log.debug(`enum ${id} updated.`);
                }
                if (id.startsWith('enum.functions.')) {
                    const { ids, entities: affectedEntities } = utils.findEntitiesFromEnumChange(
                        obj,
                        this._objectData.functions[id],
                    );
                    for (const entity of affectedEntities) {
                        if (entity) {
                            this.log.debug(`${id} changed, ${entity.entity_id} affected.`);
                            this._markForUpdate(entity.context.id, this._objectData.objects[entity.context.id], entity);
                        }
                    }
                    for (const id of ids) {
                        this._markForUpdate(id, this._objectData.objects[id]);
                    }
                    utils.getEnumName(obj, this.lang, true);
                    this._objectData.functions[id] = obj;
                    this.log.debug(`enum ${id} updated.`);
                }
            }
        } else {
            delete this._objectData.objects[id];
            delete this._objectData.rooms[id];
            delete this._objectData.functions[id];
            const foundIndex = this._objectData.ids.indexOf(id);
            if (foundIndex !== -1) {
                this._objectData.ids.splice(foundIndex, 1);
            }
            this.log.debug(`${id} deleted.`);
        }

        if (id === `${this.adapter.namespace}.configuration`) {
            this._lovelaceConfig = obj.native;
            await this._manageSubscribesFromConfig();
            this.log.debug(`configUpdateProcessed for config.`);
            await this.adapter.setStateAsync('info.configUpdateProcessed', true, true);
        } else if (id === 'system.config') {
            if (obj && obj.common) {
                this.lang = obj.common.language || this.lang || 'en';
                entityData.lang = this.lang;
                this.systemConfig = obj.common;
                this._updateConstantEntities();
                this.log.debug(`${id} -> config updated, constant entities updated.`);
                this.log.debug('entitiesUpdated for system.config.');
                await this.adapter.setStateAsync('info.entitiesUpdated', true, true);
            }
        } else {
            //remove all entities that are connected to this id and check if we should recreate them (later):
            let affectedEntities = entityData.iobID2entity[id] || [];
            if (obj) {
                this._objectData.objects[id] = obj; //if had custom and now no custom anymore -> store new info about object here!
            }
            if (obj && obj.type !== 'device') {
                //if not device, search in parent for device.
                const parts = id.split('.');
                while (parts.length > 3) {
                    parts.pop();
                    const parentId = parts.join('.');
                    const entities = entityData.iobID2entity[parentId];
                    if (entities) {
                        affectedEntities = affectedEntities.concat(entities);
                    }
                    if (this._objectData.objects[id] && this._objectData.objects[id].type === 'device') {
                        break;
                    }
                }
            }
            if (affectedEntities && affectedEntities.length) {
                for (const entity of affectedEntities) {
                    if (
                        !entity.isManual ||
                        !(obj && obj.common && obj.common.custom && obj.common.custom[this.adapter.namespace])
                    ) {
                        //ignore manual entities here, they will be processed below.
                        this.log.debug(`${id} changed, ${entity.entity_id} affected.`);
                        this._markForUpdate(entity.context.id, this._objectData.objects[entity.context.id], entity);
                    }
                }
            } else if (obj) {
                this.log.debug(`${id} changed, no entity affected, will check if new entity can be created..`);
                this._markForUpdate(id, obj); //no old entities affected.
            }
            if (obj && obj.common && obj.common.custom && obj.common.custom[this.adapter.namespace]) {
                //always add objects with custom settings!
                this.log.debug(`${id} changed, has custom settings. Update manual entity.`);
                const entity_id = utils.createEntityNameFromCuston(obj, this.adapter.namespace);
                const entity = entityData.entityId2Entity[entity_id];
                this._markForUpdate(id, obj, entity);
            }

            this._updateTimer && clearTimeout(this._updateTimer);
            this._updateTimer = setTimeout(async () => {
                this._updateTimer = null;
                const promises = [];
                let needUpdate = [];
                this.log.debug(`Update timer expired, ${this._objectData.updatedObjects.length} objects updated.`);
                const idsWithUpdate = [];

                //recreate all entities:
                while (this._objectData.updatedObjects.length > 0) {
                    const { id, obj, entity } = this._objectData.updatedObjects.shift();
                    this.log.debug(`Processing ${entity?.entity_id} for ${id}`);
                    if (entity) {
                        needUpdate.push(entity);
                    }
                    promises.push(
                        (async () => {
                            const entities = await this._updateEntity(id, obj, entity);
                            for (const e of entities) {
                                this.log.debug(`Object ${id} changed, update of ${e?.entity_id} required.`);
                                needUpdate.push(e);
                                utils.fillEntityIntoCaches(e);
                                if (!idsWithUpdate.includes(id)) {
                                    idsWithUpdate.push(id);
                                }
                            }
                        })(),
                    );
                }
                await Promise.all(promises); //fine because we do not really need them to be in order.
                this.log.debug(`All ${promises.length} changes done.`);

                if (needUpdate.length > 0) {
                    await this._getAllStates();
                    await this._manageSubscribesFromConfig();

                    this._modules.entityRegistry?.handleUpdatedEntities(needUpdate, true);
                    for (const id of idsWithUpdate) {
                        await this.onStateChange(id, null, true);
                    }
                    this.log.debug('entitiesUpdated for object changes.');
                    await this.adapter.setStateAsync('info.entitiesUpdated', true, true);
                    this.log.debug('Had changes, updated states and notified entitiesUpdated state.');
                }
            }, this.config.updateTimeout || 5000);
        }

        for (const module of Object.values(this._modules)) {
            if (typeof module.onObjectChange === 'function') {
                module.onObjectChange(id, obj);
            }
        }
    }

    /**
     * Destroy the webserver and all its connections.
     *
     * @param cb callback when done.
     */
    destroy(cb) {
        this.adapter.unsubscribeStates('control.*');
        this.adapter.unsubscribeStates('notifications.*');
        this.adapter.unsubscribeStates('instances.*');
        this.adapter.setState('info.readyForClients', false, true);
        this._saveAuth(() => {
            this.adapter.unsubscribeForeignObjects('*');
            this.adapter.unsubscribeObjects('configuration', cb);
        });
        this._clearInterval && clearInterval(this._clearInterval);
        this._clearInterval = null;
        this._updateTimer && clearTimeout(this._updateTimer);
        this._updateTimer = null;
        for (const module of Object.values(this._modules)) {
            if (typeof module.cleanup === 'function') {
                module.cleanup();
            }
        }
    }
}

module.exports = WebServer;
