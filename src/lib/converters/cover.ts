import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { CoverEntity } from '../entities/coverEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    services: Record<string, unknown>;
};

/** Converter for blind and blindButtons device types (cover entity + input_number slider). */
export class CoverConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        return CoverEntity.build(params);
    }
}

Converter.converters[Types.blind] = CoverConverter;
Converter.converters[Types.blindButtons] = CoverConverter;

adapterData.services.cover = {
    set_cover_tilt_position: {
        name: 'Set tilt position',
        description: 'Sets the tilt position of a cover entity.',
        fields: {
            tilt_position: {
                required: true,
                selector: { number: null },
                name: 'Tilt position',
                description: 'The target tilt position to set.',
            },
        },
        target: { entity: [{ domain: ['cover'] }] },
    },
    set_cover_position: {
        name: 'Set position',
        description: 'Sets the position of a cover entity.',
        fields: {
            position: {
                required: true,
                selector: { number: null },
                name: 'Position',
                description: 'The target position to set.',
            },
        },
        target: { entity: [{ domain: ['cover'] }] },
    },
    toggle: {
        name: 'Toggle cover status',
        description: 'Toggles the status of a cover entity.',
        fields: {},
        target: { entity: [{ domain: ['cover'] }] },
    },
    open_cover: {
        name: 'Open cover',
        description: 'Opens a cover entity.',
        fields: {},
        target: { entity: [{ domain: ['cover'] }] },
    },
    close_cover: {
        name: 'Close cover',
        description: 'Closes a cover entity.',
        fields: {},
        target: { entity: [{ domain: ['cover'] }] },
    },
    stop_cover: {
        name: 'Stop cover',
        description: 'Stops a cover entity.',
        fields: {},
        target: { entity: [{ domain: ['cover'] }] },
    },
    open_cover_tilt: {
        name: 'Open tilt',
        description: 'Opens the tilt of a cover entity.',
        fields: {},
        target: { entity: [{ domain: ['cover'] }] },
    },
    close_cover_tilt: {
        name: 'Closes tilt',
        description: 'Closes the tilt of a cover entity.',
        fields: {},
        target: { entity: [{ domain: ['cover'] }] },
    },
    stop_cover_tilt: {
        name: 'Stop tilt',
        description: 'Stops the tilt of a cover entity.',
        fields: {},
        target: { entity: [{ domain: ['cover'] }] },
    },
};
