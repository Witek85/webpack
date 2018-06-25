var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/scripts.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true,
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        minimize: true,
                        url: false
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [require('autoprefixer')]
                    }
                  } ]
              }
        ]
    }, 
    plugins: [
        new ExtractTextPlugin('css/style.css'),
        
    ]
}