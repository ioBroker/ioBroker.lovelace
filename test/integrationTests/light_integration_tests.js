const tools  = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('light', (getHarness) => {
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

        describe('control tests', () => {
            jsonFiles.push('../testData/light_onOff.json');
            idsWithEnums.push('adapter.0.light.OnlyOnOff');
            initialStates.push({id: 'adapter.0.light.OnlyOnOff.state', val: true});
            it('entity for only on/off should be created and switched on/off', async () => {
                const deviceId = 'adapter.0.light.OnlyOnOff';
                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;
                tools.expectEntity(entity, 'light', deviceId);

                expect(entity).to.have.property('state', 'on');
                expect(entity).to.have.nested.property('attributes.color_mode', 'onoff');
                expect(entity.attributes.supported_color_modes).to.have.members(['onoff']);
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.state', false, true),
                    entity => expect(entity).to.have.property('state', 'off'));

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {};
                }, deviceId + '.state', state => expect(state.val).to.equal(true));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_off';
                    m.service_data = {};
                }, deviceId + '.state', state => expect(state.val).to.equal(false));
            });

            jsonFiles.push('../testData/light_brightness_no_state.json');
            idsWithEnums.push('adapter.0.light.BrightnessNoState');
            initialStates.push({id: 'adapter.0.light.BrightnessNoState.brightness', val: 0});
            it('entity for only brightness', async () => {
                const deviceId = 'adapter.0.light.BrightnessNoState';
                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;
                tools.expectEntity(entity, 'light', deviceId);

                expect(entity.attributes.supported_color_modes).to.have.members(['onoff', 'brightness']);
                expect(entity).to.have.nested.property('attributes.color_mode', 'brightness');
                expect(entity).to.have.nested.property('context.ATTRIBUTES');
                expect(entity.context.ATTRIBUTES).to.have.lengthOf(1);
                const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'brightness');
                expect(attr).to.be.ok;
                expect(entity).to.have.nested.property('context.COMMANDS');
                expect(entity.context.COMMANDS).to.have.lengthOf(2);
                const cmd = entity.context.COMMANDS.find(a => a.service === 'turn_on');
                expect(cmd).to.be.ok;

                expect(entity).to.have.property('state', 'off');
                expect(entity).to.have.nested.property('attributes.brightness', 0);
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.brightness', 50, true),
                    entity => {
                        expect(entity).to.have.property('state', 'on');
                        expect(entity.attributes.brightness).to.be.greaterThan(254 / 2);
                        expect(entity.attributes.brightness).to.be.lessThanOrEqual(255 / 2);
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.brightness', 0, true),
                    entity => {
                        expect(entity).to.have.property('state', 'off');
                        expect(entity.attributes.brightness).to.be.greaterThanOrEqual(0);
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.brightness', 100, true),
                    entity => {
                        expect(entity).to.have.property('state', 'on');
                        expect(entity.attributes.brightness).to.be.greaterThanOrEqual(254);
                    });

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness: 0};
                }, deviceId + '.brightness', state => expect(state.val).to.equal(0));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness: 255};
                }, deviceId + '.brightness', state => expect(state.val).to.equal(100));
                await tools.delay(500); //wait a little, because brightness will be set two times in this case!
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness: 129};
                }, deviceId + '.brightness', state => {
                    expect(state.val).to.greaterThanOrEqual(50);
                    expect(state.val).to.lessThanOrEqual(52);
                });
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_off';
                    m.service_data = {};
                }, deviceId + '.brightness', state => expect(state.val).to.equal(0));

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness_pct: 100};
                }, deviceId + '.brightness', state => expect(state.val).to.equal(100));
                await tools.delay(500); //wait a little, because brightness will be set two times in this case!
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_off';
                    m.service_data = {brightness_pct: 0};
                }, deviceId + '.brightness', state => expect(state.val).to.equal(0));
                await tools.delay(500); //wait a little, because brightness will be set two times in this case!
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness_pct: 50};
                }, deviceId + '.brightness', state => expect(state.val).to.greaterThanOrEqual(50));
                await tools.delay(500); //wait a little, because brightness will be set two times in this case!
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_off';
                    m.service_data = {};
                }, deviceId + '.brightness', state => expect(state.val).to.equal(0));
            });

            //also on '../testData/light_brightness_no_state.json' -> modifies it.
            it('entity for brightness with modified min/max', async () => {
                const deviceId = 'adapter.0.light.BrightnessNoState';
                const obj = JSON.parse(JSON.stringify(objects[deviceId + '.brightness']));
                obj.common.min = 10;
                obj.common.max = 110;
                await harness.states.setStateAsync(obj._id, 10, true);
                const entities = await tools.waitForEntitiesUpdate(harness, [obj]);

                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;
                tools.expectEntity(entity, 'light', deviceId);

                expect(entity).to.have.property('state', 'off');
                expect(entity).to.have.nested.property('attributes.brightness', 0);
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.brightness', 60, true),
                    entity => {
                        expect(entity).to.have.property('state', 'on');
                        expect(entity.attributes.brightness).to.be.greaterThan(254 / 2);
                        expect(entity.attributes.brightness).to.be.lessThanOrEqual(255 / 2);
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.brightness', 10, true),
                    entity => {
                        expect(entity).to.have.property('state', 'off');
                        expect(entity.attributes.brightness).to.be.greaterThanOrEqual(0);
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.brightness', 110, true),
                    entity => {
                        expect(entity).to.have.property('state', 'on');
                        expect(entity.attributes.brightness).to.be.greaterThanOrEqual(254);
                    });

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness: 0};
                }, deviceId + '.brightness', state => expect(state.val).to.equal(10));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness: 255};
                }, deviceId + '.brightness', state => expect(state.val).to.equal(110));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness: 129};
                }, deviceId + '.brightness', state => expect(state.val).to.greaterThanOrEqual(60));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_off';
                    m.service_data = {};
                }, deviceId + '.brightness', state => expect(state.val).to.equal(10));

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness_pct: 100};
                }, deviceId + '.brightness', state => expect(state.val).to.equal(110));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness_pct: 0};
                }, deviceId + '.brightness', state => expect(state.val).to.equal(10));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness_pct: 50};
                }, deviceId + '.brightness', state => expect(state.val).to.greaterThanOrEqual(60));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_off';
                    m.service_data = {};
                }, deviceId + '.brightness', state => expect(state.val).to.equal(10));
            });

            jsonFiles.push('../testData/light_brightness.json');
            idsWithEnums.push('adapter.0.light.BrightnessWithState');
            initialStates.push({id: 'adapter.0.light.BrightnessWithState.brightness', val: 0},
                {id: 'adapter.0.light.BrightnessWithState.state', val: false});
            it('entity should switch brightness and on/off', async () => {
                const deviceId = 'adapter.0.light.BrightnessWithState';
                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;
                tools.expectEntity(entity, 'light', deviceId);

                expect(entity).to.have.property('state', 'off');
                expect(entity).to.have.nested.property('attributes.brightness', 0);

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness: 255};
                }, deviceId + '.brightness', state => expect(state.val).to.equal(100));
                let state = await harness.states.getStateAsync(deviceId + '.state');
                expect(state.val).to.equal(true); //turn on should also turn state!
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_off';
                    m.service_data = {};
                }, deviceId + '.state', state => expect(state.val).to.equal(false));
                state = await harness.states.getStateAsync(deviceId + '.brightness');
                expect(state.val).to.equal(100); //turn off should leave brightness alone?

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness_pct: 100};
                }, deviceId + '.brightness', state => expect(state.val).to.equal(100));
                state = await harness.states.getStateAsync(deviceId + '.state');
                expect(state.val).to.equal(true); //turn on should also turn state!
            });

            jsonFiles.push('../testData/light_brightness_actual.json');
            idsWithEnums.push('adapter.0.light.BrightnessWithActual');
            initialStates.push({id: 'adapter.0.light.BrightnessWithActual.brightness_actual', val: 50},
                {id: 'adapter.0.light.BrightnessWithActual.brightness', val: 0},
                {id: 'adapter.0.light.BrightnessWithActual.state_actual', val: true},
                {id: 'adapter.0.light.BrightnessWithActual.state', val: false});
            it('entity subscribe and read dimmer brightness actual and on actual', async () => {
                const deviceId = 'adapter.0.light.BrightnessWithActual';
                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;
                tools.expectEntity(entity, 'light', deviceId);

                //should be correct initial values!
                expect(entity).to.have.property('state', 'on');
                expect(entity).to.have.nested.property('attributes.brightness', 127.5);

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness: 255};
                }, deviceId + '.brightness', state => expect(state.val).to.equal(100));

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_off';
                    m.service_data = {};
                }, deviceId + '.state', state => expect(state.val).to.equal(false));
                const state = await harness.states.getStateAsync(deviceId + '.brightness');
                expect(state.val).to.equal(100); //turn off should leave brightness alone

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness_pct: 100};
                }, deviceId + '.brightness', state => expect(state.val).to.equal(100));

                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.brightness_actual', 60, true),
                    entity => {
                        expect(entity.attributes.brightness).to.be.greaterThan(254 * 0.6);
                        expect(entity.attributes.brightness).to.be.lessThanOrEqual(255 * 0.6);
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.state_actual', false, true),
                    entity => {
                        expect(entity.state).to.be.equal('off');
                    });
            });

            jsonFiles.push('../testData/light_colortemp.json');
            idsWithEnums.push('adapter.0.light.ColorTemp');
            initialStates.push({id: 'adapter.0.light.ColorTemp.brightness', val: 0},
                {id: 'adapter.0.light.ColorTemp.state', val: false},
                {id: 'adapter.0.light.ColorTemp.ct', val: 3000});
            it('colortemp kelvin', async () => {
                const deviceId = 'adapter.0.light.ColorTemp';
                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;
                tools.expectEntity(entity, 'light', deviceId);
                const ctAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'color_temp');
                expect(ctAttr).to.be.ok;

                expect(entity).to.have.nested.property('attributes.color_temp_kelvin', 3000);
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.ct', 6400, true),
                    entity => {
                        expect(entity.attributes.color_temp_kelvin).to.be.greaterThanOrEqual(6400);
                        expect(entity).to.have.nested.property('attributes.color_mode', 'color_temp');
                    });

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {color_temp_kelvin: 3000};
                }, deviceId + '.ct', state => expect(state.val).to.equal(3000));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {color_temp_kelvin: 2200};
                }, deviceId + '.ct', state => expect(state.val).to.equal(2200));
                expect(entity).to.have.nested.property('attributes.color_mode', 'color_temp');
            });

            //uses '../testData/light_colortemp.json'
            it('colortemp mired', async () => {
                const deviceId = 'adapter.0.light.ColorTemp';
                const ctObj = JSON.parse(JSON.stringify(objects[deviceId + '.ct']));
                ctObj.common.unit = 'mireds';
                ctObj.common.min = 170;
                ctObj.common.max = 400;
                await harness.states.setStateAsync(deviceId + '.brightness', 0, true);
                await harness.states.setStateAsync(deviceId + '.state', false, true);
                await harness.states.setStateAsync(deviceId + '.ct', 183, true);
                const entities = await tools.waitForEntitiesUpdate(harness, [ctObj]);
                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;
                tools.expectEntity(entity, 'light', deviceId);
                const ctAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'color_temp');
                expect(ctAttr).to.be.ok;

                expect(entity).to.have.nested.property('attributes.color_temp_kelvin', 1e6 / 183);
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.ct', 400, true),
                    entity => {
                        expect(entity.attributes.color_temp_kelvin).to.equal(1e6 / 400);
                        expect(entity).to.have.nested.property('attributes.color_mode', 'color_temp');
                    });

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {color_temp_kelvin: 1e6 / 183};
                }, deviceId + '.ct', state => expect(state.val).to.equal(183));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {color_temp_kelvin: 1e6 / 390};
                }, deviceId + '.ct', state => expect(state.val).to.equal(390));
                expect(entity).to.have.nested.property('attributes.color_mode', 'color_temp');
            });

            //uses '../testData/light_colortemp.json'
            it('colortemp unknown with kelvin', async () => {
                const deviceId = 'adapter.0.light.ColorTemp';
                const ctObj = JSON.parse(JSON.stringify(objects[deviceId + '.ct']));
                ctObj.common.unit = undefined;
                ctObj.common.min = undefined;
                ctObj.common.max = undefined;
                await harness.states.setStateAsync(deviceId + '.brightness', 0, true);
                await harness.states.setStateAsync(deviceId + '.state', false, true);
                await harness.states.setStateAsync(deviceId + '.ct', 3000, true);
                const entities = await tools.waitForEntitiesUpdate(harness, [ctObj]);
                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;
                tools.expectEntity(entity, 'light', deviceId);
                const ctAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'color_temp');
                expect(ctAttr).to.be.ok;

                expect(entity).to.have.nested.property('attributes.color_temp_kelvin', 3000);
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.ct', 5000, true),
                    entity => {
                        expect(entity.attributes.color_temp_kelvin).to.equal(5000);
                        expect(entity).to.have.nested.property('attributes.color_mode', 'color_temp');
                    });

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {color_temp_kelvin: 2200};
                }, deviceId + '.ct', state => expect(state.val).to.equal(2200));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {color_temp_kelvin: 6400};
                }, deviceId + '.ct', state => expect(state.val).to.equal(6400));
                expect(entity).to.have.nested.property('attributes.color_mode', 'color_temp');
            });

            //uses '../testData/light_colortemp.json'
            it('colortemp unknown with mireds', async () => {
                const deviceId = 'adapter.0.light.ColorTemp';
                const ctObj = JSON.parse(JSON.stringify(objects[deviceId + '.ct']));
                ctObj.common.unit = undefined;
                ctObj.common.min = undefined;
                ctObj.common.max = undefined;
                await harness.states.setStateAsync(deviceId + '.brightness', 0, true);
                await harness.states.setStateAsync(deviceId + '.state', false, true);
                await harness.states.setStateAsync(deviceId + '.ct', 153, true);
                const entities = await tools.waitForEntitiesUpdate(harness, [ctObj]);
                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;
                tools.expectEntity(entity, 'light', deviceId);
                const ctAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'color_temp');
                expect(ctAttr).to.be.ok;

                expect(entity).to.have.nested.property('attributes.color_temp_kelvin', 1e6 / 153);
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.ct', 200, true),
                    entity => {
                        expect(entity.attributes.color_temp_kelvin).to.equal(1e6 / 200);
                    });

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {color_temp_kelvin: 2200 };
                }, deviceId + '.ct', state => expect(state.val).to.equal(1e6 / 2200));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {color_temp_kelvin: 6500};
                }, deviceId + '.ct', state => expect(state.val).to.equal(1e6 / 6500));
            });

            jsonFiles.push('../testData/light_rgbSingle.json');
            idsWithEnums.push('adapter.0.light.rgbSingle');
            initialStates.push({id: 'adapter.0.light.rgbSingle.color', val: '#FF0080'});
            it('color lamp rgbSingle', async () => {
                const deviceId = 'adapter.0.light.rgbSingle';
                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;
                tools.expectEntity(entity, 'light', deviceId);
                const ctAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'rgb_color');
                expect(ctAttr).to.be.ok;

                expect(entity).to.have.nested.property('attributes.rgb_color');
                expect(entity.attributes.rgb_color).to.have.members([255, 0, 128]);
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.color', '00FF00', true), //expect to work with # and without.
                    entity => {
                        expect(entity.attributes.rgb_color).to.have.members([0, 255, 0]);
                    });
                //test HSV edge cases:
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.color', '#000000', true),
                    entity => {
                        expect(entity.attributes.rgb_color).to.have.members([0, 0, 0]);
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.color', '#FFFFFF', true),
                    entity => {
                        expect(entity.attributes.rgb_color).to.have.members([255, 255, 255]);
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.color', '#FFFF80', true),
                    entity => {
                        expect(entity.attributes.rgb_color).to.have.members([255, 255, 128]);
                    });
                expect(entity).to.have.nested.property('attributes.color_mode', 'rgb');

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {rgb_color: [0, 255, 0]};
                }, deviceId + '.color', state => expect(state.val).to.equal('#00FF00'));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {rgb_color: [255, 128, 128]};
                }, deviceId + '.color', state => expect(state.val).to.equal('#FF8080'));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {rgb_color: [255, 255, 255]};
                }, deviceId + '.color', state => expect(state.val).to.equal('#FFFFFF'));
                expect(entity).to.have.nested.property('attributes.color_mode', 'rgb');
            });

            jsonFiles.push('../testData/light_hue.json');
            idsWithEnums.push('adapter.0.light.Hue');
            initialStates.push({id: 'adapter.0.light.Hue.hue', val: 0},
                {id: 'adapter.0.light.Hue.saturation', val: 50});
            it('color lamp hue and saturation', async () => {
                const deviceId = 'adapter.0.light.Hue';
                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;
                tools.expectEntity(entity, 'light', deviceId);

                expect(entity).to.have.nested.property('attributes.hs_color');
                expect(entity.attributes.hs_color).to.have.members([0, 50]);
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.saturation', 100, true),
                    entity => {
                        expect(entity.attributes.hs_color).to.have.members([0, 100]);
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.saturation', 0, true),
                    entity => {
                        expect(entity.attributes.hs_color).to.have.members([0, 0]);
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.hue', 100, true),
                    entity => {
                        expect(entity.attributes.hs_color).to.have.members([100, 0]);
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.saturation', 100, true),
                    entity => {
                        expect(entity.attributes.hs_color).to.have.members([100, 100]);
                    });

                await tools.validateMultiUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {hs_color: [120, 100]};
                }, [deviceId + '.saturation', deviceId + '.hue'], result => {
                    expect(result[deviceId + '.saturation'].val).to.equal(100);
                    expect(result[deviceId + '.hue'].val).to.equal(120);
                });
                await tools.validateMultiUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {hs_color: [0, 50]};
                }, [deviceId + '.saturation', deviceId + '.hue'], result => {
                    expect(result[deviceId + '.saturation'].val).to.equal(50);
                    expect(result[deviceId + '.hue'].val).to.equal(0);
                });
                expect(entity).to.have.nested.property('attributes.color_mode', 'hs');
            });

            // uses '../testData/light_rgbSingle.json'
            it('color lamp rgbSingle as array string', async () => {
                const deviceId = 'adapter.0.light.rgbSingle';
                const obj = JSON.parse(JSON.stringify(objects[deviceId]));
                obj.common.name += ' AS ARRAY STRING';
                await harness.states.setStateAsync(deviceId + '.color', '255,0,0', true);
                const entities = await tools.waitForEntitiesUpdate(harness, [obj]); //recreate entity.
                await tools.addEntitiesToConfiguration(harness, entities);

                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;
                tools.expectEntity(entity, 'light', deviceId);

                expect(entity).to.not.have.nested.property('attributes.hs_color');
                expect(entity).to.have.nested.property('attributes.rgb_color');
                expect(entity.attributes.rgb_color).to.have.members([255, 0, 0]);
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.color', '0,255,0', true), //expect to work with # and without.
                    entity => {
                        expect(entity.attributes.rgb_color).to.have.members([0, 255, 0]);
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.color', '0,0,255', true),
                    entity => {
                        expect(entity.attributes.rgb_color).to.have.members([0, 0, 255]);
                    });

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {rgb_color: [0, 255, 0]};
                }, deviceId + '.color', state => expect(state.val).to.equal('0,255,0'));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {rgb_color: [255, 128, 128]};
                }, deviceId + '.color', state => expect(state.val).to.equal('255,128,128'));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {rgb_color: [255, 255, 255]};
                }, deviceId + '.color', state => expect(state.val).to.equal('255,255,255'));
                expect(entity).to.have.nested.property('attributes.color_mode', 'rgb');
            });

            jsonFiles.push('../testData/light_rgbw.json');
            idsWithEnums.push('adapter.0.light.rgbw');
            initialStates.push({id: 'adapter.0.light.rgbw.red', val: 0},
                {id: 'adapter.0.light.rgbw.green', val: 0},
                {id: 'adapter.0.light.rgbw.blue', val: 100},
                {id: 'adapter.0.light.rgbw.white', val: 100});
            it('color lamp rgbw', async () => {
                const deviceId = 'adapter.0.light.rgbw';
                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;
                tools.expectEntity(entity, 'light', deviceId);

                expect(entity).to.have.nested.property('attributes.rgbw_color');
                expect(entity.attributes.rgbw_color).to.have.members([0, 0, 255, 255]);
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.red', 100, true), //expect to work with # and without.
                    entity => {
                        expect(entity.attributes.rgbw_color).to.have.members([255, 0, 255, 255]);
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.white', 50, true), //expect to work with # and without.
                    entity => {
                        expect(entity.attributes.rgbw_color).to.have.members([255, 0, 255, 127.5]);
                    });
                expect(entity).to.have.nested.property('attributes.color_mode', 'rgbw');

                await tools.validateMultiUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {rgbw_color: [0, 255, 0, 255]};
                }, [
                    deviceId + '.red',
                    deviceId + '.green',
                    deviceId + '.blue',
                    deviceId + '.white'
                ], result => {
                    expect(result[deviceId + '.red']).to.have.property('val', 0);
                    expect(result[deviceId + '.green']).to.have.property('val', 100);
                    expect(result[deviceId + '.blue']).to.have.property('val', 0);
                    expect(result[deviceId + '.white']).to.have.property('val', 100);
                    expect(entity).to.have.nested.property('attributes.color_mode', 'rgbw');
                });
            });

            jsonFiles.push('../testData/light_custom_brightness.json');
            initialStates.push({id: 'adapter.0.light.CustomBrightness', val: 0});
            it('custom brightness should control on/off correctly', async () => {
                const deviceId = 'adapter.0.light.CustomBrightness';
                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;

                expect(entity).to.have.property('state', 'off');
                expect(entity).to.have.nested.property('attributes.brightness', 0);
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId, 100, true),
                    entity => {
                        expect(entity).to.have.property('state', 'on');
                        expect(entity).to.have.nested.property('attributes.brightness', 255);
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId, 47, true),
                    entity => {
                        expect(entity).to.have.property('state', 'on');
                        expect(entity).to.have.nested.property('attributes.brightness', 0.47 * 255);
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId, 0, true),
                    entity => {
                        expect(entity).to.have.property('state', 'off');
                        expect(entity).to.have.nested.property('attributes.brightness', 0);
                    });
                expect(entity).to.have.nested.property('attributes.color_mode', 'brightness');

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness_pct: 20};
                }, deviceId, state => expect(state.val).to.equal(100));
                await tools.delay(500); //will set state two times in this case
                expect(await harness.states.getStateAsync(deviceId)).to.have.property('val', 20);
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_off';
                    m.service_data = {};
                }, deviceId, state => expect(state.val).to.equal(0));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {};
                }, deviceId, state => expect(state.val).to.equal(100));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness_pct: 78};
                }, deviceId, state => expect(state.val).to.equal(78));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {brightness: 255};
                }, deviceId, state => expect(state.val).to.equal(100));
                expect(entity).to.have.nested.property('attributes.color_mode', 'brightness');
            });

            jsonFiles.push('../testData/light_custom.json');
            initialStates.push({id: 'adapter.0.light.Custom', val: false});
            it('custom state should control correctly', async () => {
                const deviceId = 'adapter.0.light.Custom';
                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;

                expect(entity).to.have.property('state', 'off');
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId, true, true),
                    entity => {
                        expect(entity).to.have.property('state', 'on');
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId, false, true),
                    entity => {
                        expect(entity).to.have.property('state', 'off');
                    });

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {};
                }, deviceId, state => expect(state.val).to.equal(true));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_off';
                    m.service_data = {};
                }, deviceId, state => expect(state.val).to.equal(false));
                expect(entity).to.have.nested.property('attributes.color_mode', 'onoff');
            });
        });

        describe('detect light from adapters', () => {
            jsonFiles.push('../testData/light_zigbee_color.json');
            idsWithEnums.push('zigbee.0.zigbeeColor');
            initialStates.push({id: 'zigbee.0.zigbeeColor.state', val: true},
                {id: 'zigbee.0.zigbeeColor.color', val: '#FF0080'});
            it('zigbee rgbSingle should be controllable', async () => {
                const deviceId = 'zigbee.0.zigbeeColor'; //MUST start with zigbee in order to have working zigbee workaround.
                const entity = entities.find(e => e.context.id === deviceId && e.entity_id.startsWith('light')); //prevent device_query.
                expect(entity).to.be.ok;
                tools.expectEntity(entity, 'light', deviceId);
                const ctAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'rgb_color');
                expect(ctAttr).to.be.ok;

                expect(entity).to.have.property('state', 'on'); //this fails if workaround ot ignore zigbee.xyz.available test is missing.
                expect(entity).to.have.nested.property('attributes.rgb_color');
                expect(entity.attributes.rgb_color).to.have.members([255, 0, 128]);
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.color', '00FF00', true), //expect to work with # and without.
                    entity => {
                        expect(entity.attributes.rgb_color).to.have.members([0, 255, 0]);
                    });
                //test HSV edge cases:
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.color', '#000000', true),
                    entity => {
                        expect(entity.attributes.rgb_color).to.have.members([0, 0, 0]);
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.color', '#FFFFFF', true),
                    entity => {
                        expect(entity.attributes.rgb_color).to.have.members([255, 255, 255]);
                    });
                await tools.validateStateChange(harness, entity.entity_id,
                    async () => await harness.states.setStateAsync(deviceId + '.color', '#FFFF80', true),
                    entity => {
                        expect(entity.attributes.rgb_color).to.have.members([255, 255, 128]);
                    });
                expect(entity).to.have.nested.property('attributes.color_mode', 'rgb');

                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {rgb_color: [0, 255, 0]};
                }, deviceId + '.color', state => expect(state.val).to.equal('#00FF00'));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {rgb_color: [255, 128, 128]};
                }, deviceId + '.color', state => expect(state.val).to.equal('#FF8080'));
                await tools.validateUIInput(harness, entity, m => {
                    m.domain = 'light';
                    m.service = 'turn_on';
                    m.service_data = {rgb_color: [255, 255, 255]};
                }, deviceId + '.color', state => expect(state.val).to.equal('#FFFFFF'));
                expect(entity).to.have.nested.property('attributes.color_mode', 'rgb');
            });

            jsonFiles.push('../testData/light_wled_rgbw.json');
            idsWithEnums.push('adapter.0.light.wled_rgbw');
            initialStates.push({id: 'adapter.0.light.wled_rgbw.on', val: true},
                {id: 'adapter.0.light.wled_rgbw.bri', val: '50'});
            it('wled does not work', async () => {
                const deviceId = 'adapter.0.light.wled_rgbw';
                const entity = entities.find(e => e.context.id === deviceId);
                if (entity) { //detects something, but no light...
                    expect(entity.entity_id).to.not.include('light.');
                }
            });

            jsonFiles.push('../testData/light_homematic_color.json');
            idsWithEnums.push('adapter.0.light.homematic_color');
            initialStates.push({id: 'adapter.0.light.homematic_color.LEVEL', val: 100});
            it('homematic color is only dimmer today', async () => {
                //TODO: color_temp has wrong role, or no role at all...
                //TODO: color seems to be rgbw -> needs new type. But expects rgb(R,G,B,W) as string.. strange.
                const deviceId = 'adapter.0.light.homematic_color';
                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;

                const rgbAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'rgb_color');
                expect(rgbAttr).to.not.be.ok;

                const ctAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'color_temp');
                expect(ctAttr).to.not.be.ok;

                const brAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'brightness');
                expect(brAttr).to.be.ok;
            });

            jsonFiles.push('../testData/light_hue_color.json');
            idsWithEnums.push('adapter.0.light.hue_color');
            initialStates.push({id: 'adapter.0.light.homematic_color.LEVEL', val: 100});
            it('hue color is correclty created', async () => {
                const deviceId = 'adapter.0.light.hue_color';
                const entity = entities.find(e => e.context.id === deviceId);
                expect(entity).to.be.ok;

                const rgbAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'red');
                expect(rgbAttr).to.be.ok;
                expect(rgbAttr).to.have.property('getId', deviceId + '.r');

                const ctAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'color_temp');
                expect(ctAttr).to.be.ok;
                expect(ctAttr).to.have.property('getId', deviceId + '.ct');

                const brAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'brightness');
                expect(brAttr).to.be.ok;
                expect(brAttr).to.have.property('getId', deviceId + '.level');
            });
        });
    });
};
