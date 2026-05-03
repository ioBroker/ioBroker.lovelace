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
var camera_exports = {};
__export(camera_exports, {
  CameraConverter: () => CameraConverter
});
module.exports = __toCommonJS(camera_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_converter = __toESM(require("./converter"));
var import_cameraEntity = require("../entities/cameraEntity");
const adapterData = require("../../../lib/dataSingleton");
class CameraConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    return [new import_cameraEntity.CameraEntity(params)];
  }
}
import_converter.default.converters[import_type_detector.Types.image] = CameraConverter;
adapterData.services.camera = {
  enable_motion_detection: {
    name: "Enable motion detection",
    description: "Enables the motion detection.",
    fields: {},
    target: { entity: [{ domain: ["camera"] }] }
  },
  disable_motion_detection: {
    name: "Disable motion detection",
    description: "Disables the motion detection.",
    fields: {},
    target: { entity: [{ domain: ["camera"] }] }
  },
  turn_off: {
    name: "Turn off",
    description: "Turns off the camera.",
    fields: {},
    target: { entity: [{ domain: ["camera"] }] }
  },
  turn_on: {
    name: "Turn on",
    description: "Turns on the camera.",
    fields: {},
    target: { entity: [{ domain: ["camera"] }] }
  },
  snapshot: {
    name: "Take snapshot",
    description: "Takes a snapshot from a camera.",
    fields: {
      filename: {
        required: true,
        example: "/tmp/snapshot_{{ entity_id.name }}.jpg",
        selector: { text: null },
        name: "Filename",
        description: "Template of a filename. Variable available is `entity_id`."
      }
    },
    target: { entity: [{ domain: ["camera"] }] }
  },
  play_stream: {
    name: "Play stream",
    description: "Plays the camera stream on a supported media player.",
    fields: {
      media_player: {
        required: true,
        selector: { entity: { domain: "media_player" } },
        name: "Media player",
        description: "Media players to stream to."
      },
      format: {
        default: "hls",
        selector: { select: { options: ["hls"] } },
        name: "Format",
        description: "Stream format supported by the media player."
      }
    },
    target: { entity: [{ domain: ["camera"] }] }
  },
  record: {
    name: "Record",
    description: "Creates a recording of a live camera feed.",
    fields: {
      filename: {
        required: true,
        example: "/tmp/snapshot_{{ entity_id.name }}.mp4",
        selector: { text: null },
        name: "Filename",
        description: "Template of a filename. Variable available is `entity_id`."
      },
      duration: {
        default: 30,
        selector: { number: { min: 1, max: 3600, unit_of_measurement: "seconds" } },
        name: "Duration",
        description: "Planned duration of the recording. The actual duration may vary."
      },
      lookback: {
        default: 0,
        selector: { number: { min: 0, max: 300, unit_of_measurement: "seconds" } },
        name: "Lookback",
        description: "Planned lookback period to include in the recording (in addition to the duration). Only available if there is currently an active HLS stream. The actual length of the lookback period may vary."
      }
    },
    target: { entity: [{ domain: ["camera"] }] }
  }
};
delete adapterData.services.camera;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CameraConverter
});
//# sourceMappingURL=camera.js.map
