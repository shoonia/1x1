import autoprefixer from 'autoprefixer';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import CssMqpackerPlugin from 'css-mqpacker-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HTMLInlineCSSWebpackPlugin from 'html-inline-css-webpack-plugin';
import HTMLInlineScriptWebpackPlugin from 'html-inline-script-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import createLocalIdent from 'mini-css-class-name/css-loader';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { resolve } from 'node:path';
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';

import pkg from './package.json' with { type: 'json' };

const appDirectory = process.cwd();
const resolveApp = (relativePath) => resolve(appDirectory, relativePath);
const nodeModulesDir = resolveApp('node_modules');
const srcDir = resolveApp('src');

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
      module: true,
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
          minify: TerserPlugin.swcMinify,
          extractComments: false,
          terserOptions: {
            ecma: 2024,
            module: true,
            toplevel: true,
            compress: {
              ecma: 2024,
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
        nodeModulesDir,
      ],
      extensions: [
        '.mjs',
        '.cjs',
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
              test: /\.(js|mjs|cjs|jsx|ts|tsx)$/,
              use: {
                loader: 'swc-loader',
                options: {
                  sync: true,
                  minify: isProd,
                  jsc: {
                    target: 'es2024',
                    parser: {
                      syntax: 'typescript',
                      tsx: true,
                    },
                    transform: {
                      react: {
                        runtime: 'preserve',
                      },
                    },
                    experimental: {
                      plugins: [
                        ['swc-jsx-dom-runtime', {}],
                        ['swc-plugin-evaluate-polyfills', { browser: true }],
                      ],
                    },
                  },
                },
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
                    modules: {
                      namedExport: false,
                      exportLocalsConvention: 'as-is',
                      ...(isDev
                        ? { localIdentName: '[file]--[local]' }
                        : { getLocalIdent: createLocalIdent() }),
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
        inject: 'body',
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
          pkg,
          isProd,
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
      isProd && new HTMLInlineScriptWebpackPlugin({
        scriptMatchPattern: [/\.js$/],
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
      static: srcDir,
      port: 3000,
    },
  };
};

