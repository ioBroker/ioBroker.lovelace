"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var input_datetime_exports = {};
__export(input_datetime_exports, {
  processManualEntity: () => processManualEntity
});
module.exports = __toCommonJS(input_datetime_exports);
var import_utils = require("../entities/utils");
const adapterData = require("../../../lib/dataSingleton");
function pad0(n) {
  return n < 10 ? `0${n}` : String(n);
}
function stateFromAttributes(entity) {
  const attrs = entity.attributes;
  entity.state = "unknown";
  if (attrs.has_date) {
    entity.state = `${String(attrs.year)}-${pad0(attrs.month)}-${pad0(attrs.day)}`;
  }
  if (attrs.has_time) {
    if (!attrs.has_date) {
      entity.state = "";
    } else {
      entity.state += " ";
    }
    entity.state += `${String(attrs.hour)}:${String(attrs.minute)}:${String(attrs.second)}`;
  }
}
function timeToAttributes(entity, date) {
  const attrs = entity.attributes;
  if (attrs.has_date) {
    attrs.year = date.getFullYear();
    attrs.month = date.getMonth() + 1;
    attrs.day = date.getDate();
  }
  if (attrs.has_time) {
    attrs.hour = pad0(date.getHours());
    attrs.minute = pad0(date.getMinutes());
    attrs.second = pad0(date.getSeconds());
  }
  stateFromAttributes(entity);
}
function fillInputDatetimeEntity(stateId, isString, entity) {
  var _a;
  const attrs = entity.attributes;
  entity.context.COMMANDS = (_a = entity.context.COMMANDS) != null ? _a : [];
  entity.context.COMMANDS.push({
    service: "set_datetime",
    isString,
    setId: entity.context.STATE.setId,
    parseCommand: async (ent, command, data, user) => {
      const sd = data.service_data;
      const entAttrs = ent.attributes;
      let date = /* @__PURE__ */ new Date();
      if (entAttrs.has_date) {
        date = sd.date ? new Date(sd.date) : new Date(entAttrs.year, entAttrs.month - 1, entAttrs.day);
      }
      if (entAttrs.has_time && sd.time) {
        const parts = sd.time.split(":");
        date.setHours(parseInt(parts[0], 10));
        date.setMinutes(parseInt(parts[1], 10));
        date.setSeconds(parts[2] ? parseInt(parts[2], 10) : 0);
        date.setMilliseconds(0);
      }
      timeToAttributes(ent, date);
      const targetData = command.isString ? ent.state : date.getTime();
      return adapterData.adapter.setForeignStateAsync(command.setId, targetData, false, { user });
    }
  });
  entity.context.STATE.getParser = (ent, _attr, iobState) => {
    const s = iobState != null ? iobState : { val: null };
    const entAttrs = ent.attributes;
    if (typeof s.val === "number") {
      const date = new Date(s.val);
      if (date.getTime() >= 0) {
        timeToAttributes(ent, date);
      } else {
        adapterData.log.warn(`${String(s.val)} is not a valid date. Error in ${ent.entity_id}`);
        ent.state = String(s.val) || "unknown";
      }
    } else if (typeof s.val === "string") {
      let timeStr;
      let dateStr;
      if (/\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{1,2}(:\d{1,2})?/.test(s.val)) {
        [dateStr, timeStr] = s.val.split(" ");
      } else if (/\d{2,4}-\d{1,2}-\d{1,2}/.test(s.val)) {
        dateStr = s.val;
      } else if (/\d{1,2}:\d{1,2}(:\d{1,2})?/.test(s.val)) {
        timeStr = s.val;
      }
      if (dateStr) {
        const parts = dateStr.split("-");
        entAttrs.year = Number(parts[0]) || 1970;
        entAttrs.month = Number(parts[1]) || 1;
        entAttrs.day = Number(parts[2]) || 1;
      }
      if (timeStr) {
        const parts = timeStr.split(":");
        entAttrs.hour = Number(parts[0]) || 0;
        entAttrs.minute = Number(parts[1]) || 0;
        entAttrs.second = parts[2] ? Number(parts[2]) : 0;
      }
      stateFromAttributes(ent);
    } else {
      adapterData.log.warn(`${String(s.val)} is not a valid date. Error in ${ent.entity_id}`);
      ent.state = "2022-04-10 20:23";
    }
  };
  entity.context.capabilities = {
    has_date: attrs.has_date,
    has_time: attrs.has_time
  };
  (0, import_utils.addID2entity)(stateId, entity);
}
function processManualEntity(id, _obj, entity, objects, custom) {
  var _a, _b, _c, _d;
  const states = (_a = custom.states) != null ? _a : { state: id };
  const stateId = (_b = states.state) != null ? _b : id;
  const isString = !!objects[stateId] && !!((_c = objects[stateId].common) == null ? void 0 : _c.type) && objects[stateId].common.type === "string";
  const attrs = entity.attributes;
  attrs.has_time = custom.attr_has_time !== void 0 ? custom.attr_has_time : (_d = custom.has_time) != null ? _d : false;
  attrs.has_date = custom.attr_has_date !== void 0 ? custom.attr_has_date : custom.has_date === void 0 ? true : custom.has_date;
  fillInputDatetimeEntity(stateId, isString, entity);
  return [entity];
}
adapterData.services.input_datetime = {
  set_datetime: {
    name: "Set",
    description: "Sets the date and/or time.",
    fields: {
      date: {
        example: '"2019-04-20"',
        selector: { text: null },
        name: "Date",
        description: "The target date."
      },
      time: {
        example: '"05:04:20"',
        selector: { time: null },
        name: "Time",
        description: "The target time."
      },
      datetime: {
        example: '"2019-04-20 05:04:20"',
        selector: { text: null },
        name: "Date & time",
        description: "The target date & time."
      },
      timestamp: {
        selector: {
          number: {
            min: 0,
            // eslint-disable-next-line no-loss-of-precision
            max: 9223372036854776e3,
            mode: "box"
          }
        },
        name: "Timestamp",
        description: "The target date & time, expressed by a UNIX timestamp."
      }
    },
    target: { entity: [{ domain: ["input_datetime"] }] }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  processManualEntity
});
//# sourceMappingURL=input_datetime.js.map
