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
var coverEntity_exports = {};
__export(coverEntity_exports, {
  CoverEntity: () => CoverEntity
});
module.exports = __toCommonJS(coverEntity_exports);
var import_baseEntity = require("./baseEntity");
const adapterData = require("../../../lib/dataSingleton");
class CoverSliderEntity extends import_baseEntity.BaseEntity {
  constructor(name, room, func, obj, forcedEntityId, stateId, common) {
    var _a, _b, _c;
    super(name, room, func, obj, "input_number", forcedEntityId);
    this.context.STATE.setId = stateId;
    this.context.STATE.getId = stateId;
    this.attributes.icon = "mdi:window-shutter";
    this.attributes.mode = "slider";
    this.attributes.min = (_a = common.min) != null ? _a : 0;
    this.attributes.max = (_b = common.max) != null ? _b : 100;
    this.attributes.step = (_c = common.step) != null ? _c : 1;
    this.addID2entity(stateId);
  }
}
function handleSetAndTiltCommand(entity, command, data, user) {
  return new Promise((resolve, reject) => {
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
      const attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "tilt");
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
  var _a, _b, _c, _d;
  const state = control.states.find((s) => s.id && s.name === setStateName);
  if (!(state == null ? void 0 : state.id)) {
    return false;
  }
  const stateId = state.id;
  const entity = entities[0];
  const common = (_b = (_a = objects[stateId]) == null ? void 0 : _a.common) != null ? _b : {};
  const slider = new CoverSliderEntity(
    entity.attributes.friendly_name,
    room,
    func,
    obj,
    forcedEntityId,
    stateId,
    common
  );
  entities.push(slider);
  entity.context.STATE.setId = stateId;
  entity.context.STATE.getId = stateId;
  entity.addID2entity(stateId);
  entity.context.STATE.max = (_c = common.max) != null ? _c : 100;
  entity.context.STATE.min = (_d = common.min) != null ? _d : 0;
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
      var _a2, _b2, _c2, _d2, _e, _f;
      const upCmd = ent.context.COMMANDS.find((a) => a.service === "open_cover");
      const downCmd = ent.context.COMMANDS.find((a) => a.service === "close_cover");
      if (ent.state === "open" || ent.state === "opening") {
        const setId = (_a2 = downCmd == null ? void 0 : downCmd.setId) != null ? _a2 : command.setId;
        const val = downCmd ? true : ent.context.STATE.invert ? (_b2 = ent.context.STATE.min) != null ? _b2 : 0 : (_c2 = ent.context.STATE.max) != null ? _c2 : 100;
        adapterData.adapter.setForeignState(
          setId,
          val,
          false,
          { user },
          (err) => err ? reject(err) : resolve()
        );
      } else {
        const setId = (_d2 = upCmd == null ? void 0 : upCmd.setId) != null ? _d2 : command.setId;
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
    entity.addID2entity(getState.id);
    slider.context.STATE.getId = getState.id;
    slider.addID2entity(getState.id);
  }
  return true;
}
function addTiltLevel(entity, control, objects, setStateName) {
  var _a, _b, _c, _d;
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
      min: (_c = common.min) != null ? _c : 0,
      max: (_d = common.max) != null ? _d : 100,
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
  entity.addID2entity(stateId);
  entity.attributes.supported_features |= 128;
  const getState = control.states.find((s) => s.id && s.name === setStateName.replace("SET", "ACTUAL"));
  if (getState == null ? void 0 : getState.id) {
    entity.context.ATTRIBUTES[0].getId = getState.id;
    entity.addID2entity(getState.id);
  }
  return true;
}
class CoverEntity extends import_baseEntity.BaseEntity {
  /**
   * Build a cover and (optionally) a companion slider for the given params.
   *
   * @param params - converter parameters
   * @returns [coverEntity, sliderEntity?] — slider only when a SET state was found.
   */
  static build(params) {
    const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
    const entity = new CoverEntity(friendlyName, room, func, objects[id], forcedEntityId);
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
  constructor(name, room, func, obj, forcedEntityId) {
    super(name, room, func, obj, "cover", forcedEntityId);
    this.attributes.device_class = "blind";
    this.context.STATE.setId = null;
    this.context.STATE.getId = null;
    this.attributes.supported_features = 0;
    this.attributes.icon = "mdi:window-shutter";
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CoverEntity
});
//# sourceMappingURL=coverEntity.js.map
