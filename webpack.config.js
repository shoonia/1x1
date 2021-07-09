const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const { homepage } = require('./package.json');
const colors = require('./src/js/colorConstants.json');
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
              passes: 3,
              toplevel: true,
              pure_getters: true,
            },
            output: {
              ecma: 2018,
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
    performance: false,
    devServer: {
      hot: true,
      compress: true,
      static: paths.appSrc,
      port: 3000,
    },
  };
};
