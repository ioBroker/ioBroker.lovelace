const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const bodyParser = require('body-parser');
const fs = require('fs');
const SERVICES = require('./services');
const PANELS = require('./panels');

//const ROOT_DIR = '../home-assistant-polymer/hass_frontend';
const ROOT_DIR = '../hass_frontend';

const VERSION = '0.92.2';

function getRootPath() {
    if (ROOT_DIR.match(/^\w:/) || ROOT_DIR.startsWith('/')) {
        return ROOT_DIR + '/';
    } else {
        return __dirname + '/' + ROOT_DIR + '/';
    }
}

class WebServer {
    constructor(options) {
        this._lovelaceConfig = null;
        this.adapter = options.adapter;
        this.config = this.adapter.config;
        this.log = this.adapter.log;
        this.subscribed = [];
        this.adapter.getObject('configuration', (err, config) => {
            if (config && config.native && config.native.title) {
                this._lovelaceConfig = config.native;
            } else {
                this._lovelaceConfig = require('./defaultConfig');
            }
            this.adapter.subscribeObjects('configuration');
            this._manageSubscribesFromConfig();
            this._init();
        });
    }

    onObjectChange(id, obj) {
        if (id === this.adapter.namespace + '.configuration') {
            this._lovelaceConfig = obj.native;
            this._manageSubscribesFromConfig();
        }
    }

    _manageSubscribesFromConfig() {
        const ids = [];
        this._lovelaceConfig.views.forEach(view => {
            view.cards.forEach(card => {
                if (card.entity) {
                    ids.push(card.entity);
                }
            });
        });
        const newIds = ids.filter(id => this.subscribed.indexOf(id) === -1);
        const deleted = this.subscribed.filter(id => ids.indexOf(id) === -1);
        deleted.forEach(id => this.adapter.unsubscribeForeignStates(id));
        newIds.forEach(id => this.adapter.subscribeForeignStates(id));
    }

    _renderIndex() {
        if (this._indexHtml) {
            return this._indexHtml;
        }
        let text = fs.readFileSync(getRootPath() + 'index.html').toString('utf-8');
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
                nLines.push('<script>\n' + fs.readFileSync(__dirname + '/../assets/index.js').toString('utf-8') + '\n</script>');
            }
            if (template) continue;
            nLines.push(lines[i]);
        }
        this._indexHtml = nLines.join('\n');
        this._indexHtml = this._indexHtml.replace(/{{ no_auth }}/g, '1');
        this._indexHtml = this._indexHtml.replace(/{{ use_oauth }}/g, '0');
        this._indexHtml = this._indexHtml.replace(/{{ theme_color }}/g, this._renderManifest().theme_color);
        return this._indexHtml;
    }

    _renderManifest() {
        return {
            "background_color": "#FFFFFF",
            "description": "Open-source home automation platform running on Node.js.",
            "dir": "ltr",
            "display": "standalone",
            "icons": [
                {
                    "sizes": "192x192",
                    "src": "/static/icons/favicon-192x192.png",
                    type: "image/png"
                },
                {
                    "sizes": "384x384",
                    "src": "/static/icons/favicon-384x384.png", type: "image/png"
                },
                {
                    "sizes": "512x512",
                    "src": "/static/icons/favicon-512x512.png",
                    type: "image/png"
                },
                {
                    "sizes": "1024x1024",
                    "src": "/static/icons/favicon-1024x1024.png",
                    type: "image/png"
                }
            ],
            "lang": "en-US",
            "name": "ioBroker",
            "short_name": "IoB",
            "start_url": "/?homescreen=1",
            "theme_color": "#03A9F4"
        };
    }

    _renderAuthorize() {
        let html = fs.readFileSync(getRootPath() + 'authorize.html').toString('utf-8');
        html = html.replace(/Home Assistant/g, 'ioBroker');
        return html;
    }
    
    _getConfig() {
        return {
            "latitude": 50.1155,
            "longitude": 8.6842,
            "elevation": 0,
            "unit_system": {
                "length": "km",
                "mass": "g",
                "pressure": "Pa",
                "temperature": "\u00b0C",
                "volume": "L"
            },
            "location_name": "Home",
            "time_zone": "Europe/Berlin",
            "components": [
                "zeroconf",
                "onboarding",
                "logbook",
                "auth",
                "notify",
                "persistent_notification",
                "map",
                "conversation",
                "default_config",
                "lovelace",
                "history",
                "zone",
                "device_tracker",
                "homeassistant",
                "websocket_api",
                "mobile_app",
                "group",
                "script",
                "webhook",
                "updater",
                "sensor",
                "system_log",
                "http",
                "tts",
                "system_health",
                "person",
                "config",
                "cloud",
                "automation",
                "recorder",
                "notify.mobile_app",
                "sensor.yr",
                "api",
                "discovery",
                "frontend",
                "sun"
            ],
            //"config_dir": "C:\\Users\\siemens\\AppData\\Roaming\\.homeassistant",
            //"whitelist_external_dirs": ["C:\\Users\\siemens\\AppData\\Roaming\\.homeassistant\\www"],
            "version": VERSION
        };
    }

    _getStates() {
        // parse config for entity_ids

        return [{
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }];
    }
    
    _init() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        
        // on http://localhost:3000/auth/authorize?response_type=code&client_id=http%3A%2F%2Flocalhost%3A3000%2F&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flovelace%3Fauth_callback%3D1&state=eyJoYXNzVXJsIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiY2xpZW50SWQiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAvIn0%3D
        this.app.use('/auth/authorize', (req, res) => {
            res.setHeader('location', '/frontend_es5/authorize.html' + req.url.replace(/^\//, ''));
            res.status(302).send();
        });

        this.app.use('/auth/providers', (req, res) => {
            res.json([{id: null, name: 'ioBroker Local', type: 'iobroker'}]);
        });

        this.app.post('/auth/login_flow', (req, res) => {
            res.json({
                "data_schema": [
                    {"name": "username", type: "string"},
                    {"name": "password", type: "string"}
                ],
                "description_placeholders": null,
                "errors": {},
                "flow_id": "5adb1c570f7a4faa8bac803c2238250f",
                "handler": ["iobroker", null],
                "step_id": "init",
                type: "form"
            });
        });

        this.app.post('/auth/token', (req, res) => {
            res.json({
                "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5Yjc5Y2Q2OTZmN2U0ZDc2OTg1NGU4NGQ3YmY4NzNlMyIsImlhdCI6MTU1ODAwOTE1MywiZXhwIjoxNTU4MDEwOTUzfQ.QL9qA0QeOxfMoxPUfxH1kEZDGnDNlSHbQeMF8z2xLw0",
                "expires_in": 1800,
                "refresh_token": "ac4b44b09a29251aaef0778189cef352e0e1e91b6cd6e4f4bfd14361b57029d228740dc544f43e20e2eb03e057105bf86c58b9087f6dfb5f0a5fc3b40ac0fa43",
                "token_type": "Bearer"
            });
        });

        this.app.post('/auth/login_flow/:id', (req, res) => {
            res.json({
                "description": null,
                "description_placeholders": null,
                "flow_id": "d7081da9427842ff8fb75fcae4e68624",
                "handler": ["iobroker", null],
                result: "f9400f7ab5024266a0f335bb0f3f4885",
                "title": "ioBroker Local",
                type: "create_entry",
                "version": 1
            });
        });

        this.app.use((req, res, next) => {
            if (req.url.match(/\/authorize\.html/)) {
                this.log.debug('authorize.html');
                res.send(this._renderAuthorize());
            } else {
                next();
            }
        });

        this.app.get('/', (req, res) => res.send(this._renderIndex()));
        this.app.get('/lovelace', (req, res) => res.send(this._renderIndex()));
        this.app.get('/lovelace/:id', (req, res) => res.send(this._renderIndex()));
        this.app.get('/manifest.json', (req, res) => res.json(this._renderManifest()));

        this.app.use('/frontend_latest/', express.static(getRootPath()));
        this.app.use('/static/icons/', express.static(__dirname + '/../assets/icons/'));
        this.app.use('/static/', express.static(getRootPath()));
        this.app.use(express.static(getRootPath()));

        //initialize the WebSocket server instance
        this._wss = new WebSocket.Server({server: this.server});

        this._wss.on('connection', ws => this._initConnection(ws));

        //start our server
        this.server.listen(this.config.port || 3001, this.config.bind, () =>
            this.log.debug(`Server started on port ${this.config.port || 3001}`));
    }

    _getLayoutConfig() {
        return this._lovelaceConfig;
    }

    _setLayoutConfig(config) {
        this.adapter.getObject('configuration', (err, obj) => {
            obj.native = config;
            this.adapter.setObject('configuration', obj, err =>
                this.log.error('Cannot save config: ' + err));
        });

    }

    _getCurrentUser() {
        return {
            id: "3051467331c84c45a2a4f4e4fbdadaaf",
            name: "Admin",
            is_owner: true,
            is_admin: true,
            credentials: [{"auth_provider_type": "iobroker", "auth_provider_id": null}],
            mfa_modules: [{id: "totp", "name": "Authenticator app", "enabled": false}]
        };
    }

    _getTranslations() {
        return {
            resources: require('./translations/de.json')
        }
    }

    _processCall(ws, data) {
        const id = data.service_data.entity_id;
        if (data.service === 'toggle') {
            this.log.debug('toggle ' + id);
            this.adapter.getForeignState(id, (err, state) =>
                this.adapter.setForeignState(id, state ? !state.val : true, err =>
                    this._sendResponse(ws, data.id)));
        } else if (data.service === 'volume_set') {
            this.log.debug('volume_set ' + id);
            this.adapter.setForeignState(id, data.service_data.value, err =>
                this._sendResponse(ws, data.id));
        } else if (data.service === 'trigger' || data.service === 'turn_on') {
            this.log.debug('turn_on ' + id);
            this.adapter.setForeignState(id, true, err =>
                this._sendResponse(ws, data.id));
        } else if (data.service === 'turn_off') {
            this.log.debug('turn_off ' + id);
            this.adapter.setForeignState(id, false, err =>
                this._sendResponse(ws, data.id));
        } else if(data.service === 'set_page') {
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
        } else if (data.service.match(/^set_/) && data.service !== 'set_datetime') {
            this.log.debug(data.service + ': ' + id + ' = ' + data.service_data[data.service.substring(4)]);
            // set_value          => service_data.value
            // set_operation_mode => service_data.operation_mode
            // set_temperature    => service_data.temperature
            // set_speed          => service_data.speed
            this.adapter.setForeignState(id, data.service_data[data.service.substring(4)], err =>
                this._sendResponse(ws, data.id));
        } else if (data.service === 'volume_mute') {
            this.log.debug('volume_mute ' + id + ' = ' + data.service_data.is_volume_muted);
            // volume_mute        => service_data.is_volume_muted
            this.adapter.setForeignState(id, data.service_data.is_volume_muted, err =>
                this._sendResponse(ws, data.id));
        } else if (data.service.match(/^select_/)) {
            this.log.debug(data.service + ': ' + id + ' = ' + data.service_data[data.service.substring(7)]);
            // select_option      => service_data.option
            // select_source      => service_data.source
            this.adapter.setForeignState(id, data.service_data[data.service.substring(7)], err =>
                this._sendResponse(ws, data.id));
        } else {
            this.log.warn('Unknown service: ' + data.service + ' (' + JSON.stringify(data) + ')');
            // close_cover, open_cover
            // set_datetime       => service_data.date, service_data.time

            //{"id": 21, "type": "result", "success": false, "error": {"code": "not_found", "message": "Service not found."}}
            ws.send(JSON.stringify({id, type: 'result', success: false, error: {"code": "not_found", "message": "Service not found."}}));
        }
    }
    
    _sendResponse(ws, id, result) {
        ws.send(JSON.stringify({id, type: 'result', success: true, result: result || null}));
    }
    
    _initConnection(ws) {
        const subscribes = {};
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

            if (message.type === 'auth') {
                //ws.send(JSON.stringify({type: 'auth_required', ha_version: VERSION}));
                ws.send(JSON.stringify({type: 'auth_ok', ha_version: VERSION}));
            } else
            if (message.type === 'subscribe_events') {
                this.log.debug('Subscribe: ' + message.event_type);
                subscribes[message.event_type] = subscribes[message.event_type] || [];
                subscribes[message.event_type].push(message.id);
                this._sendResponse(ws, message.id);
            } else
            if (message.type === 'unsubscribe_events') {
                this.log.debug('UnSubscribe: ' + JSON.stringify(message));
                if (subscribes[message.event_type]) {
                    const pos = subscribes[message.event_type].indexOf(message.subscription);
                    if (pos !== -1) {
                        subscribes[message.event_type].splice(pos, 1);
                    }

                    if (!subscribes[message.event_type].length) {
                        delete subscribes[message.event_type]
                    }
                }
                this._sendResponse(ws, message.id);
            } else
            if (message.type === 'get_states') {
                this._sendResponse(ws, message.id, this._getStates());
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
            if (message.type === 'frontend/get_themes') {
                this._sendResponse(ws, message.id, {themes: {}, default_theme: 'default'});
            } else
            if (message.type === 'auth/current_user') {
                this._sendResponse(ws, message.id, this._getCurrentUser());
            } else
            if (message.type === 'frontend/get_user_data') {
                this.log.debug('Get USER Data: ' + message.key);
                this._sendResponse(ws, message.id, {value: null});
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
            if (message.type === 'persistent_notification/get') {
                this._sendResponse(ws, message.id, []);
            } else
            if (message.type === 'call_service') {
                //{"type":"call_service","domain":"zone","service":"turn_off","service_data":{"entity_id":"zone.home"},"id":18}
                this._processCall(ws, message);
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
            testTimer && clearInterval(testTimer);
            testTimer = null;
        });
    }

    destroy(cb) {
        this.adapter.unsubscribeObjects('configuration');
        if (this.server) {
            this.server.close(cb);
            this.server = null;
        } else {
            cb && cb();
        }
    }
}

module.exports = WebServer;