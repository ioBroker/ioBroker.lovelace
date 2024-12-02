const WebSocket = require('ws').WebSocket;

/**
 * Persistent Notifications Module. Supplies persistent notifications to the frontend, storing in ioBroker state.
 */
class PersistentNotificationsModule {
    /**
     * Constructor
     *
     * @param options options object with adapter and server.
     */
    constructor(options) {
        this.adapter = options.adapter;
        this.server = options.server;
        this._notifications = {};
    }

    /**
     * Send notification update to client
     *
     * @param ws - websocket client
     * @param id - id of subscription
     * @param notifications - object with notifications and notification_id as key
     * @param type - optional type of notification update, default is 'current'. Possible values are 'added', 'removed', 'updated'
     */
    sendNotificationUpdate(ws, id, notifications = {}, type = 'current') {
        const message = {
            id: Number(id),
            type: 'event',
            event: {
                type: type,
                notifications,
            },
        };

        ws.send(JSON.stringify(message));
    }

    /**
     * Publish notification update to all clients with subscription
     *
     * @param notifications - object with notifications and notification_id as key
     * @param type - optional type of notification update, default is 'current'. Possible values are 'added', 'removed', 'updated'
     */
    publishNotificationsUpdate(notifications = {}, type) {
        const clients = this.server.getClientsWithSubscription('notification');
        for (const client of clients) {
            if (client._subscribes && client._subscribes.notification && client.readyState === WebSocket.OPEN) {
                for (const id of client._subscribes.notification) {
                    this.sendNotificationUpdate(client, id, notifications, type);
                }
            }
        }
    }

    /**
     * Update the persistent notifications list in the ioBroker state
     *
     * @returns {Promise<*|{}>} - updated notifications list
     */
    async _saveNotifications() {
        await this.adapter.setStateAsync('notifications.list', JSON.stringify(this._notifications), true);
        return this._notifications;
    }

    /**
     * Read the persistent notifications list from the ioBroker state
     *
     * @returns {Promise<*|{}>} - notifications list
     */
    async _readNotifications() {
        try {
            const state = await this.adapter.getStateAsync('notifications.list');
            const val = (state && state.val) || '{}';
            try {
                this._notifications = JSON.parse(val);
                if (this._notifications.length) {
                    //need to convert from array to object:
                    const oldNotifications = this._notifications;
                    this._notifications = {};
                    for (const notification of oldNotifications) {
                        this._notifications[notification.notification_id] = notification;
                    }
                    await this._saveNotifications();
                }
            } catch (e) {
                this.adapter.log.warn(`Cannot parse notifications: ${val}: ${e} - ${e.stack}`);
                this._notifications = {};
            }
            return this._notifications;
        } catch (e) {
            this.adapter.log.error(`Failed to read notifications: ${e}`);
        }
        return this._notifications;
    }

    /**
     * Add a notification to the persistent notifications list
     *
     * @param info - notification object or string from frontend
     * @returns {Promise<*|{}>} - updated notifications list
     */
    async _addNotification(info) {
        if (typeof info !== 'object') {
            if (typeof info === 'string' && info.trim()[0] === '{') {
                try {
                    info = JSON.parse(info);
                } catch (e) {
                    console.warn(`Cannot parse ${info}: ${e} - ${e.stack}`);
                    info = { message: info.toString() };
                }
            } else {
                info = { message: info.toString() };
            }
        }
        let type = 'added';
        if (info.notification_id === undefined) {
            info.notification_id = Date.now();
            while (this._notifications[info.notification_id]) {
                info.notification_id += 1;
            }
        } else {
            type = 'updated'; //notify frontend that this notification was updated.
        }
        info.created_at = info.created_at || Date.now();

        this._notifications[info.notification_id] = info;
        this.publishNotificationsUpdate({ [info.notification_id]: info }, type);
        return this._saveNotifications();
    }

    /**
     * Clear one or all notifications from the persistent notifications list
     *
     * @param [id] - optional id of notification to clear. If not provided, all notifications are cleared.
     * @returns {Promise<*|{}>} - updated notifications list
     */
    async _clearNotification(id) {
        if (id) {
            if (this._notifications[id]) {
                const removedNotifications = {};
                removedNotifications[id] = this._notifications[id];
                this.publishNotificationsUpdate(removedNotifications, 'removed');
                delete this._notifications[id];
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
     * Handle subscribe here.
     * Unsubscribe is generic and is handled in server.js.
     *
     * @param ws - websocket connection to the client that sent the message
     * @param message - message object from frontend
     * @returns {Promise<boolean>} - true if the message was processed
     */
    async processMessage(ws, message) {
        if (message.type === 'persistent_notification/subscribe') {
            try {
                //handle subscribe here:
                ws.send(JSON.stringify({ id: Number(message.id), type: 'result', success: true, result: null })); //say that subscription was success
                ws._subscribes.notification = ws._subscribes.notification || [];
                ws._subscribes.notification.push(message.id);

                this.adapter.log.debug(`New notification subscription ${message.id}`);

                //let's read the current state and send:
                const notifications = await this._readNotifications();
                this.sendNotificationUpdate(ws, message.id, notifications);
            } catch (e) {
                this.adapter.log.error(`Could not create notification answer: ${e.stack}`);
                this.sendNotificationUpdate(ws, message.id, {});
            }
            return true;
        }
        //not processed
        return false;
    }

    /**
     * Process service calls for persistent notifications
     *
     * @param ws - websocket connection to the client that sent the service call
     * @param data - service call object
     * @returns {Promise<boolean>} - true if the service call was processed
     */
    async processServiceCall(ws, data) {
        if (data.domain === 'persistent_notification') {
            if (data.service === 'create') {
                await this._addNotification(data.service_data);
            } else if (data.service === 'dismiss') {
                await this._clearNotification(data.service_data.notification_id);
            } else if (data.service === 'dismiss_all') {
                await this._clearNotification();
            }
            return true;
        }
    }

    /**
     * Handle state change from ioBroker, i.e., allow objects to add / modify / clear messages.
     *
     * @param {string} id - id of the state that changed
     * @param {ioBroker.State|null} state - new state or null if deleted
     * @returns {Promise<false|*|{}|void>} - true if the state change was processed
     */
    async onStateChange(id, state) {
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
     * Add persistent Notification services to the provided services object
     *
     * @param services - object with services
     */
    augmentServices(services) {
        services.persistent_notification = {
            create: {
                name: 'Create',
                description: 'Shows a notification on the **Notifications** panel.',
                fields: {
                    message: {
                        required: true,
                        example: 'Please check your configuration.yaml.',
                        selector: {
                            text: null,
                        },
                        name: 'Message',
                        description: 'Message body of the notification.',
                    },
                    title: {
                        example: 'Test notification',
                        selector: {
                            text: null,
                        },
                        name: 'Title',
                        description: 'Optional title of the notification.',
                    },
                    notification_id: {
                        example: 1234,
                        selector: {
                            text: null,
                        },
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
                        selector: {
                            text: null,
                        },
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

module.exports = PersistentNotificationsModule;
