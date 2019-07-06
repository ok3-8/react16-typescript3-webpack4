'use strict'
const merge = require('webpack-merge');

const path = require('path');
const webpack = require('webpack');

const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    contentBase: false,
    historyApiFallback: true,
    compress: true,
    inline: true,
    hot: true,
    host: '127.0.0.1',
    port: 9527
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    nodeEnv: 'development',
  }
});
