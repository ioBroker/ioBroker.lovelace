import type { ioBrokerEntity, EntityAttribute, ServiceCallData } from './converter';
import { fillEntityFromStates } from '../entities/utils';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    adapter: ioBroker.Adapter;
    log: ioBroker.Logger;
    services: Record<string, unknown>;
};

/**
 * Augment a fan entity's preset_mode attribute with mode mapping and commands.
 *
 * Reads the ioBroker object for the preset_mode state to determine available modes,
 * then sets up:
 * - entity.attributes.preset_modes list
 * - attr.map2lovelace / attr.map2iob for value translation
 * - attr.getParser to update entity.state and entity.attributes.preset_mode on state changes
 * - COMMANDS: set_speed, set_preset_mode, turn_off
 *
 * @param presetModeId - ioBroker state id for the preset_mode
 * @param stateId - ioBroker state id for the on/off power state (used by turn_off)
 * @param entity - entity to augment in-place
 * @param objects - ioBroker objects cache
 */
function augmentPresetMode(
    presetModeId: string,
    stateId: string | undefined,
    entity: ioBrokerEntity,
    objects: Record<string, ioBroker.Object>,
): void {
    const attr = entity.context.ATTRIBUTES?.find(a => a.attribute === 'preset_mode') as
        | (EntityAttribute & {
              isStringArray?: boolean;
              isNumber?: boolean;
              map2lovelace?: Record<string | number, string | number>;
              map2iob?: Record<string, string | number>;
          })
        | undefined;
    if (!attr) {
        return;
    }

    const rawObj = objects[presetModeId];
    const obj = rawObj ?? { common: { type: 'number', states: { 0: 'off', 1: 'low', 2: 'medium', 3: 'high' } } };
    const common = (obj.common ?? {}) as Record<string, unknown>;
    if (!common.type) {
        common.type = 'number';
    }
    if (!common.states) {
        common.states = { 0: 'off', 1: 'low', 2: 'medium', 3: 'high' };
    }

    const rawStates = common.states;
    if (rawStates) {
        if (Array.isArray(rawStates)) {
            attr.isStringArray = true;
            entity.attributes.preset_modes = rawStates;
        } else if (typeof rawStates === 'string') {
            adapterData.log.warn(
                `${String((obj as { _id?: string })._id)}: states is of type string. Problems might occur. Please fix states to be of type object.`,
            );
            attr.map2lovelace = {};
            for (const kv of rawStates.split(';')) {
                const [key, value] = kv.split(':');
                attr.map2lovelace[key] = value;
            }
        } else {
            attr.map2lovelace = rawStates as Record<string | number, string | number>;
            attr.isNumber = common.type !== undefined && (common.type as string).toLowerCase() === 'number';
            attr.map2iob = {};
            entity.attributes.preset_modes = [];
            for (const k of Object.keys(attr.map2lovelace)) {
                attr.map2iob[String(attr.map2lovelace[k])] = k;
                (entity.attributes.preset_modes as string[]).push(String(attr.map2lovelace[k]));
            }
        }
    }

    attr.getParser = (ent, a, iobState): void => {
        const s = iobState ?? ({ val: null } as ioBroker.State);
        const speed = a.map2lovelace
            ? (a.map2lovelace[s.val as string | number] ?? s.val ?? 'unknown')
            : (s.val ?? 'unknown');
        ent.attributes.speed = speed;
        ent.attributes.preset_mode = speed;
        ent.state = speed !== 'off' ? 'on' : 'off';
    };

    entity.context.COMMANDS = entity.context.COMMANDS ?? [];

    const executePresetChange = async (
        ent: ioBrokerEntity,
        command: {
            setId?: string | null;
            map2iob?: Record<string, string | number>;
            isStringArray?: boolean;
            isNumber?: boolean;
        },
        targetValue: unknown,
        user: string,
    ): Promise<unknown> => {
        let target = targetValue;
        if (!attr.isStringArray) {
            if (attr.map2iob) {
                const mapped = attr.map2iob[String(target)];
                if (mapped !== undefined) {
                    target = mapped;
                }
            }
            if (attr.isNumber) {
                target = Number(target);
            }
        }
        if (!target && target !== 0) {
            target = targetValue;
        }
        return adapterData.adapter.setForeignStateAsync(command.setId!, target as ioBroker.StateValue, false, { user });
    };

    entity.context.COMMANDS.push({
        service: 'set_speed',
        setId: presetModeId,
        parseCommand: async (ent, command, data: ServiceCallData, user): Promise<unknown> => {
            const sd = data.service_data;
            return executePresetChange(ent, command, sd.speed ?? sd.preset_mode, user);
        },
    });

    entity.context.COMMANDS.push({
        service: 'set_preset_mode',
        setId: presetModeId,
        parseCommand: async (ent, command, data: ServiceCallData, user): Promise<unknown> => {
            const sd = data.service_data;
            return executePresetChange(ent, command, sd.speed ?? sd.preset_mode, user);
        },
    });

    entity.context.COMMANDS.push({
        service: 'turn_off',
        setId: presetModeId,
        parseCommand: async (ent, command, _data, user): Promise<unknown> => {
            await executePresetChange(ent, command, 'off', user);
            if (stateId) {
                await adapterData.adapter.setForeignStateAsync(stateId, false, false, { user });
            }
            return undefined;
        },
    });
}

/**
 * Create a manual fan entity.
 *
 * @param id - ioBroker state id (the main object)
 * @param _obj - ioBroker object (unused here; preset_mode object is read from objects cache)
 * @param entity - already created entity (entity.context.STATE pre-set by server.js)
 * @param objects - ioBroker objects cache
 * @param custom - custom settings from the ioBroker object
 * @returns array containing the augmented entity
 */
export function processManualEntity(
    id: string,
    _obj: ioBroker.Object,
    entity: ioBrokerEntity,
    objects: Record<string, ioBroker.Object>,
    custom: Record<string, unknown>,
): ioBrokerEntity[] {
    const states = (custom.states as Record<string, string> | undefined) ?? { preset_mode: id };
    // Normalize: prefer preset_mode, remove speed alias
    if (!states.preset_mode) {
        states.preset_mode = states.speed ?? id;
    }
    delete states.speed;

    // Fill base entity attributes from state map
    fillEntityFromStates(states, entity, objects);

    if (states.preset_mode) {
        augmentPresetMode(states.preset_mode, states.state, entity, objects);
    }

    return [entity];
}

adapterData.services.fan = {
    set_speed: {
        name: 'Set speed',
        description: 'Set the speed of the fan.',
        fields: {
            speed: {
                description: 'The speed to set as number.',
                required: true,
                selector: { number: null },
            },
        },
        target: { entity: [{ domain: ['fan'] }] },
    },
    set_preset_mode: {
        name: 'Set preset mode',
        description: 'Set the preset mode of the fan.',
        fields: {
            preset_mode: {
                description: 'The preset mode to set.',
                example: 'low',
                selector: { type: 'select', options: ['low', 'medium', 'high', 'off'] },
            },
        },
        target: { entity: [{ domain: ['fan'] }] },
    },
    turn_off: {
        name: 'Turn off',
        description: 'Turns a fan off.',
        fields: {},
        target: { entity: [{ domain: ['fan'] }] },
    },
};
