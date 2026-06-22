/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('manual_light', getHarness => {
        let harness;
        let entities;
        let objects;

        const jsonFiles = ['../testData/manual_light.json'];
        const idsWithEnums = [];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            harness = getHarness();
            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
            console.log(entities);
        });

        it('builds a dimmable color-temp light from the picked states (synthetic-control bridge)', () => {
            const deviceId = '0_userdata.0.li.on';
            const entity = entities.find(e => e.context.deviceId === deviceId && e.context.type === 'light');
            expect(entity).to.be.ok;
            expect(entity.entity_id).to.equal('light.desk_lamp');
            expect(entity.attributes.supported_color_modes).to.include('color_temp');
            expect(entity.context.STATE.setId).to.equal(deviceId);
        });
    });
};
