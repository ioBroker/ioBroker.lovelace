const utils       = require('./../entities/utils');

/**
 * Implement attribue and state parsing for geo_location entities.
 * @param states
 * @param objects
 * @param entity
 */
function fillGeoLocationEntityFromStates(states, objects, entity) {
    utils.fillEntityFromStates(states, entity);

    entity.attributes.icon = 'mdi:crosshairs-gps';
    if (states.gps) {
        const gpsAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'gps');
        const getParser = function (entity, attr, state) {
            if (!state) {
                state = {val: ''};
            }
            const value = state.val;
            let parts = value.split(';');
            if (parts.length !== 2) {
                parts = value.split(',');
            }
            if (parts.length === 2) {
                entity.attributes.latitude = parseFloat(parts[0]);
                entity.attributes.longitude = parseFloat(parts[1]);
            }
        };
        gpsAttr.getParser = getParser;

        if (!states.latitude) {
            entity.context.ATTRIBUTES.push({
                attribute: 'latitude',
                getId: states.gps,
                getParser: getParser,
                historyParser: (id, val) => {
                    val = (val || '').toString();
                    let parts = val.toString().split(';');
                    if (parts.length !== 2) {
                        parts = val.toString().split(',');
                    }
                    return parts[0];
                }
            });
        }

        if (!states.longitude) {
            entity.context.ATTRIBUTES.push({
                attribute: 'longitude',
                getId: states.gps,
                getParser: getParser,
                historyParser: (id, val) => {
                    val = (val || '').toString();
                    let parts = val.toString().split(';');
                    if (parts.length !== 2) {
                        parts = val.toString().split(',');
                    }
                    return parts[1];
                }
            });
        }
    }
}

/**
 * Create manual geo_location entity.
 * @param id - id of "main" object, i.e. state.
 * @param obj - iobroker object of id param
 * @param entity - already created entity
 * @param objects - id object cache
 * @param custom - custom part of object
 * @returns {Promise<[entity]>}
 */
exports.processManualEntity = async function(id, obj, entity, objects, custom) {
    const states = custom.states || {
        gps: id
    };

    entity.attributes.source = custom.attr_source || 'gps';
    fillGeoLocationEntityFromStates(states, objects, entity);
    return [entity];
};

exports.processLocation = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    // - geo_location => attributes: [latitude, longitude, passive, icon, radius, entity_picture, gps_accuracy, source]
    const entity = utils.processCommon(name, room, func, _obj, 'geo_location', forcedEntityId);

    const states = {};

    let state = control.states.find(s => s.id && s.name === 'GPS');
    if (state && state.id) {
        states.gps = state.id;
    } else {
        state = control.states.find(s => s.id && s.name === 'LATITUDE');
        if (state && state.id) {
            states.latitude = state.id;
        }

        state = control.states.find(s => s.id && s.name === 'LONGITUDE');
        if (state && state.id) {
            states.longitude = state.id;
        }
    }

    state = control.states.find(s => s.id && s.name === 'RADIUS');
    if (state && state.id) {
        states.radius = state.id;
    }

    state = control.states.find(s => s.id && s.name === 'ACCURACY');
    if (state && state.id) {
        states.gps_accuracy = state.id;
    }

    state = control.states.find(s => s.id && s.name === 'BATTERY');
    if (state && state.id) {
        states.battery = state.id;
    }

    entity.attributes.source = 'gps';

    fillGeoLocationEntityFromStates(states, objects, entity);
    return [entity];
};

