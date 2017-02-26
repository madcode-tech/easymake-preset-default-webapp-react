const path = require('path');
const script = require('./webpack.rules.script.js');
const style = require('./webpack.rules.style.js');

module.exports = function(
  rootConfig = [],
  api,
  { exclude: excl = [], forTesting } = {}
) {
  const {
    paths: { extensions, folder: { 'static': folderStatic } }
  } = api.environment;

  function tester(ext) {
    const { script, other } = extensions;

    if ((script.indexOf(ext) == -1) && (other.indexOf(ext) == -1)) {
      throw 'Unknown extension: ' + ext;
    }

    return new RegExp('\\' + ext + '$');
  }

  const exclude = [
    /(node_modules|bower_components)/,
    function(path) {
      return path.indexOf(folderStatic) > -1;
    }
  ].concat(excl);

  return rootConfig.concat([
    script(api, { test: tester('.js'),    exclude, forTesting }),
    script(api, { test: tester('.jsx'),   exclude, forTesting, addPresets: ['react'].concat(forTesting ? ['airbnb'] : [])}),
    style(api,  { test: tester('.styl'),  exclude, forTesting })
  ]);
}
