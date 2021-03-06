'use strict';

// set paperspace_cli to see if we are being run at the command line
// note: there are four typical entry points to the library: bin/paperspace, lib/paperspace.js, index.js, and lib/cli.js
if (!global.paperspace_cli) global.paperspace_cli = (require.main === module);

module.exports = require('./lib');
