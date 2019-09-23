/**
 * 生产环境配置
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/09/04 10:38:14
 */
const merge = require('webpack-merge')
const baseConfig = require('./base.config')
const MiniCssExtract = require('mini-css-extract-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { default: UploadFtpWebpackPlugin } = require('@zouzhiqiang/upload-ftp-webpack-plugin')
const path = require('path')
module.exports = (env, args) => {
  console.log(env)
  const config = merge(baseConfig, {
    mode: 'production',
    output: {
      publicPath: '/templets/yiliao/',
      path: path.resolve(__dirname, '../../templets/yiliao'),
      filename: 'js/[name].[chunkhash:8].js',
      chunkFilename: 'js/[name].[chunkhash:8].js'
    },
    module: {
      rules: [{
        test: /.less$/,
        use: [
          // 'style-loader',
          MiniCssExtract.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }, {
        test: /.css$/,
        use: [
          MiniCssExtract.loader,
          // 'style-loader',
          'css-loader'
        ]
      }]
    },
    plugins: [
      new MiniCssExtract({
        filename: 'css/[name].[chunkhash:8].css',
        chunkFilename: 'css/[name].[chunkhash:8].css'
      }),
      new UglifyjsWebpackPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: true,
            // drop_console: true,
          },
        },
        sourceMap: false,
        parallel: true,
      }),
      // new CleanWebpackPlugin(),
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(__dirname, '../../templets/yiliao/static')
      }])
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            name: 'commons', // 提取出来的文件命名
            chunks: 'all', // initial表示提取入口文件的公共部分
            minChunks:2, // 表示提取公共部分最少的文件数
            minSize: 0 // 表示提取公共部分最小的大小
          },
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            priority: 10
          }
        }
      }
    }
  })
  if (env === 'production') {
    // 添加上传插件
    config.plugins.push(
      new UploadFtpWebpackPlugin({
        host: 'lianfuhk.gotoftp2.com',
        port: 21,
        user: 'lianfuhk',
        password: '1521521521',
        rootPath: '/wwwroot/templets/yiliao/'
      })
    )
  } else if (env === 'development') {
    const HtmlReloadWebpackPlugin = require('@zouzhiqiang/html-reload-webpack-plugin')
    // 添加htmlreload插件
    config.plugins.push(
      new HtmlReloadWebpackPlugin()
    )
    // 开发环境监听
    config.watch = true
  }
  return config
}