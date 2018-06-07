var path = require('path');

module.exports = {
    entry: './src/scripts.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true,
    devtool: "source-map"
}