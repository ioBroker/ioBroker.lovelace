const tools  = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (getHarness) {
    it('geo_location with two states should be created and updated', async () => {
        // Create a fresh harness instance each test!
        const harness = getHarness();

        const objects = JSON.parse(JSON.stringify(require('../testData/geo_location_two_states.json')));
        const deviceId = 'adapter.0.geo_location.twoStates';
        const deviceObj = objects[deviceId];
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [
            {id: deviceId + '.latitude', val: 53.7},
            {id: deviceId + '.longitude', val: 7.18},
            {id: deviceId + '.accuracy', val: 15}
        ]);

        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'geo_location', deviceId, deviceObj.name);

        expect(entity).to.have.nested.property('attributes.latitude', 53.7);
        expect(entity).to.have.nested.property('attributes.longitude', 7.18);
        expect(entity).to.have.nested.property('attributes.gps_accuracy', 15);
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId + '.latitude', 54.7, true),
            entity => expect(entity).to.have.nested.property('attributes.latitude', 54.7));
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId + '.longitude', 7.13, true),
            entity => expect(entity).to.have.nested.property('attributes.longitude', 7.13));
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId + '.accuracy', 16, true),
            entity => expect(entity).to.have.nested.property('attributes.gps_accuracy', 16));
    });

    it('geo_location with single state should be created and updated', async () => {
        // Create a fresh harness instance each test!
        const harness = getHarness();

        const objects = JSON.parse(JSON.stringify(require('../testData/geo_location_single_state.json')));
        const deviceId = 'adapter.0.geo_location.singleState';
        const deviceObj = objects[deviceId];
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [
            {id: deviceId + '.GPS', val: '54.7;7.15'}]);

        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'geo_location', deviceId, deviceObj.name);

        expect(entity).to.have.nested.property('attributes.latitude', 54.7);
        expect(entity).to.have.nested.property('attributes.longitude', 7.15);
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId + '.GPS', '53.7;7.13', true),
            entity => {
                expect(entity).to.have.nested.property('attributes.latitude', 53.7);
                expect(entity).to.have.nested.property('attributes.longitude', 7.13);
            });
    });
};
