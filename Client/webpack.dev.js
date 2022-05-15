const ESLintPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.(css)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                auto: undefined,
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              },
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] }),
    new ReactRefreshWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],

  devServer: {
    open: true,
    compress: true,
    hot:true,
    port: 4000,
    historyApiFallback: true,
  },
});