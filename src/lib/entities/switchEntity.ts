import { Types } from '@iobroker/type-detector';
import { BaseEntity } from './baseEntity';
import type { ConverterParameters } from '../converters/converter';

/**
 * SwitchEntity — single class for the Home Assistant `switch` domain (sockets and buttons).
 *
 * Reads SET (write target) and ACTUAL (read source) from controls.states. When ACTUAL is
 * a known zigbee availability/query state, it is ignored as a state source.
 */
export class SwitchEntity extends BaseEntity {
    /** @param params - converter parameters */
    constructor(params: ConverterParameters) {
        const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
        super(friendlyName, room, func, objects[id], 'switch', forcedEntityId);

        this.context.STATE.setId = null;
        this.context.STATE.getId = null;

        const setState = controls.states.find(s => s.id && s.name === 'SET');
        if (setState?.id) {
            this.context.STATE.setId = setState.id;
            this.context.STATE.getId = setState.id;
            if (controls.type === Types.socket) {
                this.attributes.icon = 'mdi:power-socket-eu';
                this.attributes.device_class = 'outlet';
            } else {
                this.attributes.device_class = 'switch';
            }
            this.addID2entity(setState.id);
        }

        const actualState = controls.states.find(s => s.id && s.name === 'ACTUAL');
        if (actualState?.id) {
            // Skip zigbee availability/query states — they are not the actual switch state
            if (
                !actualState.id.startsWith('zigbee.') ||
                !actualState.id.endsWith('.available') ||
                !actualState.id.endsWith('.device_query')
            ) {
                this.context.STATE.getId = actualState.id;
                this.addID2entity(actualState.id);
            }
        }
    }
}
