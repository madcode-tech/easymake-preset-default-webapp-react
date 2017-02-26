module.exports = function(rootConfig = {
  folder:     {},
  fileName:   {},
  file:       {},
  extensions: {},
  test:       {}
}, api) {
  // all items in "folder" property will be resolved by root of project

  //rootConfig.folder['bundle']     = '/path/to/bundle';
  //rootConfig.folder['source']     = './path/to/source';
  //rootConfig.folder['entry']      = './path/to/entry/file';
  //rootConfig.folder['tests']      = './path/to/tests';
  //rootConfig.folder['static']     = './path/to/folder/with/static/files';
  //rootConfig.folder['coverage']   = './path/where/test/coverage/report/will/be/written';

  //rootConfig.fileName['bundle']   = 'bundleFileName!noExtension!';
  //rootConfig.fileName['vendor']   = 'vendorLibrariesFileName!noExtension!';

  //rootConfig.file['entry']        = 'source.entry.file.name.js';;

  //rootConfig.extensions['script'] = ['.js', '.jsx', '.ts', '.tsx'];
  //rootConfig.extensions['other']  = ['.styl', '.sass', '.less'];

  // dot-folders like (.test) don't resolved by webpack now
  //rootConfig.test['subFolder']    = '_test';
  //rootConfig.test['fileSuffix']   = '.test';

  return rootConfig;
};
