const entityData = require('./../dataSingleton');

const candidates = [
    function (predefinedName, /*_obj, _room, _func*/) {
        // Highest priority: The predefined name.
        return predefinedName;
    },
    function (_predefinedName, obj, /*_room, _func*/) {
        // Next: smart name, if available.
        return (
            obj && obj.common && specificLanguageOrFallback(obj.common.smartName)
        );
    },
    function (_predefinedName, obj, /*_room, _func*/) {
        // Next: common.name, if available.
        return obj && obj.common && specificLanguageOrFallback(obj.common.name);
    },
    function (_predefinedName, _obj, room, func) {
        // Next: room and function.
        return room && func && room + ' ' + func;
    },
    function (_predefinedName, obj, /*_room, _func*/) {
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
