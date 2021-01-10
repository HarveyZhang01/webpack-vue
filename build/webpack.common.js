// webpack.common.js
// 引入自定义的 path 路径
const paths = require('../config/paths')
// 引入 utils 
const utils = require('../config/utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const webpack = require('webpack')

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
  entry: [paths.src + '/main.js'],
  // 出口文件
  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  // 插件 plugins
  plugins: [
    // html 模板插件
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      favicon: paths.public + '/favicon.ico',
      template: paths.src + '/index.html', // template file
      filename: 'index.html', // output file
    }),
    // 清除 dist 文件 插件
    new CleanWebpackPlugin(),
    // 使用 vue-loader
    new VueLoaderPlugin(),
    // 文件拷贝插件
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    // 版权信息插件
    new webpack.BannerPlugin('HarveyZhang'),
    new webpack.ProvidePlugin({
      V: 'vue',
      vue: 'vue'
    })
  ],
  module: {
    rules: utils.styleLoaders({
      sourceMap: devMode,
      usePostCSS: true
    }).concat([
       // 对所有.vue文件使用vue-loader进行编译
      { test: /\.vue$/, loader: "vue-loader"},
      // 图片处理 loader
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // 字体处理 loader
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
      // 排除 node_modules 文件夹
      { test: /\.(js|ts)$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
      { test: /\.(htm|html)$/, loader: 'html-withimg-loader' },

    ])
  },
   // 模块resolve的规则
   resolve: {
    // 取别名，方便引用模块，例如有了别名之后
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": paths.src,
      // 也可以自己添加一些经常引用的路径
      "~": paths.assets,
      "_c": paths.src + '/components',
      "@images": paths.assets + '/images',
      "@css": paths.assets + '/css',
      '@views': paths.src + '/views'
    },
  },
}