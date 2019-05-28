module.exports = {
    "persistent_notification": {
        "create": {
            "description": "Show a notification in the frontend.",
            "fields": {
                "message": {
                    "description": "Message body of the notification. [Templates accepted]",
                    "example": "Please check your configuration.yaml."
                },
                "title": {
                    "description": "Optional title for your notification. [Optional, Templates accepted]",
                    "example": "Test notification"
                },
                "notification_id": {
                    "description": "Target ID of the notification, will replace a notification with the same Id. [Optional]",
                    "example": 1234
                }
            }
        },
        "dismiss": {
            "description": "Remove a notification from the frontend.",
            "fields": {
                "notification_id": {
                    "description": "Target ID of the notification, which should be removed. [Required]",
                    "example": 1234
                }
            }
        },
        "mark_read": {"description": "", "fields": {}}
    },
    "homeassistant": {
        "turn_off": {
            "description": "Generic service to turn devices off under any domain. Same usage as the light.turn_on, switch.turn_on, etc. services.",
            "fields": {
                "entity_id": {
                    "description": "The entity_id of the device to turn off.",
                    "example": "light.living_room"
                }
            }
        },
        "turn_on": {
            "description": "Generic service to turn devices on under any domain. Same usage as the light.turn_on, switch.turn_on, etc. services.",
            "fields": {
                "entity_id": {
                    "description": "The entity_id of the device to turn on.",
                    "example": "light.living_room"
                }
            }
        },
        "toggle": {
            "description": "Generic service to toggle devices on/off under any domain. Same usage as the light.turn_on, switch.turn_on, etc. services.",
            "fields": {
                "entity_id": {
                    "description": "The entity_id of the device to toggle on/off.",
                    "example": "light.living_room"
                }
            }
        },
        "stop": {"description": "Stop the Home Assistant service.", "fields": {}},
        "restart": {"description": "Restart the Home Assistant service.", "fields": {}},
        "check_config": {
            "description": "Check the Home Assistant configuration files for errors. Errors will be displayed in the Home Assistant log.",
            "fields": {}
        },
        "update_entity": {
            "description": "Force one or more entities to update its data",
            "fields": {
                "entity_id": {
                    "description": "One or multiple entity_ids to update. Can be a list.",
                    "example": "light.living_room"
                }
            }
        },
        "reload_core_config": {"description": "Reload the core configuration.", "fields": {}}
    },
    /*"system_log": {
        "clear": {"description": "Clear all log entries.", "fields": {}},
        "write": {
            "description": "Write log entry.",
            "fields": {
                "message": {
                    "description": "Message to log. [Required]",
                    "example": "Something went wrong"
                },
                "level": {
                    "description": "Log level: debug, info, warning, error, critical. Defaults to 'error'.",
                    "example": "debug"
                },
                "logger": {
                    "description": "Logger name under which to log the message. Defaults to 'system_log.external'.",
                    "example": "mycomponent.myplatform"
                }
            }
        }
    },
    "recorder": {
        "purge": {
            "description": "Start purge task - delete events and states older than x days, according to keep_days service data.",
            "fields": {
                "keep_days": {
                    "description": "Number of history days to keep in database after purge. Value >= 0.",
                    "example": 2
                },
                "repack": {
                    "description": "Attempt to save disk space by rewriting the entire database file.",
                    "example": true
                }
            }
        }
    },
    "group": {
        "reload": {"description": "Reload group configuration.", "fields": {}},
        "set": {
            "description": "Create/Update a user group.",
            "fields": {
                "object_id": {
                    "description": "Group id and part of entity id.",
                    "example": "test_group"
                },
                "name": {"description": "Name of group", "example": "My test group"},
                "view": {"description": "Boolean for if the group is a view.", "example": true},
                "icon": {"description": "Name of icon for the group.", "example": "mdi:camera"},
                "control": {"description": "Value for control the group control.", "example": "hidden"},
                "visible": {"description": "If the group is visible on UI.", "example": true},
                "entities": {
                    "description": "List of all members in the group. Not compatible with 'delta'.",
                    "example": "domain.entity_id1, domain.entity_id2"
                },
                "add_entities": {
                    "description": "List of members they will change on group listening.",
                    "example": "domain.entity_id1, domain.entity_id2"
                },
                "all": {
                    "description": "Enable this option if the group should only turn on when all entities are on.",
                    "example": true
                }
            }
        },
        "remove": {
            "description": "Remove a user group.",
            "fields": {
                "object_id": {
                    "description": "Group id and part of entity id.",
                    "example": "test_group"
                }
            }
        },
        "set_visibility": {
            "description": "Hide or show a group.",
            "fields": {
                "entity_id": {
                    "description": "Name(s) of entities to set value.",
                    "example": "group.travel"
                },
                "visible": {
                    "description": "True if group should be shown or False if it should be hidden.",
                    "example": true
                }
            }
        }
    },
    "conversation": {
        "process": {
            "description": "Launch a conversation from a transcribed text.",
            "fields": {"text": {"description": "Transcribed text", "example": "Turn all lights on"}}
        }
    },
    "script": {
        "reload": {"description": "Reload all the available scripts", "fields": {}},
        "turn_on": {
            "description": "Turn on script",
            "fields": {
                "entity_id": {
                    "description": "Name(s) of script to be turned on.",
                    "example": "script.arrive_home"
                }
            }
        },
        "turn_off": {
            "description": "Turn off script",
            "fields": {
                "entity_id": {
                    "description": "Name(s) of script to be turned off.",
                    "example": "script.arrive_home"
                }
            }
        },
        "toggle": {
            "description": "Toggle script",
            "fields": {
                "entity_id": {
                    "description": "Name(s) of script to be toggled.",
                    "example": "script.arrive_home"
                }
            }
        }
    },
    "device_tracker": {
        "see": {
            "description": "Control tracked device.",
            "fields": {
                "mac": {"description": "MAC address of device", "example": "FF:FF:FF:FF:FF:FF"},
                "dev_id": {
                    "description": "Id of device (find id in known_devices.yaml).",
                    "example": "phonedave"
                },
                "host_name": {"description": "Hostname of device", "example": "Dave"},
                "location_name": {
                    "description": "Name of location where device is located (not_home is away).",
                    "example": "home"
                },
                "gps": {
                    "description": "GPS coordinates where device is located (latitude, longitude).",
                    "example": "[51.509802, -0.086692]"
                },
                "gps_accuracy": {"description": "Accuracy of GPS coordinates.", "example": "80"},
                "battery": {"description": "Battery level of device.", "example": "100"}
            }
        }
    },
    "automation": {
        "trigger": {
            "description": "Trigger the action of an automation.",
            "fields": {
                "entity_id": {
                    "description": "Name of the automation to trigger.",
                    "example": "automation.notify_home"
                }
            }
        },
        "reload": {"description": "Reload the automation configuration.", "fields": {}},
        "toggle": {
            "description": "Toggle an automation.",
            "fields": {
                "entity_id": {
                    "description": "Name of the automation to toggle on/off.",
                    "example": "automation.notify_home"
                }
            }
        },
        "turn_on": {
            "description": "Enable an automation.",
            "fields": {
                "entity_id": {
                    "description": "Name of the automation to turn on.",
                    "example": "automation.notify_home"
                }
            }
        },
        "turn_off": {
            "description": "Disable an automation.",
            "fields": {
                "entity_id": {
                    "description": "Name of the automation to turn off.",
                    "example": "automation.notify_home"
                }
            }
        }
    },
    "cloud": {
        "remote_connect": {
            "description": "Make instance UI available outside over NabuCasa cloud.",
            "fields": {}
        }, "remote_disconnect": {"description": "Disconnect UI from NabuCasa cloud.", "fields": {}}
    },
    "tts": {
        "google_translate_say": {"description": "", "fields": {}},
        "clear_cache": {"description": "Remove cache files and RAM cache.", "fields": {}}
    },
    "logbook": {"log": {"description": "", "fields": {}}},
    "notify": {
        "notify": {
            "description": "Send a notification.",
            "fields": {
                "message": {
                    "description": "Message body of the notification.",
                    "example": "The garage door has been open for 10 minutes."
                },
                "title": {
                    "description": "Optional title for your notification.",
                    "example": "Your Garage Door Friend"
                },
                "target": {
                    "description": "An array of targets to send the notification to. Optional depending on the platform.",
                    "example": "platform specific"
                },
                "data": {
                    "description": "Extended information for notification. Optional depending on the platform.",
                    "example": "platform specific"
                }
            }
        }
    }*/
};