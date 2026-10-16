import { expect } from 'chai';
import { applyImageAttributes, imageProxyUrl } from './imageEntity';

/** Minimal stand-in for the parts of a BaseEntity the image helper touches. */
function makeEntity(): any {
    const registered: string[] = [];
    return {
        entity_id: 'image.doorbell',
        state: 'unknown',
        attributes: {} as Record<string, unknown>,
        context: { STATE: { getId: null, setId: 'lovelace.0.doorbell' } as any },
        registered,
        addID2entity(id: string) {
            registered.push(id);
        },
    };
}

describe('entities/imageEntity', function () {
    it('reads the picture from the given state and stops writing to it', function () {
        const entity = makeEntity();
        applyImageAttributes(entity, 'lovelace.0.doorbell.snapshot');

        expect(entity.context.STATE.getId).to.equal('lovelace.0.doorbell.snapshot');
        expect(entity.context.STATE.setId).to.equal(null);
        expect(entity.registered).to.deep.equal(['lovelace.0.doorbell.snapshot']);
        expect(entity.attributes.access_token).to.be.a('string').with.length.above(0);
    });

    it('states when the picture last changed, so the browser reloads it', function () {
        const entity = makeEntity();
        applyImageAttributes(entity, 'lovelace.0.doorbell.snapshot');
        const token = entity.attributes.access_token;

        entity.context.STATE.getParser(entity, 'state', { val: 'http://host/a.png', lc: 1760601600000, ts: 1 });
        expect(entity.state).to.equal('2025-10-16T08:00:00.000Z');
        expect(entity.attributes.entity_picture).to.equal(
            `/api/image_proxy/image.doorbell?token=${token}&state=2025-10-16T08:00:00.000Z`,
        );

        entity.context.STATE.getParser(entity, 'state', { val: 'http://host/b.png', lc: 1760601660000, ts: 1 });
        expect(entity.attributes.entity_picture).to.contain('2025-10-16T08:01:00.000Z');
    });

    it('has no url without an access token', function () {
        expect(imageProxyUrl('image.a', undefined, 'x')).to.equal(undefined);
    });
});
