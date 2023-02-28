const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin");
const loader = require('sass-loader');

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const filename = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`


module.exports = {
    // context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core')
        }
    },
    devServer: {
        port: 3000,
        hot: isDev,
        // static: {
        //     directory: path.join(__dirname, 'public'),
        // },
    },
    plugins: [
        // Automatically remove all unused webpack assets on rebuild
        // default: true
        // new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: 'public/index.html',
            minify: {
                removeComments: isProd,
                collapseWhitespace: isProd
            }
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, ''),
                    to: path.resolve(__dirname, 'dist')
                },

            ],
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // "style-loader",
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //     hmr: isDev,
                        // }
                    },
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    }

                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'eslint-loader',
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
}