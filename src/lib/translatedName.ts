/**
 * Resolve an ioBroker `common.name` (which may be a translation object) to a plain string.
 *
 * Names are handed to the Home Assistant frontend, which does string operations on them
 * (`name.trim()`, `localeCompare`, …). A raw translation object crashes the receiving view
 * (see #731 for the area registry). Every place that forwards an ioBroker name therefore has
 * to reduce it first - the object types allow a translation object even where practice is a
 * plain string (e.g. `system.user.*`).
 *
 * @param name - the name from `common.name`
 * @param lang - the configured adapter language, preferred translation
 * @param fallback - returned when no usable translation is present
 * @returns the resolved name
 */
export function resolveTranslatedName(name: unknown, lang: string, fallback = ''): string {
    if (typeof name === 'string') {
        return name;
    }
    if (name && typeof name === 'object') {
        const map = name as Record<string, string>;
        // Prefer the configured language, then English, then any translation at all - dropping a
        // name entirely is worse than showing it in the wrong language.
        return map[lang] || map.en || Object.values(map).find(entry => typeof entry === 'string') || fallback;
    }
    return fallback;
}
