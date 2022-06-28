const { readFile, writeFile } = require('node:fs/promises');
const webpack = require('webpack');
const posthtml = require('posthtml');
const minifyClassnames = require('posthtml-minify-classnames');

const { appPaths } = require('./paths');
const webpackConfig = require('../webpack.config');

const nodeEnv = 'production';

process.env.BABEL_ENV = nodeEnv;
process.env.BROWSERSLIST_ENV = nodeEnv;
process.env.NODE_ENV = nodeEnv;

(async () => {
  console.log('Production build...\n');

  await new Promise((resolve, reject) => {
    const config = webpackConfig(process.env);

    webpack(config, (error, stats) => {
      if (error) reject(error);
      else resolve(stats);
    });
  });

  const minify = minifyClassnames({ filter: /^#/ });

  const text = await readFile(appPaths.distHtml, 'utf8');
  const { html } = await posthtml(minify).process(text);

  await writeFile(appPaths.distHtml, html);

  console.log('Done!\n');
  process.exit();
})();
