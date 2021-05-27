const binary_sensor_tests = require('./binary_sensor_integration_tests');
const object_change_tests = require('./objects_change_tests');

exports.runTests = function (getHarness) {
    describe('Test binary_sensors', async () => {
        await binary_sensor_tests.runTests(getHarness);
    });

    describe('Test object changes', async () => {
        await object_change_tests.runTests(getHarness);
    });
};
