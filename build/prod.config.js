/**
 * 生产环境配置
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/09/04 10:38:14
 */
const merge = require('webpack-merge')
const baseConfig = require('./base.config')
const MiniCssExtract = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const path = require('path')
module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../../templets/yiliao'),
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js'
  },
  module: {
    rules: [{
      test: /.less$/,
      use: [
        MiniCssExtract.loader,
        'css-loader',
        'postcss-loader',
        'less-loader'
      ]
    }, {
      test: /.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  plugins: [
    new MiniCssExtract({
      filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[name].[chunkhash:8].css'
    }),
    new CleanWebpackPlugin()
  ]
})