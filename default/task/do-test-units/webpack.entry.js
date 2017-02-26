if (process && process.chdir && process.getgid) {
  // loaded in node
  module.exports = {
    TESTS: '%TESTS_CONTEXT%',
    SOURCE: '%SOURCE_CONTEXT%'
  };
} else {
  // loaded in webpack
  /*
      when this file loaded in webpack it does nothing
      but require.context is webpack's require and
      this call makes a context, which we replace in
      contextReplacementPlugin for needing folder and regexp,
      so this call returns all the files by those context,
      and the second cycle just loads each in bundle
  */

  // only string, not constant (see webpack's require.context manual)

  // sources loaded to see full coverage (include files not covered by tests)
  var unitContext = require.context('%SOURCE_CONTEXT%');
  unitContext.keys().forEach(unitContext);

  // loading tests
  var testContext = require.context('%TESTS_CONTEXT%');
  testContext.keys().forEach(testContext);
}
