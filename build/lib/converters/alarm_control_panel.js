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
var alarm_control_panel_exports = {};
__export(alarm_control_panel_exports, {
  processManualEntity: () => processManualEntity
});
module.exports = __toCommonJS(alarm_control_panel_exports);
var import_utils = require("../entities/utils");
const adapterData = require("../../../lib/dataSingleton");
function parseAlarmState(entity, attrMap, state) {
  if (!state) {
    entity.state = "unknown";
    return;
  }
  if (state.val === true) {
    entity.state = "armed";
  } else if (state.val === false) {
    entity.state = "disarmed";
  } else {
    const mapKey = state.val;
    if (attrMap && attrMap[mapKey] !== void 0) {
      entity.state = String(attrMap[mapKey]);
    } else if (entity.context.STATE.map && entity.context.STATE.map[mapKey] !== void 0) {
      entity.state = String(entity.context.STATE.map[mapKey]);
    } else {
      entity.state = String(state.val);
    }
  }
}
function fillAlarmControlPanelFromStates(states, objects, entity) {
  var _a, _b, _c, _d;
  (0, import_utils.fillEntityFromStates)(states, entity, objects);
  entity.attributes.code_format = "number";
  if (states.state) {
    const obj = objects[states.state];
    if (obj == null ? void 0 : obj.common) {
      const common = obj.common;
      if (common.custom) {
        const nsCustom = common.custom[adapterData.adapter.namespace];
        if (nsCustom) {
          entity.attributes.code_format = (_a = nsCustom.code_format) != null ? _a : "number";
        }
      }
      entity.context.STATE.isBoolean = obj.common.type === "boolean";
      entity.context.STATE.map = obj.common.states;
    }
    entity.context.STATE.setId = states.state;
    entity.context.STATE.getId = states.state;
    (0, import_utils.addID2entity)(states.state, entity);
  }
  if (states.arm_state) {
    const id = states.arm_state;
    const obj = objects[id];
    entity.context.ATTRIBUTES = [
      {
        attribute: "arm_state",
        getId: id,
        setId: id,
        map: (_c = (_b = obj == null ? void 0 : obj.common) == null ? void 0 : _b.states) != null ? _c : void 0,
        getParser: (ent, attr, state) => parseAlarmState(ent, attr.map, state)
      }
    ];
    (0, import_utils.addID2entity)(id, entity);
  }
  entity.context.STATE.getParser = (ent, _attrName, state) => parseAlarmState(ent, void 0, state);
  const processCommand = async (ent, _command, data, user) => {
    var _a2;
    const targetState = data.service.replace("alarm_", "").replace("arm", "armed");
    const stateId = ent.context.STATE.setId;
    adapterData.log.debug(`${data.service}: ${stateId} = ${data.service_data.code ? "XXX" : "none"}`);
    if (!adapterData.adapter.config.alarmCheckCodeOnDisarmOnly || targetState.includes("disarm")) {
      const sd = data.service_data;
      if (sd == null || sd.code == null) {
        throw new Error("code is empty");
      }
      const obj = await adapterData.adapter.getForeignObjectAsync(stateId);
      if (!((_a2 = obj == null ? void 0 : obj.native) == null ? void 0 : _a2.alarm_code)) {
        adapterData.log.warn(
          `No code is defined! To provide the code add to object ${stateId} native.alarm_code with desired code`
        );
        throw new Error("iobroker misconfigured.");
      } else if (String(obj.native.alarm_code) !== String(sd.code)) {
        throw new Error("invalid code");
      }
    }
    if (ent.context.STATE.isBoolean) {
      await adapterData.adapter.setForeignStateAsync(stateId, !targetState.includes("disarm"), false, { user });
    } else {
      let valToSet = targetState;
      const stateMap = ent.context.STATE.map;
      if (stateMap) {
        const numKey = Number(Object.keys(stateMap).find((k) => stateMap[k] === targetState));
        if (!isNaN(numKey)) {
          valToSet = numKey;
        }
      }
      await adapterData.adapter.setForeignStateAsync(stateId, valToSet, false, { user });
    }
    if (ent.context.ATTRIBUTES) {
      const attr = ent.context.ATTRIBUTES.find((a) => a.attribute === "arm_state");
      if (attr == null ? void 0 : attr.setId) {
        let valToSet = targetState;
        const attrMap = attr.map;
        if (attrMap) {
          const numKey = Number(Object.keys(attrMap).find((k) => attrMap[k] === targetState));
          if (!isNaN(numKey)) {
            valToSet = numKey;
          }
        }
        await adapterData.adapter.setForeignStateAsync(attr.setId, valToSet, false, { user });
      }
    }
  };
  entity.context.COMMANDS = (_d = entity.context.COMMANDS) != null ? _d : [];
  for (const service of [
    "alarm_arm_away",
    "alarm_arm_home",
    "alarm_arm_night",
    "alarm_arm_vacation",
    "alarm_arm_custom_bypass",
    "alarm_disarm"
  ]) {
    entity.context.COMMANDS.push({ service, parseCommand: processCommand });
  }
  return [entity];
}
async function processManualEntity(id, obj, entity, objects, custom) {
  var _a;
  const states = (_a = custom.states) != null ? _a : { state: id };
  objects[id] = obj;
  return new Promise((resolve) => resolve(fillAlarmControlPanelFromStates(states, objects, entity)));
}
adapterData.services.alarm_control_panel = {
  alarm_arm_away: {
    name: "Arm away",
    description: "Arms the alarm in away mode.",
    fields: {
      code: {
        selector: { number: null },
        name: "Code",
        description: "The code to arm the alarm."
      }
    },
    target: { entity: [{ domain: ["alarm_control_panel"] }] }
  },
  alarm_arm_home: {
    name: "Arm home",
    description: "Arms the alarm in home mode.",
    fields: {
      code: {
        selector: { number: null },
        name: "Code",
        description: "The code to arm the alarm."
      }
    },
    target: { entity: [{ domain: ["alarm_control_panel"] }] }
  },
  alarm_arm_night: {
    name: "Arm night",
    description: "Arms the alarm in night mode.",
    fields: {
      code: {
        selector: { number: null },
        name: "Code",
        description: "The code to arm the alarm."
      }
    },
    target: { entity: [{ domain: ["alarm_control_panel"] }] }
  },
  alarm_arm_vacation: {
    name: "Arm vacation",
    description: "Arms the alarm in vacation mode.",
    fields: {
      code: {
        selector: { number: null },
        name: "Code",
        description: "The code to arm the alarm."
      }
    },
    target: { entity: [{ domain: ["alarm_control_panel"] }] }
  },
  alarm_arm_custom_bypass: {
    name: "Arm custom",
    description: "Arms the alarm in custom mode.",
    fields: {
      code: {
        selector: { number: null },
        name: "Code",
        description: "The code to arm the alarm."
      }
    },
    target: { entity: [{ domain: ["alarm_control_panel"] }] }
  },
  alarm_disarm: {
    name: "Disarm",
    description: "Disarms the alarm.",
    fields: {
      code: {
        required: true,
        selector: { number: null },
        name: "Code",
        description: "The code to disarm the alarm."
      }
    },
    target: { entity: [{ domain: ["alarm_control_panel"] }] }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  processManualEntity
});
//# sourceMappingURL=alarm_control_panel.js.map
