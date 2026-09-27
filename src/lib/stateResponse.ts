/** A state value prepared for an HTTP response. */
export interface StateResponse {
    /** Content type to answer with. */
    contentType: string;
    /** The body to send. */
    body: Buffer | string;
}

/**
 * Turn the value of an ioBroker state into an HTTP response, for the `/state/<id>` route.
 *
 * The route once served binary states (a camera writing its snapshot into one, referenced as
 * `/state/<id>` in a card). ioBroker has no binary states any more - js-controller 6 removed them
 * together with `getBinaryStateAsync` - so a state now holds its image as a data URL, and everything
 * else is text or JSON.
 *
 * @param value - the value of the state
 * @returns content type and body to send
 */
export function stateToResponse(value: ioBroker.StateValue | undefined): StateResponse {
    if (typeof value === 'string') {
        const dataUrl = /^data:([^;,]*)(;base64)?,/.exec(value);
        if (dataUrl) {
            const payload = value.substring(dataUrl[0].length);
            return {
                contentType: dataUrl[1] || 'application/octet-stream',
                body: dataUrl[2] ? Buffer.from(payload, 'base64') : Buffer.from(decodeURIComponent(payload), 'utf8'),
            };
        }
        return { contentType: 'text/plain', body: value };
    }
    if (value === null || value === undefined) {
        return { contentType: 'text/plain', body: '' };
    }
    if (typeof value === 'object') {
        return { contentType: 'application/json', body: JSON.stringify(value) };
    }
    return { contentType: 'text/plain', body: String(value) };
}
