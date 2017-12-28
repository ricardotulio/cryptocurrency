const path = require('path')
const webpack = require('webpack')
const glob = require('glob')

module.exports = {
  entry: {
    index: glob.sync('./src/**/*.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist', 'public'),
    publicPath: '/public',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
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
				test: /\.scss$/i,
				loaders: [ 'style-loader', 'css-loader', 'sass-loader' ],
			},
    ],
  },
};
