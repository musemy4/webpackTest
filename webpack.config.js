const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/js/main.js', './src/sass/main.scss'],
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: 'bundle.js',
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/style.css'})
    ],
    module: {
        rules:[
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map'
}