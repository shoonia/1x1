const webpack = require('webpack');
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

  console.log('Done!\n');
  process.exit();
})();
