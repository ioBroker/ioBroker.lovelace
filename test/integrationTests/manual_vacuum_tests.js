/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('manual_vacuum', getHarness => {
        let harness;
        let entities;
        let objects;

        // A manual vacuum configured via the states picker (POWER/STATE/BATTERY/WORK_MODE).
        const jsonFiles = ['../testData/manual_vacuum.json'];

        const idsWithEnums = [];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            harness = getHarness();
            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
            console.log(entities);
        });

        it('builds a vacuum entity with battery, fan_speed and the expected features (#bridge)', () => {
            const deviceId = '0_userdata.0.vac.power';
            const entity = entities.find(e => e.context.deviceId === deviceId && e.context.type === 'vacuum');
            expect(entity).to.be.ok;
            expect(entity.entity_id).to.equal('vacuum.robi');
            // STATE(4096) | START(8192) | STOP(8) | BATTERY(64) | FAN_SPEED(32) = 12448
            expect(entity.attributes.supported_features).to.equal(4096 + 8192 + 8 + 64 + 32);
            expect(entity.attributes.fan_speed_list).to.deep.equal(['quiet', 'standard', 'max']);
            // commands wired
            const services = entity.context.COMMANDS.map(c => c.service).sort();
            expect(services).to.include.members(['start', 'stop', 'set_fan_speed']);
        });
    });
};
