#!/usr/bin/env node

const chalk = require('chalk');

const init = require('./src/init');

init();

(function() {
  console.log(`${chalk.italic('Software Developer at https://www.objectiveinc.com')}

  ${chalk.hex('#6cc644').bold.inverse(' GitHub ')}         ${chalk.dim('https://github.com/sammyteahan')}
  ${chalk.hex('#554488').bold.inverse(' GitLab ')}         ${chalk.dim('https://gitlab.com/sammyteahan')}
  ${chalk.hex('#f48024').bold.inverse(' Stack Overflow ')} ${chalk.dim('https://stackoverflow.com/users/7003729/sammyteahan')}
  ${chalk.hex('#C11D26').bold.inverse(' Codeforces ')}     ${chalk.dim('https://codeforces.com/submissions/kingjames')}
  `);
}());

