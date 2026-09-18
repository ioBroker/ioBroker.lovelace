import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { SwitchEntity } from '../entities/switchEntity';
import { generateMeasurementSensors, type Measurement } from './indicators';
import { sensorBaseName } from './sensor';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData: { services: Record<string, unknown> } = require('../../../lib/dataSingleton');

/** What a pump reports besides being on or off; each becomes a sensor of its own. */
const PUMP_MEASUREMENTS: Measurement[] = [
    { state: 'PRESSURE', suffix: 'pressure', label: 'Pressure', deviceClass: 'pressure', unit: 'hPa' },
    { state: 'FLOW', suffix: 'flow', label: 'Flow', deviceClass: 'volume_flow_rate', unit: 'm³/h' },
    { state: 'TEMPERATURE', suffix: 'temperature', label: 'Temperature', deviceClass: 'temperature', unit: '°C' },
];

/** Converter for switch (socket outlet), button and pump device types. */
export class SwitchConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        if (params.controls.type !== Types.pump) {
            return [new SwitchEntity(params)];
        }

        // A pump is on or off like a switch, it only calls that state POWER instead of SET.
        const entities: ioBrokerEntity[] = [];
        if (params.controls.states.some(s => s.id && s.name === 'POWER')) {
            entities.push(
                new SwitchEntity({
                    ...params,
                    controls: {
                        ...params.controls,
                        states: params.controls.states.map(s => (s.name === 'POWER' ? { ...s, name: 'SET' } : s)),
                    },
                }),
            );
        }
        entities.push(...generateMeasurementSensors(params, PUMP_MEASUREMENTS, sensorBaseName(params)));
        return entities;
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
Converter.converters[Types.pump] = SwitchConverter;

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
