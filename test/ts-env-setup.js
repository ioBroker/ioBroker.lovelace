// Sets the ts-node env vars before ts-node/register loads.
// Used by the test:ts npm script so it works on Windows (cmd.exe) without cross-env.
process.env.TS_NODE_TRANSPILE_ONLY = 'true';
process.env.TS_NODE_PROJECT = 'tsconfig.test.json';
