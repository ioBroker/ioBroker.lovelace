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
var historyGate_exports = {};
__export(historyGate_exports, {
  DEFAULT_HISTORY_MAX_COUNT: () => DEFAULT_HISTORY_MAX_COUNT,
  HARD_HISTORY_MAX_COUNT: () => HARD_HISTORY_MAX_COUNT,
  boundHistoryCount: () => boundHistoryCount,
  getHistoryGated: () => getHistoryGated
});
module.exports = __toCommonJS(historyGate_exports);
const DEFAULT_HISTORY_MAX_COUNT = 2e3;
const HARD_HISTORY_MAX_COUNT = 5e4;
function boundHistoryCount(configured) {
  if (!configured || configured < 1) {
    return DEFAULT_HISTORY_MAX_COUNT;
  }
  return Math.min(configured, HARD_HISTORY_MAX_COUNT);
}
const MAX_CONCURRENT = 3;
let active = 0;
const queue = [];
function acquire() {
  if (active < MAX_CONCURRENT) {
    active++;
    return Promise.resolve();
  }
  return new Promise((resolve) => queue.push(resolve));
}
function release() {
  const next = queue.shift();
  if (next) {
    next();
  } else {
    active--;
  }
}
async function getHistoryGated(adapter, instance, message) {
  await acquire();
  try {
    return await adapter.sendToAsync(instance, "getHistory", message);
  } finally {
    release();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEFAULT_HISTORY_MAX_COUNT,
  HARD_HISTORY_MAX_COUNT,
  boundHistoryCount,
  getHistoryGated
});
//# sourceMappingURL=historyGate.js.map
