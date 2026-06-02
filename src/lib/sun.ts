// eslint-disable-next-line @typescript-eslint/no-require-imports
const SunCalc = require('suncalc');

export interface SunState {
    state: 'above_horizon' | 'below_horizon';
    attributes: {
        elevation: number;
        azimuth: number;
        rising: boolean;
        next_dawn?: string;
        next_dusk?: string;
        next_midnight?: string;
        next_noon?: string;
        next_rising?: string;
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
    const elevation = (pos.altitude * 180) / Math.PI;
    // suncalc azimuth: 0 = south, increasing towards west, in radians.
    // Home Assistant azimuth: 0 = north, clockwise. Convert (+180) and normalise to [0,360).
    const azimuth = ((((pos.azimuth * 180) / Math.PI + 180) % 360) + 360) % 360;
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
        // -0.833° accounts for atmospheric refraction at the horizon (matches HA's sunrise definition).
        state: elevation > -0.833 ? 'above_horizon' : 'below_horizon',
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
