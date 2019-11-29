const path = require('path');
module.exports = {
    mode: "development",
    entry: [path.resolve(__dirname, 'app/login.js'), path.resolve(__dirname, 'app/sample.js')],
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "app-bundle.js"
    },
    watch: true,
    module: {
        rules: [
          {
            test: /\.js$/,
            enforce: 'pre',
            exclude: /node_modules/,
            use: {
              loader: `jshint-loader`
            }
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
              }
          }
        ]
    }
}