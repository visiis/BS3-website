/**
 * Created by 第九界限 on 2017/6/21.
 */
const webpack=require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 设置入口文件
    entry: {
        index :'./src/js/index.js',
        about :'./src/js/about.js'
    },

    // 设置出口文件
    output: {
        // path: __dirname,index
        // filename: "./src/bundle.js"
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    // 设置捆绑模型
    module: {
        loaders: [
            // { test: /\.css$/, loadeindexr: 'style!css' },
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    // 设置插件辅助
    plugins:[
        new webpack.BannerPlugin('打包测试文件'),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({filename:'index.html', template: './src/index.html', chunks:['index']}),
        new HtmlWebpackPlugin({filename:'about.html', template: './src/about.html', chunks:['about']})
        // new HtmlWebpackPlugin({template: './src/about.html'})
]
    // 可以实现实时监听，监听代码webpack --progress --colors --watch
};