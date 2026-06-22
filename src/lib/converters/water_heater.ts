import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { WaterHeaterEntity } from '../entities/waterHeaterEntity';
import { MANUAL_DOMAIN_CONVERTERS } from './syntheticControl';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    services: Record<string, unknown>;
};

/**
 * Converter for the HA `water_heater` domain. Manual-only for now (type-detector has no water_heater
 * type), registered in the domain-keyed bridge map. Add `Converter.converters[Types.x]` later for
 * auto-detection when type-detector supports it.
 */
export class WaterHeaterConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        return [new WaterHeaterEntity(params)];
    }
}

MANUAL_DOMAIN_CONVERTERS.water_heater = WaterHeaterConverter;

adapterData.services.water_heater = {
    turn_on: {
        name: 'Turn on',
        description: 'Turn the water heater on.',
        fields: {},
        target: { entity: [{ domain: ['water_heater'] }] },
    },
    turn_off: {
        name: 'Turn off',
        description: 'Turn the water heater off.',
        fields: {},
        target: { entity: [{ domain: ['water_heater'] }] },
    },
    set_temperature: {
        name: 'Set temperature',
        description: 'Set the target temperature.',
        fields: {
            temperature: {
                name: 'Temperature',
                description: 'Target temperature.',
                required: true,
                selector: { number: null },
            },
        },
        target: { entity: [{ domain: ['water_heater'] }] },
    },
    set_operation_mode: {
        name: 'Set operation mode',
        description: 'Set the operation mode.',
        fields: {
            operation_mode: {
                name: 'Operation mode',
                description: 'The operation mode to set.',
                required: true,
                selector: { text: null },
            },
        },
        target: { entity: [{ domain: ['water_heater'] }] },
    },
};
