const WebSocket = require('ws');
const bodyParser = require('body-parser');
const fs = require('fs');
const SERVICES = require('./services');
const PANELS = require('./panels');
const {Types, ChannelDetector} = require('iobroker.type-detector');
const ignoreIds = [
    /^system\./,
    /^script\./,
];
const express = require('express');

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
        this.lang = 'en';
        this.detector = new ChannelDetector();

        this._subscribed = [];
        this._objects = {}; // think about if it really required
        this._entities = [];
        this._entity2ID = {};
        this._ID2entity = {};
        this._server = options.server;
        this._app = options.app;

        this.converter = {
            [Types.socket]: this._processSocket.bind(this),
            [Types.light]: this._processLight.bind(this),
            [Types.dimmer]: this._processDimmer.bind(this)
        };

        this.adapter.getForeignObject('system.config', (err, config) => {
            this.lang = config.common.language;
            this.adapter.getObject('configuration', (err, config) => {
                if (config && config.native && config.native.title) {
                    this._lovelaceConfig = config.native;
                } else {
                    this._lovelaceConfig = require('./defaultConfig');
                }
                this._updateDevices()
                    .then(smartDevices => {
                        this._entities = Object.keys(smartDevices).map(id => smartDevices[id]);
                        this._getAllEntities(() => {
                            this._getAllStates(() => {
                                this.adapter.subscribeObjects('configuration');
                                this._manageSubscribesFromConfig();
                                this._init();
                            });
                        });
                    });
            });
        });
    }

    _getAllStates(cb) {
        const entity = this._entities.find(e => e.state === undefined);
        if (!entity) {
            cb && cb();
        } else {
            let count = 0;
            if (entity.context.STATE && entity.context.STATE.getId) {
                count++;
                this.adapter.getForeignState(entity.context.STATE.getId, (err, state) => {
                    if (state) {
                        entity.state = this._iobState2EntityState(entity.context.STATE.getId, state.val);
                        entity.last_changed = new Date(state.lc).toISOString();
                        entity.last_updated = new Date(state.ts).toISOString();
                    } else {
                        entity.state = 'unknown';
                        entity.last_changed = new Date().toISOString();
                        entity.last_updated = entity.last_changed;
                    }

                    !--count && setImmediate(() => this._getAllStates(cb));
                });
            }

            if (entity.context.ATTRIBUTES) {
                const ids = entity.context.ATTRIBUTES.map(entry => entry.getId);
                count++;

                this.adapter.getForeignStates(ids, (err, states) => {
                    if (ids && ids.length) {
                        entity.attributes = entity.attributes || {};
                        ids.forEach((id, i) => {
                            if (states[i]) {
                                entity.attributes[entity.context.ATTRIBUTES.attribute] = this._iobState2EntityState(null, states.val, entity.context.ATTRIBUTES.attribute);
                            } else {
                                entity.attributes[entity.context.ATTRIBUTES.attribute] = 'unknown';
                            }
                        });
                    }

                    !--count && setImmediate(() => this._getAllStates(cb));
                });
            }

            !count && setImmediate(() => this._getAllStates(cb));
        }
    }
    
    _getAllEntities(cb) {
        this.adapter.objects.getObjectView('custom', 'state', {}, (err, doc) => {
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

            this._processEntities(ids, cb, this._entities);
        });
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

    _processCommon(id, name, func, room, obj, entityType) {
        if (!name) {
            if (func && room) {
                name = room + ' ' + func;
            } else {
                name = obj.common.custom[this.adapter.namespace].name || this._generateName(obj);
            }
        }
        const _name = this._generateName(obj, 'en').replace(/[^a-zA-Z0-9_]/g, '_');

        const entity = {
            entity_id: entityType + '.' + _name,
            attributes: {
                friendly_name: name
            },
            //last_changed: new Date(state.lc).toISOString(),
            //last_updated: new Date(state.ts).toISOString(),
            context: {
                id: obj._id,
                type: entityType,
            }
        };
        this._ID2entity[obj._id] = entity;
        this._entity2ID[entity.entity_id] = entity;
        this._entities.push(entity);
        // entity.state = this._iobState2EntityState(obj._id, state.val);
        return entity;
    }

    _processSocket(id, control, name, room, func, _obj) {
        const entity = this._processCommon(id, name, room, func, _obj, 'switch');

        let state = control.states.find(s => s.id && s.name === 'SET');
        entity.context.STATE = {setId: null, getId: null};
        if (state && state.id) {
            entity.context.STATE.setId = state.id;
            entity.context.STATE.getId = state.id;
            this._ID2entity[state.id] = this._ID2entity[state.id] || entity;
        }

        state = control.states.find(s => s.id && s.name === 'ACTUAL');
        if (state && state.id) {
            entity.context.STATE.getId = state.id;
            this._ID2entity[state.id] = this._ID2entity[state.id] || entity;
        }
        return entity;
    }

    _processLight(id, control, name, room, func, _obj) {
        const entity = this._processCommon(id, name, room, func, _obj, 'light');

        let state = control.states.find(s => s.id && s.name === 'SET');
        entity.context.STATE = {setId: null, getId: null};
        if (state && state.id) {
            entity.context.STATE.setId = state.id;
            entity.context.STATE.getId = state.id;
            this._ID2entity[state.id] = this._ID2entity[state.id] || entity;
        }

        state = control.states.find(s => s.id && s.name === 'ACTUAL');
        if (state && state.id) {
            entity.context.STATE.getId = state.id;
            this._ID2entity[state.id] = this._ID2entity[state.id] || entity;
        }

        return entity;
    }

    _processDimmer(id, control, name, room, func, _obj) {
        const entity = this._processCommon(id, name, room, func, _obj, 'light');

        let state = control.states.find(s => s.id && s.name === 'ON_SET');
        entity.context.STATE = {setId: null, getId: null};
        if (state && state.id) {
            entity.context.STATE.setId = state.id;
            entity.context.STATE.getId = state.id;
            this._ID2entity[state.id] = this._ID2entity[state.id] || entity;
        }

        state = control.states.find(s => s.id && s.name === 'ON_ACTUAL');
        if (state && state.id) {
            entity.context.STATE.getId = state.id;
            this._ID2entity[state.id] = this._ID2entity[state.id] || entity;
        }

        state = control.states.find(s => s.id && s.name === 'SET');
        if (state && state.id) {
            entity.context.ATTRIBUTES = [{setId: state.id, attribute: 'brightness', getId: state.id}];
        }

        state = control.states.find(s => s.id && s.name === 'ACTUAL');
        if (state && state.id) {
            entity.context.ATTRIBUTES[0].getId = state.id;
            this._ID2entity[state.id] = this._ID2entity[state.id] || entity;
        }

        return entity;
    }

    _processState(ids, objects, id, roomName, funcName, result) {
        if (!id) {
            return;
        }

        let friendlyName = this._getSmartName(objects, id);
        if (typeof friendlyName === 'object' && friendlyName) {
            friendlyName = friendlyName[this.lang] || friendlyName.en;
        }

        if (friendlyName === 'ignore' || friendlyName === false) {
            return;
        }

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
                controls.forEach(control => {
                    if (this.converter[control.type]) {
                        result[id] = this.converter[control.type](id, control, friendlyName, roomName, funcName, objects[id]);
                        if (result[id].context.STATE) {
                            this._objects[result[id].context.STATE.getId] = objects[result[id].context.STATE.getId];
                            this._objects[result[id].context.STATE.setId] = objects[result[id].context.STATE.setId];
                        }
                        if (result[id].context.ATTRIBUTES) {
                            result[id].context.ATTRIBUTES.forEach(attr => {
                                this._objects[attr.getId] = objects[attr.getId];
                                this._objects[attr.setId] = objects[attr.setId];
                            });
                        }

                        this.adapter.log.debug('[Type-Detector] Created auto device: ' + result[id].entity_id + ' - ' + control.type + ' - ' + id);
                    }
                });
            } else {
                console.log(`[Type-Detector] Nothing found for ${options.id}`);
            }
        } catch (e) {
            this.adapter.log.error('[Type-Detector] Cannot process "' + id + '": ' + e);
        }
    }

    _updateDevices() {
        return this._readObjects()
            .then(data => {
                const {objects, enums} = data;
                const ids      = Object.keys(objects);

                this.enums   = [];
                this.enums   = [];
                this.usedIds = [];
                this.keys    = [];

                ids.sort();

                // Build overlap from rooms and functions
                const rooms = [];
                const funcs = [];
                let smartName;
                Object.keys(enums).forEach(id => {
                    smartName = this._getSmartName(enums[id]);
                    if (id.match(/^enum\.rooms\./)     && smartName !== 'ignore' && smartName !== false) {
                        rooms.push(id);
                    } else
                    if (id.match(/^enum\.functions\./) && smartName !== 'ignore' && smartName !== false) {
                        funcs.push(id);
                    }
                });

                const result = {};
                const roomNames = {};
                funcs.forEach(funcId => {
                    const func = enums[funcId];
                    if (!func.common || !func.common.members || typeof func.common.members !== 'object' || !func.common.members.length) return;

                    // Get the name of function (with language and if name is empty)
                    let funcName = this._getSmartName(func);
                    funcName = funcName || func.common.name;
                    if (funcName && typeof funcName === 'object') funcName = funcName[this.lang] || funcName.en;
                    if (!funcName) {
                        funcName = funcId.substring('enum.functions.'.length);
                        funcName = funcName[0].toUpperCase() + funcName.substring(1);
                    }

                    func.common.members.forEach(id => {
                        rooms.forEach(roomId => {
                            const room = enums[roomId];
                            if (!room.common || !room.common.members || typeof func.common.members !== 'object' || !room.common.members.length) return;

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

                                this._processState(ids, objects, id, roomNames[roomId], funcName, result);
                            }
                        });
                    });
                });

                this.usedIds = null;
                this.keys    = null;

                Object.keys(result).forEach(id => this.adapter.log.debug(`AUTO Device detected: ${id} => ${result[id].context.type}`));

                return result;
            });
    }

    _readObjects() {
        return new Promise(resolve => {
            this.adapter.objects.getObjectView('system', 'state', {}, (err, _states) => {
                this.adapter.objects.getObjectView('system', 'channel', {}, (err, _channels) => {
                    this.adapter.objects.getObjectView('system', 'device', {}, (err, _devices) => {
                        this.adapter.objects.getObjectView('system', 'enum', {}, (err, _enums) => {
                            const objects = {};
                            const enums = {};
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
                            resolve({objects, enums});
                        });
                    });
                });
            });
        });
    }

    _getObjectName(obj, _lang) {
        _lang = _lang || this.lang;

        if (obj.common && obj.common.name) {
            if (typeof obj.common.name === 'object') {
                if (obj.common.name[_lang] || obj.common.name.en) {
                    return obj.common.name[_lang] || obj.common.name.en;
                } else {
                    const lang = Object.keys(obj.common.name).find(lang => obj.common.name[lang]);
                    if (obj.common.name[lang]) {
                        return obj.common.name[lang];
                    } else {
                        return obj._id;
                    }
                }
            } else {
                return obj.common.name;
            }
        } else {
            return obj._id;
        }
    }

    _generateName(obj, lang) {
        return this._getObjectName(obj, lang).replace(/[^-._\w0-9]/g, '_');
    }

    _processEntities(ids, cb, _entities) {
        _entities = _entities || [];
        if (!ids || !ids.length) {
            cb && cb();
        } else {
            const id = ids.shift();
            this._processEntity(id, _entities, () =>
                setImmediate(() => this._processEntities(ids, cb, _entities)));
        }
    }

    _processEntity(id, _entities, cb) {
        this.adapter.getForeignObject(id, (err, obj) => {
            const entityType = obj.common.custom[this.adapter.namespace].entity;
            const name = obj.common.custom[this.adapter.namespace].name || this._generateName(obj, 'en');

            const entity = this._processCommon(id, name, null, null, obj, entityType);

            entity.context.getStateID = id;
            entity.context.setStateID = id;

            if (entityType === 'light') {
                // entity.attributes.brightness
                // entity.attributes.hs_color
            }

            //entity.state = this._iobState2EntityState(obj._id, state.val);
            this._objects[id] = entity;
            cb && cb();
        });
    }

    _iobState2EntityState(id, val, type) {
        type = type || this._ID2entity[id].context.type;

        if (type === 'light') {
            return val ? 'on' : 'off';
        } else {
            return val === null ? 'unknown' : val;
        }
    }

    _manageSubscribesFromConfig() {
        const ids = [];
        this._lovelaceConfig.views.forEach(view =>
            view.cards.forEach(card => {
                card.entity && ids.indexOf(card.entity) === -1 && ids.push(card.entity);
                card.entities && card.entities.forEach(subCard => subCard.entity && ids.indexOf(subCard.entity) === -1 && ids.push(subCard.entity));
            }));

        const newIds = ids.filter(id => this._subscribed.indexOf(id) === -1 && this._entity2ID[id]);
        const deleted = this._subscribed.filter(id => ids.indexOf(id) === -1 && this._entity2ID[id]);

        deleted.forEach(id => {
            const entity = this._entity2ID[id];
            entity.context.STATE.getId && this.adapter.unsubscribeForeignStates(entity.context.STATE.getId);
            this.log.debug('IoB UnSubscribe on ' + entity.context.STATE.getId);
            if (entity.context.ATTRIBUTES) {
                entity.context.ATTRIBUTES.forEach(attr => {
                    this.log.debug('IoB UnSubscribe on ' + attr.getId);
                    attr.getId && this.adapter.unsubscribeForeignStates(attr.getId);
                });
            }
        });
        newIds.forEach(id => {
            const entity = this._entity2ID[id];
            this.log.debug('IoB Subscribe on ' + entity.context.STATE.getId);
            entity.context.STATE.getId && this.adapter.subscribeForeignStates(entity.context.STATE.getId);
            if (entity.context.ATTRIBUTES) {
                entity.context.ATTRIBUTES.forEach(attr => {
                    this.log.debug('IoB Subscribe on ' + attr.getId);
                    attr.getId && this.adapter.subscribeForeignStates(attr.getId);
                });
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
            lang: 'en-US',
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

    _getHassStates() {
        // parse config for entity_ids
        return this._entities;

        return [
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
        ];
    }

    _init() {
        this._app.use(bodyParser.urlencoded({ extended: false }));
        this._app.use(bodyParser.json());

        // on http://localhost:3000/auth/authorize?response_type=code&client_id=http%3A%2F%2Flocalhost%3A3000%2F&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flovelace%3Fauth_callback%3D1&state=eyJoYXNzVXJsIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiY2xpZW50SWQiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAvIn0%3D
        this._app.use('/auth/authorize', (req, res) => {
            res.setHeader('location', '/frontend_es5/authorize.html' + req.url.replace(/^\//, ''));
            res.status(302).send();
        });

        this._app.use('/auth/providers', (req, res) =>
            res.json([{id: null, name: 'ioBroker Local', type: 'iobroker'}]));

        this._app.post('/auth/login_flow', (req, res) => {
            res.json({
                data_schema: [
                    {name: 'username', type: 'string'},
                    {name: 'password', type: 'string'}
                ],
                description_placeholders: null,
                errors: {},
                flow_id: '5adb1c570f7a4faa8bac803c2238250f',
                handler: ['iobroker', null],
                step_id: 'init',
                type: 'form'
            });
        });

        this._app.post('/auth/token', (req, res) => {
            res.json({
                access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5Yjc5Y2Q2OTZmN2U0ZDc2OTg1NGU4NGQ3YmY4NzNlMyIsImlhdCI6MTU1ODAwOTE1MywiZXhwIjoxNTU4MDEwOTUzfQ.QL9qA0QeOxfMoxPUfxH1kEZDGnDNlSHbQeMF8z2xLw0',
                expires_in: 1800,
                refresh_token: 'ac4b44b09a29251aaef0778189cef352e0e1e91b6cd6e4f4bfd14361b57029d228740dc544f43e20e2eb03e057105bf86c58b9087f6dfb5f0a5fc3b40ac0fa43',
                token_type: 'Bearer'
            });
        });

        this._app.post('/auth/login_flow/:id', (req, res) => {
            res.json({
                description: null,
                description_placeholders: null,
                flow_id: 'd7081da9427842ff8fb75fcae4e68624',
                handler: ['iobroker', null],
                result: 'f9400f7ab5024266a0f335bb0f3f4885',
                title: 'ioBroker Local',
                type: 'create_entry',
                version: 1
            });
        });

        this._app.use((req, res, next) => {
            if (req.url.match(/\/authorize\.html/)) {
                this.log.debug('authorize.html');
                res.send(this._renderAuthorize());
            } else {
                next();
            }
        });

        this._app.get('api/history/period/*', (req, res) => {
            res.json({});
        });

        this._app.get('/', (req, res) => res.send(this._renderIndex()));
        this._app.get('/lovelace', (req, res) => res.send(this._renderIndex()));
        this._app.get('/lovelace/:id', (req, res) => res.send(this._renderIndex()));
        this._app.get('/manifest.json', (req, res) => res.json(this._renderManifest()));

        this._app.use('/frontend_latest/', express.static(getRootPath()));
        this._app.use('/static/icons/', express.static(__dirname + '/../assets/icons/'));
        this._app.use('/static/', express.static(getRootPath()));
        this._app.use(express.static(getRootPath()));

        //initialize the WebSocket server instance
        this._wss = new WebSocket.Server({server: this._server});

        this._wss.on('connection', ws => this._initConnection(ws));
    }

    _getLayoutConfig() {
        return this._lovelaceConfig;
    }

    _setLayoutConfig(config) {
        this.adapter.getObject('configuration', (err, obj) => {
            obj.native = config;
            this.adapter.setObject('configuration', obj, err =>
                err && this.log.error('Cannot save config: ' + err));
        });

    }

    _getCurrentUser() {
        return {
            id: '3051467331c84c45a2a4f4e4fbdadaaf',
            name: 'Admin',
            is_owner: true,
            is_admin: true,
            credentials: [{auth_provider_type: 'iobroker', auth_provider_id: null}],
            mfa_modules: [{id: 'totp', name: 'Authenticator app', enabled: false}]
        };
    }

    _getTranslations() {
        return {
            resources: require('./translations/de.json')
        };
    }

    _processCall(ws, data) {
        let id = data.service_data.entity_id;
        if (!this._entity2ID[id]) {
            this.log.warn('Unknown entity: ' + id);
            return;
        }
        const entity = this._entity2ID[id];
        id = entity.context.STATE.setId;

        if (data.service === 'toggle') {
            this.log.debug('toggle ' + id);

            this.adapter.getForeignState(id, (err, state) =>
                this.adapter.setForeignState(id, state ? !state.val : true, _err =>
                    this._sendResponse(ws, data.id)));
        } else if (data.service === 'volume_set') {
            this.log.debug('volume_set ' + id);

            this.adapter.setForeignState(id, data.service_data.value, _err =>
                this._sendResponse(ws, data.id));
        } else if (data.service === 'trigger' || data.service === 'turn_on') {
            this.log.debug('turn_on ' + id);

            this.adapter.setForeignState(id, true, _err => {
                this._sendResponse(ws, data.id);

                if (data.service_data.brightness_pct !== undefined) {
                    if (entity.context.ATTRIBUTES) {
                        const attr = entity.context.ATTRIBUTES.find(attr => attr.attribute === 'brightness');
                        if (attr) {
                            this.adapter.setForeignState(attr.setId, data.service_data.brightness_pct);
                        }
                    }
                }
            });
        } else if (data.service === 'turn_off') {
            this.log.debug('turn_off ' + id);

            this.adapter.setForeignState(id, false, _err =>
                this._sendResponse(ws, data.id));
        } else if (data.service === 'set_page') {
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

            this.adapter.setForeignState(id, data.service_data[data.service.substring(4)], _err =>
                this._sendResponse(ws, data.id));
        } else if (data.service === 'volume_mute') {
            this.log.debug('volume_mute ' + id + ' = ' + data.service_data.is_volume_muted);
            // volume_mute        => service_data.is_volume_muted

            this.adapter.setForeignState(id, data.service_data.is_volume_muted, _err =>
                this._sendResponse(ws, data.id));
        } else if (data.service.match(/^select_/)) {
            this.log.debug(data.service + ': ' + id + ' = ' + data.service_data[data.service.substring(7)]);
            // select_option      => service_data.option
            // select_source      => service_data.source

            this.adapter.setForeignState(id, data.service_data[data.service.substring(7)], _err =>
                this._sendResponse(ws, data.id));
        } else {
            this.log.warn('Unknown service: ' + data.service + ' (' + JSON.stringify(data) + ')');
            // close_cover, open_cover
            // set_datetime       => service_data.date, service_data.time

            //{'id": 21, "type": "result", "success": false, "error": {"code": "not_found", "message": "Service not found."}}
            ws.send(JSON.stringify({id, type: 'result', success: false, error: {code: 'not_found', message: 'Service not found.'}}));
        }
    }

    _sendResponse(ws, id, result) {
        ws.send(JSON.stringify({id, type: 'result', success: true, result: result || null}));
    }

    _initConnection(ws) {
        ws._subscribes = {};
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
                this.log.debug('HASS Subscribe: ' + message.event_type);
                ws._subscribes[message.event_type] = ws._subscribes[message.event_type] || [];
                ws._subscribes[message.event_type].push(message.id);
                this._sendResponse(ws, message.id);
            } else
            if (message.type === 'unsubscribe_events') {
                this.log.debug('HASS UnSubscribe: ' + JSON.stringify(message));
                if (ws._subscribes[message.event_type]) {
                    const pos = ws._subscribes[message.event_type].indexOf(message.subscription);
                    if (pos !== -1) {
                        ws._subscribes[message.event_type].splice(pos, 1);
                    }

                    if (!ws._subscribes[message.event_type].length) {
                        delete ws._subscribes[message.event_type];
                    }
                }
                this._sendResponse(ws, message.id);
            } else
            if (message.type === 'get_states') {
                this._sendResponse(ws, message.id, this._getHassStates());
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
            if (message.type === 'config/entity_registry/get') {
                // todo What is that?
                this.log.debug('Get entity_registry: ' + message.entity_id);
                this._sendResponse(ws, message.id, null);
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

    onObjectChange(id, obj) {
        if (id === this.adapter.namespace + '.configuration') {
            this._lovelaceConfig = obj.native;
            this._manageSubscribesFromConfig();
        } else if (id === 'system.config') {
            this.lang = obj.common.language;
        }
    }

    onStateChange(id, state) {
        const entity = this._ID2entity[id];
        if (entity) {
            // {id: 2, type: "event", "event": {"event_type": "state_changed", "data": {"entity_id": "sun.sun", "old_state": {"entity_id": "sun.sun", "state": "above_horizon", "attributes": {"next_dawn": "2019-05-17T02:57:08+00:00", "next_dusk": "2019-05-16T19:44:32+00:00", "next_midnight": "2019-05-16T23:21:40+00:00", "next_noon": "2019-05-17T11:21:38+00:00", "next_rising": "2019-05-17T03:36:58+00:00", "next_setting": "2019-05-16T19:04:54+00:00", "elevation": 54.81, "azimuth": 216.35, "friendly_name": "Sun"}, "last_changed": "2019-05-16T09:09:53.424242+00:00", "last_updated": "2019-05-16T12:46:30.001390+00:00", "context": {id: "05356b1a7df54b2f939d3c7f8a3e05b4", "parent_id": null, "user_id": null}}, "new_state": {"entity_id": "sun.sun", "state": "above_horizon", "attributes": {"next_dawn": "2019-05-17T02:57:08+00:00", "next_dusk": "2019-05-16T19:44:32+00:00", "next_midnight": "2019-05-16T23:21:40+00:00", "next_noon": "2019-05-17T11:21:38+00:00", "next_rising": "2019-05-17T03:36:58+00:00", "next_setting": "2019-05-16T19:04:54+00:00", "elevation": 54.71, "azimuth": 216.72, "friendly_name": "Sun"}, "last_changed": "2019-05-16T09:09:53.424242+00:00", "last_updated": "2019-05-16T12:47:30.000414+00:00", "context": {id: "e738dc26af1d48b4964c6d9805179595", "parent_id": null, "user_id": null}}}, "origin": "LOCAL", "time_fired": "2019-05-16T12:47:30.000414+00:00", "context": {id: "e738dc26af1d48b4964c6d9805179595", "parent_id": null, "user_id": null}}}
            if (entity.context.STATE.getId === id) {
                entity.state = this._iobState2EntityState(id, state.val);
                entity.last_changed = new Date(state.lc).toISOString();
                entity.last_updated = new Date(state.ts).toISOString();
            } else if (entity.context.ATTRIBUTES) {
                const attr = entity.context.ATTRIBUTES.find(e => e.getId === id);
                if (attr) {
                    entity.last_changed = new Date(state.lc).toISOString();
                    entity.last_updated = new Date(state.ts).toISOString();
                    entity.attributes[attr.attribute] = this._iobState2EntityState(null, state.val, attr.attribute);
                } else {
                    return;
                }
            }

            const t = {
                type: 'event',
                event: {
                    event_type: 'state_changed',
                    data: {
                        entity_id: this._ID2entity[id].entity_id,
                        new_state: this._ID2entity[id]
                    },
                    origin: 'LOCAL',
                    time_fired: new Date(state.ts).toISOString()
                }
            };

            this._wss.clients.forEach(ws => {
                if (ws._subscribes && ws._subscribes.state_changed) {
                    ws._subscribes.state_changed.forEach(id => {
                        t.id = id;
                        ws.send(JSON.stringify(t));
                    });
                }
            });
        }
    }

    destroy(cb) {
        this.adapter.unsubscribeObjects('configuration', cb);
    }
}

module.exports = WebServer;