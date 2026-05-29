import type { ioBrokerEntity, ServiceCallData } from './converter';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    adapter: ioBroker.Adapter & { config: Record<string, unknown> };
    log: ioBroker.Logger;
    services: Record<string, unknown>;
};

/**
 * Parse an ioBroker state value to the HA alarm_control_panel state string.
 *
 * @param entity - entity to update
 * @param attrMap - optional attribute-level states map (arm_state attribute)
 * @param state - ioBroker state (null when unavailable)
 */
function parseAlarmState(
    entity: ioBrokerEntity,
    attrMap: Record<string | number, string> | undefined,
    state: ioBroker.State | null,
): void {
    if (!state) {
        entity.state = 'unknown';
        return;
    }
    if (state.val === true) {
        entity.state = 'armed';
    } else if (state.val === false) {
        entity.state = 'disarmed';
    } else {
        const mapKey = state.val as string | number;
        if (attrMap && attrMap[mapKey] !== undefined) {
            entity.state = String(attrMap[mapKey]);
        } else if (entity.context.STATE.map && entity.context.STATE.map[mapKey] !== undefined) {
            entity.state = String(entity.context.STATE.map[mapKey]);
        } else {
            entity.state = String(state.val);
        }
    }
}

/**
 * Fill an alarm_control_panel entity from a states map.
 *
 * @param states - maps function names (e.g. 'state', 'arm_state') to ioBroker state ids
 * @param objects - ioBroker objects cache
 * @param entity - entity to fill
 * @returns array containing the augmented entity
 */
function fillAlarmControlPanelFromStates(
    states: Record<string, string>,
    objects: Record<string, ioBroker.Object>,
    entity: ioBrokerEntity,
): ioBrokerEntity[] {
    // - alarm_control_panel =>
    // STATE disarmed/armed/armed_home/armed_away/armed_night/armed_custom_bypass/pending/arming/disarming/triggered
    // attributes: [code_format]
    // commands: alarm_arm_away, alarm_arm_home, alarm_arm_night, alarm_arm_custom_bypass, alarm_disarm (code will be sent)
    // the code must be in the object in native as alarm_code
    entity.fillFromStates(states, objects);

    entity.attributes.code_format = 'number';
    if (states.state) {
        const obj = objects[states.state];
        if (obj?.common) {
            const common = obj.common as Record<string, unknown>;
            if (common.custom) {
                const nsCustom = (common.custom as Record<string, Record<string, unknown>>)[
                    adapterData.adapter.namespace
                ];
                if (nsCustom) {
                    entity.attributes.code_format = nsCustom.code_format ?? 'number';
                }
            }
            entity.context.STATE.isBoolean = obj.common.type === 'boolean';
            entity.context.STATE.map = obj.common.states as Record<string, string | number>;
        }
        entity.context.STATE.setId = states.state;
        entity.context.STATE.getId = states.state;
        entity.addID2entity(states.state);
    }

    if (states.arm_state) {
        const id = states.arm_state;
        const obj = objects[id];
        entity.context.ATTRIBUTES = entity.context.ATTRIBUTES.filter(a => a.attribute !== 'arm_state');
        entity.context.ATTRIBUTES.push({
            attribute: 'arm_state',
            getId: id,
            setId: id,
            map: (obj?.common?.states as Record<string | number, string>) ?? undefined,
            getParser: (ent, attr, state): void => parseAlarmState(ent, attr.map, state),
        });
        entity.addID2entity(id);
    }
    entity.context.STATE.getParser = (ent, _attrName, state): void => parseAlarmState(ent, undefined, state);

    const processCommand = async (
        ent: ioBrokerEntity,
        _command: { setId?: string | null },
        data: ServiceCallData,
        user: string,
    ): Promise<void> => {
        // alarm_arm_away → 'armed_away', alarm_disarm → 'disarmed'
        const targetState = data.service.replace('alarm_', '').replace('arm', 'armed');
        const stateId = ent.context.STATE.setId!;
        adapterData.log.debug(`${data.service}: ${stateId} = ${data.service_data.code ? 'XXX' : 'none'}`);

        // Optionally require code only for disarm
        if (
            !(adapterData.adapter.config as Record<string, unknown>).alarmCheckCodeOnDisarmOnly ||
            targetState.includes('disarm')
        ) {
            const sd = data.service_data;
            if (sd == null || sd.code == null) {
                throw new Error('code is empty');
            }
            const obj = await adapterData.adapter.getForeignObjectAsync(stateId);
            if (!obj?.native?.alarm_code) {
                adapterData.log.warn(
                    `No code is defined! To provide the code add to object ${stateId} native.alarm_code with desired code`,
                );
                throw new Error('iobroker misconfigured.');
            } else if (String(obj.native.alarm_code) !== String(sd.code)) {
                throw new Error('invalid code');
            }
        }

        // Write state
        if (ent.context.STATE.isBoolean) {
            await adapterData.adapter.setForeignStateAsync(stateId, !targetState.includes('disarm'), false, { user });
        } else {
            let valToSet: ioBroker.StateValue = targetState;
            const stateMap = ent.context.STATE.map;
            if (stateMap) {
                const numKey = Number(Object.keys(stateMap).find(k => stateMap[k] === targetState));
                if (!isNaN(numKey)) {
                    valToSet = numKey;
                }
            }
            await adapterData.adapter.setForeignStateAsync(stateId, valToSet, false, { user });
        }

        // Also write arm_state attribute if present
        if (ent.context.ATTRIBUTES) {
            const attr = ent.context.ATTRIBUTES.find(a => a.attribute === 'arm_state');
            if (attr?.setId) {
                let valToSet: ioBroker.StateValue = targetState;
                const attrMap = attr.map;
                if (attrMap) {
                    const numKey = Number(Object.keys(attrMap).find(k => attrMap[k] === targetState));
                    if (!isNaN(numKey)) {
                        valToSet = numKey;
                    }
                }
                await adapterData.adapter.setForeignStateAsync(attr.setId, valToSet, false, { user });
            }
        }
    };

    entity.context.COMMANDS = entity.context.COMMANDS ?? [];
    for (const service of [
        'alarm_arm_away',
        'alarm_arm_home',
        'alarm_arm_night',
        'alarm_arm_vacation',
        'alarm_arm_custom_bypass',
        'alarm_disarm',
    ]) {
        entity.context.COMMANDS.push({ service, parseCommand: processCommand });
    }

    return [entity];
}

/**
 * Create a manual alarm_control_panel entity.
 *
 * @param id - ioBroker state id (the main object)
 * @param obj - ioBroker object for the main state
 * @param entity - already created entity (entity.context.STATE pre-set by server.js)
 * @param objects - ioBroker objects cache
 * @param custom - custom settings from the ioBroker object
 * @returns array containing the augmented entity
 */
export function processManualEntity(
    id: string,
    obj: ioBroker.Object,
    entity: ioBrokerEntity,
    objects: Record<string, ioBroker.Object>,
    custom: Record<string, unknown>,
): ioBrokerEntity[] {
    const states = (custom.states as Record<string, string> | undefined) ?? { state: id };
    objects[id] = obj; // keep reference so fillAlarmControlPanelFromStates can read it
    return fillAlarmControlPanelFromStates(states, objects, entity);
}

adapterData.services.alarm_control_panel = {
    alarm_arm_away: {
        name: 'Arm away',
        description: 'Arms the alarm in away mode.',
        fields: {
            code: {
                selector: { number: null },
                name: 'Code',
                description: 'The code to arm the alarm.',
            },
        },
        target: { entity: [{ domain: ['alarm_control_panel'] }] },
    },
    alarm_arm_home: {
        name: 'Arm home',
        description: 'Arms the alarm in home mode.',
        fields: {
            code: {
                selector: { number: null },
                name: 'Code',
                description: 'The code to arm the alarm.',
            },
        },
        target: { entity: [{ domain: ['alarm_control_panel'] }] },
    },
    alarm_arm_night: {
        name: 'Arm night',
        description: 'Arms the alarm in night mode.',
        fields: {
            code: {
                selector: { number: null },
                name: 'Code',
                description: 'The code to arm the alarm.',
            },
        },
        target: { entity: [{ domain: ['alarm_control_panel'] }] },
    },
    alarm_arm_vacation: {
        name: 'Arm vacation',
        description: 'Arms the alarm in vacation mode.',
        fields: {
            code: {
                selector: { number: null },
                name: 'Code',
                description: 'The code to arm the alarm.',
            },
        },
        target: { entity: [{ domain: ['alarm_control_panel'] }] },
    },
    alarm_arm_custom_bypass: {
        name: 'Arm custom',
        description: 'Arms the alarm in custom mode.',
        fields: {
            code: {
                selector: { number: null },
                name: 'Code',
                description: 'The code to arm the alarm.',
            },
        },
        target: { entity: [{ domain: ['alarm_control_panel'] }] },
    },
    alarm_disarm: {
        name: 'Disarm',
        description: 'Disarms the alarm.',
        fields: {
            code: {
                required: true,
                selector: { number: null },
                name: 'Code',
                description: 'The code to disarm the alarm.',
            },
        },
        target: { entity: [{ domain: ['alarm_control_panel'] }] },
    },
};
