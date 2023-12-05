const entityData = require('../dataSingleton');
const {iobState2EntityState} = require('../converters/genericConverter');
const WebSocket = require('ws').WebSocket;

class LogbookModule {
    constructor(options) {
        this.adapter = options.adapter;
        this.getUsedEntityIDs = options.getUsedEntityIDs;
        this.subscribesToIds = {};

        this.instances = [];
        let objectType = 'instance';
        const params = {
            startkey: 'system.adapter.',
            endkey: 'system.adapter.\u9999'
        };
        if (this.adapter.config.logbookSource === 'user') {
            objectType = 'user';
            params.startkey = 'system.user.';
            params.endkey = 'system.user.\u9999';
        }
        if (this.adapter.config.logbookSource !== 'none') {
            this.adapter.getObjectView('system', objectType, params, (err, instances) => {
                if (err) {
                    this.adapter.warn('Could not get instances: ' + err);
                } else {
                    for (const row of instances.rows) {
                        if (row.value && row.value._id) {
                            const id = row.value._id;
                            let name = id.split('.').splice(2).join('.');
                            if (this.adapter.config.logbookSource === 'user') {
                                name = row.value.common.name;
                            }
                            this.instances.push({
                                name,
                                id
                            });
                        }
                    }
                }
            });
        }
    }

    sendLogbookResponse(ws, id, startTime = undefined, endTime = undefined, results = [], partial = false) {
        const message = {
            id: Number(id),
            type: 'event',
            event: {
                events: []
            }
        };
        if (startTime) {
            message.event.start_time = startTime / 1000;
        }
        if (endTime) {
            message.event.end_time = endTime / 1000;
        }
        if (partial) {
            message.event.partial = true;
        }

        for (const result of results) {
            let from = undefined;
            if (this.adapter.config.logbookSource === 'user') {
                from = result.state.user;
            }
            if (this.adapter.config.logbookSource === 'adapter') {
                from = result.state.from;
            }
            message.event.events.push({
                when: result.state.ts / 1000,
                state: typeof result.entity.context.STATE.historyParser === 'function' ?
                    result.entity.context.STATE.historyParser(id, result.state.val).toString() :
                    iobState2EntityState(result.entity, result.state.val).toString(),
                entity_id: result.entity.entity_id,
                context_user_id: from
            });
        }
        //sort by time:
        message.event.events.sort((a, b) => a.when - b.when);
        console.dir(message, {depth: 8});
        ws.send(JSON.stringify(message));
    }

    //event_stream -> means implicit subscription (AAAAHHH) -> remember id here and update. Will call unsubscribe message if page is left.
    //unsubscribe is very unspecific: {"type":"unsubscribe_events","subscription":288,"id":289} -> how to pipe that here?
    async processMessage(ws, message) {
        if (message.type === 'logbook/event_stream') {
            //example: {"type":"logbook/event_stream","start_time":"2023-06-26T09:53:15.832Z","end_time":"2024-06-29T09:53:15.832Z","entity_ids":["switch.party_mode","switch.pure_direct","switch.enhancer","weather.home"],"id":97}
            try {
                //handle subscribe here:
                ws.send(JSON.stringify({id: Number(message.id), type: 'result', success: true, result: null})); //say that subscription was successfull.
                ws._subscribes.logbook = ws._subscribes.logbook || [];
                ws._subscribes.logbook.push(message.id);

                const startTime = new Date(message.start_time).getTime();
                const endTime = new Date(message.end_time).getTime();
                const entityIds = message.entity_ids || this.getUsedEntityIDs();
                this.adapter.log.debug('Logbook subscription ' + message.id + ' for ' + JSON.stringify(entityIds));

                if (!this.adapter.config.history) {
                    this.adapter.log.warn(`History instance is not selected in the settings -> logbook won't work`);
                    this.sendLogbookResponse(ws, message.id, startTime, endTime, []);
                    return;
                }

                //ok, now get the ids for states:
                const idsToWatch = [];
                const promises = [];
                const results = [];
                const options = {
                    //see https://github.com/ioBroker/ioBroker.history/blob/master/docs/de/README.md
                    start: startTime,
                    end: endTime,
                    count: this.adapter.config.historyMaxCount,
                    aggregate: 'onchange',
                    from: true,
                    returnNewestEntries: true,
                    ack: true,
                    user: true
                };

                for (const entityId of entityIds) {
                    const entity = entityData.entityId2Entity[entityId];
                    if (entity) {
                        if (entity.context && entity.context.STATE) {
                            const id = entity.context.STATE.getId || entity.context.STATE.setId;
                            if (id) {
                                idsToWatch.push({
                                    iobStateId: id,
                                    entity
                                });

                                //get & process history.
                                promises.push(this.adapter.sendToAsync(this.adapter.config.history, 'getHistory', {
                                    id, options
                                }).then(stateResult => {
                                    for (const state of stateResult.result) {
                                        if (state !== null) {
                                            results.push({
                                                entity,
                                                state
                                            });
                                        }
                                    }
                                }));
                            }
                        }
                    } else {
                        this.adapter.log.warn('Unknown entity id ' + entityId);
                    }
                }

                await Promise.all(promises);
                this.sendLogbookResponse(ws, message.id, startTime, endTime, results, true);
                setTimeout(() => this.sendLogbookResponse(ws, message.id, startTime, endTime, []), 300);
                //keep subscription and id:
                this.subscribesToIds[message.id] = this.subscribesToIds[message.id] ? this.subscribesToIds[message.id].concat(idsToWatch) : idsToWatch;
            } catch (e) {
                this.adapter.log.error('Could not create logbook answer: ' + e.stack);
                this.sendLogbookResponse(ws, message.id, undefined, undefined, []);
            }
        } else if (message.type === 'config/auth/list') {
            //something like:
            /*[{
                "id": "90cbc79784a9401e888ad7e1393b3233",
                "username": null,
                "name": "Home Assistant Content",
                "is_owner": false,
                "is_active": true,
                "local_only": false,
                "system_generated": true,
                "group_ids": ["system-read-only"],
                "credentials": []
            }, {
                "id": "3dcd1581c6664621935e0571412a2cbf",
                "username": "garfonso",
                "name": "Garfonso",
                "is_owner": true,
                "is_active": true,
                "local_only": false,
                "system_generated": false,
                "group_ids": ["system-admin"],
                "credentials": [{
                    "type": "homeassistant"
                }]
            }]*/
            //for now -> abuse this list for instances. Let's see how that works out.
            const result = this.instances;
            ws.send(JSON.stringify({id: message.id, type: 'result', success: true, result: result}));

        } else if (message.type === 'trace/contexts') {
            ws.send(JSON.stringify({id: message.id, type: 'result', success: true, result: {}})); //say that subscription was successfull.
        }
    }

    onStateChange(id, state, websocketServer) {
        if (state) {
            //check if the state update needs to be added to any logbook:
            for (const [msgId, idsToWatch] of Object.entries(this.subscribesToIds)) {
                let active = false;
                if (websocketServer) {
                    for (const client of websocketServer.clients) {
                        if (client._subscribes.logbook && client.readyState === WebSocket.OPEN) {
                            if (client._subscribes.logbook.includes(Number(msgId))) {
                                active = true;
                                //found a client with active subscription -> update.
                                this.adapter.log.debug('Logbook subscription ' + msgId + ' found.');

                                const idAndEntity = idsToWatch.find(entry => id === entry.iobStateId);
                                if (idAndEntity) {
                                    this.adapter.log.debug('Logbook subscription ' + msgId + ' is for right id, sending update.');
                                    this.sendLogbookResponse(client, msgId, undefined, undefined, [{
                                        state,
                                        entity: idAndEntity.entity
                                    }]);
                                }
                            }
                        }
                    }
                }

                //clean up not found conversations.
                if (!active) {
                    this.adapter.log.debug('Logbook subscription ' + msgId + ' deleted.');
                    delete this.subscribesToIds[msgId];
                }
            }
        }
    }
}

module.exports = LogbookModule;
