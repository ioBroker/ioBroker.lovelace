const crypto        = require('crypto');
const utils       = require('./../entities/utils');
const adapterData   = require('./../dataSingleton');

exports.processImage = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    // - geo_location => attributes: [latitude, longitude, passive, icon, radius, entity_picture, gps_accuracy, source]
    const entity = utils.processCommon(name, room, func, _obj, 'camera', forcedEntityId);

    entity.context.STATE = {getId: null};
    entity.context.ATTRIBUTES = [];
    entity.attributes.icon = 'mdi:camera-outline';

    const state = control.states.find(s => s.id && s.name === 'URL');
    if (state && state.id) {
        entity.context.STATE = {getValue: 'on'};
        entity.context.ATTRIBUTES = [{getId: state.id, attribute: 'url'}];
        entity.attributes.code_format = 'number';

        entity.attributes.access_token = crypto
            .createHmac('sha256', (crypto.webcrypto.getRandomValues(new Uint32Array(1))[0] * 1000000000).toString())
            .update(Date.now().toString())
            .digest('hex');

        entity.attributes.model_name = 'Simulated URL';
        entity.attributes.brand = 'ioBroker';
        entity.attributes.motion_detection = false;
        utils.addID2entity(state.id, entity);
    }

    return [entity];
};

function augmentServices (services) {
    //TODO: not supported. Do we need that? How to implement?
    services.camera = {
        enable_motion_detection: {
            name: 'Enable motion detection',
            description: 'Enables the motion detection.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: [
                            'camera'
                        ]
                    }
                ]
            }
        },
        disable_motion_detection: {
            name: 'Disable motion detection',
            description: 'Disables the motion detection.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: [
                            'camera'
                        ]
                    }
                ]
            }
        },
        turn_off: {
            name: 'Turn off',
            description: 'Turns off the camera.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: [
                            'camera'
                        ]
                    }
                ]
            }
        },
        turn_on: {
            name: 'Turn on',
            description: 'Turns on the camera.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: [
                            'camera'
                        ]
                    }
                ]
            }
        },
        snapshot: {
            name: 'Take snapshot',
            description: 'Takes a snapshot from a camera.',
            fields: {
                filename: {
                    required: true,
                    example: '/tmp/snapshot_{{ entity_id.name }}.jpg',
                    selector: {
                        text: null
                    },
                    name: 'Filename',
                    description: 'Template of a filename. Variable available is `entity_id`.'
                }
            },
            target: {
                entity: [
                    {
                        domain: [
                            'camera'
                        ]
                    }
                ]
            }
        },
        play_stream: {
            name: 'Play stream',
            description: 'Plays the camera stream on a supported media player.',
            fields: {
                media_player: {
                    required: true,
                    selector: {
                        entity: {
                            domain: 'media_player'
                        }
                    },
                    name: 'Media player',
                    description: 'Media players to stream to.'
                },
                format: {
                    'default': 'hls',
                    selector: {
                        select: {
                            options: [
                                'hls'
                            ]
                        }
                    },
                    name: 'Format',
                    description: 'Stream format supported by the media player.'
                }
            },
            target: {
                entity: [
                    {
                        domain: [
                            'camera'
                        ]
                    }
                ]
            }
        },
        record: {
            name: 'Record',
            description: 'Creates a recording of a live camera feed.',
            fields: {
                filename: {
                    required: true,
                    example: '/tmp/snapshot_{{ entity_id.name }}.mp4',
                    selector: {
                        text: null
                    },
                    name: 'Filename',
                    description: 'Template of a filename. Variable available is `entity_id`. Must be mp4.'
                },
                duration: {
                    'default': 30,
                    selector: {
                        number: {
                            min: 1,
                            max: 3600,
                            unit_of_measurement: 'seconds'
                        }
                    },
                    name: 'Duration',
                    description: 'Planned duration of the recording. The actual duration may vary.'
                },
                lookback: {
                    'default': 0,
                    selector: {
                        number: {
                            min: 0,
                            max: 300,
                            unit_of_measurement: 'seconds'
                        }
                    },
                    name: 'Lookback',
                    description: 'Planned lookback period to include in the recording (in addition to the duration). Only available if there is currently an active HLS stream. The actual length of the lookback period may vary.'
                }
            },
            target: {
                entity: [
                    {
                        domain: [
                            'camera'
                        ]
                    }
                ]
            }
        }
    };
    delete services.camera;
}
augmentServices(adapterData.services);