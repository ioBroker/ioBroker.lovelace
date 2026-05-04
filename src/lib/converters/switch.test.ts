import { expect } from 'chai';
import { Types } from '@iobroker/type-detector';
import type { PatternControl } from '@iobroker/type-detector/types';
import { SwitchConverter } from './switch';
import type { ConverterParameters } from './converter';

const DEVICE_ID = 'test.socket';
const SET_ID = `${DEVICE_ID}.state`;
const ACTUAL_ID = `${DEVICE_ID}.readState`;

function makeObj(id: string, name = 'Test Device'): ioBroker.Object {
    return { _id: id, type: 'device', common: { name, role: '' }, native: {} } as ioBroker.Object;
}

function makeParameters(
    states: Array<{ id?: string; name: string }>,
    type: Types = Types.socket,
    overrides: Partial<ConverterParameters> = {},
): ConverterParameters {
    const objects: Record<string, ioBroker.Object> = { [DEVICE_ID]: makeObj(DEVICE_ID, 'Some Socket') };
    for (const s of states) {
        if (s.id) {
            objects[s.id] = makeObj(s.id, s.name);
        }
    }
    return {
        id: DEVICE_ID,
        controls: { states, type } as unknown as PatternControl,
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

describe('converters/switch', function () {
    it('socket', function () {
        const params = makeParameters([{ id: SET_ID, name: 'SET' }]);
        const entities = SwitchConverter.convertEntities(params);

        expect(entities).to.have.lengthOf(1);
        const entity = entities[0];
        expect(entity).to.have.nested.property('attributes.icon', 'mdi:power-socket-eu');
        expect(entity).to.have.nested.property('context.STATE');
        expect(entity).to.have.nested.property('context.STATE.setId', SET_ID);
        expect(entity).to.have.nested.property('context.STATE.getId', SET_ID);
    });

    it('socket with ACTUAL', function () {
        const params = makeParameters([
            { id: SET_ID, name: 'SET' },
            { id: ACTUAL_ID, name: 'ACTUAL' },
        ]);
        const entities = SwitchConverter.convertEntities(params);

        expect(entities).to.have.lengthOf(1);
        const entity = entities[0];
        expect(entity).to.have.nested.property('attributes.icon', 'mdi:power-socket-eu');
        expect(entity).to.have.nested.property('context.STATE');
        expect(entity).to.have.nested.property('context.STATE.setId', SET_ID);
        expect(entity).to.have.nested.property('context.STATE.getId', ACTUAL_ID);
    });

    it('button', function () {
        const buttonId = 'test.button';
        const buttonStateId = `${buttonId}.state`;
        const objects: Record<string, ioBroker.Object> = {
            [buttonId]: makeObj(buttonId, 'Some Button'),
            [buttonStateId]: makeObj(buttonStateId, 'SET'),
        };
        const params: ConverterParameters = {
            id: buttonId,
            controls: {
                states: [{ id: buttonStateId, name: 'SET' }],
                type: Types.button,
            } as unknown as PatternControl,
            friendlyName: undefined,
            room: undefined,
            func: undefined,
            objects,
            existingEntities: [],
            adapter: { log: { debug: () => {}, warn: () => {} } } as unknown as ioBroker.Adapter,
            entityRegistry: { getEntityId: () => undefined, storeEntityId: () => {} },
        };

        const entities = SwitchConverter.convertEntities(params);
        expect(entities).to.have.lengthOf(1);
        const entity = entities[0];
        expect(entity).to.not.have.nested.property('attributes.icon');
        expect(entity).to.have.nested.property('context.STATE');
        expect(entity).to.have.nested.property('context.STATE.setId', buttonStateId);
    });

    it('socket registers SET_ID in iobIds', function () {
        const params = makeParameters([{ id: SET_ID, name: 'SET' }]);
        const entities = SwitchConverter.convertEntities(params);
        expect(entities[0].iobIds).to.include(SET_ID);
    });

    it('socket with ACTUAL registers both ids in iobIds', function () {
        const params = makeParameters([
            { id: SET_ID, name: 'SET' },
            { id: ACTUAL_ID, name: 'ACTUAL' },
        ]);
        const entities = SwitchConverter.convertEntities(params);
        expect(entities[0].iobIds).to.include(SET_ID);
        expect(entities[0].iobIds).to.include(ACTUAL_ID);
    });
});
