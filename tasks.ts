/*!
 * ioBroker tasks
 * Date: 2026-09-16
 *
 * Node >= 22.19 strips the types itself, so this file runs directly: `node tasks.ts --<task>`.
 * That only works with erasable syntax - no `enum`, no `namespace`, no `import x = require()` -
 * and, because the package has no `"type": "module"`, with `require()` instead of `import`.
 *
 *   npm run rename            patch a freshly copied hass_frontend (branding, relative paths)
 *   npm run prepareDevserver  write the objects from test/testData into the dev-server
 *   npm run updateDevserver   update js-controller and the adapters of the dev-server
 */
'use strict';

// `import type` is erased completely, so these do not turn the file into an ES module
import type * as NodeFs from 'node:fs';
import type * as NodePath from 'node:path';
import type * as NodeChildProcess from 'node:child_process';

const fs: typeof NodeFs = require('node:fs');
const path: typeof NodePath = require('node:path');
const cp: typeof NodeChildProcess = require('node:child_process');

const devServerPath = path.join(__dirname, '.dev-server/default');
const devServerIoBrokerPath = path.join(devServerPath, 'node_modules/iobroker.js-controller/iobroker.js');

/** How many dev-server CLI processes may run at the same time */
const MAX_PARALLEL_COMMANDS = 8;

/**
 * Calls func for every file in folder and its sub folders.
 *
 * @param folder folder to walk through
 * @param func called with the full path of every file
 */
function filesWalk(folder: string, func: (fileName: string) => void): void {
    for (const file of fs.readdirSync(folder)) {
        const fullPath = path.join(folder, file);
        if (fs.statSync(fullPath).isDirectory()) {
            filesWalk(fullPath, func);
        } else {
            func(fullPath);
        }
    }
}

/**
 * Patches the frontend copied into hass_frontend: replaces the Home Assistant branding, makes the paths in
 * index.html relative and deletes files that are not needed.
 */
function rename(): void {
    const frontendPath = path.join(__dirname, 'hass_frontend');
    filesWalk(frontendPath, fileName => {
        // skip static cards
        if (path.relative(frontendPath, fileName).split(path.sep).includes('static_cards')) {
            return;
        }
        if (fileName.endsWith('.js') || fileName.endsWith('.html') || fileName.endsWith('.json')) {
            const text = fs.readFileSync(fileName).toString('utf-8');
            let newText = text.replace(/Home Assistant/g, 'ioBroker');
            newText = newText.replace(
                /https:\/\/www.home-assistant.io\/images\/merchandise\/shirt-frontpage.png/g,
                '/images/image.jpg',
            );
            if (fileName.endsWith('index.html')) {
                let m = newText.match(/[^"]<script[^>]*>[^\n]/g);
                m?.forEach(
                    text =>
                        (newText = newText.replace(
                            text,
                            `${text[0]}\n${text.substring(1, text.length - 1)}\n${text[text.length - 1]}`,
                        )),
                );

                m = newText.match(/[^\n]<\/script>/g);
                m?.forEach(text => (newText = newText.replace(text, text.replace('</script>', '\n</script>\n'))));

                // remove absolute paths
                newText = newText.replace(/src='\/([^']+)'/g, "src='$1'");
                newText = newText.replace(/import\("\/([^"]+)"/g, 'import("./$1"');
                newText = newText.replace(/href="\/([^"]+)"/g, 'href="$1"');
                newText = newText.replace(/href='\/([^']+)'/g, "href='$1'");
                newText = newText.replace(/content="\/([^"]+)"/g, 'content="$1"');
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
        } else if (fileName.endsWith('.py') || fileName.endsWith('.gz') || path.basename(fileName) === '.DS_Store') {
            console.log(`${fileName} deleted`);
            fs.unlinkSync(fileName);
        }
    });
    const image = fs.readFileSync(path.join(__dirname, 'assets/image.jpg'));
    if (fs.existsSync(path.join(frontendPath, 'images'))) {
        fs.writeFileSync(path.join(frontendPath, 'images/image.jpg'), image);
    } else {
        fs.writeFileSync(path.join(frontendPath, 'static/images/image.jpg'), image);
    }
}

/**
 * Runs a command without a shell (so arguments like JSON are passed unchanged) and shows its output.
 *
 * @param command executable to run
 * @param args arguments of the command
 * @param cwd directory to run the command in
 * @param logMessage optional message to log before the command starts
 * @returns resolves when the command is done
 */
function runCommand(command: string, args: string[], cwd: string, logMessage?: string): Promise<void> {
    if (logMessage) {
        console.log(logMessage);
    }
    const cmd = `${command} ${args.join(' ')}`;
    console.log(`"${cmd}" in ${cwd}`);

    return new Promise((resolve, reject) => {
        // npm is a .cmd file on Windows, which can only be started via a shell (its arguments here are plain words)
        const child =
            process.platform === 'win32' && command === 'npm'
                ? cp.spawn(cmd, { cwd, stdio: 'inherit', shell: true })
                : cp.spawn(command, args, { cwd, stdio: 'inherit' });
        child.on('exit', code => {
            // code 1 is a strange error that cannot be explained. Everything is installed but error :(
            if (code && code !== 1) {
                reject(new Error(`"${cmd}" failed with exit code ${code}`));
            } else {
                console.log(`"${cmd}" in ${cwd} finished.`);
                resolve();
            }
        });
        child.on('error', err => {
            console.error(`Cannot execute ${cmd}: ${err}`);
            reject(err);
        });
    });
}

/**
 * Calls the iobroker CLI of the dev-server.
 *
 * @param args arguments for the CLI, e.g. ['upload', 'admin']
 * @param logMessage optional message to log before the command starts
 * @returns resolves when the command is done
 */
function ioBrokerCommand(args: string[], logMessage?: string): Promise<void> {
    return runCommand(process.execPath, [devServerIoBrokerPath, ...args], devServerPath, logMessage);
}

/**
 * Calls npm in the dev-server or, if local is set, in the adapter directory.
 *
 * @param args arguments for npm, e.g. ['install']
 * @param logMessage message to log before the command starts
 * @param local run in the adapter directory instead of the dev-server
 * @returns resolves when the command is done
 */
function npmCommand(args: string[], logMessage: string, local?: boolean): Promise<void> {
    return runCommand('npm', args, local ? __dirname : devServerPath, logMessage);
}

/**
 * Writes all test objects into the dev-server and adds the devices and history adapters.
 */
async function prepareDevserver(): Promise<void> {
    const commands: { args: string[]; logMessage: string }[] = [];
    filesWalk(path.join(__dirname, 'test/testData'), fileName => {
        if (fileName.toLowerCase().endsWith('.json')) {
            const objects = JSON.parse(fs.readFileSync(fileName).toString('utf8')) as Record<string, unknown>;
            for (const id of Object.keys(objects)) {
                commands.push({
                    args: ['object', 'set', id, JSON.stringify(objects[id])],
                    logMessage: `Writing ${id}`,
                });
            }
        }
    });
    // every call starts a CLI process, so do not start all of them at once
    const workers = [];
    for (let i = 0; i < MAX_PARALLEL_COMMANDS; i++) {
        workers.push(
            (async () => {
                for (let command = commands.shift(); command; command = commands.shift()) {
                    await ioBrokerCommand(command.args, command.logMessage);
                }
            })(),
        );
    }
    await Promise.all(workers);
    await ioBrokerCommand(['add', 'devices']);
    await ioBrokerCommand(['add', 'history']);
}

/**
 * Updates js-controller and the adapters of the dev-server and uploads them.
 */
async function updateDevserver(): Promise<void> {
    await npmCommand(['install', 'iobroker.js-controller@latest'], 'Updating js-controller');
    await npmCommand(['install', 'iobroker.admin@latest'], 'Updating admin');
    await npmCommand(['install', 'iobroker.devices@latest'], 'Updating devices');
    await npmCommand(['install', 'iobroker.history@latest'], 'Updating history');
    await npmCommand(['install', 'iobroker.type-detector@latest'], 'Updating type-detector');
    await ioBrokerCommand(['upload', 'devices'], 'Uploading devices');
    await ioBrokerCommand(['upload', 'history'], 'Uploading history');
    await ioBrokerCommand(['upload', 'admin'], 'Uploading admin');
    await ioBrokerCommand(['upload', 'lovelace'], 'Uploading lovelace');
    await npmCommand(['install'], 'Repairing dependencies in lovelace', true);
}

/**
 * Logs the error and ends the process with an error code.
 *
 * @param error error to log
 */
function fail(error: unknown): void {
    console.error(error);
    process.exit(2);
}

if (process.argv.includes('--rename')) {
    rename();
} else if (process.argv.includes('--prepareDevserver')) {
    prepareDevserver().catch(fail);
} else if (process.argv.includes('--updateDevserver')) {
    updateDevserver().catch(fail);
} else {
    console.error('Usage: node tasks.ts --rename | --prepareDevserver | --updateDevserver');
    process.exit(1);
}
