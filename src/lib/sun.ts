// eslint-disable-next-line @typescript-eslint/no-require-imports
const SunCalc = require('suncalc');

/** Home Assistant `sun.sun` state and attributes. */
export interface SunState {
    /** Whether the sun is currently above or below the horizon. */
    state: 'above_horizon' | 'below_horizon';
    /** Sun position and next-event attributes (matching Home Assistant). */
    attributes: {
        /** Sun elevation in degrees. */
        elevation: number;
        /** Sun azimuth in degrees. */
        azimuth: number;
        /** Whether the sun is currently rising. */
        rising: boolean;
        /** ISO timestamp of the next dawn. */
        next_dawn?: string;
        /** ISO timestamp of the next dusk. */
        next_dusk?: string;
        /** ISO timestamp of the next solar midnight. */
        next_midnight?: string;
        /** ISO timestamp of the next solar noon. */
        next_noon?: string;
        /** ISO timestamp of the next sunrise. */
        next_rising?: string;
        /** ISO timestamp of the next sunset. */
        next_setting?: string;
    };
}

/**
 * Compute the Home Assistant `sun.sun` state and attributes for a location and time, using suncalc.
 * The GPS position is sufficient to derive everything; ioBroker exposes no astro API to adapters.
 *
 * @param lat - latitude in degrees
 * @param lng - longitude in degrees
 * @param now - reference time (defaults to current time)
 * @returns the HA-style sun state + attributes
 */
export function computeSunState(lat: number, lng: number, now: Date = new Date()): SunState {
    const pos = SunCalc.getPosition(now, lat, lng);
    // suncalc 2 answers in degrees, with the azimuth measured clockwise from north - the same
    // convention Home Assistant uses. Only the range is normalised (to [0,360)).
    const elevation = pos.altitude;
    const azimuth = ((pos.azimuth % 360) + 360) % 360;
    const later = SunCalc.getPosition(new Date(now.getTime() + 600000), lat, lng);

    // The next future occurrence of a suncalc event (checks today, then the following days).
    const nextEvent = (key: string): string | undefined => {
        for (let dayOffset = 0; dayOffset <= 2; dayOffset++) {
            const times = SunCalc.getTimes(new Date(now.getTime() + dayOffset * 86400000), lat, lng);
            const t = times[key] as Date | undefined;
            if (t instanceof Date && !isNaN(t.getTime()) && t.getTime() > now.getTime()) {
                return t.toISOString();
            }
        }
        return undefined;
    };

    return {
        // suncalc 2 corrects for atmospheric refraction, so the sun stands at about -0.35° at the
        // moment it rises or sets; that is the line Home Assistant draws as well.
        state: elevation > -0.349 ? 'above_horizon' : 'below_horizon',
        attributes: {
            elevation: Math.round(elevation * 100) / 100,
            azimuth: Math.round(azimuth * 100) / 100,
            rising: later.altitude > pos.altitude,
            next_dawn: nextEvent('dawn'),
            next_dusk: nextEvent('dusk'),
            next_midnight: nextEvent('nadir'),
            next_noon: nextEvent('solarNoon'),
            next_rising: nextEvent('sunrise'),
            next_setting: nextEvent('sunset'),
        },
    };
}
