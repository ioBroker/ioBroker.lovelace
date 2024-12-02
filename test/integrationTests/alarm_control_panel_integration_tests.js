/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('alarm_control_panel', getHarness => {
        //adapter will keep running for all test. harness and initial entities will be initialized once in before.
        let harness;
        let entities;

        //load all test objects here:
        const objects = JSON.parse(JSON.stringify(require('../testData/alarm_control_panel_noArmState.json')));

        //start adapter and get inistial entities.
        const idsWithEnums = ['adapter.0.alarm_control_panel.noArmState'];
        const initialStates = [
            {
                id: 'adapter.0.alarm_control_panel.noArmState',
                val: 0,
            },
        ];
        before(async () => {
            tools.clearClient();
            //get harness && entities here.
            harness = getHarness();
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
        });

        it('alarm control panel without arm state', async () => {
            const deviceId = 'adapter.0.alarm_control_panel.noArmState';
            const deviceObj = objects[deviceId];

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'alarm_control_panel', deviceId, deviceObj.name);

            expect(entity).to.have.property('state', 'disarmed');
            expect(entity).to.have.nested.property('attributes.code_format', 'number');
            await tools.validateStateChange(
                harness,
                entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId, 1, true),
                entity => expect(entity).to.have.nested.property('state', 'armed'),
            );
            await tools.validateStateChange(
                harness,
                entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId, 6, true),
                entity => expect(entity).to.have.property('state', 'pending'),
            );
            await tools.validateStateChange(
                harness,
                entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId, 7, true),
                entity => expect(entity).to.have.property('state', 'arming'),
            );

            //correct code:
            await tools.validateUIInput(
                harness,
                entity,
                m => {
                    m.domain = 'alarm_control_panel';
                    m.service = 'alarm_disarm';
                    m.service_data = { code: 2704 };
                },
                deviceId,
                state => expect(state.val).to.equal(0),
            );
            //arm again:
            await tools.validateUIInput(
                harness,
                entity,
                m => {
                    m.domain = 'alarm_control_panel';
                    m.service = 'alarm_arm_away';
                    m.service_data = { code: 2704 };
                },
                deviceId,
                state => expect(state.val).to.equal(3),
            );
            //wrong code -> do not disarm:
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'alarm_control_panel';
                m.service = 'alarm_disarm';
                m.service_data = { code: 1234 };
            });
            const state = await harness.states.getStateAsync(deviceId);
            expect(state).to.have.property('val', 3);
        });
    });
};
