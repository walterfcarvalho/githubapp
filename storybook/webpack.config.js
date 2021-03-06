'use strict'

const path = require('path')
const common = require('../webpack/common')
const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config')

module.exports = function (config, env) {
  const newConfig = webpackConfig(config, env)

  newConfig.module.preLoaders = ( newConfig.module.preLoaders || [])
  .concat(common.standardPreLoaders || [] )

  newConfig.resolve = common.resolve
  

  return newConfig
}
