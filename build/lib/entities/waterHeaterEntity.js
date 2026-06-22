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
var waterHeaterEntity_exports = {};
__export(waterHeaterEntity_exports, {
  WaterHeaterEntity: () => WaterHeaterEntity
});
module.exports = __toCommonJS(waterHeaterEntity_exports);
var import_baseEntity = require("./baseEntity");
const adapterData = require("../../../lib/dataSingleton");
const FEATURE = {
  TARGET_TEMPERATURE: 1,
  OPERATION_MODE: 2,
  ON_OFF: 8
};
class WaterHeaterEntity extends import_baseEntity.BaseEntity {
  /** @param params - converter parameters */
  constructor(params) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
    super(friendlyName, room, func, objects[id], "water_heater", forcedEntityId);
    this.context.STATE.setId = null;
    this.context.STATE.getId = null;
    this.context.COMMANDS = [];
    this.context.ATTRIBUTES = (_a = this.context.ATTRIBUTES) != null ? _a : [];
    let features = 0;
    const find = (name) => controls.states.find((s) => s.id && s.name === name);
    const set = find("SET");
    const actual = find("ACTUAL");
    const power = find("POWER");
    const mode = find("MODE");
    if (set == null ? void 0 : set.id) {
      features |= FEATURE.TARGET_TEMPERATURE;
      const sid = set.id;
      this.addID2entity(sid);
      const common = (_c = (_b = objects[sid]) == null ? void 0 : _b.common) != null ? _c : {};
      this.attributes.min_temp = (_d = common.min) != null ? _d : 30;
      this.attributes.max_temp = (_e = common.max) != null ? _e : 80;
      this.context.ATTRIBUTES.push({ attribute: "temperature", getId: sid, setId: sid });
      this.context.COMMANDS.push({
        service: "set_temperature",
        setId: sid,
        parseCommand: (_e2, c, d, u) => adapterData.adapter.setForeignStateAsync(c.setId, Number(d.service_data.temperature), false, {
          user: u
        })
      });
    }
    if (actual == null ? void 0 : actual.id) {
      this.addID2entity(actual.id);
      this.context.ATTRIBUTES.push({ attribute: "current_temperature", getId: actual.id });
    }
    if (mode == null ? void 0 : mode.id) {
      features |= FEATURE.OPERATION_MODE;
      const mid = mode.id;
      this.context.STATE.getId = mid;
      this.context.STATE.setId = mid;
      this.addID2entity(mid);
      const common = (_g = (_f = objects[mid]) == null ? void 0 : _f.common) != null ? _g : {};
      const statesMap = common.states;
      const map2lovelace = statesMap && typeof statesMap === "object" && !Array.isArray(statesMap) ? statesMap : void 0;
      const map2iob = {};
      if (map2lovelace) {
        this.attributes.operation_list = [];
        for (const k of Object.keys(map2lovelace)) {
          map2iob[String(map2lovelace[k])] = k;
          this.attributes.operation_list.push(String(map2lovelace[k]));
        }
      }
      const isNumber = ((_h = common.type) != null ? _h : "").toLowerCase() === "number";
      this.context.STATE.getParser = (ent, _a2, st) => {
        var _a3;
        const v = map2lovelace ? (_a3 = map2lovelace[st == null ? void 0 : st.val]) != null ? _a3 : st == null ? void 0 : st.val : st == null ? void 0 : st.val;
        ent.state = String(v != null ? v : "off");
        ent.attributes.current_operation = ent.state;
      };
      this.context.COMMANDS.push({
        service: "set_operation_mode",
        setId: mid,
        parseCommand: (_e2, c, d, u) => {
          let target = d.service_data.operation_mode;
          if (map2iob[String(target)] !== void 0) {
            target = map2iob[String(target)];
          }
          if (isNumber) {
            target = Number(target);
          }
          return adapterData.adapter.setForeignStateAsync(c.setId, target, false, {
            user: u
          });
        }
      });
    } else if (power == null ? void 0 : power.id) {
      this.attributes.operation_list = ["off", "on"];
      this.context.STATE.getId = power.id;
      this.context.STATE.getParser = (ent, _a2, st) => {
        ent.state = (st == null ? void 0 : st.val) ? "on" : "off";
        ent.attributes.current_operation = ent.state;
      };
    }
    if (power == null ? void 0 : power.id) {
      features |= FEATURE.ON_OFF;
      const pid = power.id;
      this.addID2entity(pid);
      this.context.COMMANDS.push({
        service: "turn_on",
        setId: pid,
        parseCommand: (_e2, c, _d2, u) => adapterData.adapter.setForeignStateAsync(c.setId, true, false, { user: u })
      });
      this.context.COMMANDS.push({
        service: "turn_off",
        setId: pid,
        parseCommand: (_e2, c, _d2, u) => adapterData.adapter.setForeignStateAsync(c.setId, false, false, { user: u })
      });
    }
    this.attributes.supported_features = features;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WaterHeaterEntity
});
//# sourceMappingURL=waterHeaterEntity.js.map
