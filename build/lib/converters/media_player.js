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
var media_player_exports = {};
__export(media_player_exports, {
  MediaPlayerConverter: () => MediaPlayerConverter
});
module.exports = __toCommonJS(media_player_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_converter = __toESM(require("./converter"));
var import_utils = require("../entities/utils");
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
class MediaPlayerConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const { controls, objects, forcedEntityId, friendlyName, room, func } = params;
    const entity = (0, import_utils.processCommon)(friendlyName, room, func, objects[params.id], "media_player", forcedEntityId);
    entity.context.STATE = { getId: null };
    entity.context.ATTRIBUTES = [];
    entity.context.COMMANDS = [];
    entity.attributes.icon = "mdi:play-network";
    entity.attributes.media_content_type = "unknown";
    entity.attributes.supported_features = 0;
    let playCommand;
    let pauseCommand;
    let playPauseCommand;
    let stopCommand;
    let state = controls.states.find((s) => s.id && s.name === "STATE");
    if (state == null ? void 0 : state.id) {
      entity.context.STATE.setId = state.id;
      entity.context.STATE.getId = state.id;
      entity.context.STATE.getParser = (ent, _attrName, st) => {
        const s = st != null ? st : { val: null };
        if (s.val === true || s.val === 1 || s.val === "play") {
          ent.state = "playing";
        } else if (s.val === false || s.val === 0 || s.val === "pause") {
          ent.state = "paused";
        } else if (s.val === "stop" || s.val === 2) {
          ent.state = "idle";
        }
      };
      entity.context.STATE.historyParser = (_id, st) => {
        const val = st == null ? void 0 : st.val;
        if (val === true || val === 1 || val === "play") {
          return "playing";
        }
        if (val === false || val === 0 || val === "pause") {
          return "paused";
        }
        return "idle";
      };
      const stateObj = objects[state.id];
      const stateCommon = (_a = stateObj == null ? void 0 : stateObj.common) != null ? _a : {};
      if (stateCommon.write) {
        const type = (_b = stateCommon.type) != null ? _b : "boolean";
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
      (0, import_utils.addID2entity)(state.id, entity);
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
      entity.context.COMMANDS.push(playCommand);
      entity.attributes.supported_features = entity.attributes.supported_features | SUPPORT_PLAY;
    }
    if (pauseCommand) {
      entity.context.COMMANDS.push(pauseCommand);
      entity.attributes.supported_features = entity.attributes.supported_features | SUPPORT_PAUSE;
    }
    if (playPauseCommand) {
      entity.context.COMMANDS.push(playPauseCommand);
    }
    if (stopCommand) {
      entity.context.COMMANDS.push(stopCommand);
      entity.attributes.supported_features = entity.attributes.supported_features | SUPPORT_STOP;
    }
    state = controls.states.find((s) => s.id && s.name === "SEEK");
    if (state == null ? void 0 : state.id) {
      entity.context.COMMANDS.push({
        service: "media_seek",
        setId: state.id,
        parseCommand: (ent, command, data, user) => {
          const sd = data.service_data;
          const percent = sd.seek_position / ent.attributes.media_duration * 100;
          return adapterData.adapter.setForeignStateAsync(command.setId, percent, false, { user });
        }
      });
      entity.attributes.supported_features = entity.attributes.supported_features | SUPPORT_SEEK;
    }
    state = controls.states.find((s) => s.id && s.name === "SHUFFLE");
    if (state == null ? void 0 : state.id) {
      entity.context.COMMANDS.push({
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
      entity.context.ATTRIBUTES.push({ attribute: "shuffle", getId: state.id });
      (0, import_utils.addID2entity)(state.id, entity);
      entity.attributes.supported_features = entity.attributes.supported_features | SUPPORT_SHUFFLE_SET;
    }
    state = controls.states.find((s) => s.id && s.name === "REPEAT");
    if (state == null ? void 0 : state.id) {
      entity.context.COMMANDS.push({
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
      entity.context.ATTRIBUTES.push({
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
      (0, import_utils.addID2entity)(state.id, entity);
      entity.attributes.supported_features = entity.attributes.supported_features | SUPPORT_REPEAT_SET;
    }
    state = controls.states.find((s) => s.id && s.name === "NEXT");
    if (state == null ? void 0 : state.id) {
      const nextId = state.id;
      entity.context.COMMANDS.push({
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
      entity.attributes.supported_features = entity.attributes.supported_features | SUPPORT_NEXT_TRACK;
    }
    state = controls.states.find((s) => s.id && s.name === "PREV");
    if (state == null ? void 0 : state.id) {
      entity.context.COMMANDS.push({
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
      entity.attributes.supported_features = entity.attributes.supported_features | SUPPORT_PREVIOUS_TRACK;
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
      entity.attributes.supported_features = entity.attributes.supported_features | SUPPORT_VOLUME_SET | SUPPORT_VOLUME_BUTTONS;
      const volCommon = (_d = (_c = objects[setVolumeId]) == null ? void 0 : _c.common) != null ? _d : {};
      const min = (_e = volCommon.min) != null ? _e : 0;
      const max = (_f = volCommon.max) != null ? _f : 100;
      const step = (_g = volCommon.step) != null ? _g : (max - min) / 10;
      entity.context.COMMANDS.push({
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
      entity.context.COMMANDS.push({
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
      entity.context.COMMANDS.push({
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
      entity.context.ATTRIBUTES.push({
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
      entity.attributes.volume_level = 0;
      (0, import_utils.addID2entity)(state.id, entity);
    } else if (getVolumeId) {
      const volCommon = (_i = (_h = objects[getVolumeId]) == null ? void 0 : _h.common) != null ? _i : {};
      const min = (_j = volCommon.min) != null ? _j : 0;
      const max = (_k = volCommon.max) != null ? _k : 100;
      entity.context.ATTRIBUTES.push({
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
      (0, import_utils.addID2entity)(getVolumeId, entity);
    }
    state = controls.states.find((s) => s.id && s.name === "MUTE");
    if (state == null ? void 0 : state.id) {
      entity.context.ATTRIBUTES.push({ attribute: "is_volume_muted", getId: state.id });
      entity.context.COMMANDS.push({
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
      (0, import_utils.addID2entity)(state.id, entity);
      entity.attributes.supported_features = entity.attributes.supported_features | SUPPORT_VOLUME_MUTE;
    }
    state = controls.states.find((s) => s.id && s.name === "POWER");
    if (state == null ? void 0 : state.id) {
      const powerId = state.id;
      entity.context.COMMANDS.push({
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
      entity.context.COMMANDS.push({
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
      entity.context.COMMANDS.push({
        service: "toggle",
        setId: powerId,
        parseCommand: async (_ent, command, _data, user) => {
          const curr = await adapterData.adapter.getForeignStateAsync(command.setId);
          const val = !(curr == null ? void 0 : curr.val);
          return adapterData.adapter.setForeignStateAsync(command.setId, val, false, { user });
        }
      });
      entity.context.ATTRIBUTES.push({
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
      entity.attributes.supported_features = entity.attributes.supported_features | SUPPORT_TURN_ON | SUPPORT_TURN_OFF;
      (0, import_utils.addID2entity)(powerId, entity);
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
        entity.context.ATTRIBUTES.push({ attribute: attr, getId: state.id });
        (0, import_utils.addID2entity)(state.id, entity);
      }
    }
    state = controls.states.find((s) => s.id && s.name === "ELAPSED");
    if (state == null ? void 0 : state.id) {
      entity.context.ATTRIBUTES.push({
        attribute: "media_position",
        getId: state.id,
        getParser: (ent, _attr, st) => {
          if (st) {
            ent.attributes.media_position = st.val;
            ent.attributes.media_position_updated_at = st.lc;
          }
        }
      });
      (0, import_utils.addID2entity)(state.id, entity);
    }
    state = controls.states.find((s) => s.id && s.name === "COVER");
    if (state == null ? void 0 : state.id) {
      entity.context.ATTRIBUTES.push({
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
      (0, import_utils.addID2entity)(state.id, entity);
    }
    return [entity];
  }
}
import_converter.default.converters[import_type_detector.Types.media] = MediaPlayerConverter;
adapterData.services.media_player = {
  turn_on: {
    name: "Turn on",
    description: "Turns on the power of the media player.",
    fields: {},
    target: { entity: [{ domain: ["media_player"], supported_features: [128] }] }
  },
  turn_off: {
    name: "Turn off",
    description: "Turns off the power of the media player.",
    fields: {},
    target: { entity: [{ domain: ["media_player"], supported_features: [256] }] }
  },
  toggle: {
    name: "Toggle",
    description: "Toggles a media player on/off.",
    fields: {},
    target: { entity: [{ domain: ["media_player"], supported_features: [384] }] }
  },
  volume_up: {
    name: "Turn up volume",
    description: "Turns up the volume.",
    fields: {},
    target: { entity: [{ domain: ["media_player"], supported_features: [4, 1024] }] }
  },
  volume_down: {
    name: "Turn down volume",
    description: "Turns down the volume.",
    fields: {},
    target: { entity: [{ domain: ["media_player"], supported_features: [4, 1024] }] }
  },
  media_play_pause: {
    name: "Play/Pause",
    description: "Toggles play/pause.",
    fields: {},
    target: { entity: [{ domain: ["media_player"], supported_features: [16385] }] }
  },
  media_play: {
    name: "Play",
    description: "Starts playing.",
    fields: {},
    target: { entity: [{ domain: ["media_player"], supported_features: [16384] }] }
  },
  media_pause: {
    name: "Pause",
    description: "Pauses.",
    fields: {},
    target: { entity: [{ domain: ["media_player"], supported_features: [1] }] }
  },
  media_stop: {
    name: "Stop",
    description: "Stops playing.",
    fields: {},
    target: { entity: [{ domain: ["media_player"], supported_features: [4096] }] }
  },
  media_next_track: {
    name: "Next",
    description: "Selects the next track.",
    fields: {},
    target: { entity: [{ domain: ["media_player"], supported_features: [32] }] }
  },
  media_previous_track: {
    name: "Previous",
    description: "Selects the previous track.",
    fields: {},
    target: { entity: [{ domain: ["media_player"], supported_features: [16] }] }
  },
  volume_set: {
    name: "Set volume",
    description: "Sets the volume level.",
    fields: {
      volume_level: {
        required: true,
        selector: { number: { min: 0, max: 1, step: 0.01 } },
        name: "Level",
        description: "The volume. 0 is inaudible, 1 is the maximum volume."
      }
    },
    target: { entity: [{ domain: ["media_player"], supported_features: [4] }] }
  },
  volume_mute: {
    name: "Mute/unmute volume",
    description: "Mutes or unmutes the media player.",
    fields: {
      is_volume_muted: {
        required: true,
        selector: { boolean: null },
        name: "Muted",
        description: "Defines whether or not it is muted."
      }
    },
    target: { entity: [{ domain: ["media_player"], supported_features: [8] }] }
  },
  media_seek: {
    name: "Seek",
    description: "Allows you to go to a different part of the media that is currently playing.",
    fields: {
      seek_position: {
        required: true,
        selector: {
          number: {
            min: 0,
            // eslint-disable-next-line no-loss-of-precision
            max: 9223372036854776e3,
            step: 0.01,
            mode: "box"
          }
        },
        name: "Position",
        description: "Target position in the currently playing media. The format is platform dependent."
      }
    },
    target: { entity: [{ domain: ["media_player"], supported_features: [2] }] }
  },
  shuffle_set: {
    name: "Shuffle",
    description: "Playback mode that selects the media in randomized order.",
    fields: {
      shuffle: {
        required: true,
        selector: { boolean: null },
        name: "Shuffle",
        description: "Whether or not shuffle mode is enabled."
      }
    },
    target: { entity: [{ domain: ["media_player"], supported_features: [32768] }] }
  },
  repeat_set: {
    name: "Repeat",
    description: "Playback mode that plays the media in a loop.",
    fields: {
      repeat: {
        required: true,
        selector: {
          select: { options: ["off", "all", "one"], translation_key: "repeat" }
        },
        name: "Repeat mode",
        description: "Repeat mode to set."
      }
    },
    target: { entity: [{ domain: ["media_player"], supported_features: [262144] }] }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MediaPlayerConverter
});
//# sourceMappingURL=media_player.js.map
