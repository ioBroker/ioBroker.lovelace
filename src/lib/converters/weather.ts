import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { processCommon, addID2entity, setJsonAttribute } from '../entities/utils';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData: { services: Record<string, unknown> } = require('../../../lib/dataSingleton');

/**
 * Possible weather state values (icon names recognized by the Lovelace frontend).
 * The converter reads the ICON state from ioBroker and passes it through as entity.state.
 */

/** Converter for weather forecast device types. */
export class WeatherConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        const { controls, objects, forcedEntityId, friendlyName, room, func } = params;
        const entity = processCommon(friendlyName, room, func, objects[params.id], 'weather', forcedEntityId);

        entity.context.STATE = { getId: null };
        entity.context.ATTRIBUTES = [];

        let state = controls.states.find(s => s.id && s.name === 'ICON');
        if (state?.id) {
            entity.context.STATE.getId = state.id;
            addID2entity(state.id, entity);
        }

        // Current conditions
        state = controls.states.find(s => s.id && s.name === 'TEMP');
        if (state?.id) {
            entity.context.ATTRIBUTES.push({ attribute: 'temperature', getId: state.id });
            addID2entity(state.id, entity);
        } else {
            state = controls.states.find(s => s.id && s.name === 'TEMP_MAX');
            if (state?.id) {
                entity.context.ATTRIBUTES.push({ attribute: 'temperature', getId: state.id });
                addID2entity(state.id, entity);
            }
        }

        for (const [stateName, attrName] of [
            ['PRESSURE', 'pressure'],
            ['HUMIDITY', 'humidity'],
            ['WIND_SPEED', 'wind_speed'],
            ['WIND_DIRECTION', 'wind_bearing'],
            ['PRECIPITATION_CHANCE', 'precipitation_probability'],
            ['PRECIPITATION', 'precipitation'],
        ] as const) {
            state = controls.states.find(s => s.id && s.name === stateName);
            if (state?.id) {
                entity.context.ATTRIBUTES.push({ attribute: attrName, getId: state.id });
                addID2entity(state.id, entity);
            }
        }

        // Sunrise / sunset — prefer the bare name, fall back to day-0 suffix
        for (const [bare, zeroed, attr] of [
            ['TIME_SUNRISE', 'TIME_SUNRISE0', 'sunrise'],
            ['TIME_SUNSET', 'TIME_SUNSET0', 'sunset'],
            ['STATE', 'STATE0', 'state_desc'],
        ] as const) {
            state = controls.states.find(s => s.id && s.name === bare);
            if (state?.id) {
                entity.context.ATTRIBUTES.push({ attribute: attr, getId: state.id });
                addID2entity(state.id, entity);
            } else {
                state = controls.states.find(s => s.id && s.name === zeroed);
                if (state?.id) {
                    entity.context.ATTRIBUTES.push({ attribute: attr, getId: state.id });
                    addID2entity(state.id, entity);
                    state.id = null as unknown as string; // consumed — prevent re-detection in forecast loop
                }
            }
        }

        // Forecast: iterate days 0–8 (day 0 = "today", postFix '' for day 0, '1'..'8' for rest)
        let hassCounter = -1;
        for (let day = 0; day < 9; day++) {
            const postFix = day ? String(day) : '';
            let somethingFound = false;
            let dayShiftId: string | undefined;

            const tryAdd = (name: string, attribute: string): void => {
                state = controls.states.find(s => s.id && s.name === name);
                if (state?.id) {
                    if (!somethingFound) {
                        hassCounter++;
                        somethingFound = true;
                    }
                    dayShiftId = dayShiftId ?? state.id;
                    entity.context.ATTRIBUTES!.push({ attribute, getId: state.id });
                    addID2entity(state.id, entity);
                }
            };

            // ICON determines the day counter increment
            state = controls.states.find(s => s.id && s.name === `ICON${postFix}`);
            if (state?.id) {
                hassCounter++;
                somethingFound = true;
                dayShiftId = state.id;
                entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.condition`, getId: state.id });
                addID2entity(state.id, entity);
            }

            tryAdd(`TEMP_MAX${postFix}`, `forecast.${hassCounter}.temperature`);
            if (
                !somethingFound ||
                !entity.context.ATTRIBUTES.find(a => a.attribute === `forecast.${hassCounter}.temperature`)
            ) {
                tryAdd(`TEMP${postFix}`, `forecast.${hassCounter}.temperature`);
            }
            tryAdd(`TEMP_MIN${postFix}`, `forecast.${hassCounter}.templow`);
            tryAdd(`PRECIPITATION_CHANCE${postFix}`, `forecast.${hassCounter}.precipitation_probability`);
            tryAdd(`PRECIPITATION${postFix}`, `forecast.${hassCounter}.precipitation`);
            tryAdd(`HUMIDITY${postFix}`, `forecast.${hassCounter}.humidity`);

            if (somethingFound) {
                state = controls.states.find(s => s.id && s.name === `DATE${postFix}`);
                if (state?.id) {
                    entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.datetime`, getId: state.id });
                    addID2entity(state.id, entity);
                } else if (dayShiftId) {
                    const capturedShift = day;
                    const capturedHassCounter = hassCounter;
                    entity.context.ATTRIBUTES.push({
                        attribute: `forecast.${capturedHassCounter}.datetime`,
                        dayShift: capturedShift,
                        getId: dayShiftId,
                        getParser: (_entity: ioBrokerEntity, attr, iobState: ioBroker.State): void => {
                            let date = new Date();
                            if (iobState?.ts) {
                                date = new Date(iobState.ts);
                            }
                            if (attr.dayShift) {
                                date.setDate(date.getDate() + attr.dayShift);
                            }
                            setJsonAttribute(_entity.attributes, attr.attribute, date.toISOString());
                        },
                    });
                }
            } else if (hassCounter >= 0) {
                break;
            }
        }

        return [entity];
    }
}

Converter.converters[Types.weatherForecast] = WeatherConverter;

// Weather services are registered for completeness but not actually handled — removed immediately.
adapterData.services.weather = {
    get_forecast: {
        name: 'Get forecast',
        description: 'Get weather forecast.',
        fields: {
            type: {
                required: true,
                selector: { select: { options: ['daily', 'hourly', 'twice_daily'], translation_key: 'forecast_type' } },
                name: 'Forecast type',
                description: 'Forecast type: daily, hourly or twice daily.',
            },
        },
        target: { entity: [{ domain: ['weather'], supported_features: [1, 2, 4] }] },
        response: { optional: false },
    },
    get_forecasts: {
        name: 'Get forecasts',
        description: 'Get weather forecasts.',
        fields: {
            type: {
                required: true,
                selector: { select: { options: ['daily', 'hourly', 'twice_daily'], translation_key: 'forecast_type' } },
                name: 'Forecast type',
                description: 'Forecast type: daily, hourly or twice daily.',
            },
        },
        target: { entity: [{ domain: ['weather'], supported_features: [1, 2, 4] }] },
        response: { optional: false },
    },
};
delete adapterData.services.weather;
