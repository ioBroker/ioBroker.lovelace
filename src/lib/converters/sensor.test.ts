import { expect } from 'chai';
import { Types } from '@iobroker/type-detector';
import type { PatternControl } from '@iobroker/type-detector/types';
import { SensorConverter } from './sensor';
import type { ConverterParameters } from './converter';

const DEVICE_ID = 'test.window_with_tilt';
const STATE_ID = `${DEVICE_ID}.state`;

function makeObj(id: string, name = 'Test Device'): ioBroker.Object {
    return { _id: id, type: 'device', common: { name, role: '' }, native: {} } as ioBroker.Object;
}

function makeParameters(
    states: Array<{ id?: string; name: string }>,
    overrides: Partial<ConverterParameters> = {},
): ConverterParameters {
    const objects: Record<string, ioBroker.Object> = { [DEVICE_ID]: makeObj(DEVICE_ID, 'Some Window') };
    for (const s of states) {
        if (s.id) {
            objects[s.id] = makeObj(s.id, s.name);
        }
    }
    return {
        id: DEVICE_ID,
        controls: { states, type: Types.windowTilt } as unknown as PatternControl,
        friendlyName: undefined,
        room: undefined,
        func: undefined,
        objects,
        existingEntities: [],
        adapter: { log: { debug: () => {}, warn: () => {} } } as unknown as ioBroker.Adapter,
        entityRegistry: { getEntityId: () => undefined, storeEntityId: () => {} },
        ...overrides,
    };
}

describe('converters/sensor', function () {
    it('windowTilt', function () {
        const params = makeParameters([{ id: STATE_ID, name: 'ACTUAL' }]);
        const entities = SensorConverter.convertEntities(params);

        expect(entities).to.have.lengthOf(1);
        const entity = entities[0];
        expect(entity).to.have.nested.property('attributes.icon', 'mdi:window-maximize');
        expect(entity).to.have.nested.property('attributes.device_class', 'window');
        expect(entity).to.have.nested.property('context.STATE');
        expect(entity).to.have.nested.property('context.STATE.getId', STATE_ID);
    });

    it('windowTilt without state id leaves STATE.getId null', function () {
        const params = makeParameters([{ name: 'ACTUAL' }]);
        const entities = SensorConverter.convertEntities(params);
        expect(entities).to.have.lengthOf(1);
        expect(entities[0].context.STATE?.getId).to.be.null;
    });

    it('windowTilt registers STATE_ID in iobIds', function () {
        const params = makeParameters([{ id: STATE_ID, name: 'ACTUAL' }]);
        const entities = SensorConverter.convertEntities(params);
        expect(entities[0].iobIds).to.include(STATE_ID);
    });

    it('windowTilt entity_id is derived from device name', function () {
        const params = makeParameters([{ id: STATE_ID, name: 'ACTUAL' }]);
        const entities = SensorConverter.convertEntities(params);
        expect(entities[0].entity_id).to.match(/^sensor\./);
    });
});
