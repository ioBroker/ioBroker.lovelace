const WebSocket = require('ws').WebSocket;

class PersistentNotificationsModule {
    constructor(options) {
        this.adapter = options.adapter;
        this.server = options.server;
        this._notifications = {};
    }

    /**
     * Send notification update to client
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
                notifications
            }
        };

        ws.send(JSON.stringify(message));
    }

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

    async _saveNotifications() {
        await this.adapter.setStateAsync('notifications.list', JSON.stringify(this._notifications), true);
        return this._notifications;
    }

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
                this.adapter.log.warn(`Cannot parse notifications: ${val}`);
                this._notifications = {};
            }
            return this._notifications;
        } catch (e) {
            this.adapter.log.error(`Failed to read notifications: ${e}`);
        }
        return this._notifications;
    }

    async _addNotification(info) {
        if (typeof info !== 'object') {
            if (typeof info === 'string' && info.trim()[0] === '{') {
                try {
                    info = JSON.parse(info);
                } catch (e) {
                    console.warn(`Cannot parse ${info}`);
                    info = {message: info.toString()};
                }
            } else {
                info = {message: info.toString()};
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
        this.publishNotificationsUpdate({[info.notification_id]: info}, type);
        return this._saveNotifications();
    }

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

    //subscribe here and add / remove / clear. Let's see. Unsubscribe is generic and should be handled in server.js.
    async processMessage(ws, message) {
        if (message.type === 'persistent_notification/subscribe') {
            try {
                //handle subscribe here:
                ws.send(JSON.stringify({id: Number(message.id), type: 'result', success: true, result: null})); //say that subscription was success
                ws._subscribes.notification = ws._subscribes.notification || [];
                ws._subscribes.notification.push(message.id);

                this.adapter.log.debug('New notification subscription ' + message.id);

                //let's read current state and send:
                const notifications = await this._readNotifications();
                this.sendNotificationUpdate(ws, message.id, notifications);
            } catch (e) {
                this.adapter.log.error('Could not create notification answer: ' + e.stack);
                this.sendNotificationUpdate(ws, message.id, {});
            }
            return true;
        }
        //not processed
        return false;
    }

    async processServiceCall(ws, data) {
        if (data.domain === 'persistent_notification') {
            if (data.service === 'create') {
                this._addNotification(data.service_data);
            } else if (data.service === 'dismiss') {
                this._clearNotification(data.service_data.notification_id);
            } else if (data.service === 'dismiss_all') {
                this._clearNotification();
            }
            return true;
        }
    }

    async onStateChange(id, state) {
        if (id === this.adapter.namespace + '.notifications.list') {
            if (!state.ack) {
                await this._readNotifications();
            }
            return this.publishNotificationsUpdate(this._notifications, 'current');
        } else if (id === this.adapter.namespace + '.notifications.add') {
            return !state.ack &&
                this._addNotification(state.val);
        } else if (id === this.adapter.namespace + '.notifications.clear') {
            return !state.ack &&
                this._clearNotification(state.val);
        }
    }
}

module.exports = PersistentNotificationsModule;
