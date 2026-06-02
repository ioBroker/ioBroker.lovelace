import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const MediaSourceModule = require('./mediaSource');

function makeModule(dirs: Record<string, { file: string; isDir: boolean }[]>): {
    mod: any;
    responses: any[];
} {
    const responses: any[] = [];
    const adapter = {
        namespace: 'lovelace.0',
        readDirAsync: (_ns: string, folder: string) => Promise.resolve(dirs[folder] || []),
        readFileAsync: () =>
            Promise.resolve({
                file: Buffer.from(JSON.stringify({ name: 'My Pic', content_type: 'image/png' })),
            }),
    };
    const mod = new MediaSourceModule({
        adapter,
        sendResponse: (_ws: unknown, _id: unknown, result: unknown) => responses.push(result),
    });
    return { mod, responses };
}

describe('modules/mediaSource', function () {
    it('returns false for non media_source messages', async function () {
        const { mod } = makeModule({});
        expect(await mod.processMessage({}, { type: 'get_states', id: 1 })).to.equal(false);
    });

    it('lists the two sources at the root', async function () {
        const { mod, responses } = makeModule({});
        const handled = await mod.processMessage({}, { type: 'media_source/browse_media', id: 1 });
        expect(handled).to.equal(true);
        const ids = responses[0].children.map((c: any) => c.media_content_id);
        expect(ids).to.include('media-source://image_upload');
        expect(ids).to.include('media-source://lovelace_cards');
    });

    it('lists uploaded images and skips .json sidecars', async function () {
        const { mod, responses } = makeModule({
            uploaded_images: [
                { file: 'abc-123', isDir: false },
                { file: 'abc-123.json', isDir: false },
            ],
        });
        await mod.processMessage(
            {},
            { type: 'media_source/browse_media', media_content_id: 'media-source://image_upload', id: 1 },
        );
        const children = responses[0].children;
        expect(children).to.have.lengthOf(1);
        expect(children[0].title).to.equal('My Pic');
        expect(children[0].media_content_id).to.equal('media-source://image_upload/abc-123');
        expect(children[0].thumbnail).to.equal('/api/image/serve/abc-123');
        expect(children[0].media_content_type).to.equal('image/png');
    });

    it('lists cards with a media class derived from the extension', async function () {
        const { mod, responses } = makeModule({
            '/cards/': [
                { file: 'my-card.js', isDir: false },
                { file: 'bg.png', isDir: false },
            ],
        });
        await mod.processMessage(
            {},
            { type: 'media_source/browse_media', media_content_id: 'media-source://lovelace_cards', id: 1 },
        );
        const children = responses[0].children;
        const png = children.find((c: any) => c.title === 'bg.png');
        const js = children.find((c: any) => c.title === 'my-card.js');
        expect(png.media_class).to.equal('image');
        expect(png.thumbnail).to.equal('/cards/bg.png');
        expect(js.media_class).to.equal('document');
    });

    it('resolves an uploaded image to its serve url and mime', async function () {
        const { mod, responses } = makeModule({});
        await mod.processMessage(
            {},
            { type: 'media_source/resolve_media', media_content_id: 'media-source://image_upload/abc-123', id: 1 },
        );
        expect(responses[0]).to.deep.equal({ url: '/api/image/serve/abc-123', mime_type: 'image/png' });
    });

    it('resolves a card file to its /cards/ url', async function () {
        const { mod, responses } = makeModule({});
        await mod.processMessage(
            {},
            { type: 'media_source/resolve_media', media_content_id: 'media-source://lovelace_cards/bg.png', id: 1 },
        );
        expect(responses[0]).to.deep.equal({ url: '/cards/bg.png', mime_type: 'image/png' });
    });
});
