import 'dotenv/config';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';

const dirNameOutput = 'dist';
const dirNameInput = 'src';
const fileNameInput = 'index.tsx';
const fileNameOutput = 'index.js';
const notFoundError = 'NOT_FOUND';
const serverPortEnvVar = 'NOVA_FE_WEB_SERVER_PORT';

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
	  new Dotenv()
  ],
  resolve: {
    alias: {
      '@app': dirPathInput,
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
};

export default config;
