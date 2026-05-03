"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_crypto = __toESM(require("crypto"));
var import_todoEntity = require("../entities/todoEntity");
const WS_OPEN = 1;
const TodoItemStatus = {
  NeedsAction: "needs_action",
  Completed: "completed"
};
class TodoModule {
  adapter;
  entityData;
  getWebsocketServer;
  todoListCache;
  server;
  /**
   * Create the todo module.
   *
   * @param options - options
   * @param options.adapter - ioBroker adapter instance
   * @param options.entityData - shared entity data singleton
   * @param options.getWebsocketServer - function returning the websocket server
   * @param options.server - server object for sending responses and updates
   */
  constructor(options) {
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
  _storeTodolist(todoList) {
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
  _publishUpdate(todoList) {
    const websocketServer = this.getWebsocketServer();
    if (websocketServer) {
      for (const client of websocketServer.clients) {
        if (client._subscribes.todo && client.readyState === WS_OPEN) {
          for (const parameters of client._subscribes.todo) {
            if (parameters.entityId === todoList.entity.entity_id) {
              const event = {
                event: { items: todoList.items },
                type: "event",
                id: Number(parameters.id)
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
  async processMessage(ws, message) {
    const msgType = message.type;
    if (msgType && (msgType.startsWith("todo/") || msgType.startsWith("shopping_list/"))) {
      if (msgType === "todo/item/subscribe") {
        ws._subscribes.todo = ws._subscribes.todo || [];
        const result = [
          { id: message.id, type: "result", success: true, result: null },
          { id: message.id, type: "event", event: { items: [] } }
        ];
        const parameters = {
          entityId: message.entity_id,
          id: Number(message.id)
        };
        ws._subscribes.todo.push(parameters);
        const entity = this.entityData.entityId2Entity[message.entity_id];
        if (entity) {
          const ioBrokerId = entity.context.STATE.getId || entity.context.STATE.setId;
          const state = await this.adapter.getForeignStateAsync(ioBrokerId);
          if (state && state.val) {
            try {
              result[1].event.items = JSON.parse(
                state.val
              );
            } catch (e) {
              this.adapter.log.warn(
                `Cannot parse todo items of ${ioBrokerId}: ${String(state.val)}, ${String(e)}`
              );
            }
          }
        } else {
          this.adapter.log.warn(`Unknown todo entity: ${String(message.entity_id)}`);
        }
        console.dir(result);
        ws.send(JSON.stringify(result));
      } else if (msgType === "todo/item/move") {
        const entity = this.entityData.entityId2Entity[message.entity_id];
        const todoList = await this._getTodoList(entity);
        const item = todoList.items.find((item2) => item2.uid === message.uid);
        todoList.items = todoList.items.filter((item2) => item2.uid !== message.uid);
        const previousItem = todoList.items.find((item2) => item2.uid === message.previous_uid);
        if (previousItem) {
          const index = todoList.items.indexOf(previousItem);
          todoList.items.splice(index + 1, 0, item);
        } else {
          todoList.items.unshift(item);
        }
        this._storeTodolist(todoList);
        this._publishUpdate(todoList);
      } else if (msgType === "shopping_list/items/add") {
        const entity = this.entityData.entityId2Entity["todo.shoppinglist"];
        const todoList = await this._getTodoList(entity);
        todoList.items.push({
          name: message.name,
          uid: import_crypto.default.randomUUID(),
          status: TodoItemStatus.NeedsAction,
          due: null,
          description: null
        });
        this._storeTodolist(todoList);
        this._publishUpdate(todoList);
        this.server._sendResponse(ws, message.id);
        this.server._sendUpdate("shopping_list_updated");
      } else if (msgType === "shopping_list/items/clear") {
        const entity = this.entityData.entityId2Entity["todo.shoppinglist"];
        const todoList = await this._getTodoList(entity);
        todoList.items = [];
        this._storeTodolist(todoList);
        this._publishUpdate(todoList);
        this.server._sendResponse(ws, message.id);
        this.server._sendUpdate("shopping_list_updated");
      } else if (msgType === "shopping_list/items/update") {
        const entity = this.entityData.entityId2Entity["todo.shoppinglist"];
        const todoList = await this._getTodoList(entity);
        const item = todoList.items.find((item2) => item2.uid === message.item_id);
        if (item) {
          if (message.name !== void 0) {
            item.summary = message.name;
          }
          if (message.complete !== void 0) {
            item.status = message.complete ? TodoItemStatus.Completed : TodoItemStatus.NeedsAction;
          }
          this._storeTodolist(todoList);
          this._publishUpdate(todoList);
          this.server._sendResponse(ws, message.id);
          this.server._sendUpdate("shopping_list_updated");
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
  removeSubscription(ws, msgId) {
    if (ws._subscribes && ws._subscribes.todo) {
      ws._subscribes.todo = ws._subscribes.todo.filter(
        (parameters) => parameters.id !== msgId
      );
    }
  }
  /**
   * Get the todo list for an entity.
   *
   * @param entity - the entity whose todo list to retrieve
   */
  async _getTodoList(entity) {
    let todoList = this.todoListCache[entity.entity_id];
    if (!todoList) {
      const ioBrokerId = entity.context.STATE.getId || entity.context.STATE.setId;
      todoList = { ioBrokerId, items: [], entity };
      const state = await this.adapter.getForeignStateAsync(ioBrokerId);
      if (state && state.val) {
        try {
          todoList.items = JSON.parse(state.val);
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
            if (item.complete !== void 0 && !item.status) {
              item.status = item.complete ? TodoItemStatus.Completed : TodoItemStatus.NeedsAction;
              delete item.complete;
            }
            item.due = item.due || null;
            item.description = item.description || null;
          }
          entity.updateTimestamp(state, true);
        } catch (e) {
          this.adapter.log.warn(
            `Cannot parse todo items of ${ioBrokerId}: ${String(state.val)}, ${String(e)}`
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
  async processServiceCall(ws, data) {
    if (data.domain === "todo") {
      const serviceData = data.service_data;
      const target = data.target;
      if (data.service === "add_item") {
        const entity = this.entityData.entityId2Entity[target.entity_id];
        if (entity) {
          const todoList = await this._getTodoList(entity);
          const item = {
            summary: serviceData.item,
            uid: import_crypto.default.randomUUID(),
            status: TodoItemStatus.NeedsAction,
            due: null,
            description: null
          };
          todoList.items.push(item);
          entity.state = todoList.items.length;
          this._storeTodolist(todoList);
          this._publishUpdate(todoList);
          this.server._sendResponse(ws, data.id);
        } else {
          this.adapter.log.warn(`Unknown todo entity: ${String(target.entity_id)}`);
        }
      } else if (data.service === "update_item") {
        const entity = this.entityData.entityId2Entity[target.entity_id];
        if (entity) {
          const todoList = await this._getTodoList(entity);
          const item = todoList.items.find((item2) => item2.uid === serviceData.item);
          if (item) {
            item.summary = serviceData.rename || item.summary;
            item.status = serviceData.status || item.status;
            item.due = serviceData.due || item.due;
            item.description = serviceData.description || item.description;
            this._storeTodolist(todoList);
            this._publishUpdate(todoList);
            this.server._sendResponse(ws, data.id);
          } else {
            this.adapter.log.warn(`Unknown todo item: ${String(serviceData.item)}`);
          }
        } else {
          this.adapter.log.warn(`Unknown todo entity: ${String(target.entity_id)}`);
        }
      } else if (data.service === "remove_item") {
        const entity = this.entityData.entityId2Entity[target.entity_id];
        if (entity) {
          const todoList = await this._getTodoList(entity);
          const itemsToRemove = serviceData.item;
          todoList.items = todoList.items.filter((item) => !itemsToRemove.includes(item.uid));
          this._storeTodolist(todoList);
          this._publishUpdate(todoList);
          this.server._sendResponse(ws, data.id);
        } else {
          this.adapter.log.warn(`Unknown todo entity: ${String(target.entity_id)}`);
        }
      } else if (data.service === "remove_completed_items") {
        const entity = this.entityData.entityId2Entity[target.entity_id];
        if (entity) {
          const todoList = await this._getTodoList(entity);
          todoList.items = todoList.items.filter((item) => item.status !== TodoItemStatus.Completed);
          this._storeTodolist(todoList);
          this._publishUpdate(todoList);
          this.server._sendResponse(ws, data.id);
        } else {
          this.adapter.log.warn(`Unknown todo entity: ${String(target.entity_id)}`);
        }
      } else if (data.service === "get_items") {
        const entity = this.entityData.entityId2Entity[target.entity_id];
        if (entity) {
          const todoList = await this._getTodoList(entity);
          const filterStati = serviceData.status || [TodoItemStatus.NeedsAction];
          const filteredItems = todoList.items.filter((item) => filterStati.includes(item.status));
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
  onStateChange(id, state) {
    const entities = this.entityData.iobID2entity[id];
    if (entities) {
      for (const entity of entities) {
        if (entity.context.type === "todo") {
          if (id === entity.context.STATE.getId || id === entity.context.STATE.setId) {
            if (!state || !state.ack) {
              let items = [];
              try {
                if (state && state.val) {
                  items = JSON.parse(state.val);
                }
              } catch (e) {
                this.adapter.log.warn(
                  `Cannot parse todo items of ${id}: ${String(state == null ? void 0 : state.val)}, ${String(e)}`
                );
              }
              entity.state = items.length;
              const todoList = this.todoListCache[entity.entity_id] || {
                ioBrokerId: id,
                items,
                entity
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
  async processManualEntity(iobId, iobObj, entity, _objects, _customPart) {
    import_todoEntity.TodoEntity.augment(entity);
    const todoList = await this._getTodoList(entity);
    entity.state = String(todoList.items.length);
    return [entity];
  }
  /**
   * Initialize the module.
   */
  async init() {
    let entityShoppingList = this.entityData.entityId2Entity["todo.shoppinglist"];
    if (!entityShoppingList) {
      const iobObj = await this.adapter.getObjectAsync("control.shopping_list");
      const entity = new import_todoEntity.TodoEntity("Shopping List", iobObj, "todo.shoppinglist");
      const todoList = await this._getTodoList(entity);
      entity.state = String(todoList.items.length);
      this.entityData.entities.push(entity);
      this.entityData.entityId2Entity[entity.entity_id] = entity;
      this.entityData.iobID2entity[iobObj._id] = [entity];
    }
    this.adapter.log.debug("modules/todo: init done.");
  }
  /**
   * End tasks of the module.
   */
  cleanup() {
    for (const todoList of Object.values(this.todoListCache)) {
      clearTimeout(todoList.timeout);
    }
  }
  /**
   * Add the todo service to the services object.
   *
   * @param services services to report to frontend as available.
   */
  augmentServices(services) {
    services.todo = {
      add_item: {
        name: "Add to-do list item",
        description: "Add a new to-do list item.",
        fields: {
          item: {
            required: true,
            example: "Submit income tax return",
            selector: { text: null },
            name: "Item name",
            description: "The name that represents the to-do item."
          },
          due_date: {
            example: "2023-11-17",
            selector: { date: null },
            name: "Due date",
            description: "The date the to-do item is expected to be completed."
          },
          due_datetime: {
            example: "2023-11-17 13:30:00",
            selector: { datetime: null },
            name: "Due date and time",
            description: "The date and time the to-do item is expected to be completed."
          },
          description: {
            example: "A more complete description of the to-do item than that provided by the summary.",
            selector: { text: null },
            name: "Description",
            description: "A more complete description of the to-do item than provided by the item name."
          }
        },
        target: { entity: [{ domain: ["todo"], supported_features: [1] }] }
      },
      update_item: {
        name: "Update to-do list item",
        description: "Update an existing to-do list item based on its name.",
        fields: {
          item: {
            required: true,
            example: "Submit income tax return",
            selector: { text: null },
            name: "Item name",
            description: "The name for the to-do list item."
          },
          rename: {
            example: "Something else",
            selector: { text: null },
            name: "Rename item",
            description: "The new name of the to-do item"
          },
          status: {
            example: "needs_action",
            selector: {
              select: {
                translation_key: "status",
                options: ["needs_action", "completed"]
              }
            },
            name: "Set status",
            description: "A status or confirmation of the to-do item."
          },
          due_date: {
            example: "2023-11-17",
            selector: { date: null },
            name: "Due date",
            description: "The date the to-do item is expected to be completed."
          },
          due_datetime: {
            example: "2023-11-17 13:30:00",
            selector: { datetime: null },
            name: "Due date and time",
            description: "The date and time the to-do item is expected to be completed."
          },
          description: {
            example: "A more complete description of the to-do item than that provided by the summary.",
            selector: { text: null },
            name: "Description",
            description: "A more complete description of the to-do item than provided by the item name."
          }
        },
        target: { entity: [{ domain: ["todo"], supported_features: [4] }] }
      },
      remove_item: {
        name: "Remove a to-do list item",
        description: "Remove an existing to-do list item by its name.",
        fields: {
          item: {
            required: true,
            selector: { text: null },
            name: "Item name",
            description: "The name for the to-do list items."
          }
        },
        target: { entity: [{ domain: ["todo"], supported_features: [2] }] }
      },
      get_items: {
        name: "Get to-do list items",
        description: "Get items on a to-do list.",
        fields: {
          status: {
            example: "needs_action",
            default: "needs_action",
            selector: {
              select: {
                translation_key: "status",
                options: ["needs_action", "completed"],
                multiple: true
              }
            },
            name: "Status",
            description: "Only return to-do items with the specified statuses. Returns not completed actions by default."
          }
        },
        target: { entity: [{ domain: ["todo"] }] },
        response: { optional: false }
      },
      remove_completed_items: {
        name: "Remove all completed to-do list items",
        description: "Remove all to-do list items that have been completed.",
        fields: {},
        target: { entity: [{ domain: ["todo"], supported_features: [2] }] }
      }
    };
  }
}
module.exports = TodoModule;
//# sourceMappingURL=todo.js.map
