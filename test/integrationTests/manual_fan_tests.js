/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('manual_fan', getHarness => {
        let harness;
        let entities;
        let objects;

        const jsonFiles = ['../testData/manual_fan.json'];
        const idsWithEnums = [];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            harness = getHarness();
            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
            console.log(entities);
        });

        it('builds a fan with presets, oscillation and direction from the picked states', () => {
            const deviceId = '0_userdata.0.fan.speed';
            const entity = entities.find(e => e.context.deviceId === deviceId && e.context.type === 'fan');
            expect(entity).to.be.ok;
            expect(entity.entity_id).to.equal('fan.room_fan');
            expect(entity.attributes.preset_modes).to.deep.equal(['off', 'low', 'high']);
            // SET_SPEED(1) | OSCILLATE(2) | DIRECTION(4) | PRESET_MODE(8) = 15
            expect(entity.attributes.supported_features).to.equal(15);
            const services = entity.context.COMMANDS.map(c => c.service);
            expect(services).to.include.members(['set_preset_mode', 'oscillate', 'set_direction']);
        });
    });
};
