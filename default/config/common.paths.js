const path = require('path');

module.exports = function(rootConfig = {
  folder:     {},
  fileName:   {},
  file:       {},
  extensions: {},
  test:       {}
}, { environment, config }) {
  const folderSource = './source';

  rootConfig.folder['bundle']     = './bundle';
  rootConfig.folder['source']     = folderSource;
  rootConfig.folder['entry']      = folderSource;
  rootConfig.folder['tests']      = folderSource;
  rootConfig.folder['static']     = path.join(folderSource, 'static');
  rootConfig.folder['coverage']   = './coverage';

  rootConfig.fileName['bundle']   = 'bundle';
  rootConfig.fileName['vendor']   = 'vendor';

  rootConfig.file['entry']        = 'entry.js';

  rootConfig.extensions['script'] = ['.js', '.jsx'];
  rootConfig.extensions['other']  = ['.styl'];

  // dot-folders like (.test) don't resolved by webpack now
  rootConfig.test['subFolder']    = '_test';
  rootConfig.test['fileSuffix']   = '.test';

  return rootConfig;
};
