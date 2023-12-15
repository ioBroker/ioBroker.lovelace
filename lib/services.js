module.exports = {
    'persistent_notification': {
        'create': {
            'name': 'Create',
            'description': 'Shows a notification on the **Notifications** panel.',
            'fields': {
                'message': {
                    'required': true,
                    'example': 'Please check your configuration.yaml.',
                    'selector': {
                        'text': null
                    },
                    'name': 'Message',
                    'description': 'Message body of the notification.'
                },
                'title': {
                    'example': 'Test notification',
                    'selector': {
                        'text': null
                    },
                    'name': 'Title',
                    'description': 'Optional title of the notification.'
                },
                'notification_id': {
                    'example': 1234,
                    'selector': {
                        'text': null
                    },
                    'name': 'Notification ID',
                    'description': 'ID of the notification. This new notification will overwrite an existing notification with the same ID.'
                }
            }
        },
        'dismiss': {
            'name': 'Dismiss',
            'description': 'Removes a notification from the **Notifications** panel.',
            'fields': {
                'notification_id': {
                    'required': true,
                    'example': 1234,
                    'selector': {
                        'text': null
                    },
                    'name': 'Notification ID',
                    'description': 'ID of the notification to be removed.'
                }
            }
        },
        'dismiss_all': {
            'name': 'Dismiss all',
            'description': 'Removes all notifications from the **Notifications** panel.',
            'fields': {}
        }
    },
    'homeassistant': {
        'save_persistent_states': {
            'name': 'Save persistent states',
            'description': 'Saves the persistent states immediately. Maintains the normal periodic saving interval.',
            'fields': {}
        },
        'turn_off': {
            'name': 'Generic turn off',
            'description': 'Generic service to turn devices off under any domain.',
            'fields': {},
            'target': {
                'entity': [
                    {}
                ]
            }
        },
        'turn_on': {
            'name': 'Generic turn on',
            'description': 'Generic service to turn devices on under any domain.',
            'fields': {},
            'target': {
                'entity': [
                    {}
                ]
            }
        },
        'toggle': {
            'name': 'Generic toggle',
            'description': 'Generic service to toggle devices on/off under any domain.',
            'fields': {},
            'target': {
                'entity': [
                    {}
                ]
            }
        },
        'stop': {
            'name': 'Stop',
            'description': 'Stops Home Assistant.',
            'fields': {}
        },
        'restart': {
            'name': 'Restart',
            'description': 'Restarts Home Assistant.',
            'fields': {}
        },
        'check_config': {
            'name': 'Check configuration',
            'description': 'Checks the Home Assistant YAML-configuration files for errors. Errors will be shown in the Home Assistant logs.',
            'fields': {}
        },
        'update_entity': {
            'name': 'Update entity',
            'description': 'Forces one or more entities to update its data.',
            'fields': {},
            'target': {
                'entity': [
                    {}
                ]
            }
        },
        'reload_core_config': {
            'name': 'Reload core configuration',
            'description': 'Reloads the core configuration from the YAML-configuration.',
            'fields': {}
        },
        'set_location': {
            'name': 'Set location',
            'description': 'Updates the Home Assistant location.',
            'fields': {
                'latitude': {
                    'required': true,
                    'example': 32.87336,
                    'selector': {
                        'number': {
                            'mode': 'box',
                            'min': -90,
                            'max': 90,
                            'step': 'any'
                        }
                    },
                    'name': 'Latitude',
                    'description': 'Latitude of your location.'
                },
                'longitude': {
                    'required': true,
                    'example': 117.22743,
                    'selector': {
                        'number': {
                            'mode': 'box',
                            'min': -180,
                            'max': 180,
                            'step': 'any'
                        }
                    },
                    'name': 'Longitude',
                    'description': 'Longitude of your location.'
                },
                'elevation': {
                    'required': false,
                    'example': 120,
                    'selector': {
                        'number': {
                            'mode': 'box',
                            'step': 'any'
                        }
                    },
                    'name': 'Elevation',
                    'description': 'Elevation of your location.'
                }
            }
        },
        'reload_custom_templates': {
            'name': 'Reload custom Jinja2 templates',
            'description': 'Reloads Jinja2 templates found in the `custom_templates` folder in your config. New values will be applied on the next render of the template.',
            'fields': {}
        },
        'reload_config_entry': {
            'name': 'Reload config entry',
            'description': 'Reloads the specified config entry.',
            'fields': {
                'entry_id': {
                    'advanced': true,
                    'required': false,
                    'example': '8955375327824e14ba89e4b29cc3ec9a',
                    'selector': {
                        'text': null
                    },
                    'name': 'Config entry ID',
                    'description': 'The configuration entry ID of the entry to be reloaded.'
                }
            },
            'target': {
                'entity': [
                    {}
                ],
                'device': [
                    {}
                ]
            }
        },
        'reload_all': {
            'name': 'Reload all',
            'description': 'Reload all YAML configuration that can be reloaded without restarting Home Assistant.',
            'fields': {}
        }
    },
    'system_log': {
        'clear': {
            'name': 'Clear all',
            'description': 'Clears all log entries.',
            'fields': {}
        },
        'write': {
            'name': 'Write',
            'description': 'Write log entry.',
            'fields': {
                'message': {
                    'required': true,
                    'example': 'Something went wrong',
                    'selector': {
                        'text': null
                    },
                    'name': 'Message',
                    'description': 'Message to log.'
                },
                'level': {
                    'default': 'error',
                    'selector': {
                        'select': {
                            'options': [
                                'debug',
                                'info',
                                'warning',
                                'error',
                                'critical'
                            ],
                            'translation_key': 'level'
                        }
                    },
                    'name': 'Level',
                    'description': 'Log level.'
                },
                'logger': {
                    'example': 'mycomponent.myplatform',
                    'selector': {
                        'text': null
                    },
                    'name': 'Logger',
                    'description': 'Logger name under which to log the message. Defaults to `system_log.external`.'
                }
            }
        }
    },
    'logger': {
        'set_default_level': {
            'name': 'Set default level',
            'description': 'Sets the default log level for integrations.',
            'fields': {
                'level': {
                    'selector': {
                        'select': {
                            'options': [
                                'debug',
                                'info',
                                'warning',
                                'error',
                                'fatal',
                                'critical'
                            ],
                            'translation_key': 'level'
                        }
                    },
                    'name': 'Level',
                    'description': 'Default severity level for all integrations.'
                }
            }
        },
        'set_level': {
            'name': 'Set level',
            'description': 'Sets the log level for one or more integrations.',
            'fields': {}
        }
    },
    'person': {
        'reload': {
            'name': 'Reload',
            'description': 'Reloads persons from the YAML-configuration.',
            'fields': {}
        }
    },
    'frontend': {
        'set_theme': {
            'name': 'Set the default theme',
            'description': 'Sets the default theme Home Assistant uses. Can be overridden by a user.',
            'fields': {
                'name': {
                    'required': true,
                    'example': 'default',
                    'selector': {
                        'theme': {
                            'include_default': true
                        }
                    },
                    'name': 'Theme',
                    'description': 'Name of a theme.'
                },
                'mode': {
                    'default': 'light',
                    'selector': {
                        'select': {
                            'options': [
                                'dark',
                                'light'
                            ],
                            'translation_key': 'mode'
                        }
                    },
                    'name': 'Mode',
                    'description': 'Theme mode.'
                }
            }
        },
        'reload_themes': {
            'name': 'Reload themes',
            'description': 'Reloads themes from the YAML-configuration.',
            'fields': {}
        }
    },
    'recorder': {
        'purge': {
            'name': 'Purge',
            'description': 'Starts purge task - to clean up old data from your database.',
            'fields': {
                'keep_days': {
                    'selector': {
                        'number': {
                            'min': 0,
                            'max': 365,
                            'unit_of_measurement': 'days'
                        }
                    },
                    'name': 'Days to keep',
                    'description': 'Number of days to keep the data in the database. Starting today, counting backward. A value of `7` means that everything older than a week will be purged.'
                },
                'repack': {
                    'default': false,
                    'selector': {
                        'boolean': null
                    },
                    'name': 'Repack',
                    'description': 'Attempt to save disk space by rewriting the entire database file.'
                },
                'apply_filter': {
                    'default': false,
                    'selector': {
                        'boolean': null
                    },
                    'name': 'Apply filter',
                    'description': 'Applys `entity_id` and `event_type` filters in addition to time-based purge.'
                }
            }
        },
        'purge_entities': {
            'name': 'Purge entities',
            'description': 'Starts a purge task to remove the data related to specific entities from your database.',
            'fields': {
                'domains': {
                    'example': 'sun',
                    'required': false,
                    'default': [],
                    'selector': {
                        'object': null
                    },
                    'name': 'Domains to remove',
                    'description': 'List of domains for which the data needs to be removed from the recorder database.'
                },
                'entity_globs': {
                    'example': 'domain*.object_id*',
                    'required': false,
                    'default': [],
                    'selector': {
                        'object': null
                    },
                    'name': 'Entity globs to remove',
                    'description': 'List of glob patterns used to select the entities for which the data is to be removed from the recorder database.'
                },
                'keep_days': {
                    'default': 0,
                    'selector': {
                        'number': {
                            'min': 0,
                            'max': 365,
                            'unit_of_measurement': 'days'
                        }
                    },
                    'name': 'Days to keep',
                    'description': 'Number of days to keep the data for rows matching the filter. Starting today, counting backward. A value of `7` means that everything older than a week will be purged. The default of 0 days will remove all matching rows immediately.'
                }
            },
            'target': {
                'entity': [
                    {}
                ]
            }
        },
        'enable': {
            'name': 'Enable',
            'description': 'Starts the recording of events and state changes.',
            'fields': {}
        },
        'disable': {
            'name': 'Disable',
            'description': 'Stops the recording of events and state changes.',
            'fields': {}
        }
    },
    'cloud': {
        'remote_connect': {
            'name': 'Remote connect',
            'description': 'Makes the instance UI accessible from outside of the local network by using Home Assistant Cloud.',
            'fields': {}
        },
        'remote_disconnect': {
            'name': 'Remote disconnect',
            'description': 'Disconnects the Home Assistant UI from the Home Assistant Cloud. You will no longer be able to access your Home Assistant instance from outside your local network.',
            'fields': {}
        }
    },
    'conversation': {
        'process': {
            'name': 'Process',
            'description': 'Launches a conversation from a transcribed text.',
            'fields': {
                'text': {
                    'example': 'Turn all lights on',
                    'required': true,
                    'selector': {
                        'text': null
                    },
                    'name': 'Text',
                    'description': 'Transcribed text input.'
                },
                'language': {
                    'example': 'NL',
                    'selector': {
                        'text': null
                    },
                    'name': 'Language',
                    'description': 'Language of text. Defaults to server language.'
                },
                'agent_id': {
                    'example': 'homeassistant',
                    'selector': {
                        'conversation_agent': null
                    },
                    'name': 'Agent',
                    'description': 'Conversation agent to process your request. The conversation agent is the brains of your assistant. It processes the incoming text commands.'
                }
            },
            'response': {
                'optional': true
            }
        },
        'reload': {
            'name': 'Reload',
            'description': 'Reloads the intent configuration.',
            'fields': {
                'language': {
                    'example': 'NL',
                    'selector': {
                        'text': null
                    },
                    'name': 'Language',
                    'description': 'Language to clear cached intents for. Defaults to server language.'
                },
                'agent_id': {
                    'example': 'homeassistant',
                    'selector': {
                        'conversation_agent': null
                    },
                    'name': 'Agent',
                    'description': 'Conversation agent to reload.'
                }
            }
        }
    },
    'logbook': {
        'log': {
            'name': 'Log',
            'description': 'Creates a custom entry in the logbook.',
            'fields': {
                'name': {
                    'required': true,
                    'example': 'Kitchen',
                    'selector': {
                        'text': null
                    },
                    'name': 'Name',
                    'description': 'Custom name for an entity, can be referenced using an `entity_id`.'
                },
                'message': {
                    'required': true,
                    'example': 'is being used',
                    'selector': {
                        'text': null
                    },
                    'name': 'Message',
                    'description': 'Message of the logbook entry.'
                },
                'entity_id': {
                    'selector': {
                        'entity': null
                    },
                    'name': 'Entity ID',
                    'description': 'Entity to reference in the logbook entry.'
                },
                'domain': {
                    'example': 'light',
                    'selector': {
                        'text': null
                    },
                    'name': 'Domain',
                    'description': 'Determines which icon is used in the logbook entry. The icon illustrates the integration domain related to this logbook entry.'
                }
            }
        }
    },
    'counter': {
        'increment': {
            'name': 'Increment',
            'description': 'Increments a counter.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'counter'
                        ]
                    }
                ]
            }
        },
        'decrement': {
            'name': 'Decrement',
            'description': 'Decrements a counter.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'counter'
                        ]
                    }
                ]
            }
        },
        'reset': {
            'name': 'Reset',
            'description': 'Resets a counter.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'counter'
                        ]
                    }
                ]
            }
        },
        'set_value': {
            'name': 'Set',
            'description': 'Sets the counter value.',
            'fields': {
                'value': {
                    'required': true,
                    'selector': {
                        'number': {
                            'min': 0,
                            // eslint-disable-next-line no-loss-of-precision
                            'max': 9223372036854775807,
                            'mode': 'box'
                        }
                    },
                    'name': 'Value',
                    'description': 'The new counter value the entity should be set to.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'counter'
                        ]
                    }
                ]
            }
        }
    },
    'input_text': {
        'reload': {
            'name': 'Reload',
            'description': 'Reloads helpers from the YAML-configuration.',
            'fields': {}
        },
        'set_value': {
            'name': 'Set',
            'description': 'Sets the value.',
            'fields': {
                'value': {
                    'required': true,
                    'example': 'This is an example text',
                    'selector': {
                        'text': null
                    },
                    'name': 'Value',
                    'description': 'The target value.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'input_text'
                        ]
                    }
                ]
            }
        }
    },
    'script': {
        'reload': {
            'name': 'Reload',
            'description': 'Reloads all the available scripts.',
            'fields': {}
        },
        'turn_on': {
            'name': 'Turn on',
            'description': 'Runs the sequence of actions defined in a script.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'script'
                        ]
                    }
                ]
            }
        },
        'turn_off': {
            'name': 'Turn off',
            'description': 'Stops a running script.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'script'
                        ]
                    }
                ]
            }
        },
        'toggle': {
            'name': 'Toggle',
            'description': "Toggle a script. Starts it, if isn't running, stops it otherwise.",
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'script'
                        ]
                    }
                ]
            }
        }
    },
    'automation': {
        'trigger': {
            'name': 'Trigger',
            'description': 'Triggers the actions of an automation.',
            'fields': {
                'skip_condition': {
                    'default': true,
                    'selector': {
                        'boolean': null
                    },
                    'name': 'Skip conditions',
                    'description': 'Defines whether or not the conditions will be skipped.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'automation'
                        ]
                    }
                ]
            }
        },
        'toggle': {
            'name': 'Toggle',
            'description': 'Toggles (enable / disable) an automation.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'automation'
                        ]
                    }
                ]
            }
        },
        'turn_on': {
            'name': 'Turn on',
            'description': 'Enables an automation.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'automation'
                        ]
                    }
                ]
            }
        },
        'turn_off': {
            'name': 'Turn off',
            'description': 'Disables an automation.',
            'fields': {
                'stop_actions': {
                    'default': true,
                    'selector': {
                        'boolean': null
                    },
                    'name': 'Stop actions',
                    'description': 'Stops currently running actions.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'automation'
                        ]
                    }
                ]
            }
        },
        'reload': {
            'name': 'Reload',
            'description': 'Reloads the automation configuration.',
            'fields': {}
        }
    },
    'timer': {
        'reload': {
            'name': 'Reload',
            'description': 'Reloads timers from the YAML-configuration.',
            'fields': {}
        },
        'start': {
            'name': 'Start',
            'description': 'Starts a timer.',
            'fields': {
                'duration': {
                    'example': '00:01:00 or 60',
                    'selector': {
                        'text': null
                    },
                    'name': 'Duration',
                    'description': 'Duration the timer requires to finish. [optional].'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'timer'
                        ]
                    }
                ]
            }
        },
        'pause': {
            'name': 'Pause',
            'description': 'Pauses a timer.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'timer'
                        ]
                    }
                ]
            }
        },
        'cancel': {
            'name': 'Cancel',
            'description': 'Cancels a timer.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'timer'
                        ]
                    }
                ]
            }
        },
        'finish': {
            'name': 'Finish',
            'description': 'Finishes a timer.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'timer'
                        ]
                    }
                ]
            }
        },
        'change': {
            'name': 'Change',
            'description': 'Changes a timer.',
            'fields': {
                'duration': {
                    'default': 0,
                    'required': true,
                    'example': '00:01:00, 60 or -60',
                    'selector': {
                        'text': null
                    },
                    'name': 'Duration',
                    'description': 'Duration to add or subtract to the running timer.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'timer'
                        ]
                    }
                ]
            }
        }
    },
    'input_select': {
        'reload': {
            'name': 'Reload',
            'description': 'Reloads helpers from the YAML-configuration.',
            'fields': {}
        },
        'select_first': {
            'name': 'First',
            'description': 'Selects the first option.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'input_select'
                        ]
                    }
                ]
            }
        },
        'select_last': {
            'name': 'Last',
            'description': 'Selects the last option.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'input_select'
                        ]
                    }
                ]
            }
        },
        'select_next': {
            'name': 'Next',
            'description': 'Select the next option.',
            'fields': {
                'cycle': {
                    'default': true,
                    'selector': {
                        'boolean': null
                    },
                    'name': 'Cycle',
                    'description': 'If the option should cycle from the last to the first option on the list.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'input_select'
                        ]
                    }
                ]
            }
        },
        'select_option': {
            'name': 'Select',
            'description': 'Selects an option.',
            'fields': {
                'option': {
                    'required': true,
                    'example': '"Item A"',
                    'selector': {
                        'text': null
                    },
                    'name': 'Option',
                    'description': 'Option to be selected.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'input_select'
                        ]
                    }
                ]
            }
        },
        'select_previous': {
            'name': 'Previous',
            'description': 'Selects the previous option.',
            'fields': {
                'cycle': {
                    'default': true,
                    'selector': {
                        'boolean': null
                    },
                    'name': 'Cycle',
                    'description': 'If the option should cycle from the last to the first option on the list.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'input_select'
                        ]
                    }
                ]
            }
        },
        'set_options': {
            'name': 'Set options',
            'description': 'Sets the options.',
            'fields': {
                'options': {
                    'required': true,
                    'example': '["Item A", "Item B", "Item C"]',
                    'selector': {
                        'object': null
                    },
                    'name': 'Options',
                    'description': 'List of options.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'input_select'
                        ]
                    }
                ]
            }
        }
    },
    'input_button': {
        'reload': {
            'name': 'Reload',
            'description': 'Reloads helpers from the YAML-configuration.',
            'fields': {}
        },
        'press': {
            'name': 'Press',
            'description': 'Mimics the physical button press on the device.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'input_button'
                        ]
                    }
                ]
            }
        }
    },
    'light': {
        'turn_on': {
            'name': 'Turn on',
            'description': 'Turn on one or more lights and adjust properties of the light, even when they are turned on already.',
            'fields': {
                'transition': {
                    'filter': {
                        'supported_features': [
                            32
                        ]
                    },
                    'selector': {
                        'number': {
                            'min': 0,
                            'max': 300,
                            'unit_of_measurement': 'seconds'
                        }
                    },
                    'name': 'Transition',
                    'description': 'Duration it takes to get to next state.'
                },
                'rgb_color': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'selector': {
                        'color_rgb': null
                    },
                    'name': 'Color',
                    'description': 'The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue.'
                },
                'rgbw_color': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'advanced': true,
                    'example': '[255, 100, 100, 50]',
                    'selector': {
                        'object': null
                    },
                    'name': 'RGBW-color',
                    'description': 'The color in RGBW format. A list of four integers between 0 and 255 representing the values of red, green, blue, and white.'
                },
                'rgbww_color': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'advanced': true,
                    'example': '[255, 100, 100, 50, 70]',
                    'selector': {
                        'object': null
                    },
                    'name': 'RGBWW-color',
                    'description': 'The color in RGBWW format. A list of five integers between 0 and 255 representing the values of red, green, blue, cold white, and warm white.'
                },
                'color_name': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'advanced': true,
                    'selector': {
                        'select': {
                            'translation_key': 'color_name',
                            'options': [
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
                                'yellowgreen'
                            ]
                        }
                    },
                    'name': 'Color name',
                    'description': 'A human-readable color name.'
                },
                'hs_color': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'advanced': true,
                    'example': '[300, 70]',
                    'selector': {
                        'object': null
                    },
                    'name': 'Hue/Sat color',
                    'description': 'Color in hue/sat format. A list of two integers. Hue is 0-360 and Sat is 0-100.'
                },
                'xy_color': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'advanced': true,
                    'example': '[0.52, 0.43]',
                    'selector': {
                        'object': null
                    },
                    'name': 'XY-color',
                    'description': 'Color in XY-format. A list of two decimal numbers between 0 and 1.'
                },
                'color_temp': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'color_temp',
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'selector': {
                        'color_temp': {
                            'unit': 'mired',
                            'min': 153,
                            'max': 500
                        }
                    },
                    'name': 'Color temperature',
                    'description': 'Color temperature in mireds.'
                },
                'kelvin': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'color_temp',
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'advanced': true,
                    'selector': {
                        'color_temp': {
                            'unit': 'kelvin',
                            'min': 2000,
                            'max': 6500
                        }
                    },
                    'name': 'Color temperature',
                    'description': 'Color temperature in Kelvin.'
                },
                'brightness': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'brightness',
                                'color_temp',
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'advanced': true,
                    'selector': {
                        'number': {
                            'min': 0,
                            'max': 255
                        }
                    },
                    'name': 'Brightness value',
                    'description': 'Number indicating brightness, where 0 turns the light off, 1 is the minimum brightness, and 255 is the maximum brightness.'
                },
                'brightness_pct': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'brightness',
                                'color_temp',
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'selector': {
                        'number': {
                            'min': 0,
                            'max': 100,
                            'unit_of_measurement': '%'
                        }
                    },
                    'name': 'Brightness',
                    'description': 'Number indicating the percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness.'
                },
                'brightness_step': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'brightness',
                                'color_temp',
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'advanced': true,
                    'selector': {
                        'number': {
                            'min': -225,
                            'max': 255
                        }
                    },
                    'name': 'Brightness step value',
                    'description': 'Change brightness by an amount.'
                },
                'brightness_step_pct': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'brightness',
                                'color_temp',
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'selector': {
                        'number': {
                            'min': -100,
                            'max': 100,
                            'unit_of_measurement': '%'
                        }
                    },
                    'name': 'Brightness step',
                    'description': 'Change brightness by a percentage.'
                },
                'white': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'white'
                            ]
                        }
                    },
                    'advanced': true,
                    'selector': {
                        'constant': {
                            'value': true,
                            'label': 'Enabled'
                        }
                    },
                    'name': 'White',
                    'description': 'Set the light to white mode.'
                },
                'profile': {
                    'advanced': true,
                    'example': 'relax',
                    'selector': {
                        'text': null
                    },
                    'name': 'Profile',
                    'description': 'Name of a light profile to use.'
                },
                'flash': {
                    'filter': {
                        'supported_features': [
                            8
                        ]
                    },
                    'advanced': true,
                    'selector': {
                        'select': {
                            'options': [
                                {
                                    'label': 'Long',
                                    'value': 'long'
                                },
                                {
                                    'label': 'Short',
                                    'value': 'short'
                                }
                            ]
                        }
                    },
                    'name': 'Flash',
                    'description': 'Tell light to flash, can be either value short or long.'
                },
                'effect': {
                    'filter': {
                        'supported_features': [
                            4
                        ]
                    },
                    'selector': {
                        'text': null
                    },
                    'name': 'Effect',
                    'description': 'Light effect.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'light'
                        ]
                    }
                ]
            }
        },
        'turn_off': {
            'name': 'Turn off',
            'description': 'Turn off one or more lights.',
            'fields': {
                'transition': {
                    'filter': {
                        'supported_features': [
                            32
                        ]
                    },
                    'selector': {
                        'number': {
                            'min': 0,
                            'max': 300,
                            'unit_of_measurement': 'seconds'
                        }
                    },
                    'name': 'Transition',
                    'description': 'Duration it takes to get to next state.'
                },
                'flash': {
                    'filter': {
                        'supported_features': [
                            8
                        ]
                    },
                    'advanced': true,
                    'selector': {
                        'select': {
                            'options': [
                                {
                                    'label': 'Long',
                                    'value': 'long'
                                },
                                {
                                    'label': 'Short',
                                    'value': 'short'
                                }
                            ]
                        }
                    },
                    'name': 'Flash',
                    'description': 'Tell light to flash, can be either value short or long.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'light'
                        ]
                    }
                ]
            }
        },
        'toggle': {
            'name': 'Toggle',
            'description': 'Toggles one or more lights, from on to off, or, off to on, based on their current state.',
            'fields': {
                'transition': {
                    'filter': {
                        'supported_features': [
                            32
                        ]
                    },
                    'selector': {
                        'number': {
                            'min': 0,
                            'max': 300,
                            'unit_of_measurement': 'seconds'
                        }
                    },
                    'name': 'Transition',
                    'description': 'Duration it takes to get to next state.'
                },
                'rgb_color': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'advanced': true,
                    'example': '[255, 100, 100]',
                    'selector': {
                        'color_rgb': null
                    },
                    'name': 'Color',
                    'description': 'The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue.'
                },
                'color_name': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'advanced': true,
                    'selector': {
                        'select': {
                            'translation_key': 'color_name',
                            'options': [
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
                                'yellowgreen'
                            ]
                        }
                    },
                    'name': 'Color name',
                    'description': 'A human-readable color name.'
                },
                'hs_color': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'advanced': true,
                    'example': '[300, 70]',
                    'selector': {
                        'object': null
                    },
                    'name': 'Hue/Sat color',
                    'description': 'Color in hue/sat format. A list of two integers. Hue is 0-360 and Sat is 0-100.'
                },
                'xy_color': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'advanced': true,
                    'example': '[0.52, 0.43]',
                    'selector': {
                        'object': null
                    },
                    'name': 'XY-color',
                    'description': 'Color in XY-format. A list of two decimal numbers between 0 and 1.'
                },
                'color_temp': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'color_temp',
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'advanced': true,
                    'selector': {
                        'color_temp': null
                    },
                    'name': 'Color temperature',
                    'description': 'Color temperature in mireds.'
                },
                'kelvin': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'color_temp',
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'advanced': true,
                    'selector': {
                        'color_temp': {
                            'unit': 'kelvin',
                            'min': 2000,
                            'max': 6500
                        }
                    },
                    'name': 'Color temperature',
                    'description': 'Color temperature in Kelvin.'
                },
                'brightness': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'brightness',
                                'color_temp',
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'advanced': true,
                    'selector': {
                        'number': {
                            'min': 0,
                            'max': 255
                        }
                    },
                    'name': 'Brightness value',
                    'description': 'Number indicating brightness, where 0 turns the light off, 1 is the minimum brightness, and 255 is the maximum brightness.'
                },
                'brightness_pct': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'brightness',
                                'color_temp',
                                'hs',
                                'xy',
                                'rgb',
                                'rgbw',
                                'rgbww'
                            ]
                        }
                    },
                    'selector': {
                        'number': {
                            'min': 0,
                            'max': 100,
                            'unit_of_measurement': '%'
                        }
                    },
                    'name': 'Brightness',
                    'description': 'Number indicating the percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness.'
                },
                'white': {
                    'filter': {
                        'attribute': {
                            'supported_color_modes': [
                                'white'
                            ]
                        }
                    },
                    'advanced': true,
                    'selector': {
                        'constant': {
                            'value': true,
                            'label': 'Enabled'
                        }
                    },
                    'name': 'White',
                    'description': 'Set the light to white mode.'
                },
                'profile': {
                    'advanced': true,
                    'example': 'relax',
                    'selector': {
                        'text': null
                    },
                    'name': 'Profile',
                    'description': 'Name of a light profile to use.'
                },
                'flash': {
                    'filter': {
                        'supported_features': [
                            8
                        ]
                    },
                    'advanced': true,
                    'selector': {
                        'select': {
                            'options': [
                                {
                                    'label': 'Long',
                                    'value': 'long'
                                },
                                {
                                    'label': 'Short',
                                    'value': 'short'
                                }
                            ]
                        }
                    },
                    'name': 'Flash',
                    'description': 'Tell light to flash, can be either value short or long.'
                },
                'effect': {
                    'filter': {
                        'supported_features': [
                            4
                        ]
                    },
                    'selector': {
                        'text': null
                    },
                    'name': 'Effect',
                    'description': 'Light effect.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'light'
                        ]
                    }
                ]
            }
        }
    },
    'schedule': {
        'reload': {
            'name': 'Reload',
            'description': 'Reloads schedules from the YAML-configuration.',
            'fields': {}
        }
    },
    'input_datetime': {
        'reload': {
            'name': 'Reload',
            'description': 'Reloads helpers from the YAML-configuration.',
            'fields': {}
        },
        'set_datetime': {
            'name': 'Set',
            'description': 'Sets the date and/or time.',
            'fields': {
                'date': {
                    'example': '"2019-04-20"',
                    'selector': {
                        'text': null
                    },
                    'name': 'Date',
                    'description': 'The target date.'
                },
                'time': {
                    'example': '"05:04:20"',
                    'selector': {
                        'time': null
                    },
                    'name': 'Time',
                    'description': 'The target time.'
                },
                'datetime': {
                    'example': '"2019-04-20 05:04:20"',
                    'selector': {
                        'text': null
                    },
                    'name': 'Date & time',
                    'description': 'The target date & time.'
                },
                'timestamp': {
                    'selector': {
                        'number': {
                            'min': 0,
                            // eslint-disable-next-line no-loss-of-precision
                            'max': 9223372036854775807,
                            'mode': 'box'
                        }
                    },
                    'name': 'Timestamp',
                    'description': 'The target date & time, expressed by a UNIX timestamp.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'input_datetime'
                        ]
                    }
                ]
            }
        }
    },
    'zone': {
        'reload': {
            'name': 'Reload',
            'description': 'Reloads zones from the YAML-configuration.',
            'fields': {}
        }
    },
    'scene': {
        'reload': {
            'name': 'Reload',
            'description': 'Reloads the scenes from the YAML-configuration.',
            'fields': {}
        },
        'apply': {
            'name': 'Apply',
            'description': 'Activates a scene with configuration.',
            'fields': {
                'entities': {
                    'required': true,
                    'example': 'light.kitchen: "on"\nlight.ceiling:\n  state: "on"\n  brightness: 80\n',
                    'selector': {
                        'object': null
                    },
                    'name': 'Entities state',
                    'description': 'List of entities and their target state.'
                },
                'transition': {
                    'selector': {
                        'number': {
                            'min': 0,
                            'max': 300,
                            'unit_of_measurement': 'seconds'
                        }
                    },
                    'name': 'Transition',
                    'description': 'Time it takes the devices to transition into the states defined in the scene.'
                }
            }
        },
        'create': {
            'name': 'Create',
            'description': 'Creates a new scene.',
            'fields': {
                'scene_id': {
                    'required': true,
                    'example': 'all_lights',
                    'selector': {
                        'text': null
                    },
                    'name': 'Scene entity ID',
                    'description': 'The entity ID of the new scene.'
                },
                'entities': {
                    'advanced': true,
                    'example': 'light.tv_back_light: "on"\nlight.ceiling:\n  state: "on"\n  brightness: 200\n',
                    'selector': {
                        'object': null
                    },
                    'name': 'Entities state',
                    'description': 'List of entities and their target state. If your entities are already in the target state right now, use `snapshot_entities` instead.'
                },
                'snapshot_entities': {
                    'example': '- light.ceiling\n- light.kitchen\n',
                    'selector': {
                        'entity': {
                            'multiple': true
                        }
                    },
                    'name': 'Snapshot entities',
                    'description': 'List of entities to be included in the snapshot. By taking a snapshot, you record the current state of those entities. If you do not want to use the current state of all your entities for this scene, you can combine the `snapshot_entities` with `entities`.'
                }
            }
        },
        'delete': {
            'name': 'Delete',
            'description': 'Deletes a dynamically created scene.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'integration': 'homeassistant',
                        'domain': [
                            'scene'
                        ]
                    }
                ]
            }
        },
        'turn_on': {
            'name': 'Activate',
            'description': 'Activates a scene.',
            'fields': {
                'transition': {
                    'selector': {
                        'number': {
                            'min': 0,
                            'max': 300,
                            'unit_of_measurement': 'seconds'
                        }
                    },
                    'name': 'Transition',
                    'description': 'Time it takes the devices to transition into the states defined in the scene.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'scene'
                        ]
                    }
                ]
            }
        }
    },
    'input_number': {
        'reload': {
            'name': 'Reload',
            'description': 'Reloads helpers from the YAML-configuration.',
            'fields': {}
        },
        'set_value': {
            'name': 'Set',
            'description': 'Sets the value.',
            'fields': {
                'value': {
                    'required': true,
                    'selector': {
                        'number': {
                            'min': 0,
                            // eslint-disable-next-line no-loss-of-precision
                            'max': 9223372036854775807,
                            'step': 0.001,
                            'mode': 'box'
                        }
                    },
                    'name': 'Value',
                    'description': 'The target value.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'input_number'
                        ]
                    }
                ]
            }
        },
        'increment': {
            'name': 'Increment',
            'description': 'Increments the value by 1 step.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'input_number'
                        ]
                    }
                ]
            }
        },
        'decrement': {
            'name': 'Decrement',
            'description': 'Decrements the current value by 1 step.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'input_number'
                        ]
                    }
                ]
            }
        }
    },
    'input_boolean': {
        'reload': {
            'name': 'Reload',
            'description': 'Reloads helpers from the YAML-configuration.',
            'fields': {}
        },
        'turn_on': {
            'name': 'Turn on',
            'description': 'Turns on the helper.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'input_boolean'
                        ]
                    }
                ]
            }
        },
        'turn_off': {
            'name': 'Turn off',
            'description': 'Turns off the helper.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'input_boolean'
                        ]
                    }
                ]
            }
        },
        'toggle': {
            'name': 'Toggle',
            'description': 'Toggles the helper on/off.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'input_boolean'
                        ]
                    }
                ]
            }
        }
    },
    'media_player': {
        'turn_on': {
            'name': 'Turn on',
            'description': 'Turns on the power of the media player.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            128
                        ]
                    }
                ]
            }
        },
        'turn_off': {
            'name': 'Turn off',
            'description': 'Turns off the power of the media player.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            256
                        ]
                    }
                ]
            }
        },
        'toggle': {
            'name': 'Toggle',
            'description': 'Toggles a media player on/off.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            384
                        ]
                    }
                ]
            }
        },
        'volume_up': {
            'name': 'Turn up volume',
            'description': 'Turns up the volume.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            4,
                            1024
                        ]
                    }
                ]
            }
        },
        'volume_down': {
            'name': 'Turn down volume',
            'description': 'Turns down the volume.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            4,
                            1024
                        ]
                    }
                ]
            }
        },
        'media_play_pause': {
            'name': 'Play/Pause',
            'description': 'Toggles play/pause.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            16385
                        ]
                    }
                ]
            }
        },
        'media_play': {
            'name': 'Play',
            'description': 'Starts playing.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            16384
                        ]
                    }
                ]
            }
        },
        'media_pause': {
            'name': 'Pause',
            'description': 'Pauses.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            1
                        ]
                    }
                ]
            }
        },
        'media_stop': {
            'name': 'Stop',
            'description': 'Stops playing.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            4096
                        ]
                    }
                ]
            }
        },
        'media_next_track': {
            'name': 'Next',
            'description': 'Selects the next track.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            32
                        ]
                    }
                ]
            }
        },
        'media_previous_track': {
            'name': 'Previous',
            'description': 'Selects the previous track.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            16
                        ]
                    }
                ]
            }
        },
        'clear_playlist': {
            'name': 'Clear playlist',
            'description': 'Clears the playlist.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            8192
                        ]
                    }
                ]
            }
        },
        'volume_set': {
            'name': 'Set volume',
            'description': 'Sets the volume level.',
            'fields': {
                'volume_level': {
                    'required': true,
                    'selector': {
                        'number': {
                            'min': 0,
                            'max': 1,
                            'step': 0.01
                        }
                    },
                    'name': 'Level',
                    'description': 'The volume. 0 is inaudible, 1 is the maximum volume.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            4
                        ]
                    }
                ]
            }
        },
        'volume_mute': {
            'name': 'Mute/unmute volume',
            'description': 'Mutes or unmutes the media player.',
            'fields': {
                'is_volume_muted': {
                    'required': true,
                    'selector': {
                        'boolean': null
                    },
                    'name': 'Muted',
                    'description': 'Defines whether or not it is muted.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            8
                        ]
                    }
                ]
            }
        },
        'media_seek': {
            'name': 'Seek',
            'description': 'Allows you to go to a different part of the media that is currently playing.',
            'fields': {
                'seek_position': {
                    'required': true,
                    'selector': {
                        'number': {
                            'min': 0,
                            // eslint-disable-next-line no-loss-of-precision
                            'max': 9223372036854775807,
                            'step': 0.01,
                            'mode': 'box'
                        }
                    },
                    'name': 'Position',
                    'description': 'Target position in the currently playing media. The format is platform dependent.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            2
                        ]
                    }
                ]
            }
        },
        'join': {
            'name': 'Join',
            'description': 'Groups media players together for synchronous playback. Only works on supported multiroom audio systems.',
            'fields': {
                'group_members': {
                    'required': true,
                    'example': '- media_player.multiroom_player2\n- media_player.multiroom_player3\n',
                    'selector': {
                        'entity': {
                            'multiple': true,
                            'domain': 'media_player'
                        }
                    },
                    'name': 'Group members',
                    'description': 'The players which will be synced with the playback specified in `target`.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            524288
                        ]
                    }
                ]
            }
        },
        'select_source': {
            'name': 'Select source',
            'description': 'Sends the media player the command to change input source.',
            'fields': {
                'source': {
                    'required': true,
                    'example': 'video1',
                    'selector': {
                        'text': null
                    },
                    'name': 'Source',
                    'description': 'Name of the source to switch to. Platform dependent.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            2048
                        ]
                    }
                ]
            }
        },
        'select_sound_mode': {
            'name': 'Select sound mode',
            'description': 'Selects a specific sound mode.',
            'fields': {
                'sound_mode': {
                    'example': 'Music',
                    'selector': {
                        'text': null
                    },
                    'name': 'Sound mode',
                    'description': 'Name of the sound mode to switch to.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            65536
                        ]
                    }
                ]
            }
        },
        'play_media': {
            'name': 'Play media',
            'description': 'Starts playing specified media.',
            'fields': {
                'media_content_id': {
                    'required': true,
                    'example': 'https://home-assistant.io/images/cast/splash.png',
                    'selector': {
                        'text': null
                    },
                    'name': 'Content ID',
                    'description': 'The ID of the content to play. Platform dependent.'
                },
                'media_content_type': {
                    'required': true,
                    'example': 'music',
                    'selector': {
                        'text': null
                    },
                    'name': 'Content type',
                    'description': 'The type of the content to play. Such as image, music, tv show, video, episode, channel, or playlist.'
                },
                'enqueue': {
                    'filter': {
                        'supported_features': [
                            2097152
                        ]
                    },
                    'required': false,
                    'selector': {
                        'select': {
                            'options': [
                                'play',
                                'next',
                                'add',
                                'replace'
                            ],
                            'translation_key': 'enqueue'
                        }
                    },
                    'name': 'Enqueue',
                    'description': 'If the content should be played now or be added to the queue.'
                },
                'announce': {
                    'filter': {
                        'supported_features': [
                            1048576
                        ]
                    },
                    'required': false,
                    'example': 'true',
                    'selector': {
                        'boolean': null
                    },
                    'name': 'Announce',
                    'description': 'If the media should be played as an announcement.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            512
                        ]
                    }
                ]
            }
        },
        'shuffle_set': {
            'name': 'Shuffle',
            'description': 'Playback mode that selects the media in randomized order.',
            'fields': {
                'shuffle': {
                    'required': true,
                    'selector': {
                        'boolean': null
                    },
                    'name': 'Shuffle',
                    'description': 'Whether or not shuffle mode is enabled.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            32768
                        ]
                    }
                ]
            }
        },
        'unjoin': {
            'name': 'Unjoin',
            'description': 'Removes the player from a group. Only works on platforms which support player groups.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            524288
                        ]
                    }
                ]
            }
        },
        'repeat_set': {
            'name': 'Repeat',
            'description': 'Playback mode that plays the media in a loop.',
            'fields': {
                'repeat': {
                    'required': true,
                    'selector': {
                        'select': {
                            'options': [
                                'off',
                                'all',
                                'one'
                            ],
                            'translation_key': 'repeat'
                        }
                    },
                    'name': 'Repeat mode',
                    'description': 'Repeat mode to set.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'media_player'
                        ],
                        'supported_features': [
                            262144
                        ]
                    }
                ]
            }
        }
    },
    'camera': {
        'enable_motion_detection': {
            'name': 'Enable motion detection',
            'description': 'Enables the motion detection.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'camera'
                        ]
                    }
                ]
            }
        },
        'disable_motion_detection': {
            'name': 'Disable motion detection',
            'description': 'Disables the motion detection.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'camera'
                        ]
                    }
                ]
            }
        },
        'turn_off': {
            'name': 'Turn off',
            'description': 'Turns off the camera.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'camera'
                        ]
                    }
                ]
            }
        },
        'turn_on': {
            'name': 'Turn on',
            'description': 'Turns on the camera.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'camera'
                        ]
                    }
                ]
            }
        },
        'snapshot': {
            'name': 'Take snapshot',
            'description': 'Takes a snapshot from a camera.',
            'fields': {
                'filename': {
                    'required': true,
                    'example': '/tmp/snapshot_{{ entity_id.name }}.jpg',
                    'selector': {
                        'text': null
                    },
                    'name': 'Filename',
                    'description': 'Template of a filename. Variable available is `entity_id`.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'camera'
                        ]
                    }
                ]
            }
        },
        'play_stream': {
            'name': 'Play stream',
            'description': 'Plays the camera stream on a supported media player.',
            'fields': {
                'media_player': {
                    'required': true,
                    'selector': {
                        'entity': {
                            'domain': 'media_player'
                        }
                    },
                    'name': 'Media player',
                    'description': 'Media players to stream to.'
                },
                'format': {
                    'default': 'hls',
                    'selector': {
                        'select': {
                            'options': [
                                'hls'
                            ]
                        }
                    },
                    'name': 'Format',
                    'description': 'Stream format supported by the media player.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'camera'
                        ]
                    }
                ]
            }
        },
        'record': {
            'name': 'Record',
            'description': 'Creates a recording of a live camera feed.',
            'fields': {
                'filename': {
                    'required': true,
                    'example': '/tmp/snapshot_{{ entity_id.name }}.mp4',
                    'selector': {
                        'text': null
                    },
                    'name': 'Filename',
                    'description': 'Template of a filename. Variable available is `entity_id`. Must be mp4.'
                },
                'duration': {
                    'default': 30,
                    'selector': {
                        'number': {
                            'min': 1,
                            'max': 3600,
                            'unit_of_measurement': 'seconds'
                        }
                    },
                    'name': 'Duration',
                    'description': 'Planned duration of the recording. The actual duration may vary.'
                },
                'lookback': {
                    'default': 0,
                    'selector': {
                        'number': {
                            'min': 0,
                            'max': 300,
                            'unit_of_measurement': 'seconds'
                        }
                    },
                    'name': 'Lookback',
                    'description': 'Planned lookback period to include in the recording (in addition to the duration). Only available if there is currently an active HLS stream. The actual length of the lookback period may vary.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'camera'
                        ]
                    }
                ]
            }
        }
    },
    'browser_mod': {
        'sequence': {
            'name': '',
            'description': 'Run a sequence of services',
            'fields': {
                'sequence': {
                    'name': 'Actions',
                    'description': 'List of services to run',
                    'selector': {
                        'object': null
                    }
                }
            },
            'target': {
                'device': [
                    {
                        'integration': 'browser_mod'
                    }
                ],
                'entity': [
                    {
                        'integration': 'browser_mod'
                    }
                ]
            }
        },
        'delay': {
            'name': '',
            'description': 'Wait for a time',
            'fields': {
                'time': {
                    'name': 'Time',
                    'description': 'Time to wait (ms)',
                    'selector': {
                        'number': {
                            'mode': 'box'
                        }
                    }
                }
            },
            'target': {
                'device': [
                    {
                        'integration': 'browser_mod'
                    }
                ],
                'entity': [
                    {
                        'integration': 'browser_mod'
                    }
                ]
            }
        },
        'popup': {
            'name': '',
            'description': 'Display a popup',
            'fields': {
                'title': {
                    'name': 'Title',
                    'description': 'Popup title',
                    'selector': {
                        'text': null
                    }
                },
                'content': {
                    'name': 'Content',
                    'required': true,
                    'description': 'Popup content (Test or lovelace card configuration)',
                    'selector': {
                        'object': null
                    }
                },
                'size': {
                    'name': 'Size',
                    'description': '',
                    'selector': {
                        'select': {
                            'mode': 'dropdown',
                            'options': [
                                'normal',
                                'wide',
                                'fullscreen'
                            ]
                        }
                    }
                },
                'right_button': {
                    'name': 'Right button',
                    'description': 'Text of the right button',
                    'selector': {
                        'text': null
                    }
                },
                'right_button_action': {
                    'name': 'Right button action',
                    'description': 'Action to perform when the right button is pressed',
                    'selector': {
                        'object': null
                    }
                },
                'left_button': {
                    'name': 'Left button',
                    'description': 'Text of the left button',
                    'selector': {
                        'text': null
                    }
                },
                'left_button_action': {
                    'name': 'Left button action',
                    'description': 'Action to perform when left button is pressed',
                    'selector': {
                        'object': null
                    }
                },
                'dismissable': {
                    'name': 'User dismissable',
                    'description': 'Whether the popup can be closed by the user without action',
                    'default': true,
                    'selector': {
                        'boolean': null
                    }
                },
                'dismiss_action': {
                    'name': 'Dismiss action',
                    'description': 'Action to perform when popup is dismissed',
                    'selector': {
                        'object': null
                    }
                },
                'autoclose': {
                    'name': 'Auto close',
                    'description': 'Close the popup automatically on mouse, pointer or keyboard activity',
                    'default': false,
                    'selector': {
                        'boolean': null
                    }
                },
                'timeout': {
                    'name': 'Auto close timeout',
                    'description': 'Time before closing (ms)',
                    'selector': {
                        'number': {
                            'mode': 'box'
                        }
                    }
                },
                'timeout_action': {
                    'name': 'Timeout action',
                    'description': 'Action to perform when popup is closed by timeout',
                    'selector': {
                        'object': null
                    }
                },
                'style': {
                    'name': 'Styles',
                    'description': 'CSS code to apply to the popup window',
                    'selector': {
                        'text': {
                            'multiline': true
                        }
                    }
                }
            },
            'target': {
                'device': [
                    {
                        'integration': 'browser_mod'
                    }
                ],
                'entity': [
                    {
                        'integration': 'browser_mod'
                    }
                ]
            }
        },
        'more_info': {
            'name': '',
            'description': 'Show more-info dialog',
            'fields': {
                'entity': {
                    'name': 'Entity ID',
                    'description': '',
                    'required': true,
                    'selector': {
                        'text': null
                    }
                },
                'large': {
                    'name': 'Large size',
                    'description': '',
                    'default': false,
                    'selector': {
                        'boolean': null
                    }
                },
                'ignore_popup_card': {
                    'name': 'Ignore any active popup-card overrides',
                    'description': '',
                    'default': false,
                    'selector': {
                        'boolean': null
                    }
                }
            },
            'target': {
                'device': [
                    {
                        'integration': 'browser_mod'
                    }
                ],
                'entity': [
                    {
                        'integration': 'browser_mod'
                    }
                ]
            }
        },
        'close_popup': {
            'name': '',
            'description': 'Close a popup',
            'fields': {},
            'target': {
                'device': [
                    {
                        'integration': 'browser_mod'
                    }
                ],
                'entity': [
                    {
                        'integration': 'browser_mod'
                    }
                ]
            }
        },
        'notification': {
            'name': '',
            'description': 'Display a short notification',
            'fields': {
                'message': {
                    'name': 'Message',
                    'description': 'Message to display',
                    'required': true,
                    'selector': {
                        'text': null
                    }
                },
                'duration': {
                    'name': 'Auto close timeout',
                    'description': 'Time before closing (ms)',
                    'selector': {
                        'number': {
                            'mode': 'box'
                        }
                    }
                },
                'action_text': {
                    'name': 'Action button text',
                    'description': 'Text of optional action button',
                    'selector': {
                        'text': null
                    }
                },
                'action': {
                    'name': 'Button action',
                    'description': 'Action to perform when the action button is pressed',
                    'selector': {
                        'object': null
                    }
                }
            },
            'target': {
                'device': [
                    {
                        'integration': 'browser_mod'
                    }
                ],
                'entity': [
                    {
                        'integration': 'browser_mod'
                    }
                ]
            }
        },
        'navigate': {
            'name': '',
            'description': 'Navigate browser to a different page',
            'fields': {
                'path': {
                    'name': 'Path',
                    'description': 'Target path',
                    'selector': {
                        'text': null
                    }
                }
            },
            'target': {
                'device': [
                    {
                        'integration': 'browser_mod'
                    }
                ],
                'entity': [
                    {
                        'integration': 'browser_mod'
                    }
                ]
            }
        },
        'refresh': {
            'name': '',
            'description': 'Refresh page',
            'fields': {},
            'target': {
                'device': [
                    {
                        'integration': 'browser_mod'
                    }
                ],
                'entity': [
                    {
                        'integration': 'browser_mod'
                    }
                ]
            }
        },
        'set_theme': {
            'name': '',
            'description': 'Change the current theme',
            'fields': {
                'theme': {
                    'name': 'Theme',
                    'description': "Name of theme or 'auto'",
                    'selector': {
                        'text': null
                    }
                },
                'dark': {
                    'name': 'Mode',
                    'description': 'Dark/light mode',
                    'selector': {
                        'select': {
                            'options': [
                                'auto',
                                'light',
                                'dark'
                            ]
                        }
                    }
                },
                'primaryColor': {
                    'name': 'Primary Color',
                    'description': 'Primary theme color',
                    'selector': {
                        'color_rgb': null
                    }
                },
                'accentColor': {
                    'name': 'Accent Color',
                    'description': 'Accent theme color',
                    'selector': {
                        'color_rgb': null
                    }
                }
            },
            'target': {
                'device': [
                    {
                        'integration': 'browser_mod'
                    }
                ],
                'entity': [
                    {
                        'integration': 'browser_mod'
                    }
                ]
            }
        },
        'console': {
            'name': '',
            'description': 'Print text to browser console',
            'fields': {
                'message': {
                    'name': 'Message',
                    'description': 'Text to print',
                    'selector': {
                        'text': null
                    }
                }
            },
            'target': {
                'device': [
                    {
                        'integration': 'browser_mod'
                    }
                ],
                'entity': [
                    {
                        'integration': 'browser_mod'
                    }
                ]
            }
        },
        'javascript': {
            'name': '',
            'description': 'Run arbitrary JavaScript code',
            'fields': {
                'code': {
                    'name': 'Code',
                    'description': 'JavaScript code to run',
                    'selector': {
                        'object': null
                    }
                }
            },
            'target': {
                'device': [
                    {
                        'integration': 'browser_mod'
                    }
                ],
                'entity': [
                    {
                        'integration': 'browser_mod'
                    }
                ]
            }
        }
    },
    'todo': {
        'add_item': {
            'name': 'Add to-do list item',
            'description': 'Add a new to-do list item.',
            'fields': {
                'item': {
                    'required': true,
                    'example': 'Submit income tax return',
                    'selector': {
                        'text': null
                    },
                    'name': 'Item name',
                    'description': 'The name that represents the to-do item.'
                },
                'due_date': {
                    'example': '2023-11-17',
                    'selector': {
                        'date': null
                    },
                    'name': 'Due date',
                    'description': 'The date the to-do item is expected to be completed.'
                },
                'due_datetime': {
                    'example': '2023-11-17 13:30:00',
                    'selector': {
                        'datetime': null
                    },
                    'name': 'Due date and time',
                    'description': 'The date and time the to-do item is expected to be completed.'
                },
                'description': {
                    'example': 'A more complete description of the to-do item than that provided by the summary.',
                    'selector': {
                        'text': null
                    },
                    'name': 'Description',
                    'description': 'A more complete description of the to-do item than provided by the item name.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'todo'
                        ],
                        'supported_features': [
                            1
                        ]
                    }
                ]
            }
        },
        'update_item': {
            'name': 'Update to-do list item',
            'description': 'Update an existing to-do list item based on its name.',
            'fields': {
                'item': {
                    'required': true,
                    'example': 'Submit income tax return',
                    'selector': {
                        'text': null
                    },
                    'name': 'Item name',
                    'description': 'The name for the to-do list item.'
                },
                'rename': {
                    'example': 'Something else',
                    'selector': {
                        'text': null
                    },
                    'name': 'Rename item',
                    'description': 'The new name of the to-do item'
                },
                'status': {
                    'example': 'needs_action',
                    'selector': {
                        'select': {
                            'translation_key': 'status',
                            'options': [
                                'needs_action',
                                'completed'
                            ]
                        }
                    },
                    'name': 'Set status',
                    'description': 'A status or confirmation of the to-do item.'
                },
                'due_date': {
                    'example': '2023-11-17',
                    'selector': {
                        'date': null
                    },
                    'name': 'Due date',
                    'description': 'The date the to-do item is expected to be completed.'
                },
                'due_datetime': {
                    'example': '2023-11-17 13:30:00',
                    'selector': {
                        'datetime': null
                    },
                    'name': 'Due date and time',
                    'description': 'The date and time the to-do item is expected to be completed.'
                },
                'description': {
                    'example': 'A more complete description of the to-do item than that provided by the summary.',
                    'selector': {
                        'text': null
                    },
                    'name': 'Description',
                    'description': 'A more complete description of the to-do item than provided by the item name.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'todo'
                        ],
                        'supported_features': [
                            4
                        ]
                    }
                ]
            }
        },
        'remove_item': {
            'name': 'Remove a to-do list item',
            'description': 'Remove an existing to-do list item by its name.',
            'fields': {
                'item': {
                    'required': true,
                    'selector': {
                        'text': null
                    },
                    'name': 'Item name',
                    'description': 'The name for the to-do list items.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'todo'
                        ],
                        'supported_features': [
                            2
                        ]
                    }
                ]
            }
        },
        'get_items': {
            'name': 'Get to-do list items',
            'description': 'Get items on a to-do list.',
            'fields': {
                'status': {
                    'example': 'needs_action',
                    'default': 'needs_action',
                    'selector': {
                        'select': {
                            'translation_key': 'status',
                            'options': [
                                'needs_action',
                                'completed'
                            ],
                            'multiple': true
                        }
                    },
                    'name': 'Status',
                    'description': 'Only return to-do items with the specified statuses. Returns not completed actions by default.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'todo'
                        ]
                    }
                ]
            },
            'response': {
                'optional': false
            }
        },
        'remove_completed_items': {
            'name': 'Remove all completed to-do list items',
            'description': 'Remove all to-do list items that have been completed.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'todo'
                        ],
                        'supported_features': [
                            2
                        ]
                    }
                ]
            }
        }
    },
    'notify': {
        'persistent_notification': {
            'name': 'Send a persistent notification',
            'description': 'Sends a notification that is visible in the **Notifications** panel.',
            'fields': {
                'message': {
                    'required': true,
                    'example': 'The garage door has been open for 10 minutes.',
                    'selector': {
                        'text': null
                    },
                    'name': 'Message',
                    'description': 'Message body of the notification.'
                },
                'title': {
                    'example': 'Your Garage Door Friend',
                    'selector': {
                        'text': null
                    },
                    'name': 'Title',
                    'description': 'Title of the notification.'
                },
                'data': {
                    'example': 'platform specific',
                    'selector': {
                        'object': null
                    },
                    'name': 'Data',
                    'description': 'Some integrations provide extended functionality. For information on how to use _data_, refer to the integration documentation..'
                }
            }
        },
        'notify': {
            'name': 'Send a notification with notify',
            'description': 'Sends a notification message using the notify service.',
            'fields': {
                'message': {
                    'required': true,
                    'example': 'The garage door has been open for 10 minutes.',
                    'selector': {
                        'text': null
                    }
                },
                'title': {
                    'example': 'Your Garage Door Friend',
                    'selector': {
                        'text': null
                    }
                },
                'target': {
                    'example': 'platform specific',
                    'selector': {
                        'object': null
                    }
                },
                'data': {
                    'example': 'platform specific',
                    'selector': {
                        'object': null
                    }
                }
            }
        }
    },
    'tts': {
        'google_translate_say': {
            'name': 'Say a TTS message with google_translate',
            'description': 'Say something using text-to-speech on a media player with google_translate.',
            'fields': {
                'entity_id': {
                    'required': true,
                    'selector': {
                        'entity': {
                            'domain': 'media_player'
                        }
                    }
                },
                'message': {
                    'example': 'My name is hanna',
                    'required': true,
                    'selector': {
                        'text': null
                    }
                },
                'cache': {
                    'default': false,
                    'selector': {
                        'boolean': null
                    }
                },
                'language': {
                    'example': 'ru',
                    'selector': {
                        'text': null
                    }
                },
                'options': {
                    'advanced': true,
                    'example': 'platform specific',
                    'selector': {
                        'object': null
                    }
                }
            }
        },
        'speak': {
            'name': 'Speak',
            'description': 'Speaks something using text-to-speech on a media player.',
            'fields': {
                'media_player_entity_id': {
                    'required': true,
                    'selector': {
                        'entity': {
                            'domain': 'media_player'
                        }
                    },
                    'name': 'Media player entity',
                    'description': 'Media players to play the message.'
                },
                'message': {
                    'example': 'My name is hanna',
                    'required': true,
                    'selector': {
                        'text': null
                    },
                    'name': 'Message',
                    'description': 'The text you want to convert into speech so that you can listen to it on your device.'
                },
                'cache': {
                    'default': true,
                    'selector': {
                        'boolean': null
                    },
                    'name': 'Cache',
                    'description': 'Stores this message locally so that when the text is requested again, the output can be produced more quickly.'
                },
                'language': {
                    'example': 'ru',
                    'selector': {
                        'text': null
                    },
                    'name': 'Language',
                    'description': 'Language to use for speech generation.'
                },
                'options': {
                    'advanced': true,
                    'example': 'platform specific',
                    'selector': {
                        'object': null
                    },
                    'name': 'Options',
                    'description': 'A dictionary containing integration-specific options.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'tts'
                        ]
                    }
                ]
            }
        },
        'clear_cache': {
            'name': 'Clear TTS cache',
            'description': 'Removes all cached text-to-speech files and purges the memory.',
            'fields': {}
        }
    },
    'backup': {
        'create': {
            'name': 'Create backup',
            'description': 'Creates a new backup.',
            'fields': {}
        }
    },
    'weather': {
        'get_forecast': {
            'name': 'Get forecast',
            'description': 'Get weather forecast.',
            'fields': {
                'type': {
                    'required': true,
                    'selector': {
                        'select': {
                            'options': [
                                'daily',
                                'hourly',
                                'twice_daily'
                            ],
                            'translation_key': 'forecast_type'
                        }
                    },
                    'name': 'Forecast type',
                    'description': 'Forecast type: daily, hourly or twice daily.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'weather'
                        ],
                        'supported_features': [
                            1,
                            2,
                            4
                        ]
                    }
                ]
            },
            'response': {
                'optional': false
            }
        },
        'get_forecasts': {
            'name': 'Get forecasts',
            'description': 'Get weather forecasts.',
            'fields': {
                'type': {
                    'required': true,
                    'selector': {
                        'select': {
                            'options': [
                                'daily',
                                'hourly',
                                'twice_daily'
                            ],
                            'translation_key': 'forecast_type'
                        }
                    },
                    'name': 'Forecast type',
                    'description': 'Forecast type: daily, hourly or twice daily.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'weather'
                        ],
                        'supported_features': [
                            1,
                            2,
                            4
                        ]
                    }
                ]
            },
            'response': {
                'optional': false
            }
        }
    },
    'select': {
        'select_first': {
            'name': 'First',
            'description': 'Selects the first option.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'select'
                        ]
                    }
                ]
            }
        },
        'select_last': {
            'name': 'Last',
            'description': 'Selects the last option.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'select'
                        ]
                    }
                ]
            }
        },
        'select_next': {
            'name': 'Next',
            'description': 'Selects the next option.',
            'fields': {
                'cycle': {
                    'default': true,
                    'selector': {
                        'boolean': null
                    },
                    'name': 'Cycle',
                    'description': 'If the option should cycle from the last to the first.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'select'
                        ]
                    }
                ]
            }
        },
        'select_option': {
            'name': 'Select',
            'description': 'Selects an option.',
            'fields': {
                'option': {
                    'required': true,
                    'example': '"Item A"',
                    'selector': {
                        'text': null
                    },
                    'name': 'Option',
                    'description': 'Option to be selected.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'select'
                        ]
                    }
                ]
            }
        },
        'select_previous': {
            'name': 'Previous',
            'description': 'Selects the previous option.',
            'fields': {
                'cycle': {
                    'default': true,
                    'selector': {
                        'boolean': null
                    },
                    'name': 'Cycle',
                    'description': 'If the option should cycle from the first to the last.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'select'
                        ]
                    }
                ]
            }
        }
    },
    'number': {
        'set_value': {
            'name': 'Set',
            'description': 'Sets the value of a number.',
            'fields': {
                'value': {
                    'example': 42,
                    'selector': {
                        'text': null
                    },
                    'name': 'Value',
                    'description': 'The target value to set.'
                }
            },
            'target': {
                'entity': [
                    {
                        'domain': [
                            'number'
                        ]
                    }
                ]
            }
        }
    },
    'switch': {
        'turn_off': {
            'name': 'Turn off',
            'description': 'Turns a switch off.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'switch'
                        ]
                    }
                ]
            }
        },
        'turn_on': {
            'name': 'Turn on',
            'description': 'Turns a switch on.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'switch'
                        ]
                    }
                ]
            }
        },
        'toggle': {
            'name': 'Toggle',
            'description': 'Toggles a switch on/off.',
            'fields': {},
            'target': {
                'entity': [
                    {
                        'domain': [
                            'switch'
                        ]
                    }
                ]
            }
        }
    }
};
