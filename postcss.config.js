/* eslint-env node */

const isProd = (process.env.NODE_ENV === 'production');

module.exports = {
  plugins: [
    isProd && require('autoprefixer')(),
    require('postcss-input-range')(),
    isProd && require('cssnano')(),
  ]
    .filter(Boolean),
};
