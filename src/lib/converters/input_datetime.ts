import type { ioBrokerEntity, ServiceCallData } from './converter';
import { addID2entity } from '../entities/utils';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    adapter: ioBroker.Adapter;
    log: ioBroker.Logger;
    services: Record<string, unknown>;
};

/**
 * Zero-pad a number to two digits (e.g. 3 → "03", 12 → "12").
 *
 * @param n - the number to pad
 */
function pad0(n: number): string {
    return n < 10 ? `0${n}` : String(n);
}

/**
 * Rebuild entity.state from the date/time component attributes.
 *
 * @param entity - the input_datetime entity
 */
function stateFromAttributes(entity: ioBrokerEntity): void {
    const attrs = entity.attributes as Record<string, unknown>;
    entity.state = 'unknown';
    if (attrs.has_date) {
        entity.state = `${String(attrs.year)}-${pad0(attrs.month as number)}-${pad0(attrs.day as number)}`;
    }
    if (attrs.has_time) {
        if (!attrs.has_date) {
            entity.state = '';
        } else {
            entity.state += ' ';
        }
        entity.state += `${String(attrs.hour)}:${String(attrs.minute)}:${String(attrs.second)}`;
    }
}

/**
 * Explode a Date into the entity's year/month/day/hour/minute/second attributes.
 *
 * @param entity - the input_datetime entity
 * @param date - the Date to extract components from
 */
function timeToAttributes(entity: ioBrokerEntity, date: Date): void {
    const attrs = entity.attributes as Record<string, unknown>;
    if (attrs.has_date) {
        attrs.year = date.getFullYear();
        attrs.month = date.getMonth() + 1; // HA expects 1–12
        attrs.day = date.getDate();
    }
    if (attrs.has_time) {
        attrs.hour = pad0(date.getHours());
        attrs.minute = pad0(date.getMinutes());
        attrs.second = pad0(date.getSeconds());
    }
    stateFromAttributes(entity);
}

/**
 * Wire up the set_datetime command and STATE.getParser for an input_datetime entity.
 *
 * @param stateId - ioBroker state id to read/write the datetime from
 * @param isString - true when the ioBroker state type is 'string' (as opposed to timestamp ms)
 * @param entity - entity to augment in-place
 */
function fillInputDatetimeEntity(stateId: string, isString: boolean, entity: ioBrokerEntity): void {
    const attrs = entity.attributes as Record<string, unknown>;

    entity.context.COMMANDS = entity.context.COMMANDS ?? [];
    entity.context.COMMANDS.push({
        service: 'set_datetime',
        isString,
        setId: entity.context.STATE!.setId,
        parseCommand: async (ent, command, data: ServiceCallData, user): Promise<unknown> => {
            const sd = data.service_data as Record<string, string | undefined>;
            const entAttrs = ent.attributes as Record<string, unknown>;
            let date = new Date();

            if (entAttrs.has_date) {
                date = sd.date
                    ? new Date(sd.date)
                    : new Date(entAttrs.year as number, (entAttrs.month as number) - 1, entAttrs.day as number);
            }
            if (entAttrs.has_time && sd.time) {
                const parts = sd.time.split(':');
                date.setHours(parseInt(parts[0], 10));
                date.setMinutes(parseInt(parts[1], 10));
                date.setSeconds(parts[2] ? parseInt(parts[2], 10) : 0);
                date.setMilliseconds(0);
            }
            timeToAttributes(ent, date);

            const targetData: ioBroker.StateValue = command.isString ? ent.state : date.getTime();
            return adapterData.adapter.setForeignStateAsync(command.setId!, targetData, false, { user });
        },
    });

    entity.context.STATE!.getParser = (ent, _attr, iobState): void => {
        const s = iobState ?? ({ val: null } as ioBroker.State);
        const entAttrs = ent.attributes as Record<string, unknown>;
        if (typeof s.val === 'number') {
            const date = new Date(s.val);
            if (date.getTime() >= 0) {
                timeToAttributes(ent, date);
            } else {
                adapterData.log.warn(`${String(s.val)} is not a valid date. Error in ${ent.entity_id}`);
                ent.state = String(s.val) || 'unknown';
            }
        } else if (typeof s.val === 'string') {
            let timeStr: string | undefined;
            let dateStr: string | undefined;

            if (/\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{1,2}(:\d{1,2})?/.test(s.val)) {
                [dateStr, timeStr] = s.val.split(' ');
            } else if (/\d{2,4}-\d{1,2}-\d{1,2}/.test(s.val)) {
                dateStr = s.val;
            } else if (/\d{1,2}:\d{1,2}(:\d{1,2})?/.test(s.val)) {
                timeStr = s.val;
            }

            if (dateStr) {
                const parts = dateStr.split('-');
                entAttrs.year = Number(parts[0]) || 1970;
                entAttrs.month = Number(parts[1]) || 1;
                entAttrs.day = Number(parts[2]) || 1;
            }
            if (timeStr) {
                const parts = timeStr.split(':');
                entAttrs.hour = Number(parts[0]) || 0;
                entAttrs.minute = Number(parts[1]) || 0;
                entAttrs.second = parts[2] ? Number(parts[2]) : 0;
            }
            stateFromAttributes(ent);
        } else {
            adapterData.log.warn(`${String(s.val)} is not a valid date. Error in ${ent.entity_id}`);
            ent.state = '2022-04-10 20:23'; // dummy date so UI doesn't error
        }
    };

    // TODO: why is capabilities set here? It seems only entityRegistry reads it. Review when server.js is migrated.
    entity.context.capabilities = {
        has_date: attrs.has_date as boolean,
        has_time: attrs.has_time as boolean,
    };

    addID2entity(stateId, entity);
}

/**
 * Create a manual input_datetime entity.
 *
 * @param id - ioBroker state id (the main object)
 * @param _obj - ioBroker object (unused; type info is read from objects cache)
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
    const states = (custom.states as Record<string, string> | undefined) ?? { state: id };
    const stateId = states.state ?? id;

    const isString =
        !!objects[stateId] &&
        !!(objects[stateId].common as Record<string, unknown>)?.type &&
        (objects[stateId].common as Record<string, unknown>).type === 'string';

    // has_time defaults false, has_date defaults true
    const attrs = entity.attributes as Record<string, unknown>;
    attrs.has_time = custom.attr_has_time !== undefined ? custom.attr_has_time : (custom.has_time ?? false);
    attrs.has_date =
        custom.attr_has_date !== undefined
            ? custom.attr_has_date
            : custom.has_date === undefined
              ? true
              : custom.has_date;

    fillInputDatetimeEntity(stateId, isString, entity);
    return [entity];
}

adapterData.services.input_datetime = {
    set_datetime: {
        name: 'Set',
        description: 'Sets the date and/or time.',
        fields: {
            date: {
                example: '"2019-04-20"',
                selector: { text: null },
                name: 'Date',
                description: 'The target date.',
            },
            time: {
                example: '"05:04:20"',
                selector: { time: null },
                name: 'Time',
                description: 'The target time.',
            },
            datetime: {
                example: '"2019-04-20 05:04:20"',
                selector: { text: null },
                name: 'Date & time',
                description: 'The target date & time.',
            },
            timestamp: {
                selector: {
                    number: {
                        min: 0,
                        // eslint-disable-next-line no-loss-of-precision
                        max: 9223372036854775807,
                        mode: 'box',
                    },
                },
                name: 'Timestamp',
                description: 'The target date & time, expressed by a UNIX timestamp.',
            },
        },
        target: { entity: [{ domain: ['input_datetime'] }] },
    },
};
