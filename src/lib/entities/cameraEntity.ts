import crypto from 'crypto';
import { BaseEntity } from './baseEntity';
import type { ConverterParameters } from '../converters/converter';

/**
 * Generate a non-cryptographic random access-token used by HA when fetching the
 * camera image URL. Matches the pattern used by the original JS converter.
 */
function generateAccessToken(): string {
    return crypto
        .createHmac('sha256', (crypto.webcrypto.getRandomValues(new Uint32Array(1))[0] * 1_000_000_000).toString())
        .update(Date.now().toString())
        .digest('hex');
}

/**
 * Apply the standard "camera URL" attributes to a pre-built BaseEntity.  Shared between
 * the auto-detected CameraEntity constructor and server.ts's manual-entity path.
 *
 * @param entity - entity to mutate
 * @param urlStateId - ioBroker state id that holds the image URL
 */
export function applyCameraUrlAttributes(entity: BaseEntity, urlStateId: string): void {
    entity.context.STATE.getValue = 'on';
    entity.context.STATE.getId = null;
    entity.context.ATTRIBUTES = [{ getId: urlStateId, attribute: 'url' }];
    entity.attributes.code_format = 'number';
    entity.attributes.access_token = generateAccessToken();
    entity.attributes.model_name = 'Simulated URL';
    entity.attributes.brand = 'ioBroker';
    entity.attributes.motion_detection = false;
    entity.addID2entity(urlStateId);
}

/**
 * CameraEntity — single class for the Home Assistant `camera` domain.
 *
 * Auto-detected camera entities expose an "image URL" pulled from a ioBroker state.
 * No service calls are routed here — the HA camera services are unsupported.
 */
export class CameraEntity extends BaseEntity {
    /**
     * @param params - converter parameters from the type-detector
     */
    constructor(params: ConverterParameters) {
        const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
        super(friendlyName, room, func, objects[id], 'camera', forcedEntityId);

        this.context.STATE.getId = null;
        this.context.ATTRIBUTES = [];
        this.attributes.icon = 'mdi:camera-outline';

        const state = controls.states.find(s => s.id && s.name === 'URL');
        if (state?.id) {
            applyCameraUrlAttributes(this, state.id);
        }
    }
}
