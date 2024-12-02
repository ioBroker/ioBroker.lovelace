const entityData = require('./../dataSingleton');

const candidates = [
    /**
     * select predefined name
     *
     * @param predefinedName {string|undefined|null} the predefined name
     * @returns {string|undefined} the friendly name
     */
    function (predefinedName /*_obj, _room, _func*/) {
        // Highest priority: The predefined name.
        return predefinedName;
    },
    /**
     * select smart name
     *
     * @param _predefinedName {string|undefined|null} the predefined name
     * @param obj {ioBroker.Object} the object to get the friendly name from
     * @returns {string} the friendly name
     */
    function (_predefinedName, obj /*_room, _func*/) {
        // Next: smart name, if available.
        return obj && obj.common && specificLanguageOrFallback(obj.common.smartName);
    },
    /**
     * select common name
     *
     * @param _predefinedName {string|undefined|null} the predefined name
     * @param obj {ioBroker.Object} the object to get the friendly name from
     * @returns {string} the friendly name
     */
    function (_predefinedName, obj /*_room, _func*/) {
        // Next: common.name, if available.
        return obj && obj.common && specificLanguageOrFallback(obj.common.name);
    },
    /**
     * select room and function
     *
     * @param _predefinedName {string|undefined|null} the predefined name
     * @param _obj {ioBroker.Object} the object to get the friendly name from
     * @param room {string|undefined|null} the room of the object
     * @param func {string|undefined|null} the function of the object
     * @returns {undefined|string} the friendly name
     */
    function (_predefinedName, _obj, room, func) {
        // Next: room and function.
        return room && func && `${room} ${func}`;
    },
    /**
     * select id as fallback
     *
     * @param _predefinedName {string|undefined|null} the predefined name
     * @param obj {ioBroker.Object} the object to get the friendly name from
     * @returns {string|undefined} the friendly name
     */
    function (_predefinedName, obj /*_room, _func*/) {
        // Fallback, use ioBroker object ID.
        return obj && obj._id;
    },
];

function specificLanguageOrFallback(hash) {
    if (typeof hash === 'object') {
        // Prefer language, use English as a fallback.
        return hash[entityData.lang] || hash.en;
    }

    return hash;
}

/**
 * Get a friendly name from an object.
 *
 * @param predefinedName {string|undefined|null} the predefined name
 * @param obj {ioBroker.Object} the object to get the friendly name from
 * @param room {string|undefined|null} the room of the object
 * @param func {string|undefined|null} the function of the object
 * @returns {string|undefined} the friendly name
 */
function getFriendlyName(predefinedName, obj, room, func) {
    return candidates.reduce(function (acc, candidate) {
        // Poor man's lazy evaluation.
        if (acc) {
            return acc;
        }

        return candidate(predefinedName, obj, room, func);
    }, undefined);
}

exports.getFriendlyName = getFriendlyName;
