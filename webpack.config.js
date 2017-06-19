var path = require('path');
var webpack = require('webpack');

module.exports = {
    cache:true,
    devtool: 'source-map',

    entry: './meme/main.js',
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: 'frontend.js'
    },
    externals: {
        'vue': 'Vue'
    },
    module: {
        loaders: [
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     query: {
            //         presets: ['es2015']
            //     }
            // },
            {
                test:/\.vue$/,
                exclude: /node_modules/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        js:'babel-loader',
                        css:'style-loader!css-loader'
                    }
                }
            }
        ]
    },
    stats: {
        colors: true
    }
}