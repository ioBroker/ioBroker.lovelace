const entityData = require('../dataSingleton');
const WebSocket = require('ws').WebSocket;

/**
 * Class to handle the entity registry.
 * i.e. it needs to keep an array of entities, both manually configured and automatically detected.
 * It needs to send the list upon request from the frontend.
 * It has to store additional settings for each entity, like the history parser, the icon, the friendly name, etc.
 *
 * TODO: It should deprecate the dataSingleton.js file.
 */

/**
 * EntityRegistry, module to implement entity registry and process messages from the frontend.
 *
 * Will store information about entities in ioBroker object database.
 */
class EntityRegistry {
    /**
     * Constructor
     *
     * @param options {object} options including adapter.
     */
    constructor(options) {
        this.adapter = options.adapter;
    }

    /**
     * Process incoming messages from the frontend
     *
     * @param ws {WebSocket} the websocket connection
     * @param message {object} the message from the frontend
     * @returns {Promise<boolean>} true if the message was processed, false if not
     */
    async processMessage(ws, message) {
        if (message.type === 'config/entity_registry/list_for_display') {
            this._sendResponse(ws, message.id, {
                entities: entityData.entities,
                entity_categories: { 0: 'config', 1: 'diagnostic' },
            });
            return true;
        } else if (message.type === 'config/entity_registry/get') {
            // config/entity_registry/get
            return true;
        }
        return false;
    }

    /**
     * Process state change
     *
     * @param id {string} the id of the state that changed
     * @param state {null|ioBroker.State} the new state
     * @param websocketServer {WebSocket.Server} the websocket server used to send the updates
     */
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
                                this.adapter.log.debug(`Logbook subscription ${msgId} found.`);

                                const idAndEntity = idsToWatch.find(entry => id === entry.iobStateId);
                                if (idAndEntity) {
                                    this.adapter.log.debug(
                                        `Logbook subscription ${msgId} is for right id, sending update.`,
                                    );
                                    this.sendLogbookResponse(client, msgId, undefined, undefined, [
                                        {
                                            state,
                                            entity: idAndEntity.entity,
                                        },
                                    ]);
                                }
                            }
                        }
                    }
                }

                //clean up not found conversations.
                if (!active) {
                    this.adapter.log.debug(`Logbook subscription ${msgId} deleted.`);
                    delete this.subscribesToIds[msgId];
                }
            }
        }
    }
}

module.exports = EntityRegistry;
