# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

ioBroker.lovelace is an ioBroker adapter that exposes ioBroker devices to a Home Assistant Lovelace UI frontend. It translates ioBroker objects/states into Home Assistant entities, runs a WebSocket server that the Lovelace frontend connects to, and handles HA service calls (turn_on, turn_off, etc.) by writing back to ioBroker states.

## Commands

```bash
# Lint
npm run lint

# Type check (TypeScript, no emit)
npm run check

# Build TypeScript (src/ → build/) via build-adapter
npm run build

# Unit tests (TypeScript: src/**/*.test.ts via mocha + ts-node)
npm run test:ts        # npm run test:unit is an alias for this

# Full test = unit tests + package validation
npm test

# Run a single unit test file
npx mocha --require test/ts-env-setup.js --require ts-node/register --require test/mocha.setup.js src/lib/converters/sensor.test.ts

# Integration tests (@iobroker/testing harness; several minutes; no dev-server needed)
npm run test:integration

# Coverage (nyc over the unit tests)
npm run coverage
```

The codebase finished migrating to TypeScript: there are no more `lib/**/*.test.js` unit tests, and `test:unit` is now just an alias for `test:ts`. Integration tests spin up a real in-process adapter, take several minutes, and do **not** need a separate dev-server.

## Architecture

### Source layout / TypeScript migration

The migration from plain JS to TypeScript is essentially complete. Source lives under `src/`; `build-adapter ts` compiles it to `build/`, preserving the subdirectory structure (`src/lib/converters/foo.ts` → `build/lib/converters/foo.js`).

Only four legacy items remain under `lib/`:
- `lib/dataSingleton.js` — shared singleton (see below)
- `lib/services.js` — base HA service definitions (seed for the service map)
- `lib/bindings.js`
- `lib/translations/` — word translations

Everything else — converters, entities, modules — is TypeScript under `src/lib/`. The old `lib/converters/`, `lib/entities/`, and `lib/modules/` JS directories are gone.

### Entry point

`main.js` → `build/main.js` (compiled from `src/main.ts`) → `WebServer` class in `build/lib/server.js` (compiled from `src/lib/server.ts`). The adapter uses `@iobroker/adapter-core` for ioBroker lifecycle.

`src/lib/server.ts` is the central file (~3150 lines): WebSocket server, HTTP routes, module wiring, entity read/convert orchestration, and state-change routing.

### Central shared state

`lib/dataSingleton.js` — a module-singleton shared across converters, entities, and server. Contains:
- `entities` — flat array of all active HA entities
- `iobID2entity` — maps ioBroker state IDs → entity (fast state-change routing)
- `entityId2Entity` — maps HA entity_id → entity
- `adapter`, `server`, `log`, `lang`, `words`, `entityIconUrls`
- `services` — the per-domain HA service map. Seeded from `lib/services.js`; converters add their domain at module-load time (e.g. `adapterData.services.fan = {...}`), and modules further augment it via `augmentServices()` during init.

It is commonly aliased as `entityData` (in `server.ts`) or `adapterData` (in converters) via `require('../../lib/dataSingleton')`.

**Caveat (compact mode):** because it is a module-level export, all adapter instances running in one Node process (ioBroker "compact mode") share the same object. Known limitation; keep this in mind before adding per-instance state here.

### Entity conversion pipeline

On start the adapter runs `@iobroker/type-detector` over the ioBroker objects, then converts each detected device:

```
type-detector PatternControl[] → Converter.convertAll(controls, params)
    → Converter.converters[control.type].convert(params)   // TS subclass, keyed by Types.*
        → convertEntities()  (subclass)  → BaseEntity[]
        → _processEntities() (adds indicators, resolves duplicate entity_ids, pushes to entities)
```

`Converter.convertAll()` dispatches **only** to TypeScript subclasses registered in `Converter.converters` (keyed by `Types.*`). If no converter is registered for a type, it logs `... is not yet supported` and skips. The old `Converter.legacyConverters` table and the positional-argument JS converter signature have been **removed** — every converter is now a `Converter` subclass under `src/lib/converters/`.

Each entity has the shape:
```js
{
  entity_id: 'light.my_lamp',
  state: 'off',
  attributes: { friendly_name: '...', ... },
  context: {
    id: 'adapter.0.device.id',  // ioBroker object ID
    iobType: 'light',           // type-detector type string
    STATE: { setId, getId, ... },
    ATTRIBUTES: [...],          // additional state→attribute mappings
    COMMANDS: [...],            // service-call handlers
  }
}
```

Internal entities (with their `context`) are **not** serialized to the frontend verbatim — see "get_states shape" below.

### TypeScript converter / entity classes

`src/lib/converters/converter.ts` defines the `Converter` base class:
- `static converters: Partial<Record<Types, typeof Converter>>` — the dispatch table.
- `convertAll()` — entry point from `server.ts`.
- `convert()` — template method: calls `convertEntities()` then `_processEntities()`.
- `convertEntities()` — overridden per type to build the entities.
- `processManualEntity()` — static; overridden per type to build user-configured (manual) entity mappings. `server.ts` calls it for manually-mapped objects (converters that support it also `export function processManualEntity`).
- `_generateEntitiesFromIndicators()` — appends indicator binary_sensors.

Each converter file self-registers at the bottom, e.g. `Converter.converters[Types.light] = LightConverter;`. Registration runs because `server.ts` imports every converter module near the top (either `import * as converterX from './converters/x'` when it needs the exported `processManualEntity`, or a bare `import './converters/x'` purely for the side-effect registration).

`src/lib/converters/indicators.ts` — indicator functions (`processBattery`, `connectivityIndicator`, `processError`, `processMaintenance`, `processWorking`), extracted to avoid a circular dependency with `converter.ts`.

`src/lib/entities/` — `BaseEntity` (in `baseEntity.ts`) plus per-type entity classes (`lightEntity`, `coverEntity`, `climateEntity`, …). `utils.ts` provides `processCommon()` (base entity structure) and `addID2entity()` (registers ioBroker state IDs into the singleton lookup caches). `entity_id.ts` / `friendly_name.ts` build ids and names.

### Indicator entities

Every auto-detected device gets indicator binary_sensor entities appended automatically by `Converter._generateEntitiesFromIndicators()` — no converter handles these explicitly. The indicators look for named states (`LOWBAT`, `UNREACH`/`OFFLINE`/`CONNECTED`, `ERROR`, `MAINTAIN`, `WORKING`) in the device's `controls.states` array.

### Modules (`src/lib/modules/`)

`server.ts` builds a `this._modules` object in its constructor. Each module is a class constructed with an options bag of `{ adapter, ... }` plus the callbacks it needs — `sendResponse`, `sendUpdate`, `entityData`, `server`, or purpose-specific injected callbacks (e.g. `ImageModule` gets `resolveUser`, `TemplateModule` gets `subscribeState`, so shared auth/subscription state stays in the server). Modules implement the `IModule` interface (`src/lib/modules/iModule.ts`): optional `init()`, `processMessage(ws, message): boolean`, `processServiceCall()`, `onStateChange()`, `augmentServices()`, etc.

WS dispatch in `server.ts` is an `if / else if` chain on `message.type`; many branches delegate to a module's `processMessage()` (which returns a boolean meaning "handled"). Unmatched messages fall through to a loop that offers the message to every module's `processMessage()`; if none handle it, the server replies `unknown_command`.

Modules:
- `EntityRegistry` — per-entity overrides (custom entity_id, icon)
- `DashboardModule` — Lovelace dashboard configs
- `AreaRegistryModule`, `DeviceRegistryModule` — area/device grouping (devices group by `context.deviceId`)
- `HistoryModule`, `LogbookModule`, `StatisticsRecorderModule` — history data
- `PersistentNotifications`, `TodoModule`, `PersonModule`, `ConversationModule` — HA feature parity
- `EnergyModule` — energy-dashboard prefs
- `BrowserModModule` — browser_mod integration (target version `2.13.5`; own WS sub-protocol: `connect`/`register`/`settings`/`update`/`store_session`/`delete_session`/`recall_id`/`unregister`, plus services routed through `call_service`)
- `UserDataModule` — `frontend/{subscribe,get,set}_user_data` and the `_system_data` trio
- `ThemesModule` — theme list/selection (theme names come from the control's `common.states`)
- `TemplateModule` — `render_template`; subscribes ioBroker states via the injected `subscribeState` callback
- `CompatModule` — stub/registry replies the newer frontend expects: `repairs/list_issues`, `config/floor_registry/list`, `config/label_registry/list`, `config_entries/*`, `manifest/list`
- `SearchModule` — `search/related`, `entity/source`
- `ImageModule` — image/camera proxy endpoints; auth via the injected `resolveUser` callback
- `storage.ts` — not a class; storage-folder helpers (`STORAGE_PREFIX`, `STORAGE_OBJECTS`, `migrateStorageObjects()`)

### Internal storage objects (v6.0.0 breaking change)

Persistent module storage moved out of the adapter root into a `storage` folder. `src/lib/modules/storage.ts` defines `STORAGE_PREFIX = 'storage.'` and `STORAGE_OBJECTS = ['entityRegistry','areaRegistry','energyPrefs','userData','dashboardStorage']`. `migrateStorageObjects(adapter)` runs on every start: it moves each legacy root object (e.g. `entityRegistry`) to `storage.entityRegistry` — preserving `native`, creating the new object if the io-package objects weren't applied yet so no data is lost — then deletes the legacy object. Idempotent.

**Init ordering matters:** `migrateStorageObjects()` must finish before `entityRegistry.init()`, which must finish before `_readAllEntities()`, because entity conversion reads reserved entity ids from the registry. `server.ts` chains these as `storageReady → entityRegistry.init() → _readAllEntities()`.

### WebSocket protocol & the newer frontend

`hass_frontend/` is a **pre-built fork** of Home Assistant's polymer frontend (current `hass_frontend/version.txt` = `20260527.1`, our branch `iob202605`), built from a separate repo (`buildFrontend/build.sh`) — it is not built in this repo. **Prefer backend (this repo) fixes over patching the fork**, so the fork can be re-synced from upstream periodically.

Beyond the classic messages (`auth`, `subscribe_events`, `get_states`, `get_config`, `get_services`, `get_panels`, `call_service`, `subscribe_entities`, …), the newer frontend requires these handlers (added across `server.ts` and the modules):
- `frontend/subscribe_user_data` / `get_user_data` / `set_user_data` and the `_system_data` trio (`UserDataModule`). `frontend/subscribe_user_data` for `core` must return `{ default_panel: 'lovelace' }`, otherwise initial load crashes in `getDefaultPanel()`.
- `frontend/subscribe_system_data`
- `search/related`, `entity/source` (`SearchModule`)
- `config_entries/*`, `repairs/list_issues`, `config/floor_registry/list`, `config/label_registry/list`, `manifest/list` (`CompatModule`)
- `render_template` (`TemplateModule`)
- `brands/access_token`, `labs/subscribe`
- `config/entity_registry/list` must return a **bare array** (the frontend does `.filter` on it).
- `lovelace/config` with `url_path: 'lovelace'` is the **main** dashboard config — treat `'lovelace'` like `null`, not as a separately-stored dashboard, or the dashboard renders empty.

#### get_states shape
The WS `get_states` handler returns `_getFrontendStates()` — a clean array of HA `HassEntity` objects `{ entity_id, state, attributes, last_changed, last_updated, context: { id, parent_id: null, user_id: null } }`. It deliberately does **not** serialize the internal entities (their `context.STATE`/`ATTRIBUTES`/`COMMANDS` carry adapter internals and could introduce circular references). `getHassStates()` (returns the raw `entityData.entities`) is kept for internal callers only — `main.ts` browse / duplicate-id checks and the integration-test harness — not for the wire.

#### Sidebar panels
`src/lib/panels.ts` defines the fixed sidebar panels (`lovelace`/`config`/`profile`/`browser-mod`). The lovelace panel uses `title: 'states'`, `icon: 'mdi:view-dashboard'`. (The former `lib/panels.js` was dead code and was removed — edit `src/lib/panels.ts`.)

### Build configuration
`.buildconfig.json` controls the TypeScript build via `build-adapter`:
- `typescriptOutDir: "build"` — compiled JS goes to `build/`
- `typescriptRaw.outbase: "src"` — preserves subdirectory structure (`src/lib/.../foo.ts` → `build/lib/.../foo.js`)

## Adding a new entity type

1. Create `src/lib/converters/<type>.ts`, extend `Converter`, override `convertEntities()` (and `processManualEntity()` if user-configured mappings are supported).
2. Self-register at the bottom: `Converter.converters[Types.xxx] = MyConverter;`
3. Add an `import` for the file in `src/lib/server.ts` (bare `import './converters/<type>';` for side-effect registration, or `import * as ...` if you need its exported `processManualEntity`) so registration runs at startup.
4. Service calls: push to `entity.context.COMMANDS` — each needs `service` (HA service name) and a `parseCommand` (does the ioBroker write); `setId` optional on the command.
5. Attribute mappings: push to `entity.context.ATTRIBUTES` — each needs `attribute` (HA name), `getId`, optional `setId`/`getParser`.
6. If the domain exposes HA services, register them at module load: `adapterData.services.<domain> = { ... }`.
7. Add test data JSON in `test/testData/` and an integration test in `test/integrationTests/`.
8. Add a unit test as `*.test.ts` next to the source.

## Testing patterns

**Unit tests** are TypeScript (`src/**/*.test.ts`), run via `npm run test:ts` (= `npm run test:unit`) using mocha + ts-node + Chai + Sinon. `test/ts-env-setup.js` and `test/mocha.setup.js` are required hooks. `dataSingleton` is typically reset/mocked between tests. Run one file with the `npx mocha --require ... src/lib/.../x.test.ts` form shown above.

**Integration tests** in `test/integration` (objects loaded from `test/testData/*.json`) use the `@iobroker/testing` harness, which spins up a real in-process adapter. They take several minutes and need no separate dev-server — run `npm run test:integration`.

After making changes, run lint + unit + integration: `npm run lint`, `npm run test:unit`, `npm run test:integration`.
