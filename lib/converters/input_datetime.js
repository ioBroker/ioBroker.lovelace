
function timeToAttributes(entity, date) {
    entity.state = date.getTime(); //state is timestamp? Hopyfully?? Pretty please?? -> but seems to be ignored by lovelace anyway, only not allowed to be "unknown".
    entity.attributes.year = date.getFullYear();
    entity.attributes.month = date.getMonth() + 1; //expects 1-12 it seems
    entity.attributes.day = date.getDate();
    entity.attributes.hour = date.getHours();
    entity.attributes.minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
}

function fillEntityFromStates(states, objects, entity) {
    let isString = false;
    if (states.state && objects[states.state] && objects[states.state].common) {
        isString = objects[states.state].common.type === 'string';
    }

    if (!entity.context.COMMANDS) {
        entity.context.COMMANDS = [];
    }
    entity.context.COMMANDS.push({
        service: 'set_datetime',
        isString: isString,
        setId: entity.context.STATE.setId,
        parseCommand: async (entity, command, data, user) => {
            //service_data contains entity_id, date and time (both optional)
            data = data.service_data;
            let targetData = (entity.attributes.has_date ? (data.date + ' ') : '') + (entity.attributes.has_time ? data.time : '');
            if (!command.isString) {
                let date = new Date(); //if no date is set, use today.
                if (entity.attributes.has_date) {
                    if (data.date) {
                        date = new Date(data.date);
                    } else {
                        date = new Date(entity.attributes.year, entity.attributes.month - 1, entity.attributes.day);
                    }
                }
                if (entity.attributes.has_time && data.time) {
                    const parts = data.time.split(':');
                    date.setHours(parseInt(parts[0], 10));
                    date.setMinutes(parseInt(parts[1], 10));
                }
                targetData = date.getTime();
            }
            return this.adapter.setForeignStateAsync(command.setId, targetData, false, {user});
        }
    });
    entity.context.STATE.getParser = function (entity, attr, state) {
        state = state || {val: null};
        const date = new Date(state.val);
        if (date.getTime() >= 0) { //is valid date?
            timeToAttributes(entity, date);
        } else {
            this.adapter.log.warn(state.val + ' is not a valid date. Error in ' + entity.entity_id);
            entity.state = 'unknown';
        }
    };
    this._addID2entity(states.state, entity);

    return [entity];
}

/**
 * Create manual input_datetime entity.
 * @param id - id of "main" object, i.e. state.
 * @param obj - iobroker object of id param
 * @param entity - already created entity
 * @returns {Promise<[entity]>}
 */
exports.processManualDateTime = async function(id, obj, entity) {
    const custom = obj.common.custom[this.adapter.namespace];
    const states = custom.states || {
        state: id
    };

    const objects = await this._createObjectsFromArrayOfIds(Object.values(states));
    entity.attributes.has_time = custom.has_time;
    entity.attributes.has_date = custom.has_date || true; //date on by default.
    return fillEntityFromStates.call(this, states, objects, entity);
};
