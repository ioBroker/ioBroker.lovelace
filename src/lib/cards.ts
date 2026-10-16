/**
 * Helpers around the custom cards a user uploaded into the adapter's `cards` folder.
 */
import { readFileSync } from 'node:fs';

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

/** Version of this adapter, used as the cache marker of the cards we ship ourselves. */
const ADAPTER_VERSION: string = (
    JSON.parse(readFileSync(`${__dirname}/../../package.json`, 'utf8')) as { version: string }
).version;

/**
 * Url of a card that ships with the adapter (`hass_frontend/static_cards`, e.g. browser_mod).
 *
 * Those files keep their name forever and are replaced by an adapter update, so the url carries
 * the adapter version. Without it the browser would keep the copy of the previous adapter version
 * in its cache, and the url could not be cached for good either.
 *
 * @param file - file name below `static_cards`
 * @returns the url to hand to the frontend
 */
export function staticCardUrl(file: string): string {
    return `/cards/_static_${file}?v=${ADAPTER_VERSION}`;
}

/** What `readDirAsync` tells about one entry; only the parts a stamp is built from. */
export interface FileStamp {
    /** modification time in ms, as the files db reports it */
    modifiedAt?: number;
    /** what a file system based backend reports instead */
    stats?: { mtimeMs?: number; size?: number };
}

/** Start of the path segment the custom-card urls carry their version marker in. */
const CARDS_VERSION_PREFIX = '_v';

/**
 * Version marker for the custom-cards folder, as a **path segment** (e.g. `_v1758291000000`).
 *
 * The marker has to be part of the path, not a query: a card may import a sibling file relatively
 * (`./x-card-editor.js`), and such an import keeps the path it was loaded from while a query is
 * dropped. With a query the sibling would load under a second url, the module would run twice and
 * the second `customElements.define()` would throw (#755). Inside a path segment the importer and
 * everything it pulls in share the marker, so cards made of one file and cards made of several
 * behave the same - which matters, because the adapter cannot tell them apart.
 *
 * It is one stamp for the whole folder, not one per file: with a stamp per file, replacing only the
 * sibling would leave the url of the importer - and the relative url inside it - unchanged, so the
 * new sibling would never be fetched. The price is that replacing one card lets the browser reload
 * all of them once.
 *
 * @param files - the entries of the cards folder as `readDirAsync` returns them
 * @returns the path segment, empty when no entry carries a usable stamp
 */
export function cardsVersion(files: FileStamp[]): string {
    let newest = 0;
    for (const file of files) {
        const stamp = file.modifiedAt || file.stats?.mtimeMs || file.stats?.size || 0;
        if (stamp > newest) {
            newest = stamp;
        }
    }
    return newest ? `${CARDS_VERSION_PREFIX}${newest}` : '';
}

/**
 * Take the version segment of `cardsVersion()` off a requested card url again.
 *
 * @param file - the requested path, below `/cards/`
 * @returns the path of the real file, and whether it was requested with a marker
 */
export function stripCardsVersion(file: string): { file: string; versioned: boolean } {
    const match = new RegExp(`^/cards/${CARDS_VERSION_PREFIX}\\d+/`).exec(file);
    return match ? { file: `/cards/${file.substring(match[0].length)}`, versioned: true } : { file, versioned: false };
}
