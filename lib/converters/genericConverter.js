
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
    } else if (typeof val === 'number' && entity.attributes && ['timestamp'].includes(entity.attributes.device_class)) {
        return val; //do not convert timestamps.
    } else if (typeof val === 'number' && entity.attributes && ['date'].includes(entity.attributes.device_class)) {
        return new Date(val).toDateString(); //convert to date string
    } else if (type === 'lock') {
        return val ? 'unlocked' : 'locked';
    } else if (typeof val === 'boolean' && type !== 'media_player') {
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
