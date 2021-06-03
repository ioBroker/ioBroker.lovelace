const utils       = require('./utils');
const adapterData = require('./../dataSingleton');

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

    const entity = utils.processCommon(name, room, func, _obj, 'media_player', forcedEntityId);

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
            adapterData.adapter.setForeignState(id, val, false, {user}, err =>
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
        utils.addID2entity(state.id, entity);
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
                adapterData.adapter.setForeignState(command.stopId, true, false, {user}, err =>
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
                adapterData.adapter.setForeignState(command.setId, true, false, {user}, err =>
                    err ? reject(err) : resolve()))
        });
        entity.context.ATTRIBUTES.push({
            attribute: 'shuffle',
            getId: state.id,
        });
        utils.addID2entity(state.id, entity);
        entity.attributes.supported_features |= 0x8000;
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
        entity.attributes.supported_features |= 0x20;
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
        entity.attributes.supported_features |= 0x8;
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
        entity.attributes.supported_features |= 0x80;
        entity.attributes.supported_features |= 0x100;
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
        entity.context.ATTRIBUTES.push({attribute: 'media_position', getId: state.id});
        entity.context.ATTRIBUTES.push({attribute: 'media_position_updated_at', media_position_updated_at: true});
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
