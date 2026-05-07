"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_node_fs = __toESM(require("node:fs"));
var import_node_crypto = __toESM(require("node:crypto"));
var import_node_path = __toESM(require("node:path"));
var import_adapter_core = require("@iobroker/adapter-core");
var import_autoEntities = require("./modules/autoEntities");
var utils = __toESM(require("./entities/utils"));
var import_baseEntity = require("./entities/baseEntity");
var import_friendly_name = require("./entities/friendly_name");
var import_genericConverter = require("./converters/genericConverter");
var import_converter = require("./converters/converter");
var converterSwitch = __toESM(require("./converters/switch"));
var converterBinarySensors = __toESM(require("./converters/binary_sensor"));
var converterSensors = __toESM(require("./converters/sensor"));
var converterGeoLocation = __toESM(require("./converters/geo_location"));
var converterDatetime = __toESM(require("./converters/input_datetime"));
var converterAlarmCP = __toESM(require("./converters/alarm_control_panel"));
var converterInputSelect = __toESM(require("./converters/input_select"));
var convertFan = __toESM(require("./converters/fan"));
var converterClimate = __toESM(require("./converters/climate"));
var converterLight = __toESM(require("./converters/light"));
var import_lock = require("./converters/lock");
var import_camera = require("./converters/camera");
var import_weather = require("./converters/weather");
var import_cover = require("./converters/cover");
var import_media_player = require("./converters/media_player");
var import_browser_mod = __toESM(require("./modules/browser_mod"));
var import_history = __toESM(require("./modules/history"));
var import_conversation = __toESM(require("./modules/conversation"));
var import_logbook = __toESM(require("./modules/logbook"));
var import_persistentNotifications = __toESM(require("./modules/persistentNotifications"));
var import_todo = __toESM(require("./modules/todo"));
var import_person = __toESM(require("./modules/person"));
var import_statisticsRecorder = __toESM(require("./modules/statisticsRecorder"));
var import_entityRegistry = __toESM(require("./modules/entityRegistry"));
var import_dashboard = __toESM(require("./modules/dashboard"));
var import_deviceRegistry = __toESM(require("./modules/deviceRegistry"));
var import_areaRegistry = __toESM(require("./modules/areaRegistry"));
const WebSocket = require("ws");
const bodyParser = require("body-parser");
const PANELS = require("./panels");
const multer = require("multer");
const mime = require("mime");
const yaml = require("js-yaml");
const axios = require("axios");
const jstz = require("jstimezonedetect");
const entityData = require("../../lib/dataSingleton");
const bindings = require("../../lib/bindings");
const ChannelDetector = require("@iobroker/type-detector").default;
const ignoreIds = [/^system\./, /^script\./];
const TIMEOUT_PASSWORD_ENTER = 18e4;
const TIMEOUT_AUTH_CODE = 1e4;
const ROOT_DIR = "../../hass_frontend";
const VERSION = import_node_fs.default.readFileSync(`${getRootPath()}version.txt`, "utf8").replace(/(\d{4})(\d{2})(\d{2})\.(\d).*/s, "$1.$2.$3");
const NO_TOKEN = "no_token";
function getRootPath() {
  if (ROOT_DIR.match(/^\w:/) || ROOT_DIR.startsWith("/")) {
    return `${ROOT_DIR}/`;
  }
  return import_node_path.default.resolve(`${__dirname}/${ROOT_DIR}`) + import_node_path.default.sep;
}
const generateRandomToken = function(callback) {
  import_node_crypto.default.randomBytes(256, (_ex, buffer) => {
    import_node_crypto.default.randomBytes(32, (ex, secret) => {
      if (ex) {
        return callback("server_error");
      }
      const token = import_node_crypto.default.createHmac("sha256", secret).update(buffer).digest("hex");
      callback(false, token);
    });
  });
};
const staticOptions = {
  maxAge: 2678400 * 1e3
  // 31 days
};
class WebServer {
  adapter;
  config;
  log;
  lang;
  detector;
  words;
  templateStates;
  systemConfig;
  _lovelaceConfig;
  _ressourceConfig;
  _requestableFiles;
  _subscribed;
  _server;
  _app;
  _auth_flows;
  _themes;
  _currentTheme;
  _currentThemeDark;
  _darkMode;
  _objectData;
  _modules;
  _wss;
  _indexHtml;
  _clearInterval;
  _updateTimer;
  /**
   * Constructor of the WebServer class.
   *
   * @param options object with options from the adapter.
   */
  constructor(options) {
    this._lovelaceConfig = null;
    this._ressourceConfig = [];
    this.adapter = options.adapter;
    this.config = this.adapter.config;
    this.log = this.adapter.log;
    this.lang = this.config.language || "en";
    this.detector = new ChannelDetector();
    this.config.ttl = parseInt(this.config.ttl, 10) || 3600;
    this.words = options.words || {};
    entityData.adapter = this.adapter;
    entityData.log = this.adapter.log;
    entityData.words = this.words;
    entityData.server = this;
    this._requestableFiles = [];
    this._subscribed = [];
    this._server = options.server;
    this._app = options.app;
    this._auth_flows = {};
    this.templateStates = {};
    this._themes = {};
    this._currentTheme = this.config.defaultTheme || "default";
    this._currentThemeDark = this.config.defaultThemeDark || "default";
    this._darkMode = false;
    this._objectData = {
      objects: {},
      //id -> object storage
      ids: [],
      //array of object ids.
      rooms: {},
      functions: {},
      roomNames: {},
      //id -> name storage
      funcNames: {},
      updatedIds: [],
      //temporary storage for updated ids
      usedKeys: []
      //temporary storage for used keys (type-detector)
    };
    const person = new import_person.default({ adapter: this.adapter });
    this._modules = {
      browserMod: new import_browser_mod.default({
        adapter: this.adapter,
        objects: this._objectData.objects
      }),
      conversation: new import_conversation.default({
        adapter: this.adapter,
        sendResponse: (ws, id, result) => this._sendResponse(ws, id, result),
        lang: this.lang,
        words: this.words
      }),
      logbook: new import_logbook.default({
        adapter: this.adapter,
        getUsedEntityIDs: () => {
          const entities = [];
          this._flatJSON(this._lovelaceConfig ? this._lovelaceConfig.views : {}, entities);
          return entities;
        }
      }),
      notifications: new import_persistentNotifications.default({
        adapter: this.adapter,
        server: this
      }),
      todo: new import_todo.default({
        adapter: this.adapter,
        entityData,
        server: this,
        getWebsocketServer: () => this._wss
      }),
      person,
      entityRegistry: new import_entityRegistry.default({
        adapter: this.adapter,
        entityData,
        sendResponse: (ws, id, result) => this._sendResponse(ws, id, result),
        sendUpdate: (type, data) => this._sendUpdate(type, data)
      }),
      dashboard: new import_dashboard.default({
        adapter: this.adapter,
        sendResponse: (ws, id, result) => this._sendResponse(ws, id, result),
        sendUpdate: (type) => this._sendUpdate(type)
      }),
      deviceRegistry: new import_deviceRegistry.default({
        adapter: this.adapter,
        entityData,
        sendResponse: (ws, id, result) => this._sendResponse(ws, id, result)
      }),
      areaRegistry: new import_areaRegistry.default({
        adapter: this.adapter,
        rooms: this._objectData.rooms,
        sendResponse: (ws, id, result) => this._sendResponse(ws, id, result),
        sendUpdate: (type) => this._sendUpdate(type)
      }),
      history: new import_history.default({
        adapter: this.adapter,
        entityData,
        personModule: person
      }),
      statisticsRecorder: new import_statisticsRecorder.default({
        adapter: this.adapter,
        server: this,
        log: this.log,
        personModule: person,
        dataSingleton: entityData
      })
    };
    if (this.adapter.config.updateTimeout !== void 0) {
      this.adapter.config.updateTimeout = Math.max(100, Math.min(this.adapter.config.updateTimeout, 3e4));
    }
    const concurrentPromises = [
      this._modules.todo.init(),
      this._modules.person.init(),
      this._modules.entityRegistry.init(),
      this._modules.dashboard.init(),
      this.adapter.getForeignObjectAsync("system.config").then((config) => {
        this.lang = this.config.language || config.common.language;
        entityData.lang = this.lang;
        this.systemConfig = config.common;
        this.systemConfig.ts = config.ts;
        this._updateConstantEntities();
        return this.adapter.getObjectAsync("configuration");
      }).then((config) => {
        if (config && config.native && config.native.title) {
          this._lovelaceConfig = config.native;
        } else {
          this._lovelaceConfig = require("../../lib/defaultConfig");
        }
      }).then(() => this._modules.browserMod.init(this._lovelaceConfig)),
      this._readAllEntities(),
      this._listFiles(),
      this._initThemes()
    ];
    Promise.all(concurrentPromises).then(() => {
      var _a;
      this.adapter.subscribeObjects("configuration");
      this.adapter.subscribeStates("control.*");
      this.adapter.subscribeStates("notifications.*");
      this.adapter.subscribeStates("instances.*");
      this.adapter.subscribeStates("conversation");
      this._init();
      for (const mod of Object.values(this._modules)) {
        (_a = mod.augmentServices) == null ? void 0 : _a.call(mod, entityData.services);
      }
      if (this.config.auth !== false) {
        this._clearInterval = setInterval(() => this.clearAuth(), 6e4);
      }
      this.adapter.setState("info.readyForClients", true, true);
      this.log.debug("Initialization done.");
    }).catch((err) => {
      this.log.error(`Initialization error: ${err}`);
      if (typeof this.adapter.terminate === "function") {
        this.adapter.terminate(import_adapter_core.EXIT_CODES.INVALID_ADAPTER_CONFIG);
      } else {
        process.exit(import_adapter_core.EXIT_CODES.INVALID_ADAPTER_CONFIG);
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
    await this._getManualEntities();
    for (const entity of entityData.entities) {
      if (entity.attributes.entity_picture && !entity.attributes.entity_picture.match(/^data:image\//)) {
        const url = entity.attributes.entity_picture.replace(/^\./, "");
        if (!entityData.entityIconUrls.includes(url)) {
          entityData.entityIconUrls.push(url);
        }
      }
    }
    await this._getAllStates();
    await this._manageSubscribesFromConfig();
    this.log.debug("entitiesUpdated for startup.");
    this.log.debug("entities: init done");
    await this.adapter.setStateAsync("info.entitiesUpdated", true, true);
  }
  /**
   * Remove auth sessions that expired.
   */
  clearAuth() {
    const now = Date.now();
    let changed = false;
    Object.keys(this._auth_flows).forEach((flowId) => {
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
    var _a, _b;
    try {
      const ids = [];
      for (const id of Object.keys(this._objectData.objects)) {
        const obj = this._objectData.objects[id];
        if ((_b = (_a = obj == null ? void 0 : obj.common) == null ? void 0 : _a.custom) == null ? void 0 : _b[this.adapter.namespace]) {
          ids.push(id);
        }
      }
      ids.push(`${this.adapter.namespace}.control.alarm`);
      const created = [];
      for (const id of ids) {
        const entities = await this._processManualEntity(id);
        for (const entity of entities) {
          created.push(entity);
          entity.registerInCaches();
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
   * @param id of ioBroker object
   * @returns manual entity
   */
  async _processManualEntity(id) {
    var _a, _b, _c;
    try {
      const obj = (_a = this._objectData.objects[id]) != null ? _a : await this.adapter.getForeignObjectAsync(id);
      if (!obj) {
        return [];
      }
      if (!this._objectData.objects[id]) {
        this._objectData.objects[id] = obj;
      }
      if (id === `${this.adapter.namespace}.control.alarm`) {
        obj.common.custom = obj.common.custom || {};
        obj.common.custom[this.adapter.namespace] = obj.common.custom[this.adapter.namespace] || {};
        obj.common.custom[this.adapter.namespace].name = obj.common.custom[this.adapter.namespace].name || "defaultAlarm";
        obj.common.custom[this.adapter.namespace].entity = "alarm_control_panel";
        obj.common.custom[this.adapter.namespace].states = {
          state: id,
          arm_state: `${this.adapter.namespace}.control.alarm_arm_state`
        };
      } else if (!((_c = (_b = obj.common) == null ? void 0 : _b.custom) == null ? void 0 : _c[this.adapter.namespace])) {
        return [];
      }
      const custom = obj.common.custom[this.adapter.namespace] || {};
      const entityType = custom.entity || utils.autoDetermineEntityType(obj);
      const entity_id = utils.createEntityNameFromCustom(obj, this.adapter.namespace);
      const entity = new import_baseEntity.BaseEntity(null, null, null, obj, entityType, entity_id);
      if (custom.attr_assumed_state && ["switch", "light", "cover", "climate", "fan", "humidifier", "group", "water_heater"].includes(
        entityType
      )) {
        entity.attributes.assumed_state = true;
      }
      entity.context.STATE = { getId: id, setId: id, attribute: "state" };
      if (obj && obj.common && obj.common.states && ["string", "number"].includes(obj.common.type)) {
        entity.context.STATE.map2lovelace = obj.common.states;
        if (!(obj.common.states instanceof Array)) {
          entity.context.STATE.map2iob = {};
          Object.keys(obj.common.states).forEach(
            (k) => entity.context.STATE.map2iob[obj.common.states[k]] = k
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
            `Please define custom settings on main object ${custom.states.state} and not on ${id}. Entity skipped`
          );
          return [];
        }
        custom.states.state = id;
        for (const stateId of Object.values(custom.states)) {
          if (!this._objectData.objects[stateId]) {
            try {
              this._objectData.objects[stateId] = await this.adapter.getForeignObjectAsync(stateId);
            } catch (e) {
              this.adapter.log.warn(
                `Could not get object ${stateId} for manual entity ${entity_id} please check config in ${id}. Error: ${e}`
              );
            }
          }
        }
        entity.fillFromStates(custom.states);
      }
      for (const key of Object.keys(custom)) {
        if (key.startsWith("attr_")) {
          const attributeName = key.substring("attr_".length);
          entity.attributes[attributeName] = custom[key];
        }
      }
      this.log.debug(`Create manual ${entityType} device: ${entity.entity_id} - ${id}`);
      if (entityType === "light") {
        return converterLight.processManualEntity(id, obj, entity, this._objectData.objects, custom);
      } else if (entityType === "input_datetime") {
        return converterDatetime.processManualEntity(id, obj, entity, this._objectData.objects, custom);
      } else if (entityType === "binary_sensor") {
        return converterBinarySensors.processManualEntity(id, obj, entity, this._objectData.objects, custom);
      } else if (entityType === "sensor") {
        return converterSensors.processManualEntity(id, obj, entity, this._objectData.objects, custom);
      } else if (entityType === "climate") {
        return converterClimate.processManualEntity(id, obj, entity, this._objectData.objects, custom);
      } else if (entityType === "geo_location") {
        return converterGeoLocation.processManualEntity(id, obj, entity, this._objectData.objects, custom);
      } else if (entityType === "camera") {
        entity.context.STATE = { getValue: "on", getId: null, attribute: "state" };
        entity.context.ATTRIBUTES = [{ getId: id, attribute: "url" }];
        entity.attributes.code_format = "number";
        entity.attributes.access_token = import_node_crypto.default.createHmac(
          "sha256",
          (import_node_crypto.default.webcrypto.getRandomValues(new Uint32Array(1))[0] * 1e9).toString()
        ).update(Date.now().toString()).digest("hex");
        entity.attributes.model_name = "Simulated URL";
        entity.attributes.brand = "ioBroker";
        entity.attributes.motion_detection = false;
      } else if (entityType === "alarm_control_panel") {
        return converterAlarmCP.processManualEntity(id, obj, entity, this._objectData.objects, custom);
      } else if (entityType === "input_number") {
        entity.attributes.min = obj.common.min !== void 0 ? obj.common.min : 0;
        entity.attributes.max = obj.common.max !== void 0 ? obj.common.max : 100;
        entity.attributes.step = obj.common.step || 1;
        entity.attributes.mode = entity.attributes.mode || obj.common.custom[this.adapter.namespace].mode || "slider";
        const state = await this.adapter.getForeignStateAsync(id);
        entity.attributes.initial = state ? state.val || 0 : 0;
      } else if (entityType === "input_boolean") {
        const state = await this.adapter.getForeignStateAsync(id);
        entity.attributes.initial = (0, import_genericConverter.iobState2EntityState)(entity, state ? state.val : void 0, "initial");
      } else if (entityType === "input_select") {
        return converterInputSelect.processManualEntity(id, obj, entity, this._objectData.objects, custom);
      } else if (entityType === "fan") {
        return convertFan.processManualEntity(id, obj, entity, this._objectData.objects, custom);
      } else if (entityType === "todo") {
        return this._modules.todo.processManualEntity(id, obj, entity, this._objectData.objects, custom);
      } else if (entityType === "switch") {
        return converterSwitch.processManualEntity(id, obj, entity, this._objectData.objects, custom);
      } else if (entityType === "timer") {
        entity.context.STATE = { getId: null, setId: null, attribute: "state" };
        entity.context.lastValue = null;
        entity.attributes.remaining = 0;
        entity.context.ATTRIBUTES = [
          {
            attribute: "remaining",
            getId: id,
            setId: id,
            getParser: function(entity2, attr, state) {
              state = state || { val: null };
              if (!state.val) {
                entity2.state = "idle";
              } else if (entity2.context.lastValue === null) {
                entity2.state = "active";
              } else if (entity2.context.lastValue === state.val) {
                entity2.state = "paused";
              } else {
                entity2.state = "active";
              }
              entity2.context.lastValue = state.val;
              if (typeof state.val === "string" && state.val.indexOf(":") !== -1) {
                entity2.attributes.remaining = state.val;
              } else {
                state.val = parseInt(state.val, 10);
                const hours = Math.floor(state.val / 3600);
                const minutes = Math.floor(state.val % 3600 / 60);
                const seconds = state.val % 60;
                entity2.attributes.remaining = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
              }
            }
          }
        ];
      }
      entity.addID2entity(id);
      return [entity];
    } catch (e) {
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
  async _processSingleCall(ws, data, entity_id) {
    var _a;
    const user = this._modules.person.getUserIDFromName((_a = ws.__auth) == null ? void 0 : _a.username);
    const entity = entityData.entityId2Entity[entity_id];
    const id = entity.context.STATE.setId;
    if (entity.context.COMMANDS) {
      const command = entity.context.COMMANDS.find((c) => c.service === data.service);
      if (command && command.parseCommand) {
        return command.parseCommand(entity, command, data, user).then((result) => this._sendResponse(ws, data.id, result)).catch((e) => this._sendResponse(ws, data.id, { result: false, error: e.message || e }));
      }
    }
    if (data.service === "toggle") {
      this.log.debug(`toggle ${id}`);
      this.adapter.getForeignState(
        id,
        { user },
        (err, state) => this.adapter.setForeignState(
          id,
          state ? !state.val : true,
          false,
          { user },
          () => this._sendResponse(ws, data.id)
        )
      );
    } else if (data.service === "volume_set") {
      this.log.debug(`volume_set ${id}`);
      this.adapter.setForeignState(
        id,
        Number(data.service_data.value),
        false,
        { user },
        () => this._sendResponse(ws, data.id)
      );
    } else if (data.service === "trigger" || data.service === "turn_on" || data.service === "unlock" || data.service === "press") {
      this.log.debug(`${data.service} ${id}`);
      this.adapter.setForeignState(id, true, false, { user }, () => this._sendResponse(ws, data.id));
    } else if (data.service === "turn_off" || data.service === "lock") {
      this.log.debug(`${data.service} ${id}`);
      this.adapter.setForeignState(id, false, false, { user }, () => this._sendResponse(ws, data.id));
    } else if (data.service === "set_temperature") {
      this.log.debug(`set_temperature ${data.service_data.temperature}`);
      if (data.service_data.temperature !== void 0) {
        if (entity.context.ATTRIBUTES) {
          const attr = entity.context.ATTRIBUTES.find((attr2) => attr2.attribute === "temperature");
          if (attr) {
            return this.adapter.setForeignState(
              attr.setId,
              Number(data.service_data.temperature),
              false,
              { user },
              () => this._sendResponse(ws, data.id)
            );
          }
        }
      }
      this.log.warn(`Cannot find attribute temperature in ${entity_id}`);
      this._sendResponse(ws, data.id);
    } else if (data.service === "set_operation_mode") {
      this.log.debug(`set_operation_mode ${data.service_data.operation_mode}`);
      this.adapter.setForeignState(id, false, false, { user }, () => this._sendResponse(ws, data.id));
    } else if (data.service === "set_page") {
      this.log.debug(`set_page ${JSON.stringify(data.service_data.page)}`);
      if (typeof data.service_data.page === "object") {
        this.adapter.setState(
          "control.data",
          {
            val: data.service_data.page.title,
            ack: true
          },
          () => {
            this.adapter.setState("control.command", {
              val: "changedView",
              ack: true
            });
          }
        );
      }
    } else if (data.service.startsWith("set_") && data.service !== "set_datetime") {
      this.log.debug(`${data.service}: ${id} = ${data.service_data[data.service.substring(4)]}`);
      let val = data.service_data[data.service.substring(4)];
      if (!val && ["datetime"].includes(entity.context.type)) {
        val = data.service_data.datetime;
      }
      if (entity.context.STATE.map2iob) {
        val = Number(entity.context.STATE.map2iob[val]);
        if (!val && val !== 0) {
          val = data.service_data[data.service.substring(4)];
        }
      }
      if (entity.context.stateType === "number") {
        val = Number(val);
      }
      this.adapter.setForeignState(id, val, false, { user }, () => this._sendResponse(ws, data.id));
    } else if (data.service === "volume_mute") {
      this.log.debug(`volume_mute ${id} = ${data.service_data.is_volume_muted}`);
      this.adapter.setForeignState(
        id,
        data.service_data.is_volume_muted,
        false,
        { user },
        () => this._sendResponse(ws, data.id)
      );
    } else if (data.service.startsWith("select_")) {
      this.log.debug(`${data.service}: ${id} = ${data.service_data[data.service.substring(7)]}`);
      let val = data.service_data[data.service.substring(7)];
      if (entity.context.STATE.map2iob) {
        val = Number(entity.context.STATE.map2iob[val]);
        if (!val && val !== 0) {
          val = data.service_data[data.service.substring(7)];
        }
      }
      this.adapter.setForeignState(id, val, false, { user }, () => this._sendResponse(ws, data.id));
    } else if (data.service.endsWith("_say")) {
      this.adapter.setForeignState(id, data.service_data.message, false, { user }, () => {
        this._sendResponse(ws, data.id);
      });
    } else {
      this.log.warn(`Unknown service: ${data.service} (${JSON.stringify(data)})`);
      ws.send(
        JSON.stringify({
          id,
          type: "result",
          success: false,
          error: { code: "not_found", message: "Service not found." }
        })
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
  async _processCall(ws, data) {
    var _a, _b;
    if (!data.service) {
      this.log.warn("Invalid service call. Make sure service looks like domain.service_name");
      return;
    }
    if (data.domain === "system_log" && data.service === "write") {
      this.log.info(`Log from UI ${data.service_data.message}`);
      return this._sendResponse(ws, data.id);
    }
    let handled = false;
    for (const mod of Object.values(this._modules)) {
      handled = ((_b = await ((_a = mod.processServiceCall) == null ? void 0 : _a.call(mod, ws, data))) != null ? _b : false) || handled;
    }
    if (handled) {
      return;
    }
    if (data.target && data.target.entity_id) {
      data.service_data.entity_id = data.service_data.entity_id || data.target.entity_id;
    }
    let ids = [data.service_data.entity_id];
    if (data.service_data.entity_id instanceof Array) {
      ids = data.service_data.entity_id;
    }
    delete data.service_data.entity_id;
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
   * @returns
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
  async _getStatesForEntity(entity) {
    entity.state = entity.state || "unknown";
    if (entity.context.STATE && entity.context.STATE.getId) {
      try {
        const user = this.config.defaultUser;
        const state = await this.adapter.getForeignStateAsync(entity.context.STATE.getId, { user });
        if (state) {
          await this.onStateChange(entity.context.STATE.getId, state);
        } else {
          entity.state = "unknown";
          entity.last_changed = Date.now() / 1e3;
          entity.last_updated = entity.last_changed;
        }
      } catch (e) {
        this.adapter.log.error(`Could not get state ${entity.context.STATE.getId}: ${e} - ${e.stack}`);
      }
    } else if (entity.context.type === "switch") {
      entity.state = "off";
    } else if (entity.context.STATE.getValue !== void 0) {
      entity.state = entity.context.STATE.getValue;
    } else if (entity.context.type === "climate") {
      entity.state = "on";
    }
    if (entity.context.ATTRIBUTES) {
      const ids = entity.context.ATTRIBUTES.map((entry) => entry.getId || "");
      try {
        const states = await this.adapter.getForeignStatesAsync(ids);
        if (ids && ids.length) {
          entity.attributes = entity.attributes || {};
          ids.forEach((id, i) => {
            const attribute = entity.context.ATTRIBUTES[i].attribute;
            if (attribute === "remaining" && entity.context.type === "timer") {
              if (!states[id].val) {
                entity.state = "idle";
              } else {
                entity.state = "active";
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
  }
  /**
   * Handle a state change.
   *
   * @param id id of the state
   * @param state new state object
   * @param forceUpdate force entity.state update of all clients
   * @returns resolves when done.
   */
  async onStateChange(id, state, forceUpdate = false) {
    var _a;
    if (state) {
      if (id === `${this.adapter.namespace}.control.theme` || id === `${this.adapter.namespace}.control.themeDark`) {
        const dark = id.includes("Dark");
        if (this._themes[state.val] || state.val === "default") {
          this[dark ? "_currentThemeDark" : "_currentTheme"] = state.val;
          this._sendUpdate("themes_updated");
        }
      } else if (id === `${this.adapter.namespace}.control.darkMode`) {
        if (this._darkMode !== state.val) {
          this._darkMode = !!state.val;
          this._sendUpdate("themes_updated");
        }
      }
    }
    const changedStates = {};
    this._wss && this._wss.clients.forEach((client) => {
      if (client.__templates && client.readyState === WebSocket.OPEN) {
        client.__templates.forEach((t) => {
          if (t.ids.includes(id)) {
            const _state = state || { val: null };
            if (changedStates[id] || this.templateStates[id] && this.templateStates[id].val !== _state.val) {
              this.templateStates[id] = _state;
              changedStates[id] = true;
              const event = {
                id: t.id,
                type: "event",
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
    const entities = entityData.iobID2entity[id];
    if (entities) {
      entities.forEach((entity) => {
        let updated = false;
        if (state) {
          if (entity.context.STATE.getId === id) {
            updated = true;
            entity.updateTimestamp(state, true);
            if (entity.context.STATE.getParser) {
              entity.context.STATE.getParser(entity, "state", state);
            } else {
              entity.state = (0, import_genericConverter.iobState2EntityState)(entity, state.val);
            }
          }
          if (entity.context.ATTRIBUTES) {
            const attributes = entity.context.ATTRIBUTES.filter((e) => e.getId === id);
            for (const attr of attributes) {
              updated = true;
              entity.updateTimestamp(state, false);
              if (attr.getParser) {
                attr.getParser(entity, attr, state);
              } else {
                utils.setJsonAttribute(
                  entity.attributes,
                  attr.attribute,
                  (0, import_genericConverter.iobState2EntityState)(entity, state.val, attr.attribute)
                );
              }
            }
          }
        }
        if (!updated && !forceUpdate) {
          return;
        }
        this.updateEntityInFrontend(entity, state);
      });
    }
    for (const mod of Object.values(this._modules)) {
      (_a = mod.onStateChange) == null ? void 0 : _a.call(mod, id, state, this._wss);
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
      type: "event",
      event: {
        a: {},
        event_type: "subscribe_entities",
        origin: "LOCAL",
        time_fired: state ? state.ts : entity.lu || entity.last_updated || Date.now() / 1e3
      }
    };
    t.event.a[entity.entity_id] = this._getShortEntity(entity);
    this._wss && this._wss.clients.forEach((ws) => {
      if (ws._subscribes && ws._subscribes.subscribe_entities) {
        ws._subscribes.subscribe_entities.forEach((id) => {
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
  async _processIobState(ids, objects, id, room, func, existingEntities) {
    if (!id) {
      return;
    }
    if (!objects[id]) {
      return;
    }
    const friendlyName = utils.getSmartName(objects, id, this.lang);
    if (!friendlyName && !room && !func) {
      return;
    }
    try {
      const options = {
        objects,
        id,
        _keysOptional: ids,
        _usedIdsOptional: this._objectData.usedKeys
      };
      delete this.detector.cache[id];
      const controls = this.detector.detect(options);
      if (controls) {
        import_converter.Converter.convertAll(controls, {
          id,
          friendlyName,
          room,
          func,
          objects,
          existingEntities,
          adapter: this,
          entityRegistry: this._modules.entityRegistry
        });
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
    let entityHome = entityData.entityId2Entity["zone.home"];
    if (!entityHome) {
      entityHome = {
        entity_id: "zone.home",
        state: "zoning",
        attributes: {
          hidden: true,
          radius: 10,
          friendly_name: "Home",
          icon: "mdi:home"
        },
        context: {
          id: "system.config",
          // not sure this makes a lot of sense. But prevents crash in UI.
          STATE: {},
          //prevent warning on getting history.
          type: "zone"
        }
      };
      entityData.entities.push(entityHome);
      entityData.entityId2Entity[entityHome.entity_id] = entityHome;
    }
    entityHome.attributes.latitude = parseFloat(this.systemConfig.latitude);
    entityHome.attributes.longitude = parseFloat(this.systemConfig.longitude);
    entityHome.last_changed = (this.systemConfig.ts || Date.now()) / 1e3;
    entityHome.last_updated = (this.systemConfig.ts || Date.now()) / 1e3;
    this._modules.entityRegistry.handleUpdatedEntities([entityHome], false);
  }
  /**
   * Create one entity from type-detector
   *
   * @param id of the main object (i.e., device)
   * @returns array of created entities if any
   */
  async _createOneDevice(id) {
    if (this.adapter.config.aliasOnly) {
      if (!id.startsWith("alias.0.")) {
        this.log.debug(
          `Object ${id} changed, update of automatic created entities not relevant for us, because out of alias.`
        );
        return [];
      }
    }
    const foundRoom = utils.findEnumForId(Object.values(this._objectData.rooms), id);
    const foundFunc = utils.findEnumForId(Object.values(this._objectData.functions), id);
    if (foundRoom && foundFunc) {
      if (this._objectData.ids.length !== Object.keys(this._objectData.objects).length) {
        this._objectData.ids = Object.keys(this._objectData.objects);
        this._objectData.ids.sort();
      }
      const entities = [];
      this.log.debug("Starting processIobState", foundRoom._id, foundFunc._id);
      await this._processIobState(
        this._objectData.ids,
        this._objectData.objects,
        id,
        foundRoom,
        foundFunc,
        entities
      );
      this._objectData.usedKeys = [];
      this.log.debug(`Done processIobState, got ${entities.length} new entities.`);
      for (const entity of entities) {
        entity.unregister();
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
    const result = [];
    try {
      await this._readObjects();
      if (this._objectData.ids.length !== Object.keys(this._objectData.objects).length) {
        this._objectData.ids = Object.keys(this._objectData.objects);
        this._objectData.ids.sort();
      }
      for (const func of Object.values(this._objectData.functions)) {
        if (!func.common || !func.common.members || typeof func.common.members !== "object" || !func.common.members.length) {
          continue;
        }
        for (const id of func.common.members) {
          for (const room of Object.values(this._objectData.rooms)) {
            if (!room.common || !room.common.members || typeof func.common.members !== "object" || !room.common.members.length) {
              continue;
            }
            const pos = room.common.members.indexOf(id);
            if (pos !== -1) {
              await this._processIobState(
                this._objectData.ids,
                this._objectData.objects,
                id,
                room,
                func,
                result
              );
            }
          }
        }
      }
      this._objectData.usedKeys = [];
    } catch (e) {
      this.adapter.log.error(`Could not create auto entities: ${e.stack}`);
    }
    result.forEach(
      (entity) => {
        var _a, _b;
        return this.adapter.log.debug(`AUTO Device detected: ${(_a = entity.context) == null ? void 0 : _a.id} => ${(_b = entity.context) == null ? void 0 : _b.type}`);
      }
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
        const params = {};
        if (this.adapter.config.aliasOnly) {
          params.startkey = "alias.0.";
          params.endkey = "alias.0.\u9999";
        }
        const _states = await this.adapter.getObjectViewAsync("system", "state", params);
        const _channels = await this.adapter.getObjectViewAsync("system", "channel", params);
        const _devices = await this.adapter.getObjectViewAsync("system", "device", params);
        const _folders = await this.adapter.getObjectViewAsync("system", "folder", {});
        const _enums = await this.adapter.getObjectViewAsync("system", "enum", {});
        if (_devices && _devices.rows) {
          for (let i = 0; i < _devices.rows.length; i++) {
            if (_devices.rows[i].value && _devices.rows[i].value._id && !ignoreIds.find((reg) => reg.test(_devices.rows[i].value._id))) {
              objects[_devices.rows[i].value._id] = _devices.rows[i].value;
            }
          }
        }
        if (_channels && _channels.rows) {
          for (let i = 0; i < _channels.rows.length; i++) {
            if (_channels.rows[i].value && _channels.rows[i].value._id && !ignoreIds.find((reg) => reg.test(_channels.rows[i].value._id))) {
              objects[_channels.rows[i].value._id] = _channels.rows[i].value;
            }
          }
        }
        if (_states && _states.rows) {
          for (let i = 0; i < _states.rows.length; i++) {
            if (_states.rows[i].value && _states.rows[i].value._id && !ignoreIds.find((reg) => reg.test(_states.rows[i].value._id))) {
              objects[_states.rows[i].value._id] = _states.rows[i].value;
            }
          }
        }
        if (_folders && _folders.rows) {
          for (let i = 0; i < _folders.rows.length; i++) {
            if (_folders.rows[i].value && _folders.rows[i].value._id && !ignoreIds.find((reg) => reg.test(_folders.rows[i].value._id))) {
              objects[_folders.rows[i].value._id] = _folders.rows[i].value;
            }
          }
        }
        if (_enums && _enums.rows) {
          for (let i = 0; i < _enums.rows.length; i++) {
            if (_enums.rows[i].value && _enums.rows[i].value._id) {
              objects[_enums.rows[i].value._id] = _enums.rows[i].value;
              if (_enums.rows[i].value._id.startsWith("enum.rooms.")) {
                this._objectData.rooms[_enums.rows[i].value._id] = _enums.rows[i].value;
              }
              if (_enums.rows[i].value._id.startsWith("enum.functions.")) {
                this._objectData.functions[_enums.rows[i].value._id] = _enums.rows[i].value;
              }
            }
          }
        }
      } catch (e) {
        this.adapter.log.error(
          `Failed to get states / channels / devices / enums, entity generation won't work: ${e.toString()} - ${e.stack}`
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
      const staticCards = ["browser_mod.js"];
      for (const file of staticCards) {
        this.log.debug(`Add static card: ${file} as ${"js"}`);
        this._ressourceConfig.push({
          type: "module",
          url: `/cards/_static_${file}`
        });
      }
      const list = await this.adapter.readDirAsync(this.adapter.namespace, "/cards/");
      if (list.length) {
        for (const file of list) {
          if (!file.isDir) {
            const pos = file.file.lastIndexOf(".");
            const type = file.file.substring(pos + 1).toLowerCase();
            if (type === "js") {
              this.log.debug(`Add custom cards: ${file.file} as ${type}`);
              this._ressourceConfig.push({
                type: type === "js" ? "module" : type,
                url: `/cards/${file.file}`
              });
            } else if (["css", "html"].includes(type)) {
              this.log.debug(`Add custom font/css/html: ${file.file} as ${type}`);
              this._ressourceConfig.push({
                type,
                url: `/cards/${file.file}`
              });
            }
          }
        }
      }
    } catch (err) {
      if (err.message !== "Not exists") {
        this.log.warn(`Could not load custom cards: ${err}`);
      }
    }
    this.log.debug("files: init done");
  }
  /**
   * Read enitiy from frontend configuration.
   *
   * @param obj frontend configuration
   * @param entities array to store entities
   */
  _flatJSON(obj, entities) {
    for (const key of Object.keys(obj)) {
      if (key === "type" && obj[key] === "custom:auto-entities") {
        (0, import_autoEntities.handleAutoEntitiesCard)(obj, entities, entityData.entities);
      }
      if (obj[key] instanceof Object) {
        if (obj[key] instanceof Array && key === "entities" && typeof obj[key][0] === "string") {
          for (const entity of obj[key]) {
            entities.indexOf(entity) === -1 && entities.push(entity);
          }
        } else {
          this._flatJSON(obj[key], entities);
        }
      } else {
        if (key === "entity") {
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
    const entities = [];
    const promises = [];
    if (this._lovelaceConfig.views) {
      this._flatJSON(this._lovelaceConfig.views, entities);
      this._modules.browserMod.handeUpdatedConfig(this._lovelaceConfig);
    }
    let ids = [];
    entities.forEach((entityId) => {
      const entity = entityData.entityId2Entity[entityId];
      if (!entity) {
        return;
      }
      if (entity.context.STATE && entity.context.STATE.getId && ids.indexOf(entity.context.STATE.getId) === -1) {
        ids.push(entity.context.STATE.getId);
      }
      if (entity.context.ATTRIBUTES) {
        entity.context.ATTRIBUTES.forEach((attr) => {
          if (attr.getId && ids.indexOf(attr.getId) === -1) {
            ids.push(attr.getId);
          }
        });
      }
    });
    this._wss && this._wss.clients.forEach(
      (client) => client.__templates && client.__templates.forEach((t) => ids = ids.concat(t.ids))
    );
    const deleted = this._subscribed.filter((id) => ids.indexOf(id) === -1);
    deleted.forEach((id) => {
      this.log.debug(`IoB UnSubscribe on ${id}`);
      this.adapter.unsubscribeForeignStates(id);
      const pos = this._subscribed.indexOf(id);
      this._subscribed.splice(pos, 1);
    });
    ids.forEach((id) => {
      if (this._subscribed.indexOf(id) === -1) {
        this._subscribed.push(id);
        promises.push(this.adapter.subscribeForeignStatesAsync(id));
        this.log.debug(`IoB Subscribe on ${id}`);
      }
    });
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
    const text = import_node_fs.default.readFileSync(`${getRootPath()}index.html`).toString("utf-8");
    const lines = text.split("\n");
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
        nLines.push(import_node_fs.default.readFileSync(`${__dirname}/../../assets/style.css`).toString("utf-8"));
        continue;
      } else if (lines[i].trim().match(/<\/body>/)) {
        const hideScript = [];
        if (this.config.auth === false) {
          hideScript.push('window.hassNoAuth = "NO_AUTH";');
          hideScript.push("window.__tokenCache = {tokens: undefined, writeEnabled: false};");
        }
        nLines.push(`<script>
${hideScript.join("\n")}
</script>`);
      }
      if (template) {
        continue;
      }
      nLines.push(lines[i]);
    }
    this._indexHtml = nLines.join("\n");
    this._indexHtml = this._indexHtml.replace(/{{ no_auth }}/g, "1");
    this._indexHtml = this._indexHtml.replace(/{{ use_oauth }}/g, "0");
    this._indexHtml = this._indexHtml.replace(/{{ theme_color }}/g, this._renderManifest().theme_color);
    this._indexHtml = this._indexHtml.replace(/#THEMEC/g, this._renderManifest().theme_color);
    return this._indexHtml;
  }
  /**
   * Creates manifest object based on language.
   *
   * @returns manifest object.
   */
  _renderManifest() {
    let lang = "en-US";
    if (this.lang === "ru") {
      lang = "ru-RU";
    } else if (this.lang === "de") {
      lang = "de-DE";
    }
    return {
      background_color: "#FFFFFF",
      description: "Open-source home automation platform running on Node.js.",
      dir: "ltr",
      display: "standalone",
      icons: [
        {
          sizes: "192x192",
          src: "/static/icons/favicon-192x192.png",
          type: "image/png"
        },
        {
          sizes: "384x384",
          src: "/static/icons/favicon-384x384.png",
          type: "image/png"
        },
        {
          sizes: "512x512",
          src: "/static/icons/favicon-512x512.png",
          type: "image/png"
        },
        {
          sizes: "1024x1024",
          src: "/static/icons/favicon-1024x1024.png",
          type: "image/png"
        }
      ],
      lang,
      name: "ioBroker",
      short_name: "IoB",
      start_url: "/?homescreen=1",
      theme_color: "#03A9F4"
    };
  }
  /**
   * Rendes the authorize page.
   *
   * @returns authorize page html
   */
  _renderAuthorize() {
    let html = import_node_fs.default.readFileSync(`${getRootPath()}authorize.html`).toString("utf-8");
    html = html.replace(/Home Assistant/g, "ioBroker");
    return html;
  }
  /**
   * Returns lovelace / HASS config for the frontent.
   *
   * @returns config
   */
  _getConfig() {
    const tzone = jstz.determine().name();
    const configObj = {
      latitude: parseFloat(this.systemConfig.latitude),
      longitude: parseFloat(this.systemConfig.longitude),
      elevation: 0,
      unit_system: {
        length: "km",
        accumulated_precipitation: "mm",
        mass: "g",
        pressure: "mmHg",
        temperature: this.systemConfig.tempUnit || "\xB0C",
        volume: "L",
        wind_speed: "km/h"
      },
      location_name: "Home",
      time_zone: tzone,
      components: [
        //TODO: experiment with notify.html5.
        "lovelace",
        "conversation",
        "todo",
        "energy",
        "notify.html5",
        "logbook"
      ],
      // example: -> seems to be much more complex. hm.
      // ["default_config", "input_number", "device_automation", "homeassistant_alerts", "api", "script", "trace", "image_upload", "light", "stream", "application_credentials", "tts.google_translate", "number", "network", "switch.dlink", "yamaha_musiccast", "zone", "ssdp", "dhcp", "radio_browser", "websocket_api", "sensor.energy", "scene.homeassistant", "auth", "sun", "switch", "analytics", "select", "cloud", "frontend", "logger", "my", "switch_as_x", "lovelace", "media_player", "mobile_app", "person", "backup", "intent", "input_select", "dlink", "hardware", "repairs", "webhook", "notify.mobile_app", "input_boolean", "tts", "weather.met", "sensor.ondilo_ico", "switch.yamaha_musiccast", "scene", "file_upload", "sensor.sun", "input_datetime", "light.switch_as_x", "met", "homeassistant", "stt", "map", "timer", "automation", "search", "http", "persistent_notification", "logbook", "system_log", "accuweather", "input_text", "number.yamaha_musiccast", "media_player.yamaha_musiccast", "sensor", "ondilo_ico", "conversation", "energy", "input_button", "bluetooth", "sensor.accuweather", "blueprint", "schedule", "tag", "system_health", "zeroconf", "weather", "recorder", "assist_pipeline", "onboarding", "counter", "notify", "diagnostics", "select.yamaha_musiccast", "history", "media_source", "config", "weather.accuweather", "usb"],
      version: VERSION,
      config_source: "storage",
      safe_mode: false,
      state: "RUNNING",
      external_url: null,
      // hm.. what happens if we fill this?
      internal_url: null,
      currency: this.systemConfig.currency || "EUR",
      country: this.systemConfig.country,
      language: this.lang
    };
    if (this.adapter.config.history) {
      configObj.components.push("history");
    }
    const componentsWithIcons = require("../../lib/componentsWithIcons.json");
    configObj.components.push(...componentsWithIcons);
    return configObj;
  }
  /**
   * Returns themes and the ones currently selected in config / object.
   *
   * @returns themes
   */
  _getThemes() {
    return {
      themes: this._themes,
      default_theme: this._currentTheme || this.config.defaultTheme || "default",
      default_dark_theme: this._currentThemeDark || this.config.defaultThemeDark || "default",
      darkMode: this._darkMode
    };
  }
  /**
   * Somehow this seem to just be the entities?
   *
   * @returns entity array.
   */
  getHassStates() {
    return entityData.entities;
  }
  /**
   * Frontend requested a card. Read cards from the file system and send them.
   *
   * @param req request with url.
   * @param res response to use to send the result with.
   * @returns resolve when done.
   */
  async onCards(req, res) {
    let file = req.url.replace("hacsfiles", "cards");
    file = file.replace("/cards/_static_", "/lovelace/static_cards/");
    const pos = file.indexOf("?");
    if (pos !== -1) {
      file = file.substring(0, pos);
    }
    try {
      const user = this._modules.person.getUserIDFromName(req._user);
      let data;
      if (file.startsWith("/lovelace/")) {
        file = file.replace("/lovelace/", "");
        data = await import_node_fs.default.promises.readFile(getRootPath() + file, "utf-8");
      } else {
        data = (await this.adapter.readFileAsync(this.adapter.namespace, file, { user })).file;
      }
      const pos2 = file.lastIndexOf(".");
      res.setHeader(
        "content-type",
        (mime.getType || mime.lookup).call(data.mimeType, file.substring(pos2 + 1).toLowerCase())
      );
      res.setHeader("Cache-Control", `public, max-age=${staticOptions.maxAge}`);
      res.send(data);
    } catch (err) {
      this.log.warn(`Could not read card ${file}: ${err}`);
      res.status(404).send("File not found");
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
    console.log(`[Auth] ${JSON.stringify(req.body)}`);
    if (req.body.action === "revoke") {
      const flowId = Object.keys(this._auth_flows).find(
        (flowId2) => this._auth_flows[flowId2].refresh_token === req.body.refresh_token
      );
      if (flowId) {
        delete this._auth_flows[flowId];
        res.status(200).json({ result: "revoked" });
      } else {
        res.status(404).json({ result: "not exists" });
      }
    } else if (req.body.grant_type === "authorization_code") {
      if (this.config.auth === false && req.body.code === "NO_AUTH") {
        res.json({
          access_token: NO_TOKEN,
          expires_in: Math.round(36e8),
          refresh_token: NO_TOKEN,
          token_type: "Bearer"
        });
        return;
      }
      const flowId = Object.keys(this._auth_flows).find(
        (flowId2) => this._auth_flows[flowId2].auth_code === req.body.code && now - this._auth_flows[flowId2].ts < TIMEOUT_AUTH_CODE
      );
      if (!flowId) {
        res.status(200).json({ abort: "login_expired" });
      } else {
        generateRandomToken((_err, access_token) => {
          generateRandomToken((_err2, refresh_token) => {
            console.log(`generate new access token ${JSON.stringify(req.body)}`);
            const flow = this._auth_flows[flowId];
            flow.access_token = access_token;
            flow.refresh_token = refresh_token;
            flow.auth_ttl = this.config.ttl * 1e3;
            flow.ts = now;
            res.json({
              access_token: flow.access_token,
              expires_in: Math.round(flow.auth_ttl / 1e3),
              refresh_token: flow.refresh_token,
              token_type: "Bearer"
            });
            this._saveAuth();
          });
        });
      }
    } else if (req.body.grant_type === "refresh_token") {
      const flowId = Object.keys(this._auth_flows).find(
        (flowId2) => this._auth_flows[flowId2].refresh_token === req.body.refresh_token && now - this._auth_flows[flowId2].ts < this._auth_flows[flowId2].auth_ttl
      );
      if (!flowId) {
        res.status(200).json({ errors: { abort: "login_expired" } });
      } else {
        generateRandomToken((_err, access_token) => {
          generateRandomToken((_err2, refresh_token) => {
            console.log(`generate access token${JSON.stringify(req.body)}`);
            const flow = this._auth_flows[flowId];
            flow.access_token = access_token;
            flow.refresh_token = refresh_token;
            flow.auth_ttl = this.config.ttl * 1e3;
            flow.ts = now;
            res.json({
              access_token: flow.access_token,
              expires_in: Math.round(flow.auth_ttl / 1e3),
              refresh_token: flow.refresh_token,
              token_type: "Bearer"
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
   * @returns resolves when done.
   */
  async _initThemes() {
    try {
      this._themes = yaml.safeLoad(this.config.themes || "") || {};
    } catch (depError) {
      if (depError.message.includes("yaml.safeLoad") && depError.message.includes("removed")) {
        this._themes = yaml.load(this.config.themes || "") || {};
      } else {
        this.log.error(`Cannot parse themes: ${depError}`);
        this._themes = {};
      }
    }
    const states = { default: "default" };
    for (const themeName of Object.keys(this._themes)) {
      states[themeName] = themeName;
    }
    const themeState = await this.adapter.getObjectAsync(`${this.adapter.namespace}.control.theme`);
    if (themeState && themeState.common) {
      themeState.common.states = states;
      await this.adapter.setObject(`${this.adapter.namespace}.control.theme`, themeState);
    } else {
      this.log.warn(`State ${this.adapter.namespace}.control.theme missing`);
    }
    const themeDarkState = await this.adapter.getObjectAsync(`${this.adapter.namespace}.control.themeDark`);
    if (themeDarkState && themeDarkState.common) {
      themeDarkState.common.states = states;
      await this.adapter.setObject(`${this.adapter.namespace}.control.themeDark`, themeDarkState);
    } else {
      this.log.warn(`State ${this.adapter.namespace}.control.themeDark missing`);
    }
    const state = await this.adapter.getStateAsync(`${this.adapter.namespace}.control.theme`);
    if (state && (this._themes[state.val] || state.val === "default")) {
      this._currentTheme = state.val;
    } else {
      this._currentTheme = this.config.defaultTheme || "default";
      await this.adapter.setStateAsync(`${this.adapter.namespace}.control.theme`, this._currentTheme, true);
    }
    const darkSate = await this.adapter.getStateAsync(`${this.adapter.namespace}.control.themeDark`);
    if (darkSate && (this._themes[darkSate.val] || darkSate.val === "default")) {
      this._currentThemeDark = darkSate.val;
    } else {
      this._currentThemeDark = this.config.defaultThemeDark || "default";
      await this.adapter.setStateAsync(
        `${this.adapter.namespace}.control.themeDark`,
        this._currentThemeDark,
        true
      );
    }
    const darkModeState = await this.adapter.getStateAsync(`${this.adapter.namespace}.control.darkMode`);
    if (darkModeState) {
      this._darkMode = !!darkModeState.val;
    }
    this.log.debug("themes: init done");
  }
  /**
   * Send a file requested from frontend.
   *
   * @param req request with url
   * @param res response to send the file with
   * @returns resolves when done.
   */
  async _sendFile(req, res) {
    let url = req.url;
    url = url.split("/");
    url.shift();
    const id = url.shift();
    url = url.join("/");
    const pos = url.indexOf("?");
    if (pos !== -1) {
      url = url.substring(0, pos);
    }
    this.log.debug(`Trying to send file ${url} for ${id}`);
    try {
      const user = this._modules.person.getUserIDFromName(req._user);
      const image = await this.adapter.readFileAsync(id, url, { user });
      if (image.file === null || image.file === void 0) {
        this.log.error(`File ${url} seems to be empty?`);
        res.contentType("text/html");
        res.status(404).send(`File ${url} not found: file empty`);
      } else {
        image.mimeType = image.mimeType || (mime.getType || mime.lookup).call(image.mimeType, url) || "text/javascript";
        res.contentType(image.mimeType);
        res.setHeader("Cache-Control", `public, max-age=${staticOptions.maxAge}`);
        res.status(200).send(image.file);
      }
    } catch (err) {
      res.contentType("text/html");
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
   * @param flowId the flow id
   * @returns the flow
   */
  _getAuthFlow(flowId) {
    return {
      data_schema: [
        { name: "username", type: "string", required: true },
        { name: "password", type: "string", required: true }
      ],
      description_placeholders: null,
      errors: {},
      flow_id: flowId,
      handler: ["iobroker", null],
      last_step: null,
      step_id: "init",
      type: "form"
    };
  }
  /**
   * Initialize the webserver (i.e., setup routes and stuff)
   */
  _init() {
    const upload = multer();
    this.adapter.subscribeForeignObjects("*");
    this._app.use(bodyParser.json());
    this._app.use(bodyParser.urlencoded({ extended: false }));
    this._app.get("/auth/authorize", (req, res) => {
      this.log.debug("PRO-debug: auth/authorize - started.");
      res.send(this._renderAuthorize());
    });
    this._app.use("/auth/providers", (req, res) => {
      res.json({
        providers: [
          {
            id: null,
            name: "ioBroker Local",
            type: "iobroker",
            users: this.config.showUsersOnLoginScreen ? this._modules.person.getShorList() : void 0
          }
        ]
      });
    });
    this._app.post("/auth/login_flow", (req, res) => {
      console.log(`/auth/login_flow${JSON.stringify(req.query)}${JSON.stringify(req.body)}`);
      this.log.debug("PRO-debug: /auth/login_flow");
      generateRandomToken((_err, token) => {
        this._auth_flows[token] = { ts: Date.now() };
        res.json(this._getAuthFlow(token));
      });
    });
    this._app.delete("/auth/login_flow/:id", (req, res) => {
      delete this._auth_flows[req.params.id];
      res.status(200).json({ message: "Flow aborted" });
    });
    this._app.post("/auth/login_flow/:id", (req, res) => {
      if (this.config.auth === false) {
        res.status(200).json({
          description: null,
          description_placeholders: null,
          flow_id: req.params.id,
          handler: ["iobroker", null],
          version: 1,
          result: "NO_AUTH",
          title: "ioBroker Local",
          type: "create_entry"
        });
        return;
      }
      if (!this._auth_flows[req.params.id] || Date.now() - this._auth_flows[req.params.id].ts > TIMEOUT_PASSWORD_ENTER) {
        res.status(200).json({ abort: { reason: "login_expired" } });
        return;
      }
      let s = "";
      req.on("data", (d) => s += d.toString());
      req.on("end", () => {
        try {
          s = JSON.parse(s);
        } catch (e) {
          this.log.warn(`Cannot parse with data: ${s} - ${e} - ${e.stack}`);
        }
        console.log(`/auth/login_flow/:id${JSON.stringify(req.query)}${JSON.stringify(req.params)}`);
        this.adapter.checkPassword(s.username, s.password, (result) => {
          const ourResult = this._getAuthFlow(req.params.id);
          if (result) {
            generateRandomToken((_err, auth_code) => {
              this._auth_flows[req.params.id].auth_code = auth_code;
              this._auth_flows[req.params.id].client_id = s.client_id;
              this._auth_flows[req.params.id].username = s.username;
              this._auth_flows[req.params.id].ts = Date.now();
              ourResult.result = auth_code;
              ourResult.title = "ioBroker Local";
              ourResult.type = "create_entry";
              this._saveAuth();
              res.status(200).json(ourResult);
            });
          } else {
            ourResult.errors = { base: "invalid_auth" };
            res.status(200).json(ourResult);
          }
        });
      });
    });
    const cpUpload = upload.fields([
      { name: "client_id", maxCount: 1 },
      { name: "client_secret", maxCount: 1 },
      { name: "code", maxCount: 1 },
      { name: "refresh_token", maxCount: 1 },
      { code: "grant_type", maxCount: 1 }
    ]);
    this._app.post("/auth/token", cpUpload, (req, res) => this.onAuth(req, res));
    const pagesWithAuth = [/^\/adapter\//, /^\/state\//, /^\/api\/history\//, /^\/api\/calendars\//];
    this._app.use((req, res, next) => {
      if (req.url.includes("authorize.html")) {
        this.log.debug("authorize.html");
        res.send(this._renderAuthorize());
      } else {
        if (this.config.auth !== false) {
          if (pagesWithAuth.some((reg) => reg.test(req.url)) && !entityData.entityIconUrls.includes(req.url)) {
            let access_token = req.headers ? (req.headers.authorization || req.headers.Authorization || "").substring(7) : "";
            access_token = access_token || req.query.token;
            if (!access_token) {
              this.log.warn("Auth token not found! Close connection.");
              res.status(200).json({ abort: { reason: "login_expired" } });
              return;
            } else {
              const now = Date.now();
              const flowId = Object.keys(this._auth_flows).find(
                (_flowId) => this._auth_flows[_flowId].access_token === access_token && now - this._auth_flows[_flowId].ts < this._auth_flows[_flowId].auth_ttl
              );
              if (!flowId) {
                this.log.warn("Auth token is expired!");
                res.status(200).json({ abort: { reason: "login_expired" } });
                return;
              } else {
                req._user = this._auth_flows[flowId].username;
              }
            }
          }
        }
        req._user = req._user || this.config.defaultUser;
        next();
      }
    });
    this._app.use(async (req, res, next) => {
      if (this._requestableFiles.includes(req.url)) {
        if (!req._user) {
          req._user = this.config.defaultUser;
        }
        await this._sendFile(req, res);
      } else {
        next();
      }
    });
    this._app.use(async (req, res, next) => {
      if (req.url.endsWith("/")) {
        res.setHeader("Cache-Control", `public, max-age=${staticOptions.maxAge}`);
        res.send(this._renderIndex());
      } else if (req.url.endsWith("manifest.json")) {
        res.setHeader("Cache-Control", `public, max-age=${staticOptions.maxAge}`);
        res.send(this._renderManifest());
      } else if (req.url.includes("/cards/") || req.url.includes("/hacsfiles/") || req.url.includes("/local/custom_ui/")) {
        req.url = req.url.replace(/.*\/cards\//g, "/cards/");
        req.url = req.url.replace(/.*\/hacsfiles\//g, "/cards/");
        req.url = req.url.replace(/.*\/local\/custom_ui\//g, "/cards/");
        await this.onCards(req, res);
      } else if (req.url.includes("/frontend_latest/")) {
        const filePath = req.url.replace(/.*\/frontend_latest\//, "frontend_latest/");
        res.setHeader("Cache-Control", `public, max-age=${staticOptions.maxAge}`);
        res.sendFile(`${getRootPath()}${filePath}`);
      } else if (req.url.includes("/frontend_es5/")) {
        const filePath = req.url.replace(/.*\/frontend_es5\//, "frontend_es5/");
        res.setHeader("Cache-Control", `public, max-age=${staticOptions.maxAge}`);
        res.sendFile(`${getRootPath()}${filePath}`);
      } else if (req.url.includes("/static/icons/")) {
        const filePath = req.url.replace(/.*\/static\/icons\//, "");
        res.setHeader("Cache-Control", `public, max-age=${staticOptions.maxAge}`);
        res.sendFile(import_node_path.default.join(__dirname, "/../../assets/icons/", filePath));
      } else if (req.url.includes("/images/")) {
        const filePath = req.url.replace(/.*\/images\//, "static/images/");
        res.setHeader("Cache-Control", `public, max-age=${staticOptions.maxAge}`);
        res.sendFile(`${getRootPath()}${filePath}`);
      } else if (req.url.includes("/static/")) {
        const filePath = req.url.replace(/.*\/static\//, "static/");
        res.setHeader("Cache-Control", `public, max-age=${staticOptions.maxAge}`);
        res.sendFile(`${getRootPath()}${filePath}`);
      } else if (req.url.endsWith("favicon.ico")) {
        res.setHeader("Cache-Control", `public, max-age=${staticOptions.maxAge}`);
        res.sendFile(import_node_path.default.resolve(`${__dirname}/../../assets/icons/favicon.ico`));
      } else {
        const filePath = getRootPath() + req.url.replace(/\.\./g, "").substring(1);
        import_node_fs.default.access(filePath, import_node_fs.default.constants.R_OK, (err) => {
          if (err) {
            return next();
          }
          console.log("Serving", filePath);
          res.setHeader("Cache-Control", `public, max-age=${staticOptions.maxAge}`);
          res.sendFile(filePath);
        });
      }
    });
    this._app.get("/adapter/*adapter", async (req, res) => {
      await this._replyWithImage(req, res);
    });
    this._app.get("/state/*state", async (req, res) => {
      try {
        const fileName = req.url.split("/", 3)[2].split("?", 2);
        const obj = await this.adapter.getForeignObjectAsync(fileName[0]);
        let contentType = "text/plain";
        if (obj && obj.common.type === "file") {
          contentType = (mime.getType || mime.lookup).call(mime, fileName[0]);
        }
        const user = this._modules.person.getUserIDFromName(req._user);
        const data = await this.adapter.getBinaryStateAsync(fileName[0], { user });
        if (data !== null && obj !== void 0) {
          if (data && typeof data === "object" && data.val !== void 0 && data.ack !== void 0) {
            res.set("Content-Type", "application/json");
          } else {
            res.set("Content-Type", contentType || "text/plain");
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
          this.log.debug(`Connection to client already closed?: ${innerE} could not send error ${e}`);
        }
      }
    });
    this._app.get("/api/history/period/:start", async (req, res) => {
      this._modules.history.processRequest(req, res);
    });
    this._app.get("/api/person/*person", async (req, res) => {
      this._modules.person.processRequest(req, res);
    });
    this._app.get("/api/camera_proxy_stream/:entity_id", async (req, res) => {
      await this._replyWithImage(req, res);
    });
    this._app.get("/api/camera_proxy/:entity_id", async (req, res) => {
      await this._replyWithImage(req, res);
    });
    this._app.get("/api/calendars/:entity_id", async (req, res) => {
      const entity = entityData.entityId2Entity[req.params.entity_id];
      if (!entity) {
        return res.status(404).json({ error: "Unknown entity" });
      }
      const start = new Date(req.query.start).getTime();
      const end = new Date(req.query.end).getTime();
      if (isNaN(start) || isNaN(end)) {
        this.log.warn(`Start or end malformed for calendar request: ${req.query.start} / ${req.query.end}`);
        return res.status(404).json({ error: "Start or end misformated" });
      }
      const user = this._modules.person.getUserIDFromName(req._user);
      try {
        const state = await this.adapter.getForeignStateAsync(entity.context.STATE.getId, { user });
        if (state && state.val) {
          let events = state.val;
          if (typeof state.val === "string") {
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
              if (evStart >= start || evEnd <= end || evStart <= start && evEnd >= end) {
                results.push({
                  start: event._date,
                  end: event._end,
                  summary: event.event
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
      res.json([]);
    });
    this._app.use((req, res) => {
      this.log.info(`Unknown request for ${req.url}`);
      res.send(this._renderIndex());
    });
    this._wss = new WebSocket.Server({ server: this._server });
    if (this.config.auth !== false) {
      this.adapter.getState("session", (err, state) => {
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
    this._wss.on("connection", async (ws) => await this._initConnection(ws));
  }
  /**
   * Return the stored configuration.
   *
   * @param urlPath {string|undefined} optional url path of the dashboard to get config for.
   * @returns configuration object
   */
  _getLayoutConfig(urlPath) {
    if (urlPath) {
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
  async _setLayoutConfig(config, urlPath) {
    if (urlPath) {
      await this._modules.dashboard.storeConfig(urlPath, config);
    } else {
      this.adapter.getObject("configuration", (err, obj) => {
        if (JSON.stringify(obj.native) !== JSON.stringify(config)) {
          obj.native = config;
          this.adapter.setObject("configuration", obj, (err2) => {
            err2 && this.log.error(`Cannot save config: ${err2}`);
            this._sendUpdate("lovelace_updated");
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
  async _getCurrentUser(ws) {
    const user = this._modules.person.getUserIDFromName(ws.__auth.username);
    const userObj = {
      id: user,
      name: ws.__auth.username || this._modules.person.getUserNameFromID(this.config.defaultUser),
      is_owner: user === "system.user.admin",
      is_admin: user === "system.user.admin",
      credentials: [{ auth_provider_type: "iobroker", auth_provider_id: null }],
      mfa_modules: [{ id: "totp", name: "Authenticator app", enabled: false }]
    };
    try {
      const obj = await this.adapter.getForeignObjectAsync(user, { user });
      userObj.name = (0, import_friendly_name.getFriendlyName)(null, obj, null, null);
      if (!userObj.is_admin) {
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
            `No ACL info in ${this.adapter.namespace}.configuration. Can't determine if user is admin`
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
   * @param lang language to read the translations in
   * @returns translations as object
   */
  _getTranslations(lang) {
    if (!lang || !["de", "en", "ru"].includes(lang)) {
      lang = "en";
    }
    return {
      resources: require(`../../lib/translations/${lang}.json`)
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
    ws.send(JSON.stringify({ id: Number(id), type: "result", success: true, result: result || null }));
  }
  /**
   * Send an update of eventType to all connected websocket clients.
   *
   * @param eventType eventType as string
   * @param data optional data to send
   */
  _sendUpdate(eventType, data) {
    if (this._wss && this._wss.clients && this._wss.clients.size) {
      this._wss.clients.forEach((ws) => {
        if (ws._subscribes && ws._subscribes[eventType]) {
          const t = {
            type: "event",
            event: {
              event_type: eventType,
              data: data || {},
              origin: "LOCAL",
              time_fired: Date.now() / 1e3
            }
          };
          ws._subscribes[eventType].forEach((id) => {
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
  getClientsWithSubscription(eventType) {
    const clients = [];
    if (this._wss && this._wss.clients && this._wss.clients.size) {
      this._wss.clients.forEach((ws) => {
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
  async _replyWithImage(req, res) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    this.log.debug(
      `Get image for ${req.url} and entity ${(_a = req.params) == null ? void 0 : _a.entity_id} with token=${(_b = req.query) == null ? void 0 : _b.token} and signed=${(_c = req.query) == null ? void 0 : _c.signed}`
    );
    try {
      const data = await this._getImage(
        (_d = req.params) == null ? void 0 : _d.entity_id,
        ((_e = req.query) == null ? void 0 : _e.token) || "empty",
        ((_f = req.params) == null ? void 0 : _f.entity_id) ? (_g = req.query) == null ? void 0 : _g.signed : (_h = req.query) == null ? void 0 : _h.token,
        req.url,
        req._user
      );
      res.setHeader("content-type", data.content_type);
      console.log(`Send image ${data.content_type} - ${data.content.length}`);
      let content = data.content;
      if (!data.content_type.includes("svg")) {
        content = Buffer.from(data.content, "base64");
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
   * @returns image as base64 string
   */
  async _getImage(entity_id, token, access_token, url, reqUser) {
    const entity = entityData.entityId2Entity[entity_id];
    let id;
    let userName;
    if (this.config.auth !== false && (token || access_token) && !this._requestableFiles.includes(url) && !entityData.entityIconUrls.includes(url)) {
      if (access_token) {
        const now = Date.now();
        const flowId = Object.keys(this._auth_flows).find(
          (flowId2) => this._auth_flows[flowId2].access_token === access_token && now - this._auth_flows[flowId2].ts < this._auth_flows[flowId2].auth_ttl
        );
        if (!flowId) {
          throw new Error("Invalid token!");
        } else {
          userName = this._auth_flows[flowId].username;
        }
      } else if (token && (entity == null ? void 0 : entity.attributes.access_token) !== token) {
        this.log.warn(`Invalid access token for ${entity_id} - ${token}`);
        throw new Error(`Invalid access token for ${entity_id} - ${token}`);
      } else {
        userName = reqUser;
      }
    }
    if (entity == null ? void 0 : entity.context.STATE.getId) {
      id = entity.context.STATE.getId;
    } else if (entity == null ? void 0 : entity.context.ATTRIBUTES) {
      const attr = entity.context.ATTRIBUTES.find((attr2) => attr2.attribute === "url");
      if (attr) {
        id = attr.getId;
      }
    }
    let result;
    if (id) {
      const user = this._modules.person.getUserIDFromName(userName);
      const state = await this.adapter.getForeignStateAsync(id, { user });
      if (state && state.val && typeof state.val === "string") {
        const val = state.val.split("?")[0] || "";
        if (val.startsWith("/adapter/")) {
          url = state.val;
        } else if (state.val.startsWith("data")) {
          const dataUrl = state.val;
          const mimeType = dataUrl.substring(dataUrl.indexOf(":") + 1, dataUrl.indexOf(";"));
          const encoding = dataUrl.substring(dataUrl.indexOf(";") + 1, dataUrl.indexOf(","));
          if (encoding.localeCompare("base64", void 0, { sensitivity: "base" }) !== 0) {
            this.log.warn(`Wrong encoding: ${encoding}`);
            throw new Error(`Wrong encoding: ${encoding}`);
          }
          const base64Data = dataUrl.split(",")[1];
          result = {
            content_type: mimeType || "image/jpeg",
            content: base64Data
          };
          return result;
        } else {
          const resp = await axios(state.val, { responseType: "arraybuffer" });
          result = {
            content_type: (mime.getType || mime.lookup).call(mime, val) || "image/jpeg",
            content: Buffer.from(resp.data, "binary").toString("base64")
          };
          return result;
        }
      } else {
        throw new Error(`State ${id} does not contain url to image`);
      }
    }
    if (url) {
      url = url.replace(/^\/adapter\/([a-zA-Z0-9-_]+)(.admin)?\//, "/$1.admin/");
      url = url.split("/");
      url.shift();
      const id2 = url.shift();
      url = url.join("/");
      const pos = url.indexOf("?");
      if (pos !== -1) {
        url = url.substring(0, pos);
      }
      let image;
      try {
        image = await this.adapter.readFileAsync(id2, url);
      } catch (err) {
        throw new Error(`Cannot download image: ${err}`);
      }
      if (image) {
        if (image.file === null || image.file === void 0) {
          throw new Error("File empty or not found");
        } else {
          image.mimeType = image.mimeType || (mime.getType || mime.lookup).call(image.mimeType, url) || "image/jpeg";
          result = { content_type: image.mimeType, content: image.file.toString("base64") };
          return result;
        }
      }
    }
    throw new Error(`No url attribute found for ${entity_id} or no url supplied ${url}`);
  }
  /**
   * Transforms an entity into a short version that can be sent to the client.
   * Somehow introduced in newer versions of Home Assistant.
   *
   * @param entity old entity.
   * @returns short entity
   */
  _getShortEntity(entity) {
    return {
      s: entity.state,
      a: entity.attributes,
      lc: entity.last_changed,
      lu: entity.last_updated
    };
  }
  /**
   * Client connected and established a websocket connection. Initialize server here.
   *
   * @param ws - websocket connection
   * @returns - nothing
   */
  async _initConnection(ws) {
    ws._subscribes = {};
    ws.__templates = [];
    let testTimer = null;
    ws.on("error", (e) => {
      console.error(`Error: ${e}`);
      clearInterval(testTimer);
      testTimer = null;
    });
    if (this.config.auth) {
      this.log.debug("Telling new client to authorize, because authorization is enabled.");
      ws.send(JSON.stringify({ type: "auth_required", ha_version: VERSION }));
    }
    ws.on("message", async (message) => {
      var _a, _b;
      if (typeof message !== "string") {
        if (message instanceof Buffer) {
          message = message.toString("utf8");
        }
      }
      try {
        message = JSON.parse(message);
      } catch (e) {
        this.log.debug(
          `Could not parse message: ${message} with type ${typeof message}, got error ${e} with stack ${e.stack}`
        );
        console.error(`Cannot parse message: ${message}`);
        return;
      }
      message.id = Number(message.id);
      if (message.subscription) {
        message.subscription = Number(message.subscription);
      }
      const now = Date.now();
      if (message.type === "auth") {
        this.log.debug(`HASS Auth: ${message.access_token}`);
        if (this.config.auth === false && message.access_token === NO_TOKEN) {
          ws.__auth = {};
          return ws.send(JSON.stringify({ type: "auth_ok", ha_version: VERSION }));
        }
        const flowId = Object.keys(this._auth_flows).find(
          (flowId2) => this._auth_flows[flowId2].access_token === message.access_token && now - this._auth_flows[flowId2].ts < this._auth_flows[flowId2].auth_ttl
        );
        if (!flowId) {
          this.log.warn(`HASS auth_invalid: ${message.access_token}`);
          ws.send(JSON.stringify({ type: "auth_invalid", message: "Invalid access token or password" }));
          ws.close(1e3);
        } else {
          ws.__auth = this._auth_flows[flowId];
          ws.__auth.flowId = flowId;
          ws.send(JSON.stringify({ type: "auth_ok", ha_version: VERSION }));
        }
        return;
      }
      if (this.config.auth !== false) {
        if (!ws.__auth) {
          this.log.warn("Auth token not found! Close connection.");
          ws.send(JSON.stringify({ type: "auth_invalid", message: "Invalid access token or password" }));
          ws.close();
          return;
        } else if (now - ws.__auth.ts > ws.__auth.auth_ttl) {
          this.log.warn("Auth token is expired! Close connection.");
          ws.send(JSON.stringify({ type: "auth_invalid", result: false, ha_version: VERSION }));
          ws.close();
          return;
        }
      }
      if (message.type === "subscribe_events") {
        this.log.debug(`HASS Subscribe: ${message.event_type}`);
        if (ws._subscribes) {
          ws._subscribes[message.event_type] = ws._subscribes[message.event_type] || [];
          ws._subscribes[message.event_type].push(message.id);
        }
        this._sendResponse(ws, message.id);
      } else if (message.type === "unsubscribe_events") {
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
          ws._subscribes && Object.keys(ws._subscribes).forEach((event_type) => {
            const dynMod = this._modules[event_type];
            if (dynMod && typeof dynMod.removeSubscription === "function") {
              dynMod.removeSubscription(ws, message.subscription);
            } else {
              ws._subscribes[event_type] = ws._subscribes[event_type].filter(
                (sub) => sub !== message.subscription && sub.id !== message.subscription
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
      } else if (message.type === "subscribe_entities") {
        this.log.debug(`Subscribe entities: ${JSON.stringify(message, null, 2)}`);
        if (ws._subscribes) {
          ws._subscribes.subscribe_entities = ws._subscribes.subscribe_entities || [];
          ws._subscribes.subscribe_entities.push(message.id);
        }
        const subscribeEntitiesResponse = [
          { id: message.id, type: "result", success: true, result: null },
          { id: message.id, type: "event", event: { a: {} } }
        ];
        for (const entity of entityData.entities) {
          subscribeEntitiesResponse[1].event.a[entity.entity_id] = this._getShortEntity(entity);
        }
        ws.send(JSON.stringify(subscribeEntitiesResponse));
      } else if (message.type === "supported_features") {
        this.log.debug(`supported_features message: ${JSON.stringify(message.features)}`);
        this._sendResponse(ws, message.id);
      } else if (message.type === "get_states") {
        this._sendResponse(ws, message.id, this.getHassStates());
      } else if (message.type === "get_config") {
        this._sendResponse(ws, message.id, this._getConfig());
      } else if (message.type === "get_services") {
        this._sendResponse(ws, message.id, entityData.services);
      } else if (message.type === "get_panels") {
        this._modules.dashboard.addDashboardsToPanels(PANELS);
        this._sendResponse(ws, message.id, PANELS);
      } else if (message.type === "auth/sign_path") {
        this.log.debug(`Sign: ${message.path}`);
        try {
          const [path2, query] = message.path.split("?");
          const search = {};
          if (query) {
            query.split("&").forEach((item) => {
              const parts = item.split("=");
              search[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1] || "");
            });
          }
          search.signed = this.config.auth !== false ? ws.__auth.access_token : `${NO_TOKEN}_${Date.now()}`;
          const url = Object.keys(search).map((attr) => `${encodeURIComponent(attr)}=${encodeURIComponent(search[attr])}`).join("&");
          this._sendResponse(ws, message.id, { path: `${path2}?${url}` });
        } catch (e) {
          this.log.error(e);
        }
      } else if (message.type === "frontend/get_themes") {
        this._sendResponse(ws, message.id, this._getThemes());
      } else if (message.type === "auth/current_user") {
        this._getCurrentUser(ws).then((data) => this._sendResponse(ws, message.id, data));
      } else if (message.type === "frontend/get_user_data") {
        this.log.debug(`Get USER Data: ${message.key}`);
        this._sendResponse(ws, message.id, { value: { language: this.lang } });
      } else if (message.type === "frontend/get_translations") {
        this.log.debug(`Get translations: ${message.language}`);
        this._sendResponse(ws, message.id, this._getTranslations(message.language));
      } else if (message.type === "lovelace/config") {
        this.log.debug(`get config: ${JSON.stringify(message)}`);
        this._sendResponse(ws, message.id, this._getLayoutConfig(message.url_path));
      } else if (message.type === "lovelace/config/save") {
        this.log.debug(`save config: ${JSON.stringify(message)}`);
        this._setLayoutConfig(message.config, message.url_path);
        this._sendResponse(ws, message.id);
      } else if (message.type === "lovelace/resources") {
        this._sendResponse(ws, message.id, this._ressourceConfig);
      } else if (message.type === "repairs/list_issues") {
        this._sendResponse(ws, message.id, { issues: [] });
      } else if (message.type === "config/floor_registry/list") {
        this._sendResponse(ws, message.id, []);
      } else if (message.type === "config/label_registry/list") {
        this._sendResponse(ws, message.id, []);
      } else if (message.type === "config_entries/subscribe") {
        this._sendResponse(ws, message.id, null);
        message.type = "config/device_registry/list";
        await this._modules.deviceRegistry.processMessage(ws, message);
      } else if (message.type === "config_entries/flow/progress") {
        this._sendResponse(ws, message.id, []);
      } else if (message.type === "manifest/list") {
        this._sendResponse(ws, message.id, []);
      } else if (message.type === "entity/source") {
        const sources = {};
        for (const entity of entityData.entities) {
          if (entity.entity_id === "zone.home") {
            sources[entity.entity_id] = { domain: "constant" };
          } else {
            sources[entity.entity_id] = {
              domain: entity.isManual ? "iob_manual" : "iob_automatic"
            };
          }
        }
      } else if (message.type === "camera_thumbnail") {
        this.log.warn(`camera_thumbnail ${message.entity_id} deprecated!!!`);
        try {
          const data = await this._getImage(message.entity_id, null, null);
          this._sendResponse(ws, message.id, data);
        } catch (err) {
          this.log.warn(`Error in camera_thumbnail: ${err} - ${err.stack}`);
          this._sendResponse(ws, message.id);
        }
      } else if (message.type === "call_service") {
        await this._processCall(ws, message);
      } else if (message.type === "render_template") {
        const template = message.template;
        this._sendResponse(ws, message.id);
        const obj = { template, ids: [], id: message.id };
        ws.__templates && ws.__templates.push(obj);
        const vars = bindings.extractBinding(template);
        const promises = [];
        const processId = async (id) => {
          if (obj.ids.indexOf(id) !== -1) {
            return;
          }
          obj.ids.push(id);
          if (this._subscribed.indexOf(id) === -1) {
            this._subscribed.push(id);
            this.adapter.subscribeForeignStates(id);
            this.log.debug(`IoB Subscribe on ${id}`);
          }
          try {
            this.templateStates[id] = await this.adapter.getForeignStateAsync(id);
          } catch (e) {
            this.log.warning(`Cannot get state ${id}: ${e} in template ${template}`);
          }
        };
        if (vars) {
          for (const v of vars) {
            try {
              promises.push(processId(v.systemOid));
              if (v.operations) {
                for (const op of v.operations) {
                  if (op.arg) {
                    for (const arg of op.arg) {
                      if (arg.systemOid) {
                        promises.push(processId(arg.systemOid));
                      }
                    }
                  }
                }
              }
            } catch (e) {
              this.log.warning(
                `Cannot process variable ${JSON.stringify(v)}: ${e} in template ${template}`
              );
            }
          }
        }
        Promise.all(promises).then(() => {
          const t = {
            id: message.id,
            type: "event",
            event: {
              result: bindings.formatBinding(template, this.templateStates)
            }
          };
          ws.send(JSON.stringify(t));
        });
      } else if (message.type === "logger/log_info") {
        this._sendResponse(
          ws,
          message.id,
          Object.keys(entityData.services).map((domain) => ({ domain, level: 30 }))
        );
      } else if (message.type === "sensor/numeric_device_classes") {
        this._sendResponse(ws, message.id, { numeric_device_classes: import_genericConverter.numericDeviceClasses });
      } else if (message.type === "ping") {
        this._sendResponse(ws, message.id, { type: "pong" });
      } else {
        let result = false;
        for (const mod of Object.values(this._modules)) {
          result = ((_b = await ((_a = mod.processMessage) == null ? void 0 : _a.call(mod, ws, message))) != null ? _b : false) || result;
        }
        if (!result) {
          this.log.info(`Unknown request: ${JSON.stringify(message)}`);
          ws.send(
            JSON.stringify({
              id: message.id,
              type: "result",
              success: false,
              error: { code: "unknown_command" }
            })
          );
        }
      }
    });
    ws.on("close", () => {
      this.log.debug("Connection closed");
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
      console.log("auth stored.");
      this.adapter.setState("session", JSON.stringify(this._auth_flows), true, cb);
    }
  }
  /**
   * Mark an ioBroker object id as needing an update (entity recreation).
   * Pushes the id into the updatedIds queue which is processed by the update timer.
   *
   * @param id ioBroker object id to mark for update.
   */
  _markForUpdate(id) {
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
  async _updateById(id, idsAutomaticallyProcessed, entitiesNeedsUpdate) {
    const entities = entityData.iobID2entity[id] || [];
    const obj = this._objectData.objects[id];
    if (!obj) {
      let deleted = false;
      for (let i = entities.length - 1; i >= 0; i--) {
        const entity = entities[i];
        if (entity.context.id === id) {
          entity.unregister();
          this.log.debug(`Object ${id} deleted, ${entity.entity_id} with deleted, too.`);
          entities.splice(i, 1);
          deleted = true;
        }
      }
      return deleted;
    } else {
      if (obj.common && obj.common.custom && obj.common.custom[this.adapter.namespace]) {
        this.log.debug(
          `Processing change in ${id} with manual settings, removing ${entities.length} old entities in order to recreate.`
        );
        for (const entity of entities) {
          if (entity.isManual) {
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
      if (!idsAutomaticallyProcessed.has(id)) {
        let unregisteredAny = false;
        for (const oldEntity of [...entities]) {
          if (oldEntity.context.id === id) {
            oldEntity.unregister();
            unregisteredAny = true;
          }
        }
        const newEntities = await this._createOneDevice(id);
        if (entities.length) {
          for (const entity of entities) {
            this.log.debug(`Object ${id} changed, updated entity ${entity.entity_id}.`);
            entitiesNeedsUpdate.push(entity);
            for (const id2 of entity.iobIds) {
              idsAutomaticallyProcessed.add(id2);
            }
          }
          this.log.debug(`Object ${id} did change, got ${entities.length} updated entities.`);
        } else {
          this.log.debug(`Object ${id} did change, got no updated entities.`);
        }
        idsAutomaticallyProcessed.add(id);
        return unregisteredAny || newEntities.length > 0;
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
  async onObjectChange(id, obj) {
    var _a;
    console.log("onObjectChange", id, obj);
    if (obj) {
      if (obj.type === "state" || obj.type === "channel" || obj.type === "device") {
        if (!this.adapter.config.aliasOnly || id.startsWith("alias.0.") || obj.common && obj.common.custom && obj.common.custom[this.adapter.namespace]) {
          this._objectData.objects[id] = obj;
          this.log.debug(`${id} updated.`);
          if (!this._objectData.ids.includes(id)) {
            this._objectData.ids.push(id);
          }
        }
      } else if (obj.type === "enum") {
        if (id.startsWith("enum.rooms.")) {
          const { ids, entities: affectedEntities } = utils.findEntitiesFromEnumChange(
            obj,
            this._objectData.rooms[id]
          );
          for (const entity of affectedEntities) {
            if (entity) {
              this.log.debug(`${id} changed, ${entity.entity_id} affected.`);
              this._markForUpdate(entity.context.id);
            }
          }
          for (const id2 of ids) {
            this._markForUpdate(id2);
          }
          utils.getEnumName(obj, this.lang, true);
          this._objectData.rooms[id] = obj;
          this.log.debug(`enum ${id} updated.`);
        }
        if (id.startsWith("enum.functions.")) {
          const { ids, entities: affectedEntities } = utils.findEntitiesFromEnumChange(
            obj,
            this._objectData.functions[id]
          );
          for (const entity of affectedEntities) {
            if (entity) {
              this.log.debug(`${id} changed, ${entity.entity_id} affected.`);
              this._markForUpdate(entity.context.id);
            }
          }
          for (const id2 of ids) {
            this._markForUpdate(id2);
          }
          utils.getEnumName(obj, this.lang, true);
          this._objectData.functions[id] = obj;
          this.log.debug(`enum ${id} updated.`);
        }
      }
    } else {
      const parentIdsOfDeleted = utils.getParentIDs(id, this._objectData.objects);
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
      for (const parentId of parentIdsOfDeleted) {
        this._markForUpdate(parentId);
      }
    }
    if (id === `${this.adapter.namespace}.configuration`) {
      this._lovelaceConfig = obj.native;
      await this._manageSubscribesFromConfig();
      this.log.debug(`configUpdateProcessed for config.`);
      await this.adapter.setStateAsync("info.configUpdateProcessed", true, true);
    } else if (id === "system.config") {
      if (obj && obj.common) {
        this.lang = obj.common.language || this.lang || "en";
        entityData.lang = this.lang;
        this.systemConfig = obj.common;
        this._updateConstantEntities();
        this.log.debug(`${id} -> config updated, constant entities updated.`);
        this.log.debug("entitiesUpdated for system.config.");
        await this.adapter.setStateAsync("info.entitiesUpdated", true, true);
      }
    } else {
      if (!this._objectData.updatedIds.includes(id)) {
        this._objectData.updatedIds.push(id);
      }
      const parentIds = obj ? utils.getParentIDs(id, this._objectData.objects) : [];
      for (const id2 of parentIds) {
        if (!this._objectData.updatedIds.includes(id2)) {
          this._objectData.updatedIds.push(id2);
        }
      }
      this._updateTimer && clearTimeout(this._updateTimer);
      this._updateTimer = setTimeout(async () => {
        var _a2;
        this._updateTimer = null;
        const idsToProcess = this._objectData.updatedIds.splice(0);
        idsToProcess.sort();
        const needUpdate = [];
        this.log.debug(`Update timer expired, ${idsToProcess.length} objects to look at.`);
        const idsTypeDetectorProcessed = /* @__PURE__ */ new Set();
        let anyEntityChanged = false;
        for (const id2 of idsToProcess) {
          if (!id2) {
            continue;
          }
          const changed = await this._updateById(id2, idsTypeDetectorProcessed, needUpdate);
          if (changed) {
            anyEntityChanged = true;
          }
        }
        this.log.debug(`Update processing done, ${needUpdate.length} entities need update.`);
        if (needUpdate.length > 0 || anyEntityChanged) {
          for (const entity of needUpdate) {
            await this._getStatesForEntity(entity);
            this.updateEntityInFrontend(entity);
          }
          await this._manageSubscribesFromConfig();
          (_a2 = this._modules.entityRegistry) == null ? void 0 : _a2.handleUpdatedEntities(needUpdate, true);
          this.log.debug("entitiesUpdated for object changes.");
          await this.adapter.setStateAsync("info.entitiesUpdated", true, true);
          this.log.debug("Had changes, updated states and notified entitiesUpdated state.");
        }
      }, this.config.updateTimeout || 5e3);
    }
    for (const mod of Object.values(this._modules)) {
      (_a = mod.onObjectChange) == null ? void 0 : _a.call(mod, id, obj);
    }
  }
  /**
   * Destroy the webserver and all its connections.
   *
   * @param cb callback when done.
   */
  destroy(cb) {
    var _a;
    this.adapter.unsubscribeStates("control.*");
    this.adapter.unsubscribeStates("notifications.*");
    this.adapter.unsubscribeStates("instances.*");
    this.adapter.setState("info.readyForClients", false, true);
    this._saveAuth(() => {
      this.adapter.unsubscribeForeignObjects("*");
      this.adapter.unsubscribeObjects("configuration", cb);
    });
    this._clearInterval && clearInterval(this._clearInterval);
    this._clearInterval = null;
    this._updateTimer && clearTimeout(this._updateTimer);
    this._updateTimer = null;
    for (const mod of Object.values(this._modules)) {
      (_a = mod.cleanup) == null ? void 0 : _a.call(mod);
    }
  }
}
module.exports = WebServer;
//# sourceMappingURL=server.js.map
