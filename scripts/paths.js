const { resolve } = require('node:path');
const { realpathSync } = require('node:fs');

const appDirectory = realpathSync(process.cwd());
const resolveApp = (relativePath) => resolve(appDirectory, relativePath);

exports.appPaths = {
  appDirectory,
  nodeModules: resolveApp('node_modules'),
  index: resolveApp('src/index.tsx'),
  indexHtml: resolveApp('src/index.ejs'),
  favicon: resolveApp('src/favicon.png'),
  dist: resolveApp('dist'),
  appSrc: resolveApp('src'),
  distHtml: resolveApp('dist/index.html'),
  colorPicker: resolveApp('node_modules/vanilla-colorful/hex-alpha-color-picker.js'),
};
