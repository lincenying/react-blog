var webpack = require('webpack')

var plugins = [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
]

module.exports = {
    output: {
        path: './dist/', // final build will be output in the dist folder
        publicPath: '/dist/', // when in dev mode, the build will be in /dist/app.js
        filename: '[name].js', // the file name
        library: 'App', // the global name in a non commonjs env (ie. the browser)
        libraryTarget: 'umd' // build as UMD
    },
    devServer: {
        contentBase: './public/',
        historyApiFallback: true,
    },
    entry: {
        vendor: ['react', 'react-dom', 'react-router', 'react-redux', 'redux'],
        app: ['./src/main.jsx'] // the main entry point for the build
    },
    resolve: {
        extensions: ['', '.js', '.jsx', 'es6'] // all these files will be considered as modules
    },
    module: {
        loaders: [{
            // add a loader to transform ES2015 code into ES5 code with babel
            test: /\.js|\.jsx|\.es6$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: plugins
}
