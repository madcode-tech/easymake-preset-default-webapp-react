const { throwIf } = require('madcode-utils-checkers');

module.exports = function ({ environment, api }) {
  const { context, paths } = environment;
  const { files, config} = api;

  const folders = config.load('task.clean');

  throwIf(
    !Array.isArray(folders),
    'Clean config must be an array of paths.'
  );

  files
    .resolveAll(context, folders)
    .forEach(files.folderClean);
};
