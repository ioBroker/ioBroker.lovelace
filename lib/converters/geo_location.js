const utils = require('./utils');

exports.processLocation = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    // - geo_location => attributes: [latitude, longitude, passive, icon, radius, entity_picture, gps_accuracy, source]
    const entity = utils.processCommon(name, room, func, _obj, 'geo_location', forcedEntityId);

    entity.context.STATE = {getId: null};
    entity.context.ATTRIBUTES = [];
    entity.attributes.icon = 'mdi:crosshairs-gps';

    let state = control.states.find(s => s.id && s.name === 'GPS');
    if (state && state.id) {
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

        entity.context.ATTRIBUTES.push({
            attribute: 'latitude',
            getId: state.id,
            getParser: getParser,
            historyParser: (id, val) => {
                val = (val || '').toString();
                let parts = val.toString().split(';');
                if (parts.length !== 2) {
                    parts = val.toString().split(',');
                }
                return parts[0];
            }
        }, {
            attribute: 'longitude',
            getId: state.id,
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
        utils.addID2entity(state.id, entity);
    } else {
        state = control.states.find(s => s.id && s.name === 'LATITUDE');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'latitude', getId: state.id});
            utils.addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === 'LONGITUDE');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({attribute: 'longitude', getId: state.id});
            utils.addID2entity(state.id, entity);
        }
    }

    state = control.states.find(s => s.id && s.name === 'RADIUS');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({attribute: 'radius', getId: state.id});
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'ACCURACY');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({attribute: 'gps_accuracy', getId: state.id});
        utils.addID2entity(state.id, entity);
    }

    entity.attributes.source = 'gps';

    return [entity];
};
