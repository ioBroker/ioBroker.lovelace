/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('manual_water_heater', getHarness => {
        let harness;
        let entities;
        let objects;

        const jsonFiles = ['../testData/manual_water_heater.json'];
        const idsWithEnums = [];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            harness = getHarness();
            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
            console.log(entities);
        });

        it('builds a water_heater entity with temperatures, operation list and features (#bridge)', () => {
            const deviceId = '0_userdata.0.wh.set';
            const entity = entities.find(e => e.context.deviceId === deviceId && e.context.type === 'water_heater');
            expect(entity).to.be.ok;
            expect(entity.entity_id).to.equal('water_heater.boiler');
            expect(entity.attributes.operation_list).to.deep.equal(['off', 'eco', 'performance']);
            // TARGET_TEMPERATURE(1) | OPERATION_MODE(2) | ON_OFF(8) = 11
            expect(entity.attributes.supported_features).to.equal(11);
            const services = entity.context.COMMANDS.map(c => c.service).sort();
            expect(services).to.include.members(['set_temperature', 'set_operation_mode', 'turn_on', 'turn_off']);
        });
    });
};
