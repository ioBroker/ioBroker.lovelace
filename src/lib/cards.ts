/**
 * Helpers around the custom cards a user uploaded into the adapter's `cards` folder.
 */

/** A version number as cards write it: 1.2, 1.2.3, 1.2.3-beta.1. */
const SEMVER = '(\\d+\\.\\d+(?:\\.\\d+)?(?:[-+][0-9A-Za-z.]+)?)';

/**
 * Resolve `name = "1.2.3"` for a (usually minified) variable name.
 *
 * @param content - the card's source
 * @param name - the variable to resolve
 * @returns the version, or undefined when the variable holds something else
 */
function resolveVariable(content: string, name: string): string | undefined {
    const match = new RegExp(`(?:^|[^\\w$.])${name}\\s*=\\s*["'\`]v?${SEMVER}["'\`]`).exec(content);
    return match?.[1];
}

/**
 * Find the version of a custom card in its source.
 *
 * Cards have no metadata file, but nearly all of them print a console banner on load
 * (`console.info("%c MINI-GRAPH-CARD %c v0.12.1 ", ...)`). The banner is looked at first, because
 * it names the card itself - a bundled library's own "version" string would win otherwise. Both a
 * literal version and the usual `${VERSION}` / `.concat(VERSION)` of a minified build are resolved.
 *
 * @param content - the card's source
 * @returns the version, or undefined when none was found
 */
export function detectCardVersion(content: string): string | undefined {
    const bannerRegEx = /%c/g;
    let banner = bannerRegEx.exec(content);
    while (banner) {
        // The version follows the card name within the same console.info call.
        const window = content.substring(banner.index, banner.index + 250);
        const literal = new RegExp(`[vV](?:ersion)?\\.?\\s*${SEMVER}`).exec(window);
        if (literal) {
            return literal[1];
        }
        const reference = /\$\{(\w+)\}|\.concat\((\w+)/.exec(window);
        const resolved = reference && resolveVariable(content, reference[1] || reference[2]);
        if (resolved) {
            return resolved;
        }
        banner = bannerRegEx.exec(content);
    }

    // No (usable) banner: fall back to a version constant.
    const constant = new RegExp(`(?:card[_ ]?version|version)["'\`\\s:=]{1,12}v?${SEMVER}`, 'i').exec(content);
    return constant?.[1];
}

/** What `readDir` tells us about a file; enough to see whether it changed. */
export interface FileStamp {
    /** Timestamp of the last change, as readDir reports it. */
    modifiedAt?: number;
    /** File system stats, the fallback when there is no modifiedAt. */
    stats?: { mtimeMs?: number; size?: number };
}

/**
 * Version marker for a custom card's url, so a replaced file is loaded instead of the cached copy.
 *
 * A new version of a card is uploaded under the same file name, and the browser caches modules by
 * url - without this it keeps running the old card until its cache expires.
 *
 * @param file - the entry from readDir
 * @returns a query string like "?v=1758...", empty when the file carries no timestamp at all
 */
export function cacheBuster(file: FileStamp): string {
    const version = file.modifiedAt || file.stats?.mtimeMs || file.stats?.size;
    return version ? `?v=${version}` : '';
}
