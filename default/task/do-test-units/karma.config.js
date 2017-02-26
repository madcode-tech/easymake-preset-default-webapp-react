const path = require('path');

const {
  environment: { paths: { folder } },
  api: { config, files }
} = require('easymake');

module.exports = function(karmaConfig) {
  const webpackEntry = files.resolve(__dirname, 'webpack.entry.js');
  const { TESTS, SOURCE } = require(webpackEntry);

  function relativeToWPEntry(folder) {
    return path.relative(path.dirname(webpackEntry), folder);
  }

  const webpackConfig = config.load(
    'task.test-units.karma.webpack.config',
    {
      entry:  webpackEntry,
      contexts: {
        TESTS:  { constant: TESTS,  path: relativeToWPEntry(folder.tests) },
        SOURCE: { constant: SOURCE, path: relativeToWPEntry(folder.source) }
      }
    }
  );

  const karmaConfigResult = config.load(
    'task.test-units.karma',
    {
      karmaConfig,
      webpack: {
        entry: webpackEntry,
        config: webpackConfig
      }
    }
  );

  files.folderCreate(folder.coverage);
  karmaConfig.set(karmaConfigResult);
}
