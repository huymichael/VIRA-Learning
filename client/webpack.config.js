const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js',
        publicPath: './',
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
                // Preprocess our own .css files
                // This is the place to add your own loaders (e.g. sass/less etc.)
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    // 'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,

                    },
                    {loader: 'css-loader', options: {sourceMap: true, importLoaders: 1}},
                    {loader: 'postcss-loader', options: {sourceMap: true}},
                    {loader: 'sass-loader', options: {sourceMap: true}},],
            },
            {
                test: /\.svg$/,
                // type: 'asset/resource',
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            // Inline files smaller than 20 kB
                            limit: 20 * 1024,
                            name: '[name].[ext]',
                            outputPath: 'assets/images/',
                        },
                    },
                ],
            },
            {
                test: /\.(png|ico|jpg|jpeg|gif)$/i,
                // type: 'asset/resource',
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images/',
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts/'
                        }
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
    },
    devServer: {
        contentBase: './build',
        open: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
    ],

};