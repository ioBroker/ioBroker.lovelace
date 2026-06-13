interface UserEntry {
    iobId: string;
    name: string;
    color?: string;
    picture?: string;
    description?: string;
}

type AdapterWithConfig = ioBroker.Adapter & {
    config: {
        auth: boolean;
        defaultUser: string;
    };
    lang: string;
};

/**
 * Person module to provide person api and user management.
 */
class PersonModule {
    private adapter: AdapterWithConfig;
    usersCache: Record<string, UserEntry>;

    /**
     * Create a new person module.
     *
     * @param options - options object
     * @param options.adapter - ioBroker adapter instance with auth config and lang
     */
    constructor(options: { adapter: AdapterWithConfig }) {
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
    processRequest(req: { url: string; _user?: string }, res: { json(data: unknown): void }): void {
        if (req.url === '/api/person/list') {
            res.json(this.usersCache);
        } else {
            this.adapter.log.warn(`Unknown request ${req.url} for person api.`);
            res.json({});
        }
    }

    /**
     * Handle WebSocket messages. The Settings -> People page calls `person/list` and waits for
     * `{ storage, config }`; an unanswered call leaves the page stuck on a loading spinner. Our
     * persons mirror the ioBroker users, so we report them as `storage` persons and have no
     * YAML-configured (`config`) ones.
     *
     * @param ws - websocket connection
     * @param ws.send
     * @param message - the message from the frontend
     * @returns true if handled
     */
    processMessage(ws: { send(data: string): void }, message: Record<string, unknown>): boolean {
        if (message.type === 'person/list') {
            const storage = Object.entries(this.usersCache).map(([userId, user]) => ({
                id: userId,
                name: user.name,
                user_id: userId,
                device_trackers: [],
                picture: user.picture ?? null,
            }));
            ws.send(
                JSON.stringify({
                    id: message.id,
                    type: 'result',
                    success: true,
                    result: { storage, config: [] },
                }),
            );
            return true;
        }
        return false;
    }

    /**
     * Get a short list of users.
     *
     * @returns object with user id as key and name as value.
     */
    getShorList(): Record<string, string> {
        const result: Record<string, string> = {};
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
    getUserIDFromName(name: string | undefined): string {
        if (!this.adapter.config.auth || name === this.adapter.config.defaultUser) {
            return this.adapter.config.defaultUser;
        }

        if (typeof name !== 'string') {
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
                    return key === 'picture' ? undefined : value;
                },
            )}`,
        );
        return `system.user.${name.toLowerCase()}`;
    }

    /**
     * Get username for id.
     *
     * @param id - ioBroker id of user
     * @returns name of user or undefined if not found.
     */
    getUserNameFromID(id: string): string | undefined {
        return this.usersCache[id]?.name;
    }

    /**
     * Handle change of user object.
     *
     * @param id - id of object
     * @param obj - object
     */
    onObjectChange(id: string, obj: ioBroker.Object | null | undefined): void {
        if (id.startsWith('system.user.')) {
            if (obj && obj.common && (obj.common as unknown as Record<string, unknown>).enabled) {
                this.usersCache[id] = {
                    iobId: obj._id,
                    name: (obj.common.name as string) || '',
                    color: (obj.common as unknown as Record<string, unknown>).color as string | undefined,
                    picture: obj.common.icon || undefined,
                    description: (obj.common as unknown as Record<string, unknown>).desc as string | undefined,
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
    async init(): Promise<void> {
        const userObjects = await this.adapter.getForeignObjectsAsync('system.user.*', 'user');
        if (!this.adapter.config.defaultUser.startsWith('system.user.')) {
            this.adapter.config.defaultUser = `system.user.${this.adapter.config.defaultUser}`;
        }
        let defaultUserObject: ioBroker.Object | null = null;
        for (const [id, obj] of Object.entries(userObjects)) {
            if (obj.common && (obj.common as unknown as Record<string, unknown>).enabled) {
                this.usersCache[id] = {
                    iobId: id,
                    name: obj.common.name as string,
                    color: (obj.common as unknown as Record<string, unknown>).color as string | undefined,
                    picture: obj.common.icon || undefined,
                    description: (obj.common as unknown as Record<string, unknown>).desc as string | undefined,
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

        await this.adapter.subscribeObjectsAsync('system.user.*');
        this.adapter.log.debug('modules/person: init done.');
    }
}

export = PersonModule;
