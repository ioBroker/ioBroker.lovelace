
class PersonModule {
    constructor(options) {
        this.adapter = options.adapter;
        this.usersCache = {};
    }

    async processRequest(req, res) {
        if (req.url === '/api/person/list') {
            //TODO: how to find out, if user is logged in?
            if (this.adapter.config.showUsersOnLoginScreen) {
                res.json(this.usersCache);
            } else {
                res.json({});
            }
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
        for (const [id, obj] of Object.entries(userObjects)) {
            if (obj.common && obj.common.enabled) { //only show enabled persons?
                this.usersCache[id] = {
                    iobId: id,
                    name: obj.common.name,
                    color: obj.common.color,
                    picture: obj.common.icon,
                    description: obj.common.desc
                };
            }
        }
        await this.adapter.subscribeObjectsAsync('system.user.*');
    }
}

module.exports = PersonModule;