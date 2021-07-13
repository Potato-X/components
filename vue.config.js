const BASE_URL = process.env.NODE_ENV == 'production' ? '/iview-admin/' : '/'
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
    .set('_c', resolve('src/components'))
  },
  //打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.1.112:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/api' : ''}
      },
    }
  }
}
