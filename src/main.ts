import express from 'express';
import * as utils from '@iobroker/adapter-core';
import { WebServer } from '@iobroker/webserver';
import type http from 'node:http';
import type https from 'node:https';

import ApiServer from './lib/server';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const words = require('../admin/words');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const yaml = require('js-yaml') as { load(s: string): unknown };

/**
 * Format the get/set ids of a STATE or ATTRIBUTE for the admin entities table.
 *
 * @param obj - a STATE/ATTRIBUTE descriptor with optional getId/setId
 */
function formatEntityIds(obj: { getId?: string; setId?: string } | undefined): string {
    if (!obj) {
        return '';
    }
    if (obj.getId && obj.setId && obj.getId !== obj.setId) {
        return `${obj.getId} / ${obj.setId}`;
    }
    return obj.getId || obj.setId || '';
}

/**
 * Build a readable "attr: ids/value" multiline string for one entity (admin entities table).
 *
 * @param entity - the internal entity
 * @param entity.attributes - the entity's HA attributes
 * @param entity.context - the entity's adapter context
 * @param entity.context.ATTRIBUTES - the entity's attribute->state mappings
 */
function formatEntityAttributes(entity: {
    attributes?: Record<string, unknown>;
    context?: { ATTRIBUTES?: { attribute: string; getId?: string; setId?: string }[] };
}): string {
    const parts: string[] = [];
    const seen = new Set<string>();
    for (const attr of entity.context?.ATTRIBUTES || []) {
        parts.push(`${attr.attribute}: ${formatEntityIds(attr)}`);
        seen.add(attr.attribute);
    }
    for (const [key, value] of Object.entries(entity.attributes || {})) {
        if (!seen.has(key)) {
            parts.push(`${key}: ${String(value)}`);
        }
    }
    return parts.sort().join('\n');
}

/**
 * Build the `{ native: { _cardsTable } }` payload for the admin custom-cards table.
 *
 * @param a - the adapter instance
 */
async function buildCardsNative(a: AdapterWithExtras): Promise<{ native: { _cardsTable: unknown[] } }> {
    const entries = await a.apiServer.listCards();
    const rows = entries
        .map(entry => ({
            file: entry.file,
            version: entry.version || '',
            size: entry.isDir ? '<dir>' : String(entry.size),
            modified: entry.modifiedAt ? new Date(entry.modifiedAt).toISOString() : '',
        }))
        .sort((x, y) => x.file.localeCompare(y.file));
    return { native: { _cardsTable: rows } };
}

interface AdapterConfig extends ioBroker.AdapterConfig {
    secure?: boolean;
    certificates?: unknown;
    leConfig?: unknown;
    bind?: string;
    port: number;
    findNextPort?: boolean;
    /** PWA / home-screen app name (manifest.name). */
    pwaName?: string;
    /** PWA short name (manifest.short_name). */
    pwaShortName?: string;
    /** Auto entity_id format for newly created automatic entities. */
    autoEntityIdFormat?: 'name' | 'roomFunction' | 'iobId';
    [key: string]: unknown;
}

type AdapterWithExtras = ioBroker.Adapter & {
    config: AdapterConfig;
    apiServer: InstanceType<typeof ApiServer>;
    webServer: ServerBundle | null;
};

interface ServerBundle {
    app: ReturnType<typeof express>;
    server: (http.Server | https.Server) & { __server?: ServerBundle };
    api: null;
    io: null;
    settings: AdapterConfig;
}

/**
 * The adapter instance
 */
let adapter: AdapterWithExtras;

/**
 * Starts the adapter instance.
 *
 * @param options - partial adapter options to merge
 * @returns the adapter instance
 */
function startAdapter(options?: Partial<ioBroker.AdapterOptions>): ioBroker.Adapter {
    adapter = utils.adapter(
        Object.assign({}, options, {
            name: 'lovelace',
            // NOTE: Object.assign result is cast to AdapterOptions below

            ready: () => main(adapter),

            unload: (callback: () => void) => {
                try {
                    adapter.log.info('cleaned everything up...');

                    adapter.apiServer && adapter.apiServer.destroy();

                    if (adapter.webServer && typeof adapter.webServer.server?.close === 'function') {
                        adapter.webServer.server.close(callback);
                        adapter.webServer = null;
                    } else {
                        callback();
                    }
                } catch (e) {
                    adapter.log.error(`Error on unload: ${String(e)} - ${(e as Error)?.stack ?? ''}`);
                    callback();
                }
            },

            objectChange: (id: string, obj: ioBroker.Object | null | undefined) => {
                void adapter.apiServer.onObjectChange(id, obj);
            },

            stateChange: (id: string, state: ioBroker.State | null | undefined) => {
                if (state) {
                    void adapter.apiServer.onStateChange(id, state);
                } else {
                    adapter.log.debug(`state ${id} deleted`);
                }
            },

            message: (obj: ioBroker.Message) => {
                if (obj.command === 'browse') {
                    obj.callback &&
                        adapter.sendTo(obj.from, obj.command, adapter.apiServer.getHassStates(), obj.callback);
                } else if (obj.command === 'regenerateEntityIds') {
                    const format = (obj.message as { format?: string } | undefined)?.format;
                    void adapter.apiServer
                        ._regenerateAutoEntityIds(format)
                        .then(
                            (renamed: number) =>
                                obj.callback && adapter.sendTo(obj.from, obj.command, { renamed }, obj.callback),
                        )
                        .catch(
                            (e: Error) =>
                                obj.callback &&
                                adapter.sendTo(obj.from, obj.command, { error: e.message }, obj.callback),
                        );
                } else if (obj.command === 'listCards') {
                    // Admin: rescan the cards folder (so the running adapter serves added/removed cards
                    // without a restart) and fill the read-only custom-cards table.
                    if (obj.callback) {
                        void adapter.apiServer
                            .refreshCardResources()
                            .catch((e: Error) => adapter.log.warn(`Could not refresh card resources: ${String(e)}`))
                            .then(() => buildCardsNative(adapter))
                            .then(native => adapter.sendTo(obj.from, obj.command, native, obj.callback));
                    }
                } else if (obj.command === 'listCardNames') {
                    // Admin: file names for the "delete card" dropdown.
                    if (obj.callback) {
                        void adapter.apiServer.listCards().then(entries =>
                            adapter.sendTo(
                                obj.from,
                                obj.command,
                                entries
                                    .filter(entry => !entry.isDir)
                                    .map(entry => ({ value: entry.file, label: entry.file })),
                                obj.callback,
                            ),
                        );
                    }
                } else if (obj.command === 'deleteCard') {
                    // Admin: delete a custom-card file, rescan (so the running adapter stops serving
                    // it), then return the refreshed table.
                    if (obj.callback) {
                        const file = (obj.message as { file?: string } | undefined)?.file;
                        void (async () => {
                            if (file) {
                                try {
                                    await adapter.delFileAsync(adapter.namespace, `/cards/${file}`);
                                } catch (e) {
                                    adapter.log.warn(`Could not delete card ${file}: ${String(e)}`);
                                }
                            }
                            await adapter.apiServer
                                .refreshCardResources()
                                .catch((e: Error) =>
                                    adapter.log.warn(`Could not refresh card resources: ${String(e)}`),
                                );
                            adapter.sendTo(obj.from, obj.command, await buildCardsNative(adapter), obj.callback);
                        })();
                    }
                } else if (obj.command === 'getThemes') {
                    // Admin: fill the default-theme dropdowns. Parse the YAML the user currently has in
                    // the editor (passed in the message) so unsaved edits are reflected, too. Parsing on
                    // the backend avoids the fragile in-browser YAML parse that broke the dropdowns (#587).
                    if (obj.callback) {
                        // The editor content is sent along, so unsaved edits are offered too; the
                        // saved configuration is the fallback.
                        const sent = (obj.message as { themes?: string } | undefined)?.themes;
                        const themesYaml =
                            typeof sent === 'string' && sent.trim()
                                ? sent
                                : (adapter.config as { themes?: string }).themes || '';
                        let names: string[] = [];
                        try {
                            const parsed = yaml.load(themesYaml) as Record<string, unknown> | undefined | null;
                            names = parsed && typeof parsed === 'object' ? Object.keys(parsed) : [];
                        } catch {
                            names = [];
                        }
                        const list = [
                            { value: 'default', label: 'default' },
                            ...names.map(name => ({ value: name, label: name })),
                        ];
                        adapter.sendTo(obj.from, obj.command, list, obj.callback);
                    }
                } else if (obj.command === 'listEntities') {
                    // Admin: fill the read-only entities table (sendTo with useNative -> writes into the
                    // non-persisted `_entitiesTable` attribute).
                    if (obj.callback) {
                        const entities = (
                            adapter.apiServer.getHassStates() as {
                                entity_id: string;
                                isManual?: boolean;
                                attributes?: Record<string, unknown>;
                                context?: {
                                    STATE?: { getId?: string; setId?: string };
                                    ATTRIBUTES?: { attribute: string; getId?: string; setId?: string }[];
                                };
                            }[]
                        ).map(e => ({
                            entity_id: e.entity_id,
                            states: formatEntityIds(e.context?.STATE),
                            attributes: formatEntityAttributes(e),
                            manual: !!e.isManual,
                        }));
                        entities.sort((a, b) => a.entity_id.localeCompare(b.entity_id));
                        adapter.sendTo(obj.from, obj.command, { native: { _entitiesTable: entities } }, obj.callback);
                    }
                } else if (obj.command === 'send') {
                    void adapter.apiServer
                        .onStateChange(`${adapter.namespace}.notifications.add`, {
                            val: obj.message,
                            ack: false,
                        })
                        .then(
                            (list: unknown) =>
                                obj.callback && adapter.sendTo(obj.from, obj.command, list, obj.callback),
                        );
                } else if (obj.command === 'checkIdForDuplicates') {
                    if (obj.callback) {
                        if (obj.message) {
                            const entities = adapter.apiServer.getHassStates() as {
                                entity_id: string;
                                isManual?: boolean;
                                context: { id: string };
                            }[];
                            const params = obj.message as { entity: string; name: string; objectId: string };
                            const entityId = `${params.entity}.${params.name}`;
                            const objectId = params.objectId;
                            const entity = entities.find(e => e.entity_id === entityId);
                            if (entity) {
                                if (entity.isManual) {
                                    if (entity.context.id === objectId) {
                                        adapter.sendTo(obj.from, obj.command, '', obj.callback);
                                    } else {
                                        adapter.sendTo(obj.from, obj.command, 'labelDuplicateId', obj.callback);
                                    }
                                } else {
                                    adapter.sendTo(obj.from, obj.command, 'labelOverwriteAutoEntity', obj.callback);
                                }
                            } else {
                                adapter.sendTo(obj.from, obj.command, '', obj.callback);
                            }
                        } else {
                            adapter.sendTo(obj.from, obj.command, 'Internal error - Message null', obj.callback);
                        }
                    }
                }
            },
        }) as any,
    ) as AdapterWithExtras;
    return adapter;
}

/**
 * Initialize the HTTP/HTTPS web server.
 *
 * @param settings - adapter configuration, used for port/bind/secure settings
 * @returns the server bundle or null on failure
 */
async function initWebServer(settings: AdapterConfig): Promise<ServerBundle | null | undefined> {
    const server: ServerBundle = {
        app: express(),
        server: null as unknown as http.Server,
        api: null,
        io: null,
        settings,
    };

    settings.port = parseInt(String(settings.port), 10);

    if (settings.port) {
        if (settings.secure && !adapter.config.certificates) {
            return null;
        }
        try {
            const webserver = new WebServer({ app: server.app, adapter, secure: settings.secure });
            server.server = await webserver.init();
        } catch (err) {
            adapter.log.error(`Cannot create web-server: ${String(err)}`);
            if (adapter.terminate) {
                adapter.terminate(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION);
            } else {
                process.exit(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION);
            }
            return;
        }
        if (!server.server) {
            adapter.log.error(`Cannot create web-server`);
            if (adapter.terminate) {
                adapter.terminate(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION);
            } else {
                process.exit(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION);
            }
            return;
        }

        server.server.__server = server;
    } else {
        adapter.log.error('port missing');
        if (adapter.terminate) {
            adapter.terminate(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION);
        } else {
            process.exit(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION);
        }
    }

    if (server.server) {
        let serverListening = false;
        let serverPort = settings.port;

        server.server.on('error', (e: Error) => {
            if (e.toString().includes('EACCES') && serverPort <= 1024) {
                adapter.log.error(
                    `node.js process has no rights to start server on the port ${serverPort}.\n` +
                        `Do you know that on linux you need special permissions for ports under 1024?\n` +
                        `You can call in shell following scrip to allow it for node.js: "iobroker fix"`,
                );
            } else {
                adapter.log.error(`Cannot start server on ${settings.bind ?? '0.0.0.0'}:${serverPort}: ${String(e)}`);
            }
            if (!serverListening) {
                if (adapter.terminate) {
                    adapter.terminate(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION);
                } else {
                    process.exit(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION);
                }
            }
        });

        adapter.getPort(
            settings.port,
            !settings.bind || settings.bind === '0.0.0.0' ? undefined : settings.bind,
            (port: number) => {
                if (port !== settings.port && !adapter.config.findNextPort) {
                    adapter.log.error(`port ${settings.port} already in use`);
                    if (adapter.terminate) {
                        adapter.terminate(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION);
                    } else {
                        process.exit(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION);
                    }
                }
                serverPort = port;

                server.server.listen(
                    port,
                    !settings.bind || settings.bind === '0.0.0.0' ? undefined : settings.bind,
                    () => {
                        serverListening = true;
                        adapter.log.info(`http${settings.secure ? 's' : ''} server listening on port ${port}`);
                    },
                );
            },
        );
    }

    if (server.server) {
        return server;
    }
    return null;
}

/**
 * Main entry point called when adapter is ready.
 *
 * @param adp - the adapter instance
 */
async function main(adp: AdapterWithExtras): Promise<void> {
    if (adp.config.secure) {
        adp.subscribeForeignObjects('system.group.*');
        adp.subscribeForeignObjects('system.user.*');

        const [certificates, leConfig] = await adp.getCertificatesAsync();
        adp.config.certificates = certificates;
        adp.config.leConfig = leConfig;
        adp.webServer = (await initWebServer(adp.config)) ?? null;
        if (adp.webServer) {
            adp.apiServer = new ApiServer({
                adapter: adp,
                server: adp.webServer.server,
                app: adp.webServer.app,
                words,
            });
        }
    } else {
        adp.webServer = (await initWebServer(adp.config)) ?? null;
        if (adp.webServer) {
            adp.apiServer = new ApiServer({
                adapter: adp,
                server: adp.webServer.server,
                app: adp.webServer.app,
                words,
            });
        }
    }
}

if (require.main === module) {
    startAdapter();
} else {
    module.exports = startAdapter;
}
