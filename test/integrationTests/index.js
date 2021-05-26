const binary_sensor_tests = require('./binary_sensor_itests');

exports.runTests = function (getHarness) {
    return describe('Test binary_sensors', async () => {
        await binary_sensor_tests.runTests(getHarness);
    });
};
