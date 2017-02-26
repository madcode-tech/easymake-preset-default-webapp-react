function ESLint(ignorePattern, configFile) {
  return {
    loader: 'eslint-loader',
    options: {
      configFile,
      ignorePattern,
      dotfiles: true // fixes ESLint ignorePattern error + fixed ignore package
    }
  };
}

module.exports = function(
  { environment, config },
  { test, addPresets = [], exclude, forTesting }
) {
  const {
    paths: {
      test: {
        subFolder: testSubFolder,
        fileSuffix: testFileSuffix
      }
    }
  } = environment;

  const tests = (testSubFolder == null)
    ? '**/*' + testFileSuffix + '.js'
    : '**/' + testSubFolder + '/**/*' + testFileSuffix + '.js';

  const testLoaders = [];
  const testBabelPlugins = [];

  if (forTesting) {
    testLoaders.push(ESLint('!' + tests, config.path('linter.script.test.eslint')));
    testBabelPlugins.push([ 'istanbul', { exclude: [ tests ] } ]);
  }

  return {
    test,
    exclude,
    use: [
      {
        loader: 'babel-loader',
        options: {
          plugins: testBabelPlugins.concat(
            ['transform-promise-to-bluebird', 'transform-runtime']
          ),
          presets: ['es2015', 'es2016', 'stage-1'].concat(addPresets),
          cacheDirectory: true
        }
      },
      ESLint(tests, config.path('linter.script.source.eslint'))
    ].concat(testLoaders)
  };
};
