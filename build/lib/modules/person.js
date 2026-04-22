"use strict";
class PersonModule {
  adapter;
  usersCache;
  /**
   * Create a new person module.
   *
   * @param options - options object
   * @param options.adapter - ioBroker adapter instance with auth config and lang
   */
  constructor(options) {
    this.adapter = options.adapter;
    this.usersCache = {};
  }
  /**
   * Process a request to the person api.
   *
   * @param req - request object with url
   * @param req.url - the request URL path
   * @param req._user - authenticated user name
   * @param res - response object to send response
   * @param res.json - function to send JSON response
   */
  processRequest(req, res) {
    if (req.url === "/api/person/list") {
      res.json(this.usersCache);
    } else {
      this.adapter.log.warn(`Unknown request ${req.url} for person api.`);
      res.json({});
    }
  }
  /**
   * Get a short list of users.
   *
   * @returns object with user id as key and name as value.
   */
  getShorList() {
    const result = {};
    for (const [userId, userObj] of Object.entries(this.usersCache)) {
      result[userId] = userObj.name;
    }
    return result;
  }
  /**
   * Get the user id from the username.
   *
   * @param name - name of user
   * @returns id of user
   */
  getUserIDFromName(name) {
    if (!this.adapter.config.auth || name === this.adapter.config.defaultUser) {
      return this.adapter.config.defaultUser;
    }
    if (typeof name !== "string") {
      throw new Error(`Username supplied is not a string, can not find id: ${name}`);
    }
    for (const userObj of Object.values(this.usersCache)) {
      if (userObj.name === name) {
        return userObj.iobId;
      }
    }
    this.adapter.log.warn(
      `Could not get user id for ${name} - Trying with username ${JSON.stringify(
        this.usersCache[`system.user.${name.toLowerCase()}`],
        (key, value) => {
          return key === "picture" ? void 0 : value;
        }
      )}`
    );
    return `system.user.${name.toLowerCase()}`;
  }
  /**
   * Get username for id.
   *
   * @param id - ioBroker id of user
   * @returns name of user or undefined if not found.
   */
  getUserNameFromID(id) {
    var _a;
    return (_a = this.usersCache[id]) == null ? void 0 : _a.name;
  }
  /**
   * Handle change of user object.
   *
   * @param id - id of object
   * @param obj - object
   */
  onObjectChange(id, obj) {
    if (id.startsWith("system.user.")) {
      if (obj && obj.common && obj.common.enabled) {
        this.usersCache[id] = {
          iobId: obj._id,
          name: obj.common.name || "",
          color: obj.common.color,
          picture: obj.common.icon || void 0,
          description: obj.common.desc
        };
      } else {
        delete this.usersCache[id];
      }
    }
  }
  /**
   * Initialize the module.
   *
   * @returns resolves when initialization is done.
   */
  async init() {
    const userObjects = await this.adapter.getForeignObjectsAsync("system.user.*", "user");
    if (!this.adapter.config.defaultUser.startsWith("system.user.")) {
      this.adapter.config.defaultUser = `system.user.${this.adapter.config.defaultUser}`;
    }
    let defaultUserObject = null;
    for (const [id, obj] of Object.entries(userObjects)) {
      if (obj.common && obj.common.enabled) {
        this.usersCache[id] = {
          iobId: id,
          name: obj.common.name,
          color: obj.common.color,
          picture: obj.common.icon || void 0,
          description: obj.common.desc
        };
        if (id === this.adapter.config.defaultUser) {
          defaultUserObject = obj;
        }
      }
    }
    if (!defaultUserObject) {
      if (!this.adapter.config.auth) {
        const configuredUserNotFound = `Could not find default user ${this.adapter.config.defaultUser}. Please update your configuration.`;
        this.adapter.log.error(configuredUserNotFound);
        throw new Error(configuredUserNotFound);
      }
    }
    await this.adapter.subscribeObjectsAsync("system.user.*");
    this.adapter.log.debug("modules/person: init done.");
  }
}
module.exports = PersonModule;
//# sourceMappingURL=person.js.map
