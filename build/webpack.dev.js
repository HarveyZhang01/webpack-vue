process.env.NODE_ENV = 'development';
const chalk = require('chalk');
const webpack = require('webpack')
const merge  = require('webpack-merge')
const common = require('./webpack.common.js')
const paths = require('../config/paths')

// dev 配置
module.exports = merge(common, {
  mode: process.env.NODE_ENV,
  devtool: 'inline-source-map',
  cache: {
    type: 'memory'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    https: true
  },
  plugins: [
    // 热更新
    new webpack.HotModuleReplacementPlugin(),
  ],
})