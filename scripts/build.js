const { promises } = require('fs');
const { emptyDir } = require('fs-extra');
const webpack = require('webpack');
const posthtml = require('posthtml');
const minifyClassnames = require('posthtml-minify-classnames');

const paths = require('./paths');
const config = require('../webpack.config');

const { readFile, writeFile } = promises;

const build = () => {
  return new Promise((resolve, reject) => {
    webpack(config).run((error, stats) => {
      if (error) reject(error);
      else resolve(stats);
    });
  });
};

(async () => {
  console.log('\nProduction build...\n');

  await emptyDir(paths.dist);
  await build();

  const minify = minifyClassnames({ filter: /^#/ });
  const text = await readFile(paths.distHtml, { encoding: 'utf8' });
  const { html } = await posthtml().use(minify).process(text);

  await writeFile(paths.distHtml, html);

  console.log('\nDone!\n');
  process.exit();
})();
