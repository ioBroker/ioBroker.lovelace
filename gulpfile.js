/*!
 * ioBroker gulpfile
 * Date: 2019-01-28
 */
/* eslint no-prototype-builtins: 'off' */
'use strict';

const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const pkg = require('./package.json');
const iopackage = require('./io-package.json');
const version = (pkg && pkg.version) ? pkg.version : iopackage.common.version;
const fileName = 'words.js';
const EMPTY = '';
const translate = require('./lib/tools').translateText;
const languages = {
    en: {},
    de: {},
    ru: {},
    pt: {},
    nl: {},
    fr: {},
    it: {},
    es: {},
    pl: {},
    'zh-cn': {}
};

function lang2data(lang, isFlat) {
    let str = isFlat ? '' : '{\n';
    let count = 0;
    for (const w in lang) {
        if (lang.hasOwnProperty(w)) {
            count++;
            if (isFlat) {
                str += (lang[w] === '' ? (isFlat[w] || w) : lang[w]) + '\n';
            } else {
                const key = '    "' + w.replace(/"/g, '\\"') + '": ';
                str += key + '"' + lang[w].replace(/"/g, '\\"') + '",\n';
            }
        }
    }
    if (!count)
        return isFlat ? '' : '{\n}';
    if (isFlat) {
        return str;
    } else {
        return str.substring(0, str.length - 2) + '\n}';
    }
}

const NODE_JS_EXPORT = `if (typeof module !== 'undefined' && module.parent) { module.exports = lovelace_systemDictionary; }`;
function readWordJs(src) {
    if (!src) {
        src = 'admin/';
    }
    try {
        let words;
        if (fs.existsSync(`${src}js/${fileName}`)) {
            words = fs.readFileSync(`${src}js/${fileName}`).toString();
        } else {
            words = fs.readFileSync(src + fileName).toString();
        }
        words = words.replace(NODE_JS_EXPORT, '');
        words = words.substring(words.indexOf('{'), words.length);
        words = words.substring(0, words.lastIndexOf(';'));

        const resultFunc = new Function(`return ${words};`);

        return resultFunc();
    } catch (e) {
        return null;
    }
}

function padRight(text, totalLength) {
    return text + (text.length < totalLength ? new Array(totalLength - text.length).join(' ') : '');
}

function writeWordJs(data, src) {
    let text = '';
    text += "'use strict';\n\n";
    text += 'var lovelace_systemDictionary = {\n';
    for (const word in data) {
        if (data.hasOwnProperty(word)) {
            text += '    ' + padRight('"' + word.replace(/"/g, '\\"') + '": {', 50);
            let line = '';
            for (const lang in data[word]) {
                if (data[word].hasOwnProperty(lang)) {
                    line += '"' + lang + '": "' + padRight(data[word][lang].replace(/"/g, '\\"') + '",', 50) + ' ';
                }
            }
            if (line) {
                line = line.trim();
                line = line.substring(0, line.length - 1);
            }
            text += line + '},\n';
        }
    }
    text += '};\n';

    text += NODE_JS_EXPORT;

    if (fs.existsSync(src + 'js/' + fileName)) {
        fs.writeFileSync(src + 'js/' + fileName, text);
    } else {
        fs.writeFileSync(src + '' + fileName, text);
    }
}

function words2languages(src) {
    const langs = Object.assign({}, languages);
    const data = readWordJs(src);
    if (data) {
        for (const word in data) {
            if (data.hasOwnProperty(word)) {
                for (const lang in data[word]) {
                    if (data[word].hasOwnProperty(lang)) {
                        langs[lang][word] = data[word][lang];
                        //  pre-fill all other languages
                        for (const j in langs) {
                            if (langs.hasOwnProperty(j)) {
                                langs[j][word] = langs[j][word] || EMPTY;
                            }
                        }
                    }
                }
            }
        }
        if (!fs.existsSync(src + 'i18n/')) {
            fs.mkdirSync(src + 'i18n/');
        }
        for (const l in langs) {
            if (!langs.hasOwnProperty(l))
                continue;
            const keys = Object.keys(langs[l]);
            keys.sort();
            const obj = {};
            for (let k = 0; k < keys.length; k++) {
                obj[keys[k]] = langs[l][keys[k]];
            }
            if (!fs.existsSync(src + 'i18n/' + l)) {
                fs.mkdirSync(src + 'i18n/' + l);
            }

            fs.writeFileSync(src + 'i18n/' + l + '/translations.json', lang2data(obj));
        }
    } else {
        console.error('Cannot read or parse ' + fileName);
    }
}

function words2languagesFlat(src) {
    const langs = Object.assign({}, languages);
    const data = readWordJs(src);
    if (data) {
        for (const word in data) {
            if (data.hasOwnProperty(word)) {
                for (const lang in data[word]) {
                    if (data[word].hasOwnProperty(lang)) {
                        langs[lang][word] = data[word][lang];
                        //  pre-fill all other languages
                        for (const j in langs) {
                            if (langs.hasOwnProperty(j)) {
                                langs[j][word] = langs[j][word] || EMPTY;
                            }
                        }
                    }
                }
            }
        }
        const keys = Object.keys(langs.en);
        keys.sort();
        for (const l in langs) {
            if (!langs.hasOwnProperty(l))
                continue;
            const obj = {};
            for (let k = 0; k < keys.length; k++) {
                obj[keys[k]] = langs[l][keys[k]];
            }
            langs[l] = obj;
        }
        if (!fs.existsSync(src + 'i18n/')) {
            fs.mkdirSync(src + 'i18n/');
        }
        for (const ll in langs) {
            if (!langs.hasOwnProperty(ll))
                continue;
            if (!fs.existsSync(src + 'i18n/' + ll)) {
                fs.mkdirSync(src + 'i18n/' + ll);
            }

            fs.writeFileSync(src + 'i18n/' + ll + '/flat.txt', lang2data(langs[ll], langs.en));
        }
        fs.writeFileSync(src + 'i18n/flat.txt', keys.join('\n'));
    } else {
        console.error('Cannot read or parse ' + fileName);
    }
}

function languagesFlat2words(src) {
    const dirs = fs.readdirSync(src + 'i18n/');
    const langs = {};
    const bigOne = {};
    const order = Object.keys(languages);
    dirs.sort((a, b) => {
        const posA = order.indexOf(a);
        const posB = order.indexOf(b);
        if (posA === -1 && posB === -1) {
            if (a > b)
                return 1;
            if (a < b)
                return -1;
            return 0;
        } else if (posA === -1) {
            return -1;
        } else if (posB === -1) {
            return 1;
        } else {
            if (posA > posB)
                return 1;
            if (posA < posB)
                return -1;
            return 0;
        }
    });
    const keys = fs.readFileSync(src + 'i18n/flat.txt').toString().split('\n');

    for (const lang of dirs) {
        if (lang === 'flat.txt') {
            continue;
        }
        const values = fs.readFileSync(src + 'i18n/' + lang + '/flat.txt').toString().split('\n');
        langs[lang] = {};
        keys.forEach((word, i) => langs[lang][word] = values[i]);

        const words = langs[lang];
        for (const word in words) {
            if (words.hasOwnProperty(word)) {
                bigOne[word] = bigOne[word] || {};
                if (words[word] !== EMPTY) {
                    bigOne[word][lang] = words[word];
                }
            }
        }
    }
    // read actual words.js
    const aWords = readWordJs();

    const temporaryIgnore = ['flat.txt'];
    if (aWords) {
        // Merge words together
        for (const w in aWords) {
            if (aWords.hasOwnProperty(w)) {
                if (!bigOne[w]) {
                    console.warn('Take from actual words.js: ' + w);
                    bigOne[w] = aWords[w];
                }
                dirs.forEach(lang => {
                    if (temporaryIgnore.indexOf(lang) !== -1) {
                        return;
                    }
                    if (!bigOne[w][lang]) {
                        console.warn('Missing "' + lang + '": ' + w);
                    }
                });
            }
        }

    }

    writeWordJs(bigOne, src);
}

function languages2words(src) {
    const dirs = fs.readdirSync(src + 'i18n/');
    const langs = {};
    const bigOne = {};
    const order = Object.keys(languages);
    dirs.sort((a, b) => {
        const posA = order.indexOf(a);
        const posB = order.indexOf(b);
        if (posA === -1 && posB === -1) {
            if (a > b)
                return 1;
            if (a < b)
                return -1;
            return 0;
        } else if (posA === -1) {
            return -1;
        } else if (posB === -1) {
            return 1;
        } else {
            if (posA > posB)
                return 1;
            if (posA < posB)
                return -1;
            return 0;
        }
    });

    for (const lang of dirs) {
        if (lang === 'flat.txt') {
            continue;
        }
        langs[lang] = fs.readFileSync(src + 'i18n/' + lang + '/translations.json').toString();
        langs[lang] = JSON.parse(langs[lang]);
        const words = langs[lang];
        for (const word in words) {
            if (words.hasOwnProperty(word)) {
                bigOne[word] = bigOne[word] || {};
                if (words[word] !== EMPTY) {
                    bigOne[word][lang] = words[word];
                }
            }
        }
    }
    // read actual words.js
    const aWords = readWordJs();

    const temporaryIgnore = ['flat.txt'];
    if (aWords) {
        // Merge words together
        for (const w in aWords) {
            if (aWords.hasOwnProperty(w)) {
                if (!bigOne[w]) {
                    console.warn('Take from actual words.js: ' + w);
                    bigOne[w] = aWords[w];
                }
                dirs.forEach(lang => {
                    if (temporaryIgnore.indexOf(lang) !== -1) {
                        return;
                    }
                    if (!bigOne[w][lang]) {
                        console.warn('Missing "' + lang + '": ' + w);
                    }
                });
            }
        }

    }

    writeWordJs(bigOne, src);
}

async function translateNotExisting(obj, baseText, yandex) {
    let t = obj['en'];
    if (!t) {
        t = baseText;
    }

    if (t) {
        for (const l in languages) {
            if (!obj[l]) {
                const time = Date.now();
                obj[l] = await translate(t, l, yandex);
                console.log('en -> ' + l + ' ' + (Date.now() - time) + ' ms');
            }
        }
    }
}

function filesWalk(folder, func) {
    const files = fs.readdirSync(folder);
    files.forEach(file => {
        const fullPath = path.join(folder, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            filesWalk(fullPath, func);
        } else {
            func(fullPath);
        }
    });
}

//TASKS

gulp.task('adminWords2languages', done => {
    words2languages('./admin/');
    done();
});

gulp.task('adminWords2languagesFlat', done => {
    words2languagesFlat('./admin/');
    done();
});

gulp.task('adminLanguagesFlat2words', done => {
    languagesFlat2words('./admin/');
    done();
});

gulp.task('adminLanguages2words', done => {
    languages2words('./admin/');
    done();
});

gulp.task('updatePackages', done => {
    iopackage.common.version = pkg.version;
    iopackage.common.news = iopackage.common.news || {};
    if (!iopackage.common.news[pkg.version]) {
        const news = iopackage.common.news;
        const newNews = {};

        newNews[pkg.version] = {
            en: 'news',
            de: 'neues',
            ru: 'новое',
            pt: 'novidades',
            nl: 'nieuws',
            fr: 'nouvelles',
            it: 'notizie',
            es: 'noticias',
            pl: 'nowości',
            'zh-cn': '新'
        };
        iopackage.common.news = Object.assign(newNews, news);
    }
    fs.writeFileSync('io-package.json', JSON.stringify(iopackage, null, 4));
    done();
});

gulp.task('updateReadme', done => {
    const readme = fs.readFileSync('README.md').toString();
    const pos = readme.indexOf('## Changelog\n');
    if (pos !== -1) {
        const readmeStart = readme.substring(0, pos + '## Changelog\n'.length);
        const readmeEnd = readme.substring(pos + '## Changelog\n'.length);

        if (readme.indexOf(version) === -1) {
            const timestamp = new Date();
            const date = timestamp.getFullYear() + '-' +
                    ('0' + (timestamp.getMonth() + 1).toString(10)).slice(-2) + '-' +
                    ('0' + (timestamp.getDate()).toString(10)).slice(-2);

            let news = '';
            if (iopackage.common.news && iopackage.common.news[pkg.version]) {
                news += '* ' + iopackage.common.news[pkg.version].en;
            }

            fs.writeFileSync('README.md', readmeStart + '### ' + version + ' (' + date + ')\n' + (news ? news + '\n\n' : '\n') + readmeEnd);
        }
    }

    done();
});

gulp.task('translate', async function () {
    let yandex;
    const i = process.argv.indexOf('--yandex');
    if (i > -1) {
        yandex = process.argv[i + 1];
    }

    if (iopackage && iopackage.common) {
        if (iopackage.common.news) {
            console.log('Translate News');
            for (const k in iopackage.common.news) {
                if (iopackage.common.news.hasOwnProperty(k)) {
                    console.log('News: ' + k);
                    const nw = iopackage.common.news[k];
                    await translateNotExisting(nw, null, yandex);
                }
            }
        }
        if (iopackage.common.titleLang) {
            console.log('Translate Title');
            await translateNotExisting(iopackage.common.titleLang, iopackage.common.title, yandex);
        }
        if (iopackage.common.desc) {
            console.log('Translate Description');
            await translateNotExisting(iopackage.common.desc, null, yandex);
        }

        if (fs.existsSync('./admin/i18n/en/translations.json')) {
            const enTranslations = require('./admin/i18n/en/translations.json');
            for (const l in languages) {
                console.log('Translate Text: ' + l);
                let existing = {};
                if (fs.existsSync('./admin/i18n/' + l + '/translations.json')) {
                    existing = require('./admin/i18n/' + l + '/translations.json');
                }
                for (const t in enTranslations) {
                    if (enTranslations.hasOwnProperty(t) && !existing[t]) {
                        existing[t] = await translate(enTranslations[t], l, yandex);
                    }
                }
                if (!fs.existsSync('./admin/i18n/' + l + '/')) {
                    fs.mkdirSync('./admin/i18n/' + l + '/');
                }
                fs.writeFileSync('./admin/i18n/' + l + '/translations.json', JSON.stringify(existing, null, 4));
            }
        }

    }
    fs.writeFileSync('io-package.json', JSON.stringify(iopackage, null, 4));
});

gulp.task('rename', done => {
    filesWalk(__dirname + '/hass_frontend', fileName => {
        if (fileName.endsWith('.js') || fileName.endsWith('.html') || fileName.endsWith('.json')) {
            const text = fs.readFileSync(fileName).toString('utf-8');
            let newText = text.replace(/Home Assistant/g, 'ioBroker');
            newText = newText.replace(/https:\/\/www.home-assistant.io\/images\/merchandise\/shirt-frontpage.png/g, '/images/image.jpg');
            //not sure why we should do that...??? If at all, find a better place to link to.
            //newText = newText.replace('https://www.home-assistant.io', 'https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1');
            if (fileName.endsWith('index.html')) {
                let m = newText.match(/[^"]<script[^>]*>[^\n]/g);
                m && m.forEach(text =>
                    newText = newText.replace(text, text[0] + '\n' + text.substring(1, text.length - 1) + '\n' + text[text.length - 1]));

                m = newText.match(/[^\n]<\/script>/g);
                m && m.forEach(text =>
                    newText = newText.replace(text, text.replace('</script>', '\n</script>\n')));

                // remove absolute paths
                newText = newText.replace(/src='\/([^']+)'/g, "src='$1'");
                newText = newText.replace(/import\("\/([^"]+)"/g, 'import("./$1"');
                newText = newText.replace(/href="\/([^"]+)"/g, 'href="$1"');
                newText = newText.replace(/href='\/([^']+)'/g, "href='$1'");
                newText = newText.replace(/content="\/([^"]+)"/g, 'content="$1"');
                newText = newText.replace(/customPanelJS\s?=\s?"\/([^"]+)"/g, 'customPanelJS="$1"');
                newText = newText.replace(/customPanelJS\s?=\s?"\/([^"]+)"/g, 'customPanelJS="$1"');
                newText = newText.replace(/_ls\("\/([^"]+)"/g, '_ls=("$1"');
                newText = newText.replace(/_pf\("\/([^"]+)"/g, '_pf=("$1"');

                newText = newText.replace(/\n\n\n/g, '\n');
                newText = newText.replace(/\n\n/g, '\n');
                //remove optionally load module stuff we don't have.
                newText = newText.replace(/<script>\n*\s*{%- for extra_module in extra_modules -%}\n*\s*import\("{{ extra_module }}"\);\n*\s*{%- endfor -%}\n*\s*<\/script>/g, '');
                newText = newText.replace(/<script>\n*\s*if \(!window.latestJS\) {\n*\s*{%- for extra_script in extra_js_es5 -%}\n*\s*_ls\("{{ extra_script }}"\);\n*\s*{%- endfor -%}\n*\s*}\n*\s*<\/script>/g, '');
            }

            if (newText !== text) {
                console.log(`File ${fileName} patched.`);
                fs.writeFileSync(fileName, newText);
            }
        } else if (fileName.endsWith('.py') || fileName.endsWith('.gz') || fileName === '.DS_Store') {
            console.log(`${fileName} deleted`);
            fs.unlinkSync(fileName);
        }
    });
    if (fs.existsSync(__dirname + '/hass_frontend/images/')) {
        fs.writeFileSync(__dirname + '/hass_frontend/images/image.jpg', fs.readFileSync(__dirname + '/assets/image.jpg'));
    } else {
        fs.writeFileSync(__dirname + '/hass_frontend/static/images/image.jpg', fs.readFileSync(__dirname + '/assets/image.jpg'));
    }
    done();
});

gulp.task('translateAndUpdateWordsJS', gulp.series('translate', 'adminLanguages2words', 'adminWords2languages'));

gulp.task('default', gulp.series('updatePackages', 'updateReadme'));

const devServerPath = __dirname + '/.dev-server/default/';
const devserverIoBrokerPath = devServerPath + 'node_modules/iobroker.js-controller/iobroker.js';
const spawn = require('child_process').spawn;
async function spawnChild(command, params, logmsg, local) {
    if (logmsg) {
        console.log(logmsg);
    }
    return new Promise(resolve => {
        const child = spawn(command, params, {stdio: 'inherit', cwd: local ? __dirname : devServerPath});
        child.on('exit', resolve);
    });
}
gulp.task('prepareDevserver', async done => {
    const promises = [];
    filesWalk(__dirname + '/test/testData', (fileName) => {
        if (fileName && fileName.toLowerCase().endsWith('.json')) {
            const objects = JSON.parse(fs.readFileSync(fileName));
            for (const id of Object.keys(objects)) {
                //const newId = '0_userdata.0.' + id.split('.').slice(2).join('.');
                promises.push(spawnChild('node', [devserverIoBrokerPath, 'object', 'set', id, JSON.stringify(objects[id])], 'Writing ' + id));
            }
        }
    });
    await Promise.all(promises);
    await spawnChild('node', [devserverIoBrokerPath, 'add', 'devices']);
    await spawnChild('node', [devserverIoBrokerPath, 'add', 'history']);
    done();
});

gulp.task('updateDevserver', async done => {
    const npmCmd = 'npm' + (process.platform.startsWith('win') ? '.CMD' : '');
    await spawnChild(npmCmd, ['install', 'iobroker.js-controller@latest'], 'Updating js-controller');
    await spawnChild(npmCmd, ['install', 'iobroker.admin@latest'], 'Updating admin');
    await spawnChild(npmCmd, ['install', 'iobroker.devices@latest'], 'Updating devices');
    await spawnChild(npmCmd, ['install', 'iobroker.history@latest'], 'Updating history');
    await spawnChild(npmCmd, ['install', 'iobroker.type-detector@latest'], 'Updating type-detector');
    await spawnChild('node', [devserverIoBrokerPath, 'upload', 'devices'], 'Uploading devices');
    await spawnChild('node', [devserverIoBrokerPath, 'upload', 'history'], 'Uploading history');
    await spawnChild('node', [devserverIoBrokerPath, 'upload', 'admin'], 'Uploading admin');
    await spawnChild('node', [devserverIoBrokerPath, 'upload', 'lovelace'], 'Uploading lovelace');
    await spawnChild(npmCmd, ['install'], 'Repairing dependencies in lovelace', true);
    done();
});
