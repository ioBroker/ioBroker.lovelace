"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var cover_exports = {};
__export(cover_exports, {
  CoverConverter: () => CoverConverter
});
module.exports = __toCommonJS(cover_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_converter = __toESM(require("./converter"));
var import_utils = require("../entities/utils");
const adapterData = require("../../../lib/dataSingleton");
function handleSetAndTiltCommand(entity, command, data, user) {
  return new Promise((resolve, reject) => {
    var _a;
    if (data.service_data.position >= 0) {
      let value = data.service_data.position / 100 * entity.context.STATE.max + entity.context.STATE.min;
      if (entity.context.STATE.invert) {
        value = (100 - data.service_data.position) / 100 * entity.context.STATE.max + entity.context.STATE.min;
      }
      adapterData.adapter.setForeignState(
        command.setId,
        value,
        false,
        { user },
        (err) => err ? reject(err) : resolve()
      );
    } else if (data.service_data.tilt_position >= 0) {
      const attr = (_a = entity.context.ATTRIBUTES) == null ? void 0 : _a.find((a) => a.attribute === "tilt");
      if (attr == null ? void 0 : attr.setId) {
        let value = data.service_data.tilt_position / 100 * attr.max + attr.min;
        if (attr.invert) {
          value = (100 - data.service_data.tilt_position) / 100 * attr.max + attr.min;
        }
        adapterData.adapter.setForeignState(
          attr.setId,
          value,
          false,
          { user },
          (err) => err ? reject(err) : resolve()
        );
      } else {
        reject(new Error("No setId for tilt cover."));
      }
    } else {
      reject(new Error("No matching service data in set_cover_position."));
    }
  });
}
function addCommand(entity, control, stateName, serviceName, featureBit, onWrite) {
  const state = control.states.find((s) => s.id && s.name === stateName);
  if (!(state == null ? void 0 : state.id)) {
    return false;
  }
  const stateId = state.id;
  entity.context.COMMANDS.push({
    service: serviceName,
    setId: stateId,
    parseCommand: (ent, command, _data, user) => new Promise((resolve, reject) => {
      if (typeof onWrite === "function") {
        onWrite(ent);
      }
      adapterData.adapter.setForeignState(
        command.setId,
        true,
        false,
        { user },
        (err) => err ? reject(err) : resolve()
      );
    })
  });
  entity.attributes.supported_features |= featureBit;
  return true;
}
function addBlindLevel(entities, control, objects, setStateName, room, func, obj, forcedEntityId) {
  var _a, _b;
  const state = control.states.find((s) => s.id && s.name === setStateName);
  if (!(state == null ? void 0 : state.id)) {
    return false;
  }
  const stateId = state.id;
  const entity = entities[0];
  const common = (_b = (_a = objects[stateId]) == null ? void 0 : _a.common) != null ? _b : {};
  const entitySlider = (0, import_utils.processCommon)(
    entity.attributes.friendly_name,
    room,
    func,
    obj,
    "input_number",
    forcedEntityId
  );
  entities.push(entitySlider);
  entitySlider.context.STATE = { setId: stateId, getId: stateId };
  entitySlider.attributes.icon = "mdi:window-shutter";
  entitySlider.attributes.mode = "slider";
  entitySlider.attributes.min = common.min !== void 0 ? common.min : 0;
  entitySlider.attributes.max = common.max !== void 0 ? common.max : 100;
  entitySlider.attributes.step = common.step || 1;
  (0, import_utils.addID2entity)(stateId, entitySlider);
  entity.context.STATE.setId = stateId;
  entity.context.STATE.getId = stateId;
  (0, import_utils.addID2entity)(stateId, entity);
  entity.context.STATE.max = common.max || 100;
  entity.context.STATE.min = common.min || 0;
  entity.context.STATE.getParser = (ent, _attr, iobState) => {
    if (!iobState) {
      return;
    }
    const val = iobState.val;
    if (val != null) {
      const stMin = ent.context.STATE.min;
      const stMax = ent.context.STATE.max;
      let position = (val - stMin) / stMax * 100;
      let isClosed = val === stMin;
      let isOpened = val === stMax;
      if (ent.context.STATE.invert) {
        position = 100 - position;
        isClosed = val === stMax;
        isOpened = val === stMin;
      }
      ent.attributes.current_position = position;
      if (isClosed) {
        ent.state = "closed";
      } else if (isOpened) {
        ent.state = "open";
      } else {
        ent.state = String(position);
      }
    }
  };
  entity.attributes.supported_features |= 4;
  entity.context.COMMANDS.push({
    service: "set_cover_tilt_position",
    setId: stateId,
    parseCommand: handleSetAndTiltCommand
  });
  entity.context.COMMANDS.push({
    service: "set_cover_position",
    setId: stateId,
    parseCommand: handleSetAndTiltCommand
  });
  entity.context.COMMANDS.push({
    service: "toggle",
    setId: stateId,
    parseCommand: (ent, command, _data, user) => new Promise((resolve, reject) => {
      var _a2, _b2, _c, _d, _e, _f;
      const upCmd = ent.context.COMMANDS.find((a) => a.service === "open_cover");
      const downCmd = ent.context.COMMANDS.find((a) => a.service === "close_cover");
      if (ent.state === "open" || ent.state === "opening") {
        const setId = (_a2 = downCmd == null ? void 0 : downCmd.setId) != null ? _a2 : command.setId;
        const val = downCmd ? true : ent.context.STATE.invert ? (_b2 = ent.context.STATE.min) != null ? _b2 : 0 : (_c = ent.context.STATE.max) != null ? _c : 100;
        adapterData.adapter.setForeignState(
          setId,
          val,
          false,
          { user },
          (err) => err ? reject(err) : resolve()
        );
      } else {
        const setId = (_d = upCmd == null ? void 0 : upCmd.setId) != null ? _d : command.setId;
        const val = upCmd ? true : ent.context.STATE.invert ? (_e = ent.context.STATE.max) != null ? _e : 100 : (_f = ent.context.STATE.min) != null ? _f : 0;
        adapterData.adapter.setForeignState(
          setId,
          val,
          false,
          { user },
          (err) => err ? reject(err) : resolve()
        );
      }
    })
  });
  const getState = control.states.find((s) => s.id && s.name === setStateName.replace("SET", "ACTUAL"));
  if (getState == null ? void 0 : getState.id) {
    entity.context.STATE.getId = getState.id;
    (0, import_utils.addID2entity)(getState.id, entity);
    entitySlider.context.STATE.getId = getState.id;
    (0, import_utils.addID2entity)(getState.id, entitySlider);
  }
  return true;
}
function addTiltLevel(entity, control, objects, setStateName) {
  var _a, _b;
  const state = control.states.find((s) => s.id && s.name === setStateName);
  if (!(state == null ? void 0 : state.id)) {
    return false;
  }
  const stateId = state.id;
  const common = (_b = (_a = objects[stateId]) == null ? void 0 : _a.common) != null ? _b : {};
  entity.context.ATTRIBUTES = [
    {
      attribute: "tilt",
      getId: stateId,
      setId: stateId,
      min: common.min || 0,
      max: common.max || 100,
      getParser: (ent, attr, iobState) => {
        if (!iobState) {
          return;
        }
        const val = iobState.val;
        if (val != null) {
          let position = (val - attr.min) / attr.max * 100;
          if (attr.invert) {
            position = 100 - position;
          }
          ent.attributes.current_tilt_position = position;
        }
      }
    }
  ];
  (0, import_utils.addID2entity)(stateId, entity);
  entity.attributes.supported_features |= 128;
  const getState = control.states.find((s) => s.id && s.name === setStateName.replace("SET", "ACTUAL"));
  if (getState == null ? void 0 : getState.id) {
    entity.context.ATTRIBUTES[0].getId = getState.id;
    (0, import_utils.addID2entity)(getState.id, entity);
  }
  return true;
}
class CoverConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    const { controls, objects, forcedEntityId, friendlyName, room, func } = params;
    const entity = (0, import_utils.processCommon)(friendlyName, room, func, objects[params.id], "cover", forcedEntityId);
    entity.context.COMMANDS = [];
    entity.attributes.device_class = "blind";
    entity.context.STATE = { setId: null, getId: null };
    entity.attributes.supported_features = 0;
    entity.attributes.icon = "mdi:window-shutter";
    adapterData.log.debug(`Creating blind of type ${controls.type} for ${params.id}`);
    const entities = [entity];
    if (addBlindLevel(entities, controls, objects, "SET", room, func, objects[params.id], forcedEntityId)) {
      entity.context.STATE.invert = !!adapterData.adapter.config.blindsInvert;
    }
    if (addTiltLevel(entity, controls, objects, "TILT_SET")) {
      const attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "tilt");
      if (attr) {
        attr.invert = !!adapterData.adapter.config.blindsInvert;
      }
    }
    addCommand(entity, controls, "STOP", "stop_cover", 8);
    const haveOpen = addCommand(entity, controls, "OPEN", "open_cover", 1, (ent) => {
      ent.state = "opening";
    });
    const haveClose = addCommand(entity, controls, "CLOSE", "close_cover", 2, (ent) => {
      ent.state = "closing";
    });
    addCommand(entity, controls, "TILT_OPEN", "open_cover_tilt", 16);
    addCommand(entity, controls, "TILT_CLOSE", "close_cover_tilt", 32);
    addCommand(entity, controls, "TILT_STOP", "stop_cover_tilt", 64);
    if (!haveOpen) {
      entity.context.COMMANDS.push({
        service: "open_cover",
        setId: entity.context.STATE.setId,
        parseCommand: (ent, command, _data, user) => new Promise((resolve, reject) => {
          var _a, _b;
          ent.state = "opening";
          adapterData.adapter.setForeignState(
            command.setId,
            ent.context.STATE.invert ? (_a = ent.context.STATE.min) != null ? _a : 0 : (_b = ent.context.STATE.max) != null ? _b : 100,
            false,
            { user },
            (err) => err ? reject(err) : resolve()
          );
        })
      });
      entity.attributes.supported_features |= 1;
    }
    if (!haveClose) {
      entity.context.COMMANDS.push({
        service: "close_cover",
        setId: entity.context.STATE.setId,
        parseCommand: (ent, command, _data, user) => new Promise((resolve, reject) => {
          var _a, _b;
          ent.state = "closing";
          adapterData.adapter.setForeignState(
            command.setId,
            ent.context.STATE.invert ? (_a = ent.context.STATE.max) != null ? _a : 100 : (_b = ent.context.STATE.min) != null ? _b : 0,
            false,
            { user },
            (err) => err ? reject(err) : resolve()
          );
        })
      });
      entity.attributes.supported_features |= 2;
    }
    return entities;
  }
}
import_converter.default.converters[import_type_detector.Types.blind] = CoverConverter;
import_converter.default.converters[import_type_detector.Types.blindButtons] = CoverConverter;
adapterData.services.cover = {
  set_cover_tilt_position: {
    name: "Set tilt position",
    description: "Sets the tilt position of a cover entity.",
    fields: {
      tilt_position: {
        required: true,
        selector: { number: null },
        name: "Tilt position",
        description: "The target tilt position to set."
      }
    },
    target: { entity: [{ domain: ["cover"] }] }
  },
  set_cover_position: {
    name: "Set position",
    description: "Sets the position of a cover entity.",
    fields: {
      position: {
        required: true,
        selector: { number: null },
        name: "Position",
        description: "The target position to set."
      }
    },
    target: { entity: [{ domain: ["cover"] }] }
  },
  toggle: {
    name: "Toggle cover status",
    description: "Toggles the status of a cover entity.",
    fields: {},
    target: { entity: [{ domain: ["cover"] }] }
  },
  open_cover: {
    name: "Open cover",
    description: "Opens a cover entity.",
    fields: {},
    target: { entity: [{ domain: ["cover"] }] }
  },
  close_cover: {
    name: "Close cover",
    description: "Closes a cover entity.",
    fields: {},
    target: { entity: [{ domain: ["cover"] }] }
  },
  stop_cover: {
    name: "Stop cover",
    description: "Stops a cover entity.",
    fields: {},
    target: { entity: [{ domain: ["cover"] }] }
  },
  open_cover_tilt: {
    name: "Open tilt",
    description: "Opens the tilt of a cover entity.",
    fields: {},
    target: { entity: [{ domain: ["cover"] }] }
  },
  close_cover_tilt: {
    name: "Close tilt",
    description: "Closes the tilt of a cover entity.",
    fields: {},
    target: { entity: [{ domain: ["cover"] }] }
  },
  stop_cover_tilt: {
    name: "Stop tilt",
    description: "Stops the tilt of a cover entity.",
    fields: {},
    target: { entity: [{ domain: ["cover"] }] }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CoverConverter
});
//# sourceMappingURL=cover.js.map
