module.exports = function(rootConfig = {}, api) {
  //const { paths: { fileName: { bundle } } } = environment;

  return Object.assign(rootConfig, {
/*
  'index.html': function(data) {
    return data.replace('%BUNDLE%', bundle + '.js');
  },
  '*': function(data, relativePath) {
    return (relativePath == 'index.html') ? data.replace('%BUNDLE%', bundle + '.js') : data;
  }
*/
  });
};
