import express from 'express';
import * as utils from '@iobroker/adapter-core';
import { WebServer } from '@iobroker/webserver';
import type http from 'node:http';
import type https from 'node:https';

import ApiServer from './lib/server';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const words = require('../admin/words');

interface AdapterConfig extends ioBroker.AdapterConfig {
    secure?: boolean;
    certificates?: unknown;
    leConfig?: unknown;
    bind?: string;
    port: number;
    findNextPort?: boolean;
    /** Browser tab/title-bar title (issue #663). */
    browserTitle?: string;
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
                    adapter.log.info(`state ${id} deleted`);
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
