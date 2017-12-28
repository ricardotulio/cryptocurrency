const path = require('path')
const webpack = require('webpack')
const glob = require('glob')

module.exports = {
  entry: {
    index: glob.sync('./src/**/*.js'),
  },
  output: {
    filename: './js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/public',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/i,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['env'] },
        }],
      },
      {
        test: /\.(sass|scss)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
}
