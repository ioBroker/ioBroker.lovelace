import { BaseEntity } from './baseEntity';
import type { ConverterParameters } from '../converters/converter';

interface SensorAdapterData {
    lang: string;
    words: Record<string, Record<string, string>>;
}

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData: SensorAdapterData = require('../../../lib/dataSingleton');

/**
 * SensorEntity — single class for the Home Assistant `sensor` domain.
 *
 * Construct via the static factory methods (`humidity`, `temperature`, `windowTilt`)
 * which configure device_class / unit / icon for each sub-type.
 */
export class SensorEntity extends BaseEntity {
    /**
     * Build a humidity sensor from a known state id.
     *
     * @param stateId - ioBroker state id to read humidity from
     * @param name - friendly name
     * @param room - room enum object
     * @param func - function enum object
     * @param obj - ioBroker object for the device
     * @param forcedEntityId - optional entity_id override
     */
    static humidity(
        stateId: string,
        name: string | undefined,
        room: ioBroker.EnumObject | undefined,
        func: ioBroker.EnumObject | undefined,
        obj: ioBroker.Object | undefined,
        forcedEntityId?: string,
    ): SensorEntity {
        const entity = new SensorEntity(name, room, func, obj, forcedEntityId);
        entity.context.STATE.getId = stateId;
        entity.attributes.device_class = 'humidity';
        entity.attributes.unit_of_measurement = entity.attributes.unit_of_measurement || '%';
        entity.addID2entity(stateId);
        return entity;
    }

    /**
     * Build a temperature sensor from a known state id.
     *
     * @param stateId - ioBroker state id to read temperature from
     * @param name - friendly name
     * @param room - room enum object
     * @param func - function enum object
     * @param obj - ioBroker object for the device
     * @param forcedEntityId - optional entity_id override
     */
    static temperature(
        stateId: string,
        name: string | undefined,
        room: ioBroker.EnumObject | undefined,
        func: ioBroker.EnumObject | undefined,
        obj: ioBroker.Object | undefined,
        forcedEntityId?: string,
    ): SensorEntity {
        const entity = new SensorEntity(name, room, func, obj, forcedEntityId);
        entity.context.STATE.getId = stateId;
        entity.attributes.device_class = 'temperature';
        entity.attributes.unit_of_measurement = entity.attributes.unit_of_measurement || '°C';
        entity.addID2entity(stateId);
        return entity;
    }

    /**
     * Build a windowTilt sensor (closed / tilted / open) from converter parameters.
     *
     * @param params - converter parameters
     */
    static windowTilt(params: ConverterParameters): SensorEntity {
        const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
        const entity = new SensorEntity(friendlyName, room, func, objects[id], forcedEntityId);

        entity.context.STATE.getId = null;
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
                const stateMap = entity.context.STATE.states;
                if (stateMap) {
                    str = stateMap[val as string | number] ? stateMap[val as string | number].toLowerCase() : 'error';
                } else {
                    str = val === 0 ? 'closed' : val === 1 ? 'tilted' : 'open';
                }
                const wordEntry = adapterData.words[str];
                return wordEntry ? wordEntry[adapterData.lang] || wordEntry.en : str;
            };

            entity.context.STATE.getParser = (e, _attr, iobState): void => {
                const s = iobState || ({ val: null } as ioBroker.State);
                e.state = e.context.STATE.historyParser!(stateId, s);
            };

            entity.addID2entity(stateId);
        }

        return entity;
    }

    private constructor(
        name: string | null | undefined,
        room: ioBroker.EnumObject | null | undefined,
        func: ioBroker.EnumObject | null | undefined,
        obj: ioBroker.Object | undefined,
        forcedEntityId?: string,
    ) {
        super(name, room, func, obj, 'sensor', forcedEntityId);
    }
}
