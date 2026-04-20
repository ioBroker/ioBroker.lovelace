import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { processCommon, addID2entity } from '../entities/utils';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    adapter: ioBroker.Adapter;
    services: Record<string, unknown>;
};

/** Converter for lock device types. */
export class LockConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        const { controls, objects, forcedEntityId, friendlyName, room, func } = params;
        const entity = processCommon(friendlyName, room, func, objects[params.id], 'lock', forcedEntityId);

        entity.context.STATE = { setId: null, getId: null };

        let state = controls.states.find(s => s.id && s.name === 'SET');
        if (state?.id) {
            entity.context.STATE.setId = state.id;
            entity.context.STATE.getId = state.id; // fallback if no ACTUAL getId
            addID2entity(state.id, entity);
        }

        state = controls.states.find(s => s.id && s.name === 'ACTUAL');
        if (state?.id) {
            entity.context.STATE.getId = state.id;
            addID2entity(state.id, entity);
        }

        state = controls.states.find(s => s.id && s.name === 'OPEN');
        if (state?.id) {
            const openId = state.id;
            entity.attributes.supported_features = 1;
            entity.context.COMMANDS = [
                {
                    service: 'open',
                    setId: openId,
                    parseCommand: (_entity, command, _data, _user) => {
                        return new Promise((resolve, reject) => {
                            adapterData.adapter.setForeignState(command.setId!, true, false, { user: _user }, err =>
                                err ? reject(err) : resolve(undefined),
                            );
                        });
                    },
                },
            ];
        }

        return [entity];
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
