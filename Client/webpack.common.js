const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.tsx'],
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].bundle.js',
    clean: true,
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new Dotenv({
      path: './.env',
      safe: true,
    }),
    new CopyPlugin({
      patterns: [{ from: './public/', to: '.' },]
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
