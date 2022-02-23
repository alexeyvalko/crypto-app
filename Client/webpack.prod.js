const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                auto: undefined,
                localIdentName: '[local]--[hash:base64:5]'
              },
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
      new CssMinimizerPlugin({
        test: /\.css$/i,
      }),
      new MomentLocalesPlugin({
        localesToKeep: ['es-us', 'ru'],
    }),
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
});