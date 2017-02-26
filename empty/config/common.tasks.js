module.exports = function(rootConfig = {}, api) {
  return Object.assign(rootConfig, {
    /*
    'someTask': null,
    'name1': null => { module: 'name1' },
    'name2': {
      module: 'FULL path to name2 module: use path.resolve here',
      dependencies: ['clean', 'name1'],
      default: true
    },
    'name3': {
      dependencies: ['name1', 'name2'],
      empty: true
    }
    */
  });
};
