/**
 * 开发配置
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/09/04 09:39:38
 */
const merge = require('webpack-merge')
const baseConfig = require('./base.config')
const path = require('path')
const HtmlReloadWebpackPlugin = require('@zouzhiqiang/html-reload-webpack-plugin')
module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    // publicPath: '/sss'
    // path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [{
      test: /.less$/,
      use: [
        'style-loader',
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
    new HtmlReloadWebpackPlugin()
  ],
  devtool: 'eval',
  devServer: {
    port: '8888',
    host: '0.0.0.0',
    // open: true,
    hot: true,
    inline: true,
    overlay: true
  }
})