const tools  = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (getHarness) {
    it('input_select should be created and controllable', async () => {
        // Create a fresh harness instance each test!
        const harness = getHarness();

        const objects = JSON.parse(JSON.stringify(require('../testData/input_select_with_states.json')));
        const deviceId = 'adapter.0.input_select.with_states';
        const deviceObj = objects[deviceId];
        const entities = await tools.startAndGetEntities(harness, objects, [], [{id: deviceId, val: 1}]);

        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'input_select', deviceId, deviceObj.name);
        expect(entity).to.have.property('entity_id', 'input_select.input_select_with_states');

        expect(entity).to.have.property('state', 'state1');
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId, 0, true),
            entity => expect(entity).to.have.property('state', 'state0'));
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId, 4, true),
            entity => expect(entity).to.have.property('state', 'state4'));
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId, 7, true),
            entity => expect(entity).to.have.property('state', 7));

        console.log('Sending UI commands.');
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'input_select'; m.service = 'select_option'; m.service_data = {option: 'state0'};
        }, deviceId, state => expect(state.val).to.equal(0));
        await tools.validateUIInput(harness, entity, m => {
            m.domain = 'input_select'; m.service = 'select_option'; m.service_data = {option: 'state4'};
        }, deviceId, state => expect(state.val).to.equal(4));
        await tools.validateUIInput(harness, entity, m => {
            m.domain = 'input_select'; m.service = 'select_option'; m.service_data = {option: 9};
        }, deviceId, state => expect(state.val).to.equal(9));
    });

    it('input_select with wrong states should be created and controllabel', async () => {
        // Create a fresh harness instance each test!
        const harness = getHarness();

        const objects = JSON.parse(JSON.stringify(require('../testData/input_select_with_states.json')));
        const deviceId = 'adapter.0.input_select.with_states';
        const deviceObj = objects[deviceId];
        const states = deviceObj.common.states;
        deviceObj.common.states = Object.keys(states).reduce((x, key) => x + (x ? ';' : '') + key + ':' + states[key], '');
        const entities = await tools.startAndGetEntities(harness, objects, [], [{id: deviceId, val: 0}]);

        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'input_select', deviceId, deviceObj.name);
        expect(entity).to.have.property('entity_id', 'input_select.input_select_with_states');

        expect(entity).to.have.property('state', 'state0');
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId, 2, true),
            entity => expect(entity).to.have.property('state', 'state2'));
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId, 3, true),
            entity => expect(entity).to.have.property('state', 'state3'));
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId, 7, true),
            entity => expect(entity).to.have.property('state', 7));

        console.log('Sending UI commands.');
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'input_select'; m.service = 'select_option'; m.service_data = {option: 'state5'};
        }, deviceId, state => expect(state.val).to.equal(5));
        await tools.validateUIInput(harness, entity, m => {
            m.domain = 'input_select'; m.service = 'select_option'; m.service_data = {option: 'state0'};
        }, deviceId, state => expect(state.val).to.equal(0));
        await tools.validateUIInput(harness, entity, m => {
            m.domain = 'input_select'; m.service = 'select_option'; m.service_data = {option: 9};
        }, deviceId, state => expect(state.val).to.equal(9));
    });
};
