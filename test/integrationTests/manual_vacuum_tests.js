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
            // STATE(4096) | START(8192) | STOP(8) | FAN_SPEED(32) = 12328. Home Assistant removed
            // VacuumEntityFeature.BATTERY (64) - the charge level is a sensor entity of its own now.
            expect(entity.attributes.supported_features).to.equal(4096 + 8192 + 8 + 32);
            expect(entity.attributes.fan_speed_list).to.deep.equal(['quiet', 'standard', 'max']);
            // commands wired
            const services = entity.context.COMMANDS.map(c => c.service).sort();
            expect(services).to.include.members(['start', 'stop', 'set_fan_speed']);
            // map image wired as entity_picture
            const pic = entity.context.ATTRIBUTES.find(a => a.attribute === 'entity_picture');
            expect(pic).to.be.ok;
            expect(pic.getId).to.equal('0_userdata.0.vac.map');
        });

        it('creates a battery sensor for the picked BATTERY state', () => {
            // The vacuum itself no longer shows a battery in Home Assistant, so the picked state
            // becomes its own sensor - the same one an auto-detected device gets.
            const sensor = entities.find(e => e.entity_id === 'sensor.robi_battery');
            expect(sensor).to.be.ok;
            expect(sensor.context.STATE.getId).to.equal('0_userdata.0.vac.battery');
            expect(sensor.attributes.device_class).to.equal('battery');
            expect(sensor.attributes.unit_of_measurement).to.equal('%');
            expect(sensor.attributes.state_class).to.equal('measurement');
        });
    });
};
