'use strict';
const express = require('express');

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require('@iobroker/adapter-core');
const LE = require(utils.controllerDir + '/lib/letsencrypt');
const ApiServer = require('./lib/server');

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
            if (obj) {
                // The object was changed
                adapter.apiServer.onObjectChange(id, obj);
            } else {
                // The object was deleted
                adapter.log.info(`object ${id} deleted`);
            }
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

        message: obj=> {
            if (obj.command === 'browse') {
                obj.callback && adapter.sendTo(obj.from, obj.command, adapter.apiServer.getHassStates(), obj.callback);
            } else if (obj.command === 'send') {
                adapter.apiServer.addNotification(obj.message, list =>
                    obj.callback && adapter.sendTo(obj.from, obj.command, list, obj.callback));
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

function initWebServer(settings) {
    const server = {
        app:       express(),
        server:    null,
        api:       null,
        io:        null,
        settings:  settings
    };

    settings.port = parseInt(settings.port, 10);

    if (settings.port) {

        if (settings.secure && !adapter.config.certificates) return null;

        server.server = LE.createServer(server.app, settings, adapter.config.certificates, adapter.config.leConfig, adapter.log);
        server.server.__server = server;
    } else {
        adapter.log.error('port missing');
        if (adapter.terminate) {
            adapter.terminate(1);
        } else {
            process.exit(1);
        }
    }

    if (server.server) {
        adapter.getPort(server.settings.port, port => {
            if (port !== server.settings.port && !adapter.config.findNextPort) {
                adapter.log.error('port ' + server.settings.port + ' already in use');
                if (adapter.terminate) {
                    adapter.terminate(1);
                } else {
                    process.exit(1);
                }
            }
            server.server.listen(port);
            adapter.log.info('http' + (server.settings.secure ? 's' : '') + ' server listening on port ' + port);
        });
    }

    if (server.server) {
        return server;
    } else {
        return null;
    }
}

function main(adapter) {
    if (adapter.config.secure) {
        // subscribe on changes of permissions
        adapter.subscribeForeignObjects('system.group.*');
        adapter.subscribeForeignObjects('system.user.*');

        // Load certificates
        adapter.getCertificates((err, certificates, leConfig) => {
            adapter.config.certificates = certificates;
            adapter.config.leConfig     = leConfig;
            adapter.webServer = initWebServer(adapter.config);
            adapter.apiServer = new ApiServer({adapter, server: adapter.webServer.server, app: adapter.webServer.app});
        });
    } else {
        adapter.webServer = initWebServer(adapter.config);
        adapter.apiServer = new ApiServer({adapter, server: adapter.webServer.server, app: adapter.webServer.app});
    }

    // examples for the checkPassword/checkGroup functions
    /*adapter.checkPassword('admin', 'iobroker', (res) => {
        adapter.log.info('check user admin pw ioboker: ' + res);
    });*/
}

if (module.parent) {
    // Export startAdapter in compact mode
    module.exports = startAdapter;
} else {
    // otherwise start the instance directly
    startAdapter();
}