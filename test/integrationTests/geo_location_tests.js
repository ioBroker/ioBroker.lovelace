/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('geo_location', getHarness => {
        //adapter will keep running for all test. harness and initial entities will be initialized once in before.
        let harness;
        let entities;
        let objects;

        //load all test objects here:
        const jsonFiles = [];

        //start adapter and get initial entities.
        const idsWithEnums = [];
        const initialStates = [];
        before(async () => {
            tools.clearClient();
            //get harness && entities here.
            harness = getHarness();

            // Provide valid home coordinates so distanceFromHome can compute a real distance.
            // Using Hamburg city centre (lat=53.55, lon=10.0) as the home location.
            const sysConfig = await harness.objects.getObjectAsync('system.config');
            sysConfig.common.latitude = 53.55;
            sysConfig.common.longitude = 10.0;
            await harness.objects.setObjectAsync('system.config', sysConfig);

            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
        });

        jsonFiles.push('../testData/geo_location_two_states.json');
        idsWithEnums.push('adapter.0.geo_location.twoStates');
        initialStates.push(
            { id: 'adapter.0.geo_location.twoStates.latitude', val: 53.7 },
            { id: 'adapter.0.geo_location.twoStates.longitude', val: 7.18 },
            { id: 'adapter.0.geo_location.twoStates.accuracy', val: 15 },
        );
        it('geo_location with two states should be created and updated', async () => {
            const deviceId = 'adapter.0.geo_location.twoStates';
            const deviceObj = objects[deviceId];

            const entity = entities.find(e => e.context.deviceId === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'geo_location', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.latitude', 53.7);
            expect(entity).to.have.nested.property('attributes.longitude', 7.18);
            expect(entity).to.have.nested.property('attributes.gps_accuracy', 15);
            expect(entity).to.have.nested.property('attributes.unit_of_measurement', 'km');
            // state = distance from home (numeric string with 1 decimal place)
            expect(parseFloat(entity.state)).to.be.a('number').and.not.be.NaN;

            const stateBeforeLatChange = entity.state;
            await tools.validateStateChange(
                harness,
                entity.entity_id,
                async () => await harness.states.setStateAsync(`${deviceId}.latitude`, 54.7, true),
                entity => {
                    expect(entity).to.have.nested.property('attributes.latitude', 54.7);
                    expect(parseFloat(entity.state)).to.be.a('number').and.not.be.NaN;
                    expect(entity.state).to.not.equal(stateBeforeLatChange);
                },
            );
            await tools.validateStateChange(
                harness,
                entity.entity_id,
                async () => await harness.states.setStateAsync(`${deviceId}.longitude`, 7.13, true),
                entity => {
                    expect(entity).to.have.nested.property('attributes.longitude', 7.13);
                    expect(parseFloat(entity.state)).to.be.a('number').and.not.be.NaN;
                },
            );
            await tools.validateStateChange(
                harness,
                entity.entity_id,
                async () => await harness.states.setStateAsync(`${deviceId}.accuracy`, 16, true),
                entity => expect(entity).to.have.nested.property('attributes.gps_accuracy', 16),
            );
        });

        jsonFiles.push('../testData/geo_location_single_state.json');
        idsWithEnums.push('adapter.0.geo_location.singleState');
        initialStates.push({ id: 'adapter.0.geo_location.singleState.GPS', val: '54.7;7.15' });
        it('geo_location with single state should be created and updated', async () => {
            const deviceId = 'adapter.0.geo_location.singleState';
            const deviceObj = objects[deviceId];

            const entity = entities.find(e => e.context.deviceId === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'geo_location', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.latitude', 54.7);
            expect(entity).to.have.nested.property('attributes.longitude', 7.15);
            expect(entity).to.have.nested.property('attributes.unit_of_measurement', 'km');
            expect(parseFloat(entity.state)).to.be.a('number').and.not.be.NaN;

            const stateBeforeGpsChange = entity.state;
            await tools.validateStateChange(
                harness,
                entity.entity_id,
                async () => await harness.states.setStateAsync(`${deviceId}.GPS`, '53.7;7.13', true),
                entity => {
                    expect(entity).to.have.nested.property('attributes.latitude', 53.7);
                    expect(entity).to.have.nested.property('attributes.longitude', 7.13);
                    expect(parseFloat(entity.state)).to.be.a('number').and.not.be.NaN;
                    expect(entity.state).to.not.equal(stateBeforeGpsChange);
                },
            );
        });
    });
};
