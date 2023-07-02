const crypto        = require('crypto');
const utils       = require('./../entities/utils');

exports.processImage = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    // - geo_location => attributes: [latitude, longitude, passive, icon, radius, entity_picture, gps_accuracy, source]
    const entity = utils.processCommon(name, room, func, _obj, 'camera', forcedEntityId);

    entity.context.STATE = {getId: null};
    entity.context.ATTRIBUTES = [];
    entity.attributes.icon = 'mdi:camera-outline';

    const state = control.states.find(s => s.id && s.name === 'URL');
    if (state && state.id) {
        entity.context.STATE = {getValue: 'on'};
        entity.context.ATTRIBUTES = [{getId: state.id, attribute: 'url'}];
        entity.attributes.code_format = 'number';

        entity.attributes.access_token = crypto
            .createHmac('sha256', (crypto.webcrypto.getRandomValues(new Uint32Array(1))[0] * 1000000000).toString())
            .update(Date.now().toString())
            .digest('hex');

        entity.attributes.model_name = 'Simulated URL';
        entity.attributes.brand = 'ioBroker';
        entity.attributes.motion_detection = false;
        utils.addID2entity(state.id, entity);
    }

    return [entity];
};
