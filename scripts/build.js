const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config.pro')

webpack(webpackConfig, (err, status) => {
  if (err) {
    console.log(err)
  }
})
