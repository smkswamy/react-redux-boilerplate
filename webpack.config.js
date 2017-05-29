const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/client/index.html',
  filename: 'index.html',
  inject: 'body'
});
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction =
  process.env.WEBPACK_ENV === 'production' || process.env.NODE_ENV === 'prod';
const isLocal = isProduction === false;
const BUILD_DIR = path.resolve(__dirname, 'dist/client');
const APP_DIR = path.resolve(__dirname, 'src/client');

const config = {
    devtool: 'cheap-module-source-map',
    entry: [
        'babel-polyfill',
        APP_DIR + '/index.js',
    ],
    output: {
        path: BUILD_DIR,
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/ },
            { test: /\.jsx$/, loaders: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/ },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                loader: isLocal
                ? 'style-loader!css-loader!sass-loader?outputStyle=expanded?sourceMap'
                : ExtractTextPlugin.extract(
                    'style',
                    'css?sourceMap!postcss-loader!sass?outputStyle=expanded?sourceMap'
                    )
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig],
    devServer: {
        historyApiFallback: true,
    }
};

module.exports = config;
