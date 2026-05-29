/**
 * Module to support subscription to ioBroker states for entities in auto-entities card.
 */

const debugging = false;

function debugLog(msg: string): void {
    if (debugging) {
        console.log(msg);
    }
}

interface AutoEntityRule {
    type?: string;
    or?: AutoEntityRule[];
    not?: AutoEntityRule;
    domain?: string;
    entity_id?: string;
    name?: string;
    attributes?: string[];
}

interface AutoEntityFilter {
    include?: AutoEntityRule[];
    exclude?: AutoEntityRule[];
}

interface AutoEntitiesObj {
    filter?: AutoEntityFilter;
}

interface EntityLike {
    entity_id: string;
    context: { type?: string };
    attributes: Record<string, unknown>;
}

/**
 * Match a string or string with * in it or a regex with str.
 *
 * @param ruleStr - the rule string
 * @param str - the string to match
 * @returns true if rule is matched.
 */
function _matchStringsWithStarOrRegex(ruleStr: string, str: string | undefined): boolean {
    if (ruleStr.startsWith('$$')) {
        ruleStr = ruleStr.substring(2);
    }
    if ((ruleStr.startsWith('/') && ruleStr.endsWith('/')) || ruleStr.includes('*')) {
        if (!ruleStr.startsWith('/')) {
            ruleStr = ruleStr.replace(/\*/g, '.*');
            ruleStr = `/${ruleStr}/`;
        }
        const regEx = new RegExp(ruleStr.slice(1, -1));
        return regEx.test(str ?? '');
    }
    return ruleStr === str;
}

/**
 * Match autoentities rule.
 *
 * @param rule - auto entities rule object
 * @param entity - entity object
 * @returns true if rule is matched.
 */
function _matchAutoEntityFilter(rule: AutoEntityRule, entity: EntityLike): boolean {
    if (!rule || typeof rule !== 'object') {
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
        result = result && _matchStringsWithStarOrRegex(rule.name, entity.attributes.friendly_name as string);
    }
    if (rule.attributes && typeof rule.attributes === 'object' && rule.attributes.length) {
        for (const attribute of rule.attributes) {
            result = result && _matchStringsWithStarOrRegex(attribute, entity.attributes[attribute] as string);
        }
    }
    return result;
}

/**
 * Subscribe to entities used in auto-entities card.
 *
 * @param obj - the auto entities card json object
 * @param entities - already subscribed entity ids, will be filled.
 * @param allEntities - all entities created.
 */
export function handleAutoEntitiesCard(obj: AutoEntitiesObj, entities: string[], allEntities: EntityLike[]): void {
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
            debugLog('No include in auto-entities...?');
        }
    } else {
        debugLog('No filter in auto-entities...?');
    }
}
