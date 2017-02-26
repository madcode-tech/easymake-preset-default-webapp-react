module.exports = function({ environment, api }, end) {
  const { child_process, files } = api;

  child_process.spawn(
    'karma',
    [ 'start', files.resolve(__dirname, 'karma.config.js') ]
  ).on('close', function(code) {
    end(code == 0 ? undefined : code);
  });
}
