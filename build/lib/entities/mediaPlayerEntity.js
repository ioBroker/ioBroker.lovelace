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
var mediaPlayerEntity_exports = {};
__export(mediaPlayerEntity_exports, {
  MediaPlayerEntity: () => MediaPlayerEntity
});
module.exports = __toCommonJS(mediaPlayerEntity_exports);
var import_baseEntity = require("./baseEntity");
const adapterData = require("../../../lib/dataSingleton");
const SUPPORT_PAUSE = 1;
const SUPPORT_SEEK = 2;
const SUPPORT_VOLUME_SET = 4;
const SUPPORT_VOLUME_MUTE = 8;
const SUPPORT_PREVIOUS_TRACK = 16;
const SUPPORT_NEXT_TRACK = 32;
const SUPPORT_TURN_ON = 128;
const SUPPORT_TURN_OFF = 256;
const SUPPORT_VOLUME_BUTTONS = 1024;
const SUPPORT_STOP = 4096;
const SUPPORT_PLAY = 16384;
const SUPPORT_SHUFFLE_SET = 32768;
const SUPPORT_REPEAT_SET = 262144;
function parsePlayPauseStopCommand(entity, command, _data, user) {
  let id = command.setId;
  let val = command.val;
  switch (command.service) {
    case "media_play":
      entity.state = "playing";
      break;
    case "media_pause":
      entity.state = "paused";
      break;
    case "media_play_pause":
      entity.state = entity.state === "playing" ? "paused" : "playing";
      if (entity.state === "playing") {
        id = command.playId;
        val = command.playVal;
      } else {
        id = command.pauseId;
        val = command.pauseVal;
      }
      break;
    case "media_stop":
      entity.state = "idle";
      break;
  }
  return adapterData.adapter.setForeignStateAsync(id, val, false, { user });
}
class MediaPlayerEntity extends import_baseEntity.BaseEntity {
  /** @param params - converter parameters */
  constructor(params) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
    super(friendlyName, room, func, objects[id], "media_player", forcedEntityId);
    this.context.STATE.getId = null;
    this.context.ATTRIBUTES = [];
    this.context.COMMANDS = [];
    this.attributes.icon = "mdi:play-network";
    this.attributes.media_content_type = "unknown";
    this.attributes.supported_features = 0;
    let playCommand;
    let pauseCommand;
    let playPauseCommand;
    let stopCommand;
    let state = controls.states.find((s) => s.id && s.name === "STATE");
    if (state == null ? void 0 : state.id) {
      this.context.STATE.setId = state.id;
      this.context.STATE.getId = state.id;
      this.context.STATE.getParser = (ent, _attrName, st) => {
        const s = st != null ? st : { val: null };
        if (s.val === true || s.val === 1 || s.val === "play") {
          ent.state = "playing";
        } else if (s.val === false || s.val === 0 || s.val === "pause") {
          ent.state = "paused";
        } else if (s.val === "stop" || s.val === 2) {
          ent.state = "idle";
        }
      };
      this.context.STATE.historyParser = (_id, val) => {
        if (val === true || val === 1 || val === "play") {
          return "playing";
        }
        if (val === false || val === 0 || val === "pause") {
          return "paused";
        }
        return "idle";
      };
      const stateCommon = (_b = (_a = objects[state.id]) == null ? void 0 : _a.common) != null ? _b : {};
      if (stateCommon.write) {
        const type = (_c = stateCommon.type) != null ? _c : "boolean";
        playCommand = {
          service: "media_play",
          setId: state.id,
          val: type === "boolean" ? true : 1,
          parseCommand: parsePlayPauseStopCommand
        };
        pauseCommand = {
          service: "media_pause",
          setId: state.id,
          val: type === "boolean" ? false : 0,
          parseCommand: parsePlayPauseStopCommand
        };
        playPauseCommand = {
          service: "media_play_pause",
          setId: state.id,
          pauseId: state.id,
          playId: state.id,
          pauseVal: pauseCommand.val,
          playVal: playCommand.val,
          parseCommand: parsePlayPauseStopCommand
        };
        if (type === "number") {
          stopCommand = {
            service: "media_stop",
            setId: state.id,
            val: 2,
            parseCommand: parsePlayPauseStopCommand
          };
        }
      }
      this.addID2entity(state.id);
    }
    state = controls.states.find((s) => s.id && s.name === "PLAY");
    if (state == null ? void 0 : state.id) {
      playCommand = {
        service: "media_play",
        setId: state.id,
        val: true,
        parseCommand: parsePlayPauseStopCommand
      };
      if (!playPauseCommand) {
        playPauseCommand = {
          service: "media_play_pause",
          setId: state.id,
          playId: state.id,
          playVal: true,
          parseCommand: parsePlayPauseStopCommand
        };
      } else {
        playPauseCommand.playId = state.id;
        playPauseCommand.playVal = true;
      }
    }
    state = controls.states.find((s) => s.id && s.name === "PAUSE");
    if (state == null ? void 0 : state.id) {
      pauseCommand = {
        service: "media_pause",
        setId: state.id,
        val: true,
        parseCommand: parsePlayPauseStopCommand
      };
      if (!playPauseCommand) {
        playPauseCommand = {
          service: "media_play_pause",
          setId: state.id,
          pauseId: state.id,
          pauseVal: true,
          parseCommand: parsePlayPauseStopCommand
        };
      } else {
        playPauseCommand.pauseId = state.id;
        playPauseCommand.pauseVal = true;
      }
    }
    state = controls.states.find((s) => s.id && s.name === "STOP");
    if (state == null ? void 0 : state.id) {
      stopCommand = {
        service: "media_stop",
        setId: state.id,
        val: true,
        parseCommand: parsePlayPauseStopCommand
      };
    }
    if (playCommand) {
      this.context.COMMANDS.push(playCommand);
      this.attributes.supported_features = this.attributes.supported_features | SUPPORT_PLAY;
    }
    if (pauseCommand) {
      this.context.COMMANDS.push(pauseCommand);
      this.attributes.supported_features = this.attributes.supported_features | SUPPORT_PAUSE;
    }
    if (playPauseCommand) {
      this.context.COMMANDS.push(playPauseCommand);
    }
    if (stopCommand) {
      this.context.COMMANDS.push(stopCommand);
      this.attributes.supported_features = this.attributes.supported_features | SUPPORT_STOP;
    }
    state = controls.states.find((s) => s.id && s.name === "SEEK");
    if (state == null ? void 0 : state.id) {
      this.context.COMMANDS.push({
        service: "media_seek",
        setId: state.id,
        parseCommand: (ent, command, data, user) => {
          const sd = data.service_data;
          const percent = sd.seek_position / ent.attributes.media_duration * 100;
          return adapterData.adapter.setForeignStateAsync(command.setId, percent, false, { user });
        }
      });
      this.attributes.supported_features = this.attributes.supported_features | SUPPORT_SEEK;
    }
    state = controls.states.find((s) => s.id && s.name === "SHUFFLE");
    if (state == null ? void 0 : state.id) {
      this.context.COMMANDS.push({
        service: "shuffle_set",
        setId: state.id,
        parseCommand: (_ent, command, data, user) => {
          const shuffle = data.service_data.shuffle;
          return adapterData.adapter.setForeignStateAsync(
            command.setId,
            shuffle,
            false,
            { user }
          );
        }
      });
      this.context.ATTRIBUTES.push({ attribute: "shuffle", getId: state.id });
      this.addID2entity(state.id);
      this.attributes.supported_features = this.attributes.supported_features | SUPPORT_SHUFFLE_SET;
    }
    state = controls.states.find((s) => s.id && s.name === "REPEAT");
    if (state == null ? void 0 : state.id) {
      this.context.COMMANDS.push({
        service: "repeat_set",
        setId: state.id,
        parseCommand: (_ent, command, data, user) => {
          const repeatIn = data.service_data.repeat;
          let target = 0;
          if (repeatIn === "all") {
            target = 1;
          } else if (repeatIn === "one") {
            target = 2;
          }
          return adapterData.adapter.setForeignStateAsync(command.setId, target, false, { user });
        }
      });
      this.context.ATTRIBUTES.push({
        attribute: "repeat",
        getId: state.id,
        getParser: (ent, _attr, st) => {
          if (st) {
            if (st.val === 0) {
              ent.attributes.repeat = "off";
            } else if (st.val === 1) {
              ent.attributes.repeat = "all";
            } else if (st.val === 2) {
              ent.attributes.repeat = "one";
            }
          }
        }
      });
      this.addID2entity(state.id);
      this.attributes.supported_features = this.attributes.supported_features | SUPPORT_REPEAT_SET;
    }
    state = controls.states.find((s) => s.id && s.name === "NEXT");
    if (state == null ? void 0 : state.id) {
      const nextId = state.id;
      this.context.COMMANDS.push({
        service: "media_next_track",
        setId: nextId,
        parseCommand: (_ent, command, _data, user) => new Promise(
          (resolve, reject) => adapterData.adapter.setForeignState(
            command.setId,
            true,
            false,
            { user },
            (err) => err ? reject(err) : resolve()
          )
        )
      });
      this.attributes.supported_features = this.attributes.supported_features | SUPPORT_NEXT_TRACK;
    }
    state = controls.states.find((s) => s.id && s.name === "PREV");
    if (state == null ? void 0 : state.id) {
      this.context.COMMANDS.push({
        service: "media_previous_track",
        setId: state.id,
        parseCommand: (_ent, command, _data, user) => new Promise(
          (resolve, reject) => adapterData.adapter.setForeignState(
            command.setId,
            true,
            false,
            { user },
            (err) => err ? reject(err) : resolve()
          )
        )
      });
      this.attributes.supported_features = this.attributes.supported_features | SUPPORT_PREVIOUS_TRACK;
    }
    let getVolumeId;
    state = controls.states.find((s) => s.id && s.name === "VOLUME_ACTUAL");
    if (state == null ? void 0 : state.id) {
      getVolumeId = state.id;
    }
    state = controls.states.find((s) => s.id && s.name === "VOLUME");
    if (state == null ? void 0 : state.id) {
      const setVolumeId = state.id;
      getVolumeId = getVolumeId != null ? getVolumeId : setVolumeId;
      this.attributes.supported_features = this.attributes.supported_features | SUPPORT_VOLUME_SET | SUPPORT_VOLUME_BUTTONS;
      const volCommon = (_e = (_d = objects[setVolumeId]) == null ? void 0 : _d.common) != null ? _e : {};
      const min = (_f = volCommon.min) != null ? _f : 0;
      const max = (_g = volCommon.max) != null ? _g : 100;
      const step = (_h = volCommon.step) != null ? _h : (max - min) / 10;
      this.context.COMMANDS.push({
        service: "volume_down",
        setId: setVolumeId,
        getId: getVolumeId,
        min,
        max,
        step,
        parseCommand: async (_ent, command, _data, user) => {
          const st = await adapterData.adapter.getForeignStateAsync(command.getId);
          let val = st && st.val || 0;
          val -= command.step;
          if (val < command.min) {
            val = command.min;
          }
          await adapterData.adapter.setForeignStateAsync(command.setId, val, false, { user });
        }
      });
      this.context.COMMANDS.push({
        service: "volume_up",
        setId: setVolumeId,
        getId: getVolumeId,
        min,
        max,
        step,
        parseCommand: async (_ent, command, _data, user) => {
          const st = await adapterData.adapter.getForeignStateAsync(command.getId);
          let val = st && st.val || 0;
          val += command.step;
          if (val > command.max) {
            val = command.max;
          }
          await adapterData.adapter.setForeignStateAsync(command.setId, val, false, { user });
        }
      });
      this.context.COMMANDS.push({
        service: "volume_set",
        setId: setVolumeId,
        min,
        max,
        parseCommand: (_ent, command, data, user) => new Promise((resolve, reject) => {
          const sd = data.service_data;
          let volume = sd.value !== void 0 ? sd.value : sd.volume_level;
          volume = volume * command.max + command.min;
          adapterData.adapter.setForeignState(
            command.setId,
            volume,
            false,
            { user },
            (e) => e ? reject(e) : resolve()
          );
        })
      });
      this.context.ATTRIBUTES.push({
        attribute: "volume_level",
        getId: state.id,
        min,
        max,
        getParser: (ent, attr, st) => {
          const s = st != null ? st : { val: null };
          if (s.val !== null) {
            ent.attributes.volume_level = (s.val - attr.min) / attr.max;
          }
        }
      });
      this.attributes.volume_level = 0;
      this.addID2entity(state.id);
    } else if (getVolumeId) {
      const volCommon = (_j = (_i = objects[getVolumeId]) == null ? void 0 : _i.common) != null ? _j : {};
      const min = (_k = volCommon.min) != null ? _k : 0;
      const max = (_l = volCommon.max) != null ? _l : 100;
      this.context.ATTRIBUTES.push({
        attribute: "volume_level",
        getId: getVolumeId,
        min,
        max,
        getParser: (ent, attr, st) => {
          const s = st != null ? st : { val: null };
          if (s.val !== null) {
            ent.attributes.volume_level = (s.val - attr.min) / attr.max;
          }
        }
      });
      this.addID2entity(getVolumeId);
    }
    state = controls.states.find((s) => s.id && s.name === "MUTE");
    if (state == null ? void 0 : state.id) {
      this.context.ATTRIBUTES.push({ attribute: "is_volume_muted", getId: state.id });
      this.context.COMMANDS.push({
        service: "volume_mute",
        setId: state.id,
        parseCommand: async (ent, command, data, user) => {
          const sd = data.service_data;
          adapterData.log.debug(
            `Got volume_mute command: ${JSON.stringify(command)} controlling mute with ${sd.is_volume_muted} from ${JSON.stringify(data)}`
          );
          ent.attributes.is_volume_muted = sd.is_volume_muted;
          return adapterData.adapter.setForeignStateAsync(command.setId, sd.is_volume_muted, false, {
            user
          });
        }
      });
      this.addID2entity(state.id);
      this.attributes.supported_features = this.attributes.supported_features | SUPPORT_VOLUME_MUTE;
    }
    state = controls.states.find((s) => s.id && s.name === "POWER");
    if (state == null ? void 0 : state.id) {
      const powerId = state.id;
      this.context.COMMANDS.push({
        service: "turn_on",
        setId: powerId,
        parseCommand: (_ent, command, _data, user) => new Promise(
          (resolve, reject) => adapterData.adapter.setForeignState(
            command.setId,
            true,
            false,
            { user },
            (e) => e ? reject(e) : resolve()
          )
        )
      });
      this.context.COMMANDS.push({
        service: "turn_off",
        setId: powerId,
        parseCommand: (_ent, command, _data, user) => new Promise(
          (resolve, reject) => adapterData.adapter.setForeignState(
            command.setId,
            false,
            false,
            { user },
            (e) => e ? reject(e) : resolve()
          )
        )
      });
      this.context.COMMANDS.push({
        service: "toggle",
        setId: powerId,
        parseCommand: async (_ent, command, _data, user) => {
          const curr = await adapterData.adapter.getForeignStateAsync(command.setId);
          const val = !(curr == null ? void 0 : curr.val);
          return adapterData.adapter.setForeignStateAsync(command.setId, val, false, { user });
        }
      });
      this.context.ATTRIBUTES.push({
        attribute: "power",
        getId: powerId,
        getParser: (ent, _attr, st) => {
          const s = st != null ? st : { val: null };
          if (s.val) {
            ent.attributes.power = "on";
          } else {
            ent.attributes.power = "off";
            ent.state = "off";
          }
        }
      });
      this.attributes.supported_features = this.attributes.supported_features | SUPPORT_TURN_ON | SUPPORT_TURN_OFF;
      this.addID2entity(powerId);
    }
    for (const [name, attr] of [
      ["ARTIST", "media_artist"],
      ["TITLE", "media_title"],
      ["DURATION", "media_duration"],
      ["EPISODE", "media_episode"],
      ["SEASON", "media_season"]
    ]) {
      state = controls.states.find((s) => s.id && s.name === name);
      if (state == null ? void 0 : state.id) {
        this.context.ATTRIBUTES.push({ attribute: attr, getId: state.id });
        this.addID2entity(state.id);
      }
    }
    state = controls.states.find((s) => s.id && s.name === "ELAPSED");
    if (state == null ? void 0 : state.id) {
      this.context.ATTRIBUTES.push({
        attribute: "media_position",
        getId: state.id,
        getParser: (ent, _attr, st) => {
          if (st) {
            ent.attributes.media_position = st.val;
            ent.attributes.media_position_updated_at = st.lc;
          }
        }
      });
      this.addID2entity(state.id);
    }
    state = controls.states.find((s) => s.id && s.name === "COVER");
    if (state == null ? void 0 : state.id) {
      this.context.ATTRIBUTES.push({
        attribute: "entity_picture",
        getId: state.id,
        getParser: (ent, _attr, st) => {
          var _a2, _b2;
          (_a2 = adapterData.server) == null ? void 0 : _a2.removeRequestableFile(
            ent.attributes.entity_picture
          );
          ent.attributes.entity_picture = st == null ? void 0 : st.val;
          if (ent.attributes.entity_picture && ent.attributes.entity_picture.startsWith("/")) {
            if (!ent.attributes.entity_picture.includes("?")) {
              ent.attributes.entity_picture = `${ent.attributes.entity_picture}?ts=${Date.now()}`;
            }
            (_b2 = adapterData.server) == null ? void 0 : _b2.addRequestableFile(ent.attributes.entity_picture);
          }
        }
      });
      this.addID2entity(state.id);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MediaPlayerEntity
});
//# sourceMappingURL=mediaPlayerEntity.js.map
