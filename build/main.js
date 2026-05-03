"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_express = __toESM(require("express"));
var utils = __toESM(require("@iobroker/adapter-core"));
var import_webserver = require("@iobroker/webserver");
var import_server = __toESM(require("./lib/server"));
const words = require("../admin/words");
let adapter;
function startAdapter(options) {
  adapter = utils.adapter(
    Object.assign({}, options, {
      name: "lovelace",
      // NOTE: Object.assign result is cast to AdapterOptions below
      ready: () => main(adapter),
      unload: (callback) => {
        var _a, _b;
        try {
          adapter.log.info("cleaned everything up...");
          adapter.apiServer && adapter.apiServer.destroy();
          if (adapter.webServer && typeof ((_a = adapter.webServer.server) == null ? void 0 : _a.close) === "function") {
            adapter.webServer.server.close(callback);
            adapter.webServer = null;
          } else {
            callback();
          }
        } catch (e) {
          adapter.log.error(`Error on unload: ${String(e)} - ${(_b = e == null ? void 0 : e.stack) != null ? _b : ""}`);
          callback();
        }
      },
      objectChange: (id, obj) => {
        adapter.apiServer.onObjectChange(id, obj);
      },
      stateChange: (id, state) => {
        if (state) {
          adapter.apiServer.onStateChange(id, state);
        } else {
          adapter.log.info(`state ${id} deleted`);
        }
      },
      message: (obj) => {
        if (obj.command === "browse") {
          obj.callback && adapter.sendTo(obj.from, obj.command, adapter.apiServer.getHassStates(), obj.callback);
        } else if (obj.command === "send") {
          adapter.apiServer.onStateChange(`${adapter.namespace}.notifications.add`, {
            val: obj.message,
            ack: false
          }).then(
            (list) => obj.callback && adapter.sendTo(obj.from, obj.command, list, obj.callback)
          );
        } else if (obj.command === "checkIdForDuplicates") {
          if (obj.callback) {
            if (obj.message) {
              const entities = adapter.apiServer.getHassStates();
              const params = obj.message;
              const entityId = `${params.entity}.${params.name}`;
              const objectId = params.objectId;
              const entity = entities.find((e) => e.entity_id === entityId);
              if (entity) {
                if (entity.isManual) {
                  if (entity.context.id === objectId) {
                    adapter.sendTo(obj.from, obj.command, "", obj.callback);
                  } else {
                    adapter.sendTo(obj.from, obj.command, "labelDuplicateId", obj.callback);
                  }
                } else {
                  adapter.sendTo(obj.from, obj.command, "labelOverwriteAutoEntity", obj.callback);
                }
              } else {
                adapter.sendTo(obj.from, obj.command, "", obj.callback);
              }
            } else {
              adapter.sendTo(obj.from, obj.command, "Internal error - Message null", obj.callback);
            }
          }
        }
      }
    })
  );
  return adapter;
}
async function initWebServer(settings) {
  const server = {
    app: (0, import_express.default)(),
    server: null,
    api: null,
    io: null,
    settings
  };
  settings.port = parseInt(String(settings.port), 10);
  if (settings.port) {
    if (settings.secure && !adapter.config.certificates) {
      return null;
    }
    try {
      const webserver = new import_webserver.WebServer({ app: server.app, adapter, secure: settings.secure });
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
    adapter.log.error("port missing");
    if (adapter.terminate) {
      adapter.terminate(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION);
    } else {
      process.exit(utils.EXIT_CODES.ADAPTER_REQUESTED_TERMINATION);
    }
  }
  if (server.server) {
    let serverListening = false;
    let serverPort = settings.port;
    server.server.on("error", (e) => {
      var _a;
      if (e.toString().includes("EACCES") && serverPort <= 1024) {
        adapter.log.error(
          `node.js process has no rights to start server on the port ${serverPort}.
Do you know that on linux you need special permissions for ports under 1024?
You can call in shell following scrip to allow it for node.js: "iobroker fix"`
        );
      } else {
        adapter.log.error(`Cannot start server on ${(_a = settings.bind) != null ? _a : "0.0.0.0"}:${serverPort}: ${String(e)}`);
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
      !settings.bind || settings.bind === "0.0.0.0" ? void 0 : settings.bind,
      (port) => {
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
          !settings.bind || settings.bind === "0.0.0.0" ? void 0 : settings.bind,
          () => {
            serverListening = true;
            adapter.log.info(`http${settings.secure ? "s" : ""} server listening on port ${port}`);
          }
        );
      }
    );
  }
  if (server.server) {
    return server;
  }
  return null;
}
async function main(adp) {
  var _a, _b;
  if (adp.config.secure) {
    adp.subscribeForeignObjects("system.group.*");
    adp.subscribeForeignObjects("system.user.*");
    const [certificates, leConfig] = await adp.getCertificatesAsync();
    adp.config.certificates = certificates;
    adp.config.leConfig = leConfig;
    adp.webServer = (_a = await initWebServer(adp.config)) != null ? _a : null;
    if (adp.webServer) {
      adp.apiServer = new import_server.default({
        adapter: adp,
        server: adp.webServer.server,
        app: adp.webServer.app,
        words
      });
    }
  } else {
    adp.webServer = (_b = await initWebServer(adp.config)) != null ? _b : null;
    if (adp.webServer) {
      adp.apiServer = new import_server.default({
        adapter: adp,
        server: adp.webServer.server,
        app: adp.webServer.app,
        words
      });
    }
  }
}
if (require.main === module) {
  startAdapter();
} else {
  module.exports = startAdapter;
}
//# sourceMappingURL=main.js.map
