const { promises } = require('fs');
const webpack = require('webpack');
const posthtml = require('posthtml');
const minifyClassnames = require('posthtml-minify-classnames');

const paths = require('./paths');
const webpackConfig = require('../webpack.config');

const { readFile, writeFile } = promises;

const build = (config) => {
  return new Promise((resolve, reject) => {
    webpack(config, (error, stats) => {
      if (error) reject(error);
      else resolve(stats);
    });
  });
};

process.env.BABEL_ENV = process.env.BROWSERSLIST_ENV = process.env.NODE_ENV = 'production';

(async () => {
  console.log('\nProduction build...\n');

  await build(webpackConfig(process.env));

  const minify = minifyClassnames({ filter: /^#/ });
  const text = await readFile(paths.distHtml, 'utf8');
  const { html } = await posthtml(minify).process(text);

  await writeFile(paths.distHtml, html);

  console.log('\nDone!\n');
  process.exit();
})();
