module.exports = function (rootConfig = [], { environment, config }) {
  const { paths: { folder: { bundle, coverage } } } = environment;

  return rootConfig.concat([bundle, coverage]);
};
