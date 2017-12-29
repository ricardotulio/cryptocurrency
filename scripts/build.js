'use strict'

const fs = require('fs-extra')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../config/webpack.config.prod.js')
const paths = require('../config/paths')

fs.emptyDirSync(paths.appBuild)

const compiler = webpack(config)

compiler.run((err, stats) => {})
