![Logo](admin/lovelace.png)
# ioBroker.lovelace

[![NPM version](http://img.shields.io/npm/v/iobroker.lovelace.svg)](https://www.npmjs.com/package/iobroker.lovelace)
[![Downloads](https://img.shields.io/npm/dm/iobroker.lovelace.svg)](https://www.npmjs.com/package/iobroker.lovelace)
[![Dependency Status](https://img.shields.io/david/ioBroker/iobroker.lovelace.svg)](https://david-dm.org/ioBroker/iobroker.lovelace)
[![Known Vulnerabilities](https://snyk.io/test/github/ioBroker/ioBroker.lovelace/badge.svg)](https://snyk.io/test/github/ioBroker/ioBroker.lovelace)

[![NPM](https://nodei.co/npm/iobroker.lovelace.png?downloads=true)](https://nodei.co/npm/iobroker.lovelace/)

**Tests:** Linux/Mac: [![Travis-CI](http://img.shields.io/travis/ioBroker/ioBroker.lovelace/master.svg)](https://travis-ci.org/ioBroker/ioBroker.lovelace)
Windows: [![AppVeyor](https://ci.appveyor.com/api/projects/status/github/ioBroker/ioBroker.lovelace?branch=master&svg=true)](https://ci.appveyor.com/project/ioBroker/ioBroker-lovelace/)

## lovelace adapter for ioBroker

With this adapter you can build visualization for ioBroker with Home Assistant Lovelace UI


## Panels
### Alarm panel
ioBroker does not support such a device yet, but it can be simulated. If you create such a script:
```
createState(
    'alarmSimple',
    false,
    false,
    {
        "name": "alarmSimple",
        "role": "alarm",
        "type": "boolean",
        "read": true,
        "write": true,
        "desc": "Arm or disarm with code",
        "def": false,
        "custom": {
            "lovelace.0": {
                "enabled": true,
                "entity": "alarm_control_panel",
                "name": "simulateAlarm" // this is a name how the entity will be called. In this case "alarm_control_panel.simulateAlarm"
            }
        }
    },
    {
        "alarm_code": 1234 // this is a alarm code, that must be entered
    },
    function () {
        // react on changes
        on({id: 'javascript.' + instance + '.alarmSimple', change: 'any'}, function (obj) {
            console.log('Control here the real device: ' + obj.state.val);
        });
    }
);
```

### Number input
This can be done manually if input_number entity type in custom dialog is selected.
This type required `min` and `max` values in `common` and optional `step` could be added.
If you want to see the up and down arrows, you should set in custom `mode` to 'number':

```
common: {
    custom: {
        "lovelace.0": {
            "enabled": true,
            "entity": "input_number",
            "name": "Shutter" // this is a name how the entity will be called. In this case "alarm_control_panel.simulateAlarm"
            "mode": "number", // default presentation is slider
        }
    }
}

### Timer
Timer could be simulated by following script:
```
createState(
    'timerSimple',
    false,
    false,
    {
        "name": "timerSimple",
        "role": "level.timer",
        "type": "number",
        "read": true,
        "write": true,
        "unit": "sec",
        "desc": "Start/Stop Timer",
        "def": 0,
        "custom": {
            "lovelace.0": {
                "enabled": true,
                "entity": "timer",
                "name": "simulateTimer" // this is a name how the entity will be called. In this case "timer.simulateTimer"
            }
        }
    },
    {
        "alarm_code": 1234 // this is a alarm code, that must be entered
    },
    function () {
        let interval;
        let id = 'javascript.' + instance + '.timerSimple';
        // react on changes
        on({id, change: 'any'}, function (obj) {
            // If command
            if (!obj.state.ack) {
                // If start or pause timer
                if (obj.state.val) {
                    // If pause (the same value was written)
                    if (obj.state.val === obj.oldState.val) {
                        if (interval) {
                            setState(id, state.val, true);
                            clearInterval(interval);
                            interval = null;
                        } else {
                            interval = setInterval(() => {
                                getState(id, (err, state) => {
                                    state.val--;
                                    if (state.val <= 0) {
                                        clearInterval(interval);
                                        interval = null;
                                        state.val = 0;
                                    }
                                    setState(id, state.val, true);
                                });
                            }, 1000);
                        }
                    } else {
                        interval && clearInterval(interval);
                        // update value every second
                        interval = setInterval(() => {
                            getState(id, (err, state) => {
                                state.val--;
                                if (state.val <= 0) {
                                    clearInterval(interval);
                                    interval = null;
                                    state.val = 0;
                                }
                                setState(id, state.val, true);
                            });
                        }, 1000);
                    }
                } else {
                    // stop interval
                    interval && clearInterval(interval);
                    interval = null;
                }
            }
        });
        // test timer. Disable it later
        setTimeout(() => setState(id, 20));
    }
);
```

### Weather
Tested with yr and daswetter. One or more of following objects must have `Function=Weather` and `Room=Any` set to be available in configuration:
- daswetter.0.NextDays.Location_1
- yr.0.forecast

## Development
### How to build the new Lovelace version
1. go to ./build directory.
2. `git clone https://github.com/home-assistant/home-assistant-polymer.git`
3. `cd home-assistant-polymer`
4. `git checkout master`
5. `npm install`
6. `gulp run build-app`
4. `./build/home-assistant-polymer/hass_frontend` into `./hass_frontend` in this repo
5. Format index.html
6. Start `gulp rename` task.

## ToDo
- on the fly objects update

## Changelog

### 0.0.1
* (bluefox) initial release

## License
   
   Copyright 2019, bluefox <dogafox@gmail.com>

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.