const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = require('./webpack.config.js');

module.exports = merge(config, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }),
    ]
})
