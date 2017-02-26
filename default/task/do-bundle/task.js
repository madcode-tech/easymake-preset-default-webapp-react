module.exports = function({ environment, api }, end) {
  const { child_process, files } = api;

  child_process.spawn(
    'webpack',
    [ '--config', files.resolve(__dirname, 'webpack.config.js') ]
  ).on('close', function(code) {
    end(code == 0 ? undefined : code);
  });
}
