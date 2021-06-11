const axios = require('axios');

/**
 * Tests whether the given variable is a real object and not an Array
 * @param {any} it The variable to test
 * @returns {it is Record<string, any>}
 */
function isObject(it) {
    // This is necessary because:
    // typeof null === 'object'
    // typeof [] === 'object'
    // [] instanceof Object === true
    return Object.prototype.toString.call(it) === '[object Object]';
}

/**
 * Tests whether the given variable is really an Array
 * @param {any} it The variable to test
 * @returns {it is any[]}
 */
function isArray(it) {
    if (typeof Array.isArray === 'function') return Array.isArray(it);
    return Object.prototype.toString.call(it) === '[object Array]';
}

/**
 * Translates text to the target language. Automatically chooses the right translation API.
 * @param {string} text The text to translate
 * @param {string} targetLang The target languate
 * @param {string} [yandexApiKey] The yandex API key. You can create one for free at https://translate.yandex.com/developers
 * @returns {Promise<string>}
 */
async function translateText(text, targetLang, yandexApiKey) {
    if (targetLang === 'en') {
        return text;
    }
    if (yandexApiKey) {
        return await translateYandex(text, targetLang, yandexApiKey);
    } else {
        return await translateGoogle(text, targetLang);
    }
}

/**
 * Translates text with Yandex API
 * @param {string} text The text to translate
 * @param {string} targetLang The target languate
 * @param {string} [apiKey] The yandex API key. You can create one for free at https://translate.yandex.com/developers
 * @returns {Promise<string>}
 */
async function translateYandex(text, targetLang, apiKey) {
    if (targetLang === 'zh-cn') {
        targetLang = 'zh';
    }
    try {
        const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${encodeURIComponent(text)}&lang=en-${targetLang}`;
        const response = await axios({url, timeout: 15000});
        if (response.data && response.data['text']) {
            return response.data['text'][0];
        }
        throw new Error('Invalid response for translate request');
    } catch (e) {
        throw new Error(`Could not translate to "${targetLang}": ${e}`);
    }
}

async function delay(t) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(val);
        }, t);
    });
};

/**
 * Translates text with Google API
 * @param {string} text The text to translate
 * @param {string} targetLang The target languate
 * @returns {Promise<string>}
 */
let countTranslations = 0;
async function translateGoogle(text, targetLang) {
    if (countTranslations > 0) {
        if (countTranslations % 10 === 0) {
            await delay(15000);
        } else {
            await delay(2000);
        }
    }
    try {
        const url = `http://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}&ie=UTF-8&oe=UTF-8`;
        const response = await axios({url, timeout: 15000});
        if (isArray(response.data)) {
            countTranslations += 1;
            // we got a valid response
            return response.data[0][0][0];
        }
        throw new Error('Invalid response for translate request');
    } catch (e) {
        throw new Error(`Could not translate to "${targetLang}": ${e}`);
    }
}

module.exports = {
    isArray,
    isObject,
    translateText
};
