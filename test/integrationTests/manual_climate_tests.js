/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('manual_climate', getHarness => {
        let harness;
        let entities;
        let objects;

        const jsonFiles = ['../testData/manual_climate.json'];
        const idsWithEnums = [];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            harness = getHarness();
            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
            console.log(entities);
        });

        it('builds a climate entity from the picked states (synthetic-control bridge)', () => {
            const deviceId = '0_userdata.0.th.set';
            const entity = entities.find(e => e.context.deviceId === deviceId && e.context.type === 'climate');
            expect(entity).to.be.ok;
            expect(entity.entity_id).to.equal('climate.living_thermo');
            expect(entity.attributes.hvac_modes).to.include('heat');
            const services = entity.context.COMMANDS.map(c => c.service);
            expect(services).to.include('set_temperature');
        });
    });
};
