const utils       = require('./../entities/utils');
const adapterData = require('./../dataSingleton');

const SUPPORT_PAUSE = 1;
const SUPPORT_SEEK = 2;
const SUPPORT_VOLUME_SET = 4;
const SUPPORT_VOLUME_MUTE = 8;
const SUPPORT_PREVIOUS_TRACK = 16;
const SUPPORT_NEXT_TRACK = 32;
const SUPPORT_TURN_ON = 128;
const SUPPORT_TURN_OFF = 256;
//const SUPPORT_PLAY_MEDIA = 512;
const SUPPORT_VOLUME_BUTTONS = 1024;
//const SUPPORT_SELECT_SOURCE = 2048;
const SUPPORT_STOP = 4096;
const SUPPORT_PLAY = 16384;
const SUPPORT_REPEAT_SET = 262144;
//const SUPPORT_SELECT_SOUND_MODE = 65536;
const SUPPORT_SHUFFLE_SET = 32768;
//const SUPPORT_BROWSE_MEDIA = 131072;

exports.processMediaPlayer = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
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
    //          media_play_pause, -> obsolete.
    //          media_play,
    //          media_pause,
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
    //     features for supported_features: //see consts above.

    const entity = utils.processCommon(name, room, func, _obj, 'media_player', forcedEntityId);

    entity.context.STATE = {getId: null};
    entity.context.ATTRIBUTES = [];
    entity.context.COMMANDS = [];
    entity.attributes.icon = 'mdi:play-network';
    entity.attributes.media_content_type = 'unknown';
    entity.attributes.supported_features = 0;

    //store what we find, but will be overwritten by the most specific one we can find (i.e. first try state, then see if PLAY and STOP come up and so on)
    let playCommand;
    let pauseCommand;
    let stopCommand;

    const parsePlayPauseStopCommand = (entity, command, params, user) => {
        const id = command.setId;
        const val = command.val;

        switch(command.service) {
            case 'media_play':
                entity.state = 'playing';
                break;
            case 'media_pause':
                entity.state = 'paused';
                break;
            case 'media_stop':
                entity.state = 'idle';
                break;
        }
        return adapterData.adapter.setForeignStateAsync(id, val, false, {user});
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
            const type = objects[state.id].common.type || 'boolean';
            playCommand = {
                service: 'media_play',
                setId: state.id,
                val: type === 'boolean' ? true : 1,
                parseCommand: parsePlayPauseStopCommand
            };
            pauseCommand = {
                service: 'media_pause',
                setId: state.id,
                val: type === 'boolean' ? false : 0,
                parseCommand: parsePlayPauseStopCommand
            };
            if (type === 'number') {
                stopCommand = {
                    service: 'media_stop',
                    setId: state.id,
                    val: 2,
                    parseCommand: parsePlayPauseStopCommand
                };
            }
        }
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'PLAY');
    if (state && state.id) {
        playCommand = {
            service: 'media_play',
            setId: state.id,
            val: true,
            parseCommand: parsePlayPauseStopCommand
        };
    }

    state = control.states.find(s => s.id && s.name === 'PAUSE');
    if (state && state.id) {
        pauseCommand = {
            service: 'media_pause',
            setId: state.id,
            val: true,
            parseCommand: parsePlayPauseStopCommand
        };
    }

    state = control.states.find(s => s.id && s.name === 'STOP');
    if (state && state.id) {
        stopCommand = {
            service: 'media_stop',
            setId: state.id,
            val: true,
            parseCommand: parsePlayPauseStopCommand
        };
    }

    if (playCommand) {
        entity.context.COMMANDS.push(playCommand);
        entity.attributes.supported_features |= SUPPORT_PLAY;
    }
    if (pauseCommand) {
        entity.context.COMMANDS.push(pauseCommand);
        entity.attributes.supported_features |= SUPPORT_PAUSE;
    }
    if (stopCommand) {
        entity.context.COMMANDS.push(stopCommand);
        entity.attributes.supported_features |= SUPPORT_STOP;
    }

    state = control.states.find(s => s.id && s.name === 'SEEK');
    if (state && state.id) {
        entity.context.COMMANDS.push({
            service: 'media_seek',
            setId: state.id,
            parseCommand: (entity, command, params, user) => {
                const percent = params.service_data.seek_position / entity.attributes.media_duration * 100;
                return adapterData.adapter.setForeignStateAsync(command.setId, percent, false, {user});
            }
        });
        entity.attributes.supported_features |= SUPPORT_SEEK;
    }

    state = control.states.find(s => s.id && s.name === 'SHUFFLE');
    if (state && state.id) {
        entity.context.COMMANDS.push({
            service: 'shuffle_set',
            setId: state.id,
            parseCommand: (entity, command, params, user) => {
                const shuffle = params.service_data.shuffle;
                return adapterData.adapter.setForeignStateAsync(command.setId, shuffle, false, {user});
            }
        });
        entity.context.ATTRIBUTES.push({
            attribute: 'shuffle',
            getId: state.id
        });
        utils.addID2entity(state.id, entity);
        entity.attributes.supported_features |= SUPPORT_SHUFFLE_SET;
    }

    state = control.states.find(s => s.id && s.name === 'REPEAT');
    if (state && state.id) {
        entity.context.COMMANDS.push({
            service: 'repeat_set',
            setId: state.id,
            parseCommand: (entity, command, params, user) => {
                const repeatIn = params.service_data.repeat;
                let target = 0; //off by default.
                if (repeatIn === 'all') {
                    target = 1;
                } else if (repeatIn === 'one') {
                    target = 2;
                }
                return adapterData.adapter.setForeignStateAsync(command.setId, target, false, {user});
            }
        });
        entity.context.ATTRIBUTES.push({
            attribute: 'repeat',
            getId: state.id,
            getParser: (entity, attr, state) => {
                if (state) {
                    if (state.val === 0) {
                        entity.attributes.repeat = 'off';
                    } else if (state.val === 1) {
                        entity.attributes.repeat = 'all';
                    } else if (state.val === 2) {
                        entity.attributes.repeat = 'one';
                    }
                }
            }
        });
        utils.addID2entity(state.id, entity);
        entity.attributes.supported_features |= SUPPORT_REPEAT_SET;
    }

    state = control.states.find(s => s.id && s.name === 'NEXT');
    if (state && state.id) {
        entity.context.COMMANDS.push({
            service: 'media_next_track',
            setId: state.id,
            parseCommand: (entity, command, params, user) =>
                new Promise((resolve, reject) =>
                    adapterData.adapter.setForeignState(command.setId, true, false, {user}, err =>
                        err ? reject(err) : resolve()))

        });
        entity.attributes.supported_features |= SUPPORT_NEXT_TRACK;
    }

    state = control.states.find(s => s.id && s.name === 'PREV');
    if (state && state.id) {
        entity.context.COMMANDS.push({
            service: 'media_previous_track',
            setId: state.id,
            parseCommand: (entity, command, params, user) =>
                new Promise((resolve, reject) =>
                    adapterData.adapter.setForeignState(command.setId, true, false, {user}, err =>
                        err ? reject(err) : resolve()))

        });
        entity.attributes.supported_features |= SUPPORT_PREVIOUS_TRACK;
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

        entity.attributes.supported_features |= SUPPORT_VOLUME_SET;
        entity.attributes.supported_features |= SUPPORT_VOLUME_BUTTONS;

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
                adapterData.adapter.getForeignState(command.getId, (err, state) => {
                    let val = (state && state.val) || 0;
                    val -= command.step;
                    if (val < command.min) {
                        val = command.min;
                    }
                    adapterData.adapter.setForeignState(command.setId, val, false, {user}, err =>
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
                adapterData.adapter.getForeignState(command.getId, (err, state) => {
                    let val = (state && state.val) || 0;
                    val += command.step;
                    if (val > command.max) {
                        val = command.max;
                    }
                    adapterData.adapter.setForeignState(command.setId, val, false, {user}, err =>
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
                    adapterData.adapter.setForeignState(command.setId, volume, false, {user}, err =>
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
        utils.addID2entity(state.id, entity);
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
        utils.addID2entity(state.id, entity);
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
                    adapterData.adapter.setForeignState(command.setId, data.service_data.is_volume_muted, false, {user}, err =>
                        err ? reject(err) : resolve()))
        });

        utils.addID2entity(state.id, entity);
        entity.attributes.supported_features |= SUPPORT_VOLUME_MUTE;
    }

    state = control.states.find(s => s.id && s.name === 'POWER');
    if (state && state.id) {
        entity.context.COMMANDS.push({
            service: 'turn_on',
            setId: state.id,
            parseCommand: (entity, command, params, user) =>
                new Promise((resolve, reject) =>
                    adapterData.adapter.setForeignState(command.setId, true, false, {user}, err =>
                        err ? reject(err) : resolve()))
        });

        entity.context.COMMANDS.push({
            service: 'turn_off',
            setId: state.id,
            parseCommand: (entity, command, params, user) =>
                new Promise((resolve, reject) =>
                    adapterData.adapter.setForeignState(command.setId, false, false, {user}, err =>
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
        entity.attributes.supported_features |= SUPPORT_TURN_ON;
        entity.attributes.supported_features |= SUPPORT_TURN_OFF;
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'ARTIST');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({attribute: 'media_artist', getId: state.id});
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'TITLE');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({attribute: 'media_title', getId: state.id});
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'DURATION');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({attribute: 'media_duration', getId: state.id});
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'ELAPSED');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({attribute: 'media_position', getId: state.id,
            getParser: (entity, attr, state) => {
                if (state) {
                    entity.attributes.media_position = state.val;
                    entity.attributes.media_position_updated_at = state.lc;
                }
            }
        });
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'EPISODE');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({attribute: 'media_episode', getId: state.id});
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'SEASON');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({attribute: 'media_season', getId: state.id});
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'COVER');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({attribute: 'entity_picture', getId: state.id});
        utils.addID2entity(state.id, entity);
    }

    return [entity];
};
