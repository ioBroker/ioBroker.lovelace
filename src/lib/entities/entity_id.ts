//TODO: why are those needed? Let's get rid of them in future...
// eslint-disable-next-line @typescript-eslint/no-require-imports
const pinyin = require('pinyin').default;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const transliterateRussianToEnglish: (str: string) => string = require('translit-rus-eng');

function maybeEnglishOrUntranslated(hash: ioBroker.StringOrTranslated | undefined): string {
    if (typeof hash === 'object' && hash !== null) {
        if (hash.en) {
            // Entity IDs are always computed from English.
            return hash.en;
        } else {
            const names = Object.values(hash);
            if (names.length === 1) {
                //if only one name, just take that one.
                return names[0];
            }
        }
    }

    return (hash as string) ?? '';
}

function entityIdFromObject(obj: ioBroker.Object | null | undefined): string {
    //common.name, if available.
    if (obj && obj.common) {
        const idPart = maybeEnglishOrUntranslated(obj.common.name);
        if (idPart) {
            return idPart; //else -> fall back to object id.
        }
    }
    // Fallback: ioBroker object ID.
    return obj ? obj._id : 'NO_ID';
}

function transliterateChinese(str: string): string {
    const maybeChinese = pinyin(str, { style: pinyin.STYLE_TONE2 });

    if (typeof maybeChinese === 'object' && maybeChinese.length > 1) {
        // Found Chinese word.
        // "Chinese中文" => [ [ 'Chinese' ], [ 'zhong1' ], [ 'wen2' ] ]

        let transliterated = '';

        for (let i = 0; i < maybeChinese.length; i++) {
            if (typeof maybeChinese[i] === 'object') {
                transliterated += maybeChinese[i][0];
            }
        }
        return transliterated;
    }

    // No Chinese word found, return original string.
    return str;
}

function transliterateGerman(str: string): string {
    return str
        .replace(/Ü/g, 'UE')
        .replace(/Ä/g, 'AE')
        .replace(/Ö/g, 'OE')
        .replace(/ẞ/g, 'SS')
        .replace(/ü/g, 'ue')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ß/g, 'ss');
}

/**
 * Replaces invalid characters from generated unique part of entity id, i.e. light.idPart
 *
 * @param idPart - unique part of entity Id
 * @returns cleaned entity Id part
 */
function replaceInvalidChars(idPart: string): string {
    idPart = idPart.search(/[А-Яа-я]/g) !== -1 ? transliterateRussianToEnglish(idPart) : idPart;
    idPart = transliterateChinese(idPart);
    idPart = transliterateGerman(idPart);

    return idPart
        .replace(/`/g, '')
        .replace(/[^a-z\d]/gi, '_')
        .replace(/_+/g, '_');
}

function splitEntityId(
    entityType: string,
    entityId: string | null | undefined,
    obj: ioBroker.Object,
): [string, string] {
    let idPart: string;

    if (entityId && entityId.includes('.')) {
        const parts = entityId.split('.');
        entityType = parts.shift()!;
        idPart = parts.join('_');
    } else {
        idPart = entityIdFromObject(obj);
    }

    return [entityType, replaceInvalidChars(idPart)];
}

/**
 * Returns the entity id for the given entity type, entity id and object.
 *
 * @param entityType - The entity type (e.g. 'light', 'sensor')
 * @param entityId - Optional pre-defined entity id (overrides auto-generation when it contains a dot)
 * @param obj - The ioBroker object
 * @returns The full entity id, e.g. 'light.living_room'
 */
export function getEntityId(entityType: string, entityId: string | null | undefined, obj: ioBroker.Object): string {
    return splitEntityId(entityType, entityId, obj).join('.');
}

/**
 * Returns the entity type for the given entity type, entity id and object.
 *
 * @param entityType - The entity type (e.g. 'light', 'sensor')
 * @param entityId - Optional pre-defined entity id (may override the entity type when it contains a dot)
 * @param obj - The ioBroker object
 * @returns The entity type
 */
export function getEntityType(entityType: string, entityId: string | null | undefined, obj: ioBroker.Object): string {
    return splitEntityId(entityType, entityId, obj)[0];
}
