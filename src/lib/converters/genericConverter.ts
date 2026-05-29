import type { Entity } from './entity';

export const numericDeviceClasses: string[] = [
    'voltage',
    'sulphur_dioxide',
    'carbon_dioxide',
    'current',
    'volume_storage',
    'volume',
    'ozone',
    'speed',
    'atmospheric_pressure',
    'carbon_monoxide',
    'aqi',
    'pm25',
    'nitrogen_monoxide',
    'power_factor',
    'pm1',
    'precipitation',
    'volatile_organic_compounds',
    'humidity',
    'pressure',
    'battery',
    'irradiance',
    'wind_speed',
    'pm10',
    'ph',
    'reactive_power',
    'temperature',
    'precipitation_intensity',
    'sound_pressure',
    'data_rate',
    'frequency',
    'volatile_organic_compounds_parts',
    'energy',
    'apparent_power',
    'weight',
    'duration',
    'gas',
    'water',
    'power',
    'monetary',
    'signal_strength',
    'data_size',
    'energy_storage',
    'nitrogen_dioxide',
    'nitrous_oxide',
    'illuminance',
    'moisture',
    'distance',
];

/**
 * Convert an ioBroker state value to the string representation expected by Home Assistant.
 *
 * @param entity - the entity being updated
 * @param val - the raw ioBroker state value
 * @param attribute - if set, the attribute name being converted (not the entity state)
 * @returns the converted value
 */
export function iobState2EntityState(
    entity: Entity,
    val: ioBroker.StateValue,
    attribute?: string,
): string | number | boolean | null {
    let type = entity.context.type || '';
    const pos = type.lastIndexOf('.');
    if (pos !== -1) {
        type = type.substring(pos + 1);
    }

    if (type === 'light' || type === 'switch' || type === 'input_boolean') {
        return val ? 'on' : 'off';
    } else if (type === 'binary_sensor') {
        return val ? 'on' : 'off';
    } else if (
        typeof val === 'number' &&
        (entity.context.type === 'datetime' ||
            ['date', 'timestamp'].includes((entity.attributes as Record<string, unknown>)?.device_class as string))
    ) {
        //convert to date string
        const date = new Date(val);
        let dateStr = date.toDateString();
        if ((entity.attributes as Record<string, unknown>)?.device_class === 'timestamp') {
            dateStr = date.toISOString();
        }
        return dateStr === 'Invalid Date' ? 'unknown' : dateStr;
    } else if (type === 'lock') {
        return val ? 'unlocked' : 'locked';
    } else if (typeof val === 'boolean' && type !== 'media_player' && attribute === 'state') {
        //attributes can have true/false.
        return val ? 'on' : 'off';
    } else if (typeof val === 'number' && entity.context.STATE && entity.context.STATE.map2lovelace) {
        const map = entity.context.STATE.map2lovelace;
        return map[val] ?? val;
    } else if (attribute === 'power') {
        return val ? 'on' : 'off';
    } else {
        if (attribute === 'state') {
            return val === null || val === undefined
                ? 'unknown'
                : typeof val === 'object'
                  ? JSON.stringify(val)
                  : String(val);
        } else {
            //TODO: can attributes become null? What happens if they are not defined in HASS?
            return val;
        }
    }
}
