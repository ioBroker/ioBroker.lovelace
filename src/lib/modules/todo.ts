import crypto from 'crypto';
import type { BaseEntity } from '../entities/baseEntity';
import { TodoEntity } from '../entities/todoEntity';

const WS_OPEN = 1; // WebSocket.OPEN

const TodoItemStatus = {
    NeedsAction: 'needs_action',
    Completed: 'completed',
} as const;

interface TodoItem {
    summary?: string;
    name?: string;
    uid?: string;
    id?: string;
    status?: string;
    complete?: boolean;
    due: string | null;
    description: string | null;
}

interface TodoList {
    ioBrokerId: string;
    items: TodoItem[];
    entity: EntityLike;
    timeout?: ReturnType<typeof setTimeout>;
}

interface EntityLike {
    entity_id: string;
    state?: unknown;
    context: {
        id: string;
        type?: string;
        STATE: {
            getId?: string;
            setId?: string;
            getParser?: (entity: EntityLike, attr: unknown, state: ioBroker.State | null) => void;
            historyParser?: (id: string, value: unknown) => unknown;
        };
    };
    attributes: Record<string, unknown>;
}

interface EntityData {
    entities: EntityLike[];
    entityId2Entity: Record<string, EntityLike>;
    iobID2entity: Record<string, EntityLike[]>;
}

interface WsClient {
    send(data: string): void;
    readyState: number;
    _subscribes: Record<string, unknown>;
}

interface WsServer {
    clients: Set<WsClient>;
}

interface ServerWithRespond {
    _sendResponse(ws: unknown, id: unknown, result?: unknown): void;
    _sendUpdate(type: string): void;
}

/**
 * Todo module.
 */
class TodoModule {
    private adapter: ioBroker.Adapter;
    private entityData: EntityData;
    private getWebsocketServer: () => WsServer | undefined;
    private todoListCache: Record<string, TodoList>;
    private server: ServerWithRespond;

    /**
     * Create the todo module.
     *
     * @param options - options
     * @param options.adapter - ioBroker adapter instance
     * @param options.entityData - shared entity data singleton
     * @param options.getWebsocketServer - function returning the websocket server
     * @param options.server - server object for sending responses and updates
     */
    constructor(options: {
        adapter: ioBroker.Adapter;
        entityData: EntityData;
        getWebsocketServer: () => WsServer | undefined;
        server: ServerWithRespond;
    }) {
        this.adapter = options.adapter;
        this.entityData = options.entityData;
        this.getWebsocketServer = options.getWebsocketServer;
        this.todoListCache = {};
        this.server = options.server;
    }

    /**
     * Store todo list in ioBroker state.
     *
     * @param todoList - the todo list to persist
     */
    private _storeTodolist(todoList: TodoList): void {
        clearTimeout(todoList.timeout);
        todoList.timeout = setTimeout(async () => {
            await this.adapter.setForeignStateAsync(todoList.ioBrokerId, JSON.stringify(todoList.items), true);
        }, 500);
    }

    /**
     * Publish update to all subscribed clients.
     *
     * @param todoList - the updated todo list to publish
     */
    private _publishUpdate(todoList: TodoList): void {
        const websocketServer = this.getWebsocketServer();
        if (websocketServer) {
            for (const client of websocketServer.clients) {
                if (client._subscribes.todo && client.readyState === WS_OPEN) {
                    for (const parameters of client._subscribes.todo as {
                        entityId: string;
                        id: number;
                    }[]) {
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

    /**
     * Process message for todo module.
     *
     * @param ws - websocket connection to the client
     * @param message - the message from the frontend
     */
    async processMessage(ws: WsClient, message: Record<string, unknown>): Promise<boolean> {
        const msgType = message.type as string;
        if (msgType && (msgType.startsWith('todo/') || msgType.startsWith('shopping_list/'))) {
            if (msgType === 'todo/item/subscribe') {
                ws._subscribes.todo = (ws._subscribes.todo as unknown[]) || [];

                const result = [
                    { id: message.id, type: 'result', success: true, result: null },
                    { id: message.id, type: 'event', event: { items: [] } },
                ];

                const parameters = {
                    entityId: message.entity_id as string,
                    id: Number(message.id),
                };
                (ws._subscribes.todo as unknown[]).push(parameters);

                const entity = this.entityData.entityId2Entity[message.entity_id as string];
                if (entity) {
                    const ioBrokerId = entity.context.STATE.getId || entity.context.STATE.setId!;
                    const state = await this.adapter.getForeignStateAsync(ioBrokerId);
                    if (state && state.val) {
                        try {
                            (result[1] as { event: { items: unknown[] } }).event.items = JSON.parse(
                                state.val as string,
                            );
                        } catch (e) {
                            this.adapter.log.warn(
                                `Cannot parse todo items of ${ioBrokerId}: ${String(state.val)}, ${String(e)}`,
                            );
                        }
                    }
                } else {
                    this.adapter.log.warn(`Unknown todo entity: ${String(message.entity_id)}`);
                }
                console.dir(result);
                ws.send(JSON.stringify(result));
            } else if (msgType === 'todo/item/move') {
                const entity = this.entityData.entityId2Entity[message.entity_id as string];
                const todoList = await this._getTodoList(entity);
                const item = todoList.items.find(item => item.uid === message.uid);
                todoList.items = todoList.items.filter(item => item.uid !== message.uid);
                const previousItem = todoList.items.find(item => item.uid === message.previous_uid);
                if (previousItem) {
                    const index = todoList.items.indexOf(previousItem);
                    todoList.items.splice(index + 1, 0, item!);
                } else {
                    todoList.items.unshift(item!);
                }
                this._storeTodolist(todoList);
                this._publishUpdate(todoList);
            } else if (msgType === 'shopping_list/items/add') {
                const entity = this.entityData.entityId2Entity['todo.shoppinglist'];
                const todoList = await this._getTodoList(entity);
                todoList.items.push({
                    name: message.name as string,
                    uid: crypto.randomUUID(),
                    status: TodoItemStatus.NeedsAction,
                    due: null,
                    description: null,
                });
                this._storeTodolist(todoList);
                this._publishUpdate(todoList);
                this.server._sendResponse(ws, message.id);
                this.server._sendUpdate('shopping_list_updated');
            } else if (msgType === 'shopping_list/items/clear') {
                const entity = this.entityData.entityId2Entity['todo.shoppinglist'];
                const todoList = await this._getTodoList(entity);
                todoList.items = [];
                this._storeTodolist(todoList);
                this._publishUpdate(todoList);
                this.server._sendResponse(ws, message.id);
                this.server._sendUpdate('shopping_list_updated');
            } else if (msgType === 'shopping_list/items/update') {
                const entity = this.entityData.entityId2Entity['todo.shoppinglist'];
                const todoList = await this._getTodoList(entity);
                const item = todoList.items.find(item => item.uid === message.item_id);
                if (item) {
                    if (message.name !== undefined) {
                        item.summary = message.name as string;
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
     * @param ws - websocket connection to the client
     * @param msgId - the subscription message id to remove
     */
    removeSubscription(ws: WsClient, msgId: number): void {
        if (ws._subscribes && ws._subscribes.todo) {
            ws._subscribes.todo = (ws._subscribes.todo as { id: number }[]).filter(
                parameters => parameters.id !== msgId,
            );
        }
    }

    /**
     * Get the todo list for an entity.
     *
     * @param entity - the entity whose todo list to retrieve
     */
    private async _getTodoList(entity: EntityLike): Promise<TodoList> {
        let todoList = this.todoListCache[entity.entity_id];
        if (!todoList) {
            const ioBrokerId = entity.context.STATE.getId || entity.context.STATE.setId!;
            todoList = { ioBrokerId, items: [], entity };
            const state = await this.adapter.getForeignStateAsync(ioBrokerId);
            if (state && state.val) {
                try {
                    todoList.items = JSON.parse(state.val as string);
                    if (!todoList.items || !Array.isArray(todoList.items)) {
                        todoList.items = [];
                    }
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
                    (entity as unknown as BaseEntity).updateTimestamp(state, true);
                } catch (e) {
                    this.adapter.log.warn(
                        `Cannot parse todo items of ${ioBrokerId}: ${String(state.val)}, ${String(e)}`,
                    );
                }
            }
            this.todoListCache[entity.entity_id] = todoList;
        }
        return todoList;
    }

    /**
     * Process service call for todo module.
     *
     * @param ws - websocket connection (passed to server._sendResponse)
     * @param data - service call data from the frontend
     */
    async processServiceCall(ws: unknown, data: Record<string, unknown>): Promise<boolean> {
        if (data.domain === 'todo') {
            const serviceData = data.service_data as Record<string, unknown>;
            const target = data.target as Record<string, string>;
            if (data.service === 'add_item') {
                const entity = this.entityData.entityId2Entity[target.entity_id];
                if (entity) {
                    const todoList = await this._getTodoList(entity);
                    const item: TodoItem = {
                        summary: serviceData.item as string,
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
                    this.adapter.log.warn(`Unknown todo entity: ${String(target.entity_id)}`);
                }
            } else if (data.service === 'update_item') {
                const entity = this.entityData.entityId2Entity[target.entity_id];
                if (entity) {
                    const todoList = await this._getTodoList(entity);
                    const item = todoList.items.find(item => item.uid === serviceData.item);
                    if (item) {
                        item.summary = (serviceData.rename as string) || item.summary;
                        item.status = (serviceData.status as string) || item.status;
                        item.due = (serviceData.due as string) || item.due;
                        item.description = (serviceData.description as string) || item.description;
                        this._storeTodolist(todoList);
                        this._publishUpdate(todoList);
                        this.server._sendResponse(ws, data.id);
                    } else {
                        this.adapter.log.warn(`Unknown todo item: ${String(serviceData.item)}`);
                    }
                } else {
                    this.adapter.log.warn(`Unknown todo entity: ${String(target.entity_id)}`);
                }
            } else if (data.service === 'remove_item') {
                const entity = this.entityData.entityId2Entity[target.entity_id];
                if (entity) {
                    const todoList = await this._getTodoList(entity);
                    const itemsToRemove = serviceData.item as string[];
                    todoList.items = todoList.items.filter(item => !itemsToRemove.includes(item.uid!));
                    this._storeTodolist(todoList);
                    this._publishUpdate(todoList);
                    this.server._sendResponse(ws, data.id);
                } else {
                    this.adapter.log.warn(`Unknown todo entity: ${String(target.entity_id)}`);
                }
            } else if (data.service === 'remove_completed_items') {
                const entity = this.entityData.entityId2Entity[target.entity_id];
                if (entity) {
                    const todoList = await this._getTodoList(entity);
                    todoList.items = todoList.items.filter(item => item.status !== TodoItemStatus.Completed);
                    this._storeTodolist(todoList);
                    this._publishUpdate(todoList);
                    this.server._sendResponse(ws, data.id);
                } else {
                    this.adapter.log.warn(`Unknown todo entity: ${String(target.entity_id)}`);
                }
            } else if (data.service === 'get_items') {
                const entity = this.entityData.entityId2Entity[target.entity_id];
                if (entity) {
                    const todoList = await this._getTodoList(entity);
                    const filterStati = (serviceData.status as string[]) || [TodoItemStatus.NeedsAction];
                    const filteredItems = todoList.items.filter(item => filterStati.includes(item.status!));
                    this.server._sendResponse(ws, data.id, filteredItems);
                } else {
                    this.adapter.log.warn(`Unknown todo entity: ${String(target.entity_id)}`);
                }
            } else {
                this.adapter.log.warn(`Unknown todo service: ${String(data.service)}`);
                return false;
            }
            return true;
        }
        return false;
    }

    /**
     * Handle state change, i.e., update the todo list.
     *
     * @param id - ioBroker state id that changed
     * @param state - the new state value
     */
    onStateChange(id: string, state: ioBroker.State | null | undefined): void {
        const entities = this.entityData.iobID2entity[id];
        if (entities) {
            for (const entity of entities) {
                if (entity.context.type === 'todo') {
                    if (id === entity.context.STATE.getId || id === entity.context.STATE.setId) {
                        if (!state || !state.ack) {
                            let items: TodoItem[] = [];
                            try {
                                if (state && state.val) {
                                    items = JSON.parse(state.val as string);
                                }
                            } catch (e) {
                                this.adapter.log.warn(
                                    `Cannot parse todo items of ${id}: ${String(state?.val)}, ${String(e)}`,
                                );
                            }
                            entity.state = items.length;
                            const todoList = this.todoListCache[entity.entity_id] || {
                                ioBrokerId: id,
                                items,
                                entity,
                            };
                            todoList.items = items;
                            this._publishUpdate(this.todoListCache[entity.entity_id]);
                            this._storeTodolist(todoList);
                        }
                    }
                }
            }
        }
    }

    /**
     * Create a todo-list entity.
     *
     * @param iobId - ioBroker state id (the main object)
     * @param iobObj - ioBroker object definition
     * @param entity - already created entity to augment
     * @param _objects - ioBroker objects cache (unused)
     * @param _customPart - custom settings (unused)
     */
    async processManualEntity(
        iobId: string,
        iobObj: ioBroker.Object,
        entity: EntityLike,
        _objects: unknown,
        _customPart: unknown,
    ): Promise<EntityLike[]> {
        TodoEntity.augment(entity as unknown as BaseEntity);

        const todoList = await this._getTodoList(entity);
        entity.state = String(todoList.items.length);

        return [entity];
    }

    /**
     * Initialize the module.
     */
    async init(): Promise<void> {
        const entityShoppingList = this.entityData.entityId2Entity['todo.shoppinglist'];
        if (!entityShoppingList) {
            const iobObj = await this.adapter.getObjectAsync('control.shopping_list');
            const entity = new TodoEntity('Shopping List', iobObj, 'todo.shoppinglist');
            const todoList = await this._getTodoList(entity as unknown as EntityLike);
            entity.state = String(todoList.items.length);
            this.entityData.entities.push(entity as unknown as EntityLike);
            this.entityData.entityId2Entity[entity.entity_id] = entity as unknown as EntityLike;
            this.entityData.iobID2entity[iobObj!._id] = [entity as unknown as EntityLike];
        }
        this.adapter.log.debug('modules/todo: init done.');
    }

    /**
     * End tasks of the module.
     */
    cleanup(): void {
        for (const todoList of Object.values(this.todoListCache)) {
            clearTimeout(todoList.timeout);
        }
    }

    /**
     * Add the todo service to the services object.
     *
     * @param services services to report to frontend as available.
     */
    augmentServices(services: Record<string, unknown>): void {
        services.todo = {
            add_item: {
                name: 'Add to-do list item',
                description: 'Add a new to-do list item.',
                fields: {
                    item: {
                        required: true,
                        example: 'Submit income tax return',
                        selector: { text: null },
                        name: 'Item name',
                        description: 'The name that represents the to-do item.',
                    },
                    due_date: {
                        example: '2023-11-17',
                        selector: { date: null },
                        name: 'Due date',
                        description: 'The date the to-do item is expected to be completed.',
                    },
                    due_datetime: {
                        example: '2023-11-17 13:30:00',
                        selector: { datetime: null },
                        name: 'Due date and time',
                        description: 'The date and time the to-do item is expected to be completed.',
                    },
                    description: {
                        example: 'A more complete description of the to-do item than that provided by the summary.',
                        selector: { text: null },
                        name: 'Description',
                        description: 'A more complete description of the to-do item than provided by the item name.',
                    },
                },
                target: { entity: [{ domain: ['todo'], supported_features: [1] }] },
            },
            update_item: {
                name: 'Update to-do list item',
                description: 'Update an existing to-do list item based on its name.',
                fields: {
                    item: {
                        required: true,
                        example: 'Submit income tax return',
                        selector: { text: null },
                        name: 'Item name',
                        description: 'The name for the to-do list item.',
                    },
                    rename: {
                        example: 'Something else',
                        selector: { text: null },
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
                        selector: { date: null },
                        name: 'Due date',
                        description: 'The date the to-do item is expected to be completed.',
                    },
                    due_datetime: {
                        example: '2023-11-17 13:30:00',
                        selector: { datetime: null },
                        name: 'Due date and time',
                        description: 'The date and time the to-do item is expected to be completed.',
                    },
                    description: {
                        example: 'A more complete description of the to-do item than that provided by the summary.',
                        selector: { text: null },
                        name: 'Description',
                        description: 'A more complete description of the to-do item than provided by the item name.',
                    },
                },
                target: { entity: [{ domain: ['todo'], supported_features: [4] }] },
            },
            remove_item: {
                name: 'Remove a to-do list item',
                description: 'Remove an existing to-do list item by its name.',
                fields: {
                    item: {
                        required: true,
                        selector: { text: null },
                        name: 'Item name',
                        description: 'The name for the to-do list items.',
                    },
                },
                target: { entity: [{ domain: ['todo'], supported_features: [2] }] },
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
                target: { entity: [{ domain: ['todo'] }] },
                response: { optional: false },
            },
            remove_completed_items: {
                name: 'Remove all completed to-do list items',
                description: 'Remove all to-do list items that have been completed.',
                fields: {},
                target: { entity: [{ domain: ['todo'], supported_features: [2] }] },
            },
        };
    }
}

export = TodoModule;
