import crypto from 'crypto';
import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { processCommon, addID2entity } from '../entities/utils';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData: { services: Record<string, unknown> } = require('../../../lib/dataSingleton');

/** Converter for camera (image URL) device types. */
export class CameraConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        //TOOD: Let's move this call to base class and call the overwritten (?) function here.
        const { controls, objects, forcedEntityId, friendlyName, room, func } = params;
        const entity = processCommon(friendlyName, room, func, objects[params.id], 'camera', forcedEntityId);

        entity.context.STATE = { getId: null };
        //TOOD: in the long run, don't handle attributes like this. Let base class handle attributes, especially creation of the array -> so we don't override already present attributes. Lets add a base func to add attributes which handles all that. Similar for COMMANDS, of course.
        entity.context.ATTRIBUTES = [];
        entity.attributes.icon = 'mdi:camera-outline';

        const state = controls.states.find(s => s.id && s.name === 'URL');
        if (state?.id) {
            entity.context.STATE = { getValue: 'on' };
            entity.context.ATTRIBUTES = [{ getId: state.id, attribute: 'url' }];
            entity.attributes.code_format = 'number';

            entity.attributes.access_token = crypto
                .createHmac(
                    'sha256',
                    (crypto.webcrypto.getRandomValues(new Uint32Array(1))[0] * 1_000_000_000).toString(),
                )
                .update(Date.now().toString())
                .digest('hex');

            entity.attributes.model_name = 'Simulated URL';
            entity.attributes.brand = 'ioBroker';
            entity.attributes.motion_detection = false;
            addID2entity(state.id, entity);
        }

        return [entity];
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
                description: 'Template of a filename. Variable available is `entity_id`. Must be mp4.',
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
