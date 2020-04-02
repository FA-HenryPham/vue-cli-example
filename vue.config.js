// vue.config.js
const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
    config.resolve.alias.set('@components', path.resolve(__dirname, 'src/components'));
    config.resolve.alias.set('@common', path.resolve(__dirname, 'src/common'));
    config.resolve.alias.set('@store', path.resolve(__dirname, 'src/store'));
    config.resolve.alias.set('@router', path.resolve(__dirname, 'src/router'));
  },
  devServer: {
    disableHostCheck: true,
  }
}
