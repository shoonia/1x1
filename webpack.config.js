const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;

const { homepage } = require('./package.json');
const paths = require('./scripts/paths');

module.exports = ({ NODE_ENV: nodeEnv }) => {
  const isDev = nodeEnv === 'development';
  const isProd = nodeEnv === 'production';

  return {
    mode: nodeEnv,
    bail: isProd,
    devtool: isDev && 'cheap-module-source-map',
    entry: paths.indexJs,
    output: {
      path: isProd ? paths.dist : undefined,
      pathinfo: isDev,
      filename: '[name].[contenthash:4].js',
      publicPath: isProd ? homepage : '',
      clean: isProd,
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
                      browserslistEnv: nodeEnv,
                      configPath: paths.appDirectory,
                      useBuiltIns: 'entry',
                    },
                  ],
                ],
              },
            },
            {
              test: /\.css$/,
              use: [
                isDev && require.resolve('style-loader'),
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
                        isProd && require('autoprefixer'),
                        require('postcss-input-range'),
                      ].filter(Boolean),
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
      new webpack.DefinePlugin({
        'process.platform': JSON.stringify(process.platform),
        'process.env.NODE_ENV': JSON.stringify(nodeEnv),
        'process.env': '{}',
        'process': 'undefined',
      }),
      isProd && new MiniCssExtractPlugin(),
      isProd && new HTMLInlineCSSWebpackPlugin(),
      isDev && new webpack.HotModuleReplacementPlugin(),
    ].filter(Boolean),
    performance: false,
    devServer: {
      contentBase: paths.dist,
      compress: true,
      port: 3000,
    },
  };
};
