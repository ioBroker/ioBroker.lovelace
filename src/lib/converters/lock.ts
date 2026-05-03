import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { LockEntity } from '../entities/lockEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    services: Record<string, unknown>;
};

/** Converter for lock device types. */
export class LockConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        return [new LockEntity(params)];
    }
}

Converter.converters[Types.lock] = LockConverter;

adapterData.services.lock = {
    open: {
        name: 'Open',
        description: 'Open the lock.',
        fields: {},
        target: { entity: [{ domain: ['lock'] }] },
    },
    lock: {
        name: 'Lock',
        description: 'Lock the lock.',
        fields: {},
        target: { entity: [{ domain: ['lock'] }] },
    },
    unlock: {
        name: 'Unlock',
        description: 'Unlock the lock.',
        fields: {},
        target: { entity: [{ domain: ['lock'] }] },
    },
};
