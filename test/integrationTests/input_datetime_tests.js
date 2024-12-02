/* global it before */
const tools = require('./testTools');
const { waitForEntitiesUpdate } = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('input_datetime', getHarness => {
        //adapter will keep running for all test. harness and initial entities will be initialized once in before.
        let harness;
        let entities;
        let objects;

        //load all test objects here:
        const jsonFiles = ['../testData/input_datetime_custom.json'];

        //start adapter and get initial entities.
        const idsWithEnums = [];
        const initialStates = [{ id: 'adapter.0.input_datetime.custom_test', val: 0 }];
        before(async () => {
            tools.clearClient();
            //get harness && entities here.
            harness = getHarness();
            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
        });

        const deviceId = 'adapter.0.input_datetime.custom_test';
        it('input_datetime should be created and controllable', async () => {
            const deviceObj = objects[deviceId];
            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'input_datetime', deviceId, deviceObj.name);

            const date0 = new Date(0);
            expect(entity).to.have.nested.property('attributes.has_time', true);
            expect(entity).to.have.nested.property('attributes.has_date', true);
            expect(entity).to.have.nested.property('attributes.year', date0.getFullYear());
            expect(entity).to.have.nested.property('attributes.month', date0.getMonth() + 1);
            expect(entity).to.have.nested.property('attributes.day', date0.getDate());
            expect(entity).to.have.nested.property(
                'attributes.hour',
                (date0.getHours() < 10 ? '0' : '') + date0.getHours(),
            );
            expect(entity).to.have.nested.property(
                'attributes.minute',
                (date0.getMinutes() < 10 ? '0' : '') + date0.getMinutes(),
            );
            const now = new Date();
            await tools.validateStateChange(
                harness,
                entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId, now.getTime(), true),
                entity => {
                    expect(entity).to.have.nested.property('attributes.year', now.getFullYear());
                    expect(entity).to.have.nested.property('attributes.month', now.getMonth() + 1);
                    expect(entity).to.have.nested.property('attributes.day', now.getDate());
                    expect(entity).to.have.nested.property(
                        'attributes.hour',
                        (now.getHours() < 10 ? '0' : '') + now.getHours(),
                    );
                    expect(entity).to.have.nested.property(
                        'attributes.minute',
                        (now.getMinutes() < 10 ? '0' : '') + now.getMinutes(),
                    );
                },
            );

            console.log('Sending UI commands.');
            await tools.validateUIInput(
                harness,
                entity,
                m => {
                    m.domain = 'input_select';
                    m.service = 'set_datetime';
                    m.service_data = { date: '2021-07-19', time: '10:03' };
                },
                deviceId,
                state => expect(state.val).to.equal(new Date(2021, 6, 19, 10, 3).getTime()),
            );
        });

        //uses '../testData/input_datetime_custom.json'
        it('input_datetime should ignore has_date false', async () => {
            const deviceObj = JSON.parse(JSON.stringify(objects[deviceId]));
            deviceObj.common.custom['lovelace.0'].has_date = false;
            const entities = await waitForEntitiesUpdate(harness, [deviceObj]); //update attribute.

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'input_datetime', deviceId, deviceObj.name);
            expect(entity).to.have.nested.property('attributes.has_time', true);
            expect(entity).to.have.nested.property('attributes.has_date', true);
        });

        it('input_datetime should ignore has_date true', async () => {
            const deviceObj = JSON.parse(JSON.stringify(objects[deviceId]));
            deviceObj.common.custom['lovelace.0'].has_date = true;
            deviceObj.common.custom['lovelace.0'].attr_has_date = false;
            const entities = await waitForEntitiesUpdate(harness, [deviceObj]); //update attribute.

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'input_datetime', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.has_time', true);
            expect(entity).to.have.nested.property('attributes.has_date', false);
        });

        it('input_datetime should ignore has_time false', async () => {
            const deviceObj = JSON.parse(JSON.stringify(objects[deviceId]));
            deviceObj.common.custom['lovelace.0'].has_time = false;
            deviceObj.common.custom['lovelace.0'].attr_has_time = true;
            const entities = await waitForEntitiesUpdate(harness, [deviceObj]); //update attribute.

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'input_datetime', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.has_time', true);
            expect(entity).to.have.nested.property('attributes.has_date', true);
        });

        it('input_datetime should ignore has_time true', async () => {
            const deviceObj = JSON.parse(JSON.stringify(objects[deviceId]));
            deviceObj.common.custom['lovelace.0'].has_time = true;
            deviceObj.common.custom['lovelace.0'].attr_has_time = false;
            const entities = await waitForEntitiesUpdate(harness, [deviceObj]); //update attribute.

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'input_datetime', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.has_time', false);
            expect(entity).to.have.nested.property('attributes.has_date', true);
        });

        it('input_datetime should work without time', async () => {
            const deviceObj = JSON.parse(JSON.stringify(objects[deviceId]));
            deviceObj.common.custom['lovelace.0'].attr_has_time = false;
            await harness.states.setStateAsync(deviceId, 0, true);
            const entities = await waitForEntitiesUpdate(harness, [deviceObj]); //update attribute.

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'input_datetime', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.has_time', false);
            expect(entity).to.have.nested.property('attributes.has_date', true);
            expect(entity).to.have.nested.property('attributes.year', 1970);
            expect(entity).to.have.nested.property('attributes.month', 1);
            expect(entity).to.have.nested.property('attributes.day', 1);
            expect(entity).to.not.have.nested.property('attributes.hour');
            expect(entity).to.not.have.nested.property('attributes.minute');
            const now = new Date();
            await tools.validateStateChange(
                harness,
                entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId, now.getTime(), true),
                entity => {
                    expect(entity).to.have.nested.property('attributes.year', now.getFullYear());
                    expect(entity).to.have.nested.property('attributes.month', now.getMonth() + 1);
                    expect(entity).to.have.nested.property('attributes.day', now.getDate());
                    expect(entity).to.not.have.nested.property('attributes.hour');
                    expect(entity).to.not.have.nested.property('attributes.minute');
                },
            );

            console.log('Sending UI commands.');
            await tools.validateUIInput(
                harness,
                entity,
                m => {
                    m.domain = 'input_select';
                    m.service = 'set_datetime';
                    m.service_data = { date: '2021-07-19' };
                },
                deviceId,
                state => expect(state.val).to.equal(new Date('2021-07-19').getTime()),
            );
        });

        it('input_datetime should work without date', async () => {
            const deviceObj = JSON.parse(JSON.stringify(objects[deviceId]));
            deviceObj.common.custom['lovelace.0'].attr_has_date = false;
            await harness.states.setStateAsync(deviceId, 0, true);
            const entities = await waitForEntitiesUpdate(harness, [deviceObj]); //update attribute.

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'input_datetime', deviceId, deviceObj.name);

            const date0 = new Date(0);
            expect(entity).to.have.nested.property('attributes.has_time', true);
            expect(entity).to.have.nested.property('attributes.has_date', false);
            expect(entity).to.not.have.nested.property('attributes.year');
            expect(entity).to.not.have.nested.property('attributes.month');
            expect(entity).to.not.have.nested.property('attributes.day');
            expect(entity).to.have.nested.property(
                'attributes.hour',
                (date0.getHours() < 10 ? '0' : '') + date0.getHours(),
            );
            expect(entity).to.have.nested.property(
                'attributes.minute',
                (date0.getMinutes() < 10 ? '0' : '') + date0.getMinutes(),
            );
            const now = new Date();
            await tools.validateStateChange(
                harness,
                entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId, now.getTime(), true),
                entity => {
                    expect(entity).to.have.nested.property(
                        'attributes.hour',
                        (now.getHours() < 10 ? '0' : '') + now.getHours(),
                    );
                    expect(entity).to.have.nested.property(
                        'attributes.minute',
                        (now.getMinutes() < 10 ? '0' : '') + now.getMinutes(),
                    );
                },
            );

            console.log('Sending UI commands.');
            await tools.validateUIInput(
                harness,
                entity,
                m => {
                    m.domain = 'input_select';
                    m.service = 'set_datetime';
                    m.service_data = { time: '9:31' };
                },
                deviceId,
                state =>
                    expect(state.val).to.equal(
                        new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 31).getTime(),
                    ),
            );
        });

        it('input_datetime should work with string object', async () => {
            const deviceObj = JSON.parse(JSON.stringify(objects[deviceId]));
            deviceObj.common.type = 'string';
            await harness.states.setStateAsync(deviceId, '2022-04-10 13:15', true);
            const entities = await waitForEntitiesUpdate(harness, [deviceObj]); //update attribute.

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'input_datetime', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.has_time', true);
            expect(entity).to.have.nested.property('attributes.has_date', true);
            expect(entity).to.have.nested.property('attributes.year', 2022);
            expect(entity).to.have.nested.property('attributes.month', 4);
            expect(entity).to.have.nested.property('attributes.day', 10);
            expect(entity).to.have.nested.property('attributes.hour', 13);
            expect(entity).to.have.nested.property('attributes.minute', 15);
            const now = new Date();
            await tools.validateStateChange(
                harness,
                entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId, now.getTime(), true),
                entity => {
                    expect(entity).to.have.nested.property('attributes.year', now.getFullYear());
                    expect(entity).to.have.nested.property('attributes.month', now.getMonth() + 1);
                    expect(entity).to.have.nested.property('attributes.day', now.getDate());
                    expect(entity).to.have.nested.property(
                        'attributes.hour',
                        (now.getHours() < 10 ? '0' : '') + now.getHours(),
                    );
                    expect(entity).to.have.nested.property(
                        'attributes.minute',
                        (now.getMinutes() < 10 ? '0' : '') + now.getMinutes(),
                    );
                },
            );

            console.log('Sending UI commands.');
            await tools.validateUIInput(
                harness,
                entity,
                m => {
                    m.domain = 'input_select';
                    m.service = 'set_datetime';
                    m.service_data = { date: '2021-07-19', time: '10:03' };
                },
                deviceId,
                state => expect(state.val).to.equal('2021-07-19 10:03:00'),
            );
        });
    });
};
