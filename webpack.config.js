/* eslint-env node */
import { resolve } from 'node:path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import createLocalIdent from 'mini-css-class-name/css-loader';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HTMLInlineCSSWebpackPlugin from 'html-inline-css-webpack-plugin';
import CssMqpackerPlugin from 'css-mqpacker-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import autoprefixer from 'autoprefixer';

import pkg from './package.json' with { type: 'json' };
import colors from './src/utils/colors.json' with { type: 'json' };

const appDirectory = process.cwd();
const resolveApp = (relativePath) => resolve(appDirectory, relativePath);

/**
 * @param {NodeJS.ProcessEnv} env
 * @returns {webpack.Configuration}
 */
export default ({ NODE_ENV }) => {
  const isDev = NODE_ENV === 'development';
  const isProd = NODE_ENV === 'production';

  return {
    mode: NODE_ENV,
    cache: isDev,
    bail: isProd,
    devtool: isDev && 'cheap-module-source-map',
    entry: resolveApp('src/index.tsx'),
    output: {
      iife: false,
      scriptType: 'module',
      path: isProd ? resolveApp('dist') : undefined,
      pathinfo: isDev,
      filename: '[name].[contenthash:4].js',
      publicPath: '',
      clean: isProd,
      chunkLoadingGlobal: 'e',
    },
    optimization: {
      minimize: isProd,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            ecma: 2020,
            module: true,
            toplevel: true,
            compress: {
              ecma: 2020,
              module: true,
              comparisons: false,
              inline: 2,
              drop_console: false,
              passes: 3,
              toplevel: true,
              pure_getters: true,
              unsafe: true,
              unsafe_arrows: true,
              unsafe_undefined: true,
              unsafe_math: true,
              unsafe_symbols: true,
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
        resolveApp('node_modules'),
      ],
      extensions: [
        '.js',
        '.ts',
        '.tsx',
      ],
    },
    module: {
      parser: {
        javascript: {
          strictExportPresence: true,
        },
      },
      rules: [
        {
          oneOf: [
            {
              test: /\.tsx?$/,
              include: resolveApp('src'),
              loader: 'babel-loader',
              options: {
                cacheDirectory: isDev,
                cacheCompression: false,
                comments: isDev,
                compact: isProd,
                minified: isProd,
                presets: [
                  [
                    '@babel/preset-typescript',
                    {
                      optimizeConstEnums: true,
                    },
                  ],
                  'jsx-dom-runtime/babel-preset',
                ],
              },
            },
            {
              test: /\.css$/,
              use: [
                isDev
                  ? 'style-loader'
                  : MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    sourceMap: isDev,
                    modules: isDev ? {
                      localIdentName: '[file]--[local]',
                    } : {
                      getLocalIdent: createLocalIdent(),
                    },
                  },
                },
                isProd && {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: isDev,
                    postcssOptions: {
                      plugins: [
                        autoprefixer,
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
        template: resolveApp('src/index.ejs'),
        scriptLoading: 'module',
        favicon: resolveApp('src/favicon.png'),
        minify: isProd && {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
        templateParameters: {
          homepage: pkg.homepage,
          isProd,
          colors,
        },
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      }),
      new ForkTsCheckerWebpackPlugin({
        async: isDev,
        typescript: {
          configFile: resolveApp('tsconfig.json'),
        },
      }),
      isProd && new MiniCssExtractPlugin(),
      isProd && new HTMLInlineCSSWebpackPlugin.default({
        styleTagFactory: ({ style }) => `<style>${style}</style>`,
      }),
    ].filter(Boolean),
    node: false,
    performance: false,
    experiments: {
      backCompat: false,
      outputModule: true,
    },
    devServer: {
      hot: false,
      compress: false,
      static: resolveApp('src'),
      port: 3000,
    },
  };
};
