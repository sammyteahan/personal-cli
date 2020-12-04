#!/usr/bin/env node

const pkgJSON = require('./package.json');

const welcome = require('cli-welcome');
const chalk = require('chalk');

welcome({
  title: 'Sammy Teahan',
  tagLine: 'Hi there! 👋',
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: '#2ecc71',
  color: '#000000',
  bold: true,
  clear: true,
});

console.log(`${chalk.italic('Software Developer at https://www.objectiveinc.com')}

${chalk.hex('#6cc644').bold.inverse(' GitHub ')}         ${chalk.dim('https://github.com/sammyteahan')}
${chalk.hex('#554488').bold.inverse(' GitLab ')}         ${chalk.dim('https://gitlab.com/sammyteahan')}
${chalk.hex('#f48024').bold.inverse(' Stack Overflow ')} ${chalk.dim('https://stackoverflow.com/users/7003729/sammyteahan')}
${chalk.hex('#C11D26').bold.inverse(' Codeforces ')}     ${chalk.dim('https://codeforces.com/submissions/kingjames')}
`);

