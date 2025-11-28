/*********************************************************************
 *                                                                   *
 * SCRIPT:      webpack.config.ts                                    *
 *                                                                   *
 * AUTHOR:      Nova Admin <admin@nova.eco>                          *
 *                                                                   *
 * DATE:        28th November 2025                                   *
 *                                                                   *
 * PURPOSE:     Webpack configuration for nova-web.                  *
 *                                                                   *
 *********************************************************************/

import 'dotenv/config';
import path from 'path';
import Dotenv from 'dotenv-webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const dirNameOutput = 'dist';
const dirNameInput = 'src';
const fileNameInput = 'index.tsx';
const fileNameOutput = 'index.js';
const notFoundError = 'NOT_FOUND';
const serverPortEnvVar = 'NOVA_WEB_PORT';

const dirPathRoot = path.resolve(__dirname);
const dirPathInput = path.resolve(dirPathRoot, dirNameInput);
const dirPathOutput = path.resolve(dirPathRoot, dirNameOutput);
const filePathInput = path.resolve(dirPathInput, fileNameInput);

if (typeof process.env[serverPortEnvVar] === 'undefined') {
  throw new Error(`${serverPortEnvVar} (.env): ${notFoundError}`);
}

const serverPort = process.env[serverPortEnvVar];

const config = {
  devServer: {
    static: dirNameOutput,
    port: serverPort,
    hot: true,
  },
  devtool: 'inline-source-map',
  entry: filePathInput,
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          { loader: 'postcss-loader' },
        ],
      },
    ],
  },
  output: {
    filename: fileNameOutput,
    path: dirPathOutput,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }],
    }),
    new Dotenv(),
  ],
  resolve: {
    alias: {
      '@app': dirPathInput,
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
};

export default config;
