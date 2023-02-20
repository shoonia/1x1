const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const CssMqpackerPlugin = require('css-mqpacker-webpack-plugin');

const { homepage } = require('./package.json');
const colors = require('./src/js/colorConstants.json');
const { appPaths } = require('./scripts/paths');

module.exports = ({ NODE_ENV: nodeEnv }) => {
  const isDev = nodeEnv === 'development';
  const isProd = nodeEnv === 'production';

  return {
    mode: nodeEnv,
    bail: isProd,
    devtool: isDev && 'cheap-module-source-map',
    entry: appPaths.indexJs,
    output: {
      path: isProd ? appPaths.dist : undefined,
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
              ecma: 2020,
            },
            compress: {
              ecma: 2020,
              module: true,
              comparisons: false,
              inline: 2,
              drop_console: false,
              passes: 3,
              toplevel: true,
              pure_getters: true,
            },
            output: {
              ecma: 2020,
              comments: false,
            },
          },
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
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
        new CssMqpackerPlugin(),
      ],
    },
    resolve: {
      modules: [
        'node_modules',
        appPaths.nodeModules,
      ],
      extensions: [
        '.js',
      ],
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          oneOf: [
            // {
            //   test: /\.js$/,
            //   include: appPaths.src,
            //   loader: 'babel-loader',
            //   options: {
            //     cacheDirectory: true,
            //     cacheCompression: false,
            //     compact: isProd,
            //     presets: [
            //       [
            //         '@babel/preset-env',
            //         {
            //           loose: true,
            //           browserslistEnv: nodeEnv,
            //           configPath: appPaths.appDirectory,
            //           useBuiltIns: 'entry',
            //         },
            //       ],
            //     ],
            //   },
            // },
            {
              test: /\.css$/,
              use: [
                isDev && 'style-loader',
                isProd && MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    sourceMap: isDev,
                  },
                },
                {
                  loader: 'postcss-loader',
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
        template: appPaths.indexHtml,
        scriptLoading: 'defer',
        favicon: appPaths.favicon,
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
        'process.env': '({})',
        'process': 'undefined',
      }),
      isProd && new MiniCssExtractPlugin(),
      isProd && new HTMLInlineCSSWebpackPlugin(),
      isProd && new SitemapPlugin({
        base: homepage,
        options: {
          filename: 'sitemap.xml',
        },
        paths: (() => {
          const lastmod = new Date().toISOString();
          const link = new URL(homepage);

          const items = [
            {
              path: homepage,
              lastmod,
              priority: 1.0,
              changefreq: 'monthly',
            },
          ];

          for (const key in colors) {
            link.hash = key;

            items.push({
              path: link.href,
              lastmod,
              priority: 0.8,
              changefreq: 'monthly',
            });
          }

          return items;
        })(),
      }),
      isDev && new webpack.HotModuleReplacementPlugin(),
    ].filter(Boolean),
    node: false,
    performance: false,
    experiments: {
      backCompat: false,
    },
    devServer: {
      hot: true,
      compress: true,
      static: appPaths.appSrc,
      port: 3000,
    },
  };
};
