const path = require('path')
const webpack = require('webpack')
const glob = require('glob')

module.exports = {
  entry: {
    app: glob.sync('./src/**/*.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist', 'assets'),
    publicPath: '/assets',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['env'] },
        }],
      },
    ],
  },
};
