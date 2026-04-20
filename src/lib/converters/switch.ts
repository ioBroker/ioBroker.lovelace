import { Types } from '@iobroker/type-detector';
import Converter, { type ConverterParameters, type ioBrokerEntity } from './converter';
import { processCommon, addID2entity } from '../entities/utils';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const adapterData: { services: Record<string, unknown> } = require('../../../lib/dataSingleton');

/** Converter for switch (socket outlet) and button device types. */
export class SwitchConverter extends Converter {
    /** @inheritdoc */
    static convertEntities(params: ConverterParameters): ioBrokerEntity[] {
        const { controls, objects, forcedEntityId, friendlyName, room, func } = params;
        const entity = processCommon(friendlyName, room, func, objects[params.id], 'switch', forcedEntityId);

        entity.context.STATE = { setId: null, getId: null };

        let state = controls.states.find(s => s.id && s.name === 'SET');
        if (state?.id) {
            entity.context.STATE.setId = state.id;
            entity.context.STATE.getId = state.id;
            if (controls.type === Types.socket) {
                entity.attributes.icon = 'mdi:power-socket-eu';
                entity.attributes.device_class = 'outlet';
            } else {
                entity.attributes.device_class = 'switch';
            }
            addID2entity(state.id, entity);
        }

        state = controls.states.find(s => s.id && s.name === 'ACTUAL');
        if (state?.id) {
            // Skip zigbee availability/query states — they are not the actual switch state
            if (
                !state.id.startsWith('zigbee.') ||
                !state.id.endsWith('.available') ||
                !state.id.endsWith('.device_query')
            ) {
                entity.context.STATE.getId = state.id;
                addID2entity(state.id, entity);
            }
        }

        return [entity];
    }
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
