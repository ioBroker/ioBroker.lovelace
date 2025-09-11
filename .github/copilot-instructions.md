# ioBroker.lovelace Copilot Instructions

## Project Overview

This is the **ioBroker.lovelace** adapter - an ioBroker adapter that provides visualization capabilities using the Home Assistant Lovelace UI. It bridges ioBroker smart home objects with the modern, card-based Lovelace interface originally developed for Home Assistant.

### Key Purpose
- Provides a modern web-based visualization interface for ioBroker installations
- Allows users to create dashboards using the flexible Lovelace card system
- Automatically detects ioBroker objects and converts them to Home Assistant-compatible entities
- Supports custom cards, themes, and advanced visualization features

## Architecture & Key Concepts

### ioBroker Adapter Pattern
- **main.js**: Entry point following ioBroker adapter conventions
- **io-package.json**: Adapter metadata and configuration schema
- **package.json**: Standard Node.js package configuration

### Core Components

#### 1. Entity System (`lib/entities/`, `lib/converters/`)
- **Entities**: ioBroker objects converted to Home Assistant format
- **Converters**: Transform ioBroker object types to HA entity types:
  - `switch.js` - Switch entities
  - `light.js` - Light entities with dimming, color, etc.
  - `sensor.js` - Sensor readings
  - `binary_sensor.js` - On/off sensors
  - `climate.js` - Thermostats and HVAC
  - `cover.js` - Blinds, shutters, garage doors
  - `media_player.js` - Media players
  - `weather.js` - Weather stations
  - `camera.js` - Camera/image entities
  - `alarm_control_panel.js` - Security systems

#### 2. Server System (`lib/server.js`)
- Express.js-based web server
- WebSocket communication for real-time updates
- Authentication and session management
- API endpoints for frontend communication

#### 3. Modules (`lib/modules/`)
- **autoEntities.js**: Automatic entity detection from ioBroker objects
- **browser_mod.js**: Browser control functionality (popup, notification, etc.)
- **dashboard.js**: Dashboard management
- **entityRegistry.js**: Entity registration and ID management
- **history.js**: Historical data handling
- **statisticsRecorder.js**: Long-term statistics
- **persistentNotifications.js**: System notifications
- **todo.js**: Task/shopping list functionality

#### 4. Frontend (`hass_frontend/`)
- Modified Home Assistant frontend
- Custom cards and UI components
- Static assets and resources

## File Structure

```
/
├── main.js                    # Adapter entry point
├── io-package.json           # Adapter configuration
├── package.json              # Node.js dependencies
├── lib/                      # Core adapter logic
│   ├── server.js            # Main server implementation
│   ├── entities/            # Entity management
│   ├── converters/          # Object-to-entity converters
│   ├── modules/             # Feature modules
│   └── tools.js             # Utility functions
├── admin/                   # Admin UI files
│   ├── words.js            # Translations
│   └── i18n/               # Localization files
├── hass_frontend/          # Modified Home Assistant frontend
├── docs/                   # Documentation (multi-language)
├── test/                   # Test files
└── gulpfile.js            # Build tasks
```

## Development Patterns & Conventions

### Entity Conversion Pattern
```javascript
// Standard pattern for converter functions
function processEntityType(id, obj, entity, objects, customsData) {
    // 1. Validate object structure
    // 2. Extract states and attributes
    // 3. Map to Home Assistant entity format
    // 4. Apply custom configurations
    // 5. Return formatted entity
}
```

### Module Pattern
```javascript
// Standard module pattern used throughout
class ModuleName {
    constructor(adapter) {
        this.adapter = adapter;
        this.entities = new Map();
    }
    
    async init() {
        // Module initialization
    }
    
    destroy() {
        // Cleanup resources
    }
}
```

### State Management
- Uses ioBroker's state system for persistence
- Entity states are automatically synchronized
- Support for both polling and push updates

## Build & Development

### Scripts
- `npm test` - Run unit and package tests
- `npm run lint` - ESLint code checking
- `npm run release` - Create new release
- `gulp build-app` - Build frontend (requires separate setup)

### Testing
- Uses Mocha test framework
- Tests located in `test/` directory
- Integration tests for adapter functionality
- Package validation tests

### Linting
- ESLint with ioBroker configuration
- Configuration in `eslint.config.mjs`
- Must pass linting for pull requests

## Common Workflows

### Adding New Entity Type
1. Create converter in `lib/converters/`
2. Add converter import to `lib/server.js`
3. Register in entity detection logic
4. Add tests for the new entity type
5. Update documentation

### Adding New Module
1. Create module in `lib/modules/`
2. Follow standard module pattern
3. Import and initialize in `lib/server.js`
4. Add necessary instance objects to `io-package.json`
5. Add configuration options if needed

### Frontend Modifications
1. Frontend code is in `hass_frontend/`
2. Based on Home Assistant frontend with ioBroker modifications
3. Build process requires separate Home Assistant build setup
4. Changes marked with `// IoB` comments

## Key Configuration Files

- **io-package.json**: Adapter metadata, instance objects, dependencies
- **package.json**: Node.js dependencies and scripts
- **eslint.config.mjs**: Linting configuration
- **gulpfile.js**: Build tasks
- **lib/defaultConfig.json**: Default adapter configuration

## Important Concepts

### Custom Objects
- ioBroker objects can have custom lovelace configuration
- Stored in `obj.common.custom["lovelace.X"]`
- Overrides automatic entity detection

### Entity Registry
- Manages entity IDs and prevents conflicts
- Stores entity metadata and settings
- Located in adapter's state tree

### Browser Instances
- Each browser gets unique instance ID
- Stored in browser's local storage
- Enables per-browser customization

### Themes & Cards
- Custom themes via YAML configuration
- Custom cards uploaded to `/cards/` directory
- Automatic loading of custom resources

## Debugging & Troubleshooting

### Common Issues
- Entity not appearing: Check function/room assignment
- Frontend not loading: Verify authentication settings
- Custom cards not working: Check card file upload and compatibility

### Logging
- Use `adapter.log.debug()`, `adapter.log.info()`, etc.
- Log levels configurable in ioBroker admin
- Frontend logs in browser console

### State Inspection
- Use ioBroker admin to inspect object states
- Check `lovelace.X.configuration` for UI config
- Monitor WebSocket messages for real-time debugging

## Security Considerations

- Authentication can be enabled/disabled
- User management integration with ioBroker
- SSL/TLS support for encrypted connections
- Session management for persistent logins

## Performance Notes

- Entity updates are batched for efficiency
- WebSocket used for real-time communication
- Caching implemented for static resources
- Statistics recording can be resource intensive

This documentation helps GitHub Copilot understand the codebase structure and patterns to provide better code suggestions and assistance during development.