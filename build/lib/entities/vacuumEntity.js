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
var vacuumEntity_exports = {};
__export(vacuumEntity_exports, {
  VacuumEntity: () => VacuumEntity,
  mapVacuumState: () => mapVacuumState
});
module.exports = __toCommonJS(vacuumEntity_exports);
var import_baseEntity = require("./baseEntity");
const adapterData = require("../../../lib/dataSingleton");
const FEATURE = {
  PAUSE: 4,
  STOP: 8,
  FAN_SPEED: 32,
  BATTERY: 64,
  STATE: 4096,
  START: 8192
};
function mapVacuumState(val, statesMap) {
  let raw = val;
  if (typeof val === "number" && statesMap && statesMap[val] !== void 0) {
    raw = statesMap[val];
  }
  const str = (typeof raw === "number" ? String(raw) : typeof raw === "string" ? raw : "").toLowerCase();
  if (/clean/.test(str)) {
    return "cleaning";
  }
  if (/dock|charg/.test(str)) {
    return "docked";
  }
  if (/paus/.test(str)) {
    return "paused";
  }
  if (/return|home|back/.test(str)) {
    return "returning";
  }
  if (/error|fault|fail/.test(str)) {
    return "error";
  }
  return "idle";
}
class VacuumEntity extends import_baseEntity.BaseEntity {
  /** @param params - converter parameters */
  constructor(params) {
    var _a, _b, _c, _d, _e, _f, _g;
    const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
    super(friendlyName, room, func, objects[id], "vacuum", forcedEntityId);
    this.context.STATE.setId = null;
    this.context.STATE.getId = null;
    this.context.COMMANDS = [];
    this.context.ATTRIBUTES = (_a = this.context.ATTRIBUTES) != null ? _a : [];
    let features = FEATURE.STATE;
    const find = (name) => controls.states.find((s) => s.id && s.name === name);
    const power = find("POWER");
    const pause = find("PAUSE");
    const stateS = find("STATE");
    const battery = find("BATTERY");
    const work = find("WORK_MODE");
    const mapUrl = (_b = find("MAP")) != null ? _b : find("MAP_URL");
    const mapB64 = find("MAP_BASE64");
    const mainStateId = (_c = stateS == null ? void 0 : stateS.id) != null ? _c : power == null ? void 0 : power.id;
    if (mainStateId) {
      this.context.STATE.getId = mainStateId;
      this.addID2entity(mainStateId);
      const statesMap = (stateS == null ? void 0 : stateS.id) && objects[stateS.id] ? (_d = objects[stateS.id].common.states) != null ? _d : void 0 : void 0;
      const haveStateValue = !!(stateS == null ? void 0 : stateS.id);
      this.context.STATE.getParser = (ent, _a2, st) => {
        ent.state = haveStateValue ? mapVacuumState(st == null ? void 0 : st.val, statesMap) : (st == null ? void 0 : st.val) ? "cleaning" : "docked";
      };
    } else {
      this.state = "idle";
    }
    if (power == null ? void 0 : power.id) {
      features |= FEATURE.START | FEATURE.STOP;
      const pid = power.id;
      this.addID2entity(pid);
      this.context.COMMANDS.push({
        service: "start",
        setId: pid,
        parseCommand: (_e2, c, _d2, u) => adapterData.adapter.setForeignStateAsync(c.setId, true, false, { user: u })
      });
      this.context.COMMANDS.push({
        service: "stop",
        setId: pid,
        parseCommand: (_e2, c, _d2, u) => adapterData.adapter.setForeignStateAsync(c.setId, false, false, { user: u })
      });
    }
    if (pause == null ? void 0 : pause.id) {
      features |= FEATURE.PAUSE;
      const paId = pause.id;
      this.addID2entity(paId);
      this.context.COMMANDS.push({
        service: "pause",
        setId: paId,
        parseCommand: (_e2, c, _d2, u) => adapterData.adapter.setForeignStateAsync(c.setId, true, false, { user: u })
      });
    }
    if (battery == null ? void 0 : battery.id) {
      features |= FEATURE.BATTERY;
      this.addID2entity(battery.id);
      this.context.ATTRIBUTES.push({ attribute: "battery_level", getId: battery.id });
    }
    if (work == null ? void 0 : work.id) {
      features |= FEATURE.FAN_SPEED;
      const wid = work.id;
      this.addID2entity(wid);
      const common = (_f = (_e = objects[wid]) == null ? void 0 : _e.common) != null ? _f : {};
      const statesMap = common.states;
      const attr = { attribute: "fan_speed", getId: wid };
      if (statesMap && !Array.isArray(statesMap) && typeof statesMap === "object") {
        attr.map2lovelace = statesMap;
        attr.map2iob = {};
        attr.isNumber = ((_g = common.type) != null ? _g : "").toLowerCase() === "number";
        this.attributes.fan_speed_list = [];
        for (const k of Object.keys(statesMap)) {
          attr.map2iob[String(statesMap[k])] = k;
          this.attributes.fan_speed_list.push(String(statesMap[k]));
        }
      }
      attr.getParser = (ent, a, st) => {
        var _a2;
        ent.attributes.fan_speed = a.map2lovelace ? (_a2 = a.map2lovelace[st == null ? void 0 : st.val]) != null ? _a2 : st == null ? void 0 : st.val : st == null ? void 0 : st.val;
      };
      this.context.ATTRIBUTES.push(attr);
      this.context.COMMANDS.push({
        service: "set_fan_speed",
        setId: wid,
        parseCommand: (_e2, c, d, u) => {
          let target = d.service_data.fan_speed;
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
    if (mapUrl == null ? void 0 : mapUrl.id) {
      this.addID2entity(mapUrl.id);
      this.context.ATTRIBUTES.push({ attribute: "entity_picture", getId: mapUrl.id });
    } else if (mapB64 == null ? void 0 : mapB64.id) {
      this.addID2entity(mapB64.id);
      this.context.ATTRIBUTES.push({
        attribute: "entity_picture",
        getId: mapB64.id,
        getParser: (ent, _a2, st) => {
          const v = st == null ? void 0 : st.val;
          ent.attributes.entity_picture = typeof v === "string" && v && !v.startsWith("data:") && !v.startsWith("http") ? `data:image/png;base64,${v}` : v;
        }
      });
    }
    this.attributes.supported_features = features;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  VacuumEntity,
  mapVacuumState
});
//# sourceMappingURL=vacuumEntity.js.map
