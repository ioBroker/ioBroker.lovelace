import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { HumidifierEntity } from '../entities/humidifierEntity';
import { MANUAL_DOMAIN_CONVERTERS } from './syntheticControl';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    services: Record<string, unknown>;
};

/**
 * Converter for the HA `humidifier` domain. Manual-only for now (type-detector has no humidifier
 * type), so it is registered in the domain-keyed bridge map instead of `Converter.converters`. When
 * type-detector gains a humidifier type, add `Converter.converters[Types.x] = HumidifierConverter`.
 */
export class HumidifierConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        return [new HumidifierEntity(params)];
    }
}

MANUAL_DOMAIN_CONVERTERS.humidifier = HumidifierConverter;

adapterData.services.humidifier = {
    turn_on: {
        name: 'Turn on',
        description: 'Turn the humidifier on.',
        fields: {},
        target: { entity: [{ domain: ['humidifier'] }] },
    },
    turn_off: {
        name: 'Turn off',
        description: 'Turn the humidifier off.',
        fields: {},
        target: { entity: [{ domain: ['humidifier'] }] },
    },
    set_humidity: {
        name: 'Set humidity',
        description: 'Set the target humidity.',
        fields: {
            humidity: {
                name: 'Humidity',
                description: 'Target humidity (%).',
                required: true,
                selector: { number: null },
            },
        },
        target: { entity: [{ domain: ['humidifier'] }] },
    },
    set_mode: {
        name: 'Set mode',
        description: 'Set the operation mode.',
        fields: {
            mode: { name: 'Mode', description: 'The mode to set.', required: true, selector: { text: null } },
        },
        target: { entity: [{ domain: ['humidifier'] }] },
    },
};
