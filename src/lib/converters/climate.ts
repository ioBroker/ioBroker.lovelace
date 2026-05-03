import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { ClimateEntity, applyClimateStates, supportedFlags } from '../entities/climateEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    services: Record<string, unknown>;
};

export { supportedFlags };

/** Converter for thermostat and air-conditioning device types. */
export class ClimateConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        return ClimateEntity.build(params);
    }
}

Converter.converters[Types.thermostat] = ClimateConverter;
Converter.converters[Types.airCondition] = ClimateConverter;

/**
 * Apply climate states to a manually-configured entity.
 *
 * @param _id - ioBroker state id (the main object) — unused, kept for signature compat
 * @param _obj - ioBroker object — unused
 * @param entity - already-built entity from server.ts
 * @param objects - ioBroker objects cache
 * @param custom - custom settings from the ioBroker object (custom.states is the state-id map)
 */
export function processManualEntity(
    _id: string,
    _obj: ioBroker.Object,
    entity: ioBrokerEntity,
    objects: Record<string, ioBroker.Object>,
    custom: Record<string, unknown>,
): ioBrokerEntity[] {
    const states = (custom.states as Record<string, string> | undefined) ?? { temperature: _id };
    applyClimateStates(states, objects, entity);
    return [entity];
}

adapterData.services.climate = {
    set_temperature: {
        name: 'Set temperature',
        description: 'Sets the temperature of a climate entity.',
        fields: {
            temperature: {
                required: true,
                selector: { number: null },
                name: 'Temperature',
                description: 'The target temperature to set.',
            },
        },
        target: { entity: [{ domain: ['climate'] }] },
    },
    set_hvac_mode: {
        name: 'Set HVAC mode',
        description: 'Sets the HVAC mode of a climate entity.',
        fields: {
            hvac_mode: {
                required: true,
                selector: {
                    select: {
                        options: ['off', 'heat', 'cool', 'auto', 'dry', 'fan_only'],
                        translation_key: 'hvac_mode',
                    },
                },
                name: 'HVAC mode',
                description: 'The target HVAC mode to set.',
            },
        },
        target: { entity: [{ domain: ['climate'] }] },
    },
    set_preset_mode: {
        name: 'Set preset mode',
        description: 'Sets the preset mode of a climate entity.',
        fields: {
            preset_mode: {
                required: true,
                selector: {
                    select: { options: ['boost', 'party'], translation_key: 'preset_mode' },
                },
                name: 'Preset mode',
                description: 'The target preset mode to set.',
            },
        },
        target: { entity: [{ domain: ['climate'] }] },
    },
    set_swing_mode: {
        name: 'Set swing mode',
        description: 'Sets the swing mode of a climate entity.',
        fields: {
            swing_mode: {
                required: true,
                selector: {
                    select: { options: ['off', 'on'], translation_key: 'swing_mode' },
                },
                name: 'Swing mode',
                description: 'The target swing mode to set.',
            },
        },
        target: { entity: [{ domain: ['climate'] }] },
    },
    set_fan_mode: {
        name: 'Set fan mode',
        description: 'Sets the fan mode of a climate entity.',
        fields: {
            preset_mode: {
                required: true,
                selector: { number: null },
                name: 'Preset mode',
                description: 'The target preset mode to set.',
            },
        },
        target: { entity: [{ domain: ['climate'] }] },
    },
};
