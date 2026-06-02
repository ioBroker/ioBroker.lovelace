//TODO: why are those needed? Let's get rid of them in future...
// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData: { lang: string } = require('../../../lib/dataSingleton');

function specificLanguageOrFallback(hash: ioBroker.StringOrTranslated | undefined): string | undefined {
    if (typeof hash === 'object' && hash !== null) {
        // Prefer language, use English as a fallback. If neither is present the caller falls through
        // to the next name candidate (smartName falls back to common.name etc.). Crucially this never
        // returns the raw object - that would leak into attributes.friendly_name and crash the
        // frontend more-info dialog (it does string ops on the name).
        const map = hash as Record<string, string>;
        return map[entityData.lang] || map.en;
    }

    return hash;
}

/**
 * Reduce a predefined name to a string. Unlike the language-or-fallback used for smartName/common.name,
 * a predefined (user-provided) name is always honoured, so when neither the configured language nor
 * English is present we fall back to any available translation rather than dropping it.
 *
 * @param name - the predefined name (string, translation object, or nullish)
 * @returns the resolved string, or undefined when no name is given
 */
function reducePredefinedName(name: ioBroker.StringOrTranslated | null | undefined): string | undefined {
    if (typeof name === 'object' && name !== null) {
        const map = name as Record<string, string>;
        return map[entityData.lang] || map.en || Object.values(map)[0];
    }
    return name ?? undefined;
}

type NameCandidate = (
    predefinedName: string | null | undefined,
    obj: ioBroker.Object | null | undefined,
    room: string | null | undefined,
    func: string | null | undefined,
) => string | undefined;

const candidates: NameCandidate[] = [
    /**
     * Select predefined name — highest priority.
     *
     * @param predefinedName - the predefined name
     * @returns the friendly name
     */
    function (predefinedName) {
        // predefinedName may itself be an ioBroker translation object, so reduce it to a string.
        return reducePredefinedName(predefinedName);
    },
    /**
     * Select smart name from the ioBroker object, if available.
     *
     * @param _predefinedName - unused
     * @param obj - the ioBroker object
     * @returns the friendly name
     */
    function (_predefinedName, obj) {
        return obj?.common
            ? specificLanguageOrFallback(obj.common.smartName as ioBroker.StringOrTranslated)
            : undefined;
    },
    /**
     * Select common.name from the ioBroker object, if available.
     *
     * @param _predefinedName - unused
     * @param obj - the ioBroker object
     * @returns the friendly name
     */
    function (_predefinedName, obj) {
        return obj?.common ? specificLanguageOrFallback(obj.common.name) : undefined;
    },
    /**
     * Combine room and function names, if both are available.
     *
     * @param _predefinedName - unused
     * @param _obj - unused
     * @param room - the room of the object
     * @param func - the function of the object
     * @returns the friendly name
     */
    function (_predefinedName, _obj, room, func) {
        return room && func ? `${room} ${func}` : undefined;
    },
    /**
     * Fall back to the ioBroker object ID.
     *
     * @param _predefinedName - unused
     * @param obj - the ioBroker object
     * @returns the friendly name
     */
    function (_predefinedName, obj) {
        return obj?._id;
    },
];

/**
 * Get a friendly name from an object.
 * Tries predefined name, smart name, common.name, room+function, and finally the object ID.
 *
 * @param predefinedName - the predefined name (highest priority)
 * @param obj - the ioBroker object to get the friendly name from
 * @param room - the room name of the device (used as fallback)
 * @param func - the function name of the device (used as fallback)
 * @returns the friendly name, or undefined if none found
 */
export function getFriendlyName(
    predefinedName: string | null | undefined,
    obj: ioBroker.Object | null | undefined,
    room: string | null | undefined,
    func: string | null | undefined,
): string | undefined {
    return candidates.reduce<string | undefined>((acc, candidate) => {
        // Poor man's lazy evaluation.
        if (acc) {
            return acc;
        }
        return candidate(predefinedName, obj, room, func);
    }, undefined);
}
