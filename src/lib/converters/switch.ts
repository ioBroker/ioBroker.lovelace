import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { SwitchEntity } from '../entities/switchEntity';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData: { services: Record<string, unknown> } = require('../../../lib/dataSingleton');

/** Converter for switch (socket outlet) and button device types. */
export class SwitchConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        return [new SwitchEntity(params)];
    }
}

/**
 * Create a manual switch entity.
 *
 * @param _id - ioBroker state id (the main object)
 * @param obj - ioBroker object
 * @param entity - already created entity (from server.js processCommon)
 * @param _objects - ioBroker objects cache (unused)
 * @param custom - custom settings from the ioBroker object
 */
export function processManualEntity(
    _id: string,
    obj: ioBroker.Object,
    entity: ioBrokerEntity,
    _objects: Record<string, ioBroker.Object>,
    custom: Record<string, unknown>,
): ioBrokerEntity[] {
    const common = obj.common as Record<string, unknown> | undefined;
    entity.attributes.assumed_state =
        (custom.attr_assumed_state as boolean | undefined) ??
        (custom.assumed_state as boolean | undefined) ??
        (!!common && !common.read);
    return [entity];
}

Converter.converters[Types.socket] = SwitchConverter;
Converter.converters[Types.button] = SwitchConverter;

adapterData.services.switch = {
    turn_off: {
        name: 'Turn off',
        description: 'Turns a switch off.',
        fields: {},
        target: { entity: [{ domain: ['switch'] }] },
    },
    turn_on: {
        name: 'Turn on',
        description: 'Turns a switch on.',
        fields: {},
        target: { entity: [{ domain: ['switch'] }] },
    },
    toggle: {
        name: 'Toggle',
        description: 'Toggles a switch on/off.',
        fields: {},
        target: { entity: [{ domain: ['switch'] }] },
    },
};
