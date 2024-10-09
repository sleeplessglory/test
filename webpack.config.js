import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    entry: './src/index.jsx',
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js',
        clean: true, //clean the directory before each build
        publicPath: "/mystery/"
    },
    resolve: {
        extensions: ['.js', '.jsx'], //automatically resolve extensions
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //match JS and JSX files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', //for JavaScript and JSX files
                },
            },
            {
                test: /\.scss$/, //match SCSS files
                use: [
                    MiniCssExtractPlugin.loader, //extract CSS into files
                    'css-loader', //turn CSS into CommonJS
                    'sass-loader', //compile SASS to CSS
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|mp4|webm|ogg|mov|mp3|wav|flac|aac)$/, //handle image, video and audio files
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name].[hash][ext]', //output path for all assets (images, videos, audios)
                },               
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/main.jpg'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ],
    devServer: {
        static: './build', //serve files from "build"
        port: 3000, //development server port
        open: true,
        hot: true //changes are applied without page reload
    },
    //mode: 'development'
    mode: 'production',
};