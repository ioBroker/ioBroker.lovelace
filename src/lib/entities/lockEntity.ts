import { BaseEntity } from './baseEntity';
import type { ConverterParameters } from '../converters/converter';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData = require('../../../lib/dataSingleton') as {
    adapter: ioBroker.Adapter;
};

/**
 * LockEntity — single class for the Home Assistant `lock` domain.
 *
 * Reads SET (write target), ACTUAL (read source), and OPEN (separate state for the
 * "open" service) from controls.states.
 */
export class LockEntity extends BaseEntity {
    /** @param params - converter parameters */
    constructor(params: ConverterParameters) {
        const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
        super(friendlyName, room, func, objects[id], 'lock', forcedEntityId);

        this.context.STATE.setId = null;
        this.context.STATE.getId = null;

        const setState = controls.states.find(s => s.id && s.name === 'SET');
        if (setState?.id) {
            this.context.STATE.setId = setState.id;
            this.context.STATE.getId = setState.id;
            this.addID2entity(setState.id);
        }

        const actualState = controls.states.find(s => s.id && s.name === 'ACTUAL');
        if (actualState?.id) {
            this.context.STATE.getId = actualState.id;
            this.addID2entity(actualState.id);
        }

        const openState = controls.states.find(s => s.id && s.name === 'OPEN');
        if (openState?.id) {
            const openId = openState.id;
            this.attributes.supported_features = 1;
            this.context.COMMANDS = [
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
    }
}
