#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
  title: pkgJSON.name,
  tagLine: 'Hi there! 👋',
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: '#2ecc71',
  color: '#000000',
  bold: true,
  clear: true,
});

console.log(`
Sammy Teahan

Software Developer at Objective

Github: https://github.com/sammyteahan
Stack Overflow: https://stackoverflow.com/users/7003729/sammyteahan
Codeforces: https://codeforces.com/submissions/kingjames
`);

