
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

    onObjectChange(id, obj) {
        if (id.startsWith('system.user.')) {
            if (obj && obj.common && obj.common.enabled()) {
                this.usersCache[id] = {
                    iobId: obj._id,
                    name: obj.common.name || '',
                    color: obj.common.color || undefined,
                    picture: obj.common.icon || undefined,
                    description: obj.common.description || undefined
                };
            } else {
                delete this.usersCache[id];
            }
            //TODO: update on frontend?
        }
    }

    async init() {
        const userRows = await this.adapter.getObjectViewAsync('system', 'user', {});
        for (const row of userRows.rows) {
            if (row.value && row.value.common && row.value.common.enabled) {
                this.usersCache[row.value._id] = {
                    iobId: row.value._id,
                    name: row.value.common.name,
                    color: row.value.common.color,
                    picture: row.value.common.icon,
                    description: row.value.common.description
                };
            }
        }
        await this.adapter.subscribeObjectsAsync('system.user.*');
    }
}

module.exports = PersonModule;