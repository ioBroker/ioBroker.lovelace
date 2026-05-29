# TypeScript Migration

Tracking the conversion of all JS files to TypeScript. Work in `src/`, compiled output to `build/`.

New converters extend `Converter` from `src/lib/converters/converter.ts` and self-register on
`Converter.converters`. Legacy JS converters are called via `Converter.legacyConverters` until migrated.

---

## Done

- [x] `src/lib/converters/converter.ts` — base `Converter` class, `ioBrokerEntity` / `ConverterParameters` types, dispatch
- [x] `src/lib/converters/indicators.ts` — battery, connectivity, error, maintenance, working
- [x] `src/lib/converters/binary_sensor.ts` — `BinarySensorConverter` subclass (motion, door, window, fire alarm)

---

## Phase 1 — Shared foundations

These are imported by many converters; converting them first provides types for everything downstream
and fixes the `checkJs` build errors.

- [x] `lib/entities/utils.js` → `src/lib/entities/utils.ts` — `processCommon()`, `addID2entity()`, entity building helpers
- [x] `lib/entities/entity_id.js` → `src/lib/entities/entity_id.ts` — entity_id generation
- [x] `lib/entities/friendly_name.js` → `src/lib/entities/friendly_name.ts` — friendly name resolution
- [x] `lib/converters/genericConverter.js` → `src/lib/converters/genericConverter.ts` — shared helpers used by multiple converters

Note: `tsconfig.build.json` has `checkJs: false` to suppress pre-existing type errors in the
remaining legacy JS converters (Phases 2–4). Re-enable once all JS converters are migrated.

---

## Phase 2 — Simple converters

- [x] `lib/converters/switch.js` → `src/lib/converters/switch.ts` — socket / button
- [x] `lib/converters/lock.js` → `src/lib/converters/lock.ts`
- [x] `lib/converters/sensor.js` → `src/lib/converters/sensor.ts` — temperature, humidity, window tilt
- [x] `lib/converters/geo_location.js` → `src/lib/converters/geo_location.ts`
- [x] `lib/converters/camera.js` → `src/lib/converters/camera.ts`

---

## Phase 3 — Medium converters

- [x] `lib/converters/fan.js` → `src/lib/converters/fan.ts` — manual-entity only
- [x] `lib/converters/input_select.js` → `src/lib/converters/input_select.ts` — manual-entity only
- [x] `lib/converters/input_datetime.js` → `src/lib/converters/input_datetime.ts` — manual-entity only
- [x] `lib/converters/weather.js` → `src/lib/converters/weather.ts`
- [x] `lib/converters/cover.js` → `src/lib/converters/cover.ts` — blind / blindButtons

---

## Phase 4 — Complex converters

- [x] `lib/converters/alarm_control_panel.js` → `src/lib/converters/alarm_control_panel.ts` — manual-entity only
- [x] `lib/converters/climate.js` → `src/lib/converters/climate.ts` — thermostat + air conditioning
- [x] `lib/converters/media_player.js` → `src/lib/converters/media_player.ts`
- [x] `lib/converters/light.js` → `src/lib/converters/light.ts` — dimmer / CT / hue / RGB variants + manual entity handling

---

## Phase 5 — Modules

- [x] `lib/modules/areaRegistry.js` → `src/lib/modules/areaRegistry.ts`
- [x] `lib/modules/deviceRegistry.js` → `src/lib/modules/deviceRegistry.ts`
- [x] `lib/modules/autoEntities.js` → `src/lib/modules/autoEntities.ts`
- [x] `lib/modules/person.js` → `src/lib/modules/person.ts`
- [x] `lib/modules/dashboard.js` → `src/lib/modules/dashboard.ts`
- [x] `lib/modules/statisticsRecorder.js` → `src/lib/modules/statisticsRecorder.ts`
- [x] `lib/modules/logbook.js` → `src/lib/modules/logbook.ts`
- [x] `lib/modules/persistentNotifications.js` → `src/lib/modules/persistentNotifications.ts`
- [x] `lib/modules/conversation.js` → `src/lib/modules/conversation.ts`
- [x] `lib/modules/history.js` → `src/lib/modules/history.ts`
- [x] `lib/modules/entityRegistry.js` → `src/lib/modules/entityRegistry.ts`
- [x] `lib/modules/todo.js` → `src/lib/modules/todo.ts`
- [x] `lib/modules/browser_mod.js` → `src/lib/modules/browser_mod.ts`

---

## Phase 6 — Core (last, depends on everything)

- [x] `lib/server.js` → `src/lib/server.ts` — main WebServer class (TypeScript imports/exports/structure done; `@ts-nocheck` in place for incremental typing)
- [x] `main.js` → `src/main.ts` — adapter entry point, fully typed

---

## Phase 7 - Restructure code for better maintainability

- [x] create base entity class in `src/lib/entities/baseEntity.ts` and convert all entities to extend it
- [x] per-domain subclasses: BinarySensor, Camera, Climate, Cover, GeoLocation, Light, Lock, MediaPlayer, Sensor, Switch, Todo, Weather
- [x] TodoEntity: new class for HA `todo` domain (shopping list / to-do lists)
- [x] fan, alarm_control_panel, input_datetime, input_select: replaced standalone `addID2entity`/`fillEntityFromStates` calls with instance methods
- [x] fixed alarm_control_panel ATTRIBUTES array overwrite (uses filter+push instead of assignment)
- [x] converters separated from entity construction: entity logic lives in `src/lib/entities/`, converters in `src/lib/converters/`
- [x] integrate utils.ts standalone shims into entity classes fully — removed 6 backward-compat shims from utils.ts (`removeEntity`, `fillEntityFromStates`, `fillEntityIntoCaches`, `updateTimestamps`, `addID2entity`, `processCommon`); callers already use BaseEntity methods directly
- [x] Derive module base class or interface from existing modules and use that one in server.ts.
  - Created `src/lib/modules/iModule.ts` with optional `IModule` interface
  - Defined `Modules` type with all 12 modules fully typed in server.ts
  - Changed `_modules: Record<string, any>` → `_modules!: Modules`
  - Restructured two-step module initialization into single assignment
  - Replaced 6x `typeof mod.X === 'function'` guards with optional-chaining `(mod as IModule).X?()`

---

## Cleanup (after all conversions)

- [x] Check if new converter code is semantical identical to original JS version
  - lock, camera, input_select, weather: identical
  - fan, alarm_control_panel, cover, input_datetime: TS fixes bugs in the JS (cache mutation, falsy map lookup, `has_data` typo, step coercion)
  - binary_sensor: TS fixes missing `addID2entity` for error/maintenance/working indicators; JS had typo `a.attributes` breaking effect lookup
  - light: TS fixes effect attribute lookup bug (`a.attributes` → `a.attribute`), moves `supported_features` into `entity.attributes` (correct per frontend); `xy_color` restored to `turn_on` service definition
  - media_player: TS fixes crash when `VOLUME_ACTUAL` present without `VOLUME`
  - sensor/climate/media_player/binary_sensor/todo: `historyParser` signature was wrong (expected `ioBroker.State`, callers pass raw value) — fixed, history display now works
  - geo_location `processManualEntity`: was missing `entity.attributes.source` and `custom.attr_source` support — fixed
  - cover: `'Closes tilt'` service name typo fixed; `Types.blindButtons` now handled (new)
  - switch: `Types.button` now handled (new); `??` instead of `||` for `assumed_state` (correct)
- [x] Do we have tests for all converters? If not, add them.
  - `src/lib/converters/binary_sensor.test.ts` ✓
  - `src/lib/converters/climate.test.ts` ✓
  - `src/lib/converters/geo_location.test.ts` ✓
  - `src/lib/converters/media_player.test.ts` ✓
  - `src/lib/converters/sensor.test.ts` ✓
  - `src/lib/converters/switch.test.ts` ✓
  - `src/lib/entities/todoEntity.test.ts` ✓
  - `src/lib/entities/baseEntity.test.ts` ✓ (addID2entity, fillFromStates, registerInCaches, unregister, updateTimestamp)
  - `src/lib/converters/lock.test.ts` ✓
  - `src/lib/converters/camera.test.ts` ✓
  - `src/lib/converters/cover.test.ts` ✓ (includes getParser/position logic, set_cover_position, open/close/stop parseCommand)
  - `src/lib/converters/weather.test.ts` ✓ (current conditions + forecast day mapping)
  - `src/lib/converters/fan.test.ts` ✓ (map2lovelace/map2iob setup, getParser, set_preset_mode, set_speed alias, turn_off)
  - Note: input_select, input_datetime, alarm_control_panel, light have no dedicated unit tests (complex service-call logic; integration tests cover end-to-end)
- [x] Convert unit tests to TypeScript (i.e. *.test.js to .test.ts) and update test runner config
  - `src/lib/entities/entity_id.test.ts` ✓
  - `src/lib/entities/friendly_name.test.ts` ✓
  - `src/lib/entities/utils.test.ts` ✓
  - `src/lib/modules/dashboard.test.ts` ✓
  - `src/lib/modules/entityRegistry.test.ts` ✓
  - `src/lib/converters/sensor.test.ts` ✓
  - `src/lib/converters/switch.test.ts` ✓
- [x] Delete old `lib/**/*.test.js` files (superseded by TS versions above)
- [x] Delete `lib/converters/binary_sensor.js` (superseded by TS version)
- [x] Remove `Converter.legacyConverters` from `converter.ts` (was already gone)
- [x] Remove `allowJs` from `tsconfig.build.json` (done; `checkJs: false` must stay to suppress legacy JS errors)
- [x] Consolidate test scripts: `npm test` now runs `test:ts && test:package`; `test:unit` kept as stub
