const binary_sensor_tests   = require('./binary_sensor_integration_tests');
const sensor_tests          = require('./sensor_integration_tests');
const object_change_tests   = require('./objects_change_tests');
const custom_settings_tests = require('./custom_settings_tests');

exports.runTests = function (getHarness) {
    describe('Test binary_sensors', async () => {
        await binary_sensor_tests.runTests(getHarness);
    });

    describe('Test sensors', async () => {
        await sensor_tests.runTests(getHarness);
    });

    describe('Test object changes', async () => {
        await object_change_tests.runTests(getHarness);
    });

    describe('Test custom settings', async () => {
        await custom_settings_tests.runTests(getHarness);
    });
};
