module.exports = function(
  rootConfig = {},
  api,
  {
    entry,
    contexts: {
      TESTS:  { constant: TESTS,  path: pathTests },
      SOURCE: { constant: SOURCE, path: pathSource }
    }
  }
) {
  return Object.assign(rootConfig, {
    // any params from standart webpack's config documentation
  });
};
