import type { BaseEntity } from './baseEntity';
import { generateAccessToken } from './utils';

/** Where the frontend loads the picture of an image entity from. */
export const IMAGE_PROXY_PATH = '/api/image_proxy';

/**
 * Url the frontend builds for an image entity, rebuilt here for the places that ask us for it (the
 * media browser, and the `entity_picture` attribute).
 *
 * @param entityId - the entity the image belongs to
 * @param accessToken - the entity's access token
 * @param state - the entity state, which changes whenever the picture changed
 * @returns the url, or undefined without an access token
 */
export function imageProxyUrl(entityId: string, accessToken: unknown, state: string): string | undefined {
    return accessToken ? `${IMAGE_PROXY_PATH}/${entityId}?token=${accessToken as string}&state=${state}` : undefined;
}

/**
 * Turn a pre-built BaseEntity into a Home Assistant `image` entity fed from an ioBroker state that
 * holds a picture - a url, a data url or a path into the ioBroker file storage.
 *
 * Unlike the `camera` domain (which the auto-detected image devices use, see `cameraEntity`), an
 * image entity is a still picture: the frontend shows it without any stream or live-view controls.
 * Its state is the time the picture last changed, which is what makes the url the frontend builds
 * change too - otherwise the browser would keep showing the picture it cached.
 *
 * @param entity - entity to mutate
 * @param urlStateId - ioBroker state id that holds the picture
 */
export function applyImageAttributes(entity: BaseEntity, urlStateId: string): void {
    entity.context.STATE.getId = urlStateId;
    entity.context.STATE.setId = null;
    entity.attributes.access_token = generateAccessToken();
    entity.context.STATE.getParser = (ent: BaseEntity, _attr: string, state: ioBroker.State): void => {
        ent.state = new Date(state.lc || state.ts || Date.now()).toISOString();
        ent.attributes.entity_picture = imageProxyUrl(ent.entity_id, ent.attributes.access_token, ent.state);
    };
    entity.addID2entity(urlStateId);
}
