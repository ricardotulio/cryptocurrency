'use strict'

const path = require('path')
const webpack = require('webpack')
const glob = require('glob')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const paths = require('./paths')

module.exports = {
  entry: {
    index: glob.sync('./src/**/*.js'),
  },
  output: {
    filename: 'js/[hash].bundle.min.js',
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/[hash].bundle.min.css'),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.optimize.UglifyJsPlugin({
      uglifyJsOptions: {
        output: {
          comments: false,
          beautify: false,
        },
        compress: true,
        warning: false,
      },
      sourceMap: true,
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
      },
      canPrint: true,
    }),
  ],
  devtool: 'source-map',
}
