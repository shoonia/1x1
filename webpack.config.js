/* eslint-env node */
const buildEnv = 'production';

process.env.NODE_ENV = buildEnv;
process.env.BABEL_ENV = buildEnv;
process.env.BROWSERSLIST_ENV = buildEnv;

const { resolve } = require('path');
const { realpathSync } = require('fs');
const { emptyDirSync } = require('fs-extra');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const { homepage } = require('./package.json');

const appDirectory = realpathSync(process.cwd());
const resolveApp = (relativePath) => resolve(appDirectory, relativePath);

const paths = {
  nodeModules: resolveApp('node_modules'),
  dist: resolveApp('dist'),
  indexJs: resolveApp('src/js/index.js'),
  indexHtml: resolveApp('src/index.ejs'),
  favicon: resolveApp('src/favicon.png'),
};

emptyDirSync(paths.dist);

const isDev = buildEnv === 'development';
const isProd = buildEnv === 'production';

module.exports = {
  mode: buildEnv,
  bail: isProd,
  devtool: isDev && 'cheap-module-source-map',
  entry: paths.indexJs,
  output: {
    path: isProd ? paths.dist : undefined,
    pathinfo: isDev,
    filename: '[name].[contenthash:4].js',
    publicPath: isProd ? '/' : '',
  },
  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 2020,
          module: true,
          toplevel: true,
          parse: {
            ecma: 2018,
          },
          compress: {
            ecma: 2018,
            module: true,
            comparisons: false,
            inline: 2,
            drop_console: false,
            passes: 5,
            toplevel: true,
            pure_getters: true,
          },
          output: {
            ecma: 2018,
            comments: false,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: false,
        },
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
                removeAllButFirst: true,
              },
            },
          ],
        },
      }),
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      paths.nodeModules,
    ],
    extensions: [
      '.js',
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      {
        oneOf: [
          {
            test: /\.js$/,
            include: paths.src,
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              compact: isProd,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    loose: true,
                    browserslistEnv: buildEnv,
                    configPath: appDirectory,
                    useBuiltIns: 'entry',
                  },
                ],
              ],
            },
          },
          {
            test: /\.css$/,
            use: [
              isProd && MiniCssExtractPlugin.loader,
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  sourceMap: isDev,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  sourceMap: isDev,
                  postcssOptions: {
                    plugins: [
                      isProd && require('autoprefixer')(),
                      require('postcss-input-range')(),
                    ],
                  },
                },
              },
            ].filter(Boolean),
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'head',
      template: paths.indexHtml,
      scriptLoading: 'defer',
      favicon: paths.favicon,
      minify: isProd && {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      templateParameters: {
        homepage,
        isProd,
      },
    }),
    new MiniCssExtractPlugin(),
    new HTMLInlineCSSWebpackPlugin({
      leaveCSSFile: false,
    }),
    new webpack.DefinePlugin({
      'process.platform': JSON.stringify(process.platform),
      'process.env.NODE_ENV': JSON.stringify(buildEnv),
      'process.env.NODE_DEBUG': JSON.stringify(isDev),
      'process.env': '{}',
      'process': 'undefined',
    }),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ].filter(Boolean),
  performance: false,
};
