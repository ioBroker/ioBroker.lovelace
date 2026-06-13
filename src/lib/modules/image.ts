// eslint-disable-next-line @typescript-eslint/no-require-imports
const axios = require('axios');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const mime = require('mime');

interface EntityLike {
    attributes: { access_token?: string; [key: string]: unknown };
    context: {
        STATE: { getId?: string | null };
        ATTRIBUTES?: { attribute: string; getId: string }[];
    };
}

interface EntityData {
    entityId2Entity: Record<string, EntityLike>;
}

interface ImageResult {
    content_type: string;
    content: string;
}

/**
 * Resolve the user that may read the image, throwing on invalid credentials. Auth state (flows,
 * requestable files, config) lives in the server, so this is injected.
 */
type ResolveUserFn = (opts: {
    entityId: string;
    token: unknown;
    accessToken: unknown;
    url: unknown;
    reqUser: unknown;
    entity: EntityLike | undefined;
}) => string | undefined;

/**
 * Serves images referenced by entities (camera snapshots, weather icons, picture entities). Reads
 * the image from the entity's ioBroker state (data-URL, http(s) URL, or ioBroker file), or directly
 * from an `/adapter/...` file URL, and returns it base64-encoded. Also backs the camera proxy HTTP
 * routes and the deprecated `camera_thumbnail` WebSocket message.
 */
class ImageModule {
    private adapter: ioBroker.Adapter;
    private entityData: EntityData;
    private getUserIDFromName: (name: unknown) => unknown;
    private resolveUser: ResolveUserFn;

    constructor(options: {
        adapter: ioBroker.Adapter;
        entityData: EntityData;
        getUserIDFromName: (name: unknown) => unknown;
        resolveUser: ResolveUserFn;
    }) {
        this.adapter = options.adapter;
        this.entityData = options.entityData;
        this.getUserIDFromName = options.getUserIDFromName;
        this.resolveUser = options.resolveUser;
    }

    /**
     * Express handler for the camera proxy routes. Resolves the image and writes it to the response.
     *
     * @param req - incoming request
     * @param res - response to send the image with
     */
    async replyWithImage(req: any, res: any): Promise<void> {
        this.adapter.log.debug(
            `Get image for ${req.url} and entity ${req.params?.entity_id} with token=${req.query?.token} and signed=${req.query?.signed}`,
        );
        try {
            const data = await this.getImage(
                req.params?.entity_id,
                req.query?.token || 'empty',
                req.params?.entity_id ? req.query?.signed : req.query?.token,
                req.url,
                req._user,
            );
            res.setHeader('content-type', data.content_type);
            let content: Buffer | string = data.content;
            if (!data.content_type.includes('svg')) {
                content = Buffer.from(data.content, 'base64');
            }
            res.send(content);
        } catch (err: any) {
            this.adapter.log.warn(`Error in _getImage: ${err} - ${err.stack}`);
            res.status(404).json({ error: String(err) });
        }
    }

    /**
     * Read an image referenced by an entity (or a direct adapter file url) and return it base64.
     *
     * @param entity_id - id of the entity
     * @param token - access token for the entity itself
     * @param access_token - access token to check if the user is logged in
     * @param url - optional url to the image, if no entity is used
     * @param reqUser - user that requested the image
     * @returns image as base64 string with content type
     */
    async getImage(
        entity_id: string,
        token: unknown,
        access_token?: unknown,
        url?: unknown,
        reqUser?: unknown,
    ): Promise<ImageResult> {
        const entity = this.entityData.entityId2Entity[entity_id];
        const userName = this.resolveUser({
            entityId: entity_id,
            token,
            accessToken: access_token,
            url,
            reqUser,
            entity,
        });

        let id: string | null | undefined;
        if (entity?.context.STATE.getId) {
            id = entity.context.STATE.getId;
        } else if (entity?.context.ATTRIBUTES) {
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'url');
            if (attr) {
                id = attr.getId;
            }
        }

        if (id) {
            const user = this.getUserIDFromName(userName);
            const state = await this.adapter.getForeignStateAsync(id, { user: user as string });
            if (state && state.val && typeof state.val === 'string') {
                const val = state.val.split('?')[0] || '';
                // e.g. /adapter/daswetter/icons/tiempo-weather/galeria1/3.png
                if (val.startsWith('/adapter/')) {
                    url = state.val;
                } else if (state.val.startsWith('data')) {
                    const dataUrl = state.val;
                    const mimeType = dataUrl.substring(dataUrl.indexOf(':') + 1, dataUrl.indexOf(';'));
                    const encoding = dataUrl.substring(dataUrl.indexOf(';') + 1, dataUrl.indexOf(','));
                    if (encoding.localeCompare('base64', undefined, { sensitivity: 'base' }) !== 0) {
                        this.adapter.log.warn(`Wrong encoding: ${encoding}`);
                        throw new Error(`Wrong encoding: ${encoding}`);
                    }
                    return { content_type: mimeType || 'image/jpeg', content: dataUrl.split(',')[1] };
                } else {
                    const resp = await axios(state.val, { responseType: 'arraybuffer' });
                    return {
                        content_type: (mime.getType || mime.lookup).call(mime, val) || 'image/jpeg',
                        content: Buffer.from(resp.data, 'binary').toString('base64'),
                    };
                }
            } else {
                throw new Error(`State ${id} does not contain url to image`);
            }
        }

        if (url) {
            // try to get image from iobroker-data url:
            let urlStr = (url as string).replace(/^\/adapter\/([a-zA-Z0-9-_]+)(.admin)?\//, '/$1.admin/');
            const parts = urlStr.split('/');
            parts.shift(); // skip leading /
            const fileId = parts.shift();
            urlStr = parts.join('/');
            const pos = urlStr.indexOf('?');
            if (pos !== -1) {
                urlStr = urlStr.substring(0, pos);
            }

            let image;
            try {
                // ignore user here, read files as admin (users usually have no access). Token checked above.
                image = await this.adapter.readFileAsync(fileId as string, urlStr);
            } catch (err: any) {
                throw new Error(`Cannot download image: ${err}`);
            }
            if (image) {
                if (image.file === null || image.file === undefined) {
                    throw new Error('File empty or not found');
                }
                const mimeType = image.mimeType || (mime.getType || mime.lookup).call(mime, urlStr) || 'image/jpeg';
                return { content_type: mimeType, content: (image.file as Buffer).toString('base64') };
            }
        }

        throw new Error(`No url attribute found for ${entity_id} or no url supplied ${url as string}`);
    }
}

export = ImageModule;
