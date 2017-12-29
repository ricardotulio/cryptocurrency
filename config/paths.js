'use strict'

const fs = require('fs')
const path = require('path')

const appDirectory = fs.realpathSync(process.cwd())
const resolvePath = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  appPublic: resolvePath('public'),
  appHtml: resolvePath('src/index.html'),
  appBuild: resolvePath('public'),
  publicPath: '/',
}
