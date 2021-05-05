

function fillEntityFromStates(states, objects, entity) {
    // - alarm_control_panel =>
    // STATE disarmed/armed/armed_home/armed_away/armed_night/armed_custom_bypass/pending/arming/disarming/triggered
    // attributes: [code_format]
    // commands: alarm_arm_away, alarm_arm_home, alarm_arm_night, alarm_arm_custom_bypass, alarm_disarm (code will be sent)
    // we support only armed/disarmed
    // the code must be in the object in native as alarm_code

    entity.attributes.code_format = 'number';
    if (states.state) {
        const obj = objects[states.state];
        if (obj && obj.common) {
            if (obj.common.custom && obj.common.custom[this.adapter.namespace]) {
                entity.attributes.code_format = obj.common.custom[this.adapter.namespace].code_format || 'number';
            }
            //boolean -> just true/false. Otherwise enter string.
            entity.context.STATE.isBoolean = obj.common.type === 'boolean';
            entity.context.STATE.map = obj.common.states;
        }
        entity.context.STATE.setId = states.state;
        this._addID2entity(states.state, entity);
    }

    if (states.arm_state) {
        const id = states.arm_state;
        entity.context.STATE.arm_state = id;
        const obj = objects[id];
        if (obj && obj.common) {
            entity.context.STATE.arm_state_map = obj.common.states;
        }
        entity.context.STATE.getParser = (entity, attr, state) => {
            if (!state) {
                entity.state = 'unknown';
                return;
            }
            if (state.val === true) {
                entity.state = 'armed';
            } else if (state.val === false) {
                entity.state = 'disarmed';
            } else {
                if (entity.context.STATE.arm_state_map && entity.context.STATE.arm_state_map[state.val]) {
                    entity.state = entity.context.STATE.arm_state_map[state.val]; //translate state using states map.
                } else {
                    entity.state = state.val;
                }
            }
        };
        this._addID2entity(id, entity);
    } else { //no status object:
        entity.context.STATE.getParser = (entity, attr, state) => {
            if (!state) {
                entity.state = 'unknown';
                return;
            }
            if (entity.context.STATE.isBoolean) {
                entity.state = state.val ? 'armed' : 'disarmed';
            } else {
                if (entity.context.STATE.map && entity.context.STATE.map[state.val]) {
                    entity.state = entity.context.STATE.map[state.val]; //translate state using states map.
                } else {
                    entity.state = state.val;
                }
            }
        };
    }

    const processCommand = async (entity, command, data, user) => {
        const targetState = data.service.replace('alarm_', '').replace('arm', 'armed');
        //  alarm_arm_away, alarm_arm_home, alarm_arm_night, alarm_arm_custom_bypass, alarm_disarm (code will be sent)
        const id = entity.context.STATE.setId;
        this.log.debug(data.service + ': ' + id + ' = ' + data.service_data.code ? 'XXX' : 'none');

        //require code to disarm.
        if (targetState.includes('disarm')) {
            if ((data.service_data == null || data.service_data.code == null)) {
                throw new Error('code is empty');
            }

            const obj = await this.adapter.getForeignObjectAsync(id);
            if (!obj.native.alarm_code) {
                this.log.warn(`No code is defined! To provide the code add to object ${id} native.alarm_code with desired code`);
                throw new Error('iobroker misconfigured.');
            } else if (obj.native.alarm_code.toString() !== data.service_data.code.toString()) {
                throw new Error('invalid code');
            }
        }

        //ok, now set some objects:
        if (entity.context.STATE.isBoolean) {
            await this.adapter.setForeignStateAsync(entity.context.STATE.setId, !targetState.includes('disarm'), false, {user});
        } else {
            let valToSet = targetState;
            if (entity.context.STATE.map) {
                valToSet = Object.keys(entity.context.STATE.map).find(key => entity.context.STATE.map[key] === targetState);
                if (!valToSet) {
                    valToSet = targetState;
                }
            }
            await this.adapter.setForeignStateAsync(entity.context.STATE.setId, valToSet, false, {user});
        }
        if (entity.context.STATE.arm_state) {
            let valToSet = targetState;
            if (entity.context.STATE.arm_state_map) {
                valToSet = Object.keys(entity.context.STATE.arm_state_map).find(key => entity.context.STATE.arm_state_map[key] === targetState);
                if (!valToSet) {
                    valToSet = targetState;
                }
            }
            await this.adapter.setForeignStateAsync(entity.context.STATE.arm_state, valToSet, false, {user});
        }
    };

    if (!entity.context.COMMANDS) {
        entity.context.COMMANDS = [];
    }
    entity.context.COMMANDS.push({
        service: 'alarm_arm_away',
        parseCommand: processCommand
    });
    entity.context.COMMANDS.push({
        service: 'alarm_arm_home',
        parseCommand: processCommand
    });
    entity.context.COMMANDS.push({
        service: 'alarm_arm_night',
        parseCommand: processCommand
    });
    entity.context.COMMANDS.push({
        service: 'alarm_arm_custom_bypass',
        parseCommand: processCommand
    });
    entity.context.COMMANDS.push({
        service: 'alarm_disarm',
        parseCommand: processCommand
    });

    return [entity];
}


/**
 * Create manual alarm_control_panel entity.
 * @param id - id of "main" object, i.e. state.
 * @param obj - iobroker object of id param
 * @param entity - already created entity
 * @returns {Promise<[entity]>}
 */
exports.processManualEntity = async function(id, obj, entity) {
    const custom = obj.common.custom[this.adapter.namespace];
    const states = custom.states || {
        state: id
    };

    const objects = await this._createObjectsFromArrayOfIds(Object.values(states));
    objects[id] = obj; //keep hack for 'our' alarm object.
    return fillEntityFromStates.call(this, states, objects, entity);
};
