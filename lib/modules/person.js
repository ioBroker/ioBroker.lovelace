
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
        for (const userObj of Object.values(this.usersCache)) {
            if (userObj.name === name) {
                return userObj.iobId;
            }
        }

        //fallback, default user "admin" is misleading, if user renamed admin.. hm. :-/
        if (this.adapter.config.auth && name === 'admin') {
            return 'system.user.admin';
        }

        this.adapter.log.warn(`Could not get user id for ${name} - Trying with username` + JSON.stringify(this.usersCache['system.user.' + name.toLowerCase()]));
        return 'system.user.' + name.toLowerCase(); //hack and not correct since js-controller 3.2
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
                if (obj.common.name === this.adapter.config.defaultUser) {
                    defaultUserObject = obj;
                }
            }
        }

        //default user only relevant for !auth.
        if (!defaultUserObject) {
            //Ok, we did not find defaultUser object. Might be renamed admin?
            defaultUserObject = userObjects['system.user.admin'];
            this.adapter.config.defaultUser = defaultUserObject.common.name;
            if (this.adapter.config.defaultUser !== 'admin' && !this.adapter.config.auth) {
                //Activating auth will hide this setting. Not sure what to do then... In general: all users will be able to read everything in this case.
                this.adapter.log.warn(`Could not find default user ${this.adapter.config.defaultUser} - Using admin - Please update your configuration.`);
            }
        }


        await this.adapter.subscribeObjectsAsync('system.user.*');
    }
}

module.exports = PersonModule;