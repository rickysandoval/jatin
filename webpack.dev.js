const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: [
            'webpack-dev-server/client?://localhost:8080',
            './src/index.js'
        ],
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/build/'
    },
    devServer: {
        proxy: [{
            "*": {
                target: 'http://localhost:8888',
                changeOrigin: true,
            }
        }]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.php',
            chunks: ['index'],
            filename: 'index.php'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader",
            ]
        }]
    }
}