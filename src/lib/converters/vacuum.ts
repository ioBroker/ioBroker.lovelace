import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { VacuumEntity } from '../entities/vacuumEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    services: Record<string, unknown>;
};

/** Converter for the vacuumCleaner device type (HA `vacuum`). */
export class VacuumConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        return [new VacuumEntity(params)];
    }
}

Converter.converters[Types.vacuumCleaner] = VacuumConverter;

adapterData.services.vacuum = {
    start: {
        name: 'Start',
        description: 'Start or resume the cleaning task.',
        fields: {},
        target: { entity: [{ domain: ['vacuum'] }] },
    },
    pause: {
        name: 'Pause',
        description: 'Pause the cleaning task.',
        fields: {},
        target: { entity: [{ domain: ['vacuum'] }] },
    },
    stop: {
        name: 'Stop',
        description: 'Stop the current cleaning task.',
        fields: {},
        target: { entity: [{ domain: ['vacuum'] }] },
    },
    return_to_base: {
        name: 'Return to dock',
        description: 'Tell the vacuum to return to its dock.',
        fields: {},
        target: { entity: [{ domain: ['vacuum'] }] },
    },
    locate: {
        name: 'Locate',
        description: 'Locate the vacuum cleaner robot.',
        fields: {},
        target: { entity: [{ domain: ['vacuum'] }] },
    },
    clean_spot: {
        name: 'Clean spot',
        description: 'Tell the vacuum to do a spot clean-up.',
        fields: {},
        target: { entity: [{ domain: ['vacuum'] }] },
    },
    set_fan_speed: {
        name: 'Set fan speed',
        description: 'Set the fan speed of the vacuum.',
        fields: {
            fan_speed: {
                description: 'The fan speed to set.',
                required: true,
                example: 'high',
                selector: { text: null },
            },
        },
        target: { entity: [{ domain: ['vacuum'] }] },
    },
};
