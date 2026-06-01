import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import { EXIT_CODES } from '@iobroker/adapter-core';
import { handleAutoEntitiesCard } from './modules/autoEntities';
import * as utils from './entities/utils';
import { BaseEntity } from './entities/baseEntity';
import { getFriendlyName } from './entities/friendly_name';
import { iobState2EntityState, numericDeviceClasses as NUMERIC_DEVICE_CLASSES } from './converters/genericConverter';
import { Converter } from './converters/converter';
import * as converterSwitch from './converters/switch';
import * as converterBinarySensors from './converters/binary_sensor';
import * as converterSensors from './converters/sensor';
import * as converterGeoLocation from './converters/geo_location';
import * as converterDatetime from './converters/input_datetime';
import * as converterAlarmCP from './converters/alarm_control_panel';
import * as converterInputSelect from './converters/input_select';
import * as convertFan from './converters/fan';
import * as converterClimate from './converters/climate';
import * as converterLight from './converters/light';
import './converters/lock';
import './converters/camera';
import './converters/weather';
import './converters/cover';
import './converters/media_player';
import BrowserModModule from './modules/browser_mod';
import HistoryModule from './modules/history';
import ConversationModule from './modules/conversation';
import LogbookModule from './modules/logbook';
import PersistentNotifications from './modules/persistentNotifications';
import TodoModule from './modules/todo';
import PersonModule from './modules/person';
import StatisticsRecorderModule from './modules/statisticsRecorder';
import EntityRegistry from './modules/entityRegistry';
import DashboardModule from './modules/dashboard';
import DeviceRegistryModule from './modules/deviceRegistry';
import AreaRegistryModule from './modules/areaRegistry';
import EnergyModule from './modules/energyModule';
import UserDataModule from './modules/userData';
import ThemesModule from './modules/themes';
import TemplateModule from './modules/template';
import CompatModule from './modules/compat';
import type { IModule } from './modules/iModule';

type Modules = {
    browserMod: InstanceType<typeof BrowserModModule>;
    conversation: InstanceType<typeof ConversationModule>;
    logbook: InstanceType<typeof LogbookModule>;
    notifications: InstanceType<typeof PersistentNotifications>;
    todo: InstanceType<typeof TodoModule>;
    person: InstanceType<typeof PersonModule>;
    entityRegistry: InstanceType<typeof EntityRegistry>;
    dashboard: InstanceType<typeof DashboardModule>;
    deviceRegistry: InstanceType<typeof DeviceRegistryModule>;
    areaRegistry: InstanceType<typeof AreaRegistryModule>;
    energy: InstanceType<typeof EnergyModule>;
    userData: InstanceType<typeof UserDataModule>;
    themes: InstanceType<typeof ThemesModule>;
    template: InstanceType<typeof TemplateModule>;
    compat: InstanceType<typeof CompatModule>;
    history: InstanceType<typeof HistoryModule>;
    statisticsRecorder: InstanceType<typeof StatisticsRecorderModule>;
};

// Modules without TypeScript types — keep as require

const WebSocket = require('ws');

const bodyParser = require('body-parser');

const PANELS = require('./panels');

const multer = require('multer');

const mime = require('mime');

const yaml = require('js-yaml');

const axios = require('axios');

const jstz = require('jstimezonedetect');

const entityData = require('../../lib/dataSingleton');

const bindings = require('../../lib/bindings');

const ChannelDetector = require('@iobroker/type-detector').default;

const ignoreIds = [/^system\./, /^script\./];

const TIMEOUT_PASSWORD_ENTER = 180000; // 3 min
const TIMEOUT_AUTH_CODE = 10000; // 10sec
const ROOT_DIR = '../../hass_frontend';

//frontend expects only YYYY.MM.DD -> omit the rest.
const VERSION = fs
    .readFileSync(`${getRootPath()}version.txt`, 'utf8')
    .replace(/(\d{4})(\d{2})(\d{2})\.(\d).*/s, '$1.$2.$3');
const NO_TOKEN = 'no_token';

function getRootPath() {
    if (ROOT_DIR.match(/^\w:/) || ROOT_DIR.startsWith('/')) {
        return `${ROOT_DIR}/`;
    }
    return path.resolve(`${__dirname}/${ROOT_DIR}`) + path.sep;
}

const generateRandomToken = function (callback: (err: string | false, token?: string) => void): void {
    crypto.randomBytes(256, (_ex, buffer) => {
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

type AdapterInstance = ioBroker.Adapter & { config: Record<string, unknown> };

interface WebServerOptions {
    adapter: AdapterInstance;
    server: unknown;
    app: unknown;
    words?: Record<string, unknown>;
}

/**
 * WebServer class, handles incomming requests and manages websocket connections.
 */
class WebServer {
    adapter: any;

    config: any;

    log: any;
    lang: string;

    detector: any;


    words: any;

    systemConfig: any;

    private _lovelaceConfig: any;

    private _ressourceConfig: any[];
    private _requestableFiles: string[];

    private _subscribed: any[];

    private _server: any;

    private _app: any;

    private _auth_flows: any;

    private _objectData: {
        objects: Record<string, any>;
        ids: string[];

        rooms: Record<string, ioBroker.Object>;

        functions: Record<string, ioBroker.Object>;
        roomNames: Record<string, string>;
        funcNames: Record<string, string>;
        updatedIds: string[];
        usedKeys: string[];
    };

    private _modules!: Modules;

    private _wss: any;
    private _indexHtml: string | undefined;
    private _clearInterval: ReturnType<typeof setInterval> | null | undefined;
    private _updateTimer: ReturnType<typeof setTimeout> | null | undefined;

    /**
     * Constructor of the WebServer class.
     *
     * @param options object with options from the adapter.
     */
    constructor(options: WebServerOptions) {
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

        //object data for updates:
        this._objectData = {
            objects: {}, //id -> object storage
            ids: [], //array of object ids.
            rooms: {},
            functions: {},
            roomNames: {}, //id -> name storage
            funcNames: {},
            updatedIds: [], //temporary storage for updated ids
            usedKeys: [], //temporary storage for used keys (type-detector)
        };

        //initialize modules.
        const person = new PersonModule({ adapter: this.adapter });
        this._modules = {
            browserMod: new BrowserModModule({
                adapter: this.adapter,
                objects: this._objectData.objects,
            }),
            conversation: new ConversationModule({
                adapter: this.adapter,
                sendResponse: (ws: unknown, id: unknown, result?: unknown) => this._sendResponse(ws, id, result),
                lang: this.lang,
                words: this.words,
            }),
            logbook: new LogbookModule({
                adapter: this.adapter,
                getUsedEntityIDs: () => {
                    const entities: string[] = [];
                    this._flatJSON(this._lovelaceConfig ? this._lovelaceConfig.views : {}, entities);
                    return entities;
                },
            }),
            notifications: new PersistentNotifications({
                adapter: this.adapter,
                server: this,
            }),
            todo: new TodoModule({
                adapter: this.adapter,
                entityData: entityData,
                server: this,
                getWebsocketServer: () => this._wss,
            }),
            person,
            entityRegistry: new EntityRegistry({
                adapter: this.adapter,
                entityData: entityData,
                sendResponse: (ws: unknown, id: unknown, result: unknown) => this._sendResponse(ws, id, result),
                sendUpdate: (type: string, data?: unknown) => this._sendUpdate(type, data),
            }),
            dashboard: new DashboardModule({
                adapter: this.adapter,
                sendResponse: (ws: unknown, id: unknown, result: unknown) => this._sendResponse(ws, id, result),
                sendUpdate: (type: string) => this._sendUpdate(type),
            }),
            deviceRegistry: new DeviceRegistryModule({
                adapter: this.adapter,
                entityData,
                sendResponse: (ws: unknown, id: unknown, result: unknown) => this._sendResponse(ws, id, result),
            }),
            areaRegistry: new AreaRegistryModule({
                adapter: this.adapter,
                rooms: this._objectData.rooms,
                sendResponse: (ws: unknown, id: unknown, result: unknown) => this._sendResponse(ws, id, result),
                sendUpdate: (type: string) => this._sendUpdate(type),
            }),
            energy: new EnergyModule({
                adapter: this.adapter,
                sendResponse: (ws: unknown, id: unknown, result: unknown) => this._sendResponse(ws, id, result),
            }),
            userData: new UserDataModule({
                adapter: this.adapter,
                sendResponse: (ws: unknown, id: unknown, result: unknown) => this._sendResponse(ws, id, result),
            }),
            themes: new ThemesModule({
                adapter: this.adapter,
                sendUpdate: (type: string) => this._sendUpdate(type),
            }),
            template: new TemplateModule({
                adapter: this.adapter,
                sendResponse: (ws: unknown, id: unknown, result?: unknown) => this._sendResponse(ws, id, result),
                subscribeState: (id: string) => {
                    if (this._subscribed.indexOf(id) === -1) {
                        this._subscribed.push(id);
                        this.adapter.subscribeForeignStates(id);
                        this.log.debug(`IoB Subscribe on ${id}`);
                    }
                },
            }),
            compat: new CompatModule({
                sendResponse: (ws: unknown, id: unknown, result?: unknown) => this._sendResponse(ws, id, result),
                listDevices: (ws, message) => void this._modules.deviceRegistry.processMessage(ws, message),
            }),
            history: new HistoryModule({
                adapter: this.adapter,
                entityData: entityData,
                personModule: person,
            }),
            statisticsRecorder: new StatisticsRecorderModule({
                adapter: this.adapter,
                server: this,
                log: this.log,
                personModule: person,
                dataSingleton: entityData,
            }),
        };

        if (this.adapter.config.updateTimeout !== undefined) {
            this.adapter.config.updateTimeout = Math.max(100, Math.min(this.adapter.config.updateTimeout, 30000));
        }

        const concurrentPromises = [
            this._modules.todo.init(),
            this._modules.person.init(),
            this._modules.entityRegistry.init(),
            this._modules.areaRegistry.init(),
            this._modules.energy.init(),
            this._modules.dashboard.init(),
            storageReady.then(() => this._modules.userData.init()),
            this.adapter
                .getForeignObjectAsync('system.config')
                .then((config: any) => {
                    this.lang = this.config.language || config.common.language;
                    entityData.lang = this.lang;
                    this.systemConfig = config.common;
                    this.systemConfig.ts = config.ts;
                    this._updateConstantEntities();

                    return this.adapter.getObjectAsync('configuration');
                })
                .then((config: any) => {
                    if (config && config.native && config.native.title) {
                        this._lovelaceConfig = config.native;
                    } else {
                        this._lovelaceConfig = require('../../lib/defaultConfig');
                    }
                })
                .then(() => this._modules.browserMod.init(this._lovelaceConfig)),
            this._readAllEntities(),
            this._listFiles(),
            this._modules.themes.init(),
        ];

        Promise.all(concurrentPromises)
            .then(() => {
                this.adapter.subscribeObjects('configuration');
                this.adapter.subscribeStates('control.*');
                this.adapter.subscribeStates('notifications.*');
                this.adapter.subscribeStates('instances.*');
                this.adapter.subscribeStates('conversation');
                this._init();
                for (const mod of Object.values(this._modules) as IModule[]) {
                    mod.augmentServices?.(entityData.services);
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
     * @returns resolves, when done.
     */
    async _readAllEntities() {
        const smartDevices = await this._updateDevices();
        for (const entity of smartDevices) {
            entity.registerInCaches();
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
        this.log.debug('entities: init done');
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
     * @returns resolves, when done.
     */
    async _getManualEntities() {
        try {
            // Build the list from _objectData.objects (already loaded by _readObjects()) rather than
            // the 'custom' view, whose index can be stale after rapid setObject calls in tests.
            const ids: string[] = [];
            for (const id of Object.keys(this._objectData.objects)) {
                const obj = this._objectData.objects[id];
                if (obj?.common?.custom?.[this.adapter.namespace]) {
                    ids.push(id);
                }
            }
            ids.push(`${this.adapter.namespace}.control.alarm`);

            const created: BaseEntity[] = [];
            for (const id of ids) {
                const entities = await this._processManualEntity(id);
                for (const entity of entities) {
                    created.push(entity);
                    entity.registerInCaches();
                }
            }
            this._modules.entityRegistry.handleUpdatedEntities(
                created as unknown as Parameters<typeof this._modules.entityRegistry.handleUpdatedEntities>[0],
                false,
            );
        } catch (e: any) {
            this.adapter.log.error(`Could not get object view for getAllEntities: ${e.toString()} - ${e.stack}`);
        }
    }

    // ------------------------------- START OF CONVERTERS ---------------------------------------- //

    // Process manually created entity
    /**
     * Create manual entities from custom-part. Process one object here.
     *
     * @param id of ioBroker object
     * @returns manual entity
     */
    async _processManualEntity(id: string) {
        try {
            // Prefer the in-process object cache (kept current by onObjectChange) to
            // avoid stale data from some DB view implementations.
            const obj = this._objectData.objects[id] ?? (await this.adapter.getForeignObjectAsync(id));
            if (!obj) {
                return [];
            }
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
            } else if (!obj.common?.custom?.[this.adapter.namespace]) {
                // Object has no custom settings for this namespace — skip silently.
                return [];
            }
            const custom = obj.common.custom[this.adapter.namespace] || {};
            const entityType = custom.entity || utils.autoDetermineEntityType(obj);
            // ... no... don't force entityId of manually created entities... user is in control here and at fault, if something breaks.
            //const forcedEntityId = this._modules.entityRegistry.getEntityId(id);
            const entity_id = utils.createEntityNameFromCustom(obj, this.adapter.namespace); //maybe use forced id if no id set in object... but does that happen at all?

            const entity = new BaseEntity(null, null, null, obj, entityType, entity_id);

            if (
                custom.attr_assumed_state &&
                ['switch', 'light', 'cover', 'climate', 'fan', 'humidifier', 'group', 'water_heater'].includes(
                    entityType,
                )
            ) {
                entity.attributes.assumed_state = true;
            }

            entity.context.STATE = { getId: id, setId: id, attribute: 'state' as const };
            if (obj && obj.common && obj.common.states && ['string', 'number'].includes(obj.common.type)) {
                entity.context.STATE.map2lovelace = obj.common.states;
                if (!(obj.common.states instanceof Array)) {
                    entity.context.STATE.map2iob = {};
                    Object.keys(obj.common.states).forEach(
                        k => (entity.context.STATE.map2iob![obj.common.states[k]] = k),
                    );
                }
            }

            entity.addID2entity(id);
            if (custom.states && custom.states.stateRead) {
                entity.context.STATE.getId = custom.states.stateRead;
                entity.addID2entity(custom.states.stateRead);
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
                for (const stateId of Object.values(custom.states as Record<string, string>)) {
                    if (!this._objectData.objects[stateId]) {
                        try {
                            this._objectData.objects[stateId] = await this.adapter.getForeignObjectAsync(stateId);
                        } catch (e: any) {
                            this.adapter.log.warn(
                                `Could not get object ${stateId} for manual entity ${entity_id} please check config in ${id}. Error: ${e}`,
                            );
                        }
                    }
                }
                entity.fillFromStates(custom.states);
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
                entity.context.STATE = { getValue: 'on', getId: null, attribute: 'state' as const };
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
                return this._modules.todo.processManualEntity(
                    id,
                    obj,
                    entity as unknown as Parameters<typeof this._modules.todo.processManualEntity>[2],
                    this._objectData.objects,
                    custom,
                ) as unknown as BaseEntity[];
            } else if (entityType === 'switch') {
                return converterSwitch.processManualEntity(id, obj, entity, this._objectData.objects, custom);
            } else if (entityType === 'timer') {
                // - timer => STATE idle/paused/active, attributes: [remaining]
                entity.context.STATE = { getId: null, setId: null, attribute: 'state' as const }; // will be simulated
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
                                state.val = parseInt(state.val as string, 10);
                                const hours = Math.floor(state.val / 3600);
                                const minutes = Math.floor((state.val % 3600) / 60);
                                const seconds = state.val % 60;
                                entity.attributes.remaining = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                            }
                        },
                    },
                ];
            }

            entity.addID2entity(id);

            return [entity];
        } catch (e: any) {
            this.adapter.log.error(`Could not process manual entity ${id}: ${e.toString()} - ${e.stack}`);
        }
        return [];
    }

    /**
     * Process a single service call from the frontend.
     *
     * @param ws websocket connection to the frontend
     * @param data data of the service call
     * @param entity_id entity id connected to the call. Required to be a single id in this function.
     * @returns resolves when done.
     */
    async _processSingleCall(ws: any, data: any, entity_id: string) {
        const user = this._modules.person.getUserIDFromName(ws.__auth?.username);

        const entity = entityData.entityId2Entity[entity_id];
        const id = entity.context.STATE.setId;

        if (entity.context.COMMANDS) {
            const command = entity.context.COMMANDS.find((c: any) => c.service === data.service);
            if (command && command.parseCommand) {
                return command
                    .parseCommand(entity, command, data, user)
                    .then((result: any) => this._sendResponse(ws, data.id, result))
                    .catch((e: any) => this._sendResponse(ws, data.id, { result: false, error: e.message || e }));
            }
        }

        if (data.service === 'toggle') {
            this.log.debug(`toggle ${id}`);

            this.adapter.getForeignState(id, { user }, (err: any, state: any) =>
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
                    const attr = entity.context.ATTRIBUTES.find((attr: any) => attr.attribute === 'temperature');
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
                //TODO: adjust for non number states.
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
     * @returns resolves when done.
     */
    async _processCall(ws: any, data: any) {
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
        for (const mod of Object.values(this._modules) as IModule[]) {
            handled = ((await mod.processServiceCall?.(ws, data as Record<string, unknown>)) ?? false) || handled;
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
     * Get states for all entities and fill entity states / attributes during startup.
     *
     * @returns resolves when all entity states have been populated
     */
    async _getAllStates() {
        for (const entity of entityData.entities) {
            await this._getStatesForEntity(entity);
        }
    }

    /**
     * Read states from iobroker state database and fill entity states / attributes.
     * Usually done to read initial values.
     *
     * @param entity entity to get states for
     * @returns resolves when done.
     */
    async _getStatesForEntity(entity: any) {
        entity.state = entity.state || 'unknown';
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
            } catch (e: any) {
                this.adapter.log.error(`Could not get state ${entity.context.STATE.getId}: ${e} - ${e.stack}`);
            }
        } else if (entity.context.type === 'switch') {
            entity.state = 'off';
        } else if (entity.context.STATE.getValue !== undefined) {
            entity.state = entity.context.STATE.getValue;
        } else if (entity.context.type === 'climate') {
            //This seems to be some strange hack... why?
            entity.state = 'on';
        }

        //handle attributes:
        if (entity.context.ATTRIBUTES) {
            const ids = entity.context.ATTRIBUTES.map((entry: any) => entry.getId || '');
            try {
                const states = await this.adapter.getForeignStatesAsync(ids);
                if (ids && ids.length) {
                    entity.attributes = entity.attributes || {};
                    ids.forEach((id: any, i: any) => {
                        const attribute = entity.context.ATTRIBUTES[i].attribute;
                        if (attribute === 'remaining' && entity.context.type === 'timer') {
                            if (!states[id].val) {
                                entity.state = 'idle';
                            } else {
                                entity.state = 'active';
                            }
                            entity.context.lastValue = states[id].val;
                        } else {
                            void this.onStateChange(id, states[id]);
                        }
                    });
                }
            } catch (e: any) {
                this.adapter.log.error(`Could not update state: ${e} - ${e.stack}`);
            }
        }
    }

    /**
     * Handle a state change.
     *
     * @param id id of the state
     * @param state new state object
     * @param forceUpdate force entity.state update of all clients
     * @returns resolves when done.
     */
    async onStateChange(id: string, state: any, forceUpdate = false) {
        if (state) {
            this._modules.themes.onStateChange(id, state);
        }

        this._modules.template.onStateChange(id, state, this._wss);

        const entities = entityData.iobID2entity[id];
        if (entities) {
            entities.forEach((entity: any) => {
                let updated = false;
                if (state) {
                    // {id: 2, type: "event", "event": {"event_type": "state_changed", "data": {"entity_id": "sun.sun", "old_state": {"entity_id": "sun.sun", "state": "above_horizon", "attributes": {"next_dawn": "2019-05-17T02:57:08+00:00", "next_dusk": "2019-05-16T19:44:32+00:00", "next_midnight": "2019-05-16T23:21:40+00:00", "next_noon": "2019-05-17T11:21:38+00:00", "next_rising": "2019-05-17T03:36:58+00:00", "next_setting": "2019-05-16T19:04:54+00:00", "elevation": 54.81, "azimuth": 216.35, "friendly_name": "Sun"}, "last_changed": "2019-05-16T09:09:53.424242+00:00", "last_updated": "2019-05-16T12:46:30.001390+00:00", "context": {id: "05356b1a7df54b2f939d3c7f8a3e05b4", "parent_id": null, "user_id": null}}, "new_state": {"entity_id": "sun.sun", "state": "above_horizon", "attributes": {"next_dawn": "2019-05-17T02:57:08+00:00", "next_dusk": "2019-05-16T19:44:32+00:00", "next_midnight": "2019-05-16T23:21:40+00:00", "next_noon": "2019-05-17T11:21:38+00:00", "next_rising": "2019-05-17T03:36:58+00:00", "next_setting": "2019-05-16T19:04:54+00:00", "elevation": 54.71, "azimuth": 216.72, "friendly_name": "Sun"}, "last_changed": "2019-05-16T09:09:53.424242+00:00", "last_updated": "2019-05-16T12:47:30.000414+00:00", "context": {id: "e738dc26af1d48b4964c6d9805179595", "parent_id": null, "user_id": null}}}, "origin": "LOCAL", "time_fired": "2019-05-16T12:47:30.000414+00:00", "context": {id: "e738dc26af1d48b4964c6d9805179595", "parent_id": null, "user_id": null}}}
                    if (entity.context.STATE.getId === id) {
                        updated = true;
                        entity.updateTimestamp(state, true);

                        if (entity.context.STATE.getParser) {
                            entity.context.STATE.getParser(entity, 'state', state);
                        } else {
                            entity.state = iobState2EntityState(entity, state.val);
                        }
                    }

                    //can have identical id for state and attributes.
                    if (entity.context.ATTRIBUTES) {
                        const attributes = entity.context.ATTRIBUTES.filter((e: any) => e.getId === id);
                        for (const attr of attributes) {
                            updated = true;
                            entity.updateTimestamp(state, false);

                            if (attr.getParser) {
                                attr.getParser(entity, attr, state);
                            } else {
                                utils.setJsonAttribute(
                                    entity.attributes,
                                    attr.attribute,
                                    iobState2EntityState(entity, state.val, attr.attribute),
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
        for (const mod of Object.values(this._modules) as IModule[]) {
            void mod.onStateChange?.(id, state, this._wss);
        }
    }

    /**
     * Send entity update to all clients / frontends.
     *
     * @param entity entity that changed.
     * @param state ioBroker state, used to get the timestamp.
     */
    updateEntityInFrontend(entity: any, state?: any) {
        const t: any = {
            type: 'event',
            event: {
                a: {} as Record<string, unknown>,
                event_type: 'subscribe_entities',
                origin: 'LOCAL',
                time_fired: state ? state.ts : entity.lu || entity.last_updated || Date.now() / 1000,
            },
        };
        t.event.a[entity.entity_id] = this._getShortEntity(entity);

        this._wss &&
            this._wss.clients.forEach((ws: any) => {
                if (ws._subscribes && ws._subscribes.subscribe_entities) {
                    ws._subscribes.subscribe_entities.forEach((id: any) => {
                        t.id = id;
                        ws.send(JSON.stringify(t));
                    });
                }
            });
    }

    // ------------------------------- END OF CONVERTERS ---------------------------------------- //

    /**
     * Process one ioBroker object, hand it to type-detector, create entities if devices are detected.
     *
     * @param ids ids of all ioBroker objects (or only alias.*)
     * @param objects all ioBroker objects in ids
     * @param id id of object to process
     * @param room room object assigned to object
     * @param func func object assigned to object
     * @param existingEntities array of created entities if any
     * @returns resolves when done.
     */
    async _processIobState(
        ids: string[],
        objects: Record<string, any>,
        id: string,
        room: any,
        func: any,
        existingEntities: any[],
    ) {
        if (!id) {
            return;
        }

        // object might be deleted but still in room/func enums.
        if (!objects[id]) {
            return;
        }

        const friendlyName = utils.getSmartName(objects, id, this.lang);
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
                // convert devices to entities, filling them in existingEntities array, if valid.
                Converter.convertAll(controls, {
                    id,
                    friendlyName,
                    room,
                    func,
                    objects,
                    existingEntities,
                    adapter: this as any,
                    entityRegistry: this._modules.entityRegistry,
                });
            } else {
                this.adapter.log.debug(`[Type-Detector] Nothing found for ${options.id}`);
            }
        } catch (e: any) {
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
     * @param id of the main object (i.e., device)
     * @returns array of created entities if any
     */
    async _createOneDevice(id: string) {
        if (this.adapter.config.aliasOnly) {
            if (!id.startsWith('alias.0.')) {
                this.log.debug(
                    `Object ${id} changed, update of automatic created entities not relevant for us, because out of alias.`,
                );
                return [];
            }
        }

        const foundRoom = utils.findEnumForId(Object.values(this._objectData.rooms) as ioBroker.EnumObject[], id);
        const foundFunc = utils.findEnumForId(Object.values(this._objectData.functions) as ioBroker.EnumObject[], id);

        if (foundRoom && foundFunc) {
            if (this._objectData.ids.length !== Object.keys(this._objectData.objects).length) {
                this._objectData.ids = Object.keys(this._objectData.objects);
                this._objectData.ids.sort();
            }

            const entities: any[] = [];
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
            this.log.debug(`Done processIobState, got ${entities.length} new entities.`);

            for (const entity of entities) {
                entity.unregister(); //during update -> make sure old entity is gone.
                entity.registerInCaches();
            }

            return entities;
        }
        return [];
    }

    /**
     * Update all devices from type-detector
     *
     * @returns array of entities created
     */
    async _updateDevices() {
        const result: any[] = [];
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
        } catch (e: any) {
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
     * @returns all objects
     */
    async _readObjects() {
        const objects = this._objectData.objects;

        if (Object.keys(this._objectData.objects).length < 10) {
            try {
                const params: Record<string, string> = {};
                if (this.adapter.config.aliasOnly) {
                    params.startkey = 'alias.0.';
                    params.endkey = 'alias.0.\u9999';
                }
                const _states = await this.adapter.getObjectViewAsync('system', 'state', params);
                const _channels = await this.adapter.getObjectViewAsync('system', 'channel', params);
                const _devices = await this.adapter.getObjectViewAsync('system', 'device', params);
                const _folders = await this.adapter.getObjectViewAsync('system', 'folder', {});
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
                if (_folders && _folders.rows) {
                    for (let i = 0; i < _folders.rows.length; i++) {
                        if (
                            _folders.rows[i].value &&
                            _folders.rows[i].value._id &&
                            !ignoreIds.find(reg => reg.test(_folders.rows[i].value._id))
                        ) {
                            objects[_folders.rows[i].value._id] = _folders.rows[i].value;
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
            } catch (e: any) {
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
     * @returns resolves when done.
     */
    async _listFiles() {
        try {
            const staticCards = ['browser_mod.js'];
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
        } catch (err: any) {
            if (err.message !== 'Not exists') {
                //prevent error if there are no cards at all.
                this.log.warn(`Could not load custom cards: ${err}`);
            }
        }
        this.log.debug('files: init done');
    }

    /**
     * Read enitiy from frontend configuration.
     *
     * @param obj frontend configuration
     * @param entities array to store entities
     */
    _flatJSON(obj: any, entities: any[]) {
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
     * @returns resolve when done.
     */
    async _manageSubscribesFromConfig() {
        const entities: any[] = [];
        const promises: Promise<any>[] = [];

        if (this._lovelaceConfig.views) {
            // iterate through all objects to get all nested entities Ids
            this._flatJSON(this._lovelaceConfig.views, entities);

            this._modules.browserMod.handeUpdatedConfig(this._lovelaceConfig);
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

        let ids: string[] = [];
        entities.forEach((entityId: any) => {
            const entity = entityData.entityId2Entity[entityId];
            if (!entity) {
                return;
            }
            if (entity.context.STATE && entity.context.STATE.getId && ids.indexOf(entity.context.STATE.getId) === -1) {
                ids.push(entity.context.STATE.getId);
            }
            if (entity.context.ATTRIBUTES) {
                entity.context.ATTRIBUTES.forEach((attr: any) => {
                    if (attr.getId && ids.indexOf(attr.getId) === -1) {
                        ids.push(attr.getId);
                    }
                });
            }
        });

        // include states referenced by active render_template subscriptions
        ids = ids.concat(this._modules.template.collectSubscribedIds(this._wss));

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
     * @returns index html.
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
                nLines.push(fs.readFileSync(`${__dirname}/../../assets/style.css`).toString('utf-8'));
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
     * @returns manifest object.
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
     * @returns authorize page html
     */
    _renderAuthorize() {
        let html = fs.readFileSync(`${getRootPath()}authorize.html`).toString('utf-8');
        html = html.replace(/Home Assistant/g, 'ioBroker');
        return html;
    }

    /**
     * Returns lovelace / HASS config for the frontent.
     *
     * @returns config
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

        const componentsWithIcons = require('../../lib/componentsWithIcons.json');
        configObj.components.push(...componentsWithIcons);

        return configObj;
    }

    /**
     *
     */
    }

    /**
     * Somehow this seem to just be the entities?
     *
     * @returns entity array.
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
     * @returns resolve when done.
     */
    async onCards(req: any, res: any) {
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
                //static cards
                file = file.replace('/lovelace/', '');
                data = await fs.promises.readFile(getRootPath() + file, 'utf-8');
            } else {
                //user provided cards
                data = (await this.adapter.readFileAsync(this.adapter.namespace, file, { user })).file;
            }
            const pos = file.lastIndexOf('.');
            res.setHeader(
                'content-type',
                (mime.getType || mime.lookup).call(data.mimeType, file.substring(pos + 1).toLowerCase()),
            );
            res.setHeader('Cache-Control', `public, max-age=${staticOptions.maxAge}`);
            res.send(data);
        } catch (err: any) {
            this.log.warn(`Could not read card ${file}: ${err}`);
            res.status(404).send('File not found');
        }
    }

    /**
     * Frontend tries to authorozie a user. Check the request and store the result.
     *
     * @param req request with body containing the auth code and action.
     * @param res response to send the result with.
     */
    onAuth(req: any, res: any) {
        const now = Date.now();
        console.log(`[Auth] ${JSON.stringify(req.body)}`);
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
     * Send a file requested from frontend.
     *
     * @param req request with url
     * @param res response to send the file with
     * @returns resolves when done.
     */
    async _sendFile(req: any, res: any) {
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
            const user = this._modules.person.getUserIDFromName(req._user);
            const image = await this.adapter.readFileAsync(id, url, { user });
            if (image.file === null || image.file === undefined) {
                this.log.error(`File ${url} seems to be empty?`);
                res.contentType('text/html');
                res.status(404).send(`File ${url} not found: file empty`);
            } else {
                image.mimeType =
                    image.mimeType || (mime.getType || mime.lookup).call(image.mimeType, url) || 'text/javascript';
                res.contentType(image.mimeType);
                res.setHeader('Cache-Control', `public, max-age=${staticOptions.maxAge}`);
                res.status(200).send(image.file);
            }
        } catch (err: any) {
            res.contentType('text/html');
            res.status(404).send(`File ${url} not found: ${err}`);
        }
    }

    /**
     * Adds a file to requestable files. This means the file can be requested without credentials. Like cover images, for example.
     *
     * @param stateValue string identifying the file, usually the content of a state (like cover image)
     */
    addRequestableFile(stateValue: any) {
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
    removeRequestableFile(stateValue: any) {
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
     * @param flowId the flow id
     * @returns the flow
     */
    _getAuthFlow(flowId: any): Record<string, any> {
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
        this._app.get('/auth/authorize', (req: any, res: any) => {
            this.log.debug('PRO-debug: auth/authorize - started.');
            /*res.redirect(
                302,
                `/frontend_es5/authorize.html${req.url.replace(/^\//, '').replace(/^auth\/authorize/, '')}`,
            );*/
            //no authorize.html in es5 folder. Seems authorize.html decides which framwork to load?
            res.send(this._renderAuthorize());
        });

        this._app.use('/auth/providers', (req: any, res: any) => {
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

        this._app.post('/auth/login_flow', (req: any, res: any) => {
            console.log(`/auth/login_flow${JSON.stringify(req.query)}${JSON.stringify(req.body)}`);
            this.log.debug('PRO-debug: /auth/login_flow');

            generateRandomToken((_err, token) => {
                this._auth_flows[token!] = { ts: Date.now() };

                res.json(this._getAuthFlow(token));
            });
        });

        this._app.delete('/auth/login_flow/:id', (req: any, res: any) => {
            delete this._auth_flows[req.params.id];
            res.status(200).json({ message: 'Flow aborted' });
        });

        this._app.post('/auth/login_flow/:id', (req: any, res: any) => {
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

            let s: any = '';
            req.on('data', (d: any) => (s += d.toString()));
            req.on('end', () => {
                try {
                    s = JSON.parse(s);
                } catch (e: any) {
                    this.log.warn(`Cannot parse with data: ${s} - ${e} - ${e.stack}`);
                }

                console.log(`/auth/login_flow/:id${JSON.stringify(req.query)}${JSON.stringify(req.params)}`);
                //console.log(s);

                this.adapter.checkPassword(s.username, s.password, (result: any) => {
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

        this._app.post('/auth/token', cpUpload, (req: any, res: any) => this.onAuth(req, res));

        /*const token = this._app.oauth.token();
        this._app.post('/auth/token', (req,res,next) => {
            token(req,res,next);
        });*/

        const pagesWithAuth = [/^\/adapter\//, /^\/state\//, /^\/api\/history\//, /^\/api\/calendars\//];

        this._app.use((req: any, res: any, next: any) => {
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
        this._app.use(async (req: any, res: any, next: any) => {
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

        //handle static files here.
        this._app.use(async (req: any, res: any, next: any) => {
            //console.log('url', req.url);
            if (req.url.endsWith('/')) {
                //index:
                res.setHeader('Cache-Control', `public, max-age=${staticOptions.maxAge}`);
                res.send(this._renderIndex());
            } else if (req.url.endsWith('manifest.json')) {
                //manifest:
                res.setHeader('Cache-Control', `public, max-age=${staticOptions.maxAge}`);
                res.send(this._renderManifest());
            } else if (
                req.url.includes('/cards/') ||
                req.url.includes('/hacsfiles/') ||
                req.url.includes('/local/custom_ui/')
            ) {
                //cards:
                //make sure card url is /cards/xyz:
                req.url = req.url.replace(/.*\/cards\//g, '/cards/');
                req.url = req.url.replace(/.*\/hacsfiles\//g, '/cards/');
                req.url = req.url.replace(/.*\/local\/custom_ui\//g, '/cards/');
                await this.onCards(req, res);
            } else if (req.url.includes('/frontend_latest/')) {
                //serve frontend:
                //remove all from before frontend_latest.
                const filePath = req.url.replace(/.*\/frontend_latest\//, 'frontend_latest/');
                res.setHeader('Cache-Control', `public, max-age=${staticOptions.maxAge}`);
                res.sendFile(`${getRootPath()}${filePath}`);
            } else if (req.url.includes('/frontend_es5/')) {
                //serve frontend:
                //remove all from before frontend_es5.
                const filePath = req.url.replace(/.*\/frontend_es5\//, 'frontend_es5/');
                res.setHeader('Cache-Control', `public, max-age=${staticOptions.maxAge}`);
                res.sendFile(`${getRootPath()}${filePath}`);
            } else if (req.url.includes('/static/icons/')) {
                //iobroker icons:
                const filePath = req.url.replace(/.*\/static\/icons\//, '');
                res.setHeader('Cache-Control', `public, max-age=${staticOptions.maxAge}`);
                res.sendFile(path.join(__dirname, '/../../assets/icons/', filePath));
            } else if (req.url.includes('/images/')) {
                //static images:
                const filePath = req.url.replace(/.*\/images\//, 'static/images/');
                res.setHeader('Cache-Control', `public, max-age=${staticOptions.maxAge}`);
                res.sendFile(`${getRootPath()}${filePath}`);
            } else if (req.url.includes('/static/')) {
                //static:
                const filePath = req.url.replace(/.*\/static\//, 'static/');
                res.setHeader('Cache-Control', `public, max-age=${staticOptions.maxAge}`);
                res.sendFile(`${getRootPath()}${filePath}`);
            } else if (req.url.endsWith('favicon.ico')) {
                res.setHeader('Cache-Control', `public, max-age=${staticOptions.maxAge}`);
                res.sendFile(path.resolve(`${__dirname}/../../assets/icons/favicon.ico`));
            } else {
                //try to load file from root:
                //remove .. from the path to avoid exiting root dir.
                //also remove first slahs.
                const filePath = getRootPath() + req.url.replace(/\.\./g, '').substring(1);
                fs.access(filePath, fs.constants.R_OK, err => {
                    if (err) {
                        return next();
                    }
                    console.log('Serving', filePath);
                    res.setHeader('Cache-Control', `public, max-age=${staticOptions.maxAge}`);
                    res.sendFile(filePath);
                });
            }
        });

        //do we need  that at all?
        //this._app.get('/lovelace/:id', (req: any, res: any) => res.send(this._renderIndex()));
        //this._app.get('/profile/:id', (req: any, res: any) => res.send(this._renderIndex()));

        this._app.get('/adapter/*adapter', async (req: any, res: any) => {
            await this._replyWithImage(req, res);
        });

        // Init read from states
        this._app.get('/state/*state', async (req: any, res: any) => {
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
            } catch (e: any) {
                try {
                    this.log.warn(`Error serving states: ${e}`);
                    res.status(500).send(`500. Error${e}`);
                } catch (innerE) {
                    // connection to a client is not open anymore. Don't kill server here!
                    this.log.debug(`Connection to client already closed?: ${innerE} could not send error ${e}`);
                }
            }
        });

        this._app.get('/api/history/period/:start', async (req: any, res: any) => {
            void this._modules.history.processRequest(req, res);
        });
        this._app.get('/api/person/*person', async (req: any, res: any) => {
            this._modules.person.processRequest(req, res);
        });
        this._app.get('/api/camera_proxy_stream/:entity_id', async (req: any, res: any) => {
            await this._replyWithImage(req, res);
        });

        this._app.get('/api/camera_proxy/:entity_id', async (req: any, res: any) => {
            await this._replyWithImage(req, res);
        });

        this._app.get('/api/calendars/:entity_id', async (req: any, res: any) => {
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
                        } catch (e: any) {
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
            } catch (e: any) {
                this.log.error(`Could not get state ${entity.context.STATE.getId}: ${e}`);
            }

            //fallback: empty list.
            res.json([]);
        });

        this._app.use((req: any, res: any) => {
            this.log.info(`Unknown request for ${req.url}`);
            //res.send('unknown');
            res.send(this._renderIndex());
        });

        //initialize the WebSocket server instance
        this._wss = new WebSocket.Server({ server: this._server });

        if (this.config.auth !== false) {
            this.adapter.getState('session', (err: any, state: any) => {
                if (state && state.val) {
                    try {
                        state = JSON.parse(state.val);
                    } catch (e: any) {
                        this.log.error(`Cannot parse session: ${state}: ${e} - ${e.stack}`);
                        return;
                    }
                    this._auth_flows = state;
                }
            });
        }

        this._wss.on('connection', async (ws: any) => await this._initConnection(ws));
    }

    /**
     * Return the stored configuration.
     *
     * @param urlPath {string|undefined} optional url path of the dashboard to get config for.
     * @returns configuration object
     */
    _getLayoutConfig(urlPath?: any) {
        // The new frontend requests the default dashboard with its panel url_path ('lovelace')
        // instead of null. Map 'lovelace' back to the main configuration object.
        if (urlPath && urlPath !== 'lovelace') {
            return this._modules.dashboard.getConfig(urlPath);
        }
        return this._lovelaceConfig;
    }

    /**
     * Store configuration in object 'configuration'.
     *
     * @param config configuration to store
     * @param urlPath {string|undefined} optional url path of the dashboard to store config for.
     */
    async _setLayoutConfig(config: any, urlPath?: any) {
        if (urlPath && urlPath !== 'lovelace') {
            await this._modules.dashboard.storeConfig(urlPath, config);
        } else {
            this.adapter.getObject('configuration', (err: any, obj: any) => {
                if (JSON.stringify(obj.native) !== JSON.stringify(config)) {
                    obj.native = config;
                    this.adapter.setObject('configuration', obj, (err: any) => {
                        err && this.log.error(`Cannot save config: ${err}`);
                        this._sendUpdate('lovelace_updated');
                    });
                }
            });
        }
    }

    /**
     * From websocket connection get the username and create HASS user object.
     *
     * @param ws websocket connection
     * @returns user object
     */
    async _getCurrentUser(ws: any) {
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
        } catch (err: any) {
            this.log.warn(`Could not get user ${user}: ${err.stack ? err.stack : err}`);
        }

        return userObj;
    }

    /**
     * Read translations from the filesystem.
     *
     * @param lang language to read the translations in
     * @returns translations as object
     */
    _getTranslations(lang: any) {
        //TODO: why does this only return de?? :-( Is this used at all?
        if (!lang || !['de', 'en', 'ru'].includes(lang)) {
            lang = 'en';
        }
        return {
            resources: require(`../../lib/translations/${lang}.json`),
        };
    }

    /**
     * Send a (success) response to a websocket client
     *
     * @param ws websocket connect
     * @param id id of the request
     * @param [result] optional result to send
     */
    _sendResponse(ws: any, id: unknown, result?: unknown) {
        ws.send(JSON.stringify({ id: Number(id), type: 'result', success: true, result: result || null }));
    }

    /**
     * Send an update of eventType to all connected websocket clients.
     *
     * @param eventType eventType as string
     * @param data optional data to send
     */
    _sendUpdate(eventType: string, data?: unknown) {
        if (this._wss && this._wss.clients && this._wss.clients.size) {
            this._wss.clients.forEach((ws: any) => {
                if (ws._subscribes && ws._subscribes[eventType]) {
                    const t: any = {
                        type: 'event',
                        event: {
                            event_type: eventType,
                            data: data || {},
                            origin: 'LOCAL',
                            time_fired: Date.now() / 1000,
                        },
                    };
                    ws._subscribes[eventType].forEach((id: any) => {
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
     * @returns possible empty array of clients
     */
    getClientsWithSubscription(eventType: any) {
        const clients: any[] = [];
        if (this._wss && this._wss.clients && this._wss.clients.size) {
            this._wss.clients.forEach((ws: any) => {
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
     * @returns resolves when done.
     */
    async _replyWithImage(req: any, res: any) {
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
        } catch (err: any) {
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
     * @returns image as base64 string
     */
    async _getImage(entity_id: any, token: any, access_token?: any, url?: any, reqUser?: any) {
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
            const attr = entity.context.ATTRIBUTES.find((attr: any) => attr.attribute === 'url');
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
            url = url.replace(/^\/adapter\/([a-zA-Z0-9-_]+)(.admin)?\//, '/$1.admin/');
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
            } catch (err: any) {
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
     * @returns short entity
     */
    _getShortEntity(entity: any) {
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
     * @returns - nothing
     */
    async _initConnection(ws: any) {
        ws._subscribes = {};
        this._modules.template.initWs(ws);
        let testTimer: any = null;

        ws.on('error', (e: any) => {
            console.error(`Error: ${e}`);
            //this.log.debug(`PRO-debug: ws error: ${e} - ${e.stack}`);
            clearInterval(testTimer);
            testTimer = null;
        });

        if (this.config.auth) {
            // tell the home assistant to authorize itself.
            this.log.debug('Telling new client to authorize, because authorization is enabled.');
            ws.send(JSON.stringify({ type: 'auth_required', ha_version: VERSION }));
        }

        //connection is up, let's add a simple event
        ws.on('message', async (message: any) => {
            //this.log.debug('PRO-debug: ws message received');
            if (typeof message !== 'string') {
                //try to convert to string here?
                if (message instanceof Buffer) {
                    //this.log.debug('PRO-debug: ws message is buffer');
                    message = message.toString('utf8');
                }
            }

            try {
                message = JSON.parse(message);
                //console.log(message);
            } catch (e: any) {
                this.log.debug(
                    `Could not parse message: ${message} with type ${typeof message}, got error ${e} with stack ${e.stack}`,
                );
                //this.log.debug(`PRO-debug stringified message: ${JSON.stringify(message)}`);
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
                            const dynMod = (this._modules as Record<string, unknown>)[event_type] as
                                | Record<string, unknown>
                                | undefined;
                            if (dynMod && typeof dynMod.removeSubscription === 'function') {
                                (dynMod.removeSubscription as (ws: unknown, sub: unknown) => void)(
                                    ws,
                                    message.subscription,
                                );
                            } else {
                                //filter out all that are just the same number and where sub.id matches the number.
                                ws._subscribes[event_type] = ws._subscribes[event_type].filter(
                                    (sub: any) => sub !== message.subscription && sub.id !== message.subscription,
                                );
                            }

                            if (!ws._subscribes[event_type].length) {
                                delete ws._subscribes[event_type];
                            }
                        });

                    this._modules.template.removeTemplate(ws, message.subscription);
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
                const subscribeEntitiesResponse: any[] = [
                    { id: message.id, type: 'result', success: true, result: null },
                    { id: message.id, type: 'event', event: { a: {} as Record<string, unknown> } },
                ];
                for (const entity of entityData.entities) {
                    (subscribeEntitiesResponse[1].event.a as Record<string, unknown>)[entity.entity_id] =
                        this._getShortEntity(entity);
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
                    const search: Record<string, string> = {};
                    if (query) {
                        query.split('&').forEach((item: any) => {
                            const parts = item.split('=');
                            search[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1] || '');
                        });
                    }

                    search.signed = this.config.auth !== false ? ws.__auth.access_token : `${NO_TOKEN}_${Date.now()}`;
                    const url = Object.keys(search)
                        .map(attr => `${encodeURIComponent(attr)}=${encodeURIComponent(search[attr])}`)
                        .join('&');
                    this._sendResponse(ws, message.id, { path: `${path}?${url}` });
                } catch (e: any) {
                    this.log.error(e);
                }
            } else if (message.type === 'frontend/get_themes') {
                this._sendResponse(ws, message.id, this._modules.themes.getThemes());
            } else if (message.type === 'auth/current_user') {
                void this._getCurrentUser(ws).then(data => this._sendResponse(ws, message.id, data));
            } else if (this._modules.userData.processMessage(ws, message)) {
                // frontend/(get|set|subscribe)_(user|system)_data handled by the userData module.
            } else if (message.type === 'frontend/get_translations') {
                this.log.debug(`Get translations: ${message.language}`);
                this._sendResponse(ws, message.id, this._getTranslations(message.language));
            } else if (message.type === 'lovelace/info') {
                this._sendResponse(ws, message.id, { resource_mode: 'storage' });
            } else if (message.type === 'lovelace/config') {
                this.log.debug(`get config: ${JSON.stringify(message)}`);
                this._sendResponse(ws, message.id, this._getLayoutConfig(message.url_path));
            } else if (message.type === 'lovelace/config/save') {
                this.log.debug(`save config: ${JSON.stringify(message)}`);
                void this._setLayoutConfig(message.config, message.url_path);
                this._sendResponse(ws, message.id);
            } else if (message.type === 'lovelace/resources') {
                this._sendResponse(ws, message.id, this._ressourceConfig);
            } else if (this._modules.compat.processMessage(ws, message)) {
                // repairs/floors/labels/config_entries/manifest stubs handled by the compat module.
            } else if (message.type === 'camera_thumbnail') {
                this.log.warn(`camera_thumbnail ${message.entity_id} deprecated!!!`);
                try {
                    const data = await this._getImage(message.entity_id, null, null);
                    this._sendResponse(ws, message.id, data);
                } catch (err: any) {
                    this.log.warn(`Error in camera_thumbnail: ${err} - ${err.stack}`);
                    this._sendResponse(ws, message.id);
                }
            } else if (message.type === 'call_service') {
                //{"type":"call_service","domain":"zone","service":"turn_off","service_data":{"entity_id":"zone.home"},"id":18}
                await this._processCall(ws, message);
            } else if (message.type === 'render_template') {
                //{"type":"render_template","template":"The **Markdown** ", ... ,"id":11}
                this._modules.template.processMessage(ws, message);
            } else if (message.type === 'logger/log_info') {
                this._sendResponse(
                    ws,
                    message.id,
                    Object.keys(entityData.services).map(domain => ({ domain, level: 30 })),
                );
            } else if (message.type === 'sensor/numeric_device_classes') {
                //it seems frontend now asks backend for what device_classes are numeric. Ok. Let's use that. ;-)
                this._sendResponse(ws, message.id, { numeric_device_classes: NUMERIC_DEVICE_CLASSES });
            } else if (message.type === 'ping') {
                this._sendResponse(ws, message.id, { type: 'pong' });
            } else if (message.type === 'vacuum/get_segments') {
                this._sendResponse(ws, message.id, { segments: [] });
            } else if (message.type === 'brands/access_token') {
                // Return empty token — stops the 7-retry backoff loop, brand logo URLs simply 404
                this._sendResponse(ws, message.id, { token: '' });
            } else if (message.type === 'labs/subscribe') {
                // Return disabled feature — prevents unhandled rejections on every dialog/panel open
                ws.send(
                    JSON.stringify([
                        { id: message.id, type: 'result', success: true, result: null },
                        {
                            id: message.id,
                            type: 'event',
                            event: {
                                domain: message.domain,
                                preview_feature: message.preview_feature,
                                enabled: false,
                                is_built_in: true,
                            },
                        },
                    ]),
                );
            } else {
                //check modules:
                let result = false;
                for (const mod of Object.values(this._modules) as IModule[]) {
                    result = ((await mod.processMessage?.(ws, message)) ?? false) || result;
                }
                if (!result) {
                    this.log.info(`Unknown request: ${JSON.stringify(message)}`);
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
            //this.log.debug('PRO-debug: ws close');
            ws._subscribes = null;
            this._modules.template.clearWs(ws);
            clearInterval(testTimer);
            testTimer = null;
        });
    }

    /**
     * Saves the successful authentication into ioBroker object database.
     *
     * @param cb callback
     */
    _saveAuth(cb?: () => void) {
        if (this.config.auth !== false) {
            console.log('auth stored.');
            this.adapter.setState('session', JSON.stringify(this._auth_flows), true, cb);
        }
    }

    /**
     * Mark an ioBroker object id as needing an update (entity recreation).
     * Pushes the id into the updatedIds queue which is processed by the update timer.
     *
     * @param id ioBroker object id to mark for update.
     */
    _markForUpdate(id: string): void {
        if (!this._objectData.updatedIds.includes(id)) {
            this._objectData.updatedIds.push(id);
        }
    }

    /**
     * Update entity (by deleting and recreating it)
     *
     * @param id of entity.context.id -> main id / device id.
     * @param idsAutomaticallyProcessed set of ids which were already automatically processed, ids might be added here.
     * @param entitiesNeedsUpdate array of entities that need update, entities might be added here.
     * @returns true if any entity was created, updated, or deleted.
     */
    async _updateById(
        id: string,
        idsAutomaticallyProcessed: Set<string>,
        entitiesNeedsUpdate: any[],
    ): Promise<boolean> {
        const entities = entityData.iobID2entity[id] || [];
        const obj = this._objectData.objects[id];

        if (!obj) {
            // object deleted:
            // we have an entity that is missing its object -> need to delete.
            let deleted = false;
            for (let i = entities.length - 1; i >= 0; i--) {
                // if main object of an entity (or its device root) is deleted, delete entity, too.
                const entity = entities[i];
                if (entity.context.id === id || entity.context.deviceId === id) {
                    entity.unregister();
                    this.log.debug(`Object ${id} deleted, ${entity.entity_id} with deleted, too.`);
                    entities.splice(i, 1);
                    deleted = true;
                }
            }
            return deleted;
        } else {
            // object not deleted, either new or changed.
            // update manual device:
            if (obj.common && obj.common.custom && obj.common.custom[this.adapter.namespace]) {
                this.log.debug(
                    `Processing change in ${id} with manual settings, removing ${entities.length} old entities in order to recreate.`,
                );
                for (const entity of entities) {
                    if (entity.isManual || entity.context.id === id || entity.context.deviceId === id) {
                        entity.unregister();
                    }
                }
                this.log.debug(`Object ${id} changed, required update of manual entity.`);
                const manualEntities = await this._processManualEntity(id);
                for (const entity of manualEntities) {
                    entity.registerInCaches();
                    entitiesNeedsUpdate.push(entity);
                }
                return true;
            }

            // check what type-detector says to this object(s), if we are allowed to process it automatically:
            if (!idsAutomaticallyProcessed.has(id)) {
                // Unregister old entities whose device root (or own main id) is this one,
                // so they don't linger in the caches when the new entity gets a different entity_id.
                // Sub-state object changes (id != device root) leave entities alone — they
                // can't be auto-recreated from a leaf state, and the parent device update
                // path is responsible for full recreation.
                let unregisteredAny = false;
                for (const oldEntity of [...entities]) {
                    if (oldEntity.context.deviceId === id) {
                        oldEntity.unregister();
                        unregisteredAny = true;
                    }
                }
                const newEntities = await this._createOneDevice(id);
                if (entities.length) {
                    for (const entity of entities) {
                        this.log.debug(`Object ${id} changed, updated entity ${entity.entity_id}.`);
                        entitiesNeedsUpdate.push(entity);
                        // make sure we don't run type-detector on any of the child ids of this entity. All processed.
                        for (const id of entity.iobIds) {
                            idsAutomaticallyProcessed.add(id);
                        }
                    }
                    this.log.debug(`Object ${id} did change, got ${entities.length} updated entities.`);
                } else {
                    this.log.debug(`Object ${id} did change, got no updated entities.`);
                }
                idsAutomaticallyProcessed.add(id);
                return unregisteredAny || (newEntities as BaseEntity[]).length > 0;
            }
        }
        return false;
    }

    /**
     * Process object change. Can create / destroy entities.
     *
     * @param id of object
     * @param obj object itself
     * @returns resolves when done.
     */
    async onObjectChange(id: string, obj: any) {
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
                        obj as ioBroker.EnumObject,
                        this._objectData.rooms[id] as ioBroker.EnumObject | undefined,
                    );
                    for (const entity of affectedEntities) {
                        if (entity) {
                            this.log.debug(`${id} changed, ${entity.entity_id} affected.`);
                            // Mark the device root for re-evaluation; context.id may be a state id
                            // (when STATE.getId is set) which would not be re-detected on its own.
                            this._markForUpdate(entity.context.deviceId || entity.context.id);
                        }
                    }
                    for (const id of ids) {
                        this._markForUpdate(id);
                    }
                    utils.getEnumName(obj, this.lang, true);
                    this._objectData.rooms[id] = obj;
                    this.log.debug(`enum ${id} updated.`);
                }
                if (id.startsWith('enum.functions.')) {
                    const { ids, entities: affectedEntities } = utils.findEntitiesFromEnumChange(
                        obj as ioBroker.EnumObject,
                        this._objectData.functions[id] as ioBroker.EnumObject | undefined,
                    );
                    for (const entity of affectedEntities) {
                        if (entity) {
                            this.log.debug(`${id} changed, ${entity.entity_id} affected.`);
                            // Mark the device root for re-evaluation; context.id may be a state id
                            // (when STATE.getId is set) which would not be re-detected on its own.
                            this._markForUpdate(entity.context.deviceId || entity.context.id);
                        }
                    }
                    for (const id of ids) {
                        this._markForUpdate(id);
                    }
                    utils.getEnumName(obj, this.lang, true);
                    this._objectData.functions[id] = obj;
                    this.log.debug(`enum ${id} updated.`);
                }
            }
        } else {
            // Compute parent ids BEFORE removing from objects cache (getParentIDs needs the cache).
            const parentIdsOfDeleted = utils.getParentIDs(id, this._objectData.objects);
            // Also find parent devices via entities registered for this sub-state id.
            for (const entity of entityData.iobID2entity[id] || []) {
                if (entity.context.id !== id && !parentIdsOfDeleted.includes(entity.context.id)) {
                    parentIdsOfDeleted.push(entity.context.id);
                }
            }

            delete this._objectData.objects[id];

            delete this._objectData.rooms[id];

            delete this._objectData.functions[id];
            const foundIndex = this._objectData.ids.indexOf(id);
            if (foundIndex !== -1) {
                this._objectData.ids.splice(foundIndex, 1);
            }
            this.log.debug(`${id} deleted.`);

            // Queue parent device ids for re-detection.
            for (const parentId of parentIdsOfDeleted) {
                this._markForUpdate(parentId);
            }
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
            //store ids which objects did change:
            if (!this._objectData.updatedIds.includes(id)) {
                this._objectData.updatedIds.push(id);
            }
            //also store parents (for updates, objects cache is still intact):
            const parentIds = obj ? utils.getParentIDs(id, this._objectData.objects) : [];
            for (const id of parentIds) {
                if (!this._objectData.updatedIds.includes(id)) {
                    this._objectData.updatedIds.push(id);
                }
            }

            //handle updates after a short time, so that multiple changes get handled together.
            this._updateTimer && clearTimeout(this._updateTimer);
            this._updateTimer = setTimeout(async () => {
                this._updateTimer = null;
                // Drain the queue first so new changes during processing get queued for the next run.
                const idsToProcess = this._objectData.updatedIds.splice(0);
                idsToProcess.sort(); //make sure parents are processed first.
                const needUpdate: any[] = [];
                this.log.debug(`Update timer expired, ${idsToProcess.length} objects to look at.`);
                const idsTypeDetectorProcessed = new Set<string>(); //makes sure we do not process an id twice with type-detector.
                // Need to check:
                // + check if manual -> if so, just update manual entity and be done.
                // + find parent Devices, if necessary
                // + try type-detector on most parent id and check results
                // + if results include changed id, update entity and be done (with this id).
                // + also check if other id's are included in any of the entities and remember that they were automatically processed.
                // most of this is done in _updateById.

                let anyEntityChanged = false;
                for (const id of idsToProcess) {
                    if (!id) {
                        continue;
                    }
                    const changed = await this._updateById(id, idsTypeDetectorProcessed, needUpdate);
                    if (changed) {
                        anyEntityChanged = true;
                    }
                }
                this.log.debug(`Update processing done, ${needUpdate.length} entities need update.`);

                if (needUpdate.length > 0 || anyEntityChanged) {
                    for (const entity of needUpdate) {
                        // read state from iob DB and update entity state / attributes:
                        await this._getStatesForEntity(entity);
                        // update entity in frontend:
                        this.updateEntityInFrontend(entity);
                    }
                    await this._manageSubscribesFromConfig();
                    this._modules.entityRegistry?.handleUpdatedEntities(needUpdate, true);
                    this.log.debug('entitiesUpdated for object changes.');
                    await this.adapter.setStateAsync('info.entitiesUpdated', true, true);
                    this.log.debug('Had changes, updated states and notified entitiesUpdated state.');
                }
            }, this.config.updateTimeout || 5000);
        }

        for (const mod of Object.values(this._modules) as IModule[]) {
            mod.onObjectChange?.(id, obj);
        }
    }

    /**
     * Destroy the webserver and all its connections.
     *
     * @param cb callback when done.
     */
    destroy(cb?: () => void) {
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
        for (const mod of Object.values(this._modules) as IModule[]) {
            void mod.cleanup?.();
        }
    }
}

export = WebServer;
