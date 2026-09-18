import { expect } from 'chai';
import path from 'node:path';
import os from 'node:os';
import { resolvePathInside, hasParentSegment } from './safePath';

describe('resolvePathInside', function () {
    const base = path.join(os.tmpdir(), 'hass_frontend', 'static_cards');

    it('resolves a file inside the base directory', function () {
        expect(resolvePathInside(base, 'browser_mod.js')).to.equal(path.join(base, 'browser_mod.js'));
        expect(resolvePathInside(base, 'sub/dir/card.js')).to.equal(path.join(base, 'sub', 'dir', 'card.js'));
    });

    it('ignores leading slashes and duplicate separators', function () {
        expect(resolvePathInside(base, '/browser_mod.js')).to.equal(path.join(base, 'browser_mod.js'));
        expect(resolvePathInside(base, '//sub//card.js')).to.equal(path.join(base, 'sub', 'card.js'));
    });

    it('accepts a base directory with a trailing separator', function () {
        expect(resolvePathInside(base + path.sep, 'card.js')).to.equal(path.join(base, 'card.js'));
    });

    it('allows .. that stays inside the base directory', function () {
        expect(resolvePathInside(base, 'sub/../card.js')).to.equal(path.join(base, 'card.js'));
    });

    it('rejects paths leaving the base directory via ..', function () {
        expect(resolvePathInside(base, '../index.html')).to.be.null;
        expect(resolvePathInside(base, '/../../../../../../etc/passwd')).to.be.null;
        expect(resolvePathInside(base, 'sub/../../index.html')).to.be.null;
        expect(resolvePathInside(base, '..\\..\\package.json')).to.equal(
            // on posix a backslash is a normal file name character, on Windows it is a separator
            path.sep === '\\' ? null : path.join(base, '..\\..\\package.json'),
        );
    });

    it('rejects a sibling directory sharing the base name as prefix', function () {
        expect(resolvePathInside(base, '../static_cards_secret/file.js')).to.be.null;
    });

    it('rejects the base directory itself', function () {
        expect(resolvePathInside(base, '')).to.be.null;
        expect(resolvePathInside(base, '/')).to.be.null;
        expect(resolvePathInside(base, 'sub/..')).to.be.null;
    });

    it('rejects absolute Windows paths with a drive letter', function () {
        if (process.platform !== 'win32') {
            this.skip();
        }
        expect(resolvePathInside(base, 'C:/Windows/win.ini')).to.be.null;
        expect(resolvePathInside(base, '/C:/Windows/win.ini')).to.be.null;
        // leading separators are stripped, so a UNC path becomes relative to base
        expect(resolvePathInside(base, '\\\\server\\share\\file')).to.equal(path.join(base, 'server', 'share', 'file'));
    });

    it('does not decode percent encoded dots', function () {
        expect(resolvePathInside(base, '%2e%2e/%2e%2e/package.json')).to.equal(
            path.join(base, '%2e%2e', '%2e%2e', 'package.json'),
        );
    });
});

describe('hasParentSegment', function () {
    it('detects .. segments with / and \\ separators', function () {
        expect(hasParentSegment('/cards/../uploaded_images/x')).to.be.true;
        expect(hasParentSegment('/cards/_static_/../../etc/passwd')).to.be.true;
        expect(hasParentSegment('..')).to.be.true;
        expect(hasParentSegment('/cards/..')).to.be.true;
        expect(hasParentSegment('/cards/..\\x')).to.be.true;
    });

    it('does not flag dots inside file names', function () {
        expect(hasParentSegment('/cards/my..card.js')).to.be.false;
        expect(hasParentSegment('/cards/....//card.js')).to.be.false;
        expect(hasParentSegment('/cards/.hidden/card.js')).to.be.false;
        expect(hasParentSegment('/cards/%2e%2e/card.js')).to.be.false;
    });
});
