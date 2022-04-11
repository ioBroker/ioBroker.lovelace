const tools  = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (getHarness) {
    it('entity for only on/off should be created and switched on/off', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(require('../testData/light_onOff.json')));
        const deviceId = 'adapter.0.light.OnlyOnOff';
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.state', val: true}]);
        expect(entities).to.have.lengthOf(1 + tools.getNumConstEntities());
        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'light', deviceId);

        expect(entity).to.have.property('state', 'on');
        expect(entity).to.have.nested.property('attributes.color_mode', 'onoff');
        expect(entity.attributes.supported_color_modes).to.have.members(['onoff']);
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId + '.state', false, true),
            entity => expect(entity).to.have.property('state', 'off'));

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = {};
        }, deviceId + '.state', state => expect(state.val).to.equal(true));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_off'; m.service_data = {};
        }, deviceId + '.state', state => expect(state.val).to.equal(false));
    });

    it('entity for only brightness', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(require('../testData/light_brightness_no_state.json')));
        const deviceId = 'adapter.0.light.BrightnessNoState';
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.brightness', val: 0}]);
        expect(entities).to.have.lengthOf(1 + tools.getNumConstEntities());
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
                expect(entity.attributes.brightness).to.be.greaterThan(254/2);
                expect(entity.attributes.brightness).to.be.lessThanOrEqual(255/2);
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

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness: 0 };
        }, deviceId + '.brightness', state => expect(state.val).to.equal(0));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness: 255 };
        }, deviceId + '.brightness', state => expect(state.val).to.equal(100));
        await tools.delay(500); //wait a little, because brightness will be set two times in this case!
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness: 129 };
        }, deviceId + '.brightness', state => {
            expect(state.val).to.greaterThanOrEqual(50);
            expect(state.val).to.lessThanOrEqual(52);
        });
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_off'; m.service_data = {};
        }, deviceId + '.brightness', state => expect(state.val).to.equal(0));

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness_pct: 100 };
        }, deviceId + '.brightness', state => expect(state.val).to.equal(100));
        await tools.delay(500); //wait a little, because brightness will be set two times in this case!
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_off'; m.service_data = { brightness_pct: 0 };
        }, deviceId + '.brightness', state => expect(state.val).to.equal(0));
        await tools.delay(500); //wait a little, because brightness will be set two times in this case!
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness_pct: 50 };
        }, deviceId + '.brightness', state => expect(state.val).to.greaterThanOrEqual(50));
        await tools.delay(500); //wait a little, because brightness will be set two times in this case!
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_off'; m.service_data = {};
        }, deviceId + '.brightness', state => expect(state.val).to.equal(0));
    });

    it('entity for brightness with modified min/max', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(require('../testData/light_brightness_no_state.json')));
        const deviceId = 'adapter.0.light.BrightnessNoState';
        objects[deviceId + '.brightness'].common.min = 10;
        objects[deviceId + '.brightness'].common.max = 110;
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.brightness', val: 10}]);
        expect(entities).to.have.lengthOf(1 + tools.getNumConstEntities());
        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'light', deviceId);

        expect(entity).to.have.property('state', 'off');
        expect(entity).to.have.nested.property('attributes.brightness', 0);
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId + '.brightness', 60, true),
            entity => {
                expect(entity).to.have.property('state', 'on');
                expect(entity.attributes.brightness).to.be.greaterThan(254/2);
                expect(entity.attributes.brightness).to.be.lessThanOrEqual(255/2);
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

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness: 0 };
        }, deviceId + '.brightness', state => expect(state.val).to.equal(10));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness: 255 };
        }, deviceId + '.brightness', state => expect(state.val).to.equal(110));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness: 129 };
        }, deviceId + '.brightness', state => expect(state.val).to.greaterThanOrEqual(60));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_off'; m.service_data = {};
        }, deviceId + '.brightness', state => expect(state.val).to.equal(10));

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness_pct: 100 };
        }, deviceId + '.brightness', state => expect(state.val).to.equal(110));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness_pct: 0 };
        }, deviceId + '.brightness', state => expect(state.val).to.equal(10));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness_pct: 50 };
        }, deviceId + '.brightness', state => expect(state.val).to.greaterThanOrEqual(60));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_off'; m.service_data = {};
        }, deviceId + '.brightness', state => expect(state.val).to.equal(10));
    });

    it('entity should switch brightness and on/off', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(require('../testData/light_brightness.json')));
        const deviceId = 'adapter.0.light.BrightnessWithState';
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.brightness', val: 0}, {id: deviceId + '.state', val: false}]);
        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'light', deviceId);

        expect(entity).to.have.property('state', 'off');
        expect(entity).to.have.nested.property('attributes.brightness', 0);

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness: 255 };
        }, deviceId + '.brightness', state => expect(state.val).to.equal(100));
        let state = await harness.states.getStateAsync(deviceId + '.state');
        expect(state.val).to.equal(true); //turn on should also turn state!
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_off'; m.service_data = {};
        }, deviceId + '.state', state => expect(state.val).to.equal(false));
        state = await harness.states.getStateAsync(deviceId + '.brightness');
        expect(state.val).to.equal(100); //turn off should leave brightness alone?

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness_pct: 100 };
        }, deviceId + '.brightness', state => expect(state.val).to.equal(100));
        state = await harness.states.getStateAsync(deviceId + '.state');
        expect(state.val).to.equal(true); //turn on should also turn state!
    });

    it('entity subscribe and read dimmer brightness actual and on actual', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(require('../testData/light_brightness_actual.json')));
        const deviceId = 'adapter.0.light.BrightnessWithActual';
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [
            {id: deviceId + '.brightness_actual', val: 50},
            {id: deviceId + '.brightness', val: 0},
            {id: deviceId + '.state_actual', val: true},
            {id: deviceId + '.state', val: false}]
        );
        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'light', deviceId);

        //should be correct initial values!
        expect(entity).to.have.property('state', 'on');
        expect(entity).to.have.nested.property('attributes.brightness', 50);

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness: 255 };
        }, deviceId + '.brightness', state => expect(state.val).to.equal(100));
        let state = await harness.states.getStateAsync(deviceId + '.state');
        expect(state.val).to.equal(true); //turn on should also turn state!

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_off'; m.service_data = {};
        }, deviceId + '.state', state => expect(state.val).to.equal(false));
        state = await harness.states.getStateAsync(deviceId + '.brightness');
        expect(state.val).to.equal(100); //turn off should leave brightness alone

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness_pct: 100 };
        }, deviceId + '.brightness', state => expect(state.val).to.equal(100));
        state = await harness.states.getStateAsync(deviceId + '.state');
        expect(state.val).to.equal(true); //turn on should also turn state!

        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId + '.brightness_actual', 60, true),
            entity => {
                expect(entity.attributes.brightness).to.be.equal(60);
            });
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId + '.state_actual', false, true),
            entity => {
                expect(entity.state).to.be.equal('off');
            });
    });

    it('colortemp kelvin', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(require('../testData/light_colortemp.json')));
        const deviceId = 'adapter.0.light.ColorTemp';
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.brightness', val: 0}, {id: deviceId + '.state', val: false}, {id: deviceId + '.ct', val: 3000}]);
        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'light', deviceId);
        const ctAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'color_temp');
        expect(ctAttr).to.be.ok;

        expect(entity).to.have.nested.property('attributes.color_temp', 1e6 / 3000);
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId + '.ct', 6400, true),
            entity => {
                expect(entity.attributes.color_temp).to.be.greaterThanOrEqual(1e6 / 6400);
                expect(entity).to.have.nested.property('attributes.color_mode', 'color_temp');
            });

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { color_temp: 1e6 / 3000 };
        }, deviceId + '.ct', state => expect(state.val).to.equal(3000));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { color_temp: 1e6 / 2200 };
        }, deviceId + '.ct', state => expect(state.val).to.equal(2200));
        expect(entity).to.have.nested.property('attributes.color_mode', 'color_temp');
    });

    it('colortemp mired', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(require('../testData/light_colortemp.json')));
        const deviceId = 'adapter.0.light.ColorTemp';
        const ctObj = objects[deviceId + '.ct'];
        ctObj.common.unit = 'mireds';
        ctObj.common.min = 170;
        ctObj.common.max = 400;
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.brightness', val: 0}, {id: deviceId + '.state', val: false}, {id: deviceId + '.ct', val: 183}]);
        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'light', deviceId);
        const ctAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'color_temp');
        expect(ctAttr).to.be.ok;

        expect(entity).to.have.nested.property('attributes.color_temp', 183);
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId + '.ct', 400, true),
            entity => {
                expect(entity.attributes.color_temp).to.equal(400);
                expect(entity).to.have.nested.property('attributes.color_mode', 'color_temp');
            });

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { color_temp: 183 };
        }, deviceId + '.ct', state => expect(state.val).to.equal(183));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { color_temp: 390 };
        }, deviceId + '.ct', state => expect(state.val).to.equal(390));
        expect(entity).to.have.nested.property('attributes.color_mode', 'color_temp');
    });

    it('colortemp unknown with kelvin', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(require('../testData/light_colortemp.json')));
        const deviceId = 'adapter.0.light.ColorTemp';
        const ctObj = objects[deviceId + '.ct'];
        ctObj.common.unit = undefined;
        ctObj.common.min = undefined;
        ctObj.common.max = undefined;
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.brightness', val: 0}, {id: deviceId + '.state', val: false}, {id: deviceId + '.ct', val: 3000}]);
        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'light', deviceId);
        const ctAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'color_temp');
        expect(ctAttr).to.be.ok;

        expect(entity).to.have.nested.property('attributes.color_temp', 1e6 / 3000);
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId + '.ct', 5000, true),
            entity => {
                expect(entity.attributes.color_temp).to.equal(1e6 / 5000);
                expect(entity).to.have.nested.property('attributes.color_mode', 'color_temp');
            });

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { color_temp: 183 };
        }, deviceId + '.ct', state => expect(state.val).to.equal(1e6 / 183));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { color_temp: 390 };
        }, deviceId + '.ct', state => expect(state.val).to.equal(1e6 / 390));
        expect(entity).to.have.nested.property('attributes.color_mode', 'color_temp');
    });

    it('colortemp unknown with mireds', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(require('../testData/light_colortemp.json')));
        const deviceId = 'adapter.0.light.ColorTemp';
        const ctObj = objects[deviceId + '.ct'];
        ctObj.common.unit = undefined;
        ctObj.common.min = undefined;
        ctObj.common.max = undefined;
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.brightness', val: 0}, {id: deviceId + '.state', val: false}, {id: deviceId + '.ct', val: 153}]);
        const entity = entities.find(e => e.context.id === deviceId);
        expect(entity).to.be.ok;
        tools.expectEntity(entity, 'light', deviceId);
        const ctAttr = entity.context.ATTRIBUTES.find(a => a.attribute === 'color_temp');
        expect(ctAttr).to.be.ok;

        expect(entity).to.have.nested.property('attributes.color_temp', 153);
        await tools.validateStateChange(harness, entity.entity_id,
            async () => await harness.states.setStateAsync(deviceId + '.ct', 200, true),
            entity => {
                expect(entity.attributes.color_temp).to.equal(200);
            });

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { color_temp: 350 };
        }, deviceId + '.ct', state => expect(state.val).to.equal(350));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { color_temp: 180 };
        }, deviceId + '.ct', state => expect(state.val).to.equal(180));
    });

    it('color lamp rgbSingle', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(require('../testData/light_rgbSingle_with_hue.json')));
        const deviceId = 'adapter.0.light.rgbSingleWithHue';
        delete objects[deviceId + '.hue'];
        delete objects[deviceId + '.saturation'];
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.color', val: '#FF0080'}]);
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

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { rgb_color: [0, 255, 0] };
        }, deviceId + '.color', state => expect(state.val).to.equal('#00FF00'));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { rgb_color: [255, 128, 128] };
        }, deviceId + '.color', state => expect(state.val).to.equal('#FF8080'));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { rgb_color: [255, 255, 255] };
        }, deviceId + '.color', state => expect(state.val).to.equal('#FFFFFF'));
        expect(entity).to.have.nested.property('attributes.color_mode', 'rgb');
    });

    it('color lamp hue and saturation', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(require('../testData/light_rgbSingle_with_hue.json')));
        const deviceId = 'adapter.0.light.rgbSingleWithHue';
        delete objects[deviceId + '.color'];
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.hue', val: 0}, {id: deviceId + '.saturation', val: 50}]);
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

        await tools.validateMultiUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { hs_color: [120, 100] };
        }, [deviceId + '.saturation', deviceId + '.hue'], result => {
            expect(result[deviceId + '.saturation'].val).to.equal(100);
            expect(result[deviceId + '.hue'].val).to.equal(120);
        });
        await tools.validateMultiUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { hs_color: [0, 50] };
        }, [deviceId + '.saturation', deviceId + '.hue'], result => {
            expect(result[deviceId + '.saturation'].val).to.equal(50);
            expect(result[deviceId + '.hue'].val).to.equal(0);
        });
        expect(entity).to.have.nested.property('attributes.color_mode', 'hs');
    });

    it('color lamp rgbSingle as array string', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(require('../testData/light_rgbSingle_with_hue.json')));
        const deviceId = 'adapter.0.light.rgbSingleWithHue';
        delete objects[deviceId + '.hue'];
        delete objects[deviceId + '.saturation'];
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.color', val: '255,0,0'}]);
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

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { rgb_color: [0, 255, 0] };
        }, deviceId + '.color', state => expect(state.val).to.equal('0,255,0'));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { rgb_color: [255, 128, 128] };
        }, deviceId + '.color', state => expect(state.val).to.equal('255,128,128'));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { rgb_color: [255, 255, 255] };
        }, deviceId + '.color', state => expect(state.val).to.equal('255,255,255'));
        expect(entity).to.have.nested.property('attributes.color_mode', 'rgb');
    });

    it('color lamp rgbw', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(require('../testData/light_rgbw.json')));
        const deviceId = 'adapter.0.light.rgbw';
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.red', val: 0}, {id: deviceId + '.green', val: 0}, {id: deviceId + '.blue', val: 100}, {id: deviceId + '.white', val: 100}]);
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

        await tools.validateMultiUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { rgbw_color: [0, 255, 0, 255] };
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

    it('custom brightness should control on/off correctly', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(require('../testData/light_custom_brightness.json')));
        const deviceId = 'adapter.0.light.CustomBrightness';
        const entities = await tools.startAndGetEntities(harness, objects, [], [{id: deviceId, val: 0}]);
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

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness_pct: 20 };
        }, deviceId, state => expect(state.val).to.equal(100));
        await tools.delay(500); //will set state two times in this case
        expect(await harness.states.getStateAsync(deviceId)).to.have.property('val', 20);
        await tools.validateUIInput(harness, entity, m => {
            m.domain = 'light'; m.service = 'turn_off'; m.service_data = {};
        }, deviceId, state => expect(state.val).to.equal(0));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { };
        }, deviceId, state => expect(state.val).to.equal(100));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness_pct: 78 };
        }, deviceId, state => expect(state.val).to.equal(78));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { brightness: 255 };
        }, deviceId, state => expect(state.val).to.equal(100));
        expect(entity).to.have.nested.property('attributes.color_mode', 'brightness');
    });

    it('custom state should control correctly', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(require('../testData/light_custom.json')));
        const deviceId = 'adapter.0.light.Custom';
        const entities = await tools.startAndGetEntities(harness, objects, [], [{id: deviceId, val: false}]);
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

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = {  };
        }, deviceId, state => expect(state.val).to.equal(true));
        await tools.validateUIInput(harness, entity, m => {
            m.domain = 'light'; m.service = 'turn_off'; m.service_data = {};
        }, deviceId, state => expect(state.val).to.equal(false));
        expect(entity).to.have.nested.property('attributes.color_mode', 'onoff');
    });

    it('zigbee rgbSingle should be controllable', async () => {
        const harness = getHarness();
        const objects = JSON.parse(JSON.stringify(require('../testData/light_zigbee_color.json')));
        const deviceId = 'zigbee.0.zigbeeColor'; //MUST start with zigbee in order to have working zigbee workaroung.
        const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.state', val: true}, {id: deviceId + '.color', val: '#FF0080'}]);
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

        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { rgb_color: [0, 255, 0] };
        }, deviceId + '.color', state => expect(state.val).to.equal('#00FF00'));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { rgb_color: [255, 128, 128] };
        }, deviceId + '.color', state => expect(state.val).to.equal('#FF8080'));
        await tools.validateUIInput(harness, entity,m => {
            m.domain = 'light'; m.service = 'turn_on'; m.service_data = { rgb_color: [255, 255, 255] };
        }, deviceId + '.color', state => expect(state.val).to.equal('#FFFFFF'));
        expect(entity).to.have.nested.property('attributes.color_mode', 'rgb');
    });
};
