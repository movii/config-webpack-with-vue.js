let path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
     'vue$': 'vue/dist/vue.esm.js'
     }
  },
  devServer: {
    publicPath: '/dist/',
    contentBase: './',
    compress: true,
    port: 1333,
  }
};