// ioBroker eslint template configuration file for js and ts files
// Please note that esm or react based modules need additional modules loaded.
import config from '@iobroker/eslint-config';

export default [
    ...config,

    {
        // tasks.ts is outside of the "src" rootDir of tsconfig.json, so lint it with the default project.
        // All TS files share one project service, so the option must be the same for all of them (JS files are
        // linted without type information anyway).
        files: ['**/*.ts'],
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['tasks.ts'],
                },
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },

    {
        // node runs tasks.ts directly as CommonJS (the package has no "type": "module"), so it has to use require()
        files: ['tasks.ts'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
        },
    },

    {
        // specify files to exclude from linting here
        ignores: [
            '.dev-server/',
            '.vscode/',
            '.claude/',
            //'**.test.js',
            //'test/**/*.js',
            '*.config.mjs',
            'build/',
            'dist/',
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