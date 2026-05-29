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

# Build TypeScript (output to build/)
npm run build

# Run all unit tests (lib/**/*.test.js + test/package.js)
npm test

# Run only JS unit tests (skip package test)
npm run test:unit

# Run TypeScript unit tests (src/**/*.test.ts)
npm run test:ts

# Run a single JS test file
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
type-detector result → Converter.convertAll() → ConverterSubclass.convert() → HA entity objects
                                               → legacyConverter(positional args) → HA entity objects
```

The entry point is `src/lib/converters/converter.ts` (compiled to `build/lib/converters/converter.js`), which `lib/server.js` requires. It has two dispatch tables:

- **`Converter.converters`** — TypeScript subclasses (`typeof Converter`), keyed by `Types.*`. These are called via `ConverterClass.convert(params)` using a `ConverterParameters` object.
- **`Converter.legacyConverters`** — plain JS functions from `lib/converters/*.js`, called with the old positional-argument signature `(id, control, friendlyName, room, func, obj, objects, forcedEntityId)`.

Each converter returns an array of entity objects with this shape:
```js
{
  entity_id: 'light.my_lamp',
  state: 'off',
  attributes: { friendly_name: '...', ... },
  context: {
    id: 'adapter.0.device.id',       // ioBroker object ID
    iobType: 'light',                // type-detector type string
    STATE: { setId: '...', getId: '...' }, // ioBroker state IDs for the main state
    ATTRIBUTES: [...],               // additional state→attribute mappings
    COMMANDS: [...],                 // service call handlers
  }
}
```

`lib/entities/utils.js` provides `processCommon()` (creates base entity structure) and `addID2entity()` (registers ioBroker state IDs into the singleton lookup caches).

### TypeScript converter class pattern

`src/lib/converters/converter.ts` defines:
- **`Converter`** — base class. `convertAll()` is the main entry point from server.js; it loops over type-detector results and dispatches to subclasses or legacy functions. `convert()` is the template method (calls `convertEntities()` then `_processEntities()`). `_processEntities()` handles indicator entities, duplicate entity_id detection, and pushing into `existingEntities`.
- **`BinarySensorConverter extends Converter`** — first migrated subclass, in `src/lib/converters/binary_sensor.ts`. Self-registers on `Converter.converters` at module load time for `Types.motion`, `.door`, `.window`, `.fireAlarm`.
- **`src/lib/converters/indicators.ts`** — indicator functions (`processBattery`, `connectivityIndicator`, `processError`, `processMaintenance`, `processWorking`) extracted here to avoid a circular dependency with `converter.ts`.

### Indicator entities

Every auto-detected device gets indicator binary_sensor entities appended automatically by `Converter._generateEntitiesFromIndicators()` — no converter needs to handle these explicitly. The indicators look for named states (`LOWBAT`, `UNREACH`/`OFFLINE`/`CONNECTED`, `ERROR`, `MAINTAIN`, `WORKING`) in the device's `controls.states` array.

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

### Build configuration
`.buildconfig.json` controls the TypeScript build via `build-adapter`:
- `typescriptOutDir: "build"` — compiled JS goes to `build/`
- `typescriptRaw.outbase: "src"` — preserves `lib/converters/` subdirectory structure inside `build/` (i.e. `src/lib/converters/foo.ts` → `build/lib/converters/foo.js`)

## Adding a new entity type

### TypeScript subclass approach (preferred for new converters)

1. Create `src/lib/converters/<type>.ts`, extend `Converter`, override `convertEntities()`.
2. At the bottom of the file, self-register: `Converter.converters[Types.xxx] = MyConverter;`
3. In `lib/server.js`, `require('../build/lib/converters/<type>')` so the registration runs at startup (after `converter` is already required).

### Legacy JS approach (for converters not yet migrated)

1. Create `lib/converters/<type>.js` with a `process<Type>(id, control, friendlyName, room, func, obj, objects, forcedEntityId)` function.
2. Register it in `src/lib/converters/converter.ts` in `Converter.legacyConverters`.

### Both approaches

3. Add service call handling: push objects into `entity.context.COMMANDS`. Each needs `setId` (ioBroker state to write) and `service` (HA service name); define `parseCommand` for the actual write logic.
4. Add attribute mappings: push objects into `entity.context.ATTRIBUTES`. Each needs `attribute` (HA attribute name), `getId` (ioBroker state to read), optional `setId` and `getParser`.
5. For user-configured (manual) entity mappings, handle alongside auto-detected ones. See `lib/converters/light.js` for the pattern.
6. Add test data JSON in `test/testData/` and integration tests in `test/integrationTests/`.
7. Add unit tests in a `*.test.js` (or `.test.ts`) file next to the source.

## Testing patterns

**JS unit tests** live next to source files as `*.test.js`. They use Mocha + Chai + Sinon. The `dataSingleton` is typically mocked/reset between tests.

**TS unit tests** live next to source files as `*.test.ts` under `src/`. Run with `npm run test:ts`. Node.js v22 requires `--no-experimental-strip-types` (already set in the test:ts script) to prevent the native TS loader from interfering with ts-node.

**Integration tests** in `test/integrationTests/` use `@iobroker/testing` harness which spins up a real in-process adapter. Test data objects are loaded from `test/testData/*.json`. Each integration test file exports `runTests(suite)`.

## TypeScript migration

The project is migrating from plain JS to TypeScript. New converters go under `src/lib/converters/` as subclasses of `Converter`. The compiled output goes to `build/lib/converters/`. Legacy JS converters remain in `lib/converters/` and are called via `Converter.legacyConverters`.

`tsconfig.build.json` has `allowJs: true` and `checkJs: true`, so it type-checks JS files that are transitively imported from TS. Pre-existing JS files in `lib/converters/` may have type errors — these are a known issue being resolved as files are migrated to TS.
