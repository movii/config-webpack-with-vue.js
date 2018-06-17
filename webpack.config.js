let path = require('path');
let VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  devServer: {
    publicPath: '/dist/',
    contentBase: './',
    compress: true,
    port: 1333,
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};