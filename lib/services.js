module.exports = {
    homeassistant: {
        turn_off: {
            name: 'Generic turn off',
            description: 'Generic service to turn devices off under any domain.',
            fields: {},
            target: {
                entity: [{}],
            },
        },
        turn_on: {
            name: 'Generic turn on',
            description: 'Generic service to turn devices on under any domain.',
            fields: {},
            target: {
                entity: [{}],
            },
        },
        toggle: {
            name: 'Generic toggle',
            description: 'Generic service to toggle devices on/off under any domain.',
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
        update_entity: {
            name: 'Update entity',
            description: 'Forces one or more entities to update its data.',
            fields: {},
            target: {
                entity: [{}],
            },
        },
    },
    system_log: {
        write: {
            name: 'Write',
            description: 'Write log entry.',
            fields: {
                message: {
                    required: true,
                    example: 'Something went wrong',
                    selector: {
                        text: null,
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
                        },
                    },
                    name: 'Level',
                    description: 'Log level.',
                },
                logger: {
                    example: 'mycomponent.myplatform',
                    selector: {
                        text: null,
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
    input_text: {
        set_value: {
            name: 'Set',
            description: 'Sets the value.',
            fields: {
                value: {
                    required: true,
                    example: 'This is an example text',
                    selector: {
                        text: null,
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
    //TODO: not sure about those... do we support that?
    timer: {
        start: {
            name: 'Start',
            description: 'Starts a timer.',
            fields: {
                duration: {
                    example: '00:01:00 or 60',
                    selector: {
                        text: null,
                    },
                    name: 'Duration',
                    description: 'Duration the timer requires to finish. [optional].',
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
            description: 'Pauses a timer.',
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
            description: 'Cancels a timer.',
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
            description: 'Finishes a timer.',
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
            description: 'Changes a timer.',
            fields: {
                duration: {
                    default: 0,
                    required: true,
                    example: '00:01:00, 60 or -60',
                    selector: {
                        text: null,
                    },
                    name: 'Duration',
                    description: 'Duration to add or subtract to the running timer.',
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
    input_button: {
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
    input_number: {
        set_value: {
            name: 'Set',
            description: 'Sets the value.',
            fields: {
                value: {
                    required: true,
                    selector: {
                        number: {
                            min: 0,
                            // eslint-disable-next-line no-loss-of-precision
                            max: 9223372036854775807,
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
    },
    input_boolean: {
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
    //TODO: i'd really like to support notify... not sure what that is, though.
    notify: {
        persistent_notification: {
            name: 'Send a persistent notification',
            description: 'Sends a notification that is visible in the **Notifications** panel.',
            fields: {
                message: {
                    required: true,
                    example: 'The garage door has been open for 10 minutes.',
                    selector: {
                        text: null,
                    },
                    name: 'Message',
                    description: 'Message body of the notification.',
                },
                title: {
                    example: 'Your Garage Door Friend',
                    selector: {
                        text: null,
                    },
                    name: 'Title',
                    description: 'Title of the notification.',
                },
                data: {
                    example: 'platform specific',
                    selector: {
                        object: null,
                    },
                    name: 'Data',
                    description:
                        'Some integrations provide extended functionality. For information on how to use _data_, refer to the integration documentation..',
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
};
