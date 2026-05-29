import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { MediaPlayerEntity } from '../entities/mediaPlayerEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    services: Record<string, unknown>;
};

/** Converter for media player device types. */
export class MediaPlayerConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        return [new MediaPlayerEntity(params)];
    }
}

Converter.converters[Types.media] = MediaPlayerConverter;

adapterData.services.media_player = {
    turn_on: {
        name: 'Turn on',
        description: 'Turns on the power of the media player.',
        fields: {},
        target: { entity: [{ domain: ['media_player'], supported_features: [128] }] },
    },
    turn_off: {
        name: 'Turn off',
        description: 'Turns off the power of the media player.',
        fields: {},
        target: { entity: [{ domain: ['media_player'], supported_features: [256] }] },
    },
    toggle: {
        name: 'Toggle',
        description: 'Toggles a media player on/off.',
        fields: {},
        target: { entity: [{ domain: ['media_player'], supported_features: [384] }] },
    },
    volume_up: {
        name: 'Turn up volume',
        description: 'Turns up the volume.',
        fields: {},
        target: { entity: [{ domain: ['media_player'], supported_features: [4, 1024] }] },
    },
    volume_down: {
        name: 'Turn down volume',
        description: 'Turns down the volume.',
        fields: {},
        target: { entity: [{ domain: ['media_player'], supported_features: [4, 1024] }] },
    },
    media_play_pause: {
        name: 'Play/Pause',
        description: 'Toggles play/pause.',
        fields: {},
        target: { entity: [{ domain: ['media_player'], supported_features: [16385] }] },
    },
    media_play: {
        name: 'Play',
        description: 'Starts playing.',
        fields: {},
        target: { entity: [{ domain: ['media_player'], supported_features: [16384] }] },
    },
    media_pause: {
        name: 'Pause',
        description: 'Pauses.',
        fields: {},
        target: { entity: [{ domain: ['media_player'], supported_features: [1] }] },
    },
    media_stop: {
        name: 'Stop',
        description: 'Stops playing.',
        fields: {},
        target: { entity: [{ domain: ['media_player'], supported_features: [4096] }] },
    },
    media_next_track: {
        name: 'Next',
        description: 'Selects the next track.',
        fields: {},
        target: { entity: [{ domain: ['media_player'], supported_features: [32] }] },
    },
    media_previous_track: {
        name: 'Previous',
        description: 'Selects the previous track.',
        fields: {},
        target: { entity: [{ domain: ['media_player'], supported_features: [16] }] },
    },
    volume_set: {
        name: 'Set volume',
        description: 'Sets the volume level.',
        fields: {
            volume_level: {
                required: true,
                selector: { number: { min: 0, max: 1, step: 0.01 } },
                name: 'Level',
                description: 'The volume. 0 is inaudible, 1 is the maximum volume.',
            },
        },
        target: { entity: [{ domain: ['media_player'], supported_features: [4] }] },
    },
    volume_mute: {
        name: 'Mute/unmute volume',
        description: 'Mutes or unmutes the media player.',
        fields: {
            is_volume_muted: {
                required: true,
                selector: { boolean: null },
                name: 'Muted',
                description: 'Defines whether or not it is muted.',
            },
        },
        target: { entity: [{ domain: ['media_player'], supported_features: [8] }] },
    },
    media_seek: {
        name: 'Seek',
        description: 'Allows you to go to a different part of the media that is currently playing.',
        fields: {
            seek_position: {
                required: true,
                selector: {
                    number: {
                        min: 0,
                        // eslint-disable-next-line no-loss-of-precision
                        max: 9223372036854775807,
                        step: 0.01,
                        mode: 'box',
                    },
                },
                name: 'Position',
                description: 'Target position in the currently playing media. The format is platform dependent.',
            },
        },
        target: { entity: [{ domain: ['media_player'], supported_features: [2] }] },
    },
    shuffle_set: {
        name: 'Shuffle',
        description: 'Playback mode that selects the media in randomized order.',
        fields: {
            shuffle: {
                required: true,
                selector: { boolean: null },
                name: 'Shuffle',
                description: 'Whether or not shuffle mode is enabled.',
            },
        },
        target: { entity: [{ domain: ['media_player'], supported_features: [32768] }] },
    },
    repeat_set: {
        name: 'Repeat',
        description: 'Playback mode that plays the media in a loop.',
        fields: {
            repeat: {
                required: true,
                selector: {
                    select: { options: ['off', 'all', 'one'], translation_key: 'repeat' },
                },
                name: 'Repeat mode',
                description: 'Repeat mode to set.',
            },
        },
        target: { entity: [{ domain: ['media_player'], supported_features: [262144] }] },
    },
};
