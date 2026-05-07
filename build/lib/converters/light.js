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
var light_exports = {};
__export(light_exports, {
  LightConverter: () => LightConverter,
  processManualEntity: () => processManualEntity
});
module.exports = __toCommonJS(light_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_converter = __toESM(require("./converter"));
var import_lightEntity = require("../entities/lightEntity");
const adapterData = require("../../../lib/dataSingleton");
class LightConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    return import_lightEntity.LightEntity.build(params);
  }
}
import_converter.default.converters[import_type_detector.Types.light] = LightConverter;
import_converter.default.converters[import_type_detector.Types.dimmer] = LightConverter;
import_converter.default.converters[import_type_detector.Types.ct] = LightConverter;
import_converter.default.converters[import_type_detector.Types.hue] = LightConverter;
import_converter.default.converters[import_type_detector.Types.rgb] = LightConverter;
import_converter.default.converters[import_type_detector.Types.rgbSingle] = LightConverter;
function processManualEntity(id, obj, entity, objects, custom) {
  var _a, _b;
  const states = (_a = custom.states) != null ? _a : {
    state: id
  };
  const objCommon = (_b = obj == null ? void 0 : obj.common) != null ? _b : {};
  if (obj && objCommon.type === "number") {
    states.brightness = id;
  }
  return (0, import_lightEntity.applyLightStates)(states, objects, entity);
}
adapterData.services.light = {
  turn_on: {
    name: "Turn on",
    description: "Turn on one or more lights and adjust properties of the light, even when they are turned on already.",
    fields: {
      transition: {
        filter: { supported_features: [32] },
        selector: { number: { min: 0, max: 300, unit_of_measurement: "seconds" } },
        name: "Transition",
        description: "Duration it takes to get to next state."
      },
      rgb_color: {
        filter: { attribute: { supported_color_modes: ["hs", "xy", "rgb", "rgbw", "rgbww"] } },
        selector: { color_rgb: null },
        name: "Color",
        description: "The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue."
      },
      rgbw_color: {
        filter: { attribute: { supported_color_modes: ["hs", "xy", "rgb", "rgbw", "rgbww"] } },
        advanced: true,
        example: "[255, 100, 100, 50]",
        selector: { object: null },
        name: "RGBW-color",
        description: "The color in RGBW format. A list of four integers between 0 and 255 representing the values of red, green, blue, and white."
      },
      hs_color: {
        filter: { attribute: { supported_color_modes: ["hs", "xy", "rgb", "rgbw", "rgbww"] } },
        advanced: true,
        example: "[300, 70]",
        selector: { object: null },
        name: "Hue/Sat color",
        description: "Color in hue/sat format. A list of two integers. Hue is 0-360 and Sat is 0-100."
      },
      xy_color: {
        filter: { attribute: { supported_color_modes: ["hs", "xy", "rgb", "rgbw", "rgbww"] } },
        advanced: true,
        example: "[0.52, 0.43]",
        selector: { object: null },
        name: "XY-color",
        description: "Color in XY-format. A list of two decimal numbers between 0 and 1."
      },
      color_temp: {
        filter: { attribute: { supported_color_modes: ["color_temp", "hs", "xy", "rgb", "rgbw", "rgbww"] } },
        selector: { color_temp: { unit: "mired", min: 153, max: 500 } },
        name: "Color temperature",
        description: "Color temperature in mireds."
      },
      color_temp_kelvin: {
        filter: { attribute: { supported_color_modes: ["color_temp", "hs", "xy", "rgb", "rgbw", "rgbww"] } },
        selector: { color_temp: { unit: "kelvin", min: 2e3, max: 6500 } },
        name: "Color temperature",
        description: "Color temperature in Kelvin."
      },
      brightness: {
        filter: {
          attribute: {
            supported_color_modes: ["brightness", "color_temp", "hs", "xy", "rgb", "rgbw", "rgbww"]
          }
        },
        selector: { number: { min: 0, max: 255 } },
        name: "Brightness value",
        description: "Number indicating brightness, where 0 turns the light off, 1 is the minimum brightness, and 255 is the maximum brightness."
      },
      brightness_pct: {
        filter: {
          attribute: {
            supported_color_modes: ["brightness", "color_temp", "hs", "xy", "rgb", "rgbw", "rgbww"]
          }
        },
        selector: { number: { min: 0, max: 100, unit_of_measurement: "%" } },
        name: "Brightness",
        description: "Number indicating percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness."
      },
      effect: {
        selector: { text: null },
        name: "Effect",
        description: "Light effect."
      }
    },
    target: { entity: [{ domain: ["light"] }] }
  },
  turn_off: {
    name: "Turn off",
    description: "Turn off one or more lights.",
    fields: {
      transition: {
        filter: { supported_features: [32] },
        selector: { number: { min: 0, max: 300, unit_of_measurement: "seconds" } },
        name: "Transition",
        description: "Duration it takes to get to next state."
      }
    },
    target: { entity: [{ domain: ["light"] }] }
  },
  toggle: {
    name: "Toggle",
    description: "Toggles one or more lights, from on to off, or, off to on.",
    fields: {
      transition: {
        filter: { supported_features: [32] },
        selector: { number: { min: 0, max: 300, unit_of_measurement: "seconds" } },
        name: "Transition",
        description: "Duration it takes to get to next state."
      }
    },
    target: { entity: [{ domain: ["light"] }] }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LightConverter,
  processManualEntity
});
//# sourceMappingURL=light.js.map
