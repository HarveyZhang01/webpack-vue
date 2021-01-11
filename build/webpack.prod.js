process.env.NODE_ENV = 'production';

const merge  = require('webpack-merge')
const common = require('./webpack.common.js')
const paths = require('../config/paths')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  cache: {
    type: 'filesystem',
    cacheDirectory: paths.dist + '/.cache'
  },
  output: {
    path: paths.dist,
    publicPath: '/',
    filename: 'js/[name].[contenthash].bundle.js',
  },
  module: {
     
  },
  plugins: [
  ],
  optimization: {
    minimize: true,
    // 根据模块名称生成简短的 hash 值
    moduleIds: 'deterministic',
    chunkIds: 'deterministic',
    minimizer: [new CssMinimizerPlugin(), "..."],
    runtimeChunk: {
      name: 'runtime',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})