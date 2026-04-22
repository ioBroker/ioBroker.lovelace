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
var autoEntities_exports = {};
__export(autoEntities_exports, {
  handleAutoEntitiesCard: () => handleAutoEntitiesCard
});
module.exports = __toCommonJS(autoEntities_exports);
const debugging = false;
function debugLog(msg) {
  if (debugging) {
    console.log(msg);
  }
}
function _matchStringsWithStarOrRegex(ruleStr, str) {
  if (ruleStr.startsWith("$$")) {
    ruleStr = ruleStr.substring(2);
  }
  if (ruleStr.startsWith("/") && ruleStr.endsWith("/") || ruleStr.includes("*")) {
    if (!ruleStr.startsWith("/")) {
      ruleStr = ruleStr.replace(/\*/g, ".*");
      ruleStr = `/${ruleStr}/`;
    }
    const regEx = new RegExp(ruleStr.slice(1, -1));
    return regEx.test(str != null ? str : "");
  }
  return ruleStr === str;
}
function _matchAutoEntityFilter(rule, entity) {
  if (!rule || typeof rule !== "object") {
    return false;
  }
  if (rule.type) {
    return rule.type === entity.entity_id;
  }
  if (rule.or) {
    for (const childRule of rule.or) {
      if (_matchAutoEntityFilter(childRule, entity)) {
        return true;
      }
    }
    return false;
  }
  let result = true;
  if (rule.not) {
    result = result && !_matchAutoEntityFilter(rule.not, entity);
  }
  if (rule.domain) {
    result = result && _matchStringsWithStarOrRegex(rule.domain, entity.context.type);
  }
  if (rule.entity_id) {
    result = result && _matchStringsWithStarOrRegex(rule.entity_id, entity.entity_id);
  }
  if (rule.name) {
    result = result && _matchStringsWithStarOrRegex(rule.name, entity.attributes.friendly_name);
  }
  if (rule.attributes && typeof rule.attributes === "object" && rule.attributes.length) {
    for (const attribute of rule.attributes) {
      result = result && _matchStringsWithStarOrRegex(attribute, entity.attributes[attribute]);
    }
  }
  return result;
}
function handleAutoEntitiesCard(obj, entities, allEntities) {
  if (obj.filter) {
    if (obj.filter.include) {
      for (const entity of allEntities) {
        if (!entities.includes(entity.entity_id)) {
          let skip = false;
          if (obj.filter.exclude) {
            for (const rule of obj.filter.exclude) {
              if (_matchAutoEntityFilter(rule, entity)) {
                skip = true;
                debugLog(`Skipping ${entity.entity_id} for exclude rule ${JSON.stringify(rule)}`);
              }
            }
          }
          if (!skip) {
            for (const rule of obj.filter.include) {
              if (_matchAutoEntityFilter(rule, entity)) {
                debugLog(`Adding ${entity.entity_id} for rule ${JSON.stringify(rule)}`);
                entities.push(entity.entity_id);
              }
            }
          }
        }
      }
    } else {
      debugLog("No include in auto-entities...?");
    }
  } else {
    debugLog("No filter in auto-entities...?");
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handleAutoEntitiesCard
});
//# sourceMappingURL=autoEntities.js.map
