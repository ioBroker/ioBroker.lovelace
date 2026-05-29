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
var import_mediaPlayerEntity = require("../entities/mediaPlayerEntity");
const adapterData = require("../../../lib/dataSingleton");
class MediaPlayerConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    return [new import_mediaPlayerEntity.MediaPlayerEntity(params)];
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
