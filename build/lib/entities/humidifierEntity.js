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
var humidifierEntity_exports = {};
__export(humidifierEntity_exports, {
  HumidifierEntity: () => HumidifierEntity
});
module.exports = __toCommonJS(humidifierEntity_exports);
var import_baseEntity = require("./baseEntity");
const adapterData = require("../../../lib/dataSingleton");
class HumidifierEntity extends import_baseEntity.BaseEntity {
  /** @param params - converter parameters */
  constructor(params) {
    var _a, _b, _c, _d;
    const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
    super(friendlyName, room, func, objects[id], "humidifier", forcedEntityId);
    this.context.STATE.setId = null;
    this.context.STATE.getId = null;
    this.context.COMMANDS = [];
    this.context.ATTRIBUTES = (_a = this.context.ATTRIBUTES) != null ? _a : [];
    let features = 0;
    const find = (name) => controls.states.find((s) => s.id && s.name === name);
    const power = find("POWER");
    const set = find("SET");
    const actual = find("ACTUAL");
    const mode = find("MODE");
    this.attributes.min_humidity = 0;
    this.attributes.max_humidity = 100;
    if (power == null ? void 0 : power.id) {
      const pid = power.id;
      this.context.STATE.setId = pid;
      this.context.STATE.getId = pid;
      this.addID2entity(pid);
      this.context.STATE.getParser = (ent, _a2, st) => {
        ent.state = (st == null ? void 0 : st.val) ? "on" : "off";
      };
      this.context.COMMANDS.push({
        service: "turn_on",
        setId: pid,
        parseCommand: (_e, c, _d2, u) => adapterData.adapter.setForeignStateAsync(c.setId, true, false, { user: u })
      });
      this.context.COMMANDS.push({
        service: "turn_off",
        setId: pid,
        parseCommand: (_e, c, _d2, u) => adapterData.adapter.setForeignStateAsync(c.setId, false, false, { user: u })
      });
    } else {
      this.state = "on";
    }
    if (set == null ? void 0 : set.id) {
      const sid = set.id;
      this.addID2entity(sid);
      this.context.ATTRIBUTES.push({ attribute: "humidity", getId: sid, setId: sid });
      this.context.COMMANDS.push({
        service: "set_humidity",
        setId: sid,
        parseCommand: (_e, c, d, u) => adapterData.adapter.setForeignStateAsync(c.setId, Number(d.service_data.humidity), false, {
          user: u
        })
      });
    }
    if (actual == null ? void 0 : actual.id) {
      this.addID2entity(actual.id);
      this.context.ATTRIBUTES.push({ attribute: "current_humidity", getId: actual.id });
    }
    if (mode == null ? void 0 : mode.id) {
      features |= 1;
      const mid = mode.id;
      this.addID2entity(mid);
      const common = (_c = (_b = objects[mid]) == null ? void 0 : _b.common) != null ? _c : {};
      const attr = { attribute: "mode", getId: mid, setId: mid };
      const statesMap = common.states;
      if (statesMap && typeof statesMap === "object" && !Array.isArray(statesMap)) {
        attr.map2lovelace = statesMap;
        attr.map2iob = {};
        attr.isNumber = ((_d = common.type) != null ? _d : "").toLowerCase() === "number";
        this.attributes.available_modes = [];
        for (const k of Object.keys(statesMap)) {
          attr.map2iob[String(statesMap[k])] = k;
          this.attributes.available_modes.push(String(statesMap[k]));
        }
      }
      attr.getParser = (ent, a, st) => {
        var _a2;
        ent.attributes.mode = a.map2lovelace ? (_a2 = a.map2lovelace[st == null ? void 0 : st.val]) != null ? _a2 : st == null ? void 0 : st.val : st == null ? void 0 : st.val;
      };
      this.context.ATTRIBUTES.push(attr);
      this.context.COMMANDS.push({
        service: "set_mode",
        setId: mid,
        parseCommand: (_e, c, d, u) => {
          let target = d.service_data.mode;
          if (attr.map2iob && attr.map2iob[String(target)] !== void 0) {
            target = attr.map2iob[String(target)];
          }
          if (attr.isNumber) {
            target = Number(target);
          }
          return adapterData.adapter.setForeignStateAsync(c.setId, target, false, {
            user: u
          });
        }
      });
    }
    this.attributes.supported_features = features;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HumidifierEntity
});
//# sourceMappingURL=humidifierEntity.js.map
