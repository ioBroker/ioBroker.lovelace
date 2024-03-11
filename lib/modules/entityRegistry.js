const entityData = require('../dataSingleton');
const {iobState2EntityState} = require('../converters/genericConverter');
const WebSocket = require('ws').WebSocket;

/**
 * Class to handle the entity registry.
 * i.e. it needs to keep an array of entities, both manually configured and automatically detected.
 * It needs to send the list upon request from the frontend.
 * It has to store additional settings for each entity, like the history parser, the icon, the friendly name, etc.
 *
 * TODO: It should deprecate the dataSingleton.js file.
 */

class EntityRegistry {
    constructor(options) {
        this.adapter = options.adapter;
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
        if (message.type === 'config/entity_registry/list_for_display') {
            this._sendResponse(ws, message.id, {entities: entityData.entities, entity_categories: {'0': 'config', '1': 'diagnostic'}});
        } else if (message.type === 'config/entity_registry/get') {
            // config/entity_registry/get
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

module.exports = EntityRegistry;
