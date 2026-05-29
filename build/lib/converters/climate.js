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
var climate_exports = {};
__export(climate_exports, {
  ClimateConverter: () => ClimateConverter,
  processManualEntity: () => processManualEntity,
  supportedFlags: () => import_climateEntity.supportedFlags
});
module.exports = __toCommonJS(climate_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_converter = __toESM(require("./converter"));
var import_climateEntity = require("../entities/climateEntity");
const adapterData = require("../../../lib/dataSingleton");
class ClimateConverter extends import_converter.default {
  /** @inheritdoc */
  static convertEntities(params) {
    return import_climateEntity.ClimateEntity.build(params);
  }
}
import_converter.default.converters[import_type_detector.Types.thermostat] = ClimateConverter;
import_converter.default.converters[import_type_detector.Types.airCondition] = ClimateConverter;
function processManualEntity(_id, _obj, entity, objects, custom) {
  var _a;
  const states = (_a = custom.states) != null ? _a : { temperature: _id };
  (0, import_climateEntity.applyClimateStates)(states, objects, entity);
  return [entity];
}
adapterData.services.climate = {
  set_temperature: {
    name: "Set temperature",
    description: "Sets the temperature of a climate entity.",
    fields: {
      temperature: {
        required: true,
        selector: { number: null },
        name: "Temperature",
        description: "The target temperature to set."
      }
    },
    target: { entity: [{ domain: ["climate"] }] }
  },
  set_hvac_mode: {
    name: "Set HVAC mode",
    description: "Sets the HVAC mode of a climate entity.",
    fields: {
      hvac_mode: {
        required: true,
        selector: {
          select: {
            options: ["off", "heat", "cool", "auto", "dry", "fan_only"],
            translation_key: "hvac_mode"
          }
        },
        name: "HVAC mode",
        description: "The target HVAC mode to set."
      }
    },
    target: { entity: [{ domain: ["climate"] }] }
  },
  set_preset_mode: {
    name: "Set preset mode",
    description: "Sets the preset mode of a climate entity.",
    fields: {
      preset_mode: {
        required: true,
        selector: {
          select: { options: ["boost", "party"], translation_key: "preset_mode" }
        },
        name: "Preset mode",
        description: "The target preset mode to set."
      }
    },
    target: { entity: [{ domain: ["climate"] }] }
  },
  set_swing_mode: {
    name: "Set swing mode",
    description: "Sets the swing mode of a climate entity.",
    fields: {
      swing_mode: {
        required: true,
        selector: {
          select: { options: ["off", "on"], translation_key: "swing_mode" }
        },
        name: "Swing mode",
        description: "The target swing mode to set."
      }
    },
    target: { entity: [{ domain: ["climate"] }] }
  },
  set_fan_mode: {
    name: "Set fan mode",
    description: "Sets the fan mode of a climate entity.",
    fields: {
      preset_mode: {
        required: true,
        selector: { number: null },
        name: "Preset mode",
        description: "The target preset mode to set."
      }
    },
    target: { entity: [{ domain: ["climate"] }] }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ClimateConverter,
  processManualEntity,
  supportedFlags
});
//# sourceMappingURL=climate.js.map
