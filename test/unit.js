const path = require('path');
const { tests } = require('@iobroker/testing');

// Run unit tests - See https://github.com/ioBroker/testing for a detailed explanation and further options
tests.unit(path.join(__dirname, '..'), {
    // optionally define which modules should be mocked.
    additionalMockedModules: {
        // Use the {CONTROLLER_DIR} placeholder to access the path where JS-Controller would be installed.
        // Don't forget to provide mocks for every module you need, as they don't exist in unit tests
        '{CONTROLLER_DIR}/lib/tools': {},
        '{CONTROLLER_DIR}/lib/letsencrypt': {}
    }
});
