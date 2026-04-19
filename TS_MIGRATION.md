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

- [ ] `lib/entities/utils.js` — `processCommon()`, `addID2entity()`, entity building helpers
- [ ] `lib/entities/entity_id.js` — entity_id generation
- [ ] `lib/entities/friendly_name.js` — friendly name resolution
- [ ] `lib/converters/genericConverter.js` — shared helpers used by multiple converters

---

## Phase 2 — Simple converters

- [ ] `lib/converters/switch.js` — socket / button
- [ ] `lib/converters/lock.js`
- [ ] `lib/converters/sensor.js` — temperature, humidity, window tilt
- [ ] `lib/converters/geo_location.js`
- [ ] `lib/converters/camera.js`

---

## Phase 3 — Medium converters

- [ ] `lib/converters/fan.js`
- [ ] `lib/converters/input_select.js`
- [ ] `lib/converters/input_datetime.js`
- [ ] `lib/converters/weather.js`
- [ ] `lib/converters/cover.js` — blind / blindButtons

---

## Phase 4 — Complex converters

- [ ] `lib/converters/alarm_control_panel.js`
- [ ] `lib/converters/climate.js` — thermostat + air conditioning
- [ ] `lib/converters/media_player.js`
- [ ] `lib/converters/light.js` — dimmer / CT / hue / RGB variants + manual entity handling

---

## Phase 5 — Modules

- [ ] `lib/modules/areaRegistry.js`
- [ ] `lib/modules/deviceRegistry.js`
- [ ] `lib/modules/autoEntities.js`
- [ ] `lib/modules/person.js`
- [ ] `lib/modules/dashboard.js`
- [ ] `lib/modules/statisticsRecorder.js`
- [ ] `lib/modules/logbook.js`
- [ ] `lib/modules/persistentNotifications.js`
- [ ] `lib/modules/conversation.js`
- [ ] `lib/modules/history.js`
- [ ] `lib/modules/entityRegistry.js`
- [ ] `lib/modules/todo.js`
- [ ] `lib/modules/browser_mod.js`

---

## Phase 6 — Core (last, depends on everything)

- [ ] `lib/server.js`
- [ ] `main.js`

---

## Cleanup (after all conversions)

- [ ] Delete `lib/converters/binary_sensor.js` (superseded by TS version)
- [ ] Remove `Converter.legacyConverters` from `converter.ts`
- [ ] Remove `allowJs` / `checkJs` from `tsconfig.build.json`
- [ ] Consolidate test scripts (`test:unit` + `test:ts` → single runner)
