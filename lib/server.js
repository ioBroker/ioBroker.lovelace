const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
//const ROOT_DIR = '../home-assistant-polymer/hass_frontend';
const ROOT_DIR = './hass_frontend';

function getRootPath() {
    if (ROOT_DIR.match(/^\w:/) || ROOT_DIR.startsWith('/')) {
        return ROOT_DIR + '/';
    } else {
        return __dirname + '/' + ROOT_DIR + '/';
    }
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let indexHtml;

function renderIndex() {
    if (indexHtml) {
        return indexHtml;
    }
    let text = fs.readFileSync(getRootPath() + 'index.html').toString('utf-8');
    const lines = text.split('\n');
    const nLines = [];
    let template = false;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim().match(/^{%/)) {
            template = !template;
            continue;
        }
        if (template) continue;
        nLines.push(lines[i]);
    }
    indexHtml = nLines.join('\n');
    indexHtml = indexHtml.replace(/{{ no_auth }}/g, '1');
    indexHtml = indexHtml.replace(/{{ use_oauth }}/g, '0');
    indexHtml = indexHtml.replace(/{{ theme_color }}/g, renderManifest().theme_color);
    return indexHtml;
}

function renderManifest() {
    return {
        "background_color": "#FFFFFF",
        "description": "Open-source home automation platform running on Node.js.",
        "dir": "ltr",
        "display": "standalone",
        "icons": [{
            "sizes": "192x192",
            "src": "/static/icons/favicon-192x192.png",
            "type": "image/png"
        }, {"sizes": "384x384", "src": "/static/icons/favicon-384x384.png", "type": "image/png"}, {
            "sizes": "512x512",
            "src": "/static/icons/favicon-512x512.png",
            "type": "image/png"
        }, {"sizes": "1024x1024", "src": "/static/icons/favicon-1024x1024.png", "type": "image/png"}],
        "lang": "en-US",
        "name": "ioBroker",
        "short_name": "IoB",
        "start_url": "/?homescreen=1",
        "theme_color": "#03A9F4"
    };
}

// on http://localhost:3000/auth/authorize?response_type=code&client_id=http%3A%2F%2Flocalhost%3A3000%2F&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flovelace%3Fauth_callback%3D1&state=eyJoYXNzVXJsIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiY2xpZW50SWQiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAvIn0%3D
app.use('/auth/authorize', (req, res) => {
    res.setHeader('location', '/frontend_es5/authorize.html' + req.url.replace(/^\//, ''));
    res.status(302).send();
});
app.use('/auth/providers', (req, res) => {
    res.json([{"id": null, "name": "Home Assistant Local", "type": "homeassistant"}]);
});

app.post('/auth/login_flow', (req, res) => {
    res.json({
        "data_schema": [{"name": "username", "type": "string"}, {"name": "password", "type": "string"}],
        "description_placeholders": null,
        "errors": {},
        "flow_id": "5adb1c570f7a4faa8bac803c2238250f",
        "handler": ["homeassistant", null],
        "step_id": "init",
        "type": "form"
    });
});

app.post('/auth/token', (req, res) => {
    res.json({
        "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5Yjc5Y2Q2OTZmN2U0ZDc2OTg1NGU4NGQ3YmY4NzNlMyIsImlhdCI6MTU1ODAwOTE1MywiZXhwIjoxNTU4MDEwOTUzfQ.QL9qA0QeOxfMoxPUfxH1kEZDGnDNlSHbQeMF8z2xLw0",
        "expires_in": 1800,
        "refresh_token": "ac4b44b09a29251aaef0778189cef352e0e1e91b6cd6e4f4bfd14361b57029d228740dc544f43e20e2eb03e057105bf86c58b9087f6dfb5f0a5fc3b40ac0fa43",
        "token_type": "Bearer"
    });
});

app.post('/auth/login_flow/:id', (req, res) => {
    res.json({
        "description": null,
        "description_placeholders": null,
        "flow_id": "d7081da9427842ff8fb75fcae4e68624",
        "handler": ["homeassistant", null],
        "result": "f9400f7ab5024266a0f335bb0f3f4885",
        "title": "Home Assistant Local",
        "type": "create_entry",
        "version": 1
    });
});

app.use((req, res, next) => {
    if (req.url.match(/\/authorize\.html/)) {
        console.log('authorize.html');
        res.send(fs.readFileSync(getRootPath() + 'authorize.html').toString('utf-8'));
    } else {
        next();
    }
});

app.get('/', (req, res) => res.send(renderIndex()));
app.get('/lovelace', (req, res) => res.send(renderIndex()));
app.get('/lovelace/:id', (req, res) => res.send(renderIndex()));
app.get('/manifest.json', (req, res) => res.json(renderManifest()));

app.use('/frontend_latest/', express.static(getRootPath()));
app.use('/static/', express.static(getRootPath()));
app.use(express.static(getRootPath()));

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });
let lovelaceConfig = null;

wss.on('connection', ws => {
    const subcribes = {};
    let testTimer = null;

    //connection is up, let's add a simple simple event
    ws.on('message', message => {
        try {
            message = JSON.parse(message);
        } catch (e) {
            console.error('Cannot parse message: ' + message);
            return;
        }
        console.log('MESSAGE: ' + message.type);
        if (message.type === 'auth') {
            ws.send(JSON.stringify({type: "auth_required", ha_version: "0.92.2"}));
            ws.send(JSON.stringify({type: "auth_ok", ha_version: "0.92.2"}));
        } else
        if (message.type === 'subscribe_events') {
            console.log(message.event_type);
            subcribes[message.event_type] = subcribes[message.event_type] || [];
            subcribes[message.event_type].push(message.id);
            ws.send(JSON.stringify({id: message.id, type: "result", success: true, result: null}));
        }  else
        if (message.type === 'unsubscribe_events') {
            console.log(JSON.stringify(message));
            if (subcribes[message.event_type]) {
                const pos = subcribes[message.event_type].indexOf(message.subscription);
                if (pos !== -1) {
                    subcribes[message.event_type].splice(pos, 1);
                }

                if (!subcribes[message.event_type].length) {
                    delete subcribes[message.event_type]
                }
            }
            ws.send(JSON.stringify({id: message.id, type: "result", success: true, result: null}));
        } else
        if (message.type === 'get_states') {
            var t = {
                "id": message.id,
                "type": "result",
                "success": true,
                "result": [{
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
                    "context": {"id": "05356b1a7df54b2f939d3c7f8a3e05b4", "parent_id": null, "user_id": null}
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
                    "context": {"id": "42760245d5a84438a4e2989bd39d31ef", "parent_id": null, "user_id": null}
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
                    "context": {"id": "ce038a425b484d27945e375ca2145ce9", "parent_id": null, "user_id": null}
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
                    "context": {"id": "ec4352089b944195a6b2de382fbd5b02", "parent_id": null, "user_id": null}
                }, {
                    "entity_id": "person.bluefox_2",
                    "state": "unknown",
                    "attributes": {
                        "editable": true,
                        "id": "dd034ace5a6f44a5bcb064c3284684c9",
                        "user_id": "3051467331c84c45a2a4f4e4fbdadaaf",
                        "friendly_name": "Bluefox"
                    },
                    "last_changed": "2019-05-16T09:10:07.335375+00:00",
                    "last_updated": "2019-05-16T09:10:07.769945+00:00",
                    "context": {"id": "4779500d25a3412493f92952e81c2248", "parent_id": null, "user_id": null}
                }, {
                    "entity_id": "person.bluefox",
                    "state": "unknown",
                    "attributes": {
                        "editable": true,
                        "id": "c110b265fd8b460d89f8b184e39c622c",
                        "user_id": "4e645b6d65ea4473b31a69d685781a17",
                        "friendly_name": "Bluefox"
                    },
                    "last_changed": "2019-05-16T09:10:07.335375+00:00",
                    "last_updated": "2019-05-16T09:10:07.769945+00:00",
                    "context": {"id": "d9cf0d3c16974a04a1363e9c726cef55", "parent_id": null, "user_id": null}
                }]
            };
            ws.send(JSON.stringify(t));
        } else
        if (message.type === 'get_config') {
            var t = {
                "id": message.id,
                "type": "result",
                "success": true,
                "result": {
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
                    "components": ["zeroconf", "onboarding", "logbook", "auth", "notify", "persistent_notification", "map", "conversation", "default_config", "lovelace", "history", "zone", "device_tracker", "homeassistant", "websocket_api", "mobile_app", "group", "script", "webhook", "updater", "sensor", "system_log", "http", "tts", "system_health", "person", "config", "cloud", "automation", "recorder", "notify.mobile_app", "sensor.yr", "api", "discovery", "frontend", "sun"],
                    "config_dir": "C:\\Users\\siemens\\AppData\\Roaming\\.homeassistant",
                    "whitelist_external_dirs": ["C:\\Users\\siemens\\AppData\\Roaming\\.homeassistant\\www"],
                    "version": "0.92.2"
                }
            };
            ws.send(JSON.stringify(t));
        } else
        if (message.type === 'get_services') {
            var t = {
                "id":  message.id,
                "type": "result",
                "success": true,
                "result": {
                    "persistent_notification": {
                        "create": {
                            "description": "Show a notification in the frontend.",
                            "fields": {
                                "message": {
                                    "description": "Message body of the notification. [Templates accepted]",
                                    "example": "Please check your configuration.yaml."
                                },
                                "title": {
                                    "description": "Optional title for your notification. [Optional, Templates accepted]",
                                    "example": "Test notification"
                                },
                                "notification_id": {
                                    "description": "Target ID of the notification, will replace a notification with the same Id. [Optional]",
                                    "example": 1234
                                }
                            }
                        },
                        "dismiss": {
                            "description": "Remove a notification from the frontend.",
                            "fields": {
                                "notification_id": {
                                    "description": "Target ID of the notification, which should be removed. [Required]",
                                    "example": 1234
                                }
                            }
                        },
                        "mark_read": {"description": "", "fields": {}}
                    },
                    "homeassistant": {
                        "turn_off": {
                            "description": "Generic service to turn devices off under any domain. Same usage as the light.turn_on, switch.turn_on, etc. services.",
                            "fields": {
                                "entity_id": {
                                    "description": "The entity_id of the device to turn off.",
                                    "example": "light.living_room"
                                }
                            }
                        },
                        "turn_on": {
                            "description": "Generic service to turn devices on under any domain. Same usage as the light.turn_on, switch.turn_on, etc. services.",
                            "fields": {
                                "entity_id": {
                                    "description": "The entity_id of the device to turn on.",
                                    "example": "light.living_room"
                                }
                            }
                        },
                        "toggle": {
                            "description": "Generic service to toggle devices on/off under any domain. Same usage as the light.turn_on, switch.turn_on, etc. services.",
                            "fields": {
                                "entity_id": {
                                    "description": "The entity_id of the device to toggle on/off.",
                                    "example": "light.living_room"
                                }
                            }
                        },
                        "stop": {"description": "Stop the Home Assistant service.", "fields": {}},
                        "restart": {"description": "Restart the Home Assistant service.", "fields": {}},
                        "check_config": {
                            "description": "Check the Home Assistant configuration files for errors. Errors will be displayed in the Home Assistant log.",
                            "fields": {}
                        },
                        "update_entity": {
                            "description": "Force one or more entities to update its data",
                            "fields": {
                                "entity_id": {
                                    "description": "One or multiple entity_ids to update. Can be a list.",
                                    "example": "light.living_room"
                                }
                            }
                        },
                        "reload_core_config": {"description": "Reload the core configuration.", "fields": {}}
                    },
                    "system_log": {
                        "clear": {"description": "Clear all log entries.", "fields": {}},
                        "write": {
                            "description": "Write log entry.",
                            "fields": {
                                "message": {
                                    "description": "Message to log. [Required]",
                                    "example": "Something went wrong"
                                },
                                "level": {
                                    "description": "Log level: debug, info, warning, error, critical. Defaults to 'error'.",
                                    "example": "debug"
                                },
                                "logger": {
                                    "description": "Logger name under which to log the message. Defaults to 'system_log.external'.",
                                    "example": "mycomponent.myplatform"
                                }
                            }
                        }
                    },
                    "recorder": {
                        "purge": {
                            "description": "Start purge task - delete events and states older than x days, according to keep_days service data.",
                            "fields": {
                                "keep_days": {
                                    "description": "Number of history days to keep in database after purge. Value >= 0.",
                                    "example": 2
                                },
                                "repack": {
                                    "description": "Attempt to save disk space by rewriting the entire database file.",
                                    "example": true
                                }
                            }
                        }
                    },
                    "group": {
                        "reload": {"description": "Reload group configuration.", "fields": {}},
                        "set": {
                            "description": "Create/Update a user group.",
                            "fields": {
                                "object_id": {
                                    "description": "Group id and part of entity id.",
                                    "example": "test_group"
                                },
                                "name": {"description": "Name of group", "example": "My test group"},
                                "view": {"description": "Boolean for if the group is a view.", "example": true},
                                "icon": {"description": "Name of icon for the group.", "example": "mdi:camera"},
                                "control": {"description": "Value for control the group control.", "example": "hidden"},
                                "visible": {"description": "If the group is visible on UI.", "example": true},
                                "entities": {
                                    "description": "List of all members in the group. Not compatible with 'delta'.",
                                    "example": "domain.entity_id1, domain.entity_id2"
                                },
                                "add_entities": {
                                    "description": "List of members they will change on group listening.",
                                    "example": "domain.entity_id1, domain.entity_id2"
                                },
                                "all": {
                                    "description": "Enable this option if the group should only turn on when all entities are on.",
                                    "example": true
                                }
                            }
                        },
                        "remove": {
                            "description": "Remove a user group.",
                            "fields": {
                                "object_id": {
                                    "description": "Group id and part of entity id.",
                                    "example": "test_group"
                                }
                            }
                        },
                        "set_visibility": {
                            "description": "Hide or show a group.",
                            "fields": {
                                "entity_id": {
                                    "description": "Name(s) of entities to set value.",
                                    "example": "group.travel"
                                },
                                "visible": {
                                    "description": "True if group should be shown or False if it should be hidden.",
                                    "example": true
                                }
                            }
                        }
                    },
                    "conversation": {
                        "process": {
                            "description": "Launch a conversation from a transcribed text.",
                            "fields": {"text": {"description": "Transcribed text", "example": "Turn all lights on"}}
                        }
                    },
                    "script": {
                        "reload": {"description": "Reload all the available scripts", "fields": {}},
                        "turn_on": {
                            "description": "Turn on script",
                            "fields": {
                                "entity_id": {
                                    "description": "Name(s) of script to be turned on.",
                                    "example": "script.arrive_home"
                                }
                            }
                        },
                        "turn_off": {
                            "description": "Turn off script",
                            "fields": {
                                "entity_id": {
                                    "description": "Name(s) of script to be turned off.",
                                    "example": "script.arrive_home"
                                }
                            }
                        },
                        "toggle": {
                            "description": "Toggle script",
                            "fields": {
                                "entity_id": {
                                    "description": "Name(s) of script to be toggled.",
                                    "example": "script.arrive_home"
                                }
                            }
                        }
                    },
                    "device_tracker": {
                        "see": {
                            "description": "Control tracked device.",
                            "fields": {
                                "mac": {"description": "MAC address of device", "example": "FF:FF:FF:FF:FF:FF"},
                                "dev_id": {
                                    "description": "Id of device (find id in known_devices.yaml).",
                                    "example": "phonedave"
                                },
                                "host_name": {"description": "Hostname of device", "example": "Dave"},
                                "location_name": {
                                    "description": "Name of location where device is located (not_home is away).",
                                    "example": "home"
                                },
                                "gps": {
                                    "description": "GPS coordinates where device is located (latitude, longitude).",
                                    "example": "[51.509802, -0.086692]"
                                },
                                "gps_accuracy": {"description": "Accuracy of GPS coordinates.", "example": "80"},
                                "battery": {"description": "Battery level of device.", "example": "100"}
                            }
                        }
                    },
                    "automation": {
                        "trigger": {
                            "description": "Trigger the action of an automation.",
                            "fields": {
                                "entity_id": {
                                    "description": "Name of the automation to trigger.",
                                    "example": "automation.notify_home"
                                }
                            }
                        },
                        "reload": {"description": "Reload the automation configuration.", "fields": {}},
                        "toggle": {
                            "description": "Toggle an automation.",
                            "fields": {
                                "entity_id": {
                                    "description": "Name of the automation to toggle on/off.",
                                    "example": "automation.notify_home"
                                }
                            }
                        },
                        "turn_on": {
                            "description": "Enable an automation.",
                            "fields": {
                                "entity_id": {
                                    "description": "Name of the automation to turn on.",
                                    "example": "automation.notify_home"
                                }
                            }
                        },
                        "turn_off": {
                            "description": "Disable an automation.",
                            "fields": {
                                "entity_id": {
                                    "description": "Name of the automation to turn off.",
                                    "example": "automation.notify_home"
                                }
                            }
                        }
                    },
                    "cloud": {
                        "remote_connect": {
                            "description": "Make instance UI available outside over NabuCasa cloud.",
                            "fields": {}
                        }, "remote_disconnect": {"description": "Disconnect UI from NabuCasa cloud.", "fields": {}}
                    },
                    "tts": {
                        "google_translate_say": {"description": "", "fields": {}},
                        "clear_cache": {"description": "Remove cache files and RAM cache.", "fields": {}}
                    },
                    "logbook": {"log": {"description": "", "fields": {}}},
                    "notify": {
                        "notify": {
                            "description": "Send a notification.",
                            "fields": {
                                "message": {
                                    "description": "Message body of the notification.",
                                    "example": "The garage door has been open for 10 minutes."
                                },
                                "title": {
                                    "description": "Optional title for your notification.",
                                    "example": "Your Garage Door Friend"
                                },
                                "target": {
                                    "description": "An array of targets to send the notification to. Optional depending on the platform.",
                                    "example": "platform specific"
                                },
                                "data": {
                                    "description": "Extended information for notification. Optional depending on the platform.",
                                    "example": "platform specific"
                                }
                            }
                        }
                    }
                }
            };
            ws.send(JSON.stringify(t));
        } else
        if (message.type === 'get_panels') {
            var t = {
                "id": message.id,
                "type": "result",
                "success": true,
                "result": {
                    "lovelace": {
                        "component_name": "lovelace",
                        "icon": null,
                        "title": null,
                        "config": {"mode": "storage"},
                        "url_path": "lovelace",
                        "require_admin": false
                    },
                    "history": {
                        "component_name": "history",
                        "icon": "hass:poll-box",
                        "title": "history",
                        "config": null,
                        "url_path": "history",
                        "require_admin": false
                    },
                    "config": {
                        "component_name": "config",
                        "icon": "hass:settings",
                        "title": "config",
                        "config": null,
                        "url_path": "config",
                        "require_admin": true
                    },
                    "kiosk": {
                        "component_name": "kiosk",
                        "icon": null,
                        "title": null,
                        "config": null,
                        "url_path": "kiosk",
                        "require_admin": false
                    },
                    "profile": {
                        "component_name": "profile",
                        "icon": null,
                        "title": null,
                        "config": null,
                        "url_path": "profile",
                        "require_admin": false
                    },
                    "states": {
                        "component_name": "states",
                        "icon": null,
                        "title": null,
                        "config": null,
                        "url_path": "states",
                        "require_admin": false
                    },
                    "dev-service": {
                        "component_name": "dev-service",
                        "icon": null,
                        "title": null,
                        "config": null,
                        "url_path": "dev-service",
                        "require_admin": true
                    },
                    "dev-mqtt": {
                        "component_name": "dev-mqtt",
                        "icon": null,
                        "title": null,
                        "config": null,
                        "url_path": "dev-mqtt",
                        "require_admin": true
                    },
                    "dev-template": {
                        "component_name": "dev-template",
                        "icon": null,
                        "title": null,
                        "config": null,
                        "url_path": "dev-template",
                        "require_admin": true
                    },
                    "dev-event": {
                        "component_name": "dev-event",
                        "icon": null,
                        "title": null,
                        "config": null,
                        "url_path": "dev-event",
                        "require_admin": true
                    },
                    "dev-state": {
                        "component_name": "dev-state",
                        "icon": null,
                        "title": null,
                        "config": null,
                        "url_path": "dev-state",
                        "require_admin": true
                    },
                    "dev-info": {
                        "component_name": "dev-info",
                        "icon": null,
                        "title": null,
                        "config": null,
                        "url_path": "dev-info",
                        "require_admin": true
                    },
                    "logbook": {
                        "component_name": "logbook",
                        "icon": "hass:format-list-bulleted-type",
                        "title": "logbook",
                        "config": null,
                        "url_path": "logbook",
                        "require_admin": false
                    },
                    "map": {
                        "component_name": "map",
                        "icon": "hass:tooltip-account",
                        "title": "map",
                        "config": null,
                        "url_path": "map",
                        "require_admin": false
                    }
                }
            };
            ws.send(JSON.stringify(t));
        } else
        if (message.type === 'frontend/get_themes') {
            var t = {"id": message.id, "type": "result", "success": true, "result": {"themes": {}, "default_theme": "default"}};
            ws.send(JSON.stringify(t));
        } else
        if (message.type === 'auth/current_user') {
            var t = {
                "id": message.id,
                "type": "result",
                "success": true,
                "result": {
                    "id": "3051467331c84c45a2a4f4e4fbdadaaf",
                    "name": "Bluefox",
                    "is_owner": true,
                    "is_admin": true,
                    "credentials": [{"auth_provider_type": "homeassistant", "auth_provider_id": null}],
                    "mfa_modules": [{"id": "totp", "name": "Authenticator app", "enabled": false}]
                }
            };
            ws.send(JSON.stringify(t));
        } else
        if (message.type === 'frontend/get_user_data') {
            console.log(message.key);
            var t = {"id": message.id, "type": "result", "success": true, "result": {"value": null}};
            ws.send(JSON.stringify(t));
        } else
        if (message.type === 'frontend/get_translations') {
            console.log(message.language);
            var t = {"id": message.id, "type": "result", "success": true, "result": {"resources": {"component.ambient_station.config.error.identifier_exists": "Anwendungsschl\u00fcssel und / oder API-Schl\u00fcssel bereits registriert", "component.ambient_station.config.error.invalid_key": "Ung\u00fcltiger API Key und / oder Anwendungsschl\u00fcssel", "component.ambient_station.config.error.no_devices": "Keine Ger\u00e4te im Konto gefunden", "component.ambient_station.config.step.user.data.api_key": "API Key", "component.ambient_station.config.step.user.data.app_key": "Anwendungsschl\u00fcssel", "component.ambient_station.config.step.user.title": "Gib deine Informationen ein", "component.ambient_station.config.title": "Ambient PWS", "component.zwave.config.abort.already_configured": "Z-Wave ist bereits konfiguriert", "component.zwave.config.abort.one_instance_only": "Komponente unterst\u00fctzt nur eine Z-Wave-Instanz", "component.zwave.config.error.option_error": "Z-Wave-Validierung fehlgeschlagen. Ist der Pfad zum USB-Stick korrekt?", "component.zwave.config.step.user.data.network_key": "Netzwerkschl\u00fcssel (leer lassen, um automatisch zu generieren)", "component.zwave.config.step.user.data.usb_path": "USB-Pfad", "component.zwave.config.step.user.description": "Informationen zu den Konfigurationsvariablen findest du unter https://www.home-assistant.io/docs/z-wave/installation/", "component.zwave.config.step.user.title": "Z-Wave einrichten", "component.zwave.config.title": "Z-Wave", "component.nest.config.abort.already_setup": "Du kannst nur ein einziges Nest-Konto konfigurieren.", "component.nest.config.abort.authorize_url_fail": "Unbekannter Fehler beim Erstellen der Authorisierungs-URL", "component.nest.config.abort.authorize_url_timeout": "Zeit\u00fcberschreitung beim Erstellen der Authorisierungs-URL", "component.nest.config.abort.no_flows": "Du musst Nest konfigurieren, bevor du dich authentifizieren kannst. [Bitte lese die Anweisungen] (https://www.home-assistant.io/components/nest/).", "component.nest.config.error.internal_error": "Ein interner Fehler ist aufgetreten", "component.nest.config.error.invalid_code": "Ung\u00fcltiger Code", "component.nest.config.error.timeout": "Ein zeit\u00fcberschreitungs Fehler ist aufgetreten", "component.nest.config.error.unknown": "Ein unbekannter Fehler ist aufgetreten", "component.nest.config.step.init.data.flow_impl": "Anbieter", "component.nest.config.step.init.description": "W\u00e4hlen, \u00fcber welchen Authentifizierungsanbieter du dich bei Nest authentifizieren m\u00f6chtest.", "component.nest.config.step.init.title": "Authentifizierungsanbieter", "component.nest.config.step.link.data.code": "PIN Code", "component.nest.config.step.link.description": "[Autorisiere dein Konto] ( {url} ), um deinen Nest-Account zu verkn\u00fcpfen.\n\n F\u00fcge anschlie\u00dfend den erhaltenen PIN Code hier ein.", "component.nest.config.step.link.title": "Nest-Konto verkn\u00fcpfen", "component.nest.config.title": "Nest", "component.upnp.config.abort.already_configured": "UPnP/IGD ist bereits konfiguriert", "component.upnp.config.abort.incomplete_device": "Unvollst\u00e4ndiges UPnP-Ger\u00e4t wird ignoriert", "component.upnp.config.abort.no_devices_discovered": "Keine UPnP/IGDs entdeckt", "component.upnp.config.abort.no_devices_found": "Keine UPnP/IGD-Ger\u00e4te im Netzwerk gefunden.", "component.upnp.config.abort.no_sensors_or_port_mapping": "Aktiviere mindestens Sensoren oder Port-Mapping", "component.upnp.config.abort.single_instance_allowed": "Es ist nur eine einzige Konfiguration von UPnP/IGD erforderlich.", "component.upnp.config.step.confirm.description": "M\u00f6chten Sie UPnP/IGD einrichten?", "component.upnp.config.step.confirm.title": "UPnP/IGD", "component.upnp.config.step.init.title": "UPnP/IGD", "component.upnp.config.step.user.data.enable_port_mapping": "Aktiviere Port-Mapping f\u00fcr Home Assistant", "component.upnp.config.step.user.data.enable_sensors": "Verkehrssensoren hinzuf\u00fcgen", "component.upnp.config.step.user.data.igd": "UPnP/IGD", "component.upnp.config.step.user.title": "Konfigurationsoptionen f\u00fcr UPnP/IGD", "component.upnp.config.title": "UPnP/IGD", "component.luftdaten.config.error.communication_error": "Keine Kommunikation mit Luftdaten API m\u00f6glich", "component.luftdaten.config.error.invalid_sensor": "Sensor nicht verf\u00fcgbar oder ung\u00fcltig", "component.luftdaten.config.error.sensor_exists": "Sensor bereits registriert", "component.luftdaten.config.step.user.data.show_on_map": "Auf Karte anzeigen", "component.luftdaten.config.step.user.data.station_id": "Luftdaten-Sensor-ID", "component.luftdaten.config.step.user.title": "Luftdaten einrichten", "component.luftdaten.config.title": "Luftdaten", "component.tellduslive.config.abort.all_configured": "TelldusLive ist bereits konfiguriert", "component.tellduslive.config.abort.already_setup": "TelldusLive ist bereits konfiguriert", "component.tellduslive.config.abort.authorize_url_fail": "Unbekannter Fehler beim Erstellen der Authorisierungs-URL", "component.tellduslive.config.abort.authorize_url_timeout": "Zeit\u00fcberschreitung beim Erstellen der Authorisierungs-URL.", "component.tellduslive.config.abort.unknown": "Unbekannter Fehler ist aufgetreten", "component.tellduslive.config.error.auth_error": "Authentifizierungsfehler, bitte versuchen Sie es erneut", "component.tellduslive.config.step.auth.description": "So verkn\u00fcpfen Sie Ihr TelldusLive-Konto: \n 1. Klicken Sie auf den Link unten \n 2. Melden Sie sich bei Telldus Live an \n 3. Autorisieren Sie ** {app_name} ** (klicken Sie auf ** Yes **). \n 4. Kommen Sie hierher zur\u00fcck und klicken Sie auf ** SUBMIT **. \n\n [Link TelldusLive-Konto]({auth_url})", "component.tellduslive.config.step.auth.title": "Authentifizieren Sie sich gegen TelldusLive", "component.tellduslive.config.step.user.data.host": "Host", "component.tellduslive.config.step.user.title": "Endpunkt ausw\u00e4hlen.", "component.tellduslive.config.title": "Telldus Live", "component.mobile_app.config.abort.install_app": "\u00d6ffne die mobile App, um die Integration mit Home Assistant einzurichten. Eine Liste der kompatiblen Apps gibt es hier [the docs] ({apps_url}).", "component.mobile_app.config.step.confirm.description": "M\u00f6chtest du die Mobile App-Komponente einrichten?", "component.mobile_app.config.step.confirm.title": "Mobile App", "component.mobile_app.config.title": "Mobile App", "component.daikin.config.abort.already_configured": "Ger\u00e4t ist bereits konfiguriert", "component.daikin.config.abort.device_fail": "Unerwarteter Fehler beim Erstellen des Ger\u00e4ts.", "component.daikin.config.abort.device_timeout": "Zeit\u00fcberschreitung beim Verbinden mit dem Ger\u00e4t.", "component.daikin.config.step.user.data.host": "Host", "component.daikin.config.step.user.description": "Geben Sie die IP-Adresse Ihrer Daikin AC ein.", "component.daikin.config.step.user.title": "Daikin AC konfigurieren", "component.daikin.config.title": "Daikin AC", "component.owntracks.config.abort.one_instance_allowed": "Nur eine einzige Instanz ist notwendig.", "component.owntracks.config.create_entry.default": "\n\n\u00d6ffnen Sie unter Android [die OwnTracks-App]({android_url}) und gehen Sie zu {android_url} - > Verbindung. \u00c4ndern Sie die folgenden Einstellungen: \n - Modus: Privates HTTP \n - Host: {webhook_url} \n - Identifizierung: \n - Benutzername: ` <Your name> ` \n - Ger\u00e4te-ID: ` <Your device name> ` \n\n\u00d6ffnen Sie unter iOS [die OwnTracks-App]({ios_url}) und tippen Sie auf das Symbol (i) oben links - > Einstellungen. \u00c4ndern Sie die folgenden Einstellungen: \n - Modus: HTTP \n - URL: {webhook_url} \n - Aktivieren Sie die Authentifizierung \n - UserID: ` <Your name> ` \n\n {secret} \n \n Weitere Informationen finden Sie in der [Dokumentation]({docs_url}).", "component.owntracks.config.step.user.description": "M\u00f6chten Sie OwnTracks wirklich einrichten?", "component.owntracks.config.step.user.title": "OwnTracks einrichten", "component.owntracks.config.title": "OwnTracks", "component.smartthings.config.error.app_not_installed": "Stelle sicher, dass du die Home Assistant SmartApp installiert und autorisiert hast, und versuche es erneut.", "component.smartthings.config.error.app_setup_error": "SmartApp kann nicht eingerichtet werden. Bitte versuche es erneut.", "component.smartthings.config.error.base_url_not_https": "Die `base_url` f\u00fcr die` http`-Komponente muss konfiguriert sein und mit `https://` beginnen.", "component.smartthings.config.error.token_already_setup": "Das Token wurde bereits eingerichtet.", "component.smartthings.config.error.token_forbidden": "Das Token verf\u00fcgt nicht \u00fcber die erforderlichen OAuth-Bereiche.", "component.smartthings.config.error.token_invalid_format": "Das Token muss im UID/GUID-Format vorliegen.", "component.smartthings.config.error.token_unauthorized": "Das Token ist ung\u00fcltig oder nicht mehr autorisiert.", "component.smartthings.config.error.webhook_error": "SmartThings konnte den in 'base_url' angegebenen Endpunkt nicht validieren. Bitte \u00fcberpr\u00fcfe die Komponentenanforderungen.", "component.smartthings.config.step.user.data.access_token": "Zugangstoken", "component.smartthings.config.step.user.description": "Bitte gib einen SmartThings [pers\u00f6nlichen Zugangstoken]({token_url}) ein, welcher gem\u00e4\u00df den [Anweisungen]({component_url}) erstellt wurde.", "component.smartthings.config.step.user.title": "Gib den pers\u00f6nlichen Zugangstoken an", "component.smartthings.config.step.wait_install.description": "Installieren Sie Home-Assistent SmartApp an mindestens einer Stelle, und klicken Sie auf Absenden.", "component.smartthings.config.step.wait_install.title": "SmartApp installieren", "component.smartthings.config.title": "SmartThings", "component.sonos.config.abort.no_devices_found": "Keine Sonos Ger\u00e4te im Netzwerk gefunden.", "component.sonos.config.abort.single_instance_allowed": "Nur eine einzige Konfiguration von Sonos ist notwendig.", "component.sonos.config.step.confirm.description": "M\u00f6chtest du Sonos einrichten?", "component.sonos.config.step.confirm.title": "Sonos", "component.sonos.config.title": "Sonos", "component.homematicip_cloud.config.abort.already_configured": "Der Accesspoint ist bereits konfiguriert", "component.homematicip_cloud.config.abort.connection_aborted": "Konnte nicht mit HMIP Server verbinden", "component.homematicip_cloud.config.abort.unknown": "Ein unbekannter Fehler ist aufgetreten.", "component.homematicip_cloud.config.error.invalid_pin": "Ung\u00fcltige PIN, bitte versuche es erneut.", "component.homematicip_cloud.config.error.press_the_button": "Bitte dr\u00fccke die blaue Taste.", "component.homematicip_cloud.config.error.register_failed": "Registrierung fehlgeschlagen, bitte versuche es erneut.", "component.homematicip_cloud.config.error.timeout_button": "Zeit\u00fcberschreitung beim Dr\u00fccken der blauen Taste. Bitte versuche es erneut.", "component.homematicip_cloud.config.step.init.data.hapid": "Accesspoint ID (SGTIN)", "component.homematicip_cloud.config.step.init.data.name": "Name (optional, wird als Pr\u00e4fix f\u00fcr alle Ger\u00e4te verwendet)", "component.homematicip_cloud.config.step.init.data.pin": "PIN Code (optional)", "component.homematicip_cloud.config.step.init.title": "HomematicIP Accesspoint ausw\u00e4hlen", "component.homematicip_cloud.config.step.link.description": "Dr\u00fccke den blauen Taster auf dem Accesspoint, sowie den Senden Button um HomematicIP mit Home Assistant zu verbinden.\n\n![Position des Tasters auf dem AP](/static/images/config_flows/config_homematicip_cloud.png)", "component.homematicip_cloud.config.step.link.title": "Verkn\u00fcpfe den Accesspoint", "component.homematicip_cloud.config.title": "HomematicIP Cloud", "component.dialogflow.config.abort.not_internet_accessible": "Ihre Home Assistant-Instanz muss \u00fcber das Internet erreichbar sein, um Dialogflow-Nachrichten empfangen zu k\u00f6nnen.", "component.dialogflow.config.abort.one_instance_allowed": "Nur eine einzige Instanz ist notwendig.", "component.dialogflow.config.create_entry.default": "Um Ereignisse an den Home Assistant zu senden, m\u00fcssen Sie [Webhook-Integration von Dialogflow]({dialogflow_url}) einrichten. \n\nF\u00fcllen Sie die folgenden Informationen aus: \n\n - URL: ` {webhook_url} ` \n - Methode: POST \n - Inhaltstyp: application / json \n\nWeitere Informationen finden Sie in der [Dokumentation]({docs_url}).", "component.dialogflow.config.step.user.description": "M\u00f6chten Sie Dialogflow wirklich einrichten?", "component.dialogflow.config.step.user.title": "Dialogflow Webhook einrichten", "component.dialogflow.config.title": "Dialogflow", "component.logi_circle.config.abort.already_setup": "Es kann nur ein einziges Logi Circle-Konto konfiguriert werden.", "component.logi_circle.config.abort.external_error": "Es ist eine Ausnahme in einem anderen Flow aufgetreten.", "component.logi_circle.config.abort.external_setup": "Logi Circle wurde erfolgreich aus einem anderen Flow konfiguriert.", "component.logi_circle.config.abort.no_flows": "Logi Circle muss konfiguriert werden, bevor die Authentifizierung erfolgen kann. [Bitte lies die Anweisungen] (https://www.home-assistant.io/components/logi_circle/).", "component.logi_circle.config.create_entry.default": "Erfolgreiche Authentifizierung mit Logi Circle.", "component.logi_circle.config.error.auth_error": "Die API-Autorisierung ist fehlgeschlagen.", "component.logi_circle.config.error.auth_timeout": "Zeit\u00fcberschreitung der Autorisierung beim Anfordern des Zugriffstokens.", "component.logi_circle.config.error.follow_link": "Bitte folge dem Link und authentifiziere dich, bevor du auf Senden klickst.", "component.logi_circle.config.step.auth.description": "Folge dem Link unten und klicke <b> Akzeptieren </b> um auf dein Logi Circle-Konto zuzugreifen. Kehre dann zur\u00fcck und dr\u00fccke unten auf <b> Senden </b> . \n\n [Link] ({authorization_url})", "component.logi_circle.config.step.auth.title": "Authentifizierung mit Logi Circle", "component.logi_circle.config.step.user.data.flow_impl": "Anbieter", "component.logi_circle.config.step.user.description": "W\u00e4hle aus, \u00fcber welchen Anbieter du dich bei Logi Circle authentifizieren m\u00f6chtest.", "component.logi_circle.config.step.user.title": "Authentifizierungsanbieter", "component.logi_circle.config.title": "Logi Circle", "component.hangouts.config.abort.already_configured": "Google Hangouts ist bereits konfiguriert", "component.hangouts.config.abort.unknown": "Ein unbekannter Fehler ist aufgetreten.", "component.hangouts.config.error.invalid_2fa": "Ung\u00fcltige 2-Faktor Authentifizierung, bitte versuchen Sie es erneut.", "component.hangouts.config.error.invalid_2fa_method": "Ung\u00fcltige 2FA Methode (mit Telefon verifizieren)", "component.hangouts.config.error.invalid_login": "Ung\u00fcltige Daten, bitte erneut versuchen.", "component.hangouts.config.step.2fa.data.2fa": "2FA PIN", "component.hangouts.config.step.2fa.title": "2-Faktor-Authentifizierung", "component.hangouts.config.step.user.data.authorization_code": "Autorisierungscode (f\u00fcr die manuelle Authentifizierung erforderlich)", "component.hangouts.config.step.user.data.email": "E-Mail-Adresse", "component.hangouts.config.step.user.data.password": "Passwort", "component.hangouts.config.step.user.title": "Google Hangouts Login", "component.hangouts.config.title": "Google Hangouts", "component.gpslogger.config.abort.not_internet_accessible": "Deine Home-Assistant-Instanz muss aus dem internet erreichbar sein, um Nachrichten von GPSLogger zu erhalten.", "component.gpslogger.config.abort.one_instance_allowed": "Nur eine einzige Instanz ist notwendig.", "component.gpslogger.config.create_entry.default": "Um Ereignisse an Home Assistant zu senden, muss das Webhook Feature in der GPSLogger konfiguriert werden.\n\n F\u00fcge die folgenden Informationen ein: \n\n - URL: ` {webhook_url} ` \n - Methode: POST \n \n Weitere Informationen finden sich in der [Dokumentation]({docs_url}).", "component.gpslogger.config.step.user.description": "M\u00f6chten Sie den GPSLogger Webhook wirklich einrichten?", "component.gpslogger.config.step.user.title": "GPSLogger Webhook einrichten", "component.gpslogger.config.title": "GPSLogger Webhook", "component.point.config.abort.already_setup": "Sie k\u00f6nnen nur ein Point-Konto konfigurieren.", "component.point.config.abort.authorize_url_fail": "Unbekannter Fehler beim Erstellen der Authorisierungs-URL.", "component.point.config.abort.authorize_url_timeout": "Zeit\u00fcberschreitung beim Erstellen der Authorisierungs-URL.", "component.point.config.abort.external_setup": "Pointt erfolgreich von einem anderen Flow konfiguriert.", "component.point.config.abort.no_flows": "Sie m\u00fcssen Point konfigurieren, bevor Sie sich damit authentifizieren k\u00f6nnen. [Bitte lesen Sie die Anweisungen] (https://www.home-assistant.io/components/point/).", "component.point.config.create_entry.default": "Mit Minut erfolgreich f\u00fcr Ihre Point-Ger\u00e4te authentifiziert", "component.point.config.error.follow_link": "Bitte folgen Sie dem Link und authentifizieren Sie sich, bevor Sie auf Senden klicken", "component.point.config.error.no_token": "Nicht mit Minut authentifiziert", "component.point.config.step.auth.description": "Folgen Sie dem Link unten und <b> Akzeptieren </b> Zugriff auf Ihr Minut-Konto. Kehren Sie dann zur\u00fcck und dr\u00fccken Sie unten auf <b> Senden </b> . \n\n [Link]({authorization_url})", "component.point.config.step.auth.title": "Point authentifizieren", "component.point.config.step.user.data.flow_impl": "Anbieter", "component.point.config.step.user.description": "W\u00e4hlen Sie \u00fcber welchen Authentifizierungsanbieter Sie sich mit Point authentifizieren m\u00f6chten.", "component.point.config.step.user.title": "Authentifizierungsanbieter", "component.point.config.title": "Minut Point", "component.hue.config.abort.all_configured": "Alle Philips Hue Bridges sind bereits konfiguriert", "component.hue.config.abort.already_configured": "Bridge ist bereits konfiguriert", "component.hue.config.abort.cannot_connect": "Verbindung zur Bridge nicht m\u00f6glich", "component.hue.config.abort.discover_timeout": "Nicht in der Lage Hue Bridges zu entdecken", "component.hue.config.abort.no_bridges": "Keine Philips Hue Bridges entdeckt", "component.hue.config.abort.unknown": "Unbekannter Fehler ist aufgetreten", "component.hue.config.error.linking": "Unbekannter Link-Fehler aufgetreten.", "component.hue.config.error.register_failed": "Registrieren fehlgeschlagen, bitte versuche es erneut", "component.hue.config.step.init.data.host": "Host", "component.hue.config.step.init.title": "W\u00e4hle eine Hue Bridge", "component.hue.config.step.link.description": "Dr\u00fccke den Knopf auf der Bridge, um Philips Hue mit Home Assistant zu registrieren.\n\n![Position des Buttons auf der Bridge](/static/images/config_philips_hue.jpg)", "component.hue.config.step.link.title": "Hub verbinden", "component.hue.config.title": "Philips Hue", "component.simplisafe.config.error.identifier_exists": "Konto bereits registriert", "component.simplisafe.config.error.invalid_credentials": "Ung\u00fcltige Anmeldeinformationen", "component.simplisafe.config.step.user.data.code": "Code (f\u00fcr Home Assistant)", "component.simplisafe.config.step.user.data.password": "Passwort", "component.simplisafe.config.step.user.data.username": "E-Mail-Adresse", "component.simplisafe.config.step.user.title": "Gebe deine Informationen ein", "component.simplisafe.config.title": "SimpliSafe", "component.tplink.config.abort.no_devices_found": "Es wurden keine TP-Link-Ger\u00e4te im Netzwerk gefunden.", "component.tplink.config.abort.single_instance_allowed": "Es ist nur eine einzige Konfiguration erforderlich.", "component.tplink.config.step.confirm.description": "M\u00f6chten Sie TP-Link Smart Devices einrichten?", "component.tplink.config.step.confirm.title": "TP-Link Smart Home", "component.tplink.config.title": "TP-Link Smart Home", "component.tradfri.config.abort.already_configured": "Bridge ist bereits konfiguriert", "component.tradfri.config.error.cannot_connect": "Verbindung zum Gateway nicht m\u00f6glich.", "component.tradfri.config.error.invalid_key": "Fehler beim Registrieren mit dem angegebenen Schl\u00fcssel. Wenn dies weiterhin geschieht, versuche, das Gateway neu zu starten.", "component.tradfri.config.error.timeout": "Timeout bei der \u00dcberpr\u00fcfung des Codes.", "component.tradfri.config.step.auth.data.host": "Host", "component.tradfri.config.step.auth.data.security_code": "Sicherheitscode", "component.tradfri.config.step.auth.description": "Du findest den Sicherheitscode auf der R\u00fcckseite deines Gateways.", "component.tradfri.config.step.auth.title": "Sicherheitscode eingeben", "component.tradfri.config.title": "IKEA TR\u00c5DFRI", "component.geofency.config.abort.not_internet_accessible": "Deine Home-Assistant-Instanz muss aus dem internet erreichbar sein, um Nachrichten von Geofency zu erhalten.", "component.geofency.config.abort.one_instance_allowed": "Es ist nur eine einzige Instanz erforderlich.", "component.geofency.config.create_entry.default": "Um Ereignisse an den Home Assistant zu senden, musst das Webhook Feature in Geofency konfiguriert werden.\n\n F\u00fcge die folgenden Informationen ein: \n\n - URL: ` {webhook_url} ` \n - Methode: POST \n \n Weitere Informationen finden sich in der [Dokumentation]({docs_url}).", "component.geofency.config.step.user.description": "M\u00f6chtest du den Geofency Webhook wirklich einrichten?", "component.geofency.config.step.user.title": "Richten Sie den Geofency Webhook ein", "component.geofency.config.title": "Geofency Webhook", "component.rainmachine.config.error.identifier_exists": "Konto bereits registriert", "component.rainmachine.config.error.invalid_credentials": "Ung\u00fcltige Anmeldeinformationen", "component.rainmachine.config.step.user.data.ip_address": "Hostname oder IP-Adresse", "component.rainmachine.config.step.user.data.password": "Passwort", "component.rainmachine.config.step.user.data.port": "Port", "component.rainmachine.config.step.user.title": "Informationen eingeben", "component.rainmachine.config.title": "RainMachine", "component.smhi.config.error.name_exists": "Name existiert bereits", "component.smhi.config.error.wrong_location": "Standort nur in Schweden", "component.smhi.config.step.user.data.latitude": "Breitengrad", "component.smhi.config.step.user.data.longitude": "L\u00e4ngengrad", "component.smhi.config.step.user.data.name": "Name", "component.smhi.config.step.user.title": "Standort in Schweden", "component.smhi.config.title": "Schwedischer Wetterdienst (SMHI)", "component.auth.mfa_setup.notify.abort.no_available_service": "Keine Benachrichtigungsdienste verf\u00fcgbar.", "component.auth.mfa_setup.notify.error.invalid_code": "Ung\u00fcltiger Code, bitte versuche es erneut.", "component.auth.mfa_setup.notify.step.init.description": "Bitte w\u00e4hlen Sie einen der Benachrichtigungsdienste:", "component.auth.mfa_setup.notify.step.init.title": "Einmal Passwort f\u00fcr Notify einrichten", "component.auth.mfa_setup.notify.step.setup.description": "Ein Einmal-Passwort wurde per **notify.{notify_service}** gesendet. Bitte geben Sie es unten ein:", "component.auth.mfa_setup.notify.step.setup.title": "\u00dcberpr\u00fcfe das Setup", "component.auth.mfa_setup.notify.title": "Benachrichtig f\u00fcr One-Time Password", "component.auth.mfa_setup.totp.error.invalid_code": "Ung\u00fcltiger Code, bitte versuche es erneut. Wenn du diesen Fehler regelm\u00e4\u00dfig erhalten, stelle sicher, dass die Uhr deines Home Assistant-Systems korrekt ist.", "component.auth.mfa_setup.totp.step.init.description": "Um die Zwei-Faktor-Authentifizierung mit zeitbasierten Einmalpassw\u00f6rtern zu aktivieren, scanne den QR-Code mit Ihrer Authentifizierungs-App. Wenn du keine hast, empfehlen wir entweder [Google Authenticator] (https://support.google.com/accounts/answer/1066447) oder [Authy] (https://authy.com/). \n\n {qr_code} \n \nNachdem du den Code gescannt hast, gebe den sechsstelligen Code aus der App ein, um das Setup zu \u00fcberpr\u00fcfen. Wenn es Probleme beim Scannen des QR-Codes gibt, f\u00fchre ein manuelles Setup mit dem Code ** ` {code} ` ** durch.", "component.auth.mfa_setup.totp.step.init.title": "Richte die Zwei-Faktor-Authentifizierung mit TOTP ein", "component.auth.mfa_setup.totp.title": "TOTP", "component.ps4.config.abort.credential_error": "Fehler beim Abrufen der Anmeldeinformationen.", "component.ps4.config.abort.devices_configured": "Alle gefundenen Ger\u00e4te sind bereits konfiguriert.", "component.ps4.config.abort.no_devices_found": "Es wurden keine PlayStation 4 im Netzwerk gefunden.", "component.ps4.config.abort.port_987_bind_error": "Bind to Port 987 nicht m\u00f6glich.", "component.ps4.config.abort.port_997_bind_error": "Bind to Port 997 nicht m\u00f6glich.", "component.ps4.config.error.login_failed": "Fehler beim Koppeln mit PlayStation 4. \u00dcberpr\u00fcfe, ob die PIN korrekt ist.", "component.ps4.config.error.no_ipaddress": "Gib die IP-Adresse der PlayStation 4 ein, die konfiguriert werden soll.", "component.ps4.config.error.not_ready": "PlayStation 4 ist nicht eingeschaltet oder mit dem Netzwerk verbunden.", "component.ps4.config.step.creds.description": "Anmeldeinformationen ben\u00f6tigt. Klicke auf \"Senden\" und dann in der PS4 Second Screen app, aktualisiere die Ger\u00e4te und w\u00e4hle das \"Home-Assistant\"-Ger\u00e4t aus, um fortzufahren.", "component.ps4.config.step.creds.title": "PlayStation 4", "component.ps4.config.step.link.data.code": "PIN", "component.ps4.config.step.link.data.ip_address": "IP-Adresse", "component.ps4.config.step.link.data.name": "Name", "component.ps4.config.step.link.data.region": "Region", "component.ps4.config.step.link.description": "Geben Sie Ihre PlayStation 4-Informationen ein. Navigiere f\u00fcr \"PIN\" auf der PlayStation 4-Konsole zu \"Einstellungen\". Navigiere dann zu \"Mobile App-Verbindungseinstellungen\" und w\u00e4hle \"Ger\u00e4t hinzuf\u00fcgen\" aus. Gib die angezeigte PIN ein.", "component.ps4.config.step.link.title": "PlayStation 4", "component.ps4.config.step.mode.data.ip_address": "IP-Adresse (Leer lassen, wenn automatische Erkennung verwendet wird).", "component.ps4.config.step.mode.data.mode": "Konfigurationsmodus", "component.ps4.config.step.mode.description": "W\u00e4hlen Sie den Modus f\u00fcr die Konfiguration aus. Das Feld IP-Adresse kann leer bleiben, wenn die automatische Erkennung ausgew\u00e4hlt wird, da Ger\u00e4te automatisch erkannt werden.", "component.ps4.config.step.mode.title": "PlayStation 4", "component.ps4.config.title": "PlayStation 4", "component.locative.config.abort.not_internet_accessible": "Deine Home-Assistant-Instanz muss aus dem internet erreichbar sein, um Nachrichten von Geofency zu erhalten.", "component.locative.config.abort.one_instance_allowed": "Nur eine einzige Instanz ist notwendig.", "component.locative.config.create_entry.default": "Um Standorte Home Assistant zu senden, muss das Webhook Feature in der Locative App konfiguriert werden.\n\n F\u00fcge die folgenden Informationen ein: \n\n - URL: ` {webhook_url} ` \n - Methode: POST \n \n Weitere Informationen finden sich in der [Dokumentation]({docs_url}).", "component.locative.config.step.user.description": "M\u00f6chten Sie den Locative Webhook wirklich einrichten?", "component.locative.config.step.user.title": "Locative Webhook einrichten", "component.locative.config.title": "Locative Webhook", "component.ipma.config.error.name_exists": "Name existiert bereits", "component.ipma.config.step.user.data.latitude": "Breitengrad", "component.ipma.config.step.user.data.longitude": "L\u00e4ngengrad", "component.ipma.config.step.user.data.name": "Name", "component.ipma.config.step.user.description": "Instituto Portugu\u00eas do Mar e Atmosfera", "component.ipma.config.step.user.title": "Standort", "component.ipma.config.title": "Portugiesischer Wetterdienst (IPMA)", "component.ifttt.config.abort.not_internet_accessible": "Auf Ihre Home Assistant-Instanz muss vom Internet aus zugegriffen werden k\u00f6nnen, um IFTTT-Nachrichten zu empfangen.", "component.ifttt.config.abort.one_instance_allowed": "Nur eine einzige Instanz ist notwendig.", "component.ifttt.config.create_entry.default": "Um Ereignisse an Home Assistant zu senden, musst du die Aktion \"Eine Webanforderung erstellen\" aus dem [IFTTT Webhook Applet]({applet_url}) ausw\u00e4hlen.\n\nF\u00fclle folgende Informationen aus: \n- URL: `{webhook_url}`\n- Methode: POST\n- Inhaltstyp: application/json\n\nIn der Dokumentation ({docs_url}) findest du Informationen zur Konfiguration der Automation eingehender Daten.", "component.ifttt.config.step.user.description": "Bist du sicher, dass du IFTTT einrichten m\u00f6chtest?", "component.ifttt.config.step.user.title": "Einrichten des IFTTT Webhook Applets", "component.ifttt.config.title": "IFTTT", "component.cast.config.abort.no_devices_found": "Keine Google Cast Ger\u00e4te im Netzwerk gefunden.", "component.cast.config.abort.single_instance_allowed": "Nur eine einzige Konfiguration von Google Cast ist notwendig.", "component.cast.config.step.confirm.description": "M\u00f6chtest du Google Cast einrichten?", "component.cast.config.step.confirm.title": "Google Cast", "component.cast.config.title": "Google Cast", "component.zone.config.error.name_exists": "Name existiert bereits", "component.zone.config.step.init.data.icon": "Symbol", "component.zone.config.step.init.data.latitude": "Breitengrad", "component.zone.config.step.init.data.longitude": "L\u00e4ngengrad", "component.zone.config.step.init.data.name": "Name", "component.zone.config.step.init.data.passive": "Passiv", "component.zone.config.step.init.data.radius": "Radius", "component.zone.config.step.init.title": "Definiere die Zonenparameter", "component.zone.config.title": "Zone", "component.mailgun.config.abort.not_internet_accessible": "Ihre Home Assistant-Instanz muss \u00fcber das Internet erreichbar sein, um Mailgun-Nachrichten empfangen zu k\u00f6nnen.", "component.mailgun.config.abort.one_instance_allowed": "Nur eine einzige Instanz ist notwendig.", "component.mailgun.config.create_entry.default": "Um Ereignisse an den Home Assistant zu senden, m\u00fcssen Sie [Webhooks mit Mailgun]({mailgun_url}) einrichten. \n\n F\u00fcllen Sie die folgenden Informationen aus: \n\n - URL: ` {webhook_url} ` \n - Methode: POST \n - Inhaltstyp: application / json \n\n Lesen Sie in der [Dokumentation]({docs_url}) wie Sie Automationen f\u00fcr die Verarbeitung eingehender Daten konfigurieren.", "component.mailgun.config.step.user.description": "M\u00f6chten Sie Mailgun wirklich einrichten?", "component.mailgun.config.step.user.title": "Mailgun-Webhook einrichten", "component.mailgun.config.title": "Mailgun", "component.axis.config.abort.already_configured": "Ger\u00e4t ist bereits konfiguriert", "component.axis.config.abort.bad_config_file": "Fehlerhafte Daten aus der Konfigurationsdatei", "component.axis.config.abort.link_local_address": "Link-local Adressen werden nicht unterst\u00fctzt", "component.axis.config.error.already_configured": "Ger\u00e4t ist bereits konfiguriert", "component.axis.config.error.device_unavailable": "Ger\u00e4t ist nicht verf\u00fcgbar", "component.axis.config.error.faulty_credentials": "Ung\u00fcltige Anmeldeinformationen", "component.axis.config.step.user.data.host": "Host", "component.axis.config.step.user.data.password": "Passwort", "component.axis.config.step.user.data.port": "Port", "component.axis.config.step.user.data.username": "Benutzername", "component.axis.config.step.user.title": "Axis Ger\u00e4t einrichten", "component.axis.config.title": "Axis Ger\u00e4t", "component.lifx.config.abort.no_devices_found": "Keine LIFX Ger\u00e4te im Netzwerk gefunden.", "component.lifx.config.abort.single_instance_allowed": "Nur eine einzige Konfiguration von LIFX ist zul\u00e4ssig.", "component.lifx.config.step.confirm.description": "M\u00f6chtest du LIFX einrichten?", "component.lifx.config.step.confirm.title": "LIFX", "component.lifx.config.title": "LIFX", "component.openuv.config.error.identifier_exists": "Koordinaten existieren bereits", "component.openuv.config.error.invalid_api_key": "Ung\u00fcltiger API-Schl\u00fcssel", "component.openuv.config.step.user.data.api_key": "OpenUV API-Schl\u00fcssel", "component.openuv.config.step.user.data.elevation": "H\u00f6he", "component.openuv.config.step.user.data.latitude": "Breitengrad", "component.openuv.config.step.user.data.longitude": "L\u00e4ngengrad", "component.openuv.config.step.user.title": "Gebe deine Informationen ein", "component.openuv.config.title": "OpenUV", "component.twilio.config.abort.not_internet_accessible": "Ihre Home Assistant-Instanz muss \u00fcber das Internet erreichbar sein, um Twilio-Nachrichten empfangen zu k\u00f6nnen.", "component.twilio.config.abort.one_instance_allowed": "Es ist nur eine einzige Instanz erforderlich.", "component.twilio.config.create_entry.default": "Um Ereignisse an den Home Assistant zu senden, m\u00fcssen Sie [Webhooks mit Twilio]({twilio_url}) einrichten. \n\n F\u00fcllen Sie die folgenden Informationen aus: \n\n - URL: ` {webhook_url} ` \n - Methode: POST \n - Inhaltstyp: application / x-www-form-urlencoded \n\nLesen Sie in der [Dokumentation]({docs_url}) wie Sie Automationen f\u00fcr die Verarbeitung eingehender Daten konfigurieren.", "component.twilio.config.step.user.description": "M\u00f6chten Sie Twilio wirklich einrichten?", "component.twilio.config.step.user.title": "Twilio-Webhook einrichten", "component.twilio.config.title": "Twilio", "component.unifi.config.abort.already_configured": "Controller-Site ist bereits konfiguriert", "component.unifi.config.abort.user_privilege": "Der Benutzer muss Administrator sein", "component.unifi.config.error.faulty_credentials": "Ung\u00fcltige Anmeldeinformationen", "component.unifi.config.error.service_unavailable": "Kein Dienst verf\u00fcgbar", "component.unifi.config.step.user.data.host": "Host", "component.unifi.config.step.user.data.password": "Passwort", "component.unifi.config.step.user.data.port": "Port", "component.unifi.config.step.user.data.site": "Site-ID", "component.unifi.config.step.user.data.username": "Benutzername", "component.unifi.config.step.user.data.verify_ssl": "Controller mit ordnungsgem\u00e4ssem Zertifikat", "component.unifi.config.step.user.title": "UniFi-Controller einrichten", "component.unifi.config.title": "UniFi-Controller", "component.ios.config.abort.single_instance_allowed": "Es wird nur eine Konfiguration von Home Assistant iOS ben\u00f6tigt", "component.ios.config.step.confirm.description": "M\u00f6chtest du die Home Assistant iOS-Komponente einrichten?", "component.ios.config.step.confirm.title": "Home Assistant iOS", "component.ios.config.title": "Home Assistant iOS", "component.zha.config.abort.single_instance_allowed": "Es ist nur eine einzige Konfiguration von ZHA zul\u00e4ssig.", "component.zha.config.error.cannot_connect": "Kein Verbindung zu ZHA-Ger\u00e4t m\u00f6glich", "component.zha.config.step.user.data.radio_type": "Radio-Type", "component.zha.config.step.user.data.usb_path": "USB-Ger\u00e4te-Pfad", "component.zha.config.step.user.title": "ZHA", "component.zha.config.title": "ZHA", "component.emulated_roku.config.abort.name_exists": "Name existiert bereits", "component.emulated_roku.config.step.user.data.advertise_ip": "IP Adresse annoncieren", "component.emulated_roku.config.step.user.data.advertise_port": "Port annoncieren", "component.emulated_roku.config.step.user.data.host_ip": "Host-IP", "component.emulated_roku.config.step.user.data.listen_port": "Listen-Port", "component.emulated_roku.config.step.user.data.name": "Name", "component.emulated_roku.config.step.user.data.upnp_bind_multicast": "Multicast binden (True/False)", "component.emulated_roku.config.step.user.title": "Serverkonfiguration definieren", "component.emulated_roku.config.title": "EmulatedRoku", "component.mqtt.config.abort.single_instance_allowed": "Nur eine einzige Konfiguration von MQTT ist zul\u00e4ssig.", "component.mqtt.config.error.cannot_connect": "Es konnte keine Verbindung zum Broker hergestellt werden.", "component.mqtt.config.step.broker.data.broker": "Server", "component.mqtt.config.step.broker.data.discovery": "Suche aktivieren", "component.mqtt.config.step.broker.data.password": "Passwort", "component.mqtt.config.step.broker.data.port": "Port", "component.mqtt.config.step.broker.data.username": "Benutzername", "component.mqtt.config.step.broker.description": "Bitte gib die Verbindungsinformationen deines MQTT-Brokers ein.", "component.mqtt.config.step.broker.title": "MQTT", "component.mqtt.config.step.hassio_confirm.data.discovery": "Suche aktivieren", "component.mqtt.config.step.hassio_confirm.description": "M\u00f6chtest du Home Assistant so konfigurieren, dass er eine Verbindung mit dem MQTT-Broker herstellt, der vom Add-on hass.io {addon} bereitgestellt wird?", "component.mqtt.config.step.hassio_confirm.title": "MQTT Broker per Hass.io add-on", "component.mqtt.config.title": "MQTT", "component.heos.config.abort.already_setup": "Es kann nur eine einzige Heos-Verbindung konfiguriert werden, da diese alle Ger\u00e4te im Netzwerk unterst\u00fctzt.", "component.heos.config.error.connection_failure": "Es kann keine Verbindung zum angegebenen Host hergestellt werden.", "component.heos.config.step.user.data.access_token": "Host", "component.heos.config.step.user.data.host": "Host", "component.heos.config.step.user.description": "Bitte gib den Hostnamen oder die IP-Adresse eines Heos-Ger\u00e4ts ein (vorzugsweise eines, das per Kabel mit dem Netzwerk verbunden ist).", "component.heos.config.step.user.title": "Mit Heos verbinden", "component.heos.config.title": "Heos", "component.esphome.config.abort.already_configured": "ESP ist bereits konfiguriert", "component.esphome.config.error.connection_error": "Keine Verbindung zum ESP m\u00f6glich. Achten Sie darauf, dass Ihre YAML-Datei eine Zeile 'api:' enth\u00e4lt.", "component.esphome.config.error.invalid_password": "Ung\u00fcltiges Passwort!", "component.esphome.config.error.resolve_error": "Adresse des ESP kann nicht aufgel\u00f6st werden. Wenn dieser Fehler weiterhin besteht, legen Sie eine statische IP-Adresse fest: https://esphomelib.com/esphomeyaml/components/wifi.html#manual-ips", "component.esphome.config.step.authenticate.data.password": "Passwort", "component.esphome.config.step.authenticate.description": "Bitte geben Sie das Passwort der ESPHome-Konfiguration f\u00fcr {name} ein:", "component.esphome.config.step.authenticate.title": "Passwort eingeben", "component.esphome.config.step.discovery_confirm.description": "Willst du den ESPHome-Knoten `{name}` zu Home Assistant hinzuf\u00fcgen?", "component.esphome.config.step.discovery_confirm.title": "Gefundener ESPHome-Knoten", "component.esphome.config.step.user.data.host": "Host", "component.esphome.config.step.user.data.port": "Port", "component.esphome.config.step.user.description": "Bitte geben Sie die Verbindungseinstellungen Ihres [ESPHome](https://esphomelib.com/)-Knotens ein.", "component.esphome.config.step.user.title": "ESPHome", "component.esphome.config.title": "ESPHome", "component.toon.config.abort.client_id": "Die Client-ID aus der Konfiguration ist ung\u00fcltig.", "component.toon.config.abort.client_secret": "Das Client-Secret aus der Konfiguration ist ung\u00fcltig.", "component.toon.config.abort.no_agreements": "Dieses Konto hat keine Toon-Anzeigen.", "component.toon.config.abort.no_app": "Toon muss konfiguriert werden, bevor die Authentifizierung durchgef\u00fchrt werden kann. [Lies bitte die Anleitung](https://www.home-assistant.io/components/toon/).", "component.toon.config.abort.unknown_auth_fail": "Beim Authentifizieren ist ein unerwarteter Fehler aufgetreten.", "component.toon.config.error.credentials": "Die angegebenen Anmeldeinformationen sind ung\u00fcltig.", "component.toon.config.error.display_exists": "Die ausgew\u00e4hlte Anzeige ist bereits konfiguriert.", "component.toon.config.step.authenticate.data.password": "Passwort", "component.toon.config.step.authenticate.data.tenant": "Tenant", "component.toon.config.step.authenticate.data.username": "Benutzername", "component.toon.config.step.authenticate.description": "Authentifiziere dich mit deinem Eneco Toon-Konto (nicht dem Entwicklerkonto).", "component.toon.config.step.authenticate.title": "Verkn\u00fcpfe dein Toon-Konto", "component.toon.config.step.display.data.display": "Anzeige w\u00e4hlen", "component.toon.config.step.display.description": "W\u00e4hle die Toon-Anzeige aus, die verbunden werden soll.", "component.toon.config.step.display.title": "Anzeige ausw\u00e4hlen", "component.toon.config.title": "Toon", "component.deconz.config.abort.already_configured": "Bridge ist bereits konfiguriert", "component.deconz.config.abort.no_bridges": "Keine deCON-Bridges entdeckt", "component.deconz.config.abort.one_instance_only": "Komponente unterst\u00fctzt nur eine deCONZ-Instanz", "component.deconz.config.abort.updated_instance": "deCONZ-Instanz mit neuer Host-Adresse aktualisiert", "component.deconz.config.error.no_key": "Es konnte kein API-Schl\u00fcssel abgerufen werden", "component.deconz.config.step.hassio_confirm.data.allow_clip_sensor": "Import virtueller Sensoren zulassen", "component.deconz.config.step.hassio_confirm.data.allow_deconz_groups": "Import von deCONZ-Gruppen zulassen", "component.deconz.config.step.hassio_confirm.description": "M\u00f6chtest du Home Assistant so konfigurieren, dass er eine Verbindung mit dem deCONZ gateway herstellt, der vom Add-on hass.io {addon} bereitgestellt wird?", "component.deconz.config.step.hassio_confirm.title": "deCONZ Zigbee Gateway \u00fcber das Hass.io Add-on", "component.deconz.config.step.init.data.host": "Host", "component.deconz.config.step.init.data.port": "Port", "component.deconz.config.step.init.title": "Definiere das deCONZ-Gateway", "component.deconz.config.step.link.description": "Entsperre dein deCONZ-Gateway, um es bei Home Assistant zu registrieren. \n\n 1. Gehe in die deCONZ-Systemeinstellungen \n 2. Dr\u00fccke die Taste \"Gateway entsperren\"", "component.deconz.config.step.link.title": "Mit deCONZ verbinden", "component.deconz.config.step.options.data.allow_clip_sensor": "Import virtueller Sensoren zulassen", "component.deconz.config.step.options.data.allow_deconz_groups": "Import von deCONZ-Gruppen zulassen", "component.deconz.config.step.options.title": "Weitere Konfigurationsoptionen f\u00fcr deCONZ", "component.deconz.config.title": "deCONZ Zigbee Gateway", "component.tellduslive.config.step.user.description": "Leer", "component.hangouts.config.step.2fa.description": "Leer", "component.hangouts.config.step.user.description": "Leer", "component.zha.config.step.user.description": "Leer"}}};
            ws.send(JSON.stringify(t));
        } else
        if (message.type === 'lovelace/config') {
            console.log(message.force);
            lovelaceConfig = lovelaceConfig || {"title": "Home", "views": [{"badges": ["person.bluefox", "sensor.yr_symbol", "sun.sun"], "cards": [{"type": "custom:hui-empty-state-card"}], "path": "default_view", "title": "Home"}, {"badges": [], "cards": [{"aspect_ratio": "50%", "type": "iframe", "url": "https://www.home-assistant.io"}], "title": "Denis"}]};
            var t = {"id": message.id, "type": "result", "success": true, "result": lovelaceConfig};
            ws.send(JSON.stringify(t));
        } else
        if (message.type === 'lovelace/config/save') {
            lovelaceConfig = message.config;
            var t = {"id": message.id, "type": "result", "success": true, "result": null};
            ws.send(JSON.stringify(t));
        } else
        if (message.type === 'persistent_notification/get') {
            var t = {"id": message.id, "type": "result", "success": true, "result": []};
            ws.send(JSON.stringify(t));
        } else {
            console.warn('Unknwon request: ' + JSON.stringify(message));
        }
    });

    testTimer = setInterval(() => {
        // {"id": 2, "type": "event", "event": {"event_type": "state_changed", "data": {"entity_id": "sun.sun", "old_state": {"entity_id": "sun.sun", "state": "above_horizon", "attributes": {"next_dawn": "2019-05-17T02:57:08+00:00", "next_dusk": "2019-05-16T19:44:32+00:00", "next_midnight": "2019-05-16T23:21:40+00:00", "next_noon": "2019-05-17T11:21:38+00:00", "next_rising": "2019-05-17T03:36:58+00:00", "next_setting": "2019-05-16T19:04:54+00:00", "elevation": 54.81, "azimuth": 216.35, "friendly_name": "Sun"}, "last_changed": "2019-05-16T09:09:53.424242+00:00", "last_updated": "2019-05-16T12:46:30.001390+00:00", "context": {"id": "05356b1a7df54b2f939d3c7f8a3e05b4", "parent_id": null, "user_id": null}}, "new_state": {"entity_id": "sun.sun", "state": "above_horizon", "attributes": {"next_dawn": "2019-05-17T02:57:08+00:00", "next_dusk": "2019-05-16T19:44:32+00:00", "next_midnight": "2019-05-16T23:21:40+00:00", "next_noon": "2019-05-17T11:21:38+00:00", "next_rising": "2019-05-17T03:36:58+00:00", "next_setting": "2019-05-16T19:04:54+00:00", "elevation": 54.71, "azimuth": 216.72, "friendly_name": "Sun"}, "last_changed": "2019-05-16T09:09:53.424242+00:00", "last_updated": "2019-05-16T12:47:30.000414+00:00", "context": {"id": "e738dc26af1d48b4964c6d9805179595", "parent_id": null, "user_id": null}}}, "origin": "LOCAL", "time_fired": "2019-05-16T12:47:30.000414+00:00", "context": {"id": "e738dc26af1d48b4964c6d9805179595", "parent_id": null, "user_id": null}}}
        if (subcribes.state_changed) {
            subcribes.state_changed.forEach(id => {
                const t = {
                    id,
                    "type": "event",
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
                                    "id": "05356b1a7df54b2f939d3c7f8a3e05b4",
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
                                    "id": "e738dc26af1d48b4964c6d9805179595",
                                    "parent_id": null,
                                    "user_id": null
                                }
                            }
                        },
                        "origin": "LOCAL",
                        "time_fired": "2019-05-16T12:47:30.000414+00:00",
                        "context": {"id": "e738dc26af1d48b4964c6d9805179595", "parent_id": null, "user_id": null}
                    }
                };
                ws.send(JSON.stringify(t));
            });
        }
    }, 10000);

    ws.on('close', () => {
        testTimer && clearInterval(testTimer);
        testTimer = null;
    });
});


//start our server
server.listen(process.env.PORT || 3001, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
