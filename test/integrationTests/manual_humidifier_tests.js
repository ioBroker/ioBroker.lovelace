/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('manual_humidifier', getHarness => {
        let harness;
        let entities;
        let objects;

        const jsonFiles = ['../testData/manual_humidifier.json'];
        const idsWithEnums = [];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            harness = getHarness();
            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
            console.log(entities);
        });

        it('builds a humidifier entity with target/current humidity and modes (#bridge)', () => {
            const deviceId = '0_userdata.0.hum.power';
            const entity = entities.find(e => e.context.deviceId === deviceId && e.context.type === 'humidifier');
            expect(entity).to.be.ok;
            expect(entity.entity_id).to.equal('humidifier.room_hum');
            expect(entity.attributes.supported_features).to.equal(1); // MODES
            expect(entity.attributes.available_modes).to.deep.equal(['normal', 'eco', 'boost']);
            const services = entity.context.COMMANDS.map(c => c.service).sort();
            expect(services).to.include.members(['turn_on', 'turn_off', 'set_humidity', 'set_mode']);
        });
    });
};
