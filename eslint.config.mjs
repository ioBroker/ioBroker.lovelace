// ioBroker eslint template configuration file for js and ts files
// Please note that esm or react based modules need additional modules loaded.
import config from '@iobroker/eslint-config';

export default [
    ...config,

    {
        // specify files to exclude from linting here
        ignores: [
            //'**.test.js',
            //'test/**/*.js',
            '*.config.mjs',
            'admin/words.js',
            'admin/admin.d.ts',
            '**/adapter-config.d.ts',
            'hass_frontend/',
            'node_modules/',
            '.dev-server/',
            'admin/**.min.js'
        ]
    },

    {
        // you may disable some 'jsdoc' warnings - but using jsdoc is highly recommended
        // as this improves maintainability. jsdoc warnings will not block buiuld process.
        rules: {
            'no-else-return': 'off',
            // 'jsdoc/require-jsdoc': 'off',
            'jsdoc/no-types': 'off',
        },
    },

];