module.exports = function ({ environment, api }) {
  const { paths: { folder: { bundle, 'static': static_ } } } = environment;
  const { config, files } = api;

  files.folderCopyContents(static_, bundle, { changes: config.load('task.static-replaces') });
};
