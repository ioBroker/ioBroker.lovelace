/* global it before */
const WebSocket = require('ws');
const tools = require('./testTools');
const expect = require('chai').expect;

/**
 * Ask the adapter for the children of a media source, the way the picture picker does.
 *
 * @param mediaContentId media source to list the children of
 */
async function browseMediaSource(mediaContentId) {
    const client = new WebSocket(`ws://localhost:${tools.lovelacePort}`);
    try {
        return await new Promise((resolve, reject) => {
            const request = JSON.stringify({
                id: 1,
                type: 'media_source/browse_media',
                media_content_id: mediaContentId,
            });
            client.on('error', reject);
            client.on('open', () => client.send(request));
            client.on('message', data => {
                for (const message of [].concat(JSON.parse(data.toString('utf8')))) {
                    if (message.type === 'auth_required' || message.type === 'auth_ok') {
                        client.send(JSON.stringify({ type: 'auth', access_token: 'no_token' }));
                        client.send(request);
                    } else if (message.id === 1 && message.type === 'result') {
                        resolve(message.result);
                    }
                }
            });
        });
    } finally {
        client.close();
    }
}

exports.runTests = function (suite) {
    suite('manual_image', getHarness => {
        let harness;
        let entities;

        // An ioBroker state holding a picture, mapped to the Home Assistant `image` domain. The
        // auto-detected image devices stay cameras, so no existing dashboard changes.
        const jsonFiles = ['../testData/manual_image.json'];
        const id = '0_userdata.0.doorbell_snapshot';
        // 1 x 1 png
        const png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFAAH/q842iQAAAABJRU5ErkJggg==';

        const idsWithEnums = [];
        before(async () => {
            tools.clearClient();
            harness = getHarness();
            const objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, [
                { id, val: `data:image/png;base64,${png}` },
            ]);
        });

        it('builds an image entity that says when the picture last changed', () => {
            const entity = entities.find(e => e.entity_id === 'image.doorbell');
            expect(entity).to.be.ok;
            expect(entity.context.STATE.getId).to.equal(id);
            // The state is a timestamp, which is what makes the url the frontend builds change.
            expect(new Date(entity.state).toISOString()).to.equal(entity.state);
            expect(entity.attributes.access_token).to.be.a('string');
            expect(entity.attributes.entity_picture).to.equal(
                `/api/image_proxy/image.doorbell?token=${entity.attributes.access_token}&state=${entity.state}`,
            );
        });

        it('serves the picture under /api/image_proxy', async () => {
            // The access token is only checked when the adapter asks for a login at all - as for the
            // camera proxy. Without authentication every route is open anyway.
            const entity = entities.find(e => e.entity_id === 'image.doorbell');
            const url = `http://localhost:${tools.lovelacePort}/api/image_proxy/image.doorbell`;

            const response = await fetch(`${url}?token=${entity.attributes.access_token}`);
            expect(response.status).to.equal(200);
            expect(response.headers.get('content-type')).to.equal('image/png');
            expect(Buffer.from(await response.arrayBuffer()).toString('base64')).to.equal(png);
        });

        it('offers the image entity in the media browser, as a background picture can be picked there', async () => {
            const result = await browseMediaSource('media-source://image');
            const children = result.children || [];
            expect(children.map(child => child.media_content_id)).to.include('media-source://image/image.doorbell');
        });
    });
};
