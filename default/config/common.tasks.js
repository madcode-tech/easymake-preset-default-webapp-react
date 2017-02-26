module.exports = function(rootConfig = {}, { environment, config }) {
  return Object.assign(rootConfig, {
    'create-folders': null,
    'clean':          null,
    'static':         null,
    'do-bundle':      null,
    'do-test-units':  null,

    'test-units': {
      dependencies: ['clean', 'static', 'do-test-units'],
      empty: true
    },
    'bundle': {
      dependencies: ['clean', 'static', 'do-bundle'],
      empty: true,
      default: true
    }
  });
};
