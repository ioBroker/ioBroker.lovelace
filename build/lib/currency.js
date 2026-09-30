"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var currency_exports = {};
__export(currency_exports, {
  toCurrencyCode: () => toCurrencyCode
});
module.exports = __toCommonJS(currency_exports);
const CURRENCY_CODES = {
  "\u20AC": "EUR",
  eur: "EUR",
  euro: "EUR",
  $: "USD",
  us$: "USD",
  u$s: "USD",
  "\xA3": "GBP",
  "\xA5": "JPY",
  "\u20BD": "RUB",
  \u0440\u0443\u0431: "RUB",
  "\u20B4": "UAH",
  \u0433\u0440\u043D: "UAH",
  "\u20BA": "TRY",
  "\u20B9": "INR",
  "\u20A9": "KRW",
  "\u20AA": "ILS",
  r$: "BRL",
  c$: "CAD",
  a$: "AUD",
  "fr.": "CHF",
  sfr: "CHF",
  z\u0142: "PLN",
  zl: "PLN",
  k\u010D: "CZK",
  kc: "CZK",
  ft: "HUF",
  lei: "RON",
  \u043B\u0432: "BGN",
  kn: "HRK",
  din: "RSD",
  "nok kr": "NOK",
  "dkk kr": "DKK",
  "sek kr": "SEK"
};
function toCurrencyCode(configured) {
  if (typeof configured !== "string" || !configured.trim()) {
    return "EUR";
  }
  const text = configured.split("/")[0].trim();
  if (/^[A-Za-z]{3}$/.test(text)) {
    return text.toUpperCase();
  }
  const known = CURRENCY_CODES[text.toLowerCase()];
  if (known) {
    return known;
  }
  for (const [symbol, code2] of Object.entries(CURRENCY_CODES)) {
    if (!/^[a-z.$]+$/i.test(symbol) && text.includes(symbol)) {
      return code2;
    }
  }
  const code = /[A-Za-z]{3}/.exec(text);
  return code ? code[0].toUpperCase() : "EUR";
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  toCurrencyCode
});
//# sourceMappingURL=currency.js.map
