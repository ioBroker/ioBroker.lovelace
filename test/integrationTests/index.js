const alarm_control_tests = require('./alarm_control_panel_integration_tests');
const binary_sensor_tests = require('./binary_sensor_integration_tests');
const climate_tests = require('./climate_integration_tests');
const geo_location_tests = require('./geo_location_tests');
const input_datetime_tests = require('./input_datetime_tests');
const input_select_tests = require('./input_select_tests');
const light_tests = require('./light_integration_tests');
const media_player_tests = require('./media_player_integration_tests');
const sensor_tests = require('./sensor_integration_tests');
const weather_tests = require('./weather_integration_tests');

const object_change_tests = require('./objects_change_tests');
const custom_settings_tests = require('./custom_settings_tests');

exports.runTests = function (suite) {
    alarm_control_tests.runTests(suite);
    binary_sensor_tests.runTests(suite);
    climate_tests.runTests(suite);
    geo_location_tests.runTests(suite);
    input_datetime_tests.runTests(suite);
    input_select_tests.runTests(suite);
    light_tests.runTests(suite);
    media_player_tests.runTests(suite);
    sensor_tests.runTests(suite);
    weather_tests.runTests(suite);
    object_change_tests.runTests(suite);
    custom_settings_tests.runTests(suite);
};
