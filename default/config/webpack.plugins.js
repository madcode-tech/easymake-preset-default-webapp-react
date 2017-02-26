const path = require('path');
const webpack = require('webpack');

module.exports = function(
  rootConfig = [],
  { environment, config },
  { testingContexts } = {}
) {
  if (testingContexts) {
    const {
      TESTS:  { constant: TESTS,  path: pathTests },
      SOURCE: { constant: SOURCE, path: pathSource }
    } = testingContexts;

    const { paths: { extensions, test } } = environment;

    function prepareForRegExp(value) {
      return (value == null) ? '' : value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }

    const scriptExtensionsRegExp = (function(extensions) {
      return extensions.length > 0 ? '(' + extensions.map(prepareForRegExp).join('|') + ')$' : '';
    })(extensions.script);

    const testSubFolder = (function(subFolder) {
      return subFolder == null ? null : path.sep + subFolder + path.sep;
    })(test.subFolder);

    rootConfig.unshift(
      new webpack.ContextReplacementPlugin(
        new RegExp(TESTS),
        pathTests,
        true,
        new RegExp(
          prepareForRegExp(pathTests)
            + '.*'
            + prepareForRegExp(testSubFolder)
            + '.*'
            + prepareForRegExp(test.fileSuffix)
            + scriptExtensionsRegExp
        )
      )
    );

    /*
      here can load test second time if tests lies in source folder
      but this is not terrible for testing
    */
    rootConfig.unshift(
      new webpack.ContextReplacementPlugin(
        new RegExp(SOURCE),
        pathSource,
        true,
        new RegExp(scriptExtensionsRegExp)
      )
    );
  }

  return rootConfig;
};
