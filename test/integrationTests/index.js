const binary_sensor_tests = require('./binary_sensor_integration_tests');

exports.runTests = function (getHarness) {
    return describe('Test binary_sensors', async () => {
        await binary_sensor_tests.runTests(getHarness);
    });
};
