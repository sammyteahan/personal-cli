const welcome = require('cli-welcome');
const pkgJSON = require('./../package.json');

module.exports = () => {
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
};
