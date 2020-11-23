const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                loader: 'file-loader',
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            // Inline files smaller than 20 kB
                            limit: 20 * 1024,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|ico)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // Inline files smaller than 20 kB
                            limit: 20 * 1024,
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin,
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules',
        ],
    },

    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, 'build'),
    },

    watchOptions: {
        ignored: 'node_modules',
    },
};