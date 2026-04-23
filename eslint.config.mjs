// ioBroker eslint template configuration file for js and ts files
// Please note that esm or react based modules need additional modules loaded.
import config from '@iobroker/eslint-config';

export default [
    ...config,

    {
        // specify files to exclude from linting here
        ignores: [
            '.dev-server/',
            '.vscode/',
            //'**.test.js',
            //'test/**/*.js',
            '*.config.mjs',
            'build',
            'dist',
            'admin/words.js',
            'admin/admin.d.ts',
            '**/adapter-config.d.ts',
            'hass_frontend/',
            'node_modules/',
            'admin/**.min.js'
        ]
    },

    {
        // you may disable some 'jsdoc' warnings - but using jsdoc is highly recommended
        // as this improves maintainability. jsdoc warnings will not block build process.
        rules: {
            'no-else-return': 'off',
            'jsdoc/require-jsdoc': 1,
            'jsdoc/no-types': 'off',
            'no-redundant-jsdoc': 'off',
        },
    },

    {
        // server.ts is a large JS→TS migration in progress.
        // Strict typing rules are relaxed here until the incremental typing pass is done.
        files: ['src/lib/server.ts'],
        rules: {
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/require-await': 'off',
            'jsdoc/require-jsdoc': 'off',
        },
    },

];