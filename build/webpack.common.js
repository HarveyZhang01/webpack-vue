// webpack.common.js
// 引入自定义的 path 路径
const paths = require('../config/paths')
// 引入 utils 
const utils = require('../config/utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
  // watch: devMode,
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
          to: 'public',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    // 线上环境压缩 CSS
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css'
    }),
    // 版权信息插件
    new webpack.BannerPlugin('HarveyZhang'),
    new webpack.ProvidePlugin({
      V: 'vue',
      vue: 'vue'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ]
      },
      // scss loader
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      // 对所有.vue文件使用vue-loader进行编译
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: [
              // lang 属性对应的名称
              'vue-style-loader', // 首先给 vue 的样式 loader 过滤一遍
              'css-loader', // css-loader ，把 css 转 js
              'scss-loader' // 用 scss 编译
            ]
          }
        }
      },
      // 图片处理 loader
      {
        test: /\.(gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name]-[hash:5][hash][ext][query]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4kb
          }
        }
      },
      {
        test: /\.(mp4|mkv|avi|mp3|ogg|wav|flv|webm|mov|)$/,
        type: 'asset',
        generator: {
          filename: 'assets/media/[name]-[hash:5][ext][query]'
        },
      },

      // 字体处理 loader
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      },
      // 排除 node_modules 文件夹
      { test: /\.(js|ts)$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
      { test: /\.(htm|html)$/, loader: 'html-withimg-loader' },

    ]
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