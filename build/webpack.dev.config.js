var webpack = require('webpack')
var config = require('./webpack.base.config')
var HtmlWebpackPlugin = require('html-webpack-plugin')

config.devtool = 'eval-source-map'

config.plugins = (config.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        filename: 'public/index.html',
        template: 'index.html',
        inject: true
    })
])

module.exports = config
