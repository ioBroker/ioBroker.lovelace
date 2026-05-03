import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { CameraEntity } from '../entities/cameraEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData: { services: Record<string, unknown> } = require('../../../lib/dataSingleton');

/** Converter for camera (image URL) device types. */
export class CameraConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        return [new CameraEntity(params)];
    }
}

Converter.converters[Types.image] = CameraConverter;

// Camera services are registered for completeness but not actually supported.
// The delete at the end removes the camera domain so no service calls are routed to it.
adapterData.services.camera = {
    enable_motion_detection: {
        name: 'Enable motion detection',
        description: 'Enables the motion detection.',
        fields: {},
        target: { entity: [{ domain: ['camera'] }] },
    },
    disable_motion_detection: {
        name: 'Disable motion detection',
        description: 'Disables the motion detection.',
        fields: {},
        target: { entity: [{ domain: ['camera'] }] },
    },
    turn_off: {
        name: 'Turn off',
        description: 'Turns off the camera.',
        fields: {},
        target: { entity: [{ domain: ['camera'] }] },
    },
    turn_on: {
        name: 'Turn on',
        description: 'Turns on the camera.',
        fields: {},
        target: { entity: [{ domain: ['camera'] }] },
    },
    snapshot: {
        name: 'Take snapshot',
        description: 'Takes a snapshot from a camera.',
        fields: {
            filename: {
                required: true,
                example: '/tmp/snapshot_{{ entity_id.name }}.jpg',
                selector: { text: null },
                name: 'Filename',
                description: 'Template of a filename. Variable available is `entity_id`.',
            },
        },
        target: { entity: [{ domain: ['camera'] }] },
    },
    play_stream: {
        name: 'Play stream',
        description: 'Plays the camera stream on a supported media player.',
        fields: {
            media_player: {
                required: true,
                selector: { entity: { domain: 'media_player' } },
                name: 'Media player',
                description: 'Media players to stream to.',
            },
            format: {
                default: 'hls',
                selector: { select: { options: ['hls'] } },
                name: 'Format',
                description: 'Stream format supported by the media player.',
            },
        },
        target: { entity: [{ domain: ['camera'] }] },
    },
    record: {
        name: 'Record',
        description: 'Creates a recording of a live camera feed.',
        fields: {
            filename: {
                required: true,
                example: '/tmp/snapshot_{{ entity_id.name }}.mp4',
                selector: { text: null },
                name: 'Filename',
                description: 'Template of a filename. Variable available is `entity_id`.',
            },
            duration: {
                default: 30,
                selector: { number: { min: 1, max: 3600, unit_of_measurement: 'seconds' } },
                name: 'Duration',
                description: 'Planned duration of the recording. The actual duration may vary.',
            },
            lookback: {
                default: 0,
                selector: { number: { min: 0, max: 300, unit_of_measurement: 'seconds' } },
                name: 'Lookback',
                description:
                    'Planned lookback period to include in the recording (in addition to the duration). Only available if there is currently an active HLS stream. The actual length of the lookback period may vary.',
            },
        },
        target: { entity: [{ domain: ['camera'] }] },
    },
};
// Camera services are not actually handled — remove to prevent accidental routing
delete adapterData.services.camera;
