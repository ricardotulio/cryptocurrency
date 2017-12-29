'use strict'

const path = require('path')
const webpack = require('webpack')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')
const paths = require('./paths')

module.exports = {
  entry: {
    index: glob.sync('./src/**/*.js'),
  },
  output: {
    filename: 'js/[hash].bundle.js',
    path: paths.appBuild,
    publicPath: paths.publicPath,
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
  plugins: [
    new InterpolateHtmlPlugin({
      PUBLIC_PATH: 'https://google.com.br/',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: paths.appPublic,
    compress: true,
    hot: true,
    https: false,
    noInfo: true,
    host: "0.0.0.0",
    port: 8080,
  },
}
