"use strict";
const instancesPath = "instances.";
const yaml = require("js-yaml");
class BrowserModModule {
  adapter;
  objects;
  clients;
  browserModStorage;
  knownViews;
  knownViewsStates;
  /**
   * Create a new instance of the browser_mod module.
   *
   * @param options - options object with adapter and objects
   * @param options.adapter - ioBroker adapter instance
   * @param options.objects - ioBroker objects cache
   */
  constructor(options) {
    this.adapter = options.adapter;
    this.objects = options.objects;
    this.clients = {};
    this.browserModStorage = {
      browsers: {},
      version: "2.0",
      settings: {
        hideSidebar: true,
        hideHeader: false,
        defaultPanel: null,
        sidebarPanelOrder: null,
        sidebarHiddenPanels: null,
        sidebarTitle: null,
        faviconTemplate: null,
        titleTemplate: null,
        hideInteractIcon: true,
        autoRegister: true,
        lockRegister: null
      },
      user_settings: {},
      sessions: {}
    };
    this.knownViews = [];
    this.knownViewsStates = {};
  }
  /**
   * Check if all objects for the browser_mod integration are created.
   *
   * @param ioBrokerDeviceId - ioBroker device id (path within adapter namespace)
   * @param browserId - browser_mod browser id
   * @param battery - whether to create battery state objects
   */
  async _checkObjects(ioBrokerDeviceId, browserId, battery = false) {
    ioBrokerDeviceId = `${this.adapter.namespace}.${ioBrokerDeviceId}`;
    if (!this.objects[ioBrokerDeviceId]) {
      if (!browserId) {
        await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId, {
          type: "folder",
          common: { name: "UI Instances" },
          native: {}
        });
      } else {
        await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId, {
          type: "device",
          common: {
            name: browserId,
            statusStates: { onlineId: `${ioBrokerDeviceId}.online` }
          },
          native: { instance: browserId }
        });
        this.adapter.log.info(`New browser_mod instance ${browserId}`);
      }
    }
    if (!this.objects[`${ioBrokerDeviceId}.path`]) {
      await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.path`, {
        type: "state",
        common: {
          name: "UI is showing path",
          type: "string",
          read: true,
          write: true,
          role: "state",
          states: this.knownViewsStates
        },
        native: { instance: browserId }
      });
    }
    if (!this.objects[`${ioBrokerDeviceId}.visible`] && browserId) {
      await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.visible`, {
        type: "state",
        common: { name: "UI is visible", type: "boolean", read: true, write: false, role: "sensor" },
        native: { instance: browserId }
      });
    }
    if (!this.objects[`${ioBrokerDeviceId}.activity`] && browserId) {
      await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.activity`, {
        type: "state",
        common: {
          name: "User is active in this browser",
          type: "boolean",
          read: true,
          write: false,
          role: "sensor"
        },
        native: { instance: browserId }
      });
    }
    if (battery) {
      if (!this.objects[`${ioBrokerDeviceId}.battery`] && browserId) {
        await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.battery`, {
          type: "channel",
          common: { name: "battery" },
          native: {}
        });
      }
      if (!this.objects[`${ioBrokerDeviceId}.battery.level`] && browserId) {
        await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.battery.level`, {
          type: "state",
          common: { name: "battery", type: "number", read: true, write: false, role: "value.battery" },
          native: { instance: browserId }
        });
      }
      if (!this.objects[`${ioBrokerDeviceId}.battery.charging`] && browserId) {
        await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.battery.charging`, {
          type: "state",
          common: {
            name: "charging",
            type: "boolean",
            read: true,
            write: false,
            role: "indicator.plugged"
          },
          native: { instance: browserId }
        });
      }
    }
    if (this.objects[`${ioBrokerDeviceId}.name`]) {
      await this.adapter.delObjectAsync(`${ioBrokerDeviceId}.name`);
    }
    if (!this.objects[`${ioBrokerDeviceId}.more_info`]) {
      await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.more_info`, {
        type: "state",
        common: {
          name: "Show more_info of entity_id",
          type: "string",
          read: false,
          write: true,
          role: "state"
        },
        native: { instance: browserId }
      });
    }
    if (!this.objects[`${ioBrokerDeviceId}.toast`]) {
      await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.toast`, {
        type: "state",
        common: {
          name: { en: "Notification in bottom left.", de: "Benachrichtigung unten links" },
          desc: {
            en: "Simple text or optional as json with fields: message, duration, action_text, action, see browser_mod notification dokumentation",
            de: "Einfacher text oder optional als json mit den Feldern: message, duration, action_text, action, wie in der Dokumentation zu browser_mod unter dem Punkt notification"
          },
          type: "string",
          read: false,
          write: true,
          role: "json"
        },
        native: { instance: browserId }
      });
    }
    if (this.objects[`${ioBrokerDeviceId}.notification`]) {
      await this.adapter.delObjectAsync(`${ioBrokerDeviceId}.notification`);
    }
    if (!this.objects[`${ioBrokerDeviceId}.popup`]) {
      await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.popup`, {
        type: "state",
        common: { name: "Show popup", type: "string", read: false, write: true, role: "json" },
        native: { instance: browserId }
      });
    }
    if (!this.objects[`${ioBrokerDeviceId}.popup_close`]) {
      await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.popup_close`, {
        type: "state",
        common: {
          name: "Close popups or more_info dialogs.",
          type: "boolean",
          read: false,
          write: true,
          role: "button"
        },
        native: { instance: browserId }
      });
    }
    if (!this.objects[`${ioBrokerDeviceId}.refresh`]) {
      await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.refresh`, {
        type: "state",
        common: { name: "Reload webpage", type: "boolean", read: false, write: true, role: "button" },
        native: { instance: browserId }
      });
    }
    if (this.objects[`${ioBrokerDeviceId}.window_reload`]) {
      await this.adapter.delObjectAsync(`${ioBrokerDeviceId}.window_reload`);
    }
    if (this.objects[`${ioBrokerDeviceId}.lovelace_reload`]) {
      await this.adapter.delObjectAsync(`${ioBrokerDeviceId}.lovelace_reload`);
    }
    if (!this.objects[`${ioBrokerDeviceId}.blackout`]) {
      await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.blackout`, {
        type: "state",
        common: { name: "Blackout screen", type: "boolean", read: false, write: true, role: "button" },
        native: { instance: browserId }
      });
    }
    if (!this.objects[`${ioBrokerDeviceId}.set_theme`]) {
      await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.set_theme`, {
        type: "state",
        common: {
          name: { en: "Set frontend theme", de: "Frontend-Theme setzen" },
          desc: {
            en: 'Theme name (see dropdown). Advanced: JSON with fields theme, dark ("auto"/"light"/"dark"), primaryColor.',
            de: 'Theme-Name (siehe Auswahl). Erweitert: JSON mit Feldern theme, dark ("auto"/"light"/"dark"), primaryColor.'
          },
          type: "string",
          read: false,
          write: true,
          role: "text",
          states: this._getThemeStates()
        },
        native: { instance: browserId }
      });
    }
    if (!this.objects[`${ioBrokerDeviceId}.console`]) {
      await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.console`, {
        type: "state",
        common: {
          name: { en: "Log message to browser console", de: "Nachricht in Browser-Konsole ausgeben" },
          type: "string",
          read: false,
          write: true,
          role: "text"
        },
        native: { instance: browserId }
      });
    }
    if (!this.objects[`${ioBrokerDeviceId}.change_browser_id`]) {
      await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.change_browser_id`, {
        type: "state",
        common: {
          name: { en: "Change this Browser ID", de: "Diese Browser-ID \xE4ndern" },
          desc: {
            en: "New Browser ID as plain text, or JSON with fields: new_browser_id, register (bool), refresh (bool).",
            de: "Neue Browser-ID als Text, oder JSON mit Feldern: new_browser_id, register (bool), refresh (bool)."
          },
          type: "string",
          read: false,
          write: true,
          role: "json"
        },
        native: { instance: browserId }
      });
    }
    if (!this.objects[`${ioBrokerDeviceId}.online`] && browserId) {
      await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.online`, {
        type: "state",
        common: {
          name: "online",
          type: "boolean",
          read: true,
          write: false,
          role: "indicator.reachable",
          def: true
        },
        native: { instance: browserId }
      });
    }
    if (!this.objects[`${ioBrokerDeviceId}.hideHeader`]) {
      await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.hideHeader`, {
        type: "state",
        common: {
          name: "Hide Header",
          type: "boolean",
          read: true,
          write: true,
          role: "switch",
          default: this.browserModStorage.settings.hideHeader
        },
        native: { instance: browserId }
      });
    } else {
      const hideHeader = await this.adapter.getStateAsync(`${ioBrokerDeviceId}.hideHeader`);
      if (hideHeader) {
        if (browserId) {
          this.initialiseBrowserSettings(browserId, true);
          this.browserModStorage.browsers[browserId].settings.hideHeader = hideHeader.val;
        } else {
          this.browserModStorage.settings.hideHeader = hideHeader.val;
        }
      }
    }
    if (!this.objects[`${ioBrokerDeviceId}.hideSidebar`]) {
      await this.adapter.setObjectNotExistsAsync(`${ioBrokerDeviceId}.hideSidebar`, {
        type: "state",
        common: {
          name: "Hide Sidebar",
          type: "boolean",
          read: true,
          write: true,
          role: "switch",
          default: this.browserModStorage.settings.hideSidebar
        },
        native: { instance: browserId }
      });
    } else {
      const hideSidebar = await this.adapter.getStateAsync(`${ioBrokerDeviceId}.hideSidebar`);
      if (hideSidebar) {
        if (browserId) {
          this.initialiseBrowserSettings(browserId, true);
          this.browserModStorage.browsers[browserId].settings.hideSidebar = hideSidebar.val;
        } else {
          this.browserModStorage.settings.hideSidebar = hideSidebar.val;
        }
      }
    }
  }
  /**
   * Clean up old browser_mod instances.
   */
  async _cleanUpInstances() {
    const count = Object.keys(this.browserModStorage.browsers).length;
    if (count > this.adapter.config.maxBrowserInstances) {
      this.adapter.log.info(
        `Cleaning up ${count - this.adapter.config.maxBrowserInstances} old browser_mod instances.`
      );
      const browsersSorted = Object.keys(this.browserModStorage.browsers).sort(
        (a, b) => this.browserModStorage.browsers[a].last_seen - this.browserModStorage.browsers[b].last_seen
      );
      for (let i = 0; i < count - this.adapter.config.maxBrowserInstances; i += 1) {
        const browserId = browsersSorted[i];
        this.adapter.log.debug(
          `Deleting old browser_mod instance ${browserId}, last seen ${new Date(this.browserModStorage.browsers[browserId].last_seen).toISOString()}`
        );
        await this.adapter.delObjectAsync(`${instancesPath}${browserId}`, { recursive: true });
        delete this.browserModStorage.browsers[browserId];
      }
    }
  }
  /**
   * Initialise the browser settings for a browser_mod instance.
   *
   * @param browserId - browser_mod browser id
   * @param now - whether to set last_seen to current time
   */
  initialiseBrowserSettings(browserId, now = false) {
    if (!this.browserModStorage.browsers[browserId]) {
      this.browserModStorage.browsers[browserId] = {
        last_seen: now ? Date.now() : 0,
        registered: true,
        locked: false,
        camera: false,
        settings: this.browserModStorage.settings,
        meta: "default"
      };
    }
  }
  /**
   * Handle an update message from a browser_mod instance.
   *
   * @param ioBrokerDeviceId - ioBroker device id path for the browser instance
   * @param message - the update message from the browser
   */
  async _handleUpdate(ioBrokerDeviceId, message) {
    if (message.browserID && this.browserModStorage.browsers[message.browserID]) {
      this.browserModStorage.browsers[message.browserID].last_seen = Date.now() / 1e3;
    }
    const data = message.data;
    if (data) {
      if (data.browser) {
        const browser = data.browser;
        if (browser.battery_level) {
          await this._checkObjects(ioBrokerDeviceId, message.browserID, true);
          await this.adapter.setStateAsync(
            `${ioBrokerDeviceId}.battery.level`,
            browser.battery_level,
            true
          );
          await this.adapter.setStateAsync(
            `${ioBrokerDeviceId}.battery.charging`,
            browser.charging || false,
            true
          );
        } else {
          await this._checkObjects(ioBrokerDeviceId, message.browserID);
          await this._cleanUpInstances();
        }
        if (browser.path) {
          await this.adapter.setStateAsync(
            `${ioBrokerDeviceId}.path`,
            browser.path,
            true
          );
        }
        if (browser.visibility) {
          await this.adapter.setStateAsync(
            `${ioBrokerDeviceId}.visible`,
            browser.visibility === "visible",
            true
          );
        }
      }
      if (typeof data.activity === "boolean") {
        await this.adapter.setStateAsync(`${ioBrokerDeviceId}.activity`, data.activity, true);
      }
      if (typeof data.screen_on === "boolean") {
        await this.adapter.setStateAsync(`${ioBrokerDeviceId}.blackout`, !data.screen_on, true);
      }
    }
  }
  /**
   * Send a message to a browser_mod instance.
   *
   * @param client - the browser_mod client to send to
   * @param message - message payload to send
   */
  _sendToClient(client, message) {
    client.ws.send(
      JSON.stringify({
        id: client.subscribeId,
        ...message
      })
    );
  }
  /**
   * Derive a stable key for the current login session, used for sync-session Browser ID recall.
   * Prefers the auth token, falls back to the username. Returns undefined when neither is known.
   *
   * @param ws - websocket connection
   */
  _sessionKey(ws) {
    var _a, _b;
    return ((_a = ws.__auth) == null ? void 0 : _a.access_token) || ((_b = ws.__auth) == null ? void 0 : _b.username) || void 0;
  }
  /**
   * Build the `common.states` value→label map of theme names available for set_theme.
   * Parses the same theme YAML the server uses, plus the built-in 'default'/'auto' entries.
   */
  _getThemeStates() {
    const states = { default: "default", auto: "auto" };
    try {
      const themes = yaml.load(this.adapter.config.themes || "") || {};
      for (const themeName of Object.keys(themes)) {
        states[themeName] = themeName;
      }
    } catch (e) {
      this.adapter.log.debug(`Could not parse themes for set_theme states: ${String(e)}`);
    }
    return states;
  }
  /**
   * Process a message from a browser_mod instance.
   *
   * @param ws - websocket connection with browser id
   * @param message - the message from the frontend
   */
  async processMessage(ws, message) {
    var _a;
    if (message.type && message.type.startsWith("browser_mod/")) {
      const method = message.type.split("/")[1];
      if (!message.browserID && method !== "recall_id") {
        this.adapter.log.warn(`No browser ID in browser_mod request: ${JSON.stringify(message)}`);
        return true;
      }
      const ioBrokerDeviceId = instancesPath + message.browserID;
      if (method === "update") {
        await this._handleUpdate(ioBrokerDeviceId, message);
      } else if (method === "connect") {
        ws.on("close", async () => {
          this.adapter.log.debug(`Instance ${String(message.browserID)} disconnected.`);
          delete this.clients[message.browserID];
          await this.adapter.setStateAsync(`${ioBrokerDeviceId}.online`, false, true);
        });
        this.adapter.log.debug(`Instance ${String(message.browserID)} connected.`);
        this.clients[message.browserID] = {
          subscribeId: message.id,
          instance: message.browserID,
          ws
        };
        ws.browserID = message.browserID;
        ws.send(
          JSON.stringify([
            { id: message.id, type: "result", success: true, result: null },
            {
              id: message.id,
              type: "event",
              event: {
                event_type: "ready",
                origin: "LOCAL",
                result: this.browserModStorage,
                time_fired: (/* @__PURE__ */ new Date()).toISOString()
              }
            }
          ])
        );
        if (this.objects[`${this.adapter.namespace}.${ioBrokerDeviceId}.online`]) {
          await this.adapter.setStateAsync(`${ioBrokerDeviceId}.online`, true, true);
        } else {
          console.log(
            "No objects for instance, yet..",
            `${ioBrokerDeviceId}.online`,
            this.objects[ioBrokerDeviceId]
          );
        }
      } else if (method === "register") {
        this.initialiseBrowserSettings(message.browserID, true);
        const msgData = message.data;
        if (msgData && msgData.browserID) {
          const newIoBrokerDeviceId = instancesPath + msgData.browserID;
          for (const id of Object.keys(this.objects)) {
            if (id.startsWith(ioBrokerDeviceId)) {
              delete this.objects[id];
            }
          }
          try {
            await this.adapter.delObjectAsync(ioBrokerDeviceId, { recursive: true });
            await this._checkObjects(newIoBrokerDeviceId, msgData.browserID);
          } catch (e) {
            this.adapter.log.warn(
              `Could not delete old instance objects in ${ioBrokerDeviceId}, please do so yourself. Error was: ${String(e)}`
            );
          }
          delete this.browserModStorage.browsers[message.browserID];
          const newBrowserId = msgData.browserID;
          delete msgData.browserID;
          this.browserModStorage.browsers[newBrowserId] = msgData;
        } else {
          try {
            await this._checkObjects(ioBrokerDeviceId, message.browserID);
            await this._cleanUpInstances();
          } catch (e) {
            this.adapter.log.warn(
              `Could not create objects for instance ${ioBrokerDeviceId}. Error was: ${String(e)}`
            );
          }
          if (this.objects[`${this.adapter.namespace}.${ioBrokerDeviceId}.online`]) {
            await this.adapter.setStateAsync(`${ioBrokerDeviceId}.online`, true, true);
          } else {
            console.log(
              "No objects for instance, yet..",
              `${ioBrokerDeviceId}.online`,
              this.objects[ioBrokerDeviceId]
            );
          }
        }
      } else if (method === "log") {
        this.adapter.log.debug(`Message from browser_mod: ${String(message.message)}`);
        ws.send(JSON.stringify({ id: message.id, type: "result", success: true }));
      } else if (method === "settings") {
        if (message.key) {
          if (message.user) {
            const user = message.user;
            const userSettings = this.browserModStorage.user_settings[user] || (this.browserModStorage.user_settings[user] = {});
            userSettings[message.key] = message.value;
          } else {
            this.browserModStorage.settings[message.key] = message.value;
          }
          this.adapter.log.debug(
            `Updated browser_mod settings: ${message.key} to ${String(message.value)}`
          );
        }
        ws.send(JSON.stringify({ id: message.id, type: "result", success: true }));
      } else if (method === "store_session") {
        const sessionKey = this._sessionKey(ws);
        if (sessionKey && message.browserID) {
          this.browserModStorage.sessions[sessionKey] = message.browserID;
        }
        ws.send(JSON.stringify({ id: message.id, type: "result", success: true }));
      } else if (method === "delete_session") {
        const sessionKey = this._sessionKey(ws);
        if (sessionKey) {
          delete this.browserModStorage.sessions[sessionKey];
        }
        ws.send(JSON.stringify({ id: message.id, type: "result", success: true }));
      } else if (method === "recall_id") {
        const sessionKey = this._sessionKey(ws);
        const sessionBrowserId = sessionKey ? this.browserModStorage.sessions[sessionKey] : void 0;
        const result = sessionBrowserId ? { browserID: sessionBrowserId, via_session: true } : { browserID: (_a = ws.browserID) != null ? _a : null };
        ws.send(JSON.stringify({ id: message.id, type: "result", success: true, result }));
      } else if (method === "unregister") {
        const browserId = message.browserID;
        try {
          await this.adapter.delObjectAsync(`${instancesPath}${browserId}`, { recursive: true });
        } catch (e) {
          this.adapter.log.info(`Could not delete browser_mod instance ${browserId} objects: ${String(e)}`);
          this.adapter.log.info("Maybe was already deleted?");
        }
        delete this.browserModStorage.browsers[browserId];
        this.adapter.log.debug(`Instance ${browserId} unregistered.`);
        ws.send(JSON.stringify({ id: message.id, type: "result", success: true }));
      } else {
        this.adapter.log.warn(`Unknown browser_mod method: ${JSON.stringify(message)}`);
        ws.send(JSON.stringify({ id: message.id, type: "result", success: true }));
      }
      return true;
    } else {
      return false;
    }
  }
  /**
   * Handle a state change in ioBroker.
   *
   * @param id - ioBroker state id that changed
   * @param state - the new state value
   */
  onStateChange(id, state) {
    if (state && !state.ack && id.startsWith(`${this.adapter.namespace}.${instancesPath}`)) {
      const parts = id.split(".");
      const browserId = parts[3];
      let command = parts[4];
      let allDevices = false;
      if (!command) {
        command = parts[3];
        allDevices = true;
      }
      let event = {
        event_type: "browser_mod/command",
        command,
        origin: "LOCAL",
        time_fired: (/* @__PURE__ */ new Date()).toISOString()
      };
      const client = this.clients[browserId];
      if (allDevices || client) {
        switch (command) {
          case "blackout":
            if (!state.val) {
              event.command = "screen_on";
            } else {
              event.command = "screen_off";
            }
            break;
          case "path":
            event.command = "navigate";
            event.path = state.val;
            break;
          case "more_info":
            event.entity = state.val;
            break;
          case "toast":
            event.command = "notification";
            if (state.val) {
              try {
                const { duration, message, action_text, action } = JSON.parse(
                  state.val
                );
                event.duration = duration;
                event.message = message;
                event.action_text = action_text;
                event.action = action;
              } catch (e) {
                this.adapter.log.error(`Could not parse toast object: ${String(e)}`);
                const valStr = state.val;
                if (valStr.includes(";")) {
                  [event.duration, event.message, event.action_text, event.action] = valStr.split(";");
                  if (event.action) {
                    try {
                      event.action = JSON.parse(event.action);
                    } catch (e2) {
                      this.adapter.log.debug(
                        `Could not parse action string ${String(event.action)}: ${String(e2)}`
                      );
                    }
                  }
                } else {
                  event.message = valStr;
                }
              }
            } else {
              return;
            }
            break;
          case "popup":
            if (state.val) {
              try {
                const popup = JSON.parse(state.val);
                for (const key of Object.keys(popup)) {
                  event[key] = popup[key];
                }
              } catch (e) {
                this.adapter.log.error(`Could not parse popup object: ${String(e)}`);
                return;
              }
            } else {
              return;
            }
            break;
          case "popup_close":
            if (state.val) {
              event.command = "close_popup";
            } else {
              return;
            }
            break;
          case "refresh":
            break;
          case "set_theme":
            if (state.val) {
              const valStr = state.val;
              try {
                const theme = JSON.parse(valStr);
                for (const key of Object.keys(theme)) {
                  event[key] = theme[key];
                }
              } catch {
                event.theme = valStr;
              }
            } else {
              return;
            }
            break;
          case "console":
            if (state.val) {
              event.message = state.val;
            } else {
              return;
            }
            break;
          case "change_browser_id":
            if (state.val) {
              const valStr = state.val;
              event.current_browser_id = browserId;
              try {
                const data = JSON.parse(valStr);
                for (const key of Object.keys(data)) {
                  event[key] = data[key];
                }
              } catch {
                event.new_browser_id = valStr;
              }
            } else {
              return;
            }
            break;
          case "hideHeader":
            if (allDevices) {
              this.browserModStorage.settings.hideHeader = state.val;
            } else {
              this.browserModStorage.browsers[browserId].hideHeader = state.val;
            }
            event = { result: this.browserModStorage };
            break;
          default:
            return;
        }
        if (allDevices) {
          for (const c of Object.values(this.clients)) {
            this._sendToClient(c, { type: "event", event, id: c.subscribeId });
          }
        } else {
          event.browserID = client.instance;
          this._sendToClient(client, { type: "event", event, id: client.subscribeId });
        }
      } else {
        this.adapter.log.warn(`Device ${browserId} currently not connected. Can not send command ${command}`);
      }
    }
  }
  /**
   * Handle a change of lovelace configuration. Updates ioBroker objects for new views.
   *
   * @param lovelaceConfig - current lovelace configuration
   * @param lovelaceConfig.views - array of view definitions with path property
   */
  handeUpdatedConfig(lovelaceConfig) {
    let needUpdate = false;
    for (const view of lovelaceConfig.views) {
      const viewPath = `/lovelace/${view.path}`;
      if (!this.knownViews.includes(viewPath)) {
        needUpdate = true;
        this.knownViews.push(viewPath);
      }
    }
    if (needUpdate) {
      this.knownViewsStates = {};
      for (let i = 0; i < this.knownViews.length; i += 1) {
        this.knownViewsStates[this.knownViews[i]] = this.knownViews[i];
      }
      for (const id of Object.keys(this.objects)) {
        if (id.startsWith(`${this.adapter.namespace}.${instancesPath}`) && id.endsWith(".path")) {
          this.adapter.extendObject(id, { common: { type: "string", states: this.knownViewsStates } }, () => {
            this.adapter.log.debug(`Updated ${id}`);
          });
        }
      }
    }
  }
  /**
   * Initialize the browser_mod module.
   *
   * @param lovelaceConfig - current lovelace configuration
   * @param lovelaceConfig.views - array of view definitions with path property
   */
  async init(lovelaceConfig) {
    this.handeUpdatedConfig(lovelaceConfig);
    await this._checkObjects(instancesPath.substring(0, instancesPath.length - 1));
    for (const id of Object.keys(this.objects)) {
      if (id.startsWith(`${this.adapter.namespace}.${instancesPath}`)) {
        const browserId = id.split(".")[3];
        if (id.endsWith(".online")) {
          const onlineState = await this.adapter.getStateAsync(id);
          this.initialiseBrowserSettings(browserId);
          this.browserModStorage.browsers[browserId].last_seen = (onlineState == null ? void 0 : onlineState.lc) || 0;
          await this.adapter.setState(id, false, true);
        } else if (id.endsWith("hideHeader")) {
          const hideHeader = await this.adapter.getStateAsync(id);
          if (hideHeader) {
            if (id === `${this.adapter.namespace}.${instancesPath}hideHeader`) {
              this.browserModStorage.settings.hideHeader = hideHeader.val;
            } else {
              this.initialiseBrowserSettings(browserId);
              this.browserModStorage.browsers[id.split(".")[3]].settings.hideHeader = hideHeader.val;
            }
          }
        }
      }
    }
    await this._cleanUpInstances();
    this.adapter.log.debug("modules/browser_mod: init done.");
  }
  /**
   * Augment the services object with browser_mod services.
   *
   * @param services - services map to augment
   */
  augmentServices(services) {
    const target = {
      device: [{ integration: "browser_mod" }],
      entity: [{ integration: "browser_mod" }]
    };
    services.browser_mod = {
      sequence: {
        name: "",
        description: "Run a sequence of services",
        fields: {
          sequence: {
            name: "Actions",
            description: "List of services to run",
            selector: { object: null }
          }
        },
        target
      },
      delay: {
        name: "",
        description: "Wait for a time",
        fields: {
          time: {
            name: "Time",
            description: "Time to wait (ms)",
            selector: { number: { mode: "box" } }
          }
        },
        target
      },
      popup: {
        name: "",
        description: "Display a popup",
        fields: {
          title: { name: "Title", description: "Popup title", selector: { text: null } },
          content: {
            name: "Content",
            required: true,
            description: "Popup content (Test or lovelace card configuration)",
            selector: { object: null }
          },
          size: {
            name: "Size",
            description: "",
            selector: { select: { mode: "dropdown", options: ["normal", "wide", "fullscreen"] } }
          },
          right_button: {
            name: "Right button",
            description: "Text of the right button",
            selector: { text: null }
          },
          right_button_action: {
            name: "Right button action",
            description: "Action to perform when the right button is pressed",
            selector: { object: null }
          },
          left_button: {
            name: "Left button",
            description: "Text of the left button",
            selector: { text: null }
          },
          left_button_action: {
            name: "Left button action",
            description: "Action to perform when left button is pressed",
            selector: { object: null }
          },
          dismissable: {
            name: "User dismissable",
            description: "Whether the popup can be closed by the user without action",
            default: true,
            selector: { boolean: null }
          },
          dismiss_action: {
            name: "Dismiss action",
            description: "Action to perform when popup is dismissed",
            selector: { object: null }
          },
          autoclose: {
            name: "Auto close",
            description: "Close the popup automatically on mouse, pointer or keyboard activity",
            default: false,
            selector: { boolean: null }
          },
          timeout: {
            name: "Auto close timeout",
            description: "Time before closing (ms)",
            selector: { number: { mode: "box" } }
          },
          timeout_action: {
            name: "Timeout action",
            description: "Action to perform when popup is closed by timeout",
            selector: { object: null }
          },
          style: {
            name: "Styles",
            description: "CSS code to apply to the popup window",
            selector: { text: { multiline: true } }
          }
        },
        target
      },
      more_info: {
        name: "",
        description: "Show more-info dialog",
        fields: {
          entity: {
            name: "Entity ID",
            description: "",
            required: true,
            selector: { text: null }
          },
          large: { name: "Large size", description: "", default: false, selector: { boolean: null } },
          ignore_popup_card: {
            name: "Ignore any active popup-card overrides",
            description: "",
            default: false,
            selector: { boolean: null }
          }
        },
        target
      },
      close_popup: { name: "", description: "Close a popup", fields: {}, target },
      notification: {
        name: "",
        description: "Display a short notification",
        fields: {
          message: {
            name: "Message",
            description: "Message to display",
            required: true,
            selector: { text: null }
          },
          duration: {
            name: "Auto close timeout",
            description: "Time before closing (ms)",
            selector: { number: { mode: "box" } }
          },
          action_text: {
            name: "Action button text",
            description: "Text of optional action button",
            selector: { text: null }
          },
          action: {
            name: "Button action",
            description: "Action to perform when the action button is pressed",
            selector: { object: null }
          }
        },
        target
      },
      navigate: {
        name: "",
        description: "Navigate browser to a different page",
        fields: {
          path: { name: "Path", description: "Target path", selector: { text: null } }
        },
        target
      },
      refresh: { name: "", description: "Refresh page", fields: {}, target },
      set_theme: {
        name: "",
        description: "Change the current theme",
        fields: {
          theme: {
            name: "Theme",
            description: "Name of theme or 'auto'",
            selector: { text: null }
          },
          dark: {
            name: "Mode",
            description: "Dark/light mode",
            selector: { select: { options: ["auto", "light", "dark"] } }
          },
          primaryColor: {
            name: "Primary Color",
            description: "Primary theme color",
            selector: { color_rgb: null }
          },
          accentColor: {
            name: "Accent Color",
            description: "Accent theme color",
            selector: { color_rgb: null }
          }
        },
        target
      },
      console: {
        name: "",
        description: "Print text to browser console",
        fields: {
          message: { name: "Message", description: "Text to print", selector: { text: null } }
        },
        target
      },
      javascript: {
        name: "",
        description: "Run arbitrary JavaScript code",
        fields: {
          code: { name: "Code", description: "JavaScript code to run", selector: { object: null } }
        },
        target
      }
    };
  }
}
module.exports = BrowserModModule;
//# sourceMappingURL=browser_mod.js.map
