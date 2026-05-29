const WS_OPEN = 1; // WebSocket.OPEN

interface WsClient {
    send(data: string): void;
    readyState: number;
    _subscribes: Record<string, unknown[]>;
    notification?: unknown[];
}

interface ServerWithClients {
    getClientsWithSubscription(type: string): WsClient[];
}

interface NotificationInfo {
    notification_id?: number;
    created_at?: number;
    message?: string;
    [key: string]: unknown;
}

/**
 * Persistent Notifications Module. Supplies persistent notifications to the frontend, storing in ioBroker state.
 */
class PersistentNotificationsModule {
    private adapter: ioBroker.Adapter;
    private server: ServerWithClients;
    private _notifications: Record<string, NotificationInfo>;

    /**
     * Constructor
     *
     * @param options - options object with adapter and server.
     * @param options.adapter - ioBroker adapter instance
     * @param options.server - server object to retrieve subscribed clients from
     */
    constructor(options: { adapter: ioBroker.Adapter; server: ServerWithClients }) {
        this.adapter = options.adapter;
        this.server = options.server;
        this._notifications = {};
    }

    /**
     * Send notification update to client.
     *
     * @param ws - websocket client to send to
     * @param id - subscription message id
     * @param notifications - notification map to send
     * @param type - event type ('current', 'added', 'updated', 'removed')
     */
    sendNotificationUpdate(
        ws: WsClient,
        id: unknown,
        notifications: Record<string, NotificationInfo> = {},
        type = 'current',
    ): void {
        const message = {
            id: Number(id),
            type: 'event',
            event: { type, notifications },
        };
        ws.send(JSON.stringify(message));
    }

    /**
     * Publish notification update to all clients with subscription.
     *
     * @param notifications - notification map to send
     * @param type - event type ('current', 'added', 'updated', 'removed')
     */
    publishNotificationsUpdate(notifications: Record<string, NotificationInfo> = {}, type?: string): void {
        const clients = this.server.getClientsWithSubscription('notification');
        for (const client of clients) {
            if (client._subscribes && client._subscribes.notification && client.readyState === WS_OPEN) {
                for (const id of client._subscribes.notification) {
                    this.sendNotificationUpdate(client, id, notifications, type);
                }
            }
        }
    }

    /**
     * Update the persistent notifications list in the ioBroker state.
     */
    private async _saveNotifications(): Promise<Record<string, NotificationInfo>> {
        await this.adapter.setStateAsync('notifications.list', JSON.stringify(this._notifications), true);
        return this._notifications;
    }

    /**
     * Read the persistent notifications list from the ioBroker state.
     */
    private async _readNotifications(): Promise<Record<string, NotificationInfo>> {
        try {
            const state = await this.adapter.getStateAsync('notifications.list');
            const val = (state && state.val) || '{}';
            try {
                this._notifications = JSON.parse(val as string);
                if (Array.isArray(this._notifications)) {
                    const oldNotifications = this._notifications as unknown as NotificationInfo[];
                    this._notifications = {};
                    for (const notification of oldNotifications) {
                        this._notifications[notification.notification_id!] = notification;
                    }
                    await this._saveNotifications();
                }
            } catch {
                this.adapter.log.warn(`Cannot parse notifications: ${String(val)}`);
                this._notifications = {};
            }
            return this._notifications;
        } catch (e) {
            this.adapter.log.error(`Failed to read notifications: ${String(e)}`);
        }
        return this._notifications;
    }

    /**
     * Add a notification to the persistent notifications list.
     *
     * @param info - notification data (string, JSON string, or object)
     */
    private async _addNotification(info: unknown): Promise<Record<string, NotificationInfo>> {
        let notification: NotificationInfo;
        if (typeof info !== 'object' || info === null) {
            const str = String(info);
            if (str.trim()[0] === '{') {
                try {
                    notification = JSON.parse(str);
                } catch {
                    notification = { message: str };
                }
            } else {
                notification = { message: str };
            }
        } else {
            notification = info as NotificationInfo;
        }

        let type = 'added';
        if (notification.notification_id === undefined) {
            notification.notification_id = Date.now();
            while (this._notifications[notification.notification_id]) {
                notification.notification_id += 1;
            }
        } else {
            type = 'updated';
        }
        notification.created_at = notification.created_at || Date.now();

        this._notifications[notification.notification_id] = notification;
        this.publishNotificationsUpdate({ [notification.notification_id]: notification }, type);
        return this._saveNotifications();
    }

    /**
     * Clear one or all notifications.
     *
     * @param id - notification id to clear, or undefined to clear all
     */
    private async _clearNotification(id?: unknown): Promise<Record<string, NotificationInfo>> {
        if (id) {
            const key = String(id as string | number);
            if (this._notifications[key]) {
                const removedNotifications: Record<string, NotificationInfo> = {};
                removedNotifications[key] = this._notifications[key];
                this.publishNotificationsUpdate(removedNotifications, 'removed');
                delete this._notifications[key];
            } else {
                this.publishNotificationsUpdate(this._notifications, 'current');
            }
        } else {
            this.publishNotificationsUpdate(this._notifications, 'removed');
            this._notifications = {};
        }
        return this._saveNotifications();
    }

    /**
     * Handle subscribe message.
     *
     * @param ws - websocket connection to the client
     * @param message - the message from the frontend
     */
    async processMessage(ws: WsClient, message: Record<string, unknown>): Promise<boolean> {
        if (message.type === 'persistent_notification/subscribe') {
            try {
                ws.send(JSON.stringify({ id: Number(message.id), type: 'result', success: true, result: null }));
                ws._subscribes.notification = ws._subscribes.notification || [];
                ws._subscribes.notification.push(message.id);

                this.adapter.log.debug(`New notification subscription ${String(message.id)}`);

                const notifications = await this._readNotifications();
                this.sendNotificationUpdate(ws, message.id, notifications);
            } catch (e) {
                this.adapter.log.error(`Could not create notification answer: ${(e as Error).stack}`);
                this.sendNotificationUpdate(ws, message.id, {});
            }
            return true;
        }
        return false;
    }

    /**
     * Process service calls for persistent notifications.
     *
     * @param ws - websocket connection (unused but required by interface)
     * @param data - service call data from the frontend
     */
    async processServiceCall(ws: unknown, data: Record<string, unknown>): Promise<boolean> {
        if (data.domain === 'persistent_notification') {
            if (data.service === 'create') {
                await this._addNotification(data.service_data);
            } else if (data.service === 'dismiss') {
                await this._clearNotification((data.service_data as Record<string, unknown>)?.notification_id);
            } else if (data.service === 'dismiss_all') {
                await this._clearNotification();
            }
            return true;
        }
        return false;
    }

    /**
     * Handle state change from ioBroker.
     *
     * @param id - ioBroker state id that changed
     * @param state - the new state value
     */
    async onStateChange(id: string, state: ioBroker.State | null | undefined): Promise<unknown> {
        if (id === `${this.adapter.namespace}.notifications.list`) {
            if (!state?.ack) {
                await this._readNotifications();
            }
            return this.publishNotificationsUpdate(this._notifications, 'current');
        } else if (id === `${this.adapter.namespace}.notifications.add`) {
            return !state?.ack && this._addNotification(state?.val);
        } else if (id === `${this.adapter.namespace}.notifications.clear`) {
            return !state?.ack && this._clearNotification(state?.val);
        }
    }

    /**
     * Add persistent Notification services to the provided services object.
     *
     * @param services - services map to augment
     */
    augmentServices(services: Record<string, unknown>): void {
        services.persistent_notification = {
            create: {
                name: 'Create',
                description: 'Shows a notification on the **Notifications** panel.',
                fields: {
                    message: {
                        required: true,
                        example: 'Please check your configuration.yaml.',
                        selector: { text: null },
                        name: 'Message',
                        description: 'Message body of the notification.',
                    },
                    title: {
                        example: 'Test notification',
                        selector: { text: null },
                        name: 'Title',
                        description: 'Optional title of the notification.',
                    },
                    notification_id: {
                        example: 1234,
                        selector: { text: null },
                        name: 'Notification ID',
                        description:
                            'ID of the notification. This new notification will overwrite an existing notification with the same ID.',
                    },
                },
            },
            dismiss: {
                name: 'Dismiss',
                description: 'Removes a notification from the **Notifications** panel.',
                fields: {
                    notification_id: {
                        required: true,
                        example: 1234,
                        selector: { text: null },
                        name: 'Notification ID',
                        description: 'ID of the notification to be removed.',
                    },
                },
            },
            dismiss_all: {
                name: 'Dismiss all',
                description: 'Removes all notifications from the **Notifications** panel.',
                fields: {},
            },
        };
    }
}

export = PersistentNotificationsModule;
