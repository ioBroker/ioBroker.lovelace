//TODO: why are those needed? Let's get rid of them in future...
// eslint-disable-next-line @typescript-eslint/no-require-imports
const entityData: { lang: string } = require('../../../lib/dataSingleton');

function specificLanguageOrFallback(hash: ioBroker.StringOrTranslated | undefined): string | undefined {
    if (typeof hash === 'object' && hash !== null) {
        // Prefer language, use English as a fallback.
        const map = hash as Record<string, string>;
        return map[entityData.lang] || map.en;
    }

    return hash;
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
        return predefinedName ?? undefined;
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
