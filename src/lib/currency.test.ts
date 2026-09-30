import { expect } from 'chai';
import { toCurrencyCode } from './currency';

describe('lib/currency toCurrencyCode', function () {
    it('keeps a code as it is', function () {
        expect(toCurrencyCode('EUR')).to.equal('EUR');
        expect(toCurrencyCode('chf')).to.equal('CHF');
        expect(toCurrencyCode(' usd ')).to.equal('USD');
    });

    it('turns the symbols people configure into their code', function () {
        expect(toCurrencyCode('€')).to.equal('EUR');
        expect(toCurrencyCode('Euro')).to.equal('EUR');
        expect(toCurrencyCode('$')).to.equal('USD');
        expect(toCurrencyCode('£')).to.equal('GBP');
        expect(toCurrencyCode('zł')).to.equal('PLN');
    });

    it('reads the currency out of a price unit or a sloppy entry', function () {
        expect(toCurrencyCode('€/kWh')).to.equal('EUR');
        expect(toCurrencyCode('EUR / kWh')).to.equal('EUR');
        // what the energy dashboard choked on (#749)
        expect(toCurrencyCode('€h')).to.equal('EUR');
        expect(toCurrencyCode('0,30 €')).to.equal('EUR');
    });

    it('falls back to EUR when there is nothing usable', function () {
        expect(toCurrencyCode(undefined)).to.equal('EUR');
        expect(toCurrencyCode('')).to.equal('EUR');
        expect(toCurrencyCode('   ')).to.equal('EUR');
        expect(toCurrencyCode(42)).to.equal('EUR');
        expect(toCurrencyCode('??')).to.equal('EUR');
    });

    it('returns something Intl accepts for every case above', function () {
        for (const configured of ['€', '€h', '€/kWh', 'Euro', '$', 'zł', '??', '', undefined, 'CHF']) {
            const code = toCurrencyCode(configured);
            expect(
                () => new Intl.NumberFormat('de-DE', { style: 'currency', currency: code }).format(1),
                String(configured),
            ).to.not.throw();
        }
    });
});
