module.exports = function(rootConfig = {
  externals:  {},
  bundle:     [],
  vendor:     []
}, { environment, config }) {
  const {
    packageJSON: {
      dependencies = {},
      config: {
        easymake: {
          libraryBundle   = [],
          libraryExternal = []
        } = {}
      } = {}
    }
  } = environment;

  Object.keys(dependencies).forEach(
    function(library) {
      if (libraryBundle.indexOf(library) > -1) {
        rootConfig.bundle.push(library);
      } else {
        if (libraryExternal.indexOf(library) > -1) {
          rootConfig.externals[library] = {
            commonjs:   library,
            commonjs2:  library,
            amd:        library
          };
        } else {
          rootConfig.vendor.push(library);
        }
      }
    }
  );

  return rootConfig;
}
