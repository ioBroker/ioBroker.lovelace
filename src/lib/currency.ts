/**
 * Currency symbols and spellings people put into the ioBroker system settings, and the ISO 4217
 * code they mean. Home Assistant hands its currency to `Intl.NumberFormat`, which accepts nothing
 * but a code.
 */
const CURRENCY_CODES: Record<string, string> = {
    '€': 'EUR',
    eur: 'EUR',
    euro: 'EUR',
    $: 'USD',
    us$: 'USD',
    u$s: 'USD',
    '£': 'GBP',
    '¥': 'JPY',
    '₽': 'RUB',
    руб: 'RUB',
    '₴': 'UAH',
    грн: 'UAH',
    '₺': 'TRY',
    '₹': 'INR',
    '₩': 'KRW',
    '₪': 'ILS',
    r$: 'BRL',
    c$: 'CAD',
    a$: 'AUD',
    'fr.': 'CHF',
    sfr: 'CHF',
    zł: 'PLN',
    zl: 'PLN',
    kč: 'CZK',
    kc: 'CZK',
    ft: 'HUF',
    lei: 'RON',
    лв: 'BGN',
    kn: 'HRK',
    din: 'RSD',
    'nok kr': 'NOK',
    'dkk kr': 'DKK',
    'sek kr': 'SEK',
};

/**
 * The ISO 4217 code of the currency configured in ioBroker.
 *
 * The ioBroker system settings take free text there, so it holds a symbol ("€"), a name ("Euro") or
 * even a price unit ("€/kWh") as often as a code. Home Assistant expects a code and formats money
 * with `Intl.NumberFormat`, which throws a RangeError on anything else - in the energy dashboard
 * that error is not caught and leaves the "electricity" tab loading forever (#749).
 *
 * @param configured - what the ioBroker system settings hold
 * @returns the ISO code, EUR when it cannot be told
 */
export function toCurrencyCode(configured: unknown): string {
    if (typeof configured !== 'string' || !configured.trim()) {
        return 'EUR';
    }
    // "€/kWh" or "EUR / kWh": only the part in front of the slash names the currency.
    const text = configured.split('/')[0].trim();
    if (/^[A-Za-z]{3}$/.test(text)) {
        return text.toUpperCase();
    }
    const known = CURRENCY_CODES[text.toLowerCase()];
    if (known) {
        return known;
    }
    // Something like "€h" or "12 €": take the symbol out of it.
    for (const [symbol, code] of Object.entries(CURRENCY_CODES)) {
        if (!/^[a-z.$]+$/i.test(symbol) && text.includes(symbol)) {
            return code;
        }
    }
    const code = /[A-Za-z]{3}/.exec(text);
    return code ? code[0].toUpperCase() : 'EUR';
}
