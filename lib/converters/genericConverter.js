
exports.iobState2EntityState = function (entity, val, type) {
    type = type || entity.context.type;
    const pos = type.lastIndexOf('.');
    if (pos !== -1) {
        type = type.substring(pos + 1);
    }

    if (type === 'light' || type === 'switch' || type=== 'input_boolean') {
        return val ? 'on' : 'off';
    } else
    if (type === 'binary_sensor') {
        return val ? 'on' : 'off';
    } else
    if (type === 'lock') {
        return val ? 'unlocked' : 'locked';
    } else
    if (typeof val === 'boolean') {
        return val ? 'on' : 'off';
    } else
    if (typeof val === 'number' && entity.context.STATE.map2lovelace) {
        return entity.context.STATE.map2lovelace[val] || val;
    } else {
        return val === null || val === undefined ? 'unknown' : val;
    }
};
