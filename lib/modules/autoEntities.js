const debugging = false;

function debugLog(msg) {
    if (debugging) {
        console.log(msg);
    }
}

/**
 * Match a string or string with * in it or a regex with str.
 * @param {String} ruleStr
 * @param {String} str
 * @returns {boolean}
 * @private
 */
function _matchStringsWithStarOrRegex(ruleStr, str) {
    if (ruleStr.startsWith('$$')) {
        ruleStr = ruleStr.substring(2);
    }
    if ((ruleStr.startsWith('/') && ruleStr.endsWith('/')) || ruleStr.includes('*')) {
        if (!ruleStr.startsWith('/')) {
            ruleStr = ruleStr.replace(/\*/g, '.*');
            ruleStr = `/${ruleStr}/`;
        }
        const regEx = new RegExp(ruleStr.slice(1, -1));
        return regEx.test(str);
    }
    return ruleStr === str;
}

/**
 * Match autoentities rule.
 * @param rule auto entities rule object
 * @param entity entity object
 * @returns {boolean} true if rule is matched.
 * @private
 */
function _matchAutoEntityFilter(rule, entity) {
    if (!rule || typeof rule !== 'object') {
        return false; //misconfigured rule.. hm
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
    if (rule.attributes && typeof rule.attributes === 'object' && rule.attributes.length) {
        for (const attribute of rule.attributes) {
            result = result && _matchStringsWithStarOrRegex(attribute, entity.attributes[attribute]);
        }
    }
    return result;
}

/**
 * Subscribe to entities used in auto-entities card. Can be quite complex filtering stuff.
 * @param obj the auto entities card json object
 * @param entities already to subscribe entities, will be filled.
 * @param allEntities all entities created.
 * @private
 */
exports.handleAutoEntitiesCard = function (obj, entities, allEntities) {
    if (obj.filter) {
        if (obj.filter.include) {
            for (const entity of allEntities) {
                if (!entities.includes(entity.entity_id)) { //only process entities not already subscribed.
                    let skip = false;
                    if (obj.filter.exclude) {
                        //check all exclude rules:
                        for (const rule of obj.filter.exclude) {
                            if (_matchAutoEntityFilter(rule, entity)) {
                                skip = true;
                                debugLog(`Skipping ${entity.entity_id} for exclude rule ${JSON.stringify(rule)}`);
                                continue;
                            }
                        }
                    }
                    if (!skip) {
                        //check all include rules:
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
            debugLog('No include in auto-entities...?');
        }
    } else {
        debugLog('No filter in auto-entities...?');
    }
};