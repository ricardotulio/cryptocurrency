'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../config/webpack.config.dev.js')
const paths = require('../config/paths')

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, config.devServer)

server.listen(config.devServer.port)
