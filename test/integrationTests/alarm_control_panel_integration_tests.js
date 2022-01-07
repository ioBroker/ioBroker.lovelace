const tools  = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (getHarness) {
    it('alarm control panel without arm state', async () => {
        // Create a fresh harness instance each test!
        const harness = getHarness();

        const objects = JSON.parse(JSON.stringify(require('../testData/alarm_control_panel_noArmState.json')));
        const deviceId = 'adapter.0.alarm_control_panel.noArmState';
        const deviceObj = objects[deviceId];
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [
            {id: deviceId, val: 0}
        ]);

        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'alarm_control_panel', deviceId, deviceObj.name);

        expect(entity).to.have.property('state', 'disarmed');
        expect(entity).to.have.nested.property('attributes.code_format', 'number');
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId, 1, true),
            entity => expect(entity).to.nested.property('state', 'armed'));
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId, 6, true),
            entity => expect(entity).to.have.property('state', 'pending'));
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId, 7, true),
            entity => expect(entity).to.have.property('state', 'arming'));

        //correct code:
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'alarm_control_panel'; m.service = 'alarm_disarm'; m.service_data = {code: 2704};
        }, deviceId, state => expect(state.val).to.equal(0));
        //aram again:
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'alarm_control_panel'; m.service = 'alarm_arm_away'; m.service_data = {code: 2704};
        }, deviceId, state => expect(state.val).to.equal(3));
        //wrong code -> do not disarm:
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'alarm_control_panel'; m.service = 'alarm_disarm'; m.service_data = {code: 1234};
        });
        const state = await harness.states.getStateAsync(deviceId);
        expect(state).to.have.property('val', 3);
    });
};
