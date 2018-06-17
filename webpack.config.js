let path = require('path');
let VueLoaderPlugin = require('vue-loader/lib/plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')

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

if ( process.env.NODE_ENV === 'production' ) {
   module.exports.plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        sourceMap: true
      }
    })
   );
 }