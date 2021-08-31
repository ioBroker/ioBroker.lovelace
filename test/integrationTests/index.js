const binary_sensor_tests   = require('./binary_sensor_integration_tests');
const climate_tests         = require('./climate_integration_tests');
const geo_location_tests    = require ('./geo_location_tests');
const input_datetime_tests  = require('./input_datetime_tests');
const input_select_tests    = require('./input_select_tests');
const light_tests           = require('./light_integration_tests');
const sensor_tests          = require('./sensor_integration_tests');
const weather_tests         = require('./weather_integration_tests');

const object_change_tests   = require('./objects_change_tests');
const custom_settings_tests = require('./custom_settings_tests');

const tools                 = require('./testTools');

exports.runTests = function (getHarness) {
    afterEach(tools.clearClient);

    describe('Test binary_sensors', async () => {
        await binary_sensor_tests.runTests(getHarness);
    });

    describe('Test climate', async () => {
        await climate_tests.runTests(getHarness);
    });

    describe('Test geo_location', async () => {
        await geo_location_tests.runTests(getHarness);
    });

    describe('Test input_datetime', async () => {
        await input_datetime_tests.runTests(getHarness);
    });

    describe('Test input_select', async () => {
        await input_select_tests.runTests(getHarness);
    });

    describe('Test lights', async () => {
        await light_tests.runTests(getHarness);
    });

    describe('Test sensors', async () => {
        await sensor_tests.runTests(getHarness);
    });

    describe('Test weather', async () => {
        await weather_tests.runTests(getHarness);
    })

    describe('Test object changes', async () => {
        await object_change_tests.runTests(getHarness);
    });

    describe('Test custom settings', async () => {
        await custom_settings_tests.runTests(getHarness);
    });

};
