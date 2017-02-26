const path = require('path');

module.exports = function (
  rootConfig = {},
  { environment, config },
  {
    karmaConfig,
    webpack: { entry, config: webpackConfig }
  }
) {
  const { context, production, paths } = environment;

  const files = [entry];
  const preprocessors = {
    [entry]: ['webpack', 'sourcemap']
  };

  return Object.assign(rootConfig, {
    basePath: context,

    files,

    autoWatch: !production,

    browserConsoleLogOptions: {
      level: 'debug',
      format: '%b %T: %m',
      terminal: true,
      path: path.join(paths.folder.coverage, 'tests.browser.console.html')
    },

    browsers: ['PhantomJS'],

    frameworks: ['mocha', 'chai', 'sinon'],

    loggers: [{ type: 'console' }],

    reporters: ['progress', 'coverage'],

    singleRun: production,

    plugins: [
      'karma-phantomjs-launcher',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-coverage'
    ],

    preprocessors,

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },

    coverageReporter: {
      type :              'html',
      dir :               paths.folder.coverage,
      includeAllSources:  true
    }
  });
}
