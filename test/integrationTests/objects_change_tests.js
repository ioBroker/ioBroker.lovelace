/* global it before */
const tools = require('./testTools');
const expect = require('chai').expect;

exports.runTests = function (suite) {
    suite('object_change', getHarness => {
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
            objects = tools.loadMultipleObjects(jsonFiles);
            entities = await tools.startAndGetEntities(harness, objects, idsWithEnums, initialStates);
        });

        jsonFiles.push('../testData/light_onOff.json');
        idsWithEnums.push('adapter.0.light.OnlyOnOff');
        it('should update smartname', async () => {
            const deviceId = 'adapter.0.light.OnlyOnOff'; //working on onOffLamp.
            const deviceObj = JSON.parse(JSON.stringify(objects[deviceId]));

            const onOffLamp = entities.find(e => e.context.id === deviceId);
            expect(onOffLamp).to.be.ok;
            expect(onOffLamp).has.nested.property('attributes.friendly_name', deviceObj.common.smartName);

            deviceObj.common.smartName = 'Smartname changed';
            const newEntities = await tools.waitForEntitiesUpdate(harness, [deviceObj]);
            const newOnOffLamp = newEntities.find(e => e.context.id === deviceId);
            expect(newOnOffLamp).to.be.ok;
            expect(newOnOffLamp).has.nested.property('attributes.friendly_name', deviceObj.common.smartName);
        });

        //uses '../testData/light_onOff.json'
        it('should not update name if it has smart name', async () => {
            const deviceId = 'adapter.0.light.OnlyOnOff'; //working on onOffLamp.
            const deviceObj = JSON.parse(JSON.stringify(objects[deviceId]));

            const onOffLamp = entities.find(e => e.context.id === deviceId);
            expect(onOffLamp).to.be.ok;
            expect(onOffLamp).has.nested.property('attributes.friendly_name', deviceObj.common.smartName);

            deviceObj.common.name = 'Name changed';
            const newEntities = await tools.waitForEntitiesUpdate(harness, [deviceObj]);
            const newOnOffLamp = newEntities.find(e => e.context.id === deviceId);
            expect(newOnOffLamp).to.be.ok;
            expect(newOnOffLamp).has.nested.property('attributes.friendly_name', deviceObj.common.smartName);
        });

        jsonFiles.push('../testData/binary_sensor_motion_zigbee.json');
        idsWithEnums.push('adapter.0.binary_sensor.motions.zigbee');
        it('should update name if no smart name', async () => {
            const deviceId = 'adapter.0.binary_sensor.motions.zigbee'; //working on sensor.
            const deviceObj = objects[deviceId];

            const sensor = entities.find(e => e.context.id === deviceId);
            expect(sensor).to.be.ok;
            expect(sensor).has.nested.property('attributes.friendly_name', deviceObj.common.name);

            deviceObj.common.name = 'Name changed';
            const newEntities = await tools.waitForEntitiesUpdate(harness, [deviceObj]);
            const newSensor = newEntities.find(e => e.context.id === deviceId);
            expect(newSensor).to.be.ok;
            expect(newSensor).has.nested.property('attributes.friendly_name', deviceObj.common.name);
        });

        jsonFiles.push('../testData/light_rgbSingle_with_hue.json');
        idsWithEnums.push('adapter.0.light.rgbSingleWithHue');
        it('should switch lamp from rgb to hue if rgb state deleted', async () => {
            const deviceId = 'adapter.0.light.rgbSingleWithHue'; //working on color lamp
            const lamp = entities.find(e => e.context.id === deviceId);
            expect(lamp).to.be.ok;
            expect(lamp).to.have.nested.property('context.iobType', 'rgbSingle');

            await harness.states.setStateAsync('lovelace.0.info.entitiesUpdated', false);
            await harness.objects.delObjectAsync(`${deviceId}.color`);
            const newEntities = await tools.waitForEntitiesUpdate(harness, []);
            const newLamp = newEntities.find(e => e.context.id === deviceId);
            expect(newLamp).to.be.ok;
            expect(newLamp).to.have.nested.property('context.iobType', 'hue');
        });

        //uses '../testData/binary_sensor_motion_zigbee.json'
        it('should delete entity if objects deleted', async () => {
            const deviceId = 'adapter.0.binary_sensor.motions.zigbee';
            const shouldBeThere = entities.find(e => e.context.id === deviceId);
            expect(shouldBeThere).to.be.ok;

            await harness.states.setStateAsync('lovelace.0.info.entitiesUpdated', false);
            for (const id of Object.keys(objects)) {
                if (id.startsWith(deviceId)) {
                    await harness.objects.delObjectAsync(id);
                }
            }
            const newEntities = await tools.waitForEntitiesUpdate(harness, []);
            const shouldNotBeThere = newEntities.find(e => e.context.id === deviceId);
            expect(shouldNotBeThere).to.not.be.ok;
        });

        jsonFiles.push('../testData/light_colortemp.json');
        idsWithEnums.push('adapter.0.light.ColorTemp');
        it('should delete entity if removed from function enum', async () => {
            const deviceId = 'adapter.0.light.ColorTemp';
            const shouldBeThere = entities.find(e => e.context.id === deviceId);
            expect(shouldBeThere).to.be.ok;

            const funcEnum = await harness.objects.getObjectAsync('enum.functions.testfunc');
            const foundIndex = funcEnum.common.members.indexOf(deviceId);
            funcEnum.common.members.splice(foundIndex, 1);

            const newEntities = await tools.waitForEntitiesUpdate(harness, [funcEnum]);
            const shouldNotBeThere = newEntities.find(e => e.context.id === deviceId);
            expect(shouldNotBeThere).to.not.be.ok;
        });

        jsonFiles.push('../testData/light_brightness.json');
        idsWithEnums.push('adapter.0.light.BrightnessWithState');
        it('should delete entity if removed from room enum', async () => {
            const deviceId = 'adapter.0.light.BrightnessWithState';
            const shouldBeThere = entities.find(e => e.context.id === deviceId);
            expect(shouldBeThere).to.be.ok;

            const roomEnum = await harness.objects.getObjectAsync('enum.rooms.testroom');
            const foundIndex = roomEnum.common.members.indexOf(deviceId);
            roomEnum.common.members.splice(foundIndex, 1);
            await harness.objects.setObjectAsync(roomEnum._id, roomEnum);

            const newEntities = await tools.waitForEntitiesUpdate(harness, [roomEnum]);
            const shouldNotBeThere = newEntities.find(e => e.context.id === deviceId);
            expect(shouldNotBeThere).to.not.be.ok;
        });

        //uses '../testData/../testData/light_rgbSingle_with_hue.json'
        //uses '../testData/light_onOff.json'
        it('should keep entity if moved to other enum', async () => {
            const deviceId = 'adapter.0.light.rgbSingleWithHue';
            const deviceId2 = 'adapter.0.light.OnlyOnOff';
            const entities = await tools.waitForEntitiesUpdate(harness, [objects[deviceId], objects[deviceId2]]);
            const shouldBeThere = entities.find(e => e.context.id === deviceId);
            expect(shouldBeThere).to.be.ok;
            expect(entities.find(e => e.context.id === deviceId2)).to.be.ok;

            //move deviceId from test room to new created room:
            const roomEnum = await harness.objects.getObjectAsync('enum.rooms.testroom');
            const secondEnum = JSON.parse(JSON.stringify(roomEnum));
            let foundIndex = roomEnum.common.members.indexOf(deviceId);
            roomEnum.common.members.splice(foundIndex, 1);
            secondEnum.common.members = [deviceId];
            secondEnum.common.name = 'New Enum';
            secondEnum._id = 'enum.rooms.newroom';

            //move deviceId2 from test func to new created func:
            const funcEnum = await harness.objects.getObjectAsync('enum.functions.testfunc');
            const secondFuncEnum = JSON.parse(JSON.stringify(funcEnum));
            foundIndex = funcEnum.common.members.indexOf(deviceId2);
            funcEnum.common.members.splice(foundIndex, 1);
            secondFuncEnum.common.members = [deviceId2];
            secondFuncEnum.common.name = 'New function enum';
            secondFuncEnum._id = 'enum.functions.newFunc';

            const newEntities = await tools.waitForEntitiesUpdate(harness, [
                roomEnum,
                secondEnum,
                funcEnum,
                secondFuncEnum,
            ]);
            expect(newEntities.find(e => e.context.id === deviceId)).to.be.ok;
            expect(newEntities.find(e => e.context.id === deviceId2)).to.be.ok;
        });
    });
};
