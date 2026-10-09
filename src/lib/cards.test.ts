import { expect } from 'chai';
import { readFileSync } from 'node:fs';
import { detectCardVersion, staticCardUrl } from './cards';

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

describe('lib/cards staticCardUrl', function () {
    it('marks the cards we ship with the adapter version', function () {
        const version = (JSON.parse(readFileSync(`${__dirname}/../../package.json`, 'utf8')) as { version: string })
            .version;
        expect(staticCardUrl('browser_mod.js')).to.equal(`/cards/_static_browser_mod.js?v=${version}`);
    });
});
