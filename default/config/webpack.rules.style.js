module.exports = function({ environment, config }, { test, exclude }) {
  const { production } = environment;

  return {
    test,
    exclude,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      {
        loader: 'stylus-loader',
        options: {
          preferPathResolver: 'webpack',
          sourceMap: production ? undefined : {
            comment: true,
            inline: true
          }
        }
      },
      {
        loader: 'stylint-loader',
        options: require(config.path('linter.style.stylint'))
      }
    ]
  };
};
