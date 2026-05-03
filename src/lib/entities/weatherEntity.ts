import { BaseEntity } from './baseEntity';
import { setJsonAttribute } from './utils';
import type { ConverterParameters } from '../converters/converter';

/**
 * WeatherEntity — single class for the Home Assistant `weather` domain.
 *
 * Reads the ICON state, current conditions, and a 0-8 day forecast from controls.states,
 * synthesising forecast.N.* attributes (condition, temperature, templow, datetime,
 * precipitation, humidity, etc.).
 */
export class WeatherEntity extends BaseEntity {
    constructor(params: ConverterParameters) {
        const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
        super(friendlyName, room, func, objects[id], 'weather', forcedEntityId);

        this.context.STATE.getId = null;
        this.context.ATTRIBUTES = [];

        let state = controls.states.find(s => s.id && s.name === 'ICON');
        if (state?.id) {
            this.context.STATE.getId = state.id;
            this.addID2entity(state.id);
        }

        // Current conditions
        state = controls.states.find(s => s.id && s.name === 'TEMP');
        if (state?.id) {
            this.context.ATTRIBUTES.push({ attribute: 'temperature', getId: state.id });
            this.addID2entity(state.id);
        } else {
            state = controls.states.find(s => s.id && s.name === 'TEMP_MAX');
            if (state?.id) {
                this.context.ATTRIBUTES.push({ attribute: 'temperature', getId: state.id });
                this.addID2entity(state.id);
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
                this.context.ATTRIBUTES.push({ attribute: attrName, getId: state.id });
                this.addID2entity(state.id);
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
                this.context.ATTRIBUTES.push({ attribute: attr, getId: state.id });
                this.addID2entity(state.id);
            } else {
                state = controls.states.find(s => s.id && s.name === zeroed);
                if (state?.id) {
                    this.context.ATTRIBUTES.push({ attribute: attr, getId: state.id });
                    this.addID2entity(state.id);
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
                    this.context.ATTRIBUTES.push({ attribute, getId: state.id });
                    this.addID2entity(state.id);
                }
            };

            state = controls.states.find(s => s.id && s.name === `ICON${postFix}`);
            if (state?.id) {
                hassCounter++;
                somethingFound = true;
                dayShiftId = state.id;
                this.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.condition`, getId: state.id });
                this.addID2entity(state.id);
            }

            tryAdd(`TEMP_MAX${postFix}`, `forecast.${hassCounter}.temperature`);
            if (
                !somethingFound ||
                !this.context.ATTRIBUTES.find(a => a.attribute === `forecast.${hassCounter}.temperature`)
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
                    this.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.datetime`, getId: state.id });
                    this.addID2entity(state.id);
                } else if (dayShiftId) {
                    const capturedShift = day;
                    const capturedHassCounter = hassCounter;
                    this.context.ATTRIBUTES.push({
                        attribute: `forecast.${capturedHassCounter}.datetime`,
                        dayShift: capturedShift,
                        getId: dayShiftId,
                        getParser: (ent, attr, iobState): void => {
                            let date = new Date();
                            if (iobState?.ts) {
                                date = new Date(iobState.ts);
                            }
                            if (attr.dayShift) {
                                date.setDate(date.getDate() + attr.dayShift);
                            }
                            setJsonAttribute(ent.attributes, attr.attribute, date.toISOString());
                        },
                    });
                }
            } else if (hassCounter >= 0) {
                break;
            }
        }
    }
}
