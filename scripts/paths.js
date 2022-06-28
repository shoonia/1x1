const { resolve } = require('node:path');
const { realpathSync } = require('node:fs');

const appDirectory = realpathSync(process.cwd());
const resolveApp = (relativePath) => resolve(appDirectory, relativePath);

exports.appPaths = {
  appDirectory,
  nodeModules: resolveApp('node_modules'),
  indexJs: resolveApp('src/js/index.js'),
  indexHtml: resolveApp('src/index.ejs'),
  favicon: resolveApp('src/favicon.png'),
  dist: resolveApp('dist'),
  appSrc: resolveApp('src'),
  distHtml: resolveApp('dist/index.html'),
};
