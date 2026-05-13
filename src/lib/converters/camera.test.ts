import { expect } from 'chai';
import { Types } from '@iobroker/type-detector';
import type { PatternControl } from '@iobroker/type-detector/types';
import { CameraEntity } from '../entities/cameraEntity';
import type { ConverterParameters } from './converter';

const DEVICE_ID = 'test.camera_device';
const URL_ID = `${DEVICE_ID}.url`;

function makeObj(id: string, name = 'Test Device'): ioBroker.Object {
    return { _id: id, type: 'device', common: { name, role: '' }, native: {} } as ioBroker.Object;
}

function makeParameters(
    states: Array<{ id?: string; name: string }>,
    type: Types = Types.image,
    overrides: Partial<ConverterParameters> = {},
): ConverterParameters {
    const objects: Record<string, ioBroker.Object> = { [DEVICE_ID]: makeObj(DEVICE_ID, 'Some Camera') };
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

describe('converters/camera', function () {
    it('entity_id starts with camera domain', function () {
        const params = makeParameters([{ id: URL_ID, name: 'URL' }]);
        const entity = new CameraEntity(params);

        expect(entity.entity_id).to.match(/^camera\./);
    });

    describe('with URL state', function () {
        it('context.STATE.getId === URL_ID', function () {
            const params = makeParameters([{ id: URL_ID, name: 'URL' }]);
            const entity = new CameraEntity(params);

            expect(entity.context.STATE.getId).to.equal(URL_ID);
        });

        it('context.STATE.getParser sets entity.state to "on" for truthy URL value', function () {
            const params = makeParameters([{ id: URL_ID, name: 'URL' }]);
            const entity = new CameraEntity(params);
            const state = {
                val: 'http://example.com/img.jpg',
                ts: 0,
                lc: 0,
                ack: true,
                from: '',
                q: 0,
            } as ioBroker.State;

            entity.context.STATE.getParser!(entity, 'state', state);
            expect(entity.state).to.equal('on');
        });

        it('context.STATE.getParser sets entity.state to "off" for empty URL value', function () {
            const params = makeParameters([{ id: URL_ID, name: 'URL' }]);
            const entity = new CameraEntity(params);
            const state = { val: '', ts: 0, lc: 0, ack: true, from: '', q: 0 } as ioBroker.State;

            entity.context.STATE.getParser!(entity, 'state', state);
            expect(entity.state).to.equal('off');
        });

        it('ATTRIBUTES has one entry with attribute "url" and correct getId', function () {
            const params = makeParameters([{ id: URL_ID, name: 'URL' }]);
            const entity = new CameraEntity(params);

            expect(entity.context.ATTRIBUTES).to.have.lengthOf(1);
            expect(entity.context.ATTRIBUTES[0].attribute).to.equal('url');
            expect(entity.context.ATTRIBUTES[0].getId).to.equal(URL_ID);
        });

        it('attributes.access_token is a non-empty string', function () {
            const params = makeParameters([{ id: URL_ID, name: 'URL' }]);
            const entity = new CameraEntity(params);

            expect(entity.attributes.access_token).to.be.a('string').and.have.length.greaterThan(0);
        });

        it('attributes.model_name === "Simulated URL"', function () {
            const params = makeParameters([{ id: URL_ID, name: 'URL' }]);
            const entity = new CameraEntity(params);

            expect(entity.attributes.model_name).to.equal('Simulated URL');
        });

        it('attributes.brand === "ioBroker"', function () {
            const params = makeParameters([{ id: URL_ID, name: 'URL' }]);
            const entity = new CameraEntity(params);

            expect(entity.attributes.brand).to.equal('ioBroker');
        });

        it('attributes.motion_detection === false', function () {
            const params = makeParameters([{ id: URL_ID, name: 'URL' }]);
            const entity = new CameraEntity(params);

            expect(entity.attributes.motion_detection).to.equal(false);
        });

        it('iobIds includes URL_ID', function () {
            const params = makeParameters([{ id: URL_ID, name: 'URL' }]);
            const entity = new CameraEntity(params);

            expect(entity.iobIds).to.include(URL_ID);
        });
    });

    describe('without URL state', function () {
        it('context.ATTRIBUTES is empty', function () {
            const params = makeParameters([]);
            const entity = new CameraEntity(params);

            expect(entity.context.ATTRIBUTES).to.be.empty;
        });

        it('attributes.access_token is undefined', function () {
            const params = makeParameters([]);
            const entity = new CameraEntity(params);

            expect(entity.attributes.access_token).to.be.undefined;
        });

        it('context.STATE.getId === null', function () {
            const params = makeParameters([]);
            const entity = new CameraEntity(params);

            expect(entity.context.STATE.getId).to.be.null;
        });
    });
});
