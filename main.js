'use strict';
const express   = require('express');
const utils     = require('@iobroker/adapter-core');
const LE        = require(utils.controllerDir + '/lib/letsencrypt');
const ApiServer = require('./lib/server');
const words     = require('./admin/words');

/**
 * The adapter instance
 * @type {ioBroker.Adapter}
 */
let adapter;

/**
 * Starts the adapter instance
 * @param {Partial<ioBroker.AdapterOptions>} [options]
 */
function startAdapter(options) {
    // Create the adapter and define its methods
    return adapter = utils.adapter(Object.assign({}, options, {
        name: 'lovelace',

        // The ready callback is called when databases are connected and adapter received configuration.
        // start here!
        ready: () => main(adapter), // Main method defined below for readability

        // is called when adapter shuts down - callback has to be called under any circumstances!
        unload: (callback) => {
            try {
                adapter.log.info('cleaned everything up...');

                adapter.apiServer && adapter.apiServer.destroy();

                if (adapter.webServer) {
                    adapter.webServer.close(callback);
                    adapter.webServer = null;
                } else {
                    callback();
                }
            } catch (e) {
                callback();
            }
        },

        // is called if a subscribed object changes
        objectChange: (id, obj) => {
            adapter.apiServer.onObjectChange(id, obj);
        },

        // is called if a subscribed state changes
        stateChange: (id, state) => {
            if (state) {
                // The state was changed
                adapter.apiServer.onStateChange(id, state);
            } else {
                // The state was deleted
                adapter.log.info(`state ${id} deleted`);
            }
        },

        message: obj => {
            if (obj.command === 'browse') {
                obj.callback && adapter.sendTo(obj.from, obj.command, adapter.apiServer.getHassStates(), obj.callback);
            } else if (obj.command === 'send') {
                adapter.apiServer.addNotification(obj.message).then(list =>
                    obj.callback && adapter.sendTo(obj.from, obj.command, list, obj.callback));
            } else if (obj.command === 'checkIdForDuplicates') {
                if (obj.callback) {
                    if (obj.message) {
                        const entities = adapter.apiServer.getHassStates();
                        const params = obj.message;
                        const entityId = params.entity + '.' + params.name;
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
        }

        // Some message was sent to adapter instance over message box. Used by email, pushover, text2speech, ...
        // requires "common.message" property to be set to true in io-package.json
        // message: (obj) => {
        // 	if (typeof obj === "object" && obj.message) {
        // 		if (obj.command === "send") {
        // 			// e.g. send email or pushover or whatever
        // 			adapter.log.info("send command");

        // 			// Send response in callback if required
        // 			if (obj.callback) adapter.sendTo(obj.from, obj.command, "Message received", obj.callback);
        // 		}
        // 	}
        // },
    }));
}

async function initWebServer(settings) {
    const server = {
        app:       express(),
        server:    null,
        api:       null,
        io:        null,
        settings:  settings
    };

    settings.port = parseInt(settings.port, 10);

    if (settings.port) {

        if (settings.secure && !adapter.config.certificates) {
            return null;
        }

        try {
            if (typeof LE.createServerAsync === 'function') {
                server.server = await LE.createServerAsync(server.app, settings, adapter.config.certificates, adapter.config.leConfig, adapter.log, adapter);
            } else {
                server.server = LE.createServer(server.app, settings, adapter.config.certificates, adapter.config.leConfig, adapter.log);
            }
        } catch (err) {
            adapter.log.error(`Cannot create webserver: ${err}`);
            adapter.terminate ? adapter.terminate(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION) : process.exit(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION);
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
        let serverPort = server.settings.port;

        server.server.on('error', e => {
            if (e.toString().includes('EACCES') && serverPort <= 1024) {
                adapter.log.error(`node.js process has no rights to start server on the port ${serverPort}.\n` +
                    `Do you know that on linux you need special permissions for ports under 1024?\n` +
                    `You can call in shell following scrip to allow it for node.js: "iobroker fix"`
                );
            } else {
                adapter.log.error(`Cannot start server on ${settings.bind || '0.0.0.0'}:${serverPort}: ${e}`);
            }
            if (!serverListening) {
                adapter.terminate ? adapter.terminate(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION) : process.exit(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION);
            }
        });

        adapter.getPort(server.settings.port, (!server.settings.bind || server.settings.bind === '0.0.0.0') ? undefined : server.settings.bind || undefined, port => {
            if (port !== server.settings.port && !adapter.config.findNextPort) {
                adapter.log.error(`port ${server.settings.port} already in use`);
                if (adapter.terminate) {
                    adapter.terminate(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION);
                } else {
                    process.exit(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION);
                }
            }
            serverPort = port;

            server.server.listen(port, (!server.settings.bind || server.settings.bind === '0.0.0.0') ? undefined : server.settings.bind || undefined, () =>
                serverListening = true);
            adapter.log.info(`http${server.settings.secure ? 's' : ''} server listening on port ${port}`);
        });
    }

    if (server.server) {
        return server;
    } else {
        return null;
    }
}

async function main(adapter) {
    if (adapter.config.secure) {
        // subscribe on changes of permissions
        adapter.subscribeForeignObjects('system.group.*');
        adapter.subscribeForeignObjects('system.user.*');

        // Load certificates
        adapter.getCertificates(async (err, certificates, leConfig) => {
            adapter.config.certificates = certificates;
            adapter.config.leConfig     = leConfig;
            adapter.webServer = await initWebServer(adapter.config);
            adapter.apiServer = new ApiServer({
                adapter,
                server: adapter.webServer.server,
                app: adapter.webServer.app,
                words
            });
        });
    } else {
        adapter.webServer = await initWebServer(adapter.config);
        adapter.apiServer = new ApiServer({
            adapter,
            server: adapter.webServer.server,
            app: adapter.webServer.app,
            words
        });
    }

    // examples for the checkPassword/checkGroup functions
    /*adapter.checkPassword('admin', 'iobroker', (res) => {
        adapter.log.info('check user admin pw iobroker: ' + res);
    });*/
}

if (module.parent) {
    // Export startAdapter in compact mode
    module.exports = startAdapter;
} else {
    // otherwise start the instance directly
    startAdapter();
}
