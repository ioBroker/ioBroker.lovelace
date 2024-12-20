const { WebSocket } = require('ws');
const { updateTimestamps, processCommon } = require('../entities/utils');
const crypto = require('crypto');

const TodoItemStatus = {
    NeedsAction: 'needs_action',
    Completed: 'completed',
};

//supported features:
const CREATE_TODO_ITEM = 1;
const DELETE_TODO_ITEM = 2;
const UPDATE_TODO_ITEM = 4;
const MOVE_TODO_ITEM = 8;

/**
 * Todo module.
 */
class TodoModule {
    /**
     * Create the todo module.
     *
     * @param options {object} options
     * @param options.adapter {ioBroker.Adapter} adapter
     * @param options.entityData {object} entity data
     * @param options.getWebsocketServer {function} function to get the websocket server
     * @param options.server {object} server object
     */
    constructor(options) {
        this.adapter = options.adapter;
        this.entityData = options.entityData;
        this.getWebsocketServer = options.getWebsocketServer;
        this.todoListCache = {}; //from entity_id to todoList.
        this.server = options.server; //used for legacy shopping list. Is that used at all?
    }

    /**
     * Store todo list in ioBroker state.
     *
     * @param todoList {object} todo list to store
     */
    _storeTodolist(todoList) {
        clearTimeout(todoList.timeout);
        todoList.timeout = setTimeout(async () => {
            await this.adapter.setForeignStateAsync(todoList.ioBrokerId, JSON.stringify(todoList.items), true);
        }, 500);
    }

    /**
     * Publish update to all subscribed clients.
     *
     * @param todoList {object} todo list to publish
     */
    _publishUpdate(todoList) {
        const websocketServer = this.getWebsocketServer();
        if (websocketServer) {
            for (const client of websocketServer.clients) {
                if (client._subscribes.todo && client.readyState === WebSocket.OPEN) {
                    //send out something like: {"id":46,"type":"event","event":{"items":[{"summary":"TestEintrag1","uid":"731cc4a2-9993-11ee-8ba5-0242ac110003","status":"needs_action","due":null,"description":null}]}}
                    //find message id and send.
                    for (const parameters of client._subscribes.todo) {
                        if (parameters.entityId === todoList.entity.entity_id) {
                            const event = {
                                event: { items: todoList.items },
                                type: 'event',
                                id: Number(parameters.id),
                            };
                            client.send(JSON.stringify(event));
                        }
                    }
                }
            }
        }
    }

    //{"type":"history/history_during_period","start_time":"2022-07-08T08:09:12.022Z","end_time":"2022-07-08T09:09:12.022Z","significant_changes_only":false,"include_start_time_state":true,"minimal_response":true,"no_attributes":true,"entity_ids":["binary_sensor.TestFeuerAlarm"],"id":29}
    /**
     * Process message for todo module.
     *
     * @param ws websocket of the client
     * @param message message to process.
     * @returns {Promise<boolean>} true if message was processed, false if not.
     */
    async processMessage(ws, message) {
        if (message.type && (message.type.startsWith('todo/') || message.type.startsWith('shopping_list/'))) {
            if (message.type === 'todo/item/subscribe') {
                //incomming: {"type":"todo/item/subscribe","entity_id":"todo.shoppinglist","id":46}
                ws._subscribes.todo = ws._subscribes.todo || [];

                const result = [
                    {
                        id: message.id,
                        type: 'result',
                        success: true,
                        result: null,
                    },
                    {
                        id: message.id,
                        type: 'event',
                        event: {
                            items: [],
                        },
                    },
                ];

                //remember id && entity_id:
                const parameters = {
                    entityId: message.entity_id,
                    id: Number(message.id),
                };
                ws._subscribes.todo.push(parameters);

                //let's try to finde state:
                const entity = this.entityData.entityId2Entity[message.entity_id];
                if (entity) {
                    const ioBrokerId = entity.context.STATE.getId || entity.context.STATE.setId;
                    const state = await this.adapter.getForeignStateAsync(ioBrokerId);
                    if (state && state.val) {
                        try {
                            result[1].event.items = JSON.parse(state.val);
                        } catch (e) {
                            this.adapter.log.warn(`Cannot parse todo items of ${ioBrokerId}: ${state.val}, ${e}`);
                        }
                    }
                } else {
                    this.adapter.log.warn(`Unknown todo entity: ${message.entity_id}`);
                }
                console.dir(result);
                ws.send(JSON.stringify(result));
            } else if (message.type === 'todo/item/move') {
                //sends uid with previous_uid, which points to the item that should be the item before the item with uid. If undefined, place at top.
                //{"type":"todo/item/move","entity_id":"todo.shoppinglist","uid":"b39d1da0-9999-11ee-8ba5-0242ac110003","previous_uid":"b1a7d1fc-9999-11ee-8ba5-0242ac110003","id":237}
                const entity = this.entityData.entityId2Entity[message.entity_id];
                const todoList = await this._getTodoList(entity);
                const item = todoList.items.find(item => item.uid === message.uid);
                //move item in list. First remove:
                todoList.items = todoList.items.filter(item => item.uid !== message.uid);
                //now add after item with previous_uid:
                const previousItem = todoList.items.find(item => item.uid === message.previous_uid);
                if (previousItem) {
                    const index = todoList.items.indexOf(previousItem);
                    todoList.items.splice(index + 1, 0, item);
                } else {
                    todoList.items.unshift(item);
                }
                this._storeTodolist(todoList);
                this._publishUpdate(todoList);
            } else if (message.type === 'shopping_list/items/add') {
                // legacy stuff - had only one shopping list. So, fixed entity!
                const entity = this.entityData.entityId2Entity['todo.shoppinglist'];
                const todoList = await this._getTodoList(entity);
                todoList.items.push({
                    name: message.name,
                    uid: crypto.randomUUID(),
                    status: TodoItemStatus.NeedsAction,
                    due: null,
                    description: null,
                });
                this._storeTodolist(todoList);
                this._publishUpdate(todoList);
                this.server._sendResponse(ws, message.id);
                this.server._sendUpdate('shopping_list_updated');
            } else if (message.type === 'shopping_list/items/clear') {
                const entity = this.entityData.entityId2Entity['todo.shoppinglist'];
                const todoList = await this._getTodoList(entity);
                todoList.items = [];
                this._storeTodolist(todoList);
                this._publishUpdate(todoList);
                this.server._sendResponse(ws, message.id);
                this.server._sendUpdate('shopping_list_updated');
            } else if (message.type === 'shopping_list/items/update') {
                const entity = this.entityData.entityId2Entity['todo.shoppinglist'];
                const todoList = await this._getTodoList(entity);
                const item = todoList.items.find(item => item.uid === message.item_id);
                if (item) {
                    if (message.name !== undefined) {
                        item.summary = message.name;
                    }
                    if (message.complete !== undefined) {
                        item.status = message.complete ? TodoItemStatus.Completed : TodoItemStatus.NeedsAction;
                    }
                    this._storeTodolist(todoList);
                    this._publishUpdate(todoList);
                    this.server._sendResponse(ws, message.id);
                    this.server._sendUpdate('shopping_list_updated');
                }
            }
            return true;
        }
        return false;
    }

    /**
     * Remove subscription for todo list from client.
     *
     * @param ws websocket of the client
     * @param msgId message id of the subscription
     */
    removeSubscription(ws, msgId) {
        if (ws._subscribes && ws._subscribes.todo) {
            ws._subscribes.todo = ws._subscribes.todo.filter(parameters => parameters.id !== msgId);
        }
    }

    /**
     * Get the todo list for an entity. Especially ioBroker ID but also extract items from state, if necessary.
     *
     * @param entity {object} entity to get the todo list for.
     * @returns {Promise<{ioBrokerId: *, items: *[], entity}>} todo list
     */
    async _getTodoList(entity) {
        let todoList = this.todoListCache[entity.entity_id];
        if (!todoList) {
            const ioBrokerId = entity.context.STATE.getId || entity.context.STATE.setId;
            //let's add an empty list in every case:
            todoList = {
                ioBrokerId,
                items: [],
                entity,
            };
            const state = await this.adapter.getForeignStateAsync(ioBrokerId);
            if (state && state.val) {
                try {
                    todoList.items = JSON.parse(state.val);
                    if (!todoList.items || !Array.isArray(todoList.items)) {
                        todoList.items = [];
                    }
                    //convert legacy items:
                    for (const item of todoList.items) {
                        if (item.name && !item.summary) {
                            item.summary = item.name;
                            delete item.name;
                        }
                        if (item.id && !item.uid) {
                            item.uid = item.id;
                            delete item.id;
                        }
                        if (item.complete !== undefined && !item.status) {
                            item.status = item.complete ? TodoItemStatus.Completed : TodoItemStatus.NeedsAction;
                            delete item.complete;
                        }
                        item.due = item.due || null;
                        item.description = item.description || null;
                    }
                    updateTimestamps(entity, state);
                } catch (e) {
                    this.adapter.log.warn(`Cannot parse todo items of ${ioBrokerId}: ${state.val}, ${e}`);
                }
            }
            this.todoListCache[entity.entity_id] = todoList;
        }
        return todoList;
    }

    /**
     * Process service call for todo module.
     *
     * @param ws websocket of the client
     * @param data data of the service call
     * @returns {Promise<boolean>} true if service call was processed, false if not.
     */
    async processServiceCall(ws, data) {
        //Incomming: {"type":"call_service","domain":"todo","service":"add_item","target":{"entity_id":"todo.shoppinglist"},"service_data":{"item":"TestEintrag1"},"id":59}
        if (data.domain === 'todo') {
            if (data.service === 'add_item') {
                const entity = this.entityData.entityId2Entity[data.target.entity_id];
                if (entity) {
                    const todoList = await this._getTodoList(entity);
                    const item = {
                        summary: data.service_data.item,
                        uid: crypto.randomUUID(),
                        status: TodoItemStatus.NeedsAction,
                        due: null,
                        description: null,
                    };
                    todoList.items.push(item);
                    entity.state = todoList.items.length;

                    this._storeTodolist(todoList);
                    this._publishUpdate(todoList);
                    this.server._sendResponse(ws, data.id);
                } else {
                    this.adapter.log.warn(`Unknown todo entity: ${data.target.entity_id}`);
                }
            } else if (data.service === 'update_item') {
                //{"type":"call_service","domain":"todo","service":"update_item","target":{"entity_id":"todo.shoppinglist"},"service_data":{"item":"731cc4a2-9993-11ee-8ba5-0242ac110003","rename":"TestEintrag1","status":"completed"},"id":166}
                const entity = this.entityData.entityId2Entity[data.target.entity_id];
                if (entity) {
                    const todoList = await this._getTodoList(entity);
                    const item = todoList.items.find(item => item.uid === data.service_data.item);
                    if (item) {
                        item.summary = data.service_data.rename || item.summary;
                        item.status = data.service_data.status || item.status;
                        item.due = data.service_data.due || item.due;
                        item.description = data.service_data.description || item.description;
                        this._storeTodolist(todoList);
                        this._publishUpdate(todoList);
                        this.server._sendResponse(ws, data.id);
                    } else {
                        this.adapter.log.warn(`Unknown todo item: ${data.service_data.item}`);
                    }
                } else {
                    this.adapter.log.warn(`Unknown todo entity: ${data.target.entity_id}`);
                }
            } else if (data.service === 'remove_item') {
                //{"type":"call_service","domain":"todo","service":"remove_item","target":{"entity_id":"todo.shoppinglist"},"service_data":{"item":["731cc4a2-9993-11ee-8ba5-0242ac110003","27d8a910-9999-11ee-8ba5-0242ac110003"]},"id":179}
                const entity = this.entityData.entityId2Entity[data.target.entity_id];
                if (entity) {
                    const todoList = await this._getTodoList(entity);
                    todoList.items = todoList.items.filter(item => !data.service_data.item.includes(item.uid));
                    this._storeTodolist(todoList);
                    this._publishUpdate(todoList);
                    this.server._sendResponse(ws, data.id);
                } else {
                    this.adapter.log.warn(`Unknown todo entity: ${data.target.entity_id}`);
                }
            } else if (data.service === 'remove_completed_items') {
                const entity = this.entityData.entityId2Entity[data.target.entity_id];
                if (entity) {
                    const todoList = await this._getTodoList(entity);
                    todoList.items = todoList.items.filter(item => item.status !== TodoItemStatus.Completed);
                    this._storeTodolist(todoList);
                    this._publishUpdate(todoList);
                    this.server._sendResponse(ws, data.id);
                } else {
                    this.adapter.log.warn(`Unknown todo entity: ${data.target.entity_id}`);
                }
            } else if (data.service === 'get_items') {
                const entity = this.entityData.entityId2Entity[data.target.entity_id];
                if (entity) {
                    const todoList = await this._getTodoList(entity);
                    const filterStati = data.service_data.status || [TodoItemStatus.NeedsAction];
                    const filteredItems = todoList.items.filter(item => filterStati.includes(item.status));
                    this.server._sendResponse(ws, data.id, filteredItems);
                } else {
                    this.adapter.log.warn(`Unknown todo entity: ${data.target.entity_id}`);
                }
            } else {
                this.adapter.log.warn(`Unknown todo service: ${data.service}`);
                return false;
            }
            return true;
        }
        return false;
    }

    /**
     * Handle state change, i.e., update the todo list.
     *
     * @param id {string} ioBroker id
     * @param state {ioBroker.State} state object
     */
    onStateChange(id, state) {
        const entities = this.entityData.iobID2entity[id];
        if (entities) {
            for (const entity of entities) {
                if (entity.context.type === 'todo') {
                    //need to update only todo lists ;-)
                    if (id === entity.context.STATE.getId || id === entity.context.STATE.setId) {
                        if (!state || !state.ack) {
                            //only publish update here if user changed something.
                            let items = [];
                            try {
                                if (state && state.val) {
                                    items = JSON.parse(state.val);
                                }
                            } catch (e) {
                                this.adapter.log.warn(`Cannot parse todo items of ${id}: ${state.val}, ${e}`);
                            }
                            entity.state = items.length;
                            //update cache -> need to only change items, because of possible 'store' timeout.
                            const todoList = this.todoListCache[entity.entity_id] || {
                                ioBrokerId: id,
                                items,
                                entity,
                            };
                            todoList.items = items;

                            //publish update:
                            this._publishUpdate(this.todoListCache[entity.entity_id]);
                            this._storeTodolist(todoList); //make green ;-)
                        }
                    }
                }
            }
        }
    }

    /**
     * Create a todo-list entity
     *
     * @param iobId {string} id of the ioBroker object
     * @param iobObj {ioBroker.StateObject} ioBroker object
     * @param entity {object} entity object, as created from processCommon
     * @param _objects all objects
     * @param _customPart custom part of the ioBroker object.
     * @returns {Promise<*[]>} entities created
     */
    async processManualEntity(iobId, iobObj, entity, _objects, _customPart) {
        entity.attributes.icon = 'mdi:cart';
        entity.attributes.supported_features = CREATE_TODO_ITEM | DELETE_TODO_ITEM | UPDATE_TODO_ITEM | MOVE_TODO_ITEM;
        entity.context.STATE = {
            getId: entity.context.id,
            setId: entity.context.id,
            getParser: (entity, attr, state) => {
                if (state && state.val) {
                    try {
                        const items = JSON.parse(state.val);
                        entity.state = String(items.length);
                    } catch (e) {
                        this.adapter.log.warn(`Cannot parse todo items of ${entity.context.id}: ${state.val}, ${e}`);
                        entity.state = 'unknown';
                    }
                } else {
                    entity.state = 0;
                }
            },
            historyParser: (id, value) => {
                try {
                    const items = JSON.parse(value);
                    entity.state = String(items.length);
                } catch (e) {
                    this.adapter.log.warn(`Cannot parse todo items of ${entity.context.id}: ${value}, ${e}`);
                    entity.state = 'unknown';
                }
            },
        };

        //already fill todoListCache:
        const todoList = await this._getTodoList(entity);
        entity.state = String(todoList.items.length);

        return [entity];
    }

    /**
     * Initialize the module. Read shopping list from database.
     *
     * @returns {Promise<void>} resolves when initialization is done.
     */
    async init() {
        //initialize static shopping list:
        let entityShoppingList = this.entityData.entityId2Entity['todo.shoppinglist'];
        if (!entityShoppingList) {
            const iobObj = await this.adapter.getObjectAsync('control.shopping_list');
            entityShoppingList = processCommon('Shopping List', null, null, iobObj, 'todo', 'todo.shoppinglist');
            this.processManualEntity('Shopping List', iobObj, entityShoppingList);
            this.entityData.entities.push(entityShoppingList);
            this.entityData.entityId2Entity[entityShoppingList.entity_id] = entityShoppingList;
            this.entityData.iobID2entity[iobObj._id] = [entityShoppingList];
        }
    }

    /**
     * End tasks of the module, so adapter can be closed.
     */
    cleanup() {
        for (const todoList of Object.values(this.todoListCache)) {
            clearTimeout(todoList.timeout);
        }
    }

    /**
     * Add the todo service to the services object
     *
     * @param services services object
     */
    augmentServices(services) {
        services.todo = {
            add_item: {
                name: 'Add to-do list item',
                description: 'Add a new to-do list item.',
                fields: {
                    item: {
                        required: true,
                        example: 'Submit income tax return',
                        selector: {
                            text: null,
                        },
                        name: 'Item name',
                        description: 'The name that represents the to-do item.',
                    },
                    due_date: {
                        example: '2023-11-17',
                        selector: {
                            date: null,
                        },
                        name: 'Due date',
                        description: 'The date the to-do item is expected to be completed.',
                    },
                    due_datetime: {
                        example: '2023-11-17 13:30:00',
                        selector: {
                            datetime: null,
                        },
                        name: 'Due date and time',
                        description: 'The date and time the to-do item is expected to be completed.',
                    },
                    description: {
                        example: 'A more complete description of the to-do item than that provided by the summary.',
                        selector: {
                            text: null,
                        },
                        name: 'Description',
                        description: 'A more complete description of the to-do item than provided by the item name.',
                    },
                },
                target: {
                    entity: [
                        {
                            domain: ['todo'],
                            supported_features: [1],
                        },
                    ],
                },
            },
            update_item: {
                name: 'Update to-do list item',
                description: 'Update an existing to-do list item based on its name.',
                fields: {
                    item: {
                        required: true,
                        example: 'Submit income tax return',
                        selector: {
                            text: null,
                        },
                        name: 'Item name',
                        description: 'The name for the to-do list item.',
                    },
                    rename: {
                        example: 'Something else',
                        selector: {
                            text: null,
                        },
                        name: 'Rename item',
                        description: 'The new name of the to-do item',
                    },
                    status: {
                        example: 'needs_action',
                        selector: {
                            select: {
                                translation_key: 'status',
                                options: ['needs_action', 'completed'],
                            },
                        },
                        name: 'Set status',
                        description: 'A status or confirmation of the to-do item.',
                    },
                    due_date: {
                        example: '2023-11-17',
                        selector: {
                            date: null,
                        },
                        name: 'Due date',
                        description: 'The date the to-do item is expected to be completed.',
                    },
                    due_datetime: {
                        example: '2023-11-17 13:30:00',
                        selector: {
                            datetime: null,
                        },
                        name: 'Due date and time',
                        description: 'The date and time the to-do item is expected to be completed.',
                    },
                    description: {
                        example: 'A more complete description of the to-do item than that provided by the summary.',
                        selector: {
                            text: null,
                        },
                        name: 'Description',
                        description: 'A more complete description of the to-do item than provided by the item name.',
                    },
                },
                target: {
                    entity: [
                        {
                            domain: ['todo'],
                            supported_features: [4],
                        },
                    ],
                },
            },
            remove_item: {
                name: 'Remove a to-do list item',
                description: 'Remove an existing to-do list item by its name.',
                fields: {
                    item: {
                        required: true,
                        selector: {
                            text: null,
                        },
                        name: 'Item name',
                        description: 'The name for the to-do list items.',
                    },
                },
                target: {
                    entity: [
                        {
                            domain: ['todo'],
                            supported_features: [2],
                        },
                    ],
                },
            },
            get_items: {
                name: 'Get to-do list items',
                description: 'Get items on a to-do list.',
                fields: {
                    status: {
                        example: 'needs_action',
                        default: 'needs_action',
                        selector: {
                            select: {
                                translation_key: 'status',
                                options: ['needs_action', 'completed'],
                                multiple: true,
                            },
                        },
                        name: 'Status',
                        description:
                            'Only return to-do items with the specified statuses. Returns not completed actions by default.',
                    },
                },
                target: {
                    entity: [
                        {
                            domain: ['todo'],
                        },
                    ],
                },
                response: {
                    optional: false,
                },
            },
            remove_completed_items: {
                name: 'Remove all completed to-do list items',
                description: 'Remove all to-do list items that have been completed.',
                fields: {},
                target: {
                    entity: [
                        {
                            domain: ['todo'],
                            supported_features: [2],
                        },
                    ],
                },
            },
        };
    }
}

module.exports = TodoModule;
