const path = require('path');
const webpack = require('webpack');

module.exports = function(rootConfig = {}, { environment, config }) {
  const {
    production,
    context,
    paths: {
      folder: { entry, bundle },
      file: { entry: fileEntry },
      fileName: { bundle: fileNameBundle, vendor: fileNameVendor },
      extensions
    }
  } = environment;

  const {
    bundle: librariesBundle,
    vendor: librariesVendor,
    externals
  } = config.load('webpack.libraries');

  const entryPoints = {
    [fileNameBundle]: librariesBundle.concat([path.resolve(entry, fileEntry)])
  };

  (librariesVendor.length > 0) && (entryPoints[fileNameVendor] = librariesVendor);

  return Object.assign(rootConfig,
    {
      context,
      entry: entryPoints,
      output: {
        path: bundle,
        filename: '[name].js'
      },
      externals,
      watch: !production,
      plugins: config.load('webpack.plugins').concat(
        (librariesVendor.length > 0)
          ? [ new webpack.optimize.CommonsChunkPlugin({ name: fileNameVendor }) ]
          : []
      ),
      devtool: !production && 'source-map',
      profile: true,
      resolve: {
        extensions: [].concat(extensions.script, extensions.other)
      },
      module: {
        rules: config.load('webpack.rules')
      }
    }
  );
};
