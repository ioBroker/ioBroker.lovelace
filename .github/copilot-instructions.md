# ioBroker.lovelace Copilot Instructions

**Version:** 0.4.0  
**Template Source:** https://github.com/DrozmotiX/ioBroker-Copilot-Instructions

This file contains instructions and best practices for GitHub Copilot when working on the ioBroker.lovelace adapter development, integrating both adapter-specific context and community-standard ioBroker development patterns.

## ioBroker Context

You are working on an ioBroker adapter. ioBroker is an integration platform for the Internet of Things, focused on building smart home and industrial IoT solutions. Adapters are plugins that connect ioBroker to external systems, devices, or services.

**This specific adapter** provides visualization capabilities using the Home Assistant Lovelace UI, bridging ioBroker smart home objects with the modern, card-based Lovelace interface originally developed for Home Assistant.

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
    
    // Optional functions - will be automatically called by server.js if present
    async processMessage(ws, message) {
        // Handle WebSocket messages from frontend
        // Return true if message was handled
    }
    
    onStateChange(id, state, wss) {
        // Handle ioBroker state changes
        // Called when subscribed states change
    }
    
    onObjectChange(id, obj) {
        // Handle ioBroker object changes  
        // Called when subscribed objects change
    }
    
    removeSubscription(ws, subscription) {
        // Clean up WebSocket subscriptions
        // Called when client unsubscribes
    }
    
    augmentServices(services) {
        // Add custom services to Home Assistant services
        // Called during service registration
    }
    
    async processServiceCall(ws, data) {
        // Handle Home Assistant service calls
        // Return true if service call was handled
    }
}
```

### State Management
- Uses ioBroker's state system for persistence
- Entity states are automatically synchronized
- Support for both polling and push updates

## ioBroker Testing Framework

### Unit Testing
- Use Jest as the primary testing framework for ioBroker adapters
- Create tests for all adapter main functions and helper methods
- Test error handling scenarios and edge cases
- Mock external API calls and hardware dependencies
- For adapters connecting to APIs/devices not reachable by internet, provide example data files to allow testing of functionality without live connections
- Example test structure:
  ```javascript
  describe('AdapterName', () => {
    let adapter;
    
    beforeEach(() => {
      // Setup test adapter instance
    });
    
    test('should initialize correctly', () => {
      // Test adapter initialization
    });
  });
  ```

### Integration Testing

**IMPORTANT**: Use the official `@iobroker/testing` framework for all integration tests. This is the ONLY correct way to test ioBroker adapters.

**Official Documentation**: https://github.com/ioBroker/testing

#### Framework Structure
Integration tests MUST follow this exact pattern:

```javascript
const path = require('path');
const { tests } = require('@iobroker/testing');

// Define test coordinates or configuration
const TEST_COORDINATES = '52.520008,13.404954'; // Berlin
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// Use tests.integration() with defineAdditionalTests
tests.integration(path.join(__dirname, '..'), {
    defineAdditionalTests({ suite }) {
        suite('Test adapter with specific configuration', (getHarness) => {
            let harness;

            before(() => {
                harness = getHarness();
            });

            it('should configure and start adapter', function () {
                return new Promise(async (resolve, reject) => {
                    try {
                        harness = getHarness();
                        
                        // Get adapter object using promisified pattern
                        const obj = await new Promise((res, rej) => {
                            harness.objects.getObject('system.adapter.lovelace.0', (err, o) => {
                                if (err) return rej(err);
                                res(o);
                            });
                        });
                        
                        if (!obj) {
                            return reject(new Error('Adapter object not found'));
                        }

                        // Configure adapter properties
                        Object.assign(obj.native, {
                            // Add lovelace-specific configuration
                            port: 8099,
                            auth: false,
                            // Add other configuration as needed
                        });

                        // Set the updated configuration
                        harness.objects.setObject(obj._id, obj);

                        console.log('✅ Step 1: Configuration written, starting adapter...');
                        
                        // Start adapter and wait
                        await harness.startAdapterAndWait();
                        
                        console.log('✅ Step 2: Adapter started');

                        // Wait for adapter to process data
                        const waitMs = 15000;
                        await wait(waitMs);

                        console.log('🔍 Step 3: Checking states after adapter run...');
                        
                        // Get all states created by adapter
                        const stateIds = await harness.dbConnection.getStateIDs('lovelace.0.*');
                        
                        console.log(`📊 Found ${stateIds.length} states`);

                        if (stateIds.length > 0) {
                            console.log('✅ Adapter successfully created states');
                            
                            await harness.stopAdapter();
                            resolve(true);
                        } else {
                            console.log('❌ No states were created by the adapter');
                            reject(new Error('Adapter did not create any states'));
                        }
                    } catch (error) {
                        reject(error);
                    }
                });
            }).timeout(40000);
        });
    }
});
```

#### Testing Both Success AND Failure Scenarios

**IMPORTANT**: For every "it works" test, implement corresponding "it doesn't work and fails" tests. This ensures proper error handling and validates that your adapter fails gracefully when expected.

#### Key Integration Testing Rules

1. **NEVER test API URLs directly** - Let the adapter handle API calls
2. **ALWAYS use the harness** - `getHarness()` provides the testing environment  
3. **Configure via objects** - Use `harness.objects.setObject()` to set adapter configuration
4. **Start properly** - Use `harness.startAdapterAndWait()` to start the adapter
5. **Check states** - Use `harness.states.getState()` to verify results
6. **Use timeouts** - Allow time for async operations with appropriate timeouts
7. **Test real workflow** - Initialize → Configure → Start → Verify States

#### What NOT to Do
❌ Direct API testing: `axios.get('https://api.example.com')`
❌ Mock adapters: `new MockAdapter()`  
❌ Direct internet calls in tests
❌ Bypassing the harness system

#### What TO Do
✅ Use `@iobroker/testing` framework
✅ Configure via `harness.objects.setObject()`
✅ Start via `harness.startAdapterAndWait()`
✅ Test complete adapter lifecycle
✅ Verify states via `harness.states.getState()`
✅ Allow proper timeouts for async operations

## ioBroker Development Best Practices

### Dependencies and HTTP Clients
- **Preferred:** Use native `fetch` API (Node.js 20+ required for adapters; built-in since Node.js 18)
- **Avoid:** `axios` unless specific features are required (reduces bundle size)

Example with fetch:
```javascript
try {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  const data = await response.json();
} catch (error) {
  this.log.error(`API request failed: ${error.message}`);
}
```

### Error Handling Patterns
- Always catch and log errors appropriately
- Use adapter log levels (error, warn, info, debug)
- Provide meaningful, user-friendly error messages
- Handle network failures gracefully
- Implement retry mechanisms where appropriate
- Always clean up timers, intervals, and other resources in the `unload()` method

Example Error Handling:
```javascript
try {
  await this.connectToDevice();
} catch (error) {
  this.log.error(`Failed to connect to device: ${error.message}`);
  this.setState('info.connection', false, true);
  // Implement retry logic if needed
}
```

### Timer and Resource Cleanup:
```javascript
// In your adapter class
private connectionTimer?: NodeJS.Timeout;

async onReady() {
  this.connectionTimer = setInterval(() => {
    this.checkConnection();
  }, 30000);
}

onUnload(callback) {
  try {
    // Clean up timers and intervals
    if (this.connectionTimer) {
      clearInterval(this.connectionTimer);
      this.connectionTimer = undefined;
    }
    // Close connections, clean up resources
    callback();
  } catch (e) {
    callback();
  }
}
```

### README Update Standards

#### Required Sections
When updating README.md files, ensure these sections are present:

1. **Installation** - Clear npm/ioBroker admin installation steps
2. **Configuration** - Detailed configuration options with examples  
3. **Usage** - Practical examples and use cases
4. **Changelog** - Version history and changes (use "## **WORK IN PROGRESS**" section for ongoing changes following AlCalzone release-script standard)
5. **License** - License information (typically MIT for ioBroker adapters)
6. **Support** - Links to issues, discussions, and community support

#### Mandatory README Updates for PRs
For **every PR or new feature**, always add a user-friendly entry to README.md:

- Add entries under `## **WORK IN PROGRESS**` section before committing
- Use format: `* (author) **TYPE**: Description of user-visible change`
- Types: **NEW** (features), **FIXED** (bugs), **ENHANCED** (improvements), **TESTING** (test additions), **CI/CD** (automation)
- Focus on user impact, not technical implementation details
- Example: `* (copilot) **ENHANCED**: Added comprehensive testing patterns and development guidelines`

#### Changelog Management with AlCalzone Release-Script
Follow the [AlCalzone release-script](https://github.com/AlCalzone/release-script) standard:

```markdown
# Changelog

<!--
  Placeholder for the next version (at the beginning of the line):
  ## **WORK IN PROGRESS**
-->

## **WORK IN PROGRESS**

-   Did some changes
-   Did some more changes

## v0.1.0 (2023-01-01)
Initial release
```

### JSON-Config Admin Instructions

#### Configuration Schema
When creating admin configuration interfaces:

- Use JSON-Config format for modern ioBroker admin interfaces
- Provide clear labels and help text for all configuration options
- Include input validation and error messages
- Group related settings logically
- Example structure:
  ```json
  {
    "type": "panel",
    "items": {
      "host": {
        "type": "text",
        "label": "Host address", 
        "help": "IP address or hostname of the device"
      }
    }
  }
  ```

#### Admin Interface Guidelines
- Use consistent naming conventions
- Provide sensible default values
- Include validation for required fields
- Add tooltips for complex configuration options
- Ensure translations are available for all supported languages (minimum English and German)
- Write end-user friendly labels and descriptions, avoiding technical jargon where possible

### Code Style and Standards

- Follow JavaScript/TypeScript best practices
- Use async/await for asynchronous operations
- Implement proper resource cleanup in `unload()` method
- Use semantic versioning for adapter releases
- Include proper JSDoc comments for public methods

### Package Management
- Always use `npm` for dependency management in ioBroker adapters
- Keep dependencies minimal and focused
- Regularly update dependencies to latest stable versions
- Use `npm audit` to check for security vulnerabilities
- Before committing, ensure package.json and package-lock.json are in sync by running `npm install`

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