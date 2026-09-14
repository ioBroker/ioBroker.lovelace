import { STORAGE_PREFIX } from './storage';

type SendResponseFn = (ws: unknown, id: unknown, result: unknown) => void;

interface WsWithAuth {
    send(data: string): void;
    __auth?: { username?: string };
}

/**
 * Persists frontend user-data (theme settings, sidebar order, language, …) so it survives reloads.
 *
 * Backs the `frontend/(get|set|subscribe)_user_data` and `frontend/(get|set|subscribe)_system_data`
 * WebSocket messages. Data is stored per user (by username, falling back to a shared default) in the
 * `storage.userData` ioBroker object. The `core` key always carries `default_panel` so the frontend
 * lands on the lovelace dashboard, and the `language` key falls back to the adapter language so the
 * UI does not follow the browser language.
 */
class UserDataModule {
    private adapter: ioBroker.Adapter;
    private sendResponse: SendResponseFn;
    private getLanguage: () => string | undefined;
    private _userData: Record<string, Record<string, unknown>> = {};
    private readonly _objectId = `${STORAGE_PREFIX}userData`;

    /**
     * Create the user data module.
     *
     * @param options - options object
     * @param options.adapter - ioBroker adapter instance
     * @param options.sendResponse - send a result to a websocket client
     * @param options.getLanguage - the adapter language (config, else the ioBroker system language)
     */
    constructor(options: {
        adapter: ioBroker.Adapter;
        sendResponse: SendResponseFn;
        getLanguage?: () => string | undefined;
    }) {
        this.adapter = options.adapter;
        this.sendResponse = options.sendResponse;
        this.getLanguage = options.getLanguage || (() => undefined);
    }

    async init(): Promise<void> {
        try {
            const obj = await this.adapter.getObjectAsync(this._objectId);
            this._userData = (obj?.native?.userData as Record<string, Record<string, unknown>>) || {};
        } catch (e) {
            this.adapter.log.debug(`Could not load userData: ${String(e)}`);
            this._userData = {};
        }
        this.adapter.log.debug('modules/userData: init done.');
    }

    private async _save(): Promise<void> {
        try {
            const obj = await this.adapter.getObjectAsync(this._objectId);
            if (obj) {
                obj.native = obj.native || {};
                obj.native.userData = this._userData;
                await this.adapter.setObjectAsync(this._objectId, obj);
            }
        } catch (e) {
            this.adapter.log.warn(`Could not save userData: ${String(e)}`);
        }
    }

    /**
     * Identify the frontend "user". Uses the authenticated username, else a shared default.
     *
     * @param ws - websocket connection
     */
    private _getUserKey(ws: WsWithAuth): string {
        return ws.__auth?.username || '_default';
    }

    /**
     * Read a single user-data value for the given connection and key. The 'core' key always carries
     * default_panel so the frontend lands on the lovelace dashboard.
     *
     * @param ws - websocket connection
     * @param key - user-data key (core, theme, sidebar, language, …)
     */
    private _getValue(ws: WsWithAuth, key: string): unknown {
        const stored = this._userData[this._getUserKey(ws)]?.[key];
        if (key === 'core') {
            return { default_panel: 'lovelace', ...(stored || {}) };
        }
        if (key === 'language') {
            // The frontend picks its UI language from localStorage / the browser unless the backend
            // supplies one here, so without this the dashboard ignores the configured language.
            // A language picked in the user profile is stored and keeps precedence; the other locale
            // settings (number/date/time format) are untouched and stay independent of the language.
            const language = this.getLanguage();
            const locale = (stored as Record<string, unknown> | undefined) || undefined;
            if (!language) {
                return locale ?? null;
            }
            if (locale?.language) {
                return locale;
            }
            return { ...(locale || {}), language };
        }
        return stored ?? null;
    }

    /**
     * Handle a frontend user/system data message.
     *
     * @param ws - websocket connection
     * @param message - the message
     * @returns true if handled
     */
    processMessage(ws: WsWithAuth, message: Record<string, unknown>): boolean {
        const type = message.type as string;
        const key = message.key as string;
        switch (type) {
            case 'frontend/subscribe_user_data':
                ws.send(
                    JSON.stringify([
                        { id: message.id, type: 'result', success: true, result: null },
                        { id: message.id, type: 'event', event: { value: this._getValue(ws, key) } },
                    ]),
                );
                return true;
            case 'frontend/get_user_data':
                this.sendResponse(ws, message.id, { value: this._getValue(ws, key) });
                return true;
            case 'frontend/set_user_data': {
                const userKey = this._getUserKey(ws);
                this._userData[userKey] = this._userData[userKey] || {};
                this._userData[userKey][key] = message.value;
                void this._save();
                this.sendResponse(ws, message.id, null);
                return true;
            }
            case 'frontend/subscribe_system_data':
                // We have no per-system data; report empty so the frontend stops waiting.
                ws.send(
                    JSON.stringify([
                        { id: message.id, type: 'result', success: true, result: null },
                        { id: message.id, type: 'event', event: { value: null } },
                    ]),
                );
                return true;
            case 'frontend/get_system_data':
                this.sendResponse(ws, message.id, { value: null });
                return true;
            case 'frontend/set_system_data':
                this.sendResponse(ws, message.id, null);
                return true;
            default:
                return false;
        }
    }
}

export = UserDataModule;
