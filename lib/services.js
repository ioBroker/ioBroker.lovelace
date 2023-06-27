module.exports = {
    'persistent_notification': {
        'create': {
            'name': 'Create', 'description': 'Show a notification in the frontend.', 'fields': {
                'message': {
                    'name': 'Message',
                    'description': 'Message body of the notification. [Templates accepted]',
                    'required': true,
                    'example': 'Please check your configuration.yaml.',
                    'selector': {
                        'text': null
                    }
                }, 'title': {
                    'name': 'Title',
                    'description': 'Optional title for your notification. [Templates accepted]',
                    'example': 'Test notification',
                    'selector': {
                        'text': null
                    }
                }, 'notification_id': {
                    'name': 'Notification ID',
                    'description': 'Target ID of the notification, will replace a notification with the same ID.',
                    'example': 1234,
                    'selector': {
                        'text': null
                    }
                }
            }
        }, 'dismiss': {
            'name': 'Dismiss', 'description': 'Remove a notification from the frontend.', 'fields': {
                'notification_id': {
                    'name': 'Notification ID',
                    'description': 'Target ID of the notification, which should be removed.',
                    'required': true,
                    'example': 1234,
                    'selector': {
                        'text': null
                    }
                }
            }
        }
    }, 'homeassistant': {
        'save_persistent_states': {
            'name': 'Save Persistent States',
            'description': 'Save the persistent states (for entities derived from RestoreEntity) immediately. Maintain the normal periodic saving interval.',
            'fields': {}
        }, 'turn_off': {
            'name': 'Generic turn off',
            'description': 'Generic service to turn devices off under any domain.',
            'fields': {},
            'target': {
                'entity': [{}]
            }
        }, 'turn_on': {
            'name': 'Generic turn on',
            'description': 'Generic service to turn devices on under any domain.',
            'fields': {},
            'target': {
                'entity': [{}]
            }
        }, 'toggle': {
            'name': 'Generic toggle',
            'description': 'Generic service to toggle devices on/off under any domain',
            'fields': {},
            'target': {
                'entity': [{}]
            }
        }, 'stop': {
            'name': 'Stop', 'description': 'Stop the Home Assistant service.', 'fields': {}
        }, 'restart': {
            'name': 'Restart', 'description': 'Restart the Home Assistant service.', 'fields': {}
        }, 'check_config': {
            'name': 'Check configuration',
            'description': 'Check the Home Assistant configuration files for errors. Errors will be displayed in the Home Assistant log.',
            'fields': {}
        }, 'update_entity': {
            'name': 'Update entity',
            'description': 'Force one or more entities to update its data',
            'fields': {},
            'target': {
                'entity': [{}]
            }
        }, 'reload_core_config': {
            'name': 'Reload core configuration', 'description': 'Reload the core configuration.', 'fields': {}
        }, 'set_location': {
            'name': 'Set location', 'description': 'Update the Home Assistant location.', 'fields': {
                'latitude': {
                    'name': 'Latitude',
                    'description': 'Latitude of your location.',
                    'required': true,
                    'example': 32.87336,
                    'selector': {
                        'text': null
                    }
                }, 'longitude': {
                    'name': 'Longitude',
                    'description': 'Longitude of your location.',
                    'required': true,
                    'example': 117.22743,
                    'selector': {
                        'text': null
                    }
                }
            }
        }, 'reload_custom_templates': {
            'name': 'Reload custom Jinja2 templates',
            'description': 'Reload Jinja2 templates found in the custom_templates folder in your config. New values will be applied on the next render of the template.',
            'fields': {}
        }, 'reload_config_entry': {
            'name': 'Reload config entry', 'description': 'Reload a config entry that matches a target.', 'fields': {
                'entry_id': {
                    'advanced': true,
                    'name': 'Config entry id',
                    'description': 'A configuration entry id',
                    'required': false,
                    'example': '8955375327824e14ba89e4b29cc3ec9a',
                    'selector': {
                        'text': null
                    }
                }
            }, 'target': {
                'entity': [{}], 'device': [{}]
            }
        }, 'reload_all': {
            'name': '', 'description': '', 'fields': {}
        }
    }, 'system_log': {
        'clear': {
            'name': 'Clear all', 'description': 'Clear all log entries.', 'fields': {}
        }, 'write': {
            'name': 'Write', 'description': 'Write log entry.', 'fields': {
                'message': {
                    'name': 'Message',
                    'description': 'Message to log.',
                    'required': true,
                    'example': 'Something went wrong',
                    'selector': {
                        'text': null
                    }
                }, 'level': {
                    'name': 'Level', 'description': 'Log level.', 'default': 'error', 'selector': {
                        'select': {
                            'options': [{
                                'label': 'Debug', 'value': 'debug'
                            }, {
                                'label': 'Info', 'value': 'info'
                            }, {
                                'label': 'Warning', 'value': 'warning'
                            }, {
                                'label': 'Error', 'value': 'error'
                            }, {
                                'label': 'Critical', 'value': 'critical'
                            }]
                        }
                    }
                }, 'logger': {
                    'name': 'Logger',
                    'description': "Logger name under which to log the message. Defaults to 'system_log.external'.",
                    'example': 'mycomponent.myplatform',
                    'selector': {
                        'text': null
                    }
                }
            }
        }
    }, 'logger': {
        'set_default_level': {
            'name': 'Set default level', 'description': 'Set the default log level for integrations.', 'fields': {
                'level': {
                    'name': 'Level', 'description': 'Default severity level for all integrations.', 'selector': {
                        'select': {
                            'options': [{
                                'label': 'Debug', 'value': 'debug'
                            }, {
                                'label': 'Info', 'value': 'info'
                            }, {
                                'label': 'Warning', 'value': 'warning'
                            }, {
                                'label': 'Error', 'value': 'error'
                            }, {
                                'label': 'Fatal', 'value': 'fatal'
                            }, {
                                'label': 'Critical', 'value': 'critical'
                            }]
                        }
                    }
                }
            }
        }, 'set_level': {
            'name': 'Set level', 'description': 'Set log level for integrations.', 'fields': {}
        }
    }, 'person': {
        'reload': {
            'name': 'Reload', 'description': 'Reload the person configuration.', 'fields': {}
        }
    }, 'frontend': {
        'set_theme': {
            'name': 'Set theme', 'description': 'Set a theme unless the client selected per-device theme.', 'fields': {
                'name': {
                    'name': 'Theme',
                    'description': 'Name of a predefined theme',
                    'required': true,
                    'example': 'default',
                    'selector': {
                        'theme': null
                    }
                }, 'mode': {
                    'name': 'Mode', 'description': 'The mode the theme is for.', 'default': 'light', 'selector': {
                        'select': {
                            'options': [{
                                'label': 'Dark', 'value': 'dark'
                            }, {
                                'label': 'Light', 'value': 'light'
                            }]
                        }
                    }
                }
            }
        }, 'reload_themes': {
            'name': 'Reload themes', 'description': 'Reload themes from YAML configuration.', 'fields': {}
        }
    }, 'recorder': {
        'purge': {
            'name': 'Purge', 'description': 'Start purge task - to clean up old data from your database.', 'fields': {
                'keep_days': {
                    'name': 'Days to keep',
                    'description': 'Number of history days to keep in database after purge.',
                    'selector': {
                        'number': {
                            'min': 0, 'max': 365, 'unit_of_measurement': 'days'
                        }
                    }
                }, 'repack': {
                    'name': 'Repack',
                    'description': 'Attempt to save disk space by rewriting the entire database file.',
                    'default': false,
                    'selector': {
                        'boolean': null
                    }
                }, 'apply_filter': {
                    'name': 'Apply filter',
                    'description': 'Apply entity_id and event_type filter in addition to time based purge.',
                    'default': false,
                    'selector': {
                        'boolean': null
                    }
                }
            }
        }, 'purge_entities': {
            'name': 'Purge Entities',
            'description': 'Start purge task to remove specific entities from your database.',
            'fields': {
                'domains': {
                    'name': 'Domains to remove',
                    'description': 'List the domains that need to be removed from the recorder database.',
                    'example': 'sun',
                    'required': false,
                    'default': [],
                    'selector': {
                        'object': null
                    }
                }, 'entity_globs': {
                    'name': 'Entity Globs to remove',
                    'description': 'List the glob patterns to select entities for removal from the recorder database.',
                    'example': 'domain*.object_id*',
                    'required': false,
                    'default': [],
                    'selector': {
                        'object': null
                    }
                }, 'keep_days': {
                    'name': 'Days to keep',
                    'description': 'Number of history days to keep in database of matching rows. The default of 0 days will remove all matching rows.',
                    'default': 0,
                    'selector': {
                        'number': {
                            'min': 0, 'max': 365, 'unit_of_measurement': 'days'
                        }
                    }
                }
            },
            'target': {
                'entity': [{}]
            }
        }, 'enable': {
            'name': 'Enable', 'description': 'Start the recording of events and state changes', 'fields': {}
        }, 'disable': {
            'name': 'Disable', 'description': 'Stop the recording of events and state changes', 'fields': {}
        }
    }, 'cloud': {
        'remote_connect': {
            'name': 'Remote connect',
            'description': 'Make instance UI available outside over NabuCasa cloud',
            'fields': {}
        }, 'remote_disconnect': {
            'name': 'Remote disconnect', 'description': 'Disconnect UI from NabuCasa cloud', 'fields': {}
        }
    }, 'conversation': {
        'process': {
            'name': 'Process', 'description': 'Launch a conversation from a transcribed text.', 'fields': {
                'text': {
                    'name': 'Text', 'description': 'Transcribed text', 'example': 'Turn all lights on', 'selector': {
                        'text': null
                    }
                }, 'language': {
                    'name': 'Language',
                    'description': 'Language of text. Defaults to server language',
                    'example': 'NL',
                    'selector': {
                        'text': null
                    }
                }, 'agent_id': {
                    'name': 'Agent',
                    'description': 'Assist engine to process your request',
                    'example': 'homeassistant',
                    'selector': {
                        'text': null
                    }
                }
            }
        }, 'reload': {
            'name': '', 'description': '', 'fields': {}
        }
    }, 'logbook': {
        'log': {
            'name': 'Log', 'description': 'Create a custom entry in your logbook.', 'fields': {
                'name': {
                    'name': 'Name',
                    'description': 'Custom name for an entity, can be referenced with entity_id.',
                    'required': true,
                    'example': 'Kitchen',
                    'selector': {
                        'text': null
                    }
                }, 'message': {
                    'name': 'Message',
                    'description': 'Message of the custom logbook entry.',
                    'required': true,
                    'example': 'is being used',
                    'selector': {
                        'text': null
                    }
                }, 'entity_id': {
                    'name': 'Entity ID', 'description': 'Entity to reference in custom logbook entry.', 'selector': {
                        'entity': null
                    }
                }, 'domain': {
                    'name': 'Domain',
                    'description': 'Icon of domain to display in custom logbook entry.',
                    'example': 'light',
                    'selector': {
                        'text': null
                    }
                }
            }
        }
    }, 'counter': {
        'increment': {
            'name': 'Increment', 'description': 'Increment a counter.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['counter']
                }]
            }
        }, 'decrement': {
            'name': 'Decrement', 'description': 'Decrement a counter.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['counter']
                }]
            }
        }, 'reset': {
            'name': 'Reset', 'description': 'Reset a counter.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['counter']
                }]
            }
        }, 'set_value': {
            'name': 'Set', 'description': 'Set the counter value', 'fields': {
                'value': {
                    'name': 'Value',
                    'required': true,
                    'description': 'The new counter value the entity should be set to.',
                    'selector': {
                        'number': {
                            'min': 0, 'max': Number.MAX_SAFE_INTEGER, 'mode': 'box'
                        }
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['counter']
                }]
            }
        }, 'configure': {
            'name': '', 'description': '', 'fields': {}
        }
    }, 'timer': {
        'reload': {
            'name': '', 'description': '', 'fields': {}
        }, 'start': {
            'name': 'Start', 'description': 'Start a timer', 'fields': {
                'duration': {
                    'description': 'Duration the timer requires to finish. [optional]',
                    'example': '00:01:00 or 60',
                    'selector': {
                        'text': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['timer']
                }]
            }
        }, 'pause': {
            'name': 'Pause', 'description': 'Pause a timer.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['timer']
                }]
            }
        }, 'cancel': {
            'name': 'Cancel', 'description': 'Cancel a timer.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['timer']
                }]
            }
        }, 'finish': {
            'name': 'Finish', 'description': 'Finish a timer.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['timer']
                }]
            }
        }, 'change': {
            'name': 'Change', 'description': 'Change a timer', 'fields': {
                'duration': {
                    'description': 'Duration to add or subtract to the running timer',
                    'default': 0,
                    'required': true,
                    'example': '00:01:00, 60 or -60',
                    'selector': {
                        'text': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['timer']
                }]
            }
        }
    }, 'zone': {
        'reload': {
            'name': 'Reload', 'description': 'Reload the YAML-based zone configuration.', 'fields': {}
        }
    }, 'scene': {
        'reload': {
            'name': 'Reload', 'description': 'Reload the scene configuration.', 'fields': {}
        }, 'apply': {
            'name': 'Apply', 'description': 'Activate a scene with configuration.', 'fields': {
                'entities': {
                    'name': 'Entities state',
                    'description': 'The entities and the state that they need to be.',
                    'required': true,
                    'example': 'light.kitchen: "on light.ceiling: state: on brightness: 80"',
                    'selector': {
                        'object': null
                    }
                }, 'transition': {
                    'name': 'Transition',
                    'description': 'Transition duration it takes to bring devices to the state defined in the scene.',
                    'selector': {
                        'number': {
                            'min': 0, 'max': 300, 'unit_of_measurement': 'seconds'
                        }
                    }
                }
            }
        }, 'create': {
            'name': 'Create', 'description': 'Creates a new scene.', 'fields': {
                'scene_id': {
                    'name': 'Scene entity ID',
                    'description': 'The entity_id of the new scene.',
                    'required': true,
                    'example': 'all_lights',
                    'selector': {
                        'text': null
                    }
                }, 'entities': {
                    'name': 'Entities state',
                    'description': 'The entities to control with the scene.',
                    'example': '',
                    'selector': {
                        'object': null
                    }
                }, 'snapshot_entities': {
                    'name': 'Snapshot entities',
                    'description': 'The entities of which a snapshot is to be taken',
                    'example': '- light.ceiling\\n- light.kitchen\\n',
                    'selector': {
                        'object': null
                    }
                }
            }
        }, 'turn_on': {
            'name': 'Activate', 'description': 'Activate a scene.', 'fields': {
                'transition': {
                    'name': 'Transition',
                    'description': 'Transition duration it takes to bring devices to the state defined in the scene.',
                    'selector': {
                        'number': {
                            'min': 0, 'max': 300, 'unit_of_measurement': 'seconds'
                        }
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['scene']
                }]
            }
        }
    }, 'input_select': {
        'reload': {
            'name': 'Reload', 'description': 'Reload the input_select configuration.', 'fields': {}
        }, 'select_first': {
            'name': 'First',
            'description': 'Select the first option of an input select entity.',
            'fields': {},
            'target': {
                'entity': [{
                    'domain': ['input_select']
                }]
            }
        }, 'select_last': {
            'name': 'Last',
            'description': 'Select the last option of an input select entity.',
            'fields': {},
            'target': {
                'entity': [{
                    'domain': ['input_select']
                }]
            }
        }, 'select_next': {
            'name': 'Next', 'description': 'Select the next options of an input select entity.', 'fields': {
                'cycle': {
                    'name': 'Cycle',
                    'description': 'If the option should cycle from the last to the first.',
                    'default': true,
                    'selector': {
                        'boolean': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['input_select']
                }]
            }
        }, 'select_option': {
            'name': 'Select', 'description': 'Select an option of an input select entity.', 'fields': {
                'option': {
                    'name': 'Option',
                    'description': 'Option to be selected.',
                    'required': true,
                    'example': '',
                    'selector': {
                        'text': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['input_select']
                }]
            }
        }, 'select_previous': {
            'name': 'Previous', 'description': 'Select the previous options of an input select entity.', 'fields': {
                'cycle': {
                    'name': 'Cycle',
                    'description': 'If the option should cycle from the first to the last.',
                    'default': true,
                    'selector': {
                        'boolean': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['input_select']
                }]
            }
        }, 'set_options': {
            'name': 'Set options', 'description': 'Set the options of an input select entity.', 'fields': {
                'options': {
                    'name': 'Options',
                    'description': 'Options for the input select entity.',
                    'required': true,
                    'example': '',
                    'selector': {
                        'object': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['input_select']
                }]
            }
        }
    }, 'input_number': {
        'reload': {
            'name': 'Reload', 'description': 'Reload the input_number configuration.', 'fields': {}
        }, 'set_value': {
            'name': 'Set', 'description': 'Set the value of an input number entity.', 'fields': {
                'value': {
                    'name': 'Value',
                    'description': 'The target value the entity should be set to.',
                    'required': true,
                    'selector': {
                        'number': {
                            'min': 0, 'max': Number.MAX_SAFE_INTEGER, 'step': 0.001, 'mode': 'box'
                        }
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['input_number']
                }]
            }
        }, 'increment': {
            'name': 'Increment',
            'description': 'Increment the value of an input number entity by its stepping.',
            'fields': {},
            'target': {
                'entity': [{
                    'domain': ['input_number']
                }]
            }
        }, 'decrement': {
            'name': 'Decrement',
            'description': 'Decrement the value of an input number entity by its stepping.',
            'fields': {},
            'target': {
                'entity': [{
                    'domain': ['input_number']
                }]
            }
        }
    }, 'schedule': {
        'reload': {
            'name': 'Reload', 'description': 'Reload the schedule configuration', 'fields': {}
        }
    }, 'input_datetime': {
        'reload': {
            'name': 'Reload', 'description': 'Reload the input_datetime configuration.', 'fields': {}
        }, 'set_datetime': {
            'name': 'Set', 'description': 'This can be used to dynamically set the date and/or time.', 'fields': {
                'date': {
                    'name': 'Date',
                    'description': 'The target date the entity should be set to.',
                    'example': '',
                    'selector': {
                        'text': null
                    }
                }, 'time': {
                    'name': 'Time',
                    'description': 'The target time the entity should be set to.',
                    'example': '',
                    'selector': {
                        'time': null
                    }
                }, 'datetime': {
                    'name': 'Date & Time',
                    'description': 'The target date & time the entity should be set to.',
                    'example': '',
                    'selector': {
                        'text': null
                    }
                }, 'timestamp': {
                    'name': 'Timestamp',
                    'description': 'The target date & time the entity should be set to as expressed by a UNIX timestamp.',
                    'selector': {
                        'number': {
                            'min': 0, 'max': Number.MAX_SAFE_INTEGER, 'mode': 'box'
                        }
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['input_datetime']
                }]
            }
        }
    }, 'input_button': {
        'reload': {
            'name': '', 'description': '', 'fields': {}
        }, 'press': {
            'name': 'Press', 'description': 'Press the input button entity.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['input_button']
                }]
            }
        }
    }, 'input_boolean': {
        'reload': {
            'name': 'Reload', 'description': 'Reload the input_boolean configuration', 'fields': {}
        }, 'turn_on': {
            'name': 'Turn on', 'description': 'Turn on an input boolean', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['input_boolean']
                }]
            }
        }, 'turn_off': {
            'name': 'Turn off', 'description': 'Turn off an input boolean', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['input_boolean']
                }]
            }
        }, 'toggle': {
            'name': 'Toggle', 'description': 'Toggle an input boolean', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['input_boolean']
                }]
            }
        }
    }, 'input_text': {
        'reload': {
            'name': 'Reload', 'description': 'Reload the input_text configuration.', 'fields': {}
        }, 'set_value': {
            'name': 'Set', 'description': 'Set the value of an input text entity.', 'fields': {
                'value': {
                    'name': 'Value',
                    'description': 'The target value the entity should be set to.',
                    'required': true,
                    'example': 'This is an example text',
                    'selector': {
                        'text': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['input_text']
                }]
            }
        }
    }, 'script': {
        'reload': {
            'name': 'Reload', 'description': 'Reload all the available scripts', 'fields': {}
        }, 'turn_on': {
            'name': 'Turn on', 'description': 'Turn on script', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['script']
                }]
            }
        }, 'turn_off': {
            'name': 'Turn off', 'description': 'Turn off script', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['script']
                }]
            }
        }, 'toggle': {
            'name': 'Toggle', 'description': 'Toggle script', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['script']
                }]
            }
        }
    }, 'tts': {
        'google_translate_say': {
            'name': 'Say a TTS message with google_translate',
            'description': 'Say something using text-to-speech on a media player with google_translate.',
            'fields': {
                'entity_id': {
                    'name': 'Entity',
                    'description': 'Name(s) of media player entities.',
                    'required': true,
                    'selector': {
                        'entity': {
                            'domain': 'media_player'
                        }
                    }
                }, 'message': {
                    'name': 'Message',
                    'description': 'Text to speak on devices.',
                    'example': 'My name is hanna',
                    'required': true,
                    'selector': {
                        'text': null
                    }
                }, 'cache': {
                    'name': 'Cache',
                    'description': 'Control file cache of this message.',
                    'default': false,
                    'selector': {
                        'boolean': null
                    }
                }, 'language': {
                    'name': 'Language',
                    'description': 'Language to use for speech generation.',
                    'example': 'ru',
                    'selector': {
                        'text': null
                    }
                }, 'options': {
                    'name': 'Options',
                    'description': 'A dictionary containing platform-specific options. Optional depending on the platform.',
                    'advanced': true,
                    'example': 'platform specific',
                    'selector': {
                        'object': null
                    }
                }
            }
        }, 'speak': {
            'name': 'Speak', 'description': 'Speak something using text-to-speech on a media player.', 'fields': {
                'media_player_entity_id': {
                    'name': 'Media Player Entity',
                    'description': 'Name(s) of media player entities.',
                    'required': true,
                    'selector': {
                        'entity': {
                            'domain': 'media_player'
                        }
                    }
                }, 'message': {
                    'name': 'Message',
                    'description': 'Text to speak on devices.',
                    'example': 'My name is hanna',
                    'required': true,
                    'selector': {
                        'text': null
                    }
                }, 'cache': {
                    'name': 'Cache',
                    'description': 'Control file cache of this message.',
                    'default': true,
                    'selector': {
                        'boolean': null
                    }
                }, 'language': {
                    'name': 'Language',
                    'description': 'Language to use for speech generation.',
                    'example': 'ru',
                    'selector': {
                        'text': null
                    }
                }, 'options': {
                    'name': 'Options',
                    'description': 'A dictionary containing platform-specific options. Optional depending on the platform.',
                    'advanced': true,
                    'example': 'platform specific',
                    'selector': {
                        'object': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['tts']
                }]
            }
        }, 'clear_cache': {
            'name': 'Clear TTS cache',
            'description': 'Remove all text-to-speech cache files and RAM cache.',
            'fields': {}
        }
    }, 'automation': {
        'trigger': {
            'name': 'Trigger', 'description': 'Trigger the actions of an automation.', 'fields': {
                'skip_condition': {
                    'name': 'Skip conditions',
                    'description': 'Whether or not the conditions will be skipped.',
                    'default': true,
                    'selector': {
                        'boolean': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['automation']
                }]
            }
        }, 'toggle': {
            'name': 'Toggle', 'description': 'Toggle (enable / disable) an automation.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['automation']
                }]
            }
        }, 'turn_on': {
            'name': 'Turn on', 'description': 'Enable an automation.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['automation']
                }]
            }
        }, 'turn_off': {
            'name': 'Turn off', 'description': 'Disable an automation.', 'fields': {
                'stop_actions': {
                    'name': 'Stop actions',
                    'description': 'Stop currently running actions.',
                    'default': true,
                    'selector': {
                        'boolean': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['automation']
                }]
            }
        }, 'reload': {
            'name': 'Reload', 'description': 'Reload the automation configuration.', 'fields': {}
        }
    }, 'notify': {
        'persistent_notification': {
            'name': 'Send a persistent notification',
            'description': 'Sends a notification that is visible in the front-end.',
            'fields': {
                'message': {
                    'name': 'Message',
                    'description': 'Message body of the notification.',
                    'required': true,
                    'example': 'The garage door has been open for 10 minutes.',
                    'selector': {
                        'text': null
                    }
                }, 'title': {
                    'name': 'Title',
                    'description': 'Title for your notification.',
                    'example': 'Your Garage Door Friend',
                    'selector': {
                        'text': null
                    }
                }
            }
        }, 'notify': {
            'name': 'Send a notification with notify',
            'description': 'Sends a notification message using the notify service.',
            'fields': {
                'message': {
                    'name': 'Message',
                    'description': 'Message body of the notification.',
                    'required': true,
                    'example': 'The garage door has been open for 10 minutes.',
                    'selector': {
                        'text': null
                    }
                }, 'title': {
                    'name': 'Title',
                    'description': 'Title for your notification.',
                    'example': 'Your Garage Door Friend',
                    'selector': {
                        'text': null
                    }
                }, 'target': {
                    'name': 'Target',
                    'description': 'An array of targets to send the notification to. Optional depending on the platform.',
                    'example': 'platform specific',
                    'selector': {
                        'object': null
                    }
                }, 'data': {
                    'name': 'Data',
                    'description': 'Extended information for notification. Optional depending on the platform.',
                    'example': 'platform specific',
                    'selector': {
                        'object': null
                    }
                }
            }
        }
    }, 'backup': {
        'create': {
            'name': 'Create backup', 'description': 'Create a new backup.', 'fields': {}
        }
    }, 'media_player': {
        'turn_on': {
            'name': 'Turn on', 'description': 'Turn a media player power on.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'turn_off': {
            'name': 'Turn off', 'description': 'Turn a media player power off.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'toggle': {
            'name': 'Toggle', 'description': 'Toggles a media player power state.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'volume_up': {
            'name': 'Turn up volume', 'description': 'Turn a media player volume up.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'volume_down': {
            'name': 'Turn down volume', 'description': 'Turn a media player volume down.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'media_play_pause': {
            'name': 'Play/Pause', 'description': 'Toggle media player play/pause state.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'media_play': {
            'name': 'Play', 'description': 'Send the media player the command for play.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'media_pause': {
            'name': 'Pause', 'description': 'Send the media player the command for pause.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'media_stop': {
            'name': 'Stop', 'description': 'Send the media player the stop command.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'media_next_track': {
            'name': 'Next',
            'description': 'Send the media player the command for next track.',
            'fields': {},
            'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'media_previous_track': {
            'name': 'Previous',
            'description': 'Send the media player the command for previous track.',
            'fields': {},
            'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'clear_playlist': {
            'name': 'Clear playlist',
            'description': 'Send the media player the command to clear players playlist.',
            'fields': {},
            'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'volume_set': {
            'name': 'Set volume', 'description': "Set a media player's volume level.", 'fields': {
                'volume_level': {
                    'name': 'Level', 'description': 'Volume level to set as float.', 'required': true, 'selector': {
                        'number': {
                            'min': 0, 'max': 1, 'step': 0.01
                        }
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'volume_mute': {
            'name': 'Mute volume', 'description': "Mute a media player's volume.", 'fields': {
                'is_volume_muted': {
                    'name': 'Muted', 'description': 'True/false for mute/unmute.', 'required': true, 'selector': {
                        'boolean': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'media_seek': {
            'name': 'Seek',
            'description': 'Send the media player the command to seek in current playing media.',
            'fields': {
                'seek_position': {
                    'name': 'Position',
                    'description': 'Position to seek to. The format is platform dependent.',
                    'required': true,
                    'selector': {
                        'number': {
                            'min': 0, 'max': Number.MAX_SAFE_INTEGER, 'step': 0.01, 'mode': 'box'
                        }
                    }
                }
            },
            'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'join': {
            'name': 'Join',
            'description': 'Group players together. Only works on platforms with support for player groups.',
            'fields': {
                'group_members': {
                    'name': 'Group members',
                    'description': 'The players which will be synced with the target player.',
                    'required': true,
                    'example': '- media_player.multiroom_player2\\n- media_player.multiroom_player3\\n',
                    'selector': {
                        'entity': {
                            'multiple': true, 'domain': 'media_player'
                        }
                    }
                }
            },
            'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'select_source': {
            'name': 'Select source',
            'description': 'Send the media player the command to change input source.',
            'fields': {
                'source': {
                    'name': 'Source',
                    'description': 'Name of the source to switch to. Platform dependent.',
                    'required': true,
                    'example': 'video1',
                    'selector': {
                        'text': null
                    }
                }
            },
            'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'select_sound_mode': {
            'name': 'Select sound mode',
            'description': 'Send the media player the command to change sound mode.',
            'fields': {
                'sound_mode': {
                    'name': 'Sound mode',
                    'description': 'Name of the sound mode to switch to.',
                    'example': 'Music',
                    'selector': {
                        'text': null
                    }
                }
            },
            'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'play_media': {
            'name': 'Play media', 'description': 'Send the media player the command for playing media.', 'fields': {
                'media_content_id': {
                    'name': 'Content ID',
                    'description': 'The ID of the content to play. Platform dependent.',
                    'required': true,
                    'example': 'https://home-assistant.io/images/cast/splash.png',
                    'selector': {
                        'text': null
                    }
                }, 'media_content_type': {
                    'name': 'Content type',
                    'description': 'The type of the content to play. Like image, music, tvshow, video, episode, channel or playlist.',
                    'required': true,
                    'example': 'music',
                    'selector': {
                        'text': null
                    }
                }, 'enqueue': {
                    'name': 'Enqueue',
                    'description': 'If the content should be played now or be added to the queue.',
                    'required': false,
                    'selector': {
                        'select': {
                            'options': [{
                                'label': 'Play now', 'value': 'play'
                            }, {
                                'label': 'Play next', 'value': 'next'
                            }, {
                                'label': 'Add to queue', 'value': 'add'
                            }, {
                                'label': 'Play now and clear queue', 'value': 'replace'
                            }]
                        }
                    }
                }, 'announce': {
                    'name': 'Announce',
                    'description': 'If the media should be played as an announcement.',
                    'required': false,
                    'example': 'true',
                    'selector': {
                        'boolean': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'shuffle_set': {
            'name': 'Shuffle', 'description': 'Set shuffling state.', 'fields': {
                'shuffle': {
                    'name': 'Shuffle',
                    'description': 'True/false for enabling/disabling shuffle.',
                    'required': true,
                    'selector': {
                        'boolean': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'unjoin': {
            'name': 'Unjoin',
            'description': 'Unjoin the player from a group. Only works on platforms with support for player groups.',
            'fields': {},
            'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }, 'repeat_set': {
            'name': 'Repeat', 'description': 'Set repeat mode', 'fields': {
                'repeat': {
                    'name': 'Repeat mode', 'description': 'Repeat mode to set.', 'required': true, 'selector': {
                        'select': {
                            'options': [{
                                'label': 'Off', 'value': 'off'
                            }, {
                                'label': 'Repeat all', 'value': 'all'
                            }, {
                                'label': 'Repeat one', 'value': 'one'
                            }]
                        }
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['media_player']
                }]
            }
        }
    }, 'select': {
        'select_first': {
            'name': 'First', 'description': 'Select the first option of an select entity.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['select']
                }]
            }
        }, 'select_last': {
            'name': 'Last', 'description': 'Select the last option of an select entity.', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['select']
                }]
            }
        }, 'select_next': {
            'name': 'Next', 'description': 'Select the next options of an select entity.', 'fields': {
                'cycle': {
                    'name': 'Cycle',
                    'description': 'If the option should cycle from the last to the first.',
                    'default': true,
                    'selector': {
                        'boolean': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['select']
                }]
            }
        }, 'select_option': {
            'name': 'Select', 'description': 'Select an option of an select entity.', 'fields': {
                'option': {
                    'name': 'Option',
                    'description': 'Option to be selected.',
                    'required': true,
                    'example': '',
                    'selector': {
                        'text': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['select']
                }]
            }
        }, 'select_previous': {
            'name': 'Previous', 'description': 'Select the previous options of an select entity.', 'fields': {
                'cycle': {
                    'name': 'Cycle',
                    'description': 'If the option should cycle from the first to the last.',
                    'default': true,
                    'selector': {
                        'boolean': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['select']
                }]
            }
        }
    }, 'number': {
        'set_value': {
            'name': 'Set', 'description': 'Set the value of a Number entity.', 'fields': {
                'value': {
                    'name': 'Value',
                    'description': 'The target value the entity should be set to.',
                    'example': 42,
                    'selector': {
                        'text': null
                    }
                }
            }, 'target': {
                'entity': [{
                    'domain': ['number']
                }]
            }
        }
    }, 'switch': {
        'turn_off': {
            'name': 'Turn off', 'description': 'Turn a switch off', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['switch']
                }]
            }
        }, 'turn_on': {
            'name': 'Turn on', 'description': 'Turn a switch on', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['switch']
                }]
            }
        }, 'toggle': {
            'name': 'Toggle', 'description': 'Toggles a switch state', 'fields': {}, 'target': {
                'entity': [{
                    'domain': ['switch']
                }]
            }
        }
    }
};