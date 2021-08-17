const tools   = require('./testTools');
const expect  = require('chai').expect;
const climate = require('../../lib/converters/climate');

exports.runTests = function (getHarness) {
    describe('thermostats', async () =>{
        it('should create climate with power and no mode', async () => {
            // Create a fresh harness instance each test!
            const harness = getHarness();

            const objects = JSON.parse(JSON.stringify(require('../testData/climate_thermostat_target_power_current_temp_and_humindity.json')));
            const deviceId = 'adapter.0.climate.thermostat.WithTempAndHumiditySensor';
            delete objects[deviceId + '.humidity'];
            delete objects[deviceId + '.current'];
            const deviceObj = objects[deviceId];
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId]);
            expect(entities).to.have.lengthOf(1 + tools.getNumConstEntities());

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'climate', deviceId, deviceObj.name, {getId: deviceId + '.power', setId: deviceId + '.power'});

            expect(entity).to.have.nested.property('attributes.supported_features', climate.supportedFlags.CLIMATE_SUPPORT_TARGET_TEMPERATURE | climate.supportedFlags.CLIMATE_SUPPORT_PRESET_MODE);
            expect(entity).to.have.nested.property('context.ATTRIBUTES');
            expect(entity.context.ATTRIBUTES).to.have.lengthOf(3); //temperature + boost + preset_mode
            const temperatureAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'temperature');
            expect(temperatureAttribute).to.be.ok;
            expect(temperatureAttribute).to.have.property('getId', deviceId + '.target');

            expect(entity).to.have.nested.property('context.COMMANDS');
            expect(entity.context.COMMANDS).to.have.lengthOf(3);
            const setTempCommand = entity.context.COMMANDS.find(c => c.service === 'set_temperature');
            expect(setTempCommand).to.be.ok;
            expect(setTempCommand).to.have.property('setId', deviceId + '.target');

            //from target state:
            expect(entity).to.have.nested.property('attributes.min_temp', 5);
            expect(entity).to.have.nested.property('attributes.max_temp', 35);
            //from temperature state:
            expect(entity).to.have.nested.property('attributes.unit_of_measurement', '°C');
            //default values:
            expect(entity).to.have.nested.property('attributes.target_temp_step', 1);
            expect(entity).to.have.nested.property('attributes.hvac_modes'); //let's you control power.
            expect(entity.attributes.hvac_modes).to.have.members(['off', 'heat']);
            expect(entity).to.have.nested.property('attributes.min_humidity', 30);
            expect(entity).to.have.nested.property('attributes.max_humidity', 99);
        });

        it('should create climate with current temp', async () => {
            // Create a fresh harness instance each test!
            const harness = getHarness();

            const objects = JSON.parse(JSON.stringify(require('../testData/climate_thermostat_target_power_current_temp_and_humindity.json')));
            const deviceId = 'adapter.0.climate.thermostat.WithTempAndHumiditySensor';
            delete objects[deviceId + '.humidity'];
            const deviceObj = objects[deviceId];
            objects[deviceId + '.target'].common.step = 7;
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId]);
            expect(entities).to.have.lengthOf(2 + tools.getNumConstEntities()); //create entity for temperature sensor!

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'climate', deviceId, deviceObj.name, {getId: deviceId + '.power', setId: deviceId + '.power'});

            expect(entity).to.have.nested.property('attributes.supported_features', climate.supportedFlags.CLIMATE_SUPPORT_TARGET_TEMPERATURE | climate.supportedFlags.CLIMATE_SUPPORT_PRESET_MODE);
            expect(entity).to.have.nested.property('context.ATTRIBUTES');
            expect(entity.context.ATTRIBUTES).to.have.lengthOf(4); //+boost
            const temperatureAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'temperature');
            expect(temperatureAttribute).to.be.ok;
            expect(temperatureAttribute).to.have.property('getId', deviceId + '.target');
            const currentTemperatureAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'current_temperature');
            expect(currentTemperatureAttribute).to.be.ok;
            expect(currentTemperatureAttribute).to.have.property('getId', deviceId + '.current');

            expect(entity).to.have.nested.property('context.COMMANDS');
            expect(entity.context.COMMANDS).to.have.lengthOf(3);
            const setTempCommand = entity.context.COMMANDS.find(c => c.service === 'set_temperature');
            expect(setTempCommand).to.be.ok;
            expect(setTempCommand).to.have.property('setId', deviceId + '.target');

            expect(entity).to.have.nested.property('attributes.target_temp_step', 7); //set above.
        });

        it('should create climate and humidity', async () => {
            // Create a fresh harness instance each test!
            const harness = getHarness();

            const objects = JSON.parse(JSON.stringify(require('../testData/climate_thermostat_target_power_current_temp_and_humindity.json')));
            const deviceId = 'adapter.0.climate.thermostat.WithTempAndHumiditySensor';
            delete objects[deviceId + '.current'];
            const deviceObj = objects[deviceId];
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.power', val: true}]);
            expect(entities).to.have.lengthOf(2 + tools.getNumConstEntities());

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'climate', deviceId, deviceObj.name, {getId: deviceId + '.power', setId: deviceId + '.power'});

            expect(entity).to.have.nested.property('attributes.supported_features', climate.supportedFlags.CLIMATE_SUPPORT_TARGET_TEMPERATURE | climate.supportedFlags.CLIMATE_SUPPORT_PRESET_MODE);
            expect(entity).to.have.nested.property('context.ATTRIBUTES');
            expect(entity.context.ATTRIBUTES).to.have.lengthOf(4); //+boost
            const temperatureAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'temperature');
            expect(temperatureAttribute).to.be.ok;
            expect(temperatureAttribute).to.have.property('getId', deviceId + '.target');
            const humidityAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'current_humidity');
            expect(humidityAttribute).to.be.ok;
            expect(humidityAttribute).to.have.property('getId', deviceId + '.humidity');

            expect(entity).to.have.nested.property('context.COMMANDS');
            expect(entity.context.COMMANDS).to.have.lengthOf(3);
            const setTempCommand = entity.context.COMMANDS.find(c => c.service === 'set_temperature');
            expect(setTempCommand).to.be.ok;
            expect(setTempCommand).to.have.property('setId', deviceId + '.target');

            expect(entity).to.have.property('state', 'heat');
            expect(entity).to.have.nested.property('attributes.hvac_mode', 'heat');
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.power', false, true),
                entity => {
                    expect(entity).to.have.nested.property('attributes.hvac_mode', 'off');
                    expect(entity).to.have.property('state', 'off');
                });
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.power', true, true),
                entity => {
                    expect(entity).to.have.nested.property('attributes.hvac_mode', 'heat');
                    expect(entity).to.have.property('state', 'heat');
                });
        });

        it('should create climate, temperature sensor and humidity', async () => {
            // Create a fresh harness instance each test!
            const harness = getHarness();

            const objects = JSON.parse(JSON.stringify(require('../testData/climate_thermostat_target_power_current_temp_and_humindity.json')));
            const deviceId = 'adapter.0.climate.thermostat.WithTempAndHumiditySensor';
            const deviceObj = objects[deviceId];
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.power', val: true}]);
            expect(entities).to.have.lengthOf(3 + tools.getNumConstEntities());

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'climate', deviceId, deviceObj.name, {getId: deviceId + '.power', setId: deviceId + '.power'});

            expect(entity).to.have.nested.property('attributes.supported_features', climate.supportedFlags.CLIMATE_SUPPORT_TARGET_TEMPERATURE | climate.supportedFlags.CLIMATE_SUPPORT_PRESET_MODE);
            expect(entity).to.have.nested.property('context.ATTRIBUTES');
            expect(entity.context.ATTRIBUTES).to.have.lengthOf(5); //+boost
            const temperatureAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'temperature');
            expect(temperatureAttribute).to.be.ok;
            expect(temperatureAttribute).to.have.property('getId', deviceId + '.target');
            const humidityAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'current_humidity');
            expect(humidityAttribute).to.be.ok;
            expect(humidityAttribute).to.have.property('getId', deviceId + '.humidity');
            const currentTemperatureAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'current_temperature');
            expect(currentTemperatureAttribute).to.be.ok;
            expect(currentTemperatureAttribute).to.have.property('getId', deviceId + '.current');

            expect(entity).to.have.nested.property('context.COMMANDS');
            expect(entity.context.COMMANDS).to.have.lengthOf(3);
            const setTempCommand = entity.context.COMMANDS.find(c => c.service === 'set_temperature');
            expect(setTempCommand).to.be.ok;
            expect(setTempCommand).to.have.property('setId', deviceId + '.target');

            expect(entity).to.have.property('state', 'heat');
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.target', 30, true),
                entity => expect(entity).to.have.nested.property('attributes.temperature', 30));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.current', 35, true),
                entity => expect(entity).to.have.nested.property('attributes.current_temperature', 35));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.humidity', 70, true),
                entity => expect(entity).to.have.nested.property('attributes.current_humidity', 70));
        });

        it('should create climate with only target temp and check if reacting to target changes', async () => {
            // Create a fresh harness instance each test!
            const harness = getHarness();

            const objects = require('../testData/climate_thermostat_only_target_temp.json');
            const deviceId = 'adapter.0.climate.thermostat.Minimal';
            const deviceObj = objects[deviceId];
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId]);
            expect(entities).to.have.lengthOf(1 + tools.getNumConstEntities());

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'climate', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.supported_features', climate.supportedFlags.CLIMATE_SUPPORT_TARGET_TEMPERATURE);
            expect(entity).to.have.nested.property('context.ATTRIBUTES');
            expect(entity.context.ATTRIBUTES).to.have.lengthOf(1);
            const temperatureAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'temperature');
            expect(temperatureAttribute).to.be.ok;
            expect(temperatureAttribute).to.have.property('getId', deviceId + '.target');

            expect(entity).to.have.nested.property('context.COMMANDS');
            expect(entity.context.COMMANDS).to.have.lengthOf(1);
            const setTempCommand = entity.context.COMMANDS.find(c => c.service === 'set_temperature');
            expect(setTempCommand).to.be.ok;
            expect(setTempCommand).to.have.property('setId', deviceId + '.target');

            expect(entity).to.have.property('state', 'on');
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.target', 30, true),
                entity => expect(entity).to.have.nested.property('attributes.temperature', 30));

            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_temperature'; m.service_data = {temperature: 35};
            }, deviceId + '.target', state => expect(state.val).to.be.equal(35));
        });

        it('should create climate supporting mode but no power', async () => {
            // Create a fresh harness instance each test!
            const harness = getHarness();

            const objects = require('../testData/climate_thermostat_mode_only_default.json');
            const deviceId = 'adapter.0.climate.thermostat.ModeDefault';
            const deviceObj = objects[deviceId];
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.mode', val: 0}]);
            expect(entities).to.have.lengthOf(1 + tools.getNumConstEntities());

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'climate', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.supported_features', climate.supportedFlags.CLIMATE_SUPPORT_TARGET_TEMPERATURE);
            expect(entity).to.have.nested.property('context.ATTRIBUTES');
            expect(entity.context.ATTRIBUTES).to.have.lengthOf(2);
            const temperatureAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'temperature');
            expect(temperatureAttribute).to.be.ok;
            expect(temperatureAttribute).to.have.property('getId', deviceId + '.target');
            const modeAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'hvac_mode');
            expect(modeAttribute).to.be.ok;
            expect(modeAttribute).to.have.property('getId', deviceId + '.mode');
            expect(modeAttribute).to.have.property('iobToLovelace');
            expect(modeAttribute).to.have.nested.property('iobToLovelace.0', 'auto');
            expect(modeAttribute).to.have.nested.property('iobToLovelace.1', 'manual');

            expect(entity).to.have.nested.property('context.COMMANDS');
            expect(entity.context.COMMANDS).to.have.lengthOf(2);
            const setHVAC = entity.context.COMMANDS.find(c => c.service === 'set_hvac_mode');
            expect(setHVAC).to.be.ok;
            expect(setHVAC).to.have.property('setId', deviceId + '.mode');

            expect(entity).to.have.property('state', 'auto');
            expect(entity.attributes).to.have.property('hvac_modes');
            expect(entity.attributes.hvac_modes).to.have.members(['auto', 'manual']);
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.mode', 1, true),
                entity => expect(entity).to.have.property('state', 'manual'));
        });


        it('should create climate supporting mode with many modes', async () => {
            // Create a fresh harness instance each test!
            const harness = getHarness();

            const objects = require('../testData/climate_thermostat_mode_full.json');
            const deviceId = 'adapter.0.climate.thermostat.ModeFull';
            const deviceObj = objects[deviceId];
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.mode', val: 1}]);
            expect(entities).to.have.lengthOf(1 + tools.getNumConstEntities());

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'climate', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.supported_features', climate.supportedFlags.CLIMATE_SUPPORT_TARGET_TEMPERATURE);
            expect(entity).to.have.nested.property('context.ATTRIBUTES');
            expect(entity.context.ATTRIBUTES).to.have.lengthOf(2);
            const modeAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'hvac_mode');
            expect(modeAttribute).to.be.ok;
            expect(modeAttribute).to.have.property('getId', deviceId + '.mode');
            expect(modeAttribute).to.have.nested.property('lovelaceToIob');
            expect(modeAttribute.lovelaceToIob).to.have.property('off', 0);
            expect(modeAttribute.lovelaceToIob).to.have.property('auto', 1);
            expect(modeAttribute.lovelaceToIob).to.have.property('heat', 2);
            expect(modeAttribute.lovelaceToIob).to.have.property('cool', 3);
            expect(modeAttribute.lovelaceToIob).to.have.property('heat_cool', 4);
            expect(modeAttribute.lovelaceToIob).to.have.property('dry', 5);
            expect(modeAttribute.lovelaceToIob).to.have.property('fan_only', 6);
            expect(modeAttribute.lovelaceToIob).to.have.property('iobroker_mode', 7);
            expect(modeAttribute).to.have.property('iobToLovelace');
            expect(modeAttribute).to.have.nested.property('iobToLovelace.0', 'off');
            expect(modeAttribute).to.have.nested.property('iobToLovelace.1', 'auto');
            expect(modeAttribute).to.have.nested.property('iobToLovelace.2', 'heat');
            expect(modeAttribute).to.have.nested.property('iobToLovelace.3', 'cool');
            expect(modeAttribute).to.have.nested.property('iobToLovelace.4', 'heat_cool');
            expect(modeAttribute).to.have.nested.property('iobToLovelace.5', 'dry');
            expect(modeAttribute).to.have.nested.property('iobToLovelace.6', 'fan_only');
            expect(modeAttribute).to.have.nested.property('iobToLovelace.7', 'iobroker_mode');
            expect(entity.attributes.hvac_modes).to.have.lengthOf(8);

            expect(entity).to.have.nested.property('context.COMMANDS');
            expect(entity.context.COMMANDS).to.have.lengthOf(2);
            const setHVAC = entity.context.COMMANDS.find(c => c.service === 'set_hvac_mode');
            expect(setHVAC).to.be.ok;
            expect(setHVAC).to.have.property('setId', deviceId + '.mode');

            expect(entity).to.have.property('state', 'auto');
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.mode', 0, true),
                entity => expect(entity).to.have.property('state', 'off'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.mode', 7, true),
                entity => expect(entity).to.have.property('state', 'iobroker_mode'));

            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_hvac_mode'; m.service_data = {hvac_mode: 'off'};
            }, deviceId + '.mode', state => expect(state.val).to.be.equal(0));
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_hvac_mode'; m.service_data = {hvac_mode: 'fan_only'};
            }, deviceId + '.mode', state => expect(state.val).to.be.equal(6));
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_hvac_mode'; m.service_data = {hvac_mode: 'iobroker_mode'};
            }, deviceId + '.mode', state => expect(state.val).to.be.equal(7));
        });


        it('should create climate with combined mode and power attribute', async () => {
            // Create a fresh harness instance each test!
            const harness = getHarness();

            const objects = require('../testData/climate_thermostat_mode_and_power.json');
            const deviceId = 'adapter.0.climate.thermostat.ModeAndPower';
            const deviceObj = objects[deviceId];
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.mode', val: 0}, {id: deviceId + '.power', val: false}]);
            expect(entities).to.have.lengthOf(1 + tools.getNumConstEntities());

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'climate', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.supported_features', climate.supportedFlags.CLIMATE_SUPPORT_TARGET_TEMPERATURE);
            expect(entity).to.have.nested.property('context.ATTRIBUTES');
            expect(entity.context.ATTRIBUTES).to.have.lengthOf(2);
            const modeAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'hvac_mode');
            expect(modeAttribute).to.be.ok;
            expect(modeAttribute).to.have.property('getId', deviceId + '.mode');
            expect(modeAttribute).to.have.nested.property('lovelaceToIob');
            expect(modeAttribute.lovelaceToIob).to.have.property('auto', 0);
            expect(modeAttribute.lovelaceToIob).to.have.property('heat', 1);
            expect(modeAttribute.lovelaceToIob).to.have.property('cool', 2);

            expect(entity).to.have.nested.property('context.COMMANDS');
            expect(entity.context.COMMANDS).to.have.lengthOf(2);
            const setHVAC = entity.context.COMMANDS.find(c => c.service === 'set_hvac_mode');
            expect(setHVAC).to.be.ok;
            expect(setHVAC).to.have.property('setId', deviceId + '.mode');

            expect(entity).to.have.property('state', 'off');
            expect(entity).to.have.nested.property('attributes.hvac_modes');
            expect(entity.attributes.hvac_modes).to.have.members(['off', 'auto', 'heat', 'cool']);
            expect(entity).to.have.nested.property('attributes.hvac_mode', 'off');
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.power', true, true),
                entity => expect(entity).to.have.property('state', 'auto'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.mode', 0, true),
                entity => expect(entity).to.have.property('state', 'auto'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.mode', 1, true),
                entity => expect(entity).to.have.property('state', 'heat'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.mode', 2, true),
                entity => expect(entity).to.have.property('state', 'cool'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.power', false, true),
                entity => expect(entity).to.have.property('state', 'off'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.power', true, true),
                entity => expect(entity).to.have.property('state', 'cool'));

            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_hvac_mode'; m.service_data = {hvac_mode: 'heat'};
            }, deviceId + '.mode', state => expect(state.val).to.equal(1));
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_hvac_mode'; m.service_data = {hvac_mode: 'cool'};
            }, deviceId + '.mode', state => expect(state.val).to.equal(2));
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_hvac_mode'; m.service_data = {hvac_mode: 'auto'};
            }, deviceId + '.mode', state => expect(state.val).to.equal(0));
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_hvac_mode'; m.service_data = {hvac_mode: 'off'};
            }, deviceId + '.power', state => expect(state.val).to.be.false);
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_hvac_mode'; m.service_data = {hvac_mode: 'heat'};
            }, deviceId + '.power', state => expect(state.val).to.be.true);
        });

        it('should create climate with boost and party presets', async () => {
            // Create a fresh harness instance each test!
            const harness = getHarness();

            const objects = JSON.parse(JSON.stringify(require('../testData/climate_thermostat_boost_and_party.json')));
            const deviceId = 'adapter.0.climate.thermostat.WithBoostAndParty';
            const deviceObj = objects[deviceId];
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.boost', val: false}, {id: deviceId + '.party', val: true}]);

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'climate', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.supported_features', climate.supportedFlags.CLIMATE_SUPPORT_TARGET_TEMPERATURE | climate.supportedFlags.CLIMATE_SUPPORT_PRESET_MODE);
            expect(entity).to.have.nested.property('context.ATTRIBUTES');
            expect(entity.context.ATTRIBUTES).to.have.lengthOf(4);
            const modeAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'preset_mode');
            expect(modeAttribute).to.be.ok;
            expect(modeAttribute).to.not.have.property('getId');

            expect(entity).to.have.nested.property('context.COMMANDS');
            expect(entity.context.COMMANDS).to.have.lengthOf(3);
            const setHVAC = entity.context.COMMANDS.find(c => c.service === 'set_preset_mode');
            expect(setHVAC).to.be.ok;

            expect(entity).to.have.nested.property('attributes.preset_mode', 'party');
            expect(entity).to.have.nested.property('attributes.preset_modes');
            expect(entity.attributes.preset_modes).to.have.members(['none', 'boost', 'party']);
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.boost', true, true),
                entity => expect(entity).to.have.nested.property('attributes.preset_mode', 'boost'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.party', false, true),
                entity => expect(entity).to.have.nested.property('attributes.preset_mode', 'boost'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.boost', false, true),
                entity => expect(entity).to.have.nested.property('attributes.preset_mode', 'none'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.boost', true, true),
                entity => expect(entity).to.have.nested.property('attributes.preset_mode', 'boost'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.boost', false, true),
                entity => expect(entity).to.have.nested.property('attributes.preset_mode', 'none'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.party', true, true),
                entity => expect(entity).to.have.nested.property('attributes.preset_mode', 'party'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.party', false, true),
                entity => expect(entity).to.have.nested.property('attributes.preset_mode', 'none'));


            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_preset_mode'; m.service_data = {preset_mode: 'boost'};
            }, deviceId + '.boost', state => expect(state.val).to.be.true);
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_preset_mode'; m.service_data = {preset_mode: 'party'};
            }, deviceId + '.boost', state => expect(state.val).to.be.false);
            expect(await harness.states.getStateAsync(deviceId + '.party')).to.have.property('val', true);
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_preset_mode'; m.service_data = {preset_mode: 'none'};
            }, deviceId + '.party', state => expect(state.val).to.be.false);
            expect(await harness.states.getStateAsync(deviceId + '.boost')).to.have.property('val', false);
        });

    });

    describe('AirConditioning Tests', async () => {
        it('should create climate with mode and fan', async () => {
            // Create a fresh harness instance each test!
            const harness = getHarness();

            const objects = JSON.parse(JSON.stringify(require('../testData/climate_aircondition_mode_full_and_fan.json')));
            const deviceId = 'adapter.0.aircondition.ModeAndFan';
            const deviceObj = objects[deviceId];
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.mode', val: 1}, {id: deviceId + '.fan', val: 0}]);

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'climate', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.supported_features', climate.supportedFlags.CLIMATE_SUPPORT_TARGET_TEMPERATURE | climate.supportedFlags.CLIMATE_SUPPORT_FAN_MODE);
            expect(entity).to.have.nested.property('context.ATTRIBUTES');
            expect(entity.context.ATTRIBUTES).to.have.lengthOf(3);
            const modeAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'fan_mode');
            expect(modeAttribute).to.be.ok;
            expect(modeAttribute).to.have.property('getId', deviceId + '.fan');

            expect(entity).to.have.nested.property('context.COMMANDS');
            expect(entity.context.COMMANDS).to.have.lengthOf(3);
            const setHVAC = entity.context.COMMANDS.find(c => c.service === 'set_fan_mode');
            expect(setHVAC).to.be.ok;

            expect(entity).to.have.nested.property('attributes.fan_mode', 'AUTO');
            expect(entity).to.have.nested.property('attributes.fan_modes');
            expect(entity.attributes.fan_modes).to.have.members(['AUTO', 'HIGH', 'LOW', 'MEDIUM', 'QUIET', 'TURBO']);
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.fan', 1, true),
                entity => expect(entity).to.have.nested.property('attributes.fan_mode', 'HIGH'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.fan', 2, true),
                entity => expect(entity).to.have.nested.property('attributes.fan_mode', 'LOW'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.fan', 10, true),
                entity => expect(entity).to.have.nested.property('attributes.fan_mode', 10));

            console.log('Sending UI commands.');
            await tools.validateUIInput(harness, entity,m => {
                m.domain = 'climate'; m.service = 'set_fan_mode'; m.service_data = {fan_mode: 'AUTO'};
            }, deviceId + '.fan', state => expect(state.val).to.equal(0));
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_fan_mode'; m.service_data = {fan_mode: 'HIGH'};
            }, deviceId + '.fan', state => expect(state.val).to.equal(1));
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_fan_mode'; m.service_data = {fan_mode: '10'};
            }, deviceId + '.fan', state => expect(state.val).to.equal(10));
        });

        it('should create climate with mode and swing, test swing control', async () => {
            // Create a fresh harness instance each test!
            const harness = getHarness();

            const objects = JSON.parse(JSON.stringify(require('../testData/climate_aircondition_mode_full_and_swing.json')));
            const deviceId = 'adapter.0.aircondition.ModeAndSwing';
            const deviceObj = objects[deviceId];
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.mode', val: 1}, {id: deviceId + '.swing', val: 0}]);

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'climate', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.supported_features', climate.supportedFlags.CLIMATE_SUPPORT_TARGET_TEMPERATURE | climate.supportedFlags.CLIMATE_SUPPORT_SWING_MODE);
            expect(entity).to.have.nested.property('context.ATTRIBUTES');
            expect(entity.context.ATTRIBUTES).to.have.lengthOf(3);
            const modeAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'swing_mode');
            expect(modeAttribute).to.be.ok;
            expect(modeAttribute).to.have.property('getId', deviceId + '.swing');

            expect(entity).to.have.nested.property('context.COMMANDS');
            expect(entity.context.COMMANDS).to.have.lengthOf(3);
            const setHVAC = entity.context.COMMANDS.find(c => c.service === 'set_swing_mode');
            expect(setHVAC).to.be.ok;

            expect(entity).to.have.nested.property('attributes.swing_mode', 'AUTO');
            expect(entity).to.have.nested.property('attributes.swing_modes');
            expect(entity.attributes.swing_modes).to.have.members(['AUTO', 'HORIZONTAL', 'STATIONARY', 'VERTICAL']);
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.swing', 3, true),
                entity => expect(entity).to.have.nested.property('attributes.swing_mode', 'VERTICAL'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.swing', 1, true),
                entity => expect(entity).to.have.nested.property('attributes.swing_mode', 'HORIZONTAL'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.swing', 10, true),
                entity => expect(entity).to.have.nested.property('attributes.swing_mode', 10));

            console.log('Sending UI commands.');
            await tools.validateUIInput(harness, entity,m => {
                m.domain = 'climate'; m.service = 'set_swing_mode'; m.service_data = {swing_mode: 'AUTO'};
            }, deviceId + '.swing', state => expect(state.val).to.equal(0));
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_swing_mode'; m.service_data = {swing_mode: 'HORIZONTAL'};
            }, deviceId + '.swing', state => expect(state.val).to.equal(1));
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_swing_mode'; m.service_data = {swing_mode: '10'};
            }, deviceId + '.swing', state => expect(state.val).to.equal(10));
        });

        it('should create climate with mode and fan and no states', async () => {
            // Create a fresh harness instance each test!
            const harness = getHarness();

            const objects = JSON.parse(JSON.stringify(require('../testData/climate_aircondition_mode_full_and_fan.json')));
            const deviceId = 'adapter.0.aircondition.ModeAndFan';
            const deviceObj = objects[deviceId];
            delete objects[deviceId + '.fan'].common.states; //remove states.
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.mode', val: 1}, {id: deviceId + '.fan', val: 0}]);

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'climate', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.supported_features', climate.supportedFlags.CLIMATE_SUPPORT_TARGET_TEMPERATURE | climate.supportedFlags.CLIMATE_SUPPORT_FAN_MODE);
            expect(entity).to.have.nested.property('context.ATTRIBUTES');
            expect(entity.context.ATTRIBUTES).to.have.lengthOf(3);
            const modeAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'fan_mode');
            expect(modeAttribute).to.be.ok;
            expect(modeAttribute).to.have.property('getId', deviceId + '.fan');

            expect(entity).to.have.nested.property('context.COMMANDS');
            expect(entity.context.COMMANDS).to.have.lengthOf(3);
            const setFan = entity.context.COMMANDS.find(c => c.service === 'set_fan_mode');
            expect(setFan).to.be.ok;

            expect(entity).to.have.nested.property('attributes.fan_mode', 0);
            expect(entity).to.have.nested.property('attributes.fan_modes');
            expect(entity.attributes.fan_modes).to.have.members([0, 1, 2, 3, 4, 5, 6, 7]);
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.fan', 1, true),
                entity => expect(entity).to.have.nested.property('attributes.fan_mode', 1));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.fan', 2, true),
                entity => expect(entity).to.have.nested.property('attributes.fan_mode', 2));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.fan', 10, true),
                entity => expect(entity).to.have.nested.property('attributes.fan_mode', 10));

            console.log('Sending UI commands.');
            await tools.validateUIInput(harness, entity,m => {
                m.domain = 'climate'; m.service = 'set_fan_mode'; m.service_data = {fan_mode: 0};
            }, deviceId + '.fan', state => expect(state.val).to.equal(0));
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_fan_mode'; m.service_data = {fan_mode: '1'};
            }, deviceId + '.fan', state => expect(state.val).to.equal(1));
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_fan_mode'; m.service_data = {fan_mode: '10'};
            }, deviceId + '.fan', state => expect(state.val).to.equal(10));
        });

        it('should create climate with mode and swing and no states', async () => {
            // Create a fresh harness instance each test!
            const harness = getHarness();

            const objects = JSON.parse(JSON.stringify(require('../testData/climate_aircondition_mode_full_and_swing.json')));
            const deviceId = 'adapter.0.aircondition.ModeAndSwing';
            const deviceObj = objects[deviceId];
            delete objects[deviceId + '.swing'].common.states;
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.mode', val: 1}, {id: deviceId + '.swing', val: 0}]);

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'climate', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.supported_features', climate.supportedFlags.CLIMATE_SUPPORT_TARGET_TEMPERATURE | climate.supportedFlags.CLIMATE_SUPPORT_SWING_MODE);
            expect(entity).to.have.nested.property('context.ATTRIBUTES');
            expect(entity.context.ATTRIBUTES).to.have.lengthOf(3);
            const modeAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'swing_mode');
            expect(modeAttribute).to.be.ok;
            expect(modeAttribute).to.have.property('getId', deviceId + '.swing');

            expect(entity).to.have.nested.property('context.COMMANDS');
            expect(entity.context.COMMANDS).to.have.lengthOf(3);
            const setSwing = entity.context.COMMANDS.find(c => c.service === 'set_swing_mode');
            expect(setSwing).to.be.ok;

            expect(entity).to.have.nested.property('attributes.swing_mode', 0);
            expect(entity).to.have.nested.property('attributes.swing_modes');
            expect(entity.attributes.swing_modes).to.have.members([0, 1, 2, 3, 4, 5, 6, 7]);
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.swing', 3, true),
                entity => expect(entity).to.have.nested.property('attributes.swing_mode', 3));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.swing', 1, true),
                entity => expect(entity).to.have.nested.property('attributes.swing_mode', 1));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.swing', 10, true),
                entity => expect(entity).to.have.nested.property('attributes.swing_mode', 10));

            await tools.validateUIInput(harness, entity,m => {
                m.domain = 'climate'; m.service = 'set_swing_mode'; m.service_data = {swing_mode: '0'};
            }, deviceId + '.swing', state => expect(state.val).to.equal(0));
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_swing_mode'; m.service_data = {swing_mode: 1};
            }, deviceId + '.swing', state => expect(state.val).to.equal(1));
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_swing_mode'; m.service_data = {swing_mode: '10'};
            }, deviceId + '.swing', state => expect(state.val).to.equal(10));
        });

        it('should create climate with mode and swing and fan and power', async () => {
            // Create a fresh harness instance each test!
            const harness = getHarness();

            const objects = JSON.parse(JSON.stringify(require('../testData/climate_aircondition_full.json')));
            const deviceId = 'adapter.0.aircondition.Full';
            const deviceObj = objects[deviceId];
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.mode', val: 1}, {id: deviceId + '.swing', val: 0}]);

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'climate', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.supported_features',
                climate.supportedFlags.CLIMATE_SUPPORT_TARGET_TEMPERATURE |
                climate.supportedFlags.CLIMATE_SUPPORT_SWING_MODE |
                climate.supportedFlags.CLIMATE_SUPPORT_FAN_MODE |
                climate.supportedFlags.CLIMATE_SUPPORT_PRESET_MODE);
            expect(entity).to.have.nested.property('context.ATTRIBUTES');
            expect(entity.context.ATTRIBUTES).to.have.lengthOf(8);

            expect(entity).to.have.nested.property('context.COMMANDS');
            expect(entity.context.COMMANDS).to.have.lengthOf(5);
        });

        it('should create climate with binary swing, test swing control', async () => {
            // Create a fresh harness instance each test!
            const harness = getHarness();

            const objects = JSON.parse(JSON.stringify(require('../testData/climate_aircondition_mode_full_and_binary_swing.json')));
            const deviceId = 'adapter.0.aircondition.BinarySwing';
            const deviceObj = objects[deviceId];
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.mode', val: 1}, {id: deviceId + '.swing', val: false}]);

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'climate', deviceId, deviceObj.name);

            expect(entity).to.have.nested.property('attributes.supported_features', climate.supportedFlags.CLIMATE_SUPPORT_TARGET_TEMPERATURE | climate.supportedFlags.CLIMATE_SUPPORT_SWING_MODE);
            expect(entity).to.have.nested.property('context.ATTRIBUTES');
            expect(entity.context.ATTRIBUTES).to.have.lengthOf(3);
            const modeAttribute = entity.context.ATTRIBUTES.find(a => a.attribute === 'swing_mode');
            expect(modeAttribute).to.be.ok;
            expect(modeAttribute).to.have.property('getId', deviceId + '.swing');

            expect(entity).to.have.nested.property('context.COMMANDS');
            expect(entity.context.COMMANDS).to.have.lengthOf(3);
            const setHVAC = entity.context.COMMANDS.find(c => c.service === 'set_swing_mode');
            expect(setHVAC).to.be.ok;

            expect(entity).to.have.nested.property('attributes.swing_mode', 'off');
            expect(entity).to.have.nested.property('attributes.swing_modes');
            expect(entity.attributes.swing_modes).to.have.members(['on', 'off']);
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.swing', true, true),
                entity => expect(entity).to.have.nested.property('attributes.swing_mode', 'on'));
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.swing', false, true),
                entity => expect(entity).to.have.nested.property('attributes.swing_mode', 'off'));

            console.log('Sending UI commands.');
            await tools.validateUIInput(harness, entity,m => {
                m.domain = 'climate'; m.service = 'set_swing_mode'; m.service_data = {swing_mode: 'on'};
            }, deviceId + '.swing', state => expect(state.val).to.be.true);
            await tools.validateUIInput(harness, entity, m => {
                m.domain = 'climate'; m.service = 'set_swing_mode'; m.service_data = {swing_mode: 'off'};
            }, deviceId + '.swing', state => expect(state.val).to.be.false);
        });

        it('should stay off if power is off and mode changes but should set right mode if power comes on', async () => {
            // Create a fresh harness instance each test!
            const harness = getHarness();

            const objects = JSON.parse(JSON.stringify(require('../testData/climate_aircondition_full.json')));
            const deviceId = 'adapter.0.aircondition.Full';
            const deviceObj = objects[deviceId];
            const entities = await tools.startAndGetEntities(harness, objects, [deviceId], [{id: deviceId + '.mode', val: 1}, {id: deviceId + '.power', val: false}]);

            const entity = entities.find(e => e.context.id === deviceId);
            expect(entity).to.be.ok;
            tools.expectEntity(entity, 'climate', deviceId, deviceObj.name);

            expect(entity).to.have.property('state', 'off');
            expect(entity).to.have.nested.property('attributes.hvac_mode', 'off');
            //stay off!
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.mode', 2, true),
                entity => {
                    expect(entity).to.have.property('state', 'off');
                    expect(entity).to.have.nested.property('attributes.hvac_mode', 'off');
                });
            //set right mode, if on again.
            await tools.validateStateChange(harness, entity.entity_id,
                async () => await harness.states.setStateAsync(deviceId + '.power', true, true),
                entity =>
                {
                    expect(entity).to.have.nested.property('attributes.hvac_mode', 'heat');
                });
        });
    });
};
