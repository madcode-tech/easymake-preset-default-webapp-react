module.exports = function (
  rootConfig = {},
  api,
  {
    karmaConfig,
    webpack: { entry, config: webpackConfig }
  }
) {
  return Object.assign(rootConfig, {
    // any params from standart karma's config documentation
    //logLevel: config.LOG_DEBUG,
  });
}
