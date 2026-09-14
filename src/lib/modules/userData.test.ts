import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const UserDataModule = require('../modules/userData');

function makeModule(language: string | undefined, stored: Record<string, Record<string, unknown>> = {}): any {
    const mod = new UserDataModule({
        adapter: { log: { debug: () => {}, warn: () => {} } },
        sendResponse: () => {},
        getLanguage: () => language,
    });
    mod._userData = stored;
    return mod;
}

describe('modules/userData language', function () {
    const ws = {} as any;

    it('reports the adapter language when the frontend has none stored', function () {
        const mod = makeModule('en');
        // Without a language from the backend the frontend falls back to the browser language.
        expect(mod._getValue(ws, 'language')).to.deep.equal({ language: 'en' });
    });

    it('keeps a language the user picked in the profile', function () {
        const mod = makeModule('en', { _default: { language: { language: 'fr', number_format: 'comma_decimal' } } });
        expect(mod._getValue(ws, 'language')).to.deep.equal({ language: 'fr', number_format: 'comma_decimal' });
    });

    it('adds the adapter language to stored locale settings that have none', function () {
        // Number/date formats are part of the same key but independent of the language.
        const mod = makeModule('de', { _default: { language: { number_format: 'space_comma', time_format: '24' } } });
        expect(mod._getValue(ws, 'language')).to.deep.equal({
            number_format: 'space_comma',
            time_format: '24',
            language: 'de',
        });
    });

    it('returns null when no language is known at all', function () {
        expect(makeModule(undefined)._getValue(ws, 'language')).to.equal(null);
    });

    it('still answers subscribe_user_data with the ack and the value event', function () {
        const mod = makeModule('en');
        const sent: any[] = [];
        const client: any = { send: (d: string) => sent.push(JSON.parse(d)) };

        expect(mod.processMessage(client, { type: 'frontend/subscribe_user_data', key: 'language', id: 4 })).to.equal(
            true,
        );
        expect(sent[0][0]).to.include({ id: 4, type: 'result', success: true });
        expect(sent[0][1].event.value).to.deep.equal({ language: 'en' });
    });
});
