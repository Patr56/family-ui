const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    devServer: {
        contentBase: './dist',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                }, {
                    loader: 'less-loader', // compiles Less to CSS
                    options: {
                        lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
                            //  modifyVars: {
                            //    'primary-color': '#1DA57A',
                            //    'link-color': '#1DA57A',
                            //    'border-radius-base': '2px',
                            //  },
                            javascriptEnabled: true,
                        },
                    },
                }],
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all'
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new HtmlWebpackPlugin({
            title: 'Family Tree',
            template: 'template/index.html'
        })],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js'
    },
};
