'use strict'

const common = require('./common')
// const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')
const HtmlPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = validate({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    common.entry
  ],
 
  output: Object.assign({}, common.output, {
    publicPath: ''
  }),

  plugins: [
    // new DashboardPlugin(),
    // new ExtractTextPlugin('[name]-[hash].css'),
    
    new webpack.HotModuleReplacementPlugin(),

    new HtmlPlugin(common.htmlPluginConfig('template-dev.html'))
  ],

  module: {
//    preLoaders: [ common.preLoaders],

    loaders: [common.jsLoader, common.cssLoader]
  },

  resolve: common.resolve

})
