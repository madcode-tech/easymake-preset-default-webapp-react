module.exports = function(
  rootConfig = {},
  { environment, config },
  { entry, contexts }
) {
  const { context, paths: { extensions } } = environment;

  return Object.assign(rootConfig, {
    context,
    devtool: 'inline-source-map',

    module: {
      rules: config.load(
        'webpack.rules',
        { exclude: [entry], forTesting: true }
      )
    },

    externals: {
      'cheerio': 'window',
      'react/addons': 'react',
      'react/lib/ExecutionEnvironment': 'react',
      'react/lib/ReactContext': 'react'      
    },

    resolve: {
      extensions: [].concat(extensions.script, extensions.other)
    },

    plugins: config.load('webpack.plugins', { testingContexts: contexts })
  });
};
