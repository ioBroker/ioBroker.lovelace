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
var lightEntity_exports = {};
__export(lightEntity_exports, {
  LightEntity: () => LightEntity,
  applyLightStates: () => applyLightStates,
  convertControlToStates: () => convertControlToStates
});
module.exports = __toCommonJS(lightEntity_exports);
var import_type_detector = require("@iobroker/type-detector");
var import_baseEntity = require("./baseEntity");
const adapterData = require("../../../lib/dataSingleton");
const ONOFF = "onoff";
const BRIGHTNESS = "brightness";
const COLOR_TEMP = "color_temp";
const HS = "hs";
const RGB = "rgb";
const RGBW = "rgbw";
const SUPPORT_EFFECT = 4;
const attributesToNullOnOff = [
  "color_mode",
  "brightness",
  "color_temp",
  "color_temp_kelvin",
  "hs_color",
  "rgb_color",
  "rgbw_color",
  "xy_color",
  "effect"
];
function clearOrRestoreAttributes(entity) {
  const stored = entity.context.STATE.storedValues;
  if (entity.state === "on") {
    for (const attr of attributesToNullOnOff) {
      if (entity.attributes[attr] === null || entity.attributes[attr] === void 0) {
        const val = stored[attr];
        if (val !== void 0 && val !== null) {
          if (Array.isArray(val)) {
            const filtered = val.filter((v) => v !== null && v !== void 0);
            if (filtered.length > 0) {
              entity.attributes[attr] = filtered;
            }
          } else {
            entity.attributes[attr] = val;
          }
        }
      }
    }
    adapterData.log.debug(`Restored old values from previous switch off: ${JSON.stringify(entity.attributes)}`);
  } else {
    for (const attr of attributesToNullOnOff) {
      if (entity.attributes[attr] !== void 0) {
        stored[attr] = entity.attributes[attr];
        entity.attributes[attr] = null;
      }
    }
    adapterData.log.debug(
      `Stored old values for next switch on: ${JSON.stringify(entity.context.STATE.storedValues)}`
    );
  }
}
function lightAddState(states, objects, entity) {
  var _a;
  const getState = states.stateRead;
  entity.context.STATE.storedValues = {};
  entity.context.STATE.getParser = (ent, _attrName, state) => {
    const s = state != null ? state : { val: null };
    const oldState = ent.state;
    ent.state = s.val ? "on" : "off";
    if (oldState !== ent.state) {
      clearOrRestoreAttributes(ent);
    }
  };
  if (getState && getState.startsWith("zigbee.") && (getState.endsWith(".available") || getState.endsWith(".device_query"))) {
    entity.context.STATE.getId = (_a = states.state) != null ? _a : null;
  }
  if (states.state) {
    const stateObj = objects[states.state];
    entity.context.STATE.isBoolean = (stateObj == null ? void 0 : stateObj.common) !== void 0 && stateObj.common.type === "boolean";
    entity.attributes.supported_color_modes.push(ONOFF);
    return true;
  }
  return false;
}
function lightAddColorTemperature(states, objects, entity) {
  var _a, _b, _c, _d, _e, _f;
  const iobMaxValueKelvin = 7e3;
  const iobMinValueKelvin = 1e3;
  if (!states.color_temp) {
    return;
  }
  const attribute = entity.context.ATTRIBUTES.find((a) => a.attribute === "color_temp");
  if (!attribute) {
    return;
  }
  const tempCommon = (_b = (_a = objects[states.color_temp]) == null ? void 0 : _a.common) != null ? _b : {};
  attribute.convert_to_mired = tempCommon.unit === "mired";
  attribute.getParser = (ent, attr, state) => {
    let targetAttributes = ent.attributes;
    if (ent.state !== "on") {
      targetAttributes = ent.context.STATE.storedValues;
    }
    if (!state || !state.val) {
      targetAttributes.color_temp = iobMinValueKelvin;
      return;
    }
    let targetCt = state.val;
    if (targetCt < 1e3 && !attr.convert_to_mired) {
      attr.convert_to_mired = true;
    }
    if (targetCt > 1e3 && attr.convert_to_mired) {
      attr.convert_to_mired = false;
    }
    if (attr.convert_to_mired) {
      targetCt = 1e6 / targetCt;
    }
    targetAttributes.color_temp_kelvin = targetCt;
    targetAttributes.color_temp = 1e6 / targetCt;
    targetAttributes.color_mode = COLOR_TEMP;
  };
  entity.attributes.max_color_temp_kelvin = (_c = tempCommon.max) != null ? _c : iobMaxValueKelvin;
  entity.attributes.min_color_temp_kelvin = (_d = tempCommon.min) != null ? _d : iobMinValueKelvin;
  if (attribute.convert_to_mired || entity.attributes.max_color_temp_kelvin < 1e3) {
    attribute.convert_to_mired = true;
    entity.attributes.max_color_temp_kelvin = tempCommon.min ? 1e6 / tempCommon.min : iobMaxValueKelvin;
    entity.attributes.min_color_temp_kelvin = tempCommon.max ? 1e6 / tempCommon.max : iobMinValueKelvin;
  }
  if (!entity.attributes.max_color_temp_kelvin || isNaN(entity.attributes.max_color_temp_kelvin)) {
    entity.attributes.max_color_temp_kelvin = iobMaxValueKelvin;
  }
  if (!entity.attributes.min_color_temp_kelvin || isNaN(entity.attributes.min_color_temp_kelvin)) {
    entity.attributes.min_color_temp_kelvin = iobMinValueKelvin;
  }
  adapterData.log.debug(`${entity.entity_id} ct needs mired conversion: ${attribute.convert_to_mired}`);
  if (entity.attributes.min_color_temp_kelvin > entity.attributes.max_color_temp_kelvin) {
    const max = entity.attributes.min_color_temp_kelvin;
    entity.attributes.min_color_temp_kelvin = entity.attributes.max_color_temp_kelvin;
    entity.attributes.max_color_temp_kelvin = max;
  }
  if (attribute.convert_to_mired) {
    entity.attributes.max_mireds = (_e = tempCommon.max) != null ? _e : 1e6 / entity.attributes.min_color_temp_kelvin;
    entity.attributes.min_mireds = (_f = tempCommon.min) != null ? _f : 1e6 / entity.attributes.max_color_temp_kelvin;
  } else {
    entity.attributes.max_mireds = 1e6 / entity.attributes.min_color_temp_kelvin;
    entity.attributes.min_mireds = 1e6 / entity.attributes.max_color_temp_kelvin;
  }
  entity.attributes.supported_color_modes.push(COLOR_TEMP);
}
function lightAddBrightness(states, objects, entity) {
  var _a, _b, _c, _d, _e, _f;
  if (!states.brightness && states.state && ((_a = objects[states.state]) == null ? void 0 : _a.common) !== void 0 && objects[states.state].common.type === "number") {
    states.brightness = states.state;
    if (!states.brightnessRead) {
      states.brightnessRead = states.stateRead;
    }
  }
  if (!states.brightness) {
    return;
  }
  const attribute = entity.context.ATTRIBUTES.find((a) => a.attribute === "brightness");
  if (!attribute) {
    return;
  }
  const readId = (_b = states.brightnessRead) != null ? _b : states.brightness;
  const readCommon = (_d = (_c = objects[readId]) == null ? void 0 : _c.common) != null ? _d : {};
  attribute.min = (_e = readCommon.min) != null ? _e : 0;
  attribute.max = (_f = readCommon.max) != null ? _f : 100;
  attribute.setId = states.brightness;
  attribute.getId = readId;
  attribute.getParser = (ent, attr, state) => {
    var _a2, _b2, _c2, _d2;
    let targetAttributes = ent.attributes;
    if (ent.state !== "on") {
      targetAttributes = ent.context.STATE.storedValues;
    }
    let val = state == null ? void 0 : state.val;
    if (val === void 0 || val === null) {
      val = (_a2 = attr.max) != null ? _a2 : 255;
    }
    targetAttributes.brightness = (val - ((_b2 = attr.min) != null ? _b2 : 0)) / (((_c2 = attr.max) != null ? _c2 : 255) - ((_d2 = attr.min) != null ? _d2 : 0)) * 255;
    if (!targetAttributes.color_mode || targetAttributes.color_mode === ONOFF) {
      targetAttributes.color_mode = BRIGHTNESS;
    }
    if (states.state === states.brightness) {
      const oldState = ent.state;
      ent.state = targetAttributes.brightness > 0 ? "on" : "off";
      if (oldState !== ent.state) {
        clearOrRestoreAttributes(ent);
      }
      if (ent.attributes.color_mode === ONOFF) {
        ent.attributes.color_mode = BRIGHTNESS;
      }
    }
  };
  entity.attributes.supported_color_modes.push(BRIGHTNESS);
  if (states.state === states.brightness) {
    clearOrRestoreAttributes(entity);
  }
}
function lightAddHueAndSat(states, objects, entity) {
  var _a, _b, _c, _d, _e, _f;
  if (states.hue) {
    const hue_attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "hue");
    if (hue_attr) {
      hue_attr.max = (_c = (_b = (_a = objects[states.hue]) == null ? void 0 : _a.common) == null ? void 0 : _b.max) != null ? _c : 360;
      hue_attr.getParser = (ent, attr, state) => {
        var _a2;
        let targetAttributes = ent.attributes;
        if (ent.state !== "on") {
          targetAttributes = ent.context.STATE.storedValues;
        }
        let val = state == null ? void 0 : state.val;
        if (val === void 0 || val === null) {
          val = 0;
        }
        if (!targetAttributes.hs_color) {
          targetAttributes.hs_color = [0, 100];
        }
        targetAttributes.hs_color[0] = val / ((_a2 = attr.max) != null ? _a2 : 360) * 360;
        targetAttributes.color_mode = HS;
      };
      entity.attributes.supported_color_modes.push(HS);
      entity.attributes.hs_color = [null, null];
      entity.context.STATE.storedValues.hs_color = [0, 100];
    }
  }
  if (states.saturation) {
    const sat_attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "saturation");
    if (sat_attr) {
      sat_attr.max = (_f = (_e = (_d = objects[states.saturation]) == null ? void 0 : _d.common) == null ? void 0 : _e.max) != null ? _f : 100;
      if (!states.rgb_color && !states.red) {
        if (!states.hue) {
          adapterData.log.warn(
            `Saturation present but no hue id found for ${states.saturation}. Hue won't work.`
          );
          return;
        }
        sat_attr.getParser = (ent, attr, state) => {
          var _a2, _b2;
          let targetAttributes = ent.attributes;
          if (ent.state !== "on") {
            targetAttributes = ent.context.STATE.storedValues;
          }
          let val = state == null ? void 0 : state.val;
          if (val === void 0 || val === null) {
            val = (_a2 = attr.max) != null ? _a2 : 100;
          }
          if (!targetAttributes.hs_color) {
            targetAttributes.hs_color = [0, 100];
          }
          targetAttributes.hs_color[1] = val / ((_b2 = attr.max) != null ? _b2 : 100) * 100;
          targetAttributes.color_mode = HS;
        };
      } else {
        sat_attr.getParser = () => {
        };
      }
    }
  } else if (states.hue) {
    adapterData.log.warn(`Hue present but no saturation id found for ${states.hue}. Saturation won't work.`);
  }
}
function lightAddRGBSingle(states, _objects, entity) {
  if (!states.rgb_color) {
    return;
  }
  const attribute = entity.context.ATTRIBUTES.find((a) => a.attribute === "rgb_color");
  if (!attribute) {
    return;
  }
  attribute.is_rgb_array = false;
  attribute.is_rgb_string = true;
  attribute.getParser = (ent, _attr, state) => {
    let targetAttributes = ent.attributes;
    if (ent.state !== "on") {
      targetAttributes = ent.context.STATE.storedValues;
    }
    let str = state == null ? void 0 : state.val;
    if (str === void 0 || str === null) {
      str = "#FFFFFF";
    }
    if (str[0] === "#") {
      str = str.substring(1);
    }
    let r, g, b;
    if (/([0-9]){1,3},([0-9]){1,3},([0-9]){1,3}/.test(str)) {
      [r, g, b] = str.split(",").map((v) => parseInt(v, 10));
    } else {
      if (!/^[\da-fA-F]{6}/.test(str)) {
        adapterData.log.error(`Malformed rgb string ${str} expecting six hex digits.`);
        return;
      }
      r = parseInt(str.substring(0, 2), 16);
      g = parseInt(str.substring(2, 4), 16);
      b = parseInt(str.substring(4, 6), 16);
    }
    targetAttributes.rgb_color = [r, g, b];
    targetAttributes.color_mode = RGB;
    if (states.white) {
      targetAttributes.color_mode = RGBW;
      if (!targetAttributes.rgbw_color) {
        targetAttributes.rgbw_color = [r, g, b, 0];
      }
      targetAttributes.rgbw_color[0] = r;
      targetAttributes.rgbw_color[1] = g;
      targetAttributes.rgbw_color[2] = b;
    }
  };
  adapterData.adapter.getForeignStateAsync(states.rgb_color).then((rgbState) => {
    if (rgbState == null ? void 0 : rgbState.val) {
      attribute.is_rgb_array = /([0-9]){1,3},([0-9]){1,3},([0-9]){1,3}/.test(String(rgbState.val));
    }
  }).catch((e) => {
    adapterData.log.warn(
      `Could not read ${states.rgb_color} to determine RGB format: ${e}. Assuming hex string.`
    );
  });
  entity.attributes.rgb_color = [null, null, null];
  entity.context.STATE.storedValues.rgb_color = [255, 255, 255];
  entity.attributes.supported_color_modes.push(RGB);
}
function lightAddRGB(states, objects, entity) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  if (!states.red || !states.green || !states.blue) {
    return;
  }
  const red_attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "red");
  const green_attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "green");
  const blue_attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "blue");
  if (!red_attr || !green_attr || !blue_attr) {
    return;
  }
  const rgbGetParser = (index, ent, attr, state) => {
    var _a2, _b2;
    let targetAttributes = ent.attributes;
    if (ent.state !== "on") {
      targetAttributes = ent.context.STATE.storedValues;
    }
    if (!targetAttributes.rgb_color) {
      targetAttributes.rgb_color = [255, 255, 255];
    }
    let val = state == null ? void 0 : state.val;
    if (val === void 0 || val === null) {
      val = (_a2 = attr.max) != null ? _a2 : 255;
    }
    const scaled = val / ((_b2 = attr.max) != null ? _b2 : 255) * 255;
    targetAttributes.rgb_color[index] = scaled;
    if (targetAttributes.rgbw_color) {
      targetAttributes.rgbw_color[index] = scaled;
    }
    targetAttributes.color_mode = states.white ? RGBW : RGB;
  };
  red_attr.getParser = (ent, attr, state) => rgbGetParser(0, ent, attr, state);
  green_attr.getParser = (ent, attr, state) => rgbGetParser(1, ent, attr, state);
  blue_attr.getParser = (ent, attr, state) => rgbGetParser(2, ent, attr, state);
  red_attr.max = (_c = (_b = (_a = objects[states.red]) == null ? void 0 : _a.common) == null ? void 0 : _b.max) != null ? _c : 100;
  green_attr.max = (_f = (_e = (_d = objects[states.green]) == null ? void 0 : _d.common) == null ? void 0 : _e.max) != null ? _f : 100;
  blue_attr.max = (_i = (_h = (_g = objects[states.blue]) == null ? void 0 : _g.common) == null ? void 0 : _h.max) != null ? _i : 100;
  entity.attributes.supported_color_modes.push(RGB);
  entity.attributes.rgb_color = [null, null, null];
  entity.context.STATE.storedValues.rgb_color = [255, 255, 255];
  if (states.white) {
    entity.attributes.rgbw_color = [null, null, null, null];
    entity.context.STATE.storedValues.rgbw_color = [255, 255, 255, 255];
  }
}
function numToHex(num) {
  const clamped = Math.min(Math.max(Math.round(num), 0), 255);
  return Number(clamped).toString(16).toUpperCase().padStart(2, "0");
}
async function setLightAdvancedAttributesToIOBStates(data, entity, user) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const sd = data.service_data;
  if (sd.color_temp) {
    let ct = 1e6 / sd.color_temp;
    entity.attributes.color_temp_kelvin = ct;
    entity.attributes.color_temp = sd.color_temp;
    const attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "color_temp");
    if (attr.convert_to_mired) {
      ct = sd.color_temp;
    }
    entity.attributes.color_mode = COLOR_TEMP;
    await adapterData.adapter.setForeignStateAsync(attr.getId, ct, false, { user });
  }
  if (sd.color_temp_kelvin) {
    let ct = sd.color_temp_kelvin;
    entity.attributes.color_temp_kelvin = ct;
    const attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "color_temp");
    if (attr.convert_to_mired) {
      ct = 1e6 / ct;
    }
    entity.attributes.color_mode = COLOR_TEMP;
    await adapterData.adapter.setForeignStateAsync(attr.getId, ct, false, { user });
  }
  if (sd.brightness >= 0 && !sd.brightness_pct) {
    sd.brightness_pct = sd.brightness / 255 * 100;
  }
  if (sd.brightness_pct >= 0) {
    const attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "brightness");
    entity.attributes.brightness = sd.brightness_pct / 100 * 255;
    if (!entity.attributes.color_mode || entity.attributes.color_mode === ONOFF) {
      entity.attributes.color_mode = BRIGHTNESS;
    }
    await adapterData.adapter.setForeignStateAsync(
      attr.setId,
      sd.brightness_pct / 100 * (((_a = attr.max) != null ? _a : 100) - ((_b = attr.min) != null ? _b : 0)) + ((_c = attr.min) != null ? _c : 0),
      false,
      { user }
    );
  }
  if (sd.hs_color) {
    const attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "hue");
    const attr_Sat = entity.context.ATTRIBUTES.find((a) => a.attribute === "saturation");
    entity.attributes.hs_color = sd.hs_color;
    const [h, s] = sd.hs_color;
    if (attr) {
      await adapterData.adapter.setForeignStateAsync(attr.getId, h / 360 * ((_d = attr.max) != null ? _d : 360), false, { user });
    } else {
      adapterData.log.warn(`No hue for ${entity.entity_id}, can only set saturation.`);
    }
    if (attr_Sat) {
      await adapterData.adapter.setForeignStateAsync(attr_Sat.getId, s / 100 * ((_e = attr_Sat.max) != null ? _e : 100), false, {
        user
      });
    } else {
      adapterData.log.warn(`No saturation for ${entity.entity_id}, can only set hue.`);
    }
    entity.attributes.color_mode = HS;
  }
  if (sd.rgbw_color) {
    const attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "white");
    await adapterData.adapter.setForeignStateAsync(
      attr.getId,
      sd.rgbw_color[3] / 255 * ((_f = attr.max) != null ? _f : 255),
      false,
      { user }
    );
    sd.rgb_color = sd.rgbw_color;
    entity.attributes.color_mode = RGBW;
  }
  if (sd.rgb_color) {
    const [r, g, b] = sd.rgb_color;
    const rgb_color_attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "rgb_color");
    if (rgb_color_attr) {
      if (!rgb_color_attr.is_rgb_array) {
        const rgbString = `#${numToHex(r)}${numToHex(g)}${numToHex(b)}`;
        await adapterData.adapter.setForeignStateAsync(rgb_color_attr.getId, rgbString, false, { user });
      } else {
        await adapterData.adapter.setForeignStateAsync(rgb_color_attr.getId, `${r},${g},${b}`, false, {
          user
        });
      }
    } else {
      const red_attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "red");
      const green_attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "green");
      const blue_attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "blue");
      await Promise.all([
        adapterData.adapter.setForeignStateAsync(red_attr.getId, r / 255 * ((_g = red_attr.max) != null ? _g : 255), false, {
          user
        }),
        adapterData.adapter.setForeignStateAsync(
          green_attr.getId,
          g / 255 * ((_h = green_attr.max) != null ? _h : 255),
          false,
          { user }
        ),
        adapterData.adapter.setForeignStateAsync(blue_attr.getId, b / 255 * ((_i = blue_attr.max) != null ? _i : 255), false, {
          user
        })
      ]);
    }
    entity.attributes.color_mode = !sd.rgbw_color ? RGB : RGBW;
  }
  if (sd.effect) {
    const effect_attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "effect");
    let val = (_j = effect_attr.states) == null ? void 0 : _j[sd.effect];
    if (val === void 0) {
      val = sd.effect;
    }
    await adapterData.adapter.setForeignStateAsync(effect_attr.getId, val, false, { user });
  }
}
async function handleTurnOnCmd(entity, command, data, user) {
  if (entity.context.STATE.setId && entity.context.STATE.getId) {
    const state = await adapterData.adapter.getForeignStateAsync(entity.context.STATE.getId);
    if (!state || !state.val) {
      await adapterData.adapter.setForeignStateAsync(entity.context.STATE.setId, command.on, false, { user });
    }
  }
  if (!entity.attributes.color_mode) {
    entity.attributes.color_mode = ONOFF;
  }
  await setLightAdvancedAttributesToIOBStates(data, entity, user);
}
function convertControlToStates(control) {
  var _a, _b, _c;
  function findState(name) {
    var _a2;
    const s = control.states.find((st) => st.id && st.name === name);
    return (_a2 = s == null ? void 0 : s.id) != null ? _a2 : void 0;
  }
  const states = {};
  switch (control.type) {
    case import_type_detector.Types.rgb:
    case import_type_detector.Types.rgbSingle:
    case import_type_detector.Types.hue:
    case import_type_detector.Types.ct:
      states.state = findState("ON");
      states.stateRead = findState("ON_ACTUAL");
      states.brightness = (_a = findState("DIMMER")) != null ? _a : findState("BRIGHTNESS");
      states.effect = findState("EFFECT");
      break;
    case import_type_detector.Types.dimmer:
      states.state = (_b = findState("ON_SET")) != null ? _b : findState("SET");
      states.stateRead = (_c = findState("ON_ACTUAL")) != null ? _c : findState("ACTUAL");
      states.brightness = findState("SET");
      states.brightnessRead = findState("ACTUAL");
      states.effect = findState("EFFECT");
      break;
    case import_type_detector.Types.light:
      states.state = findState("SET");
      states.stateRead = findState("ACTUAL");
      states.effect = findState("EFFECT");
      break;
  }
  states.color_temp = findState("TEMPERATURE");
  states.hue = findState("HUE");
  states.saturation = findState("SATURATION");
  states.rgb_color = findState("RGB");
  states.red = findState("RED");
  states.green = findState("GREEN");
  states.blue = findState("BLUE");
  states.white = findState("WHITE");
  return states;
}
function applyLightStates(states, objects, entity) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  entity.fillFromStates(states, objects);
  entity.attributes.supported_color_modes = [];
  entity.attributes.color_mode = ONOFF;
  entity.context.COMMANDS = (_a = entity.context.COMMANDS) != null ? _a : [];
  entity.context.STATE.storedValues = {};
  if (states.white) {
    const white_attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "white");
    if (white_attr) {
      white_attr.max = (_d = (_c = (_b = objects[white_attr.getId]) == null ? void 0 : _b.common) == null ? void 0 : _c.max) != null ? _d : 100;
      entity.attributes.rgbw_color = [
        entity.attributes.red,
        entity.attributes.green,
        entity.attributes.blue,
        entity.attributes.white
      ];
      if (states.red || states.rgb_color) {
        entity.attributes.supported_color_modes.push(RGBW);
        white_attr.getParser = (ent, attr, state) => {
          var _a2, _b2, _c2, _d2, _e2;
          let val = state == null ? void 0 : state.val;
          if (val === void 0 || val === null) {
            val = (_a2 = attr.max) != null ? _a2 : 255;
          }
          let targetAttributes = ent.attributes;
          if (ent.state !== "on") {
            targetAttributes = ent.context.STATE.storedValues;
          }
          if (!targetAttributes.rgbw_color) {
            const rgb = targetAttributes.rgb_color;
            targetAttributes.rgbw_color = [(_b2 = rgb == null ? void 0 : rgb[0]) != null ? _b2 : 255, (_c2 = rgb == null ? void 0 : rgb[1]) != null ? _c2 : 255, (_d2 = rgb == null ? void 0 : rgb[2]) != null ? _d2 : 255];
          }
          targetAttributes.rgbw_color[3] = val / ((_e2 = attr.max) != null ? _e2 : 255) * 255;
          targetAttributes.color_mode = RGBW;
        };
      }
    }
  }
  lightAddState(states, objects, entity);
  lightAddColorTemperature(states, objects, entity);
  lightAddBrightness(states, objects, entity);
  lightAddHueAndSat(states, objects, entity);
  lightAddRGBSingle(states, objects, entity);
  lightAddRGB(states, objects, entity);
  if (states.effect) {
    const effect_attr = entity.context.ATTRIBUTES.find((a) => a.attribute === "effect");
    if (effect_attr) {
      const effectCommon = (_f = (_e = objects[effect_attr.getId]) == null ? void 0 : _e.common) != null ? _f : {};
      effect_attr.states = (_g = effectCommon.states) != null ? _g : {
        0: "Please",
        1: "Fill",
        2: "States"
      };
      entity.attributes.effect_list = Object.values(effect_attr.states);
      effect_attr.getParser = (ent, attr, state) => {
        var _a2;
        const s = state != null ? state : { val: 0 };
        let targetAttributes = ent.attributes;
        if (ent.state !== "on") {
          targetAttributes = ent.context.STATE.storedValues;
        }
        targetAttributes.effect = (_a2 = attr.states) == null ? void 0 : _a2[s.val];
      };
    }
    entity.attributes.supported_features = ((_h = entity.attributes.supported_features) != null ? _h : 0) | SUPPORT_EFFECT;
  }
  entity.context.COMMANDS.push({
    service: "turn_on",
    on: true,
    setId: entity.context.STATE.setId,
    parseCommand: handleTurnOnCmd
  });
  if (!entity.context.STATE.isBoolean) {
    const stateCommon = (_k = (_j = objects[(_i = states.state) != null ? _i : ""]) == null ? void 0 : _j.common) != null ? _k : {};
    entity.context.COMMANDS[entity.context.COMMANDS.length - 1].on = (_l = stateCommon.max) != null ? _l : 100;
    const offVal = (_m = stateCommon.min) != null ? _m : 0;
    entity.context.COMMANDS.push({
      service: "turn_off",
      off: offVal,
      setId: entity.context.STATE.setId,
      parseCommand: (_ent, command, _data, user) => adapterData.adapter.setForeignStateAsync(command.setId, command.off, false, {
        user
      })
    });
    entity.context.STATE.getParser = (ent, _attrName, state) => {
      const s = state != null ? state : { val: null };
      const oldState = ent.state;
      ent.state = s.val > offVal ? "on" : "off";
      if (!ent.attributes.color_mode) {
        ent.attributes.color_mode = ONOFF;
      }
      if (oldState !== ent.state) {
        clearOrRestoreAttributes(ent);
      }
    };
  }
  clearOrRestoreAttributes(entity);
  return [entity];
}
class LightEntity extends import_baseEntity.BaseEntity {
  /**
   * Build a light entity from converter parameters.
   *
   * @param params - converter parameters
   * @returns array containing the light entity (empty when the device cannot be exposed).
   */
  static build(params) {
    const { friendlyName, room, func, objects, id, forcedEntityId, controls } = params;
    if (controls.type === import_type_detector.Types.light) {
      const entity = new LightEntity(friendlyName, room, func, objects[id], forcedEntityId);
      let state = controls.states.find((s) => s.id && s.name === "SET");
      entity.context.STATE.setId = null;
      entity.context.STATE.getId = null;
      if (state == null ? void 0 : state.id) {
        entity.context.STATE.setId = state.id;
        entity.context.STATE.getId = state.id;
        entity.addID2entity(state.id);
        entity.attributes.color_mode = ONOFF;
        entity.attributes.supported_color_modes = [ONOFF];
      }
      state = controls.states.find((s) => s.id && (s.name === "ON_ACTUAL" || s.name === "ACTUAL"));
      if (state == null ? void 0 : state.id) {
        entity.context.STATE.getId = state.id;
        entity.addID2entity(state.id);
      }
      return [entity];
    }
    const states = convertControlToStates(controls);
    if (states.state) {
      const entity = new LightEntity(friendlyName, func, room, objects[id], forcedEntityId);
      return applyLightStates(states, objects, entity);
    }
    adapterData.log.debug(`Could not add ${id} of type ${controls.type} -> no on/off control found.`);
    return [];
  }
  constructor(name, room, func, obj, forcedEntityId) {
    super(name, room, func, obj, "light", forcedEntityId);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LightEntity,
  applyLightStates,
  convertControlToStates
});
//# sourceMappingURL=lightEntity.js.map
