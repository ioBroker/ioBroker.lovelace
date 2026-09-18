import path from 'node:path';

/**
 * Resolves a path taken from a request url against the directory it has to be served from.
 *
 * The check is done on the final, resolved path, so `..` segments, absolute paths and (on Windows) drive letters
 * can not be used to read files outside baseDir. Several of the static routes are reachable without authentication,
 * so every file system path derived from a url must go through here.
 *
 * @param baseDir directory the requested file has to be located in
 * @param requestPath path relative to baseDir, usually a part of the request url (leading slashes are ignored)
 * @returns absolute path of the requested file, or null if it would not be located inside baseDir
 */
export function resolvePathInside(baseDir: string, requestPath: string): string | null {
    const base = path.resolve(baseDir);
    const filePath = path.resolve(base, requestPath.replace(/^[/\\]+/, ''));
    const prefix = base.endsWith(path.sep) ? base : base + path.sep;
    return filePath.startsWith(prefix) ? filePath : null;
}

/**
 * Checks if a url path contains a `..` segment, i.e. tries to navigate to a parent folder.
 * Browsers resolve those before sending a request, so a legitimate frontend request never contains one.
 *
 * @param urlPath path part of a request url
 * @returns true if the path contains a `..` segment
 */
export function hasParentSegment(urlPath: string): boolean {
    return urlPath.split(/[/\\]/).includes('..');
}
