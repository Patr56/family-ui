const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = require('./webpack.config.js');

module.exports = merge(config, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new BundleAnalyzerPlugin({ openAnalyzer: false }),
    ]
})
