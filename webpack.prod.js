const { merge } = require('webpack-merge');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = require('./webpack.config.js');

module.exports = merge(config, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }),
    ]
})
