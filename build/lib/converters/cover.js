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
var import_coverEntity = require("../entities/coverEntity");
const adapterData = require("../../../lib/dataSingleton");
class CoverConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    return import_coverEntity.CoverEntity.build(params);
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
