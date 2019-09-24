/**
 * 主配置文件
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/09/04 09:54:34
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const fs = require('fs')
/**
 * 获取模版入口
 */
function mapEntrys(dir, baseName) {
  // 获取文件目录
  const files = fs.readdirSync(dir)
  let tempEntrys = {}
  for (const file of files) {
    // 文件地址
    const filePath = path.join(dir, file)
    // 文件信息
    const stat = fs.statSync(filePath)
    // 判断是否为文件夹
    if (stat.isDirectory()) {
      let prefix = path.basename(filePath)
      if (baseName) {
        prefix = `${baseName}_${prefix}`
      }
      // 递归
      tempEntrys = Object.assign(tempEntrys, mapEntrys(filePath, prefix))
      // console.log(tempEntrys)
    } else {
      let suffix = file.slice(0, file.lastIndexOf('.'))
      if (baseName) {
        suffix = `${suffix}_${baseName}`
      }
      tempEntrys[suffix] = path.join(path.dirname(__dirname), filePath)
    }
  }
  return tempEntrys
}
// 获取入口
const entrys = mapEntrys('./src/template') || {}
// 移动端入口
const mTempEntrys = mapEntrys('./src/mobile')
const mEntrys = {}
Object.keys(mTempEntrys).map(key => {
  mEntrys[key + '_m'] = mTempEntrys[key]
})
const config =  {
  entry: Object.assign({}, entrys, mEntrys),
  module: {
    rules: [{
      test: /.ts$/,
      include: /src/,
      use: [
        {
          loader: '@zouzhiqiang/prevent-loader',
          options: {
            hosts: [
              'localhost',
              'su12366.com'
            ]
          }
        },
        'ts-loader'
      ]
    }, {
      test: /.ejs$/,
      include: /src/,
      use: [
        '@zouzhiqiang/ejs-loader'
      ]
    }, {
      test: /\.(png|jp?g|gif|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'images/[name].[hash:8].[ext]',
          },
        },
      ],
    }]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, '../src')
    }
  },
  plugins: [],
  stats: {
    all: false,
    builtAt: true,
    errors: true,
    env: true
  }
}
// 生成pc端html
config.plugins = config.plugins.concat(Object.keys(entrys).map((key) => (
  new HtmlWebpackPlugin({
    filename: `${key}.htm`,
    template: entrys[key].replace(path.extname(entrys[key]), '.ejs'),
    chunks: [key, 'commons', 'vendor']
  })
)))
// 生成移动端html
config.plugins = config.plugins.concat(Object.keys(mEntrys).map((key) => (
  new HtmlWebpackPlugin({
    filename: `${key}.htm`,
    template: mEntrys[key].replace(path.extname(mEntrys[key]), '.ejs'),
    chunks: [key]
  })
)))
module.exports = config