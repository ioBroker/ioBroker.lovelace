
class PersonModule {
    constructor(options) {
        this.adapter = options.adapter;
        this.usersCache = {};
    }

    async processRequest(req, res) {
        if (req.url === '/api/person/list') {
            res.json(this.usersCache);
        } else {
            this.adapter.log.warn(`Unknown request ${req.url} for person api.`);
            res.json({});
        }
    }

    getShorList() {
        const result = {};
        for (const [userId, userObj] of Object.entries(this.usersCache)) {
            result[userId] = userObj.name;
        }
        return result;
    }

    /**
     * Get the user id from the username
     * @param {string} name
     * @returns {string}
     */
    getUserIDFromName(name) {
        if (!this.adapter.config.auth || name === this.adapter.config.defaultUser) {
            return this.adapter.config.defaultUser;
        }

        if (typeof name !== 'string') { //prevent error if no user supplied.
            throw new Error('Username supplied is not a string, can not find id: ' + name);
        }

        for (const userObj of Object.values(this.usersCache)) {
            if (userObj.name === name) {
                return userObj.iobId;
            }
        }

        this.adapter.log.warn(`Could not get user id for ${name} - Trying with username` + JSON.stringify(this.usersCache['system.user.' + name.toLowerCase()]));
        return 'system.user.' + name.toLowerCase(); //hack and not correct since js-controller 3.2
    }

    /**
     * Get username for id. Needed for default user -> name conversion, for example.
     * @param {string} id
     * @returns {string | undefined}
     */
    getUserNameFromID(id) {
        return this.usersCache[id]?.name;
    }

    onObjectChange(id, obj) {
        if (id.startsWith('system.user.')) {
            if (obj && obj.common && obj.common.enabled) {
                this.usersCache[id] = {
                    iobId: obj._id,
                    name: obj.common.name || '',
                    color: obj.common.color || undefined,
                    picture: obj.common.icon || undefined,
                    description: obj.common.desc || undefined
                };
            } else {
                delete this.usersCache[id];
            }
            //TODO: update on frontend?
        }
    }

    async init() {
        const userObjects = await this.adapter.getForeignObjectsAsync('system.user.*', 'user');
        if (!this.adapter.config.defaultUser.startsWith('system.user.')) { //augment default user to be full id here once.
            this.adapter.config.defaultUser = `system.user.${this.adapter.config.defaultUser}`;
        }
        let defaultUserObject = null;
        for (const [id, obj] of Object.entries(userObjects)) {
            if (obj.common && obj.common.enabled) { //only show enabled persons?
                this.usersCache[id] = {
                    iobId: id,
                    name: obj.common.name,
                    color: obj.common.color,
                    picture: obj.common.icon,
                    description: obj.common.desc
                };
                if (id === this.adapter.config.defaultUser) {
                    defaultUserObject = obj;
                }
            }
        }

        //default user only relevant for !auth.
        if (!defaultUserObject) {
            if (!this.adapter.config.auth) {
                const configuredUserNotFound = `Could not find default user ${this.adapter.config.defaultUser}. Please update your configuration.`;
                this.adapter.log.error(configuredUserNotFound);

                throw new Error(configuredUserNotFound);
            }
        }

        await this.adapter.subscribeObjectsAsync('system.user.*');
    }
}

module.exports = PersonModule;