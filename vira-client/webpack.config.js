const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    }],
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
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};