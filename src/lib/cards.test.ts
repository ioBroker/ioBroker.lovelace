import { expect } from 'chai';
import { readFileSync } from 'node:fs';
import { cardsVersion, detectCardVersion, staticCardUrl, stripCardsVersion } from './cards';

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

describe('lib/cards cardsVersion', function () {
    it('takes the newest modification time of the folder', function () {
        expect(cardsVersion([{ modifiedAt: 1758291000000 }, { modifiedAt: 1758292000000 }])).to.equal(
            '_v1758292000000',
        );
    });

    it('falls back to what a file system backend reports', function () {
        expect(cardsVersion([{ stats: { mtimeMs: 1758291000000 } }])).to.equal('_v1758291000000');
        expect(cardsVersion([{ stats: { size: 4711 } }])).to.equal('_v4711');
    });

    it('has no marker when nothing carries a stamp', function () {
        // Without a marker the cards are served under their plain url and revalidated.
        expect(cardsVersion([{}])).to.equal('');
        expect(cardsVersion([])).to.equal('');
    });

    it('gives one marker for the whole folder', function () {
        // One stamp per file would leave the url of the importer unchanged when only the sibling it
        // imports was replaced - the new sibling would never be fetched.
        const files = [{ modifiedAt: 1758291000000 }, { modifiedAt: 1758292000000 }];
        expect(cardsVersion([files[0]])).to.not.equal(cardsVersion(files));
    });
});

describe('lib/cards stripCardsVersion', function () {
    it('takes the marker off again to find the file', function () {
        expect(stripCardsVersion('/cards/_v1758292000000/my-card.js')).to.deep.equal({
            file: '/cards/my-card.js',
            versioned: true,
        });
    });

    it('keeps a sub folder of the card below the marker', function () {
        expect(stripCardsVersion('/cards/_v1/pack/editor.js')).to.deep.equal({
            file: '/cards/pack/editor.js',
            versioned: true,
        });
    });

    it('leaves a url without a marker alone', function () {
        expect(stripCardsVersion('/cards/my-card.js')).to.deep.equal({
            file: '/cards/my-card.js',
            versioned: false,
        });
    });

    it('does not take a card named like the marker for one', function () {
        // The marker is "_v" followed by digits and a slash, nothing else.
        expect(stripCardsVersion('/cards/_version-card.js').versioned).to.equal(false);
        expect(stripCardsVersion('/cards/_vX/card.js').versioned).to.equal(false);
    });
});
