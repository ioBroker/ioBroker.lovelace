import { expect } from 'chai';
import { cacheBuster, detectCardVersion } from './cards';

describe('lib/cards detectCardVersion', function () {
    it('reads a version printed literally in the console banner', function () {
        expect(detectCardVersion('console.info("%c  BUTTON-CARD  \\n%c Version 4.1.2 ", "color: white");')).to.equal(
            '4.1.2',
        );
        expect(detectCardVersion('console.info(`%c APEXCHARTS-CARD %c v2.1.2 `);')).to.equal('2.1.2');
    });

    it('resolves the version variable of a minified build', function () {
        // Template literal (rollup/esbuild) and .concat (transpiled to ES5) - both are common.
        expect(detectCardVersion('const Ge="2.1.2";console.info(`%c APEXCHARTS-CARD %c v${Ge} `)')).to.equal('2.1.2');
        expect(detectCardVersion('var Jd="0.12.1";console.info("%c MINI-GRAPH-CARD %c ".concat(Jd," "))')).to.equal(
            '0.12.1',
        );
    });

    it('prefers the banner over a bundled library version', function () {
        const source = 'var lib={version:"2.30.1"};var V="2.1.2";console.info(`%c MY-CARD %c v${V} `)';
        expect(detectCardVersion(source)).to.equal('2.1.2');
    });

    it('falls back to a version constant when there is no banner', function () {
        expect(detectCardVersion('const CARD_VERSION = "1.4.0";')).to.equal('1.4.0');
        expect(detectCardVersion('/*! my-card v1.4.0 */ const version="1.4.0"')).to.equal('1.4.0');
    });

    it('returns undefined when the file has no version at all', function () {
        expect(detectCardVersion('customElements.define("x-card", XCard);')).to.equal(undefined);
    });
});

describe('lib/cards cacheBuster', function () {
    it('marks the url with the modification time', function () {
        expect(cacheBuster({ modifiedAt: 1758000000000 })).to.equal('?v=1758000000000');
    });

    it('falls back to what the file system offers', function () {
        expect(cacheBuster({ stats: { mtimeMs: 17, size: 100 } })).to.equal('?v=17');
        expect(cacheBuster({ stats: { size: 100 } })).to.equal('?v=100');
    });

    it('stays empty when nothing identifies the version', function () {
        expect(cacheBuster({})).to.equal('');
    });
});
