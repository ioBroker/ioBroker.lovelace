import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { LightEntity, applyLightStates } from '../entities/lightEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    services: Record<string, unknown>;
};

/** Converter for all light device types (simple and advanced). */
export class LightConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        return LightEntity.build(params);
    }
}

Converter.converters[Types.light] = LightConverter;
Converter.converters[Types.dimmer] = LightConverter;
Converter.converters[Types.ct] = LightConverter;
Converter.converters[Types.hue] = LightConverter;
Converter.converters[Types.rgb] = LightConverter;
Converter.converters[Types.rgbSingle] = LightConverter;

/**
 * Apply light wiring to a manually-configured entity.
 *
 * @param id - ioBroker state id (the main object)
 * @param obj - ioBroker object
 * @param entity - already-built entity (from server.ts processCommon)
 * @param objects - ioBroker objects cache
 * @param custom - custom settings from the ioBroker object
 */
export function processManualEntity(
    id: string,
    obj: ioBroker.Object,
    entity: ioBrokerEntity,
    objects: Record<string, ioBroker.Object>,
    custom: Record<string, unknown>,
): ioBrokerEntity[] {
    const states: Record<string, string | undefined> = (custom.states as Record<string, string> | undefined) ?? {
        state: id,
    };
    const objCommon = (obj?.common ?? {}) as Record<string, unknown>;
    if (obj && objCommon.type === 'number') {
        states.brightness = id;
    }
    return applyLightStates(states, objects, entity);
}

adapterData.services.light = {
    turn_on: {
        name: 'Turn on',
        description:
            'Turn on one or more lights and adjust properties of the light, even when they are turned on already.',
        fields: {
            transition: {
                filter: { supported_features: [32] },
                selector: { number: { min: 0, max: 300, unit_of_measurement: 'seconds' } },
                name: 'Transition',
                description: 'Duration it takes to get to next state.',
            },
            rgb_color: {
                filter: { attribute: { supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'] } },
                selector: { color_rgb: null },
                name: 'Color',
                description:
                    'The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue.',
            },
            rgbw_color: {
                filter: { attribute: { supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'] } },
                advanced: true,
                example: '[255, 100, 100, 50]',
                selector: { object: null },
                name: 'RGBW-color',
                description:
                    'The color in RGBW format. A list of four integers between 0 and 255 representing the values of red, green, blue, and white.',
            },
            hs_color: {
                filter: { attribute: { supported_color_modes: ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'] } },
                advanced: true,
                example: '[300, 70]',
                selector: { object: null },
                name: 'Hue/Sat color',
                description: 'Color in hue/sat format. A list of two integers. Hue is 0-360 and Sat is 0-100.',
            },
            color_temp: {
                filter: { attribute: { supported_color_modes: ['color_temp', 'hs', 'xy', 'rgb', 'rgbw', 'rgbww'] } },
                selector: { color_temp: { unit: 'mired', min: 153, max: 500 } },
                name: 'Color temperature',
                description: 'Color temperature in mireds.',
            },
            color_temp_kelvin: {
                filter: { attribute: { supported_color_modes: ['color_temp', 'hs', 'xy', 'rgb', 'rgbw', 'rgbww'] } },
                selector: { color_temp: { unit: 'kelvin', min: 2000, max: 6500 } },
                name: 'Color temperature',
                description: 'Color temperature in Kelvin.',
            },
            brightness: {
                filter: {
                    attribute: {
                        supported_color_modes: ['brightness', 'color_temp', 'hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                    },
                },
                selector: { number: { min: 0, max: 255 } },
                name: 'Brightness value',
                description:
                    'Number indicating brightness, where 0 turns the light off, 1 is the minimum brightness, and 255 is the maximum brightness.',
            },
            brightness_pct: {
                filter: {
                    attribute: {
                        supported_color_modes: ['brightness', 'color_temp', 'hs', 'xy', 'rgb', 'rgbw', 'rgbww'],
                    },
                },
                selector: { number: { min: 0, max: 100, unit_of_measurement: '%' } },
                name: 'Brightness',
                description:
                    'Number indicating percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness.',
            },
            effect: {
                selector: { text: null },
                name: 'Effect',
                description: 'Light effect.',
            },
        },
        target: { entity: [{ domain: ['light'] }] },
    },
    turn_off: {
        name: 'Turn off',
        description: 'Turn off one or more lights.',
        fields: {
            transition: {
                filter: { supported_features: [32] },
                selector: { number: { min: 0, max: 300, unit_of_measurement: 'seconds' } },
                name: 'Transition',
                description: 'Duration it takes to get to next state.',
            },
        },
        target: { entity: [{ domain: ['light'] }] },
    },
    toggle: {
        name: 'Toggle',
        description: 'Toggles one or more lights, from on to off, or, off to on.',
        fields: {
            transition: {
                filter: { supported_features: [32] },
                selector: { number: { min: 0, max: 300, unit_of_measurement: 'seconds' } },
                name: 'Transition',
                description: 'Duration it takes to get to next state.',
            },
        },
        target: { entity: [{ domain: ['light'] }] },
    },
};
