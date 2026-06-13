/*!
 * ioBroker gulpfile
 * Date: 2024-02-26
 */
/* eslint no-prototype-builtins: 'off' */
'use strict';

const gulp = require('gulp');
const fs = require('node:fs');
const path = require('node:path');
const cp = require('node:child_process');

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
gulp.task('rename', done => {
    filesWalk(`${__dirname}/hass_frontend`, fileName => {
        // skip static cards
        if (fileName.includes('/static_cards/')) {
            return;
        }
        if (fileName.endsWith('.js') || fileName.endsWith('.html') || fileName.endsWith('.json')) {
            const text = fs.readFileSync(fileName).toString('utf-8');
            let newText = text.replace(/Home Assistant/g, 'ioBroker');
            newText = newText.replace(
                /https:\/\/www.home-assistant.io\/images\/merchandise\/shirt-frontpage.png/g,
                '/images/image.jpg',
            );
            //not sure why we should do that...??? If at all, find a better place to link to.
            //newText = newText.replace('https://www.home-assistant.io', 'https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1');
            if (fileName.endsWith('index.html')) {
                let m = newText.match(/[^"]<script[^>]*>[^\n]/g);
                m &&
                    m.forEach(
                        text =>
                            (newText = newText.replace(
                                text,
                                `${text[0]}\n${text.substring(1, text.length - 1)}\n${text[text.length - 1]}`,
                            )),
                    );

                m = newText.match(/[^\n]<\/script>/g);
                m && m.forEach(text => (newText = newText.replace(text, text.replace('</script>', '\n</script>\n'))));

                // remove absolute paths
                newText = newText.replace(/src='\/([^']+)'/g, "src='$1'");
                newText = newText.replace(/import\("\/([^"]+)"/g, 'import("./$1"');
                newText = newText.replace(/href="\/([^"]+)"/g, 'href="$1"');
                newText = newText.replace(/href='\/([^']+)'/g, "href='$1'");
                newText = newText.replace(/content="\/([^"]+)"/g, 'content="$1"');
                newText = newText.replace(/customPanelJS\s?=\s?"\/([^"]+)"/g, 'customPanelJS="$1"');
                newText = newText.replace(/customPanelJS\s?=\s?"\/([^"]+)"/g, 'customPanelJS="$1"');
                newText = newText.replace(/_ls\("\/([^"]+)"/g, '_ls("$1"');
                newText = newText.replace(/_pf\("\/([^"]+)"/g, '_pf("$1"');

                newText = newText.replace(/\n\n\n/g, '\n');
                newText = newText.replace(/\n\n/g, '\n');
                // remove optional load module stuff we don't have.
                newText = newText.replace(
                    /<script>\n*\s*{%- for extra_module in extra_modules -%}\n*\s*import\("{{ extra_module }}"\);\n*\s*{%- endfor -%}\n*\s*<\/script>/g,
                    '',
                );
                newText = newText.replace(
                    /<script>\n*\s*if \(!window.latestJS\) {\n*\s*{%- for extra_script in extra_js_es5 -%}\n*\s*_ls\("{{ extra_script }}"\);\n*\s*{%- endfor -%}\n*\s*}\n*\s*<\/script>/g,
                    '',
                );

                //open home foundation logo (display none, because completely removing the div breaks... uhm.. everything?)
                newText = newText.replace(/<div class="ohf-logo">/gm, '<div class="ohf-logo" style="display:none">');
            }

            //auth error translations:
            newText = newText.replace(/authorize.form.providers.homeassistant/g, 'authorize.form.providers.iobroker');

            if (newText !== text) {
                console.log(`File ${fileName} patched.`);
                fs.writeFileSync(fileName, newText);
            }
        } else if (fileName.endsWith('.py') || fileName.endsWith('.gz') || fileName === '.DS_Store') {
            console.log(`${fileName} deleted`);
            fs.unlinkSync(fileName);
        }
    });
    if (fs.existsSync(`${__dirname}/hass_frontend/images/`)) {
        fs.writeFileSync(
            `${__dirname}/hass_frontend/images/image.jpg`,
            fs.readFileSync(`${__dirname}/assets/image.jpg`),
        );
    } else {
        fs.writeFileSync(
            `${__dirname}/hass_frontend/static/images/image.jpg`,
            fs.readFileSync(`${__dirname}/assets/image.jpg`),
        );
    }
    done();
});

const devServerPath = `${__dirname}/.dev-server/default/`;
const devserverIoBrokerPath = `${devServerPath}node_modules/iobroker.js-controller/iobroker.js`;

function npmCommand(params, logmsg, local) {
    let cwd = local ? __dirname : devServerPath;

    logmsg && console.log(logmsg);

    return new Promise((resolve, reject) => {
        // Install node modules
        cwd = cwd.replace(/\\/g, '/');

        const cmd = `npm ${params.join(' ')}`;
        console.log(`"${cmd} in ${cwd}`);

        // System call used for update of js-controller itself,
        // because during the installation of the npm packet will be deleted too, but some files must be loaded even during the installation process.
        const child = cp.exec(cmd, { cwd });

        child.stderr.pipe(process.stderr);
        child.stdout.pipe(process.stdout);

        child.on('exit', (code /* , signal */) => {
            // code 1 is a strange error that cannot be explained. Everything is installed but error :(
            if (code && code !== 1) {
                reject(`Cannot install: ${code}`);
            } else {
                console.log(`"${cmd} in ${cwd} finished.`);
                // command succeeded
                resolve(null);
            }
        });
        child.on('error', err => {
            console.error(`Cannot execute ${cmd}: ${err}`);
            reject(err);
        });
    });
}

function nodeCommand(params, logmsg) {
    let cwd = devServerPath;

    logmsg && console.log(logmsg);

    return new Promise((resolve, reject) => {
        // Install node modules
        cwd = cwd.replace(/\\/g, '/');

        const cmd = `node ${params.join(' ')}`;
        console.log(`"${cmd} in ${cwd}`);

        // System call used for update of js-controller itself,
        // because during the installation of the npm packet will be deleted too, but some files must be loaded even during the installation process.
        const child = cp.exec(cmd, { cwd });

        child.stderr.pipe(process.stderr);
        child.stdout.pipe(process.stdout);

        child.on('exit', (code /* , signal */) => {
            // code 1 is a strange error that cannot be explained. Everything is installed but error :(
            if (code && code !== 1) {
                reject(`Cannot install: ${code}`);
            } else {
                console.log(`"${cmd} in ${cwd} finished.`);
                // command succeeded
                resolve(null);
            }
        });
        child.on('error', err => {
            console.error(`Cannot execute ${cmd}: ${err}`);
            reject(err);
        });
    });
}

gulp.task('prepareDevserver', async done => {
    const promises = [];
    filesWalk(`${__dirname}/test/testData`, fileName => {
        if (fileName && fileName.toLowerCase().endsWith('.json')) {
            const objects = JSON.parse(fs.readFileSync(fileName).toString('utf8'));
            for (const id of Object.keys(objects)) {
                //const newId = '0_userdata.0.' + id.split('.').slice(2).join('.');
                promises.push(
                    nodeCommand(
                        [devserverIoBrokerPath, 'object', 'set', id, JSON.stringify(objects[id])],
                        `Writing ${id}`,
                    ),
                );
            }
        }
    });
    await Promise.all(promises);
    await nodeCommand([devserverIoBrokerPath, 'add', 'devices']);
    await nodeCommand([devserverIoBrokerPath, 'add', 'history']);
    done();
});

gulp.task('updateDevserver', async done => {
    await npmCommand(['install', 'iobroker.js-controller@latest'], 'Updating js-controller');
    await npmCommand(['install', 'iobroker.admin@latest'], 'Updating admin');
    await npmCommand(['install', 'iobroker.devices@latest'], 'Updating devices');
    await npmCommand(['install', 'iobroker.history@latest'], 'Updating history');
    await npmCommand(['install', 'iobroker.type-detector@latest'], 'Updating type-detector');
    await nodeCommand([devserverIoBrokerPath, 'upload', 'devices'], 'Uploading devices');
    await nodeCommand([devserverIoBrokerPath, 'upload', 'history'], 'Uploading history');
    await nodeCommand([devserverIoBrokerPath, 'upload', 'admin'], 'Uploading admin');
    await nodeCommand([devserverIoBrokerPath, 'upload', 'lovelace'], 'Uploading lovelace');
    await npmCommand(['install'], 'Repairing dependencies in lovelace', true);
    done();
});
