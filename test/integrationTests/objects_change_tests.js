const tools  = require('./testTools');
const expect = require('chai').expect;

async function prepareDevices(harness) {
    const objects = require('../testData/objects_change_tests.json');
    const deviceIds = [
        'adapter.0.lamps.Color_Lamp',
        'adapter.0.lamps.OnOffLamp',
        'zigbee.0.0123456789abcdef'
    ];
    const entities = await tools.startAndGetEntities(harness, objects, deviceIds);
    expect(entities).to.have.lengthOf(3 + tools.getNumConstEntities());

    return {
        objects,
        deviceIds,
        entities
    };
}

exports.runTests = function (getHarness) {
    it('should update smartname', async () => {
        // Create a fresh harness instance each test!
        const harness = getHarness();

        const {entities, objects} = await prepareDevices(harness);
        const deviceId = 'adapter.0.lamps.OnOffLamp'; //working on onOffLamp.
        const deviceObj = objects[deviceId];

        const onOffLamp = entities.find(e => e.context.id === deviceId);
        expect(onOffLamp).to.be.ok;
        expect(onOffLamp).has.nested.property('attributes.friendly_name', deviceObj.common.smartName);

        deviceObj.common.smartName = 'Name changed';
        await harness.states.setStateAsync('lovelace.0.info.entitiesUpdated', false);
        await harness._objects.setObjectAsync(deviceId, deviceObj);
        const newEntities = await tools.waitForEntitiesUpdate(harness);
        const newOnOffLamp = newEntities.find(e => e.context.id === deviceId);
        expect(newOnOffLamp).to.be.ok;
        expect(newOnOffLamp).has.nested.property('attributes.friendly_name',deviceObj.common.smartName);
    });


    it('should not update name if it has smart name', async () => {
        // Create a fresh harness instance each test!
        const harness = getHarness();

        const {entities, objects} = await prepareDevices(harness);
        const deviceId = 'adapter.0.lamps.OnOffLamp'; //working on onOffLamp.
        const deviceObj = objects[deviceId];

        const onOffLamp = entities.find(e => e.context.id === deviceId);
        expect(onOffLamp).to.be.ok;
        expect(onOffLamp).has.nested.property('attributes.friendly_name', deviceObj.common.smartName);

        deviceObj.common.name = 'Name changed';
        await harness.states.setStateAsync('lovelace.0.info.entitiesUpdated', false);
        await harness._objects.setObjectAsync(deviceId, deviceObj);
        const newEntities = await tools.waitForEntitiesUpdate(harness);
        const newOnOffLamp = newEntities.find(e => e.context.id === deviceId);
        expect(newOnOffLamp).to.be.ok;
        expect(newOnOffLamp).has.nested.property('attributes.friendly_name',deviceObj.common.smartName);
    });

    it('should update name if no smart name', async () => {
        // Create a fresh harness instance each test!
        const harness = getHarness();

        const {entities, objects} = await prepareDevices(harness);
        const deviceId = 'zigbee.0.0123456789abcdef'; //working on sensor.
        const deviceObj = objects[deviceId];

        const sensor = entities.find(e => e.context.id === deviceId);
        expect(sensor).to.be.ok;
        expect(sensor).has.nested.property('attributes.friendly_name', deviceObj.common.name);

        deviceObj.common.name = 'Name changed';
        await harness.states.setStateAsync('lovelace.0.info.entitiesUpdated', false);
        await harness._objects.setObjectAsync(deviceId, deviceObj);
        const newEntities = await tools.waitForEntitiesUpdate(harness);
        const newSensor = newEntities.find(e => e.context.id === deviceId);
        expect(newSensor).to.be.ok;
        expect(newSensor).has.nested.property('attributes.friendly_name',deviceObj.common.name);
    });

    it('should switch lamp from rgb to hue if rgb state deleted', async () => {
        // Create a fresh harness instance each test!
        const harness = getHarness();

        const {entities} = await prepareDevices(harness);
        const deviceId = 'adapter.0.lamps.Color_Lamp'; //working on color lamp

        const lamp = entities.find(e => e.context.id === deviceId);
        expect(lamp).to.be.ok;
        expect(lamp).to.have.nested.property('context.iobType', 'rgpSingle');

        await harness.states.setStateAsync('lovelace.0.info.entitiesUpdated', false);
        await harness._objects.delObjectAsync(deviceId + '.color');
        const newEntities = await tools.waitForEntitiesUpdate(harness);
        const newLamp = newEntities.find(e => e.context.id === deviceId);
        expect(newLamp).to.be.ok;
        expect(newLamp).to.have.nested.property('context.iobType', 'hue');
    });

    it('should delete entity if objects deleted', async () => {
        const harness = getHarness();

        const {entities, objects} = await prepareDevices(harness);
        const deviceId = 'zigbee.0.0123456789abcdef';
        const shouldBeThere = entities.find(e => e.context.id === deviceId);
        expect(shouldBeThere).to.be.ok;

        for (const id of Object.keys(objects)) {
            if (id.startsWith(deviceId)) {
                await harness._objects.delObjectAsync(id);
            }
        }
        await harness.states.setStateAsync('lovelace.0.info.entitiesUpdated', false);
        const newEntities = await tools.waitForEntitiesUpdate(harness);
        const shouldNotBeThere = newEntities.find(e => e.context.id === deviceId);
        expect(shouldNotBeThere).to.not.be.ok;
    });
};
