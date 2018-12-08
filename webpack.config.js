let path = require('path')
let VueLoaderPlugin = require('vue-loader/lib/plugin')
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')
let webpack = require('webpack')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production' ? true : false

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: ['./src/js/app.js', './css/main.css', './scss/main.scss']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:1333/dist/'
  },
  resolve: {
    alias: {
      JS_ROOT: path.resolve(__dirname, 'src/'),
      CSS_ROOT: path.resolve(__dirname, 'css/'),
      SCSS_ROOT: path.resolve(__dirname, 'scss/')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: isProd
          ? [MiniCssExtractPlugin.loader, 'css-loader']
          : [
              {
                loader: 'style-loader',
                options: { sourceMap: true }
              },
              'css-loader'
            ]
      },
      {
        test: /\.scss$/,
        use: [
          isProd
            ? MiniCssExtractPlugin.loader
            : {
                loader: 'style-loader',
                options: { sourceMap: true }
              },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules'],
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    publicPath: '/dist/',
    contentBase: './',
    compress: false,
    port: 1333,
    hot: true,
    hotOnly: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        sourceMap: true
      }
    })
  )

  module.exports.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  )
}
