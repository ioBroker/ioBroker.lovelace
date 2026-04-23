'use strict';
// Entry point — delegates to compiled TypeScript.
// The real logic lives in src/main.ts (compiled to build/main.js).
if (module.parent) {
    module.exports = require('./build/main');
} else {
    require('./build/main');
}
