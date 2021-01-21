const { resolve } = require('path');
const { realpathSync } = require('fs');

const appDirectory = realpathSync(process.cwd());
const resolveApp = (relativePath) => resolve(appDirectory, relativePath);

module.exports = {
  appDirectory,
  nodeModules: resolveApp('node_modules'),
  indexJs: resolveApp('src/js/index.js'),
  indexHtml: resolveApp('src/index.ejs'),
  favicon: resolveApp('src/favicon.png'),
  dist: resolveApp('dist'),
  distHtml: resolveApp('dist/index.html'),
};
