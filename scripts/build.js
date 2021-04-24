const { promises } = require('fs');
const webpack = require('webpack');
const posthtml = require('posthtml');
const minifyClassnames = require('posthtml-minify-classnames');

const paths = require('./paths');
const webpackConfig = require('../webpack.config');

const { readFile, writeFile } = promises;

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

  const text = await readFile(paths.distHtml, 'utf8');
  const { html } = await posthtml(minify).process(text);

  await writeFile(paths.distHtml, html);

  console.log('Done!\n');
  process.exit();
})();
