import { BaseEntity, type EntityCommand, type ServiceCallData } from './baseEntity';
import type { ConverterParameters } from '../converters/converter';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    adapter: ioBroker.Adapter;
    log: ioBroker.Logger;
    server?: {
        addRequestableFile(path: string): void;
        removeRequestableFile(path: string | null | undefined): void;
    };
};

const SUPPORT_PAUSE = 1;
const SUPPORT_SEEK = 2;
const SUPPORT_VOLUME_SET = 4;
const SUPPORT_VOLUME_MUTE = 8;
const SUPPORT_PREVIOUS_TRACK = 16;
const SUPPORT_NEXT_TRACK = 32;
const SUPPORT_TURN_ON = 128;
const SUPPORT_TURN_OFF = 256;
const SUPPORT_VOLUME_BUTTONS = 1024;
const SUPPORT_STOP = 4096;
const SUPPORT_PLAY = 16384;
const SUPPORT_SHUFFLE_SET = 32768;
const SUPPORT_REPEAT_SET = 262144;

/**
 * Handle a play / pause / stop service call.
 *
 * @param entity - current entity
 * @param command - matched EntityCommand
 * @param _data - service call data (unused — values are on command)
 * @param user - ioBroker user
 */
function parsePlayPauseStopCommand(
    entity: BaseEntity,
    command: EntityCommand,
    _data: ServiceCallData,
    user: string,
): Promise<unknown> {
    let id = command.setId;
    let val = command.val;

    switch (command.service) {
        case 'media_play':
            entity.state = 'playing';
            break;
        case 'media_pause':
            entity.state = 'paused';
            break;
        case 'media_play_pause':
            entity.state = entity.state === 'playing' ? 'paused' : 'playing';
            if (entity.state === 'playing') {
                id = command.playId;
                val = command.playVal;
            } else {
                id = command.pauseId;
                val = command.pauseVal;
            }
            break;
        case 'media_stop':
            entity.state = 'idle';
            break;
    }
    return adapterData.adapter.setForeignStateAsync(id!, val as ioBroker.StateValue, false, { user });
}

/**
 * MediaPlayerEntity — single class for the Home Assistant `media_player` domain.
 *
 * Maps STATE / PLAY / PAUSE / STOP / SEEK / SHUFFLE / REPEAT / NEXT / PREV / VOLUME /
 * MUTE / POWER / metadata / cover states from controls.states into HA attributes and
 * supported_features bits.
 */
export class MediaPlayerEntity extends BaseEntity {
    constructor(params: ConverterParameters) {
        const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
        super(friendlyName, room, func, objects[id], 'media_player', forcedEntityId);

        this.context.STATE.getId = null;
        this.context.ATTRIBUTES = [];
        this.context.COMMANDS = [];
        this.attributes.icon = 'mdi:play-network';
        this.attributes.media_content_type = 'unknown';
        this.attributes.supported_features = 0;

        let playCommand: EntityCommand | undefined;
        let pauseCommand: EntityCommand | undefined;
        let playPauseCommand: EntityCommand | undefined;
        let stopCommand: EntityCommand | undefined;

        let state = controls.states.find(s => s.id && s.name === 'STATE');
        if (state?.id) {
            this.context.STATE.setId = state.id;
            this.context.STATE.getId = state.id;
            this.context.STATE.getParser = (ent, _attrName, st): void => {
                const s = st ?? ({ val: null } as ioBroker.State);
                if (s.val === true || s.val === 1 || s.val === 'play') {
                    ent.state = 'playing';
                } else if (s.val === false || s.val === 0 || s.val === 'pause') {
                    ent.state = 'paused';
                } else if (s.val === 'stop' || s.val === 2) {
                    ent.state = 'idle';
                }
            };
            this.context.STATE.historyParser = (_id, val) => {
                if (val === true || val === 1 || val === 'play') {
                    return 'playing';
                }
                if (val === false || val === 0 || val === 'pause') {
                    return 'paused';
                }
                return 'idle';
            };

            const stateCommon = (objects[state.id]?.common ?? {}) as Record<string, unknown>;
            if (stateCommon.write) {
                const type = (stateCommon.type as string | undefined) ?? 'boolean';
                playCommand = {
                    service: 'media_play',
                    setId: state.id,
                    val: type === 'boolean' ? true : 1,
                    parseCommand: parsePlayPauseStopCommand,
                };
                pauseCommand = {
                    service: 'media_pause',
                    setId: state.id,
                    val: type === 'boolean' ? false : 0,
                    parseCommand: parsePlayPauseStopCommand,
                };
                playPauseCommand = {
                    service: 'media_play_pause',
                    setId: state.id,
                    pauseId: state.id,
                    playId: state.id,
                    pauseVal: pauseCommand.val,
                    playVal: playCommand.val,
                    parseCommand: parsePlayPauseStopCommand,
                };
                if (type === 'number') {
                    stopCommand = {
                        service: 'media_stop',
                        setId: state.id,
                        val: 2,
                        parseCommand: parsePlayPauseStopCommand,
                    };
                }
            }
            this.addID2entity(state.id);
        }

        state = controls.states.find(s => s.id && s.name === 'PLAY');
        if (state?.id) {
            playCommand = {
                service: 'media_play',
                setId: state.id,
                val: true,
                parseCommand: parsePlayPauseStopCommand,
            };
            if (!playPauseCommand) {
                playPauseCommand = {
                    service: 'media_play_pause',
                    setId: state.id,
                    playId: state.id,
                    playVal: true,
                    parseCommand: parsePlayPauseStopCommand,
                };
            } else {
                playPauseCommand.playId = state.id;
                playPauseCommand.playVal = true;
            }
        }

        state = controls.states.find(s => s.id && s.name === 'PAUSE');
        if (state?.id) {
            pauseCommand = {
                service: 'media_pause',
                setId: state.id,
                val: true,
                parseCommand: parsePlayPauseStopCommand,
            };
            if (!playPauseCommand) {
                playPauseCommand = {
                    service: 'media_play_pause',
                    setId: state.id,
                    pauseId: state.id,
                    pauseVal: true,
                    parseCommand: parsePlayPauseStopCommand,
                };
            } else {
                playPauseCommand.pauseId = state.id;
                playPauseCommand.pauseVal = true;
            }
        }

        state = controls.states.find(s => s.id && s.name === 'STOP');
        if (state?.id) {
            stopCommand = {
                service: 'media_stop',
                setId: state.id,
                val: true,
                parseCommand: parsePlayPauseStopCommand,
            };
        }

        if (playCommand) {
            this.context.COMMANDS.push(playCommand);
            this.attributes.supported_features = this.attributes.supported_features | SUPPORT_PLAY;
        }
        if (pauseCommand) {
            this.context.COMMANDS.push(pauseCommand);
            this.attributes.supported_features = this.attributes.supported_features | SUPPORT_PAUSE;
        }
        if (playPauseCommand) {
            this.context.COMMANDS.push(playPauseCommand);
        }
        if (stopCommand) {
            this.context.COMMANDS.push(stopCommand);
            this.attributes.supported_features = this.attributes.supported_features | SUPPORT_STOP;
        }

        state = controls.states.find(s => s.id && s.name === 'SEEK');
        if (state?.id) {
            this.context.COMMANDS.push({
                service: 'media_seek',
                setId: state.id,
                parseCommand: (ent, command, data: ServiceCallData, user) => {
                    const sd = data.service_data as Record<string, number>;
                    const percent = (sd.seek_position / (ent.attributes.media_duration as number)) * 100;
                    return adapterData.adapter.setForeignStateAsync(command.setId!, percent, false, { user });
                },
            });
            this.attributes.supported_features = this.attributes.supported_features | SUPPORT_SEEK;
        }

        state = controls.states.find(s => s.id && s.name === 'SHUFFLE');
        if (state?.id) {
            this.context.COMMANDS.push({
                service: 'shuffle_set',
                setId: state.id,
                parseCommand: (_ent, command, data: ServiceCallData, user) => {
                    const shuffle = data.service_data.shuffle;
                    return adapterData.adapter.setForeignStateAsync(
                        command.setId!,
                        shuffle as ioBroker.StateValue,
                        false,
                        { user },
                    );
                },
            });
            this.context.ATTRIBUTES.push({ attribute: 'shuffle', getId: state.id });
            this.addID2entity(state.id);
            this.attributes.supported_features = this.attributes.supported_features | SUPPORT_SHUFFLE_SET;
        }

        state = controls.states.find(s => s.id && s.name === 'REPEAT');
        if (state?.id) {
            this.context.COMMANDS.push({
                service: 'repeat_set',
                setId: state.id,
                parseCommand: (_ent, command, data: ServiceCallData, user) => {
                    const repeatIn = (data.service_data as Record<string, string>).repeat;
                    let target = 0;
                    if (repeatIn === 'all') {
                        target = 1;
                    } else if (repeatIn === 'one') {
                        target = 2;
                    }
                    return adapterData.adapter.setForeignStateAsync(command.setId!, target, false, { user });
                },
            });
            this.context.ATTRIBUTES.push({
                attribute: 'repeat',
                getId: state.id,
                getParser: (ent, _attr, st): void => {
                    if (st) {
                        if (st.val === 0) {
                            ent.attributes.repeat = 'off';
                        } else if (st.val === 1) {
                            ent.attributes.repeat = 'all';
                        } else if (st.val === 2) {
                            ent.attributes.repeat = 'one';
                        }
                    }
                },
            });
            this.addID2entity(state.id);
            this.attributes.supported_features = this.attributes.supported_features | SUPPORT_REPEAT_SET;
        }

        state = controls.states.find(s => s.id && s.name === 'NEXT');
        if (state?.id) {
            const nextId = state.id;
            this.context.COMMANDS.push({
                service: 'media_next_track',
                setId: nextId,
                parseCommand: (_ent, command, _data, user) =>
                    new Promise<void>((resolve, reject) =>
                        adapterData.adapter.setForeignState(command.setId!, true, false, { user }, err =>
                            err ? reject(err) : resolve(),
                        ),
                    ),
            });
            this.attributes.supported_features = this.attributes.supported_features | SUPPORT_NEXT_TRACK;
        }

        state = controls.states.find(s => s.id && s.name === 'PREV');
        if (state?.id) {
            this.context.COMMANDS.push({
                service: 'media_previous_track',
                setId: state.id,
                parseCommand: (_ent, command, _data, user) =>
                    new Promise<void>((resolve, reject) =>
                        adapterData.adapter.setForeignState(command.setId!, true, false, { user }, err =>
                            err ? reject(err) : resolve(),
                        ),
                    ),
            });
            this.attributes.supported_features = this.attributes.supported_features | SUPPORT_PREVIOUS_TRACK;
        }

        let getVolumeId: string | undefined;
        state = controls.states.find(s => s.id && s.name === 'VOLUME_ACTUAL');
        if (state?.id) {
            getVolumeId = state.id;
        }

        state = controls.states.find(s => s.id && s.name === 'VOLUME');
        if (state?.id) {
            const setVolumeId = state.id;
            getVolumeId = getVolumeId ?? setVolumeId;

            this.attributes.supported_features =
                this.attributes.supported_features | SUPPORT_VOLUME_SET | SUPPORT_VOLUME_BUTTONS;

            const volCommon = (objects[setVolumeId]?.common ?? {}) as Record<string, unknown>;
            const min = (volCommon.min as number | undefined) ?? 0;
            const max = (volCommon.max as number | undefined) ?? 100;
            const step = (volCommon.step as number | undefined) ?? (max - min) / 10;

            this.context.COMMANDS.push({
                service: 'volume_down',
                setId: setVolumeId,
                getId: getVolumeId,
                min,
                max,
                step,
                parseCommand: async (_ent, command, _data, user) => {
                    const st = await adapterData.adapter.getForeignStateAsync(command.getId!);
                    let val = ((st && st.val) as number) || 0;
                    val -= command.step!;
                    if (val < command.min!) {
                        val = command.min!;
                    }
                    await adapterData.adapter.setForeignStateAsync(command.setId!, val, false, { user });
                },
            });
            this.context.COMMANDS.push({
                service: 'volume_up',
                setId: setVolumeId,
                getId: getVolumeId,
                min,
                max,
                step,
                parseCommand: async (_ent, command, _data, user) => {
                    const st = await adapterData.adapter.getForeignStateAsync(command.getId!);
                    let val = ((st && st.val) as number) || 0;
                    val += command.step!;
                    if (val > command.max!) {
                        val = command.max!;
                    }
                    await adapterData.adapter.setForeignStateAsync(command.setId!, val, false, { user });
                },
            });
            this.context.COMMANDS.push({
                service: 'volume_set',
                setId: setVolumeId,
                min,
                max,
                parseCommand: (_ent, command, data: ServiceCallData, user) =>
                    new Promise<void>((resolve, reject) => {
                        const sd = data.service_data as Record<string, number | undefined>;
                        let volume = sd.value !== undefined ? sd.value : sd.volume_level!;
                        volume = volume * command.max! + command.min!;
                        adapterData.adapter.setForeignState(command.setId!, volume, false, { user }, e =>
                            e ? reject(e) : resolve(),
                        );
                    }),
            });
            this.context.ATTRIBUTES.push({
                attribute: 'volume_level',
                getId: state.id,
                min,
                max,
                getParser: (ent, attr, st): void => {
                    const s = st ?? ({ val: null } as ioBroker.State);
                    if (s.val !== null) {
                        ent.attributes.volume_level = ((s.val as number) - attr.min!) / attr.max!;
                    }
                },
            });
            this.attributes.volume_level = 0;
            this.addID2entity(state.id);
        } else if (getVolumeId) {
            const volCommon = (objects[getVolumeId]?.common ?? {}) as Record<string, unknown>;
            const min = (volCommon.min as number | undefined) ?? 0;
            const max = (volCommon.max as number | undefined) ?? 100;
            this.context.ATTRIBUTES.push({
                attribute: 'volume_level',
                getId: getVolumeId,
                min,
                max,
                getParser: (ent, attr, st): void => {
                    const s = st ?? ({ val: null } as ioBroker.State);
                    if (s.val !== null) {
                        ent.attributes.volume_level = ((s.val as number) - attr.min!) / attr.max!;
                    }
                },
            });
            this.addID2entity(getVolumeId);
        }

        state = controls.states.find(s => s.id && s.name === 'MUTE');
        if (state?.id) {
            this.context.ATTRIBUTES.push({ attribute: 'is_volume_muted', getId: state.id });
            this.context.COMMANDS.push({
                service: 'volume_mute',
                setId: state.id,
                parseCommand: async (ent, command, data: ServiceCallData, user) => {
                    const sd = data.service_data as Record<string, boolean>;
                    adapterData.log.debug(
                        `Got volume_mute command: ${JSON.stringify(command)} controlling mute with ${sd.is_volume_muted} from ${JSON.stringify(data)}`,
                    );
                    ent.attributes.is_volume_muted = sd.is_volume_muted;
                    return adapterData.adapter.setForeignStateAsync(command.setId!, sd.is_volume_muted, false, {
                        user,
                    });
                },
            });
            this.addID2entity(state.id);
            this.attributes.supported_features = this.attributes.supported_features | SUPPORT_VOLUME_MUTE;
        }

        state = controls.states.find(s => s.id && s.name === 'POWER');
        if (state?.id) {
            const powerId = state.id;
            this.context.COMMANDS.push({
                service: 'turn_on',
                setId: powerId,
                parseCommand: (_ent, command, _data, user) =>
                    new Promise<void>((resolve, reject) =>
                        adapterData.adapter.setForeignState(command.setId!, true, false, { user }, e =>
                            e ? reject(e) : resolve(),
                        ),
                    ),
            });
            this.context.COMMANDS.push({
                service: 'turn_off',
                setId: powerId,
                parseCommand: (_ent, command, _data, user) =>
                    new Promise<void>((resolve, reject) =>
                        adapterData.adapter.setForeignState(command.setId!, false, false, { user }, e =>
                            e ? reject(e) : resolve(),
                        ),
                    ),
            });
            this.context.COMMANDS.push({
                service: 'toggle',
                setId: powerId,
                parseCommand: async (_ent, command, _data, user) => {
                    const curr = await adapterData.adapter.getForeignStateAsync(command.setId!);
                    const val = !curr?.val;
                    return adapterData.adapter.setForeignStateAsync(command.setId!, val, false, { user });
                },
            });
            this.context.ATTRIBUTES.push({
                attribute: 'power',
                getId: powerId,
                getParser: (ent, _attr, st): void => {
                    const s = st ?? ({ val: null } as ioBroker.State);
                    if (s.val) {
                        ent.attributes.power = 'on';
                    } else {
                        ent.attributes.power = 'off';
                        ent.state = 'off';
                    }
                },
            });
            this.attributes.supported_features =
                this.attributes.supported_features | SUPPORT_TURN_ON | SUPPORT_TURN_OFF;
            this.addID2entity(powerId);
        }

        for (const [name, attr] of [
            ['ARTIST', 'media_artist'],
            ['TITLE', 'media_title'],
            ['DURATION', 'media_duration'],
            ['EPISODE', 'media_episode'],
            ['SEASON', 'media_season'],
        ] as const) {
            state = controls.states.find(s => s.id && s.name === name);
            if (state?.id) {
                this.context.ATTRIBUTES.push({ attribute: attr, getId: state.id });
                this.addID2entity(state.id);
            }
        }

        state = controls.states.find(s => s.id && s.name === 'ELAPSED');
        if (state?.id) {
            this.context.ATTRIBUTES.push({
                attribute: 'media_position',
                getId: state.id,
                getParser: (ent, _attr, st): void => {
                    if (st) {
                        ent.attributes.media_position = st.val;
                        ent.attributes.media_position_updated_at = st.lc;
                    }
                },
            });
            this.addID2entity(state.id);
        }

        state = controls.states.find(s => s.id && s.name === 'COVER');
        if (state?.id) {
            this.context.ATTRIBUTES.push({
                attribute: 'entity_picture',
                getId: state.id,
                getParser: (ent, _attr, st): void => {
                    adapterData.server?.removeRequestableFile(
                        ent.attributes.entity_picture as string | null | undefined,
                    );
                    ent.attributes.entity_picture = st?.val as string | undefined;
                    if (ent.attributes.entity_picture && ent.attributes.entity_picture.startsWith('/')) {
                        if (!ent.attributes.entity_picture.includes('?')) {
                            ent.attributes.entity_picture = `${ent.attributes.entity_picture}?ts=${Date.now()}`;
                        }
                        adapterData.server?.addRequestableFile(ent.attributes.entity_picture);
                    }
                },
            });
            this.addID2entity(state.id);
        }
    }
}
