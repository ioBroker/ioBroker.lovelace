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
- [ ] integrate utils.ts standalone shims into entity classes fully (blocked by server.ts migration below)

---

## Cleanup (after all conversions)

- [ ] Check if new converter code is semantical identical to original JS version
- [ ] Do we have tests for all converters? If not, add them.
- [ ] Convert unit tests to TypeScript (i.e. *.test.js to .test.ts) and update test runner config
- [ ] Delete `lib/converters/binary_sensor.js` (superseded by TS version)
- [ ] Remove `Converter.legacyConverters` from `converter.ts`
- [ ] Remove `allowJs` / `checkJs` from `tsconfig.build.json`
- [ ] Consolidate test scripts (`test:unit` + `test:ts` → single runner)
