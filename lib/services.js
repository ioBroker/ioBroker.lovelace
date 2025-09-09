module.exports = {
    homeassistant: {
        save_persistent_states: {
            name: 'Save persistent states',
            description: 'Saves the persistent states immediately. Maintains the normal periodic saving interval.',
            fields: {},
        },
        turn_off: {
            name: 'Generic turn off',
            description: 'Generic action to turn devices off under any domain.',
            fields: {},
            target: {
                entity: [{}],
            },
        },
        turn_on: {
            name: 'Generic turn on',
            description: 'Generic action to turn devices on under any domain.',
            fields: {},
            target: {
                entity: [{}],
            },
        },
        toggle: {
            name: 'Generic toggle',
            description: 'Generic action to toggle devices on/off under any domain.',
            fields: {},
            target: {
                entity: [{}],
            },
        },
        stop: {
            name: 'Stop',
            description: 'Stops Home Assistant.',
            fields: {},
        },
        restart: {
            name: 'Restart',
            description: 'Restarts Home Assistant.',
            fields: {},
        },
        check_config: {
            name: 'Check configuration',
            description:
                'Checks the Home Assistant YAML-configuration files for errors. Errors will be shown in the Home Assistant logs.',
            fields: {},
        },
        update_entity: {
            name: 'Update entity',
            description: 'Forces one or more entities to update their data.',
            fields: {
                entity_id: {
                    required: true,
                    selector: {
                        entity: {
                            multiple: true,
                            reorder: false,
                        },
                    },
                    name: 'Entities to update',
                    description: 'List of entities to force update.',
                },
            },
        },
        reload_core_config: {
            name: 'Reload Core configuration',
            description: 'Reloads the Core configuration from the YAML-configuration.',
            fields: {},
        },
        set_location: {
            name: 'Set location',
            description: 'Updates the Home Assistant location.',
            fields: {
                latitude: {
                    required: true,
                    example: 32.87336,
                    selector: {
                        number: {
                            mode: 'box',
                            min: -90,
                            max: 90,
                            step: 'any',
                        },
                    },
                    name: 'Latitude',
                    description: 'Latitude of your location.',
                },
                longitude: {
                    required: true,
                    example: 117.22743,
                    selector: {
                        number: {
                            mode: 'box',
                            min: -180,
                            max: 180,
                            step: 'any',
                        },
                    },
                    name: 'Longitude',
                    description: 'Longitude of your location.',
                },
                elevation: {
                    required: false,
                    example: 120,
                    selector: {
                        number: {
                            mode: 'box',
                            step: 'any',
                        },
                    },
                    name: 'Elevation',
                    description: 'Elevation of your location above sea level.',
                },
            },
        },
        reload_custom_templates: {
            name: 'Reload custom Jinja2 templates',
            description:
                'Reloads Jinja2 templates found in the `custom_templates` folder in your config. New values will be applied on the next render of the template.',
            fields: {},
        },
        reload_config_entry: {
            name: 'Reload config entry',
            description: 'Reloads the specified config entry.',
            fields: {
                entry_id: {
                    advanced: true,
                    required: false,
                    example: '8955375327824e14ba89e4b29cc3ec9a',
                    selector: {
                        config_entry: {},
                    },
                    name: 'Config entry ID',
                    description: 'The configuration entry ID of the entry to be reloaded.',
                },
            },
            target: {
                entity: [{}],
                device: [{}],
            },
        },
        reload_all: {
            name: 'Reload all',
            description: 'Reloads all YAML configuration that can be reloaded without restarting Home Assistant.',
            fields: {},
        },
    },
    persistent_notification: {
        create: {
            name: 'Create',
            description: 'Shows a notification on the notifications panel.',
            fields: {
                message: {
                    required: true,
                    example: 'Please check your configuration.yaml.',
                    selector: {
                        text: {},
                    },
                    name: 'Message',
                    description: 'Message body of the notification.',
                },
                title: {
                    example: 'Test notification',
                    selector: {
                        text: {},
                    },
                    name: 'Title',
                    description: 'Optional title of the notification.',
                },
                notification_id: {
                    example: 1234,
                    selector: {
                        text: {},
                    },
                    name: 'Notification ID',
                    description:
                        'ID of the notification. This new notification will overwrite an existing notification with the same ID.',
                },
            },
        },
        dismiss: {
            name: 'Dismiss',
            description: 'Deletes a notification from the notifications panel.',
            fields: {
                notification_id: {
                    required: true,
                    example: 1234,
                    selector: {
                        text: {},
                    },
                    name: 'Notification ID',
                    description: 'ID of the notification to be deleted.',
                },
            },
        },
        dismiss_all: {
            name: 'Dismiss all',
            description: 'Deletes all notifications from the notifications panel.',
            fields: {},
        },
    },
    logger: {
        set_default_level: {
            name: 'Set default level',
            description: 'Sets the default log level for integrations.',
            fields: {
                level: {
                    selector: {
                        select: {
                            options: ['debug', 'info', 'warning', 'error', 'fatal', 'critical'],
                            translation_key: 'level',
                            custom_value: false,
                            sort: false,
                            multiple: false,
                        },
                    },
                    name: 'Level',
                    description: 'Default severity level for all integrations.',
                },
            },
        },
        set_level: {
            name: 'Set level',
            description: 'Sets the log level for one or more integrations.',
            fields: {},
        },
    },
    system_log: {
        clear: {
            name: 'Clear',
            description: 'Deletes all log entries.',
            fields: {},
        },
        write: {
            name: 'Write',
            description: 'Write log entry.',
            fields: {
                message: {
                    required: true,
                    example: 'Something went wrong',
                    selector: {
                        text: {},
                    },
                    name: 'Message',
                    description: 'Message to log.',
                },
                level: {
                    default: 'error',
                    selector: {
                        select: {
                            options: ['debug', 'info', 'warning', 'error', 'critical'],
                            translation_key: 'level',
                            custom_value: false,
                            sort: false,
                            multiple: false,
                        },
                    },
                    name: 'Level',
                    description: 'Log level.',
                },
                logger: {
                    example: 'mycomponent.myplatform',
                    selector: {
                        text: {},
                    },
                    name: 'Logger',
                    description: 'Logger name under which to log the message. Defaults to `system_log.external`.',
                },
            },
        },
    },
    frontend: {
        set_theme: {
            name: 'Set the default theme',
            description: 'Sets the default theme Home Assistant uses. Can be overridden by a user.',
            fields: {
                name: {
                    required: true,
                    example: 'default',
                    selector: {
                        theme: {
                            include_default: true,
                        },
                    },
                    name: 'Theme',
                    description: 'Name of a theme.',
                },
                mode: {
                    default: 'light',
                    selector: {
                        select: {
                            options: ['dark', 'light'],
                            translation_key: 'mode',
                            custom_value: false,
                            sort: false,
                            multiple: false,
                        },
                    },
                    name: 'Mode',
                    description: 'Theme mode.',
                },
            },
        },
        reload_themes: {
            name: 'Reload themes',
            description: 'Reloads themes from the YAML-configuration.',
            fields: {},
        },
    },
    recorder: {
        purge: {
            name: 'Purge',
            description: 'Starts purge task - to clean up old data from your database.',
            fields: {
                keep_days: {
                    selector: {
                        number: {
                            min: 0,
                            max: 365,
                            unit_of_measurement: 'days',
                            step: 1,
                            mode: 'slider',
                        },
                    },
                    name: 'Days to keep',
                    description:
                        'Number of days to keep the data in the database. Starting today, counting backward. A value of `7` means that everything older than a week will be purged.',
                },
                repack: {
                    default: false,
                    selector: {
                        boolean: {},
                    },
                    name: 'Repack',
                    description: 'Attempt to save disk space by rewriting the entire database file.',
                },
                apply_filter: {
                    default: false,
                    selector: {
                        boolean: {},
                    },
                    name: 'Apply filter',
                    description: 'Apply `entity_id` and `event_type` filters in addition to time-based purge.',
                },
            },
        },
        purge_entities: {
            name: 'Purge entities',
            description: 'Starts a purge task to remove the data related to specific entities from your database.',
            fields: {
                entity_id: {
                    required: false,
                    selector: {
                        entity: {
                            multiple: true,
                            reorder: false,
                        },
                    },
                    name: 'Entities to remove',
                    description: 'List of entities for which the data is to be removed from the Recorder database.',
                },
                domains: {
                    example: 'sun',
                    required: false,
                    selector: {
                        object: {},
                    },
                    name: 'Domains to remove',
                    description: 'List of domains for which the data needs to be removed from the Recorder database.',
                },
                entity_globs: {
                    example: 'domain*.object_id*',
                    required: false,
                    selector: {
                        object: {},
                    },
                    name: 'Entity globs to remove',
                    description:
                        'List of glob patterns used to select the entities for which the data is to be removed from the Recorder database.',
                },
                keep_days: {
                    default: 0,
                    selector: {
                        number: {
                            min: 0,
                            max: 365,
                            unit_of_measurement: 'days',
                            step: 1,
                            mode: 'slider',
                        },
                    },
                    name: 'Days to keep',
                    description:
                        'Number of days to keep the data for rows matching the filter. Starting today, counting backward. A value of `7` means that everything older than a week will be purged. The default of 0 days will remove all matching rows immediately.',
                },
            },
        },
        enable: {
            name: 'Enable',
            description: 'Starts the recording of events and state changes.',
            fields: {},
        },
        disable: {
            name: 'Disable',
            description: 'Stops the recording of events and state changes.',
            fields: {},
        },
        get_statistics: {
            name: 'Get statistics',
            description: 'Retrieves statistics data for entities within a specific time period.',
            fields: {
                start_time: {
                    required: true,
                    example: '2025-01-01 00:00:00',
                    selector: {
                        datetime: {},
                    },
                    name: 'Start time',
                    description: 'The start time for the statistics query.',
                },
                end_time: {
                    required: false,
                    example: '2025-01-02 00:00:00',
                    selector: {
                        datetime: {},
                    },
                    name: 'End time',
                    description:
                        'The end time for the statistics query. If omitted, returns all statistics from start time onward.',
                },
                statistic_ids: {
                    required: true,
                    example: ['sensor.energy_consumption', 'sensor.temperature'],
                    selector: {
                        statistic: {
                            multiple: true,
                        },
                    },
                    name: 'Statistic IDs',
                    description: 'The entity IDs or statistic IDs to return statistics for.',
                },
                period: {
                    required: true,
                    example: 'hour',
                    selector: {
                        select: {
                            options: ['5minute', 'hour', 'day', 'week', 'month'],
                            custom_value: false,
                            sort: false,
                            multiple: false,
                        },
                    },
                    name: 'Period',
                    description: 'The time period to group statistics by.',
                },
                types: {
                    required: true,
                    example: ['mean', 'sum'],
                    selector: {
                        select: {
                            options: ['change', 'last_reset', 'max', 'mean', 'min', 'state', 'sum'],
                            multiple: true,
                            custom_value: false,
                            sort: false,
                        },
                    },
                    name: 'Types',
                    description: 'The types of statistics values to return.',
                },
                units: {
                    required: false,
                    example: {
                        energy: 'kWh',
                        temperature: '°C',
                    },
                    selector: {
                        object: {},
                    },
                    name: 'Units',
                    description: 'Optional unit conversion mapping.',
                },
            },
            response: {
                optional: false,
            },
        },
    },
    backup: {
        create: {
            name: 'Create backup',
            description: 'Creates a new backup.',
            fields: {},
        },
        create_automatic: {
            name: 'Create automatic backup',
            description: 'Creates a new backup with automatic backup settings.',
            fields: {},
        },
    },
    ffmpeg: {
        start: {
            name: 'Start',
            description: 'Sends a start command to an FFmpeg-based sensor.',
            fields: {
                entity_id: {
                    selector: {
                        entity: {
                            integration: 'ffmpeg',
                            domain: ['binary_sensor'],
                            multiple: false,
                            reorder: false,
                        },
                    },
                    name: 'Entity',
                    description: 'Name of entity that will start. Platform dependent.',
                },
            },
        },
        stop: {
            name: 'Stop',
            description: 'Sends a stop command to an FFmpeg-based sensor.',
            fields: {
                entity_id: {
                    selector: {
                        entity: {
                            integration: 'ffmpeg',
                            domain: ['binary_sensor'],
                            multiple: false,
                            reorder: false,
                        },
                    },
                    name: 'Entity',
                    description: 'Name of entity that will stop. Platform dependent.',
                },
            },
        },
        restart: {
            name: 'Restart',
            description: 'Sends a restart command to an FFmpeg-based sensor.',
            fields: {
                entity_id: {
                    selector: {
                        entity: {
                            integration: 'ffmpeg',
                            domain: ['binary_sensor'],
                            multiple: false,
                            reorder: false,
                        },
                    },
                    name: 'Entity',
                    description: 'Name of entity that will restart. Platform dependent.',
                },
            },
        },
    },
    conversation: {
        process: {
            name: 'Process',
            description: 'Launches a conversation from a transcribed text.',
            fields: {
                text: {
                    example: 'Turn all lights on',
                    required: true,
                    selector: {
                        text: {},
                    },
                    name: 'Text',
                    description: 'Transcribed text input.',
                },
                language: {
                    example: 'NL',
                    selector: {
                        text: {},
                    },
                    name: 'Language',
                    description: 'Language of text. Defaults to server language.',
                },
                agent_id: {
                    example: 'homeassistant',
                    selector: {
                        conversation_agent: {},
                    },
                    name: 'Agent',
                    description:
                        'Conversation agent to process your request. The conversation agent is the brains of your assistant. It processes the incoming text commands.',
                },
                conversation_id: {
                    example: 'my_conversation_1',
                    selector: {
                        text: {},
                    },
                    name: 'Conversation ID',
                    description: 'ID of the conversation, to be able to continue a previous conversation',
                },
            },
            response: {
                optional: true,
            },
        },
        reload: {
            name: 'Reload',
            description: 'Reloads the intent configuration.',
            fields: {
                language: {
                    example: 'NL',
                    selector: {
                        text: {},
                    },
                    name: 'Language',
                    description: 'Language to clear cached intents for. Defaults to server language.',
                },
                agent_id: {
                    example: 'homeassistant',
                    selector: {
                        conversation_agent: {},
                    },
                    name: 'Agent',
                    description: 'Conversation agent to reload.',
                },
            },
        },
    },
    tts: {
        speak: {
            name: 'Speak',
            description: 'Speaks something using text-to-speech on a media player.',
            fields: {
                media_player_entity_id: {
                    required: true,
                    selector: {
                        entity: {
                            domain: ['media_player'],
                            multiple: false,
                            reorder: false,
                        },
                    },
                    name: 'Media player entity',
                    description: 'Media players to play the message.',
                },
                message: {
                    example: 'My name is hanna',
                    required: true,
                    selector: {
                        text: {},
                    },
                    name: 'Message',
                    description:
                        'The text you want to convert into speech so that you can listen to it on your device.',
                },
                cache: {
                    default: true,
                    selector: {
                        boolean: {},
                    },
                    name: 'Cache',
                    description:
                        'Stores this message locally so that when the text is requested again, the output can be produced more quickly.',
                },
                language: {
                    example: 'ru',
                    selector: {
                        text: {},
                    },
                    name: 'Language',
                    description: 'Language to use for speech generation.',
                },
                options: {
                    advanced: true,
                    example: 'platform specific',
                    selector: {
                        object: {},
                    },
                    name: 'Options',
                    description: 'A dictionary containing integration-specific options.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['tts'],
                    },
                ],
            },
        },
        clear_cache: {
            name: 'Clear TTS cache',
            description: 'Removes all cached text-to-speech files and purges the memory.',
            fields: {},
        },
        google_translate_say: {
            name: 'Say a TTS message with google_translate',
            description: 'Say something using text-to-speech on a media player with google_translate.',
            fields: {
                entity_id: {
                    required: true,
                    selector: {
                        entity: {
                            domain: 'media_player',
                        },
                    },
                },
                message: {
                    example: 'My name is hanna',
                    required: true,
                    selector: {
                        text: null,
                    },
                },
                cache: {
                    default: false,
                    selector: {
                        boolean: null,
                    },
                },
                language: {
                    example: 'ru',
                    selector: {
                        text: null,
                    },
                },
                options: {
                    advanced: true,
                    example: 'platform specific',
                    selector: {
                        object: null,
                    },
                },
            },
        },
        cloud_say: {
            name: 'Say a TTS message with cloud',
            description: 'Say something using text-to-speech on a media player with cloud.',
            fields: {
                entity_id: {
                    required: true,
                    selector: {
                        entity: {
                            domain: 'media_player',
                        },
                    },
                },
                message: {
                    example: 'My name is hanna',
                    required: true,
                    selector: {
                        text: null,
                    },
                },
                cache: {
                    default: false,
                    selector: {
                        boolean: null,
                    },
                },
                language: {
                    example: 'ru',
                    selector: {
                        text: null,
                    },
                },
                options: {
                    advanced: true,
                    example: 'platform specific',
                    selector: {
                        object: null,
                    },
                },
            },
        },
    },
    cloud: {
        remote_connect: {
            name: 'Enable remote access',
            description:
                'Makes the instance UI accessible from outside of the local network by enabling your Home Assistant Cloud connection.',
            fields: {},
        },
        remote_disconnect: {
            name: 'Disable remote access',
            description:
                'Disconnects the instance UI from Home Assistant Cloud. This disables access to it from outside your local network.',
            fields: {},
        },
    },
    scene: {
        turn_on: {
            name: 'Activate',
            description: 'Activates a scene.',
            fields: {
                transition: {
                    selector: {
                        number: {
                            min: 0,
                            max: 300,
                            unit_of_measurement: 'seconds',
                            step: 1,
                            mode: 'slider',
                        },
                    },
                    name: 'Transition',
                    description: 'Time it takes the devices to transition into the states defined in the scene.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['scene'],
                    },
                ],
            },
        },
        reload: {
            name: 'Reload',
            description: 'Reloads the scenes from the YAML-configuration.',
            fields: {},
        },
        apply: {
            name: 'Apply',
            description: 'Activates a scene with configuration.',
            fields: {
                entities: {
                    required: true,
                    example: 'light.kitchen: "on"\nlight.ceiling:\n  state: "on"\n  brightness: 80\n',
                    selector: {
                        object: {},
                    },
                    name: 'Entities state',
                    description: 'List of entities and their target state.',
                },
                transition: {
                    selector: {
                        number: {
                            min: 0,
                            max: 300,
                            unit_of_measurement: 'seconds',
                            step: 1,
                            mode: 'slider',
                        },
                    },
                    name: 'Transition',
                    description: 'Time it takes the devices to transition into the states defined in the scene.',
                },
            },
        },
        create: {
            name: 'Create',
            description: 'Creates a new scene.',
            fields: {
                scene_id: {
                    required: true,
                    example: 'all_lights',
                    selector: {
                        text: {},
                    },
                    name: 'Scene entity ID',
                    description: 'The entity ID of the new scene.',
                },
                entities: {
                    advanced: true,
                    example: 'light.tv_back_light: "on"\nlight.ceiling:\n  state: "on"\n  brightness: 200\n',
                    selector: {
                        object: {},
                    },
                    name: 'Entity states',
                    description:
                        "List of entities and their target state. If your entities are already in the target state right now, use 'Entities snapshot' instead.",
                },
                snapshot_entities: {
                    example: '- light.ceiling\n- light.kitchen\n',
                    selector: {
                        entity: {
                            multiple: true,
                            reorder: false,
                        },
                    },
                    name: 'Entities snapshot',
                    description:
                        "List of entities to be included in the snapshot. By taking a snapshot, you record the current state of those entities. If you do not want to use the current state of all your entities for this scene, you can combine 'Entities snapshot' with 'Entity states'.",
                },
            },
        },
        delete: {
            name: 'Delete',
            description: 'Deletes a dynamically created scene.',
            fields: {},
            target: {
                entity: [
                    {
                        integration: 'homeassistant',
                        domain: ['scene'],
                    },
                ],
            },
        },
    },
    camera: {
        enable_motion_detection: {
            name: 'Enable motion detection',
            description: 'Enables the motion detection.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['camera'],
                    },
                ],
            },
        },
        disable_motion_detection: {
            name: 'Disable motion detection',
            description: 'Disables the motion detection.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['camera'],
                    },
                ],
            },
        },
        turn_off: {
            name: 'Turn off',
            description: 'Turns off the camera.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['camera'],
                    },
                ],
            },
        },
        turn_on: {
            name: 'Turn on',
            description: 'Turns on the camera.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['camera'],
                    },
                ],
            },
        },
        snapshot: {
            name: 'Take snapshot',
            description: 'Takes a snapshot from a camera.',
            fields: {
                filename: {
                    required: true,
                    example: '/tmp/snapshot_{{ entity_id.name }}.jpg',
                    selector: {
                        text: {},
                    },
                    name: 'Filename',
                    description: 'Full path to filename.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['camera'],
                    },
                ],
            },
        },
        play_stream: {
            name: 'Play stream',
            description: 'Plays the camera stream on a supported media player.',
            fields: {
                media_player: {
                    required: true,
                    selector: {
                        entity: {
                            domain: ['media_player'],
                            multiple: false,
                            reorder: false,
                        },
                    },
                    name: 'Media player',
                    description: 'Media players to stream to.',
                },
                format: {
                    default: 'hls',
                    selector: {
                        select: {
                            options: ['hls'],
                            custom_value: false,
                            sort: false,
                            multiple: false,
                        },
                    },
                    name: 'Format',
                    description: 'Stream format supported by the media player.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['camera'],
                    },
                ],
            },
        },
        record: {
            name: 'Record',
            description: 'Creates a recording of a live camera feed.',
            fields: {
                filename: {
                    required: true,
                    example: '/tmp/snapshot_{{ entity_id.name }}.mp4',
                    selector: {
                        text: {},
                    },
                    name: 'Filename',
                    description: 'Full path to filename. Must be mp4.',
                },
                duration: {
                    default: 30,
                    selector: {
                        number: {
                            min: 1,
                            max: 3600,
                            unit_of_measurement: 'seconds',
                            step: 1,
                            mode: 'slider',
                        },
                    },
                    name: 'Duration',
                    description: 'Planned duration of the recording. The actual duration may vary.',
                },
                lookback: {
                    default: 0,
                    selector: {
                        number: {
                            min: 0,
                            max: 300,
                            unit_of_measurement: 'seconds',
                            step: 1,
                            mode: 'slider',
                        },
                    },
                    name: 'Lookback',
                    description:
                        'Planned lookback period to include in the recording (in addition to the duration). Only available if there is currently an active HLS stream. The actual length of the lookback period may vary.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['camera'],
                    },
                ],
            },
        },
    },
    zone: {
        reload: {
            name: 'Reload',
            description: 'Reloads zones from the YAML-configuration.',
            fields: {},
        },
    },
    logbook: {
        log: {
            name: 'Log',
            description: 'Creates a custom entry in the logbook.',
            fields: {
                name: {
                    required: true,
                    example: 'Kitchen',
                    selector: {
                        text: {},
                    },
                    name: 'Name',
                    description: "Custom name for an entity, can be referenced using the 'Entity ID' field.",
                },
                message: {
                    required: true,
                    example: 'is being used',
                    selector: {
                        text: {},
                    },
                    name: 'Message',
                    description: 'Message of the logbook entry.',
                },
                entity_id: {
                    selector: {
                        entity: {},
                    },
                    name: 'Entity ID',
                    description: 'Entity to reference in the logbook entry.',
                },
                domain: {
                    example: 'light',
                    selector: {
                        text: {},
                    },
                    name: 'Domain',
                    description:
                        'Determines which icon is used in the logbook entry. The icon illustrates the integration domain related to this logbook entry.',
                },
            },
        },
    },
    timer: {
        reload: {
            name: 'Reload',
            description: 'Reloads timers from the YAML-configuration.',
            fields: {},
        },
        start: {
            name: 'Start',
            description: 'Starts a timer or restarts it with a provided duration.',
            fields: {
                duration: {
                    example: '00:01:00 or 60',
                    selector: {
                        text: {},
                    },
                    name: 'Duration',
                    description: 'Custom duration to restart the timer with.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['timer'],
                    },
                ],
            },
        },
        pause: {
            name: 'Pause',
            description: 'Pauses a running timer, retaining the remaining duration for later continuation.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['timer'],
                    },
                ],
            },
        },
        cancel: {
            name: 'Cancel',
            description:
                "Resets a timer's duration to the last known initial value without firing the timer finished event.",
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['timer'],
                    },
                ],
            },
        },
        finish: {
            name: 'Finish',
            description: 'Finishes a running timer earlier than scheduled.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['timer'],
                    },
                ],
            },
        },
        change: {
            name: 'Change',
            description: 'Changes a timer by adding or subtracting a given duration.',
            fields: {
                duration: {
                    default: 0,
                    required: true,
                    example: '00:01:00, 60 or -60',
                    selector: {
                        text: {},
                    },
                    name: 'Duration',
                    description: 'Duration to add to or subtract from the running timer.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['timer'],
                    },
                ],
            },
        },
    },
    input_select: {
        reload: {
            name: 'Reload',
            description: 'Reloads helpers from the YAML-configuration.',
            fields: {},
        },
        select_first: {
            name: 'First',
            description: 'Selects the first option.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['input_select'],
                    },
                ],
            },
        },
        select_last: {
            name: 'Last',
            description: 'Selects the last option.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['input_select'],
                    },
                ],
            },
        },
        select_next: {
            name: 'Next',
            description: 'Selects the next option.',
            fields: {
                cycle: {
                    default: true,
                    selector: {
                        boolean: {},
                    },
                    name: 'Cycle',
                    description: 'If the option should cycle from the last to the first option on the list.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['input_select'],
                    },
                ],
            },
        },
        select_option: {
            name: 'Select',
            description: 'Selects an option.',
            fields: {
                option: {
                    required: true,
                    example: '"Item A"',
                    selector: {
                        text: {},
                    },
                    name: 'Option',
                    description: 'Option to be selected.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['input_select'],
                    },
                ],
            },
        },
        select_previous: {
            name: 'Previous',
            description: 'Selects the previous option.',
            fields: {
                cycle: {
                    default: true,
                    selector: {
                        boolean: {},
                    },
                    name: 'Cycle',
                    description: 'If the option should cycle from the first to the last option on the list.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['input_select'],
                    },
                ],
            },
        },
        set_options: {
            name: 'Set options',
            description: 'Sets the options.',
            fields: {
                options: {
                    required: true,
                    example: '["Item A", "Item B", "Item C"]',
                    selector: {
                        text: {
                            multiple: true,
                            multiline: false,
                        },
                    },
                    name: 'Options',
                    description: 'List of options.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['input_select'],
                    },
                ],
            },
        },
    },
    input_button: {
        reload: {
            name: 'Reload',
            description: 'Reloads helpers from the YAML-configuration.',
            fields: {},
        },
        press: {
            name: 'Press',
            description: 'Mimics the physical button press on the device.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['input_button'],
                    },
                ],
            },
        },
    },
    automation: {
        trigger: {
            name: 'Trigger',
            description: 'Triggers the actions of an automation.',
            fields: {
                skip_condition: {
                    default: true,
                    selector: {
                        boolean: {},
                    },
                    name: 'Skip conditions',
                    description: 'Defines whether or not the conditions will be skipped.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['automation'],
                    },
                ],
            },
        },
        toggle: {
            name: 'Toggle',
            description: 'Toggles (enable / disable) an automation.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['automation'],
                    },
                ],
            },
        },
        turn_on: {
            name: 'Turn on',
            description: 'Enables an automation.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['automation'],
                    },
                ],
            },
        },
        turn_off: {
            name: 'Turn off',
            description: 'Disables an automation.',
            fields: {
                stop_actions: {
                    default: true,
                    selector: {
                        boolean: {},
                    },
                    name: 'Stop actions',
                    description: 'Stops currently running actions.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['automation'],
                    },
                ],
            },
        },
        reload: {
            name: 'Reload',
            description: 'Reloads the automation configuration.',
            fields: {},
        },
    },
    script: {
        reload: {
            name: 'Reload',
            description: 'Reloads all the available scripts.',
            fields: {},
        },
        turn_on: {
            name: 'Turn on',
            description: 'Runs the sequence of actions defined in a script.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['script'],
                    },
                ],
            },
        },
        turn_off: {
            name: 'Turn off',
            description: 'Stops a running script.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['script'],
                    },
                ],
            },
        },
        toggle: {
            name: 'Toggle',
            description: "Starts a script if it isn't running, stops it otherwise.",
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['script'],
                    },
                ],
            },
        },
    },
    input_boolean: {
        reload: {
            name: 'Reload',
            description: 'Reloads helpers from the YAML-configuration.',
            fields: {},
        },
        turn_on: {
            name: 'Turn on',
            description: 'Turns on the helper.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['input_boolean'],
                    },
                ],
            },
        },
        turn_off: {
            name: 'Turn off',
            description: 'Turns off the helper.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['input_boolean'],
                    },
                ],
            },
        },
        toggle: {
            name: 'Toggle',
            description: 'Toggles the helper on/off.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['input_boolean'],
                    },
                ],
            },
        },
    },
    person: {
        reload: {
            name: 'Reload',
            description: 'Reloads persons from the YAML-configuration.',
            fields: {},
        },
    },
    input_number: {
        reload: {
            name: 'Reload',
            description: 'Reloads helpers from the YAML-configuration.',
            fields: {},
        },
        set_value: {
            name: 'Set',
            description: 'Sets the value.',
            fields: {
                value: {
                    required: true,
                    selector: {
                        number: {
                            min: 0,
                            max: 9223372036854776000,
                            step: 0.001,
                            mode: 'box',
                        },
                    },
                    name: 'Value',
                    description: 'The target value.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['input_number'],
                    },
                ],
            },
        },
        increment: {
            name: 'Increment',
            description: 'Increments the current value by 1 step.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['input_number'],
                    },
                ],
            },
        },
        decrement: {
            name: 'Decrement',
            description: 'Decrements the current value by 1 step.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['input_number'],
                    },
                ],
            },
        },
    },
    schedule: {
        reload: {
            name: 'Reload',
            description: 'Reloads schedules from the YAML-configuration.',
            fields: {},
        },
        get_schedule: {
            name: 'Get schedule',
            description: 'Retrieves the configured time ranges of one or multiple schedules.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['schedule'],
                    },
                ],
            },
            response: {
                optional: false,
            },
        },
    },
    input_datetime: {
        reload: {
            name: 'Reload',
            description: 'Reloads helpers from the YAML-configuration.',
            fields: {},
        },
        set_datetime: {
            name: 'Set',
            description: 'Sets the date and/or time.',
            fields: {
                date: {
                    example: '"2019-04-20"',
                    selector: {
                        text: {},
                    },
                    name: 'Date',
                    description: 'The target date.',
                },
                time: {
                    example: '"05:04:20"',
                    selector: {
                        time: {},
                    },
                    name: 'Time',
                    description: 'The target time.',
                },
                datetime: {
                    example: '"2019-04-20 05:04:20"',
                    selector: {
                        text: {},
                    },
                    name: 'Date & time',
                    description: 'The target date & time.',
                },
                timestamp: {
                    selector: {
                        number: {
                            min: 0,
                            max: 9223372036854776000,
                            mode: 'box',
                            step: 1,
                        },
                    },
                    name: 'Timestamp',
                    description: 'The target date & time, expressed by a UNIX timestamp.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['input_datetime'],
                    },
                ],
            },
        },
    },
    mqtt: {
        publish: {
            name: 'Publish',
            description: 'Publishes a message to an MQTT topic.',
            fields: {
                topic: {
                    required: true,
                    example: '/homeassistant/hello',
                    selector: {
                        text: {},
                    },
                    name: 'Topic',
                    description: 'Topic to publish to.',
                },
                payload: {
                    example: "The temperature is {{ states('sensor.temperature') }}",
                    selector: {
                        template: {},
                    },
                    name: 'Payload',
                    description: 'The payload to publish. Publishes an empty message if not provided.',
                },
                evaluate_payload: {
                    advanced: true,
                    default: false,
                    selector: {
                        boolean: {},
                    },
                    name: 'Evaluate payload',
                    description:
                        "If 'Payload' is a Python bytes literal, evaluate the bytes literal and publish the raw data.",
                },
                qos: {
                    advanced: true,
                    default: 0,
                    selector: {
                        select: {
                            options: ['0', '1', '2'],
                            custom_value: false,
                            sort: false,
                            multiple: false,
                        },
                    },
                    name: 'QoS',
                    description: 'Quality of Service to use. 0: At most once. 1: At least once. 2: Exactly once.',
                },
                retain: {
                    default: false,
                    selector: {
                        boolean: {},
                    },
                    name: 'Retain',
                    description:
                        'If the message should have the retain flag set. If set, the broker stores the most recent message on a topic.',
                },
            },
        },
        dump: {
            name: 'Export',
            description:
                'Writes all messages on a specific topic into the `mqtt_dump.txt` file in your configuration folder.',
            fields: {
                topic: {
                    example: 'OpenZWave/#',
                    selector: {
                        text: {},
                    },
                    name: 'Topic',
                    description: 'Topic to listen to.',
                },
                duration: {
                    default: 5,
                    selector: {
                        number: {
                            min: 1,
                            max: 300,
                            unit_of_measurement: 'seconds',
                            step: 1,
                            mode: 'slider',
                        },
                    },
                    name: 'Duration',
                    description: 'How long we should listen for messages in seconds.',
                },
            },
        },
        reload: {
            name: 'Reload',
            description: 'Reloads MQTT entities from the YAML-configuration.',
            fields: {},
        },
    },
    input_text: {
        reload: {
            name: 'Reload',
            description: 'Reloads helpers from the YAML-configuration.',
            fields: {},
        },
        set_value: {
            name: 'Set',
            description: 'Sets the value.',
            fields: {
                value: {
                    required: true,
                    example: 'This is an example text',
                    selector: {
                        text: {},
                    },
                    name: 'Value',
                    description: 'The target value.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['input_text'],
                    },
                ],
            },
        },
    },
    counter: {
        increment: {
            name: 'Increment',
            description: 'Increments a counter by its step size.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['counter'],
                    },
                ],
            },
        },
        decrement: {
            name: 'Decrement',
            description: 'Decrements a counter by its step size.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['counter'],
                    },
                ],
            },
        },
        reset: {
            name: 'Reset',
            description: 'Resets a counter to its initial value.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['counter'],
                    },
                ],
            },
        },
        set_value: {
            name: 'Set',
            description: 'Sets the counter to a specific value.',
            fields: {
                value: {
                    required: true,
                    selector: {
                        number: {
                            min: 0,
                            max: 9223372036854776000,
                            mode: 'box',
                            step: 1,
                        },
                    },
                    name: 'Value',
                    description: 'The new counter value the entity should be set to.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['counter'],
                    },
                ],
            },
        },
    },
    todo: {
        add_item: {
            name: 'Add item',
            description: 'Adds a new to-do list item.',
            fields: {
                item: {
                    required: true,
                    example: 'Submit income tax return',
                    selector: {
                        text: {},
                    },
                    name: 'Item name',
                    description: 'The name that represents the to-do item.',
                },
                due_date: {
                    filter: {
                        supported_features: [16],
                    },
                    example: '2023-11-17',
                    selector: {
                        date: {},
                    },
                    name: 'Due date',
                    description: 'The date the to-do item is expected to be completed.',
                },
                due_datetime: {
                    filter: {
                        supported_features: [32],
                    },
                    example: '2023-11-17 13:30:00',
                    selector: {
                        datetime: {},
                    },
                    name: 'Due date and time',
                    description: 'The date and time the to-do item is expected to be completed.',
                },
                description: {
                    filter: {
                        supported_features: [64],
                    },
                    example: 'A more complete description of the to-do item than that provided by the summary.',
                    selector: {
                        text: {},
                    },
                    name: 'Description',
                    description: 'A more complete description of the to-do item than provided by the item name.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['todo'],
                        supported_features: [1],
                    },
                ],
            },
        },
        update_item: {
            name: 'Update item',
            description: 'Updates an existing to-do list item based on its name or UID.',
            fields: {
                item: {
                    required: true,
                    example: 'Submit income tax return',
                    selector: {
                        text: {},
                    },
                    name: 'Item name or UID',
                    description:
                        'The name/summary of the to-do item. If you have items with duplicate names, you can reference specific ones using their UID instead.',
                },
                rename: {
                    example: 'Something else',
                    selector: {
                        text: {},
                    },
                    name: 'Rename item',
                    description: 'The new name for the to-do item',
                },
                status: {
                    example: 'needs_action',
                    selector: {
                        select: {
                            translation_key: 'status',
                            options: ['needs_action', 'completed'],
                            custom_value: false,
                            sort: false,
                            multiple: false,
                        },
                    },
                    name: 'Set status',
                    description: 'A status or confirmation of the to-do item.',
                },
                due_date: {
                    filter: {
                        supported_features: [16],
                    },
                    example: '2023-11-17',
                    selector: {
                        date: {},
                    },
                    name: 'Due date',
                    description: 'The date the to-do item is expected to be completed.',
                },
                due_datetime: {
                    filter: {
                        supported_features: [32],
                    },
                    example: '2023-11-17 13:30:00',
                    selector: {
                        datetime: {},
                    },
                    name: 'Due date and time',
                    description: 'The date and time the to-do item is expected to be completed.',
                },
                description: {
                    filter: {
                        supported_features: [64],
                    },
                    example: 'A more complete description of the to-do item than that provided by the summary.',
                    selector: {
                        text: {},
                    },
                    name: 'Description',
                    description: 'A more complete description of the to-do item than provided by the item name.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['todo'],
                        supported_features: [4],
                    },
                ],
            },
        },
        remove_item: {
            name: 'Remove item',
            description: 'Removes an existing to-do list item by its name or UID.',
            fields: {
                item: {
                    required: true,
                    example: 'Submit income tax return',
                    selector: {
                        text: {},
                    },
                    name: 'Item name or UID',
                    description:
                        'The name/summary of the to-do item. If you have items with duplicate names, you can reference specific ones using their UID instead.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['todo'],
                        supported_features: [2],
                    },
                ],
            },
        },
        get_items: {
            name: 'Get items',
            description: 'Gets items on a to-do list.',
            fields: {
                status: {
                    example: 'needs_action',
                    default: 'needs_action',
                    selector: {
                        select: {
                            translation_key: 'status',
                            options: ['needs_action', 'completed'],
                            multiple: true,
                            custom_value: false,
                            sort: false,
                        },
                    },
                    name: 'Status',
                    description:
                        'Only return to-do items with the specified statuses. Returns not completed actions by default.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['todo'],
                    },
                ],
            },
            response: {
                optional: false,
            },
        },
        remove_completed_items: {
            name: 'Remove completed items',
            description: 'Removes all to-do list items that have been completed.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['todo'],
                        supported_features: [2],
                    },
                ],
            },
        },
    },
    notify: {
        send_message: {
            name: 'Send a notification message',
            description: 'Sends a notification message.',
            fields: {
                message: {
                    required: true,
                    selector: {
                        text: {},
                    },
                    name: 'Message',
                    description: 'Your notification message.',
                },
                title: {
                    required: false,
                    selector: {
                        text: {},
                    },
                    filter: {
                        supported_features: [1],
                    },
                    name: 'Title',
                    description: 'Title for your notification message.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['notify'],
                    },
                ],
            },
        },
        persistent_notification: {
            name: 'Send a persistent notification',
            description: 'Sends a notification that is visible in the notifications panel.',
            fields: {
                message: {
                    required: true,
                    example: 'The garage door has been open for 10 minutes.',
                    selector: {
                        text: {},
                    },
                    name: 'Message',
                    description: 'Message body of the notification.',
                },
                title: {
                    example: 'Your Garage Door Friend',
                    selector: {
                        text: {},
                    },
                    name: 'Title',
                    description: 'Title of the notification.',
                },
                data: {
                    example: 'platform specific',
                    selector: {
                        object: {},
                    },
                    name: 'Data',
                    description:
                        'Some integrations provide extended functionality via this field. For more information, refer to the integration documentation.',
                },
            },
        },
        notify: {
            name: 'Send a notification with notify',
            description: 'Sends a notification message using the notify service.',
            fields: {
                message: {
                    required: true,
                    example: 'The garage door has been open for 10 minutes.',
                    selector: {
                        text: null,
                    },
                },
                title: {
                    example: 'Your Garage Door Friend',
                    selector: {
                        text: null,
                    },
                },
                target: {
                    example: 'platform specific',
                    selector: {
                        object: null,
                    },
                },
                data: {
                    example: 'platform specific',
                    selector: {
                        object: null,
                    },
                },
            },
        },
    },
    media_player: {
        turn_on: {
            name: 'Turn on',
            description: 'Turns on the power of the media player.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [128],
                    },
                ],
            },
        },
        turn_off: {
            name: 'Turn off',
            description: 'Turns off the power of the media player.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [256],
                    },
                ],
            },
        },
        toggle: {
            name: 'Toggle',
            description: 'Toggles a media player on/off.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [384],
                    },
                ],
            },
        },
        volume_up: {
            name: 'Turn up volume',
            description: 'Turns up the volume.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [4, 1024],
                    },
                ],
            },
        },
        volume_down: {
            name: 'Turn down volume',
            description: 'Turns down the volume.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [4, 1024],
                    },
                ],
            },
        },
        media_play_pause: {
            name: 'Play/Pause',
            description: 'Toggles play/pause.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [16385],
                    },
                ],
            },
        },
        media_play: {
            name: 'Play',
            description: 'Starts playing.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [16384],
                    },
                ],
            },
        },
        media_pause: {
            name: 'Pause',
            description: 'Pauses.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [1],
                    },
                ],
            },
        },
        media_stop: {
            name: 'Stop',
            description: 'Stops playing.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [4096],
                    },
                ],
            },
        },
        media_next_track: {
            name: 'Next',
            description: 'Selects the next track.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [32],
                    },
                ],
            },
        },
        media_previous_track: {
            name: 'Previous',
            description: 'Selects the previous track.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [16],
                    },
                ],
            },
        },
        clear_playlist: {
            name: 'Clear playlist',
            description: 'Removes all items from the playlist.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [8192],
                    },
                ],
            },
        },
        volume_set: {
            name: 'Set volume',
            description: 'Sets the volume level.',
            fields: {
                volume_level: {
                    required: true,
                    selector: {
                        number: {
                            min: 0,
                            max: 1,
                            step: 0.01,
                            mode: 'slider',
                        },
                    },
                    name: 'Level',
                    description: 'The volume. 0 is inaudible, 1 is the maximum volume.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [4],
                    },
                ],
            },
        },
        volume_mute: {
            name: 'Mute/unmute volume',
            description: 'Mutes or unmutes the media player.',
            fields: {
                is_volume_muted: {
                    required: true,
                    selector: {
                        boolean: {},
                    },
                    name: 'Muted',
                    description: 'Defines whether or not it is muted.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [8],
                    },
                ],
            },
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
                            max: 9223372036854776000,
                            step: 0.01,
                            mode: 'box',
                        },
                    },
                    name: 'Position',
                    description: 'Target position in the currently playing media. The format is platform dependent.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [2],
                    },
                ],
            },
        },
        join: {
            name: 'Join',
            description:
                'Groups media players together for synchronous playback. Only works on supported multiroom audio systems.',
            fields: {
                group_members: {
                    required: true,
                    example: '- media_player.multiroom_player2\n- media_player.multiroom_player3\n',
                    selector: {
                        entity: {
                            multiple: true,
                            domain: ['media_player'],
                            reorder: false,
                        },
                    },
                    name: 'Group members',
                    description: "The players which will be synced with the playback specified in 'Targets'.",
                },
            },
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [524288],
                    },
                ],
            },
        },
        select_source: {
            name: 'Select source',
            description: 'Sends the media player the command to change input source.',
            fields: {
                source: {
                    required: true,
                    example: 'video1',
                    selector: {
                        text: {},
                    },
                    name: 'Source',
                    description: 'Name of the source to switch to. Platform dependent.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [2048],
                    },
                ],
            },
        },
        select_sound_mode: {
            name: 'Select sound mode',
            description: 'Selects a specific sound mode.',
            fields: {
                sound_mode: {
                    example: 'Music',
                    selector: {
                        text: {},
                    },
                    name: 'Sound mode',
                    description: 'Name of the sound mode to switch to.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [65536],
                    },
                ],
            },
        },
        play_media: {
            name: 'Play media',
            description: 'Starts playing specified media.',
            fields: {
                media: {
                    required: true,
                    selector: {
                        media: {},
                    },
                    example:
                        '{"media_content_id": "https://home-assistant.io/images/cast/splash.png", "media_content_type": "music"}',
                    name: 'Media',
                    description: 'The media selected to play.',
                },
                enqueue: {
                    filter: {
                        supported_features: [2097152],
                    },
                    required: false,
                    selector: {
                        select: {
                            options: ['play', 'next', 'add', 'replace'],
                            translation_key: 'enqueue',
                            custom_value: false,
                            sort: false,
                            multiple: false,
                        },
                    },
                    name: 'Enqueue',
                    description: 'If the content should be played now or be added to the queue.',
                },
                announce: {
                    filter: {
                        supported_features: [1048576],
                    },
                    required: false,
                    example: 'true',
                    selector: {
                        boolean: {},
                    },
                    name: 'Announce',
                    description: 'If the media should be played as an announcement.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [512],
                    },
                ],
            },
        },
        browse_media: {
            name: 'Browse media',
            description: 'Browses the available media.',
            fields: {
                media_content_type: {
                    required: false,
                    example: 'music',
                    selector: {
                        text: {},
                    },
                    name: 'Content type',
                    description:
                        'The type of the content to browse, such as image, music, TV show, video, episode, channel, or playlist.',
                },
                media_content_id: {
                    required: false,
                    example: 'A:ALBUMARTIST/Beatles',
                    selector: {
                        text: {},
                    },
                    name: 'Content ID',
                    description: 'The ID of the content to browse. Integration dependent.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [131072],
                    },
                ],
            },
            response: {
                optional: false,
            },
        },
        search_media: {
            name: 'Search media',
            description: 'Searches the available media.',
            fields: {
                search_query: {
                    required: true,
                    example: 'Beatles',
                    selector: {
                        text: {},
                    },
                    name: 'Search query',
                    description: 'The term to search for.',
                },
                media_content_type: {
                    required: false,
                    example: 'music',
                    selector: {
                        text: {},
                    },
                    name: 'Content type',
                    description:
                        'The type of the content to browse, such as image, music, TV show, video, episode, channel, or playlist.',
                },
                media_content_id: {
                    required: false,
                    example: 'A:ALBUMARTIST/Beatles',
                    selector: {
                        text: {},
                    },
                    name: 'Content ID',
                    description: 'The ID of the content to browse. Integration dependent.',
                },
                media_filter_classes: {
                    required: false,
                    example: ['album', 'artist'],
                    selector: {
                        text: {
                            multiple: true,
                            multiline: false,
                        },
                    },
                    name: 'Media class filter',
                    description: 'List of media classes to filter the search results by.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [4194304],
                    },
                ],
            },
            response: {
                optional: false,
            },
        },
        shuffle_set: {
            name: 'Set shuffle',
            description: 'Enables or disables the shuffle mode.',
            fields: {
                shuffle: {
                    required: true,
                    selector: {
                        boolean: {},
                    },
                    name: 'Shuffle mode',
                    description: 'Whether the media should be played in randomized order or not.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [32768],
                    },
                ],
            },
        },
        unjoin: {
            name: 'Unjoin',
            description: 'Removes the player from a group. Only works on platforms which support player groups.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [524288],
                    },
                ],
            },
        },
        repeat_set: {
            name: 'Set repeat',
            description: 'Sets the repeat mode.',
            fields: {
                repeat: {
                    required: true,
                    selector: {
                        select: {
                            options: ['off', 'all', 'one'],
                            translation_key: 'repeat',
                            custom_value: false,
                            sort: false,
                            multiple: false,
                        },
                    },
                    name: 'Repeat mode',
                    description: 'Whether the media (one or all) should be played in a loop or not.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['media_player'],
                        supported_features: [262144],
                    },
                ],
            },
        },
    },
    number: {
        set_value: {
            name: 'Set',
            description: 'Sets the value of a number.',
            fields: {
                value: {
                    example: 42,
                    required: true,
                    selector: {
                        text: {},
                    },
                    name: 'Value',
                    description: 'The target value to set.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['number'],
                    },
                ],
            },
        },
    },
    select: {
        select_first: {
            name: 'First',
            description: 'Selects the first option.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['select'],
                    },
                ],
            },
        },
        select_last: {
            name: 'Last',
            description: 'Selects the last option.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['select'],
                    },
                ],
            },
        },
        select_next: {
            name: 'Next',
            description: 'Selects the next option.',
            fields: {
                cycle: {
                    default: true,
                    selector: {
                        boolean: {},
                    },
                    name: 'Cycle',
                    description: 'If the option should cycle from the last to the first.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['select'],
                    },
                ],
            },
        },
        select_option: {
            name: 'Select',
            description: 'Selects an option.',
            fields: {
                option: {
                    required: true,
                    example: '"Item A"',
                    selector: {
                        text: {},
                    },
                    name: 'Option',
                    description: 'Option to be selected.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['select'],
                    },
                ],
            },
        },
        select_previous: {
            name: 'Previous',
            description: 'Selects the previous option.',
            fields: {
                cycle: {
                    default: true,
                    selector: {
                        boolean: {},
                    },
                    name: 'Cycle',
                    description: 'If the option should cycle from the first to the last.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['select'],
                    },
                ],
            },
        },
    },
    light: {
        turn_on: {
            name: 'Turn on',
            description:
                'Turns on one or more lights and adjusts their properties, even when they are turned on already.',
            fields: {
                transition: {
                    filter: {
                        supported_features: [32],
                    },
                    selector: {
                        number: {
                            min: 0,
                            max: 300,
                            unit_of_measurement: 'seconds',
                            step: 1,
                            mode: 'slider',
                        },
                    },
                    name: 'Transition',
                    description: 'Duration it takes to get to next state.',
                },
                rgb_color: {
                    filter: {
                        attribute: {
                            supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                        },
                    },
                    example: '[255, 100, 100]',
                    selector: {
                        color_rgb: {},
                    },
                    name: 'Color',
                    description:
                        'The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue.',
                },
                color_temp_kelvin: {
                    filter: {
                        attribute: {
                            supported_color_modes: ['color_temp', 'hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                        },
                    },
                    selector: {
                        color_temp: {
                            unit: 'kelvin',
                            min: 2000,
                            max: 6500,
                        },
                    },
                    name: 'Color temperature',
                    description: 'Color temperature in Kelvin.',
                },
                brightness_pct: {
                    filter: {
                        attribute: {
                            supported_color_modes: ['brightness', 'color_temp', 'hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                        },
                    },
                    selector: {
                        number: {
                            min: 0,
                            max: 100,
                            unit_of_measurement: '%',
                            step: 1,
                            mode: 'slider',
                        },
                    },
                    name: 'Brightness',
                    description:
                        'Number indicating the percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness.',
                },
                brightness_step_pct: {
                    filter: {
                        attribute: {
                            supported_color_modes: ['brightness', 'color_temp', 'hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                        },
                    },
                    selector: {
                        number: {
                            min: -100,
                            max: 100,
                            unit_of_measurement: '%',
                            step: 1,
                            mode: 'slider',
                        },
                    },
                    name: 'Brightness step',
                    description: 'Change brightness by a percentage.',
                },
                effect: {
                    filter: {
                        supported_features: [4],
                    },
                    selector: {
                        text: {},
                    },
                    name: 'Effect',
                    description: 'Light effect.',
                },
                advanced_fields: {
                    collapsed: true,
                    fields: {
                        rgbw_color: {
                            filter: {
                                attribute: {
                                    supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                                },
                            },
                            example: '[255, 100, 100, 50]',
                            selector: {
                                object: {},
                            },
                        },
                        rgbww_color: {
                            filter: {
                                attribute: {
                                    supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                                },
                            },
                            example: '[255, 100, 100, 50, 70]',
                            selector: {
                                object: {},
                            },
                        },
                        color_name: {
                            filter: {
                                attribute: {
                                    supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                                },
                            },
                            selector: {
                                select: {
                                    translation_key: 'color_name',
                                    options: [
                                        'homeassistant',
                                        'aliceblue',
                                        'antiquewhite',
                                        'aqua',
                                        'aquamarine',
                                        'azure',
                                        'beige',
                                        'bisque',
                                        'blanchedalmond',
                                        'blue',
                                        'blueviolet',
                                        'brown',
                                        'burlywood',
                                        'cadetblue',
                                        'chartreuse',
                                        'chocolate',
                                        'coral',
                                        'cornflowerblue',
                                        'cornsilk',
                                        'crimson',
                                        'cyan',
                                        'darkblue',
                                        'darkcyan',
                                        'darkgoldenrod',
                                        'darkgray',
                                        'darkgreen',
                                        'darkgrey',
                                        'darkkhaki',
                                        'darkmagenta',
                                        'darkolivegreen',
                                        'darkorange',
                                        'darkorchid',
                                        'darkred',
                                        'darksalmon',
                                        'darkseagreen',
                                        'darkslateblue',
                                        'darkslategray',
                                        'darkslategrey',
                                        'darkturquoise',
                                        'darkviolet',
                                        'deeppink',
                                        'deepskyblue',
                                        'dimgray',
                                        'dimgrey',
                                        'dodgerblue',
                                        'firebrick',
                                        'floralwhite',
                                        'forestgreen',
                                        'fuchsia',
                                        'gainsboro',
                                        'ghostwhite',
                                        'gold',
                                        'goldenrod',
                                        'gray',
                                        'green',
                                        'greenyellow',
                                        'grey',
                                        'honeydew',
                                        'hotpink',
                                        'indianred',
                                        'indigo',
                                        'ivory',
                                        'khaki',
                                        'lavender',
                                        'lavenderblush',
                                        'lawngreen',
                                        'lemonchiffon',
                                        'lightblue',
                                        'lightcoral',
                                        'lightcyan',
                                        'lightgoldenrodyellow',
                                        'lightgray',
                                        'lightgreen',
                                        'lightgrey',
                                        'lightpink',
                                        'lightsalmon',
                                        'lightseagreen',
                                        'lightskyblue',
                                        'lightslategray',
                                        'lightslategrey',
                                        'lightsteelblue',
                                        'lightyellow',
                                        'lime',
                                        'limegreen',
                                        'linen',
                                        'magenta',
                                        'maroon',
                                        'mediumaquamarine',
                                        'mediumblue',
                                        'mediumorchid',
                                        'mediumpurple',
                                        'mediumseagreen',
                                        'mediumslateblue',
                                        'mediumspringgreen',
                                        'mediumturquoise',
                                        'mediumvioletred',
                                        'midnightblue',
                                        'mintcream',
                                        'mistyrose',
                                        'moccasin',
                                        'navajowhite',
                                        'navy',
                                        'navyblue',
                                        'oldlace',
                                        'olive',
                                        'olivedrab',
                                        'orange',
                                        'orangered',
                                        'orchid',
                                        'palegoldenrod',
                                        'palegreen',
                                        'paleturquoise',
                                        'palevioletred',
                                        'papayawhip',
                                        'peachpuff',
                                        'peru',
                                        'pink',
                                        'plum',
                                        'powderblue',
                                        'purple',
                                        'red',
                                        'rosybrown',
                                        'royalblue',
                                        'saddlebrown',
                                        'salmon',
                                        'sandybrown',
                                        'seagreen',
                                        'seashell',
                                        'sienna',
                                        'silver',
                                        'skyblue',
                                        'slateblue',
                                        'slategray',
                                        'slategrey',
                                        'snow',
                                        'springgreen',
                                        'steelblue',
                                        'tan',
                                        'teal',
                                        'thistle',
                                        'tomato',
                                        'turquoise',
                                        'violet',
                                        'wheat',
                                        'white',
                                        'whitesmoke',
                                        'yellow',
                                        'yellowgreen',
                                    ],
                                    custom_value: false,
                                    sort: false,
                                    multiple: false,
                                },
                            },
                        },
                        hs_color: {
                            filter: {
                                attribute: {
                                    supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                                },
                            },
                            example: '[300, 70]',
                            selector: {
                                object: {},
                            },
                        },
                        xy_color: {
                            filter: {
                                attribute: {
                                    supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                                },
                            },
                            example: '[0.52, 0.43]',
                            selector: {
                                object: {},
                            },
                        },
                        color_temp: {
                            filter: {
                                attribute: {
                                    supported_color_modes: ['color_temp', 'hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                                },
                            },
                            selector: {
                                color_temp: {
                                    unit: 'mired',
                                    min: 153,
                                    max: 500,
                                },
                            },
                        },
                        brightness: {
                            filter: {
                                attribute: {
                                    supported_color_modes: [
                                        'brightness',
                                        'color_temp',
                                        'hs',
                                        'xy',
                                        'rgb',
                                        'rgbw',
                                        'rgbww',
                                    ],
                                },
                            },
                            selector: {
                                number: {
                                    min: 0,
                                    max: 255,
                                    step: 1,
                                    mode: 'slider',
                                },
                            },
                        },
                        brightness_step: {
                            filter: {
                                attribute: {
                                    supported_color_modes: [
                                        'brightness',
                                        'color_temp',
                                        'hs',
                                        'xy',
                                        'rgb',
                                        'rgbw',
                                        'rgbww',
                                    ],
                                },
                            },
                            selector: {
                                number: {
                                    min: -225,
                                    max: 255,
                                    step: 1,
                                    mode: 'slider',
                                },
                            },
                        },
                        white: {
                            filter: {
                                attribute: {
                                    supported_color_modes: ['white'],
                                },
                            },
                            selector: {
                                constant: {
                                    value: true,
                                    label: 'Enabled',
                                },
                            },
                        },
                        profile: {
                            example: 'relax',
                            selector: {
                                text: {},
                            },
                        },
                        flash: {
                            filter: {
                                supported_features: [8],
                            },
                            selector: {
                                select: {
                                    translation_key: 'flash',
                                    options: ['long', 'short'],
                                    custom_value: false,
                                    sort: false,
                                    multiple: false,
                                },
                            },
                        },
                    },
                },
            },
            target: {
                entity: [
                    {
                        domain: ['light'],
                    },
                ],
            },
        },
        turn_off: {
            name: 'Turn off',
            description: 'Turns off one or more lights.',
            fields: {
                transition: {
                    filter: {
                        supported_features: [32],
                    },
                    selector: {
                        number: {
                            min: 0,
                            max: 300,
                            unit_of_measurement: 'seconds',
                            step: 1,
                            mode: 'slider',
                        },
                    },
                    name: 'Transition',
                    description: 'Duration it takes to get to next state.',
                },
                advanced_fields: {
                    collapsed: true,
                    fields: {
                        flash: {
                            filter: {
                                supported_features: [8],
                            },
                            selector: {
                                select: {
                                    translation_key: 'flash',
                                    options: ['long', 'short'],
                                    custom_value: false,
                                    sort: false,
                                    multiple: false,
                                },
                            },
                        },
                    },
                },
            },
            target: {
                entity: [
                    {
                        domain: ['light'],
                    },
                ],
            },
        },
        toggle: {
            name: 'Toggle',
            description: 'Toggles one or more lights, from on to off, or off to on, based on their current state.',
            fields: {
                transition: {
                    filter: {
                        supported_features: [32],
                    },
                    selector: {
                        number: {
                            min: 0,
                            max: 300,
                            unit_of_measurement: 'seconds',
                            step: 1,
                            mode: 'slider',
                        },
                    },
                    name: 'Transition',
                    description: 'Duration it takes to get to next state.',
                },
                rgb_color: {
                    filter: {
                        attribute: {
                            supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                        },
                    },
                    example: '[255, 100, 100]',
                    selector: {
                        color_rgb: {},
                    },
                    name: 'Color',
                    description:
                        'The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue.',
                },
                color_temp_kelvin: {
                    filter: {
                        attribute: {
                            supported_color_modes: ['color_temp', 'hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                        },
                    },
                    selector: {
                        color_temp: {
                            unit: 'kelvin',
                            min: 2000,
                            max: 6500,
                        },
                    },
                    name: 'Color temperature',
                    description: 'Color temperature in Kelvin.',
                },
                brightness_pct: {
                    filter: {
                        attribute: {
                            supported_color_modes: ['brightness', 'color_temp', 'hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                        },
                    },
                    selector: {
                        number: {
                            min: 0,
                            max: 100,
                            unit_of_measurement: '%',
                            step: 1,
                            mode: 'slider',
                        },
                    },
                    name: 'Brightness',
                    description:
                        'Number indicating the percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness.',
                },
                effect: {
                    filter: {
                        supported_features: [4],
                    },
                    selector: {
                        text: {},
                    },
                    name: 'Effect',
                    description: 'Light effect.',
                },
                advanced_fields: {
                    collapsed: true,
                    fields: {
                        rgbw_color: {
                            filter: {
                                attribute: {
                                    supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                                },
                            },
                            example: '[255, 100, 100, 50]',
                            selector: {
                                object: {},
                            },
                        },
                        rgbww_color: {
                            filter: {
                                attribute: {
                                    supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                                },
                            },
                            example: '[255, 100, 100, 50, 70]',
                            selector: {
                                object: {},
                            },
                        },
                        color_name: {
                            filter: {
                                attribute: {
                                    supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                                },
                            },
                            selector: {
                                select: {
                                    translation_key: 'color_name',
                                    options: [
                                        'homeassistant',
                                        'aliceblue',
                                        'antiquewhite',
                                        'aqua',
                                        'aquamarine',
                                        'azure',
                                        'beige',
                                        'bisque',
                                        'blanchedalmond',
                                        'blue',
                                        'blueviolet',
                                        'brown',
                                        'burlywood',
                                        'cadetblue',
                                        'chartreuse',
                                        'chocolate',
                                        'coral',
                                        'cornflowerblue',
                                        'cornsilk',
                                        'crimson',
                                        'cyan',
                                        'darkblue',
                                        'darkcyan',
                                        'darkgoldenrod',
                                        'darkgray',
                                        'darkgreen',
                                        'darkgrey',
                                        'darkkhaki',
                                        'darkmagenta',
                                        'darkolivegreen',
                                        'darkorange',
                                        'darkorchid',
                                        'darkred',
                                        'darksalmon',
                                        'darkseagreen',
                                        'darkslateblue',
                                        'darkslategray',
                                        'darkslategrey',
                                        'darkturquoise',
                                        'darkviolet',
                                        'deeppink',
                                        'deepskyblue',
                                        'dimgray',
                                        'dimgrey',
                                        'dodgerblue',
                                        'firebrick',
                                        'floralwhite',
                                        'forestgreen',
                                        'fuchsia',
                                        'gainsboro',
                                        'ghostwhite',
                                        'gold',
                                        'goldenrod',
                                        'gray',
                                        'green',
                                        'greenyellow',
                                        'grey',
                                        'honeydew',
                                        'hotpink',
                                        'indianred',
                                        'indigo',
                                        'ivory',
                                        'khaki',
                                        'lavender',
                                        'lavenderblush',
                                        'lawngreen',
                                        'lemonchiffon',
                                        'lightblue',
                                        'lightcoral',
                                        'lightcyan',
                                        'lightgoldenrodyellow',
                                        'lightgray',
                                        'lightgreen',
                                        'lightgrey',
                                        'lightpink',
                                        'lightsalmon',
                                        'lightseagreen',
                                        'lightskyblue',
                                        'lightslategray',
                                        'lightslategrey',
                                        'lightsteelblue',
                                        'lightyellow',
                                        'lime',
                                        'limegreen',
                                        'linen',
                                        'magenta',
                                        'maroon',
                                        'mediumaquamarine',
                                        'mediumblue',
                                        'mediumorchid',
                                        'mediumpurple',
                                        'mediumseagreen',
                                        'mediumslateblue',
                                        'mediumspringgreen',
                                        'mediumturquoise',
                                        'mediumvioletred',
                                        'midnightblue',
                                        'mintcream',
                                        'mistyrose',
                                        'moccasin',
                                        'navajowhite',
                                        'navy',
                                        'navyblue',
                                        'oldlace',
                                        'olive',
                                        'olivedrab',
                                        'orange',
                                        'orangered',
                                        'orchid',
                                        'palegoldenrod',
                                        'palegreen',
                                        'paleturquoise',
                                        'palevioletred',
                                        'papayawhip',
                                        'peachpuff',
                                        'peru',
                                        'pink',
                                        'plum',
                                        'powderblue',
                                        'purple',
                                        'red',
                                        'rosybrown',
                                        'royalblue',
                                        'saddlebrown',
                                        'salmon',
                                        'sandybrown',
                                        'seagreen',
                                        'seashell',
                                        'sienna',
                                        'silver',
                                        'skyblue',
                                        'slateblue',
                                        'slategray',
                                        'slategrey',
                                        'snow',
                                        'springgreen',
                                        'steelblue',
                                        'tan',
                                        'teal',
                                        'thistle',
                                        'tomato',
                                        'turquoise',
                                        'violet',
                                        'wheat',
                                        'white',
                                        'whitesmoke',
                                        'yellow',
                                        'yellowgreen',
                                    ],
                                    custom_value: false,
                                    sort: false,
                                    multiple: false,
                                },
                            },
                        },
                        hs_color: {
                            filter: {
                                attribute: {
                                    supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                                },
                            },
                            example: '[300, 70]',
                            selector: {
                                object: {},
                            },
                        },
                        xy_color: {
                            filter: {
                                attribute: {
                                    supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                                },
                            },
                            example: '[0.52, 0.43]',
                            selector: {
                                object: {},
                            },
                        },
                        color_temp: {
                            filter: {
                                attribute: {
                                    supported_color_modes: ['color_temp', 'hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                                },
                            },
                            selector: {
                                color_temp: {
                                    unit: 'mired',
                                    min: 153,
                                    max: 500,
                                },
                            },
                        },
                        brightness: {
                            filter: {
                                attribute: {
                                    supported_color_modes: [
                                        'brightness',
                                        'color_temp',
                                        'hs',
                                        'xy',
                                        'rgb',
                                        'rgbw',
                                        'rgbww',
                                    ],
                                },
                            },
                            selector: {
                                number: {
                                    min: 0,
                                    max: 255,
                                    step: 1,
                                    mode: 'slider',
                                },
                            },
                        },
                        white: {
                            filter: {
                                attribute: {
                                    supported_color_modes: ['white'],
                                },
                            },
                            selector: {
                                constant: {
                                    value: true,
                                    label: 'Enabled',
                                },
                            },
                        },
                        profile: {
                            example: 'relax',
                            selector: {
                                text: {},
                            },
                        },
                        flash: {
                            filter: {
                                supported_features: [8],
                            },
                            selector: {
                                select: {
                                    translation_key: 'flash',
                                    options: ['long', 'short'],
                                    custom_value: false,
                                    sort: false,
                                    multiple: false,
                                },
                            },
                        },
                    },
                },
            },
            target: {
                entity: [
                    {
                        domain: ['light'],
                    },
                ],
            },
        },
    },
    switch: {
        turn_off: {
            name: 'Turn off',
            description: 'Turns a switch off.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['switch'],
                    },
                ],
            },
        },
        turn_on: {
            name: 'Turn on',
            description: 'Turns a switch on.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['switch'],
                    },
                ],
            },
        },
        toggle: {
            name: 'Toggle',
            description: 'Toggles a switch on/off.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['switch'],
                    },
                ],
            },
        },
    },
    weather: {
        get_forecasts: {
            name: 'Get forecasts',
            description: 'Retrieves the forecast from selected weather services.',
            fields: {
                type: {
                    required: true,
                    selector: {
                        select: {
                            options: ['daily', 'hourly', 'twice_daily'],
                            translation_key: 'forecast_type',
                            custom_value: false,
                            sort: false,
                            multiple: false,
                        },
                    },
                    name: 'Forecast type',
                    description: 'The scope of the weather forecast.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['weather'],
                        supported_features: [1, 2, 4],
                    },
                ],
            },
            response: {
                optional: false,
            },
        },
    },
};
