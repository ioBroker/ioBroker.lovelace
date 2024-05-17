
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
     * Get the full user id (system.user.foo) from the user id suffix (foo)
     * @param {string} id
     * @returns {string}
     */
    getUserIDFromName(id) {
        return `system.user.${id}`;
    }

    onObjectChange(id, obj) {
        if (id.startsWith('system.user.')) {
            if (obj && obj.common && obj.common.enabled()) {
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
        // The adapter config stores "foo" whereas the real user ID is "system.users.foo".
        const matchDefaultUser = this.getUserIDFromName(this.adapter.config.defaultUser);

        const userObjects = await this.adapter.getForeignObjectsAsync('system.user.*', 'user');
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

                if (id === matchDefaultUser) {
                    defaultUserObject = obj;
                }
            }
        }

        //default user only relevant for !auth.
        if (!defaultUserObject && !this.adapter.config.auth) {
            const configuredUserNotFound = `Could not find default user ${matchDefaultUser}. Please update your configuration.`;
            this.adapter.log.error(configuredUserNotFound);

            throw new Error(configuredUserNotFound);
        }

        await this.adapter.subscribeObjectsAsync('system.user.*');
    }
}

module.exports = PersonModule;
