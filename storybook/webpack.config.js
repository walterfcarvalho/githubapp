'use strict'

const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config')

module.exports = function (config, env) {
  const newConfig = webpackConfig(config, env)

  //   newConfig.module.preLoaders = [{
  //     test:/\.js$/,
  //     exclude: /node_modules/,
  //     include: /src/,
  //     loader: 'standard'
  // }]

  return newConfig
}
