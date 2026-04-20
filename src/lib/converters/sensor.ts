import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { processCommon, addID2entity } from '../entities/utils';

interface SensorAdapterData {
    lang: string;
    words: Record<string, Record<string, string>>;
}

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData: SensorAdapterData = require('../../../lib/dataSingleton');

/**
 * Create a humidity sensor entity from an ioBroker state id.
 * Exported because processTemperature re-uses it for the optional SECOND (humidity) channel.
 *
 * @param stateId - ioBroker state id to read humidity from
 * @param name - friendly name
 * @param room - room enum object
 * @param func - function enum object
 * @param obj - ioBroker object for the state
 * @param forcedEntityId - optional entity_id override
 * @returns the created entity
 */
export function createHumiditySensor(
    stateId: string,
    name: string | undefined,
    room: ioBroker.EnumObject | undefined,
    func: ioBroker.EnumObject | undefined,
    obj: ioBroker.Object | undefined,
    forcedEntityId?: string,
): ioBrokerEntity {
    const entity = processCommon(name, room, func, obj, 'sensor', forcedEntityId);
    entity.context.STATE = { getId: stateId };
    entity.attributes.device_class = 'humidity';
    entity.attributes.unit_of_measurement = entity.attributes.unit_of_measurement || '%';
    addID2entity(stateId, entity);
    return entity;
}

/**
 * Create a temperature sensor entity from an ioBroker state id.
 * Exported because weather and thermostat converters may re-use it.
 *
 * @param stateId - ioBroker state id to read temperature from
 * @param name - friendly name
 * @param room - room enum object
 * @param func - function enum object
 * @param obj - ioBroker object for the state
 * @param forcedEntityId - optional entity_id override
 * @returns the created entity
 */
export function createTemperatureSensor(
    stateId: string,
    name: string | undefined,
    room: ioBroker.EnumObject | undefined,
    func: ioBroker.EnumObject | undefined,
    obj: ioBroker.Object | undefined,
    forcedEntityId?: string,
): ioBrokerEntity {
    const entity = processCommon(name, room, func, obj, 'sensor', forcedEntityId);
    entity.context.STATE = { getId: stateId };
    entity.attributes.device_class = 'temperature';
    entity.attributes.unit_of_measurement = entity.attributes.unit_of_measurement || '°C';
    addID2entity(stateId, entity);
    return entity;
}

/** Converter for temperature, humidity, and window-tilt sensor device types. */
export class SensorConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        const { controls, objects, forcedEntityId, friendlyName, room, func } = params;

        if (controls.type === Types.windowTilt) {
            return SensorConverter._convertWindowTilt(params);
        }

        if (controls.type === Types.humidity) {
            const state = controls.states.find(s => s.id && s.name === 'ACTUAL');
            if (state?.id) {
                const entity = createHumiditySensor(
                    state.id,
                    friendlyName,
                    room,
                    func,
                    objects[params.id],
                    forcedEntityId,
                );
                return [entity];
            }
            return [];
        }

        // Types.temperature
        const entities: (ioBrokerEntity | undefined)[] = [];

        let state = controls.states.find(s => s.id && s.name === 'ACTUAL');
        let tempEntity: ioBrokerEntity | undefined;
        if (state?.id) {
            tempEntity = createTemperatureSensor(
                state.id,
                friendlyName,
                room,
                func,
                objects[params.id],
                forcedEntityId,
            );
            entities.push(tempEntity);
        }

        state = controls.states.find(s => s.id && s.name === 'SECOND');
        if (state?.id) {
            const humForcedId = tempEntity ? `${tempEntity.entity_id}_Humidity` : undefined;
            entities.push(createHumiditySensor(state.id, friendlyName, room, func, objects[params.id], humForcedId));
        }

        return entities.filter((e): e is ioBrokerEntity => e !== undefined);
    }

    private static _convertWindowTilt(params: ConverterParameters): ioBrokerEntity[] {
        const { controls, objects, forcedEntityId, friendlyName, room, func } = params;
        const entity = processCommon(friendlyName, room, func, objects[params.id], 'sensor', forcedEntityId);

        entity.context.STATE = { getId: null };
        entity.attributes.icon = 'mdi:window-maximize';
        entity.attributes.device_class = 'window';

        const state = controls.states.find(s => s.id && s.name === 'ACTUAL');
        if (state?.id) {
            const stateId = state.id;
            entity.context.STATE.getId = stateId;
            entity.context.STATE.states = objects[stateId]?.common
                ? ((objects[stateId].common.states as Record<string | number, string> | undefined) ?? null)
                : null;

            entity.context.STATE.historyParser = (_iobId: string, iobState: ioBroker.State): string => {
                const val = iobState?.val;
                let str: string;
                const stateMap = entity.context.STATE!.states;
                if (stateMap) {
                    str = stateMap[val as string | number] ? stateMap[val as string | number].toLowerCase() : 'error';
                } else {
                    // Default from ioBroker-roles: 0=closed, 1=tilted, 2=open
                    str = val === 0 ? 'closed' : val === 1 ? 'tilted' : 'open';
                }
                // Translate using adapter word list (works for 'open', 'closed', 'tilted')
                const wordEntry = adapterData.words[str];
                return wordEntry ? wordEntry[adapterData.lang] || wordEntry.en : str;
            };

            entity.context.STATE.getParser = (
                _entity: ioBrokerEntity,
                _attr: string,
                iobState: ioBroker.State,
            ): void => {
                const s = iobState || ({ val: null } as ioBroker.State);
                _entity.state = _entity.context.STATE!.historyParser!(stateId, s);
            };

            addID2entity(stateId, entity);
        }

        return [entity];
    }
}

Converter.converters[Types.windowTilt] = SensorConverter;
Converter.converters[Types.temperature] = SensorConverter;
Converter.converters[Types.humidity] = SensorConverter;
