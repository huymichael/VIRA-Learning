const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (webpackEnv, argv) => {
    const isEnvDevelopment = webpackEnv.development || false;
    console.log(argv);

    return {
        mode: isEnvDevelopment ? 'development' : 'production',
        devtool: isEnvDevelopment ? 'cheap-module-source-map' : 'source-map',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: isEnvDevelopment ? 'js/[name].js' : 'js/[name].[contenthash].js',
            chunkFilename: isEnvDevelopment ? 'js/[name].chunk.js' : 'js/[name].[contenthash].chunk.js',
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
                        {loader: MiniCssExtractPlugin.loader},
                        {loader: 'css-loader'},
                        {loader: 'postcss-loader'},
                        {loader: 'sass-loader'}],
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'svg-url-loader',
                            options: {
                                // Inline files smaller than 20 kB
                                limit: 20 * 1024,
                                name: isEnvDevelopment ? '[name].[ext]' : '[name].[contenthash:8].[ext]',
                                outputPath: 'assets/images/',
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|ico|jpg|jpeg|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: isEnvDevelopment ? '[name].[ext]' : '[name].[contenthash:8].[ext]',
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
                                name: isEnvDevelopment ? '[name].[ext]' : '[name].[contenthash:8].[ext]',
                                outputPath: 'assets/fonts/',
                            },
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
            hot: true,
            port: 3000,
            historyApiFallback: true,
        },
        target: 'web',
        plugins: [
            new CleanWebpackPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new MiniCssExtractPlugin({
                filename: isEnvDevelopment ? '[name].css' : '[name].[contenthash:8].css',
                chunkFilename: '',
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: './index.html',
                favicon: './public/favicon.ico',
            }),
        ],
        watchOptions: {
            ignored: [path.resolve(__dirname, 'node_modules')],
        },
    };
};
