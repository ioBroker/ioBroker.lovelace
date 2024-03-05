exports.numericDeviceClasses = [
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
    'distance'
];

exports.iobState2EntityState = function (entity, val, attribute) {
    let type = entity.context.type;
    const pos = type.lastIndexOf('.');
    if (pos !== -1) {
        type = type.substring(pos + 1);
    }

    if (type === 'light' || type === 'switch' || type === 'input_boolean') {
        return val ? 'on' : 'off';
    } else if (type === 'binary_sensor') {
        return val ? 'on' : 'off';
    } else if (typeof val === 'number' && entity.attributes && ['date', 'timestamp'].includes(entity.attributes.device_class)) {
        //convert to date string
        const date = new Date(val);
        let dateStr = date.toDateString();
        if (entity.attributes.device_class === 'timestamp') {
            dateStr = date.toISOString();
        }
        console.log('Sending', dateStr, '-', typeof dateStr);
        return dateStr === 'Invalid Date' ? 'unknown' : dateStr;
    } else if (type === 'lock') {
        return val ? 'unlocked' : 'locked';
    } else if (typeof val === 'boolean' && type !== 'media_player' && !attribute) { //attributes can have true/false.
        return val ? 'on' : 'off';
    } else if (typeof val === 'number' && entity.context.STATE.map2lovelace) {
        return entity.context.STATE.map2lovelace[val] || val;
    } else if (attribute === 'power') {
        return val ? 'on' : 'off';
    } else {
        if (!attribute) {
            return (val === null || val === undefined) ? 'unknown' : String(val);
        } else {
            return val;
        }
    }
};
