/* global describe it before */
const tools = require('./testTools');
const expect = require('chai').expect;

/**
 * Find the entity of one domain belonging to an ioBroker device. A blind with a level state
 * creates two entities for the same device: the cover and a companion input_number slider.
 *
 * @param {Array<object>} entities - entity list from the adapter
 * @param {string} deviceId - ioBroker device root id
 * @param {string} type - entity domain, i.e. 'cover' or 'input_number'
 */
function findOfType(entities, deviceId, type) {
    return entities.find(e => e.context.deviceId === deviceId && e.context.type === type);
}

exports.runTests = function (suite) {
    suite('cover', getHarness => {
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
            objects = await tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
        });

        describe('blinds with a level state', () => {
            jsonFiles.push('../testData/cover_blindsLevel.json');
            idsWithEnums.push('adapter.0.cover.blindsLevel');
            initialStates.push({ id: 'adapter.0.cover.blindsLevel.level', val: 0 });
            it('reports its position and can be driven to one', async () => {
                const deviceId = 'adapter.0.cover.blindsLevel';
                const entity = findOfType(entities, deviceId, 'cover');
                tools.expectEntity(entity, 'cover', deviceId);
                expect(entity).to.have.nested.property('attributes.device_class', 'blind');
                // 1 open + 2 close + 4 position + 8 stop
                expect(entity).to.have.nested.property('attributes.supported_features', 15);
                expect(entity).to.have.property('state', 'closed'); //level 0
                expect(entity).to.have.nested.property('attributes.current_position', 0);

                await tools.validateStateChange(
                    harness,
                    entity.entity_id,
                    async () => await harness.states.setStateAsync(`${deviceId}.level`, 30, true),
                    entity => {
                        expect(entity).to.have.property('state', '30');
                        expect(entity).to.have.nested.property('attributes.current_position', 30);
                    },
                );

                await tools.validateStateChange(
                    harness,
                    entity.entity_id,
                    async () => await harness.states.setStateAsync(`${deviceId}.level`, 100, true),
                    entity => {
                        expect(entity).to.have.property('state', 'open');
                        expect(entity).to.have.nested.property('attributes.current_position', 100);
                    },
                );

                await tools.validateUIInput(
                    harness,
                    entity,
                    m => {
                        m.domain = 'cover';
                        m.service = 'set_cover_position';
                        m.service_data = { position: 70 };
                    },
                    `${deviceId}.level`,
                    state => expect(state.val).to.equal(70),
                );
            });

            it('offers a slider for its position as well', async () => {
                const deviceId = 'adapter.0.cover.blindsLevel';
                const slider = findOfType(entities, deviceId, 'input_number');
                tools.expectEntity(slider, 'input_number', deviceId);
                expect(slider).to.have.nested.property('attributes.min', 0);
                expect(slider).to.have.nested.property('attributes.max', 100);
                expect(slider).to.have.nested.property('attributes.mode', 'slider');
                expect(slider).to.have.nested.property('context.STATE.setId', `${deviceId}.level`);
            });

            it('uses the up, down and stop buttons it has', async () => {
                const deviceId = 'adapter.0.cover.blindsLevel';
                const entity = findOfType(entities, deviceId, 'cover');

                await tools.validateUIInput(
                    harness,
                    entity,
                    m => {
                        m.domain = 'cover';
                        m.service = 'open_cover';
                        m.service_data = {};
                    },
                    `${deviceId}.up`,
                    state => expect(state.val).to.equal(true),
                );

                await tools.validateUIInput(
                    harness,
                    entity,
                    m => {
                        m.domain = 'cover';
                        m.service = 'close_cover';
                        m.service_data = {};
                    },
                    `${deviceId}.down`,
                    state => expect(state.val).to.equal(true),
                );

                await tools.validateUIInput(
                    harness,
                    entity,
                    m => {
                        m.domain = 'cover';
                        m.service = 'stop_cover';
                        m.service_data = {};
                    },
                    `${deviceId}.stop`,
                    state => expect(state.val).to.equal(true),
                );
            });
        });

        describe('blinds with level and tilt', () => {
            jsonFiles.push('../testData/cover_blindsLevelTilt.json');
            idsWithEnums.push('adapter.0.cover.blindsLevelTilt');
            initialStates.push(
                { id: 'adapter.0.cover.blindsLevelTilt.level', val: 50 },
                { id: 'adapter.0.cover.blindsLevelTilt.tilt', val: 20 },
            );
            it('reports the tilt and can be tilted', async () => {
                const deviceId = 'adapter.0.cover.blindsLevelTilt';
                const entity = findOfType(entities, deviceId, 'cover');
                tools.expectEntity(entity, 'cover', deviceId);
                // 15 as above + 128 tilt position
                expect(entity).to.have.nested.property('attributes.supported_features', 143);
                expect(entity).to.have.nested.property('attributes.current_tilt_position', 20);

                await tools.validateStateChange(
                    harness,
                    entity.entity_id,
                    async () => await harness.states.setStateAsync(`${deviceId}.tilt`, 80, true),
                    entity => expect(entity).to.have.nested.property('attributes.current_tilt_position', 80),
                );

                await tools.validateUIInput(
                    harness,
                    entity,
                    m => {
                        m.domain = 'cover';
                        m.service = 'set_cover_tilt_position';
                        m.service_data = { tilt_position: 35 };
                    },
                    `${deviceId}.tilt`,
                    state => expect(state.val).to.equal(35),
                );
            });
        });

        describe('blinds with a level state only', () => {
            jsonFiles.push('../testData/cover_blinds_only_level.json');
            idsWithEnums.push('adapter.0.cover.blinds_only_level');
            initialStates.push({ id: 'adapter.0.cover.blinds_only_level.level', val: 50 });
            it('opens and closes by writing the level, as it has no buttons for it', async () => {
                const deviceId = 'adapter.0.cover.blinds_only_level';
                const entity = findOfType(entities, deviceId, 'cover');
                tools.expectEntity(entity, 'cover', deviceId);
                expect(entity).to.have.nested.property('attributes.supported_features', 15);

                await tools.validateUIInput(
                    harness,
                    entity,
                    m => {
                        m.domain = 'cover';
                        m.service = 'open_cover';
                        m.service_data = {};
                    },
                    `${deviceId}.level`,
                    state => expect(state.val).to.equal(100),
                );

                await tools.validateUIInput(
                    harness,
                    entity,
                    m => {
                        m.domain = 'cover';
                        m.service = 'close_cover';
                        m.service_data = {};
                    },
                    `${deviceId}.level`,
                    state => expect(state.val).to.equal(0),
                );
            });
        });

        describe('blinds with buttons only', () => {
            jsonFiles.push('../testData/cover_blindsButtons.json');
            idsWithEnums.push('adapter.0.cover.blindsButton');
            initialStates.push(
                { id: 'adapter.0.cover.blindsButton.up', val: false },
                { id: 'adapter.0.cover.blindsButton.working', val: false },
            );
            it('has no position, only the buttons and a working indicator', async () => {
                const deviceId = 'adapter.0.cover.blindsButton';
                const entity = findOfType(entities, deviceId, 'cover');
                tools.expectEntity(entity, 'cover', deviceId);
                // 1 open + 2 close + 8 stop, no position
                expect(entity).to.have.nested.property('attributes.supported_features', 11);
                expect(findOfType(entities, deviceId, 'input_number')).to.be.undefined;

                const working = entities.find(e => e.context.deviceId === deviceId && e.context.iobType === 'WORKING');
                expect(working, 'working indicator').to.be.ok;

                await tools.validateUIInput(
                    harness,
                    entity,
                    m => {
                        m.domain = 'cover';
                        m.service = 'open_cover';
                        m.service_data = {};
                    },
                    `${deviceId}.up`,
                    state => expect(state.val).to.equal(true),
                );
            });
        });
    });
};
