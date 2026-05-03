import type { ioBrokerEntity, ServiceCallData } from './converter';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    adapter: ioBroker.Adapter;
    log: ioBroker.Logger;
    services: Record<string, unknown>;
};

/**
 * Augment an input_select entity with options, value mapping, and select_option command.
 *
 * Reads the ioBroker object's common.states to determine the list of selectable options,
 * supporting three formats:
 * - Array of strings (new style, type string)
 * - Object / Record (numeric or string keys, string values)
 * - Semicolon-colon-separated string (legacy, e.g. "0:off;1:low;2:high")
 *
 * @param stateId - ioBroker state id that holds the currently selected option
 * @param entity - entity to augment in-place (entity.context.STATE must be pre-set)
 * @param objects - ioBroker objects cache
 */
async function fillInputSelectEntity(
    stateId: string,
    entity: ioBrokerEntity,
    objects: Record<string, ioBroker.Object>,
): Promise<void> {
    const obj = objects[stateId] ?? { common: { type: 'string', states: [] } };
    const common = (obj.common ?? { type: 'string' }) as Record<string, unknown>;
    if (!common.type) {
        common.type = 'string';
    }

    entity.context.STATE.isNumber = (common.type as string).toLowerCase() === 'number';

    const rawStates = common.states;
    if (rawStates) {
        if (Array.isArray(rawStates)) {
            entity.context.STATE.isStringArray = true;
            entity.attributes.options = rawStates;
        } else if (typeof rawStates === 'string') {
            adapterData.log.warn(
                `${String(obj._id)}: states is of type string. Problems might occur. Please fix states to be of type object.`,
            );
            entity.context.STATE.map2lovelace = {};
            for (const kv of rawStates.split(';')) {
                const [key, value] = kv.split(':');
                entity.context.STATE.map2lovelace[key] = value;
            }
        } else {
            entity.context.STATE.map2lovelace = rawStates as Record<string | number, string | number>;
            entity.context.STATE.isNumber =
                common.type !== undefined && (common.type as string).toLowerCase() === 'number';
            entity.attributes.options = Object.values(entity.context.STATE.map2lovelace);
        }
    } else {
        adapterData.log.warn(`${entity.entity_id} has no common.states. Options will be empty and issues will occur.`);
    }

    const currentState = await adapterData.adapter.getForeignStateAsync(stateId);
    if (currentState) {
        entity.attributes.initial = currentState.val;
        const map = entity.context.STATE.map2lovelace;
        if (map && map[currentState.val as string | number] !== undefined) {
            entity.attributes.initial = map[currentState.val as string | number];
        }
    }

    entity.context.STATE.getParser = (ent, _attr, iobState): void => {
        const s = iobState ?? ({ val: null } as ioBroker.State);
        ent.attributes.initial = (s.val ?? 'unknown') as string;
        const m = ent.context.STATE.map2lovelace;
        if (m) {
            ent.attributes.initial = (m[s.val as string | number] ?? s.val ?? 'unknown') as string;
        }
        ent.state = ent.attributes.initial as string;
    };

    entity.context.COMMANDS = entity.context.COMMANDS ?? [];
    entity.context.COMMANDS.push({
        service: 'select_option',
        setId: entity.context.STATE.setId,
        parseCommand: async (ent, command, data: ServiceCallData, user): Promise<unknown> => {
            let target: unknown = data.service_data.option;
            if (!ent.context.STATE.isStringArray) {
                const map = ent.context.STATE.map2lovelace;
                if (map) {
                    const found = Object.keys(map).find(key => map[key] === target);
                    if (found !== undefined) {
                        target = found;
                    }
                }
                if (!target && target !== 0) {
                    target = data.service_data.option;
                }
                if (ent.context.STATE.isNumber) {
                    target = Number(target);
                }
            }
            if (!target && target !== 0) {
                target = data.service_data.option;
            }
            return adapterData.adapter.setForeignStateAsync(command.setId!, target as ioBroker.StateValue, false, {
                user,
            });
        },
    });

    entity.addID2entity(stateId);
}

/**
 * Create a manual input_select entity.
 *
 * @param id - ioBroker state id (the main object)
 * @param _obj - ioBroker object (unused — options are read from the state object itself)
 * @param entity - already created entity (entity.context.STATE pre-set by server.js)
 * @param objects - ioBroker objects cache
 * @param custom - custom settings from the ioBroker object
 * @returns array containing the augmented entity
 */
export async function processManualEntity(
    id: string,
    _obj: ioBroker.Object,
    entity: ioBrokerEntity,
    objects: Record<string, ioBroker.Object>,
    custom: Record<string, unknown>,
): Promise<ioBrokerEntity[]> {
    const states = (custom.states as Record<string, string> | undefined) ?? { state: id };
    const stateId = states.state ?? id;

    await fillInputSelectEntity(stateId, entity, objects);
    return [entity];
}

adapterData.services.input_select = {
    select_option: {
        name: 'Select',
        description: 'Selects an option.',
        fields: {
            option: {
                required: true,
                example: '"Item A"',
                selector: { text: null },
                name: 'Option',
                description: 'Option to be selected.',
            },
        },
        target: { entity: [{ domain: ['input_select'] }] },
    },
};
