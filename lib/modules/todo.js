const {WebSocket} = require('ws');
const {updateTimestamps, processCommon} = require('../entities/utils');

const TodoItemStatus = {
    NeedsAction: 'needs_action',
    Completed: 'completed',
};

//supported features:
const CREATE_TODO_ITEM = 1;
const DELETE_TODO_ITEM = 2;
const UPDATE_TODO_ITEM = 4;
const MOVE_TODO_ITEM = 8;

class TodoModule {
    constructor(options) {
        this.adapter = options.adapter;
        this.entityData = options.entityData;
        this.getWebsocketServer = options.getWebsocketServer;
        this.todoListCache = {}; //from entity_id to todoList.
        this.server = options.server; //used for legacy shopping list. Is that used at all?
    }

    _storeTodolist(todoList) {
        clearTimeout(todoList.timeout);
        todoList.timeout = setTimeout(async () => {
            await this.adapter.setForeignStateAsync(todoList.ioBrokerId, JSON.stringify(todoList.items), true);
        }, 500);
    }

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
                                event: {items: todoList.items},
                                type: 'event',
                                id: Number(parameters.id)
                            };
                            client.send(JSON.stringify(event));
                        }
                    }
                }
            }
        }
    }

    //{"type":"history/history_during_period","start_time":"2022-07-08T08:09:12.022Z","end_time":"2022-07-08T09:09:12.022Z","significant_changes_only":false,"include_start_time_state":true,"minimal_response":true,"no_attributes":true,"entity_ids":["binary_sensor.TestFeuerAlarm"],"id":29}
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
                        result: null
                    },
                    {
                        id: message.id,
                        type: 'event',
                        event: {
                            items: []
                        }
                    }
                ];

                //remember id && entity_id:
                const parameters = {
                    entityId: message.entity_id,
                    id: Number(message.id)
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
                    this.adapter.log.warn('Unknown todo entity: ' + message.entity_id);
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
                    uid: Math.floor(Math.random() * Date.now()),
                    status: TodoItemStatus.NeedsAction,
                    due: null,
                    description: null
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
            }  else if (message.type === 'shopping_list/items/update') {
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

    removeSubscription(ws, msgId) {
        if (ws._subscribes && ws._subscribes.todo) {
            ws._subscribes.todo = ws._subscribes.todo.filter(parameters => parameters.id !== msgId);
        }
    }

    async _getTodoList(entity) {
        let todoList = this.todoListCache[entity.entity_id];
        if (!todoList) {
            const ioBrokerId = entity.context.STATE.getId || entity.context.STATE.setId;
            //let's add an empty list in every case:
            todoList = {
                ioBrokerId,
                items: [],
                entity
            };
            const state = await this.adapter.getForeignStateAsync(ioBrokerId);
            if (state && state.val) {
                try {
                    todoList.items = JSON.parse(state.val);
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

    async processServiceCall(ws, data) {
        //Incomming: {"type":"call_service","domain":"todo","service":"add_item","target":{"entity_id":"todo.shoppinglist"},"service_data":{"item":"TestEintrag1"},"id":59}
        if (data.domain === 'todo') {
            if (data.service === 'add_item') {
                const entity = this.entityData.entityId2Entity[data.target.entity_id];
                if (entity) {
                    const todoList = await this._getTodoList(entity);
                    const item = {
                        summary: data.service_data.item,
                        uid: Math.floor(Math.random() * Date.now()),
                        status: TodoItemStatus.NeedsAction,
                        due: null,
                        description: null
                    };
                    todoList.items.push(item);
                    entity.state = todoList.items.length;

                    this._storeTodolist(todoList);
                    this._publishUpdate(todoList);
                } else {
                    this.adapter.log.warn('Unknown todo entity: ' + data.target.entity_id);
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
                    } else {
                        this.adapter.log.warn('Unknown todo item: ' + data.service_data.item);
                    }
                } else {
                    this.adapter.log.warn('Unknown todo entity: ' + data.target.entity_id);
                }
            } else if (data.service === 'remove_item') {
                //{"type":"call_service","domain":"todo","service":"remove_item","target":{"entity_id":"todo.shoppinglist"},"service_data":{"item":["731cc4a2-9993-11ee-8ba5-0242ac110003","27d8a910-9999-11ee-8ba5-0242ac110003"]},"id":179}
                const entity = this.entityData.entityId2Entity[data.target.entity_id];
                if (entity) {
                    const todoList = await this._getTodoList(entity);
                    todoList.items = todoList.items.filter(item => !data.service_data.item.includes(item.uid));
                    this._storeTodolist(todoList);
                    this._publishUpdate(todoList);
                } else {
                    this.adapter.log.warn('Unknown todo entity: ' + data.target.entity_id);
                }
            }
            else {
                this.adapter.log.warn('Unknown todo service: ' + data.service);
                return false;
            }
            return true;
        }
        return false;
    }

    onStateChange(id, state) {
        const entities = this.entityData.iobID2entity[id];
        if (entities) {
            for (const entity of entities) {
                if (entity.context.type === 'todo') { //need to update only todo lists ;-)
                    if (id === entity.context.STATE.getId || id === entity.context.STATE.setId) {
                        if (!state || !state.ack) { //only publish update here if user changed something.
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
                                entity
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
     * @param {string} iobId
     * @param {ioBroker.StateObject} iobObj
     * @param entity
     * @param _objects
     * @param _customPart
     * @returns
     */
    // eslint-disable-next-line no-unused-vars
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
            }
        };

        //already fill todoListCache:
        const todoList = await this._getTodoList(entity);
        entity.state = String(todoList.items.length);

        return [entity];
    }

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

    cleanUp() {
        for (const todoList of Object.values(this.todoListCache)) {
            clearTimeout(todoList.timeout);
        }
    }
}

module.exports = TodoModule;