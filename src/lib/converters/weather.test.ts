import { expect } from 'chai';
import { Types } from '@iobroker/type-detector';
import type { PatternControl } from '@iobroker/type-detector';
import { WeatherEntity } from '../entities/weatherEntity';
import type { ConverterParameters } from './converter';

const DEVICE_ID = 'test.weather_device';
const ICON_ID = `${DEVICE_ID}.icon`;
const TEMP_ID = `${DEVICE_ID}.temp`;
const TEMP_MAX_ID = `${DEVICE_ID}.temp_max`;
const WIND_ID = `${DEVICE_ID}.wind_speed`;
const HUM_ID = `${DEVICE_ID}.humidity`;
// Forecast: day 0 uses bare names (postFix=''), day 1 uses suffix '1'
// ICON (bare, no suffix) → forecast.0.condition when found in the forecast loop
// TEMP_MAX (bare)        → forecast.0.temperature

function makeObj(id: string): ioBroker.Object {
    return {
        _id: id,
        type: 'state',
        common: { name: id, role: '', read: true, write: false, type: 'string' },
        native: {},
    } as unknown as ioBroker.Object;
}

function makeParameters(
    states: Array<{ id?: string; name: string }>,
    overrides: Partial<ConverterParameters> = {},
): ConverterParameters {
    const objects: Record<string, ioBroker.Object> = { [DEVICE_ID]: makeObj(DEVICE_ID) };
    for (const s of states) {
        if (s.id) {
            objects[s.id] = makeObj(s.id);
        }
    }
    return {
        id: DEVICE_ID,
        controls: { states, type: Types.weatherForecast } as unknown as PatternControl,
        friendlyName: 'Test Weather',
        room: undefined,
        func: undefined,
        objects,
        existingEntities: [],
        adapter: { log: { debug: () => {}, warn: () => {} } } as unknown as ioBroker.Adapter,
        entityRegistry: { getEntityId: () => undefined, storeEntityId: () => {} },
        ...overrides,
    };
}

describe('converters/weather', function () {
    describe('ICON state', function () {
        it('sets STATE.getId to ICON state id', function () {
            const params = makeParameters([{ id: ICON_ID, name: 'ICON' }]);
            const entity = new WeatherEntity(params);
            expect(entity.context.STATE.getId).to.equal(ICON_ID);
        });

        it('registers ICON id in iobIds', function () {
            const params = makeParameters([{ id: ICON_ID, name: 'ICON' }]);
            const entity = new WeatherEntity(params);
            expect(entity.iobIds).to.include(ICON_ID);
        });

        it('STATE.getId is null when no ICON state', function () {
            const params = makeParameters([]);
            const entity = new WeatherEntity(params);
            expect(entity.context.STATE.getId).to.be.null;
        });
    });

    describe('TEMP state', function () {
        it('ATTRIBUTES has temperature entry with TEMP_ID', function () {
            const params = makeParameters([{ id: TEMP_ID, name: 'TEMP' }]);
            const entity = new WeatherEntity(params);
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'temperature');
            expect(attr).to.exist;
            expect(attr!.getId).to.equal(TEMP_ID);
        });

        it('registers TEMP id in iobIds', function () {
            const params = makeParameters([{ id: TEMP_ID, name: 'TEMP' }]);
            const entity = new WeatherEntity(params);
            expect(entity.iobIds).to.include(TEMP_ID);
        });
    });

    describe('TEMP only (no TEMP_MAX) uses TEMP for temperature', function () {
        it('sets temperature attribute from TEMP when TEMP_MAX is absent', function () {
            const params = makeParameters([{ id: TEMP_ID, name: 'TEMP' }]);
            const entity = new WeatherEntity(params);
            const tempAttrs = entity.context.ATTRIBUTES.filter(a => a.attribute === 'temperature');
            expect(tempAttrs).to.have.lengthOf(1);
            expect(tempAttrs[0].getId).to.equal(TEMP_ID);
        });
    });

    describe('TEMP_MAX without TEMP falls back to TEMP_MAX for temperature', function () {
        it('sets temperature attribute from TEMP_MAX when TEMP is absent', function () {
            const params = makeParameters([{ id: TEMP_MAX_ID, name: 'TEMP_MAX' }]);
            const entity = new WeatherEntity(params);
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'temperature');
            expect(attr).to.exist;
            expect(attr!.getId).to.equal(TEMP_MAX_ID);
        });
    });

    describe('TEMP overrides TEMP_MAX for current temperature', function () {
        it('uses TEMP (not TEMP_MAX) when both present', function () {
            const params = makeParameters([
                { id: TEMP_ID, name: 'TEMP' },
                { id: TEMP_MAX_ID, name: 'TEMP_MAX' },
            ]);
            const entity = new WeatherEntity(params);
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'temperature');
            expect(attr).to.exist;
            expect(attr!.getId).to.equal(TEMP_ID);
        });
    });

    describe('WIND_SPEED state', function () {
        it('ATTRIBUTES has wind_speed entry with WIND_ID', function () {
            const params = makeParameters([{ id: WIND_ID, name: 'WIND_SPEED' }]);
            const entity = new WeatherEntity(params);
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'wind_speed');
            expect(attr).to.exist;
            expect(attr!.getId).to.equal(WIND_ID);
        });
    });

    describe('HUMIDITY state', function () {
        it('ATTRIBUTES has humidity entry with HUM_ID', function () {
            const params = makeParameters([{ id: HUM_ID, name: 'HUMIDITY' }]);
            const entity = new WeatherEntity(params);
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'humidity');
            expect(attr).to.exist;
            expect(attr!.getId).to.equal(HUM_ID);
        });

        it('registers HUM_ID in iobIds', function () {
            const params = makeParameters([{ id: HUM_ID, name: 'HUMIDITY' }]);
            const entity = new WeatherEntity(params);
            expect(entity.iobIds).to.include(HUM_ID);
        });
    });

    describe('Forecast day 0 — ICON (bare name = day-0 postfix)', function () {
        it('ICON state results in forecast.0.condition ATTRIBUTE entry', function () {
            // The forecast loop uses postFix='' for day 0, so state name is 'ICON' (no suffix)
            const params = makeParameters([{ id: ICON_ID, name: 'ICON' }]);
            const entity = new WeatherEntity(params);
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'forecast.0.condition');
            expect(attr).to.exist;
            expect(attr!.getId).to.equal(ICON_ID);
        });

        it('registers ICON_ID in iobIds for forecast.0.condition', function () {
            const params = makeParameters([{ id: ICON_ID, name: 'ICON' }]);
            const entity = new WeatherEntity(params);
            expect(entity.iobIds).to.include(ICON_ID);
        });
    });

    describe('Forecast day 0 — TEMP_MAX (bare name = day-0 postfix)', function () {
        it('TEMP_MAX state adds forecast.0.temperature ATTRIBUTE entry', function () {
            // ICON triggers hassCounter increment; then TEMP_MAX adds forecast.0.temperature
            const params = makeParameters([
                { id: ICON_ID, name: 'ICON' },
                { id: TEMP_MAX_ID, name: 'TEMP_MAX' },
            ]);
            const entity = new WeatherEntity(params);
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'forecast.0.temperature');
            expect(attr).to.exist;
            expect(attr!.getId).to.equal(TEMP_MAX_ID);
        });
    });

    describe('entity domain', function () {
        it('entity_id starts with weather.', function () {
            const params = makeParameters([]);
            const entity = new WeatherEntity(params);
            expect(entity.entity_id).to.match(/^weather\./);
        });
    });
});
