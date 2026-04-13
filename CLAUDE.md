# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

ioBroker.lovelace is an ioBroker adapter that exposes ioBroker devices to a Home Assistant Lovelace UI frontend. It translates ioBroker objects/states into Home Assistant entities, runs a WebSocket server that the Lovelace frontend connects to, and handles HA service calls (turn_on, turn_off, etc.) by writing back to ioBroker states.

## Commands

```bash
# Lint
npm run lint

# Type check (TypeScript)
npm run check

# Build TypeScript
npm run build

# Run unit tests (lib/**/*.test.js + test/package.js)
npm test

# Run only unit tests (skip package test)
npm run test:unit

# Run a single test file
npx mocha --require test/mocha.setup.js lib/converters/sensor.test.js

# Run integration tests (requires a real ioBroker dev-server setup)
npm run test:integration

# TypeScript tests with coverage
npm run coverage
```

## Architecture

### Entry point
`main.js` → `lib/server.js` (`WebServer` class). The adapter uses `@iobroker/adapter-core` for ioBroker lifecycle.

### Central shared state
`lib/dataSingleton.js` — a singleton object shared across all modules. Contains:
- `entities` — flat array of all active HA entities
- `iobID2entity` — maps ioBroker state IDs → entity (for fast state-change routing)
- `entityId2Entity` — maps HA entity_id → entity
- `adapter`, `log`, `lang`, `words` — shared adapter references

### Entity conversion pipeline
When the adapter starts, it uses `@iobroker/type-detector` to detect device types from ioBroker objects, then calls the appropriate converter:

```
type-detector result → src/lib/converters/Converter.ts → lib/converters/<type>.js → HA entity object
```

`Converter.ts` is the TypeScript entry point that maps detected types (e.g. `Types.light`, `Types.thermostat`) to converter functions. Each converter in `lib/converters/` returns an array of entity objects with this shape:
```js
{
  entity_id: 'light.my_lamp',
  state: 'off',
  attributes: { friendly_name: '...', ... },
  context: {
    id: 'adapter.0.device.id',   // ioBroker object ID
    type: 'light',
    STATE: { setId: '...', getId: '...' }, // ioBroker state IDs
    // other role-specific state mappings
  }
}
```

`lib/entities/utils.js` provides `processCommon()` (creates base entity structure) and `addID2entity()` (registers ioBroker state IDs into the singleton lookup caches).

### WebSocket protocol
The Lovelace frontend connects via WebSocket. `lib/server.js` (`WebServer`) handles:
- Auth handshake (token-based)
- Message dispatch: `subscribe_events`, `get_states`, `call_service`, `subscribe_entities`, registry queries, etc.
- State update events pushed to all clients on ioBroker state changes

### Modules (`lib/modules/`)
Each module is a class instantiated with `{ adapter, sendResponse, sendUpdate }` options:
- `EntityRegistry` — stores per-entity overrides (custom entity_id, icon) in ioBroker object DB
- `DashboardModule` — stores/retrieves Lovelace dashboard YAML configs
- `AreaRegistry`, `DeviceRegistryModule` — room/device grouping
- `HistoryModule`, `LogbookModule`, `StatisticsRecorder` — history data
- `PersistentNotifications`, `TodoModule`, `PersonModule`, `ConversationModule` — HA feature parity
- `BrowserModModule` — browser_mod integration

### Frontend
`hass_frontend/` contains a pre-built fork of Home Assistant's polymer frontend (built from a separate repo via `buildFrontend/build.sh`). It is **not built in this repo** — it ships as pre-built static files.

## Adding a new entity type

1. Create `lib/converters/<type>.js` with a `process<Type>` function that returns an array of entity objects
2. Register it in `src/lib/converters/Converter.ts` in the `converter` map
3. Add handling of service calls in as object in the `entity.context.COMMANDS` array. Each command needs to have a `setId` (ioBroker state to write to) and `service` (HA service name). The WebSocket server will route incoming service calls to the correct entity based on `entity_id` and call the appropriate command handler which should be defined as function in the object named `parseCommand`.
4. Entities can have attributes that map to ioBroker states. For example, a thermostat entity might have `current_temperature` and `target_temperature` attributes that map to different ioBroker state IDs. These should be defined in the `entity.context.ATTRIBUTES` object of the entity. The WebSocket server will automatically update these attributes when the corresponding ioBroker states change. They can define a `getParser` to parse ioBroker values (or modify the entity state because of attribute changes). See `lib/converters/thermostat.js` for an example of a converter that defines attributes with parsers. They should have a `getId` (ioBroker state to read from) and might have a `setId` if the attribute is writable from HA. They need to have a member `attribute` with the name of the attribute they set.
5. It is possible for the user to manually configure state -> entity mappings. Those should be handled by the same code as the auto-detected ones, as much as possible. See `lib/converters/light.js` for an example of a converter that handles both auto-detected and user-configured entities.
6. The functions in `lib/server.js` and the generic converters in `lib/converters/genericConverter.js` should only be used, if the service call or conversion is used by multiple entities.
7. Add test data JSON in `test/testData/` and integration tests in `test/integrationTests/`
8. Add unit tests for functions in a `*.test.js` file next to the source file. For example, if you add a new converter `lib/converters/mytype.js`, you should add unit tests in `lib/converters/mytype.test.js`.

## Testing patterns

**Unit tests** live next to source files as `*.test.js` (e.g. `lib/converters/switch.test.js`). They use Mocha + Chai + Sinon. The `dataSingleton` is typically mocked/reset between tests.

**Integration tests** in `test/integrationTests/` use `@iobroker/testing` harness which spins up a real in-process adapter. Test data objects are loaded from `test/testData/*.json`. Each integration test file exports `runTests(suite)`.

## TypeScript migration

The project is in transition from plain JS to TypeScript. New code should be written in TypeScript under `src/`. The compiled output goes to `build/`. The entry points in `lib/` are still plain JS; `src/lib/converters/Converter.ts` imports from `lib/` converters using CommonJS interop.
